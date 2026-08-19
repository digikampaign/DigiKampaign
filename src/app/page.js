import content from "./processedContent.json";
import PageShell from "@/components/PageShell";

export const metadata = {
  title: "DigiKampaign | Home",
  description:
    "DigiKampaign — We Build Brands That Grow, Look Premium, and Never Blend In.",
};

export default function HomePage() {
  return <PageShell content={content} />;
}
