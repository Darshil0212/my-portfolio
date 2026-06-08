import type { Metadata } from "next";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const siteUrl =
  process.env.VERCEL_ENV === "preview"
    ? `https://${process.env.VERCEL_BRANCH_URL}`
    : process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3002";

const title = "GSTNOVA | Web Software";
const description =
  "GSTNOVA is a modern web software platform for Indian businesses — offering invoicing, billing, and business management tools with secure authentication.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  themeColor: "#0b1020",
  keywords: [
    "GSTNOVA",
    "Web Software",
    "GST Software",
    "Billing System",
    "Invoice Management",
    "Indian Business",
    "Web App",
  ],
  authors: [{ name: "GSTNOVA" }],
  openGraph: {
    title,
    description,
    url: "./",
    siteName: title,
    images: "/og.jpg",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth shadcn">
      <body
        className={`font-body antialiased ${spaceGrotesk.variable} ${jetBrainsMono.variable}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
