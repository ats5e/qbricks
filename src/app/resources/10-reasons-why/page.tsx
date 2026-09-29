import { VideoResourcePage } from "@/components/resources/VideoResourcePage";
import { QBricksText } from "@/components/ui/QBricksText";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "10 Reasons Why QBricks",
  description:
    "See how QBricks turns governed data into an AI-ready foundation, no pipelines, no runaway compute, delivered in open, portable formats.",
  path: "/resources/10-reasons-why",
  absolute: true,
});

export default function TenReasonsWhyPage() {
  return (
    <VideoResourcePage
      title={<>10 reasons why <QBricksText /></>}
      description={<>See how <QBricksText /> turns governed data into an AI-ready foundation, no pipelines, no runaway compute, delivered in open, portable formats.</>}
      playerSrc="https://player.mux.com/pBStRpuKR00m7Xe1neCepUPvoWhvtOJZhhGq8N5JCOqE?metadata-video-title=QBricks_10reasonswhy&video-title=QBricks_10reasonswhy"
      posterAlt="10 reasons why QBricks video cover"
      posterSrc="/assets/brand/poster-10-reasons.webp"
      videoTitle="10 reasons why QBricks"
    />
  );
}
