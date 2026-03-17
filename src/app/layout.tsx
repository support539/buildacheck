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
    images: [{ url: "/images/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "BuildaCheck — Builder-Grade Property Inspections",
    description:
      "Builder-grade property inspections backed by construction expertise, standards-aligned reporting, and evidence-driven defect analysis. Melbourne & Greater Victoria.",
    images: ["/images/og-image.png"],
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
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["LocalBusiness", "ProfessionalService"],
              name: "BuildaCheck",
              url: "https://buildacheck.com.au",
              description:
                "Builder-grade property inspections backed by construction expertise, standards-aligned reporting, and evidence-driven defect analysis. Melbourne & Greater Victoria.",
              logo: "https://buildacheck.com.au/images/logo.png",
              image: "https://buildacheck.com.au/images/logo.png",
              email: "support@buildacheck.com.au",
              telephone: "1300 XXX XXX",
              areaServed: [
                {
                  "@type": "City",
                  name: "Melbourne",
                  "@id": "https://en.wikipedia.org/wiki/Melbourne",
                },
                {
                  "@type": "State",
                  name: "Greater Victoria",
                },
              ],
              serviceType: [
                "Pre-Purchase Building Inspection",
                "Practical Completion Inspection (PCI)",
                "Warranty Inspection",
                "Dilapidation Report",
                "Expert Witness Report",
                "Building & Pest Inspection",
              ],
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "08:00",
                  closes: "18:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "09:00",
                  closes: "14:00",
                },
              ],
            }),
          }}
        />
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
