import content from "./processedContent.json";
import PageShell from "@/components/PageShell";

export const metadata = {
  title: "DigiKampaign | Contact",
  description: "Get in touch with DigiKampaign to start your project.",
};

export default function ContactPage() {
  return <PageShell content={content} />;
}
