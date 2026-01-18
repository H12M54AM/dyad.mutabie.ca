"use client";

import type { Metadata } from "next";
import "../globals.css";
import { Toaster } from 'react-hot-toast';
import ConsentBanner from "@/components/ConsentBanner";
import AnalyticsWrapper from "@/components/AnalyticsWrapper";
import { CookiesProvider } from 'react-cookie';

export const metadata: Metadata = {
  title: "Dyad Framework",
  description: "Build stunning web applications with AI assistance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CookiesProvider>
          {children}
          <AnalyticsWrapper />
          <ConsentBanner />
          <Toaster />
        </CookiesProvider>
      </body>
    </html>
  );
}