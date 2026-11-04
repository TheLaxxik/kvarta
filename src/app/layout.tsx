import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Newsreader } from "next/font/google";
import "./globals.css";

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400"],
});

const serif = Newsreader({
  variable: "--font-serif",
  subsets: ["latin", "latin-ext"],
  weight: ["300"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Kvarta — sezónna kuchyňa, Bratislava",
  description:
    "Reštaurácia Kvarta. Menu, ktoré sa mení každý kvartál: štyri ročné obdobia, štyri jedálne lístky.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="sk" className={`${sans.variable} ${serif.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
