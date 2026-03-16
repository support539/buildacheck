import type { Metadata } from "next";
import { Libre_Baskerville, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const libreBaskerville = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-libre-baskerville",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "BuildaCheck — Builder-Grade Property Inspections",
    template: "%s | BuildaCheck",
  },
  description:
    "Builder-grade property inspections backed by construction expertise, standards-aligned reporting, and evidence-driven defect analysis. Melbourne & Greater Victoria.",
  keywords: [
    "building inspection",
    "pre-purchase inspection",
    "property inspection Melbourne",
    "PCI inspection",
    "warranty inspection",
    "dilapidation report",
    "expert witness building",
    "BuildaCheck",
  ],
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: "BuildaCheck",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU">
      <body
        className={`${libreBaskerville.variable} ${outfit.variable} font-body antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
