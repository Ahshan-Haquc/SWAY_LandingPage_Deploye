import type { Metadata } from "next";
import "./globals.css";
import BurgerMenu from "@/components/BurgerMenu";
import Providers from "@/redux/providers";
import SideBar from "@/components/SideBar";
import ChatIcon from "@/components/NavBar";

import { Montserrat } from "next/font/google";
import CookieConsentBanner from "@/features/CookieConsentBanner";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Sway",
  description: "Sway Landing Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="color-scheme" content="light" />
      </head>
      <body className={`${montserrat.className} mx-auto flex justify-center`} style={{ backgroundColor: "white" }}>
        <Providers>
          <div className="w-full  px-0">
            <BurgerMenu />
            <SideBar />
            <ChatIcon />
            {children}

            <CookieConsentBanner />
          </div>
        </Providers>
      </body>
    </html>
  );
}
