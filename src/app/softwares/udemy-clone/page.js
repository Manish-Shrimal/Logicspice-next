"use client";
import React, { useState } from "react";
import Footer from "@/app/Components/Footer";
import NavBar from "@/app/Components/Navbar";
import "@/app/softwares/softwares.css";
import "@fortawesome/fontawesome-free/css/all.css";
import Image from "next/image";
import "../../resposive.css";

import {
  MDBAccordion,
  MDBAccordionItem,
  MDBModal,
  MDBModalBody,
} from "mdb-react-ui-kit";
import "bootstrap/dist/css/bootstrap.min.css";

import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Contactusmodel from "../../Components/Contactusmodel";
import Enquirymodal from "@/app/Components/Enquirymodal";
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
  const [studentTab, setStudentTab] = useState(true);
  const [instructorTab, setInstructorTab] = useState(false);
  const [adminpanelTab, setAdminpanelTab] = useState(false);

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
  const handleStudentTab = () => {
    setStudentTab(true);
    setInstructorTab(false);
    setAdminpanelTab(false);
  };
  const handleInstructorTab = () => {
    setStudentTab(false);
    setInstructorTab(true);
    setAdminpanelTab(false);
  };
  const handleAdminpanelTab = () => {
    setStudentTab(false);
    setInstructorTab(false);
    setAdminpanelTab(true);
  };

  const opendiv = (tab) => {
    setActiveTab(tab);
  };
  return (
    <>
      <NavBar />
      <section class="paid-pro job-portal-banner job-portal-bg fiverr-new-banner event-new-banner NewJobSiteDesign JobBoardNewDesign">
        <div class="container">
          <div class="row">
            <div class="col-sm-7 col-md-7">
              <h1>Best Udemy Clone Script</h1>
              <div class="both-left-p-sec">
                <h2>
                  Readymade Script of video E- Learning Platform like Udemy
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
                        title="Please fill the form below and get access to the live demo of Udemy Clone..See how it work yourself!"
                      />
                    }
                  </div>
                  <Link class="btn fiverr-buys" href="/softwares/udemy-clone">
                    Buy Now
                  </Link>
                </div>
                <div class="SubscriptionPrice">
                  <div class="line-border NewLineBoader">
                    <img
                      alt="crowd_funding_script"
                      src="/img/jobboard/stars.png"
                    />
                    <p>13 Reviews</p>
                  </div>
                </div>
              </div>
              <div class="jocpp">
                <ul class="job-pr-icon">
                  <li>
                    <i
                      class="fa-solid fa-earth-americas"
                      aria-hidden="true"
                    ></i>
                  </li>
                  <li>
                    <i class="fa-brands fa-android"></i>
                  </li>
                  <li>
                    <i class="fa-brands fa-apple"></i>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-sm-5 col-md-5">
              <div class="por-mobile-new">
                <img
                  alt="crowd_funding_script"
                  src="/img/softwares-banner-img/udemy-banner-img.png"
                />
              </div>
            </div>
          </div>
          <div class="job-portal-banner-link">
            <div aria-label="breadcrumb" class="my-breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <Link href="/">Home</Link>
                </li>
                <li class="breadcrumb-item">
                  <Link href="/softwares">Softwares</Link>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  Udemy Clone
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section class="job-section-top-new">
        <div class="container">
          <p>
            Are you looking to launch your own online video learning platform?
            Get on to our ready to use udemy clone script to start your own
            e-learning portal like udemy. This script allows an user to add and
            manage courses with their sections and lectures.
          </p>
        </div>
      </section>

      <section
        class="client-say NewTorowLi"
        style={{ backgroundColor: "#fff" }}
      >
        <div class="container">
          <div class="row">
            <div class="col-md-6 job-video">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/9I7UC62GoqQ?rel=0"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div class="col-md-6">
              <div class="service-market-ttd JobBoardServiceMarketFeatures">
                <ul>
                  <li>Easily Manage Courses</li>
                  <li>Responsive website</li>
                  <li>White labeled script</li>
                  <li>Wish List For Courses</li>
                  <li>Payment History</li>
                  <li>One time License Fee</li>
                  <li>Compatible With All Browsers</li>
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
            <h2 class="taxt_tt_job taxt_tt_job_new">
              Udemy Clone Script Features
            </h2>
            <div class="tatxt_txt_job text-center">
              Our ready to use udemy clone php script is well designed and has a
              separate dashboard for students, visitors and administrator, so
              they can manage courses with their section and lecture detail from
              dashboard with secure login credentials. This script is secure and
              user friendly and allows users to add, manage and browse courses
              very easily. It’s easily compatible with different devices.
            </div>
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
                  <a>Student Panel</a>
                </li>
                <li
                  id="tab2_li"
                  className={`emplyer_app_job  ddlj ${
                    buyerTab ? "active" : ""
                  }`}
                  onClick={() => handleBuyerTab()}
                >
                  <a>Instructor Panel</a>
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
                            src="/img/udemyclone/mobile-udemy-clone.png"
                            alt="Udemy Clone Script"
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
                                Student Registration
                                <div class="product-idea">
                                  <p>
                                    A student can register with his name, email
                                    and password.
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
                                Secure Login
                                <div class="product-idea">
                                  <p>
                                    Students can login with their unique
                                    credentials.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/manage_renter.png"
                                />
                              </i>
                              <span>Forgot password</span>
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
                                <div class="product-idea">
                                  <p>
                                    Students can View and Edit their own
                                    profile.
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
                                Browse Course
                                <div class="product-idea">
                                  <p>
                                    Students can search course by entering title
                                    and students can select course by filtering
                                    by topics, price etc.
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
                                Wish List
                                <div class="product-idea">
                                  <p>
                                    Students are able to add and remove courses
                                    in their wishlist.
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
                                Add To Cart
                                <div class="product-idea">
                                  <p>
                                    Students are able to add courses in their
                                    cart list to buy.
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
                                Payment transaction
                                <div class="product-idea">
                                  <p>
                                    Students can complete the payment process by
                                    using their credit card details and PayPal
                                    account.
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
                                Payment History
                                <div class="product-idea">
                                  <p>Students can view all payment history.</p>
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
                                Rate course
                                <div class="product-idea">
                                  <p>
                                    Students can add rating and review to any
                                    course they purchased.
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
                                Course Dashboard
                                <div class="product-idea">
                                  <p>
                                    Students can view his purchased course
                                    details and can view videos along with
                                    lecture details.
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
                                Course Detail
                                <div class="product-idea">
                                  <p>
                                    Student can view course complete detail
                                    before buying the course or any instructor.
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
                                Notification
                                <div class="product-idea">
                                  <p>
                                    Students will get notification for each
                                    activity over the website.
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
                  <div class="costomer_tab rj EmployerTab" id="tab2">
                    <div class="row">
                      <div class="col-lg-4 col-md-3">
                        <div class="costomer_tab_right">
                          <img
                            src="/img/udemyclone/instructor-mobile.png"
                            alt="Udemy Clone Script"
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
                                  src="/img/jobboard/ragister-icon.png"
                                />
                              </i>
                              <span>
                                Instructor Registration
                                <div class="product-idea">
                                  <p>
                                    An Instructor can register with his name,
                                    email and password.
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
                                Secure Login
                                <div class="product-idea">
                                  <p>
                                    Instructors can login with their unique
                                    credentials.
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
                                Add Course & Edit Course
                                <div class="product-idea">
                                  <p>
                                    Instructors can add courses along with their
                                    section and lecture details.
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
                                Manage Courses
                                <div class="product-idea">
                                  <p>
                                    Instructors can manage courses with their
                                    section and lecture details.
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
                  <div class="costomer_tab rj AdminTab" id="tab3">
                    <div class="row">
                      <div class="col-lg-4 col-md-3 ">
                        <div class="costomer_tab_right costomer_tab_rightleft2">
                          <img
                            src="/img/udemyclone/udemy-website.png"
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
                                  <p>Admin can login securely on portal.</p>
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
                                    Admin can view the total number of Students,
                                    Instructors,Category,Courses etc.
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
                                Manage Users
                                <div class="product-idea">
                                  <p>
                                    Admin can view list of Students and
                                    Instructors and is able to manage users
                                    (add, edit, delete, activate, deactivate).
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
                                Manage Course
                                <div class="product-idea">
                                  <p>
                                    Admin can view list of courses and able to
                                    manage courses (delete, activate,
                                    deactivate)
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
                                Manage Orders
                                <div class="product-idea">
                                  <p>
                                    Admin is able to view all orders for courses
                                    and it’s customer details.
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
                                Manage Categories
                                <div class="product-idea">
                                  <p>
                                    Admin can manage all 3 levels of categories
                                    for courses.
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
                                Manage Countries
                                <div class="product-idea">
                                  <p>
                                    Admin can manage all countries & states to
                                    be used for user profiles.
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
                                View Payments
                                <div class="product-idea">
                                  <p>
                                    Admin can view a list of payments of orders.
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
                                <div class="product-idea">
                                  <p>
                                    Admin is able to update his email, username,
                                    password, contact Information, social links
                                    and configure settings.
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
                                Testimonial
                                <div class="product-idea">
                                  <p>
                                    Admin can manage testimonials for front end
                                    users
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
              What does our LS Academy (udemy clone script) offer you?
            </h2>
            <p>
              eLearning completely transformed the way in which learning is
              given to students. Unlike traditional teaching method with chalk
              and black board, eLearning makes learning simpler, easier, and
              more effective. We at Logicspice, provide readymade udemy clone
              script and app which help to start your own video eLearning portal
              in very less time(almost immediately) at an affordable cost.
            </p>
            <p>
              This script allows the admin to manage students, instructors,
              courses,orders and categories etc. Admin can manage all the
              payment records and orders from their dashboard.our udemy clone
              website allows anyone to teach so that people can share their
              expertise.
            </p>
            <p>
              In this udemy clone website students can search courses by
              entering title and students can select courses by filtering by
              topics, price etc. Also a student can view his purchased course
              details and can view videos along with lecture details and add
              rating and review for any course from his purchased course list.
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
                    Unlimited Course Listings: List as many courses as you need
                    without any limitations.
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
                        title="Please fill the form below and get access to the live demo of Udemy Clone..See how it work yourself!"
                      />
                    }
                  </div>
                <Link class="btn fiverr-buys" href="/softwares/udemy-clone">
                  Buy Now
                </Link>
              </div>
              <div class="jocpp">
                <ul class="job-pr-icon">
                  <li>
                    <i
                      class="fa-solid fa-earth-americas"
                      aria-hidden="true"
                    ></i>
                  </li>
                  <li>
                    <i class="fa-brands fa-android"></i>
                  </li>
                  <li>
                    <i class="fa-brands fa-apple"></i>
                  </li>
                </ul>
                <div class="portel-btnbx">
                  <div class="line-border NewLineBoader">
                    <img src="/img/jobboard/stars.png" alt="" class="lazy" />
                    <p>13 Reviews</p>
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
              <a onClick={toggleModal}>contact us</a>
              .
            </p>
          </div>
        </div>
      </section>
      <section class="job_portal_area script-update-bg">
        <div class="container">
          <div class="job_or_title">
            <h2 class="taxt_tt_job">Script Update History</h2>
            <br />
            <div class="script-update_title">
              <p>
                V1.0 - July 06th, 2022 - PHP+Laravel Version Upgrades and minor
                changes
              </p>
              <ul>
                <li>
                  <span>PHP version upgraded from 7.2 to 8.0</span>
                </li>
                <li>
                  <span>Laravel version upgraded from 6.4 to 8.7 </span>
                </li>
                <li>
                  <span>Improved work flow and aesthetic changes. </span>
                </li>
              </ul>
            </div>
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
              src="/img/udemyclone/udemy-how-it-works.jpg"
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
          <div class="row used_technology_section_dataa">
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
                    <img src="/img/jobboard/tech_mysql_icon.png" alt="MySQL" />
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
                <li data-aos="fade-up">
                  <div class="icntechimg">
                    <img
                      src="/img/jobboard/apple_phn_icon.png"
                      alt="MySQL"
                      class="lazy"
                    />
                  </div>
                  <div class="icntechimg_nm">iOS</div>
                </li>
                <li data-aos="fade-up">
                  <div class="icntechimg">
                    <img
                      src="/img/jobboard/andoird_icon.png"
                      alt="Apache"
                      class="lazy"
                    />
                  </div>
                  <div class="icntechimg_nm">Android</div>
                </li>
              </ul>
            </div>
            <div class="col-sm-6">
              <ul class="list_detail">
                <li class="same aos-init aos-animate" data-aos="fade-up">
                  <b>Browsers - </b> Firefox 32.6+, Chrome 20.0+, Opera 30.0+,
                  Safari 5+, IE 9+
                </li>
                <li class="same aos-init aos-animate" data-aos="fade-up">
                  <b>Framework - </b> Laravel 6+
                </li>
                <li class="same aos-init aos-animate" data-aos="fade-up">
                  <b>Language - </b> PHP 7.3+, AJAX, jQuery
                </li>
                <li class="other aos-init aos-animate" data-aos="fade-up">
                  <b>Design - </b> HTML 5, CSS 3, JavaScript
                </li>
                <li class="other aos-init" data-aos="fade-up">
                  <b>Database - </b> MySQL 5.5+
                </li>
                <li class="other aos-init" data-aos="fade-up">
                  <b>Server - </b> Apache 2.4+
                </li>
                <li class="other aos-init" data-aos="fade-up">
                  <b>iOS - </b> xcode 11.3 and swift 5{" "}
                </li>
                <li class="other aos-init" data-aos="fade-up">
                  <b>Android - </b> java 9 and Android Studio 4.1
                </li>
              </ul>
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
                <div class="supportsettingtext">
                  White Labeled <br />
                  Software
                </div>
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
                        <span>4.7 out of 5 stars</span>
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
                          style={{ width: "100%" }}
                        ></div>
                      </div>
                      <div class="people_star_num">11</div>
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
                          style={{ width: "30%" }}
                        ></div>
                      </div>
                      <div class="people_star_num">2</div>
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
                    title="Udemy Clone."
                  />
                </div>
                <div class="col-md-12">
                  <div class="customers_review_sec_row">
                    {/* <!--                    <div class="customers_review_sec_row_ra"><div class="starget">5 <i class="fa fa-star" aria-hidden="true"></i></div><span>Build an Online Store</span></div>--> */}

                    <div class="customer_review_stext">
                      "I have purchased this script and has constructed my own
                      udemy clone. This was an easy task because of logicspice's
                      free installation and support. Keep up the good work. I
                      will be back for more in the future."
                    </div>
                    <div
                      class="who_ratset"
                      style={{ textAlign: "right", paddingRight: "17px" }}
                    >
                      <span
                        class="star_review_main"
                        style={{ paddingRight: "10px", color: "gold" }}
                      >
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star-half" aria-hidden="true"></i>
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
                  <div class="customers_review_sec_row">
                    {/* <!--                    <div class="customers_review_sec_row_ra"><div class="starget">5 <i class="fa fa-star" aria-hidden="true"></i></div><span>Build an Online Store</span></div>--> */}
                    <div class="customer_review_stext" id="fiveer-clone">
                      "This is the best udemy clone. Thanks for your great
                      efforts and support while installing the script. Your
                      prompt service regarding a few minor issues was superb."
                    </div>

                    <div
                      class="who_ratset"
                      style={{ textAlign: "right", paddingRight: "17px" }}
                    >
                      <span
                        class="star_review_main"
                        style={{ paddingRight: "10px", color: "gold" }}
                      >
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
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
                  <div class="customers_review_sec_row">
                    {/* <!--                    <div class="customers_review_sec_row_ra"><div class="starget">5 <i class="fa fa-star" aria-hidden="true"></i></div><span>Build an Online Store</span></div>--> */}
                    <div class="customer_review_stext">
                      "Recently I bought this script from logicspice and it
                      worked really nice, it helped my business to gain more
                      efficiency. I recommend for all whom looking for a udemy
                      clone, it's really nice."
                    </div>
                    <div
                      class="who_ratset"
                      style={{ textAlign: "right", paddingRight: "17px" }}
                    >
                      <span
                        class="star_review_main"
                        style={{ paddingRight: "10px", color: "gold" }}
                      >
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
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
            <div class="col-md-6 Quick_FAQ">
              <h4 class="title_main">FAQ's</h4>
              <div class="MainFaqBx">
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
                    headerTitle="Will it be Installed on my own server?"
                    collapseId="flush-collapse3"
                  >
                    <p>
                      Once you purchase the software, our expert installation
                      team will do the installation of the software on your
                      server. The installation is free of cost. If you are a
                      tech person, you can install it by yourself with the help
                      of an installation document.
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
                    headerTitle="Can I resell the script? Will I have rights over the script code?"
                    collapseId="flush-collapse5"
                  >
                    <p>
                      No, You can' resell the script. All rights will remain
                      with Logicspice only.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Can I update some design and functionality in application code myself?"
                    collapseId="flush-collapse6"
                  >
                    <p>
                      Yes, You will have access of the all the code, except some
                      of the core encrypted files.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Can I use your script without any programming skills?"
                    collapseId="flush-collapse7"
                  >
                    <p>
                      Yes, You can directly install our given script and can
                      manage everything in the admin panel which is very user
                      friendly.
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

      {/* <section class="content_area feature_inner" id="features">
    <div class="container">
        <h2 class="title_main">Crowdfunding Features</h2>
        <div id="joblboardslide">
        <Slider {...settings}>
            <div class="SliderMainBx">

            <div class="feat-slide-img"><img src="/img/udemyclone/dashboard.png" alt="dashboard"/></div>
            <div class="hands-proved">
                        <div class="titleof_scnew">Admin Dashboard</div>
                        <div class="pro-feat-detai">Admin can be able to view the direct link of all the management and also be able to statistics of Student and Instructor.</div>
                    </div>
            </div>
            <div class="SliderMainBx">
            <div class="feat-slide-img"><img src="/img/udemyclone/configuration.png" alt="Configuration"/></div>
            <div class="hands-proved">
                        <div class="titleof_scnew">Configuration</div>
                        <div class="pro-feat-detai">Admin is able to update his email, username, password, contact Information, social links and configure settings.</div>
                    </div>
            </div>
            <div class="SliderMainBx">
            <div class="feat-slide-img"><img src="/img/udemyclone/admin_manage_courses.png" alt="Manage Courses"/></div>
            <div class="hands-proved">
                        <div class="titleof_scnew">Manage Courses</div>
                        <div class="pro-feat-detai">Admin can view list of courses and able to manage courses
   (delete, activate, deactivate)</div>
                    </div>
            </div>
            <div class="SliderMainBx">
            <div class="feat-slide-img"><img src="/img/udemyclone/admin_manage_payments.png" alt="View Payments"/></div>
            <div class="hands-proved">
                        <div class="titleof_scnew">View Payments</div>
                        <div class="pro-feat-detai">Admin can view a list of payments of orders.</div>
                    </div>
            </div>
            <div class="SliderMainBx">
                
            <div class="feat-slide-img"><img src="/img/udemyclone/manage_categories.png" alt="Manage Categories"/></div>
            <div class="hands-proved">
                        <div class="titleof_scnew">Manage Categories</div>
                        <div class="pro-feat-detai">Admin can manage all 3 levels of categories for courses.</div>
                    </div>
            </div>
        </Slider>

        </div>
    </div>
</section> */}

      <section class="content_area feature_inner">
        <div class="container">
          <h2 class="title_main">LS Academy Script Features</h2>

          <div class="sliders-div">
            <ul class="nav nav-tabs-slide" role="tablist">
              <li role="presentation" class={studentTab ? "active" : ""}>
                <a
                  href="#homefiveer"
                  aria-controls="homefiveer"
                  role="tab"
                  data-toggle="tab"
                  aria-expanded="true"
                  onClick={() => handleStudentTab()}
                >
                  Student Features
                </a>
              </li>
              <li role="presentation" class={instructorTab ? "active" : ""}>
                <a
                  href="#profilefiveer"
                  aria-controls="profilefiveer"
                  role="tab"
                  data-toggle="tab"
                  aria-expanded="false"
                  onClick={() => handleInstructorTab()}
                >
                  Instructor Features
                </a>
              </li>
              <li role="presentation" class={adminpanelTab ? "active" : ""}>
                <a
                  href="#adminfiveer"
                  aria-controls="adminfiveer"
                  role="tab"
                  data-toggle="tab"
                  aria-expanded="false"
                  onClick={() => handleAdminpanelTab()}
                >
                  Admin Panel
                </a>
              </li>
            </ul>
          </div>
          <div class="tab_contant">
            {studentTab && (
              <>
                <div id="joblboardslide">
                  <Slider {...settings}>
                    <div class="SliderMainBx">
                      <div class="feat-slide-img">
                        <img
                          src="/img/udemyclone/search_course.png"
                          alt="searchcourse"
                        />
                      </div>
                      <div class="hands-proved">
                        <div class="titleof_scnew">Search Course</div>
                        <div class="pro-feat-detai">
                          Students will be able to view listings of course and
                          can be able to filter on the basis of topic, level,
                          price, duration and rating.
                        </div>
                      </div>
                    </div>
                    <div class="SliderMainBx">
                      <div class="feat-slide-img">
                        <img
                          src="/img/udemyclone/course_detail.png"
                          alt="Configuration"
                        />
                      </div>
                      <div class="hands-proved">
                        <div class="titleof_scnew">Course Detail</div>
                        <div class="pro-feat-detai">
                          Students can view details about the course and can
                          purchase from here.
                        </div>
                      </div>
                    </div>
                    <div class="SliderMainBx">
                      <div class="feat-slide-img">
                        <img
                          src="/img/udemyclone/my_user_courses.png"
                          alt="Manage Courses"
                        />
                      </div>
                      <div class="hands-proved">
                        <div class="titleof_scnew">My Courses</div>
                        <div class="pro-feat-detai">
                          Students can view the listing of his courses that they
                          have purchased.
                        </div>
                      </div>
                    </div>
                    <div class="SliderMainBx">
                      <div class="feat-slide-img">
                        <img
                          src="/img/udemyclone/view_lecture_video.png"
                          alt="View Payments"
                        />
                      </div>
                      <div class="hands-proved">
                        <div class="titleof_scnew">View Lecture Video</div>
                        <div class="pro-feat-detai">
                          Students can view the video for the related lecture.
                          They are able to change the lecture from the right
                          section for that course.
                        </div>
                      </div>
                    </div>
                    <div class="SliderMainBx">
                      <div class="feat-slide-img">
                        <img
                          src="/img/udemyclone/purchase_history.png"
                          alt="Manage Categories"
                        />
                      </div>
                      <div class="hands-proved">
                        <div class="titleof_scnew">Purchase History</div>
                        <div class="pro-feat-detai">
                          Students can view the purchase history of when and how
                          many courses he has purchased.
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </>
            )}

            {instructorTab && (
              <>
                <div id="joblboardslide">
                  <Slider {...settings}>
                    <div class="SliderMainBx">
                      <div class="feat-slide-img">
                        <img
                          src="/img/udemyclone/manage_courses.png"
                          alt="searchcourse"
                        />
                      </div>
                      <div class="hands-proved">
                        <div class="titleof_scnew">Manage Courses</div>
                        <div class="pro-feat-detai">
                          Instructors will be able to view the direct link of
                          all the management and also be able to statistics of
                          Student and Courses.
                        </div>
                      </div>
                    </div>
                    <div class="SliderMainBx">
                      <div class="feat-slide-img">
                        <img
                          src="/img/udemyclone/add_course.png"
                          alt="Configuration"
                        />
                      </div>
                      <div class="hands-proved">
                        <div class="titleof_scnew">Add Course</div>
                        <div class="pro-feat-detai">
                          Instructure can create a new course from here.
                        </div>
                      </div>
                    </div>

                    <div class="SliderMainBx">
                      <div class="feat-slide-img">
                        <img
                          src="/img/udemyclone/my_courses_instructure.png"
                          alt="Configuration"
                        />
                      </div>
                      <div class="hands-proved">
                        <div class="titleof_scnew">My Courses</div>
                        <div class="pro-feat-detai">
                          Instructure can view the selling courses from here.
                        </div>
                      </div>
                    </div>

                    <div class="SliderMainBx">
                      <div class="feat-slide-img">
                        <img
                          src="/img/udemyclone/view_video.png"
                          alt="Configuration"
                        />
                      </div>
                      <div class="hands-proved">
                        <div class="titleof_scnew">View Lecture Video</div>
                        <div class="pro-feat-detai">
                          Instructure can view the video of lecture uploaded by
                          him in a course.
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </>
            )}

            {adminpanelTab && (
              <>
                <div id="joblboardslide">
                  <Slider {...settings}>
                    <div class="SliderMainBx">
                      <div class="feat-slide-img">
                        <img
                          src="/img/udemyclone/search_course.png"
                          alt="searchcourse"
                        />
                      </div>
                      <div class="hands-proved">
                        <div class="titleof_scnew">Search Course</div>
                        <div class="pro-feat-detai">
                          Students will be able to view listings of course and
                          can be able to filter on the basis of topic, level,
                          price, duration and rating.
                        </div>
                      </div>
                    </div>
                    <div class="SliderMainBx">
                      <div class="feat-slide-img">
                        <img
                          src="/img/udemyclone/course_detail.png"
                          alt="Configuration"
                        />
                      </div>
                      <div class="hands-proved">
                        <div class="titleof_scnew">Course Detail</div>
                        <div class="pro-feat-detai">
                          Students can view details about the course and can
                          purchase from here.
                        </div>
                      </div>
                    </div>
                    <div class="SliderMainBx">
                      <div class="feat-slide-img">
                        <img
                          src="/img/udemyclone/my_user_courses.png"
                          alt="Manage Courses"
                        />
                      </div>
                      <div class="hands-proved">
                        <div class="titleof_scnew">My Courses</div>
                        <div class="pro-feat-detai">
                          Students can view the listing of his courses that they
                          have purchased.
                        </div>
                      </div>
                    </div>
                    <div class="SliderMainBx">
                      <div class="feat-slide-img">
                        <img
                          src="/img/udemyclone/view_lecture_video.png"
                          alt="View Payments"
                        />
                      </div>
                      <div class="hands-proved">
                        <div class="titleof_scnew">View Lecture Video</div>
                        <div class="pro-feat-detai">
                          Students can view the video for the related lecture.
                          They are able to change the lecture from the right
                          section for that course.
                        </div>
                      </div>
                    </div>
                    <div class="SliderMainBx">
                      <div class="feat-slide-img">
                        <img
                          src="/img/udemyclone/purchase_history.png"
                          alt="Manage Categories"
                        />
                      </div>
                      <div class="hands-proved">
                        <div class="titleof_scnew">Purchase History</div>
                        <div class="pro-feat-detai">
                          Students can view the purchase history of when and how
                          many courses he has purchased.
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      <div class="clearfix"></div>
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
                    title="Udemy Clone."
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
                  <Link
                    title="View Detail"
                    target="_black"
                    href="/job-board-software"
                  >
                    <div class="caption">
                      <div class="other-caption-bx">
                        <h3>Job Board Software</h3>

                        <div class="other-project-logo">
                          <img
                            src="/img/jobboard/job-board-logo.png"
                            alt="Job board software"
                            class=""
                          />
                        </div>
                        <p>
                          <span>Best white label job board software. </span>{" "}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div class="col-sm-6 col-md-4">
                <div class="thumbnail">
                  <Link
                    title="View Detail"
                    target="_black"
                    href="/recruitment-management-software"
                  >
                    <div class="caption">
                      <div class="other-caption-bx">
                        <h3>Recruitment Management Software</h3>
                        <div class="other-project-logo">
                          <img
                            src="/img/jobboard/rms_new.png"
                            alt="Recruitment Management Software"
                            class=""
                          />
                        </div>
                        <p>
                          <span>
                            Readymade recruitment management system that
                            automates the hiring process.
                          </span>
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div class="col-sm-6 col-md-4">
                <div class="thumbnail">
                  <Link
                    title="View Detail"
                    target="_black"
                    href="/whatsapp-clone"
                  >
                    <div class="caption">
                      <div class="other-caption-bx">
                        <h3>WhatsApp Clone App</h3>

                        <div class="other-project-logo">
                          <img
                            src="/img/jobboard/ls-chat-logo.png"
                            alt="WhatsApp Clone App"
                            class=""
                          />
                        </div>
                        <p>
                          <span>Readymade WhatsApp Clone Script.</span>{" "}
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

      <MDBModal
        id="jobportal"
        tabindex="-1"
        labelledby="exampleModalLabel"
        v-model="jobportal"
        class="modal-service"
      >
        <MDBModalBody>
          <img
            src="/img/udemyclone/udemy-how-it-works.jpg"
            alt="icon"
            title=""
          />
        </MDBModalBody>
      </MDBModal>

      <MDBModal
        id="buyjobportal"
        tabindex="-1"
        labelledby="exampleModalLabel"
        v-model="buyjobportal"
        class="modal-service"
      >
        <MDBModalBody>
          <div id="jobboardclients" class="owl-carousel hidedot">
            <div class="item active">
              <div class="site-titles">
                <Link href="http://learnybee.in/" target="_blank">
                  learnybee.in
                </Link>
              </div>
              <Link href="http://learnybee.in/" target="_blank">
                <img
                  src="/img/udemyclone/learnybee.jpg"
                  alt="banner"
                  title=""
                />
              </Link>
            </div>
          </div>
        </MDBModalBody>
      </MDBModal>

      
        <div className="quoue_box_full_sec">
        <div className="whatsapp-call">
    <a href="https://api.whatsapp.com/send?phone=+919829559922&amp;text=Hi Logicspice Team, I have a question regarding the solutions you provide. Please Help!" target="_blank">
        <img src="https://www.logicspice.com/img/images/whatsapp.png" alt="whatsapp-icon"/>
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