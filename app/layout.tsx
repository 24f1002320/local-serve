import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "../lib/utils";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LocalServe - Find Trusted Local Services",
  description: "Connect with the best local service professionals in your area.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "antialiased min-h-screen",
          outfit.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
