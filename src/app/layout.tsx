import type { Metadata } from "next";
import { Rubik } from "next/font/google";

import "./globals.css";
// importing components
import Header from "@/components/Header";
import MobileNav from "@/components/MobileNav";

const inter = Rubik({
  weight: ["400", "500", "600"],
  subsets:['latin']
});

export const metadata: Metadata = {
  title: "Tuhin Portfolio",
  description: "Let Me Introduce Myself",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-900 relative`}>
       
        <Header></Header>
        <MobileNav></MobileNav>
  
        {children}
      
       
        </body>
    </html>
  );
}
