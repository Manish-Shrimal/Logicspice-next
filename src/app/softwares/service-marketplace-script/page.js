"use client";
import React, { useState } from "react";
import Footer from "@/app/Components/Footer";
import NavBar from "@/app/Components/Navbar";
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
import "../../resposive.css";
import Whylogicspice from "@/app/Components/Whylogicspice";
import Reviewmodals from "@/app/Components/Reviewmodals";
import { Modal, ModalBody } from "react-bootstrap";

const page = () => {
  const [showModal, setShowModal] = useState(false);
  const [jobportal, setJobportal] = useState(false);
  const [buyjobportal, setBuyJobportal] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);


  const toggleJobPortalModal = () => setJobportal(!jobportal);
  const toggleBuyJobPortalModal = () => setBuyJobportal(!buyjobportal);

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
  var settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
  };
  const [activeTab, setActiveTab] = useState("tab2");
  const [sellerTab, setSellerTab] = useState(true);
  const [buyerTab, setBuyerTab] = useState(false);
  const [adminTab, setAdminTab] = useState(false);

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

  const opendiv = (tab) => {
    setActiveTab(tab);
  };
  return (
    <>
      <NavBar />
      <section class="paid-pro job-portal-banner  fiverr-new-banner NewJobSiteDesign JobBoardNewDesign NewCrowdDesigns job-portal-bg service-market-banner-new">
        <div class="container">
          <div class="row">
            <div class="col-sm-7 col-md-7">
              <h1>Service Marketplace Script</h1>
              <div class="both-left-p-sec">
                <h2>
                  On demand service marketplace like Thumbtack Clone, Airtasker
                  Clone, UrbanCompany Clone
                </h2>
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
                          src="/img/softwares-banner-img/more-info.png"
                          alt=""
                        />
                      </i>
                      <p>Limited Period Offer for First Year</p>
                    </span>
                  </div>
                </div>
                <div class="job-valu-btn">
                  <span>Fill your basic details and</span>
                  <div className="btn btn-get" onClick={openModal}>
                    <button>Get Demo Access!</button>
                    {
                      <Enquirymodal
                        modalStatus={showModal}
                        toggle={openModal}
                        title="Please fill the form below and get access to the live demo of Service Marketplace Script.See how it work yourself!"
                      />
                    }
                  </div>
                  <Link
                    class="btn fiverr-buys NewGreenBtnJob"
                    href="/softwares/service-marketplace-script"
                  >
                    Buy Now
                  </Link>
                </div>
                <div class="SubscriptionPrice">
                  <div class="line-border NewLineBoader">
                    <img
                      alt="crowd_funding_script"
                      src="/img/jobboard/stars.png"
                    />
                    <p>49 Reviews</p>
                  </div>
                </div>
              </div>
              <div class="jocpp">
                <ul class="job-pr-icon">
                  <li>
                    <i class="fa-solid fa-earth-americas"></i>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-sm-5 col-md-5">
              <div class="por-mobile-new">
                <img
                  alt="service_marketplace_script"
                  src="/img/softwares-banner-img/ser-mar-banner-img.png"
                />
              </div>
            </div>
          </div>
          <div class="job-portal-banner-link">
            <div aria-label="breadcrumb" class="my-breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="">Home</a>
                </li>
                <li class="breadcrumb-item">
                  <a href="/softwares">Softwares</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  Service Marketplace Script
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section class="job-section-top-new JobBoardSectionNew">
        <div class="container">
          <p>
            This Service Marketplace PHP script can be used by Businesses or
            Companies like Beauty, Laundry, Home Cleaning, Pest Control, repair,
            and maintenance services, event management, wedding & party
            management to help local people for getting daily services.
          </p>
        </div>
      </section>
      <section
        class="client-say crowdfunding-say"
        style={{ backgroundColor: "#fff" }}
      >
        <div class="container">
          <div class="row">
            <div class="col-md-6 job-video">
              <iframe
                width="100%"
                height="312"
                src="https://www.youtube-nocookie.com/embed/6UQDXgeOMlw?rel=0"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div class="col-md-6">
              <div class="service-market-ttd">
                <ul>
                  <li>White labeled script. </li>
                  <li>Responsive website (mobile friendly).</li>
                  <li>Based on the latest technologies.</li>
                  <li>Unlimited service categories and sub-categories.</li>
                  <li>
                    Easiest way of setting up a specific Service Marketplace
                    Portal.{" "}
                  </li>
                  <li>
                    Separate dashboards for service providers and customers.
                  </li>
                  <li>
                    Complete monitoring & management from administration panel.
                  </li>
                  <li>
                    Alerts or service requirements are sent to the workers
                    available nearby.{" "}
                  </li>
                  <li>
                    Service Provider can register and list their business with
                    packages of their work.
                  </li>
                  <li>One time License Fee</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="job_portal_area">
        <div class="container">
          <div class="job_or_title">
            <h2 class="taxt_tt_job">Service Marketplace Script Features</h2>
          </div>

          <div class="tatxt_txt_job">
            This Airtasker Clone enables admin to use multiple features as
            manage service categories, manage customers, manage service
            providers, their communication on website, payment receipt report
            and addons payments etc. Customers can select the Service Module
            such as Home Appliance repair, Furniture repair, House Cleaning &
            Pet Care, etc.
          </div>

          <div class="tab_bbx_job">
            <div class="tab_bbx_top_job">
              <ul className="">
                <li
                  id="tab1_li"
                  className={`jobseeker_app_job ddlj ${
                    sellerTab ? "active" : ""
                  }`}
                  onClick={() => handleSellerTab()}
                >
                  <a>Customer</a>
                </li>
                <li
                  id="tab2_li"
                  className={`emplyer_app_job ddlj ${buyerTab ? "active" : ""}`}
                  onClick={() => handleBuyerTab()}
                >
                  <a>Service Provider</a>
                </li>
                <li
                  id="tab3_li"
                  className={`admin_app_job ddlj ${adminTab ? "active" : ""}`}
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
                      <div class="col-lg-4 col-md-3">
                        <div class="costomer_tab_right costomer_tab_rightleft">
                          <img
                            src="/img/service-marketplace/ser_mar_customer.png"
                            alt="Customer"
                          />
                        </div>
                      </div>
                      <div class="col-lg-8 col-md-9">
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
                                Customer Registration
                                <div class="product-idea">
                                  <p>
                                    Customers can register on the portal using
                                    Email Address or can log in using Facebook &
                                    Gmail.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/select_service.png"
                                />
                              </i>
                              <span>
                                Select Service Module
                                <div class="product-idea">
                                  <p>
                                    Customers can select the Service Module such
                                    as Home Appliance, Furniture Repair, House
                                    Cleaning & Pet Care etc.
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
                                Search Service Provider
                                <div class="product-idea">
                                  <p>
                                    Customers can find Service Providers by
                                    applying search keywords relevant to
                                    required services.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/outstanding_booking.png"
                                />
                              </i>
                              <span>
                                Manage Outstanding Bookings
                                <div class="product-idea">
                                  <p>
                                    Customer can view the list of Outstanding
                                    Bookings & can view details, booking status
                                    (rejected/ canceled by customer) etc.
                                    Customers can post reviews for the Service
                                    Provider.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/schedule_service.png"
                                />
                              </i>
                              <span>
                                Schedule Services As Per Your Time
                                <div class="product-idea">
                                  <p>
                                    Customers can view the availability of
                                    Service providers & confirm the booking as
                                    per the availability.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/manage_bookings.png"
                                />
                              </i>
                              <span>
                                Manage Confirmed Bookings
                                <div class="product-idea">
                                  <p>
                                    Customers can receive the bookings from the
                                    Service Providers. Customers can view a list
                                    of bookings & can manage (add/edit/delete)
                                    bookings.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/payServices.png"
                                />
                              </i>
                              <span>
                                Track Service & Pay for it
                                <div class="product-idea">
                                  <p>
                                    Customer can track the booked service and
                                    view the service status.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/manage_messages.png"
                                />
                              </i>
                              <span>
                                Manage Messages
                                <div class="product-idea">
                                  <p>
                                    Customer can receive messages from Service
                                    Provider & can respond to that message by
                                    adding text/uploading image.
                                  </p>
                                </div>
                              </span>
                            </li>

                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/manage_messages.png"
                                />
                              </i>
                              <span>
                                Add Service reminder to calendar
                                <div class="product-idea">
                                  <p>
                                    Customer can add service reminder to google
                                    event calendar and facebook event calendar.
                                  </p>
                                </div>
                              </span>
                            </li>

                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/manage_messages.png"
                                />
                              </i>
                              <span>
                                Get Service & Pay for it
                                <div class="product-idea">
                                  <p>
                                    {" "}
                                    Customers can get the service as per the
                                    bookings & needs to pay for the service.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/user_profile.png"
                                />
                              </i>
                              <span>
                                Manage Profile
                                <div class="product-idea">
                                  <p>
                                    Customers can view their profile & can
                                    manage(add/edit/delete) Profile.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/payment_history.png"
                                />
                              </i>
                              <span>
                                Track Payment History
                                <div class="product-idea">
                                  <p>
                                    Customers can view the list of Payment
                                    transactions & can keep track of the
                                    payments.
                                  </p>
                                </div>
                              </span>
                            </li>

                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/service_provider.png"
                                />
                              </i>
                              <span>
                                Reviews to the Service provider
                                <div class="product-idea">
                                  <p>
                                    Customer can add reviews & ratings to the
                                    Service Providers once they get the service.
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
                      <div class="col-lg-4 col-md-3">
                        <div class="costomer_tab_right">
                          <img
                            src="/img/service-marketplace/ser_mar_provider.png"
                            alt="Service Provider"
                          />
                        </div>
                      </div>
                      <div class="col-lg-8 col-md-9">
                        <div class="costomer_tab_left">
                          <ul>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/Ser_provider_ragis.png"
                                />
                              </i>
                              <span>
                                Service Provider Registration
                                <div class="product-idea">
                                  <p>
                                    Service Provider can register on the portal
                                    using Email Address or can login using
                                    Facebook & Gmail.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/manage_calendar.png"
                                />
                              </i>
                              <span>
                                Manage availability
                                <div class="product-idea">
                                  <p>
                                    Service Provider can manage
                                    (add/edit/delete) the availability status as
                                    Available/ Not Available by selecting the
                                    time slot.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/manage_services.png"
                                />
                              </i>
                              <span>
                                Manage Service
                                <div class="product-idea">
                                  <p>
                                    Service Provider can view the list of
                                    services they are available for, on the
                                    website & can manage(view/add/edit) Services
                                    and their availability.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/manage_bookings.png"
                                />
                              </i>
                              <span>
                                Manage Confirmed Bookings
                                <div class="product-idea">
                                  <p>
                                    Service Provider can receive bookings from
                                    the Customers. Service Providers can view
                                    the list of bookings.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/get_paid.png"
                                />
                              </i>
                              <span>
                                Get Paid
                                <div class="product-idea">
                                  <p>
                                    {" "}
                                    Service Provider can receive the payment for
                                    the service they have provided.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/manage_messages.png"
                                />
                              </i>
                              <span>
                                Manage Messages
                                <div class="product-idea">
                                  <p>
                                    Service Provider can receive messages from
                                    Customer & can respond to that message by
                                    adding text/uploading image.
                                  </p>
                                </div>
                              </span>
                            </li>

                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/outstanding_booking.png"
                                />
                              </i>
                              <span>
                                Manage Outstanding Bookings
                                <div class="product-idea">
                                  <p>
                                    Service Provider can view the list of
                                    Outstanding Bookings & can view details,
                                    booking status (rejected/cancelled by
                                    customer) etc. Service Providers can post
                                    reviews for the customers.
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
                      <div class="col-lg-4 col-md-3 ">
                        <div class="costomer_tab_right costomer_tab_rightleft2">
                          <img
                            src="/img/service-marketplace/ser_mar_admin_mac.png"
                            alt="Admin Panel"
                          />
                        </div>
                      </div>
                      <div class="col-lg-8 col-md-9">
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
                                  <p>Admin can login securely on Tasker.</p>
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
                                    Dashboard, with statistics of customers,
                                    service providers, addons, payments,
                                    categories etc.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/manage_customers.png"
                                />
                              </i>
                              <span>
                                Manage Customers
                                <div class="product-idea">
                                  <p>
                                    Admin can manage(view/add/edit/delete)
                                    Customers. Admin can activate/deactivate
                                    Customers.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/service_rovider.png"
                                />
                              </i>
                              <span>
                                Manage Service Providers
                                <div class="product-idea">
                                  <p>
                                    Admin can manage(view/add/edit/delete)
                                    Service Providers.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/manage_services.png"
                                />
                              </i>
                              <span>
                                Manage Services
                                <div class="product-idea">
                                  <p>Manage (view/add/edit/delete) Services.</p>
                                </div>
                              </span>
                            </li>

                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/payment_history.png"
                                />
                              </i>
                              <span>
                                Transaction History
                                <div class="product-idea">
                                  <p>
                                    Admin can view payment transactions and
                                    payment methods etc.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/manage_bookings.png"
                                />
                              </i>
                              <span>
                                View Confirmed & Outstanding Bookings
                                <div class="product-idea">
                                  <p>
                                    {" "}
                                    Admin can view the list of Confirmed
                                    bookings & can view the status of Bookings.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/manage_category.png"
                                />
                              </i>
                              <span>
                                Manage Service Categories
                                <div class="product-idea">
                                  <p>
                                    Can manage(view/add/edit/delete) Services
                                    Categories & subcategories.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/saved_gig.png"
                                />
                              </i>
                              <span>
                                Manage Service Packages
                                <div class="product-idea">
                                  <p>
                                    {" "}
                                    Admin can view list of service packages and
                                    can manage (view/add/edit/delete) service
                                    packages on the basis of service category
                                    selection.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/manage_admin.png"
                                />
                              </i>
                              <span>
                                Manage Service Addons
                                <div class="product-idea">
                                  <p>
                                    {" "}
                                    Admin can view list of service Addons and
                                    can manage (view/add/edit/delete) service
                                    Addons basis of service category selection
                                    and service packages.
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
              What does our <span>Thumbtack clone script</span> offer you ?
            </h2>
            <p>
              Logicspice offers an online service marketplace script similar to
              TaskRabbit or Thumbtack, Airtasker. Our{" "}
              <strong>Airtasker Clone script</strong> can be used in the
              following service areas:
            </p>
            <ul class="ser-market-plus">
              <li>Academic Services.</li>
              <li>Automobile Services.</li>
              <li>Cleaning Services.</li>
              <li>Plumbing Services.</li>
              <li>Home Maintenance Services.</li>
              <li>Repairing Services.</li>
              <li>Technical & Web Services.</li>
              <li>Fashion & Beauty</li>
              <li>Health & more.</li>
            </ul>
            <p>
              Our <strong>UrbanClap Clone</strong> will facilitate customers to
              search for local service providers that are offering their
              services nearby, by entering their location and selecting the type
              of service they want through the website. Customers can send a
              booking request to the service providers by entering the service
              description.
            </p>
            <p>
              Customers can post their service requirement by giving enough
              details and the service provider can contact them regarding this.
              With the help of this software, customers can easily get their
              required tasker/service provider and the customer can rate the
              service providers according to their work quality. For e.g If you
              want to clean your house, you can hire a cleaner on the basis of
              his hourly rate & business ratings. This script enables admin to
              manage all pages from their secure dashboard which features
              adding, editing, deleting as well as being able to activate or
              deactivate them at any time.
            </p>
            <p>
              Service providers can view a list of bookings made by the
              customers over the website. This On demand service marketplace
              script allows service providers to view the customer profile
              before accepting the service request. Customer and service
              providers both will receive emails about rating each other once
              the task is marked complete.
            </p>
            <p>
              This <strong>service marketplace software</strong> allows both
              customers & service providers to engage with each other via
              message board. In order to make more reliability they can share
              their expectation towards work over this message board . Our
              UrbanClap Clone allows customers to find out the service provider
              by applying search keywords relevant to services and also can
              select the Service Module such as Home Appliance, Furniture
              Repair, House Cleaning & Pet Care, etc. from the user friendly
              dashboard.
            </p>
            <p>
              Business owners can also add Service Providers and Customers and
              manage the Services. Move forward and launch our own Service
              Marketplace.
            </p>
          </div>
        </div>
      </section>
      <section class="SubscriptionModel" id="subscriptionmodel">
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
                    Unlimited Project Postings: Post as many project postings as
                    you need without any limitations.
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
                ₹88,190<span class="sml_labl"> INR</span>
              </h4>
              <strike class="srik_cls">
                ₹147,805<span class="sml_labl"> INR</span>
              </strike>
              <div class="SubscriptionModelPriceBtn">
                <div className="btn btn-get" onClick={openModal}>
                  <button>Get Demo Access!</button>
                  {
                    <Enquirymodal
                      modalStatus={showModal}
                      toggle={openModal}
                      title="Please fill the form below and get access to the live demo of Service Marketplace Script.See how it work yourself!"
                    />
                  }
                </div>
                <Link
                  class="btn fiverr-buys"
                  href="/softwares/crowdfunding-script"
                >
                  Buy Now
                </Link>
              </div>
              <div class="jocpp">
                <ul class="job-pr-icon">
                  <li>
                    <i class="fa-solid fa-earth-americas"></i>
                  </li>
                </ul>
                <div class="portel-btnbx">
                  <div class="line-border NewLineBoader">
                    <img src="/img/jobboard/stars.png" alt="" class="lazy" />
                    <p>47 Reviews</p>
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
              <a onClick={toggleModal}>contact us</a>. .
            </p>
          </div>
        </div>
      </section>

      <section className="job_portal_area job_portal_area_food">
        <div className="container">
          <div className="job_or_title">
            <h2 className="taxt_tt_job">
              Best Partner Company For Your Technological Solutions!
            </h2>
            <br />
            <div className="logic-parter">
              <a
                className=""
                aria-controls="jobportal"
                onClick={toggleJobPortalModal}
              >
                <i className="fa fa-cogs" aria-hidden="true"></i>
                <span>How It Works</span>
              </a>
              <a
                className=""
                aria-controls="buyjobportal"
                onClick={toggleBuyJobPortalModal}
              >
                <i className="fa fa-building" aria-hidden="true"></i>
                <span>Companies Using It</span>
              </a>
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
      <div>
        <Modal
          show={jobportal}
          onHide={toggleJobPortalModal}
          id="jobportal"
          className="modal-service"
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <img
              src="/img/jobboard/Job_board_for_page.jpg"
              alt="icon"
              title=""
              className="img-fluid"
            />
          </Modal.Body>
          <Modal.Footer>
            <button
              className="btn btn-secondary"
              onClick={toggleJobPortalModal}
            >
              Close
            </button>
          </Modal.Footer>
        </Modal>

        <Modal
          show={buyjobportal}
          onHide={toggleBuyJobPortalModal}
          id="buyjobportal"
          className="modal-service"
        >
          <Modal.Header
            className="modal-dialog-service"
            closeButton="close"
          ></Modal.Header>
          <Modal.Body>
            <div id="jobboardclients" closeButton>
              <Slider {...settings}>
                <div className="SliderMainBx">
                  <div className="site-titles">
                    <Link
                      href="https://salorapido.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      salorapido.com
                    </Link>
                  </div>
                  <Link
                    href="https://salorapido.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/img/fiverrclone/salorapido.jpg"
                      alt="icon"
                      title=""
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="SliderMainBx">
                  <div className="site-titles">
                    <Link
                      href="https://salorapido.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      salorapido.com
                    </Link>
                  </div>
                  <Link
                    href="https://salorapido.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/img/fiverrclone/salorapido.jpg"
                      alt="icon"
                      title=""
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="SliderMainBx">
                  <div className="site-titles">
                    <Link
                      href="https://salorapido.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      salorapido.com
                    </Link>
                  </div>
                  <Link
                    href="https://salorapido.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/img/fiverrclone/salorapido.jpg"
                      alt="icon"
                      title=""
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="SliderMainBx">
                  <div className="site-titles">
                    <Link
                      href="https://salorapido.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      salorapido.com
                    </Link>
                  </div>
                  <Link
                    href="https://salorapido.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/img/fiverrclone/salorapido.jpg"
                      alt="icon"
                      title=""
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="SliderMainBx">
                  <div className="feat-slide-img">
                    <img
                      src="/img/jobboard/Manage_jobs_job_portal_script.png"
                      alt="Job Management"
                    />
                  </div>
                  <div className="hands-proved">
                    <div className="titleof_scnew">Job Management</div>
                    <div className="pro-feat-detai">
                      Manage the jobs created by them making them active or
                      inactive. Check the list of job seekers who applied for
                      job.
                    </div>
                  </div>
                </div>
                <div className="SliderMainBx">
                  <div className="feat-slide-img">
                    <img
                      src="/img/jobboard/membership_plan_job_portal_script.png"
                      alt="Membership Plan"
                    />
                  </div>
                  <div className="hands-proved">
                    <div className="titleof_scnew">Membership Plan</div>
                    <div className="pro-feat-detai">
                      Employers buy membership plan which suits their
                      requirement best.They can renew or update your membership
                      plan at any time.
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button
              className="btn btn-secondary"
              onClick={toggleBuyJobPortalModal}
            >
              Close
            </button>
          </Modal.Footer>
        </Modal>
      </div>
      <section class="used_technology_section" id="technologies">
        <div class="container">
          <h4 class="title_main">
            <span>Used Technologies</span> and Server Requirements
          </h4>
          <div class="used_technology_section_dataa">
            <div class="row">
              <div class="col-sm-6">
                <ul>
                  <li data-aos="fade-up">
                    <div class="icntechimg">
                      <img
                        src="/img/jobboard/LaravelLogo.png"
                        alt="Laravel Development"
                      />
                    </div>
                    <div class="icntechimg_nm">Laravel</div>
                  </li>
                  <li data-aos="fade-up">
                    <div class="icntechimg">
                      <img src="/img/jobboard/html-5.png" alt="HTML5" />
                    </div>
                    <div class="icntechimg_nm">HTML5</div>
                  </li>
                  <li data-aos="fade-up">
                    <div class="icntechimg">
                      <img
                        src="/img/jobboard/tech_mysql_icon.png"
                        alt="MySQL"
                      />
                    </div>
                    <div class="icntechimg_nm">MySQL</div>
                  </li>
                  <li data-aos="fade-up">
                    <div class="icntechimg">
                      <img
                        src="/img/jobboard/tech_apache_icon.png"
                        alt="Apache"
                      />
                    </div>
                    <div class="icntechimg_nm">Apache</div>
                  </li>
                </ul>
              </div>
              <div class="col-sm-6">
                <ul class="list_detail">
                  <li class="same">
                    <b>Browsers - </b> Firefox 32.6+, Chrome 20.0+, Opera 30.0+,
                    Safari 5+, IE 9+
                  </li>
                  <li class="same">
                    <b>Framework - </b> Laravel 5+
                  </li>
                  <li class="same">
                    <b>Language - </b> PHP 7.2+, AJAX, jQuery
                  </li>
                  <li class="other">
                    <b>Design - </b> HTML 5, CSS 3, Bootstrap 4.3, JavaScript
                  </li>
                  <li class="other">
                    <b>Database - </b> MySQL 5.5+{" "}
                  </li>
                  <li class="other">
                    <b>Server - </b> Apache 2.4+
                  </li>
                </ul>
              </div>
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
              <li data-aos="fade">
                <div class="supportsetting_icn">
                  <img
                    src="/img/jobboard/month_half_icon.png"
                    alt="manager_icn"
                  />
                </div>
                <div class="supportsettingtext">Free Support</div>
              </li>
              <li data-aos="fade">
                <div class="supportsetting_icn">
                  <img
                    src="/img/jobboard/free_remove_icon.png"
                    alt="manager_icn"
                  />
                </div>
                <div class="supportsettingtext">Free Brand Removal</div>
              </li>
              <li data-aos="fade">
                <div class="supportsetting_icn">
                  <img src="/img/jobboard/free_instal.png" alt="manager_icn" />
                </div>
                <div class="supportsettingtext">Free Installation</div>
              </li>
              <li data-aos="fade">
                <div class="supportsetting_icn">
                  <img
                    src="/img/jobboard/access_secure_code_icon.png"
                    alt="manager_icn"
                  />
                </div>
                <div class="supportsettingtext">Easily scalable</div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section class="su_rev_section" id="reviews">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h4 class="title_main">Customer Reviews </h4>
              <div class="row">
                <div class="col-md-5">
                  <div class="outof_rating">
                    <div class="main-rait">
                      <span>
                        <i class="fa fa-star"></i>{" "}
                        <span>4.8 out of 5 stars</span>
                      </span>
                    </div>
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
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                      <div class="people_star_num">42</div>
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
                          style={{ width: "10%" }}
                        ></div>
                      </div>
                      <div class="people_star_num">7</div>
                    </div>

                    <div class="review_rating_fjs">
                      <div class="star_num">
                        3 <i class="fa fa-star"></i>
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
                </div>
                <div class="col-md-7">
                  <a className="btn btn-primary" onClick={openReviewModel}>
                    Rate and Review product
                  </a>

                  <Reviewmodals
                    modalStatus={showReviewModal}
                    toggle={openReviewModel}
                    title="Service Marketplace Script"
                  />
                </div>
                <div class="col-md-12">
                  <div class="customers_review_sec_row">
                    <div class="customer_review_stext">
                      "It is the best service marketplace with all the required
                      functionality at a very affordable price. I checked other
                      website's service marketplace script also but logicspice
                      is the best in the industry.- Thanks!"
                    </div>

                    <div class="who_ratset">
                      <span class="star_review_main">
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star-half" aria-hidden="true"></i>
                      </span>
                      <span id="client-name">Rakesh Verma, India</span>{" "}
                      <span class="ConuntryFlagIcon">
                        <img
                          src="/img/jobboard/india_flag_img.png"
                          alt="mobile app development in India"
                        />
                      </span>
                    </div>
                  </div>
                  <div class="customers_review_sec_row">
                    <div class="customer_review_stext">
                      "Logicspice provides an amazing urban clap clone. Their
                      teams are highly skilled, very responsive and have
                      excellent customer service."
                    </div>

                    <div class="who_ratset">
                      <span class="star_review_main">
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                      </span>
                      Shane, USA{" "}
                      <span class="ConuntryFlagIcon">
                        <img
                          src="/img/jobboard/usa_flag_img.png"
                          alt="mobile app development in USA"
                        />
                      </span>
                    </div>
                  </div>
                  <div class="customers_review_sec_row">
                    <div class="customer_review_stext">
                      "I really loved this script with an amazing user interface
                      with advanced functionality. I Recommend to buy this on
                      demand service marketplace script from Logicspice."
                    </div>

                    <div class="who_ratset">
                      <span class="star_review_main">
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                      </span>
                      Peter, UK{" "}
                      <span class="ConuntryFlagIcon">
                        <img
                          src="/img/jobboard/uk_flag_img.png"
                          alt="mobile app development in UK"
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 Quick_FAQ">
              <h4 class="title_main">FAQ's</h4>
              <div class="MainFaqBx">
                <MDBAccordion v-model="activeItem" borderless>
                  <MDBAccordionItem
                    headerTitle="How can a customer search for service providers around their location?"
                    collapseId="flush-collapse1"
                  >
                    <p>
                      Customer can enter his location in application and search
                      with the keywords relevant to the service he wants and all
                      the service providers that are around will be listed to
                      the customer.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Can the Customer track booked service?"
                    collapseId="flush-collapse2"
                  >
                    <p>
                      Yes, customer can track the booked Service and also
                      customer can view the service status .
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="How many days will it take to implement the customization?"
                    collapseId="flush-collapse4"
                  >
                    <p>
                      Time taken to implement your Service Offering depends on
                      the level of customization and data migration. The time
                      frame is generally 1 week.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="How Can the Service providers manage their booking request that they have received from the customers?"
                    collapseId="flush-collapse5"
                  >
                    <p>
                      Service providers can view a list of booking requests
                      received by them and can accept or reject them and manage
                      the availability status as available or not available by
                      selecting the time slot.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Can customer rate a service provider after they have finished the task?"
                    collapseId="flush-collapse6"
                  >
                    <p>
                      Customer can add reviews & ratings to the Service
                      Providers once they get the service.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Are there any hidden charges or installation charges ?"
                    collapseId="flush-collapse7"
                  >
                    <p>
                      No. we don't have any type of hidden charges and after
                      buying a product, installation will be done from our end
                      which will be free.{" "}
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Do I have the rights to resell the script ?"
                    collapseId="flush-collapse3"
                  >
                    <p>
                      No. You don't have the right to resell the script. All
                      rights will remain with Logicspice only. You can sell the
                      vendor panel too on subscription basis.{" "}
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Along with hosting server details, what other recommendations?"
                    collapseId="flush-collapse8"
                  >
                    <p>
                      We recommend you purchase SSL certificate along with a
                      hosting server, considering that an SSL certificate is
                      necessary for all the websites these days and it provides
                      a secure layer to the website as well.
                    </p>
                  </MDBAccordionItem>
                </MDBAccordion>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="content_area feature_inner" id="features">
        <div class="container">
          <h2 class="title_main">Service Marketplace Script Features</h2>
          <div id="joblboardslide">
            <Slider {...settings}>
              <div class="SliderMainBx">
                <div class="feat-slide-img">
                  <img
                    src="/img/service-marketplace/update-profile.png"
                    alt="Search Service Provider"
                  />
                </div>
                <div class="hands-proved">
                  <div class="titleof_scnew">Update Profile</div>
                </div>
              </div>

              <div class="SliderMainBx">
                <div class="feat-slide-img">
                  <img
                    src="/img/service-marketplace/avaibility.png"
                    alt="Service Provider Listing"
                  />
                </div>
                <div class="hands-proved">
                  <div class="titleof_scnew">My Avaibility</div>
                </div>
              </div>

              <div class="SliderMainBx">
                <div class="feat-slide-img">
                  <img
                    src="/img/service-marketplace/addservice.png"
                    alt="View Service Provider Details"
                  />
                </div>
                <div class="hands-proved">
                  <div class="titleof_scnew">Add Service</div>
                </div>
              </div>

              <div class="SliderMainBx">
                <div class="feat-slide-img">
                  <img
                    src="/img/service-marketplace/mybooking.png"
                    alt="Sending Service Provider Request"
                  />
                </div>
                <div class="hands-proved">
                  <div class="titleof_scnew">My Booking</div>
                </div>
              </div>
            </Slider>
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
                    title="Service Marketplace Script"
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
                  <a title="View Detail" target="_black">
                    <div class="caption">
                      <div class="other-caption-bx">
                        <h3>whatsapp clone</h3>
                        <div class="other-project-logo">
                          <img
                            src="/img/jobboard/ls-chat-logo.png"
                            alt="WhatsApp Clone App"
                          />
                        </div>
                        <p>
                          <span>Readymade WhatsApp Clone Script.</span>{" "}
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div class="col-sm-6 col-md-4">
                <div class="thumbnail">
                  <a title="View Detail" target="_black">
                    <div class="caption">
                      <div class="other-caption-bx">
                        <h3>Fiverr clone</h3>

                        <div class="other-project-logo">
                          <img
                            src="/img/jobboard/gigger_logo_new.png"
                            alt="fiverr-clone"
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
                  <a title="View Detail" target="_black">
                    <div class="caption">
                      <div class="other-caption-bx">
                        <h3>Uship clone</h3>

                        <div class="other-project-logo">
                          <img
                            src="/img/jobboard/logictic_logo_new.png"
                            alt="logistic-marketplace-software"
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
              src="https://www.logicspice.com/img/images/whatsapp.png"
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
