import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "./Components/ClientLayout";

export const metadata: Metadata = {
  title: "Website Components  UI & Wordpress/Elementor Templates - Web Components",
  description:
    "Premium web‑component UI sections and Wordpress/Elementor templates for modern websites",
  keywords: [
    "web components",
    "UI sections",
    "Wordpress/Elementor templates",
    "Free Elementor templates",
    "Wordpress templates",
    "Free Wordpress templates",
    "web component templates",
    "custom elements UI",
    "design system components",
  ].join(", "),
  authors: [{ name: "Webby", url: "https://websitecomponents.in" }],
  openGraph: {
    title: "Web‑Component UI & Wordpress/Elementor Templates",
    description:
      "Premium web‑component UI sections and Wordpress/Elementor templates for modern websites",
    url: "https://websitecomponents.in",
    siteName: "Website Components",
    type: "website",
    images: [
      {
        url: "https://websitecomponents.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "Preview of UI components & Wordpress/Elementor templates",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web‑Component UI & Wordpress/Elementor Templates",
    description:
      "Premium web‑component UI sections and Wordpress/Elementor templates for modern websites",
    images: ["https://websitecomponents.in/twitter-card.png"],
    site: "@YourTwitterHandle",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "YourSiteName",
    url: "https://websitecomponents.in",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://websitecomponents.in/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
    description:
      "Premium web‑component UI sections and Wordpress/Elementor templates for modern websites.",
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`antialiased h-full`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
