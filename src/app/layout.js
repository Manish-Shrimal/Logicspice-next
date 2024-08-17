// layout.js
import { Inter } from "next/font/google";
import "./globals.css";
import "./resposive.css";
import Head from "next/head";
// import AOSInitializer from "../Components/AOSInitializer";
import AOSInitializer from "./Components/AOSInitializer";
import { Metadata } from 'next';


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "A Custom Mobile App & Software Development Company - Logicspice",
  description: "Grow and automate your business exponentially with Logicspice, a top custom mobile app & software development company for PHP, laravel, android & iPhone app development. Best agency for job board software, exam software, inventory software, clone scripts, etc.",
  keywords: "custom software development company, custom software development agency, job board software, inventory software, laravel development agency, white label software, exam software, fiverr clone, classified script, business directory script, equipment rental software, freelancer clone, laravel development company, ecommerce inventory management software, recruitment management software, booking software, hire software tester, hire php developer, hire android developer, php development agency, php programming company, application tracking software, whatsapp clone, clone scripts, daily deal software, ecommerce website packages, business directory software, marketplace software, hotel booking software, event booking software, ecommerce development agency, ecommerce development company, appointment scheduling software, news management software, groupon clone, Australia, UK, USA, India, Belgium, Germany, Europe.",
  robots: "index, follow",

};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
      <Head>
      
     
        {/* Any head content can go here */}
      </Head>
      <body className={inter.className}>
        <AOSInitializer>
          {children}
        </AOSInitializer>
      </body>
    </html>
  );
}

