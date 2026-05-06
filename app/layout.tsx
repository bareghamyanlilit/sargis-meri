import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sargis & Meri",
  description: "Sargis & Meri",
  openGraph: {
    title: "Սարգսի և Մերիի հարսանեկան հրավիրատոմս",
    description: "Հարսանեկան հրավիրատոմս",
    url: "https://sargis-meri.vercel.app",
    siteName: "Sargis & Meri",
    images: [
      {
        url: "https://sargis-meri.vercel.app/arajin.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ whiteSpace: "pre-line" }}>
        {children}
      </body>
    </html>
  );
}
