"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import "../globals.css";
import Link from "next/link";
<script
  src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
  crossorigin
></script>;
// import {
//   AppBar,
//   Toolbar,
//   IconButton,
//   Typography,
//   Menu,
//   MenuItem,
//   Container,
//   Button,
// } from '@mui/material';
import MenuIcon from "@mui/icons-material/Menu";

const NavBar = () => {
  const [dropdown1, setDropdown1] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [dropdown3, setDropdown3] = useState(false);
  const [dropdown4, setDropdown4] = useState(false);
  const [dropdown5, setDropdown5] = useState(false);

  return (
    <>
      <nav className="navbar navbar-light  navbar-expand-lg navbar-default mega-menu">
        <div className="container">
          <div className="navbar-brand">
            <Link href="/">
              <img src="/img/logo.png" alt="Logo" />
            </Link>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
           
            <ul className="nav navbar-nav navbar-right mx-auto top-main-menu">
              <li className="dropdown mega-menu-fw">
                <a
                  className="dropdown-toggle"
                  href="#"
                  id="companyDropdown"
                  role="button"
                  data-toggle="dropdown"
                  onMouseEnter={() => setDropdown1(true)}
                  onMouseLeave={() => setDropdown1(false)}
                >
                  COMPANY
                  <b class="caret caret-company"></b>
                </a>
               
                <div
                  className={`dropdown-menu company-menu company-menu-icon ${
                    dropdown1 ? "show" : ""
                  }`}
                  aria-labelledby="companyDropdown"
                  onMouseEnter={() => setDropdown1(true)}
                  onMouseLeave={() => setDropdown1(false)}
                >
                  <div className="grid-demo">
                    <div className="row menu-one">
                      <div className="col-sm-6">
                        <ul>
                          <li>
                            <Link href="/company/our-team">
                              <span class="hover_btn_menu ">
                                <i class="menu_icon_all icon_team"></i>
                              </span>
                              <span>Our Team</span>
                            </Link>
                          </li>
                          <li>
                            <Link href="/company/testimonials-and-reviews/">
                              <span class="hover_btn_menu ">
                                <i class="menu_icon_all icon_testimonials"></i>
                              </span>
                              <span>Testimonials &amp; Reviews</span>
                            </Link>
                          </li>
                          <li>
                            <Link href="/company/technologies">
                              <span class="hover_btn_menu ">
                                <i class="menu_icon_all icon_technologies"></i>
                              </span>
                              <span>Technologies</span>
                            </Link>
                          </li>
                          <li>
                            <Link href="/company/case-studies">
                              <span class="hover_btn_menu ">
                                <i class="menu_icon_all icon_case_study"></i>{" "}
                              </span>
                              <span>Case Studies</span>
                            </Link>
                          </li>
                          <li>
                            <Link href="/company/portfolio">
                              <span class="hover_btn_menu ">
                                <i class="menu_icon_all icon_portfolio"></i>
                              </span>
                              <span>Portfolio</span>
                            </Link>
                          </li>
                          <li>
                            <Link href="">
                              <span class="hover_btn_menu ">
                                <i class="menu_icon_all icon_blog"></i>
                              </span>
                              <span>Blog</span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col-sm-6">
                        <ul>
                          <li className="img_web_app img_web_app_sk">
                            <img
                              src="/img/header/menu-x4.png"
                              alt="Website & App Development Company"
                              width="230"
                            />
                          </li>
                          <li className="img_web_app img_web_app_sk">
                            <img
                              src="/img/header/menu-x1.png"
                              alt="Website & App Development Company"
                              width="136"
                            />
                          </li>
                          <li className="img_web_app img_web_app_sk">
                            <img
                              src="/img/header/menu-x2.png"
                              alt="Website & App Development Company"
                              width="123"
                            />
                          </li>
                          <li className="img_web_app img_web_app_sk">
                            <img
                              src="/img/header/menu-x3.png"
                              alt="Website & App Development Company"
                              width="152"
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="dropdown mega-menu-fw">
                <a
                  className=" dropdown-toggle"
                  href="#"
                  id="softwareDropdown"
                  role="button"
                  data-toggle="dropdown"
                  onMouseEnter={() => setDropdown2(true)}
                  onMouseLeave={() => setDropdown2(false)}
                >
                  SOFTWARE
                  <b class="caret caret-company"></b>
                </a>
                <div
                  className={`dropdown-menu company-menu ${
                    dropdown2 ? "show" : ""
                  }`}
                  aria-labelledby="softwareDropdown"
                  onMouseEnter={() => setDropdown2(true)}
                  onMouseLeave={() => setDropdown2(false)}
                >
                  <div className="grid-demo">
                    <div className="row menu-one product-main-menu">
                      <div className="col-sm-4">
                        <ul>
                          <li>
                            <Link href="/softwares/fiverr-clone">
                              <span class="hover_btn_menu ">
                                <i class="menu_icon_all fiver"></i>
                              </span>
                              <span>Fiverr Clone Script</span>
                            </Link>
                          </li>
                          <li>
                            <Link href="/softwares/crowdfunding-script">
                              <span class="hover_btn_menu ">
                                <i class="menu_icon_all icon_crowd_funding"></i>
                              </span>
                              <span>Crowdfunding Script</span>
                            </Link>
                          </li>
                          <li>
                            <Link href="/softwares/job-board-software">
                              <span class="hover_btn_menu ">
                                <i class="menu_icon_all icon_reqruitment_application"></i>
                              </span>
                              <span>Job Board Software</span>
                            </Link>
                          </li>
                          <li>
                            <Link href="/softwares/whatsapp-clone">
                              <span class="hover_btn_menu ">
                                <i class="menu_icon_all whatsapp_clone_icon"></i>
                              </span>
                              <span> Whatsapp Clone App</span>
                            </Link>
                          </li>
                          <li>
                            <Link href="/softwares/groupon-clone">
                              <span class="hover_btn_menu ">
                                <i class="menu_icon_all icon_groupon"></i>
                              </span>
                              <span>Groupon Clone</span>
                            </Link>
                          </li>
                          <li>
                            <Link href="/softwares/udemy-clone">
                              <span class="hover_btn_menu ">
                                <i class="menu_icon_all udemy-clone-icon"></i>
                              </span>
                              <span> Udemy Clone Script</span>
                            </Link>
                          </li>
                          <li>
                            <Link href="/softwares/freelancer-clone">
                              <span class="hover_btn_menu ">
                                <i class="menu_icon_all icon_freelancer"></i>
                              </span>
                              <span>Freelancer Clone</span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col-sm-4">
                        <ul>
                          <li>
                            <Link href="/softwares/equipment-rental-software">
                              <span class="hover_btn_menu ">
                                <i class="menu_icon_all icon_machinerental"></i>
                              </span>
                              <span>Equipment Rental System</span>
                            </Link>
                          </li>
                          <li>
                            <Link href="/softwares/classified-ads-script">
                              <span class="hover_btn_menu ">
                                <i class="menu_icon_all icon_classfied"></i>
                              </span>
                              <span>Classified Ads Software</span>
                            </Link>
                          </li>
                          <li>
                            <Link href="/softwares/logistic-marketplace-software">
                              <span class="hover_btn_menu ">
                                <i class="menu_icon_all icon_logistic"></i>
                              </span>
                              <span>Logistic Marketplace Software</span>
                            </Link>
                          </li>
                          <li>
                            <Link href="/softwares/marketplace-software-solution">
                              <span class="hover_btn_menu ">
                                <i class="menu_icon_all icon_service_provider_system"></i>
                              </span>
                              <span>Marketplace Software Solution</span>
                            </Link>
                          </li>
                          <li>
                            <Link href="/softwares/inventory-management-software">
                              <span class="hover_btn_menu ">
                                <i class="menu_icon_all icon_online_test_app"></i>
                              </span>
                              <span>Inventory Management</span>
                            </Link>
                          </li>
                          <li>
                            <Link href="/softwares/recruitment-management-software">
                              <span class="hover_btn_menu ">
                                <i class="menu_icon_all rms_clone"></i>
                              </span>
                              <span>Recruitment Management</span>
                            </Link>
                          </li>
                          <li>
                            <Link href="/softwares/business-directory-system">
                              <span class="hover_btn_menu ">
                                <i class="menu_icon_all icon_business_directorysystem"></i>
                              </span>
                              <span>Business Directory Software</span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col-sm-4">
                        <ul>
                          <li>
                            <Link href="/softwares/event-booking-software">
                              <span class="hover_btn_menu ">
                                <i class="menu_icon_all icon_event_booking"></i>
                              </span>
                              <span>Event Booking Software</span>
                            </Link>
                          </li>
                          <li>
                            <Link href="/softwares/faq-script">
                              <span class="hover_btn_menu ">
                                <i class="menu_icon_all icon_faq"></i>
                              </span>
                              <span>FAQ Script</span>
                            </Link>
                          </li>
                          <li>
                            <Link href="/softwares/blog-script">
                              <span class="hover_btn_menu ">
                                <i class="menu_icon_all icon_angularjsblog"></i>
                              </span>
                              <span>Blog Script</span>
                            </Link>
                          </li>
                          <li>
                            <Link href="/softwares/lead-generation-contact-form-php-script">
                              <span class="hover_btn_menu ">
                                <i class="menu_icon_all icon_lead_gene"></i>
                              </span>
                              <span>Lead Generation Form</span>
                            </Link>
                          </li>
                          <li>
                            <Link href="">
                              <span class="hover_btn_menu ">
                                <i class="menu_icon_all icon_temp"></i>
                              </span>
                              <span>Free Templates</span>
                            </Link>
                          </li>

                          <li class="ad-footer-view-all">
                            <Link href="/softwares" class="btn btn-primary">
                              View All Softwares
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="dropdown mega-menu-fw">
                <a
                  className="dropdown-toggle"
                  href="#"
                  id="servicesDropdown"
                  role="button"
                  data-toggle="dropdown"
                  onMouseEnter={() => setDropdown3(true)}
                  onMouseLeave={() => setDropdown3(false)}
                >
                  SERVICES
                  <b class="caret caret-company"></b>
                </a>
                <div
                  className={`dropdown-menu company-menu ${
                    dropdown3 ? "show" : ""
                  }`}
                  aria-labelledby="servicesDropdown"
                  onMouseEnter={() => setDropdown3(true)}
                  onMouseLeave={() => setDropdown3(false)}
                >
                  <div className="grid-demo">
                    <div className="row menu-one service-main-menu">
                      <div className="col-sm-4">
                        <ul className="">
                          <span className="ahab">
                            <Link href="/services/web-development">
                              <i className="fa fa-desktop"></i> Web Development{" "}
                            </Link>
                          </span>
                          <li>
                            <Link href="/services/php-development">
                              <span className="hover_btn_menu ">
                                <i className="menu_icon_all icon_php_programing"></i>{" "}
                              </span>
                              <span>PHP Development Company</span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/services/cakephp-development"
                              className=""
                            >
                              <span className="hover_btn_menu ">
                                <i className="menu_icon_all icon_cakephp"></i>{" "}
                              </span>
                              <span>CakePHP Development</span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/services/codeigniter-development"
                              className=""
                            >
                              <span className="hover_btn_menu ">
                                <i className="menu_icon_all icon_codeigniter_frm"></i>{" "}
                              </span>
                              <span>Codeigniter Development</span>
                            </Link>
                          </li>
                          <li>
                            <Link href="/services/laravel-development">
                              <span className="hover_btn_menu ">
                                <i className="menu_icon_all icon_laraval"></i>{" "}
                              </span>
                              <span>Laravel Development</span>
                            </Link>
                          </li>
                          <li>
                            <Link href="/services/nodejs-development">
                              <span className="hover_btn_menu icon_nodejs">
                                <i className="menu_icon_all icon_nodejs"></i>{" "}
                              </span>
                              <span>Node.JS Development</span>
                            </Link>
                          </li>
                          <li>
                            <Link href="/services/ecommerce-development">
                              <span className="hover_btn_menu icon_nodejs">
                                <i className="menu_icon_all icon_ecommerce"></i>{" "}
                              </span>
                              <span>eCommerce Website Package</span>
                            </Link>
                          </li>

                          {/* <li className="ad-footer-view-all desktop-show">
                          <a
                            href="/softwares/services"
                            className="btn btn-primary"
                          >
                            View All Services
                          </a>
                        </li> */}
                        </ul>
                      </div>
                      <div class="col-sm-4">
                        <ul style={{ paddingBottom: "15px" }}>
                          <span class="ahab ahab1">
                            <Link href="/services/mobile-app-development">
                              <i class="fa fa-mobile"></i> Mobile App
                              Development
                            </Link>
                          </span>
                          <li>
                            <Link href="/services/ios-app-development">
                              <span class="hover_btn_menu icon_iphone_application">
                                <i class="menu_icon_all icon_iphone_application"></i>{" "}
                              </span>
                              <span>iPhone App Development</span>
                            </Link>
                          </li>
                          <li>
                            <Link href="/services/android-app-development">
                              <span class="hover_btn_menu icon_android_application">
                                <i class="menu_icon_all icon_android_application"></i>
                              </span>
                              <span>Android App Development</span>
                            </Link>
                          </li>
                        </ul>
                        <ul class="" style={{ PaddingTop: "0px" }}>
                          <span class="ahab ahab2">
                            <Link href="https://design.logicspice.com">
                              <i class="fa fa-paint-brush"></i> UI UX Design{" "}
                            </Link>
                          </span>
                          <li>
                            <Link href="/services/website-design" class="">
                              <span class="hover_btn_menu ">
                                <i class="menu_icon_all icon_web"></i>
                              </span>
                              <span>Web Design</span>
                            </Link>
                          </li>
                          <li>
                            <Link href="https://design.logicspice.com/website-design-packages">
                              <span class="hover_btn_menu ">
                                <i class="menu_icon_all icon_webdesign"></i>{" "}
                              </span>
                              <span>Website Design Packages</span>
                            </Link>
                          </li>

                          <li class="ad-footer-view-all desktop-show">
                            <Link href="/services" class="btn btn-primary">
                              View All Services
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div className="col-sm-4">
                        <ul>
                          <span className="ahab">
                            <Link
                              style={{ marginTop: "0", color: "#0f591f" }}
                              href="javascript:void();"
                            >
                              <i className="fa fa-cog"></i> Other
                            </Link>
                          </span>
                          <li>
                            <Link
                              href="/services/software-development"
                              className=""
                            >
                              <span className="hover_btn_menu icon_software-development">
                                <i className="menu_icon_all icon_software-development"></i>
                              </span>
                              <span>Software Development</span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/services/digital-marketing"
                              className=""
                            >
                              <span className="hover_btn_menu icon_digital_marketing">
                                <i className="menu_icon_all icon_digital_marketing"></i>{" "}
                              </span>
                              <span>Digital Marketing</span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/services/software-maintenance-support"
                              className=""
                            >
                              <span className="hover_btn_menu icon_support_maintence">
                                <i className="menu_icon_all icon_support_maintence"></i>
                              </span>
                              <span>Support &amp; Maintenance</span>
                            </Link>
                          </li>
                          <li>
                            <Link href="/services/saas-software-development">
                              <span className="hover_btn_menu ">
                                <i className="menu_icon_all icon_salesforce"></i>{" "}
                              </span>
                              <span>SaaS Software Development</span>
                            </Link>
                          </li>
                          <li>
                            <Link href="/services/hire-developers">
                              <span className="hover_btn_menu ">
                                <i className="menu_icon_all icon_hire_remote"></i>{" "}
                              </span>
                              <span>Hire Remote Developer</span>
                            </Link>
                          </li>
                          <li>
                            <Link href="http://plp.logicspice.com">
                              <span className="hover_btn_menu ">
                                <i className="menu_icon_all icon_placement_launch"></i>{" "}
                              </span>
                              <span>Placement Launch Pad</span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="dropdown mega-menu-fw">
                <a
                  className=" dropdown-toggle"
                  href="#"
                  id="hiringDropdown"
                  role="button"
                  data-toggle="dropdown"
                  onMouseEnter={() => setDropdown4(true)}
                  onMouseLeave={() => setDropdown4(false)}
                >
                  CUSTOM SOLUTIONS
                  <b class="caret caret-company"></b>
                </a>
                <div
                  className={`dropdown-menu company-menu company-menu-icon ${
                    dropdown4 ? "show" : ""
                  }`}
                  aria-labelledby="hiringDropdown"
                  onMouseEnter={() => setDropdown4(true)}
                  onMouseLeave={() => setDropdown4(false)}
                >
                  <div className="grid-demo">
                    <div className=" row menu-one custom-main-menu">
                      <div className="col-sm-4">
                        <ul>
                          <li>
                            <Link
                              href="/custom-solutions/booking-app-development"
                              className=""
                            >
                              <span className="hover_btn_menu ">
                                <i className="menu_icon_all icon_online_booking"></i>
                              </span>
                              <span>Booking Applications</span>
                            </Link>
                          </li>
                          <li>
                            <Link href="/custom-solutions/seat-booking-system">
                              <span className="hover_btn_menu ">
                                <i className="menu_icon_all icon_seat_booking"></i>{" "}
                              </span>
                              <span>Seat Booking</span>
                            </Link>
                          </li>
                          <li>
                            <Link href="/custom-solutions/crm-software-development">
                              <span className="hover_btn_menu ">
                                <i className="menu_icon_all rcrm_icon"></i>{" "}
                              </span>
                              <span>CRM Solution</span>
                            </Link>
                          </li>
                          <li>
                            <Link href="/custom-solutions/ecommerce-development">
                              <span className="hover_btn_menu ">
                                <i className="menu_icon_all icon_ecommerce_solution"></i>{" "}
                              </span>
                              <span>Ecommerce</span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col-sm-4">
                        <ul>
                          <li>
                            <Link href="/custom-solutions/dating-system-solution">
                              <span className="hover_btn_menu ">
                                <i className="menu_icon_all datingsys_icon"></i>{" "}
                              </span>
                              <span>Dating System</span>
                            </Link>
                          </li>
                          <li>
                            <Link href="/custom-solutions/event-booking-system-development">
                              <span className="hover_btn_menu ">
                                <i className="menu_icon_all icon_event_system"></i>{" "}
                              </span>
                              <span>Event Booking System</span>
                            </Link>
                          </li>
                          <li>
                            <Link href="/custom-solutions/auction-software-solution">
                              <span className="hover_btn_menu ">
                                <i className="menu_icon_all icon_auctionsystem"></i>{" "}
                              </span>
                              <span>Auction System</span>
                            </Link>
                          </li>
                          <li>
                            <Link href="/custom-solutions/car-rental-software">
                              <span className="hover_btn_menu ">
                                <i className="menu_icon_all icon_carrental"></i>{" "}
                              </span>
                              <span>Car Rental Software</span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col-sm-4">
                        <ul>
                          <li>
                            <Link href="/custom-solutions/user-management-system">
                              <span className="hover_btn_menu">
                                <i className="menu_icon_all icon_user_mng"></i>{" "}
                              </span>
                              <span>User Management System</span>
                            </Link>
                          </li>
                          <li>
                            <a href="/custom-solutions/website-calculator-builder">
                              <span className="hover_btn_menu">
                                <i className="menu_icon_all icon_calc"></i>{" "}
                              </span>
                              <span>Website Calculator Builder</span>
                            </a>
                          </li>
                          <li>
                            <Link href="/custom-solutions/erp-system-software-developement">
                              <span className="hover_btn_menu">
                                <i className="menu_icon_all icon_erp"></i>{" "}
                              </span>
                              <span>ERP System Software</span>
                            </Link>
                          </li>
                          <li className="ad-footer-view-all">
                            <Link
                              href="/custom-solutions"
                              className="btn btn-primary"
                            >
                              View All Custom Solutions
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <Link href="">blog</Link>
              </li>
            </ul>

            <div class="contact_detail_top">
              <ul class="con_d">
                <li class="logic_contact">
                  <a
                    href="#"
                    onMouseEnter={() => setDropdown5(true)}
                    onMouseLeave={() => setDropdown5(false)}
                  >
                    <i class="fa fa-phone"></i> <b class="caret"></b>
                  </a>
                  <div
                    className={`sub-contact ${dropdown5 ? "show" : ""}`}
                    aria-labelledby=""
                    onMouseEnter={() => setDropdown5(true)}
                    onMouseLeave={() => setDropdown5(false)}
                  >
                    <div class="">
                      <h2>Connect With Us</h2>
                      <div class="sales_enquiry">
                        <p>For Sales Inquiry</p>
                        <ul class="sales_contact">
                          <li>
                            <img
                              src="https://www.logicspice.com/img/images/fleg_icon2.png"
                              alt="Logicspice Contact No. - USA"
                            />
                            <a href="tel:+1-616-929-4064">+1-616-929-4064</a>
                          </li>
                          <li>
                            <img
                              src="https://www.logicspice.com/img/images/fleg_icon1.png"
                              alt="Logicspice Contact No. - UK"
                            />
                            <a href="tel:+44782-404-8483">+44782-404-8483</a>
                          </li>
                          <li>
                            <img
                              src="https://www.logicspice.com/img/images/fleg_icon3.png"
                              alt="Logicspice Contact No. - India"
                            />
                            <a href="tel:+91-9829559922">+91-9829559922</a>
                          </li>
                          <li>
                            <img
                              src="https://www.logicspice.com/img/images/skya_icon.png"
                              alt="Logicspice Contact - Skype"
                            />
                            <span>logicspice</span>
                          </li>
                          <li>
                            <img
                              src="https://www.logicspice.com/img/images/count/mail.png"
                              alt="Logicspice Contact - Email"
                            />
                            <span>
                              <img
                                src="https://www.logicspice.com/img/images/count/logicspice-mail.svg"
                                alt="Logicspice Contact - Email"
                              />
                            </span>
                          </li>
                        </ul>
                        <a
                          href="https://www.logicspice.com/contact-us"
                          class="btn btn-primary"
                        >
                          Contact Us
                        </a>
                      </div>
                      <div class="hr_enquiry">
                        <p>For HR Inquiry</p>
                        <ul class="sales_contact">
                          <li>
                            <img
                              src="https://www.logicspice.com/img/images/fleg_icon3.png"
                              alt="Logicspice Contact No. - India"
                            />{" "}
                            <a href="tel:+91-7727974242">+91-7727974242</a>
                          </li>
                          <li>
                            <img
                              src="https://www.logicspice.com/img/images/count/mail.png"
                              alt="Logicspice Contact - Email"
                            />{" "}
                            <span> hr@logicspice.com </span>
                          </li>
                        </ul>
                        <a
                          href="https://www.logicspice.com/apply-now"
                          class="btn btn-primary"
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;