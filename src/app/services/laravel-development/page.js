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
  var clientfeadback = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
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

      <section class="laravel-banner LaravelBanners">
        <div class="LaravelLeftImg">
          <img
            src="/img/laraveldevelopment/laravel-left-img.png"
            alt="laravel web development"
          />
        </div>
        <div class="LaravelRightImg">
          <img
            src="/img/laraveldevelopment/laravel-right-img.png"
            alt="laravel web development"
          />
        </div>
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-7">
              <div class="laravel-banner-txt">
                <h1>
                  <strong class="LaravelBannerHadding">Laravel</strong>{" "}
                  Development Company
                </h1>
                <div class="LaravelText">
                  Logicspice stands as an expert and professional{" "}
                  <strong style={{ color: "#ff2d20" }}>
                    <i>Laravel web development</i>
                  </strong>{" "}
                  service provider, catering to enterprises of diverse scales
                  and industries. Leveraging the prowess of Laravel, an
                  open-source PHP framework renowned for its ability to expedite
                  the creation of <strong>secure, scalable</strong>, and
                  feature-rich web applications. We empower businesses with
                  efficient software solutions.
                </div>
                <div class="LaravelOffers">
                  <h3>
                    <span>Limited Period Offer:</span> 50% discount for the
                    first 50 hours of Laravel development.
                  </h3>
                </div>
                <div class="laravel-anquire">
                <div className="btn btn-primary" onClick={openModal}>
                    <button>Enquire Now</button>
                    {
                      <Enquirymodal
                        modalStatus={showModal}
                        toggle={openModal}
                        title="Laravel Development"
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
            <div class="col-xs-12 col-sm-6 col-md-4">
              <div class="page_img LaravelBannerImg">
                <img
                  src="/img/laraveldevelopment/laravel-new-icon.png"
                  alt="laravel web development"
                />
              </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12">
              <div class="CertificationsLaravel">
                <a href="#" class="LaravelGuarantee">
                  <img
                    src="/img/laraveldevelopment/clutch-logo.jpg"
                    alt="laravel web development"
                  />
                </a>
                <a href="#" class="LaravelGuarantee">
                  <img
                    src="/img/laraveldevelopment/goodfirms.jpg"
                    alt="laravel web development"
                  />
                </a>
                <a href="#" class="LaravelGuarantee">
                  <img
                    src="/img/laraveldevelopment/appfutura.jpg"
                    alt="laravel web development"
                  />
                </a>
                <a href="#" class="LaravelGuarantee">
                  <img
                    src="/img/laraveldevelopment/money_back_guarantee.png"
                    alt="laravel web development"
                  />
                </a>
                <a href="#" class="LaravelGuarantee">
                  <img
                    src="/img/laraveldevelopment/satisfaction-guarantee.jpg"
                    alt="laravel web development"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="laravel-descriptions ">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-6 pull-right">
              <div class="laravel_img">
                <img
                  src="/img/laraveldevelopment/laravel-logo-img.png"
                  alt="laravel web development"
                />
              </div>
            </div>
            <div class="col-sm-6 col-md-6 pull-left">
              <div class="laravel-descriptions-bx">
                <h2>
                  Laravel Custom
                  <br /> Web Development Agency
                </h2>
                <h3>
                  Advantages of Laravel for Your Custom Web Development Needs
                </h3>

                <p>
                  At the heart of our Laravel custom web development agency lies
                  the mastery of the{" "}
                  <strong>
                    <i>MVC</i>
                  </strong>{" "}
                  <i>architectural</i> pattern, a cornerstone of modern web
                  development. This framework excels in crafting websites and
                  applications of superior quality. A standout feature of
                  Laravel is its proficiency in organizing and structuring code
                  in a remarkably clean manner, enhancing readability and
                  comprehensibility.
                </p>

                <p>
                  Customization takes center stage in our Laravel web
                  development services, enabling the creation of distinctive
                  products brimming with diverse functionalities. As a
                  contemporary and <strong>robust PHP framework</strong>,
                  Laravel minimizes the need for code rewriting, streamlining
                  the
                  <a href="#" target="_blank">
                    web development
                  </a>{" "}
                  process significantly. Our expert Laravel developers, equipped
                  with comprehensive knowledge of the framework, are ready to
                  transform your bespoke software requirements into reality.
                </p>

                <h3>Why Entrust Your Web Development to Logicspice?</h3>

                <p>
                  While in pursuit of top-tier Laravel developers, look no
                  further than Logicspice, your ultimate Laravel development
                  company. Our team comprises highly skilled professionals
                  deeply immersed in the intricacies of the Laravel Framework.
                  Also, our company follows the{" "}
                  <i>latest practices and approach of software development</i>{" "}
                  and also uses lots of related technologies like javascript and
                  their frameworks at expert level. We orchestrate{" "}
                  <strong>tailor-made solutions</strong> to address your unique
                  software development needs, assuring excellence at every step.
                </p>

                <h3>
                  Unveiling the Benefits of Our Laravel Web Development Agency
                </h3>

                <p>
                  Are you on the hunt for a premier Laravel web application
                  development company? Welcome to our esteemed{" "}
                  <a
                    class="LaravelBlog"
                    href="https://blog.logicspice.com/how-laravel-development-helps-startups-build-scalable-web-applications"
                  >
                    Laravel development company
                  </a>
                  , where we excel in crafting unparalleled websites and
                  applications to propel your business towards success.
                </p>

                <p>
                  Within the confines of our Laravel web design agency, we take
                  immense pride in claiming our position among the top Laravel
                  development companies across the USA, UK, and beyond. With a
                  dynamic team of adept developers and designers, we deliver
                  bespoke Laravel website development services designed
                  exclusively for you.
                </p>

                <p>
                  Within our Laravel app development company, we boast
                  developers armed with extensive experience in crafting
                  exceptional Laravel app development services. Their profound
                  understanding of Laravel's core features equips them to
                  construct <i>robust and scalable web applications</i> that
                  stand the test of time.
                </p>

                <p>
                  As a prominent London-based Laravel development agency, we
                  remain committed to staying at the forefront of innovation.
                  Our ingenious minds are in a perpetual state of exploration,
                  continuously embracing <i>emerging technologies and trends</i>{" "}
                  to offer avant-garde solutions.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="ReadyMadeScriptSection">
        <div class="container">
          <div class="TopHadding">
            <h2>Our Ready-Made Softwares Developed Using Laravel</h2>
            <p>
              Unlock the full potential of Laravel development with our suite of
              ready-made solutions designed to upgrade and enhance your
              business. Whether you're in need of a robust Job Board, efficient
              Logistic Management System, or optimized Recruitment Management
              System, these software's offer powerful solutions which can be
              further customized to your requirements as well.
            </p>
          </div>
          <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-4">
              <div class="ReadyMadeScriptBx">
                <div class="ReadyMadeScriptImg">
                  <img
                    class=""
                    src="/img/laraveldevelopment/job-board-product-img.png"
                    alt="Job Board Software"
                  />
                </div>
                <div class="ReadyMadeScriptTxt">
                  <h3>
                    <a href="#">Job Board Software</a>
                  </h3>
                  <p>
                    Streamline your Business Hiring with our Job Board Software
                    built on the Laravel framework.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4">
              <div class="ReadyMadeScriptBx">
                <div class="ReadyMadeScriptImg">
                  <img
                    class=""
                    src="/img/laraveldevelopment/logisticsoftware-product-img.png"
                    alt="Logistic Software"
                  />
                </div>
                <div class="ReadyMadeScriptTxt">
                  <h3>
                    <a href="#">Logistic Software</a>
                  </h3>
                  <p>
                    Efficiently enhance your logistics operations smoothly using
                    our Logistic Management System.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4">
              <div class="ReadyMadeScriptBx">
                <div class="ReadyMadeScriptImg">
                  <img
                    class=""
                    src="/img/laraveldevelopment/rms-product-img.png"
                    alt="Recruitment Management Software"
                  />
                </div>
                <div class="ReadyMadeScriptTxt">
                  <h3>
                    <a href="#">Recruitment Management Software</a>
                  </h3>
                  <p>
                    Simplify your hiring process with our Recruitment Management
                    Software built on Laravel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="laravel-devlopments-services">
        <div class="container">
          <h2>Laravel Development Services</h2>
          <div class="laravel-services-bx-top">
            <div class="row">
              <div class="col-xs-12 col-sm-6 col-md-4">
                <div class="laravel_service_box ">
                  <div class="laravel-services-icon laravel_service_box1">
                    <i>
                      <img
                        class="widout-hover"
                        src="/img/laraveldevelopment/laravel-new-icon1.png"
                        alt="laravel web development"
                      />
                      <img
                        class="on-hover"
                        src="/img/laraveldevelopment/laravel-white-icon1.png"
                        alt="laravel web development"
                      />
                      <div class="mask"></div>
                    </i>
                  </div>
                  <h3>Laravel Web Application</h3>
                  <p>
                    Our Laravel developers provides purely functional amazing
                    custom web development suits your business requirement.
                  </p>
                </div>
              </div>

              <div class="col-xs-12 col-sm-6 col-md-4">
                <div class="laravel_service_box ">
                  <div class="laravel-services-icon laravel_service_box2">
                    <i>
                      <img
                        class="widout-hover"
                        src="/img/laraveldevelopment/laravel-new-icon2.png"
                        alt="laravel web development"
                      />
                      <img
                        class="on-hover"
                        src="/img/laraveldevelopment/laravel-white-icon2.png"
                        alt="laravel web development"
                      />
                      <div class="mask"></div>
                    </i>
                  </div>
                  <h3>3rd Party Integration</h3>
                  <p>
                    We have expertise in integrating third party
                    <br /> API to increase the functionality of laravel web
                    <br /> application.
                  </p>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-4">
                <div class="laravel_service_box ">
                  <div class="laravel-services-icon laravel_service_box3">
                    <i>
                      <img
                        class="widout-hover"
                        src="/img/laraveldevelopment/laravel-new-icon3.png"
                        alt="laravel web development"
                      />
                      <img
                        class="on-hover"
                        src="/img/laraveldevelopment/laravel-white-icon3.png"
                        alt="laravel web development"
                      />
                      <div class="mask"></div>
                    </i>
                  </div>
                  <h3>Laravel eCommerce Solution</h3>
                  <p>
                    Laravel is an easy way to develop ecommerce website to grow
                    with a strong marketplace and a broad customer base.
                  </p>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-4">
                <div class="laravel_service_box ">
                  <div class="laravel-services-icon laravel_service_box4">
                    <i>
                      <img
                        class="widout-hover"
                        src="/img/laraveldevelopment/laravel-new-icon4.png"
                        alt="laravel web development"
                      />
                      <img
                        class="on-hover"
                        src="/img/laraveldevelopment/laravel-white-icon4.png"
                        alt="laravel web development"
                      />
                      <div class="mask"></div>
                    </i>
                  </div>
                  <h3>Payment Gateway Integration</h3>
                  <p>
                    Our Laravel developers has a capability to
                    <br /> integrate payment gateway in
                    <br /> your website.
                  </p>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-4">
                <div class="laravel_service_box ">
                  <div class="laravel-services-icon laravel_service_box5">
                    <i>
                      <img
                        class="widout-hover"
                        src="/img/laraveldevelopment/laravel-new-icon5.png"
                        alt="laravel web development"
                      />
                      <img
                        class="on-hover"
                        src="/img/laraveldevelopment/laravel-white-icon5.png"
                        alt="laravel web development"
                      />
                      <div class="mask"></div>
                    </i>
                  </div>
                  <h3>Design & Integration</h3>
                  <p>
                    Talk to our developers for magnificent laravel themes. We
                    are experience in providing custom plugin installation and
                    configuration services.
                  </p>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-4">
                <div class="laravel_service_box ">
                  <div class="laravel-services-icon laravel_service_box6">
                    <i>
                      <img
                        class="widout-hover"
                        src="/img/laraveldevelopment/laravel-new-icon6.png"
                        alt="laravel web development"
                      />
                      <img
                        class="on-hover"
                        src="/img/laraveldevelopment/laravel-white-icon6.png"
                        alt="laravel web development"
                      />
                      <div class="mask"></div>
                    </i>
                  </div>
                  <h3>App Backend Development</h3>
                  <p>
                    Customize your app backend in laravel for big
                    <br /> database connectivity and
                    <br /> more features.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="laravel_core_features_section">
        <div class="container">
          <h2>Core Features of Laravel Development</h2>
          <p class="laravel_core_sub">
            Laravel is open source PHP framework blessed with MVC architectural
            pattern.
            <br /> The Laravel Framework works great{" "}
          </p>
          <div class="laravel_core_features_bx">
            <div class="row">
              <div class="col-sm-6 col-md-6" data-aos="fade-right">
                <div class="laravel_core_featureBox">
                  <div class="laravel_core_features_img">
                    <img
                      src="/img/laraveldevelopment/core_features_icon1.png"
                      alt="img1"
                    />
                  </div>
                  <div class="laravel_core_features_detail">
                    <h3>Class Autoloading</h3>
                    <p>
                      Laravel take care that right class is called at the right
                      time. It does it automatically reducing a lot of work from
                      developerâ€™s side.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-sm-6 col-md-6" data-aos="fade-left">
                <div class="laravel_core_featureBox">
                  <div class="laravel_core_features_img">
                    <img
                      src="/img/laraveldevelopment/core_features_icon4.png"
                      alt="img4"
                    />
                  </div>
                  <div class="laravel_core_features_detail">
                    <h3>Easy to Customize</h3>
                    <p>
                      Laravel is simple code pattern which is easily
                      customizable fast process.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-sm-6 col-md-6" data-aos="fade-right">
                <div class="laravel_core_featureBox">
                  <div class="laravel_core_features_img">
                    <img
                      src="/img/laraveldevelopment/core_features_icon2.png"
                      alt="img2"
                    />
                  </div>
                  <div class="laravel_core_features_detail">
                    <h3>Unit Testing</h3>
                    <p>
                      Creation and execution of unit tests on Laravel is easy.
                      It supports a lot of these tests itself to ensure quality
                      of the product.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-md-6" data-aos="fade-left">
                <div class="laravel_core_featureBox">
                  <div class="laravel_core_features_img">
                    <img
                      src="/img/laraveldevelopment/core_features_icon5.png"
                      alt="img5"
                    />
                  </div>
                  <div class="laravel_core_features_detail">
                    <h3>Excellent Maintainability</h3>
                    <p>
                      PHP Laravel framework code comes with a<br /> high
                      reliability.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-md-6" data-aos="fade-right">
                <div class="laravel_core_featureBox">
                  <div class="laravel_core_features_img">
                    <img
                      src="/img/laraveldevelopment/core_features_icon3.png"
                      alt="img3"
                    />
                  </div>
                  <div class="laravel_core_features_detail">
                    <h3>Bundles</h3>
                    <p>
                      Bundles are like plugins which can be downloaded to
                      further increase the functionality of the web application.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-sm-6 col-md-6" data-aos="fade-left">
                <div class="laravel_core_featureBox">
                  <div class="laravel_core_features_img">
                    <img
                      src="/img/laraveldevelopment/core_features_icon6.png"
                      alt="img6"
                    />
                  </div>
                  <div class="laravel_core_features_detail">
                    <h3>Emerging Platform</h3>
                    <p>
                      The development scope of this platform is very high and
                      advance.
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
            Why Choose Laravel Framework For
            <br /> Web Development?
          </h2>
          <p class="laravel_core_sub2">
            Laravel is open source PHP framework blessed with MVC architectural
            pattern.
            <br /> The Laravel Framework works great{" "}
          </p>
          <div class="laravel_choose_features_bx">
            <div class="row">
              <div class="col-sm-6 col-md-6" data-aos="fade-right">
                <div class="libraries_laravel_choose">
                  <div class="laravel_choose_features_img laravel_choose_features_img1">
                    <img
                      src="/img/laraveldevelopment/laravel-why-icon1.png"
                      alt="img1"
                    />
                  </div>
                  <div class="laravel_choose_details">
                    <h3>Well Guarded Codebase</h3>
                    <p>
                      Laravel is heavily protected against common technical
                      vulnerabilities i.e. SQL injection, cross site request
                      forgery and cross site scripting to a web application.{" "}
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-sm-6 col-md-6" data-aos="fade-left">
                <div class="libraries_laravel_choose libraries_laravel_choose-right">
                  <div class="laravel_choose_features_img laravel_choose_features_img2">
                    <img
                      src="/img/laraveldevelopment/laravel-why-icon2.png"
                      alt="img1"
                    />
                  </div>
                  <div class="laravel_choose_details">
                    <h3>Exception and Error Handling</h3>
                    <p>
                      Laravel includes Monolog logging library to give support
                      to log handling. Error and exception handling is{" "}
                      <b>pre configured in a Laravel</b> based application
                      reducing man and machine efforts.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-sm-6 col-md-6 " data-aos="fade-right">
                <div class="libraries_laravel_choose">
                  <div class="laravel_choose_features_img laravel_choose_features_img3">
                    <img
                      src="/img/laraveldevelopment/laravel-why-icon3.png"
                      alt="img1"
                    />
                  </div>
                  <div class="laravel_choose_details">
                    <h3>Testing</h3>
                    <p>
                      Phphunit.xml is <b>already present in the installation</b>{" "}
                      which allows automated testing of the projects. Laravel
                      simulates normal user behaviour for testing to get the
                      most out of the web application.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-sm-6 col-md-6" data-aos="fade-left">
                <div class="libraries_laravel_choose libraries_laravel_choose-right">
                  <div class="laravel_choose_features_img laravel_choose_features_img4">
                    <img
                      src="/img/laraveldevelopment/laravel-why-icon4.png"
                      alt="img1"
                    />
                  </div>
                  <div class="laravel_choose_details">
                    <h3>Pre-Installed Libraries</h3>
                    <p>
                      Laravel has a lot of object oriented libraries already
                      installed. Some libraries like authentication are quite
                      useful in maintaining the web application secure.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-sm-6 col-md-6" data-aos="fade-right">
                <div class="libraries_laravel_choose">
                  <div class="laravel_choose_features_img laravel_choose_features_img5">
                    <img
                      src="/img/laraveldevelopment/laravel-why-icon5.png"
                      alt="img1"
                    />
                  </div>
                  <div class="laravel_choose_details">
                    <h3>Database Migration</h3>
                    <p>
                      Database structure can be easily migrated without having
                      to re-write all the codes of the application. This is very
                      helpful as one does not lose any bunch of codes due to
                      this.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-sm-6 col-md-6" data-aos="fade-left">
                <div class="libraries_laravel_choose libraries_laravel_choose-right">
                  <div class="laravel_choose_features_img laravel_choose_features_img6">
                    <img
                      src="/img/laraveldevelopment/laravel-why-icon6.png"
                      alt="img1"
                    />
                  </div>
                  <div class="laravel_choose_details">
                    <h3>MVC Architecture Support</h3>
                    <p>
                      Alike other PHP frameworks, Laravel follows{" "}
                      <b>MVC structure</b> as well. This architecture provides
                      quick functioning and is suitable for large codes.
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
                        title="Laravel Development"
                      />
                    }
                  </div>
            </div>
          </div>
        </div>
      </section>

      <section class="laravel-portfolio-php-dev">
        <h2>Our Laravel Portfolio</h2>
        <div class="laravel-slider-bx">
          <div id="laravel-slader" class="">
            <Slider {...settings}>
              <div class="php-item SalesagySite">
                <a href="https://salesagy.com/" target="_blank">
                  <img
                    src="/img/laraveldevelopment/salesagy-banner.png"
                    alt="salesagy"
                  />
                </a>
                <a
                  href="https://salesagy.com/"
                  target="_blank"
                  class="visit-site"
                >
                  VISIT SITE
                </a>
              </div>
              <div class="php-item">
                <a href="https://iepwritingcollaborative.com/" target="_blank">
                  <img
                    src="/img/laraveldevelopment/iep-banner-new.png"
                    alt="IEP Jobs"
                  />
                </a>
                <a
                  href="https://iepwritingcollaborative.com/"
                  target="_blank"
                  class="visit-site"
                >
                  VISIT SITE
                </a>
              </div>
              <div class="php-item">
                <a href="https://www.designerstrends.com/" target="_blank">
                  <img
                    src="/img/laraveldevelopment/designerstrends-banner-new.png"
                    alt="designerstrends"
                  />
                </a>
                <a
                  href="https://www.designerstrends.com/"
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

      <section class="LaravelTestimonialSection">
        <div class="container">
          <h2>Client Feedback</h2>
          <div class="LaravelTestimonialMain">
            <div id="slide-clientfeadback" class="owl-carousel">
              <Slider {...clientfeadback}>
                <div class="LaravelTestimonialBx">
                  <div class="QuotesLaravel">
                    <img
                      src="/img/laraveldevelopment/laravel-quotes.png"
                      alt="quotes"
                    />
                  </div>
                  <div class="LaravelTestimonial">
                    <p>
                      Our experience with Logicspice in providing services in
                      our existing project has been nothing short of
                      exceptional. The team's expertise and dedication to our
                      project were evident from day one. They translated our
                      requirements into a robust and scalable solution. The open
                      communication and regular updates kept us in the loop,
                      making the entire development process smooth and
                      enjoyable. We highly recommend Logicspice for anyone
                      seeking top level Laravel development services.
                    </p>
                    <h4>John Welkins</h4>
                    <h6>Greece</h6>
                  </div>
                </div>

                <div class="LaravelTestimonialBx">
                  <div class="QuotesLaravel">
                    <img
                      src="/img/laraveldevelopment/laravel-quotes.png"
                      alt="quotes"
                    />
                  </div>
                  <div class="LaravelTestimonial">
                    <p>
                      Choosing Logicspice for our webservices API development
                      was a game changer for us. Their team's proficiency in
                      Laravel, coupled with their commitment to client
                      satisfaction, resulted in an innovative solution for our
                      business. From intricate functionalities to a
                      user-friendly interface, they exceeded our expectations at
                      every turn. Working with them was a collaborative and
                      rewarding experience. We appreciate their efforts and look
                      forward to future collaborations.
                    </p>
                    <h4>Emma Johnson</h4>
                    <h6>Germany</h6>
                  </div>
                </div>

                <div class="LaravelTestimonialBx">
                  <div class="QuotesLaravel">
                    <img
                      src="/img/laraveldevelopment/laravel-quotes.png"
                      alt="quotes"
                    />
                  </div>
                  <div class="LaravelTestimonial">
                    <p>
                      We extend our sincere thanks to Logicspice. The team's
                      technical knowledge and attention to detail were evident
                      throughout the project. They not only delivered a
                      high-performing Laravel based website but also showcased
                      flexibility in accommodating changes and providing timely
                      updates. It's rare to find a team that combines skill with
                      such a client-centric approach. We're delighted with the
                      results and would recommend Logicspice without hesitation.
                    </p>
                    <h4>Mohammad Ahmed</h4>
                    <h6>United Arab Emirates</h6>
                  </div>
                </div>

                <div class="LaravelTestimonialBx">
                  <div class="QuotesLaravel">
                    <img
                      src="/img/laraveldevelopment/laravel-quotes.png"
                      alt="quotes"
                    />
                  </div>
                  <div class="LaravelTestimonial">
                    <p>
                      Working with Logicspice to develop a dynamic website was a
                      strategic decision for our company. Their team's depth of
                      knowledge in Laravel, coupled with their professionalism,
                      ensured the success of our project. The final product
                      exceeded our expectations, and the ongoing support
                      provided post-launch has been invaluable. If you're in
                      search of a reliable partner, Logicspice is the way to go.
                    </p>
                    <h4>Maria Rodriguez</h4>
                    <h6>Venezuela</h6>
                  </div>
                </div>

                <div class="LaravelTestimonialBx">
                  <div class="QuotesLaravel">
                    <img
                      src="/img/laraveldevelopment/laravel-quotes.png"
                      alt="quotes"
                    />
                  </div>
                  <div class="LaravelTestimonial">
                    <p>
                      Our experience with Logicspice has been truly remarkable.
                      Their ability to develop complex projects combined
                      technical excellence with a collaborative approach. The
                      team's ability to understand and implement our vision was
                      commendable. The end result was a sophisticated solution
                      that has greatly contributed to our business objectives.
                      We appreciate the hard work and dedication of the entire
                      team at Logicspice.
                    </p>
                    <h4>William Turner</h4>
                    <h6>United States of America</h6>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>

      <section className="ecommerce_faq_section" id="faq">
        <div className="container">
          <div className="ecommerce__Quick_FAQ_Script">
            <div className="row">
              <div className="col-md-5" data-aos="fade-up">
                <h4 className="title_main">
                  Frequently <br />
                  Asked Questions
                </h4>
                <div className="FaqImgBx">
                  <img
                    src="/img/marketplacesoftware/FaqLaravelImg.png"
                    alt="laravel web development"
                  />
                </div>
              </div>
              <div className="col-md-7">
                <div className="ecommerce__Quick_FAQ">
                  <MDBAccordion v-model="activeItem" borderless>
                    <MDBAccordionItem
                      headerTitle="What is Laravel, and why is it popular for web development?"
                      collapseId="flush-collapse1"
                    >
                      <p>
                        Laravel is a PHP web application framework that provides
                        a simple and elegant syntax for developing modern,
                        robust, and scalable web applications. Laravel's
                        popularity comes from its unique features like modular
                        packaging system, easy database migrations, and built-in
                        authentication.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle="What type of projects can be developed using Laravel?"
                      collapseId="flush-collapse2"
                    >
                      <p>
                        Laravel is suitable for a wide range of web development
                        projects, from small web applications to large-scale
                        enterprise-level projects. It can be used to build
                        custom web applications, content management systems,
                        e-commerce platforms, and more.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle="What services do Laravel development companies offer?"
                      collapseId="flush-collapse3"
                    >
                      <p>
                        Laravel development companies can offer a wide range of
                        services, including web application development, custom
                        software development, e-commerce development, API
                        development, integration services, and maintenance and
                        support.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle="What is the cost of hiring a Laravel development company?"
                      collapseId="flush-collapse4"
                    >
                      <p>
                        The cost of hiring a Laravel development company can
                        vary depending on the company's location, size, and
                        experience. Generally, the cost of hiring a Laravel
                        development company can range from $25 to $150 per hour,
                        depending on the scope of the project and the complexity
                        of the web application.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle="What are the benefits of hiring a Laravel development agency?"
                      collapseId="flush-collapse5"
                    >
                      <p>
                        Some of the benefits of hiring a Laravel development
                        agency include having access to a team of experienced
                        developers, getting a high-quality web application built
                        quickly and efficiently, receiving technical support and
                        maintenance for your web application, and being able to
                        focus on your core business activities.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle="Can I remove your company proprietary notices?"
                      collapseId="flush-collapse6"
                    >
                      <p>
                        With an extra charge for that, you are allowed to modify
                        the branding there. You can remove our company
                        information and put yours. But you cannot put "copyright
                        by" because only Logicspice owns the copyrights for our
                        softwares.
                      </p>
                    </MDBAccordionItem>
                  </MDBAccordion>
                </div>
              </div>
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
            <img src="/img/images/whatsapp.png" alt="whatsapp-icon" />
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