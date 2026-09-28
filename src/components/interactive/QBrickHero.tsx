"use client";

import { useEffect, useRef } from "react";
import type * as T3 from "three";
import type { RoundedBoxGeometry as RoundedBoxGeometryT } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";

/*
 * QBricks hero: the Q built from bricks, after the brand film's cold open.
 *
 * Raw (charcoal) bricks fly in, accelerating, and lock into the QBricks Q,
 * a ring of 16 and a three-brick tail. Each brick turns QBricks red as it
 * locks: governed on arrival. Once the Q is whole, it keeps streaming: every
 * couple of seconds one brick lights, is released, and a fresh raw brick
 * streams in from the right to take its place. The mark tilts gently towards
 * the pointer.
 *
 * Vanilla three.js, loaded on the client only. DPR capped at 2, paused when
 * off-screen or the tab is hidden, and a single finished frame for reduced
 * motion and automated agents.
 */

type Props = { still: boolean };

const RING_N = 16;
const R = 2.25;
const ARRIVALS = [8, 19, 29, 38, 46, 53, 59, 64, 69, 73, 77, 80, 83, 86, 88, 90, 94, 97, 100].map((f) => f / 32 + 0.35);
const FLY = 0.42; // seconds each brick spends flying in
const BASE_GLOW = 0.5; // keeps shadowed faces in the logo red rather than going maroon

const RED = 0xff1e27; // the logo red, sampled from qbricks-logo.png
const RAW = 0x2a2a30;

function rng(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const easeIn = (t: number) => t * t * t;
const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
const clamp01 = (t: number) => Math.min(1, Math.max(0, t));

export default function QBrickHero({ still }: Props) {
  const host = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = host.current;
    if (!el) return;
    let disposed = false;
    let cleanup = () => {};

    (async () => {
      const THREE = await import("three");
      const { RoundedBoxGeometry } = await import("three/examples/jsm/geometries/RoundedBoxGeometry.js");
      const { RoomEnvironment } = await import("three/examples/jsm/environments/RoomEnvironment.js");
      if (disposed) return;

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.toneMapping = THREE.NoToneMapping; // keep the logo red exact
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      renderer.domElement.style.width = "100%";
      renderer.domElement.style.height = "100%";
      renderer.domElement.style.display = "block";
      el.appendChild(renderer.domElement);

      const scene = new THREE.Scene();
      const pmrem = new THREE.PMREMGenerator(renderer);
      scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
      scene.environmentIntensity = 0.12;

      const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 100);
      camera.position.set(1.6, 1.4, 15.5);
      camera.lookAt(0, 0, 0);

      scene.add(new THREE.HemisphereLight(0xffffff, 0xe8e8ec, 0.25));
      const key = new THREE.DirectionalLight(0xffffff, 1.7);
      key.position.set(-6, 9, 8);
      key.castShadow = true;
      key.shadow.mapSize.set(1024, 1024);
      key.shadow.camera.left = -6;
      key.shadow.camera.right = 6;
      key.shadow.camera.top = 6;
      key.shadow.camera.bottom = -6;
      key.shadow.radius = 6;
      scene.add(key);
      const glow = new THREE.PointLight(RED, 0, 9, 2);
      glow.position.set(0, 0.4, 1.5);
      scene.add(glow);

      // soft contact shadow on the white page
      const floor = new THREE.Mesh(new THREE.PlaneGeometry(40, 40), new THREE.ShadowMaterial({ opacity: 0.12 }));
      floor.rotation.x = -Math.PI / 2;
      floor.position.y = -3.35;
      floor.receiveShadow = true;
      scene.add(floor);

      const group = new THREE.Group();
      group.position.set(-0.55, 0.35, 0);
      scene.add(group);

      // the Q: 16 ring bricks clockwise from 12 o'clock, then the tail sweeping down and right
      type Slot = { p: T3.Vector3; rz: number; s: number; out: T3.Vector2 };
      const slots: Slot[] = [];
      for (let k = 0; k < RING_N; k++) {
        const th = Math.PI / 2 - (k / RING_N) * Math.PI * 2;
        slots.push({
          p: new THREE.Vector3(Math.cos(th) * R, Math.sin(th) * R, 0),
          rz: th + Math.PI / 2,
          s: 0.7,
          out: new THREE.Vector2(Math.cos(th), Math.sin(th)),
        });
      }
      (
        [
          [0.3, -R - 0.55, -0.38],
          [1.25, -R - 0.78, 0.05],
          [2.15, -R - 0.55, 0.5],
        ] as const
      ).forEach(([x, y, rz]) => slots.push({ p: new THREE.Vector3(x, y, 0.15), rz, s: 0.66, out: new THREE.Vector2(0.6, -0.8) }));

      const geo = new RoundedBoxGeometry(1, 1, 1, 4, 0.1);
      const raw = new THREE.Color(RAW);
      const red = new THREE.Color(RED);
      const r = rng(20260928);

      type Brick = {
        mesh: T3.Mesh<RoundedBoxGeometryT, T3.MeshPhysicalMaterial>;
        slot: Slot;
        arrive: number; // time it locks in
        spin: T3.Vector3;
        from: T3.Vector3; // start offset when flying in
        leaving: number; // time it was released, or -1
        leaveDir: T3.Vector3;
      };

      const makeMaterial = () =>
        new THREE.MeshPhysicalMaterial({ color: raw.clone(), roughness: 0.58, metalness: 0, clearcoat: 0.1, clearcoatRoughness: 0.45, emissive: new THREE.Color(RED), emissiveIntensity: 0 });

      const bricks: Brick[] = [];
      const spawn = (slot: Slot, arrive: number, fromRight: boolean): Brick => {
        const mesh = new THREE.Mesh(geo, makeMaterial());
        mesh.castShadow = true;
        mesh.scale.setScalar(slot.s);
        group.add(mesh);
        const from = fromRight
          ? new THREE.Vector3(9 + r() * 3, (r() - 0.5) * 3, -2 - r() * 3)
          : new THREE.Vector3(slot.out.x * 9, slot.out.y * 9, -7);
        const b: Brick = {
          mesh,
          slot,
          arrive,
          spin: new THREE.Vector3((r() - 0.5) * 2.4, (r() - 0.5) * 2.8, 0),
          from,
          leaving: -1,
          leaveDir: new THREE.Vector3(slot.out.x * 1.2 + 0.4, slot.out.y * 1.2 + 0.6, 2.5),
        };
        bricks.push(b);
        return b;
      };
      slots.forEach((s, i) => spawn(s, ARRIVALS[i], false));
      const built = ARRIVALS[ARRIVALS.length - 1];

      const place = (b: Brick, t: number) => {
        const m = b.mesh;
        const mat = m.material;
        if (b.leaving >= 0) {
          // released: lift, spin out towards the viewer and fade
          const u = clamp01((t - b.leaving) / 0.9);
          const e = easeIn(u);
          m.position.set(b.slot.p.x + b.leaveDir.x * e * 3, b.slot.p.y + b.leaveDir.y * e * 3 + 1.2 * u, b.slot.p.z + b.leaveDir.z * e * 3);
          m.rotation.set(b.spin.x * e * 3, b.spin.y * e * 3, b.slot.rz);
          mat.emissiveIntensity = 0.9 * (1 - u);
          mat.transparent = true;
          mat.opacity = 1 - u;
          m.visible = u < 1;
          return u >= 1;
        }
        const u = clamp01((t - (b.arrive - FLY)) / FLY);
        m.visible = t >= b.arrive - FLY;
        const k = 1 - easeIn(u);
        m.position.set(b.slot.p.x + b.from.x * k, b.slot.p.y + b.from.y * k, b.slot.p.z + b.from.z * k);
        m.rotation.set(b.spin.x * k * 3, b.spin.y * k * 3, b.slot.rz + b.spin.x * k);
        // turns red as it locks, with a short flash and settle
        const lock = clamp01((t - b.arrive) / 0.35);
        mat.color.copy(raw).lerp(red, easeOut(lock));
        const flash = t >= b.arrive ? Math.max(0, 1 - (t - b.arrive) / 0.45) : 0;
        mat.emissiveIntensity = easeOut(lock) * BASE_GLOW + flash * 0.6;
        const bounce = t >= b.arrive ? Math.sin(Math.min(1, (t - b.arrive) / 0.3) * Math.PI) * 0.08 : 0;
        m.scale.setScalar(b.slot.s * (1 + bounce));
        return false;
      };

      // streaming: after the Q is built, release one brick and stream in a replacement
      let nextSwap = built + 1.6;
      const swap = (t: number) => {
        const live = bricks.filter((b) => b.leaving < 0 && t > b.arrive + 0.5);
        if (!live.length) return;
        const out = live[Math.floor(r() * live.length)];
        out.leaving = t;
        spawn(out.slot, t + 0.75, true);
      };

      const pointer = { x: 0, y: 0, tx: 0, ty: 0 };
      const onMove = (ev: PointerEvent) => {
        const rect = el.getBoundingClientRect();
        pointer.tx = ((ev.clientX - rect.left) / rect.width - 0.5) * 2;
        pointer.ty = ((ev.clientY - rect.top) / rect.height - 0.5) * 2;
      };
      const onLeave = () => {
        pointer.tx = 0;
        pointer.ty = 0;
      };
      window.addEventListener("pointermove", onMove);
      el.addEventListener("pointerleave", onLeave);

      const resize = () => {
        const w = el.clientWidth || 1;
        const h = el.clientHeight || 1;
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        // keep the whole Q in frame on narrow containers
        camera.position.z = w / h < 1 ? 15.5 / Math.max(0.62, w / h) : 15.5;
        group.position.x = w / h < 1 ? -0.9 : -0.55; // the tail pulls the Q right; recentre in portrait
        camera.updateProjectionMatrix();
      };
      resize();
      const ro = new ResizeObserver(resize);
      ro.observe(el);

      let clock = 0;
      let last = performance.now();
      let raf = 0;
      let running = false;

      const render = (t: number, dt: number) => {
        for (let i = bricks.length - 1; i >= 0; i--) {
          if (place(bricks[i], t)) {
            group.remove(bricks[i].mesh);
            bricks[i].mesh.material.dispose();
            bricks.splice(i, 1);
          }
        }
        if (!still && t > nextSwap) {
          swap(t);
          nextSwap = t + 1.9 + r() * 1.2;
        }
        const whole = clamp01((t - built) / 0.6);
        glow.intensity = 6 * Math.max(0, 1 - Math.abs(t - built - 0.2) / 0.8);
        pointer.x += (pointer.tx - pointer.x) * Math.min(1, dt * 3);
        pointer.y += (pointer.ty - pointer.y) * Math.min(1, dt * 3);
        const idle = still ? 0 : Math.sin(t * 0.45) * 0.06;
        group.rotation.y = -0.32 + whole * 0.22 + pointer.x * 0.18 + idle;
        group.rotation.x = 0.06 + pointer.y * 0.1;
        group.position.y = 0.35 + (still ? 0 : Math.sin(t * 0.8) * 0.06);
        floor.position.x = group.position.x;
        renderer.render(scene, camera);
      };

      const frame = (now: number) => {
        const dt = Math.min(0.05, (now - last) / 1000);
        last = now;
        clock += dt;
        render(clock, dt);
        raf = requestAnimationFrame(frame);
      };
      const start = () => {
        if (running || still) return;
        running = true;
        last = performance.now();
        raf = requestAnimationFrame(frame);
      };
      const stop = () => {
        running = false;
        cancelAnimationFrame(raf);
      };

      if (still) {
        render(built + 2, 0.016); // the finished Q
      } else {
        start();
      }

      const io = new IntersectionObserver(([entry]) => (entry.isIntersecting ? start() : stop()));
      io.observe(el);
      const onVis = () => (document.hidden ? stop() : start());
      document.addEventListener("visibilitychange", onVis);

      cleanup = () => {
        stop();
        io.disconnect();
        ro.disconnect();
        document.removeEventListener("visibilitychange", onVis);
        window.removeEventListener("pointermove", onMove);
        el.removeEventListener("pointerleave", onLeave);
        bricks.forEach((b) => b.mesh.material.dispose());
        geo.dispose();
        pmrem.dispose();
        renderer.dispose();
        renderer.domElement.remove();
      };
    })();

    return () => {
      disposed = true;
      cleanup();
    };
  }, [still]);

  return <div ref={host} aria-hidden className="absolute inset-0" />;
}
