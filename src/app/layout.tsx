import type { Metadata } from "next";
import { Inter, Quicksand, Merriweather } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const quicksand = Quicksand({ weight: "400", subsets: ["latin"] });
const merriweather = Merriweather({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-x-hidden bg-beige`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
