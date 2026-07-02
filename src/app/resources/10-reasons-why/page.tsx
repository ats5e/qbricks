import type { Metadata } from "next";

import { VideoResourcePage } from "@/components/resources/VideoResourcePage";
import { QBricksText } from "@/components/ui/QBricksText";

export const metadata: Metadata = {
  title: "10 Reasons Why QBricks | Resources",
  description: "See how QBricks turns governed data into an A.I.-ready foundation without pipelines, lock-in or runaway compute.",
};

export default function TenReasonsWhyPage() {
  return (
    <VideoResourcePage
      title={<>10 reasons why <QBricksText /></>}
      description={<>See how <QBricksText /> turns governed data into an A.I.-ready foundation without pipelines, lock-in or runaway compute.</>}
      playerSrc="https://player.mux.com/pBStRpuKR00m7Xe1neCepUPvoWhvtOJZhhGq8N5JCOqE?metadata-video-title=QBricks_10reasonswhy&video-title=QBricks_10reasonswhy"
      videoTitle="10 reasons why QBricks"
    />
  );
}
