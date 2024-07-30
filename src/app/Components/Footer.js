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
              <Link href="/company">Company</Link>
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
              <Link href="/softwares">Softwares</Link>
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
              <Link href="/services">Services & Solutions</Link>
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
          <div className="title_of_footer_menu">
              <Link href="/softwares/tact-us">Contact us</Link>
            </div>
            <div className="contact_dtl">
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
      <div class="footer_center">
            <div class="social_footer">
              <ul>
                <li>
                  <img src="/img/footer/foot-arrow.png" alt="Logicspice"/>
                </li>
                <li>
                  <a href="https://www.facebook.com/LogicSpice.company" target="_blank"><i><img
                        src="/img/footer/facebook_icon.png"
                        alt="Facebook Profile - Logicspice" /></i></a>
                </li>
                <li>
                  <a href="https://twitter.com/logicspice" target="_blank"><i><img
                        src="/img/footer/tweetr-icon.png"
                        alt="Twitter Profile - Logicspice" /></i></a>
                </li>
                <li>
                  <a href="https://www.logicspice.com/feed.rss" target="_blank"><i><img
                        src="/img/footer/rss_icon.png"
                        alt="RSS Feeds - Logicspice" /></i></a>
                </li>
                <li>
                  <a href="https://www.youtube.com/channel/UC2kDmMJestnttZJ4fCdSE4Q" target="_blank"><i><img
                        src="/img/footer/youtube_icon.png"
                        alt="Youtube Channel - Logicspice" /></i></a>
                </li>
                <li>
                  <a href="https://www.pinterest.com/logicspice/" target="_blank"><i><img
                        src="/img/footer/printres_icon.png"
                        alt="Pinterest Profile - Logicspice" /></i></a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/logicspice" target="_blank"><i><img
                        src="/img/footer/linkid_icon.png"
                        alt="Linkedin Profile - Logicspice" /></i></a>
                </li>
                <li>
                  <a href="https://blog.logicspice.com" target="_blank"><i><img
                        src="/img/footer/blog_icon.png"
                        alt="Official Blogs - Logicspice" /></i></a>
                </li>
                <li>
                  <a href="https://www.instagram.com/logicspiceapps/" target="_blank"><i><img
                        src="/img/footer/instagram_icon.png"
                        alt="Official Instagram - Logicspice" /></i></a>
                </li>
                <li class="countrys_menu">
                  <div class="countrys_menu_icon">
                    <a>
                      <img src="/img/footer/internet_icon.png" alt="Website &amp; App Development Worldwide"/></a>
                  </div>
                  <div class="countrys_menus">
                    <div class="country_tab_set">
                      <div class="country_row_set">
                        <div class="country_col_set">
                          <span class="country_nm"><a>
                            <img src="/img/footer/australia_flag_img.png" alt="mobile app development in australia" /> Australia</a></span>
                          <div class="counlistshow">
                            <span><a href="/australia/mobile-app-development-in-melbourne">Melbourne</a></span >
                            <span ><a href="/australia/mobile-app-development-in-sydney">Sydney</a></span >
                          </div>
                        </div>
                        <div class="country_col_set">
                          <span class="country_nm"><a href="/uk">
                              <img src="/img/footer/uk_flag_img.png" alt="mobile app development in UK"/> UK</a></span>
                          <div class="counlistshow">
                            <span><a href="/uk/mobile-app-development-in-london">London</a></span>
                            <span><a href="/uk/mobile-app-development-in-manchester">Manchester</a ></span>
                          </div>
                        </div>
                        <div class="country_col_set">
                          <span class="country_nm"><a href="/usa'/">
                         <img src="/img/footer/usa_flag_img.png" alt="mobile app development in USA"/> USA</a></span>
                          <div class="counlistshow">
                            <span><a href="/usa/mobile-app-development-in-california">California</a></span>
                            <span><a href="/usa/mobile-app-development-in-miami">Miami</a></span>
                            <span><a href="/usa/mobile-app-development-in-florida">Florida</a></span>
                            <span><a href="/usa/mobile-app-development-in-losangeles">Los angeles</a></span>
                            <span><a href="/usa/mobile-app-development-in-newyork" >New york</a></span>
                            <span><a href="/usa/mobile-app-development-in-chicago">Chicago</a></span>
                          </div>
                        </div>
                        <div class="country_col_set">
                          <span class="country_nm"><a href="/uae"><img src="/img/footer/uae_flag_iimg.png"
                                alt="mobile app development in UAE"/> UAE</a></span>
                          <div class="counlistshow">
                            <span><a href="/uae/mobile-app-development-in-dubai">Dubai</a></span>
                            <span><a href="/uae/mobile-app-development-in-abu-dhabi">Abu Dhabi</a></span>
                            <span><a href="/uae/mobile-app-development-in-ajman">Ajman</a ></span>
                            <span><a href="/uae/mobile-app-development-in-al-ain">Al Ain</a></span>
                          </div>
                        </div>
                        <div class="country_col_set">
                          <span class="country_nm" ><a href="/switzerland"><img src="/img/footer/switzerland_flag_img.png"
                                alt="mobile app development in Switzerland" /> Switzerland</a></span>
                          <div class="counlistshow">
                            <span><a href="/switzerland/mobile-app-development-in-geneva">Geneva</a></span>
                            <span><a href="/switzerland/mobile-app-development-in-zurich">Zürich</a></span>
                            <span><a href="/switzerland/mobile-app-development-in-basel">Basel</a></span>
                          </div>
                        </div>
                        <div class="country_col_set">
                          <span class="country_nm"><a href="/belgium"><img src="/img/footer/belgium_flag_img.png"
                                alt="mobile app development in Belgium"/> Belgium</a></span>

                          <div class="counlistshow">
                            <span><a href="/belgium/mobile-app-development-in-brussels">Brussels</a></span>
                            <span><a href="/belgium/mobile-app-development-in-flanders" >Flanders</a></span>
                            <span><a href="/belgium/mobile-app-development-in-ghent" >Ghent</a></span>
                            <span><a href="/belgium/mobile-app-development-in-antwerp">Antwerp</a></span>
                          </div>
                        </div>
                        <div class="country_col_set">
                          <span class="country_nm"><a href="/india" ><img src="/img/footer/india_flag_img.png" alt="mobile app development in India" /> India</a></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div class="footer-bottom">
            <p>© Copyright @ 2023 | Mobile App Development Company - Logicspice. All Rights Reserved.</p>
          </div>
      </div>
    </section>
  );
};

export default Footer;
