"use client";
import Footer from "@/app/Components/Footer";
import React, { useState } from "react";
import Navbar from "@/app/Components/Navbar";
import "@/app/softwares/softwares.css";
import Image from "next/image";
import Link from "next/link";
import "@fortawesome/fontawesome-free/css/all.css";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import Contactusmodel from "@/app/Components/Contactusmodel";
import Enquirymodal from "@/app/Components/Enquirymodal";
import "../../resposive.css";
import Whylogicspice from "@/app/Components/Whylogicspice";
import Reviewmodals from "@/app/Components/Reviewmodals";
import { Modal, ModalBody } from "react-bootstrap";

const page = () => {
  const [activeTab, setActiveTab] = useState("tab2");
  const [sellerTab, setSellerTab] = useState(true);
  const [buyerTab, setBuyerTab] = useState(false);
  const [adminTab, setAdminTab] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [showInfo, setShowInfo] = useState(false);



  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };
  const openModal = () => {
    console.log(showModal);

    setShowModal(!showModal);
  };
  const openReviewModel = () => {
    setShowReviewModal(!showReviewModal);
  };
  const handleSellerTab = () => {
    setSellerTab(true);
    setBuyerTab(false);
    setAdminTab(false);
  };
  const handleBuyerTab = () => {
    setSellerTab(false);
    setBuyerTab(true);
    setAdminTab(false);
  };
  const handleAdminTab = () => {
    setSellerTab(false);
    setBuyerTab(false);
    setAdminTab(true);
  };
  return (
    <>
      <Navbar />
      <section class="paid-pro job-portal-banner fiverr-new-banner job-portal-bg NewJobSiteDesign JobBoardNewDesign MarketplaceSoftwareBanner">
        <div class="container">
          <div class="row">
            <div class="col-sm-7 col-md-7">
              <h1>Marketplace Software</h1>
              <div class="both-left-p-sec">
                <h2>Crafting Online Marketplace Software Solutions</h2>
              </div>
              <div class="job-valu">
                <div class="portal-price NewPriceDesign">
                  <h4>
                    $45 USD<small>/mo</small>{" "}
                  </h4>
                  <div class="OfferPriceProduct">
                    <strike class="srik_cls">$175 USD</strike>
                    <span class="MoreInfo">
                      <i>
                        <img
                          src="https://www.logicspice.com/app/webroot/img/images/more-info.png"
                          alt=""
                        />
                      </i>
                      <p>Limited Period Offer for First Year</p>
                    </span>
                    <span class="AppPrice" style={{ display: "none" }}>
                      <a
                        class="text-primary js-anchor-link"
                        href="#subscriptionmodel"
                      >
                        More Details
                      </a>
                    </span>
                  </div>
                </div>
                <div class="portal-price" style={{ display: "none" }}>
                  <strike class="srik_cls">
                    ₹0<span class="sml_labl"> INR</span>
                  </strike>
                  <h4>
                    ₹0<span class="sml_labl"> INR</span>
                  </h4>
                </div>
                <div class="job-valu-btn">
                  <span>Fill your basic details and</span>
             
                  <div className="btn btn-get" onClick={openModal}>
                    <button>Enquire Now</button>
                    {
                      <Enquirymodal
                        modalStatus={showModal}
                        toggle={openModal}
                        title="Please fill the form below and get access to the live demo of Marketplace Software.
See how it work yourself!"
                      />
                    }
                  </div>
                </div>
              </div>
              <div class="jocpp">
                <div class="portel-btnbx">
                  <div class="line-border NewLineBoader">
                    <img
                      src="https://www.logicspice.com/app/webroot/img/images/product_new/stars.png"
                      alt=""
                      class="lazy"
                    />
                    <p>560 Reviews</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-5 col-md-5">
              <div class="por-mobile-new">
                <img
                  class=""
                  src="https://www.logicspice.com/app/webroot/img/images/product_new/marketplace-banner-img.png"
                  alt="Marketplace Software"
                />
              </div>
            </div>
          </div>
          <div class="job-portal-banner-link">
            <div aria-label="breadcrumb" class="my-breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="https://www.logicspice.com">Home</a>
                </li>
                <li class="breadcrumb-item">
                  <a href="https://www.logicspice.com/softwares">Softwares</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  Marketplace Software Solutions
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section class="job-section-top-new JobBoardSectionNew">
        <div class="container">
          <p>
            Please check our readymade service marketplace softwares for the
            sectors like freelance, logistics, rental, scheduling, home cleaning
            and appointment booking service. Click Here to get a demo of the
            specific marketplace as per your requirement.
          </p>
        </div>
      </section>
      <section
        class="client-say MarketplaceSoftwareClient"
        style={{ backgroundColor: "#fff;" }}
      >
        <div class="container">
          <div class="service-market-ttd MarketplaceSoftwareFeatures">
            <ul>
              <li class="FirstMarketplace">Smart Search Filters</li>
              <li>Innovative Rich Data Dashboard</li>
              <li>Messaging Feature</li>
              <li>One-time Software License</li>
              <li class="FirstMarketplace">Admin Dashboard</li>
              <li>Fully Responsive Web Design</li>
              <li>White labeled Software</li>
              <li>Payment Gateway Integration</li>
              <li class="FirstMarketplace">Review-Rating Feature</li>
              <li>Transactions History</li>
            </ul>
          </div>
        </div>
      </section>
      <section class="job_portal_area">
        <div class="container">
          <div class="job_or_title">
            <h2 class="taxt_tt_job">Marketplace Software Solutions Features</h2>
          </div>
          <div class="tatxt_txt_job MarketplaceTxtJob">
            <p>
              Our best marketplace software solutions are designed to
              revolutionize a wide range of industries. From freelance
              professionals seeking opportunities to logistics companies
              streamlining operations, and from homeowners in need of cleaning
              services to businesses managing scheduling and appointments, our
              platform caters to them all.
            </p>
            <p>
              With the power of our on-demand B2B marketplace software, we
              enable seamless transactions, efficient service delivery, and
              enhanced connectivity. Whether you're a freelance professional
              looking for gigs, a rental service provider seeking customers, a
              logistics company optimizing routes, a homeowner in need of
              reliable cleaning, or a business handling appointments and
              scheduling, our platform serves as a comprehensive solution.
            </p>
          </div>
          <div class="tab_bbx_job MarketplaceSoftwareBBx">
            <div class="tab_bbx_top_job">
              <ul className="">
                <li
                  id="tab1_li"
                  className={`jobseeker_app_job ddlj ${
                    sellerTab ? "active" : ""
                  }`}
                  onClick={() => handleSellerTab()}
                >
                  <a>Customer Panel</a>
                </li>
                <li
                  id="tab2_li"
                  className={`emplyer_app_job ddlj  ${
                    buyerTab ? "active" : ""
                  }`}
                  onClick={() => handleBuyerTab()}
                >
                  <a>Vendor Panel</a>
                </li>
                <li
                  id="tab3_li"
                  className={`admin_app_job ddlj  ${adminTab ? "active" : ""}`}
                  onClick={() => handleAdminTab()}
                >
                  <a>Admin Panel</a>
                </li>
              </ul>
            </div>
            <div class="tab_contant">
              {sellerTab && (
                <>
                  <div class="costomer_tab rj" id="tab1">
                    <div class="row">
                      <div class="col-lg-12 col-md-12">
                        <div class="costomer_tab_left costomer_tab_leftright">
                          <ul>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/ragister-icon.png"
                                />
                              </i>
                              <span>
                                Registration and Profile Management
                                <div class="product-idea">
                                  <p>
                                    Effortlessly create and personalize user
                                    accounts with robust registration and
                                    profile management tools.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/manage_alert.png"
                                />
                              </i>
                              <span>
                                Browse product/Services
                                <div class="product-idea">
                                  <p>
                                    Discover products and services effortlessly
                                    with streamlined browsing.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/manage_profile.png"
                                />
                              </i>
                              <span>
                                Refine Search
                                <div class="product-idea">
                                  <p>
                                    Fine-Tune Your Search for Precision and
                                    Relevance.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/save_fav.png"
                                />
                              </i>
                              <span>
                                Account Security and Privacy
                                <div class="product-idea">
                                  <p>
                                    Protect account and data with robust
                                    security measures while maintaining privacy
                                    controls.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/apply_job.png"
                                />
                              </i>
                              <span>
                                Post Reviews & Ratings
                                <div class="product-idea">
                                  <p>
                                    Contribute with feedback by posting reviews
                                    and ratings.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/search_job.png"
                                />
                              </i>
                              <span>
                                View Notifications
                                <div class="product-idea">
                                  <p>
                                    Stay updated and informed with your
                                    notifications.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/applied_job.png"
                                />
                              </i>
                              <span>
                                Payment Transaction History
                                <div class="product-idea">
                                  <p>
                                    Access payment transaction history with
                                    ease.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/share_job.png"
                                />
                              </i>
                              <span>
                                Manage Order/Shipment
                                <div class="product-idea">
                                  <p>
                                    Effortlessly manage orders and shipments as
                                    a customer.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/manage_edu.png"
                                />
                              </i>
                              <span>
                                Shipment/Order Tracking
                                <div class="product-idea">
                                  <p>
                                    Track orders and shipments effortlessly.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/manage_exp.png"
                                />
                              </i>
                              <span>
                                Filters and Sorting
                                <div class="product-idea">
                                  <p>
                                    Enhance search precision with intuitive
                                    filters and sorting options.
                                  </p>
                                </div>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
              {buyerTab && (
                <>
                  <div class="costomer_tab rj active" id="tab2">
                    <div class="row">
                      <div class="col-lg-12 col-md-12">
                        <div class="costomer_tab_left">
                          <ul>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/manage-availability-icon.png"
                                />
                              </i>
                              <span>
                                Manage Availability
                                <div class="product-idea">
                                  <p>
                                    Take charge of the availability with easy
                                    schedule management.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/manage-services-icon.png"
                                />
                              </i>
                              <span>
                                Manage Services
                                <div class="product-idea">
                                  <p>
                                    Easily manage the services with efficiency
                                    and control.
                                  </p>
                                </div>
                              </span>
                            </li>

                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/manage-outstanding-icon.png"
                                />
                              </i>
                              <span>
                                Manage Outstanding Bookings
                                <div class="product-idea">
                                  <p>
                                    Efficiently manage outstanding bookings for
                                    a streamlined process.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/accept-requests-icon.png"
                                />
                              </i>
                              <span>
                                Accept/Reject Requests
                                <div class="product-idea">
                                  <p>
                                    Easily accept or reject requests for a
                                    seamless process.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/manage-requests-icon.png"
                                />
                              </i>
                              <span>
                                Manage Requests
                                <div class="product-idea">
                                  <p>
                                    Efficiently Manage Requests: Simplify Your
                                    Workflow.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/manage-event-icon.png"
                                />
                              </i>
                              <span>
                                Manage Events
                                <div class="product-idea">
                                  <p>
                                    Effortlessly Organize Events: Streamline
                                    Your Planning.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/view-booking-icon.png"
                                />
                              </i>
                              <span>
                                View Bookings
                                <div class="product-idea">
                                  <p>
                                    Easily access and view your bookings for a
                                    hassle-free experience.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/view-review-icon.png"
                                />
                              </i>
                              <span>
                                View Reviews & Ratings
                                <div class="product-idea">
                                  <p>
                                    Get valuable insights from reviews and
                                    ratings to make informed decisions.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/preview-public-icon.png"
                                />
                              </i>
                              <span>
                                Preview Public Mode
                                <div class="product-idea">
                                  <p>
                                    Take a Look at the Profile in Public Mode.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/social-media-icon.png"
                                />
                              </i>
                              <span>
                                Social Media Sharing
                                <div class="product-idea">
                                  <p>
                                    Expand Your Reach by Sharing on Social
                                    Media.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/promotions-discounts-icon.png"
                                />
                              </i>
                              <span>
                                Promotions and Discounts
                                <div class="product-idea">
                                  <p>
                                    Enhance your service provider presence by
                                    sharing on social media.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/notification-icon.png"
                                />
                              </i>
                              <span>
                                Notifications
                                <div class="product-idea">
                                  <p>
                                    As a service provider, easily manage your
                                    notifications.
                                  </p>
                                </div>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
              {adminTab && (
                <>
                  <div class="costomer_tab rj" id="tab3">
                    <div class="row">
                      {/* <div class="col-lg-4 col-md-3 ">
                            <div class="costomer_tab_right costomer_tab_rightleft2">
                                <img src="/img/product-img//crowdfunding_admin.png" alt="Admin Panel" /></div>
                        </div> */}
                      <div class="col-lg-12 col-md-12">
                        <div class="costomer_tab_left costomer_tab_leftright2">
                          <ul>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/secure_login.png"
                                />
                              </i>
                              <span>
                                Secure Login
                                <div class="product-idea">
                                  <p>
                                    Safeguard the admin access with secure
                                    login.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/admin_dash.png"
                                />
                              </i>
                              <span>
                                Admin Dashboard
                                <div class="product-idea">
                                  <p>
                                    {" "}
                                    Simplify the management tasks with an
                                    intuitive admin dashboard.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/configuration.png"
                                />
                              </i>
                              <span>
                                Manage Customers
                                <div class="product-idea">
                                  <p>
                                    Efficiently handle customer profiles and
                                    data as an admin.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/manage_skill.png"
                                />
                              </i>
                              <span>
                                Manage Orders
                                <div class="product-idea">
                                  <p>
                                    Streamline order management tasks from the
                                    admin perspective.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/manage_emp.png"
                                />
                              </i>
                              <span>
                                Manage Services
                                <div class="product-idea">
                                  <p>
                                    Efficiently Manage and Control Services as
                                    an Admin.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/manage_job.png"
                                />
                              </i>
                              <span>
                                Manage Categories
                                <div class="product-idea">
                                  <p>
                                    Efficiently oversee and manage categories as
                                    an admin.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/manage_news.png"
                                />
                              </i>
                              <span>
                                Manage Sub-Categories
                                <div class="product-idea">
                                  <p>
                                    Efficiently handle sub-category management
                                    tasks from an admin perspective.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/course_details.png"
                                />
                              </i>
                              <span>
                                View Reviews & Ratings
                                <div class="product-idea">
                                  <p>
                                    Access and manage ratings and reviews
                                    seamlessly as an admin.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/manage_cat.png"
                                />
                              </i>
                              <span>
                                Transaction History
                                <div class="product-idea">
                                  <p>
                                    Precision oversight of financial
                                    transactions from an admin standpoint.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/manage_blog.png"
                                />
                              </i>
                              <span>
                                Analytics and Reporting
                                <div class="product-idea">
                                  <p>
                                    Administer Analytics and Reporting with Ease
                                    for Enhanced Control.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/manage_banner.png"
                                />
                              </i>
                              <span>
                                Content Management
                                <div class="product-idea">
                                  <p>
                                    Efficient Admin Level Content Management.
                                  </p>
                                </div>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
      <section class="job_product_page_header_in">
        <div class="container">
          <div class="whateissuprt">
            <h2 class="headhs">
              What does our Marketplace Softwares do for you?
            </h2>
            <p>
              Logicspice is the custom marketplace development company that
              offers powerful service marketplace software tailored to your
              needs, catering to a diverse range of sectors including freelance,
              rental, logistics, home cleaning, scheduling, and appointment
              booking. Our expertise extends to creating versatile multi vendor
              marketplace software and marketplace app development solutions
              that empower businesses to thrive in the digital marketplace
              landscape.
            </p>
          </div>
        </div>
      </section>
      <section class="laravel_choose_features_section">
        <div class="container">
          <h2>Here's what our marketplace software can do for you</h2>
          <div class="laravel_choose_features_bx">
            <div class="row">
              <div
                class="col-sm-6 col-md-6 aos-init aos-animate"
                data-aos="fade-right"
              >
                <div class="libraries_laravel_choose">
                  <a
                    href="https://www.logicspice.com/freelancer-clone"
                    target="_blank"
                  >
                    <div class="laravel_choose_features_img laravel_choose_features_img1">
                      <img
                        src="https://www.logicspice.com/app/webroot/img/images/marketplace-software/freelance-icon.png"
                        alt="Freelance"
                      />
                    </div>
                    <div class="laravel_choose_details">
                      <h3>Freelance</h3>
                      <p>
                        Connect freelancers with clients, streamline project
                        management, facilitate secure payments, and enhance
                        collaboration.
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              <div
                class="col-sm-6 col-md-6 aos-init aos-animate"
                data-aos="fade-left"
              >
                <div class="libraries_laravel_choose libraries_laravel_choose-right">
                  <a
                    href="https://www.logicspice.com/equipment-rental-software"
                    target="_blank"
                  >
                    <div class="laravel_choose_features_img laravel_choose_features_img2">
                      <img
                        src="https://www.logicspice.com/app/webroot/img/images/marketplace-software/rental-icon.png"
                        alt="Rental"
                      />
                    </div>
                    <div class="laravel_choose_details">
                      <h3>Rental</h3>
                      <p>
                        Simplify the rental process, from listing products to
                        managing bookings, payments, and customer reviews.
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              <div
                class="col-sm-6 col-md-6 aos-init aos-animate"
                data-aos="fade-right"
              >
                <div class="libraries_laravel_choose">
                  <a
                    href="https://www.logicspice.com/logistic-marketplace-software"
                    target="_blank"
                  >
                    <div class="laravel_choose_features_img laravel_choose_features_img3">
                      <img
                        src="https://www.logicspice.com/app/webroot/img/images/marketplace-software/logistics-icon.png"
                        alt="Logistics"
                      />
                    </div>
                    <div class="laravel_choose_details">
                      <h3>Logistics</h3>
                      <p>
                        Optimize routes, track deliveries, manage orders, and
                        improve overall logistics efficiency.
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              <div
                class="col-sm-6 col-md-6 aos-init aos-animate"
                data-aos="fade-left"
              >
                <div class="libraries_laravel_choose libraries_laravel_choose-right">
                  <a
                    href="https://www.logicspice.com/service-marketplace-script"
                    target="_blank"
                  >
                    <div class="laravel_choose_features_img laravel_choose_features_img4">
                      <img
                        src="https://www.logicspice.com/app/webroot/img/images/marketplace-software/home-cleaning-icon.png"
                        alt="Home Cleaning"
                      />
                    </div>
                    <div class="laravel_choose_details">
                      <h3>Home Cleaning</h3>
                      <p>
                        Offer homeowners a platform to find and book reliable
                        cleaning services, manage appointments, and ensure
                        quality control.
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              <div
                class="col-sm-6 col-md-6 aos-init aos-animate"
                data-aos="fade-right"
              >
                <div class="libraries_laravel_choose">
                  <a
                    href="https://www.logicspice.com/event-booking-software"
                    target="_blank"
                  >
                    <div class="laravel_choose_features_img laravel_choose_features_img5">
                      <img
                        src="https://www.logicspice.com/app/webroot/img/images/marketplace-software/scheduling-icon.png"
                        alt="Scheduling"
                      />
                    </div>
                    <div class="laravel_choose_details">
                      <h3>Scheduling</h3>
                      <p>
                        Provide businesses with intuitive scheduling tools to
                        manage appointments, reduce no-shows, and enhance
                        customer experience.
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              <div
                class="col-sm-6 col-md-6 aos-init aos-animate"
                data-aos="fade-left"
              >
                <div class="libraries_laravel_choose libraries_laravel_choose-right">
                  <a
                    href="https://www.logicspice.com/appointment-scheduling-software"
                    target="_blank"
                  >
                    <div class="laravel_choose_features_img laravel_choose_features_img6">
                      <img
                        src="https://www.logicspice.com/app/webroot/img/images/marketplace-software/appointment-booking-icon.png"
                        alt="Appointment Booking"
                      />
                    </div>
                    <div class="laravel_choose_details">
                      <h3>Appointment Booking</h3>
                      <p>
                        Enable clients to easily book appointments online,
                        manage their schedules, and receive notifications.
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <p class="laravel_core_sub2">
              Our white label software marketplace empowers businesses to expand
              their reach, streamline operations, and provide a seamless
              experience to their customers. Join us in transforming your
              industry and achieving new heights of success.
            </p>
          </div>
        </div>
      </section>
      <section
        class="SubscriptionModel"
        id="subscriptionmodel"
        style={{ background: "#f5f5f5" }}
      >
        <div class="container">
          <div class="job_or_title">
            <h2 class="taxt_tt_job">Subscription Model</h2>
            <br />
            <div class="SubscriptionModelBx">
              <p>
                Experience convenience like never before with our
                subscription-based hassle-free model, available at just{" "}
                <strong>USD 45 per month</strong>, limited offer available for
                the first year.
              </p>
              <p>Key Benefits:</p>
              <ul>
                <li>
                  <span>
                    Lifetime Updates: Enjoy complimentary updates for your
                    software version throughout its lifespan.
                  </span>
                </li>
                <li>
                  <span>
                    Timely Upgrades: Seamlessly transition to upgraded versions
                    at regular intervals, all at no extra cost.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Zero Setup Fees</strong>:- There are no additional
                    charges for the setup and installation of the software,
                    making it easier for customers to get started.
                  </span>
                </li>
                <li>
                  <span>
                    Unlimited Postings: Post as many gig/product/service
                    postings as you need without any limitations.
                  </span>
                </li>
                <li>
                  <span>
                    Mobile Apps: Stay perpetually connected with Android and
                    iPhone apps, available for an additional USD 45 per month
                    for each, android or iPhone. These apps will be launched
                    through your dedicated developer accounts on Google Play and
                    the Apple App Store.
                  </span>
                </li>
                <li>
                  <span>
                    Effortless Program Operation: Revel in robust bandwidth that
                    guarantees your program runs flawlessly, supported by
                    resources allocated to your subscription model. Any increase
                    in allocated resources will incur additional charges beyond
                    the standard subscription model.
                  </span>
                </li>
                <li>
                  <span>
                    Enduring Support: We are committed to providing lifelong
                    assistance through our subscription model. If any software
                    issues arise, our <strong>dedicated technical team</strong>{" "}
                    will promptly address them during office hours.
                  </span>
                </li>
                <li>
                  <span>
                    Personalized Customization Assistance: Delivering Custom
                    Features According to Client Requirements at additional
                    cost.
                  </span>
                </li>
              </ul>
              <p>
                Discover a new era of convenience and efficiency with our
                subscription offering. Subscribe today and elevate your
                experience with our readymade solution!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="subscriptionprice" class="SubscriptionpriceSection">
        <div class="container">
          <h2 class="taxt_tt_job">Delivered Solution</h2>
          <div class="SubscriptionModelPrice">
            <div class="SubscriptionModelPriceBx">
              <h4>
                $899<span class="sml_labl"> USD</span>
              </h4>
              <strike class="srik_cls">
                $1595<span class="sml_labl">USD</span>
              </strike>
              <div class="SubscriptionModelPriceBtn">
              <div className="btn btn-get" onClick={openModal}>
                    <button>Enquire Now</button>
                    {
                      <Enquirymodal
                        modalStatus={showModal}
                        toggle={openModal}
                        title="Please fill the form below and get access to the live demo of Marketplace Software.
See how it work yourself!"
                      />
                    }
                  </div>
              </div>
              <div class="jocpp">
                <div class="portel-btnbx">
                  <div class="line-border NewLineBoader">
                    <img
                      src="https://www.logicspice.com/app/webroot/img/images/product_new/stars.png"
                      alt=""
                      class="lazy"
                    />
                    <p>560 Reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="SubscriptionModelBx">
            <p>
              The solution offered by Logicspice provides several advantages
              that can assist you in expanding your business within the
              competitive market. Here are some key benefits outlined below:
            </p>
            <ul>
              <li>
                <span>
                  Obtain a lifetime license for your domain under the pro
                  license with a one-time fee.
                </span>
              </li>
              <li>
                <span>
                  Enjoy free installation of the software for the first time.
                </span>
              </li>
              <li>
                <span>
                  Benefit from a white-labelled solution featuring your
                  branding, logo, and content at no additional cost.
                </span>
              </li>
              <li>
                <span>
                  Access custom features according to your specific
                  requirements, available at an additional charge.
                </span>
              </li>
              <li>
                <span>
                  Receive three months of complimentary support for any bugs or
                  issues you encounter.
                </span>
              </li>
              <li>
                <span>
                  Experience efficient communication channels via email,
                  WhatsApp, Google Meet, Skype, Zoom and Teams.
                </span>
              </li>
            </ul>
            <p>
              For details on an Enterprise license, please{" "}
              <a  onClick={toggleModal}>
                contact us
           
              </a>
              .
            </p>
          </div>
        </div>
      </section>
      <section class="job_portal_area job_portal_area_food">
        <div class="container">
          <div class="job_or_title">
            <h2 class="taxt_tt_job">
              Logicspice is the best partner for Service Marketplace solutions!
            </h2>
            <br />
            <div class="logic-parter">
            <a onClick={toggleInfo} className="ylogicspice">
                <i>
                  <img
                    src="/img/jobboard/why-logic-icon.png"
                    alt=""
                    className=""
                  />
                </i>
                <span>Why Logicspice</span>
              </a>
              <Whylogicspice open={showInfo} />
            </div>
          </div>
      
        </div>
      </section>
      <section class="whatsupport_section" id="support">
        <div class="container">
          <h4 class="title_main">
            What <span>support</span> you will get?
          </h4>
          <div class="supportsetting">
            <ul>
              <li data-aos="fade" class="aos-init aos-animate">
                <div class="supportsetting_icn">
                  <img
                    src="https://www.logicspice.com/app/webroot/img/images/month_half_icon.png"
                    alt="manager_icn"
                  />
                </div>
                <div class="supportsettingtext">3 months Free Support</div>
              </li>
              <li data-aos="fade" class="aos-init aos-animate">
                <div class="supportsetting_icn">
                  <img
                    src="https://www.logicspice.com/app/webroot/img/images/free_remove_icon.png"
                    alt="manager_icn"
                  />
                </div>
                <div class="supportsettingtext">Free Brand Removal</div>
              </li>
              <li data-aos="fade" class="aos-init aos-animate">
                <div class="supportsetting_icn">
                  <img
                    src="https://www.logicspice.com/app/webroot/img/images/free_instal;liicon.png"
                    alt="manager_icn"
                  />
                </div>
                <div class="supportsettingtext">Free Installation</div>
              </li>
              <li data-aos="fade" class="aos-init aos-animate">
                <div class="supportsetting_icn">
                  <img
                    src="https://www.logicspice.com/app/webroot/img/images/access_secure_code_icon.png"
                    alt="manager_icn"
                  />
                </div>
                <div class="supportsettingtext">Easily scalable</div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section
        class="ecommerce_review_section MarketplaceSoftwareReviewSection"
        id="reviews"
      >
        <div class="ecommerce_review__img">
          <img
            src="https://www.logicspice.com/app/webroot/img/images/marketplace-software/faq-review-img.png"
            alt="Marketplace Software"
            class=""
          />
        </div>
        <div class="container">
          <h2>Customer Reviews</h2>
          <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-6">
              <div class="ecommerce--review">
                <div class="customers_review_sec_row">
                  <div class="customer_review_stext">
                    I have purchased the service marketplace software and have
                    constructed my own website. This was an easy task because of
                    logicspice's free installation and support. Keep up the good
                    work. I will be back for more customization work in the
                    future.
                  </div>
                  <div class="who_ratset">
                    <span
                      class="star_review_main"
                      style={{ paddingRight: "10px", Color: "gold" }}
                    >
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <i class="fa fa-star" aria-hidden="true"></i>
                    </span>
                    Mark Henry, Australia
                    <span>
                      <img
                        src="https://www.logicspice.com/img/images/australia_flag_img.png"
                        alt="mobile app development"
                        style={{ width: "20px", marginLeft: "3px" }}
                      />
                    </span>
                  </div>
                </div>
                <div class="customers_review_sec_row">
                  <div class="customer_review_stext" id="fiveer-clone">
                    This is the best readymade solution I found for my business.
                    Thanks for your great efforts, commitment and support while
                    installing the software. Your prompt service regarding a few
                    minor issues was superb and great communication skills.
                  </div>

                  <div class="who_ratset">
                    <span
                      class="star_review_main"
                      style={{ paddingRight: "10px", Color: "gold" }}
                    >
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <i class="fa fa-star" aria-hidden="true"></i>
                    </span>
                    <span id="client-name">Davian Smith, Italy</span>{" "}
                    <span>
                      <img
                        src="https://www.logicspice.com/img/images/italy_flag.png"
                        alt="mobile app development"
                        style={{ width: "20px", marginLeft: "3px" }}
                      />
                    </span>
                  </div>
                </div>

                <div class="customers_review_sec_row">
                  <div class="customer_review_stext" id="fiveer-clone">
                    Recently I bought freelance software based upon gigs from
                    logicspice and it worked really nice, it helped my business
                    to gain more efficiency. I recommend it to all who are
                    looking for freelance based models, it's really nice.
                  </div>
                  <div class="who_ratset">
                    <span
                      class="star_review_main"
                      style={{ paddingRight: "10px", Color: "gold" }}
                    >
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <i class="fa fa-star" aria-hidden="true"></i>
                    </span>
                    <span id="client-name">Iam Convey, USA</span>{" "}
                    <span>
                      <img
                        src="https://www.logicspice.com/img/images/usa_flag_img.png"
                        alt="mobile app development in USA"
                        style={{ width: "20px", marginLeft: "3px" }}
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="ecommerce--review--point ">
                <div class="outof_rating">
                  <div class="review_rating_fjs">
                    <div class="star_num">
                      5 <i class="fa fa-star"></i>
                    </div>
                    <div class="progress">
                      <div
                        class="progress-bar progress-bar-danger progress-bar-striped"
                        role="progressbar"
                        aria-valuenow="70"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "0%" }}
                      ></div>
                    </div>
                    <div class="people_star_num">500</div>
                  </div>

                  <div class="review_rating_fjs">
                    <div class="star_num">
                      4 <i class="fa fa-star"></i>
                    </div>
                    <div class="progress">
                      <div
                        class="progress-bar progress-bar-danger progress-bar-striped"
                        role="progressbar"
                        aria-valuenow="70"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "0%" }}
                      ></div>
                    </div>
                    <div class="people_star_num">60</div>
                  </div>
                  <div class="review_rating_fjs">
                    <div class="star_num">
                      0 <i class="fa fa-star"></i>
                    </div>
                    <div class="progress">
                      <div
                        class="progress-bar progress-bar-danger progress-bar-striped"
                        role="progressbar"
                        aria-valuenow="70"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "0%" }}
                      ></div>
                    </div>
                    <div class="people_star_num">3</div>
                  </div>
                  <div class="review_rating_fjs">
                    <div class="star_num">
                      2 <i class="fa fa-star"></i>
                    </div>
                    <div class="progress">
                      <div
                        class="progress-bar progress-bar-danger progress-bar-striped"
                        role="progressbar"
                        aria-valuenow="70"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "0%" }}
                      ></div>
                    </div>
                    <div class="people_star_num">0</div>
                  </div>
                  <div class="review_rating_fjs">
                    <div class="star_num">
                      1 <i class="fa fa-star"></i>
                    </div>
                    <div class="progress">
                      <div
                        class="progress-bar progress-bar-danger progress-bar-striped"
                        role="progressbar"
                        aria-valuenow="70"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "0%" }}
                      ></div>
                    </div>
                    <div class="people_star_num">0</div>
                  </div>
                </div>
                <div class="ecommerce--review--btn ">
                <a className="btn btn-primary" onClick={openReviewModel}>
                    Rate and Review product
                  </a>

                  <Reviewmodals
                    modalStatus={showReviewModal}
                    toggle={openReviewModel}
                    title="Job Board Software"
                  />
                </div>
                <div class="main-rait">
                  <span>
                    <i class="fa fa-star"></i> <span>4.7 out of 5 stars</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="ecommerce_faq_section" id="faq">
        <div class="container">
          <div class="ecommerce__Quick_FAQ_Script">
            <div class="row">
              <div class="col-md-5" data-aos="fade-up">
                <h4 class="title_main">
                  Frequently <br />
                  Asked Questions
                </h4>
                <div class="FaqImgBx">
                  <img
                    src="/img/marketplacesoftware/FaqLaravelImg.png"
                    alt="laravel web development"
                  />
                </div>
              </div>
              <div class="col-md-7">
                <div class="ecommerce__Quick_FAQ">
                  <MDBAccordion v-model="activeItem" borderless>
                    <MDBAccordionItem
                      headerTitle="Is the source code modifiable?"
                      collapseId="flush-collapse1"
                    >
                      <p>
                        Yes, most of the softwares is completely flexible and
                        clients can customize it as per their requirements.
                        However, 1-2 core files are encrypted due to licensing
                        purposes, because we will allow you to run the script on
                        the specific domain for which encryption will be done in
                        1-2 core files, rest of the code is open to make changes
                        and those encrypted files will be part of the codebase
                        as well.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle="How much time will it take to make it live?"
                      collapseId="flush-collapse2"
                    >
                      <p>
                        The whole process will take maximum 1 week time and the
                        rest depends on your response time and customization
                        requirements.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle="How will you deal with bugs and issues in the product?"
                      collapseId="flush-collapse3"
                    >
                      <p>
                        We will communicate with you via live chat, phone call,
                        whatsapp, skype, and email during our business hours and
                        try to solve your problem as soon as possible.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle="Does logicspice provide technical support?"
                      collapseId="flush-collapse4"
                    >
                      <p>
                        Yes, we are providing free 3 months technical support on
                        the existing features and functionalities of the
                        software.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle="Do I own my software completely?"
                      collapseId="flush-collapse5"
                    >
                      <p>
                        Yes, you will own the license to use it for the domain
                        you purchased for.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle="Do I need to provide a Google Maps API key? If yes, how to generate a Google Map API key?"
                      collapseId="flush-collapse6"
                    >
                      <p>
                        Yes, you need to provide a map API key. Please follow
                        the steps mentioned in the below URL to generate the
                        Google map API key:
                        https://developers.google.com/maps/documentation/javascript/get-api-key.
                        You need to set up your billing details over that.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle="Can I update some design and functionality in the application code myself?"
                      collapseId="flush-collapse7"
                    >
                      <p>
                        Yes, you will have access to all the code, except some
                        of the core encrypted files.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle="Will I be able to use it on multiple domains, after I purchase this software?"
                      collapseId="flush-collapse8"
                    >
                      <p>
                        You will be licensed to use it only for the domain you
                        purchased for.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle="Can I resell the software? Will I have rights over the software code?"
                      collapseId="flush-collapse9"
                    >
                      <p>
                        No, you can't resell the software. All rights will
                        remain with Logicspice only.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle="Do you offer a Money Back Guarantee?"
                      collapseId="flush-collapse10"
                    >
                      <p>
                        Yes, we offer a 30 days money-back guarantee to ensure
                        customer satisfaction with our software. If for any
                        reason, you wish to discontinue using the product, you
                        can ask us for a refund. We will refund your total money
                        except the installation and configuration charges, which
                        are USD 65 or 20% of the application cost, whichever is
                        greater.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle="Along with hosting server details, what other recommendations?"
                      collapseId="flush-collapse12"
                    >
                      <p>
                        We recommend you purchase an SSL certificate along with
                        a hosting server which is Linux based, considering that
                        an SSL certificate is necessary for all the websites
                        these days and it provides a secure layer to the website
                        as well.
                      </p>
                    </MDBAccordionItem>
                  </MDBAccordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="enq-section">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-12 text-center">
            <div className="btn btn-primary" onClick={openModal}>
                <button>Enquire Now</button>
                {
                  <Enquirymodal
                    modalStatus={showModal}
                    toggle={openModal}
                    title="Marketplace Software"
                  />
                }
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="latest_feature_product">
        <div class="container">
          <h2 class="title_main">Other Popular Softwares</h2>
          <div class="other-product-box">
            <div class="row">
              <div class="col-sm-6 col-md-4">
                <div class="thumbnail">
                  <a
                    title="View Detail"
                    target="_black"
                    href="/softwares/fiverr-clone"
                  >
                    <div class="caption">
                      <div class="other-caption-bx">
                        <h3>Fiverr clone</h3>
                        <div class="other-project-logo">
                          <img
                            src="https://www.logicspice.com/app/webroot/img/images/product_img/gigger_logo_new.png"
                            alt="fiverr-clone"
                            class=""
                          />
                        </div>
                        <p>
                          <span>On Demand Marketplace Software</span>
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div class="col-sm-6 col-md-4">
                <div class="thumbnail">
                  <a
                    title="View Detail"
                    target="_black"
                    href="/softwares/logistic-marketplace-software"
                  >
                    <div class="caption">
                      <div class="other-caption-bx">
                        <h3>Uship clone</h3>

                        <div class="other-project-logo">
                          <img
                            src="https://www.logicspice.com/app/webroot/img/images/product_img/logictic_logo_new.png"
                            alt="logistic-marketplace-software"
                            class=""
                          />
                        </div>
                        <p>
                          <span>Similar to Uship Clone, Shiply Clone.</span>
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div class="col-sm-6 col-md-4">
                <div class="thumbnail">
                  <a
                    title="View Detail"
                    target="_black"
                    href="/softwares/appointment-scheduling-software/"
                  >
                    <div class="caption">
                      <div class="other-caption-bx">
                        <h3>Appointment Booking System</h3>

                        <div class="other-project-logo">
                          <img
                            src="https://www.logicspice.com/app/webroot/img/images/product_img/abs_logo_new.png"
                            alt="Fiverr Clone Script Logo"
                            class=""
                          />
                        </div>
                        <p>
                          <span>
                            A user-friendly appointment booking system that
                            enables owners to manage.
                          </span>
                        </p>
                      </div>
                    </div>
                  </a>
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
            <img
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

export default page;
