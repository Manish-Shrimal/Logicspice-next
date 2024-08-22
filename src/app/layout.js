// layout.js
import { Inter } from "next/font/google";
import "./globals.css";
import "./resposive.css";
import Head from "next/head";
// import AOSInitializer from "../Components/AOSInitializer";
import AOSInitializer from "./Components/AOSInitializer";
import BaseAPI from "@/app/BaseAPI/BaseAPI";
import { headers } from "next/headers";
import Domain from "./BaseAPI/Domain";

const inter = Inter({ subsets: ["latin"] });

// export async function generateMetadata({ params, searchParams, NextRequest }) {

//   const heads = headers();

//   const pathname = heads.get("referer");
//   console.log("Current path:", pathname);
//   if(pathname) {
//     if (!pathname.includes(".") && pathname !== null ) {
//       const lastPart = pathname.split("/").filter(Boolean).pop();
//       console.log("Last part of the pathname:", lastPart);

//       const product = await fetch(`${BaseAPI}/getMetaData/${lastPart}`).then(
//         (res) => res.json()
//       );
//       console.log(product);

//       return {
//         title: product.data.meta_title,
//         description: product.data.meta_description,
//         keywords: product.data.meta_keyword,

//         alternates: {
//           canonical: `${pathname}`,

//         },

//       };
//     }
//   }

// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head></Head>
      <body className={inter.className}>
        <AOSInitializer>{children}</AOSInitializer>
      </body>
    </html>
  );
}
