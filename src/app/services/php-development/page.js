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
      <section class="laravel-banner phpweb-banner">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-6">
              <div class="laravel-banner-txt">
                <h1>PHP Development Company</h1>
                <ul>
                  <li>Framework Proficiency</li>
                  <li>Custom Development Expertise</li>
                  <li>Effective Database Control</li>
                  <li>Third Party API Integration Capability</li>
                  <li>Security Measures Implementation</li>
                </ul>
                <div class="laravel-anquire">
                  {/* <Link
                    href="#"
                    id=""
                    class="btn btn-primary"
                    onClick={() => openEnquiryModal()}
                  >
                    Enquire Now
                  </Link> */}
                   <div className="btn btn-primary" onClick={openModal}>
                    <button>Enquire Now</button>
                    {
                      <Enquirymodal
                        modalStatus={showModal}
                        toggle={openModal}
                        title="PHP Web Development Services"
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
                  src="/img/phpdevelopment/php-web-img.png"
                  alt="PHP Web Development Services"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="laravel-descriptions phpweb-descriptions">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-6 pull-right">
              <div class="laravel_img">
                <img
                  src="/img/phpdevelopment/phpweb-logo-img.png"
                  alt="Node JS Development Company"
                />
              </div>
            </div>
            <div class="col-sm-6 col-md-6 pull-left">
              <div class="laravel-descriptions-bx">
                <h2>
                  PHP Web
                  <br /> Development Services
                </h2>
                <p>
                  PHP is highly appreciated and widely used web programming and
                  scripting language that helps empower your websites through
                  its extensive and remarkable plug and play characteristics. In
                  this industry, Logicspice is one of the most trusted and
                  appreciated PHP development company that has been successfully
                  delivering high quality services for years. Using PHP offers
                  amazing user experience.We are one of the trusted and leading
                  PHP development agency in India with proven experience that
                  allowed us to serve customers globally for consecutive 13
                  glorious years.
                </p>
                <p>
                  Our development team is skilled and equipped with various PHP
                  frameworks including Laravel, Cakephp, Yii, Codeigniter, and
                  so on along with latest client side technologies including
                  HTML, Bootstrap, jQuery, Ajax, CSS etc. With our highly
                  professionals' team and latest tools, we promise to deliver
                  efficient application development at an affordable price
                  range.
                </p>
                <p>
                  Logicspice has harnessed a team of highly qualified
                  professionals who are able to offer best quality service in
                  accordance with your preferences. We provide customized PHP
                  development solutions based on your organizational
                  requirements. We are updated with the latest technologies and
                  offer exceptional PHP development services. When quality and
                  professionalism are your priorities, Logicspice is your one
                  stop destination. Satisfying your requirements is our first
                  concern.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="laravel-devlopments-services">
        <div class="container">
          <h2>PHP Development Services</h2>
          <p class="laravel_core_sub2">
            PHP is highly appreciated and widely used web programming and
            scripting <br />
            language that helps empower your websites.
          </p>
          <div class="laravel-services-bx-top advanced_web_service_bx">
            <div class="row">
              <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="laravel_service_box ">
                  <div class="laravel-services-icon laravel_service_box1">
                    <i>
                      <img
                        class="widout-hover"
                        src="/img/phpdevelopment/phpweb-web-new-icon1.png"
                        alt="OpenCart Framework Development"
                      />
                      <img
                        class="on-hover"
                        src="/img/phpdevelopment/phpweb-white-icon1.png"
                        alt="OpenCart Framework Development"
                      />
                      <div class="mask"></div>
                    </i>
                  </div>
                  <h3>PHP Content Management System</h3>
                  <p>
                    We fulfill all your PHP framework content requirements
                    through wordpress or by developing a custom cms solution.
                  </p>
                </div>
              </div>

              <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="laravel_service_box ">
                  <div class="laravel-services-icon laravel_service_box4">
                    <i>
                      <img
                        class="widout-hover"
                        src="/img/phpdevelopment/advanced-web-new-icon2.png"
                        alt="OpenCart Framework Development"
                      />
                      <img
                        class="on-hover"
                        src="/img/phpdevelopment/advanced-web-white-icon2.png"
                        alt="OpenCart Framework Development"
                      />
                      <div class="mask"></div>
                    </i>
                  </div>
                  <h3>PHP E-commerce</h3>
                  <p>
                    With robust Php frameworks like laravel and CakePHP, we
                    develop powerful and feature-rich e-commerce solutions.
                  </p>
                </div>
              </div>

              <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="laravel_service_box ">
                  <div class="laravel-services-icon laravel_service_box3">
                    <i>
                      <img
                        class="widout-hover"
                        src="/img/phpdevelopment/advanced-web-new-icon3.png"
                        alt="OpenCart Framework Development"
                      />
                      <img
                        class="on-hover"
                        src="/img/phpdevelopment/advanced-web-white-icon3.png"
                        alt="OpenCart Framework Development"
                      />
                      <div class="mask"></div>
                    </i>
                  </div>
                  <h3>PHP Open Source Framework</h3>
                  <p>
                    We utilize open-source frameworks such as Symphony, Laravel,
                    Cakephp, and other frameworks to provide comprehensive
                    solutions.
                  </p>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="laravel_service_box ">
                  <div class="laravel-services-icon laravel_service_box4">
                    <i>
                      <img
                        class="widout-hover"
                        src="/img/phpdevelopment/codeigniter-new-icon3.png"
                        alt="OpenCart Framework Development"
                      />
                      <img
                        class="on-hover"
                        src="/img/phpdevelopment/codeigniter-white-icon3.png"
                        alt="OpenCart Framework Development"
                      />
                      <div class="mask"></div>
                    </i>
                  </div>
                  <h3>PHP Programming For Shopping Cart</h3>
                  <p>
                    Our PHP programming professionals are focused on the
                    security and smoothness of the process for an amazing user
                    experience on your eCommerce website.
                  </p>
                </div>
              </div>

              <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="laravel_service_box ">
                  <div class="laravel-services-icon laravel_service_box5">
                    <i>
                      <img
                        class="widout-hover"
                        src="/img/phpdevelopment/codeigniter-new-icon4.png"
                        alt="OpenCart Framework Development"
                      />
                      <img
                        class="on-hover"
                        src="/img/phpdevelopment/codeigniter-white-icon4.png"
                        alt="OpenCart Framework Development"
                      />
                      <div class="mask"></div>
                    </i>
                  </div>
                  <h3>Social Networking Solutions</h3>
                  <p>
                    We have an efficient team to offer you effective and robust
                    social networking solutions based on your business and
                    customers.
                  </p>
                </div>
              </div>

              <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="laravel_service_box ">
                  <div class="laravel-services-icon laravel_service_box2">
                    <i>
                      <img
                        class="widout-hover"
                        src="/img/phpdevelopment/codeigniter-new-icon5.png"
                        alt="OpenCart Framework Development"
                      />
                      <img
                        class="on-hover"
                        src="/img/phpdevelopment/codeigniter-white-icon5.png"
                        alt="OpenCart Framework Development"
                      />
                      <div class="mask"></div>
                    </i>
                  </div>
                  <h3>PHP Design And Theme Integration</h3>
                  <p>
                    Our PHP web application manager offers an assortment of
                    designs and themes for websites and web applications.
                  </p>
                </div>
              </div>

              <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="laravel_service_box ">
                  <div class="laravel-services-icon laravel_service_box7">
                    <i>
                      <img
                        class="widout-hover"
                        src="/img/phpdevelopment/advanced-web-new-icon4.png"
                        alt="OpenCart Framework Development"
                      />
                      <img
                        class="on-hover"
                        src="/img/phpdevelopment/advanced-web-white-icon4.png"
                        alt="OpenCart Framework Development"
                      />
                      <div class="mask"></div>
                    </i>
                  </div>
                  <h3>PHP Migration Services</h3>
                  <p>
                    With us, migration is always an easier process from one
                    platform to another.
                  </p>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="laravel_service_box ">
                  <div class="laravel-services-icon laravel_service_box8">
                    <i>
                      <img
                        class="widout-hover"
                        src="/img/phpdevelopment/codeigniter-new-icon7.png"
                        alt="OpenCart Framework Development"
                      />
                      <img
                        class="on-hover"
                        src="/img/phpdevelopment/codeigniter-white-icon7.png"
                        alt="OpenCart Framework Development"
                      />
                      <div class="mask"></div>
                    </i>
                  </div>
                  <h3>PHP Customer Relationship Management</h3>
                  <p>
                    What's more satisfying than managing customer relationships
                    in a professional way? We can guarantee you that.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </section>

      <section class="laravel_core_features_section advanced_core_features_section">
        <div class="container">
          <h2>PHP Frameworks</h2>
          <p class="laravel_core_sub">
            PHP is highly appreciated and widely used web programming and
            scripting <br />
            language that helps empower your websites.
          </p>
          <div class="laravel_core_features_bx phpweb_features_bx">
            <div class="row">
              <div class="col-sm-6 col-md-6" data-aos="fade-right">
                <div class="laravel_core_featureBox">
                  <div class="laravel_core_features_img">
                    <img
                      src="/img/phpdevelopment/phpwebt_features_icon1.png"
                      alt="img1"
                    />
                  </div>
                  <div class="laravel_core_features_detail">
                    <h3>Cakephp Framework</h3>
                    <p>
                      Due to its flexibility and it's effective features,
                      Cakephp has become a well known platform for PHP
                      development. We offer you a scalable application and
                      e-commerce website and other complex website development
                      for various requirements your business has.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-sm-6 col-md-6" data-aos="fade-left">
                <div class="laravel_core_featureBox">
                  <div class="laravel_core_features_img">
                    <img
                      src="/img/phpdevelopment/phpwebt_features_icon2.png"
                      alt="img4"
                    />
                  </div>
                  <div class="laravel_core_features_detail">
                    <h3>Codeigniter Framework</h3>
                    <p>
                      Codeigniter development is SEO and user friendly. It
                      offers its users easy to use tools along with a
                      communicative interface. When you require professional
                      codeigniter development solutions, Logicspice comes in
                      first place to fulfill all your requirements.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-sm-6 col-md-6" data-aos="fade-right">
                <div class="laravel_core_featureBox">
                  <div class="laravel_core_features_img">
                    <img
                      src="/img/phpdevelopment/phpwebt_features_icon3.png"
                      alt="img2"
                    />
                  </div>
                  <div class="laravel_core_features_detail">
                    <h3>Laravel Framework</h3>
                    <p>
                      Laravel is renowned as an open source platform
                      <br /> blessed on MVC architectural pattern. For best
                      <br /> quality Laravel development, Logicspice
                      <br /> is your most trusted ally.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-md-6" data-aos="fade-left">
                <div class="laravel_core_featureBox">
                  <div class="laravel_core_features_img">
                    <img
                      src="/img/phpdevelopment/phpwebt_features_icon4.png"
                      alt="img5"
                    />
                  </div>
                  <div class="laravel_core_features_detail">
                    <h3>Yii Framework</h3>
                    <p>
                      We offer highly effective Yii framework development
                      service with a team of skilled and qualified
                      professionals. With our process, we are able to offer you
                      a customer centric Yii framework development solution.
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
          <h2>Why PHP for Web Development?</h2>
          <p class="laravel_core_sub2">
            PHP is highly appreciated and widely used web programming and
            scripting <br />
            language that helps empower your websites.
          </p>
          <div class="laravel_choose_features_bx">
            <div class="row">
              <div class="col-sm-6 col-md-6" data-aos="fade-right">
                <div class="libraries_laravel_choose">
                  <div class="laravel_choose_features_img laravel_choose_features_img1">
                    <img
                      src="/img/phpdevelopment/cackphp-why-icon3.png"
                      alt="img1"
                    />
                  </div>
                  <div class="laravel_choose_details">
                    <h3>Assured Confidentiality</h3>
                    <p>
                      We follow an encrypted system to respect and protect your
                      privacy.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-sm-6 col-md-6" data-aos="fade-left">
                <div class="libraries_laravel_choose libraries_laravel_choose-right">
                  <div class="laravel_choose_features_img laravel_choose_features_img2">
                    <img
                      src="/img/phpdevelopment/advances-why-icon2.png"
                      alt="img1"
                    />
                  </div>
                  <div class="laravel_choose_details">
                    <h3>Optimized Performance</h3>
                    <p>
                      With our PHP development solutions, experience an
                      optimized performance.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-sm-6 col-md-6 " data-aos="fade-right">
                <div class="libraries_laravel_choose">
                  <div class="laravel_choose_features_img laravel_choose_features_img3">
                    <img
                      src="/img/phpdevelopment/phpweb-why-icon1.png"
                      alt="img1"
                    />
                  </div>
                  <div class="laravel_choose_details">
                    <h3>Cost Effective</h3>
                    <p>
                      When you are choosing PHP development, we can assure you
                      that decision is not going to make a dent on your bank
                      account.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-sm-6 col-md-6" data-aos="fade-left">
                <div class="libraries_laravel_choose libraries_laravel_choose-right">
                  <div class="laravel_choose_features_img laravel_choose_features_img4">
                    <img
                      src="/img/phpdevelopment/opencart-why-icon4.png"
                      alt="img1"
                    />
                  </div>
                  <div class="laravel_choose_details">
                    <h3>Framework</h3>
                    <p>
                      In PHP development frameworks, you will be able to choose
                      the best fit for your organization.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-sm-6 col-md-6" data-aos="fade-right">
                <div class="libraries_laravel_choose">
                  <div class="laravel_choose_features_img laravel_choose_features_img5">
                    <img
                      src="/img/phpdevelopment/opencart-why-icon2.png"
                      alt="img1"
                    />
                  </div>
                  <div class="laravel_choose_details">
                    <h3>Consultancy Services</h3>
                    <p>
                      Experience a complete guidance from our professionals in
                      every step of the process.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-sm-6 col-md-6" data-aos="fade-left">
                <div class="libraries_laravel_choose libraries_laravel_choose-right">
                  <div class="laravel_choose_features_img laravel_choose_features_img6">
                    <img
                      src="/img/phpdevelopment/phpweb-why-icon2.png"
                      alt="img1"
                    />
                  </div>
                  <div class="laravel_choose_details">
                    <h3>Seamless Communication Service</h3>
                    <p>
                      With us, smooth and quick communication in every need, is
                      guaranteed.
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
                        title="PHP Web Development Services"
                      />
                    }
                  </div>
            </div>
          </div>
        </div>
      </section>

      <section class="laravel-portfolio-php-dev">
        <h2>Our PHP Portfolio</h2>
        <div class="laravel-slider-bx">
          <div id="laravel-slader" class="">
            <Slider {...settings}>
              <div class="php-item">
                <Link href="https://www.yourpension.ch/" target="_blank">
                  <img
                    src="/img/phpdevelopment/yourpension-banner.png"
                    alt="img13"
                  />
                </Link>
                <Link
                  href="https://www.yourpension.ch/"
                  target="_blank"
                  class="visit-site"
                >
                  VISIT SITE
                </Link>
              </div>
              <div class="php-item">
                <Link href="http://www.uloan.club/" target="_blank">
                  <img src="/img/phpdevelopment/uloan-banner.png" alt="img14" />
                </Link>
                <Link
                  href="http://www.uloan.club/"
                  target="_blank"
                  class="visit-site"
                >
                  VISIT SITE
                </Link>
              </div>
              <div class="php-item">
                <Link href="https://www.altijdbon.nl/" target="_blank">
                  <img
                    src="/img/phpdevelopment/altijdbon-banner.png"
                    alt="img15"
                  />
                </Link>
                <Link
                  href="https://www.altijdbon.nl/"
                  target="_blank"
                  class="visit-site"
                >
                  VISIT SITE
                </Link>
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
