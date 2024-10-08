import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThirdwebProvider } from "@/app/thirdweb";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EarnStake",
  description: "EarnStake",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
{/* <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> */}
<link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap" rel="stylesheet"/>
      </head>
      <body className={inter.className}>
      <Navbar/>
        <ThirdwebProvider>
          {children}
        </ThirdwebProvider>
      </body>
      <Footer/>
    </html>
  );
}
