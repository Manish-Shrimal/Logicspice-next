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
const Page = () => {
  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
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
      <section className="WebDevelopmentBanner WebsiteRedesignBanner">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-6">
              <div className="WebDevelopmentBannerBx">
                <h2>Website Redesign</h2>
                <p>
                  In the current dynamic market place&sbquo; change is
                  inevitable. If someone ignores these changes and refuses to
                  adapt to the fresh perspectives then they are bound to impart
                  with some of their efficiency.
                </p>
                <div className="btn btn-primary" onClick={openModal}>
                  <button>Enquire Now</button>
                  {
                    <Enquirymodal
                      modalStatus={showModal}
                      toggle={openModal}
                      title="Website Redesign"
                    />
                  }
                </div>
                <Link
                  href="https://api.whatsapp.com/send?phone=+919829559922&text=Hi Logicspice Team&sbquo; I have a question regarding the solutions you provide. Please Help!"
                  target="_blank"
                >
                  <div className="WhatsappIcon">
                    <div className="coccoc-alo-phone coccoc-alo-green coccoc-alo-show">
                      <div className="coccoc-alo-ph-circle"></div>
                      <div className="coccoc-alo-ph-circle-fill"></div>
                      <div className="coccoc-alo-ph-img-circle"></div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="WebDevelopmentClients">
        <div className="container">
          <ul>
            <li>
              <span>Our Clients</span>
            </li>
            <li>
              <Image
                 width={100}
                 height={500 / (100 / 100)}
                src="/img/webdevelopment/client-logo-img1.png"
                alt="Website Redesign Services"
              />
            </li>
            <li>
              <Image
                width={120}
                height={500 / (100 / 100)}
                src="/img/webdevelopment/client-logo-img2.png"
                alt="Website Redesign Services"
              />
            </li>
            <li>
              <Image
                 width={120}
                 height={500 / (100 / 100)}
                src="/img/webdevelopment/client-logo-img3.png"
                alt="Website Redesign Services"
              />
            </li>
            <li>
              <Image
                 width={220}
                 height={500 / (100 / 100)}
                src="/img/webdevelopment/client-logo-img4.png"
                alt="Website Redesign Services"
              />
            </li>
          </ul>
        </div>
      </section>
      <section className="WebDevelopmentApplication">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-6">
              <div className="WebDevelopmentApplicationBx">
                <h2>
                  Website Redesign <span>Services</span>
                </h2>
                <p>
                  In the current dynamic market place&sbquo; change is
                  inevitable. If someone ignores these changes and refuses to
                  adapt to the fresh perspectives then they are bound to impart
                  with some of their efficiency. Constant updates and
                  developments keep an enterprise at par with the trends and
                  maintain their market share. The Website Redesign companies
                  incorporate the recent changes and updates in the enterprise
                  through their web pages and{" "}
                  <a
                    href="https://www.logicspice.com/website-development/"
                    target="_blank"
                  >
                    websites development
                  </a>
                  . It integrates the technological updates and developments so
                  that your application and websites are equally accessible over
                  different platforms.
                </p>

                <p>
                  {" "}
                  Logicspice provides trending designs and layouts with a wide
                  range of options to choose from. Our clients always get their
                  say in as many matters they want to influence with their
                  creativity. Now a day&apos;s online transition is not limited
                  to the creation of a website. It requires constant updates and
                  maintenance services from time to time. In addition&sbquo; the
                  website must be made out of alluring elements which are
                  capable of keeping customer attached for a long time. At
                  Logicspice <b>customer satisfaction</b> is of paramount
                  importance. Our developers make sure that the values and
                  philosophies of the enterprise and management are reflected
                  through the website. We make websites search engine
                  friendly&sbquo; aesthetically pleasant&sbquo; optimized in
                  performance and loaded with fluency of operations.
                </p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6">
              <div className="WebDevelopmentApplicationImg">
                <Image
                   width={600}
                   height={500 / (100 / 100)}
                  src="/img/webdevelopment/redesign-img.png"
                  alt="Website Redesign Services"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="WebDesignDevelopmentSection">
        <div className="container">
          <div className="TopHadding">
            <h2>
              Website <span>Redesign Service</span>
            </h2>
          </div>
          <div className="WebDesignDevelopment">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="WebDesignDevelopmentBx">
                  <i>
                    <Image
                      width={100}
                      height={100}
                      src="/img/webdevelopment/web-design-icon1.png"
                      alt="Website Redesign Services"
                    />
                  </i>
                  <h3>
                    Keeping <br />
                    Up
                  </h3>
                  <p>
                    The website redesign proposal provided through our services
                    is up to date and in sync with the current trends.
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="WebDesignDevelopmentBx">
                  <i>
                    <Image
                      width={100}
                      height={100}
                      src="/img/webdevelopment/web-design-icon2.png"
                      alt="Website Redesign Services"
                    />
                  </i>
                  <h3>
                    Website Redesign <br />
                    Cost
                  </h3>
                  <p>
                    Website redesign cost is minimal as only tweaking and
                    trimming is required in redesigning of an existing web page.
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="WebDesignDevelopmentBx">
                  <i>
                    <Image
                      width={100}
                      height={100}
                      src="/img/webdevelopment/web-design-icon5.png"
                      alt="Website Redesign Services"
                    />
                  </i>
                  <h3>
                    Transparent
                    <br />
                    Navigation
                  </h3>
                  <p>
                    Navigation in the pages rendered by our web redesign Company
                    support transparent navigation system.
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="WebDesignDevelopmentBx">
                  <i>
                    <Image
                      width={100}
                      height={100}
                      src="/img/webdevelopment/web-design-icon7.png"
                      alt="Website Redesign Services"
                    />
                  </i>
                  <h3>
                    Client&apos;s <br />
                    Perspective
                  </h3>
                  <p>
                    Client&apos;s creativity is also considered by our
                    developers through redesigning website <br />
                    portals.
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="WebDesignDevelopmentBx">
                  <i>
                    <Image
                      width={100}
                      height={100}
                      src="/img/webdevelopment/web-design-icon3.png"
                      alt="Website Redesign Services"
                    />
                  </i>
                  <h3>
                    Web
                    <br />
                    Compatibility
                  </h3>
                  <p>
                    Web page redesign is done with compatibility of the page
                    across different platforms in mind.
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="WebDesignDevelopmentBx">
                  <i>
                    <Image
                      width={100}
                      height={100}
                      src="/img/webdevelopment/web-design-icon4.png"
                      alt="Website Redesign Services"
                    />
                  </i>
                  <h3>
                    Interactive
                    <br />
                    Web Designs
                  </h3>
                  <p>
                    Adequate care is given to make sites interactive. Our
                    designers role in this field is recommendable.
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="WebDesignDevelopmentBx">
                  <i>
                    <Image
                      width={100}
                      height={100}
                      src="/img/webdevelopment/web-design-icon6.png"
                      alt="Website Redesign Services"
                    />
                  </i>
                  <h3>
                    Search Engine
                    <br />
                    Optimization
                  </h3>
                  <p>
                    Our web pages are made search engine friendly as per the
                    client&apos;s requirements.
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="WebDesignDevelopmentBx">
                  <i>
                    <Image
                      width={100}
                      height={100}
                      src="/img/webdevelopment/web-design-icon8.png"
                      alt="Website Redesign Services"
                    />
                  </i>
                  <h3>
                    Engaging Designs <br />
                    And Layouts
                  </h3>
                  <p>
                    We present our clients an assortment of aesthetically
                    appealing and engaging designs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="WebFeaturesSection WebsiteRedesignServiceSection">
        <div className="row m-0">
          <div className="col-sm-12 col-md-6 p-0">
            <div className="WebsiteRedesignServiceImg">
              <Image
                width={900}
                height={500 / (100 / 100)}
                src="/img/webdevelopment/website-redesign-img.jpg"
                alt="Website Redesign Services"
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-6 p-0">
            <div className="WebsiteRedesignServicecontainer">
              <div className="TopHadding WebFeaturesRight">
                <h2>
                  Why Go For
                  <br />
                  <span>Website Redesign Service?</span>
                </h2>
                <ul>
                  <li>Using Outdated Technologies</li>
                  <li>Website Functioning is not working properly</li>
                  <li>Requirement of CMS</li>
                  <li>Website is not optimized for search engine</li>
                  <li>High competition in Market</li>
                  <li>Speed and performance issue</li>
                  <li>
                    Not Responsible for Mobile&sbquo; tablets & other large
                    screens
                  </li>
                  <li>User find difficulty while contacting you</li>
                  <li>Need of new branding</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="WebLatestProjectsSection">
        <div className="container">
          <div className="TopHadding">
            <h2>
              Latest <span>Projects</span>
            </h2>
          </div>
          <div className="WebLatestProjects">
            <div className="" id="slide-latestproducts">
              <Slider {...settings}>
                <div className="WebLatestProjectsSlide WebLatestGreen">
                  <div className="WebProjectLogo">
                    <Image
                      width={60}
                      height={500 / (100 / 100)}
                      src="/img/webdevelopment/goodluck-logo.png"
                      alt="Website Redesign Services"
                    />
                  </div>
                  <p>
                    Create your profile&sbquo; showcasing your experience&sbquo;
                    skills and the markets you can reach.
                  </p>
                  <div className="WebProjectInfo">
                    <div className="WebProjectInfoLeft">
                      <a href="https://www.goodlucknc.com/" target="_blank">
                        <i
                          className="fa-solid fa-earth-americas"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </div>
                    <div className="WebProjectInfoView">
                      <a
                        href="https://www.logicspice.com/portfolio"
                        className=""
                      >
                        View Portfolio
                      </a>
                    </div>
                  </div>
                  <div className="WebProjectImg">
                    <div className="WebProjectImgBx">
                      <Image
                        width={400}
                        height={500 / (100 / 100)}
                        src="/img/webdevelopment/goodluck-img.png"
                        alt="Website Redesign Services"
                      />
                    </div>
                  </div>
                  <div className="RingImg">
                    <Image
                      width={100}
                      height={100}
                      src="/img/webdevelopment/ring-img.png"
                      alt="Website Redesign Services"
                    />
                  </div>
                </div>
                <div className="WebLatestProjectsSlide WebLatestRed">
                  <div className="WebProjectLogo">
                    <Image
                      width={100}
                      height={100}
                      src="/img/webdevelopment/salesagy-logo.png"
                      alt="Website Redesign Services"
                    />
                  </div>
                  <p>
                    Create your profile&sbquo; showcasing your experience&sbquo;
                    skills and the markets you can reach.
                  </p>
                  <div className="WebProjectInfo">
                    <div className="WebProjectInfoLeft">
                      <a href="https://salesagy.com/" target="_blank">
                        <i
                          className="fa-solid fa-earth-americas"
                          aria-hidden="true"
                        ></i>
                      </a>
                      <i
                        className="fa-brands fa-android"
                        aria-hidden="true"
                      ></i>
                      <i className="fa-brands fa-apple" aria-hidden="true"></i>
                    </div>
                    <div className="WebProjectInfoView">
                      <a
                        href="https://www.logicspice.com/portfolio"
                        className=""
                      >
                        View Portfolio
                      </a>
                    </div>
                  </div>
                  <div className="WebProjectImg">
                    <div className="WebProjectImgBx">
                      <Image
                       width={400}
                       height={500 / (100 / 100)}
                        src="/img/webdevelopment/salesagy-img.png"
                        alt="Website Redesign Services"
                      />
                    </div>
                  </div>
                  <div className="RingImg">
                    <Image
                      width={100}
                      height={100}
                      src="/img/webdevelopment/ring-img.png"
                      alt="Website Redesign Services"
                    />
                  </div>
                </div>

                <div className="WebLatestProjectsSlide WebLatestJobatHome">
                  <div className="WebProjectLogo">
                    <Image
                      width={100}
                      height={100}
                      src="/img/webdevelopment/jobathome-logo.png"
                      alt="Website Redesign Services"
                    />
                  </div>
                  <p>
                    Create your profile&sbquo; showcasing your experience&sbquo;
                    skills and the markets you can reach.
                  </p>
                  <div className="WebProjectInfo">
                    <div className="WebProjectInfoLeft">
                      <a href="https://salesagy.com/" target="_blank">
                        <i
                          className="fa-solid fa-earth-americas"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </div>
                    <div className="WebProjectInfoView">
                      <a
                        href="https://www.logicspice.com/portfolio"
                        className=""
                      >
                        View Portfolio
                      </a>
                    </div>
                  </div>
                  <div className="WebProjectImg">
                    <div className="WebProjectImgBx">
                      <Image
                        width={400}
                        height={500 / (100 / 100)}
                        src="/img/webdevelopment/jobathome-img.png"
                        alt="Website Redesign Services"
                      />
                    </div>
                  </div>
                  <div className="RingImg">
                    <Image
                      width={100}
                      height={100}
                      src="/img/webdevelopment/ring-img.png"
                      alt="Website Redesign Services"
                    />
                  </div>
                </div>
                <div className="WebLatestProjectsSlide WebLatestGreen">
                  <div className="WebProjectLogo">
                    <Image
                      width={100}
                      height={100}
                      src="/img/webdevelopment/fundcareusa-logo.png"
                      alt="Website Redesign Services"
                    />
                  </div>
                  <p>
                    Create your profile&sbquo; showcasing your experience&sbquo;
                    skills and the markets you can reach.
                  </p>
                  <div className="WebProjectInfo">
                    <div className="WebProjectInfoLeft">
                      <a href="https://salesagy.com/" target="_blank">
                        <i
                          className="fa-solid fa-earth-americas"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </div>
                    <div className="WebProjectInfoView">
                      <a
                        href="https://www.logicspice.com/portfolio"
                        className=""
                      >
                        View Portfolio
                      </a>
                    </div>
                  </div>
                  <div className="WebProjectImg">
                    <div className="WebProjectImgBx">
                      <Image
                       width={400}
                       height={500 / (100 / 100)}
                        src="/img/webdevelopment/fundcareusa-img.png"
                        alt="Website Redesign Services"
                      />
                    </div>
                  </div>
                  <div className="RingImg">
                    <Image
                      width={100}
                      height={100}
                      src="/img/webdevelopment/ring-img.png"
                      alt="Website Redesign Services"
                    />
                  </div>
                </div>

                <div className="WebLatestProjectsSlide WebLatestTacksm">
                  <div className="WebProjectLogo">
                    <Image
                      width={100}
                      height={100}
                      src="/img/webdevelopment/tacksm-logo.png"
                      alt="Website Redesign Services"
                    />
                  </div>
                  <p>
                    Create your profile&sbquo; showcasing your experience&sbquo;
                    skills and the markets you can reach.
                  </p>
                  <div className="WebProjectInfo">
                    <div className="WebProjectInfoLeft">
                      <a href="https://salesagy.com/" target="_blank">
                        <i
                          className="fa-solid fa-earth-americas"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </div>
                    <div className="WebProjectInfoView">
                      <a
                        href="https://www.logicspice.com/portfolio"
                        className=""
                      >
                        View Portfolio
                      </a>
                    </div>
                  </div>
                  <div className="WebProjectImg">
                    <div className="WebProjectImgBx">
                      <Image
                       width={400}
                       height={500 / (100 / 100)}
                        src="/img/webdevelopment/tacksm-img.png"
                        alt="Website Redesign Services"
                      />
                    </div>
                  </div>
                  <div className="RingImg">
                    <Image
                      width={100}
                      height={100}
                      src="/img/webdevelopment/ring-img.png"
                      alt="Website Redesign Services"
                    />
                  </div>
                </div>

                <div className="WebLatestProjectsSlide WebLatestVanessajo">
                  <div className="WebProjectLogo">
                    <Image
                      width={100}
                      height={100}
                      src="/img/webdevelopment/vanessajo-logo.png"
                      alt="Website Redesign Services"
                    />
                  </div>
                  <p>
                    Create your profile&sbquo; showcasing your experience&sbquo;
                    skills and the markets you can reach.
                  </p>
                  <div className="WebProjectInfo">
                    <div className="WebProjectInfoLeft">
                      <a href="https://salesagy.com/" target="_blank">
                        <i
                          className="fa-solid fa-earth-americas"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </div>
                    <div className="WebProjectInfoView">
                      <a
                        href="https://www.logicspice.com/portfolio"
                        className=""
                      >
                        View Portfolio
                      </a>
                    </div>
                  </div>
                  <div className="WebProjectImg">
                    <div className="WebProjectImgBx">
                      <Image
                       width={400}
                       height={500 / (100 / 100)}
                        src="/img/webdevelopment/vanessajo-img.png"
                        alt="Website Redesign Services"
                      />
                    </div>
                  </div>
                  <div className="RingImg">
                    <Image
                      width={100}
                      height={100}
                      src="/img/webdevelopment/ring-img.png"
                      alt="Website Redesign Services"
                    />
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>

      <section className="laravel_choose_features_section">
        <div className="container">
          <div className="TopHadding">
            <h2>
              Why Choose <span>Logicspice For Web Design Service?</span>
            </h2>
          </div>
          <div className="laravel_choose_features_bx WebProjectInfoChooseFeaturesBx">
            <div className="row">
              <div
                className="col-sm-6 col-md-6 aos-init aos-animate"
                data-aos="fade-right"
              >
                <div className="libraries_laravel_choose">
                  <div className="laravel_choose_features_img laravel_choose_features_img1">
                    <Image
                      width={60}
                      height={100}
                      src="/img/webdevelopment/webdevelopment-why-icon1.png"
                      alt="img1"
                    />
                  </div>
                  <div className="laravel_choose_details">
                    <h3>User Friendly Layout</h3>
                    <p>
                      We ensure the integration of the latest technological
                      advancements in our web app development processes.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-sm-6 col-md-6 aos-init aos-animate"
                data-aos="fade-left"
              >
                <div className="libraries_laravel_choose libraries_laravel_choose-right">
                  <div className="laravel_choose_features_img laravel_choose_features_img2">
                    <Image
                      width={60}
                      height={100}
                      src="/img/webdevelopment/webdevelopment-why-icon2.png"
                      alt="img1"
                    />
                  </div>
                  <div className="laravel_choose_details">
                    <h3>Dedicated Developers</h3>
                    <p>
                      The website re-designers understand the importance of
                      their job and perform it perfectly.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 aos-init" data-aos="fade-right">
                <div className="libraries_laravel_choose">
                  <div className="laravel_choose_features_img laravel_choose_features_img3">
                    <Image
                      width={60}
                      height={100}
                      src="/img/webdevelopment/webdevelopment-why-icon3.png"
                      alt="img1"
                    />
                  </div>
                  <div className="laravel_choose_details">
                    <h3>Cost Effective</h3>
                    <p>
                      Redesigning your website from logicspice is an inexpensive
                      procedure.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 aos-init" data-aos="fade-left">
                <div className="libraries_laravel_choose libraries_laravel_choose-right">
                  <div className="laravel_choose_features_img laravel_choose_features_img4">
                    <Image
                      width={60}
                      height={100}
                      src="/img/webdevelopment/webdevelopment-why-icon4.png"
                      alt="img1"
                    />
                  </div>
                  <div className="laravel_choose_details">
                    <h3>Effectively Design</h3>
                    <p>
                      While redesigning website&sbquo; every move and shift is
                      done purposely.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 aos-init" data-aos="fade-right">
                <div className="libraries_laravel_choose">
                  <div className="laravel_choose_features_img laravel_choose_features_img5">
                    <Image
                      width={60}
                      height={100}
                      src="/img/webdevelopment/webdevelopment-why-icon5.png"
                      alt="img1"
                    />
                  </div>
                  <div className="laravel_choose_details">
                    <h3>Transparent Services</h3>
                    <p>
                      Things are clear and visible&sbquo; as it is redesigned as
                      per your
                      <br /> requirement.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 aos-init" data-aos="fade-left">
                <div className="libraries_laravel_choose libraries_laravel_choose-right">
                  <div className="laravel_choose_features_img laravel_choose_features_img6">
                    <Image
                      width={60}
                      height={100}
                      src="/img/webdevelopment/webdevelopment-why-icon6.png"
                      alt="img1"
                    />
                  </div>
                  <div className="laravel_choose_details">
                    <h3>Minimum Loading Time</h3>
                    <p>
                      While redesigning website&sbquo; we try to minimize
                      loading time as much as possible for richer user
                      experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="WebSiteRedesignEnqury">
          <div className="container">
            <p>
              For the most comprehensive consultation on optimizing your current
              website&sbquo; please reach out to us for a free assessment.
            </p>
            <a href="#" className="btn btn-primary">
              Contact US
            </a>
          </div>
        </div>
      </section>
      <div className="quoue_box_full_sec">
        <div className="whatsapp-call">
          <a
            href="https://api.whatsapp.com/send?phone=+919829559922&amp;text=Hi Logicspice Team&sbquo; I have a question regarding the solutions you provide. Please Help!"
            target="_blank"
          >
            <Image
              width={50}
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