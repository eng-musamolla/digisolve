import dynamic from "next/dynamic";
import type { Metadata } from "next";
import "./globals.css";

import Navbar from "./components/ui/navbar";
import Footer from "./components/ui/footer";
import InputFrom from "./components/ui/SignupForm";
// const Navbar = dynamic(() => import("./navbar"), { ssr: false });
// const Footer = dynamic(() => import("./footer"), { ssr: true });

export const metadata: Metadata = {
  title: "DigiSolve",
  description: "DigiSolve discripton here",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-full w-auto">
        <Navbar />
        <main className="pt-20 pb-2 bg-slate-300 text-slate-950 font-semibold">
          {/* <InputFrom /> */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
