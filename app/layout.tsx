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
    images: [
      {
        url: "/ilk.jpg",
        width: 1200,
        height: 630,
        alt: "Kervan Döner Çekmeköy",
      },
      {
        url: "/gorsel2.jpg",
        width: 1200,
        height: 630,
        alt: "Kaşarlı Zurna Döner",
      },
      {
        url: "/gorsel3.jpg",
        width: 1200,
        height: 630,
        alt: "Pilav Üstü Döner",
      },
      {
        url: "/gorsel4.jpg",
        width: 1200,
        height: 630,
        alt: "Dönerli Patso",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Kervan Döner | Çekmeköy Döner",
    description:
      "Çekmeköy’de sıcak zurna döner, patso, pilav üstü döner ve daha fazlası.",
    images: ["/ilk.jpg"],
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
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
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