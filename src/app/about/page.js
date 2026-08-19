import content from "./processedContent.json";
import PageShell from "@/components/PageShell";

export const metadata = {
  title: "DigiKampaign | About",
  description: "Learn about the DigiKampaign team and our philosophy.",
};

export default function AboutPage() {
  return <PageShell content={content} />;
}
