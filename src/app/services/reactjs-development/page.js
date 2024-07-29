"use client";
import React, { useState } from "react";
import Footer from "@/app/Components/Footer";
import NavBar from "@/app/Components/Navbar";
import "@/app/services/services.css";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import Image from "next/image";
import Link from "next/link";
import "@fortawesome/fontawesome-free/css/all.css";
import Enquirymodal from "@/app/Components/Enquirymodal";
import Contactusmodel from "@/app/Components/Contactusmodel";
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
      <section class="ReactNavtiveAppBanner ReactJsWebBanner">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-6">
              <div class="laravel-banner-txt">
                <h1>
                  React JS <br /> <span>Web Development Services</span>
                </h1>
                <div class="LaravelText">
                  <strong>Revolutionize Your Digital Presence:</strong> Harness
                  the Power of React JS{" "}
                  <a
                    href="https://www.logicspice.com/web-development"
                    target="_blank"
                  >
                    Web Development
                  </a>{" "}
                  with Logicspice. We offer reliable React JS web application
                  development services worldwide, delivering high-performance
                  functionality and feature-rich solutions.
                </div>

                <div class="laravel-anquire">
                  <div className="btn btn-primary" onClick={openModal}>
                    <button>Hire Now</button>
                    {
                      <Enquirymodal
                        modalStatus={showModal}
                        toggle={openModal}
                        title="Request To Hire React JS Web Developers"
                      />
                    }
                  </div>
                  <div className="btn btn-primary" onClick={openModal}>
                    <button>Quick Enquiry</button>
                    {
                      <Enquirymodal
                        modalStatus={showModal}
                        toggle={openModal}
                        title="Request To Hire React JS Web Developers"
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
                <Image
                  src="/img/reactjsdevelopment/ReactJsImg.png"
                  alt="React JS Web Development Services"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="laravel-descriptions ReactNavtive-descriptions">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-6 pull-right">
              <div class="laravel_img">
                <Image
                  src="/img/reactjsdevelopment/reactjs-logo-img.png"
                  alt="React JS Web Development Services"
                />
              </div>
            </div>
            <div class="col-sm-6 col-md-6 pull-left">
              <div class="laravel-descriptions-bx">
                <h2>
                  React JS Web Application
                  <br /> Development
                </h2>
                <p>
                  React JS is a comprehensive JavaScript library for developing
                  interactive user interfaces. It satisfies your business&apos;s
                  technological requirements through an excellent fusion of
                  technologies. It is used to construct the most effective and
                  adaptable web applications using a well-structured and widely
                  dispersed code base across multiple platforms. Our team is
                  dedicated to delivering 100 percent tailored React JS Web
                  applications compatible with multiple browsers.
                </p>
                <p>
                  The <strong>React JS web development services</strong>{" "}
                  leverage the latest and most advanced technological inputs
                  while programming React JS web applications. We ensure that
                  our clients actively participate in the process of
                  development. We also maintain a design team that collaborates
                  with our developers to make React JS web apps visually
                  attractive and interactive. These designers and developers
                  work extensively on the application across different platforms
                  to equip them with elegance and fluidity. We can use
                  JavaScript, JSX, Redux, and other React JS development
                  frameworks to build web applications. We have provided
                  phenomenal service to all our clients across various
                  platforms. We build simplified and genuine applications as a{" "}
                  <strong>React JS development company</strong>.
                </p>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="laravel-devlopments-services ReactNativeServices">
        <div class="container">
          <h2>React JS Web Application Development Services</h2>
          <div class="laravel-services-bx-top">
            <div class="row">
              <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="laravel_service_box ">
                  <div class="laravel-services-icon laravel_service_box1">
                    <i>
                      <Image
                        class="widout-hover"
                        src="/img/reactjsdevelopment/reactjs-new-icon1.png"
                        alt="React JS Web Development Services"
                      />
                      <Image
                        class="on-hover"
                        src="/img/reactjsdevelopment/reactjs-white-icon1.png"
                        alt="React JS Web Development Services"
                      />
                      <div class="mask"></div>
                    </i>
                  </div>
                  <h3>Custom React JS Development</h3>
                  <p>
                    We offer tailor-made React JS solutions that cater to your
                    unique business needs and objectives.
                  </p>
                </div>
              </div>

              <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="laravel_service_box ">
                  <div class="laravel-services-icon laravel_service_box4">
                    <i>
                      <Image
                        class="widout-hover"
                        src="/img/reactjsdevelopment/reactjs-new-icon2.png"
                        alt="React JS Web Development Services"
                      />
                      <Image
                        class="on-hover"
                        src="/img/reactjsdevelopment/reactjs-white-icon2.png"
                        alt="React JS Web Development Services"
                      />
                      <div class="mask"></div>
                    </i>
                  </div>
                  <h3>React JS UI/UX Development</h3>
                  <p>
                    Our team creates stunning, user-friendly interfaces with
                    React JS for superior user experiences.
                  </p>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="laravel_service_box ">
                  <div class="laravel-services-icon laravel_service_box3">
                    <i>
                      <Image
                        class="widout-hover"
                        src="/img/reactjsdevelopment/reactjs-new-icon3.png"
                        alt="React JS Web Development Services"
                      />
                      <Image
                        class="on-hover"
                        src="/img/reactjsdevelopment/reactjs-white-icon3.png"
                        alt="React JS Web Development Services"
                      />
                      <div class="mask"></div>
                    </i>
                  </div>
                  <h3>React JS Product Development</h3>
                  <p>
                    We harness React JS&apos;s power to build scalable,
                    high-performing, innovative digital products for your
                    business.
                  </p>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="laravel_service_box ">
                  <div class="laravel-services-icon laravel_service_box6">
                    <i>
                      <Image
                        class="widout-hover"
                        src="/img/reactjsdevelopment/reactjs-new-icon4.png"
                        alt="React JS Web Development Services"
                      />
                      <Image
                        class="on-hover"
                        src="/img/reactjsdevelopment/reactjs-white-icon4.png"
                        alt="React JS Web Development Services"
                      />
                      <div class="mask"></div>
                    </i>
                  </div>
                  <h3>React JS Mobile App Development</h3>
                  <p>
                    We specialize in creating fast, seamless mobile applications
                    using the versatile React JS <br />
                    framework.
                  </p>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="laravel_service_box ">
                  <div class="laravel-services-icon laravel_service_box5">
                    <i>
                      <Image
                        class="widout-hover"
                        src="/img/reactjsdevelopment/reactjs-new-icon5.png"
                        alt="React JS Web Development Services"
                      />
                      <Image
                        class="on-hover"
                        src="/img/reactjsdevelopment/reactjs-white-icon5.png"
                        alt="React JS Web Development Services"
                      />
                      <div class="mask"></div>
                    </i>
                  </div>
                  <h3>React JS Plugin Development</h3>
                  <p>
                    Logicspice provides React JS plugin development services for
                    enhanced functionality and performance of your applications.
                  </p>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="laravel_service_box ">
                  <div class="laravel-services-icon laravel_service_box2">
                    <i>
                      <Image
                        class="widout-hover"
                        src="/img/reactjsdevelopment/reactjs-new-icon6.png"
                        alt="React JS Web Development Services"
                      />
                      <Image
                        class="on-hover"
                        src="/img/reactjsdevelopment/reactjs-white-icon6.png"
                        alt="React JS Web Development Services"
                      />
                      <div class="mask"></div>
                    </i>
                  </div>
                  <h3>React JS E-commerce Development</h3>
                  <p>
                    We use React JS to build efficient, user-friendly, secure
                    e-commerce platforms that drive conversions.
                  </p>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="laravel_service_box ">
                  <div class="laravel-services-icon laravel_service_box7">
                    <i>
                      <Image
                        class="widout-hover"
                        src="/img/reactjsdevelopment/reactjs-new-icon7.png"
                        alt="React JS Web Development Services"
                      />
                      <Image
                        class="on-hover"
                        src="/img/reactjsdevelopment/reactjs-white-icon7.png"
                        alt="React JS Web Development Services"
                      />
                      <div class="mask"></div>
                    </i>
                  </div>
                  <h3>React JS Support and Maintenance</h3>
                  <p>
                    Logicspice offers ongoing support and maintenance services
                    to ensure your React JS applications run smoothly.
                  </p>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="laravel_service_box ">
                  <div class="laravel-services-icon laravel_service_box8">
                    <i>
                      <Image
                        class="widout-hover"
                        src="/img/reactjsdevelopment/reactjs-new-icon8.png"
                        alt="React JS Web Development Services"
                      />
                      <Image
                        class="on-hover"
                        src="/img/reactjsdevelopment/reactjs-white-icon8.png"
                        alt="React JS Web Development Services"
                      />
                      <div class="mask"></div>
                    </i>
                  </div>
                  <h3>React JS Migration Services</h3>
                  <p>
                    We provide safe and seamless migration to React JS from any
                    other platform, minimizing disruption to your business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="laravel_core_features_section">
        <div class="container">
          <h2>Core Features Of React JS Web Development</h2>
          <div class="laravel_core_features_bx">
            <div class="row">
              <div class="col-sm-6 col-md-6" data-aos="fade-right">
                <div class="laravel_core_featureBox">
                  <div class="laravel_core_features_img">
                    <Image
                      src="/img/reactjsdevelopment/core_features_icon1.png"
                      alt="img1"
                    />
                  </div>
                  <div class="laravel_core_features_detail">
                    <h3>Component-Based Architecture</h3>
                    <p>
                      Building reusable components in React JS improves
                      application efficiency and maintainability.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-sm-6 col-md-6" data-aos="fade-left">
                <div class="laravel_core_featureBox">
                  <div class="laravel_core_features_img">
                    <Image
                      src="/img/reactjsdevelopment/core_features_icon4.png"
                      alt="img4"
                    />
                  </div>
                  <div class="laravel_core_features_detail">
                    <h3>Virtual DOM</h3>
                    <p>
                      React JS uses Virtual DOM to ensure fast and efficient
                      updates.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-sm-6 col-md-6" data-aos="fade-right">
                <div class="laravel_core_featureBox">
                  <div class="laravel_core_features_img">
                    <Image
                      src="/img/reactjsdevelopment/core_features_icon2.png"
                      alt="img2"
                    />
                  </div>
                  <div class="laravel_core_features_detail">
                    <h3>JSX Syntax</h3>
                    <p>JSX simplifies coding in React JS.</p>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-md-6" data-aos="fade-left">
                <div class="laravel_core_featureBox">
                  <div class="laravel_core_features_img">
                    <Image
                      src="/img/reactjsdevelopment/core_features_icon5.png"
                      alt="img5"
                    />
                  </div>
                  <div class="laravel_core_features_detail">
                    <h3>Single-Page Applications</h3>
                    <p>
                      React JS helps create seamless single-page applications.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-md-6" data-aos="fade-right">
                <div class="laravel_core_featureBox">
                  <div class="laravel_core_features_img">
                    <Image
                      src="/img/reactjsdevelopment/core_features_icon3.png"
                      alt="img3"
                    />
                  </div>
                  <div class="laravel_core_features_detail">
                    <h3>Performance Optimization</h3>
                    <p>
                      React JS uses advanced diffing algorithms to render
                      efficiently.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-sm-6 col-md-6" data-aos="fade-left">
                <div class="laravel_core_featureBox">
                  <div class="laravel_core_features_img">
                    <Image
                      src="/img/reactjsdevelopment/core_features_icon6.png"
                      alt="img6"
                    />
                  </div>
                  <div class="laravel_core_features_detail">
                    <h3>Unidirectional Data Flow</h3>
                    <p>
                      Ensures stable code by controlling data flow with props
                      and state.
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
          <h2>Benefits Of React JS Web Development</h2>
          <div class="laravel_choose_features_bx">
            <div class="row">
              <div class="col-sm-6 col-md-6" data-aos="fade-right">
                <div class="libraries_laravel_choose">
                  <div class="laravel_choose_features_img laravel_choose_features_img1">
                    <Image
                      src="/img/reactjsdevelopment/reactjs-why-icon1.png"
                      alt="img1"
                    />
                  </div>
                  <div class="laravel_choose_details">
                    <h3>Efficiency</h3>
                    <p>
                      The use of reusable components increases the efficiency of
                      development.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-sm-6 col-md-6" data-aos="fade-left">
                <div class="libraries_laravel_choose libraries_laravel_choose-right">
                  <div class="laravel_choose_features_img laravel_choose_features_img2">
                    <Image
                      src="/img/reactjsdevelopment/reactjs-why-icon2.png"
                      alt="img1"
                    />
                  </div>
                  <div class="laravel_choose_details">
                    <h3>Performance</h3>
                    <p>
                      Virtual DOM ensures smooth and high-performance
                      applications.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-sm-6 col-md-6 " data-aos="fade-right">
                <div class="libraries_laravel_choose">
                  <div class="laravel_choose_features_img laravel_choose_features_img3">
                    <Image
                      src="/img/reactjsdevelopment/reactjs-why-icon3.png"
                      alt="img1"
                    />
                  </div>
                  <div class="laravel_choose_details">
                    <h3>Readability</h3>
                    <p>
                      JSX syntax enhances the readability and maintainability of
                      code.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-sm-6 col-md-6" data-aos="fade-left">
                <div class="libraries_laravel_choose libraries_laravel_choose-right">
                  <div class="laravel_choose_features_img laravel_choose_features_img4">
                    <Image
                      src="/img/reactjsdevelopment/reactjs-why-icon4.png"
                      alt="img1"
                    />
                  </div>
                  <div class="laravel_choose_details">
                    <h3>User Experience</h3>
                    <p>
                      Single-page applications provide a seamless user
                      experience.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-sm-6 col-md-6" data-aos="fade-right">
                <div class="libraries_laravel_choose">
                  <div class="laravel_choose_features_img laravel_choose_features_img5">
                    <Image
                      src="/img/reactjsdevelopment/reactjs-why-icon5.png"
                      alt="img1"
                    />
                  </div>
                  <div class="laravel_choose_details">
                    <h3>Optimization</h3>
                    <p>
                      Smart diffing algorithms for rendering enhance application
                      performance.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-sm-6 col-md-6" data-aos="fade-left">
                <div class="libraries_laravel_choose libraries_laravel_choose-right">
                  <div class="laravel_choose_features_img laravel_choose_features_img6">
                    <Image
                      src="/img/reactjsdevelopment/reactjs-why-icon6.png"
                      alt="img1"
                    />
                  </div>
                  <div class="laravel_choose_details">
                    <h3>Stability</h3>
                    <p>
                      Unidirectional data flow ensures stable code and reduces
                      bugs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="laravel_choose_features_section LaravelChooseFeaturesSection">
        <div class="container">
          <h2>
            Why Choose Logicspice For React JS <br />
            Web Development?
          </h2>
          <div class="laravel_choose_features_bx ReactJsChooseFeaturesBx">
            <div class="row">
              <div class="col-sm-6 col-md-6" data-aos="fade-right">
                <div class="libraries_laravel_choose">
                  <div class="laravel_choose_details">
                    <p>
                      We have worked in this industry for 18+ years with 1900+
                      clients across 15 countries. React JS developers on our
                      team provide top-notch solutions.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-md-6" data-aos="fade-left">
                <div class="libraries_laravel_choose libraries_laravel_choose-right">
                  <div class="laravel_choose_details">
                    <p>
                      We provide React JS consultancy, project planning,
                      development, testing, and support. We handle all your
                      React JS development needs.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-md-6" data-aos="fade-right">
                <div class="libraries_laravel_choose ">
                  <div class="laravel_choose_details">
                    <p>
                      Logicspice values customer satisfaction. We learn about
                      your business and create custom solutions.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-sm-6 col-md-6 " data-aos="fade-left">
                <div class="libraries_laravel_choose libraries_laravel_choose-right">
                  <div class="laravel_choose_details">
                    <p>
                      Our service is not only the best in terms of quality but
                      also cost-effective.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-sm-6 col-md-6" data-aos="fade-right">
                <div class="libraries_laravel_choose">
                  <div class="laravel_choose_details">
                    <p>
                      Our competitive pricing offers exceptional value. We offer
                      affordable solutions without sacrificing quality or
                      usefulness.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-12 main_btn_hire">
              <div className="btn btn-primary" onClick={openModal}>
                <button>Hire Now</button>
                {
                  <Enquirymodal
                    modalStatus={showModal}
                    toggle={openModal}
                    title="Request To Hire React JS Web Developers"
                  />
                }
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="ecommerce_faq_section NewFaqDesignSection">
        <div class="container">
          <div class="row">
            <div class=" row ecommerce__Quick_FAQ">
              <div class="col-md-5">
                <h4 class="title_main">
                  Frequently <br />
                  Asked Questions
                </h4>
                <div class="FaqImgBx">
                  <Image
                    src="/img/laraveldevelopment/FaqLaravelImg.png"
                    alt="laravel web development"
                  />
                </div>
              </div>
              <div class="col-md-7">
                <MDBAccordion v-model="activeItem" borderless>
                  <MDBAccordionItem
                    headerTitle="What services does Logicspice offer in React JS Web Development?"
                    collapseId="flush-collapse1"
                  >
                    <p>
                      Logicspice offers various services, including custom React
                      JS development, UI/UX development, mobile app development,
                      e-commerce development, plugin development, and ongoing
                      support and maintenance.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Why should I choose Logicspice for my React JS development needs?"
                    collapseId="flush-collapse2"
                  >
                    <p>
                      Logicspice has a team of skilled React JS developers who
                      adhere to best practices, provide tailored solutions,
                      deliver projects on time, and offer comprehensive and
                      cost-effective services.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Can Logicspice help migrate my existing application to React JS?"
                    collapseId="flush-collapse3"
                  >
                    <p>
                      Yes, Logicspice offers safe and seamless React JS
                      migration services, ensuring minimal disruption to your
                      business during the transition.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Will I receive ongoing support and maintenance for my React JS application?"
                    collapseId="flush-collapse4"
                  >
                    <p>
                      Logicspice provides ongoing support and maintenance
                      services to ensure your React JS applications are always
                      up-to-date and running smoothly.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="What industries does Logicspice cater to for React JS development?"
                    collapseId="flush-collapse5"
                  >
                    <p>
                      Logicspice caters to many industries, including eCommerce,
                      healthcare, education, finance, retail, etc.
                    </p>
                  </MDBAccordionItem>
                </MDBAccordion>
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
            <Image src="/img/images/whatsapp.png" alt="whatsapp-icon" />
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
