import content from "./processedContent.json";
import PageShell from "@/components/PageShell";

export const metadata = {
  title: "DigiKampaign | Process",
  description: "Our proven process for delivering growth and creative craft.",
};

export default function ProcessPage() {
  return <PageShell content={content} />;
}
