"use client";
import React, { useState } from "react";
import Footer from "@/app/Components/Footer";
import NavBar from "@/app/Components/Navbar";
import "@/app/services/services.css";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import Image from "next/image";
import Link from "next/link";
import "@fortawesome/fontawesome-free/css/all.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Enquirymodal from "@/app/Components/Enquirymodal";
import Contactusmodel from "@/app/Components/Contactusmodel";
import "../../resposive.css";
const page = () => {

  const [showModal, setShowModal] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const [saascmsTab, setSaascmsTab] = useState(true);
  const [saascrmTab, setSaascrmTab] = useState(false);
  const [customecommerceTab, setCustomecommerceTab] = useState(false);
  const [missolutionTab, setMissolutionTab] = useState(false);

  

  const openModal = () => {
    console.log(showModal);

    setShowModal(!showModal);
  };

  const handleSaascmsTab = () => {
    setSaascmsTab(true);
    setSaascrmTab(false);
    setCustomecommerceTab(false);
    setMissolutionTab(false);
  };
  const handleSaascrmTab = () => {
    setSaascmsTab(false);
    setSaascrmTab(true);
    setCustomecommerceTab(false);
    setMissolutionTab(false);
  };
  const handleCustomecommerceTab = () => {
    setSaascmsTab(false);
    setSaascrmTab(false);
    setCustomecommerceTab(true);
    setMissolutionTab(false);
  };
  const handleMissolutionTab = () => {
    setSaascmsTab(false);
    setSaascrmTab(false);
    setCustomecommerceTab(false);
    setMissolutionTab(true);
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };


  return (
    <>
      <NavBar />
      <section class="yellow_slider">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="slidere-tittle">
                        <h1>SaaS Software Development</h1>
                        <p>Saas (Software as a service) is a way of distribution of web application and easily access as a service over the Internet. It is the best alternative to standard software  installation. No need to installing and maintaining complex software and hardware.  It is also known as hosted software or on-demand software.The user not paid for whole software,  they can use it for a certain period of time and pay only for services that they are utilized.</p>
                        <p>
                            We at <strong> Logicspice,  <span>SaaS software development company</span></strong>  provides the SaaS solutions to small, medium and large enterprises. We have experienced developers who have efficiently developed SaaS application which will help to reduce the overall  operational cost. We use advanced technologies and tools to develop robust, scalable and secure product. Our solutions gives maximum control over the software and services.
                        </p>
                    </div>
                    <div class="btn_align aos-init aos-animate" data-aos="fade-up">
                    <div className="btn btn-primary" onClick={openModal}>
                    <button>Enquire Now</button>
                    {
                      <Enquirymodal
                        modalStatus={showModal}
                        toggle={openModal}
                        title="Cakephp Web Development"
                      />
                    }
                  </div>
                  <Link
                    href="https://api.whatsapp.com/send?phone=+919829559922&text=Hi Logicspice Team, I have a question regarding the solutions you provide. Please Help!"
                    target="_blank"
                  >
                    <div class="WhatsappIcon">
                      <div class="coccoc-alo-phone coccoc-alo-green coccoc-alo-show">
                        <div class="coccoc-alo-ph-circle"></div>
                        <div class="coccoc-alo-ph-circle-fill"></div>
                        <div class="coccoc-alo-ph-img-circle"></div>
                      </div>
                    </div>
                  </Link>
                                           
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="images-section">
                        <img src="/img/saassoftwaredevelopment/mt-1378-home3-header-icon12.png" alt="SaaS_Software_Development" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="resources-banner our-sass">
        <div class="container">
            <h2>Our SaaS Development Services </h2>
            <div class="resources-bx-top">
            <ul class="resources-tabs">
                <li
                  id="tab1_li"
                  className={`ddlj ${
                    saascmsTab ? "active" : ""
                  }`}
                  onClick={() => handleSaascmsTab()}
                >
                  <a><i><img src="/img/saassoftwaredevelopment/project-img.png" alt="logo" /></i>
                  <span>SaaS CMS Development</span></a>
                </li>
                <li
                  id="tab2_li"
                  className={`ddlj ${
                    saascrmTab ? "active" : ""
                  }`}
                  onClick={() => handleSaascrmTab()}
                >
                  <a><i><img src="/img/saassoftwaredevelopment/client-need-img.png" alt="logo" /></i>
                  <span>SaaS CRM Development</span></a>
                </li>
                <li
                  id="tab3_li"
                  className={`ddlj ${
                    customecommerceTab ? "active" : ""
                  }`}
                  onClick={() => handleCustomecommerceTab()}
                >
                  <a><i><img src="/img/saassoftwaredevelopment/client-approval-img.png" alt="logo" /></i>
                  <span>Custom Ecommerce Solutions</span></a>
                </li>
                <li
                  id="tab4_li"
                  className={`ddlj ${missolutionTab ? "active" : ""}`}
                  onClick={() => handleMissolutionTab()}
                >
                  <a><i><img src="/img/saassoftwaredevelopment/quality-img.png" alt="logo" /></i>
                  <span>MIS Solution</span></a>
                </li>
              </ul>
               
                <div class="tab-content">
                {saascmsTab && (
                <>
                   <div class="costomer_tab rj"  id="tab1">
                        <div class="resources-contan">
                            <p>We develop cloud-based headless Content Management System extensible and flexible.  </p>
                        </div>
                    </div>
                    </>
              )}
               {saascrmTab && (
                <>
                    <div class="costomer_tab rj "  id="tab2">
                        <div class="resources-contan">
                            <p>Our SaaS CRM (Customer Relationship Management ) assured 24/7 access, backups and security. Your customers do not require installation or maintenance of these apps, they just have to use the software solution as a service. It will help you to integrate all your business system. </p>
                        </div>
                    </div>
                    </>
                )}
                 {customecommerceTab && (
                <>
                   <div class="costomer_tab rj "  id="tab3">
                        <div class="resources-contan">
                            <p>We provide Ecommerce SaaS solutions suitable for your online business goals, which will allow you to decide your strategy and convey smooth online shopping experience to your clients.</p>
                        </div>
                    </div>
                    </>
                )}
                 {missolutionTab && (
                <>
         <div class="costomer_tab rj "  id="tab4">
                        <div class="resources-contan">
                            <p>We build SaaS MIS( Management Information System) which will help to build long term partnership with your clients. Support to quick implementation, existing system enhancement , low cost, less risk, easy to access. </p>
                        </div>
                    </div>
                    </>
                )}
                </div>
            </div>
        </div>
    </section>
    <section class="sasss-middle-section">
        <div class="container">
            <div class="row">

                <div class="col-md-6">

                    <div class="sa_t">
                        <p>As a <span>saas software development company</span>, we assist our clients to bring their application to SaaS model. We are responsible for managing the access 
                        to the application with security, performance and support. That's why our clients call us the best SaaS based product development company.</p>
                    <p>
                    Software as services used in many businesses like Content management system (CMS), Customer Relationship Management (CRM), Human resources (HRM), Accounting.  </p>
                    <p>Don't worry if you are planning to develop a <span>custom SaaS solution,</span> our experts will take care of development of an application  within a certain time frame with advanced features. </p>
                    </div>

                </div>

                <div class="col-md-6">
                </div>
            </div>
        <div class="img_saaa">
            <img src="/img/saassoftwaredevelopment/saaa_img.png" alt="saaa_img" />
        </div>
        </div>
    </section>
    

    <section class="new-why-choose-section sass_title">
        <div class="container">
            <h2>Why choose Logicspice <span>for Web Development?</span></h2>
             <div class="row">
            <div class="col-sm-6 col-md-6">
                <div class="new_libraries">
                    <i><img src="/img/saassoftwaredevelopment/new_development_icon1.png" alt="Web development" /></i>
                    <div class="new-libra-bx">
                        <h3>Best Technology Offering</h3>
                        <p>We offer powerful and latest technologies to build SaaS based product.</p>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-md-6">
                <div class="new_libraries">
                    <i><img src="/img/saassoftwaredevelopment/new_development_icon2.png" alt="Web development" /></i>
                    <div class="new-libra-bx">
                        <h3>Unperturbed Support</h3>
                        <p>We provide you with full customer support. Thanks to our dedicated team of technical support executives.</p>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-md-6">
                <div class="new_libraries">
                    <i><img src="/img/saassoftwaredevelopment/new_development_icon3.png" alt="Web development" /></i>
                    <div class="new-libra-bx">
                        <h3>Secure</h3>
                        <p>The SaaS is recognized as an authorized tool. It supports high security features.
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-md-6">
                <div class="new_libraries">
                    <i><img src="/img/saassoftwaredevelopment/new_development_icon4.png" alt="Web development" /></i>
                    <div class="new-libra-bx">
                        <h3>Dedicated team of experts</h3>
                        <p>Our website development company has dedicated and efficient developers that are always willing to provide you with the best.</p>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-md-6">
                <div class="new_libraries">
                    <i><img src="/img/saassoftwaredevelopment/new_development_icon5.png" alt="Web development" /></i>
                    <div class="new-libra-bx">
                        <h3>100% Client Satisfaction</h3>
                        <p>Our first priority is always a client. We believe in satisfying our client 100% with our service and softwares.</p>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-md-6">
                <div class="new_libraries">
                    <i><img src="/img/saassoftwaredevelopment/new_development_icon6.png" alt="Web development" /></i>
                    <div class="new-libra-bx">
                        <h3>SEO friendly websites</h3>
                        <p>In today's era, it has become important for any company to have SEO friendly websites to have an impact on Google searches. Our company provides you with SEO
                        friendly website to help you make a mark.</p>
                    </div>
                </div>
            </div>
        </div>
         </div>
    </section>


    <section class="testing-statred-section resources-statred-section">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 col-md-12">
                    <h2 class="sas12">Enquiry Now</h2>
                    <a id="" data-toggle="modal" data-target="#contactFix" class="btn btn-primary sas13">Get a Free Quote</a>
                </div>
            </div>
        </div>
    </section>

    <section className="quoue_box_full_sec">
        <div className="whatsapp-call">
          <a
            href="https://api.whatsapp.com/send?phone=+919829559922&amp;text=Hi Logicspice Team, I have a question regarding the solutions you provide. Please Help!"
            target="_blank"
          >
            <img src="/img/images/whatsapp.png" alt="whatsapp-icon" />
          </a>
        </div>
        <div className="quote_pop_plus quote_pop_in" onClick={toggleModal}>
          <Contactusmodel modalStatus={modalOpen} toggle={toggleModal} />
        </div>
      </section>









    

     
    

      <Footer />
    </>
  );
};

export default page;
