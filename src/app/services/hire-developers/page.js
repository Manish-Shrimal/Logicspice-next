"use client";
import React, { useState } from "react";
import Footer from "@/app/Components/Footer";
import NavBar from "@/app/Components/Navbar";
import "@/app/services/services.css";
import Image from "next/image";
import Link from "next/link";
import Enquirymodal from "@/app/Components/Enquirymodal";
import Contactusmodel from "@/app/Components/Contactusmodel";
import "../../resposive.css";
import "@fortawesome/fontawesome-free/css/all.css";
import Certificationtabs from "@/app/Components/Certificationtabs";
import Workingwith from "@/app/Components/Workingwith";
import "../../globals.css";


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
      
      
      
      <NavBar />
      <section class="hire_developer_back">
        <div class="container">
          <div class="row">
            <div class="col-sm-7">
              <div class="developer_slide_left">
                <div
                  data-aos="fade-right"
                  class="left_content_section aos-init aos-animate"
                >
                  <h1 class="slide_title">
                    Hire Dedicated Developers For Full Time
                  </h1>
                  <p class="slide_con">
                    Enjoy the comfort of having one-to-one communication with an
                    expert, while we supervise and provide administrative
                    support to the developer working for you.
                  </p>
                </div>
                <div
                  data-aos="fade-right"
                  class="more_btn deve_btn aos-init aos-animate"
                >
                  <a
                    href="https://www.logicspice.com/portfolio/"
                    class="btn btn-primary"
                  >
                    <span>Portfolio</span>
                  </a>
                  <a
                    id="inquirenow"
                    data-toggle="modal"
                    data-target="#contactFix"
                    class="btn btn-primary"
                    onClick={toggleModal}
                  >
                    <span>Enquire Now</span>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-sm-5">
              <div
                data-aos="fade-left"
                class="right_slide_section aos-init aos-animate"
              >
                <img
                  alt="Hire App Developers - Logicspice"
                  src="/img/hiredevelopers/man_slide.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="dev_flexibility">
        <div class="container">
          <div class="title_heading">
            We offer the flexibility of choosing the best suited hiring model
            for our clients.
          </div>

          <div class="row">
            <div class="col-md-2"></div>
            <div class="col-md-4 col-sm-6">
              <div class="inner-flex">
                <i class="fa fa-calendar" aria-hidden="true"></i>
                <div class="title_heading_Main">Periodic Basis</div>
                <p>The billing is done on weekly/monthly basis </p>
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div class="inner-flex">
                <i class="fa fa-clock-o" aria-hidden="true"></i>
                <div class="title_heading_Main">Hourly</div>
                <p>
                  The billing is done according to the time spent by the
                  developers{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="dev_Packages dev_Packages_top">
        <div class="container">
          <h2 class="title_heading">KEY HIGHLIGHTS TO WORK WITH US</h2>
          <p>
            Logicspice offers you to hire programmers who will work exclusively
            for your projects - 8 hours per day and a minimum of 176 hours of
            every month. Key highlights for hiring dedicated &amp; expert
            developers from us -{" "}
          </p>

          <ul>
            <li>Working 22 days per month</li>
            <li>We follow the Indian time zone (GMT + 5:30).</li>
            <li>
              Invoices will be sent to you on a weekly basis or in the first
              week of every month.
            </li>
            <li>Direct communication with your hired developer. </li>
          </ul>
          <div class="clearfix"></div>
        </div>
      </section>
      <section class="dev_Packages">
        <div class="container">
          <div class="hire_type row">
            <div class="col-md-8">
              <h3>Senior Developers</h3>
              <div class="mobile_view">
                <img
                  alt="Senior Developers"
                  src="https://www.logicspice.com/app/webroot/img/images/hire-web-developers-technource.png"
                />
              </div>
              <p></p>
              <p style={{ textAlign: "justify" }}>
                We have senior mobile app &amp; software developers for hire for
                your custom web and <strong>mobile app development</strong>{" "}
                projects. Hire dedicated developers in India and other countries
                from Logicspice who have professional skills like PHP, MySQL,
                HTML, JavaScript, Ajax, Jquery, android &amp; iPhone app
                development and has an extensive experience of more than 7 years
                in web &amp; mobile app development services. Our{" "}
                <strong>senior developer</strong> has worked for international
                clients with cross-nationality teams. Our dedicated developers
                are comfortable with rapidly changing web &amp; mobile app
                development platforms.
              </p>
              <p></p>
            </div>
            <div class="col-md-4">
              <img
                alt="Senior Developers"
                src="https://www.logicspice.com/app/webroot/img/images/hire-web-developers-technource.png"
              />
            </div>
          </div>
          <div class="hire_type hire_type2 row">
            <div class="col-md-4">
              <img
                alt="TEAM LEAD"
                src="https://www.logicspice.com/app/webroot/img/images/Web-Developer.png"
              />
            </div>
            <div class="col-md-8">
              <h3>TEAM LEAD</h3>
              <div class="mobile_view">
                <img
                  alt="TEAM LEAD"
                  src="https://www.logicspice.com/app/webroot/img/images/Web-Developer.png"
                />
              </div>
              <p></p>
              <p style={{ textAlign: "justify" }}>
                Hire a developer or a team leader from Logicspice who can handle
                &amp; manage the team of programmers, guide them, and solve
                their queries and issues. Our{" "}
                <strong>dedicated team leader</strong> identifies inefficiencies
                in operations with the objective of improving the quality of the
                project and managing tasks according to the given time frame.
                The <strong>lead programmer</strong> will also be responsible
                for integrating the front-end elements built by his co-workers
                into the application.
              </p>
              <p></p>
            </div>
          </div>
          <div class="button-dev">
            <a
              class="btn btn-primary"
              data-toggle="modal"
              data-target="#popup_sc_request"
              onclick='if (!window.__cfRLUnblockHandlers) return false; $("#update_frmC").html("Request Free Consultation");
                            $("#contact_frC").val("Free Consultation For Hire Developers");'
            >
              Request Free Consultation
            </a>
          </div>
        </div>
      </section>
      <section class="dev_future_solution">
        <div class="container">
          <h3 class="title_heading">
            We amaze you with our future-ready solutions
          </h3>
          <p>
            Logicspice strives to deliver future-ready solutions of the highest
            quality and standard. Our dedicated experts rectify each bug and
            issue with precision. We make you stand apart from the crowd and
            lead the industry.
          </p>
          <div class="row">
            <div class="col-md-6">
              <img
                alt="app development"
                src="https://www.logicspice.com/app/webroot/img/images/yt-dev-home-dev-stories.png"
              />
            </div>
            <div class="col-md-6">
              <h4>We Include</h4>
              <ul>
                <li>A. 100% confidentiality - strict NDA terms</li>
                <li>
                  B. Moneyback guarantee - The amount will not be refunded by us
                  if
                  <ul>
                    <li>Your invoice is already generated</li>
                    <li>There has been an abuse of our terms of use</li>
                    <li>The project has ended.</li>
                    <li>Moneyback will be only for unbilled hours</li>
                  </ul>
                </li>
                <li>C. Technical Support (In working hours only)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section class="developer_mid">
        <div class="container">
          <h3 class="title_heading">Why Hire from LogicSpice</h3>
          <div class="row">
            <div class="col-md-3 col-sm-4">
              <div
                class="developer_mid_block_inner aos-init aos-animate"
                data-aos="fade-up"
              >
                <div class="box_icon_top">
                  <img
                    alt="Qualified, Experienced resources"
                    src="https://www.logicspice.com/app/webroot/img/images/experience_icon.png"
                  />
                </div>
                <div class="developer_box_content">
                  Qualified, Experienced and certified resources
                </div>
              </div>
            </div>
            <div class="col-md-3 col-sm-4">
              <div
                class="developer_mid_block_inner aos-init aos-animate"
                data-aos="fade-up"
              >
                <div class="box_icon_top">
                  <img
                    alt="Flexible Hiring Models - Logicspice"
                    src="https://www.logicspice.com/app/webroot/img/images/search_icon.png"
                  />
                </div>
                <div class="developer_box_content">Flexible Hiring Models</div>
              </div>
            </div>
            <div class="col-md-3 col-sm-4">
              <div
                class="developer_mid_block_inner aos-init aos-animate"
                data-aos="fade-up"
              >
                <div class="box_icon_top">
                  <img
                    alt="Rapid and Effective development - logicspice"
                    src="https://www.logicspice.com/app/webroot/img/images/rapid_icon.png"
                  />
                </div>
                <div class="developer_box_content">
                  Rapid yet Effective development
                </div>
              </div>
            </div>
            <div class="col-md-3 col-sm-4">
              <div
                class="developer_mid_block_inner aos-init aos-animate"
                data-aos="fade-up"
              >
                <div class="box_icon_top">
                  <img
                    alt="Monitor team’s performance"
                    src="https://www.logicspice.com/app/webroot/img/images/monitor_icon.png"
                  />
                </div>
                <div class="developer_box_content">
                  Monitor team’s performance on regular basis
                </div>
              </div>
            </div>
            <div class="col-md-3 col-sm-4">
              <div
                class="developer_mid_block_inner aos-init aos-animate"
                data-aos="fade-up"
              >
                <div class="box_icon_top">
                  <img
                    alt="Track Progress with Project Management"
                    src="https://www.logicspice.com/app/webroot/img/images/progress_icon.png"
                  />
                </div>
                <div class="developer_box_content">
                  Track Progress with Project Management Tools
                </div>
              </div>
            </div>
            <div class="col-md-3 col-sm-4">
              <div
                class="developer_mid_block_inner aos-init aos-animate"
                data-aos="fade-up"
              >
                <div class="box_icon_top">
                  <img
                    alt="Fast and easy communication"
                    src="https://www.logicspice.com/app/webroot/img/images/comunication_icon.png"
                  />
                </div>
                <div class="developer_box_content">
                  Fast and easy communication
                </div>
              </div>
            </div>
            <div class="col-md-3 col-sm-4">
              <div
                class="developer_mid_block_inner aos-init aos-animate"
                data-aos="fade-up"
              >
                <div class="box_icon_top">
                  <img
                    alt="Flexible Timing - Logicspice"
                    src="https://www.logicspice.com/app/webroot/img/images/timing_icon.png"
                  />
                </div>
                <div class="developer_box_content">Flexible Timing</div>
              </div>
            </div>
            <div class="col-md-3 col-sm-4">
              <div
                class="developer_mid_block_inner aos-init aos-animate"
                data-aos="fade-up"
              >
                <div class="box_icon_top">
                  <img
                    alt="Cost-efficient development - logicspice"
                    src="https://www.logicspice.com/app/webroot/img/images/cost_icon.png"
                  />
                </div>
                <div class="developer_box_content">Cost-efficient</div>
              </div>
            </div>
            <div class="col-md-3 col-sm-4">
              <div
                class="developer_mid_block_inner aos-init aos-animate"
                data-aos="fade-up"
              >
                <div class="box_icon_top">
                  <img
                    alt="Consistent Technical and Administrative support"
                    src="https://www.logicspice.com/app/webroot/img/images/technical_icon.png"
                  />
                </div>
                <div class="developer_box_content">
                  Consistent Technical and Administrative support
                </div>
              </div>
            </div>
            <div class="col-md-3 col-sm-4">
              <div
                class="developer_mid_block_inner aos-init aos-animate"
                data-aos="fade-up"
              >
                <div class="box_icon_top">
                  <img
                    alt="Highly Secured Development - Logicspice"
                    src="https://www.logicspice.com/app/webroot/img/images/highly_icon.png"
                  />
                </div>
                <div class="developer_box_content">
                  Highly Secured Development Area
                </div>
              </div>
            </div>
            <div class="col-md-3 col-sm-4">
              <div
                class="developer_mid_block_inner aos-init aos-animate"
                data-aos="fade-up"
              >
                <div class="box_icon_top">
                  <img
                    alt="Dependable supervision and execution"
                    src="https://www.logicspice.com/app/webroot/img/images/dependabe_icon.png"
                  />
                </div>
                <div class="developer_box_content">
                  Dependable supervision and execution
                </div>
              </div>
            </div>
            <div class="col-md-3 col-sm-4">
              <div
                class="developer_mid_block_inner aos-init aos-animate"
                data-aos="fade-up"
              >
                <div class="box_icon_top">
                  <img
                    alt="Optimized Coding - Logicspice"
                    src="https://www.logicspice.com/app/webroot/img/images/code_icon.png"
                  />
                </div>
                <div class="developer_box_content">Optimized Coding</div>
              </div>
            </div>
            <div class="col-md-3 col-sm-4">
              <div
                class="developer_mid_block_inner aos-init aos-animate"
                data-aos="fade-up"
              >
                <div class="box_icon_top">
                  <img
                    alt="deadlines developers"
                    src="https://www.logicspice.com/app/webroot/img/images/calendar_icon.png"
                  />
                </div>
                <div class="developer_box_content">
                  We take deadlines very seriously
                </div>
              </div>
            </div>
            <div class="col-md-3 col-sm-4">
              <div
                class="developer_mid_block_inner aos-init aos-animate"
                data-aos="fade-up"
              >
                <div class="box_icon_top">
                  <img
                    alt="Project confidentiality - Logicspice"
                    src="https://www.logicspice.com/app/webroot/img/images/nda_icon.png"
                  />
                </div>
                <div class="developer_box_content">
                  100% confidentiality - strict NDA terms
                </div>
              </div>
            </div>
            <div class="col-md-3 col-sm-4">
              <div
                class="developer_mid_block_inner aos-init aos-animate"
                data-aos="fade-up"
              >
                <div class="box_icon_top">
                  <img
                    alt="moneyback gurantee - Logicspice"
                    src="https://www.logicspice.com/app/webroot/img/images/gaurantee_icon.png"
                  />
                </div>
                <div class="developer_box_content">100% moneyback gurantee</div>
              </div>
            </div>
            <div class="col-md-3 col-sm-4">
              <div
                class="developer_mid_block_inner aos-init aos-animate"
                data-aos="fade-up"
              >
                <div class="box_icon_top">
                  <img
                    alt="Availability and scope of expansion - logicspice"
                    src="https://www.logicspice.com/app/webroot/img/images/scope_icon.png"
                  />
                </div>
                <div class="developer_box_content">
                  Availability and scope of expansion
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="content_hireexpert HireExpertContent">
        <div class="container">
          <p>
            Are you looking to hire developers in India for your next project?
            We offer a diverse pool of talent to meet your development needs.
            Whether you need to hire full stack developer, a Java developer, or
            any other specialized skills, our Indian developers are ready to
            bring your vision to life. With extensive expertise and a track
            record of delivering exceptional results, you can trust our team to
            drive your project's success. Hire Indian developers today and
            experience the Logicspice difference.
          </p>
          <p>
            At Logicspice, you can hire software developer in India at a
            reasonable price. You can hire Mobile App and web Programmers for an
            hourly, monthly, or project basis. We have experts and experienced
            developers for CakePHP, Laravel, WordPress, and Mobile Applications
            (Android apps &amp; iOS apps) development.
          </p>

          <p>
            Logicspice has a remarkable footprint among the{" "}
            <a
              target="_blank"
              href="https://www.logicspice.com/mobile-app-development"
            >
              top mobile app development companies
            </a>{" "}
            by providing affordable mobile apps and development services for
            more than 12 years.
          </p>

          <p>
            Our dedicated developers provide end-to-end web and mobile app
            development solutions, for startups to enterprises across the globe
            with their expertise and experience.
          </p>

          <p>
            Hire remote developers and programmers from Logicspice for your
            custom Mobile app development &amp; web development needs according
            your business requirements.
          </p>
        </div>
      </section>
      <section class="hire_dedicated_section">
        <div class="container">
          <h2 class="title_heading">Hire dedicated Developers Skills</h2>
          <div class="dedicated_container">
            <div class="dedicated_develop_mid_wrap">
              <div class="row">
                <div class="col-md-3 col-sm-4">
                  <div
                    data-aos="fade-up"
                    class="dedicated_develop_col aos-init aos-animate"
                  >
                    <div class="dedicated_develop_col_inner">
                      <div class="dedicated_develop_icon_box">
                        <a href="https://www.logicspice.com/hire-python-developers">
                          <img
                            alt="Hire Python Developers - Logicspice"
                            src="https://www.logicspice.com/app/webroot/img/images/python-hire-logo.png"
                          />
                        </a>
                      </div>
                      <div class="dedicated_develop_title_box">
                        <a href="https://www.logicspice.com/hire-python-developers">
                          Hire Python Developers
                        </a>
                      </div>
                      <div class="dedicated_develop_content_box">
                        Hire Python developers for your software development
                        needs.
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-3 col-sm-4">
                  <div
                    data-aos="fade-up"
                    class="dedicated_develop_col aos-init aos-animate"
                  >
                    <div class="dedicated_develop_col_inner">
                      <div class="dedicated_develop_icon_box">
                        <a href="https://www.logicspice.com/hire-reactjs-developers">
                          <img
                            alt="Hire ReactJS Developers - Logicspice"
                            src="https://www.logicspice.com/app/webroot/img/images/reactjs-hire-logo.png"
                          />
                        </a>
                      </div>
                      <div class="dedicated_develop_title_box">
                        <a href="https://www.logicspice.com/hire-reactjs-developers">
                          Hire ReactJS Developers
                        </a>
                      </div>
                      <div class="dedicated_develop_content_box">
                        Start your web development journey with the expertise of
                        ReactJS developers.
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-3 col-sm-4">
                  <div
                    data-aos="fade-up"
                    class="dedicated_develop_col aos-init aos-animate"
                  >
                    <div class="dedicated_develop_col_inner">
                      <div class="dedicated_develop_icon_box">
                        <a href="https://www.logicspice.com/hire-react-native-developers">
                          <img
                            alt="Hire React Native Developers - Logicspice"
                            src="https://www.logicspice.com/app/webroot/img/images/reactjs-hire-logo.png"
                          />
                        </a>
                      </div>
                      <div class="dedicated_develop_title_box">
                        <a href="https://www.logicspice.com/hire-react-native-developers">
                          Hire React Native Developers
                        </a>
                      </div>
                      <div class="dedicated_develop_content_box">
                        Hire React Native Developers to transform your ideas
                        into mobile apps.{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-3 col-sm-4">
                  <div
                    data-aos="fade-up"
                    class="dedicated_develop_col aos-init aos-animate"
                  >
                    <div class="dedicated_develop_col_inner">
                      <div class="dedicated_develop_icon_box">
                        <a href="https://www.logicspice.com/hire-android-app-developers">
                          <img
                            alt="Hire Android App Developer - Logicspice"
                            src="https://www.logicspice.com/app/webroot/img/images/andoird_icon.png"
                          />
                        </a>
                      </div>
                      <div class="dedicated_develop_title_box">
                        <a href="https://www.logicspice.com/hire-android-app-developers">
                          Hire Android App Developer
                        </a>
                      </div>
                      <div class="dedicated_develop_content_box">
                        Our Android experts ensure code is written in the most
                        effective way possible.
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-3 col-sm-4">
                  <div
                    data-aos="fade-up"
                    class="dedicated_develop_col aos-init aos-animate"
                  >
                    <div class="dedicated_develop_col_inner">
                      <div class="dedicated_develop_icon_box">
                        <a href="https://www.logicspice.com/hire-ios-app-developers">
                          <img
                            alt="Hire iOS/ iPhone App Developer"
                            src="https://www.logicspice.com/app/webroot/img/images/apple_phn_icon.png"
                          />
                        </a>
                      </div>
                      <div class="dedicated_develop_title_box">
                        <a href="https://www.logicspice.com/hire-ios-app-developers">
                          Hire iOS App Developer
                        </a>
                      </div>
                      <div class="dedicated_develop_content_box">
                        We offers experienced iOS app developers for custom iOS
                        application development.
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-3 col-sm-4">
                  <div
                    data-aos="fade-up"
                    class="dedicated_develop_col aos-init aos-animate"
                  >
                    <div class="dedicated_develop_col_inner">
                      <div class="dedicated_develop_icon_box">
                        <a href="https://www.logicspice.com/hire-web-developers">
                          <img
                            alt="Hire Dphp-developers - logicspice"
                            src="https://www.logicspice.com/app/webroot/img/images/web_developer_icon.png"
                          />
                        </a>
                      </div>
                      <div class="dedicated_develop_title_box">
                        <a href="https://www.logicspice.com/hire-web-developers">
                          Hire Web Developer
                        </a>
                      </div>
                      <div class="dedicated_develop_content_box">
                        Hire website developer from the hub of talented web
                        developers to attain your development needs.
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-3 col-sm-4">
                  <div
                    data-aos="fade-up"
                    class="dedicated_develop_col aos-init aos-animate"
                  >
                    <div class="dedicated_develop_col_inner">
                      <div class="dedicated_develop_icon_box">
                        <a href="https://www.logicspice.com/hire-php-developers">
                          <img
                            alt="Hire Dphp-developers - logicspice"
                            src="https://www.logicspice.com/app/webroot/img/images/php_icon.png"
                          />
                        </a>
                      </div>
                      <div class="dedicated_develop_title_box">
                        <a href="https://www.logicspice.com/hire-php-developers">
                          Hire PHP Developer
                        </a>
                      </div>
                      <div class="dedicated_develop_content_box">
                        Logicspice have team of dedicated PHP programmers who
                        will mould your idea into digital blueprints.
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-3 col-sm-4">
                  <div
                    data-aos="fade-up"
                    class="dedicated_develop_col aos-init aos-animate"
                  >
                    <div class="dedicated_develop_col_inner">
                      <div class="dedicated_develop_icon_box">
                        <a href="https://www.logicspice.com/hire-cakephp-developers">
                          <img
                            alt="Hire Cake PHP Developer Logicspice"
                            src="https://www.logicspice.com/app/webroot/img/images/cake_icon.png"
                          />
                        </a>
                      </div>
                      <div class="dedicated_develop_title_box">
                        <a href="https://www.logicspice.com/hire-cakephp-developers">
                          Hire CakePHP Developer
                        </a>
                      </div>
                      <div class="dedicated_develop_content_box">
                        Hire dedicated CakePHP programmers, who have a good mix
                        of knowledge &amp; skills.
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-3 col-sm-4">
                  <div
                    data-aos="fade-up"
                    class="dedicated_develop_col aos-init aos-animate"
                  >
                    <div class="dedicated_develop_col_inner">
                      <div class="dedicated_develop_icon_box">
                        <a href="https://www.logicspice.com/hire-wordpress-experts">
                          <img
                            alt="Hire Wordpress Developer - logicspice"
                            src="https://www.logicspice.com/app/webroot/img/images/wp_icon.png"
                          />
                        </a>
                      </div>
                      <div class="dedicated_develop_title_box">
                        <a href="https://www.logicspice.com/hire-wordpress-experts">
                          Hire Wordpress Developer
                        </a>
                      </div>
                      <div class="dedicated_develop_content_box">
                        Our expert Wordpress developers offers customized web
                        development at low cost.
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-md-3 col-sm-4">
                  <div
                    data-aos="fade-up"
                    class="dedicated_develop_col aos-init aos-animate"
                  >
                    <div class="dedicated_develop_col_inner">
                      <div class="dedicated_develop_icon_box">
                        <a href="https://www.logicspice.com/hire-magento-experts">
                          <img
                            alt="hire magento developers - logicspice"
                            src="https://www.logicspice.com/app/webroot/img/images/magento_icon.png"
                          />
                        </a>
                      </div>
                      <div class="dedicated_develop_title_box">
                        <a href="https://www.logicspice.com/hire-magento-experts">
                          Hire Magento Developer
                        </a>
                      </div>
                      <div class="dedicated_develop_content_box">
                        Hire certified, expert &amp; dedicated Magento
                        developers for full time and hourly.
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-md-3 col-sm-4">
                  <div
                    data-aos="fade-up"
                    class="dedicated_develop_col aos-init aos-animate"
                  >
                    <div class="dedicated_develop_col_inner">
                      <div class="dedicated_develop_icon_box">
                        <a href="https://www.logicspice.com/hire-laravel-developers">
                          <img
                            alt="hire laravel developers - logicspice"
                            src="https://www.logicspice.com/app/webroot/img/images/larvel_icon.png"
                          />
                        </a>
                      </div>
                      <div class="dedicated_develop_title_box">
                        <a href="https://www.logicspice.com/hire-laravel-developers">
                          Hire Laravel Developers
                        </a>
                      </div>
                      <div class="dedicated_develop_content_box">
                        Hire Laravel web developers from logicspice to develop
                        high performance Laravel web applications.
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-3 col-sm-4">
                  <div
                    data-aos="fade-up"
                    class="dedicated_develop_col aos-init aos-animate"
                  >
                    <div class="dedicated_develop_col_inner">
                      <div class="dedicated_develop_icon_box">
                        <a href="https://www.logicspice.com/hire-codeigniter-developers">
                          <img
                            alt="hire codeigniter developers - logicspice"
                            src="https://www.logicspice.com/app/webroot/img/images/codenator_icon.png"
                          />
                        </a>
                      </div>
                      <div class="dedicated_develop_title_box">
                        <a href="https://www.logicspice.com/hire-codeigniter-developers">
                          Hire Codeigniter Developers
                        </a>
                      </div>
                      <div class="dedicated_develop_content_box">
                        We has expert CodeIgniter web developers to work with
                        your project at budget friendly rates.
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-3 col-sm-4">
                  <div
                    data-aos="fade-up"
                    class="dedicated_develop_col aos-init aos-animate"
                  >
                    <div class="dedicated_develop_col_inner">
                      <div class="dedicated_develop_icon_box">
                        <a href="https://www.logicspice.com/hire-node-js-experts">
                          <img
                            alt="hire node-js-experts developers - logicspice"
                            src="https://www.logicspice.com/app/webroot/img/images/node_icon.png"
                          />
                        </a>
                      </div>
                      <div class="dedicated_develop_title_box">
                        <a href="https://www.logicspice.com/hire-node-js-experts">
                          Hire Node.js
                          <br />
                          Experts
                        </a>
                      </div>
                      <div class="dedicated_develop_content_box">
                        Hire Node.js developers and programmers from logicspice
                        for best NodeJS eCommerce solutions development..
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-3 col-sm-4">
                  <div
                    data-aos="fade-up"
                    class="dedicated_develop_col aos-init aos-animate"
                  >
                    <div class="dedicated_develop_col_inner">
                      <div class="dedicated_develop_icon_box">
                        <a href="https://www.logicspice.com/hire-angular-js-developers">
                          <img
                            alt="hire angular-js-developers developers - logicspice"
                            src="https://www.logicspice.com/app/webroot/img/images/angular_icon.png"
                          />
                        </a>
                      </div>
                      <div class="dedicated_develop_title_box">
                        <a href="https://www.logicspice.com/hire-angular-js-developers">
                          Hire Angular JS developers{" "}
                        </a>
                      </div>
                      <div class="dedicated_develop_content_box">
                        Hire our experts AngularJS developers to build fast,
                        responsive and scalable web applications.
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-3 col-sm-4">
                  <div
                    data-aos="fade-up"
                    class="dedicated_develop_col aos-init aos-animate"
                  >
                    <div class="dedicated_develop_col_inner">
                      <div class="dedicated_develop_icon_box">
                        <a href="https://www.logicspice.com/hire-yii-developers">
                          <img
                            alt="hire yii developers - logicspice"
                            src="https://www.logicspice.com/app/webroot/img/images/yii_icon.png"
                          />
                        </a>
                      </div>
                      <div class="dedicated_develop_title_box">
                        <a href="https://www.logicspice.com/hire-yii-developers">
                          Hire Yii
                          <br />
                          Developers{" "}
                        </a>
                      </div>
                      <div class="dedicated_develop_content_box">
                        Hire highly skilled Yii programmers and developers for
                        custom Yii PHP web application development.
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-3 col-sm-4">
                  <div
                    data-aos="fade-up"
                    class="dedicated_develop_col aos-init aos-animate"
                  >
                    <div class="dedicated_develop_col_inner">
                      <div class="dedicated_develop_icon_box">
                        <a href="https://www.logicspice.com/hire-opencart-developers">
                          <img
                            alt="hire opencart developers - logicspice"
                            src="https://www.logicspice.com/app/webroot/img/images/operat_icon.png"
                          />
                        </a>
                      </div>
                      <div class="dedicated_develop_title_box">
                        <a href="https://www.logicspice.com/hire-opencart-developers">
                          Hire Opencart Developers{" "}
                        </a>
                      </div>
                      <div class="dedicated_develop_content_box">
                        Our dedicated Opencart experts ensure code is written in
                        the most effective way possible.
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-3 col-sm-4">
                  <div
                    data-aos="fade-up"
                    class="dedicated_develop_col aos-init aos-animate"
                  >
                    <div class="dedicated_develop_col_inner">
                      <div class="dedicated_develop_icon_box">
                        <a href="https://www.logicspice.com/hire-hybrid-mobile-app-developer">
                          <img
                            alt="hire hybrid mobile app developers at logicspice"
                            src="https://www.logicspice.com/app/webroot/img/images/hydribd_icon.png"
                          />
                        </a>
                      </div>
                      <div class="dedicated_develop_title_box">
                        <a href="https://www.logicspice.com/hire-hybrid-mobile-app-developer">
                          Hire Hybrid mobile app developer
                        </a>
                      </div>
                      <div class="dedicated_develop_content_box">
                        Hire top rated hybrid mobile app developers from
                        logicspice for your next hybrid app development.
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-3 col-sm-4">
                  <div
                    data-aos="fade-up"
                    class="dedicated_develop_col aos-init aos-animate"
                  >
                    <div class="dedicated_develop_col_inner">
                      <div class="dedicated_develop_icon_box">
                        <a href="https://www.logicspice.com/hire-quality-analyst">
                          <img
                            alt="hire quality analyst at logicspice"
                            src="https://www.logicspice.com/app/webroot/img/images/quality_icon.png"
                          />
                        </a>
                      </div>
                      <div class="dedicated_develop_title_box">
                        <a href="https://www.logicspice.com/hire-quality-analyst">
                          Hire Quality Analyst
                        </a>
                      </div>
                      <div class="dedicated_develop_content_box">
                        Hire developer quality assurance tester to make your
                        website,software applications or mobile app bug free.
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-3 col-sm-4">
                  <div
                    data-aos="fade-up"
                    class="dedicated_develop_col aos-init aos-animate"
                  >
                    <div class="dedicated_develop_col_inner">
                      <div class="dedicated_develop_icon_box">
                        <a href="https://www.logicspice.com/hire-shopify-developers">
                          <img
                            alt="hire shopify developers at logicspice"
                            src="https://www.logicspice.com/app/webroot/img/images/shopify_icon.png"
                          />
                        </a>
                      </div>
                      <div class="dedicated_develop_title_box">
                        <a href="https://www.logicspice.com/hire-shopify-developers">
                          Hire Shopify Developers
                        </a>
                      </div>
                      <div class="dedicated_develop_content_box">
                        Are you looking to hire a Shopify Developer for a new
                        online store or want to keep an existing one running
                        smoothly?
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="certificates certificationawardsecin dgd">
        <div className="container">
          <Certificationtabs />
        </div>
      </section>
      {/* <section className="working_with">
        <div className="container">
          <h3 className="title_heading title_heading_bgg">
            Worked with 1500+ companies worldwide, from startups to enterprises.
          </h3>

          <Workingwith />
        </div>
      </section> */}

      {/* <section class="enq-section">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-12 text-center">
              <div className="btn btn-primary" onClick={openModal}>
                <button>Enquire Now</button>
                {
                  <Enquirymodal
                    modalStatus={showModal}
                    toggle={openModal}
                    title="Software development"
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
      </section> */}

      <section class="requirement_section">
        <div class="container">
          <div class="requir_title">
            Talk to us Now!! even if you have very short term requirement.
          </div>
          <div class="requirment_btn">
            <a
            
              onclick ={toggleModal}
              class="btn btn-primary"
            >
              Enquire Now
            </a>
          </div>
        </div>
      </section>
      <section class="how_to_hire">
        <div class="container">
            <div class ="row">

            <div class="col-sm-6 col-md-8">
                <h2 class="title_heading">Hire Developer in 5 Easy Steps</h2>
                <div class="clearfix"></div>
                <ul>
                    <li><span><img src="https://www.logicspice.com/img/images/hire/HI1.png" alt="HI1"/></span> Raise Your Request</li>
                    <li><span><img src="https://www.logicspice.com/img/images/hire/HI2.png" alt="HI2"/></span> Discuss Your Requirment</li>
                    <li><span><img src="https://www.logicspice.com/img/images/hire/HI3.png" alt="HI3"/></span> Select Experts</li>
                    <li><span><img src="https://www.logicspice.com/img/images/hire/HI4.png" alt="HI4"/></span> Finalize the Terms</li>
                    <li><span><img src="https://www.logicspice.com/img/images/hire/HI5.png" alt="HI5"/></span> Assign and kick start</li>
                </ul>
            </div>

            <div class="col-sm-6 col-md-4">
                <div class="form_quote">
                    <form action="/pages/requestquote" enctype="multipart/form-data" name="requestquote" id="requestquote" method="post" accept-charset="utf-8"><div style={{display: "none"}}><input type="hidden" name="_method" value="POST"/></div>
                    <h4>Get a Quote</h4>
                    {/* <div class="form-group">
                        <input name="data[User][name]" placeholder="Your Full Name*" value="" size="40" class="form-control required" type="text" id="UserName"/>                    </div>
                    <div class="form-group">
                        <input name="data[User][email]" placeholder="Email*" value="" size="40" class="form-control required email" type="text" id="UserEmail"/>                    </div>
                    <div class="form-group">
                        <input name="data[User][phone_no]" placeholder="Phone Number" value="" size="40" class="form-control" type="text" id="UserPhoneNo"/>                    </div>
                    <div class="form-group">
                        <textarea name="data[User][message]" placeholder="Your Message*" size="40" class="form-control required" id="UserMessage"></textarea>                    </div>
                    <div class="form-group">
                        <div id="recaptchaQ" style="transform: scale(0.82); transform-origin: left top;"><div style="width: 304px; height: 78px;"><div><iframe title="reCAPTCHA" width="304" height="78" role="presentation" name="a-9nkkqblhtw1n" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation" src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6Leg3gITAAAAAPzWHZ1PgnMhko9tHq8yWvH2q2S7&amp;co=aHR0cHM6Ly93d3cubG9naWNzcGljZS5jb206NDQz&amp;hl=en&amp;v=rKbTvxTxwcw5VqzrtN-ICwWt&amp;theme=light&amp;size=normal&amp;cb=3sk5l0abc68z"></iframe></div><textarea id="g-recaptcha-response-2" name="g-recaptcha-response" class="g-recaptcha-response" style="width: 250px; height: 40px; border: 1px solid rgb(193, 193, 193); margin: 10px 25px; padding: 0px; resize: none; display: none;"></textarea></div></div>
                    </div>
                    <div id="captcha_msg_contact2"></div>
                    <input type="hidden" id="contact_slugQ" value="" name="data[User][post_slug]">
                    <input type="hidden" value="http://www.logicspice.com/hire-developers" name="data[User][post_url]">
                    <input type="hidden" id="contact_frQ" value="Get A Quote for hire developer" name="data[User][product_name]">
                    <div class="form-group">
                        <div class="display_success_message" id="quote_success_message" style="display: none;">                            
                        </div>
                        <div class="display_error_message" id="quote_error_message" style="display: none;">                            
                        </div>
                    </div>
                    <div class="form-group">
                        <input id="submitquote" title="Submit" class="btn btn-primary" size="30" label="" type="submit" value="Submit"/> 
                        <div class="loadloader side_page" id="loadloaderH"><img src="/img/loading-old.gif" alt=""/></div>
                    </div> */}
                    </form>                
                </div>
            </div>

            </div>


        </div>
    </section>
    <section class="contact_now">
        <div class="container">
            <div class="contact_now_wraper">
                <div data-aos="fade-right" class="contact_now_btn aos-init aos-animate">
                    <a class="btn btn-primary" id="inquirenow" data-toggle="modal" data-target="#contactFix">
                        Contact Now &nbsp; <i class="fa fa-angle-right"></i>
                    </a>
                </div>
                <div class="conatct_title">                 
                    Let's have a quick call to better understand about your idea of application.</div>
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
