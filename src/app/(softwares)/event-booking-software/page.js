"use client";
import React, { useEffect, useState, lazy, Suspense } from "react";
import Footer from "@/app/Components/Footer";
import NavBar from "@/app/Components/Navbar";
import "@/app/(softwares)/softwares.css";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Contactusmodel from "@/app/Components/Contactusmodel";
// import Enquirymodal from "@/app/Components/Enquirymodal";
// import Whylogicspice from "@/app/Components/Whylogicspice";
// import Reviewmodals from "@/app/Components/Reviewmodals";
import { Modal, ModalBody } from "react-bootstrap";
import axios from "axios";
import BaseAPI from "@/app/BaseAPI/BaseAPI";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
// import SoftwareEnquiry from "@/app/Components/SoftwareEnquiry";
// import GetDemoEnquiry from "@/app/Components/GetDemoEnquiry";
import "../../../../public/css/font-awesome.css";

const Contactusmodel = lazy(() => import("@/app/Components/Contactusmodel"));
const Enquirymodal = lazy(() => import("@/app/Components/Enquirymodal"));
const Whylogicspice = lazy(() => import("@/app/Components/Whylogicspice"));
const Reviewmodals = lazy(() => import("@/app/Components/Reviewmodals"));
const SoftwareEnquiry = lazy(() => import("@/app/Components/SoftwareEnquiry"));
const GetDemoEnquiry = lazy(() => import("@/app/Components/GetDemoEnquiry"));

const Page = () => {
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

  const [pageData, setPageData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(
        BaseAPI + "/product/Details/event-booking-software"
      );
      // console.log(response.data.data)
      setPageData(response.data.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&::before": {
      display: "none",
    },
  }));

  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor: "rgba(0, 0, 0, .03)",
    flexDirection: "row-reverse",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
      transform: "rotate(90deg)",
    },
    "& .MuiAccordionSummary-content": {
      marginLeft: theme.spacing(1),
    },
    // Change the background color when expanded
    "&.Mui-expanded": {
      backgroundColor: "#dbdbdb", // You can adjust this color
    },
  }));

  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: "1px solid rgba(0, 0, 0, .125)",
  }));

  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  useEffect(() => {
    getData();
  }, []);

  const [demoAccessModal, setDemoAccessModal] = useState(false);
  const openDemoAccessModal = () => {
    // console.log(showModal);

    setDemoAccessModal(!demoAccessModal);
  };

  return (
    <>
      <NavBar />
      <section className="paid-pro job-portal-banner job-portal-bg fiverr-new-banner NewJobSiteDesign event-new-banner">
        <div className="container">
          <div className="row">
            <div className="col-sm-7 col-md-7">
              <h1>Event Booking Software</h1>
              <div className="both-left-p-sec">
                <h2>
                  Readymade Online Event Booking System that makes seat booking
                  easy for customers{" "}
                </h2>
              </div>
              <div className="job-valu">
                <div className="portal-price NewPriceDesign">
                  <h4>
                    $45 USD<small>/mo</small>{" "}
                  </h4>
                  <div className="OfferPriceProduct">
                    <strike className="srik_cls">$175 USD</strike>
                    <span className="MoreInfo">
                      <i>
                        <Image
                          unoptimized={true}
                          src="/img/softwares-banner-img/more-info.png"
                          alt=""
                          width={100}
                          height={100}
                        />
                      </i>
                      <p>Limited Period Offer for First Year</p>
                    </span>
                  </div>
                </div>
                <div className="job-valu-btn">
                  <span>Fill your basic details and</span>
                  <div
                    className=" btn-get"
                    onClick={openDemoAccessModal}
                    style={{ textAlign: "center" }}
                  >
                    <button>Get Demo Access!</button>
                    {/* {
                      <GetDemoEnquiry
                        modalStatus={demoAccessModal}
                        toggle={openDemoAccessModal}
                        title="Please fill the form below and get access to the live demo of Event Booking Software. See how it works yourself!"
                      />
                    } */}

                    <Suspense fallback={<div>Loading ...</div>}>
                      {demoAccessModal && (
                        <SoftwareEnquiry
                          modalStatus={demoAccessModal}
                          toggle={openDemoAccessModal}
                          title="Please fill the form below and get access to the live demo of Event Booking Software. See how it works yourself!"
                        />
                      )}
                    </Suspense>
                  </div>
                  <Link
                    className="btn fiverr-buys"
                    href="/buy-now/event-booking-software"
                  >
                    Buy Now
                  </Link>
                </div>
                <div className="SubscriptionPrice">
                  <div className="line-border NewLineBoader">
                    <Image
                      unoptimized={true}
                      alt="crowd_funding_script"
                      src="/img/jobboard/stars.png"
                      width={100}
                      height={100}
                    />
                    <p>217 Reviews</p>
                  </div>
                </div>
              </div>
              <div className="jocpp">
                <ul className="job-pr-icon">
                  <li>
                    <i className="fa fa-globe"></i>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-sm-5 col-md-5">
              <div className="por-mobile-new">
                {/* <Image
                  unoptimized={true}
                  src="/img/softwares-banner-img/lsevent-mobile.png"
                  alt="Event_Booking_Software"
                  className="lazy"
                  width={316}
                  height={500 / (100 / 100)}
                /> */}

                {/* <Image
                  src="/img/softwares-banner-img/lsevent-mobile.png"
                  alt="Event_Booking_Software"
                  width={316}
                  height={500}
                  priority // ✅ Ensures it loads first for better LCP
                  fetchPriority="high" // ✅ Tells browser it's most important
                  loading="eager" // ✅ Ensures it loads immediately
                  quality={75} // ✅ Reduces file size, 75 is a good balance
                  placeholder="blur" // ✅ Displays a low-quality preview while loading
                  blurDataURL="/img/softwares-banner-img/lsevent-mobile-blur.jpg" // ✅ Placeholder for faster perception of load
                  style={{
                    objectFit: "cover",
                    maxWidth: "100%",
                    height: "auto",
                  }} // ✅ Ensures responsiveness
                /> */}

                <Image
                  src="/img/softwares-banner-img/lsevent-mobile.png"
                  alt="Event_Booking_Software"
                  width={316}
                  height={500}
                  layout="intrinsic" // ✅ Ensures it reserves space before loading
                  priority
                  fetchPriority="high"
                  loading="eager"
                  quality={75}
                  placeholder="blur"
                  blurDataURL="/img/softwares-banner-img/lsevent-mobile-blur.jpg"
                  style={{
                    objectFit: "cover",
                    maxWidth: "100%",
                    height: "auto",
                  }}
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
              Event Booking app Features
            </h2>
          </div>
          <div className="tatxt_txt_job"></div>
          <div className="tab_bbx_job">
            <div className="tab_bbx_top_job">
              <ul className="fiverrClone">
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
                          <Image
                            unoptimized={true}
                            src="/img/eventbooking/mobile-event-customer.webp"
                            alt="Customer App Feature"
                            width={300}
                            height={300}
                          />
                        </div>
                      </div>
                      <div className="col-lg-8 col-md-9">
                        <div className="costomer_tab_left costomer_tab_leftright">
                          <ul>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/ragister-icon.png"
                                  width={100}
                                  height={100}
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
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/secure_login.png"
                                  width={100}
                                  height={100}
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
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/manage-dashboard.png"
                                  width={100}
                                  height={100}
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
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/manage_profile.png"
                                  width={100}
                                  height={100}
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
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/outstanding_booking.png"
                                  width={100}
                                  height={100}
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
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/payment_history.png"
                                  width={100}
                                  height={100}
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
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/manage_tickets.png"
                                  width={100}
                                  height={100}
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
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/reviews_ratings.png"
                                  width={100}
                                  height={100}
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
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/favourite_classified.png"
                                  width={100}
                                  height={100}
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
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/transporter_list.png"
                                  width={100}
                                  height={100}
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
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/filter_tickets.png"
                                  width={100}
                                  height={100}
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
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/accepet_reject_reque.png"
                                  width={100}
                                  height={100}
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
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/tickets_list.png"
                                  width={100}
                                  height={100}
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
                          <Image
                            unoptimized={true}
                            src="/img/eventbooking/organizer-mobile.webp"
                            alt="Organizer App Features"
                            width={300}
                            height={100}
                          />
                        </div>
                      </div>
                      <div className="col-lg-8 col-md-9">
                        <div className="costomer_tab_left">
                          <ul>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/ragister-icon.png"
                                  width={100}
                                  height={100}
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
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/manage-dashboard.png"
                                  width={100}
                                  height={100}
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
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/manage_address3.png"
                                  width={100}
                                  height={100}
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
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/upcoming_eve.png"
                                  width={100}
                                  height={100}
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
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/articles.png"
                                  width={100}
                                  height={100}
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
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/coupon-codes.png"
                                  width={100}
                                  height={100}
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
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/view_communica.png"
                                  width={100}
                                  height={100}
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
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/accepet_reject_reque.png"
                                  width={100}
                                  height={100}
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
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/reviews_ratings.png"
                                  width={100}
                                  height={100}
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
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/payServices.png"
                                  width={100}
                                  height={100}
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
                          <Image
                            unoptimized={true}
                            src="/img/eventbooking/event-website.webp"
                            alt="Admin Panel"
                            width={300}
                            height={100}
                          />{" "}
                        </div>
                      </div>
                      <div className="col-lg-8 col-md-9">
                        <div className="costomer_tab_left costomer_tab_leftright2">
                          <ul>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/secure_login.png"
                                  width={100}
                                  height={100}
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
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/admin_dash.png"
                                  width={100}
                                  height={100}
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
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/manage_banner.png"
                                  width={100}
                                  height={100}
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
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/transporter_list.png"
                                  width={100}
                                  height={100}
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
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/self_profile.png"
                                  width={100}
                                  height={100}
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
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/multiple_picture.png"
                                  width={100}
                                  height={100}
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
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/manage_address3.png"
                                  width={100}
                                  height={100}
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
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/articles.png"
                                  width={100}
                                  height={100}
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
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/accepet_reject_reque.png"
                                  width={100}
                                  height={100}
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
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/manage_selling_order.png"
                                  width={100}
                                  height={100}
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
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/outstanding_booking.png"
                                  width={100}
                                  height={100}
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
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/reviews_ratings.png"
                                  width={100}
                                  height={100}
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
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/payServices.png"
                                  width={100}
                                  height={100}
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
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/configuration.png"
                                  width={100}
                                  height={100}
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
                subscription-based hassle-free model, available at just{" "}
                <strong>USD 45 per month , </strong>
                limited offer available for the first year.
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
                    <strong>Zero Setup Fees:-</strong> There are no additional
                    charges for the setup and installation of the software,
                    making it easier for customers to get started.
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
                    issues arise, <strong>our dedicated technical team </strong>{" "}
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

      <section id="subscriptionprice" className="SubscriptionpriceSection">
        <div className="container">
          <h2 className="taxt_tt_job">Delivered Solution</h2>
          <div className="SubscriptionModelPrice">
            <div className="SubscriptionModelPriceBx">
              <h4>
                {pageData.currency_symbol}
                {pageData.price}
                <span className="sml_labl"> {pageData.name}</span>
              </h4>
              <strike className="srik_cls">
                {pageData.currency_symbol}
                {pageData.other_price}
                <span className="sml_labl"> {pageData.name}</span>
              </strike>
              <div className="SubscriptionModelPriceBtn">
                <div className="btn btn-get" onClick={openDemoAccessModal}>
                  <button>Get Demo Access!</button>
                  {
                    <GetDemoEnquiry
                      modalStatus={demoAccessModal}
                      toggle={openDemoAccessModal}
                      title="Please fill the form below and get access to the live demo of Event Booking Software. See how it works yourself!"
                    />
                  }
                </div>
                <Link
                  className="btn fiverr-buys"
                  href="/buy-now/event-booking-software"
                >
                  Buy Now
                </Link>
              </div>
              <div className="jocpp">
                <ul className="job-pr-icon">
                  <li>
                    <i className="fa fa-globe"></i>
                  </li>
                </ul>
                <div className="portel-btnbx">
                  <div className="line-border NewLineBoader">
                    <Image
                      unoptimized={true}
                      src="/img/jobboard/stars.png"
                      alt=""
                      className="lazy"
                      width={100}
                      height={100}
                    />
                    <p>217 Reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="SubscriptionModelBx">
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
                className=""
                aria-controls="jobportal"
                onClick={toggleJobPortalModal}
              >
                <i className="fa fa-cogs" aria-hidden="true"></i>
                <span>How It Works</span>
              </a>
              <a onClick={toggleInfo} className="ylogicspice">
                <i>
                  <Image
                    unoptimized={true}
                    src="/img/images/why-logic-icon.png"
                    alt=""
                    className=""
                    width={20}
                    height={100}
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
            <Image
              unoptimized={true}
              src="/img/eventbooking/event-how-it-works.webp"
              alt="icon"
              title=""
              className="img-fluid"
              width={900}
              height={100}
            />
          </Modal.Body>
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
                    <Image
                      unoptimized={true}
                      src="/img/jobboard/LaravelLogo.png"
                      alt="Laravel Development"
                      width={60}
                      height={100}
                    />
                  </div>
                  <div className="icntechimg_nm">Laravel</div>
                </li>
                <li data-aos="fade-up">
                  <div className="icntechimg">
                    <Image
                      unoptimized={true}
                      src="/img/jobboard/html-5.png"
                      alt="HTML5"
                      width={50}
                      height={100}
                    />
                  </div>
                  <div className="icntechimg_nm">HTML5</div>
                </li>
                <li data-aos="fade-up">
                  <div className="icntechimg">
                    <Image
                      unoptimized={true}
                      src="/img/jobboard/tech_mysql_icon.png"
                      alt="MySQL"
                      width={60}
                      height={100}
                    />
                  </div>
                  <div className="icntechimg_nm">MySQL</div>
                </li>
                <li data-aos="fade-up">
                  <div className="icntechimg">
                    <Image
                      unoptimized={true}
                      src="/img/jobboard/tech_apache_icon.png"
                      alt="Apache"
                      width={60}
                      height={100}
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
                  <Image
                    unoptimized={true}
                    src="/img/jobboard/month_half_icon.png"
                    alt="manager_icn"
                    width={60}
                    height={100}
                  />
                </div>
                <div className="supportsettingtext">Free Support</div>
              </li>
              <li data-aos="fade">
                <div className="supportsetting_icn">
                  <Image
                    unoptimized={true}
                    src="/img/jobboard/free_remove_icon.png"
                    alt="manager_icn"
                    width={60}
                    height={100}
                  />
                </div>
                <div className="supportsettingtext">
                  White Labeled <br />
                  Software
                </div>
              </li>
              <li data-aos="fade">
                <div className="supportsetting_icn">
                  <Image
                    unoptimized={true}
                    src="/img/jobboard/free_instal.png"
                    alt="manager_icn"
                    width={60}
                    height={100}
                  />
                </div>
                <div className="supportsettingtext">Free Installation</div>
              </li>
              <li data-aos="fade">
                <div className="supportsetting_icn">
                  <Image
                    unoptimized={true}
                    src="/img/jobboard/access_secure_code_icon.png"
                    alt="manager_icn"
                    width={50}
                    height={100}
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
                        <span>4.8 out of 5 stars</span>
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
                      <div className="people_star_num">174</div>
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
                      <div className="people_star_num">43</div>
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
                <div className="col-md-7">
                  <a className="btn btn-primary" onClick={openReviewModel}>
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
                      &quot;I have purchased this script and has constructed my
                      own web-site. This was an easy task because of
                      logicspice&apos;s free installation and support. Keep up
                      the good work. I will be back for more in the
                      future.&quot;
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
                        <Image
                          unoptimized={true}
                          src="/img/jobboard/usa_flag_img.png"
                          alt="mobile app development in USA"
                          width={20}
                          height={100}
                        />
                      </span>
                    </div>
                  </div>
                  <div className="customers_review_sec_row">
                    {/* <!--                    <div className="customers_review_sec_row_ra"><div className="starget">5 <i className="fa fa-star" aria-hidden="true"></i></div><span>Build an Online Store</span></div>--> */}
                    <div className="customer_review_stext" id="fiveer-clone">
                      &quot;This is the best Event Booking Software. Thanks for
                      your great efforts and support while installing the
                      script. Your prompt service regarding a few minor issues
                      was superb.&quot;
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
                        <Image
                          unoptimized={true}
                          src="/img/jobboard/german.png"
                          alt="mobile app development in german"
                          width={20}
                          height={100}
                        />
                      </span>
                    </div>
                  </div>
                  <div className="customers_review_sec_row">
                    <div className="customer_review_stext">
                      &quot;Recently I bought this script from logicspice and it
                      worked really nice, it helped my business to gain more
                      efficiency. I recommend for all whom looking for a Event
                      Booking Software, it&apos;s really nice.&quot;
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
                        <Image
                          unoptimized={true}
                          src="/img/jobboard/australia_flag_img.png"
                          alt="mobile app development in USA"
                          width={20}
                          height={100}
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 Quick_FAQ">
              <h4 className="title_main">FAQ&apos;s</h4>
              <div className="MainFaqBx">
                <Accordion
                  expanded={expanded === "panel1"}
                  onChange={handleChange("panel1")}
                >
                  <AccordionSummary
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                  >
                    <Typography>
                      Once I purchase this script, how many days will it take to
                      go online?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      It generally takes 2 working days, provided all the
                      necessary information has been given.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  expanded={expanded === "panel2"}
                  onChange={handleChange("panel2")}
                >
                  <AccordionSummary
                    aria-controls="panel2d-content"
                    id="panel2d-header"
                  >
                    <Typography>Can I get help for customization?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Yes, we have an experienced team of developers to help you
                      with customization as per your requirements.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  expanded={expanded === "panel3"}
                  onChange={handleChange("panel3")}
                >
                  <AccordionSummary
                    aria-controls="panel3d-content"
                    id="panel3d-header"
                  >
                    <Typography>
                      Can I resell the script? Will I have rights over the
                      script code?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      No, you can&apos;t resell the script. All rights will
                      remain with Logicspice only.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  expanded={expanded === "panel4"}
                  onChange={handleChange("panel4")}
                >
                  <AccordionSummary
                    aria-controls="panel4d-content"
                    id="panel4d-header"
                  >
                    <Typography>
                      Will I be able to use it on multiple domains after I
                      purchase this script?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      You will be licensed to use it only for the domain you
                      purchased it for.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  expanded={expanded === "panel5"}
                  onChange={handleChange("panel5")}
                >
                  <AccordionSummary
                    aria-controls="panel5d-content"
                    id="panel5d-header"
                  >
                    <Typography>
                      Can I use your script without any programming skills?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Yes, you can directly install our script and manage
                      everything through the admin panel, which is very
                      user-friendly.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  expanded={expanded === "panel6"}
                  onChange={handleChange("panel6")}
                >
                  <AccordionSummary
                    aria-controls="panel6d-content"
                    id="panel6d-header"
                  >
                    <Typography>
                      Along with hosting server details, what other
                      recommendations?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      We recommend you purchase an SSL certificate along with a
                      hosting server, as it provides a secure layer to your
                      website.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content_area feature_inner" id="features">
        <div className="container">
          <h2 className="title_main">Event Booking Software Features</h2>

          <ul className="nav nav-tabs-slide">
            <li
              id="features1_li"
              className={`${userTab ? "active" : ""}`}
              onClick={() => handleUserTab()}
              style={{ cursor: "pointer" }}
            >
              <a>User Features</a>
            </li>
            <li
              id="features2_li"
              className={`${organizerTab ? "active" : ""}`}
              onClick={() => handleOrganizerTab()}
              style={{ cursor: "pointer" }}
            >
              <a>Organizer Features</a>
            </li>
            <li
              id="features3_li"
              className={`${adminTab ? "active" : ""}`}
              onClick={() => handleAdminTab()}
              style={{ cursor: "pointer" }}
            >
              <a>Admin Panel</a>
            </li>
          </ul>

          <div className="tab_contant">
            {userTab && (
              <>
                <div id="joblboardslide">
                  <Slider {...settings}>
                    <div className="SliderMainBx">
                      <div className="feat-slide-img">
                        <Image
                          unoptimized={true}
                          src="/img/eventbooking/eventlisting.webp"
                          alt="admin-dashboard"
                          width={1075}
                          height={100}
                        />
                      </div>
                      <div className="hands-proved">
                        <div className="titleof_scnew">Event Listing</div>
                        <div className="pro-feat-detai">
                          User can view the event listing and also able to
                          filter by categories,price etc.
                        </div>
                      </div>
                    </div>
                    <div className="SliderMainBx">
                      <div className="feat-slide-img">
                        <Image
                          unoptimized={true}
                          src="/img/eventbooking/favouritelist.webp"
                          alt="Supplier"
                          width={1075}
                          height={100}
                        />
                      </div>
                      <div className="hands-proved">
                        <div className="titleof_scnew">Favourite List</div>
                        <div className="pro-feat-detai">
                          Listed favourite events of user,User can able to
                          remove event from his favourite list.
                        </div>
                      </div>
                    </div>
                    <div className="SliderMainBx">
                      <div className="feat-slide-img">
                        <Image
                          unoptimized={true}
                          src="/img/eventbooking/eventdetaillisting.webp"
                          alt="customer"
                          width={1075}
                          height={100}
                        />
                      </div>
                      <div className="hands-proved">
                        <div className="titleof_scnew">Event Details</div>
                        <div className="pro-feat-detai">
                          User can able to view details of event and shows of
                          respective event.
                        </div>
                      </div>
                    </div>
                    <div className="SliderMainBx">
                      <div className="feat-slide-img">
                        <Image
                          unoptimized={true}
                          src="/img/eventbooking/bookingshow.webp"
                          alt="category-list"
                          width={1075}
                          height={100}
                        />
                      </div>
                      <div className="hands-proved">
                        <div className="titleof_scnew">Booking step 1</div>
                        <div className="pro-feat-detai">
                          While booking show user can able to select quantity
                          category wise.
                        </div>
                      </div>
                    </div>
                    <div className="SliderMainBx">
                      <div className="feat-slide-img">
                        <Image
                          unoptimized={true}
                          src="/img/eventbooking/bookingsecondstep.webp"
                          alt="Products Management"
                          width={1075}
                          height={100}
                        />
                      </div>
                      <div className="hands-proved">
                        <div className="titleof_scnew">Booking step 2</div>
                        <div className="pro-feat-detai">
                          In booking second step user can able to apply
                          coupon,facilitated to do online payment(paypal).
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </>
            )}
          </div>
          {organizerTab && (
            <>
              <div id="joblboardslide">
                <Slider {...settings}>
                  <div className="SliderMainBx">
                    <div className="feat-slide-img">
                      <Image
                        unoptimized={true}
                        src="/img/eventbooking/addshowofevent.webp"
                        alt="admin-dashboard"
                        width={1075}
                        height={100}
                      />
                    </div>
                    <div className="hands-proved">
                      <div className="titleof_scnew">Add Show</div>
                      <div className="pro-feat-detai">
                        Organizer can able to add shows for his events.
                      </div>
                    </div>
                  </div>
                  <div className="SliderMainBx">
                    <div className="feat-slide-img">
                      <Image
                        unoptimized={true}
                        src="/img/eventbooking/artistlisting.webp"
                        alt="Supplier"
                        width={1075}
                        height={100}
                      />
                    </div>
                    <div className="hands-proved">
                      <div className="titleof_scnew">Manage Artists</div>
                      <div className="pro-feat-detai">
                        Organizer can able to manage artists like
                        add,edit,delete etc.
                      </div>
                    </div>
                  </div>
                  <div className="SliderMainBx">
                    <div className="feat-slide-img">
                      <Image
                        unoptimized={true}
                        src="/img/eventbooking/eventdetail.webp"
                        alt="customer"
                        width={1075}
                        height={100}
                      />
                    </div>
                    <div className="hands-proved">
                      <div className="titleof_scnew">Manage Events</div>
                      <div className="pro-feat-detai">
                        Organizer can able to manage his events like
                        add,edit,add terms and conditions etc.
                      </div>
                    </div>
                  </div>
                  <div className="SliderMainBx">
                    <div className="feat-slide-img">
                      <Image
                        unoptimized={true}
                        src="/img/eventbooking/paymenthistory.webp"
                        alt="category-list"
                        width={1075}
                        height={100}
                      />
                    </div>
                    <div className="hands-proved">
                      <div className="titleof_scnew">Payment History</div>
                      <div className="pro-feat-detai">
                        Organizer can able to view payments and it&apos;s
                        details.
                      </div>
                    </div>
                  </div>
                  <div className="SliderMainBx">
                    <div className="feat-slide-img">
                      <Image
                        unoptimized={true}
                        src="/img/eventbooking/ticketverification.webp"
                        alt="Products Management"
                        width={1075}
                        height={100}
                      />
                    </div>
                    <div className="hands-proved">
                      <div className="titleof_scnew">Ticket Verification</div>
                      <div className="pro-feat-detai">
                        Provided facility for organizer to verify tickets of
                        users.
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </>
          )}

          {adminTab && (
            <>
              <div id="joblboardslide">
                <Slider {...settings}>
                  <div className="SliderMainBx">
                    <div className="feat-slide-img">
                      <Image
                        unoptimized={true}
                        src="/img/eventbooking/dashboard.webp"
                        alt="admin-dashboard"
                        width={1075}
                        height={100}
                      />
                    </div>
                    <div className="hands-proved">
                      <div className="titleof_scnew">Admin dashboard</div>
                      <div className="pro-feat-detai">
                        It will facilitate admin to users, gigs and other
                        details like : profile, orders, service request etc..
                      </div>
                    </div>
                  </div>
                  <div className="SliderMainBx">
                    <div className="feat-slide-img">
                      <Image
                        unoptimized={true}
                        src="/img/eventbooking/editorganizer.webp"
                        alt="Supplier"
                        width={1075}
                        height={100}
                      />
                    </div>
                    <div className="hands-proved">
                      <div className="titleof_scnew">Manage Site Settings</div>
                      <div className="pro-feat-detai">
                        Admin can manage website setting like : name, logo,
                        payment detail etc..
                      </div>
                    </div>
                  </div>
                  <div className="SliderMainBx">
                    <div className="feat-slide-img">
                      <Image
                        unoptimized={true}
                        src="/img/eventbooking/eventcategories.webp"
                        alt="customer"
                        width={1075}
                        height={100}
                      />
                    </div>
                    <div className="hands-proved">
                      <div className="titleof_scnew">Manage Wallets</div>
                      <div className="pro-feat-detai">
                        {" "}
                        Admin can view wallet detail of all users.
                      </div>
                    </div>
                  </div>
                  <div className="SliderMainBx">
                    <div className="feat-slide-img">
                      <Image
                        unoptimized={true}
                        src="/img/eventbooking/userdetail.webp"
                        alt="category-list"
                        width={1075}
                        height={100}
                      />
                    </div>
                    <div className="hands-proved">
                      <div className="titleof_scnew">Manage Gigs</div>
                      <div className="pro-feat-detai">
                        Admin can manage all added gig and admin can deactivate,
                        activate and delete gigs from the website.
                      </div>
                    </div>
                  </div>
                  <div className="SliderMainBx">
                    <div className="feat-slide-img">
                      <Image
                        unoptimized={true}
                        src="/img/eventbooking/bookingdetail.webp"
                        alt="Products Management"
                        width={1075}
                        height={100}
                      />
                    </div>
                    <div className="hands-proved">
                      <div className="titleof_scnew">Manage Qualifications</div>
                      <div className="pro-feat-detai">
                        Admin can view list of Qualifications & can manage
                        (view/add/edit/delete) qualifications.
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </>
          )}
          {/* </div> */}
        </div>
      </section>

      <div className="clearfix"></div>
      <section className="enq-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 text-center">
              <div className="btn btn-primary" onClick={openModal}>
                <button>Enquire Now</button>
                {/* {
                  <SoftwareEnquiry
                    modalStatus={showModal}
                    toggle={openModal}
                    title="Event Booking Software"
                  />
                } */}

                <Suspense fallback={<div>Loading ...</div>}>
                  {showModal && (
                    <SoftwareEnquiry
                      modalStatus={showModal}
                      toggle={openModal}
                      title="Event Booking Software"
                    />
                  )}
                </Suspense>
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
                  <Link title="View Detail" target="_black" href="/ebay-clone">
                    <div className="caption">
                      <div className="other-caption-bx">
                        <h3>eBay Clone</h3>
                        <div className="other-project-logo">
                          <Image
                            unoptimized={true}
                            src="/img/jobboard/ecart_new.png"
                            alt="eBay Clone Script Logo"
                            className=""
                            width={197}
                            height={100}
                          />
                        </div>
                        <p>
                          <span>
                            eBay - A multi vendor eCommerce script, specially
                            designed.
                          </span>
                        </p>
                        <div className="other-socila-pr-icon">
                          <i className="fa fa-globe" aria-hidden="true"></i>

                          <i className="fa-brands fa-android"></i>

                          <i className="fa-brands fa-apple"></i>
                        </div>
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
                    href="/appointment-scheduling-software"
                  >
                    <div className="caption">
                      <div className="other-caption-bx">
                        <h3>Appointment Booking System</h3>

                        <div className="other-project-logo">
                          <Image
                            unoptimized={true}
                            src="/img/jobboard/abs_logo_new.png"
                            alt="Fiverr Clone Script Logo"
                            className=""
                            width={197}
                            height={100}
                          />
                        </div>
                        <p>
                          <span>
                            A user-friendly appointment booking system that
                            enables owners to manage.
                          </span>
                        </p>
                        <div className="other-socila-pr-icon">
                          <i className="fa fa-globe" aria-hidden="true"></i>
                        </div>
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
                    href="/news-management-system"
                  >
                    <div className="caption">
                      <div className="other-caption-bx">
                        <h3>News Management System</h3>

                        <div className="other-project-logo">
                          <Image
                            unoptimized={true}
                            src="/img/jobboard/news_logo_new.png"
                            alt="news-management-system"
                            className=""
                            width={210}
                            height={100}
                          />
                        </div>
                        <p>
                          <span>
                            Digital media is playing a major role in authentic
                            flow of information.
                          </span>{" "}
                        </p>
                        <div className="other-socila-pr-icon">
                          <i className="fa fa-globe" aria-hidden="true"></i>
                        </div>
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
            <Image
              unoptimized={true}
              src="/img/images/whatsapp.png"
              alt="whatsapp-icon"
              width={50}
              height={50}
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
