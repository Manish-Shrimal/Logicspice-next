"use client"
import React, { useState } from "react";
import Footer from "@/app/Components/Footer";
import Navbar from "@/app/Components/Navbar";
import "@/app/custom-solutions/customsolutions.css";
import Image from "next/image";
import Link from "next/link";
import Enquirymodal from "@/app/Components/Enquirymodal";
import Contactusmodel from "@/app/Components/Contactusmodel";
import "../../resposive.css";
import "@fortawesome/fontawesome-free/css/all.css";
const page = () => {
    const [showModal, setShowModal] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
  
    const openModal = () => {
      console.log(showModal);
  
      setShowModal(!showModal);
    };
  
    const toggleModal = () => {
      setModalOpen(!modalOpen);
    };
  return (
    <>
    <Navbar/>
      <div class="top-head-custom Online-Booking-App">
        <div class="container">
          <div class="col-md-8">
            <div class="head-enquiry">
              <h1>Custom Online Booking App Development</h1>
              <p>
                We offer the best Custom booking solution, whether it's
                appointment booking, or seat booking or table booking or class
                booking or any kind of time, seat, person, service or product
                booking application, we have the right expertise for them. These
                web and mobile app solutions for your business may allow your
                potential guests and customers to self-book and pay online.{" "}
              </p>

              {/* <a
                class="btn btn-primary"
                data-toggle="modal"
                data-target="#popup_sc_product"
                onclick='if (!window.__cfRLUnblockHandlers) return false; $("#update_frm").html("Custom Online Booking App Development");$("#contact_fr").val("Custom Online Booking App Development");'
              >
                Enquire Now
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=+919829559922&amp;text=Hi Logicspice Team, I have a question regarding the solutions you provide. Please Help!"
                target="_blank"
              >
                <div class="WhatsappIcon WhatsappIconCustom">
                  <div class="coccoc-alo-phone coccoc-alo-green coccoc-alo-show">
                    <div class="coccoc-alo-ph-circle"></div>
                    <div class="coccoc-alo-ph-circle-fill"></div>
                    <div class="coccoc-alo-ph-img-circle"></div>
                  </div>
                </div>
              </a> */}
              <div className="btn btn-primary" onClick={openModal}>
                <button>Enquire Now</button>
                {
                  <Enquirymodal
                    modalStatus={showModal}
                    toggle={openModal}
                    title="Digital marketing"
                  />
                }
              </div>
              <Link
                href="https://api.whatsapp.com/send?phone=+919829559922&text=Hi Logicspice Team, I have a question regarding the solutions you provide. Please Help!"
                target="_blank"
              >
                <div class="WhatsappIcon WhatsappIconCustom">
                  <div class="coccoc-alo-phone coccoc-alo-green coccoc-alo-show">
                    <div class="coccoc-alo-ph-circle"></div>
                    <div class="coccoc-alo-ph-circle-fill"></div>
                    <div class="coccoc-alo-ph-img-circle"></div>
                  </div>
                </div>
              </Link>
            </div>
            <ul class="head-feature">
              <li>Online Solution</li>
              <li>Fully Responsive System For all Mobile Device</li>
              <li>Get more clients with our easy to manage software</li>
              <li>Easily accept bookings from their customers and clients</li>
            </ul>
            <div aria-label="breadcrumb" class="my-breadcrumb ">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="https://www.logicspice.com">Home</a>
                </li>
                <li class="breadcrumb-item">
                  <a href="https://www.logicspice.com/custom-solutions">
                    Custom Solutions
                  </a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  Booking App Development
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div class="BFC_logic">
    <div class="container">
        <h2>Why logicspice is Best For Custom App/Web Development?</h2>
        <div class ="row">

        <div class="col-md-3">
            <div class="top-box-BFC">
                <img src="https://www.logicspice.com/app/webroot/img/images/custom/capp1.png" alt="img1"/>
                <h3>Ready to Go for Development</h3>
                <p>We have a team of dedicated developers who are ready to work on your requirements for app or web development. 
                    Our solution is robust &amp; highly scalable.</p>
            </div>
        </div>

        <div class="col-md-3">
            <div class="top-box-BFC">
                <img src="https://www.logicspice.com/app/webroot/img/images/custom/capp2.png" alt="img2"/>
                <h3>Support &amp; Maintenance</h3>
                <p>We support our customers from business analysis, designing, development, maintenance. Our team is always available to solve your query.</p>
            </div>
        </div>

        <div class="col-md-3">
            <div class="top-box-BFC">
                <img src="https://www.logicspice.com/app/webroot/img/images/custom/capp3.png" alt="img3"/>
                <h3>Cost- Efficient</h3>
                <p>Our development varies with your requirement. We assure to give cost efficient solution of development.</p>
            </div>
        </div>

        <div class="col-md-3">
            <div class="top-box-BFC">
                <img src="https://www.logicspice.com/app/webroot/img/images/custom/capp4.png" alt="img4"/>
                <h3>Future Extendibility</h3>
                <p>You can extend the features &amp; functionality in your customised app in future if you want to explore more. This feature doesn’t come up with a ready made script.</p>
            </div>
        </div>

        </div>
        
    </div>
</div>
    </>
  );
};

export default page;
