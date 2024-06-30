import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Feed",
  description:
    "Open Source platform where you can share your thoughts and get feedback from the community.",
  icons: { icon: "/logo.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(GeistMono.className, "grainy-dark font-mono")}>
        {children}
      </body>
    </html>
  );
}
