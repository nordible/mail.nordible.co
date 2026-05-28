import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "email by Nordible.co | Professional Business Email Hosting",
  description: "Secure, reliable business email with custom domains, powerful spam protection, and effortless setup. Starting at ₹89/month.",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "email by Nordible.co | Professional Business Email Hosting",
    description: "Secure, reliable business email with custom domains, powerful spam protection, and effortless setup. Starting at ₹89/month.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${sora.variable} antialiased scroll-smooth`}
    >
      <body className="min-h-screen bg-nordible-bg text-[#2D3F55] font-sans flex flex-col">
        {children}
      </body>
    </html>
  );
}
