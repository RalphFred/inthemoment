import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "In the Moment | Professional Accounting & Tax Services",
  description: "Expert accounting and tax preparation services for individuals and businesses. Get personalized financial solutions with In the Moment.",
  keywords: "accounting services, tax preparation, bookkeeping, small business accounting, tax services, financial services",
  authors: [{ name: "Jarde'" }],
  creator: "Jarde'",
  publisher: "In the Moment",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://inthemoment.raphaels.studio'),
  openGraph: {
    title: "In the Moment | Professional Accounting & Tax Services",
    description: "Expert accounting and tax preparation services for individuals and businesses. Get personalized financial solutions with In the Moment.",
    url: 'https://inthemoment.raphaels.studio',
    siteName: 'In the Moment',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "In the Moment | Professional Accounting & Tax Services",
    description: "Expert accounting and tax preparation services for individuals and businesses. Get personalized financial solutions with In the Moment.",
    creator: '@inthemoment',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification', // Add your Google verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
