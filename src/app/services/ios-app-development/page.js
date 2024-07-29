"use client";
import React, { useState } from "react";
import Footer from "@/app/Components/Footer";
import NavBar from "@/app/Components/Navbar";
import "@/app/services/services.css";
import Image from "next/image";
import Link from "next/link";
import "@fortawesome/fontawesome-free/css/all.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Contactusmodel from "@/app/Components/Contactusmodel";

const Page = () => {
  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 8,
    autoplay: false,
    autoplaySpeed: 3000,
  };
  var casestudy = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
  };
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  return (
    <>
      <NavBar />
      <section class="iphone_template_header environment">
        <div class="container">
          <div class="row">
            <div class="col-sm-6">
              <div class="iphone_template_header_left">
                <Image
                  class="normal_logo"
                  alt="Android Applications Developmenr Company"
                  src="/img/iosappdevelopment/android-phone.png"
                />
              </div>
            </div>
            <div class="col-sm-6">
              <div class="iphone_template_header_right">
                <div class="iphone_template_header_rightwh">
                  We have developed expertise in developing wide range of{" "}
                  <span class="cussizeset">iPhone applications</span>
                </div>
                <div class="clearfix"></div>
                <div class="line_iptemp"></div>
                <div class="clearfix"></div>
                <div class="portfolio_button">
                  <Link
                    href="#"
                    id=""
                    class="btn btn-primary"
                    onClick={() => openEnquiryModal()}
                  >
                    <span>Portfolio</span>
                  </Link>
                  <Link
                    href="#"
                    id=""
                    className="btn btn-primary"
                    onClick={() => toggleModal()}
                  >
                    Enquire Now
                  </Link>
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
          </div>
        </div>
      </section>
      <section class="iphone_template_header_bottom_cont">
        <div class="container">
          <div class="row">
            <div class="col-sm-6 offset-sm-6">
              <div class="cont_rihss">
                Logicspice has been awarded one of the most reliable
                <h1 style={{ paddingLeft: 0 }}>
                  <a href="https://www.logicspice.com">
                    iphone app development company
                  </a>
                </h1>{" "}
                by different platforms like clutch, Top freelancer etc.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="scroll_sec">
        <div class="bestheating">
          <div class="apps_portfolioshowe bestheating-slider-wrap best-heating-wrap">
            <div class="home-projects">
              <div
                data-home-project="1"
                class="apps_portfolioshowe_sections home-project home-project--android none"
              >
                <div
                  style={{
                    backgroundImage: "url('/img/iosappdevelopment/uuuga.png')",
                  }}
                  class="apps_portfolioshowe_sections_image"
                ></div>
                <div class="apps_portfolioshowe_sections_container">
                  <div class="home-project__inner first-slide bdr_block">
                    <div class="home-project__clip">
                      <div class="home-project__phone">
                        <div data-reveal-bg="1" class="responsive__bg__wrap">
                          <Image
                            src="/img/iosappdevelopment/mobileon_portfolio.png"
                            aria-hidden="true"
                            alt="iPhone app development services"
                          />
                        </div>
                        <div class="phone__reveal">
                          <div data-reveal-wrap="1" class="phone__reveal__wrap">
                            <Image
                              alt="UUUga"
                              src="/img/iosappdevelopment/uuuga_profile.png"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="wrap">
                      <div class="apps_portfolioshowe_right_wrap">
                        <div class="apps_portfolioshowe_right_wrap_in">
                          <div class="apps_portfolioshowe_top">
                            <div class="apps_portfolioshowe_topleft">
                              <div class="apps_portfolioshowe_top_icon">
                                <Image
                                  alt="iPhone App Development Company"
                                  src="/img/iosappdevelopment/apps-logicspice.png"
                                />
                              </div>
                              <div class="apps_portfolioshowe_top_name">
                                UUUga
                              </div>
                            </div>
                            <div class="apps_portfolioshowe_topright">
                              <ul>
                                <li>
                                  <a target="_blank" href="javascript:void(0)">
                                    <Image
                                      alt="iPhone App Development Company"
                                      src="/img/iosappdevelopment/apple_icon.png"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a target="_blank" href="javascript:void(0)">
                                    <Image
                                      alt="iPhone App Development Company"
                                      src="/img/iosappdevelopment/android_skicon.png"
                                    />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div class="details_of_appdesc">
                            <div class="details_of_appdesc_row">
                              <div class="details_of_appdesc_row_title">
                                SYSTEM:
                              </div>
                              <span>iOS, Android</span>
                            </div>
                            <div class="details_of_appdesc_row">
                              <div class="details_of_appdesc_row_title">
                                WE MAKE:
                              </div>
                              <span>UI/ UX design, development</span>
                            </div>
                            <div class="details_of_appdesc_row">
                              <div class="details_of_appdesc_row_title">
                                TIME TAKE:
                              </div>
                              <span>30 Days to build</span>
                            </div>
                            <div class="details_of_appdesc_row">
                              <div class="details_of_appdesc_row_title">
                                TEAM:
                              </div>
                              <span>
                                1 Project Manager, 3 Developer &amp; 1 Quality
                                Analyst
                              </span>
                            </div>
                            <div class="details_of_appdesc_row">
                              <div class="details_of_appdesc_row_title">
                                ABOUT APP:
                              </div>
                              <span>
                                The motto of the proposed app solutions is that
                                Buyer would be able to upload there CVs and
                                would be able to capture the video resume or
                                requirement in the form of video and then the
                                buyers CV would be matched as per the
                                requirement and the review of video resume would
                                be done. If the interviewee is not available
                                then interview could be assigned to some one
                                else and then the login id and password would be
                                sent to that interviewee.{" "}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-home-project="2"
                class="apps_portfolioshowe_sections home-project home-project--android"
              >
                <div class="apps_portfolioshowe_sections_container">
                  <div class="home-project__inner home-project__inner--quizup">
                    <div class="home-project__clip">
                      <div class="home-project__phone">
                        <div data-reveal-bg="1" class="responsive__bg__wrap">
                          <Image
                            src="/img/iosappdevelopment/mobileon_portfolio.png"
                            aria-hidden="true"
                            alt="iPhone app development services"
                          />
                        </div>
                        <div class="phone__reveal">
                          <div data-reveal-wrap="1" class="phone__reveal__wrap">
                            <Image
                              alt="Localgenii"
                              src="/img/iosappdevelopment/localgenii_in.jpg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="wrap">
                      <div class="apps_portfolioshowe_right_wrap">
                        <div class="apps_portfolioshowe_right_wrap_in">
                          <div class="apps_portfolioshowe_top">
                            <div class="apps_portfolioshowe_topleft">
                              <div class="apps_portfolioshowe_top_icon">
                                <Image
                                  alt="iPhone App Development Company"
                                  src="/img/iosappdevelopment/BusinesS-Apps-Development.png"
                                />
                              </div>
                              <div class="apps_portfolioshowe_top_name">
                                Localgenii
                              </div>
                            </div>
                            <div class="apps_portfolioshowe_topright">
                              <ul>
                                <li>
                                  <a target="_blank" href="javascript:void(0)">
                                    <Image
                                      alt="iPhone App Development Company"
                                      src="/img/iosappdevelopment/apple_icon.png"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a target="_blank" href="javascript:void(0)">
                                    <Image
                                      alt="iPhone App Development Company"
                                      src="/img/iosappdevelopment/android_skicon.png"
                                    />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div class="details_of_appdesc">
                            <div class="details_of_appdesc_row">
                              <div class="details_of_appdesc_row_title">
                                SYSTEM:
                              </div>
                              <span>iOS, Android</span>
                            </div>
                            <div class="details_of_appdesc_row">
                              <div class="details_of_appdesc_row_title">
                                WE MAKE:
                              </div>
                              <span>UI/ UX design, development</span>
                            </div>
                            <div class="details_of_appdesc_row">
                              <div class="details_of_appdesc_row_title">
                                TIME TAKE:
                              </div>
                              <span>30 Days to build</span>
                            </div>
                            <div class="details_of_appdesc_row">
                              <div class="details_of_appdesc_row_title">
                                TEAM:
                              </div>
                              <span>
                                1 Project Manager, 3 Developer &amp; 1 Quality
                                Analyst
                              </span>
                            </div>
                            <div class="details_of_appdesc_row">
                              <div class="details_of_appdesc_row_title">
                                ABOUT APP:
                              </div>
                              <span>
                                The motto of the proposed app solution is that
                                users can register as traveler and can post
                                their services &amp; specifying their lenses
                                &amp; expertise. Users can search locals by
                                selecting maximum 3 lenses and view listing.
                                They can view profile of selected user. They can
                                connected to the local. After connecting they
                                can post their review over app.
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-home-project="3"
                class="apps_portfolioshowe_sections home-project home-project--android"
              >
                <div class="apps_portfolioshowe_sections_container">
                  <div class="home-project__inner home-project__inner--quizup">
                    <div class="home-project__clip">
                      <div class="home-project__phone">
                        <div data-reveal-bg="1" class="responsive__bg__wrap">
                          <Image
                            src="/img/iosappdevelopment/mobileon_portfolio.png"
                            aria-hidden="true"
                            alt="iPhone app development services"
                          />
                        </div>
                        <div class="phone__reveal">
                          <div data-reveal-wrap="1" class="phone__reveal__wrap">
                            <Image
                              alt="Martgram"
                              src="/img/iosappdevelopment/martgram_in.jpg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="wrap">
                      <div class="apps_portfolioshowe_right_wrap">
                        <div class="apps_portfolioshowe_right_wrap_in">
                          <div class="apps_portfolioshowe_top">
                            <div class="apps_portfolioshowe_topleft">
                              <div class="apps_portfolioshowe_top_icon">
                                <Image
                                  alt="iPhone App Development Company"
                                  src="/img/iosappdevelopment/mobile-Apps.png"
                                />
                              </div>
                              <div class="apps_portfolioshowe_top_name">
                                Martgram
                              </div>
                            </div>
                            <div class="apps_portfolioshowe_topright">
                              <ul>
                                <li>
                                  <a href="javascript:void(0)">
                                    <Image
                                      alt="iPhone App Development Company"
                                      src="/img/iosappdevelopment/apple_icon.png"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a href="javascript:void(0)">
                                    <Image
                                      alt="iPhone App Development Company"
                                      target="_blank"
                                      src="/img/iosappdevelopment/android_skicon.png"
                                    />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div class="details_of_appdesc">
                            <div class="details_of_appdesc_row">
                              <div class="details_of_appdesc_row_title">
                                SYSTEM:
                              </div>
                              <span>iOS, Android</span>
                            </div>
                            <div class="details_of_appdesc_row">
                              <div class="details_of_appdesc_row_title">
                                WE MAKE:
                              </div>
                              <span>UI/ UX design, development</span>
                            </div>
                            <div class="details_of_appdesc_row">
                              <div class="details_of_appdesc_row_title">
                                TIME TAKE:
                              </div>
                              <span>30 Days to build</span>
                            </div>
                            <div class="details_of_appdesc_row">
                              <div class="details_of_appdesc_row_title">
                                TEAM:
                              </div>
                              <span>
                                1 Project Manager, 3 Developer &amp; 1 Quality
                                Analyst
                              </span>
                            </div>
                            <div class="details_of_appdesc_row">
                              <div class="details_of_appdesc_row_title">
                                ABOUT APP:
                              </div>
                              <span>
                                The motto of the proposed app solution is that
                                Seller can register email or Instagram accounts
                                and can select category under which they need to
                                list their softwares and summit required details
                                of product which they need to list their
                                product. Buyers can login &amp; can search for
                                sellers in their region and view softwares
                                listed by them and they can place order for
                                their desired product over app.
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-home-project="4"
                class="apps_portfolioshowe_sections home-project home-project--android"
              >
                <div
                  style={{
                    backgroundImage:
                      "url('/img/iosappdevelopment/favorit.png')",
                  }}
                  class="apps_portfolioshowe_sections_image"
                ></div>
                <div class="apps_portfolioshowe_sections_container">
                  <div class="home-project__inner home-project__inner--quizup">
                    <div class="home-project__clip">
                      <div class="home-project__phone">
                        <div data-reveal-bg="1" class="responsive__bg__wrap">
                          <Image
                            src="/img/iosappdevelopment/mobileon_portfolio.png"
                            aria-hidden="true"
                            alt="iPhone app development services"
                          />
                        </div>
                        <div class="phone__reveal">
                          <div data-reveal-wrap="1" class="phone__reveal__wrap">
                            <Image
                              alt="Favor It"
                              src="/img/iosappdevelopment/favorit_it_in.png"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="wrap">
                      <div class="apps_portfolioshowe_right_wrap">
                        <div class="apps_portfolioshowe_right_wrap_in">
                          <div class="apps_portfolioshowe_top">
                            <div class="apps_portfolioshowe_topleft">
                              <div class="apps_portfolioshowe_top_icon">
                                <Image
                                  alt="iPhone App Development Company"
                                  src="/img/iosappdevelopment/Business_Developers.png"
                                />
                              </div>
                              <div class="apps_portfolioshowe_top_name">
                                Favor It
                              </div>
                            </div>
                            <div class="apps_portfolioshowe_topright">
                              <ul>
                                <li>
                                  <a target="_blank" href="javascript:void(0)">
                                    <Image
                                      alt="iPhone App Development Company"
                                      src="/img/iosappdevelopment/apple_icon.png"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a target="_blank" href="javascript:void(0)">
                                    <Image
                                      alt="iPhone App Development Company"
                                      src="/img/iosappdevelopment/android_skicon.png"
                                    />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div class="details_of_appdesc">
                            <div class="details_of_appdesc_row">
                              <div class="details_of_appdesc_row_title">
                                SYSTEM:
                              </div>
                              <span>iOS, Android</span>
                            </div>
                            <div class="details_of_appdesc_row">
                              <div class="details_of_appdesc_row_title">
                                WE MAKE:
                              </div>
                              <span>UI/ UX design, development</span>
                            </div>
                            <div class="details_of_appdesc_row">
                              <div class="details_of_appdesc_row_title">
                                TIME TAKE:
                              </div>
                              <span>30 Days to build</span>
                            </div>
                            <div class="details_of_appdesc_row">
                              <div class="details_of_appdesc_row_title">
                                TEAM:
                              </div>
                              <span>
                                1 Project Manager, 3 Developer &amp; 1 Quality
                                Analyst
                              </span>
                            </div>
                            <div class="details_of_appdesc_row">
                              <div class="details_of_appdesc_row_title">
                                ABOUT APP:
                              </div>
                              <span>
                                The motto of the proposed app solution is that
                                users can post tasks by selecting category and
                                also view tasks/favors in their location and can
                                also search for tasks. They can also view list
                                of all the favors posted and can then refine the
                                listings. They will also be able to select any
                                favor which they wish to complete and can accept
                                the favor or message the taskers. Once they
                                complete favor, both will be able to mark the
                                favor as completed and payment can be made over
                                the app.{" "}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-home-project="5"
                class="apps_portfolioshowe_sections home-project home-project--android"
              >
                <div class="apps_portfolioshowe_sections_container">
                  <div class="home-project__inner home-project__inner--quizup">
                    <div class="home-project__clip">
                      <div class="home-project__phone">
                        <div data-reveal-bg="1" class="responsive__bg__wrap">
                          <Image
                            src="/img/iosappdevelopment/mobileon_portfolio.png"
                            aria-hidden="true"
                            alt="iPhone app development services"
                          />
                        </div>
                        <div class="phone__reveal">
                          <div data-reveal-wrap="1" class="phone__reveal__wrap">
                            <Image
                              alt="Klick"
                              src="/img/iosappdevelopment/klick_in.jpg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="wrap">
                      <div class="apps_portfolioshowe_right_wrap">
                        <div class="apps_portfolioshowe_right_wrap_in">
                          <div class="apps_portfolioshowe_top">
                            <div class="apps_portfolioshowe_topleft">
                              <div class="apps_portfolioshowe_top_icon">
                                <Image
                                  alt="iPhone App Development Company"
                                  src="/img/iosappdevelopment/Business-Service.png"
                                />
                              </div>
                              <div class="apps_portfolioshowe_top_name">
                                Klick
                              </div>
                            </div>
                            <div class="apps_portfolioshowe_topright">
                              <ul>
                                <li>
                                  <a target="_blank" href="javascript:void(0)">
                                    <Image
                                      alt="iPhone App Development Company"
                                      src="/img/iosappdevelopment/apple_icon.png"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a target="_blank" href="javascript:void(0)">
                                    <Image
                                      alt="iPhone App Development Company"
                                      src="/img/iosappdevelopment/android_skicon.png"
                                    />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div class="details_of_appdesc">
                            <div class="details_of_appdesc_row">
                              <div class="details_of_appdesc_row_title">
                                SYSTEM:
                              </div>
                              <span>iOS, Android</span>
                            </div>
                            <div class="details_of_appdesc_row">
                              <div class="details_of_appdesc_row_title">
                                WE MAKE:
                              </div>
                              <span>UI/ UX design, development</span>
                            </div>
                            <div class="details_of_appdesc_row">
                              <div class="details_of_appdesc_row_title">
                                TIME TAKE:
                              </div>
                              <span>30 Days to build</span>
                            </div>
                            <div class="details_of_appdesc_row">
                              <div class="details_of_appdesc_row_title">
                                TEAM:
                              </div>
                              <span>
                                1 Project Manager, 3 Developer &amp; 1 Quality
                                Analyst
                              </span>
                            </div>
                            <div class="details_of_appdesc_row">
                              <div class="details_of_appdesc_row_title">
                                ABOUT APP:
                              </div>
                              <span>
                                The motto of the proposed app solution is that
                                Users leave the items at the place of purchase
                                to be prepared for shipment to his residence.
                                User will send payment to Apple inc. Then Apple
                                inc. will send the amount after fee deduction to
                                admin&apos;s paypal account. After purchasing the
                                item from the store, end user will collect the
                                receipt from the item provider and place a
                                shipment using the &quot;Klick&quot; app. User also need
                                to choose the shipping method provided by
                                courier company.
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-home-project="6"
                class="apps_portfolioshowe_sections home-project home-project--android"
              >
                <div
                  style={{
                    backgroundImage:
                      "url('/img/iosappdevelopment/raydaar_img.png')",
                  }}
                  class="apps_portfolioshowe_sections_image"
                ></div>
                <div class="apps_portfolioshowe_sections_container">
                  <div class="home-project__inner last-slide slide-last-bdr">
                    <div class="home-project__clip">
                      <div class="home-project__phone">
                        <div data-reveal-bg="1" class="responsive__bg__wrap">
                          <Image
                            src="/img/iosappdevelopment/mobileon_portfolio.png"
                            aria-hidden="true"
                            alt="iPhone app development services"
                          />
                        </div>
                        <div class="phone__reveal">
                          <div data-reveal-wrap="1" class="phone__reveal__wrap">
                            <Image
                              alt="Raydaar"
                              src="/img/iosappdevelopment/tc_in.jpg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="wrap">
                      <div class="apps_portfolioshowe_right_wrap">
                        <div class="apps_portfolioshowe_right_wrap_in">
                          <div class="apps_portfolioshowe_top">
                            <div class="apps_portfolioshowe_topleft">
                              <div class="apps_portfolioshowe_top_icon">
                                <Image
                                  alt="iPhone App Development Company"
                                  src="/img/iosappdevelopment/Business-Apps.png"
                                />
                              </div>
                              <div class="apps_portfolioshowe_top_name">
                                Raydaar
                              </div>
                            </div>
                            <div class="apps_portfolioshowe_topright">
                              <ul>
                                <li>
                                  <a target="_blank" href="javascript:void(0)">
                                    <Image
                                      alt="iPhone App Development Company"
                                      src="/img/iosappdevelopment/apple_icon.png"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    target="_blank"
                                    href="https://play.google.com/store/apps/details?id=com.logicspice.raydaar&amp;hl=en"
                                  >
                                    <Image
                                      alt="iPhone App Development Company"
                                      src="/img/iosappdevelopment/android_skicon.png"
                                    />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div class="details_of_appdesc">
                            <div class="details_of_appdesc_row">
                              <div class="details_of_appdesc_row_title">
                                SYSTEM:
                              </div>
                              <span>iOS, Android</span>
                            </div>
                            <div class="details_of_appdesc_row">
                              <div class="details_of_appdesc_row_title">
                                WE MAKE:
                              </div>
                              <span>UI/ UX design, development</span>
                            </div>
                            <div class="details_of_appdesc_row">
                              <div class="details_of_appdesc_row_title">
                                TIME TAKE:
                              </div>
                              <span>30 Days to build</span>
                            </div>
                            <div class="details_of_appdesc_row">
                              <div class="details_of_appdesc_row_title">
                                TEAM:
                              </div>
                              <span>
                                1 Project Manager, 3 Developer &amp; 1 Quality
                                Analyst
                              </span>
                            </div>
                            <div class="details_of_appdesc_row">
                              <div class="details_of_appdesc_row_title">
                                ABOUT APP:
                              </div>
                              <span>
                                Raydaar is the field extension of the Raydaar
                                software platform and connects the office and
                                field in real time to provide businesses more
                                value, transparency and efficiency in recording,
                                tracking, maintaining and transferring all
                                things assigned to employees.
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="nav--home-projects  best-heating">
                <a class="" href="javascript:void(0);">
                  Link
                </a>
                <a class="" href="javascript:void(0);">
                  Link
                </a>
                <a class="" href="javascript:void(0);">
                  Link
                </a>
                <a class="" href="javascript:void(0);">
                  Link
                </a>
                <a class="" href="javascript:void(0);">
                  Link
                </a>
                <a class="" href="javascript:void(0);">
                  Link
                </a>
              </div>
            </div>
          </div>
        </div>
        <section class="set_casestudysedc">
          <div class="container">
            <div class="row">
              <div class="set_casestudysedc_left col-md-6">
                <div class="title_of_casesetif">
                  <h2>LET OUR WORK SPEAK: CASE STUDY</h2>
                </div>
                <div class="title_of_casesetif_sm">
                  We have developed number of mobile applications for Android
                  and iPhone platform. Our softwares &amp; services have helped
                  plenty of businesses and teams get work done. We&apos;re not just
                  building applications, we&apos;re building an experience. And we
                  want that to be a meaningful and lasting one. View our
                  featured case studies to get a glimpse into the successful
                  digital experiences we create with our clients and the
                  business results we help them achieve.
                </div>
                <div class="casestudy_avards">
                  <ul>
                    <li>
                      <span>
                        <Image
                          alt="icons"
                          src="/img/iosappdevelopment/icn_1.png"
                        />
                      </span>
                    </li>
                    <li>
                      <span>
                        <Image
                          alt="icons"
                          src="/img/iosappdevelopment/icn_2.png"
                        />
                      </span>
                    </li>
                    <li>
                      <span>
                        <Image
                          alt="icons"
                          src="/img/iosappdevelopment/icn_3.png"
                        />
                      </span>
                    </li>
                    <li>
                      <span>
                        <Image
                          alt="icons"
                          src="/img/iosappdevelopment/icn_4.png"
                        />
                      </span>
                    </li>
                    <li>
                      <span>
                        <Image
                          alt="icons"
                          src="/img/iosappdevelopment/icn_5.png"
                        />
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="set_casestudysedc_right col-md-6">
                <div class="casestudy_sider">
                  <div class="owl-carousel hidedot" id="casestudy_carousel">
                    <Slider {...casestudy}>
                      <div>
                        <div class="casestudy_mobimg">
                          <Image
                            alt="app image"
                            src="/img/iosappdevelopment/Martgramcase.png"
                          />
                        </div>
                        <div class="casestudy_mobcontent">
                          <span>
                            <a
                              href="https://www.logicspice.com/case-study/martgram-app/"
                              target="_blank"
                            >
                              Martgram
                            </a>
                          </span>
                          <p>
                            Martgram app that we are scoping will serves as
                            &quot;Online Marketplace Android &amp; iPhone app&quot;...
                          </p>
                        </div>
                      </div>
                      <div>
                        <div class="casestudy_mobimg">
                          <Image
                            alt="app image"
                            src="/img/iosappdevelopment/beanocase.png"
                          />
                        </div>
                        <div class="casestudy_mobcontent">
                          <span>
                            <a
                              href="https://www.logicspice.com/case-study/beano-app/"
                              target="_blank"
                            >
                              Beano
                            </a>
                          </span>
                          <p>
                            &quot;Beano: Coffee ordering&quot; is an interactive
                            application for customers to find nearby coffee...
                          </p>
                        </div>
                      </div>
                      <div>
                        <div class="casestudy_mobimg">
                          <Image
                            alt="app image"
                            src="/img/iosappdevelopment/Social-Securitas.png"
                          />
                        </div>
                        <div class="casestudy_mobcontent">
                          <span>
                            <a
                              href="https://www.logicspice.com/case-study/social-securites/"
                              target="_blank"
                            >
                              Social Securites
                            </a>
                          </span>
                          <p>
                            Social Securites app that will scoping for &quot;Video
                            Sharing Apps (Android &amp; iPhone)&quot; that will...
                          </p>
                        </div>
                      </div>
                      <div>
                        <div class="casestudy_mobimg">
                          <Image
                            alt="app image"
                            src="/img/iosappdevelopment/MyUtrack.png"
                          />
                        </div>
                        <div class="casestudy_mobcontent">
                          <span>
                            <a
                              href="https://www.logicspice.com/case-study/utrack-app/"
                              target="_blank"
                            >
                              Utrack
                            </a>
                          </span>
                          <p>
                          &quot;Utrack&quot; app facilitates the students to live stress
                            free by consolidating student&apos;s class schedules...
                          </p>
                        </div>
                      </div>
                      <div>
                        <div class="casestudy_mobimg">
                          <Image
                            alt="app image"
                            src="/img/iosappdevelopment/bestcit.png"
                          />
                        </div>
                        <div class="casestudy_mobcontent">
                          <span>
                            <a
                              href="https://www.logicspice.com/case-study/bestcit-app/"
                              target="_blank"
                            >
                              Bestcit
                            </a>
                          </span>
                          <p>
                            &quot;Aphorism&quot; app is a hub where user can find a huge
                            quantity of aphorisms, literary quotes...
                          </p>
                        </div>
                      </div>
                    </Slider>
                  </div>
                </div>
                <div class="more_btn more_btnrevercebn">
                  <a
                    class="btn btn-primary"
                    href="https://www.logicspice.com/case-study/"
                  >
                    <span>Featured Case Studies</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section class="satisfied_clients">
        <div class="container">
          <div class="headings">
            <h2>Our Clients</h2>
            <p>We love what we do and our clients know about this</p>
          </div>
          <div class="clearfix"></div>
          <div class="" id="satisfying_clients">
            <Slider {...settings}>
              <div class="satisfied_clients_logo ">
                <Image
                  alt="client"
                  class="lazy"
                  src="/img/mobileappdevelopment/Business-Apps.png"
                />
              </div>

              <div class="satisfied_clients_logo ">
                <Image
                  alt="client"
                  class="lazy"
                  src="/img/mobileappdevelopment/mobile-Apps.png"
                />
              </div>

              <div class="satisfied_clients_logo ">
                <Image
                  alt="client"
                  class="lazy"
                  src="/img/mobileappdevelopment/BusinesS-Apps-Development.png"
                />
              </div>

              <div class="satisfied_clients_logo ">
                <Image
                  alt="client"
                  class="lazy"
                  src="/img/mobileappdevelopment/Business-Service.png"
                />
              </div>

              <div class="satisfied_clients_logo ">
                <Image
                  alt="client"
                  class="lazy"
                  src="/img/mobileappdevelopment/Business_Developers.png"
                />
              </div>

              <div class="satisfied_clients_logo ">
                <Image
                  alt="client"
                  class="lazy"
                  src="/img/mobileappdevelopment/app-development.png"
                />
              </div>

              <div class="satisfied_clients_logo ">
                <Image
                  alt="client"
                  class="lazy"
                  src="/img/mobileappdevelopment/application-developers.jpg"
                />
              </div>

              <div class="satisfied_clients_logo ">
                <Image
                  alt="client"
                  class="lazy"
                  src="/img/mobileappdevelopment/mobile-apps-logicspice.png"
                />
              </div>

              <div class="satisfied_clients_logo ">
                <Image
                  alt="client"
                  class="lazy"
                  src="/img/mobileappdevelopment/app-development-services.png"
                />
              </div>

              <div class="satisfied_clients_logo ">
                <Image
                  alt="client"
                  class="lazy"
                  src="/img/mobileappdevelopment/expert-app-developers.png"
                />
              </div>

              <div class="satisfied_clients_logo ">
                <Image
                  alt="client"
                  class="lazy"
                  src="/img/mobileappdevelopment/android-apps-development.png"
                />
              </div>

              <div class="satisfied_clients_logo ">
                <Image
                  alt="client"
                  class="lazy"
                  src="/img/mobileappdevelopment/mobile-apps-development.png"
                />
              </div>

              <div class="satisfied_clients_logo ">
                <Image
                  alt="client"
                  class="lazy"
                  src="/img/mobileappdevelopment/affordable-apps.png"
                />
              </div>

              <div class="satisfied_clients_logo ">
                <Image
                  alt="client"
                  class="lazy"
                  src="/img/mobileappdevelopment/apps-logicspice.png"
                />
              </div>
            </Slider>
          </div>
        </div>
      </section>
      <section class="industryblock">
        <div class="container">
          <div class="block-industry-new">
            <div class="row">
              <div class="industryblock_left col-md-5">
                <Image
                  alt="iPhone/ iOS app development services for industries - logicspice"
                  src="/img/iosappdevelopment/industry_lfimg.png"
                />
              </div>
              <div class="col-md-7">
                <div class="industryblock_right">
                  <div class="industryblock_right_title">
                    <h3>
                      Based on the many years of experience and highly qualified
                      development team we are able to serve nearly every
                      industry
                    </h3>
                  </div>
                  <div class="indsubcnt">
                    At Logicspice we serve various industries including Hotels,
                    Transport, School and Education, Ideas and Business Concept,
                    Health Care, Accounts and Financial Services, Commercial and
                    Residential Estate and many more. Weâ€™ve serviced over
                    1,000 customers across different countries. Our highly
                    experienced team bring each client a deep industry knowledge
                    and expert perspectives to offer them professionally
                    qualified and business centric solutions in an impressive
                    range of sectors.
                  </div>
                  <div class="viewall_ind">
                    <span>Some Industries We Serve and able to Serve</span>
                    <div class="lin_hr"></div>
                    <div class="clear"></div>
                    <div class="seall_btn">
                      <a
                        class="btn btn-primary"
                        href="https://www.logicspice.com/industries/"
                      >
                        View
                      </a>
                    </div>
                  </div>
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
