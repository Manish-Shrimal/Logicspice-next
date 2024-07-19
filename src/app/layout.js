
// import { Inter } from "next/font/google";
// import "./globals.css";
// import "./resposive.css";
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// import Head from "next/head";
// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Logicspice",
//   description: "A Custom Mobile App & Software Development Company",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <Head></Head>
//       <body className={inter.className}>{children}</body>
    
//     </html>
//   );
// }


// layout.js
import { Inter } from "next/font/google";
import "./globals.css";
import "./resposive.css";
import Head from "next/head";
// import AOSInitializer from "../Components/AOSInitializer";
import AOSInitializer from "./Components/AOSInitializer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Logicspice",
  description: "A Custom Mobile App & Software Development Company",
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

