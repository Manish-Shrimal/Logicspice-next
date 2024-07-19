"use client";
import React, { useRef, useState } from "react";
import "@/app/softwares/softwares.css";
import Link from "next/link";
import Footer from "@/app/Components/Footer";
import Navbar from "@/app/Components/Navbar";
import "@fortawesome/fontawesome-free/css/all.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Enquirymodal from "@/app/Components/Enquirymodal";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Whylogicspice from "@/app/Components/Whylogicspice";
import Reviewmodals from "@/app/Components/Reviewmodals";



// import required modules
import { Pagination, Navigation } from "swiper/modules";
import {
  MDBAccordion,
  MDBAccordionItem,
  MDBModal,
  MDBModalBody,
} from "mdb-react-ui-kit";
import Contactusmodel from "@/app/Components/Contactusmodel";
import { Modal, ModalBody } from "react-bootstrap";



const page = () => {
    const [sellerTab, setSellerTab] = useState(true);
  const [buyerTab, setBuyerTab] = useState(false);
  const [adminTab, setAdminTab] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [buyjobportal, setBuyJobportal] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);

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


  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  const toggleBuyJobPortalModal = () => setBuyJobportal(!buyjobportal);


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

 
  const [showInfo, setShowInfo] = useState(false);

  const [showModal, setShowModal] = useState(false);


  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  const openReviewModel = () => {
    setShowReviewModal(!showReviewModal);
  };

  const openModal = () => {
    setShowModal(!showModal);
  };



  return (
    <>
      <Navbar />
      <section class="paid-pro job-portal-banner fiverr-new-banner job-portal-bg NewJobSiteDesign BusinessDirectoryBanner">
        <div class="container">
          <div class="row">
            <div class="col-sm-7 col-md-7">
              <h1>LS Bunet - PHP Business Directory Software</h1>
              <div class="both-left-p-sec">
                <h2>Similar to Yellow Pages &amp; Yelp</h2>
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
                <div class="job-valu-btn">
                  <span>Fill your basic details and</span>
                 
                   <div className="btn btn-get" onClick={openModal}>
                    <button>Get Demo Access!</button>
                    {
                      <Enquirymodal
                        modalStatus={showModal}
                        toggle={openModal}
                        title="Please fill the form below and get access to the live demo of PHP Business Directory Script
                  .See how it work yourself!"
                      />
                    }
                  </div>

                  <Link
                    class="btn fiverr-buys"
                    href="https://www.logicspice.com/softwares/buynow/business-directory-system"
                    id="buy_now_1"
                  >
                    Buy Now
                  </Link>
                </div>
                <div class="SubscriptionPrice">
                  <div class="DeliSou" style={{ display: "none" }}>
                    <span>For</span> Delivered Solution{" "}
                    <a href="#subscriptionprice">click here</a>
                  </div>{" "}
                  <div class="line-border NewLineBoader">
                    <img
                      src="/img/jobboard/stars.png"
                      alt=""
                      class="lazy"
                    />
                    <p>26 Reviews</p>
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
                  src="/img/businessdirectory/Business_Directory_Banner_Img.png"
                  alt="business-directory-system"
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
                  Business Directory System
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section class="job-section-top-new JobBoardSectionNew">
        <div class="container">
          <p>
            LS Bunet is an online classified like directory software and is
            basically for listing businesses and their products &amp; services
            whether it be a manufacturer, service provider, supplier,
            importer/exporter, or vendor. This Business listing software has all
            those cool features, which make showcasing of businesses and their
            product/service details easy. It could work as a business
            marketplace, where the businesses may see business details or other
            businesses and contact each other.
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
                src="https://www.youtube-nocookie.com/embed/IlTZW3v7WYs?rel=0"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen=""
              ></iframe>
            </div>
            <div class="col-md-6">
              <div class="service-market-ttd">
                <ul>
                  <li>
                    Business owners can create their business profiles through
                    which they can list all their business information
                  </li>
                  <li>
                    Customers receive correct information about business because
                    the information can be verified.
                  </li>
                  <li>
                    Business owners can add products/services here to promote
                    them.
                  </li>
                  <li>
                    Customers can search for businesses around them using the
                    city and state filters.
                  </li>
                  <li>
                    Business owners can receive reviews about their business.
                  </li>
                  <li>
                    Customers can give ratings to the businesses, which can be
                    viewed by other customers.
                  </li>
                  <li>Responsive website (mobile friendly)</li>
                  <li>White labeled software</li>
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
            <h2 class="taxt_tt_job">LS Bunet Features</h2>
          </div>
          <div class="tatxt_txt_job">
            This Business Directory software is similar to Yellow Pages,
            provides customers with a platform where they can list their entire
            business details about their products &amp; services, and post
            pictures of their products, and can also share the link to their
            websites along with contact details of their business and hence
            showcase their entire business online for future growth.
          </div>
          <div class="tab_bbx_job">
            <div class="tab_bbx_top_job">
              <ul>
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
                  className={`business-directory-system ddlj ${buyerTab ? "active" : ""}`}
                  onClick={() => handleBuyerTab()}
                >
                  <a>Vendor Panel </a>
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
                  <div className="row">
                  <div className="col-lg-4 col-md-3">
                    <div className="costomer_tab_right costomer_tab_rightleft">
                      <img
                        src="/img/businessdirectory/business-directory_user_mobile.png"
                        alt="User"
                      />
                    </div>
                  </div>
                  <div className="col-lg-8 col-md-9">
                    <div className="costomer_tab_left costomer_tab_leftright">
                    <ul>
                                       <li>
                                        <i> <img src="/img/jobboard/manage_profile.png" alt="Business Search" /></i>
                                        <span>Manage Profile
                                         <div class="product-idea">
                                                <p>Customers are able to create their accounts and are able to manage profiles.</p>
                                            </div>
                                        </span>
                                    </li>   
   <li>
                                        <i>  <img src="/img/jobboard/send_mail.png" alt="Review Feature" /></i>
                                        <span>Send Enquiry
                                         <div class="product-idea">
                                                 <p>Customers can send inquiries about the business which they want.</p>
                                            </div>
                                        </span>
                                    </li>									
                                         <li>
                                        <i><img src="/img/jobboard/review_feature.png" alt="Business Listing" /></i>
                                        <span>Sort Business
                                         <div class="product-idea">
                                                <p>Customers are able to sort businesses by categories, locations, business titles, etc.</p>
                                            </div>
                                        </span>
                                    </li> 
									 <li>
                                        <i>  <img src="/img/jobboard/manage_city.png" alt="Review Feature" /></i>
                                        <span>Browse Business By City
                                         <div class="product-idea">
                                                 <p>Customers can easily get the listing of the business by cities.</p>
                                            </div>
                                        </span>
                                    </li>
                                    <li>
                                        <i>  <img src="/img/jobboard/reviews_ratings.png" alt="Offers Section" /></i>
                                        <span>Reviews & Rating Management
                                         <div class="product-idea">
                                               <p>Customers are able to post reviews & ratings for the business.</p>
                                            </div>
                                        </span>
                                    </li>                               
                                                                
                                      <li>
                                        <i> <img src="/img/jobboard/manage_news.png" alt="Business Detail" /></i>
                                        <span>Newsletter Subscription
                                         <div class="product-idea">
                                                <p>Customers are able to subscribe to newsletters. Browse Business by City: Customers can easily get the listing of the business by Cities.</p>
                                            </div>
                                        </span>
                                    </li> 
                                    
                                  
                                    
                                 
                                 
                                     
                                </ul>
                    </div>
                  </div>
                </div>
                </>
              )}

              {buyerTab && (
                <>
                 <div className="row">
                  <div className="col-lg-4 col-md-3">
                    <div className="costomer_tab_right">
                      <img
                        src="/img/businessdirectory/business-directory_user_mobile.png"
                        alt="User"
                      />
                      
                    </div>
                  </div>
                  <div className="col-lg-8 col-md-9">
                    <div className="costomer_tab_left">
                    <ul>
                                    
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/ragister-icon.png" /></i>
                                        <span>Create Account<div class="product-idea product-idea1">
                                            <p>Vendor can register on the portal and create listings for his business</p>
                                        </div></span>
                                    </li>
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/create-project.png" /></i>
                                        <span>Add Business<div class="product-idea product-idea1">
                                            <p>Vendors can manage their business, able to Add, Edit, and Delete the Business.</p>
                                        </div></span>
                                    </li>
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/search_location.png" /></i>
                                        <span>Location Management<div class="product-idea">
                                            <p>Vendors can add Locations for their business</p>
                                        </div></span>
                                    </li>
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/crm-management.png" /></i>
                                        <span>CRM Management<div class="product-idea product-idea1">
                                            <p>Vendors are able to manage CRM, they can manage Customers, Prospects, Emails, etc.</p>
                                        </div></span>
                                    </li>
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/manage-project.png" /></i>
                                        <span>Product Management<div class="product-idea">
                                            <p>Vendors can add Products and are able to edit and delete the products.</p>
                                        </div></span>
                                    </li>
                                    
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/manage_services.png" /></i>
                                        <span>Services Management<div class="product-idea">
                                            <p>Vendors can add Services and are able to edit and delete the services.</p>
                                        </div></span>
                                    </li>  
                                     <li>
                                        <i><img alt="img" src="/img/jobboard/form-management.png" /></i>
                                        <span>Form Management<div class="product-idea">
                                            <p>Vendors are able to create a particular form for their business, this form can be displayed on their business page. And also able to edit and delete the forms and also able to see the form entries. </p>
                                        </div></span>
                                    </li>                                    
                                      <li>
                                        <i><img alt="img" src="/img/jobboard/enquiry-management.png" /></i>
                                        <span>Enquiry Management<div class="product-idea">
                                            <p>Vendors are able to manage the queries whatever posted by Enquiries.</p>
                                        </div></span>
                                    </li>
                                   
                                   <li>
                                        <i><img alt="img" src="/img/jobboard/catalog-management.png" /></i>
                                        <span>Catalog Management<div class="product-idea">
                                            <p>Vendors can add the catalog for their business.</p>
                                        </div></span>
                                    </li>
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/fov_cant.png" /></i>
                                        <span>Manage Favorites<div class="product-idea">
                                            <p>Vendors can add Businesses, Products, and Services to their favorite list.</p>
                                        </div></span>
                                    </li>
                                    
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/manage_news.png" /></i>
                                        <span>Newsletter Feature<div class="product-idea">
                                            <p>Vendors are able to add their email templates and also able to Create and Import the mailing listing, so they can send emails to the added mailing listing.</p>
                                        </div></span>
                                    </li>
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/manage_cat.png" /></i>
                                        <span>Manage Videos<div class="product-idea">
                                            <p>Vendors are able to upload their YouTube videos that are related to their business and also able to edit and delete the added videos.</p>
                                        </div></span>
                                    </li>
                                </ul>
                    </div>
                  </div>
                </div>
                </>
              )}


              {adminTab && (
                <>
                  <div className="row">
                  <div className="col-lg-4 col-md-3 ">
                    <div className="costomer_tab_right costomer_tab_rightleft2">
                      <img
                        src="/img/businessdirectory/business-directory-admin.png"
                        alt="Admin Panel"
                      />
                    </div>
                  </div>
                  <div className="col-lg-8 col-md-9">
                    <div className="costomer_tab_left costomer_tab_leftright2">
                    <ul>
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/secure_login.png" /></i>
                                        <span>Secure Login
                                         <div class="product-idea">
                                                <p>Administrator is able to login securely over the admin panel.</p>
                                            </div>
                                        </span>
                                    </li>
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/admin_dash.png" /></i>
                                        <span>Manage Dashboard
                                         <div class="product-idea">
                                                <p>Admin can easily navigate to the listings and they will get all the counts.</p>
                                            </div>
                                        </span>
                                    </li>
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/manage_user.png" /></i>
                                        <span>Manage Users
                                        <div class="product-idea">
                                                <p>Admin is able to manage all the basic details of users(view, add, edit, and delete).</p>
                                            </div>
                                        </span>
                                    </li>
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/social_login.png" /></i>
                                        <span>Manage Business Directory
                                         <div class="product-idea">
                                                <p>Admin can manage and configure business directory settings, able to Submit notes and Emails.</p>
                                            </div>
                                        </span>
                                    </li>
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/manage-project.png" /></i>
                                        <span>Manage Products
                                         <div class="product-idea">
                                                <p>Admin is able to manage the products, able to edit, delete, activate, and deactivate the products.</p>
                                            </div>
                                        </span>
                                    </li>
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/manage_services.png" /></i>
                                        <span>Manage Services
                                         <div class="product-idea">
                                                <p>Admin can manage services and is able to submit notes and Emails. Also able to edit, delete, activate, and deactivate the services.</p>
                                            </div>
                                        </span>
                                    </li>
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/postan_ad.png" /></i>
                                        <span>Manage Events
                                         <div class="product-idea">
                                                <p>Admin is able to manage Events and is able to Add, Edit, Delete, Activate & deactivate Events.</p>
                                            </div>
                                        </span>
                                    </li>
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/manage_news.png" /></i>
                                        <span>Manage Newsletters
                                         <div class="product-idea">
                                                <p>Admin can Add Newsletters and is able to send newsletters to the users according to admin.</p>
                                            </div>
                                        </span>
                                    </li>
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/manage_plan.png" /></i>
                                        <span>Manage Plans
                                         <div class="product-idea">
                                                <p>Admin is able to Add Subscription Plans and is able to Edit Plans.</p>
                                            </div>
                                        </span>
                                    </li>
                                   
                                   <li>
                                        <i><img alt="img" src="/img/jobboard/search_location.png" /></i>
                                        <span>Manage Countries, State, And Cities
                                         <div class="product-idea">
                                                <p>Admin can Add Countries and for those added countries, admin can add states and cities.</p>
                                            </div>
                                        </span>
                                    </li>
                                     <li>
                                        <i><img alt="img" src="/img/jobboard/view_category.png" /></i>
                                        <span>Manage Categories
                                         <div class="product-idea">
                                                <p>Admin is able to Add, Edit, and Delete Categories.</p>
                                            </div>
                                        </span>
                                    </li>
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/send_mail.png" /></i>
                                        <span>Manage Emails
                                         <div class="product-idea">
                                                <p>Admin can send Emails to the users.</p>
                                            </div>
                                        </span>
                                    </li>
                                </ul>
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
              What does our <span>What does our LS Bunet</span> offer you ?
            </h2>
            <p align="justify">
              Our Business Directory Software is a stand-alone{" "}
              <strong>PHP Business Directory</strong> with numerous features to
              build your own online business directory site. You can create an
              unlimited number of countries, cities, categories, add business,
              products, and services to this business directory website.
            </p>
            <p align="justify">
              Our LS Bunet will allow the business owners to put the details of
              their business and create their business page which can be
              searched by the customer. it's not limited to adding their
              business only, they can add address, telephone number, business
              logo, images, website links, and also can list their business
              products and services on which they will receive reviews. Business
              owners can see how well their profile is performing and make
              adjustments to improve it. Here on Business Directory Software,
              Registered Business Owners have a large platform under a
              well-known domain name, and local businesses have an opportunity
              to grow their business.
            </p>
            <p align="justify">
              By using our PHP Business Directory listing software similar to
              Yellow Pages, customers will be able to search for products and
              services over the website. They will be able to narrow down their
              search by using various filters and sorts. They can view details
              of services/products along with the details of the business owner.
              Customers can rate the product/service that is available on the
              site.
            </p>
            <p align="justify">
              Our <strong>Business Listing software</strong> is a
              ready-to-install directory software so anyone can use it. Whether
              it's related to a professional, a particular niche, a networking
              company or organization, or any other business entity, who is
              looking to launch their own business directory/classified web
              application, can use this software without having any technical
              knowledge.
            </p>
            <p align="justify" class="new_red_food">
              Also, if you want some customization in this ready-to-use Business
              Directory Software or want to add some extra features, our team of
              expert web developers will be happy to do it for you.
            </p>
            <p align="justify">
              Are you a non-technical person? Don't worry! We do free
              installation for the first time and if you need any help you can
              contact us anytime.
            </p>
          </div>
        </div>
      </section>
      <section
        class="SubscriptionModel"
        id="subscriptionmodel"
        style={{ background: "#f1f1f1" }}
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
                    Unlimited Business Listing: Post as many business listings
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
      <section id="subscriptionprice" class="SubscriptionpriceSection">
        <div class="container">
          <h2 class="taxt_tt_job">Delivered Solution</h2>
          <div class="SubscriptionModelPrice">
            <div class="SubscriptionModelPriceBx">
              <h4>
                ₹88,156<span class="sml_labl"> INR</span>
              </h4>
              <strike class="srik_cls">
                ₹147,748<span class="sml_labl"> INR</span>{" "}
              </strike>
              <div class="SubscriptionModelPriceBtn">
              <div className="btn btn-get" onClick={openModal}>
                    <button>Get Demo Access!</button>
                    {
                      <Enquirymodal
                        modalStatus={showModal}
                        toggle={openModal}
                        title="Please fill the form below and get access to the live demo of PHP Business Directory Script
                  .See how it work yourself!"
                      />
                    }
                  </div>
                <Link
                  class="btn fiverr-buys"
                  href="https://www.logicspice.com/softwares/buynow/business-directory-system"
                  id="buy_now_1"
                >
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
                    <img
                      src="/img/jobboard/stars.png"
                      alt=""
                      class="lazy"
                    />
                    <p>26 Reviews</p>
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
      <section class="job_portal_area job_portal_area_food">
        <div class="container">
          <div class="job_or_title">
            <h2 class="taxt_tt_job">
              Logicspice is the best partner for your LS Bunet solution!
            </h2>
            <br />
            <div class="logic-parter">
            <Link
            href=""
                class=""
                aria-controls="buyjobportal"
                onClick={toggleBuyJobPortalModal}
              >
                <i class="fa fa-building" aria-hidden="true"></i>
                <span>Companies Using It</span>
              </Link>
              <a onClick={toggleInfo} class="ylogicspice">
                <i>
                  <img
                    src="https://www.logicspice.com/app/webroot/img/images/product_new/why-logic-icon.png"
                    alt=""
                    class=""
                  />
                </i>
                <span>Why Logicspice</span>
              </a>
              <Whylogicspice open={showInfo}  />

            </div>
          </div>
        
         
        </div>
      </section>

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
      <section class="used_technology_section" id="technologies">
        <div class="container">
          <h4 class="title_main">
            <span>Used Technologies</span> and Server Requirements
          </h4>
          <div class="used_technology_section_dataa">
            <div className="row">
              <div class="col-sm-6">
                <ul>
                  <li data-aos="fade-up" class="aos-init aos-animate">
                    <div class="icntechimg">
                      <img
                        src="/img/jobboard/tech_cakephp_icon.png"
                        alt="CakePHP Development"
                      />
                    </div>
                    <div class="icntechimg_nm">CakePHP</div>
                  </li>
                  <li data-aos="fade-up" class="aos-init aos-animate">
                    <div class="icntechimg">
                      <img
                        src="/img/jobboard/html-5.png"
                        alt="HTML5"
                      />
                    </div>
                    <div class="icntechimg_nm">HTML5</div>
                  </li>
                  <li data-aos="fade-up" class="aos-init aos-animate">
                    <div class="icntechimg">
                      <img
                        src="/img/jobboard/tech_mysql_icon.png"
                        alt="MySQL"
                      />
                    </div>
                    <div class="icntechimg_nm">MySQL</div>
                  </li>
                  <li data-aos="fade-up" class="aos-init aos-animate">
                    <div class="icntechimg">
                      <img
                        src="/img/jobboard/tech_apache_icon.png"
                        alt="Apache"
                      />
                    </div>
                    <div class="icntechimg_nm">Apache</div>
                  </li>
                  <li data-aos="fade-up" class="aos-init aos-animate">
                    <div class="icntechimg">
                      <img
                        src="/img/jobboard/apple_phn_icon.png"
                        alt="iOS"
                      />
                    </div>
                    <div class="icntechimg_nm">iOS</div>
                  </li>
                  <li data-aos="fade-up" class="aos-init aos-animate">
                    <div class="icntechimg">
                      <img
                        src="/img/jobboard/andoird_icon.png"
                        alt="Android"
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
                    <b>Framework - </b> CakePHP
                  </li>
                  <li class="same aos-init aos-animate" data-aos="fade-up">
                    <b>Language - </b> PHP 5.4+, AJAX, jQuery
                  </li>
                  <li class="other aos-init aos-animate" data-aos="fade-up">
                    <b>Design - </b> HTML 5, CSS 3, JavaScript
                  </li>
                  <li class="other aos-init aos-animate" data-aos="fade-up">
                    <b>Database - </b> MySQL 5.5+{" "}
                  </li>
                  <li class="other aos-init aos-animate" data-aos="fade-up">
                    <b>Server - </b> Apache 2.4+
                  </li>
                  <li class="other aos-init aos-animate" data-aos="fade-up">
                    <b>iOS - </b> xcode 11.3 and swift 5{" "}
                  </li>
                  <li class="other aos-init aos-animate" data-aos="fade-up">
                    <b>Android - </b> java 9 and Android Studio 4.1
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
              <li data-aos="fade" class="aos-init aos-animate">
                <div class="supportsetting_icn">
                  <img
                    src="/img/jobboard/month_half_icon.png"
                    alt="manager_icn"
                  />
                </div>
                <div class="supportsettingtext">Free Support</div>
              </li>
              <li data-aos="fade" class="aos-init aos-animate">
                <div class="supportsetting_icn">
                  <img
                    src="/img/jobboard/free_remove_icon.png"
                    alt="manager_icn"
                  />
                </div>
                <div class="supportsettingtext">Free Brand Removal</div>
              </li>
              <li data-aos="fade" class="aos-init aos-animate">
                <div class="supportsetting_icn">
                  <img
                    src="/img/jobboard/free_instal.png"
                    alt="manager_icn"
                  />
                </div>
                <div class="supportsettingtext">Free Installation</div>
              </li>
              <li data-aos="fade" class="aos-init aos-animate">
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
                      <div class="people_star_num">23</div>
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
                      <div class="people_star_num">3</div>
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
                  <a class="btn btn-primary" onClick={openReviewModel}>
                    Rate and Review product
                  </a>
                 
                  <Reviewmodals
                    modalStatus={showReviewModal}
                    toggle={openReviewModel}
                    title ="PHP Business Directory Script"
                  />
                </div>
                <div class="col-md-12">
                  <div class="customers_review_sec_row">
                    <div class="customer_review_stext">
                      "Great work - I installed this business directory software
                      and it is working properly. I appreciate Logicspice and
                      their support team, Thank you!"
                    </div>
                    <div
                      class="who_ratset"
                      style={{ text: "right", paddingRight: "17px" }}
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
                      Clark - Methew, Canada{" "}
                      <span>
                        <img
                          src="/img/jobboard/canada_flag_img.png"
                          alt="mobile app development in Canada"
                          style={{ width: "20px", marginLeft: "3px" }}
                        />
                      </span>
                    </div>
                  </div>
                  <div class="customers_review_sec_row">
                    <div class="customer_review_stext" id="fiveer-clone">
                      "I bought this software from logicspice and it has no
                      bugs. They provided me the full support, installed it for
                      me, and also fixed some issues related to my queries.
                      Timely response to my emails. Worth for money."
                    </div>

                    <div
                      class="who_ratset"
                      style={{ text: "right", paddingRight: "17px" }}
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
                      <span id="client-name">
                        Rafish Saabdeen, Dubai [UAE]{" "}
                      </span>{" "}
                      <span>
                        <img
                          src="/img/jobboard/german.png"
                          alt="mobile app development in Dubai"
                        />
                      </span>
                    </div>
                  </div>
                  <div class="customers_review_sec_row">
                    <div class="customer_review_stext">
                      "We have tried several software for business directory
                      purposes. They are full of bugs and some others are so
                      slow but the logicspice business directory software is
                      working very fast and accurately. It has all the features
                      that a directory should have. I recommend logicspice for
                      ready-made PHP software, professional & great customer
                      service."
                    </div>
                    <div
                      class="who_ratset"
                      style={{  paddingRight: "17px" }}
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
                      Adom, USA{" "}
                      <span>
                        <img
                          src="/img/jobboard/uae_flag_iimg.png"
                          alt="mobile app development in USA"
                          style={{ width: "20px", marginLeft: "3px" }}
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
                    headerTitle="How can a customer search for businesses around his location?"
                    collapseId="flush-collapse1"
                  >
                    <p>
                      A Customer can enter his zip/postal code on the website
                      and all the businesses that are around will be listed to
                      the customer.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Can the customer give rating to a business even if he hasn't visited the store?"
                    collapseId="flush-collapse2"
                  >
                    <p>
                      Yes, customer can give rating out of 5 even if they
                      haven't visited the store. Customer can also write a
                      review along with the rating.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Can a business owner upload multiple services to the website?"
                    collapseId="flush-collapse3"
                  >
                    <p>
                      Yes, the business owner can upload multiple
                      services/products that he deals in.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="How can a customer ensure the authenticity of the information of different businesses?"
                    collapseId="flush-collapse4"
                  >
                    <p>
                      Whenever a business owner creates a page for his business,
                      it has to be approved by the admin.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Can a user view the contact information of the seller?"
                    collapseId="flush-collapse5"
                  >
                    <p>
                      Yes. If a seller chooses to share his contact information
                      on the website, the customer can see it.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Can I update some design and functionality in the application code myself?"
                    collapseId="flush-collapse6"
                  >
                    <p>Yes, You will have access to all the code.</p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Will I be able to use it on multiple domains, after I purchase this software?"
                    collapseId="flush-collapse7"
                  >
                    <p>
                      You will be licensed to use it only for the domain, you
                      purchased for.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Can I resell the software? Will I have rights over the software code?"
                    collapseId="flush-collapse8"
                  >
                    <p>
                      No, You can't resell the software. All rights will remain
                      with Logicspice only.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Do you offer Money Back Guarantee?"
                    collapseId="flush-collapse9"
                  >
                    <p>
                      Yes, we offer 30 days money-back guarantee to ensure
                      customer satisfaction with our software. If for any
                      reason, you wish to discontinue using the product, you can
                      ask us for a refund. We will refund your total money
                      except the installation and configuration charges, which
                      is USD 65 or 20% of the application cost, whichever is
                      greater.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Along with hosting server details, what other recommendations?"
                    collapseId="flush-collapse10"
                  >
                    <p>
                      We recommend you purchase an SSL certificate along with a
                      hosting server, considering that an SSL certificate is
                      necessary for all websites these days and it provides a
                      secure layer to the website as well.
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
          <h2 class="title_main">PHP Business Directory Software Features</h2>
          <div id="equipment_sldier">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div class="feat-slide-img">
                  <img
                    src="/img/businessdirectory/BusinessDetails.png"
                    alt="Business Details"
                  />
                </div>
                <div class="hands-proved">
                  <div class="titleof_scnew">Business Details</div>
                  <div class="pro-feat-detai">
                    Business details like title, image, description, place,
                    categories, list of reviews and ratings.
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="feat-slide-img">
                  <img
                    src="/img/businessdirectory/BusinessListing.png"
                    alt="Business Listing"
                  />
                </div>
                <div class="hands-proved">
                  <div class="titleof_scnew">Service Listing</div>
                  <div class="pro-feat-detai">
                    Users can view a list of business according to their search
                    criteria with the details of the business.
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="feat-slide-img">
                  <img
                    src="/img/businessdirectory/add-business-new.png"
                    alt="add-business"
                  />
                </div>
                <div class="hands-proved">
                  <div class="titleof_scnew">Add Business</div>
                  <div class="pro-feat-detai">
                    Users can view discount that is being offered and offer
                    title, image and description.{" "}
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="feat-slide-img">
                  <img
                    src="/img/businessdirectory/PopularPlacesNew.png"
                    alt="Popular Places"
                  />
                </div>
                <div class="hands-proved">
                  <div class="titleof_scnew">Search Products</div>
                  <div class="pro-feat-detai">
                    Users can see the popular businesses on the website and
                    sorted according to their rating and number of reviews.
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
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
                    title="PHP Business Directory Script"
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
                    href="/softwares/classified-ads-script"
                  >
                    <div class="caption">
                      <div class="other-caption-bx">
                        <h3>Classified Ads Script</h3>

                        <div class="other-project-logo">
                          <img
                            src="/img/jobboard/classified_logo_new.png"
                            alt="Classified Ads Script"
                            class=""
                          />
                        </div>
                        <p>
                          <span>Craigslist clone, olx clone. </span>
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
                    href="/softwares/fiverr-clone"
                  >
                    <div class="caption">
                      <div class="other-caption-bx">
                        <h3>Fiverr clone</h3>

                        <div class="other-project-logo">
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
              <div class="col-sm-6 col-md-4">
                <div class="thumbnail">
                  <Link
                    title="View Detail"
                    target="_black"
                    href="/softwares/job-board-software"
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
