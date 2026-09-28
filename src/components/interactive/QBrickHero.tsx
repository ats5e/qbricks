"use client";

import { useEffect, useRef } from "react";
import type * as T3 from "three";

/*
 * QBricks hero: the Q laid in bricks, after the brand film's cold open.
 *
 * The mark is built like masonry: two staggered courses of bricks around the
 * ring, so it has the logo's weight, and a tail of bricks following the
 * logo's own swash (traced from the Q outline used in the brand film).
 * Raw charcoal bricks fly in, accelerating, and lock into place, turning the
 * logo red (#ff1e27) as they are governed. Once the Q is whole, one brick at
 * a time lights, is released, and a fresh raw brick streams in to replace it.
 * The mark tilts gently towards the pointer.
 *
 * Vanilla three.js, client only. DPR capped at 2, paused off-screen or when
 * the tab is hidden, and a single finished frame for reduced motion.
 */

type Props = { still: boolean };

const RED = 0xff1e27; // the logo red, sampled from qbricks-logo.png
const RAW = 0x26262b;
const FLY = 0.3; // seconds each brick spends flying in
const BUILD = 1.5; // seconds to lay the whole Q
const SCALE = 0.85; // overall size of the mark in the hero

// brick sizes: length along the course, thickness across it, depth
const RING_BRICK = [0.74, 0.4, 0.5] as const;
const TAIL_BRICK = [0.5, 0.4, 0.5] as const; // shorter, so two courses follow the swash cleanly
const COURSES = [
  { r: 2.02, n: 16, offset: 0 },
  { r: 2.46, n: 19, offset: 0.5 },
];

// tail centreline, mapped from the Q outline in the brand film (video/src/three/qPath.ts):
// ring centre at the origin, outer ring edge at 2.66; a wave that meets the ring, dips, then lifts
const TAIL = [
  [-1.35, -3.3], // rounded start, below-left
  [-0.7, -3.06],
  [0, -2.98], // joins the underside of the ring
  [0.6, -3.22],
  [1.15, -3.56], // the dip
  [1.9, -3.5],
  [2.6, -3.18],
  [2.98, -2.94], // lifts at the end, past the ring's right edge
] as const;

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
      renderer.shadowMap.type = THREE.VSMShadowMap;
      renderer.domElement.style.width = "100%";
      renderer.domElement.style.height = "100%";
      renderer.domElement.style.display = "block";
      el.appendChild(renderer.domElement);

      const scene = new THREE.Scene();
      const pmrem = new THREE.PMREMGenerator(renderer);
      scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.02).texture;
      scene.environmentIntensity = 0.55;

      const camera = new THREE.PerspectiveCamera(28, 1, 0.1, 100);
      camera.position.set(0.8, 1.1, 17);
      camera.lookAt(0, -0.35, 0);

      scene.add(new THREE.HemisphereLight(0xffffff, 0xf0f0f2, 0.25));
      const key = new THREE.DirectionalLight(0xffffff, 1.35);
      key.position.set(-3, 12, 7); // high, so the shadow falls under the mark
      key.castShadow = true;
      key.shadow.mapSize.set(1024, 1024);
      key.shadow.camera.left = -7;
      key.shadow.camera.right = 7;
      key.shadow.camera.top = 7;
      key.shadow.camera.bottom = -7;
      key.shadow.radius = 14;
      key.shadow.blurSamples = 20;
      key.shadow.bias = -0.0004;
      scene.add(key);
      const rim = new THREE.DirectionalLight(0xffffff, 0.6);
      rim.position.set(6, 3, -4);
      scene.add(rim);
      const glow = new THREE.PointLight(RED, 0, 10, 2);
      glow.position.set(0, 0, 2.2);
      scene.add(glow);

      const floor = new THREE.Mesh(new THREE.PlaneGeometry(40, 40), new THREE.ShadowMaterial({ opacity: 0.09 }));
      floor.rotation.x = -Math.PI / 2;
      floor.position.y = 0.3 - 4.65 * SCALE; // just under the scaled mark
      floor.receiveShadow = true;
      scene.add(floor);

      const group = new THREE.Group();
      group.scale.setScalar(SCALE);
      scene.add(group);

      const ringGeo = new RoundedBoxGeometry(...RING_BRICK, 5, 0.075);
      const tailGeo = new RoundedBoxGeometry(...TAIL_BRICK, 5, 0.075);

      // slots: each brick's resting place, orientation and the direction it arrives from
      type Slot = { p: T3.Vector3; rz: number; geo: T3.BufferGeometry; out: T3.Vector2; order: number };
      const slots: Slot[] = [];
      COURSES.forEach((c, ci) => {
        for (let k = 0; k < c.n; k++) {
          const u = (k + c.offset) / c.n; // clockwise from 12 o'clock
          const th = Math.PI / 2 - u * Math.PI * 2;
          slots.push({
            p: new THREE.Vector3(Math.cos(th) * c.r, Math.sin(th) * c.r, ci === 0 ? 0.02 : 0),
            rz: th + Math.PI / 2,
            geo: ringGeo,
            out: new THREE.Vector2(Math.cos(th), Math.sin(th)),
            order: u,
          });
        }
      });
      const tail = new THREE.CatmullRomCurve3(TAIL.map(([x, y]) => new THREE.Vector3(x, y, 0.04)));
      // two staggered courses along the tail, offset either side of the centreline
      [
        { n: 9, start: 0.5, side: 0.215 },
        { n: 9, start: 0, side: -0.215 },
      ].forEach((c) => {
        for (let i = 0; i < c.n; i++) {
          const u = (i + c.start + 0.25) / 9.5;
          const p = tail.getPointAt(u);
          const d = tail.getTangentAt(u);
          p.add(new THREE.Vector3(-d.y * c.side, d.x * c.side, 0));
          slots.push({ p, rz: Math.atan2(d.y, d.x), geo: tailGeo, out: new THREE.Vector2(0.55, -0.85), order: 1 + u * 0.35 });
        }
      });
      slots.sort((a, b) => a.order - b.order);
      // accelerating arrivals: intervals shrink as the Q fills
      const arrivals = slots.map((_, i) => FLY + BUILD * Math.sqrt(i / (slots.length - 1)));
      const built = arrivals[arrivals.length - 1];

      const raw = new THREE.Color(RAW);
      const red = new THREE.Color(RED);
      const r = rng(20260928);

      type Brick = {
        mesh: T3.Mesh<T3.BufferGeometry, T3.MeshPhysicalMaterial>;
        slot: Slot;
        arrive: number;
        spin: T3.Vector3;
        from: T3.Vector3;
        leaving: number;
        leaveDir: T3.Vector3;
      };

      const makeMaterial = () =>
        new THREE.MeshPhysicalMaterial({
          color: raw.clone(),
          roughness: 0.3,
          metalness: 0,
          clearcoat: 1,
          clearcoatRoughness: 0.08,
          emissive: new THREE.Color(RED),
          emissiveIntensity: 0,
        });

      const bricks: Brick[] = [];
      const spawn = (slot: Slot, arrive: number, fromRight: boolean) => {
        const mesh = new THREE.Mesh(slot.geo, makeMaterial());
        mesh.castShadow = true;
        group.add(mesh);
        bricks.push({
          mesh,
          slot,
          arrive,
          spin: new THREE.Vector3((r() - 0.5) * 2.6, (r() - 0.5) * 3, (r() - 0.5) * 1.2),
          from: fromRight
            ? new THREE.Vector3(10 + r() * 3, (r() - 0.5) * 3, -2 - r() * 3)
            : new THREE.Vector3(slot.out.x * (7 + r() * 3), slot.out.y * (7 + r() * 3), -6 - r() * 3),
          leaving: -1,
          leaveDir: new THREE.Vector3(slot.out.x * 1.3 + 0.3, slot.out.y * 1.3 + 0.8, 2.6),
        });
      };
      slots.forEach((s, i) => spawn(s, arrivals[i], false));

      const BASE_GLOW = 0.16; // keeps shaded faces in the logo red rather than maroon

      const place = (b: Brick, t: number) => {
        const m = b.mesh;
        const mat = m.material;
        if (b.leaving >= 0) {
          const u = clamp01((t - b.leaving) / 1);
          const e = easeIn(u);
          m.position.set(b.slot.p.x + b.leaveDir.x * e * 3, b.slot.p.y + b.leaveDir.y * e * 3 + u, b.slot.p.z + b.leaveDir.z * e * 3);
          m.rotation.set(b.spin.x * e * 3, b.spin.y * e * 3, b.slot.rz + b.spin.z * e * 2);
          mat.emissiveIntensity = BASE_GLOW + 0.9 * Math.max(0, 1 - u * 1.6);
          mat.transparent = true;
          mat.opacity = 1 - easeIn(u);
          m.visible = u < 1;
          return u >= 1;
        }
        const u = clamp01((t - (b.arrive - FLY)) / FLY);
        m.visible = t >= b.arrive - FLY;
        const k = 1 - easeIn(u);
        m.position.set(b.slot.p.x + b.from.x * k, b.slot.p.y + b.from.y * k, b.slot.p.z + b.from.z * k);
        m.rotation.set(b.spin.x * k * 3, b.spin.y * k * 3, b.slot.rz + b.spin.z * k * 3);
        const lock = clamp01((t - b.arrive) / 0.25);
        mat.color.copy(raw).lerp(red, easeOut(lock));
        const flash = t >= b.arrive ? Math.max(0, 1 - (t - b.arrive) / 0.5) : 0;
        mat.emissiveIntensity = easeOut(lock) * BASE_GLOW + flash * 0.45;
        const settle = t >= b.arrive ? Math.sin(Math.min(1, (t - b.arrive) / 0.28) * Math.PI) * 0.05 : 0;
        m.scale.setScalar(1 + settle);
        return false;
      };

      let nextSwap = built + 1.4;
      const swap = (t: number) => {
        const live = bricks.filter((b) => b.leaving < 0 && t > b.arrive + 0.6);
        if (!live.length) return;
        const out = live[Math.floor(r() * live.length)];
        out.leaving = t;
        spawn(out.slot, t + 0.85, true);
      };

      const pointer = { x: 0, y: 0, tx: 0, ty: 0 };
      const onMove = (ev: PointerEvent) => {
        const rect = el.getBoundingClientRect();
        pointer.tx = clamp01((ev.clientX - rect.left) / rect.width) * 2 - 1;
        pointer.ty = clamp01((ev.clientY - rect.top) / rect.height) * 2 - 1;
      };
      window.addEventListener("pointermove", onMove);

      let portrait = false;
      const resize = () => {
        const w = el.clientWidth || 1;
        const h = el.clientHeight || 1;
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        portrait = w / h < 1;
        camera.position.z = portrait ? 17 / Math.max(0.6, w / h) : 17;
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
          nextSwap = t + 2.2 + r() * 1.3;
        }
        const whole = clamp01((t - built) / 0.8);
        glow.intensity = 5 * Math.max(0, 1 - Math.abs(t - built - 0.25) / 0.9);
        pointer.x += (pointer.tx - pointer.x) * Math.min(1, dt * 2.5);
        pointer.y += (pointer.ty - pointer.y) * Math.min(1, dt * 2.5);
        const idle = still ? 0 : Math.sin(t * 0.4) * 0.05;
        // turns from three-quarter to face the viewer as it completes
        group.rotation.y = -0.42 + whole * 0.3 + pointer.x * 0.14 + idle;
        group.rotation.x = 0.04 + pointer.y * 0.08;
        group.position.set(portrait ? -0.75 : -0.45, 0.3 + (still ? 0 : Math.sin(t * 0.7) * 0.05), 0);
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

      if (still) render(built + 2, 0.016);
      else start();

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
        bricks.forEach((b) => b.mesh.material.dispose());
        ringGeo.dispose();
        tailGeo.dispose();
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
