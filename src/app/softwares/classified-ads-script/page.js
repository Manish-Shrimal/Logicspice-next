"use client";
import Footer from "@/app/Components/Footer";
import Navbar from "@/app/Components/Navbar";
import "@/app/softwares/softwares.css";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import Lsclassified from "@/app/Components/Lsclassified";
import Contactusmodel from "@/app/Components/Contactusmodel";
import Enquirymodal from "@/app/Components/Enquirymodal";
import { Modal, ModalBody } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Whylogicspice from "@/app/Components/Whylogicspice";
import Reviewmodals from "@/app/Components/Reviewmodals";

const page = () => {
  const [activeTab, setActiveTab] = useState("tab2");
  const [buyerTab, setBuyerTab] = useState(true);
  const [adminTab, setAdminTab] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const toggleJobPortalModal = () => setJobportal(!jobportal);
  const toggleBuyJobPortalModal = () => setBuyJobportal(!buyjobportal);
  const [modalOpen, setModalOpen] = useState(false);
  const [jobportal, setJobportal] = useState(false);
  const [buyjobportal, setBuyJobportal] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  const openReviewModel = () => {
    setShowReviewModal(!showReviewModal);
  };
  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  const handleBuyerTab = () => {
    setBuyerTab(true);
    setAdminTab(false);
  };
  const openModal = () => {
    setShowModal(!showModal);
  };
  const handleAdminTab = () => {
    setBuyerTab(false);
    setAdminTab(true);
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

  return (
    <>
      <Navbar />
      <section className="paid-pro job-portal-banner NewJobSiteDesign JobBoardNewDesign classNameified-banner fiverr-new-banner">
        <div className="container">
          <div className="row">
            <div className="col-sm-7 col-md-7">
              <h1>LS classifier - Online Classified Ads Software</h1>
              <div className="both-left-p-sec">
                <h2>Effortless Online Classified Ad Management</h2>
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
                        <img
                          src="/img/images/more-info.png"
                          alt=""
                        />
                      </i>
                      <p>Limited Period Offer for First Year</p>
                    </span>
                    <span className="AppPrice" style={{ display: "none" }}>
                      <Link
                        className="text-primary js-anchor-link"
                        href="#subscriptionmodel"
                      >
                        More Details
                      </Link>
                    </span>
                  </div>
                </div>
                <div
                  className="portal-price NewPriceDesignPageShow"
                  style={{ display: "none" }}
                >
                  <h4>
                    ₹88,160<span className="sml_labl"> INR</span>
                  </h4>
                  <div className="OfferPriceProduct">
                    <strike className="srik_cls">
                      ₹147,754<span className="sml_labl"> INR</span>{" "}
                    </strike>
                  </div>
                </div>
                <div className="job-valu-btn">
                  <span>Fill your basic details and</span>

                  <div className="btn btn-get" onClick={openModal}>
                    <button>Get Demo Access!</button>
                    {
                      <Enquirymodal
                        modalStatus={showModal}
                        toggle={openModal}
                        title="Please fill the form below and get access to the live demo of Classified Ads software
                  .See how it work yourself!"
                      />
                    }
                  </div>
                  <Link
                    className="btn fiverr-buys"
                    href="/softwares/buynow/classsifiedr-ads-script"
                    id="buy_now_1"
                  >
                    Buy Now
                  </Link>
                </div>
                <div className="SubscriptionPrice">
                  <div className="DeliSou" style={{ display: "none" }}>
                    <span>For</span> Delivered Solution{" "}
                    <Link href="#subscriptionprice">click here</Link>
                  </div>{" "}
                  <div className="line-border NewLineBoader">
                    <img
                      src="/img/jobboard/stars.png"
                      alt=""
                      className="lazy"
                    />
                    <p>24 Reviews</p>
                  </div>
                </div>
              </div>
              <div className="jocpp">
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
            <div className="col-sm-5 col-md-5">
              <div className="por-mobile-new">
                <img
                  src="/img/classified/classsifiedr-banner-img.png"
                  alt="classNameified_Ads_Script"
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
                  LS Classifier
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section className="job-section-top-new">
        <div className="container">
          <p>
            LS Classifier software is the easiest way to showcase listing of
            products or ads. This software application has features similar to
            craigslist. Make your own Classified ads marketplace with our ready
            to use responsive LS Classifier in less time. This application has
            smooth functionality for the vendors or advertisers to list their
            ads and communicate further to buy and sell their products online
            from remote locations. Get in touch with Logicspice today to get a
            demo of this app.
          </p>
        </div>
      </section>
      <section
        className="client-say crowdfunding-say"
        style={{ backgroundColor: "#fff;" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6 job-video">
              <iframe
                src="https://player.vimeo.com/video/797230876?h=6b4f994a41&amp;autoplay=1&amp;loop=1&amp;color=451095&amp;byline=0"
                width="100%"
                height="312"
                frameborder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen=""
              ></iframe>
            </div>
            <div className="col-md-6">
              <div className="service-market-ttd">
                <ul>
                  <li>
                    Customers are allowed to post more than one classNameified
                    ad, using this Classified posting software.
                  </li>
                  <li>
                    Users can add items to their favorite list, so that they can
                    find them easily next time they visit the website.
                  </li>
                  <li>
                    This Classified website application is SEO friendly which
                    can help you to improve your visibility in google.
                  </li>
                  <li>
                    Admin can manage categories, subcategories, and all the
                    Classified listings.
                  </li>
                  <li>
                    The admin panel is totally user-friendly and feature rich in
                    this LS Classifier software.
                  </li>
                  <li>
                    Integrated email verification for protection from spamming
                    in this software.
                  </li>
                  <li>Blog functionality included (Free)</li>
                  <li>Responsive website (mobile friendly)</li>
                  <li>White labeled software </li>
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
            <h2 className="taxt_tt_job">LS Classifier Features</h2>
          </div>
          <div className="tatxt_txt_job">
            We can provide customized android &amp; ios apps for LS Classifier
            software as per your business requirement. Our LS Classifier portal
            app lets the sellers post products and buyers can enquire regarding
            this. PHP classNameifieds software provides complete control over
            the admin dashboard to smoothly manage the users, ads, categories,
            comments, and more.
          </div>
          <div class="tab_bbx_job">
            <div class="tab_bbx_top_job tab_bbx_job_classified">
              <ul className="">
                <li
                  id="tab2_li"
                  className={`jobseeker_app_job ddlj ${
                    buyerTab ? "active" : ""
                  }`}
                  onClick={() => handleBuyerTab()}
                >
                  <a>User</a>
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
              {buyerTab && (
                <>
                  <div class="costomer_tab rj active" id="tab2">
                    <div class="row">
                      <div class="col-lg-4 col-md-3">
                        <div class="costomer_tab_right">
                          <img
                            src="/img/classified/classified_costomer.png"
                            alt="User"
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
                                Create account
                                <div class="product-idea">
                                  <p>
                                    User can register on the portal for posting
                                    ad on the portal.
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
                                Multiple Picture Upload
                                <div class="product-idea">
                                  <p>
                                    Posting multiple picture relevant to your
                                    product give more details to the customer.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/share_review.png"
                                />
                              </i>
                              <span>
                                Social Media Sharing
                                <div class="product-idea">
                                  <p>
                                    Share this classified ad to the social media
                                    platform to increase awareness about the
                                    product and service.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/social_login.png"
                                />
                              </i>
                              <span>
                                Social Media Login
                                <div class="product-idea">
                                  <p>
                                    User can directly login through social media
                                    i.e. facebook, twitter and google+.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/manage_classified.png"
                                />
                              </i>
                              <span>
                                Manage Classified
                                <div class="product-idea">
                                  <p>
                                    User can manage(add/edit/delete) classifieds
                                    & can activate/deactivate them with a single
                                    click
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/filter_project.png"
                                />
                              </i>
                              <span>
                                Advanced Filters
                                <div class="product-idea">
                                  <p>
                                    User can search for the classified by city,
                                    country, keyword, category, subcategory.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/postan_ad.png"
                                />
                              </i>
                              <span>
                                Post Classified
                                <div class="product-idea">
                                  <p>
                                    User can post classified by giving the
                                    required details with the relevant images.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/view_category.png"
                                />
                              </i>
                              <span>
                                Classified Category
                                <div class="product-idea">
                                  <p>
                                    User can view the search as per Classified
                                    Category and and view it in detail.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/search_location.png"
                                />
                              </i>
                              <span>
                                Location Based
                                <div class="product-idea">
                                  <p>
                                    User can Post classified to the individual
                                    location if your ads is more relevant to
                                    particular city.{" "}
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
                                Classified Listings
                                <div class="product-idea">
                                  <p>
                                    User can view the classifieds where the user
                                    can view details in with name, city, images,
                                    map, price, description, comments etc.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/manage_comments.png"
                                />
                              </i>
                              <span>
                                Message Feature
                                <div class="product-idea">
                                  <p>
                                    User can contact to the classified ad owner
                                    through message to get more information
                                    about product.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/view_alerts.png"
                                />
                              </i>
                              <span>
                                View Alerts
                                <div class="product-idea">
                                  <p>User can view the alerts using email.</p>
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
                            src="/img/classified/lsclassified_admin_mac.png"
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
                                  <p>
                                    Admin can login securely in Admin Panel.
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
                                Manage Dashboard
                                <div class="product-idea">
                                  <p>
                                    Admin can view total counts of Users,
                                    Classifieds & Categories. Admin can view the
                                    Users Statistics for today, yesterday, last
                                    7 days, last 30 days & last 12 months.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/manage_user.png"
                                />
                              </i>
                              <span>
                                Manage Users
                                <div class="product-idea">
                                  <p>
                                    Admin can view a list of all Users. Admin
                                    can manage (add/edit/delete) all Users.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/equipment_search.png"
                                />
                              </i>
                              <span>
                                Search & Filter Feature
                                <div class="product-idea">
                                  <p>
                                    Admin can search users by entering a first
                                    name, last name, email or created date.
                                    Admin can apply filters using a date.
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
                                Manage Configuration
                                <div class="product-idea">
                                  <p>
                                    Admin can change a username, password,
                                    email, set contact us address & can do site
                                    settings.
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
                                Manage Category
                                <div class="product-idea">
                                  <p>
                                    Admin can view the list of categories. Admin
                                    can manage (add/edit/delete) all categories.
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
                                Manage Subcategory
                                <div class="product-idea">
                                  <p>
                                    Admin can view the list of sub-categories.
                                    Admin can manage (add/edit/delete) all
                                    sub-categories.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/manage_classified.png"
                                />
                              </i>
                              <span>
                                Manage Classifieds
                                <div class="product-idea">
                                  <p>
                                    Admin can view the list of Classifieds.
                                    Admin can manage (add/edit/delete) all
                                    Classifieds.
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
                                View and Manage Comments
                                <div class="product-idea">
                                  <p>
                                    Admin can view the list on comments over
                                    classifieds. Admin can approve & Disapprove
                                    comments.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/manage_content.png"
                                />
                              </i>
                              <span>
                                Manage CMS(Content Management System)
                                <div class="product-idea">
                                  <p>
                                    Admin can manage(add/edit/delete) all front
                                    end content of the website.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/manage_address.png"
                                />
                              </i>
                              <span>
                                Manage Top Location
                                <div class="product-idea">
                                  <p>
                                    Admin can view list of top locations & can
                                    manage(add/edit/delete) all Top Location.
                                  </p>
                                </div>
                              </span>
                            </li>{" "}
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/active_deactive.png"
                                />
                              </i>
                              <span>
                                Activate/Deactivate Categories
                                <div class="product-idea">
                                  <p>
                                    Admin can activate & deactivate the
                                    categories.
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
              What does our <span>LS Classifier </span> offer you ?
            </h2>
            <p align="justify">
              Our readymade Classified Ads software similar to craigslist lets
              you start an automated Classified Ads application which helps to
              sell products through online marketing. This php Classified
              application allows the users to post their products and services
              which works in various segments including real estate, sales,
              community, vehicles and more.
            </p>
            <p align="justify">
              We at Logicspice, provide mobile apps for android and iOS like
              OLX, which you can easily launch right away and start your venture
              through this Classified advert software. This is a user friendly
              mobile app, no development or programming skills required to
              tackle.
            </p>
            <p align="justify">
              People nowadays are more likely to digitize and LS Classifier is
              the most convenient way to stay connected with the people. Our
              Classified listing software is fully functional, scalable, and
              easy to use. We also provide custom solutions to meet your
              business requirements in the form of design and complex
              functionality.
            </p>
            <p align="justify">
              We provide the best Classified ads software which allows you to
              operate your advertising system from remote locations and can be
              easily integrated into your new or existing website.
            </p>
            <p align="justify">
              In this application, you will get product or service pages with
              complete details about the item along with details of its owner.
              you can directly contact the owner for enquiry. Sellers can add a
              number of products and services with this application.
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
                    Unlimited Classified Listings: List as many classNameifieds
                    as you need without any limitations.
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
      <section id="subscriptionprice" className="SubscriptionpriceSection">
        <div className="container">
          <h2 className="taxt_tt_job">Delivered Solution</h2>
          <div className="SubscriptionModelPrice">
            <div className="SubscriptionModelPriceBx">
              <h4>
                ₹88,160<span className="sml_labl"> INR</span>
              </h4>
              <strike className="srik_cls">
                ₹147,754<span className="sml_labl"> INR</span>{" "}
              </strike>

              <div className="SubscriptionModelPriceBtn">
                <div className="btn btn-get" onClick={openModal}>
                  <button>Get Demo Access!</button>
                  {
                    <Enquirymodal
                      modalStatus={showModal}
                      toggle={openModal}
                      title="Please fill the form below and get access to the live demo of Classified Ads software
                  .See how it work yourself!"
                    />
                  }
                </div>
                <Link
                  className="btn fiverr-buys"
                  href="/softwares/buynow/classNameified-ads-script"
                  id="buy_now_1"
                >
                  Buy Now
                </Link>
              </div>
              <div className="jocpp">
                <ul className="job-pr-icon">
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
                <div className="portel-btnbx">
                  <div className="line-border NewLineBoader">
                    <img
                      src="/img/jobboard/stars.png"
                      alt=""
                      className="lazy"
                    />
                    <p>24 Reviews</p>
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
              Logicspice is the best partner for your Classified ads software
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
              <a
                class=""
                aria-controls="buyjobportal"
                onClick={toggleBuyJobPortalModal}
              >
                <i class="fa fa-building" aria-hidden="true"></i>
                <span>Companies Using It</span>
              </a>
              <a onClick={toggleInfo} class="ylogicspice">
                <i>
                  <img
                    src="/img/images/why-logic-icon.png"
                    alt=""
                    class=""
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
        {/* Button to Open Job Portal Modal */}

        {/* Job Portal Modal */}
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
                <div class="SliderMainBx">
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
                <div class="SliderMainBx">
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
                <div class="SliderMainBx">
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
                <div class="SliderMainBx">
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
                <div class="SliderMainBx">
                  <div class="feat-slide-img">
                    <img
                      src="/img/jobboard/Manage_jobs_job_portal_script.png"
                      alt="Job Management"
                    />
                  </div>
                  <div class="hands-proved">
                    <div class="titleof_scnew">Job Management</div>
                    <div class="pro-feat-detai">
                      Manage the jobs created by them making them active or
                      inactive. Check the list of job seekers who applied for
                      job.
                    </div>
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
      <section className="used_technology_section" id="technologies">
        <div className="container">
          <h4 className="title_main">
            <span>Used Technologies</span> and Server Requirements
          </h4>
          <div className="used_technology_section_dataa">
            <div className="row">
              <div className="col-sm-6">
                <ul>
                  <li data-aos="fade-up" className="aos-init aos-animate">
                    <div className="icntechimg">
                      <img
                        src="/img/jobboard/frame_wordpress_icon.png"
                        alt="wordpress Development"
                      />
                    </div>
                    <div className="icntechimg_nm">Wordpress</div>
                  </li>
                  <li data-aos="fade-up" className="aos-init aos-animate">
                    <div className="icntechimg">
                      <img src="/img/jobboard/html-5.png" alt="HTML5" />
                    </div>
                    <div className="icntechimg_nm">HTML5</div>
                  </li>
                  <li data-aos="fade-up" className="aos-init aos-animate">
                    <div className="icntechimg">
                      <img
                        src="/img/jobboard/tech_mysql_icon.png"
                        alt="MySQL"
                      />
                    </div>
                    <div className="icntechimg_nm">MySQL</div>
                  </li>
                  <li data-aos="fade-up" className="aos-init aos-animate">
                    <div className="icntechimg">
                      <img
                        src="/img/jobboard/tech_apache_icon.png"
                        alt="Apache"
                      />
                    </div>
                    <div className="icntechimg_nm">Apache</div>
                  </li>
                  <li data-aos="fade-up" className="aos-init aos-animate">
                    <div className="icntechimg">
                      <img
                        src="/img/jobboard/apple_phn_icon.png"
                        alt="MySQL"
                        className="lazy"
                      />
                    </div>
                    <div className="icntechimg_nm">iOS</div>
                  </li>
                  <li data-aos="fade-up" className="aos-init aos-animate">
                    <div className="icntechimg">
                      <img
                        src="/img/jobboard/andoird_icon.png"
                        alt="Apache"
                        className="lazy"
                      />
                    </div>
                    <div className="icntechimg_nm">Android</div>
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
                    <b>CMS - </b> Wordpress
                  </li>
                  <li className="same aos-init aos-animate" data-aos="fade-up">
                    <b>Language - </b> PHP 5.4+, AJAX, jQuery
                  </li>
                  <li className="other aos-init aos-animate" data-aos="fade-up">
                    <b>Design - </b> HTML 5, CSS 3, Bootstrap 3.3.7, JavaScript
                  </li>
                  <li className="other aos-init aos-animate" data-aos="fade-up">
                    <b>Database – </b> MySQL 5.5+{" "}
                  </li>
                  <li className="other aos-init aos-animate" data-aos="fade-up">
                    <b>Server – </b> Apache 2.4+
                  </li>
                  <li className="other aos-init aos-animate" data-aos="fade-up">
                    <b>iOS - </b> xcode 10.2.1 and swift 4.2{" "}
                  </li>
                  <li className="other aos-init aos-animate" data-aos="fade-up">
                    <b>Android - </b> java 9 and Android Studio 3.4
                  </li>
                </ul>
              </div>
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
                <div className="supportsettingtext">Free Brand Removal</div>
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
                      <div className="people_star_num">510</div>
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
                      <div className="people_star_num">46</div>
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
                          style={{ width: "20%" }}
                        ></div>
                      </div>
                      <div className="people_star_num">13</div>
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
                      title="PHP Business Directory Script"
                    />
                  </div>
                
                <div className="col-md-12">
                  <div className="customers_review_sec_row">
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
                    <div className="customer_review_stext" id="fiveer-clone">
                      "This is the best fiverr clone script. Thanks for your
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
                    <div className="customer_review_stext">
                      "Recently I bought this script from logicspice and it
                      worked really nice, it helped my business to gain more
                      efficiency. I recommend for all whom looking for a Fiverr
                      Clone script, it's really nice."
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
              <h4 className="title_main">Quick FAQ</h4>
              <div className="MainFaqBx">
                <MDBAccordion v-model="activeItem" borderless>
                  <MDBAccordionItem
                    headerTitle="How can a user search for classifieds around his location?"
                    collapseId="flush-collapse1"
                  >
                    <p>
                      User can enter his city in the website and all the items
                      that are around will be listed to the user.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Can a user upload one classified ad in multiple categories?"
                    collapseId="flush-collapse2"
                  >
                    <p>
                      Yes, User can put one classified ad in multiple categories
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="How many days it will take to implement?"
                    collapseId="flush-collapse3"
                  >
                    <p>
                      It will take 7 days to implement your php Classified
                      software.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Can a user upload multiple classified ads to the website?"
                    collapseId="flush-collapse4"
                  >
                    <p>
                      Yes, a user can upload more than one classified ads to the
                      website.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Can a user view the contact information of the seller?"
                    collapseId="flush-collapse5"
                  >
                    <p>
                      Yes. If a seller chooses to share his contact information
                      on the website, the user can see it.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Along with hosting server details, what other recommendations?"
                    collapseId="flush-collapse6"
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
          <h2 className="title_main">LS Classifier Features</h2>
          <div id="equipment_sldier">
            <Lsclassified />
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
                    title=" Classified Ads software"
                  />
                }
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="latest_feature_product">
        <div className="container">
          <h2 className="title_main">Other Popular Softwares</h2>
          <div className="other-product-box">
            <div className="row">
              <div className="col-sm-6 col-md-4">
                <div className="thumbnail">
                  <Link
                    title="View Detail"
                    target="_black"
                    href="/softwares/business-directory-system"
                  >
                    <div className="caption">
                      <div className="other-caption-bx">
                        <h3>Business Directory</h3>
                        <div class="other-project-logo">
                          <img
                            src="/img/jobboard/business-logo.png"
                            alt="business-directory-system"
                            class=""
                          />
                        </div>
                        <p>
                          <span>Yellow Pages Clone, Yelp Clone</span>{" "}
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
                    href="/softwares/fiverr-clone"
                  >
                    <div className="caption">
                      <div className="other-caption-bx">
                        <h3>Fiverr clone</h3>
                        <div className="other-project-logo">
                          <img
                            src="/img/jobboard/gigger_logo_new.png"
                            alt="fiverr-clone"
                            class=""
                          />
                        </div>
                        <p>
                          <span>On Demand Marketplace Software</span>
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
                    href="/softwares/recruitment-management-software"
                  >
                    <div className="caption">
                      <div className="other-caption-bx">
                        <h3>Recruitment Management Software</h3>
                        <div className="other-project-logo">
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
            <img src="/img/images/whatsapp.png" alt="whatsapp-icon" />
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