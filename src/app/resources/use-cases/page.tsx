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
      playerSrc="https://player.mux.com/K02kkR02VjtrgIRgaEl7TT7dayfP5z6iCLyhzJNgHXCFI?metadata-video-title=QBricks_10reasonswhy&video-title=QBricks_10reasonswhy"
      videoTitle="QBricks use cases"
    />
  );
}
