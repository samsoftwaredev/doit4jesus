import type { Metadata } from "next";

import { AnalyticsProvider } from "@/components/analytics/AnalyticsProvider";
import { NotFoundPageContent } from "@/components/pages/NotFoundPageContent";
import { siteFont } from "@/theme/font";

import "./globals.css";

export const metadata: Metadata = {
  title: "Page Not Found | DoIt4Jesus",
  description: "This page does not exist or may have moved.",
};

/** Renders an inviting lost-sheep recovery screen for every unmatched route. */
export default function GlobalNotFound() {
  return (
    <html lang="en" className={siteFont.variable}>
      <body className="not-found-body">
        <AnalyticsProvider>
          <div className="not-found-atmosphere" aria-hidden="true" />
          <NotFoundPageContent />
          <div className="not-found-foreground-dust" aria-hidden="true" />
        </AnalyticsProvider>
      </body>
    </html>
  );
}
