import Footer from "@/app/Components/Footer";
import Navbar from "@/app/Components/Navbar";
import React from "react";

const Page = () => {
  return (
    <>
      <Navbar />
      <iframe
        // src="http://localhost:3001/home/22"
        src="https://rms-next.logicspice.com/home/26"
        id="myIframe"
        style={{
          // position: "fixed",
          marginTop: "100px",
          width: "100%",
          height: "800px",
          zIndex: "1000",
          border: "none",
          right: "0",
          bottom: "0",
        }}
      ></iframe>
      <Footer />
    </>
  );
};

export default Page;
