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
import Whylogicspice from "@/app/Components/Whylogicspice";
import Reviewmodals from "@/app/Components/Reviewmodals";
import { Modal, ModalBody } from "react-bootstrap";

const page = () => {
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
  const [activeTab, setActiveTab] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [jobportal, setJobportal] = useState(false);

  const toggleJobPortalModal = () => setJobportal(!jobportal);


  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  const openModal = () => {
    setShowModal(!showModal);
  };
  const openReviewModel = () => {
    setShowReviewModal(!showReviewModal);
  };
  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  const opendiv = (tabId) => {
    setActiveTab(tabId);
  };

  const opendiv2 = (tabId) => {
    setActiveTab(tabId);
  };
  const [userTab, setUserTab] = useState(true);
  const [organizerTab, setOrganizerTab] = useState(false);
  const [adminTab, setAdminTab] = useState(false);
  // const [customerTab, setCustomerTab] = useState(false);

  const handleUserTab = () => {
    setUserTab(true);
    setOrganizerTab(false);
    setAdminTab(false);
  };
  const handleOrganizerTab = () => {
    setUserTab(false);
    setOrganizerTab(true);

    setAdminTab(false);
  };
  const handleAdminTab = () => {
    setUserTab(false);
    setOrganizerTab(false);

    setAdminTab(true);
  };
  return (
    <>
      <NavBar />
      <section className="paid-pro job-portal-banner job-portal-bg fiverr-new-banner NewJobSiteDesign event-new-banner">
        <div className="container">
          <div className="row">
            <div class="col-sm-7 col-md-7">
              <h1>Event Booking Software</h1>
              <div class="both-left-p-sec">
                <h2>
                  Readymade Online Event Booking System that makes seat booking
                  easy for customers{" "}
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
                        title="Please fill the form below and get access to the live demo of Equipment Rental Script
                  .See how it work yourself!"
                      />
                    }
                  </div>
                  <Link
                    class="btn fiverr-buys"
                    href="/softwares/event-booking-software"
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
                    <p>217 Reviews</p>
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

            <div className="col-sm-5 col-md-5">
              <div className="por-mobile-new">
                <img
                  src="/img/softwares-banner-img/lsevent-mobile.png"
                  alt="Event_Booking_Software"
                  className="lazy"
                />
              </div>
            </div>
          </div>
          <div className="job-portal-banner-link">
            <div aria-label="breadcrumb" className="my-breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link href="/">Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link href="/softwares">Softwares</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Event Booking Software
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section className="job-section-top-new">
        <div className="container">
          <p>
            It is an online event seat booking system that lets you set up an
            event and allow your customers to pay online and choose the seats
            they want. With this <b>event booking software</b>, customers can
            book their seats whenever and from wherever they want. This
            application can be used for booking online seats for events, movies,
            bus tours etc.
          </p>
        </div>
      </section>

      <section
        className="client-say crowdfunding-say"
        style={{ backgroundColor: "#fff" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="service-market-ttd-new event-ttd-new">
                <ul>
                  <li>Online Seat Booking</li>
                  <li>Responsive website (mobile friendly)</li>
                  <li>Compatible With All Browsers</li>
                  <li>White labeled script</li>
                  <li>List event easily</li>
                  <li>Secured & Robust</li>
                  <li>One time License Fee</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="job_portal_area">
        <div className="container">
          <div className="job_or_title">
            <h2 className="taxt_tt_job taxt_tt_job_new">
              Seat Booking app Features
            </h2>
          </div>
          <div className="tatxt_txt_job"></div>
          <div className="tab_bbx_job">
            <div className="tab_bbx_top_job">
              <ul className="">
                <li
                  id="tab1_li"
                  className={`jobseeker_app_job ddlj ${
                    userTab ? "active" : ""
                  }`}
                  onClick={() => handleUserTab()}
                >
                  <Link href="javascript:void(0)">
                    <p>Customer Panel</p>
                  </Link>
                </li>
                <li
                  id="tab2_li"
                  className={`emplyer_app_job ddlj ${
                    organizerTab ? "active" : ""
                  }`}
                  onClick={() => handleOrganizerTab()}
                >
                  <Link href="javascript:void(0)">
                    <p>Organizer Panel</p>
                  </Link>
                </li>
                <li
                  id="tab3_li"
                  className={`admin_app_job ddlj ${adminTab ? "active" : ""}`}
                  onClick={() => handleAdminTab()}
                >
                  <Link href="javascript:void(0)">
                    <p>Admin Panel</p>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="tab_contant">
              {userTab && (
                <>
                  <div className="costomer_tab rj" id="tab1">
                    <p className="help-textes">
                      We mainly focus on making a user-friendly customer panel
                      that consists of handy features for customers. Some
                      highlights of our User-panel are:
                    </p>
                    <div className="row">
                      <div className="col-lg-4 col-md-3">
                        <div className="costomer_tab_right costomer_tab_rightleft">
                          <img
                            src="/img/eventbooking/mobile-event-customer.webp"
                            alt="Customer App Feature"
                          />
                        </div>
                      </div>
                      <div className="col-lg-8 col-md-9">
                        <div className="costomer_tab_left costomer_tab_leftright">
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
                                <div className="product-idea">
                                  <p>
                                    Customers can register for the event/show
                                    with their contact details.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/secure_login.png"
                                />
                              </i>
                              <span>
                                Log-in
                                <div className="product-idea">
                                  <p>
                                    Customers can log into the application with
                                    their unique login credentials.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/manage-dashboard.png"
                                />
                              </i>
                              <span>
                                Customer Dashboard
                                <div className="product-idea">
                                  <p>
                                    A customer can view all the information
                                    related to his account and his past
                                    operations regarding events, shows,
                                    bookings, favorites and payment history etc.
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
                                Manage Profile
                                <div className="product-idea">
                                  <p>
                                    Customers can View and Edit their own
                                    profile details.
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
                                View Bookings
                                <div className="product-idea">
                                  <p>
                                    Customers can check booking history and the
                                    details of relevant events or shows.
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
                                Payment History
                                <div className="product-idea">
                                  <p>
                                    Customers can check all their payment
                                    history.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/manage_tickets.png"
                                />
                              </i>
                              <span>
                                Print Tickets
                                <div className="product-idea">
                                  <p>
                                    Customers can also print their tickets for
                                    the shows/events they already booked.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/reviews_ratings.png"
                                />
                              </i>
                              <span>
                                Review/Ratings
                                <div className="product-idea">
                                  <p>
                                    Customers can post their review/ratings for
                                    events or shows they participated in.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/favourite_classified.png"
                                />
                              </i>
                              <span>
                                Favourite List
                                <div className="product-idea">
                                  <p>
                                    A customer can add and remove events in his
                                    favourite list.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/transporter_list.png"
                                />
                              </i>
                              <span>
                                Event listing
                                <div className="product-idea">
                                  <p>
                                    A Visitor can view and search events and can
                                    filter them by category, price or date.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/filter_tickets.png"
                                />
                              </i>
                              <span>
                                Booking Show
                                <div className="product-idea">
                                  <p>
                                    Customers can book tickets for shows of
                                    different events with online payment.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/accepet_reject_reque.png"
                                />
                              </i>
                              <span>
                                Apply Coupon
                                <div className="product-idea">
                                  <p>
                                    a Customer can use discount coupon code,
                                    while booking a show of any event.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/tickets_list.png"
                                />
                              </i>
                              <span>
                                Updates on the Event
                                <div className="product-idea">
                                  <p>
                                    Customers can see any announcements and
                                    updates regarding their events and bookings.
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
              {organizerTab && (
                <>
                  <div className="costomer_tab rj " id="tab2">
                    <p className="help-textes">
                      The organizer panel is where event owners/organisers can
                      login and view whole booking related activities. Here are
                      some features of the organizer panel:
                    </p>
                    <div className="row">
                      <div className="col-lg-4 col-md-3">
                        <div className="costomer_tab_right">
                          <img
                            src="/img/eventbooking/organizer-mobile.webp"
                            alt="Organizer App Features"
                          />
                        </div>
                      </div>
                      <div className="col-lg-8 col-md-9">
                        <div className="costomer_tab_left">
                          <ul>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/ragister-icon.png"
                                />
                              </i>
                              <span>
                                Secure Login
                                <div className="product-idea">
                                  <p>
                                    Our organizer can log in securely into the
                                    portal using credentials.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/manage-dashboard.png"
                                />
                              </i>
                              <span>
                                Organizer Dashboard
                                <div className="product-idea">
                                  <p>
                                    Through this dashboard, the organizer can
                                    view the total number of Booking, Venue,
                                    Event, and Artist.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/manage_address3.png"
                                />
                              </i>
                              <span>
                                Manage Venues
                                <div className="product-idea">
                                  <p>
                                    This enables organizers to view the list of
                                    Venues and manage the venue.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/upcoming_eve.png"
                                />
                              </i>
                              <span>
                                Manage Events
                                <div className="product-idea">
                                  <p>
                                    Organizers can view the list of ongoing
                                    events and manage events.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/articles.png"
                                />
                              </i>
                              <span>
                                Manage Artists
                                <div className="product-idea">
                                  <p>
                                    Organizers can view and manage Artists (add,
                                    edit, delete, activate, deactivate).
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/coupon-codes.png"
                                />
                              </i>
                              <span>
                                Manage Coupons
                                <div className="product-idea">
                                  <p>
                                    Organizers can view and manage discount
                                    coupons (add, edit, delete, activate,
                                    deactivate).
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/view_communica.png"
                                />
                              </i>
                              <span>
                                View Bookings
                                <div className="product-idea">
                                  <p>
                                    Organizer can view the list of bookings by
                                    the customers and can also view the detail
                                    of bookings.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/accepet_reject_reque.png"
                                />
                              </i>
                              <span>
                                Ticket Verification
                                <div className="product-idea">
                                  <p>
                                    Through this, an organizer is able to verify
                                    the tickets and mark the presence of
                                    customers/visitors.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/reviews_ratings.png"
                                />
                              </i>
                              <span>
                                Manage Review & Rating
                                <div className="product-idea">
                                  <p>
                                    Organizers can view and manage list of
                                    reviews(activate, deactivate, delete).
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
                                Payments
                                <div className="product-idea">
                                  <p>
                                    Through this organizer can view the list and
                                    details of payments of bookings.
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
                  <div className="costomer_tab rj" id="tab3">
                    <p className="help-textes">
                      The administration panel is where the
                      administrator/website owner will log into the application
                      and manage Organizers, Customers, bookings, and earnings.
                      Here are some features of Admin-panel:
                    </p>
                    <div className="row">
                      <div className="col-lg-4 col-md-3 ">
                        <div className="costomer_tab_right costomer_tab_rightleft2">
                          <img
                            src="/img/eventbooking/event-website.webp"
                            alt="Admin Panel"
                          />{" "}
                        </div>
                      </div>
                      <div className="col-lg-8 col-md-9">
                        <div className="costomer_tab_left costomer_tab_leftright2">
                          <ul>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/secure_login.png"
                                />
                              </i>
                              <span>
                                Secure Log-in
                                <div className="product-idea">
                                  <p>
                                    The admin can log in securely into the
                                    portal through the required credentials.
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
                                Dashboard
                                <div className="product-idea">
                                  <p>
                                    Through the dashboard, administrator can
                                    view total bookings, business stats, venues,
                                    events, artists, earnings and so on.
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
                                Manage Banners
                                <div className="product-idea">
                                  <p>
                                    Admin can view and manage banners (add,
                                    edit, delete, activate, deactivate).
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/transporter_list.png"
                                />
                              </i>
                              <span>
                                Manage Organizers
                                <div className="product-idea">
                                  <p>
                                    Admin can view and manage organizers (add,
                                    edit, delete, activate, deactivate).
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/self_profile.png"
                                />
                              </i>
                              <span>
                                Manage Customers
                                <div className="product-idea">
                                  <p>
                                    {" "}
                                    Admin can view and manage customers (add,
                                    edit, delete, activate, deactivate)
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/multiple_picture.png"
                                />
                              </i>
                              <span>
                                Event Management
                                <div className="product-idea">
                                  <p>
                                    Admin can view and manage events (add, edit,
                                    delete, Manage Terms & Conditions, Manage
                                    Shows, activate, deactivate).
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/manage_address3.png"
                                />
                              </i>
                              <span>
                                Manage Venues
                                <div className="product-idea">
                                  <p>
                                    Admin can view and manage venues (add, edit,
                                    delete, activate, deactivate).
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/articles.png"
                                />
                              </i>
                              <span>
                                Manage Artists
                                <div className="product-idea">
                                  <p>
                                    Admin can view and manage Artists (add,
                                    edit, delete, activate, deactivate).
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/accepet_reject_reque.png"
                                />
                              </i>
                              <span>
                                Ticket verification
                                <div className="product-idea">
                                  <p>
                                    Through this, admin can also verify the
                                    tickets.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/manage_selling_order.png"
                                />
                              </i>
                              <span>
                                Manage Coupons
                                <div className="product-idea">
                                  <p>
                                    Admin can manage discount coupons (add,
                                    edit, delete, activate, deactivate).
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
                                View Bookings
                                <div className="product-idea">
                                  <p>
                                    Admin can view list of bookings and is also
                                    able to view details of respective bookings.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/reviews_ratings.png"
                                />
                              </i>
                              <span>
                                Manage Review & Rating
                                <div className="product-idea">
                                  <p>
                                    Admin is able to view and manage reviews
                                    (activate, deactivate, delete).
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
                                Payments
                                <div className="product-idea">
                                  <p>
                                    this enables the admin to list the payment
                                    details of the bookings.
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
                                Configuration
                                <div className="product-idea">
                                  <p>
                                    This enables our admin to update his contact
                                    details and configure settings.
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

      <section className="job_product_page_header_in">
        <div className="container">
          <div className="whateissuprt">
            <h2 className="headhs">
              {" "}
              What does our event booking system offer you?
            </h2>
            <p>
              Our Online Event Booking system helps your customer to reserve
              seats for meetings and conferences to social events, weddings,
              parties, movies, bus tours etc.This software provides
              functionality to track all details of booked seats.
            </p>
            <p>
              It is an event booking software which allows you to set up your
              event, manage venues and artists easily.Manages the event timeline
              and critical path to help ensure that no task is missed.also
              manage attendees including online registrations,ticket
              verification, coupon management,budgets, invoicing and much more.
            </p>
            <p>
              We are all-in-one solution designers to streamline your event
              management, help it stand out, and make your job a breeze.
            </p>
          </div>
        </div>
      </section>
      <section
        className="SubscriptionModel"
        id="subscriptionmodel"
        style={{ background: "#f1f1f1" }}
      >
        <div className="container">
          <div className="job_or_title">
            <h2 className="taxt_tt_job">Subscription Model</h2>
            <br />
            <div className="SubscriptionModelBx">
              <p>
                Experience convenience like never before with our
                subscription-based hassle-free model, available at just USD 145
                per month.
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
                    Zero Setup Fees:- There are no additional charges for the
                    setup and installation of the software, making it easier for
                    customers to get started.
                  </span>
                </li>
                <li>
                  <span>
                    Unlimited Event Listings: List as many events as you need
                    without any limitations.
                  </span>
                </li>
                <li>
                  <span>
                    Enhanced Communication: Avail yourself of 5 domain-based
                    email accounts to enhance your professional communication.
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
                    issues arise, our dedicated technical team will promptly
                    address them during office hours.
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
                      title="Please fill the form below and get access to the live demo of Equipment Rental Script
                  .See how it work yourself!"
                    />
                  }
                </div>
                <Link
                  class="btn fiverr-buys"
                  href="/softwares/event-booking-software"
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
                    <p>217 Reviews</p>
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
              <Link href="#" onClick={toggleModal}>
                contact us
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="job_portal_area job_portal_area_food">
        <div className="container">
          <div className="job_or_title">
            <h2 className="taxt_tt_job">
              Logicspice is the best partner for your Event Booking solution!
            </h2>
            <br />
            <div className="logic-parter">
            <a
                class=""
                aria-controls="jobportal"
                onClick={toggleJobPortalModal}
              >
                <i class="fa fa-cogs" aria-hidden="true"></i>
                <span>How It Works</span>
              </a>
              <a onClick={toggleInfo} class="ylogicspice">
                <i>
                  <img src="/img/images/why-logic-icon.png" alt="" class="" />
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
              src="/img/fiverrclone/gigger-how-it-works.jpg"
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
        </div>

      <section className="used_technology_section" id="technologies">
        <div className="container">
          <h4 className="title_main">
            <span>Used Technologies</span> and Server Requirements
          </h4>
          <div className="row used_technology_section_dataa">
            <div className="col-sm-6">
              <ul>
                <li data-aos="fade-up">
                  <div className="icntechimg">
                    <img
                      src="/img/jobboard/LaravelLogo.png"
                      alt="Laravel Development"
                    />
                  </div>
                  <div className="icntechimg_nm">Laravel</div>
                </li>
                <li data-aos="fade-up">
                  <div className="icntechimg">
                    <img src="/img/jobboard/html-5.png" alt="HTML5" />
                  </div>
                  <div className="icntechimg_nm">HTML5</div>
                </li>
                <li data-aos="fade-up">
                  <div className="icntechimg">
                    <img src="/img/jobboard/tech_mysql_icon.png" alt="MySQL" />
                  </div>
                  <div className="icntechimg_nm">MySQL</div>
                </li>
                <li data-aos="fade-up">
                  <div className="icntechimg">
                    <img
                      src="/img/jobboard/tech_apache_icon.png"
                      alt="Apache"
                    />
                  </div>
                  <div className="icntechimg_nm">Apache</div>
                </li>
              </ul>
            </div>
            <div className="col-sm-6">
              <ul className="list_detail">
                <li className="same aos-init aos-animate" data-aos="fade-up">
                  <b>Browsers - </b> Firefox 32.6+, Chrome 20.0+, Opera 30.0+,
                  Safari 5+, IE 9+
                </li>
                <li className="same aos-init aos-animate" data-aos="fade-up">
                  <b>Framework - </b> Laravel 6+
                </li>
                <li className="same aos-init aos-animate" data-aos="fade-up">
                  <b>Language - </b> PHP 7.3+, AJAX, jQuery
                </li>
                <li className="other aos-init aos-animate" data-aos="fade-up">
                  <b>Design - </b> HTML 5, CSS 3, JavaScript, Bootstrap4.3
                </li>
                <li className="other aos-init" data-aos="fade-up">
                  <b>Database - </b> MySQL 5.5+{" "}
                </li>
                <li className="other aos-init" data-aos="fade-up">
                  <b>Server - </b> Apache 2.4+
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="whatsupport_section" id="support">
        <div className="container">
          <h4 className="title_main">
            What <span>support</span> you will get?
          </h4>
          <div className="supportsetting">
            <ul>
              <li data-aos="fade">
                <div className="supportsetting_icn">
                  <img
                    src="/img/jobboard/month_half_icon.png"
                    alt="manager_icn"
                  />
                </div>
                <div className="supportsettingtext">Free Support</div>
              </li>
              <li data-aos="fade">
                <div className="supportsetting_icn">
                  <img
                    src="/img/jobboard/free_remove_icon.png"
                    alt="manager_icn"
                  />
                </div>
                <div className="supportsettingtext">
                  White Labeled <br />
                  Software
                </div>
              </li>
              <li data-aos="fade">
                <div className="supportsetting_icn">
                  <img src="/img/jobboard/free_instal.png" alt="manager_icn" />
                </div>
                <div className="supportsettingtext">Free Installation</div>
              </li>
              <li data-aos="fade">
                <div className="supportsetting_icn">
                  <img
                    src="/img/jobboard/access_secure_code_icon.png"
                    alt="manager_icn"
                  />
                </div>
                <div className="supportsettingtext">Easily scalable</div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="su_rev_section" id="reviews">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h4 className="title_main">Customer Reviews </h4>
              <div className="row">
                <div className="col-md-5">
                  <div className="outof_rating">
                    <div className="main-rait">
                      <span>
                        <i className="fa fa-star"></i>{" "}
                        <span>4.7 out of 5 stars</span>
                      </span>
                    </div>
                    <div className="review_rating_fjs">
                      <div className="star_num">
                        5 <i className="fa fa-star"></i>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar progress-bar-danger progress-bar-striped"
                          role="progressbar"
                          aria-valuenow="70"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: "100%" }}
                        ></div>
                      </div>
                      <div className="people_star_num">204</div>
                    </div>

                    <div className="review_rating_fjs">
                      <div className="star_num">
                        4 <i className="fa fa-star"></i>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar progress-bar-danger progress-bar-striped"
                          role="progressbar"
                          aria-valuenow="70"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: "60%" }}
                        ></div>
                      </div>
                      <div className="people_star_num">13</div>
                    </div>

                    <div className="review_rating_fjs">
                      <div className="star_num">
                        3 <i className="fa fa-star"></i>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar progress-bar-danger progress-bar-striped"
                          role="progressbar"
                          aria-valuenow="70"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: "0%" }}
                        ></div>
                      </div>
                      <div className="people_star_num">0</div>
                    </div>

                    <div className="review_rating_fjs">
                      <div className="star_num">
                        2 <i className="fa fa-star"></i>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar progress-bar-danger progress-bar-striped"
                          role="progressbar"
                          aria-valuenow="70"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: "0%" }}
                        ></div>
                      </div>
                      <div className="people_star_num">0</div>
                    </div>

                    <div className="review_rating_fjs">
                      <div className="star_num">
                        1 <i className="fa fa-star"></i>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar progress-bar-danger progress-bar-striped"
                          role="progressbar"
                          aria-valuenow="70"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: "0%" }}
                        ></div>
                      </div>
                      <div className="people_star_num">0</div>
                    </div>
                  </div>
                </div>
                <div class="col-md-7">
                  <a class="btn btn-primary" onClick={openReviewModel}>
                    Rate and Review product
                  </a>

                  <Reviewmodals
                    modalStatus={showReviewModal}
                    toggle={openReviewModel}
                    title="Event Booking"
                  />
                </div>
                <div className="col-md-12">
                  <div className="customers_review_sec_row">
                    {/* <!--                    <div className="customers_review_sec_row_ra"><div className="starget">5 <i className="fa fa-star" aria-hidden="true"></i></div><span>Build an Online Store</span></div>--> */}

                    <div className="customer_review_stext">
                      "I have purchased this script and has constructed my own
                      web-site. This was an easy task because of logicspice's
                      free installation and support. Keep up the good work. I
                      will be back for more in the future."
                    </div>
                    <div
                      className="who_ratset"
                      style={{ textAlign: "right", paddingRight: "17px" }}
                    >
                      <span
                        className="star_review_main"
                        style={{ paddingRight: "10px", color: "gold" }}
                      >
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star-half" aria-hidden="true"></i>
                      </span>
                      John, USA{" "}
                      <span>
                        <img
                          src="/img/jobboard/usa_flag_img.png"
                          alt="mobile app development in USA"
                        />
                      </span>
                    </div>
                  </div>
                  <div className="customers_review_sec_row">
                    {/* <!--                    <div className="customers_review_sec_row_ra"><div className="starget">5 <i className="fa fa-star" aria-hidden="true"></i></div><span>Build an Online Store</span></div>--> */}
                    <div className="customer_review_stext" id="fiveer-clone">
                      "This is the best Event Booking Software. Thanks for your
                      great efforts and support while installing the script.
                      Your prompt service regarding a few minor issues was
                      superb."
                    </div>

                    <div
                      className="who_ratset"
                      style={{ textAlign: "right", paddingRight: "17px" }}
                    >
                      <span
                        className="star_review_main"
                        style={{ paddingRight: "10px", color: "gold" }}
                      >
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                      </span>
                      <span id="client-name">D. Smith, Germany</span>{" "}
                      <span>
                        <img
                          src="/img/jobboard/german.png"
                          alt="mobile app development in german"
                        />
                      </span>
                    </div>
                  </div>
                  <div className="customers_review_sec_row">
                    {/* <!--                    <div className="customers_review_sec_row_ra"><div className="starget">5 <i className="fa fa-star" aria-hidden="true"></i></div><span>Build an Online Store</span></div>--> */}
                    <div className="customer_review_stext">
                      "Recently I bought this script from logicspice and it
                      worked really nice, it helped my business to gain more
                      efficiency. I recommend for all whom looking for a Event
                      Booking Software, it's really nice."
                    </div>
                    <div
                      className="who_ratset"
                      style={{ textAlign: "right", paddingRight: "17px" }}
                    >
                      <span
                        className="star_review_main"
                        style={{ paddingRight: "10px", color: "gold" }}
                      >
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                      </span>
                      mike wilshon, AUS{" "}
                      <span>
                        <img
                          src="/img/jobboard/australia_flag_img.png"
                          alt="mobile app development in USA"
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 Quick_FAQ">
              <h4 className="title_main">FAQ's</h4>
              <div className="MainFaqBx">
                <MDBAccordion v-model="activeItem" borderless>
                  <MDBAccordionItem
                    headerTitle="Once I purchase this script, how many days will it take to go online?"
                    collapseId="flush-collapse1"
                  >
                    <p>
                      It takes 2 working days generally, provided all the
                      information to make it live has been given.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Can I get help for customization?"
                    collapseId="flush-collapse2"
                  >
                    <p>
                      Yes, we have an experienced team of developers to help you
                      with customization as per your requirements.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Can I resell the script? Will I have rights over the script code?"
                    collapseId="flush-collapse3"
                  >
                    <p>
                      No, You can't resell the script. All rights will remain
                      with Logicspice only.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Will I be able to use it on multiple domains, after I purchase this script?"
                    collapseId="flush-collapse4"
                  >
                    <p>
                      You will be licensed to use it only for the domain, you
                      purchased for.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Can I use your script without any programming skills?"
                    collapseId="flush-collapse5"
                  >
                    <p>
                      Yes, You can directly install our given script and can
                      manage everything in the admin panel which is very user
                      friendly.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Along with hosting server details, what other recommendations?"
                    collapseId="flush-collapse12"
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

      <section className="content_area feature_inner" id="features">
        <div className="container">
          <h2 className="title_main">Event Booking Software Features</h2>
          {/* <div className="sliders-div"> */}
          <ul className="nav nav-tabs-slide">
            <li
              id="features1_li"
              className={`${userTab ? "active" : ""}`}
              onClick={() => handleUserTab()}
            >
              <a>User Features</a>
            </li>
            <li
              id="features2_li"
              className={`${organizerTab ? "active" : ""}`}
              onClick={() => handleOrganizerTab()}
            >
              <a>Organizer Features</a>
            </li>
            <li
              id="features3_li"
              className={`${adminTab ? "active" : ""}`}
              onClick={() => handleAdminTab()}
            >
              <a>Admin Panel</a>
            </li>
          </ul>

          
          <div className="tab_contant">
            {userTab && (
              <>
                <div id="joblboardslide">
                  <Slider {...settings}>
                    <div class="SliderMainBx">
                      <div className="feat-slide-img">
                        <img
                          src="/img/inventory-management/admin-dashboard.jpg"
                          alt="admin-dashboard"
                        />
                      </div>
                      <div className="hands-proved">
                        <div className="titleof_scnew">Admin Dashboard</div>
                      </div>
                    </div>
                    <div class="SliderMainBx">
                      <div className="feat-slide-img">
                        <img
                          src="/img/inventory-management/supplier.jpg"
                          alt="Supplier"
                        />
                      </div>
                      <div className="hands-proved">
                        <div className="titleof_scnew">Supplier</div>
                      </div>
                    </div>
                    <div class="SliderMainBx">
                      <div className="feat-slide-img">
                        <img
                          src="/img/inventory-management/customer.jpg"
                          alt="customer"
                        />
                      </div>
                      <div className="hands-proved">
                        <div className="titleof_scnew">Customer</div>
                      </div>
                    </div>
                    <div class="SliderMainBx">
                      <div className="feat-slide-img">
                        <img
                          src="/img/inventory-management/category-list.jpg"
                          alt="category-list"
                        />
                      </div>
                      <div className="hands-proved">
                        <div className="titleof_scnew">Category List</div>
                      </div>
                    </div>
                    <div class="SliderMainBx">
                      <div className="feat-slide-img">
                        <img
                          src="/img/inventory-management/products-management.jpg"
                          alt="Products Management"
                        />
                      </div>
                      <div className="hands-proved">
                        <div className="titleof_scnew">Products Management</div>
                      </div>
                    </div>
                    <div class="SliderMainBx">
                      <div class="feat-slide-img">
                        <img
                          src="/img/jobboard/membership_plan_job_portal_script.png"
                          alt="Membership Plan"
                        />
                      </div>
                      <div class="hands-proved">
                        <div class="titleof_scnew">Membership Plan</div>
                        <div class="pro-feat-detai">
                          Employers buy membership plan which suits their
                          requirement best.They can renew or update your
                          membership plan at any time.
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </>
            )}
          </div>
          {/* </div> */}
        </div>
      </section>

      <div className="clearfix"></div>
      <section className="enq-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 text-center">
              {/* <Link
                href="#"
                id=""
                className="btn btn-primary"
                onClick={() => openEnquiryModal()}
              >
                Enquire Now
              </Link> */}
              <div className="btn btn-primary" onClick={openModal}>
                <button>Enquire Now</button>
                {
                  <Enquirymodal
                    modalStatus={showModal}
                    toggle={openModal}
                    title="Please fill the form below and get access to the live demo of Equipment Rental Script
                  .See how it work yourself!"
                  />
                }
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="latest_feature_product">
        <div className="container">
          <h2 className="title_main">Other Popular Products</h2>
          <div className="other-product-box">
            <div className="row">
              <div className="col-sm-6 col-md-4">
                <div className="thumbnail">
                  <Link
                    title="View Detail"
                    target="_black"
                    href="/softwares/ebay-clone'"
                  >
                    <div className="caption">
                      <div className="other-caption-bx">
                        <h3>eBay Clone</h3>
                        <div className="other-project-logo">
                          <img
                            src="/img/jobboard/ecart_new.png"
                            alt="eBay Clone Script Logo"
                            className=""
                          />
                        </div>
                        <p>
                          <span>
                            eBay - A multi vendor eCommerce script, specially
                            designed.
                          </span>
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="thumbnail">
                  <Link
                    title="View Detail"
                    target="_black"
                    href="/softwares/appointment-scheduling-software'"
                  >
                    <div className="caption">
                      <div className="other-caption-bx">
                        <h3>Appointment Booking System</h3>

                        <div className="other-project-logo">
                          <img
                            src="/img/jobboard/abs_logo_new.png"
                            alt="Fiverr Clone Script Logo"
                            className=""
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
                  </Link>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="thumbnail">
                  <Link
                    title="View Detail"
                    target="_black"
                    href="/softwares/news-management-system'"
                  >
                    <div className="caption">
                      <div className="other-caption-bx">
                        <h3>News Management System</h3>

                        <div className="other-project-logo">
                          <img
                            src="/img/jobboard/news_logo_new.png"
                            alt="news-management-system"
                            className=""
                          />
                        </div>
                        <p>
                          <span>
                            Digital media is playing a major role in authentic
                            flow of information.
                          </span>{" "}
                        </p>
                      </div>
                    </div>
                  </Link>
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