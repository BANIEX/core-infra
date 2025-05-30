
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import Image from "next/image";
import "./globals.css";
import notificationIcon from "@/assets/icons/bell_icon_two.png"
import userIcon from "@/assets/icons/user_icon_two.png";









import { AppSidebar } from "@/components/app-sidebar"

import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import SubHeader from "@/components/sub-header";




const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const satoshi = localFont({
  src: [
    {
      path: "../../public/fonts/Satoshi-Medium.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Satoshi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Satoshi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],

  variable: "--font-satoshi",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lapo App",
  description: "Lapo Web App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body
        className={`${satoshi.variable}   ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset className="flex flex-col flex-1 h-full">
            <header className="bg-white sticky top-0 z-10 flex h-16 shrink-0 items-center gap-2 border-b px-4">
              <SubHeader />

              <div className="flex justify-between items-center w-full">
                <div>Complaints : Log</div>
                <div className="flex gap-[40px]">
                  <Image
                    src={notificationIcon}
                    alt="notif icon"
                    width={30}
                    height={30}
                    className=""
                  />
                  <Image
                    src={userIcon}
                    alt="uaer icon"
                    width={30}
                    height={30}
                    className=""
                  />
                </div>
              </div>
            </header>
            <div className="flex flex-1 overflow-y-auto flex-col gap-4 p-4">
              {children}
            </div>
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  );
}
