import { Providers } from "./providers";
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const ahganirya = localFont({
  src: "../../public/fonts/Ahganirya.ttf",
  variable: "--font-ahganirya",
  weight: "400",
  style: "normal",
});

export const metadata: Metadata = {
  title: "DevHannan | Full Stack Developer",
  keywords: [
    // full stack developer tags
  ],
  description:
    "DevHannan is a full stack developer with a passion for creating beautiful and functional websites and applications.",
  authors: [
    {
      name: "DevHannan",
      url: "devhannan.vercel.app",
    },
  ],
  creator: "DevHannan-Official",
  openGraph: {
    title: "DevHannan | Full Stack Developer",
    description:
      "DevHannan is a full stack developer with a passion for creating beautiful and functional websites and applications.",
    url: "https://devhannan.vercel.app",
    siteName: "DevHannan",
    images: [
      {
        url: "https://devhannan.vercel.app/seo/og-image.png",
        width: 1200,
        height: 630,
        alt: "DevHannan Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevHannan | Full Stack Developer",
    description:
      "DevHannan is a full stack developer with a passion for creating beautiful and functional websites and applications.",
    images: ["https://devhannan.vercel.app/seo/og-image.png"],
  },
  icons: {
    icon: "/seo/favicon.ico",
    apple: "/seo/apple-touch-icon.png",
    shortcut: "/seo/favicon-32x32.png",
  },
  manifest: "/seo/site.webmanifest",
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "googledf5230ad505594e4",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "DevHannan",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${ahganirya.variable} ${inter.className} antialiased`}
        suppressHydrationWarning
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
