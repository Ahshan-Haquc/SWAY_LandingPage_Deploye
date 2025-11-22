import type { Metadata } from "next";
import "./globals.css";
import BurgerMenu from "@/components/BurgerMenu";
import Providers from "@/redux/providers";
import SideBar from "@/components/SideBar";
import ChatIcon from "@/components/NavBar";


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
      <body
      className="mx-auto flex justify-center"
      >
        <Providers>
        <div className="w-full max-w-7xl px-0 md:px-10">
        <BurgerMenu/>
        <SideBar/>
        <ChatIcon/>
        {children}
        </div>
        </Providers>
      </body>
    </html>
  );
}
