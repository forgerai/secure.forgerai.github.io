import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Forger",
  description:
    "Reimagining Reporing - Read Reports Easier For Free or Create Reports Automatically and Drastically Simplify Your Reporting Flow",
  keywords: [
    "AI",
    "Report Generation",
    "Automate Reporting",
    "Create Dashboards",
    "Automatic Dashboard",
    "Reporting",
    "Read Reports",
  ],
  openGraph: {
    title: "Forger",
    description:
      "Reimagining Reporing - Read Reports Easier For Free or Create Reports Automatically and Drastically Simplify Your Reporting Flow",
    url: "https://forger.ai",
    siteName: "Forger",
    type: "website",
    images: [
      {
        url: "https://forger.ai/assets/logo-512.png",
        width: 512,
        height: 512,
        alt: "forger.ai logo",
      },
    ],
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-400`}
      >
        {children}
        <script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "1168aaa373954226ba249e37b3940cf3"}'
        ></script>
      </body>
    </html>
  );
}
