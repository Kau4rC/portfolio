import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Julz Cortes — Full-Stack Web Developer",
  description:
    "Portfolio of Julz Kaupper Cortes, a full-stack web developer building reliable web applications with React, Node, and a networking foundation.",
  applicationName: "Julz Cortes — Portfolio",
  authors: [{ name: "Julz Kaupper Cortes" }],
  openGraph: {
    title: "Julz Cortes — Full-Stack Web Developer",
    description:
      "Full-stack web development, backend systems, and networking infrastructure.",
    type: "website",
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#05070a",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
