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
  const [modalOpen, setModalOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [showInfo, setShowInfo] = useState(false);





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

  const toggleModal = () => {
    setModalOpen(!modalOpen);
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
      <section class="job-portal-banner job-portal-bg NewJobSiteDesign fiverr-new-banner JobBoardNewDesign OrderManagementSoftwareBanner">
        <div class="container">
          <div class="row">
            <div class="col-sm-7 col-md-7">
              <h1>Order Management Software</h1>
              <div class="both-left-p-sec">
                <h2>Order Management Across Multiple Channels</h2>
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
                    <button>Enquire Now</button>
                    {
                      <Enquirymodal
                        modalStatus={showModal}
                        toggle={openModal}
                        title="Order Management Software"
                      />
                    }
                  </div>
                  
                </div>
                <div class="SubscriptionPrice">
                  <div class="line-border NewLineBoader">
                    <img
                      alt="crowd_funding_script"
                      src="/img/jobboard/stars.png"
                    />
                    <p>225 Reviews</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-5 col-md-5">
              <div class="por-mobile-new">
                <img
                  alt="Order Management"
                  src="/img/ordermanagement/order-management-banner-img.png"
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
                Order Management Software
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section class="job-section-top-new">
        <div class="container">
          <p>
          Efficiently handle sales and purchase orders, generate packages and shipments, and provide delivery updates using a unified order management system. Reporting and analytics features of the order management software, offer customizable insights into inventory turnover, sales trends, and other essential metrics.
          </p>
        </div>
      </section>
      <section class="client-say crowdfunding-say" style={{ backgroundColor: "#fff" }}>
        <div class="container">
          <div class="row">
            <div class="col-md-6 job-video">
            <img
                  alt="Order Management"
                  src="/img/ordermanagement/order-management-img.png"
                />
            </div>
            <div class="col-md-6">
            <div class="OrderManagementSoftwareFeatures">
                <ul>
                <li>Automated Order Processing</li>
                        <li>Dynamic Inventory Management</li>
                        <li>Multi-Channel Integration</li>
                        <li>Effective Customer Relationship Management (CRM)</li>
                        <li>Real-time Order Tracking</li>
                        <li>Efficient Returns and Refunds Handling Process</li>
                        <li>Comprehensive Reporting and Analytics</li>
                        <li>Interconnected System Integration</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="job_portal_area">
        <div class="container">
          <div class="job_or_title">
            <h2 class="taxt_tt_job">Order Processing Characteristics</h2>
          </div>

          <div class="tatxt_txt_job text-center">
          Achieve a smooth workflow with efficient automation from order creation to fulfillment. Ensure accuracy in real-time inventory control, 
            enhancing overall efficiency and preventing discrepancies. Integrate across multiple sales channels, we are providing a centralized platform along with order control 
            and synchronization.
          </div>

          <div class="tab_bbx_job">
            <div class="tab_bbx_top_job">
              <ul className="">
                <li
                  id="tab1_li"
                  className={`jobseeker_app_job ddlj ${sellerTab ? "active" : ""}`}
                  onClick={() => handleSellerTab()}
                >
                  <a>Wholesalers</a>
                </li>
                <li
                  id="tab2_li"
                  className={`emplyer_app_job ddlj ${buyerTab ? "active" : ""}`}
                  onClick={() => handleBuyerTab()}
                >
                  <a>Customer</a>
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
                     
                      <div class="col-lg-12 col-md-12">
                      <div class="costomer_tab_left costomer_tab_leftright">
                                <ul>
                                    <li>
                                        <i><img alt="img" src="/img/ordermanagement/bulk-order-icon.png" class="lazy" /></i>
                                        <span>Bulk Order Processing
                                            <div class="product-idea">
                                                <p>Seller can log in securely using Facebook, Gmail or Email</p>
                                            </div>
                                        </span>
                                    </li>
                                    <li>
                                        <i><img alt="img" src="/img/ordermanagement/tiered-pricing-icon.png" class="lazy" /></i>
                                        <span>Tiered Pricing Models
                                            <div class="product-idea">
                                                <p>Seller can post the gigs by creating new gig and adding Gig Title, Category, SubCategory & Tags.</p>
                                            </div>
                                        </span>
                                    </li>
                                    <li>
                                        <i><img alt="img" src="/img/ordermanagement/volume-discounts-icon.png" class="lazy" /></i>
                                        <span>Volume Discounts
                                            <div class="product-idea">
                                                <p>Seller can view list of Gigs & can manage(view/add/edit/delete) Gigs. Seller can create gig by adding Gig Title, Category, SubCategory & Tags.</p>
                                            </div>
                                        </span>
                                    </li>
                                    <li>
                                        <i><img alt="img" src="/img/ordermanagement/multi-warehouse-icon.png" class="lazy" /></i>
                                        <span>Multi-Warehouse Management
                                            <div class="product-idea">
                                                <p>Seller can view the dashboard with the total number of counts & Statistics.</p>
                                            </div>
                                        </span>
                                    </li>
                                    <li>
                                        <i><img alt="img" src="/img/ordermanagement/customized-catalogs-icon.png" class="lazy" /></i>
                                        <span>Customized Catalogs
                                            <div class="product-idea">
                                                <p>Seller can view the list of Active Request & Offers sent by Buyers & can manage Active Request & Offers.</p>
                                            </div>
                                        </span>
                                    </li>
                                    <li>
                                        <i><img alt="img" src="/img/ordermanagement/advanced-reporting-icon.png" class="lazy" /></i>
                                        <span>Advanced Reporting & Analytics
                                            <div class="product-idea">
                                                <p>Seller can view the public view of their profile after making updates in profile with ratings & reviews.</p>
                                            </div>
                                        </span>
                                    </li>
                                    <li>
                                        <i><img alt="img" src="/img/ordermanagement/procurement-system-icon.png" class="lazy" /></i>
                                        <span>Procurement System Integration
                                            <div class="product-idea">
                                                <p>Seller can view the reviews & rating Buyer has received on the portal.</p>
                                            </div>
                                        </span>
                                    </li>
                                    <li>
                                        <i><img alt="img" src="/img/ordermanagement/flexible-payment-icon.png" class="lazy" /></i>
                                        <span>Flexible Payment Options
                                            <div class="product-idea">
                                                <p>Seller can get updates through the notifications.</p>
                                            </div>
                                        </span>
                                    </li>
                                    <li>
                                        <i><img alt="img" src="/img/ordermanagement/barcode-tracking-icon.png" class="lazy" /></i>
                                        <span>RFID and Barcode Tracking
                                            <div class="product-idea">
                                                <p>Seller can view their profile & can change password & PayPal email address.</p>
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
                                        <i><img alt="img" src="/img/ordermanagement/user-friendly-icon.png" /></i>
                                        <span>User-Friendly Interface
                                            <div class="product-idea">
                                                <p>Buyer can login securely using Facebook, Gmail or Email.</p>
                                            </div>
                                        </span>
                                    </li>
                                    <li>
                                        <i><img alt="img" src="/img/ordermanagement/personalized-account-icon.png " /></i>
                                        <span>Personalized Account Management
                                            <div class="product-idea">
                                                <p>Buyer can browse gigs on the portal.</p>
                                            </div>
                                        </span>
                                    </li>
                                    <li>
                                        <i><img alt="img" src="/img/ordermanagement/automated-order-icon.png" /></i>
                                        <span>Automated Order Tracking
                                            <div class="product-idea">
                                                <p>Buyer can search for the gig from posted one by apply filters </p>
                                            </div>
                                        </span>
                                    </li>
                                    <li>
                                        <i><img alt="img" src="/img/ordermanagement/wishlist-icon.png" /></i>
                                        <span>Wishlist and Favorites
                                            <div class="product-idea">
                                                <p>Buyer can view their profile & can change their password & PayPal e-mail address.</p>
                                            </div>
                                        </span>
                                    </li>
                                    <li>
                                        <i><img alt="img" src="/img/ordermanagement/flexible-payment-icon.png" /></i>
                                        <span>Flexible Payment Options
                                            <div class="product-idea">
                                                <p>Buyer can select the best gig from the posted one as per their requirement.</p>
                                            </div>
                                        </span>
                                    </li>
                                    <li>
                                        <i><img alt="img" src="/img/ordermanagement/subscription-icon.png" /></i>
                                        <span>Subscription and Reorder Options
                                            <div class="product-idea">
                                                <p>Buyer can view the reviews & rating Seller has received on the portal.</p>
                                            </div>
                                        </span>
                                    </li>                                    
                                    <li>
                                        <i><img alt="img" src="/img/ordermanagement/discounts-promotions-icon.png" /></i>
                                        <span>Discounts and Promotions
                                            <div class="product-idea">
                                                <p>Buyer can view send Buying Request to Sellers & can manage(add/edit/delete) Buying Request.</p>
                                            </div>
                                        </span>
                                    </li>
                                    <li>
                                        <i><img alt="img" src="/img/ordermanagement/mobile-accessibility-icon.png"  /></i>
                                        <span>Mobile Accessibility
                                            <div class="product-idea">
                                                <p>Buyer can get updates through the notifications</p>
                                            </div>
                                        </span>
                                    </li>
                                    <li>
                                        <i><img alt="img" src="/img/ordermanagement/customer-feedback-icon.png" /></i>
                                        <span>Customer Feedback and Reviews
                                            <div class="product-idea">
                                                <p>Buyer can post gig request on the portal with details Gig Title, Category, SubCategory & Tags.</p>
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
                    
                      <div class="col-lg-12 col-md-12">
                      <div class="costomer_tab_left costomer_tab_leftright2">
                                <ul>
                                    <li>
                                        <i><img alt="img" src="/img/ordermanagement/role-based-icon.png" /></i>
                                        <span>Role-Based Access Control
                                            <div class="product-idea">
                                                <p>Admin can login securely on this portal.</p>
                                            </div>
                                        </span>
                                    </li>                               
                                    <li>
                                        <i><img alt="img" src="/img/ordermanagement/order-approval-icon.png" /></i>
                                        <span>Order Approval Workflows
                                            <div class="product-idea">
                                                <p>Admin can view dashboard which will display the total number of counts for Seller, Buyer, Gig orders etc.</p>
                                            </div>
                                        </span>
                                    </li>                               
                                    <li>
                                        <i><img alt="img" src="/img/ordermanagement/audit-trails-icon.png" /></i>
                                        <span>Audit Trails and Activity Logs
                                            <div class="product-idea">
                                                <p>Admin can view list of Users(Seller/Buyer) & can manage(add/edit/delete) Users. Admin can activate/deactivate Users.</p>
                                            </div>
                                        </span>
                                    </li>                               
                                    <li>
                                        <i><img alt="img" src="/img/ordermanagement/customizable-dashboards-icon.png" /></i>
                                        <span>Customizable Dashboards
                                            <div class="product-idea">
                                                <p>Admin can view list of Gigs & can manage(delete) Gigs. Admin can activate/deactivate Gigs.</p>
                                            </div>
                                        </span>
                                    </li>                               
                                    <li>
                                        <i><img alt="img" src="/img/ordermanagement/ecommerce-platform-icon.png"  /></i>
                                        <span>eCommerce Platform Integration
                                            <div class="product-idea">
                                                <p>Admin can view list of Gig orders & can manage (view) gig Orders.</p>
                                            </div>
                                        </span>
                                    </li>                               
                                    <li>
                                        <i><img alt="img" src="/img/ordermanagement/automated-reporting-icon.png"/></i>
                                        <span>Automated Reporting and Analytics
                                            <div class="product-idea">
                                                <p>Admin can view list of services & can manage(view/add/edit/delete) services.</p>
                                            </div>
                                        </span>
                                    </li>    
                                    <li>
                                        <i><img alt="img" src="/img/ordermanagement/inventory-forecasting-icon.png" /></i>
                                        <span>Inventory Forecasting and Replenishment
                                            <div class="product-idea">
                                                <p>Admin can view list of Categories & can manage(view/add/edit/delete) Categories. Admin can activate/deactivate Categories.</p>
                                            </div>
                                        </span>
                                    </li>    
                                    <li>
                                        <i><img alt="img" src="/img/ordermanagement/user-permissions-icon.png" /></i>
                                        <span>User Permissions and Security
                                            <div class="product-idea">
                                                <p>Admin can view list of Skills & can manage (view/add/edit/delete) skills.</p>
                                            </div>
                                        </span>
                                    </li>    
                                    <li>
                                        <i><img alt="img" src="/img/ordermanagement/customizable-order-icon.png"  /></i>
                                        <span>Customizable Order Rules and Workflows
                                            <div class="product-idea">
                                                <p>Admin can view list of Sub-categories & can manage(view/add/edit/delete) Sub-categories. Admin can activate/deactivate Sub-categories.</p>
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
      <section class="job_product_page_header_in WhatOrderManagementSection">
    <div class="container">
        <div class="whateissuprt">
            <h2 class="headhs">How does our Order Management Software benefit you?</h2>
            <p>Our Order Management Software plays an essential role in optimizing your business operations. It ensures an efficient workflow from order creation to fulfillment, 
                maintaining accuracy and minimizing errors. With our real-time inventory management, it helps maintain precise stock levels, preventing discrepancies and enhancing 
                overall operational efficiency. The software extends its capabilities by offering smooth integration with multiple sales channels, providing a centralized platform 
                for comprehensive order control and coordination. This means you can manage and monitor your orders effortlessly, whether they originate from online stores, 
                marketplaces, or other sources. The system also supports detailed reporting and analytics, offering valuable insights into sales performance, order trends, and 
                inventory status. By leveraging our Order Management Software, you gain the tools to enhance productivity, improve customer satisfaction, and optimize your 
                overall order fulfillment process.</p>

        </div>
    </div>
</section>
<section class="SubscriptionModel" id="subscriptionmodel">
    <div class="container">	
        <div class="job_or_title">
            <h2 class="taxt_tt_job">Subscription Model</h2><br/>
            <div class="SubscriptionModelBx">
                <p>Experience convenience like never before with our subscription-based hassle-free model, available at just <strong>USD 45 per month</strong>, limited offer available for the first year.</p>
                <p>Key Benefits:</p>
                <ul>
                    <li><span>Lifetime Updates: Enjoy complimentary updates for your software version throughout its lifespan. Timely Upgrades: Seamlessly transition to upgraded versions at regular intervals, all at no extra cost. </span></li>
                    <li><span><strong>Zero Setup Fees</strong>:- There are no additional charges for the setup and installation of the software, making it easier for customers to get started. </span></li>
                    <li><span>Unlimited Order Postings: Post as many orders as you need without any limitations.</span></li>
                    <li><span>Mobile Apps: Stay perpetually connected with Android and iPhone apps, available for an additional USD 45 per month for each, android or iPhone. These apps will be launched through your dedicated developer accounts on Google Play and the Apple App Store. </span></li>
                    <li><span>Effortless Program Operation: Revel in robust bandwidth that guarantees your program runs flawlessly, supported by resources allocated to your subscription model. Any increase in allocated resources will incur additional charges beyond the standard subscription model.</span></li>
                    <li><span>Enduring Support: We are committed to providing lifelong assistance through our subscription model. If any software issues arise, our <strong>dedicated technical team</strong> will promptly address them during office hours.</span></li>
                    <li><span>Personalized Customization Assistance: Delivering Custom Features According to Client Requirements at additional cost.</span></li>
                </ul>
                <p>Discover a new era of convenience and efficiency with our subscription offering. Subscribe today and elevate your experience with our readymade solution!</p>
            </div>
        </div>
    </div>
</section>
      <section id="subscriptionprice" class="SubscriptionpriceSection">
        <div class="container">
          <h2 class="taxt_tt_job">Delivered Solution</h2>
          <div class="SubscriptionModelPrice">
            <div class="SubscriptionModelPriceBx">
            <h4>$895<span class="sml_labl"> USD</span></h4>
            <strike class="srik_cls">$1500<span class="sml_labl">USD</span></strike>
              <div class="SubscriptionModelPriceBtn">
              <div className="btn btn-get" onClick={openModal}>
                    <button>Enquire Now</button>
                    {
                      <Enquirymodal
                        modalStatus={showModal}
                        toggle={openModal}
                        title="Order Management Software"
                      />
                    }
                  </div>
               
              </div>
              <div class="jocpp">
              
                <div class="portel-btnbx">
                  <div class="line-border NewLineBoader">
                    <img src="/img/jobboard/stars.png" alt="" class="lazy" />
                    <p>225 Reviews</p>
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
            Logicspice is the best partner for your Order Management Software !
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
                    <li class="same"><b>Browsers - </b> Firefox 32.6+, Chrome 20.0+, Opera 30.0+, Safari 5+, IE 9+</li> 
                    <li class="same "><b>Framework  - </b> Laravel 10.x</li>  
                    <li class="same"><b>Language  - </b> PHP 8.2 Supported, AJAX, jQuery</li> 
                    <li class="other"><b>Design  - </b> HTML 5, CSS 3, Bootstrap 3.3.7, JavaScript</li> 
                    <li class="other"><b>Database  - </b> MySQL 5.5+</li>
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
                <div class="supportsettingtext">3-Months of Free Support</div>
              </li>
              <li data-aos="fade">
                <div class="supportsetting_icn">
                  <img
                    src="/img/jobboard/free_remove_icon.png"
                    alt="manager_icn"
                  />
                </div>
                <div class="supportsettingtext">Brand Removal at No Cost</div>
              </li>
              <li data-aos="fade">
                <div class="supportsetting_icn">
                  <img src="/img/jobboard/free_instal.png" alt="manager_icn" />
                </div>
                <div class="supportsettingtext">Complimentary Installation</div>
              </li>
              <li data-aos="fade">
                <div class="supportsetting_icn">
                  <img
                    src="/img/jobboard/access_secure_code_icon.png"
                    alt="manager_icn"
                  />
                </div>
                <div class="supportsettingtext">Effortless Scalability</div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section class="CustomerReviewsSections">
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-md-3 col-lg-3 CustomerReviewsImgMobile">
                <div class="CustomerReviewsImg"><img alt="customer-reviews" src="/img/yiiframework/customer-reviews-img.jpg" /></div>
            </div>
            <div class="col-xs-12 col-md-6 col-lg-6">
                <div class="CustomerReviews">
                <div class="CustomerReviewsBxMain">
                    <h2>Customer Reviews</h2>
                    <div class="CustomerReviewsMainBx">
                        <div class="CustomerReviewsBx">
                            <p>The order management software exceeded our expectations! It streamlined our entire process, making order fulfillment quicker and more accurate. 
                            The real-time tracking feature greatly enhanced our customer service, providing transparency and trust.</p>
                        </div>
                        <div class="CustomerReviewsClient"><i><img alt="customer-reviews" src="/img/yiiframework/purpal-star.png" /></i><span>Jessica M., USA<i class="contry-flag"><img alt="customer-reviews" src="/img/jobboard/usa_flag_img.png" /></i></span></div>
                    </div>
                    <div class="CustomerReviewsMainBx">
                        <div class="CustomerReviewsBx">
                            <p>We've been using this order management software for several months now, and it has significantly improved our efficiency. The customizable features 
                                allow us to change the system to our specific needs. The integration with other business tools is seamless, and the reporting capabilities offer 
                                valuable insights into our sales performance.</p>
                        </div>
                        <div class="CustomerReviewsClient"><i><img alt="customer-reviews" src="/img/yiiframework/purpal-star.png" /></i><span>Alexander K., Canada<i class="contry-flag"><img alt="customer-reviews" src="/img/jobboard/canada_flag_img.png" /></i></span></div>
                    </div>
                    <div class="CustomerReviewsMainBx">
                        <div class="CustomerReviewsBx">
                            <p>The order management software has been life changing for our business. The user-friendly interface made the transition smooth, and the automation 
                                features saved us a tremendous amount of time. The support team was responsive and helpful, addressing any queries promptly. Overall, a highly 
                                recommended solution for businesses looking to streamline their order processes.</p>
                        </div>
                        <div class="CustomerReviewsClient">
                          <i><img alt="customer-reviews" src="/img/yiiframework/purpal-star.png" /></i>
                          <span>Maria S., UK<i class="contry-flag"><img alt="customer-reviews" src="/img/jobboard/uk_flag_img.png" /></i></span></div>
                    </div>
                </div>
                </div>
            </div>
            <div class="col-xs-12 col-md-4 col-lg-3">
                <div class="ecommerce--review--point ">
                    <div class="outof_rating">
                        <div class="review_rating_fjs">
                            <div class="star_num">5 <i class="fa fa-star"></i></div>
                            <div class="progress">
                                <div class="progress-bar progress-bar-danger progress-bar-striped" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{ width: "100%" }}>
                                </div>
                            </div>
                            <div class="people_star_num">200</div>
                        </div>
                        <div class="review_rating_fjs">
                            <div class="star_num">4 <i class="fa fa-star"></i></div>
                            <div class="progress">
                                <div class="progress-bar progress-bar-danger progress-bar-striped" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{ width: "30%" }}>
                                </div>
                            </div>
                            <div class="people_star_num">25</div>
                        </div>
                        <div class="review_rating_fjs">
                            <div class="star_num">3 <i class="fa fa-star"></i></div>
                            <div class="progress">
                                <div class="progress-bar progress-bar-danger progress-bar-striped" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{ width: "0%" }}>
                                </div>
                            </div>
                            <div class="people_star_num">0</div>
                        </div>
                        <div class="review_rating_fjs">
                            <div class="star_num">2 <i class="fa fa-star"></i></div>
                            <div class="progress">
                                <div class="progress-bar progress-bar-danger progress-bar-striped" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{ width: "0%" }}>
                                </div>
                            </div>
                            <div class="people_star_num">0</div>
                        </div>
                        <div class="review_rating_fjs">
                            <div class="star_num">1 <i class="fa fa-star"></i></div>
                            <div class="progress">
                                <div class="progress-bar progress-bar-danger progress-bar-striped" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{ width: "0%" }}>
                                </div>
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
                    title=" Free Script"
                  />
                    </div>
                    <div class="main-rait">
                        <span><i class="fa fa-star"></i> <span>4.7 out of 5 stars</span></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="ecommerce_faq_section" id="faq">
    <div class="container">
    <div class="CustomQuickFAQScript">
        <div class="row">
            
                <div class="col-md-5">
                    <h4 class="title_main">Frequently <br/>
                        Asked Questions</h4>
                    <div class="FaqImgBx"><img src="/img/ordermanagement/freescript-faq.png" alt="Free Script" /></div>
                </div>
                <div class="col-md-7">
                    <div class="panel-group faq_quick_sec" id="accordion">
                    
                    <MDBAccordion v-model="activeItem" borderless>
                  <MDBAccordionItem
                    headerTitle="What is Order Management Software?"
                    collapseId="flush-collapse1"
                  >
                    <p>
                    Order Management Software is a comprehensive solution designed to automate the order processing workflow, from creation to fulfillment. 
                    It enhances efficiency in managing orders, inventory, and customer interactions.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Why do I need Order Management Software?"
                    collapseId="flush-collapse2"
                  >
                    <p>
                    Order Management Software reduces errors, provides real-time inventory visibility, and ensures a seamless customer experience, aiding 
                    effective decision-making through insightful analytics.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="What features does Order Management Software typically include?"
                    collapseId="flush-collapse4"
                  >
                    <p>
                    Common features include order processing automation, real-time inventory management, multi-channel integration, customer relationship 
                    management, order tracking, and reporting.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Can the software integrate with other business tools?"
                    collapseId="flush-collapse5"
                  >
                    <p>
                    Many Order Management Software solutions offer integration with Customer Relationship Management (CRM), Enterprise Resource Planning (ERP), 
                    and accounting software. Confirm compatibility with your existing and future integrations.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="How user-friendly is the Order Management Software?"
                    collapseId="flush-collapse6"
                  >
                    <p>
                    Look for intuitive interfaces, customizable features, and adequate training options to ensure a smooth onboarding process.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="What kind of support is provided with the software?"
                    collapseId="flush-collapse7"
                  >
                    <p>Check for customer service, training resources, and ongoing assistance to meet your business needs.</p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Am I permitted to eliminate your company's proprietary notices?"
                    collapseId="flush-collapse3"
                  >
                    <p>You have the flexibility to modify the script by removing your company information and substituting it with yours. However, it is not 
                    permissible to include "copyright by" since exclusive copyright ownership for the software rests with us.</p>
                  </MDBAccordionItem>


                  <MDBAccordionItem
                    headerTitle="How long does it take to receive the software after I purchase it?"
                    collapseId="flush-collapse8"
                  >
                    <p>It will take a minimum 48 hours after payment.You will receive an email message with login details for your personal account where the 
                    software can be downloaded.</p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Can I use your software without any programming skills?"
                    collapseId="flush-collapse9"
                  >
                   <p>Yes, you can directly install our given software and can manage everything in the admin panel which is very user friendly.</p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Will you deliver the exact product as shown in the demo?"
                    collapseId="flush-collapse10"
                  >
                    <p>Yes, We deliver the exact product. We don't compromise with quality at all.</p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Do you offer a Money Back Guarantee?"
                    collapseId="flush-collapse11"
                  >
                    <p>Yes, we provide a 30 days money back guarantee to ensure customer satisfaction with our software. If, for any reason, you decide to stop using 
                                        the product, you can request a refund. We will reimburse the entire amount, excluding the installation and configuration charges, which are 
                                        either USD 65 or 20% of the application cost, whichever is higher. Please note that the money back guarantee does not apply to customers 
                                        who have received updates as per their specific requests, taking into account the significant efforts and time invested by the team for 
                                        their project.</p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Are you willing to advise us with ideas?"
                    collapseId="flush-collapse12"
                  >
                    <p>Sure, we fulfill the client requirements always while doing all customization work offered with additional cost. Although client suggestions 
                    or ideas are always welcomed which can make your business more interactive.</p>
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
                    title="Order Management Software"
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
                        <h3>Inventory Management Software</h3>
                        <div class="other-project-logo">
                          <img
                            src="/img/jobboard/inventory-management-logo.png"
                            alt="Inventory Management Software"
                          />
                        </div>
                        <p>
                          <span>
                          Efficient Inventory Control and Tracking
                          </span>{" "}
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
                        <h3>Job Board Software</h3>

                        <div class="other-project-logo">
                          <img
                            src="/img/jobboard/job-board-logo.png"
                            alt="Job Board Software"
                          />
                        </div>
                        <p>
                          <span>Best white label job board software. </span>
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
                        <h3>eCommerce Software</h3>

                        <div class="other-project-logo">
                          <img
                            src="/img/jobboard/ecommerce_logo_new.png"
                            alt="ecommerce website"
                          />
                        </div>
                        <p>
                          <span>Best eCommerce Web Design Packages.</span>
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
