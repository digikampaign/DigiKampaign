import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FormHandler from "@/components/FormHandler";

export const metadata = {
  title: "404 - Page Not Found | DigiKampaign",
  description: "The page you are looking for does not exist or has been moved.",
};

export default function NotFound() {
  return (
    <div className="not-found-wrapper">
      <Navbar />

      <main className="not-found-content">
        <div className="not-found-glow-1" aria-hidden="true" />
        <div className="not-found-glow-2" aria-hidden="true" />

        <div className="not-found-badge">
          <span className="not-found-badge-dot" />
          <span>Error 404</span>
        </div>

        <h1 className="not-found-code">404</h1>

        <h2 className="not-found-title">Page Not Found</h2>

        <p className="not-found-description">
          The page you are looking for might have been removed, had its name changed,
          or is temporarily unavailable. Let&apos;s get you back to scaling your digital footprint.
        </p>

        <div className="not-found-actions">
          <Link href="/" className="not-found-btn-primary">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
            Back to Home
          </Link>
          <Link href="/services" className="not-found-btn-secondary">
            Explore Services
          </Link>
        </div>

        <div className="not-found-links-container">
          <p className="not-found-links-title">Quick Navigation</p>
          <div className="not-found-links-grid">
            <Link href="/services" className="not-found-link-card">
              Services
            </Link>
            <Link href="/portfolio" className="not-found-link-card">
              Portfolio
            </Link>
            <Link href="/process" className="not-found-link-card">
              Process
            </Link>
            <Link href="/about" className="not-found-link-card">
              About
            </Link>
            <Link href="/insights" className="not-found-link-card">
              Insights
            </Link>
            <Link href="/contact" className="not-found-link-card">
              Contact
            </Link>
          </div>
        </div>
      </main>

      <Footer />
      <FormHandler />
    </div>
  );
}
