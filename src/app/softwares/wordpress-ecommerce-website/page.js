"use client";
import React, { useState } from "react";
import Footer from "@/app/Components/Footer";
import NavBar from "@/app/Components/Navbar";
import "@/app/softwares/softwares.css";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import Image from "next/image";
import Link from "next/link";
import "@fortawesome/fontawesome-free/css/all.css";
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
      <section class="paid-pro job-portal-banner job-portal-bg fiverr-new-banner NewJobSiteDesign WordPresseCommerceBanner">
        <div class="container">
          <div class="row">
            <div class="col-sm-7 col-md-7">
              <h1>WordPress eCommerce Website</h1>
              <div class="both-left-p-sec">
                <h2>Empowering Your Online Store for Success</h2>
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
                        title="Please fill the form below and get access to the live demo of WordPress eCommerce Website.
See how it work yourself!"
                      />
                    }
                  </div>
                  <Link
                    class="btn fiverr-buys NewGreenBtnJob"
                    href="/softwares/udemy-clone"
                  >
                    Enquire Now
                  </Link>
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
                  alt="WordPress eCommerce Website"
                  src="/img/wordpress-ecommerce/wordpress-ecommerce-banner-img.png"
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
                  WordPress eCommerce Website
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section class="job-section-top-new JobBoardSectionNew">
        <div class="container">
          <p>
            A WordPress eCommerce website is a platform built using a popular
            content management system (CMS), Wordpress, designed for online
            stores. It enables users to create and manage an online store with
            features such as product listings, shopping carts, integrated
            payment gateways, and order management. With a wide range of plugins
            and themes available, WordPress offers a flexible and customizable
            solution for businesses looking to sell products or services online.
          </p>
        </div>
      </section>
      <section
        class="client-say crowdfunding-say"
        style={{ backgroundColor: "#fff" }}
      >
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="service-market-ttd-new event-ttd-new">
                <ul>
                  <li>Post Unlimited Projects</li>
                  <li>Social Media Sharing</li>
                  <li>Multi-Currency</li>
                  <li>Blog Management</li>
                  <li>Inbuilt Message Feature</li>
                  <li>White Labeled Script</li>
                  <li>Gmail, Facebook Sign In</li>
                  <li>Multi-Language(French, English)</li>
                  <li>Direct Funding without Sign Up</li>
                  <li>One time License Fee</li>
                  <li>Responsive website (mobile friendly)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="job_portal_area">
        <div class="container">
          <div class="job_or_title">
            <h2 class="taxt_tt_job">WordPress eCommerce Website Features</h2>
          </div>

          <div class="tatxt_txt_job text-center">
            Explore the potential of our WordPress eCommerce website, designed
            to enhance your online business. Our solutions are built to
            strengthen your brand and drive sales. Featuring smooth integration
            of WooCommerce, Easy Digital Downloads, or WP eCommerce, our
            websites offer comprehensive eCommerce functionality. Enjoy engaging
            product pages, intuitive shopping carts, secure payment gateways,
            flexible shipping options, and customer account management. Build
            trust with customer reviews and ensure a user-friendly experience
            across devices with mobile responsiveness. Optimize for search
            engines and track your success with advanced analytics. Upgrade your
            online store with our customized WordPress eCommerce websites.
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
                  <a>Seller Features</a>
                </li>
                <li
                  id="tab2_li"
                  className={`emplyer_app_job ddlj ${buyerTab ? "active" : ""}`}
                  onClick={() => handleBuyerTab()}
                >
                  <a>Buyer Features</a>
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
                            src="/img/wordpress-ecommerce/worspress-ecommerce-customer.png"
                            alt="Customer App Feature"
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
                                  src="/img/jobboard/manage-dashboard.png"
                                />
                              </i>
                              <span>
                                Seller Dashboard
                                <div class="product-idea">
                                  <p>
                                    Provide sellers with a dedicated dashboard
                                    to manage their products, orders, inventory,
                                    and sales performance.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/product-management-icon.png"
                                />
                              </i>
                              <span>
                                Product Management
                                <div class="product-idea">
                                  <p>
                                    Allow sellers to easily add, edit, and
                                    remove products, including descriptions,
                                    images, pricing, and variations.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/order-management.png"
                                />
                              </i>
                              <span>
                                Order Management
                                <div class="product-idea">
                                  <p>
                                    Enable sellers to view and manage orders,
                                    update order statuses, and communicate with
                                    customers regarding their purchases.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/commission-management.png"
                                />
                              </i>
                              <span>
                                Commission Management
                                <div class="product-idea">
                                  <p>
                                    Implement a system to calculate and manage
                                    commissions for each sale made by the seller
                                    on the platform.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/shipping-management.png"
                                />
                              </i>
                              <span>
                                Shipping Management
                                <div class="product-idea">
                                  <p>
                                    Offer sellers the ability to set their own
                                    shipping methods, rates, and policies for
                                    their products.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/payment-integration.png"
                                />
                              </i>
                              <span>
                                Payment Integration
                                <div class="product-idea">
                                  <p>
                                    Integrate payment gateways to allow sellers
                                    to receive payments directly for their
                                    sales, with the platform deducting any
                                    applicable fees or commissions.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/seller-ratings.png"
                                />
                              </i>
                              <span>
                                Seller Ratings and Reviews
                                <div class="product-idea">
                                  <p>
                                    Allow customers to rate and review sellers
                                    based on their products and services,
                                    helping to build trust and credibility.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/marketing-promotion.png"
                                />
                              </i>
                              <span>
                                Marketing and Promotion Tools
                                <div class="product-idea">
                                  <p>
                                    Provide sellers with tools to promote their
                                    products, such as discounts, coupons, and
                                    promotional campaigns.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/product-recommendations.png"
                                />
                              </i>
                              <span>
                                Product Recommendations
                                <div class="product-idea">
                                  <p>
                                    If offers sellers to increase sales by
                                    suggesting relevant and complementary
                                    products to customers based on their
                                    behavior and purchase history. This enhances
                                    the shopping experience, increases customer
                                    satisfaction, and can lead to higher sales
                                    and conversions.
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
                            src="/img/wordpress-ecommerce/worspress-buyer-mobile.png"
                            alt="Investors"
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
                                  src="/img/jobboard/seller-ratings.png"
                                />
                              </i>
                              <span>
                                Product Reviews and Ratings
                                <div class="product-idea">
                                  <p>
                                    Allow buyers to leave reviews and ratings
                                    for products, helping other shoppers make
                                    informed decisions.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/wishlist-save.png"
                                />
                              </i>
                              <span>
                                Wishlist and Save for Later
                                <div class="product-idea">
                                  <p>
                                    Enable buyers to save products to a wishlist
                                    or "save for later" list for future
                                    reference or purchase.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/secure-payment-gateways.png"
                                />
                              </i>
                              <span>
                                Secure Payment Gateways
                                <div class="product-idea">
                                  <p>
                                    Integrate secure payment gateways to ensure
                                    a safe and seamless checkout process for
                                    buyers.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/order-tracking.png"
                                />
                              </i>
                              <span>
                                Order Tracking
                                <div class="product-idea">
                                  <p>
                                    Provide buyers with the ability to track
                                    their orders in real-time, including
                                    shipping status and estimated delivery
                                    dates.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/responsive-design.png"
                                />
                              </i>
                              <span>
                                Responsive Design
                                <div class="product-idea">
                                  <p>
                                    Ensure the website is fully responsive and
                                    optimized for mobile devices, providing a
                                    seamless shopping experience across all
                                    platforms.
                                  </p>
                                </div>
                              </span>
                            </li>

                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/customer-support.png"
                                />
                              </i>
                              <span>
                                Customer Support
                                <div class="product-idea">
                                  <p>
                                    Offer multiple channels for customer
                                    support, such as live chat, email, or phone,
                                    to assist buyers with any questions or
                                    issues they may have.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/easy-returns.png"
                                />
                              </i>
                              <span>
                                Easy Returns and Refunds
                                <div class="product-idea">
                                  <p>
                                    Implement a clear and hassle-free return and
                                    refund policy to build trust and confidence
                                    among buyers.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/personalized-recommendations.png"
                                />
                              </i>
                              <span>
                                Personalized Recommendations
                                <div class="product-idea">
                                  <p>
                                    Intelligent product recommendations based on
                                    the buyer's browsing and purchase history,
                                    enhancing the shopping experience.
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
                            src="/img/wordpress-ecommerce/worspress-ecommerce-website.png"
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
                                  src="/img/jobboard/email-marketing.png"
                                />
                              </i>
                              <span>
                                Email Marketing Integration
                                <div class="product-idea">
                                  <p>
                                    Integration with email marketing platforms
                                    for targeted email campaigns and customer
                                    engagement.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/product-management-icon.png"
                                />
                              </i>
                              <span>
                                Product Management
                                <div class="product-idea">
                                  <p>
                                    The ability to add, edit, and remove
                                    products, including descriptions, images,
                                    pricing, and inventory management.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/order-management.png"
                                />
                              </i>
                              <span>
                                Order Management
                                <div class="product-idea">
                                  <p>
                                    A centralized system to manage orders, view
                                    order details, update order statuses, and
                                    track shipments.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/customer-support.png"
                                />
                              </i>
                              <span>
                                Customer Management
                                <div class="product-idea">
                                  <p>
                                    Tools to manage customer accounts, view
                                    order history, and communicate with
                                    customers.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/inventory-management.png"
                                />
                              </i>
                              <span>
                                Inventory Management
                                <div class="product-idea">
                                  <p>
                                    {" "}
                                    Tools to track and manage inventory levels,
                                    receive low stock alerts, and automate
                                    inventory updates.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/payment-shipping.png"
                                />
                              </i>
                              <span>
                                Payment and Shipping Settings
                                <div class="product-idea">
                                  <p>
                                    Configuration options for payment gateways,
                                    shipping methods, and tax settings.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/reporting-analytics.png"
                                />
                              </i>
                              <span>
                                Reporting and Analytics
                                <div class="product-idea">
                                  <p>
                                    Detailed reports and analytics to track
                                    sales performance, customer behavior, and
                                    site traffic.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/coupon-discount.png"
                                />
                              </i>
                              <span>
                                Coupon and Discount Management
                                <div class="product-idea">
                                  <p>
                                    Tools to create and manage coupons,
                                    discounts, and promotional offers.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/security-permissions.png"
                                />
                              </i>
                              <span>
                                Security and Permissions
                                <div class="product-idea">
                                  <p>
                                    User role management to control access
                                    levels for admin users, ensuring the
                                    security of sensitive information.
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
              {" "}
              What does our WordPress eCommerce Website do for you?
            </h2>
            <p>
              Our WordPress eCommerce website empowers you to build and manage a
              successful online store with ease. From smooth product management
              and secure payment processing to personalized customer experiences
              and powerful analytics, our platform offers everything you need to
              succeed in the competitive world of online retail. With our easy
              to use interface and comprehensive features, you can create a
              unique and engaging shopping experience for your customers while
              maximizing your sales and growing your business. Experience the
              difference with our WordPress eCommerce website and take your
              online store to new heights.
            </p>
            <h3>
              What does we accomplish for your WordPress eCommerce Website
            </h3>
            <p>
              Custom Design: Our custom design service creates customized
              website designs that perfectly match your brand and business
              objectives. We ensure that every aspect of the design, from
              visuals to layout, aligns with your brand identity, helping you
              achieve your goals effectively.
            </p>
            <p>
              Plugin Installation and Customization: Our plugin installation and
              customization service enhance your eCommerce site's functionality
              by installing and customizing relevant plugins. This ensures your
              website has the features it needs to succeed.
            </p>
            <p>
              Operational Guidance: We will provide comprehensive guidance on
              how to operate your WordPress eCommerce website, including
              managing products, orders, and customer interactions. Our goal is
              to empower you to effectively manage and grow your online
              business.
            </p>
            <p>
              Real-Time Support: We offer real-time 3 months of free support
              within our office hours to address any issues or questions you may
              have, ensuring that your website runs smoothly and efficiently.
              Our team is dedicated to providing prompt and effective solutions
              to help you maximize your online presence. The support period can
              be extended as per your requirements with extra cost.
            </p>
            <p>
              Enhancing Security: Our security enhancements include implementing
              a range of measures to protect your WordPress eCommerce website
              from cyber threats and ensure the safety of customer data. We
              conduct a thorough assessment of your website's vulnerabilities
              and then implement security protocols such as firewalls, secure
              socket layer (SSL) certificates, and regular security audits.
              Additionally, we stay updated with the latest security trends and
              technologies to continuously enhance your website's security
              posture.
            </p>
          </div>
        </div>
      </section>
      <section
        class="SubscriptionModel"
        id="subscriptionmodel"
        style={{ backgroundColor: "#f1f1f1" }}
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
                    software version throughout its lifespan. Timely Upgrades:
                    Seamlessly transition to upgraded versions at regular
                    intervals, all at no extra cost.{" "}
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
                    Unlimited Order Postings: Post as many orders as you need
                    without any limitations.
                  </span>
                </li>
                <li>
                  <span>
                    Mobile Apps: Stay perpetually connected with Android and
                    iPhone apps, available for an additional USD 45 per month
                    for each, android or iPhone. These apps will be launched
                    through your dedicated developer accounts on Google Play and
                    the Apple App Store.{" "}
                  </span>
                </li>
                <li>
                  <span>
                    Effortless Program Operation: Revel in robust bandwidth that
                    guarantees your program runs flawlessly, supported by
                    resources allocated to your subscription model. Any increase
                    in allocated resources will incur additional charges beyond
                    the standard subscription model.{" "}
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
                $595<span class="sml_labl">USD</span>
              </h4>
              <strike class="srik_cls">
                $1500 <span class="sml_labl">USD</span>
              </strike>
              <div class="SubscriptionModelPriceBtn">
                <div className="btn btn-get" onClick={openModal}>
                  <button>Get Demo Access!</button>
                  {
                    <Enquirymodal
                      modalStatus={showModal}
                      toggle={openModal}
                      title="Please fill the form below and get access to the live demo of WordPress eCommerce Website.
See how it work yourself!"
                    />
                  }
                </div>
                <Link
                  class="btn fiverr-buys"
                  href="/softwares/crowdfunding-script"
                >
                  Enquire Now
                </Link>
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
              Logicspice is the best partner for your WordPress eCommerce
              Website!
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
          <div class="small_bbx_job_new" style={{ display: "none" }}>
            <div class="row">
              <div class="col-sm-4 col-md-4">
                <div class="thumbnail-new thumbnail-bx1">
                  <div class="caption">
                    <div class="best-partner-img-bx">
                      <img src="/img/jobboard/coding.png" alt="img" />
                    </div>
                    <h3>Optimized Code with proper commenting</h3>
                    <p>
                      Our script code is fully optimized, which results in quick
                      load time and, Code is properly commented for each
                      function and module so anyone can easily update the code
                      in future.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-sm-4 col-md-4">
                <div class="thumbnail-new thumbnail-bx2">
                  <div class="caption">
                    <div class="best-partner-img-bx">
                      <img src="/img/jobboard/data-complexity.png" alt="img" />
                    </div>
                    <h3>Strong Framework of PHP & Well managed database</h3>
                    <p>
                      We used popular and strong Framework of PHP with latest
                      versions to keep the code up to date and prevalent for
                      longer duration. Our experienced team managed all the
                      database tables with complete flexibility for extension
                      versions in future.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-sm-4 col-md-4">
                <div class="thumbnail-new thumbnail-bx3">
                  <div class="caption">
                    <div class="best-partner-img-bx">
                      <img src="/img/jobboard/coordinate.png" alt="img" />
                    </div>
                    <h3>
                      Quick Response and
                      <br /> Coordination
                    </h3>
                    <p>
                      Customers will always get a quick response from our
                      technical support team, with the best possible solution.
                      Expect our response within 24 hours.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-4 col-md-4">
                <div class="thumbnail-new thumbnail-bx4">
                  <div class="caption">
                    <div class="best-partner-img-bx">
                      <img src="/img/jobboard/customize.png" alt="img" />
                    </div>
                    <h3>Customization at affordable price</h3>
                    <p>
                      We provide customization of our scripts, to meet customer
                      expectations with best affordable price and minimum
                      turn-around time.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-sm-4 col-md-4">
                <div class="thumbnail-new thumbnail-bx5">
                  <div class="caption">
                    <div class="best-partner-img-bx">
                      <img src="/img/jobboard/smartphone-icon.png" alt="img" />
                    </div>
                    <h3>Mobile Friendly Script</h3>
                    <p>
                      Our Script is mobile friendly so, users can easily access
                      all the features through mobile devices that gives
                      improved user experience with portability.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-sm-4 col-md-4">
                <div class="thumbnail-new thumbnail-bx6">
                  <div class="caption">
                    <div class="best-partner-img-bx">
                      <img src="/img/jobboard/data.png" alt="img" />
                    </div>
                    <h3>Dedicated Support Team</h3>
                    <p>
                      You will get the dedicated support team while purchasing
                      the script or product. Technical support team will resolve
                      your query quickly in a given time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-4 col-md-4">
                <div class="thumbnail-new thumbnail-box thumbnail-bx7">
                  <div class="caption">
                    <div class="best-partner-img-bx">
                      <img src="/img/jobboard/web-icon.png" alt="img" />
                    </div>
                    <h3>Global company with agile development approach</h3>
                    <p>
                      Our customers are almost equally spread around the globe
                      and we provide international standard solutions for USA,
                      UK, Europe, Australia, UAE and other countries. We follow
                      a transparent work process and divide all the development
                      processes into small phases. We can use the latest
                      technology and standards that assure the smooth
                      development and execution.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-sm-4 col-md-4">
                <div class="thumbnail-new thumbnail-box thumbnail-bx8">
                  <div class="caption">
                    <div class="best-partner-img-bx">
                      <img src="/img/jobboard/encrypted.png" alt="img" />
                    </div>
                    <h3>Customer information and application level security</h3>
                    <p>
                      Security of customer data and application is a major
                      aspect of any of the solutions, Logicspice provides. Our
                      programming is robust and secure that assures password
                      encryption.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-sm-4 col-md-4">
                <div class="thumbnail-new thumbnail-box thumbnail-bx9">
                  <div class="caption">
                    <div class="best-partner-img-bx">
                      <img src="/img/jobboard/history-icon.png" alt="img" />
                    </div>
                    <h3>Experienced workforce with 3000+ project history</h3>
                    <p>
                      We are a team of experienced web and mobile app
                      developers, having expertise in handling complex tasks
                      since the past 16+ years. We delivered lots of projects
                      with 100% client satisfaction on different platforms with
                      high levels of standards.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-sm-4 col-md-4">
                <div class="thumbnail-new productthumbnail-box thumbnail-bx10">
                  <div class="caption">
                    <div class="best-partner-img-bx">
                      <img src="/img/jobboard/seouser-friendly.png" alt="img" />
                    </div>
                    <h3>Seo Friendly Development</h3>
                    <p>
                      Our developed websites are SEO optimized so it can rank
                      better on Google.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-sm-4 col-md-4">
                <div class="thumbnail-new productthumbnail-box thumbnail-bx11">
                  <div class="caption">
                    <div class="best-partner-img-bx">
                      <img
                        src="/img/jobboard/one-stop-solution.png"
                        alt="img"
                      />
                    </div>
                    <h3>One Stop Solution</h3>
                    <p>
                      We offer complete design & development solutions along
                      with the business strategy, all under one roof.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-sm-4 col-md-4">
                <div class="thumbnail-new productthumbnail-box thumbnail-bx12">
                  <div class="caption">
                    <div class="best-partner-img-bx">
                      <img src="/img/jobboard/third-party-api.png" alt="img" />
                    </div>
                    <h3>Integration With Third Party Api</h3>
                    <p>
                      We integrate your website with third party API on our end
                      to serve you better.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-sm-4 col-md-4">
                <div class="thumbnail-new productthumbnail-box thumbnail-bx13">
                  <div class="caption">
                    <div class="best-partner-img-bx">
                      <img src="/img/jobboard/cost-effective.png" alt="img" />
                    </div>
                    <h3>Cost Effective</h3>
                    <p>
                      Powerful technology back-end with basic ready-made modules
                      save time and hence overall project cost for your script
                      gets reduced.
                    </p>
                  </div>
                </div>
              </div>
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
                        src="/img/jobboard/frame_wordpress_icon.png"
                        alt="Wordpress Development"
                      />
                    </div>
                    <div class="icntechimg_nm">Wordpress</div>
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
                    <b>Framework - </b> WordPress Content Management System
                    (CMS)
                  </li>
                  <li class="same">
                    <b>Language - </b> PHP 8.2 Supported, AJAX, jQuery
                  </li>
                  <li class="other ">
                    <b>Design - </b> HTML 5, CSS 3, Bootstrap 3.3.7, JavaScript
                  </li>
                  <li class="other">
                    <b>Database - </b> MySQL 5.5+{" "}
                  </li>
                  <li class="other ">
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
                <div class="supportsettingtext">White Labeled Software</div>
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
      <section class="CustomerReviewsSections">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-md-3 col-lg-3 CustomerReviewsImgMobile">
              <div class="CustomerReviewsImg">
                <img
                  alt="customer-reviews"
                  src="/img/yiiframework/customer-reviews-img.jpg"
                />
              </div>
            </div>
            <div class="col-xs-12 col-md-6 col-lg-6">
              <div class="CustomerReviews">
                <div class="CustomerReviewsBxMain">
                  <h2>Customer Reviews</h2>
                  <div class="CustomerReviewsMainBx">
                    <div class="CustomerReviewsBx">
                      <p>
                        I absolutely love the intuitive user interface of this
                        software. It's incredibly easy to navigate, and I can
                        quickly find the features I'm looking for. The interface
                        is well-designed, with detailed descriptions and helpful
                        tooltips that give me a clear idea of how to use the
                        software. The overall user experience is seamless, and I
                        appreciate the variety of customization options
                        available, making it convenient for me to customize the
                        website to my needs. Overall, this software offers a
                        fantastic user experience that keeps me satisfied.
                      </p>
                    </div>
                    <div class="CustomerReviewsClient">
                      <i>
                        <img
                          alt="customer-reviews"
                          src="/img/yiiframework/purpal-star.png"
                        />
                      </i>
                      <span>
                        Emily, Canada
                        <i class="contry-flag">
                          <img
                            alt="customer-reviews"
                            src="/img/jobboard/canada_flag_img.png"
                          />
                        </i>
                      </span>
                    </div>
                  </div>
                  <div class="CustomerReviewsMainBx">
                    <div class="CustomerReviewsBx">
                      <p>
                        The product management features of this software are
                        exceptional. As a buyer of this product, I appreciate
                        how easy it is to add, edit, and remove products. The
                        inventory management tools are also very useful, helping
                        me keep track of my stock levels. The order management
                        system is efficient, allowing me to process orders
                        quickly and keep my customers informed. Overall, this
                        software has everything I need to manage my online store
                        effectively.
                      </p>
                    </div>
                    <div class="CustomerReviewsClient">
                      <i>
                        <img
                          alt="customer-reviews"
                          src="/img/yiiframework/purpal-star.png"
                        />
                      </i>
                      <span>
                        James, USA
                        <i class="contry-flag">
                          <img
                            alt="customer-reviews"
                            src="/img/jobboard/usa_flag_img.png"
                          />
                        </i>
                      </span>
                    </div>
                  </div>
                  <div class="CustomerReviewsMainBx">
                    <div class="CustomerReviewsBx">
                      <p>
                        The customer support provided by Logicspice for this
                        software is outstanding. Whenever I have a question or
                        issue, the support team is quick to respond and always
                        goes above and beyond to help me. They are
                        knowledgeable, friendly, and genuinely care about
                        providing the best possible experience for their
                        customers. I also love the frequent updates and new
                        features they add to the software, ensuring that it
                        stays up-to-date and relevant.
                      </p>
                    </div>
                    <div class="CustomerReviewsClient">
                      <i>
                        <img
                          alt="customer-reviews"
                          src="/img/yiiframework/purpal-star.png"
                        />
                      </i>
                      <span>
                        Sophie, UK
                        <i class="contry-flag">
                          <img
                            alt="customer-reviews"
                            src="/img/jobboard/uk_flag_img.png"
                          />
                        </i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-md-4 col-lg-3">
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
                        style={{ width: "100%" }}
                      ></div>
                    </div>
                    <div class="people_star_num">200</div>
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
                    <div class="people_star_num">25</div>
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
                <div class="ecommerce--review--btn ">
                <a className="btn btn-primary" onClick={openReviewModel}>
                    Rate and Review product
                  </a>

                  <Reviewmodals
                    modalStatus={showReviewModal}
                    toggle={openReviewModel}
                    title=" WordPress eCommerce Website"
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
      <section class="ecommerce_faq_section JobBoardFaqSection">
        <div class="container">
          <div class="row">
            <div class="col-md-12 ecommerce__Quick_FAQ">
              <h4 class="title_main">Quick FAQ</h4>
              <div class="panel-group faq_quick_sec" id="accordion">
                <MDBAccordion v-model="activeItem" borderless>
                  <MDBAccordionItem
                    headerTitle="Can we change the fees we charge as website owner?"
                    collapseId="flush-collapse1"
                  >
                    <p>
                      Yes, From the website admin panel, you can manage the
                      charges, fees or commission.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Why should I buy this script ?"
                    collapseId="flush-collapse2"
                  >
                    <p>
                      You get following benefits of using LS Crowd Funding
                      Script -<br />
                      1. Easy to use, User friendly Script with all the major
                      features to the latest market trend.
                      <br />
                      2. Cost Effective
                      <br />
                      3. Support Unlimited Users
                      <br />
                      4. Easily scalable and Customizable solution
                      <br />
                      5. Target Social network to spread awareness to your
                      created project.
                      <br />
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Can I update some design and functionality in application code myself?"
                    collapseId="flush-collapse4"
                  >
                    <p>
                      Yes, You will have access of the all the code, except some
                      of the core encrypted files.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle=" Will I be able to use it on multiple domains, after I purchase this script?"
                    collapseId="flush-collapse5"
                  >
                    <p>
                      You will be licensed to use it only for the domain, you
                      purchased for.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle=" Can I resell the script? Will I have rights over the script code?"
                    collapseId="flush-collapse6"
                  >
                    <p>
                      No, You can’t resell the script. All rights will remain
                      with Logicspice only.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Do you offer Money Back Guarantee?"
                    collapseId="flush-collapse7"
                  >
                    <p>
                      Yes, we offer 30 days money back guarantee to ensure
                      customer satisfaction of our softwares. If for any reason,
                      you wish to discontinue using the product, you can ask us
                      for refund. We will refund your total money except the
                      installation and configuration charges, which is USD 65 or
                      20% of application cost, whichever is greater.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Along with hosting server details, what other recommendations?"
                    collapseId="flush-collapse3"
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
                    title="WordPress eCommerce Website"
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
                        <h3>Fiverr clone</h3>
                        <div class="other-project-logo">
                          <img
                            src="/img/jobboard/gigger_logo_new.png"
                            alt="Fiverr clone"
                          />
                        </div>
                        <p>
                          <span>On Demand Marketplace Software</span>{" "}
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
                            alt="Job Board Software Logo"
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
                            alt="eCommerce Software"
                          />
                        </div>
                        <p>
                          <span>Best eCommerce Web Design Packages</span>
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