import content from "./processedContent.json";
import PageShell from "@/components/PageShell";

export const metadata = {
  title: "DigiKampaign | Industries",
  description: "Industries we serve — from luxury brands to e-commerce.",
};

export default function IndustriesPage() {
  return <PageShell content={content} />;
}
