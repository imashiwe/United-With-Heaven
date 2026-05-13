import type { Metadata } from "next";
import { cormorant, lora, jost } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | United With Heaven",
    default: "United With Heaven",
  },
  description:
    "United With Heaven is a prophetic ministry of worship, written revelation, and anointed teaching, founded by Imashi Wetakepotha. Encounter the presence of God through music, books, and messages straight from Heaven.",
  openGraph: {
    siteName: "United With Heaven",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${lora.variable} ${jost.variable}`}
    >
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
