"use client";
import React, { useEffect, useState } from "react";
import Footer from "@/app/Components/Footer";
import Navbar from "@/app/Components/Navbar";
import "@/app/custom-solutions/customsolutions.css";
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
import axios from "axios";
import BaseAPI from "@/app/BaseAPI/BaseAPI";

const Page = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [modalOpen, setModalOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  var settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
  };

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
      <section id="primary" class="content-area product_all_show">
        <div id="content" class="site-content" role="main">
          <section class="why_should js-reveal new-custom-solutions">
            <div class="container-fluid">
              <h1 class="mainHeadTop" data-aos="fade-up">
                Custom Development Solution
              </h1>
              <div
                aria-label="breadcrumb"
                class="my-breadcrumb my-custom-breadcrumb"
                data-aos="fade-up"
              >
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <Link href="/">Home</Link>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    Custom Solutions
                  </li>
                </ol>
              </div>
              <div class="all_products_show" data-aos="fade-up">
                <ul id="myList" class="row">
                  <li class="col-lg-3 col-md-4 col-sm-6 col-xs-6">
                    <div class="product_show_bx_new">
                      <div class="client-chat">
                        <a href="javascript:void($zopim.livechat.window.show())">
                          <img
                            src="/img/customsolutionspage/chat.png"
                            alt="Chat"
                          />
                        </a>
                      </div>
                      <Link
                        class=""
                        href="/custom-solutions/logistics-software-development"
                      >
                        <div class="product_show_bx_in">
                          <div class="product_image_full_shon">
                            <span>
                              <img
                                src="/img/customsolutionspage/logistics-software-development-img.png"
                                alt="Custom Logistics Software"
                                class="img_prora"
                              />
                            </span>
                          </div>
                          <div class="product_show_bx_name_new">
                            <span class="prdu-book">
                              Custom Logistics Software
                            </span>
                            <div class="buttons_of_products_new more_link"></div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </li>
                  <li class="col-lg-3 col-md-4 col-sm-6 col-xs-6">
                    <div class="product_show_bx_new">
                      <div class="client-chat">
                        <a href="javascript:void($zopim.livechat.window.show())">
                          <img
                            src="/img/customsolutionspage/chat.png"
                            alt="Chat"
                          />
                        </a>
                      </div>
                      <Link
                        class=""
                        href="/custom-solutions/booking-app-development"
                      >
                        <div class="product_show_bx_in">
                          <div class="product_image_full_shon">
                            <span>
                              <img
                                src="/img/customsolutionspage/booking_app_img.png"
                                alt="Booking App"
                                class="img_prora"
                              />
                            </span>
                          </div>
                          <div class="product_show_bx_name_new">
                            <span class="prdu-book">Booking Application</span>
                            <div class="buttons_of_products_new more_link"></div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </li>
                  <li class="col-lg-3 col-md-4 col-sm-6 col-xs-6">
                    <div class="product_show_bx_new">
                      <div class="client-chat">
                        <Link href="javascript:void($zopim.livechat.window.show())">
                          <img
                            src="/img/customsolutionspage/chat.png"
                            alt="Chat"
                          />
                        </Link>
                      </div>
                      <Link
                        class=""
                        href="/custom-solutions/restaurant-table-booking-system"
                      >
                        <div class="product_show_bx_in">
                          <div class="product_image_full_shon">
                            <span>
                              <img
                                src="/img/customsolutionspage/tablke_booing_img.png"
                                alt="Table Booking System"
                                class="img_prora"
                              />
                            </span>
                          </div>
                          <div class="product_show_bx_name_new">
                            <span class="prdu-book">Table Booking System</span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </li>
                  <li class="col-lg-3 col-md-4 col-sm-6 col-xs-6">
                    <div class="product_show_bx_new">
                      <div class="client-chat">
                        <Link href="javascript:void($zopim.livechat.window.show())">
                          <img
                            src="/img/customsolutionspage/chat.png"
                            alt="Chat"
                          />
                        </Link>
                      </div>
                      <Link class="" href="/custom-solutions/seat-booking-system">
                        <div class="product_show_bx_in">
                          <div class="product_image_full_shon">
                            <span>
                              <img
                                src="/img/customsolutionspage/seat_book_img.png"
                                alt="Seat Booking System"
                                class="img_prora"
                              />
                            </span>
                          </div>
                          <div class="product_show_bx_name_new">
                            <span class="prdu-book">Seat Booking System</span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </li>
                  <li class="col-lg-3 col-md-4 col-sm-6 col-xs-6">
                    <div class="product_show_bx_new">
                      <div class="client-chat">
                        <Link href="javascript:void($zopim.livechat.window.show())">
                          <img
                            src="/img/customsolutionspage/chat.png"
                            alt="Chat"
                          />
                        </Link>
                      </div>
                      <Link
                        class=""
                        href="/custom-solutions/crm-software-development"
                      >
                        <div class="product_show_bx_in">
                          <div class="product_image_full_shon">
                            <span>
                              <img
                                src="/img/customsolutionspage/crm_solution_img.png"
                                alt="CRM Solution"
                                class="img_prora"
                              />
                            </span>
                          </div>
                          <div class="product_show_bx_name_new">
                            <span class="prdu-book">CRM Solution</span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </li>
                  <li class="col-lg-3 col-md-4 col-sm-6 col-xs-6">
                    <div class="product_show_bx_new">
                      <div class="client-chat">
                        <Link href="javascript:void($zopim.livechat.window.show())">
                          <img
                            src="/img/customsolutionspage/chat.png"
                            alt="Chat"
                          />
                        </Link>
                      </div>
                      <Link
                        class=""
                        href="/custom-solutions/ecommerce-development"
                      >
                        <div class="product_show_bx_in">
                          <div class="product_image_full_shon">
                            <span>
                              <img
                                src="/img/customsolutionspage/ecommerce_img.png"
                                alt="Ecommerce Solutions"
                                class="img_prora"
                              />
                            </span>
                          </div>
                          <div class="product_show_bx_name_new">
                            <span class="prdu-book">Ecommerce Solutions</span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </li>
                  <li class="col-lg-3 col-md-4 col-sm-6 col-xs-6">
                    <div class="product_show_bx_new">
                      <div class="client-chat">
                        <Link href="javascript:void($zopim.livechat.window.show())">
                          <img
                            src="/img/customsolutionspage/chat.png"
                            alt="Chat"
                          />
                        </Link>
                      </div>
                      <Link
                        class=""
                        href="/custom-solutions/loan-management-software-development"
                      >
                        <div class="product_show_bx_in">
                          <div class="product_image_full_shon">
                            <span>
                              <img
                                src="/img/customsolutionspage/loan_system_img.png"
                                alt="Loan System"
                                class="img_prora"
                              />
                            </span>
                          </div>
                          <div class="product_show_bx_name_new">
                            <span class="prdu-book">Loan System</span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </li>

                  <li class="col-lg-3 col-md-4 col-sm-6 col-xs-6">
                    <div class="product_show_bx_new">
                      <div class="client-chat">
                        <Link href="javascript:void($zopim.livechat.window.show())">
                          <img
                            src="/img/customsolutionspage/chat.png"
                            alt="Chat"
                          />
                        </Link>
                      </div>
                      <Link
                        class=""
                        href="/softwares/online-exam-software-solution"
                      >
                        <div class="product_show_bx_in">
                          <div class="product_image_full_shon">
                            <span>
                              <img
                                src="/img/customsolutionspage/online_test_img.png"
                                alt="Online Exam App"
                                class="img_prora"
                              />
                            </span>
                          </div>
                          <div class="product_show_bx_name_new">
                            <span class="prdu-book">Online Test App</span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </li>
                  <li class="col-lg-3 col-md-4 col-sm-6 col-xs-6">
                    <div class="product_show_bx_new">
                      <div class="client-chat">
                        <Link href="javascript:void($zopim.livechat.window.show())">
                          <img
                            src="/img/customsolutionspage/chat.png"
                            alt="Chat"
                          />
                        </Link>
                      </div>
                      <Link
                        class=""
                        href="/custom-solutions/survey-software-development"
                      >
                        <div class="product_show_bx_in">
                          <div class="product_image_full_shon">
                            <span>
                              <img
                                src="/img/customsolutionspage/survey_img.png"
                                alt="Survey Software Development"
                                class="img_prora"
                              />
                            </span>
                          </div>
                          <div class="product_show_bx_name_new">
                            <span class="prdu-book">Survey App</span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </li>

                  <li class="col-lg-3 col-md-4 col-sm-6 col-xs-6 moreBox">
                    <div class="product_show_bx_new">
                      <div class="client-chat">
                        <Link href="javascript:void($zopim.livechat.window.show())">
                          <img
                            src="/img/customsolutionspage/chat.png"
                            alt="Chat"
                          />
                        </Link>
                      </div>
                      <Link
                        class=""
                        href="/custom-solutions/dating-system-solution"
                      >
                        <div class="product_show_bx_in">
                          <div class="product_image_full_shon">
                            <span>
                              <img
                                src="/img/customsolutionspage/dating_system_img.png"
                                alt="Dating System Solution"
                                class="img_prora"
                              />
                            </span>
                          </div>
                          <div class="product_show_bx_name_new">
                            <span class="prdu-book">
                              Dating System Solution
                            </span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </li>

                  <li class="col-lg-3 col-md-4 col-sm-6 col-xs-6 moreBox">
                    <div class="product_show_bx_new">
                      <div class="client-chat">
                        <Link href="javascript:void($zopim.livechat.window.show())">
                          <img
                            src="/img/customsolutionspage/chat.png"
                            alt="Chat"
                          />
                        </Link>
                      </div>
                      <Link
                        class=""
                        href="/custom-solutions/jewellery-ecommerce-system-solution"
                      >
                        <div class="product_show_bx_in">
                          <div class="product_image_full_shon">
                            <span>
                              <img
                                src="/img/customsolutionspage/jewellery_ecommerce_img.png"
                                alt="Jewellery E-Commerce System Custom"
                                class="img_prora"
                              />
                            </span>
                          </div>
                          <div class="product_show_bx_name_new">
                            <span class="prdu-book">
                              Jewellery E-Commerce System
                            </span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </li>

                  <li class="col-lg-3 col-md-4 col-sm-6 col-xs-6 moreBox">
                    <div class="product_show_bx_new">
                      <div class="client-chat">
                        <Link href="javascript:void($zopim.livechat.window.show())">
                          <img
                            src="/img/customsolutionspage/chat.png"
                            alt="Chat"
                          />
                        </Link>
                      </div>
                      <Link class="" href="/custom-solutions/e-learning-solution">
                        <div class="product_show_bx_in">
                          <div class="product_image_full_shon">
                            <span>
                              <img
                                src="/img/customsolutionspage/e-learning_img.png"
                                alt="E-Learning App"
                                class="img_prora"
                              />
                            </span>
                          </div>
                          <div class="product_show_bx_name_new">
                            <span class="prdu-book">E-Learning System</span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </li>
                  <li class="col-lg-3 col-md-4 col-sm-6 col-xs-6 moreBox">
                    <div class="product_show_bx_new">
                      <div class="client-chat">
                        <Link href="javascript:void($zopim.livechat.window.show())">
                          <img
                            src="/img/customsolutionspage/chat.png"
                            alt="Chat"
                          />
                        </Link>
                      </div>
                      <Link
                        class=""
                        href="/custom-solutions/event-booking-system-development"
                      >
                        <div class="product_show_bx_in">
                          <div class="product_image_full_shon">
                            <span>
                              <img
                                src="/img/customsolutionspage/event_booking_img.png"
                                alt="Event Booking System"
                                class="img_prora"
                              />
                            </span>
                          </div>
                          <div class="product_show_bx_name_new">
                            <span class="prdu-book">Event Booking System</span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </li>
                  <li class="col-lg-3 col-md-4 col-sm-6 col-xs-6 moreBox">
                    <div class="product_show_bx_new">
                      <div class="client-chat">
                        <Link href="javascript:void($zopim.livechat.window.show())">
                          <img
                            src="/img/customsolutionspage/chat.png"
                            alt="Chat"
                          />
                        </Link>
                      </div>
                      <Link
                        class=""
                        href="/custom-solutions/auction-software-solution"
                      >
                        <div class="product_show_bx_in">
                          <div class="product_image_full_shon">
                            <span>
                              <img
                                src="/img/customsolutionspage/auction_img.png"
                                alt="Auction System"
                                class="img_prora"
                              />
                            </span>
                          </div>
                          <div class="product_show_bx_name_new">
                            <span class="prdu-book">Auction System</span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </li>
                  <li class="col-lg-3 col-md-4 col-sm-6 col-xs-6 moreBox">
                    <div class="product_show_bx_new">
                      <div class="client-chat">
                        <Link href="javascript:void($zopim.livechat.window.show())">
                          <img
                            src="/img/customsolutionspage/chat.png"
                            alt="Chat"
                          />
                        </Link>
                      </div>
                      <Link
                        class=""
                        href="/custom-solutions/gps-vehicle-tracking-system"
                      >
                        <div class="product_show_bx_in">
                          <div class="product_image_full_shon">
                            <span>
                              <img
                                src="/img/customsolutionspage/gps_img.png"
                                alt="GPS Vehicle Tracking System"
                                class="img_prora"
                              />
                            </span>
                          </div>
                          <div class="product_show_bx_name_new">
                            <span class="prdu-book">GPS Vehicle Tracking</span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </li>
                  <li class="col-lg-3 col-md-4 col-sm-6 col-xs-6 moreBox">
                    <div class="product_show_bx_new">
                      <div class="client-chat">
                        <Link href="javascript:void($zopim.livechat.window.show())">
                          <img
                            src="/img/customsolutionspage/chat.png"
                            alt="Chat"
                          />
                        </Link>
                      </div>
                      <Link class="" href="/custom-solutions/car-rental-software">
                        <div class="product_show_bx_in">
                          <div class="product_image_full_shon">
                            <span>
                              <img
                                src="/img/customsolutionspage/car-rental-software_img.png"
                                alt="Car Rental Software"
                                class="img_prora"
                              />
                            </span>
                          </div>
                          <div class="product_show_bx_name_new">
                            <span class="prdu-book">Car Rental Software</span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </li>
                  <li class="col-lg-3 col-md-4 col-sm-6 col-xs-6 moreBox">
                    <div class="product_show_bx_new">
                      <div class="client-chat">
                        <Link href="javascript:void($zopim.livechat.window.show())">
                          <img
                            src="/img/customsolutionspage/chat.png"
                            alt="Chat"
                          />
                        </Link>
                      </div>
                      <Link
                        class=""
                        href="/custom-solutions/delivery-management-software"
                      >
                        <div class="product_show_bx_in">
                          <div class="product_image_full_shon">
                            <span>
                              <img
                                src="/img/customsolutionspage/delivery_management_system_img.png"
                                alt="Delivery Management Software"
                                class="img_prora"
                              />
                            </span>
                          </div>
                          <div class="product_show_bx_name_new">
                            <span class="prdu-book">Delivery Management</span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </li>
                  <li class="col-lg-3 col-md-4 col-sm-6 col-xs-6 moreBox">
                    <div class="product_show_bx_new">
                      <div class="client-chat">
                        <Link href="javascript:void($zopim.livechat.window.show())">
                          <img
                            src="/img/customsolutionspage/chat.png"
                            alt="Chat"
                          />
                        </Link>
                      </div>
                      <Link
                        class=""
                        href="/custom-solutions/point-of-sale-software"
                      >
                        <div class="product_show_bx_in">
                          <div class="product_image_full_shon">
                            <span>
                              <img
                                src="/img/customsolutionspage/point_of_sale_system_img.png"
                                alt="Point Of Sale Software"
                                class="img_prora"
                              />
                            </span>
                          </div>
                          <div class="product_show_bx_name_new">
                            <span class="prdu-book">Point Of Sale System</span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </li>
                  <li class="col-lg-3 col-md-4 col-sm-6 col-xs-6 moreBox">
                    <div class="product_show_bx_new">
                      <div class="client-chat">
                        <Link href="javascript:void($zopim.livechat.window.show())">
                          <img
                            src="/img/customsolutionspage/chat.png"
                            alt="Chat"
                          />
                        </Link>
                      </div>
                      <Link
                        class=""
                        href="/custom-solutions/hotel-booking-software"
                      >
                        <div class="product_show_bx_in">
                          <div class="product_image_full_shon">
                            <span>
                              <img
                                src="/img/customsolutionspage/hotel_booking_software_img.png"
                                alt="Hotel Booking Software"
                                class="img_prora"
                              />
                            </span>
                          </div>
                          <div class="product_show_bx_name_new">
                            <span class="prdu-book">
                              Hotel Booking Software
                            </span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </li>
                  <li class="col-lg-3 col-md-4 col-sm-6 col-xs-6 moreBox">
                    <div class="product_show_bx_new">
                      <div class="client-chat">
                        <Link href="javascript:void($zopim.livechat.window.show())">
                          <img
                            src="/img/customsolutionspage/chat.png"
                            alt="Chat"
                          />
                        </Link>
                      </div>
                      <Link
                        class=""
                        href="/custom-solutions/user-management-system"
                      >
                        <div class="product_show_bx_in">
                          <div class="product_image_full_shon">
                            <span>
                              <img
                                src="/img/customsolutionspage/user_management_system_img.png"
                                alt="User Management System"
                                class="img_prora"
                              />
                            </span>
                          </div>
                          <div class="product_show_bx_name_new">
                            <span class="prdu-book">
                              User Management System
                            </span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </li>
                  <li class="col-lg-3 col-md-4 col-sm-6 col-xs-6 moreBox">
                    <div class="product_show_bx_new">
                      <div class="client-chat">
                        <Link href="javascript:void($zopim.livechat.window.show())">
                          <img
                            src="/img/customsolutionspage/chat.png"
                            alt="Chat"
                          />
                        </Link>
                      </div>
                      <Link
                        class=""
                        href="/custom-solutions/website-calculator-builder"
                      >
                        <div class="product_show_bx_in">
                          <div class="product_image_full_shon">
                            <span>
                              <img
                                src="/img/customsolutionspage/website_calculator_builder_img.png"
                                alt="Website Calculator Builder"
                                class="img_prora"
                              />
                            </span>
                          </div>
                          <div class="product_show_bx_name_new">
                            <span class="prdu-book">
                              Website Calculator Builder
                            </span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </li>
                  <li class="col-lg-3 col-md-4 col-sm-6 col-xs-6 moreBox">
                    <div class="product_show_bx_new">
                      <div class="client-chat">
                        <Link href="javascript:void($zopim.livechat.window.show())">
                          <img
                            src="/img/customsolutionspage/chat.png"
                            alt="Chat"
                          />
                        </Link>
                      </div>
                      <Link
                        class=""
                        href="/custom-solutions/erp-system-software-development"
                      >
                        <div class="product_show_bx_in">
                          <div class="product_image_full_shon">
                            <span>
                              <img
                                src="/img/customsolutionspage/erp_system_developement_img.png"
                                alt="ERP System Software "
                                class="img_prora"
                              />
                            </span>
                          </div>
                          <div class="product_show_bx_name_new">
                            <span class="prdu-book">ERP System Software </span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </li>
                  <li class="col-lg-3 col-md-4 col-sm-6 col-xs-6 moreBox">
                    <div class="product_show_bx_new">
                      <div class="client-chat">
                        <Link href="javascript:void($zopim.livechat.window.show())">
                          <img
                            src="/img/customsolutionspage/chat.png"
                            alt="Chat"
                          />
                        </Link>
                      </div>
                      <Link
                        class=""
                        href="/custom-solutions/social-network-integration-in-android-app"
                      >
                        <div class="product_show_bx_in">
                          <div class="product_image_full_shon">
                            <span>
                              <img
                                src="/img/customsolutionspage/social_integration_img.png"
                                alt="Social Network Integration"
                                class="img_prora"
                              />
                            </span>
                          </div>
                          <div class="product_show_bx_name_new">
                            <span class="prdu-book">
                              Social Network Integration
                            </span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </section>
      <section class="newbfc-section" data-aos="fade-up">
        <div class="BFC_logic">
          <h2>
            Get Custom Mobile App or Web Development Solution
            <span class="headSpan">
              Custom app development where customers can request for a product
              and we make it available for them with custom features and
              integrations as per client's requirements.{" "}
            </span>
          </h2>
          <div class="BFC_logic_bg">
            <div class="container">
              <div class="BFC_logic_bx" data-aos="fade-up">
                <div class="row">
                  <div class="col-md-3 no-padding">
                    <div class="top-box-BFC-new">
                      <div class="img-custom consult-img"></div>
                      <h3>Consult Our Experts</h3>
                      <p>
                        Discuss your idea and requirement with our team, they
                        will also add some suggestion and provide you effective
                        solution for your business.
                      </p>
                    </div>
                  </div>
                  <div class="col-md-3 no-padding">
                    <div class="top-box-BFC-new">
                      <div class="img-custom your-team-img"></div>
                      <h3>Get Your Development Team</h3>
                      <p>
                        Hire developers from our experienced team and get the
                        project done in minimum time & cost.
                      </p>
                    </div>
                  </div>
                  <div class="col-md-3 no-padding">
                    <div class="top-box-BFC-new">
                      <div class="img-custom receive-img"></div>
                      <h3>Receive Daily Insights</h3>
                      <p>
                        Our dedicated team ensures to keep you updated with your
                        project with reports and progress.
                      </p>
                    </div>
                  </div>
                  <div class="col-md-3 no-padding">
                    <div class="top-box-BFC-new">
                      <div class="img-custom installation-img"></div>
                      <h3>Installation</h3>
                      <p>
                        Once we are done with the development, we will install
                        the code free on your live server.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="BFC_logic_Demand" data-aos="fade-up">
                <div class="row">
                  <div class="col-xs-12 col-sm-3 col-md-3">
                    <div class="demand_img">
                      <img
                        src="/img/customsolutionspage/satisfied-client.png"
                        alt="#"
                      />
                    </div>
                    <div class="demand_text">
                      <h3>1286</h3>
                      <p>Satisfied Client</p>
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-3 col-md-3">
                    <div class="demand_img">
                      <img
                        src="/img/customsolutionspage/projects-img.png"
                        alt="#"
                      />
                    </div>
                    <div class="demand_text">
                      <h3>1844</h3>
                      <p>projects</p>
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-3 col-md-3">
                    <div class="demand_img">
                      <img
                        src="/img/customsolutionspage/mobile-app-img.png"
                        alt="#"
                      />
                    </div>
                    <div class="demand_text">
                      <h3>327</h3>
                      <p>mobile apps</p>
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-3 col-md-3">
                    <div class="demand_img">
                      <img
                        src="/img/customsolutionspage/likes-img.png"
                        alt="#"
                      />
                    </div>
                    <div class="demand_text">
                      <h3>1082</h3>
                      <p>likes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="new-custom-section" data-aos="fade-up">
        <div class="container">
          <div
            class="content_area content_left_bar pursue"
            style={{
              float: "left",
              width: "100%",
              paddingRight: "0",
              background: "#fff",
            }}
          >
            <div class="pro_dic_cl">
              <h3 class="pro_hd">
                Get app or web on demand development solution
              </h3>
            </div>
            <p>
              Logicspice is mobile app & web development company having years of
              experience in this industry with the team of highly skilled
              developers. Our experience for on-demand apps & solutions gives
              solution to the customer a unique insights building various
              on-demand apps & solutions for our customers.
            </p>
            <p>
              Logicspice is able to create deep insights solution and grants a
              highly professional individual approach. Our aim is to deliver
              solutions that satisfy customers’ needs much more precisely than
              any off-the-shelf product. We have already multiple on-demand
              projects.
            </p>
            <p>
              We have a team of experts with years of experience who are updated
              with latest technology. Our motive is always to deliver project
              with great user interface and no performance issue.
            </p>
            <p>
              We do the third party integration on behalf of the clients and
              communicate with them on our level. Logicspice believe in best
              work ethics and actively pursue long term support contracts for
              custom website and mobile app development.
            </p>
          </div>
        </div>
      </section>

      <section class="enq-section enq-section-custom">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-12 text-center">
              {/* <a class="btn btn-primary" @click="openReviewModel()">Enquire Now</a> */}
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
