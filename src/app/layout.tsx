"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/nav/Sidebar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} bg-neutral-100 font-sans antialiased`}
      >
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 p-4 pt-16 lg:p-8 lg:pt-8">{children}</main>
        </div>
      </body>
    </html>
  );
}
