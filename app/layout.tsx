import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kervandoner.com"),

  title: {
    default: "Kervan Döner | Çekmeköy Döner & Sıcak Lezzetler",
    template: "%s | Kervan Döner",
  },

  description:
    "Kervan Döner Çekmeköy’de zurna döner, kaşarlı zurna döner, pilav üstü döner, patso, köfte, sucuk, çorba ve sıcak sipariş hizmeti sunar.",

  keywords: [
    "Kervan Döner",
    "Çekmeköy döner",
    "Çekmeköy zurna döner",
    "Çekmeköy patso",
    "pilav üstü döner",
    "kaşarlı zurna döner",
    "Çekmeköy yemek siparişi",
    "Cumhuriyet Mahallesi döner",
    "döner sipariş",
    "WhatsApp sipariş",
  ],

  verification: {
    google: "3K7Wa12y180o-C_zhpPku3rfmo65_NaiAV72gTDbxPk",
  },

  openGraph: {
    title: "Kervan Döner | Çekmeköy Döner & Sıcak Lezzetler",
    description:
      "Zurna döner, pilav üstü döner, patso, köfte, sucuk ve çorba seçenekleriyle Çekmeköy’de sıcak lezzetler.",
    url: "https://kervandoner.com",
    siteName: "Kervan Döner",
    locale: "tr_TR",
    type: "website",
  },

  alternates: {
    canonical: "https://kervandoner.com",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}