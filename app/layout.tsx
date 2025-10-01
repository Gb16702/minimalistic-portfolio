import type { Metadata, Viewport } from "next";
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
  title: "Geoffrey Delhaye - Software Developer",
  description:
    "Frontend & backend developer specializing in React, Node.js, and Python. Building clean user interfaces and scalable systems.",
  keywords: [
    "Geoffrey Delhaye",
    "Software Developer",
    "Frontend Developer",
    "Backend Developer",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "Full Stack",
  ],
  authors: [{ name: "Geoffrey Delhaye" }],
  creator: "Geoffrey Delhaye",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://geoffreyd-portfolio.vercel.app",
    title: "Geoffrey Delhaye - Software Developer",
    description:
      "Frontend & backend developer specializing in React, Node.js, and Python. Building clean user interfaces and scalable systems.",
    siteName: "Geoffrey Delhaye",
  },
  twitter: {
    card: "summary_large_image",
    title: "Geoffrey Delhaye - Software Developer",
    description:
      "Frontend & backend developer specializing in React, Node.js, and Python.",
  },
  metadataBase: new URL("https://geoffreyd-portfolio.vercel.app"),
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased leading-relaxed pb-16 sm:pb-20 md:pb-24 lg:pb-32`}
      >
        {children}
      </body>
    </html>
  );
}
