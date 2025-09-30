import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

// Clash Display → Primary
const primaryFont = localFont({
  src: [
    {
      path: "../public/fonts/clash-display/ClashDisplayLight.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/clash-display/ClashDisplayRegular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/clash-display/ClashDisplaySemibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/clash-display/ClashDisplayBold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-primary",
});

// Gilroy → Secondary
const secondaryFont = localFont({
  src: [
    {
      path: "../public/fonts/gilroy/Gilroy-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/gilroy/Gilroy-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/gilroy/Gilroy-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/gilroy/Gilroy-Semibold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/gilroy/Gilroy-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-secondary",
});

export const metadata: Metadata = {
  title: "YuvaBe Studios",
  description: "Portfolio powered by Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${primaryFont.variable} ${secondaryFont.variable} antialiased`}
      >
        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
