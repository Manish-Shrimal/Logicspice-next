"use client";
import React, { useState } from "react";
import Footer from "@/app/Components/Footer";
import NavBar from "@/app/Components/Navbar";
import "@/app/services/services.css";
import Image from "next/image";
import Link from "next/link";
import "@fortawesome/fontawesome-free/css/all.css";
import Enquirymodal from "@/app/Components/Enquirymodal";
import Contactusmodel from "@/app/Components/Contactusmodel";
import Ourclient from "../../Components/Ourclient";
import Certificationtabs from "../../Components/Certificationtabs";
import Workingwith from "../../Components/Workingwith";
import Processconvert from "../../Components/Processconvert";
import "../../resposive.css";
const Page = () => {
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
      <section class="slider_img shopifyslider_img">
        <div class="container">
          <div class="slider_inner_img">
            <img
              alt="PSD to HTML Conversion Services"
              src="/img/psdtowordpress/psd-to-html.png"
            />
          </div>
        </div>
      </section>

      <section class="our_adeptness_section">
        <div class="container">
          <h1 class="main-heading">
            Quick Glance To <span>Our HTML Services</span>
          </h1>
          <div class="row">
            <div class="col-md-3 col-sm-6">
              <div class="adeptness_mid_block_inner">
                <div class="adeptness_icon_top">
                  <img
                    alt="convert PSD to Wordpress"
                    src="/img/psdtowordpress/pstowp.png"
                  />
                </div>
                <div class="adeptness_box_content">PSD to HTML</div>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="adeptness_mid_block_inner">
                <div class="adeptness_icon_top">
                  <img
                    alt="PSD to Wordpress Conversion Services"
                    src="/img/psdtowordpress/migration-maintence.png"
                  />
                </div>
                <div class="adeptness_box_content">24*7 Technical Support</div>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="adeptness_mid_block_inner">
                <div class="adeptness_icon_top">
                  <img
                    alt="PSD to Wordpress Conversion Services"
                    src="/img/psdtowordpress/wordpressthemeicon.png"
                  />
                </div>
                <div class="adeptness_box_content">
                  {" "}
                  Wordpress Theme Development
                </div>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="adeptness_mid_block_inner">
                <div class="adeptness_icon_top">
                  <img
                    alt="PSD to Wordpress Conversion Services"
                    src="/img/psdtowordpress/customwordpressicon.png"
                  />
                </div>
                <div class="adeptness_box_content">
                  Wordpress Module Installation
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="adeptness_content">
          <div class="container">
            <p>
              Being a reliable PSD to responsive HTML provider&sbquo; we employ
              cutting edge designs and seamless Java features to generate best
              possible product out of your PSD. We undertake expertise in
              catering to our clients the facility of PSD to HTML responsive
              conversions.{" "}
            </p>
            <br />
            <p>
              Equipped with exceptional team of developers and experienced
              designers&sbquo; we remain ever ready to convert any file design to HTML
              utilizing CSS preprocessors along with JavaScript. Our best psd to
              html conversion service is regarded as one of the best owing to
              its seamless functionality and responsiveness.
            </p>
            <br />
            <p>
              Moreover&sbquo; we also fulfill front end requirements of customers such
              as giving parallax effect or putting animations and videos in the
              background. Being equipped with talented developers&sbquo; we assist you
              in bringing your artwork to best possible life by simply
              converting it into a dynamic and easy to use site. To enhance the
              user experience and customer satisfaction&sbquo; we develop the site
              based on code based CMS platform of your choice&sbquo; such as
              WordPress&sbquo; Shopify or Joomla.
            </p>
            <br />
            <p>
              Logicspice takes responsive web development to an altogether next
              level employing hand coding and pixel perfect designs.
            </p>
          </div>
        </div>
      </section>
      <section class="slider_section slider_sectionsetbgs">
        <div class="container">
          <h2 class="title_setof_nav">
            Our Process to convert <span>PSD to HTML</span>
          </h2>
          <div class="slider_wrapper">
            <div class="slider_wrapper_inner">
              <div class="slider_wrapper_inner_content_in">
                <div class="slider_wrapper_inner_content">
                  <div id="processslide" class="owl-carousel hidedot">

                  <Processconvert />

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="wordpress_to_psd">
        <div class="container">
          <div class="title-sec">
            <h2>
              Why we are best when it comes to <span>PSD to HTML</span>{" "}
              conversions?
            </h2>
            <p>
              In the terms of quality &amp; performance&sbquo; you can expect high
              from us. What we give to our clients-
            </p>
          </div>

          <div class="row">
            <div class="col-md-4 col-sm-6">
              <div class="adeptness_psd_col_inner">
                <div class="adeptness_psd_icon_box">
                  <img
                    alt="PSD to Shopify Conversion Services"
                    src="/img/psdtowordpress/pixcel_perfect_icon.png"
                  />
                </div>
                <h3 class="adeptness_psd_title_box">Seo friendly conversion</h3>
                <div class="adeptness_psd_content_box">
                  Our developer utilize SEO friendly markups while coding and
                  ensure that it remains free from glitches.
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div class="adeptness_psd_col_inner">
                <div class="adeptness_psd_icon_box">
                  <img
                    alt="PSD to Shopify Conversion Services"
                    src="/img/psdtowordpress/compability_all_browsers_icon.png"
                  />
                </div>
                <h3 class="adeptness_psd_title_box">Security </h3>
                <div class="adeptness_psd_content_box">
                  We provide 100% guarantee for the security of your website by
                  making it equipped with best security features.
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div class="adeptness_psd_col_inner">
                <div class="adeptness_psd_icon_box">
                  <img
                    alt="PSD to Shopify Conversion Services"
                    src="/img/psdtowordpress/w3c_validator_icon.png"
                  />
                </div>
                <h3 class="adeptness_psd_title_box">Quick speed loading </h3>
                <div class="adeptness_psd_content_box">
                  We optimized images&sbquo; codes and CSS while converting the PSD
                  into HTML&sbquo; it makes the file size smaller.
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div class="adeptness_psd_col_inner">
                <div class="adeptness_psd_icon_box">
                  <img
                    alt="PSD to Shopify Conversion Services"
                    src="/img/psdtowordpress/list_responsive_icon.png"
                  />
                </div>
                <h3 class="adeptness_psd_title_box">
                  Responsive and platform oriented
                </h3>
                <div class="adeptness_psd_content_box">
                  We make HTML markup that is cross browser and device
                  compatible withsmooth functionality.{" "}
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div class="adeptness_psd_col_inner">
                <div class="adeptness_psd_icon_box">
                  <img
                    alt="PSD to Shopify Conversion Services"
                    src="/img/psdtowordpress/list_optimised_icon.png"
                  />
                </div>
                <h3 class="adeptness_psd_title_box">Easy integration</h3>
                <div class="adeptness_psd_content_box">
                  We allow the facility of smooth integration&sbquo; so that you can
                  add something to site whenever you want.{" "}
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div class="adeptness_psd_col_inner">
                <div class="adeptness_psd_icon_box">
                  <img
                    alt="PSD to Shopify Conversion Services"
                    src="/img/psdtowordpress/list_efficient_icon.png"
                  />
                </div>
                <h3 class="adeptness_psd_title_box">Browser compatibility </h3>
                <div class="adeptness_psd_content_box">
                  It runs smoothly on Google chrome&sbquo; Mozilla and with every
                  popular browser.{" "}
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div class="adeptness_psd_col_inner">
                <div class="adeptness_psd_icon_box">
                  <img
                    alt="PSD to Shopify Conversion Services"
                    src="/img/psdtowordpress/list_theme_customization_icon.png"
                  />
                </div>
                <h3 class="adeptness_psd_title_box">Validated HTML markup</h3>
                <div class="adeptness_psd_content_box">
                  The coding is done manually utilizing CSS preprocessor for
                  ensuring better readability along with easy maintenance.{" "}
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div class="adeptness_psd_col_inner">
                <div class="adeptness_psd_icon_box">
                  <img
                    alt="PSD to Shopify Conversion Services"
                    src="/img/psdtowordpress/admin_interface_icon.png"
                  />
                </div>
                <h3 class="adeptness_psd_title_box">Interactive appeal</h3>
                <div class="adeptness_psd_content_box">
                  Users like to browse sites that are interactive. Our experts
                  make your site highly interactive to convert the users to
                  customers.{" "}
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div class="adeptness_psd_col_inner">
                <div class="adeptness_psd_icon_box">
                  <img
                    alt="PSD to Shopify Conversion Services"
                    src="/img/psdtowordpress/list_fast_loading_icon.png"
                  />
                </div>
                <h3 class="adeptness_psd_title_box">Affordable</h3>
                <div class="adeptness_psd_content_box">
                  The psd to html service conversion is offered at most
                  affordable rates to meet highest customer satisfaction
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div class="adeptness_psd_col_inner">
                <div class="adeptness_psd_icon_box">
                  <img
                    alt="PSD to Shopify Conversion Services"
                    src="/img/psdtowordpress/privacy_support_icon.png"
                  />
                </div>
                <h3 class="adeptness_psd_title_box">Support</h3>
                <div class="adeptness_psd_content_box">
                  Our support is reliable and dedicated; we provide answer to
                  your queries 24/7 through our experienced team.
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div class="adeptness_psd_col_inner">
                <div class="adeptness_psd_icon_box">
                  <img
                    alt="PSD to Shopify Conversion Services"
                    src="/img/psdtowordpress/list_searchengine_icon.png"
                  />
                </div>
                <h3 class="adeptness_psd_title_box">Pixel perfect </h3>
                <div class="adeptness_psd_content_box">
                  The conversion from PSD to HTML is done using pixel perfect
                  designs to create a picture perfect design.
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div class="adeptness_psd_col_inner">
                <div class="adeptness_psd_icon_box">
                  <img
                    alt="PSD to Shopify Conversion Services"
                    src="/img/psdtowordpress/list_widget_icon.png"
                  />
                </div>
                <h3 class="adeptness_psd_title_box">Privacy support</h3>
                <div class="adeptness_psd_content_box">
                  Privacy is one of the most crucial aspects of our service and
                  we make it a point to never contact your client.{" "}
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div class="adeptness_psd_col_inner">
                <div class="adeptness_psd_icon_box">
                  <img
                    alt="PSD to Shopify Conversion Services"
                    src="/img/psdtowordpress/list_best_price_icon.png"
                  />
                </div>
                <h3 class="adeptness_psd_title_box">Admin panel facility</h3>
                <div class="adeptness_psd_content_box">
                  To ensure that you are able to monitor the site well&sbquo; we
                  provide you with admin control facility along with integration
                  board.
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div class="adeptness_psd_col_inner">
                <div class="adeptness_psd_icon_box">
                  <img
                    alt="PSD to Shopify Conversion Services"
                    src="/img/psdtowordpress/list_outstanding_icon.png"
                  />
                </div>
                <h3 class="adeptness_psd_title_box">HTML/CSS +SASS</h3>
                <div class="adeptness_psd_content_box">
                  HTML code compatibility with SASS that makes the website
                  equipped with exceptional features.
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div class="adeptness_psd_col_inner">
                <div class="adeptness_psd_icon_box">
                  <img
                    alt="PSD to Shopify Conversion Services"
                    src="/img/psdtowordpress/security_icon_psd.png"
                  />
                </div>
                <h3 class="adeptness_psd_title_box">
                  Advanced HTML Web standards{" "}
                </h3>
                <div class="adeptness_psd_content_box">
                  We are well aware of the present trends and standards in
                  respect to HTML.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="requirement_section">
        <div class="container">
          <div class="requir_title">
            Our Efforts Reflects from Our Portfolio
          </div>
          <p class="sbucint">
            Logicspice helps you bring your creativity to fruition. If you have
            any idea in your mind which you want to present before the world as
            your business&sbquo; you are not late.{" "}
            <a href="https://www.logicspice.com/hire-developers/">
              Hire developer
            </a>{" "}
            from our experienced team and give a start to your business.
          </p>
          <div class="requirment_btn">
            <a
              class="btn btn-primary"
              data-aos="fade-right"
              id="inquirenow"
              href="https://www.logicspice.com/portfolio/"
            >
              Portfolio
            </a>
          </div>
        </div>
      </section>
      <section class="expert_mind">
        <h2 class="title_setof_nav">
          Hire <span>Expert Minds</span> For Different Platform
        </h2>
        <div class="container">
          <div class="expert_minds">
            <div class="expert_minds_con">
              <p>
                If you are good at designing&sbquo; we are good at developing. We can
                help you to create a WordPress theme out of the design you
                created. All we will need is your design in the PSD format and
                we will provide code into HTML to provide you with a WordPress
                theme as imagined by you.
              </p>
            </div>
            <div class="different_experts">
              <ul class="different_experts_member">
                <li class="different_experts_name">
                  <a href="https://www.logicspice.com/hire-android-app-developers/">
                    <i aria-hidden="true" class="fa fa-angle-right"></i> Hire
                    Android App Developer
                  </a>
                </li>
                <li class="different_experts_name">
                  <a href="https://www.logicspice.com/hire-ios-app-developers/">
                    <i aria-hidden="true" class="fa fa-angle-right"></i> Hire
                    iOS App Developer
                  </a>
                </li>
                <li class="different_experts_name">
                  <a href="https://www.logicspice.com/hire-cakephp-developers/">
                    <i aria-hidden="true" class="fa fa-angle-right"></i> Hire
                    Cake PHP Developer
                  </a>
                </li>
                <li class="different_experts_name">
                  <a href="https://www.logicspice.com/hire-wordpress-experts/">
                    <i aria-hidden="true" class="fa fa-angle-right"></i> Hire
                    Wordpress Developer
                  </a>
                </li>
                <li class="different_experts_name">
                  <a href="https://www.logicspice.com/hire-drupal-experts/">
                    <i aria-hidden="true" class="fa fa-angle-right"></i> Hire
                    Drupal Developer
                  </a>
                </li>
                <li class="different_experts_name">
                  <a href="https://www.logicspice.com/hire-magento-experts/">
                    <i aria-hidden="true" class="fa fa-angle-right"></i> Hire
                    Magento Developer
                  </a>
                </li>
                <li class="different_experts_name">
                  <a href="https://www.logicspice.com/hire-zencart-experts/">
                    <i aria-hidden="true" class="fa fa-angle-right"></i> Hire
                    Zencart Developer
                  </a>
                </li>
                <li class="different_experts_name">
                  <a href="https://www.logicspice.com/hire-shopify-developers/">
                    <i aria-hidden="true" class="fa fa-angle-right"></i> Hire
                    Shopify Developers
                  </a>
                </li>
                <li class="different_experts_name">
                  <a href="https://www.logicspice.com/hire-laravel-developers/">
                    <i aria-hidden="true" class="fa fa-angle-right"></i> Hire
                    Laravel Developers
                  </a>
                </li>
                <li class="different_experts_name">
                  <a href="https://www.logicspice.com/hire-codeigniter-developers/">
                    <i aria-hidden="true" class="fa fa-angle-right"></i> Hire
                    Codeigniter Developers
                  </a>
                </li>
                <li class="different_experts_name">
                  <a href="https://www.logicspice.com/hire-node-js-experts/">
                    <i aria-hidden="true" class="fa fa-angle-right"></i> Hire
                    Node.Js Experts
                  </a>
                </li>
                <li class="different_experts_name">
                  <a href="https://www.logicspice.com/hire-angular-js-developers/">
                    <i aria-hidden="true" class="fa fa-angle-right"></i> Hire
                    Angular jS Developers
                  </a>
                </li>
                <li class="different_experts_name">
                  <a href="https://www.logicspice.com/hire-yii-developers/">
                    <i aria-hidden="true" class="fa fa-angle-right"></i> Hire
                    Yii Developers
                  </a>
                </li>
                <li class="different_experts_name">
                  <a href="https://www.logicspice.com/hire-opencart-developers/">
                    <i aria-hidden="true" class="fa fa-angle-right"></i> Hire
                    Opencart Developers
                  </a>
                </li>
                <li class="different_experts_name">
                  <a href="https://www.logicspice.com/hire-hybrid-mobile-app-developer/">
                    <i aria-hidden="true" class="fa fa-angle-right"></i> Hire
                    Hybrid mobile app Developer
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="testimonial-hire">
        <div className="container">
          <div>
            <Ourclient />
          </div>
        </div>
      </section>

      <section className="certificates certificationawardsecin dgd">
        <div className="container">
          <Certificationtabs />
        </div>
      </section>

      <section className="working_with">
        <div className="container">
          <h3 className="title_heading title_heading_bgg">
            Worked with 1500+ companies worldwide&sbquo; from startups to enterprises.
          </h3>

          <Workingwith />
        </div>
      </section>

      <section className="quoue_box_full_sec">
        <div className="whatsapp-call">
          <a
            href="https://api.whatsapp.com/send?phone=+919829559922&amp;text=Hi Logicspice Team&sbquo; I have a question regarding the solutions you provide. Please Help!"
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

export default Page;
