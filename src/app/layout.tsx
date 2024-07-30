import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/scenes/navBar/NavBar";
// import { menu } from "../app/page"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Legacy Gaming Africa",
  description: "Legacy Gaming Africa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en">
      <body className={inter.className}>
        {/* <NavBar data={{}} /> */}
        {children}
      </body>
    </html>

  );
}
