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
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1.5,
    centerMode: true,
    vertical: false,
  };

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
      <NavBar />

      <section class="laravel-banner cackphp-banner">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-6">
              <div class="laravel-banner-txt">
                <h1>
                  Cakephp <br />
                  Web Development
                </h1>
                <ul>
                  <li>Web Development </li>
                  <li>CMS Development</li>
                  <li>Cart Solution </li>
                  <li>Plug-in</li>
                </ul>
                <div class="laravel-anquire">
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
            </div>
            <div class="col-xs-12 col-sm-6 col-md-6">
              <div class="page_img">
                <img
                  src="/img/cakephpdevelopment/cakephp-banner-img.png"
                  alt="Cakephp web development"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="laravel-descriptions cackphp-descriptions">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-6 pull-right">
              <div class="laravel_img">
                <img
                  src="/img/cakephpdevelopment/caclphp-logo-img.png"
                  alt="laravel web development"
                />
              </div>
            </div>
            <div class="col-sm-6 col-md-6 pull-left">
              <div class="laravel-descriptions-bx">
                <h2>
                  Cakephp <br />
                  Web Development
                </h2>
                <p>
                  CakePHP has emerged as a well known platform for the PHP
                  development due to its flexibility and a number of
                  capabilities. Inspired by Ruby on Rails, CakePHP has become
                  one of the commonly used development systems. Our team of
                  expert cakePHP developers build the scalable applications and
                  websites such as e-commerce sites and complex web applications
                  for management for various businesses processes.
                </p>
                <p>
                  CakePHP framework has always been the first choice for many
                  professional developers and business houses, because of its
                  extraordinary features & simple interface to use it. So, if
                  you are looking for professional CakePHP development services
                  and customized solutions, modified as per your needs, then
                  your search ends here. We are a leading
                  <b>CakePHP development company </b>
                  which excels in offering world class and complex web
                  application development services and solutions programmed over
                  CakePHP framework and provide end-to-end development
                  solutions.
                </p>
                <p>
                  {" "}
                  Our business-driven approach towards web development and our
                  logical <b>CakePHP solutions</b> have helped a variety of
                  businesses in putting up them with efficient interface and
                  influential business system.{" "}
                </p>

                <p>
                  Our packages for CakePHP development include perfect Admin,
                  sub-admin and user dashboard in the backend. In the front end,
                  there could be various types of interface and functionality
                  which may relate to Dating Websites, online shopping cart,
                  booking application, social media web development etc. One can
                  hire the CakePHP programmers from{" "}
                  <strong>best cakephp web development company</strong> for
                  consultancy, customization and development regarding their
                  applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="laravel-devlopments-services">
        <div class="container">
          <h2>CakePHP Development Services</h2>
          <p class="laravel_core_sub2">
            CakePHP framework has always been the first choice for many
            professional
            <br /> developers and business houses, because of its interface to
            use it.
          </p>
          <div class="laravel-services-bx-top">
            <div class="row">
              <div class="col-xs-12 col-sm-6 col-md-4">
                <div class="laravel_service_box ">
                  <div class="laravel-services-icon laravel_service_box1">
                    <i>
                      <img
                        class="widout-hover"
                        src="/img/cakephpdevelopment/laravel-new-icon1.png"
                        alt="laravel web development"
                      />
                      <img
                        class="on-hover"
                        src="/img/cakephpdevelopment/laravel-white-icon1.png"
                        alt="laravel web development"
                      />
                      <div class="mask"></div>
                    </i>
                  </div>
                  <h3>CakePHP Web Development</h3>
                  <p>
                    You can get a superb ecommerce website with the reliable
                    CakePHP solutions for your growing business needs.
                  </p>
                </div>
              </div>

              <div class="col-xs-12 col-sm-6 col-md-4">
                <div class="laravel_service_box ">
                  <div class="laravel-services-icon laravel_service_box2">
                    <i>
                      <img
                        class="widout-hover"
                        src="/img/cakephpdevelopment/cackphp-new-icon2.png"
                        alt="laravel web development"
                      />
                      <img
                        class="on-hover"
                        src="/img/cakephpdevelopment/cackphp-white-icon2.png"
                        alt="laravel web development"
                      />
                      <div class="mask"></div>
                    </i>
                  </div>
                  <h3>CakePHP Plug-in</h3>
                  <p>
                    Our Expert CakePHP developers are efficient in developing as
                    well as maintaining the web application and plug-ins.
                  </p>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-4">
                <div class="laravel_service_box ">
                  <div class="laravel-services-icon laravel_service_box3">
                    <i>
                      <img
                        class="widout-hover"
                        src="/img/cakephpdevelopment/cackphp-new-icon3.png"
                        alt="laravel web development"
                      />
                      <img
                        class="on-hover"
                        src="/img/cakephpdevelopment/cackphp-white-icon3.png"
                        alt="laravel web development"
                      />
                      <div class="mask"></div>
                    </i>
                  </div>
                  <h3>CMS Development</h3>
                  <p>
                    The strong and effective CMS solutions on the CakePHP
                    framework work on a variety of industry verticals
                  </p>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-4">
                <div class="laravel_service_box ">
                  <div class="laravel-services-icon laravel_service_box4">
                    <i>
                      <img
                        class="widout-hover"
                        src="/img/cakephpdevelopment/cackphp-new-icon4.png"
                        alt="laravel web development"
                      />
                      <img
                        class="on-hover"
                        src="/img/cakephpdevelopment/cackphp-white-icon4.png"
                        alt="laravel web development"
                      />
                      <div class="mask"></div>
                    </i>
                  </div>
                  <h3>CakePHP migration</h3>
                  <p>
                    It is easier to migrate between CakePHP platforms as it is
                    user friendly in nature.
                  </p>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-4">
                <div class="laravel_service_box ">
                  <div class="laravel-services-icon laravel_service_box5">
                    <i>
                      <img
                        class="widout-hover"
                        src="/img/cakephpdevelopment/cackphp-new-icon5.png"
                        alt="laravel web development"
                      />
                      <img
                        class="on-hover"
                        src="/img/cakephpdevelopment/cackphp-white-icon5.png"
                        alt="laravel web development"
                      />
                      <div class="mask"></div>
                    </i>
                  </div>
                  <h3>Third Party App Integration</h3>
                  <p>
                    The skilled CakePHP developers can do advanced development
                    services with support and integration of 3<sup>rd</sup>{" "}
                    party APIs.
                  </p>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-4">
                <div class="laravel_service_box ">
                  <div class="laravel-services-icon laravel_service_box6">
                    <i>
                      <img
                        class="widout-hover"
                        src="/img/cakephpdevelopment/cackphp-new-icon6.png"
                        alt="laravel web development"
                      />
                      <img
                        class="on-hover"
                        src="/img/cakephpdevelopment/cackphp-white-icon6.png"
                        alt="laravel web development"
                      />
                      <div class="mask"></div>
                    </i>
                  </div>
                  <h3>CakePHP shopping</h3>
                  <p>
                    We also offer CakePHP shopping cart application, which is
                    really efficient in offering instant checkouts. It supports
                    smooth payment for users from all parts of the world.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="laravel_core_features_section cackphp_core_features_section">
        <div class="container">
          <h2>Core Features Of CakePHP Development</h2>
          <p class="laravel_core_sub">
            CakePHP framework has always been the first choice for many
            professional
            <br /> developers and business houses, because of its interface to
            use it.
          </p>
          <div class="laravel_core_features_bx">
            <div class="row">
              <div class="col-sm-6 col-md-6" data-aos="fade-right">
                <div class="laravel_core_featureBox">
                  <div class="laravel_core_features_img">
                    <img
                      src="/img/cakephpdevelopment/core_features_icon1.png"
                      alt="img1"
                    />
                  </div>
                  <div class="laravel_core_features_detail">
                    <h3>Auto-loading</h3>
                    <p>It feature proper inheritance of class</p>
                  </div>
                </div>
              </div>

              <div class="col-sm-6 col-md-6" data-aos="fade-left">
                <div class="laravel_core_featureBox">
                  <div class="laravel_core_features_img">
                    <img
                      src="/img/cakephpdevelopment/cackphp_features_icon4.png"
                      alt="img4"
                    />
                  </div>
                  <div class="laravel_core_features_detail">
                    <h3>Search engine friendly</h3>
                    <p>
                      CakePHP application development & CakePHP website
                      development is SEO friendly
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-sm-6 col-md-6" data-aos="fade-right">
                <div class="laravel_core_featureBox">
                  <div class="laravel_core_features_img">
                    <img
                      src="/img/cakephpdevelopment/cackphp_features_icon2.png"
                      alt="img2"
                    />
                  </div>
                  <div class="laravel_core_features_detail">
                    <h3>Inexpensive </h3>
                    <p>It reduces time as well as the overall cost</p>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-md-6" data-aos="fade-left">
                <div class="laravel_core_featureBox">
                  <div class="laravel_core_features_img">
                    <img
                      src="/img/cakephpdevelopment/cackphp_features_icon5.png"
                      alt="img5"
                    />
                  </div>
                  <div class="laravel_core_features_detail">
                    <h3>Emerging platform</h3>
                    <p>
                      It offers instant execution of RSS, Ajax and many others
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-md-6" data-aos="fade-right">
                <div class="laravel_core_featureBox">
                  <div class="laravel_core_features_img">
                    <img
                      src="/img/cakephpdevelopment/cackphp_features_icon3.png"
                      alt="img3"
                    />
                  </div>
                  <div class="laravel_core_features_detail">
                    <h3>Structure </h3>
                    <p>
                      It features architecture (MVC), which provides scalable,
                      efficient and quick functioning
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-sm-6 col-md-6" data-aos="fade-left">
                <div class="laravel_core_featureBox">
                  <div class="laravel_core_features_img">
                    <img
                      src="/img/cakephpdevelopment/cackphp_features_icon6.png"
                      alt="img6"
                    />
                  </div>
                  <div class="laravel_core_features_detail">
                    <h3>Fully functional</h3>
                    <p>
                      It supports the PDO as well as native database drivers &
                      it can also be integrated with CRUD features
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="laravel_choose_features_section">
        <div class="container">
          <h2>
            Why Choose CakePHP Framework For
            <br /> Web Development?
          </h2>
          <p class="laravel_core_sub2">
            CakePHP framework has always been the first choice for many
            professional
            <br /> developers and business houses, because of its interface to
            use it.
          </p>
          <div class="laravel_choose_features_bx">
            <div class="row">
              <div class="col-sm-6 col-md-6" data-aos="fade-right">
                <div class="libraries_laravel_choose">
                  <div class="laravel_choose_features_img laravel_choose_features_img1">
                    <img
                      src="/img/cakephpdevelopment/cackphp-why-icon1.png"
                      alt="img1"
                    />
                  </div>
                  <div class="laravel_choose_details">
                    <h3>Language selection</h3>
                    <p>
                      Most of the frameworks work on default language, i.e.
                      English, but with <b>CakePHP website development</b>, the
                      language is selected by its developer.{" "}
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-sm-6 col-md-6" data-aos="fade-left">
                <div class="libraries_laravel_choose libraries_laravel_choose-right">
                  <div class="laravel_choose_features_img laravel_choose_features_img2">
                    <img
                      src="/img/cakephpdevelopment/cackphp-why-icon2.png"
                      alt="img1"
                    />
                  </div>
                  <div class="laravel_choose_details">
                    <h3>Secure</h3>
                    <p>
                      The CakePHP Framework is recognized as an authorized tool.
                      It supports high security features like SQL injection
                      prevention and input validation.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-sm-6 col-md-6 " data-aos="fade-right">
                <div class="libraries_laravel_choose">
                  <div class="laravel_choose_features_img laravel_choose_features_img3">
                    <img
                      src="/img/cakephpdevelopment/cackphp-why-icon3.png"
                      alt="img1"
                    />
                  </div>
                  <div class="laravel_choose_details">
                    <h3>Ease of management</h3>
                    <p>
                      You can easily represent your relations between tables
                      which can be further used for main records. Hence, with
                      CakePHP save yourself from writing SQLâ€™s for many
                      projects.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-sm-6 col-md-6" data-aos="fade-left">
                <div class="libraries_laravel_choose libraries_laravel_choose-right">
                  <div class="laravel_choose_features_img laravel_choose_features_img4">
                    <img
                      src="/img/cakephpdevelopment/cackphp-why-icon4.png"
                      alt="img1"
                    />
                  </div>
                  <div class="laravel_choose_details">
                    <h3>Open Source Framework</h3>
                    <p>
                      Being an open source customization, CakePHP offers a lot
                      of <b>experimentation and innovation</b> for developers.
                      One can alter codes and UI as per their need and can
                      create new and improved applications.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-sm-6 col-md-6" data-aos="fade-right">
                <div class="libraries_laravel_choose">
                  <div class="laravel_choose_features_img laravel_choose_features_img5">
                    <img
                      src="/img/cakephpdevelopment/cackphp-why-icon5.png"
                      alt="img1"
                    />
                  </div>
                  <div class="laravel_choose_details">
                    <h3>Architecture support</h3>
                    <p>
                      It features on <b>MVC structure</b> which offers instant
                      functioning, especially in the case of large codes.{" "}
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-sm-6 col-md-6" data-aos="fade-left">
                <div class="libraries_laravel_choose libraries_laravel_choose-right">
                  <div class="laravel_choose_features_img laravel_choose_features_img6">
                    <img
                      src="/img/cakephpdevelopment/cackphp-why-icon6.png"
                      alt="img1"
                    />
                  </div>
                  <div class="laravel_choose_details">
                    <h3>Unit testing</h3>
                    <p>
                      CakePHP enables you to create your own tests to examine
                      the doubts. The tests can either be core or customized, as
                      per your requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-12 main_btn_hire">
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
            </div>
          </div>
        </div>
      </section>

      <section class="laravel-portfolio-php-dev">
        <h2>Our Cakephp Portfolio</h2>
        <div class="laravel-slider-bx">
          <div id="laravel-slader" class="">
            <Slider {...settings}>
              <div class="php-item">
                <a href="https://racingcartel.com.au/" target="_blank">
                  <img
                    src="/img/cakephpdevelopment/racingcartel-banner.png"
                    alt="img13"
                  />
                </a>
                <a
                  href="https://racingcartel.com.au/"
                  target="_blank"
                  class="visit-site"
                >
                  VISIT SITE
                </a>
              </div>

              <div class="php-item">
                <a href="https://www.iamcleaning.co.za/" target="_blank">
                  <img
                    src="/img/cakephpdevelopment/iamcleaning-banner.png"
                    alt="img15"
                  />
                </a>
                <a
                  href="https://www.iamcleaning.co.za/"
                  target="_blank"
                  class="visit-site"
                >
                  VISIT SITE
                </a>
              </div>
              <div class="php-item">
                <a href="https://afodel.com/" target="_blank">
                  <img
                    src="/img/cakephpdevelopment/afodel-banner.png"
                    alt="img16"
                  />
                </a>
                <a
                  href="https://afodel.com/"
                  target="_blank"
                  class="visit-site"
                >
                  VISIT SITE
                </a>
              </div>
              <div class="php-item">
                <a href="https://az360jobs.com/" target="_blank">
                  <img
                    src="/img/cakephpdevelopment/az360jobs-banner.png"
                    alt="img16"
                  />
                </a>
                <a
                  href="https://az360jobs.com/"
                  target="_blank"
                  class="visit-site"
                >
                  VISIT SITE
                </a>
              </div>
            </Slider>
          </div>
        </div>
      </section>
      <div className="quoue_box_full_sec">
        <div className="whatsapp-call">
          <a
            href="https://api.whatsapp.com/send?phone=+919829559922&amp;text=Hi Logicspice Team, I have a question regarding the solutions you provide. Please Help!"
            target="_blank"
          >
            <img
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

export default page;