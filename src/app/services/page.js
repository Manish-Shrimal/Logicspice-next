"use client";
import React, { useEffect, useState } from "react";
import Footer from "@/app/Components/Footer";
import Navbar from "@/app/Components/Navbar";
import "@/app/services/services.css";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import Image from "next/image";
import Link from "next/link";
import "@fortawesome/fontawesome-free/css/all.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Contactusmodel from "@/app/Components/Contactusmodel";
import Enquirymodal from "@/app/Components/Enquirymodal";
import "../resposive.css";
import Whylogicspice from "@/app/Components/Whylogicspice";
import Reviewmodals from "@/app/Components/Reviewmodals";
import { Modal, ModalBody } from "react-bootstrap";
import axios from "axios";
import BaseAPI from "@/app/BaseAPI/BaseAPI";

const Page = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [modalOpen, setModalOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  var settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const openModal = () => {
    console.log(showModal);

    setShowModal(!showModal);
  };
  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  return (
    <>
      <Navbar />
      <section class="our-services-new">
        <div class="container">
          <h1>Our Services</h1>
          <p>
            We belong to the heart of the digital world and this is how we are
            always leading in the digital services. Teams of brilliant minds
            innovate solutions for brand enhancement, website solutions or a
            marketing campaign.
          </p>
        </div>
      </section>
      <section class="service-boxes-new" data-aos="fade-up">
        <div class="container">
          <div class="serv-div_new s">
            <div class="row">
              <div class="col-md-4 col-sm-4 padding-no">
                <Link href="/services/mobile-app-development">
                  <div class="our-services-bx">
                    <div class="our-services-img">
                      <img src="/img/services/serv_4.png" alt="serv_4" />
                    </div>
                    <h2>Mobile App Development</h2>
                  </div>
                </Link>
              </div>
              <div class="col-md-4 col-sm-4 padding-no">
                <Link href="/services/web-development">
                  <div class="our-services-bx">
                    <div class="our-services-img">
                      <img src="/img/services/serv_1.png" alt="serv_1" />
                    </div>
                    <h2>Web Development</h2>
                  </div>
                </Link>
              </div>
              <div class="col-md-4 col-sm-4 padding-no">
                <Link href="/services/big-data-development">
                  <div class="our-services-bx right-none">
                    <div class="our-services-img">
                      <img
                        src="/img/services/big-data-development.png"
                        alt="Big Data Development"
                      />
                    </div>
                    <h2>Big Data Development</h2>
                  </div>
                </Link>
              </div>
              <div class="col-md-4 col-sm-4 padding-no">
                <Link href="/services/devops-development">
                  <div class="our-services-bx">
                    <div class="our-services-img">
                      <img
                        src="/img/services/devops-development.png"
                        alt="DevOps Development"
                      />
                    </div>
                    <h2>DevOps Development</h2>
                  </div>
                </Link>
              </div>
              <div class="col-md-4 col-sm-4 padding-no">
                <Link href="/services/web-hosting">
                  <div class="our-services-bx">
                    <div class="our-services-img">
                      <img
                        src="/img/services/webhostin_icon.png"
                        alt="serv_3"
                      />
                    </div>
                    <h2>Web Hosting</h2>
                  </div>
                </Link>
              </div>
              <div class="col-md-4 col-sm-4 padding-no">
                <Link href="/services/django-development">
                  <div class="our-services-bx right-none">
                    <div class="our-services-img">
                      <img
                        src="/img/services/DjangoIcon.png"
                        alt="contract hire"
                      />
                    </div>
                    <h2>Django Web Services</h2>
                  </div>
                </Link>
              </div>
              <div class="col-md-4 col-sm-4 padding-no">
                <Link href="/services/contract-hire">
                  <div class="our-services-bx">
                    <div class="our-services-img">
                      <img
                        src="/img/services/ContractIcon.png"
                        alt="contract hire"
                      />
                    </div>
                    <h2>Contract Staffing Services</h2>
                  </div>
                </Link>
              </div>
              <div class="col-md-4 col-sm-4 padding-no">
                <Link href="/services/angular-development">
                  <div class="our-services-bx">
                    <div class="our-services-img">
                      <img
                        src="/img/services/AngularLogo.png"
                        alt="Angular Development"
                      />
                    </div>
                    <h2>Angular Development</h2>
                  </div>
                </Link>
              </div>
              <div class="col-md-4 col-sm-4 padding-no">
                <Link href="/services/python-development">
                  <div class="our-services-bx right-none">
                    <div class="our-services-img">
                      <img
                        src="/img/services/PythonLogo.png"
                        alt="Python Development"
                      />
                    </div>
                    <h2>Python Development</h2>
                  </div>
                </Link>
              </div>
              <div class="col-md-4 col-sm-4 padding-no">
                <Link href="/services/reactjs-development">
                  <div class="our-services-bx">
                    <div class="our-services-img">
                      <img
                        src="/img/services/ReactJSLogo.png"
                        alt="React JS Development"
                      />
                    </div>
                    <h2>React JS Development</h2>
                  </div>
                </Link>
              </div>
              <div class="col-md-4 col-sm-4 padding-no">
                <Link href="/services/react-native-app-development">
                  <div class="our-services-bx">
                    <div class="our-services-img">
                      <img
                        src="/img/services/ReactJSLogo.png"
                        alt="React Native App Development"
                      />
                    </div>
                    <h2>React Native App Development</h2>
                  </div>
                </Link>
              </div>
              <div class="col-md-4 col-sm-4 padding-no">
                <Link href="/services/artificial-intelligence">
                  <div class="our-services-bx right-none">
                    <div class="our-services-img">
                      <img
                        src="/img/services/ArtificialLogo.png"
                        alt="Artificial Intelligence Services"
                      />
                    </div>
                    <h2>Artificial Intelligence Services</h2>
                  </div>
                </Link>
              </div>

              <div class="col-md-4 col-sm-4 padding-no">
                <Link href="/services/digital-marketing">
                  <div class="our-services-bx">
                    <div class="our-services-img">
                      <img src="/img/services/serv_3.png" alt="serv_3" />
                    </div>
                    <h2>Digital Marketing</h2>
                  </div>
                </Link>
              </div>
              <div class="col-md-4 col-sm-4 padding-no">
                <Link href="/services/software-testing-services">
                  <div class="our-services-bx">
                    <div class="our-services-img">
                      <img src="/img/services/serv_5.png" alt="serv_5" />
                    </div>
                    <h2>Testing Services</h2>
                  </div>
                </Link>
              </div>
              <div class="col-md-4 col-sm-4 padding-no">
                <Link href="/services/software-development">
                  <div class="our-services-bx right-none">
                    <div class="our-services-img">
                      <img src="/img/services/serv_2.png" alt="serv_2" />
                    </div>
                    <h2>Software Development</h2>
                  </div>
                </Link>
              </div>
              <div class="col-md-4 col-sm-4 padding-no">
                <Link href="/services/support">
                  <div class="our-services-bx">
                    <div class="our-services-img">
                      <img src="/img/services/serv_6.png" alt="serv_6" />
                    </div>
                    <h2>Support & Maintenance</h2>
                  </div>
                </Link>
              </div>
              <div class="col-md-4 col-sm-4 padding-no">
                <Link href="/services/php-development">
                  <div class="our-services-bx">
                    <div class="our-services-img">
                      <img src="/img/services/serv_8.png" alt="serv_8" />
                    </div>
                    <h2>PHP Web Development</h2>
                  </div>
                </Link>
              </div>
              <div class="col-md-4 col-sm-4 padding-no">
                <Link href="/services/cakephp-development">
                  <div class="our-services-bx right-none">
                    <div class="our-services-img">
                      <img src="/img/services/serv_9.png" alt="serv_9" />
                    </div>
                    <h2>Cakephp Web Development</h2>
                  </div>
                </Link>
              </div>
              <div class="col-md-4 col-sm-4 padding-no">
                <Link href="/services/codeigniter-development">
                  <div class="our-services-bx">
                    <div class="our-services-img">
                      <img src="/img/services/serv_10.png" alt="serv_10" />
                    </div>
                    <h2>CodeIgniter Development</h2>
                  </div>
                </Link>
              </div>
              <div class="col-md-4 col-sm-4 padding-no">
                <Link href="/services/nodejs-development-company">
                  <div class="our-services-bx">
                    <div class="our-services-img">
                      <img src="/img/services/serv_11.png" alt="serv_10" />
                    </div>
                    <h2>Node.JS Development</h2>
                  </div>
                </Link>
              </div>
              <div class="col-md-4 col-sm-4 padding-no">
                <Link href="/services/opencart-development">
                  <div class="our-services-bx right-none">
                    <div class="our-services-img">
                      <img src="/img/services/serv_12.png" alt="serv_10" />
                    </div>
                    <h2>OpenCart Development</h2>
                  </div>
                </Link>
              </div>
              <div class="col-md-4 col-sm-4 padding-no">
                <Link href="/services/magento-development">
                  <div class="our-services-bx">
                    <div class="our-services-img">
                      <img src="/img/services/serv_13.png" alt="serv_10" />
                    </div>
                    <h2>Magento Development</h2>
                  </div>
                </Link>
              </div>
              <div class="col-md-4 col-sm-4 padding-no">
                <Link href="/services/laravel-development">
                  <div class="our-services-bx">
                    <div class="our-services-img">
                      <img src="/img/services/serv_04.png" alt="serv_10" />
                    </div>
                    <h2>Laravel Development</h2>
                  </div>
                </Link>
              </div>
              <div class="col-md-4 col-sm-4 padding-no">
                <Link href="/services/ecommerce-development">
                  <div class="our-services-bx right-none">
                    <div class="our-services-img">
                      <img src="/img/services/serv_15.png" alt="serv_10" />
                    </div>
                    <h2>eCommerce Development</h2>
                  </div>
                </Link>
              </div>
              <div class="col-md-4 col-sm-4 padding-no">
                <Link href="/services/wordpress-web-development">
                  <div class="our-services-bx">
                    <div class="our-services-img">
                      <img src="/img/services/serv_16.png" alt="serv_10" />
                    </div>
                    <h2>Wordpress Development</h2>
                  </div>
                </Link>
              </div>
              <div class="col-md-4 col-sm-4 padding-no">
                <Link href="/services/advanced-web-programming">
                  <div class="our-services-bx">
                    <div class="our-services-img">
                      <img src="/img/services/serv_17.png" alt="serv_10" />
                    </div>
                    <h2>Advanced Web Development</h2>
                  </div>
                </Link>
              </div>
              <div class="col-md-4 col-sm-4 padding-no">
                <Link href="/services/open-source-cms">
                  <div class="our-services-bx right-none">
                    <div class="our-services-img">
                      <img src="/img/services/serv_18.png" alt="serv_10" />
                    </div>
                    <h2>Open Source CMS Development</h2>
                  </div>
                </Link>
              </div>
              <div class="col-md-4 col-sm-4 padding-no">
                <Link href="/services/ios-app-development">
                  <div class="our-services-bx">
                    <div class="our-services-img">
                      <img src="/img/services/serv_19.png" alt="serv_10" />
                    </div>
                    <h2>iPhone Development</h2>
                  </div>
                </Link>
              </div>
              <div class="col-md-4 col-sm-4 padding-no">
                <Link href="/services/android-app-development">
                  <div class="our-services-bx">
                    <div class="our-services-img">
                      <img src="/img/services/serv_20.png" alt="serv_10" />
                    </div>
                    <h2>Android App Development</h2>
                  </div>
                </Link>
              </div>

              <div class="col-md-4 col-sm-4 padding-no">
                <Link href="/services/hybrid-app-development">
                  <div class="our-services-bx right-none">
                    <div class="our-services-img">
                      <img src="/img/services/serv_21.png" alt="serv_10" />
                    </div>
                    <h2>Hybrid Development</h2>
                  </div>
                </Link>
              </div>

              <div class="col-md-4 col-sm-4 padding-no">
                <Link href="/services/website-design">
                  <div class="our-services-bx">
                    <div class="our-services-img">
                      <img src="/img/services/serv_22.png" alt="serv_10" />
                    </div>
                    <h2>Website Design</h2>
                  </div>
                </Link>
              </div>

              <div class="col-md-4 col-sm-4 padding-no">
                <Link href="/services/https://design.logicspice.com/website-design-packages/">
                  <div class="our-services-bx">
                    <div class="our-services-img">
                      <img src="/img/services/serv_23.png" alt="serv_10" />
                    </div>
                    <h2>Website Design Packages</h2>
                  </div>
                </Link>
              </div>

              <div class="col-md-4 col-sm-4 padding-no">
                <Link href="/services/website-redesign">
                  <div class="our-services-bx right-none">
                    <div class="our-services-img">
                      <img src="/img/services/serv_24.png" alt="serv_10" />
                    </div>
                    <h2>Website Redesign Company</h2>
                  </div>
                </Link>
              </div>
              <div class="col-md-4 col-sm-4 padding-no">
                <Link href="/services/responsive-web-design">
                  <div class="our-services-bx">
                    <div class="our-services-img">
                      <img src="/img/services/serv_25.png" alt="serv_10" />
                    </div>
                    <h2>Responsive Website</h2>
                  </div>
                </Link>
              </div>

              <div class="col-md-4 col-sm-4 padding-no">
                <Link href="/services/landing-page-design">
                  <div class="our-services-bx">
                    <div class="our-services-img">
                      <img src="/img/services/serv_26.png" alt="serv_10" />
                    </div>
                    <h2>Landing Page Design</h2>
                  </div>
                </Link>
              </div>
              <div class="col-md-4 col-sm-4 padding-no">
                <Link href="/services/website-cloning-service">
                  <div class="our-services-bx right-none">
                    <div class="our-services-img">
                      <img src="/img/services/serv_27.png" alt="serv_10" />
                    </div>
                    <h2>Website Cloning Service</h2>
                  </div>
                </Link>
              </div>
              <div class="col-md-4 col-sm-4 padding-no">
                <Link href="/services/saas-software-development">
                  <div class="our-services-bx">
                    <div class="our-services-img">
                      <img src="/img/services/serv_28.png" alt="serv_10" />
                    </div>
                    <h2>Saas Software Development</h2>
                  </div>
                </Link>
              </div>

              <div class="col-md-4 col-sm-4 padding-no">
                <Link href="/services/psd-to-wordpress">
                  <div class="our-services-bx">
                    <div class="our-services-img">
                      <img src="/img/services/serv_29.png" alt="serv_10" />
                    </div>
                    <h2>Psd to Wordpress</h2>
                  </div>
                </Link>
              </div>

              <div class="col-md-4 col-sm-4 padding-no">
                <Link href="/services/psd-to-html">
                  <div class="our-services-bx right-none">
                    <div class="our-services-img">
                      <img src="/img/services/serv_30.png" alt="serv_10" />
                    </div>
                    <h2>Psd to HTML</h2>
                  </div>
                </Link>
              </div>
              <div class="col-md-4 col-sm-4 padding-no">
                <Link href="/services/psd-to-shopify">
                  <div class="our-services-bx">
                    <div class="our-services-img">
                      <img src="/img/services/serv_31.png" alt="serv_10" />
                    </div>
                    <h2>Psd to Shopify</h2>
                  </div>
                </Link>
              </div>
              <div class="col-md-4 col-sm-4 padding-no">
                <Link href="/services/script-customization">
                  <div class="our-services-bx">
                    <div class="our-services-img">
                      <img src="/img/services/serv_32.png" alt="serv_10" />
                    </div>
                    <h2>Script Customization</h2>
                  </div>
                </Link>
              </div>

              <div class="col-md-4 col-sm-4 padding-no">
                <Link href="/services/software-testing-services">
                  <div class="our-services-bx right-none">
                    <div class="our-services-img">
                      <img src="/img/services/serv_33.png" alt="serv_10" />
                    </div>
                    <h2>Software Testing</h2>
                  </div>
                </Link>
              </div>

              <div class="col-md-4 col-sm-4 padding-no">
                <Link href="/services/progressive-web-app-development">
                  <div class="our-services-bx">
                    <div class="our-services-img">
                      <img src="/img/services/serv_34.png" alt="serv_10" />
                    </div>
                    <h2>Progressive Development</h2>
                  </div>
                </Link>
              </div>
              <div class="col-md-4 col-sm-4 padding-no">
                <Link href="/services/business-support-services">
                  <div class="our-services-bx">
                    <div class="our-services-img">
                      <img src="/img/services/serv_35.png" alt="serv_10" />
                    </div>
                    <h2>Business Support Services</h2>
                  </div>
                </Link>
              </div>
              <div class="col-md-4 col-sm-4 padding-no">
                <Link href="/services/social-media-optimization-services">
                  <div class="our-services-bx right-none">
                    <div class="our-services-img">
                      <img src="/img/services/serv_36.png" alt="serv_10" />
                    </div>
                    <h2>Social Media Optimization</h2>
                  </div>
                </Link>
              </div>
              <div class="col-md-4 col-sm-4 padding-no">
                <Link href="/services/shopify-development">
                  <div class="our-services-bx">
                    <div class="our-services-img">
                      <img src="/img/services/serv_37.png" alt="serv_10" />
                    </div>
                    <h2>Shopify Development</h2>
                  </div>
                </Link>
              </div>
              <div class="col-md-4 col-sm-4 padding-no">
                <Link href="/services/shopify-development-packages">
                  <div class="our-services-bx">
                    <div class="our-services-img">
                      <img
                        src="/img/services/shopifypackages-img.png"
                        alt="Shopify Development Packages"
                      />
                    </div>
                    <h2>Shopify Development Packages</h2>
                  </div>
                </Link>
              </div>
              <div class="col-md-4 col-sm-4 padding-no">
                <Link href="/services/startup-mobile-app-development-company">
                  <div class="our-services-bx right-none">
                    <div class="our-services-img">
                      <img
                        src="/img/services/startup-img.png"
                        alt="Startup App Development"
                      />
                    </div>
                    <h2>Startup App Development</h2>
                  </div>
                </Link>
              </div>
              <div class="col-md-4 col-sm-4 padding-no">
                <Link href="/services/partner-with-us">
                  <div class="our-services-bx botton-none">
                    <div class="our-services-img">
                      <img
                        src="/img/services/partner-img.png"
                        alt="Partner With us"
                      />
                    </div>
                    <h2>Partner With us</h2>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="technologies_section" data-aos="fade-up">
        <div class="container">
          <h2>Technologies Which We Are Using For Our Services</h2>
          <div class="technologies_bx">
            <ul class="ourservices-tab" role="tablist">
              <li
                id="tab1_li"
                className={`ddlj ${activeTab === "tab1" ? "active" : ""}`}
                onClick={() => handleTabClick("tab1")}
              >
                <a>Mobile App Development</a>
              </li>
              <li
                id="tab2_li"
                className={`ddlj ${activeTab === "tab2" ? "active" : ""}`}
                onClick={() => handleTabClick("tab2")}
              >
                <a>Web Development</a>
              </li>
              <li
                id="tab3_li"
                className={`ddlj ${activeTab === "tab3" ? "active" : ""}`}
                onClick={() => handleTabClick("tab3")}
              >
                <a>Others</a>
              </li>
            </ul>

            <div class="tab-content">
              {activeTab === "tab1" && (
                <div class=" rj" id="tab1">
                  <div class="technologi-bx">
                    <ul>
                      <li>
                        <Link href="/services/ios-app-development">
                          <span class="circle_icon andri-img">
                            <img
                              src="/img/services/android-img.png"
                              alt="android-img"
                            />
                          </span>
                          <h3>Android</h3>
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/android-app-development">
                          <span class="circle_icon iPhone-img">
                            <img
                              src="/img/services/iPhone-img.png"
                              alt="iPhone-img"
                            />
                          </span>
                          <h3>iPhone</h3>
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/hybrid-app-development">
                          <span class="circle_icon hybirds-img">
                            <img
                              src="/img/services/hybrid-img.png"
                              alt="hybrid-img"
                            />
                          </span>
                          <h3>Hybrid</h3>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
              {activeTab === "tab2" && (
                <div class=" rj" id="tab2">
                  <div class="technologi-bx">
                    <ul>
                      <li>
                        <Link href="/services/cakephp-development">
                          <span class="circle_icon hybirds-img">
                            <img
                              src="/img/services/cake-img.png"
                              alt="cake-img"
                            />
                          </span>
                          <h3>Cake PHP</h3>
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/codeigniter-development">
                          <span class="circle_icon iPhone-img">
                            <img
                              src="/img/services/codeigniter-img.png"
                              alt="codeigniter-img"
                            />
                          </span>
                          <h3>Codeigniter</h3>
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/laravel-development">
                          <span class="circle_icon hybirds-img">
                            <img
                              src="/img/services/laravel-img.png"
                              alt="laravel-img"
                            />
                          </span>
                          <h3>Laravel</h3>
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/wordpress-web-development">
                          <span class="circle_icon iPhone-img">
                            <img
                              src="/img/services/wordpress-img.png"
                              alt="wordpress-img"
                            />
                          </span>
                          <h3>Wordpress</h3>
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/magento-development">
                          <span class="circle_icon magentos-img">
                            <img
                              src="/img/services/magento-img.png"
                              alt="magento-img"
                            />
                          </span>
                          <h3>Magento</h3>
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/opencart-development">
                          <span class="circle_icon opne-img">
                            <img
                              src="/img/services/opencart-img.png"
                              alt="opencart-img"
                            />
                          </span>
                          <h3>Opencart</h3>
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/php-programing">
                          <span class="circle_icon hybirds-img">
                            <img
                              src="/img/services/php-img.png"
                              alt="php-img"
                            />
                          </span>
                          <h3>PHP</h3>
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/website-design">
                          <span class="circle_icon webdesign-img">
                            <img
                              src="/img/services/webdesign-img.png"
                              alt="webdesign-img"
                            />
                          </span>
                          <h3>Web Design</h3>
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/website-redesign">
                          <span class="circle_icon redesign-img">
                            <img
                              src="/img/services/redesign-img.png"
                              alt="redesign-img"
                            />
                          </span>
                          <h3>Redesign</h3>
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/responsive-web-design">
                          <span class="circle_icon responsive-img">
                            <img
                              src="/img/services/responsive-img.png"
                              alt="responsive-img"
                            />
                          </span>
                          <h3>Responsive</h3>
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/landing-page-design">
                          <span class="circle_icon iPhone-img">
                            <img
                              src="/img/services/panding-img.png"
                              alt="panding-img"
                            />
                          </span>
                          <h3>
                            Landing Page <br />
                            Design
                          </h3>
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/advanced-web-programming">
                          <span class="circle_icon adprograming-img">
                            <img
                              src="/img/services/ad-progra-img.png"
                              alt="ad-progra-img"
                            />
                          </span>
                          <h3>
                            Advanced <br />
                            Programming
                          </h3>
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/open-source-cms">
                          <span class="circle_icon responsive-img">
                            <img
                              src="/img/services/opensource-img.png"
                              alt="opensource-img"
                            />
                          </span>
                          <h3>Open Source</h3>
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/devops-services">
                          <span class="circle_icon hybirds-img">
                            <img
                              src="/img/services/devops-img.png"
                              alt="DevOps Services"
                            />
                          </span>
                          <h3>DevOps Services</h3>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
              {activeTab === "tab3" && (
                <div class=" rj" id="tab3">
                  <div class="technologi-bx">
                    <ul>
                      <li>
                        <Link href="/services/software-development">
                          <span class="circle_icon responsive-img">
                            <img
                              src="/img/services/softdevelop-img.png"
                              alt="softdevelop-img"
                            />
                          </span>
                          <h3>
                            Software <br />
                            Development
                          </h3>
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/digital-marketing">
                          <span class="circle_icon opne-img">
                            <img
                              src="/img/services/digital-img.png"
                              alt="digital-img"
                            />
                          </span>
                          <h3>
                            Digital
                            <br />
                            Marketing
                          </h3>
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/software-maintenance-support">
                          <span class="circle_icon iPhone-img">
                            <img
                              src="/img/services/support-img.png"
                              alt="support-img"
                            />
                          </span>
                          <h3>
                            Support & <br />
                            Maintenance
                          </h3>
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/psd-to-wordpress">
                          <span class="circle_icon webdesign-img">
                            <img
                              src="/img/services/psdwordpress-img.png"
                              alt="psdwordpress-img"
                            />
                          </span>
                          <h3>
                            PSD to
                            <br />
                            Wordpress
                          </h3>
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/psd-to-html">
                          <span class="circle_icon redesign-img">
                            <img
                              src="/img/services/psdhtml-img.png"
                              alt="psdhtml-img"
                            />
                          </span>
                          <h3>
                            PSD to
                            <br />
                            HTML
                          </h3>
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/psd-to-shopify">
                          <span class="circle_icon opne-img">
                            <img
                              src="/img/services/psdshopify-img.png"
                              alt="psdshopify-img"
                            />
                          </span>
                          <h3>
                            PSD to
                            <br />
                            Shopify
                          </h3>
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/script-customization">
                          <span class="circle_icon iPhone-img">
                            <img
                              src="/img/services/script-img.png"
                              alt="script-img"
                            />
                          </span>
                          <h3>
                            Script
                            <br />
                            Customization
                          </h3>
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/software-testing-services">
                          <span class="circle_icon magentos-img">
                            <img
                              src="/img/services/softtesting-img.png"
                              alt="softtesting-img"
                            />
                          </span>
                          <h3>
                            Software
                            <br />
                            Testing
                          </h3>
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/progressive-web-page-development">
                          <span class="circle_icon iPhone-img">
                            <img
                              src="/img/services/progressive-img.png"
                              alt="progressive-img"
                            />
                          </span>
                          <h3>
                            Progressive
                            <br />
                            Web Page
                          </h3>
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/business-support-services">
                          <span class="circle_icon hybirds-img">
                            <img
                              src="/img/services/business-img.png"
                              alt="business-img"
                            />
                          </span>
                          <h3>
                            Business
                            <br />
                            Support
                          </h3>
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/salesforce_development_company">
                          <span class="circle_icon adprograming-img">
                            <img
                              src="/img/services/salesforce-img.png"
                              alt="business-img"
                            />
                          </span>
                          <h3>
                            Salesforce
                            <br />
                            Development
                          </h3>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <section class="clients_slide clients_slide_new" data-aos="fade-up">
        <div class="container">
          <h2>working with international clients</h2>
          <div class="our-services-sliders">
            <Slider {...settings}>
              <div>
                <li>
                  <img src="/img/services/cl_1.png" alt="cl_1" />
                </li>
              </div>
              <div>
                <li>
                  <img src="/img/services/cl_1.png" alt="cl_1" />
                </li>
              </div>
              <div>
                <li>
                  <img src="/img/services/cl_3.png" alt="cl_3" />
                </li>
              </div>
              <div>
                <li>
                  <img src="/img/services/cl_4.png" alt="cl_3" />
                </li>
              </div>
              <div>
                <li>
                  <img src="/img/services/cl_5.png" alt="cl_5" />
                </li>
              </div>
              <div>
                <li>
                  <img src="/img/services/cl_6.png" alt="cl_6" />
                </li>
              </div>
              <div>
                <li>
                  <img src="/img/services/cl_7.png" alt="cl_9" />
                </li>
              </div>
              <div>
                <li>
                  <img src="/img/services/cl_8.png" alt="cl_8" />
                </li>
              </div>
              <div>
                <li>
                  <img src="/img/services/cl_10.png" alt="cl_10" />
                </li>
              </div>
              <div>
                <li>
                  <img src="/img/services/cl_11.png" alt="cl_10" />
                </li>
              </div>
              <div>
                <li>
                  <img src="/img/services/cl_12.png" alt="cl_10" />
                </li>
              </div>
              <div>
                <li>
                  <img src="/img/services/client-icon.png" alt="client-icon" />
                </li>
              </div>
              <div>
                <li>
                  <img
                    src="/img/services/client-icon3.svg"
                    alt="client-icon3"
                  />
                </li>
              </div>
              <div>
                <li>
                  <img
                    src="/img/services/client-icon4.png"
                    alt="client-icon4"
                  />
                </li>
              </div>
              <div>
                <li>
                  <img
                    src="/img/services/client-icon5.png"
                    alt="client-icon5"
                  />
                </li>
              </div>
              <div>
                <li>
                  <img
                    src="/img/services/client-icon6.png"
                    alt="client-icon3"
                  />
                </li>
              </div>
              <div>
                <li>
                  <img
                    src="/img/services/client-icon7.png"
                    alt="client-icon3"
                  />
                </li>
              </div>
              <div>
                <li>
                  <img
                    src="/img/services/client-icon8.png"
                    alt="client-icon3"
                  />
                </li>
              </div>
              <div>
                <li>
                  <img
                    src="/img/services/client-icon9.png"
                    alt="client-icon3"
                  />
                </li>
              </div>
              <div>
                <li>
                  <img
                    src="/img/services/client-icon10.png"
                    alt="client-icon3"
                  />
                </li>
              </div>
              <div>
                <li>
                  <img
                    src="/img/services/client-icon11.png"
                    alt="client-icon3"
                  />
                </li>
              </div>
              <div>
                <li>
                  <img
                    src="/img/services/client-icon12.png"
                    alt="client-icon3"
                  />
                </li>
              </div>
              <div>
                <li>
                  <img
                    src="/img/services/client-icon13.jpg"
                    alt="client-icon3"
                  />
                </li>
              </div>
            </Slider>
          </div>
        </div>
      </section>

      <section
        class="serv_professional serv_professional_new"
        data-aos="fade-up"
      >
        <div class="container">
          <h2>Professional Mobile Apps and Web Application Development</h2>
          <p>
            Logicspice is specialized in customized web and mobile application
            development and digital marketing, with experts available for
            various operations including but not limited to iPhone apps
            development, Android apps development, PHP web application
            development, Magento ecommerce application development, WordPress,
            Joomla, Drupal, CakePHP, Zend, Yii etc.
          </p>
          <h3>Here are the key service details:</h3>
          <ul>
            <li>
              – Logicspice do custom and complex web application and mobile apps
              development using custom coding (cakePHP, CodeIgniter, Yii, Zend)
              or open source solutions (Magento, Drupal, Joomla, WordPress).
            </li>
            <li>– Experience with popular solutions like CRM, ERP, CMS</li>
            <li>– Digital Marketing including SEO and SEM</li>
            <li>
              – Experts in PHP5, HTML 5, CSS3, jQuery, Ajax, Java Script, XML,
              Objective C, Java
            </li>
          </ul>
          <h3>Values our clients get:</h3>
          <ul>
            <li>
              – Extensive quality check and testing to ensure the quality of
              work delivered.
            </li>
            <li>
              – Documenting the requirements with innovative ideas, to ensure
              everything remains well planned from initial stage
            </li>
            <li>
              – Believe in providing required suggestions for improvements of
              the planned application
            </li>
            <li>
              – Support and Maintenance with good availability and quick
              turnaround
            </li>
            <li>
              – For Designing projects, we provide UNLIMITED REVISIONS for the
              home page design, until the client is completely satisfied.
            </li>
            <li>
              – FREE technical support for 30 business days after the delivery
              of the project and thereafter at a nominal cost will be charged on
              hourly rates.
            </li>
          </ul>
        </div>
      </section>

      <section class=" readyToStart_new">
        <div class="container">
          <div class="row">
            <div class="col-sm-9">
              <h2>Ready to start your project? Let&apos;s make it happen!</h2>
            </div>
            <div class="col-sm-3 text-right">
              <a href="" class="btn btn-primary">
                Click Here
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="quoue_box_full_sec">
        <div className="whatsapp-call">
          <a
            href="https://api.whatsapp.com/send?phone=+919829559922&amp;text=Hi Logicspice Team, I have a question regarding the solutions you provide. Please Help!"
            target="_blank"
          >
            <Image
              width={100}
              height={100}
              src="/img/images/whatsapp.png"
              alt="whatsapp-icon"
            />
          </a>
        </div>
        <div className="quote_pop_plus quote_pop_in" onClick={toggleModal}>
          <Contactusmodel modalStatus={modalOpen} toggle={toggleModal} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
