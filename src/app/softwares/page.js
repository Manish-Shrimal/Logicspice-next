"use client";
import React, { useEffect, useState } from "react";
import Footer from "@/app/Components/Footer";
import Navbar from "@/app/Components/Navbar";
import "@/app/softwares/softwares.css";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import Image from "next/image";
import Link from "next/link";
import "@fortawesome/fontawesome-free/css/all.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Contactusmodel from "@/app/Components/Contactusmodel";
import Enquirymodal from "@/app/Components/Enquirymodal";
import "../resposive.css";
import Whylogicspice from "@/app/Components/Whylogicspice";
import Reviewmodals from "@/app/Components/Reviewmodals";
import { Modal, ModalBody } from "react-bootstrap";
// import axios from "axios";
import BaseAPI from "@/app/BaseAPI/BaseAPI";

const Page = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [modalOpen, setModalOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showMoreData, setShowMoreData] = useState(false);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const openModal = () => {
    console.log(showModal);

    setShowModal(!showModal);
  };
  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  return (
    <>
      <Navbar />
      <section class="breadcrems_header">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h1>Softwares</h1>
            </div>
            <div class="col-md-6">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <Link href="/">Home</Link>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    Softwares
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <section class="product-new-page">
        <div class="container">
          <div class="new-product-bx product_abs_and_all">
            <ul className="nav-tabs new-products-tab" role="tablist">
              <li
                id="tab1_li"
                className={activeTab === "tab1" ? "active" : ""}
                onClick={() => handleTabClick("tab1")}
              >
                <a>
                  <span>All</span>
                </a>
              </li>
              <li
                id="tab2_li"
                className={activeTab === "tab2" ? "active" : ""}
                onClick={() => handleTabClick("tab2")}
              >
                <a>
                  <span>Web</span>
                </a>
              </li>
              <li
                id="tab3_li"
                className={activeTab === "tab3" ? "active" : ""}
                onClick={() => handleTabClick("tab3")}
              >
                <a>
                  <span>Mobile</span>
                </a>
              </li>
              <li
                id="tab4_li"
                className={activeTab === "tab4" ? "active" : ""}
                onClick={() => handleTabClick("tab4")}
              >
                <a>
                  <span>Free</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="tab-content">
            {activeTab === "tab1" && (
              <div id="tab1" className="costomer_tab rj">
                <div class="new-product-box">
                  <div class="row">
                    <div class="col-sm-6 col-md-4">
                      <Link
                        href="/softwares/wordpress-ecommerce-website"
                        class="ready-product aos-init aos-animate"
                        data-aos="fade-up"
                      >
                        <Image
                          width={100}
                          height={100}
                          src="/img/softwares/wordpress-ecommerce-website-img.png"
                          alt="WordPress eCommerce Website"
                        />{" "}
                        <div class="abs-product">
                          <h3>WordPress eCommerce Website</h3>
                          <p>
                            A WordPress eCommerce website is a platform built
                            using a popular content management system (CMS),
                            Wordpress, designed for online stores.
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review">225 REVIEWS</div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <Link href="/softwares/order-management-software" class="ready-product" data-aos="fade-up">
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/order-management-product-img.png"
                          alt="Job-board"
                        />
                        <div class="abs-product">
                          <h3>Order Management Software</h3>
                          <p>
                            Our Order Management Software empowers you to take
                            control of your orders with precision. Simplify
                            order processing, reduce errors, and accelerate your
                            business operations.
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review">225 REVIEWS</div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <Link href="/softwares/job-board-software" class="ready-product" data-aos="fade-up">
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/jobboard-product-img.png"
                          alt="Job-board"
                        />
                        <div class="abs-product">
                          <h3>Job Board Software</h3>
                          <p>
                            Our job Board script enables you to get started with
                            your own job Board website like Coroflot & Monster.
                            It is a highly scalable, robust and user-friendly
                            job board script.
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review">219 REVIEWS</div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/android-new.png"
                                alt="android"
                              />
                            </li>
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/apple.png"
                                alt="apple"
                              />
                            </li>
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <Link href="/softwares/fiverr-clone" class="ready-product" data-aos="fade-up">
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/gigger-product-img.png"
                          alt="Fiverr Clone"
                        />
                        <div class="abs-product">
                          <h3>Fiverr Clone</h3>
                          <p>
                            The fiverr clone script can help you to build your
                            own freelance service marketplace where freelancers
                            can sell their services and buyers can order
                            services.
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review">569 REVIEWS</div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/android-new.png"
                                alt="android"
                              />
                            </li>
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/apple.png"
                                alt="apple"
                              />
                            </li>
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <Link href="/softwares/freelancer-clone" class="ready-product" data-aos="fade-up">
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/freelancer-product-img.png"
                          alt="Freelancer Clone"
                        />
                        <div class="abs-product">
                          <h3>Freelancer Clone</h3>
                          <p>
                            Logicspice offers freelance marketplace script,
                            developed to build your own freelance marketplace
                            similar to upwork clone, elance clone and more.
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review">128 REVIEWS</div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/android-new.png"
                                alt="android"
                              />
                            </li>
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/apple.png"
                                alt="apple"
                              />
                            </li>
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <Link href="/softwares/logicstic-marketplace-software" class="ready-product" data-aos="fade-up">
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/logisticr-product-img.png"
                          alt="Logicstic Marketplace Software"
                        />
                        <div class="abs-product">
                          <h3>Logicstic Marketplace Software</h3>
                          <p>
                            A transportation management system is an online
                            platform that help businesses to streamline their
                            shipping process.
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review">173 REVIEWS</div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/android-new.png"
                                alt="android"
                              />
                            </li>
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/apple.png"
                                alt="apple"
                              />
                            </li>
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <Link href="/softwares/crowdfunding-script" class="ready-product" data-aos="fade-up">
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/crowdfunding-product-img.png"
                          alt="Crowdfunding Script"
                        />
                        <div class="abs-product">
                          <h3>Crowdfunding Script</h3>
                          <p>
                            The crowdfunding product that we have developed will
                            enable the people to donate money for various
                            categories of causes that they may have favor for.
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review">47 REVIEWS</div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <Link href="/softwares/classified-ads-script" class="ready-product" data-aos="fade-up">
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/classified-product-img.png"
                          alt="Classified Ads Script"
                        />
                        <div class="abs-product">
                          <h3>Classified Ads Script</h3>
                          <p>
                            The crowdfunding product that we have developed will
                            enable the people to donate money for various
                            categories of causes that they may have favor for.
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review">24 REVIEWS</div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/android-new.png"
                                alt="android"
                              />
                            </li>
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/apple.png"
                                alt="apple"
                              />
                            </li>
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <Link href="/softwares/inventory-management-software" class="ready-product" data-aos="fade-up">
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/inventory-management-img.png"
                          alt="LS Inventorizerr"
                        />
                        <div class="abs-product">
                          <h3>LS Inventorizerr</h3>
                          <p>
                            Experience comprehensive end-to-end supply chain
                            visibility and control with our web based inventory
                            management system. From the moment you initiate a
                            purchase order to the final customer sale.
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review">70 REVIEWS</div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <Link href="/softwares/marketplace-software-solution" class="ready-product" data-aos="fade-up">
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/marketplace-software-img.png"
                          alt="Marketplace Software"
                        />
                        <div class="abs-product">
                          <h3>Marketplace Software</h3>
                          <p>
                            Please check our readymade service marketplace
                            softwares for the sectors like freelance, logistics,
                            rental, scheduling, home cleaning and appointment
                            booking service.
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review">560 REVIEWS</div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <Link href="/softwares/groupon-clone" class="ready-product" data-aos="fade-up">
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/groupon-product-img.png"
                          alt="Groupon Clone Script"
                        />
                        <div class="abs-product">
                          <h3>Groupon Clone Script</h3>
                          <p>
                            Groupon clone Script helps you to avail a daily deal
                            software for listing deals. Launch your own online
                            coupon software with our Readymade Groupon clone
                            app.
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review">27 REVIEWS</div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/android-new.png"
                                alt="android"
                              />
                            </li>
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/apple.png"
                                alt="apple"
                              />
                            </li>
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <Link href="/softwares/service-marketplace-script" class="ready-product" data-aos="fade-up">
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/servicemarket-product-img.png"
                          alt="Service Marketplace"
                        />
                        <div class="abs-product">
                          <h3>Service Marketplace</h3>
                          <p>
                            Our thumbtack clone will facilitate customer to
                            search for service providers that are offering the
                            service by entering their location and selecting the
                            type
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review">49 REVIEWS</div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/android-new.png"
                                alt="android"
                              />
                            </li>
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/apple.png"
                                alt="apple"
                              />
                            </li>
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <Link href="/softwares/udemy-clone" class="ready-product" data-aos="fade-up">
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/udemy-img.png"
                          alt="Udemy Clone Script"
                        />
                        <div class="abs-product">
                          <h3>Udemy Clone Script</h3>
                          <p>
                            Are you looking to launch your own online video
                            learning platform? Get on to our ready to use udemy
                            clone script to start your own e-learning portal
                            like udemy. This script allows an user to add and
                            manage courses with their sections and lectures.
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review">13 REVIEWS</div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/android-new.png"
                                alt="android"
                              />
                            </li>
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/apple.png"
                                alt="apple"
                              />
                            </li>
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <Link href="/softwares/equipment-rental-software" class="ready-product" data-aos="fade-up">
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/equipment-product-img.png"
                          alt="Equipment Rental Script"
                        />
                        <div class="abs-product">
                          <h3>Equipment Rental Software</h3>
                          <p>
                            Our online Equipment Rental script will facilitate
                            users to rent and sell their
                            equipments/machines/Linkuto parts over the
                            app/website.
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review">38 REVIEWS</div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <Link href="/softwares/online-exam-software-solution" class="ready-product" data-aos="fade-up">
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/online-exam-img.png"
                          alt="Online Exam Software Script"
                        />
                        <div class="abs-product">
                          <h3>Online Exam Software Script</h3>
                          <p>
                            The online exam software Script can help you to
                            develop your own online exam system, to conduct any
                            type of online examination, test, practice and more.
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review">26 REVIEWS</div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <Link href="/softwares/job-portal-script" class="ready-product" data-aos="fade-up">
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/jo-portel-img.png"
                          alt="Job-Portal"
                        />
                        <div class="abs-product">
                          <h3>Job Portal Script</h3>
                          <p>
                            Our job portal script enables you to get started
                            with your own job portal website like Coroflot &
                            Monster. It is a highly scalable, robust and
                            user-friendly job board script.
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review">218 REVIEWS</div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/android-new.png"
                                alt="android"
                              />
                            </li>
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/apple.png"
                                alt="apple"
                              />
                            </li>
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <Link href="/softwares/business-directory-system" class="ready-product" data-aos="fade-up">
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/business-directory-img.png"
                          alt="PHP Business Directory Script"
                        />
                        <div class="abs-product">
                          <h3>PHP Business Directory Script</h3>
                          <p>
                            Yellow pages script is stand alone PHP business
                            directory script with a numerous features to build
                            your own online business directory site.
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review">26 REVIEWS</div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/android-new.png"
                                alt="android"
                              />
                            </li>
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/apple.png"
                                alt="apple"
                              />
                            </li>
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <Link href="/softwares/grocery-app-development" class="ready-product" data-aos="fade-up">
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/grocery-app-img.png"
                          alt="Grocery PHP Script"
                        />
                        <div class="abs-product">
                          <h3>Grocery PHP Script</h3>
                          <p>
                            If you are planning to sell grocery online, our
                            online grocery software is the best available choice
                            in the market.
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review">26 REVIEWS</div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/android-new.png"
                                alt="android"
                              />
                            </li>
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/apple.png"
                                alt="apple"
                              />
                            </li>
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <Link href="/softwares/recruitment-management-software" class="ready-product" data-aos="fade-up">
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/recruitment-product-img.png"
                          alt="Recruitment Management Software"
                        />
                        <div class="abs-product">
                          <h3>Recruitment Management Software</h3>
                          <p>
                            An online recruitment management system tends to
                            make the HR&apos;s job faster, more precise and
                            proficient.
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review">44 REVIEWS</div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <Link href="/softwares/event-booking-software" class="ready-product" data-aos="fade-up">
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/event-booking-img.png"
                          alt="Event Booking Software"
                        />
                        <div class="abs-product">
                          <h3>Event Booking Software</h3>
                          <p>
                            Our Online Event Booking system helps your customer
                            to reserve seats for meetings and conferences to
                            social events, weddings, parties, movies, bus tours
                            etc.This software provides functionality to track
                            all details of booked seats.
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review">217 REVIEWS</div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <Link href="/softwares/whatsapp-clone" class="ready-product" data-aos="fade-up">
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/whatsapp-product-img.png"
                          alt="whatsApp-clone"
                        />
                        <div class="abs-product">
                          <h3>Whatsapp Clone</h3>
                          <p>
                            Get on to our ready to use WhatsApp clone app and
                            make your messenger similar to WhatsApp. This script
                            works on the web, android and iOS platforms and
                            helps users to stay connected with their friends,
                            colleagues and relatives by sharing messages,
                            photos, videos and files.
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review">24 REVIEWS</div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/android-new.png"
                                alt="android"
                              />
                            </li>
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/apple.png"
                                alt="apple"
                              />
                            </li>
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <Link href="/softwares/chat-room-script" class="ready-product" data-aos="fade-up">
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/chat-room-img.png"
                          alt="Chat Room Script"
                        />
                        <div class="abs-product">
                          <h3>Chat Room Script</h3>
                          <p>
                            Get on to our ready to use Chat Room Script . This
                            script works on the web, android and iOS platforms
                            and helps users to stay connected with their
                            friends, colleagues and relatives by sharing
                            messages, photos, videos and files.
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review">92 REVIEWS</div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/android-new.png"
                                alt="android"
                              />
                            </li>
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/apple.png"
                                alt="apple"
                              />
                            </li>
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <Link href="/softwares/food-ordering-script" class="ready-product" data-aos="fade-up">
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/foododer-product-img.png"
                          alt="food-ordering"
                        />
                        <div class="abs-product">
                          <h3>Food Ordering Script</h3>
                          <p>
                            The food ordering script that we have developed will
                            serve as an attractive medium for customers to order
                            food from the restaurants.
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review">32 REVIEWS</div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/android-new.png"
                                alt="android"
                              />
                            </li>
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/apple.png"
                                alt="apple"
                              />
                            </li>
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <Link href="/softwares/appointment-scheduling-software" class="ready-product" data-aos="fade-up">
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/appointment-img.png"
                          alt="Appointment Booking System"
                        />
                        <div class="abs-product">
                          <h3>Appointment Booking System</h3>
                          <p>
                            A user-friendly appointment booking system that
                            enables owners to manage their appointments online
                            from remote locations.
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review">28 REVIEWS</div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <Link href="/softwares/real-estate-script" class="ready-product" data-aos="fade-up">
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/real-product-img.png"
                          alt="Real Estate Script"
                        />
                        <div class="abs-product">
                          <h3>Real Estate Script</h3>
                          <p>
                            Are you looking to make your own real estate CRM
                            software? Get on to our ready to use real estate
                            clone script to make your own online real estate
                            classified website.
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review">13 REVIEWS</div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <Link href="/softwares/rental-property-management-software" class="ready-product" data-aos="fade-up">
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/rental-property-img.png"
                          alt="Property Rental Script"
                        />
                        <div class="abs-product">
                          <h3>Property Rental Script</h3>
                          <p>
                            This property rental script will facilitate people
                            to search for apartments to rent them and view their
                            details along with the amenities so people can opt
                            out property
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review">30 REVIEWS</div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <Link href="/softwares/news-management-system" class="ready-product" data-aos="fade-up">
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/news-management-img.png"
                          alt="News Management System"
                        />
                        <div class="abs-product">
                          <h3>News Management System</h3>
                          <p>
                            Digital media is playing a major role in authentic
                            flow of information and the news, to the masses and
                            this news portal management script can play a major
                            role for your corporate, political or any other kind
                            of news showcasing.
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review">18 REVIEWS</div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <Link href="/softwares/ebay-clone" class="ready-product" data-aos="fade-up">
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/ebay-img.png"
                          alt="eBay Clone"
                        />
                        <div class="abs-product">
                          <h3>eBay Clone</h3>
                          <p>
                            eBay - A multi vendor eCommerce script, specially
                            designed for multi vendor eCommerce platform. The
                            application comprises various pleasing features
                            which are extremely customer friendly and
                            functional.
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review">15 REVIEWS</div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <Link href="/softwares/teacher-marketplace" class="ready-product" data-aos="fade-up">
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/teacher-marketplace-img.png"
                          alt="Teacher Marketplace"
                        />
                        <div class="abs-product">
                          <h3>Teacher Marketplace Software</h3>
                          <p>
                            Get your online teacher marketplace that facilitates
                            students to find their best suitable teachers.
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review">14 REVIEWS</div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <Link href="/softwares/linkedin-clone" class="ready-product" data-aos="fade-up">
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/linkedin--img.png"
                          alt="LinkedIn Clone"
                        />
                        <div class="abs-product">
                          <h3>LinkedIn Clone</h3>
                          <p>
                            This LinkedIn Clone software script can help you to
                            launch your own business networking website like
                            LinkedIn. It will allow users to connect with
                            millions of professionals around the globe.
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review">27 REVIEWS</div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <Link href="/softwares/forum-script" class="ready-product" data-aos="fade-up">
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/forum-script-img.png"
                          alt="PHP Forum Script"
                        />
                        <div class="abs-product">
                          <h3>PHP Forum Script</h3>
                          <p>
                            Want to develop your online discussion forum to
                            enable your audience to interact with each other?
                            Get our ready to use forum script to make your help
                            forum in no time.
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review">17 REVIEWS</div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <Link
                        href="https://taxi-booking-app.logicspice.com/"
                        class="ready-product"
                        data-aos="fade-up"
                      >
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/texi-booking-img.png"
                          alt="Taxi Booking App"
                        />
                        <div class="abs-product">
                          <h3>Taxi Booking App</h3>
                          <p>
                            Our solution for online taxi booking is completely
                            based on real and genuine need of this billion
                            dollar industry.
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review">17 REVIEWS</div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/android-new.png"
                                alt="android"
                              />
                            </li>
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/apple.png"
                                alt="apple"
                              />
                            </li>
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <Link href="/softwares/product-review-rating-php-script" class="ready-product" data-aos="fade-up">
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/product--review-img.png"
                          alt="Product Review & Rating PHP Script"
                        />
                        <div class="abs-product">
                          <h3>Product Review & Rating PHP Script</h3>
                          <p>
                            The PHP Review Script can help in improving quality
                            of your products and services, by getting genuine
                            feedback from customers, which inturn will increase
                            credibility and brand awareness, and will ultimately
                            increase your market.
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review">23 REVIEWS</div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <Link href="https://setcourses.logicspice.com" class="ready-product" data-aos="fade-up">
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/online-course-img.png"
                          alt="Online Course Management Script"
                        />
                        <div class="abs-product">
                          <h3>Online Course Management Script</h3>
                          <p>
                            This Online Course Management Script that we have
                            developed will serve as an attractive medium for
                            students to search for courses online and view
                            detailed information about them.
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review">10 REVIEWS</div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </div>

                    <div class="col-sm-6 col-md-4">
                      <Link
                        href="https://free-templates.logicspice.com/"
                        class="ready-product"
                        data-aos="fade-up"
                      >
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/free-template-img.png"
                          alt="Free Template"
                        />
                        <div class="abs-product">
                          <h3>Free Template</h3>
                          <p>
                            Download best free web templates, edit them in any
                            HTML editor, customize it according to your
                            requirement.
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review">20 REVIEWS</div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <Link
                        href="/softwares/lead-generation-contact-form-php-script"
                        class="ready-product ready-product-min2"
                        data-aos="fade-up"
                      >
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/lead-generation-img.png"
                          alt="Lead Generation Form Script"
                        />
                        <div class="abs-product">
                          <h3>Lead Generation Form Script</h3>
                          <p>
                            This is the excellent way to customise your contact
                            form with custom form fields like texts fields.
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review"></div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <Link
                        href="/softwares/blog-script"
                        class="ready-product ready-product-min2"
                        data-aos="fade-up"
                      >
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/blog-script-img.png"
                          alt="Blog Script"
                        />
                        <div class="abs-product">
                          <h3>Blog Script</h3>
                          <p>
                            We provide collection of commercial and free PHP
                            Blog Scripts.
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review">18 REVIEWS</div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <Link
                        href="/softwares/faq-script"
                        class="ready-product ready-product-min2"
                        data-aos="fade-up"
                      >
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/faq-script.png"
                          alt="FAQ Script"
                        />
                        <div class="abs-product">
                          <h3>FAQ Script</h3>
                          <p>
                            FAQ Script is a knowledge base script and you could
                            use it as a Frequently Asked Questions section on
                            your website.
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review"></div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <Link
                        href="/softwares/cakephp-cms-script"
                        class="ready-product ready-product-min2"
                        data-aos="fade-up"
                      >
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/cakephp-cms-img.png"
                          alt="Cake PHP CMS Script"
                        />
                        <div class="abs-product">
                          <h3>Cake PHP CMS Script</h3>
                          <p>
                            Get a smart content management system to create and
                            manage multiple web sections and embed them into
                            your website.
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review"></div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <Link
                        href="/softwares/cake-php-facebook-login-plugin-script"
                        class="ready-product ready-product-min2"
                        data-aos="fade-up"
                      >
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/cakephp-facebook-img.png"
                          alt="Cake PHP Facebook Login Plugin Script"
                        />
                        <div class="abs-product">
                          <h3>Cake PHP Facebook Login Plugin Script</h3>
                          <p>
                            Nowadays users are not interested in filling a big
                            form to registration. Short registration process
                            helps to get more subscribers for your website.
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review"></div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <Link
                        href="/softwares/wordpress-twitter-login-plugin"
                        class="ready-product ready-product-min2"
                        data-aos="fade-up"
                      >
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/wordpress-twitter-img.png"
                          alt="Wordpress Twitter Login Plugin"
                        />
                        <div class="abs-product">
                          <h3>Wordpress Twitter Login Plugin</h3>
                          <p>
                            Twitter is one of the most popular social network on
                            the internet and millions of users are registered
                            with twitter.
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review"></div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <Link
                        href="/softwares/social-network-integration-in-android-app"
                        class="ready-product ready-product-min"
                        data-aos="fade-up"
                      >
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/social-network-img.png"
                          alt="Social Integration Android"
                        />
                        <div class="abs-product">
                          <h3>Social Integration Android</h3>
                          <p>
                            What if you have one social network integrated into
                            your android app, but you need to add one more
                            social network for your application?
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review"></div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <div
                        class="thumbnail customized-website"
                        data-aos="fade-up"
                      >
                        <Image
                          width={100}
                          height={100}
                          src="/img/softwares/customized_website.png"
                          alt="Customized Website"
                          class="img_prora"
                        />
                        <div class="caption">
                          <div class="caption-bx">
                            <h3>
                              <Link href="">
                                Are you looking for clones of other websites and
                                Apps?
                              </Link>
                            </h3>
                            <div
                              className="btn btn-primary"
                              onClick={openModal}
                            >
                              <button>Enquire Now</button>
                              {
                                <Enquirymodal
                                  modalStatus={showModal}
                                  toggle={openModal}
                                  title="Customised Website"
                                />
                              }
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeTab === "tab2" && (
              <div id="tab2" className="costomer_tab rj">
                <div class="new-product-box">
                  <div class="row">
                    <div class="col-sm-6 col-md-4">
                      <Link
                        href="/softwares/wordpress-ecommerce-website"
                        class="ready-product aos-init aos-animate"
                        data-aos="fade-up"
                      >
                        <Image
                          width={100}
                          height={100}
                          src="/img/softwares/wordpress-ecommerce-website-img.png"
                          alt="WordPress eCommerce Website"
                        />{" "}
                        <div class="abs-product">
                          <h3>WordPress eCommerce Website</h3>
                          <p>
                            A WordPress eCommerce website is a platform built
                            using a popular content management system (CMS),
                            Wordpress, designed for online stores.
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review">225 REVIEWS</div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <a href="" class="ready-product" data-aos="fade-up">
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/order-management-product-img.png"
                          alt="Job-board"
                        />
                        <div class="abs-product">
                          <h3>Order Management Software</h3>
                          <p>
                            Our Order Management Software empowers you to take
                            control of your orders with precision. Simplify
                            order processing, reduce errors, and accelerate your
                            business operations.
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review">225 REVIEWS</div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </a>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <a href="" class="ready-product" data-aos="fade-up">
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/jobboard-product-img.png"
                          alt="Job-board"
                        />
                        <div class="abs-product">
                          <h3>Job Board Software</h3>
                          <p>
                            Our job Board script enables you to get started with
                            your own job Board website like Coroflot & Monster.
                            It is a highly scalable, robust and user-friendly
                            job board script.
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review">219 REVIEWS</div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/android-new.png"
                                alt="android"
                              />
                            </li>
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/apple.png"
                                alt="apple"
                              />
                            </li>
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </a>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <a href="" class="ready-product" data-aos="fade-up">
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/gigger-product-img.png"
                          alt="Fiverr Clone"
                        />
                        <div class="abs-product">
                          <h3>Fiverr Clone</h3>
                          <p>
                            The fiverr clone script can help you to build your
                            own freelance service marketplace where freelancers
                            can sell their services and buyers can order
                            services.
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review">569 REVIEWS</div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/android-new.png"
                                alt="android"
                              />
                            </li>
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/apple.png"
                                alt="apple"
                              />
                            </li>
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </a>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <a href="" class="ready-product" data-aos="fade-up">
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/freelancer-product-img.png"
                          alt="Freelancer Clone"
                        />
                        <div class="abs-product">
                          <h3>Freelancer Clone</h3>
                          <p>
                            Logicspice offers freelance marketplace script,
                            developed to build your own freelance marketplace
                            similar to upwork clone, elance clone and more.
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review">128 REVIEWS</div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/android-new.png"
                                alt="android"
                              />
                            </li>
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/apple.png"
                                alt="apple"
                              />
                            </li>
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </a>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <a href="" class="ready-product" data-aos="fade-up">
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/logisticr-product-img.png"
                          alt="Logicstic Marketplace Software"
                        />
                        <div class="abs-product">
                          <h3>Logicstic Marketplace Software</h3>
                          <p>
                            A transportation management system is an online
                            platform that help businesses to streamline their
                            shipping process.
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review">173 REVIEWS</div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/android-new.png"
                                alt="android"
                              />
                            </li>
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/apple.png"
                                alt="apple"
                              />
                            </li>
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </a>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <a href="" class="ready-product" data-aos="fade-up">
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/crowdfunding-product-img.png"
                          alt="Crowdfunding Script"
                        />
                        <div class="abs-product">
                          <h3>Crowdfunding Script</h3>
                          <p>
                            The crowdfunding product that we have developed will
                            enable the people to donate money for various
                            categories of causes that they may have favor for.
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review">47 REVIEWS</div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </a>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <a href="" class="ready-product" data-aos="fade-up">
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/classified-product-img.png"
                          alt="Classified Ads Script"
                        />
                        <div class="abs-product">
                          <h3>Classified Ads Script</h3>
                          <p>
                            The crowdfunding product that we have developed will
                            enable the people to donate money for various
                            categories of causes that they may have favor for.
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review">24 REVIEWS</div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/android-new.png"
                                alt="android"
                              />
                            </li>
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/apple.png"
                                alt="apple"
                              />
                            </li>
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </a>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <a href="" class="ready-product" data-aos="fade-up">
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/inventory-management-img.png"
                          alt="LS Inventorizerr"
                        />
                        <div class="abs-product">
                          <h3>LS Inventorizerr</h3>
                          <p>
                            Experience comprehensive end-to-end supply chain
                            visibility and control with our web based inventory
                            management system. From the moment you initiate a
                            purchase order to the final customer sale.
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review">70 REVIEWS</div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </a>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <a href="" class="ready-product" data-aos="fade-up">
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/marketplace-software-img.png"
                          alt="Marketplace Software"
                        />
                        <div class="abs-product">
                          <h3>Marketplace Software</h3>
                          <p>
                            Please check our readymade service marketplace
                            softwares for the sectors like freelance, logistics,
                            rental, scheduling, home cleaning and appointment
                            booking service.
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review">560 REVIEWS</div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </a>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <a href="" class="ready-product" data-aos="fade-up">
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/groupon-product-img.png"
                          alt="Groupon Clone Script"
                        />
                        <div class="abs-product">
                          <h3>Groupon Clone Script</h3>
                          <p>
                            Groupon clone Script helps you to avail a daily deal
                            software for listing deals. Launch your own online
                            coupon software with our Readymade Groupon clone
                            app.
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review">27 REVIEWS</div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/android-new.png"
                                alt="android"
                              />
                            </li>
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/apple.png"
                                alt="apple"
                              />
                            </li>
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </a>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <a href="" class="ready-product" data-aos="fade-up">
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/servicemarket-product-img.png"
                          alt="Service Marketplace"
                        />
                        <div class="abs-product">
                          <h3>Service Marketplace</h3>
                          <p>
                            Our thumbtack clone will facilitate customer to
                            search for service providers that are offering the
                            service by entering their location and selecting the
                            type
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review">49 REVIEWS</div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/android-new.png"
                                alt="android"
                              />
                            </li>
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/apple.png"
                                alt="apple"
                              />
                            </li>
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </a>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <a href="" class="ready-product" data-aos="fade-up">
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/udemy-img.png"
                          alt="Udemy Clone Script"
                        />
                        <div class="abs-product">
                          <h3>Udemy Clone Script</h3>
                          <p>
                            Are you looking to launch your own online video
                            learning platform? Get on to our ready to use udemy
                            clone script to start your own e-learning portal
                            like udemy. This script allows an user to add and
                            manage courses with their sections and lectures.
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review">13 REVIEWS</div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/android-new.png"
                                alt="android"
                              />
                            </li>
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/apple.png"
                                alt="apple"
                              />
                            </li>
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </a>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <a href="" class="ready-product" data-aos="fade-up">
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/equipment-product-img.png"
                          alt="Equipment Rental Script"
                        />
                        <div class="abs-product">
                          <h3>Equipment Rental Software</h3>
                          <p>
                            Our online Equipment Rental script will facilitate
                            users to rent and sell their
                            equipments/machines/auto parts over the app/website.
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review">38 REVIEWS</div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </a>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <a href="" class="ready-product" data-aos="fade-up">
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/online-exam-img.png"
                          alt="Online Exam Software Script"
                        />
                        <div class="abs-product">
                          <h3>Online Exam Software Script</h3>
                          <p>
                            The online exam software Script can help you to
                            develop your own online exam system, to conduct any
                            type of online examination, test, practice and more.
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review">26 REVIEWS</div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </a>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <a href="" class="ready-product" data-aos="fade-up">
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/jo-portel-img.png"
                          alt="Job-Portal"
                        />
                        <div class="abs-product">
                          <h3>Job Portal Script</h3>
                          <p>
                            Our job portal script enables you to get started
                            with your own job portal website like Coroflot &
                            Monster. It is a highly scalable, robust and
                            user-friendly job board script.
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review">218 REVIEWS</div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/android-new.png"
                                alt="android"
                              />
                            </li>
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/apple.png"
                                alt="apple"
                              />
                            </li>
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </a>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <a href="" class="ready-product" data-aos="fade-up">
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/business-directory-img.png"
                          alt="PHP Business Directory Script"
                        />
                        <div class="abs-product">
                          <h3>PHP Business Directory Script</h3>
                          <p>
                            Yellow pages script is stand alone PHP business
                            directory script with a numerous features to build
                            your own online business directory site.
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review">26 REVIEWS</div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/android-new.png"
                                alt="android"
                              />
                            </li>
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/apple.png"
                                alt="apple"
                              />
                            </li>
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </a>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <a href="" class="ready-product" data-aos="fade-up">
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/grocery-app-img.png"
                          alt="Grocery PHP Script"
                        />
                        <div class="abs-product">
                          <h3>Grocery PHP Script</h3>
                          <p>
                            If you are planning to sell grocery online, our
                            online grocery software is the best available choice
                            in the market.
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review">26 REVIEWS</div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/android-new.png"
                                alt="android"
                              />
                            </li>
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/apple.png"
                                alt="apple"
                              />
                            </li>
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </a>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <a href="" class="ready-product" data-aos="fade-up">
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/recruitment-product-img.png"
                          alt="Recruitment Management Software"
                        />
                        <div class="abs-product">
                          <h3>Recruitment Management Software</h3>
                          <p>
                            An online recruitment management system tends to
                            make the HR&apos;s job faster, more precise and
                            proficient.
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review">44 REVIEWS</div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </a>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <a href="" class="ready-product" data-aos="fade-up">
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/event-booking-img.png"
                          alt="Event Booking Software"
                        />
                        <div class="abs-product">
                          <h3>Event Booking Software</h3>
                          <p>
                            Our Online Event Booking system helps your customer
                            to reserve seats for meetings and conferences to
                            social events, weddings, parties, movies, bus tours
                            etc.This software provides functionality to track
                            all details of booked seats.
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review">217 REVIEWS</div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </a>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <a href="" class="ready-product" data-aos="fade-up">
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/whatsapp-product-img.png"
                          alt="whatsApp-clone"
                        />
                        <div class="abs-product">
                          <h3>Whatsapp Clone</h3>
                          <p>
                            Get on to our ready to use WhatsApp clone app and
                            make your messenger similar to WhatsApp. This script
                            works on the web, android and iOS platforms and
                            helps users to stay connected with their friends,
                            colleagues and relatives by sharing messages,
                            photos, videos and files.
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review">24 REVIEWS</div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/android-new.png"
                                alt="android"
                              />
                            </li>
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/apple.png"
                                alt="apple"
                              />
                            </li>
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </a>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <a href="" class="ready-product" data-aos="fade-up">
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/chat-room-img.png"
                          alt="Chat Room Script"
                        />
                        <div class="abs-product">
                          <h3>Chat Room Script</h3>
                          <p>
                            Get on to our ready to use Chat Room Script . This
                            script works on the web, android and iOS platforms
                            and helps users to stay connected with their
                            friends, colleagues and relatives by sharing
                            messages, photos, videos and files.
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review">92 REVIEWS</div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/android-new.png"
                                alt="android"
                              />
                            </li>
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/apple.png"
                                alt="apple"
                              />
                            </li>
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </a>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <a href="" class="ready-product" data-aos="fade-up">
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/foododer-product-img.png"
                          alt="food-ordering"
                        />
                        <div class="abs-product">
                          <h3>Food Ordering Script</h3>
                          <p>
                            The food ordering script that we have developed will
                            serve as an attractive medium for customers to order
                            food from the restaurants.
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review">32 REVIEWS</div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="./assets/img/softwares/android-new.png"
                                alt="android"
                              />
                            </li>
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="./assets/img/softwares/apple.png"
                                alt="apple"
                              />
                            </li>
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="./assets/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </a>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <a href="" class="ready-product" data-aos="fade-up">
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/appointment-img.png"
                          alt="Appointment Booking System"
                        />
                        <div class="abs-product">
                          <h3>Appointment Booking System</h3>
                          <p>
                            A user-friendly appointment booking system that
                            enables owners to manage their appointments online
                            from remote locations.
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review">28 REVIEWS</div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </a>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <a href="" class="ready-product" data-aos="fade-up">
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/real-product-img.png"
                          alt="Real Estate Script"
                        />
                        <div class="abs-product">
                          <h3>Real Estate Script</h3>
                          <p>
                            Are you looking to make your own real estate CRM
                            software? Get on to our ready to use real estate
                            clone script to make your own online real estate
                            classified website.
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review">13 REVIEWS</div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </a>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <a href="" class="ready-product" data-aos="fade-up">
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/rental-property-img.png"
                          alt="Property Rental Script"
                        />
                        <div class="abs-product">
                          <h3>Property Rental Script</h3>
                          <p>
                            This property rental script will facilitate people
                            to search for apartments to rent them and view their
                            details along with the amenities so people can opt
                            out property
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review">30 REVIEWS</div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </a>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <a href="" class="ready-product" data-aos="fade-up">
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/news-management-img.png"
                          alt="News Management System"
                        />
                        <div class="abs-product">
                          <h3>News Management System</h3>
                          <p>
                            Digital media is playing a major role in authentic
                            flow of information and the news, to the masses and
                            this news portal management script can play a major
                            role for your corporate, political or any other kind
                            of news showcasing.
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review">18 REVIEWS</div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </a>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <a href="" class="ready-product" data-aos="fade-up">
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/ebay-img.png"
                          alt="eBay Clone"
                        />
                        <div class="abs-product">
                          <h3>eBay Clone</h3>
                          <p>
                            eBay - A multi vendor eCommerce script, specially
                            designed for multi vendor eCommerce platform. The
                            application comprises various pleasing features
                            which are extremely customer friendly and
                            functional.
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review">15 REVIEWS</div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </a>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <a href="" class="ready-product" data-aos="fade-up">
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/teacher-marketplace-img.png"
                          alt="Teacher Marketplace"
                        />
                        <div class="abs-product">
                          <h3>Teacher Marketplace Software</h3>
                          <p>
                            Get your online teacher marketplace that facilitates
                            students to find their best suitable teachers.
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review">14 REVIEWS</div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </a>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <a href="" class="ready-product" data-aos="fade-up">
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/linkedin--img.png"
                          alt="LinkedIn Clone"
                        />
                        <div class="abs-product">
                          <h3>LinkedIn Clone</h3>
                          <p>
                            This LinkedIn Clone software script can help you to
                            launch your own business networking website like
                            LinkedIn. It will allow users to connect with
                            millions of professionals around the globe.
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review">27 REVIEWS</div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </a>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <a href="" class="ready-product" data-aos="fade-up">
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/forum-script-img.png"
                          alt="PHP Forum Script"
                        />
                        <div class="abs-product">
                          <h3>PHP Forum Script</h3>
                          <p>
                            Want to develop your online discussion forum to
                            enable your audience to interact with each other?
                            Get our ready to use forum script to make your help
                            forum in no time.
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review">17 REVIEWS</div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </a>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <a
                        href="https://taxi-booking-app.logicspice.com/"
                        class="ready-product"
                        data-aos="fade-up"
                      >
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/texi-booking-img.png"
                          alt="Taxi Booking App"
                        />
                        <div class="abs-product">
                          <h3>Taxi Booking App</h3>
                          <p>
                            Our solution for online taxi booking is completely
                            based on real and genuine need of this billion
                            dollar industry.
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review">17 REVIEWS</div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/android-new.png"
                                alt="android"
                              />
                            </li>
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/apple.png"
                                alt="apple"
                              />
                            </li>
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </a>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <a href="" class="ready-product" data-aos="fade-up">
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/product--review-img.png"
                          alt="Product Review & Rating PHP Script"
                        />
                        <div class="abs-product">
                          <h3>Product Review & Rating PHP Script</h3>
                          <p>
                            The PHP Review Script can help in improving quality
                            of your products and services, by getting genuine
                            feedback from customers, which inturn will increase
                            credibility and brand awareness, and will ultimately
                            increase your market.
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review">23 REVIEWS</div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </a>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <a
                        href="https://setcourses.logicspice.com/"
                        class="ready-product"
                        data-aos="fade-up"
                      >
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/online-course-img.png"
                          alt="Online Course Management Script"
                        />
                        <div class="abs-product">
                          <h3>Online Course Management Script</h3>
                          <p>
                            This Online Course Management Script that we have
                            developed will serve as an attractive medium for
                            students to search for courses online and view
                            detailed information about them.
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review">10 REVIEWS</div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </a>
                    </div>

                    <div class="col-sm-6 col-md-4">
                      <a
                        href="https://free-templates.logicspice.com/"
                        class="ready-product"
                        data-aos="fade-up"
                      >
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="./assets/img/softwares/free-template-img.png"
                          alt="Free Template"
                        />
                        <div class="abs-product">
                          <h3>Free Template</h3>
                          <p>
                            Download best free web templates, edit them in any
                            HTML editor, customize it according to your
                            requirement.
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review">20 REVIEWS</div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </a>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <a
                        href=""
                        class="ready-product ready-product-min2"
                        data-aos="fade-up"
                      >
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/lead-generation-img.png"
                          alt="Lead Generation Form Script"
                        />
                        <div class="abs-product">
                          <h3>Lead Generation Form Script</h3>
                          <p>
                            This is the excellent way to customise your contact
                            form with custom form fields like texts fields.
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review"></div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </a>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <a
                        href=""
                        class="ready-product ready-product-min2"
                        data-aos="fade-up"
                      >
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/blog-script-img.png"
                          alt="Blog Script"
                        />
                        <div class="abs-product">
                          <h3>Blog Script</h3>
                          <p>
                            We provide collection of commercial and free PHP
                            Blog Scripts.
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review">18 REVIEWS</div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </a>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <a
                        href=""
                        class="ready-product ready-product-min2"
                        data-aos="fade-up"
                      >
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/faq-script.png"
                          alt="FAQ Script"
                        />
                        <div class="abs-product">
                          <h3>FAQ Script</h3>
                          <p>
                            FAQ Script is a knowledge base script and you could
                            use it as a Frequently Asked Questions section on
                            your website.
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review"></div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </a>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <a
                        href=""
                        class="ready-product ready-product-min2"
                        data-aos="fade-up"
                      >
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/cakephp-cms-img.png"
                          alt="Cake PHP CMS Script"
                        />
                        <div class="abs-product">
                          <h3>Cake PHP CMS Script</h3>
                          <p>
                            Get a smart content management system to create and
                            manage multiple web sections and embed them into
                            your website.
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review"></div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </a>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <a
                        href=""
                        class="ready-product ready-product-min2"
                        data-aos="fade-up"
                      >
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/cakephp-facebook-img.png"
                          alt="Cake PHP Facebook Login Plugin Script"
                        />
                        <div class="abs-product">
                          <h3>Cake PHP Facebook Login Plugin Script</h3>
                          <p>
                            Nowadays users are not interested in filling a big
                            form to registration. Short registration process
                            helps to get more subscribers for your website.
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review"></div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </a>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <a
                        href=""
                        class="ready-product ready-product-min2"
                        data-aos="fade-up"
                      >
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/wordpress-twitter-img.png"
                          alt="Wordpress Twitter Login Plugin"
                        />
                        <div class="abs-product">
                          <h3>Wordpress Twitter Login Plugin</h3>
                          <p>
                            Twitter is one of the most popular social network on
                            the internet and millions of users are registered
                            with twitter.
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review"></div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </a>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <a
                        href=""
                        class="ready-product ready-product-min"
                        data-aos="fade-up"
                      >
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/social-network-img.png"
                          alt="Social Integration Android"
                        />
                        <div class="abs-product">
                          <h3>Social Integration Android</h3>
                          <p>
                            What if you have one social network integrated into
                            your android app, but you need to add one more
                            social network for your application?
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review"></div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </a>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <div
                        class="thumbnail customized-website"
                        data-aos="fade-up"
                      >
                        <Image
                          width={100}
                          height={100}
                          src="/img/softwares/customized_website.png"
                          alt="Customized Website"
                          class="img_prora"
                        />
                        <div class="caption">
                          <div class="caption-bx">
                            <h3>
                              <a href="#">
                                Are you looking for clones of other websites and
                                Apps?
                              </a>
                            </h3>
                            <div
                              className="btn btn-primary"
                              onClick={openModal}
                            >
                              <button>Enquire Now</button>
                              {
                                <Enquirymodal
                                  modalStatus={showModal}
                                  toggle={openModal}
                                  title="Customised Website"
                                />
                              }
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeTab === "tab3" && (
              <div id="tab3" className="costomer_tab rj">
                <div class="new-product-box">
                  <div class="row">
                    <div class="col-sm-6 col-md-4">
                      <a
                        href="job-board-software"
                        class="ready-product"
                        data-aos="fade-up"
                      >
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/jobboard-product-img.png"
                          alt="Job-board"
                        />
                        <div class="abs-product">
                          <h3>Job Board Software</h3>
                          <p>
                            Our job Board script enables you to get started with
                            your own job Board website like Coroflot & Monster.
                            It is a highly scalable, robust and user-friendly
                            job board script.
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review">219 REVIEWS</div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/android-new.png"
                                alt="android"
                              />
                            </li>
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/apple.png"
                                alt="apple"
                              />
                            </li>
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </a>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <a
                        href="fiverr-clone"
                        class="ready-product"
                        data-aos="fade-up"
                      >
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/gigger-product-img.png"
                          alt="Fiverr Clone"
                        />
                        <div class="abs-product">
                          <h3>Fiverr Clone</h3>
                          <p>
                            The fiverr clone script can help you to build your
                            own freelance service marketplace where freelancers
                            can sell their services and buyers can order
                            services.
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review">569 REVIEWS</div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/android-new.png"
                                alt="android"
                              />
                            </li>
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/apple.png"
                                alt="apple"
                              />
                            </li>
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </a>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <a
                        href="freelancer-clone"
                        class="ready-product"
                        data-aos="fade-up"
                      >
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/freelancer-product-img.png"
                          alt="Freelancer Clone"
                        />
                        <div class="abs-product">
                          <h3>Freelancer Clone</h3>
                          <p>
                            Logicspice offers freelance marketplace script,
                            developed to build your own freelance marketplace
                            similar to upwork clone, elance clone and more.
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review">128 REVIEWS</div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/android-new.png"
                                alt="android"
                              />
                            </li>
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/apple.png"
                                alt="apple"
                              />
                            </li>
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </a>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <a
                        href="logistic-marketplace-software"
                        class="ready-product"
                        data-aos="fade-up"
                      >
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/logisticr-product-img.png"
                          alt="Logicstic Marketplace Software"
                        />
                        <div class="abs-product">
                          <h3>Logicstic Marketplace Software</h3>
                          <p>
                            A transportation management system is an online
                            platform that help businesses to streamline their
                            shipping process.
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review">173 REVIEWS</div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/android-new.png"
                                alt="android"
                              />
                            </li>
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/apple.png"
                                alt="apple"
                              />
                            </li>
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </a>
                    </div>

                    <div class="col-sm-6 col-md-4">
                      <a
                        href="classified-ads-script"
                        class="ready-product"
                        data-aos="fade-up"
                      >
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/classified-product-img.png"
                          alt="Classified Ads Script"
                        />
                        <div class="abs-product">
                          <h3>Classified Ads Script</h3>
                          <p>
                            The crowdfunding product that we have developed will
                            enable the people to donate money for various
                            categories of causes that they may have favor for.
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review">24 REVIEWS</div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/android-new.png"
                                alt="android"
                              />
                            </li>
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/apple.png"
                                alt="apple"
                              />
                            </li>
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </a>
                    </div>

                    <div class="col-sm-6 col-md-4">
                      <a
                        href="groupon-clone"
                        class="ready-product"
                        data-aos="fade-up"
                      >
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/groupon-product-img.png"
                          alt="Groupon Clone Script"
                        />
                        <div class="abs-product">
                          <h3>Groupon Clone Script</h3>
                          <p>
                            Groupon clone Script helps you to avail a daily deal
                            software for listing deals. Launch your own online
                            coupon software with our Readymade Groupon clone
                            app.
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review">27 REVIEWS</div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/android-new.png"
                                alt="android"
                              />
                            </li>
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/apple.png"
                                alt="apple"
                              />
                            </li>
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </a>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <a
                        href="service-marketplace-script"
                        class="ready-product"
                        data-aos="fade-up"
                      >
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/servicemarket-product-img.png"
                          alt="Service Marketplace"
                        />
                        <div class="abs-product">
                          <h3>Service Marketplace</h3>
                          <p>
                            Our thumbtack clone will facilitate customer to
                            search for service providers that are offering the
                            service by entering their location and selecting the
                            type
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review">49 REVIEWS</div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/android-new.png"
                                alt="android"
                              />
                            </li>
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/apple.png"
                                alt="apple"
                              />
                            </li>
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </a>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <a
                        href="udemy-clone"
                        class="ready-product"
                        data-aos="fade-up"
                      >
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/udemy-img.png"
                          alt="Udemy Clone Script"
                        />
                        <div class="abs-product">
                          <h3>Udemy Clone Script</h3>
                          <p>
                            Are you looking to launch your own online video
                            learning platform? Get on to our ready to use udemy
                            clone script to start your own e-learning portal
                            like udemy. This script allows an user to add and
                            manage courses with their sections and lectures.
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review">13 REVIEWS</div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/android-new.png"
                                alt="android"
                              />
                            </li>
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/apple.png"
                                alt="apple"
                              />
                            </li>
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </a>
                    </div>

                    <div class="col-sm-6 col-md-4">
                      <a
                        href="job-portal-script"
                        class="ready-product"
                        data-aos="fade-up"
                      >
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/jo-portel-img.png"
                          alt="Job-Portal"
                        />
                        <div class="abs-product">
                          <h3>Job Portal Script</h3>
                          <p>
                            Our job portal script enables you to get started
                            with your own job portal website like Coroflot &
                            Monster. It is a highly scalable, robust and
                            user-friendly job board script.
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review">218 REVIEWS</div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/android-new.png"
                                alt="android"
                              />
                            </li>
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/apple.png"
                                alt="apple"
                              />
                            </li>
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </a>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <a
                        href="business-directory-system"
                        class="ready-product"
                        data-aos="fade-up"
                      >
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/business-directory-img.png"
                          alt="PHP Business Directory Script"
                        />
                        <div class="abs-product">
                          <h3>PHP Business Directory Script</h3>
                          <p>
                            Yellow pages script is stand alone PHP business
                            directory script with a numerous features to build
                            your own online business directory site.
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review">26 REVIEWS</div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/android-new.png"
                                alt="android"
                              />
                            </li>
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/apple.png"
                                alt="apple"
                              />
                            </li>
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </a>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <a
                        href="grocery-app-development"
                        class="ready-product"
                        data-aos="fade-up"
                      >
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/grocery-app-img.png"
                          alt="Grocery PHP Script"
                        />
                        <div class="abs-product">
                          <h3>Grocery PHP Script</h3>
                          <p>
                            If you are planning to sell grocery online, our
                            online grocery software is the best available choice
                            in the market.
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review">26 REVIEWS</div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/android-new.png"
                                alt="android"
                              />
                            </li>
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/apple.png"
                                alt="apple"
                              />
                            </li>
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </a>
                    </div>

                    <div class="col-sm-6 col-md-4">
                      <a href="" class="ready-product" data-aos="fade-up">
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/whatsapp-product-img.png"
                          alt="whatsApp-clone"
                        />
                        <div class="abs-product">
                          <h3>Whatsapp Clone</h3>
                          <p>
                            Get on to our ready to use WhatsApp clone app and
                            make your messenger similar to WhatsApp. This script
                            works on the web, android and iOS platforms and
                            helps users to stay connected with their friends,
                            colleagues and relatives by sharing messages,
                            photos, videos and files.
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review">24 REVIEWS</div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/android-new.png"
                                alt="android"
                              />
                            </li>
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/apple.png"
                                alt="apple"
                              />
                            </li>
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </a>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <a href="" class="ready-product" data-aos="fade-up">
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/chat-room-img.png"
                          alt="Chat Room Script"
                        />
                        <div class="abs-product">
                          <h3>Chat Room Script</h3>
                          <p>
                            Get on to our ready to use Chat Room Script . This
                            script works on the web, android and iOS platforms
                            and helps users to stay connected with their
                            friends, colleagues and relatives by sharing
                            messages, photos, videos and files.
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review">92 REVIEWS</div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/android-new.png"
                                alt="android"
                              />
                            </li>
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/apple.png"
                                alt="apple"
                              />
                            </li>
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </a>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <a
                        href="food-ordering-script"
                        class="ready-product"
                        data-aos="fade-up"
                      >
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/foododer-product-img.png"
                          alt="food-ordering"
                        />
                        <div class="abs-product">
                          <h3>Food Ordering Script</h3>
                          <p>
                            The food ordering script that we have developed will
                            serve as an attractive medium for customers to order
                            food from the restaurants.
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review">32 REVIEWS</div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/android-new.png"
                                alt="android"
                              />
                            </li>
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/apple.png"
                                alt="apple"
                              />
                            </li>
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </a>
                    </div>

                    <div class="col-sm-6 col-md-4">
                      <a
                        href="https://taxi-booking-app.logicspice.com/"
                        class="ready-product"
                        data-aos="fade-up"
                      >
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/texi-booking-img.png"
                          alt="Taxi Booking App"
                        />
                        <div class="abs-product">
                          <h3>Taxi Booking App</h3>
                          <p>
                            Our solution for online taxi booking is completely
                            based on real and genuine need of this billion
                            dollar industry.
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review">17 REVIEWS</div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/android-new.png"
                                alt="android"
                              />
                            </li>
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/apple.png"
                                alt="apple"
                              />
                            </li>
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </a>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <div
                        class="thumbnail customized-website"
                        data-aos="fade-up"
                      >
                        <Image
                          width={100}
                          height={100}
                          src="/img/softwares/customized_website.png"
                          alt="Customized Website"
                          class="img_prora"
                        />
                        <div class="caption">
                          <div class="caption-bx">
                            <h3>
                              <a href="#">
                                Are you looking for clones of other websites and
                                Apps?
                              </a>
                            </h3>
                            <div
                              className="btn btn-primary"
                              onClick={openModal}
                            >
                              <button>Enquire Now</button>
                              {
                                <Enquirymodal
                                  modalStatus={showModal}
                                  toggle={openModal}
                                  title="Customised Website"
                                />
                              }
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeTab === "tab4" && (
              <div id="tab4" className="costomer_tab rj">
                <div class="new-product-box">
                  <div class="row">
                    <div class="col-sm-6 col-md-4">
                      <a
                        href="https://free-templates.logicspice.com/"
                        class="ready-product ready-product-min2"
                        data-aos="fade-up"
                      >
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/free-template-img.png"
                          alt="Free Template"
                        />
                        <div class="abs-product">
                          <h3>Free Template</h3>
                          <p>
                            Download best free web templates, edit them in any
                            HTML editor, customize it according to your
                            requirement.
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review">20 REVIEWS</div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </a>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <a
                        href="lead-generation-contact-form-php-script"
                        class="ready-product ready-product-min2"
                        data-aos="fade-up"
                      >
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/lead-generation-img.png"
                          alt="Lead Generation Form Script"
                        />
                        <div class="abs-product">
                          <h3>Lead Generation Form Script</h3>
                          <p>
                            This is the excellent way to customise your contact
                            form with custom form fields like texts fields.
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review"></div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </a>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <a
                        href="blog-script"
                        class="ready-product ready-product-min2"
                        data-aos="fade-up"
                      >
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/blog-script-img.png"
                          alt="Blog Script"
                        />
                        <div class="abs-product">
                          <h3>Blog Script</h3>
                          <p>
                            We provide collection of commercial and free PHP
                            Blog Scripts.
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review">18 REVIEWS</div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </a>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <a
                        href="faq-script"
                        class="ready-product ready-product-min2"
                        data-aos="fade-up"
                      >
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/faq-script.png"
                          alt="FAQ Script"
                        />
                        <div class="abs-product">
                          <h3>FAQ Script</h3>
                          <p>
                            FAQ Script is a knowledge base script and you could
                            use it as a Frequently Asked Questions section on
                            your website.
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review"></div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </a>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <a
                        href="cakephp-cms-script"
                        class="ready-product ready-product-min2"
                        data-aos="fade-up"
                      >
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/cakephp-cms-img.png"
                          alt="Cake PHP CMS Script"
                        />
                        <div class="abs-product">
                          <h3>Cake PHP CMS Script</h3>
                          <p>
                            Get a smart content management system to create and
                            manage multiple web sections and embed them into
                            your website.
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review"></div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </a>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <a
                        href="cakephp-facebook-login-plugin-script"
                        class="ready-product ready-product-min2"
                        data-aos="fade-up"
                      >
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/cakephp-facebook-img.png"
                          alt="Cake PHP Facebook Login Plugin Script"
                        />
                        <div class="abs-product">
                          <h3>Cake PHP Facebook Login Plugin Script</h3>
                          <p>
                            Nowadays users are not interested in filling a big
                            form to registration. Short registration process
                            helps to get more subscribers for your website.
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review"></div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </a>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <a
                        href="wordpress-twitter-login-plugin"
                        class="ready-product ready-product-min2"
                        data-aos="fade-up"
                      >
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/wordpress-twitter-img.png"
                          alt="Wordpress Twitter Login Plugin"
                        />
                        <div class="abs-product">
                          <h3>Wordpress Twitter Login Plugin</h3>
                          <p>
                            Twitter is one of the most popular social network on
                            the internet and millions of users are registered
                            with twitter.
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review"></div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </a>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <a
                        href="social-network-integration-in-android-app"
                        class="ready-product ready-product-min"
                        data-aos="fade-up"
                      >
                        <Image
                          width={100}
                          height={100}
                          class=""
                          src="/img/softwares/social-network-img.png"
                          alt="Social Integration Android"
                        />
                        <div class="abs-product">
                          <h3>Social Integration Android</h3>
                          <p>
                            What if you have one social network integrated into
                            your android app, but you need to add one more
                            social network for your application?
                          </p>
                          <div class="product-star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div class="product-review"></div>
                          <ul class="make-style">
                            <li>
                              <Image
                                width={100}
                                height={100}
                                class=""
                                src="/img/softwares/web_new.png"
                                alt="web"
                              />
                            </li>
                          </ul>
                        </div>
                      </a>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <div
                        class="thumbnail customized-website"
                        data-aos="fade-up"
                      >
                        <Image
                          width={500}
                          height={100 / (100 / 100)}
                          src="/img/softwares/customized_website.png"
                          alt="Customized Website"
                          class="img_prora"
                        />
                        <div class="caption">
                          <div class="caption-bx">
                            <h3>
                              <a href="#">
                                Are you looking for clones of other websites and
                                Apps?
                              </a>
                            </h3>
                            <div
                              className="btn btn-primary"
                              onClick={openModal}
                            >
                              <button>Enquire Now</button>
                              {
                                <Enquirymodal
                                  modalStatus={showModal}
                                  toggle={openModal}
                                  title="Customised Website"
                                />
                              }
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section id="primary" class="content-area product_all_show">
        <div id="content" class="site-content" role="main">
          <section class="why_should js-reveal">
            <div class="container">
              <div
                class="content_area content_left_bar pursue"
                style={{ width: "100%", paddingRight: "0", background: "#fff" }}
              >
                <div class="pro_dic_cl">
                  <h3 class="pro_hd">
                    Get Ready To Install Readymade Product Scripts
                  </h3>
                </div>
                <p>
                  Logicspice is a trusted name in web and mobile application
                  development having offices in different continent around the
                  globe, with big team size, long experience in the industry and
                  with highly experienced and skillful team members and proven
                  records of successful software development projects.
                </p>
                <p>
                  The best part we offer, for small and medium size businesses,
                  is that we have ready-made turnkey solutions includes Product
                  Scripts, Clone Scripts and App Scripts available with us,
                  which could be customized and configured as per the specific
                  requirements over the basic application, and our focus always
                  persist on achieving the objective of our customers, in most
                  efficient and user friendly manner.
                </p>
                <p>
                  Website and Mobile app development involve many steps for high
                  level strategy, analysis, planning, design, accurate
                  programming, testing and uploading over server. Throughout
                  this complete process we remain clear and transparent with our
                  clients without any misleading promises.
                </p>
                <p>
                  As a company that has a dedicated long term web and mobile app
                  development team, we document all processes well and maintain
                  high standard in explaining and defining them, so that the
                  clarity remain in the communication and the application
                  programming plan could be easily managed or extended or
                  upgraded in the future.
                  {!showMoreData && (
                    <a
                      style={{ cursor: "pointer", color: "#31aae1" }}
                      id="show_data"
                      onClick={() => setShowMoreData(true)}
                    >
                      More...
                    </a>
                  )}
                </p>
                {showMoreData === true && (
                  <span id="hidendata" data-aos="fade-up">
                    <p>
                      
                      Our testing team ensure our programmed applications are
                      bug free and confirms to the latest web and mobile app
                      development standards in addition to rapid development,
                      increased usability and easy to use screen interfaces.
                    </p>
                    <p>
                      LogicSpice believe in best work ethics and actively pursue
                      long term support contracts for website and mobile app
                      development. We do not compromise on quality for any size
                      of project we undertake. All the softwares we offer
                      include a lot benefits to our clients, which you can
                      explore over the specific software product page and you
                      can also check the demonstration provided therein.
                    </p>
                    <h3>
                      We offer a number of Ready Made Product Scripts, Clone
                      Scripts and App Scripts to help you advance business with
                      quality apps and website. Our main softwares includes:
                    </h3>
                    <ul class="webvevtwo">
                      <li>Food Ordering</li>
                      <li>Online Learning Platform Script</li>
                      <li>Crowd Funding</li>
                      <li>Job Portal</li>
                      <li>FAQ Script</li>
                      <li>CakePHP Facebook Login Plugin</li>
                      <li>AngularJS Blog Script</li>
                      <li>Wordpress Twitter Login Plugin</li>
                      <li>CakePHP CMS Script</li>
                      <li>Lead Generation Form</li>
                      <li>Restaurant Food Delivery Script</li>
                    </ul>
                  </span>
                )}
              </div>
            </div>
          </section>
        </div>
      </section>
      <section class="client-say">
        <div class="container">
          <div class="headings">
            <h2>WHAT OUR CLIENTS SAY</h2>
          </div>
          <div class="row">
            <div class="col-md-6">
              <iframe
                class="embed-responsive-item"
                src="https://www.youtube.com/embed/DwZRqMYOmZo?rel=0"
                allowfullscreen=""
                height="300"
                width="100%"
                frameborder="0"
              ></iframe>
            </div>
            <div class="col-md-6">
              <p>
                Logicspice offers <span>Cost Effective</span> Solution and the
                <span>quality</span> of their work is very good. Logicspice has
                very
                <span>good reviews</span> and 100&apos;s of different project of
                different areas and work with detailed feedback about our
                request with very
                <span>standardized process.</span>
              </p>
              <p>
                Very friendly environment and i highly recommend logicspice for
                Android & iPhone app development...
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="testing-statred-section" data-aos="fade-up">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-12">
              <h2>Let&apos;s Get Started! -</h2>
              <a onClick={toggleModal} class="btn btn-primary">
                Get a Free Quote
              </a>
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
            <Image
              width={100}
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
