import type { Metadata } from "next";

import { VideoResourcePage } from "@/components/resources/VideoResourcePage";
import { QBricksText } from "@/components/ui/QBricksText";

export const metadata: Metadata = {
  title: "QBricks Use Cases | Resources",
  description: "See how governed, fully lineaged data products support financial crime, customer intelligence and risk workflows.",
};

export default function UseCasesVideoPage() {
  return (
    <VideoResourcePage
      title={<><QBricksText /> use cases in action</>}
      description="See how governed, fully lineaged data products support financial crime, customer intelligence and risk workflows."
      playerSrc="https://player.mux.com/7Dktyh8UTWs8h1ot86tVc2nomWrLZO028JaAM6s6suNg?metadata-video-title=QBricks+Use+Cases&video-title=QBricks+Use+Cases"
      videoTitle="QBricks use cases"
    />
  );
}
