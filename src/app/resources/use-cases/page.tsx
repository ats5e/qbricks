import { VideoResourcePage } from "@/components/resources/VideoResourcePage";
import { QBricksText } from "@/components/ui/QBricksText";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "QBricks Use Cases",
  description:
    "See how governed, fully lineaged data products support financial crime, customer intelligence and risk workflows.",
  path: "/resources/use-cases",
  absolute: true,
});

export default function UseCasesVideoPage() {
  return (
    <VideoResourcePage
      title={<><QBricksText /> use cases in action</>}
      description="See how governed, fully lineaged data products support financial crime, customer intelligence and risk workflows."
      playerSrc="https://player.mux.com/7Dktyh8UTWs8h1ot86tVc2nomWrLZO028JaAM6s6suNg?metadata-video-title=QBricks+Use+Cases&video-title=QBricks+Use+Cases"
      posterAlt="QBricks use cases in action video cover"
      posterSrc="/assets/brand/poster-use-cases.webp"
      videoTitle="QBricks use cases"
    />
  );
}
