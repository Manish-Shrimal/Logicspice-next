"use client";
import React from "react";
import { Accordion, AccordionItem } from "./Accordian";
import Link from "next/link";
// import "../../responsive.css";

const injectedConstants = {
  HTTPS_PATH: "https://www.logicspice.com/",
};

const Footer = () => {
  return (
    <section className="footer_bg">
      <div className="container">
        <div className="">
          <div className="mobileShow footer-top">
            <Accordion>
              <AccordionItem headerTitle="Company">
                <div className="panel-body">
                  <ul className="menu-item">
                    <li>
                      <Link href="/company">Our Company</Link>
                    </li>
                    <li>
                      <Link href="/company/about-us">About Us</Link>
                    </li>
                    <li>
                      <Link href="/company/our-team">Our Team</Link>
                    </li>
                    <li>
                      <Link href="/Vuejs/case-study">Case Studies</Link>
                    </li>
                    <li>
                      <Link href="https://www.logicspice.com/users/login">
                        Customer Login
                      </Link>
                    </li>
                    <li>
                      <Link href="/company/careers">Careers</Link>
                    </li>
                    <li>
                      <Link href="https://www.logicspice.com/sitemap.html">
                        Sitemap
                      </Link>
                    </li>
                    <li>
                      <Link href="/hire-developers">Hire Developers</Link>
                    </li>
                    <li>
                      <Link href="https://design.logicspice.com/website-design-packages">
                        Website Packages
                      </Link>
                    </li>
                    <li>
                      <Link href="https://lswebsitedemo.logicspice.com/Vuejs/testimonials-and-reviews">
                        Testimonials & Reviews
                      </Link>
                    </li>
                    <li>
                      <Link href="http://plp.logicspice.com/" target="_blank">
                        Training & Internships
                      </Link>
                    </li>
                  </ul>
                </div>
              </AccordionItem>
              <AccordionItem headerTitle="Softwares">
                <div className="panel-body">
                  <ul className="menu-item">
                    <li>
                      <Link href="/job-board-software">Job Board Software</Link>
                    </li>
                    <li>
                      <Link href="/fiverr-clone">Fiverr Clone Script</Link>
                    </li>
                    <li>
                      <Link href="/crowdfunding-script">
                        Crowdfunding Script
                      </Link>
                    </li>
                    <li>
                      <Link href="/groupon-clone">Groupon Clone Script</Link>
                    </li>
                    <li>
                      <Link href="/classified-ads-script">
                        Classified Ads Software
                      </Link>
                    </li>
                    <li>
                      <Link href="/logistic-marketplace-software">
                        Logistic Software
                      </Link>
                    </li>
                    <li>
                      <Link href="/service-marketplace-script">
                        Service Marketplace Script
                      </Link>
                    </li>
                    <li>
                      <Link href="/freelancer-clone">Freelancer Clone</Link>
                    </li>
                    <li>
                      <Link href="/equipment-rental-software">
                        Equipment Rental Script
                      </Link>
                    </li>
                    <li>
                      <Link href="/recruitment-management-software">
                        Recruitment Management
                      </Link>
                    </li>
                    <li className="MoreSer">
                      <Link href="/softwares">
                        More Softwares
                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </AccordionItem>
              <AccordionItem headerTitle="Services & Solutions">
                <div className="panel-body">
                  <ul className="menu-item">
                    <li>
                      <Link href="/laravel-development">
                        Laravel Development
                      </Link>
                    </li>
                    <li>
                      <Link href="/web-development">Web Development</Link>
                    </li>
                    <li>
                      <Link href="/custom-solutions">Custom Solutions</Link>
                    </li>
                    <li>
                      <Link href="/hybrid-app-development">
                        Hybrid Mobile App Development
                      </Link>
                    </li>
                    <li>
                      <Link href="/angular-development">
                        Angular Development
                      </Link>
                    </li>
                    <li>
                      <Link href="/reactjs-development">
                        React Js Development
                      </Link>
                    </li>
                    <li>
                      <Link href="/dating-system-solution">
                        Dating System Solution
                      </Link>
                    </li>
                    <li>
                      <Link href="/event-booking-system-development">
                        Event Booking System
                      </Link>
                    </li>
                    <li>
                      <Link href="/ecommerce-development">
                        Ecommerce Development
                      </Link>
                    </li>
                    <li>
                      <Link href="/web-hosting">Web Hosting</Link>
                    </li>
                    <li className="MoreSer">
                      <Link href="/services">
                        More Services
                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </AccordionItem>
              <AccordionItem headerTitle="Contact us">
                <div className="panel-body">
                  <div className="company_informetion">
                    <i>
                      <img
                        src="/img/footer/fleg_icon2.png"
                        alt="app development in USA"
                      />
                    </i>
                    <Link href="tel:+1-616-929-4064">+1-616-929-4064</Link>
                  </div>
                  <div className="company_informetion">
                    <i>
                      <img
                        src="/img/footer/fleg_icon1.png"
                        alt="app development in UK"
                      />
                    </i>
                    <Link href="tel:+44782-404-8483">+44782-404-8483</Link>
                  </div>
                  <div className="company_informetion">
                    <i>
                      <img
                        src="/img/footer/fleg_icon3.png"
                        alt="app development in India"
                      />
                    </i>
                    <Link href="tel:+91-9829559922">+91-9829559922</Link>
                  </div>
                  <div className="company_informetion">
                    <i>
                      <img
                        src="/img/footer/massege_icon.png"
                        alt="Mail For Development Query"
                      />
                    </i>
                    <span className="InfoLogicspice">
                      <img
                        src="/img/footer/info-logicspice.png"
                        alt="info@logicspice.com"
                      />
                    </span>
                  </div>
                  <div className="company_informetion">
                    <i>
                      <img
                        src="/img/footer/skya_icon.png"
                        alt="Skype - Logicspice"
                      />
                    </i>
                    <span>logicspice</span>
                  </div>
                </div>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        <div className="row footer-top mobile_none">
          <div className="col-sm-3">
            <div className="title_of_footer_menu">
              <Link href="/Vuejs/company">Company</Link>
            </div>
            <ul className="menu-item">
              <li>
                <Link href="/Vuejs/company/about-us">About Us</Link>
              </li>
              <li>
                <Link href="/Vuejs/company/our-team">Our Team</Link>
              </li>
              <li>
                <Link href="/Vuejs/case-study">Case Studies</Link>
              </li>
              <li>
                <Link href="https://www.logicspice.com/users/login">
                  Customer Login
                </Link>
              </li>
              <li>
                <Link href="/Vuejs/company/careers">Careers</Link>
              </li>
              <li>
                <Link href="https://www.logicspice.com/sitemap.html">
                  Sitemap
                </Link>
              </li>
              <li>
                <Link href="/Vuejs/hire-developers">Hire Developers</Link>
              </li>
              <li>
                <Link href="https://design.logicspice.com/website-design-packages">
                  Website Packages
                </Link>
              </li>
              <li>
                <Link href="https://lswebsitedemo.logicspice.com/Vuejs/testimonials-and-reviews">
                  Testimonials & Reviews
                </Link>
              </li>
              <li>
                <Link href="http://plp.logicspice.com/" target="_blank">
                  Training & Internships
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-sm-3">
            <div className="title_of_footer_menu">
              <Link href="/Vuejs/softwares">Softwares</Link>
            </div>
            <ul className="menu-item">
              <li>
                <Link href="/Vuejs/job-board-software">Job Board Software</Link>
              </li>
              <li>
                <Link href="/Vuejs/fiverr-clone">Fiverr Clone Script</Link>
              </li>
              <li>
                <Link href="/Vuejs/crowdfunding-script">
                  Crowdfunding Script
                </Link>
              </li>
              <li>
                <Link href="/Vuejs/groupon-clone">Groupon Clone Script</Link>
              </li>
              <li>
                <Link href="/Vuejs/classified-ads-script">
                  Classified Ads Software
                </Link>
              </li>
              <li>
                <Link href="/Vuejs/logistic-marketplace-software">
                  Logistic Software
                </Link>
              </li>
              <li>
                <Link href="/Vuejs/service-marketplace-script">
                  Service Marketplace Script
                </Link>
              </li>
              <li>
                <Link href="/Vuejs/freelancer-clone">Freelancer Clone</Link>
              </li>
              <li>
                <Link href="/Vuejs/equipment-rental-software">
                  Equipment Rental Script
                </Link>
              </li>
              <li>
                <Link href="/Vuejs/recruitment-management-software">
                  Recruitment Management
                </Link>
              </li>
              <li className="MoreSer">
                <Link href="/Vuejs/softwares">
                  More Softwares
                  <i className="fa fa-angle-right" aria-hidden="true"></i>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-sm-3">
            <div className="title_of_footer_menu">
              <Link href="/Vuejs/services">Services & Solutions</Link>
            </div>
            <ul className="menu-item">
              <li>
                <Link href="/Vuejs/laravel-development">
                  Laravel Development
                </Link>
              </li>
              <li>
                <Link href="/Vuejs/web-development">Web Development</Link>
              </li>
              <li>
                <Link href="/Vuejs/custom-solutions">Custom Solutions</Link>
              </li>
              <li>
                <Link href="/Vuejs/hybrid-app-development">
                  Hybrid Mobile App Development
                </Link>
              </li>
              <li>
                <Link href="/Vuejs/angular-development">
                  Angular Development
                </Link>
              </li>
              <li>
                <Link href="/Vuejs/reactjs-development">
                  React Js Development
                </Link>
              </li>
              <li>
                <Link href="/Vuejs/dating-system-solution">
                  Dating System Solution
                </Link>
              </li>
              <li>
                <Link href="/Vuejs/event-booking-system-development">
                  Event Booking System
                </Link>
              </li>
              <li>
                <Link href="/Vuejs/ecommerce-development">
                  Ecommerce Development
                </Link>
              </li>
              <li>
                <Link href="/Vuejs/web-hosting">Web Hosting</Link>
              </li>
              <li className="MoreSer">
                <Link href="/Vuejs/services">
                  More Services
                  <i className="fa fa-angle-right" aria-hidden="true"></i>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-sm-3">
            <div className="title_of_footer_menu">Contact us</div>
            <div className="company_informetion">
              <i>
                <img
                  src="/img/footer/fleg_icon2.png"
                  alt="app development in USA"
                />
              </i>
              <Link href="tel:+1-616-929-4064">+1-616-929-4064</Link>
            </div>
            <div className="company_informetion">
              <i>
                <img
                  src="/img/footer/fleg_icon1.png"
                  alt="app development in UK"
                />
              </i>
              <Link href="tel:+44782-404-8483">+44782-404-8483</Link>
            </div>
            <div className="company_informetion">
              <i>
                <img
                  src="/img/footer/fleg_icon3.png"
                  alt="app development in India"
                />
              </i>
              <Link href="tel:+91-9829559922">+91-9829559922</Link>
            </div>
            <div className="company_informetion">
              <i>
                <img
                  src="/img/footer/massege_icon.png"
                  alt="Mail For Development Query"
                />
              </i>
              <span className="InfoLogicspice">
                <img
                  src="/img/footer/info-logicspice.png"
                  alt="info@logicspice.com"
                />
              </span>
            </div>
            <div className="company_informetion">
              <i>
                <img src="/img/footer/skya_icon.png" alt="Skype - Logicspice" />
              </i>
              <span>logicspice</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
