import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// importing components
import Header from "@/components/Header";
import MobileNav from "@/components/MobileNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative w-full">
        <Header></Header>
        <MobileNav></MobileNav>
  
        {children}
        </div>
        
        </body>
    </html>
  );
}
