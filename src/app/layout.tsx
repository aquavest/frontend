import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import { ThemeProvider } from "@/contexts/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aquavest",
  description:
    "AquaVest is a decentralized investment platform that allows crypto investors to invest in tokenized real-world assets, specifically fish farming pools. Through blockchain technology, AquaVest provides transparent, secure, and eco-conscious investment opportunities, where users can earn returns by investing in sustainable aquaculture ventures.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
