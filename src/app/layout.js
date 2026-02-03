import "./globals.css";
import { Sora, Plus_Jakarta_Sans } from "next/font/google";

/* -------------------------------
   Fonts
-------------------------------- */

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

/* -------------------------------
   Metadata (SEO + Favicon)
-------------------------------- */

export const metadata = {
  metadataBase: new URL("https://vibescript.cloud"),

  title: "VibeScript – Digital Solutions Studio",
  description:
    "VibeScript builds modern, scalable digital solutions for startups and businesses.",

  keywords: [
    "web development",
    "next.js",
    "react",
    "full stack",
    "devops",
    "saas",
    "website agency",
  ],

  alternates: {
    canonical: "https://vibescript.cloud",
  },

  twitter: {
    card: "summary_large_image",
    title: "VibeScript – Digital Solutions Studio",
    description:
      "Modern web platforms, scalable systems, and premium digital experiences.",
    images: ["/logo.png"],
  },

  authors: [{ name: "VibeScript Team" }],

  /* ✅ FAVICONS (from /public root) */
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },

  manifest: "/site.webmanifest",

  openGraph: {
    title: "VibeScript – Digital Solutions Studio",
    description:
      "Modern web platforms, scalable systems, and premium digital experiences.",
    url: "https://vibescript.cloud",
    siteName: "VibeScript",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "VibeScript Digital Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

/* -------------------------------
   Root Layout
-------------------------------- */

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sora.variable} ${jakarta.variable}`}>
      <body>
        {/* Global fixed background */}
        <div id="global-bg" aria-hidden="true" />

        {/* App content */}
        <main id="app-content">{children}</main>
      </body>
    </html>
  );
}
