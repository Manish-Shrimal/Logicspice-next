// layout.js
import { Inter } from "next/font/google";
import "../../globals.css";
import "../../resposive.css";
import Head from "next/head";
// import AOSInitializer from "../Components/AOSInitializer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Web Based Inventory Management Software- LS Inventorizerr",
  description: "A Custom Mobile App & Software Development Company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>{/* Any head content can go here */}</Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
