"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import Navbar from "@/app/Components/Navbar";
import Footer from "@/app/Components/Footer";
import Slider from "react-slick"; // Import react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import "../elements.css";
import Contactusmodel from "@/app/Components/Contactusmodel";
import "@fortawesome/fontawesome-free/css/all.css";


const Page = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  const openReviewModel = () => {
    setShowReviewModal(!showReviewModal);
  };

  const openModal = () => {
    setShowModal(!showModal);
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  return (
    <>
      <Navbar />
      <section
        className="resources-header"
        style={{ background: "url(/img/3820b_sitemap.png)" }}
      >
        <div className="container">
          <span>Sitemap</span>
        </div>
      </section>

      <section className="breadcrems_header">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1>SITEMAP</h1>
            </div>
            <div className="col-md-6">
              <ol className="breadcrumb">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li className="current">Sitemap</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="content_area sitemap">
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <div className="four columns_sitemap alpha">
                <ul className="sites_maps">
                  <li>
                    <Link href="/company">Company</Link>
                    <ul>
                      <li className="sub_mp">
                        <Link href="/company/about-us">About US</Link>
                        <ul>
                          <li>
                            <Link href="/company/our-team">Our Team</Link>
                          </li>
                          <li>
                            <Link href="/company/testimonials-and-reviews">
                              Testimonials &amp; Reviews
                            </Link>
                          </li>
                          <li>
                            <Link href="/company/technologies">Technologies</Link>
                          </li>
                          <li>
                            <Link href="/">Blogs</Link>
                          </li>
                          <li>
                            <Link href="/gallery">Gallery</Link>
                          </li>
                          <li>
                            <Link href="/company/social-responsibility">
                              Social Responsibility
                            </Link>
                          </li>
                          <li>
                            <Link href="/company/top-freelancer-company">
                              Top Freelancer Company
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="sub_mp">
                        <Link href="/resources">Resources</Link>
                        <ul>
                          <li>
                            <Link href="/resources/how-can-we-help">
                              How Can We Help
                            </Link>
                          </li>
                          <li>
                            <Link href="/resources/how-much-an-app-cost">
                              How Much An App Cost
                            </Link>
                          </li>
                          <li>
                            <Link href="/resources/how-to-grow-your-business-idea">
                              How to grow your business idea
                            </Link>
                          </li>
                          <li>
                            <Link href="/resources/quality-assurance">
                              Quality Assurance
                            </Link>
                          </li>
                          <li>
                            <Link href="/resources/our-work-process">
                              Work Our Process
                            </Link>
                          </li>
                          <li>
                            <Link href="/resources/free-scripts">
                              Free Scripts
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="sub_mp">
                        <Link href="/industries">Industries</Link>
                        <ul>
                          <li>
                            <Link href="/industries/Hotel-apps">
                              Hotel Industry
                            </Link>
                          </li>
                          <li>
                            <Link href="/industries/ecommerce-and-retail-apps">
                              eCommerce &amp; Retail
                            </Link>
                          </li>
                          <li>
                            <Link href="/industries/transportation-apps">
                              Transportation
                            </Link>
                          </li>
                          <li>
                            <Link href="/industries/schools-and-education-apps">
                              Online Education
                            </Link>
                          </li>
                          <li>
                            <Link href="/industries/ideas-and-business-concepts-apps">
                              Unique Business Concepts &amp; Ideas
                            </Link>
                          </li>
                          <li>
                            <Link href="/industries/health-care-apps">
                              Health Care Industry
                            </Link>
                          </li>
                          <li>
                            <Link href="/industries/commercial-and-residential-apps">
                              Real Estate
                            </Link>
                          </li>
                          <li>
                            <Link href="/industries/service-contractors-and-cleaning-companies-apps">
                              Service Contractors
                            </Link>
                          </li>
                          <li>
                            <Link href="/industries/accountants-and-financial-services-real-estate-apps">
                              Accountants and Financial Industry
                            </Link>
                          </li>
                          <li>
                            <Link href="/industries/government-and-municipal-and-other-administrative-operations-apps">
                              Government Operations
                            </Link>
                          </li>
                          <li>
                            <Link href="/industries/professional-consultant-mobile-app-development">
                              Professional Consultants
                            </Link>
                          </li>
                          <li>
                            <Link href="/industries/energy-and-utilities-apps">
                              Energy &amp; Utilities
                            </Link>
                          </li>
                          <li>
                            <Link href="/industries/finance-and-insurance-apps">
                              Finance &amp; Insurance
                            </Link>
                          </li>
                          <li>
                            <Link href="/industries/marketing-and-advertising-apps">
                              Marketing &amp; Advertising
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="sub_mp">
                        <Link href="/resources/our-work-process">
                          Our Process
                        </Link>
                        <ul>
                          <li>
                            <Link href="/case-studies">Case Study</Link>
                          </li>
                          <li>
                            <Link href="/resources/our-work-process">Development Methodology</Link>
                          </li>
                          <li>
                            <Link href="/resources/project-communication">
                              Project Communication Strategy
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="four columns_sitemap">
                <ul className="sites_maps">
                  <li>
                    <Link href="/softwares">Softwares</Link>
                    <ul>
                      <li>
                        <Link href="/softwares/crowdfunding-script">
                          Crowd Funding PHP Script
                        </Link>
                      </li>
                      <li>
                        <Link href="/softwares/job-portal-script">
                          Job Portal PHP Script
                        </Link>
                      </li>
                      <li>
                        <Link href="/softwares/food-ordering-script">
                          Food Ordering &amp; Delivery Script
                        </Link>
                      </li>
                      <li>
                        <Link href="/softwares/classified-ads-script">
                          Classified Ads Script
                        </Link>
                      </li>
                      <li>
                        <Link href="/softwares/online-exam-software-solution">
                          Online Exam Test
                        </Link>
                      </li>
                      <li>
                        <Link href="/softwares/taxi-booking-script">
                          Taxi Booking PHP Script
                        </Link>
                      </li>
                      <li>
                        <Link href="/softwares/faq-script">FAQ Script</Link>
                      </li>
                      <li>
                        <Link href="/softwares/equipment-rental-software">
                          Equipment Rental Software
                        </Link>
                      </li>
                      <li>
                        <Link href="/softwares/rental-property-management-software">
                          Property Rental Script
                        </Link>
                      </li>
                      <li>
                        <Link href="/softwares/groupon-clone">
                          Groupon Clone Script
                        </Link>
                      </li>
                      <li>
                        <Link href="/softwares/freelancer-clone">
                          Freelancer Clone
                        </Link>
                      </li>
                      <li>
                        <Link href="/softwares/fiverr-clone">Fiverr Clone</Link>
                      </li>
                      <li>
                        <Link href="/softwares/appointment-scheduling-software">
                          Appointment Scheduling Software
                        </Link>
                      </li>
                      <li>
                        <Link href="/softwares/cakephp-facebook-login-plugin-script">
                          Cake PHP Facebook Login Plugin Script
                        </Link>
                      </li>
                      <li>
                        <Link href="/softwares/angularjs-blog-script">
                          Angular Js Blog Script
                        </Link>
                      </li>
                      <li>
                        <Link href="/softwares/wordpress-twitter-login-plugin">
                          Wordpress Twitter Login Plugin
                        </Link>
                      </li>
                      <li>
                        <Link href="/softwares/cakephp-cms-script">
                          CakePHP CMS Script
                        </Link>
                      </li>
                      <li>
                        <Link href="/softwares/lead-generation-contact-form-php-script">
                          Contact Form PHP Script
                        </Link>
                      </li>
                      <li>
                        <Link href="/softwares/service-marketplace-script">
                          Service Marketplace Script
                        </Link>
                      </li>
                      <li>
                        <Link href="/softwares/business-directory-system">
                          PHP Business Directory Script
                        </Link>
                      </li>
                      <li>
                        <Link href="/softwares/food-ordering-script">
                          Restaurant Food Delivery Script
                        </Link>
                      </li>
                      <li>
                        <Link href="/softwares/online-course-management-script">
                          Online Course Management Script
                        </Link>
                      </li>
                      <li>
                        <Link href="/softwares/chat-room-script">
                          Chat Room Script
                        </Link>
                      </li>
                      <li>
                        <Link href="/softwares/grocery-app-development">
                          Grocery Store Script
                        </Link>
                      </li>
                      <li>
                        <Link href="/softwares/online-food-ordering-system">
                          Food Ordering Hosted Solution
                        </Link>
                      </li>
                      <li>
                        <Link href="/softwares/logistic-marketplace-software">
                          Logistic Marketplace Software
                        </Link>
                      </li>
                      <li>
                        <Link href="/softwares/linkedin-clone">
                          LinkedIn Clone
                        </Link>
                      </li>
                      <li>
                        <Link href="/softwares/blog-script">Blog Script</Link>
                      </li>
                      <li>
                        <Link href="/softwares/ebay-clone">
                          eBay Clone Script
                        </Link>
                      </li>
                      <li>
                        <Link href="/softwares/recruitment-management-software">
                          Recruitment Management Software
                        </Link>
                      </li>
                      <li>
                        <Link href="/softwares/job-board-software">
                          Job Board Software
                        </Link>
                      </li>
                      <li>
                        <Link href="/softwares/teacher-marketplace">
                          Teacher Marketplace
                        </Link>
                      </li>
                      <li>
                        <Link href="/softwares/whatsapp-clone">
                          WhatsApp Clone
                        </Link>
                      </li>
                      <li>
                        <Link href="/softwares/real-estate-script">
                          Real Estate Script
                        </Link>
                      </li>
                      <li>
                        <Link href="/softwares/forum-script">Forum Script</Link>
                      </li>
                      <li>
                        <Link href="/softwares/news-management-system">
                          News Management System
                        </Link>
                      </li>
                      <li>
                        <Link href="/softwares/event-booking-software">
                          Event Booking Software
                        </Link>
                      </li>
                      <li>
                        <Link href="/softwares/udemy-clone">Udemy Clone</Link>
                      </li>
                      <li>
                        <Link href="/softwares/product-review-rating-php-script">
                          Product Review Script
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="/custom-solutions">Custom Solutions</Link>
                    <ul>
                      <li>
                        <Link href="/custom-solutions/booking-app-development">
                          Online Booking App
                        </Link>
                      </li>
                      <li>
                        <Link href="/custom-solutions/restaurant-table-booking-system">
                          Restaurant Table Booking App
                        </Link>
                      </li>
                      <li>
                        <Link href="/custom-solutions/seat-booking-system">
                          Seat Booking Application
                        </Link>
                      </li>
                      <li>
                        <Link href="/custom-solutions/crm-software-development">
                          CRM Software
                        </Link>
                      </li>
                      <li>
                        <Link href="/custom-solutions/ecommerce-development">
                          E-Commerce Portal
                        </Link>
                      </li>
                      <li>
                        <Link href="/custom-solutions/crowdfunding-script">
                          Ready-Made Fundraising PHP Scripts
                        </Link>
                      </li>
                      <li>
                        <Link href="/custom-solutions/loan-management-software-development">
                          Loan System
                        </Link>
                      </li>
                      <li>
                        <Link href="/custom-solutions/marketplace-software-solution">
                          Marketplace Solutions
                        </Link>
                      </li>
                      <li>
                        <Link href="/custom-solutions/survey-software-development">
                          Survey App
                        </Link>
                      </li>
                      <li>
                        <Link href="/custom-solutions/dating-system-solution">
                          Dating System
                        </Link>
                      </li>
                      <li>
                        <Link href="/custom-solutions/jewellery-ecommerce-system-solution">
                          Jewellery E-Commerce System
                        </Link>
                      </li>
                      <li>
                        <Link href="/custom-solutions/e-learning-solution">
                          E-Learning System
                        </Link>
                      </li>
                      <li>
                        <Link href="/custom-solutions/event-booking-system-development">
                          Event booking System Script
                        </Link>
                      </li>
                      <li>
                        <Link href="/Auction-software-solution">
                          Auction System
                        </Link>
                      </li>
                      <li>
                        <Link href="/Vuejs/gps-vehicle-tracking-system">
                          Vehical Tracking System
                        </Link>
                      </li>
                      <li>
                        <Link href="/car-rental-software">Car Rental</Link>
                      </li>
                      <li>
                        <Link href="/Vuejs/delivery-management-software">
                          Delivery Management System
                        </Link>
                      </li>
                      <li>
                        <Link href="/point-of-sale-software">
                          Point Of Sale Software
                        </Link>
                      </li>
                      <li>
                        <Link href="/hotel-booking-software">
                          Hotel Booking Software
                        </Link>
                      </li>
                      <li>
                        <Link href="/user-management-system">
                          User Management System
                        </Link>
                      </li>
                      <li>
                        <Link href="/Vuejs/social-network-integration-in-android-app">
                          Social Network Integration In Android App
                        </Link>
                      </li>
                      <li>
                        <Link href="/Vuejs/erp-system-software-developement">
                          ERP System Software Development
                        </Link>
                      </li>
                      <li>
                        <Link href="/ecommerce-website">eCommerce Website</Link>
                      </li>
                      <li>
                        <Link href="/Vuejs/inventory-management-software">
                          Inventory Management System Development
                        </Link>
                      </li>
                      <li>
                        <Link href="/Vuejs/logistics-software-development">
                          Custom Logistics Software Development
                        </Link>
                      </li>
                      <li>
                        <Link href="/order-management-software">
                          Order Management Software
                        </Link>
                      </li>
                      <li>
                        <Link href="/Vuejs/wordpress-ecommerce-website">
                          WordPress Ecommerce Website Development Company -
                          Logicspice
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="four columns_sitemap">
                <ul className="sites_maps">
                  <li>
                    <Link href="/services">Services</Link>
                    <ul>
                      <li>
                        <Link href="/django-development">
                          Django Web Development
                        </Link>
                      </li>
                      <li>
                        <Link href="/contract-hire">Contract Hire</Link>
                      </li>
                      <li>
                        <Link href="/Linkngular-development">
                          Angular Web Development
                        </Link>
                      </li>
                      <li>
                        <Link href="/python-development">
                          Python Development Services
                        </Link>
                      </li>
                      <li>
                        <Link href="/reactjs-development">
                          React JS Web Development
                        </Link>
                      </li>
                      <li>
                        <Link href="/react-native-app-development">
                          React Native App Development
                        </Link>
                      </li>
                      <li>
                        <Link href="/Linkrtificial-intelligence">
                          Artificial Intelligence
                        </Link>
                      </li>
                      <li>
                        <Link href="/mobile-app-development">
                          Mobile App Development
                        </Link>
                      </li>
                      <li>
                        <Link href="/ios-app-development">iPhone</Link>
                      </li>
                      <li>
                        <Link href="/Linkndroid-app-development">Android</Link>
                      </li>
                      <li>
                        <Link href="/website-development">
                          Website Development
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/psd-to-html">
                          XHTML Conversion
                        </Link>
                      </li>
                      <li>
                        <Link href="/cakephp-development/">
                          CakePHP Development Company
                        </Link>
                      </li>
                      <li>
                        <Link href="/codeigniter-development/">
                          {" "}
                          Codeigniter Framework
                        </Link>
                      </li>
                      <li>
                        <Link href="/laravel-development/">
                          LARAVEL DEVELOPMENT COMPANY
                        </Link>
                      </li>
                      <li>
                        <Link href="/opencart-development/">
                          Opencart Development Company
                        </Link>
                      </li>
                      <li>
                        <Link href="/drupal/">
                          {" "}
                          Drupal Development Services
                        </Link>
                      </li>
                      <li>
                        <Link href="/magento-development/">
                          {" "}
                          Magento Development
                        </Link>
                      </li>
                      <li>
                        <Link href="/php-development/">
                          PHP Web Development Services
                        </Link>
                      </li>
                      <li>
                        <Link href="/job-portal-script/">
                          Jobsite Script Development
                        </Link>
                      </li>
                      <li>
                        <Link href="/shopify-framework/">
                          Shopify Framework
                        </Link>
                      </li>
                      <li>
                        <Link href="/salesforce_development_company/">
                          Salesforce Development Company
                        </Link>
                      </li>
                      <li>
                        <Link href="/business-support-services/">
                          Business Support Services
                        </Link>
                      </li>
                      <li>
                        <Link href="/saas-software-development/">
                          SaaS Software Development
                        </Link>
                      </li>
                      <li>
                        <Link href="/social-media-optimization-services/">
                          Social Media Optimization Services
                        </Link>
                      </li>
                      <li>
                        <Link href="/nodejs-development-company/">
                          Node.js Development Company
                        </Link>
                      </li>
                      <li>
                        <Link href="/website-cloning-service/">
                          Website Cloning Service | Website Clone Development
                        </Link>
                      </li>
                      <li>
                        <Link href="/mobile-app-development/">
                          Mobile App Developement
                        </Link>
                      </li>
                      <li>
                        <Link href="/shopify-development/">
                          Shopify App Development Company | Shopify Web
                          Development Services
                        </Link>
                      </li>
                      <li>
                        <Link href="/devops-services/">
                          DevOps Services | DevOps Consulting Services &amp;
                          Solutions
                        </Link>
                      </li>
                      <li>
                        <Link href="/submit-guest-post/">
                          Submit Guest Post for Software, Technology, WordPress
                          Niche
                        </Link>
                      </li>
                      <li>
                        <Link href="/django-development/">
                          Django Development Company | Django Development
                          Services - Logicspice
                        </Link>
                      </li>
                      <li>
                        <Link href="/shopify-development-packages/">
                          Shopify Development Packages
                        </Link>
                      </li>
                      <li>
                        <Link href="/Linkngular-development/">
                          Angular Development Company | Hire Angular Developers
                          | Logicspice
                        </Link>
                      </li>
                      <li>
                        <Link href="/python-development/">
                          Python Development Company | Python Development
                          Services | Logicspice
                        </Link>
                      </li>
                      <li>
                        <Link href="/Linkrtificial-intelligence/">
                          Best Artificial Intelligence Development Company |
                          Logicspice
                        </Link>
                      </li>
                      <li>
                        <Link href="/reactjs-development/">
                          Reactjs Development Company | Hire Reactjs Developers
                          -Logicspice
                        </Link>
                      </li>
                      <li>
                        <Link href="/react-native-app-development/">
                          React Native App Development Company | Hire React
                          Native Developers
                        </Link>
                      </li>
                      <li>
                        <Link href="/contract-hire/">
                          The New IT Recruitment Model | Contract IT Staffing
                          Services - Logicspice
                        </Link>
                      </li>
                      <li>
                        <Link href="/big-data-development/">
                          Big Data Development
                        </Link>
                      </li>
                      <li>
                        <Link href="/devops-development/">
                          DevOps Development Services
                        </Link>
                      </li>
                      <li>
                        <Link href="/website-design">Web Design</Link>
                      </li>
                      <li>
                        <Link href="/services/website-design/website-redesign">
                          Website Redesign Services
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/website-design/responsive-web-design">
                          Responsive Web Design
                        </Link>
                      </li>
                      <li>
                        <Link href="/Vuejs/services/website-design/best-landing-page-designing-service">
                          Landing Page Design
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/website-design/ui_ux_design_company">
                          UI UX Design Company
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/software-development">
                          Software Development
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/software-development/Linkction-script">
                          Auction Script Software
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/software-development/forum-script">
                          Forum Script
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/software-development/open-source-cms">
                          Open Source CMS Development
                        </Link>
                      </li>
                      <li>
                        <Link href="/Vuejs/services/software-development/enterprises-solutions">
                          Enterprises Solution
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/software-development/dating-website">
                          Dating Website Development
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/software-development/crm">
                          CRM Software Development
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/software-development/live-support-script">
                          Live Support Script Development
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/software-development/erp-openbravo">
                          ERP (OpenBravo)
                        </Link>
                      </li>
                      <li>
                        <Link href="/Vuejs/services/software-development/online-booking-software-solution">
                          Online Booking Software
                        </Link>
                      </li>
                      <li>
                        <Link href="/Vuejs/services/software-development/hotel-management-software">
                          Hotel Management Software
                        </Link>
                      </li>
                      <li>
                        <Link href="/open-source-customization">
                          Open Source Customization
                        </Link>
                      </li>
                      <li>
                        <Link href="/Vuejs/services/open-source-customization/wordpress-web-development">
                          WordPress Development
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/open-source-customization/oscommerce">
                          Oscommerce
                        </Link>
                      </li>
                      <li>
                        <Link href="/digital-marketing">Digital Marketing</Link>
                      </li>
                      <li>
                        <Link href="/services/digital-marketing/brand-development">
                          Brand Development
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/digital-marketing/social-media-promotion">
                          Social Media Marketing
                        </Link>
                      </li>
                      <li>
                        <Link href="/Vuejs/services/digital-marketing/search-engine-optimization">
                          Search Engine Optimization
                        </Link>
                      </li>
                      <li>
                        <Link href="/Vuejs/services/digital-marketing/internet-marketing-solutions">
                          Internet Marketing Solutions
                        </Link>
                      </li>
                      <li>
                        <Link href="/Linkdvanced-web-programming">
                          Advanced Web Programming
                        </Link>
                      </li>
                      <li>
                        <Link href="/support">Support &amp; Maintenance</Link>
                      </li>
                      <li>
                        <Link href="/psd-to-shopify">PSD to Shopify</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="four columns_sitemap">
                <ul className="sites_maps">
                  <li>
                    <Link href="/hire-developers">Hire Developers</Link>
                    <ul>
                      <li>
                        <Link href="/hire-drupal-experts">Drupal Experts</Link>
                      </li>
                      <li>
                        <Link href="/hire-android-app-developers">
                          Hire Android App Developers Experts
                        </Link>
                      </li>
                      <li>
                        <Link href="/hire-ios-app-developers">
                          Hire iPhone App Developer Experts
                        </Link>
                      </li>
                      <li>
                        <Link href="/hire-web-developers">
                          Hire Web Developer Experts
                        </Link>
                      </li>
                      <li>
                        <Link href="/hire-cakephp-developers">
                          Hire CakePHP Developer Experts
                        </Link>
                      </li>
                      <li>
                        <Link href="/hire-wordpress-experts">
                          Hire WordPress Developer Experts
                        </Link>
                      </li>
                      <li>
                        <Link href="/hire-magento-experts">
                          Hire Magento Developer Experts
                        </Link>
                      </li>
                      <li>
                        <Link href="/hire-zencart-experts">
                          Zencart Experts
                        </Link>
                      </li>
                      <li>
                        <Link href="/hire-shopify-developers">
                          Hire Shopify Developers Experts
                        </Link>
                      </li>
                      <li>
                        <Link href="/hire-laravel-developers">
                          Hire Laravel Developers Experts
                        </Link>
                      </li>
                      <li>
                        <Link href="/hire-node-js-experts">
                          Hire Node.JS Developer Experts
                        </Link>
                      </li>
                      <li>
                        <Link href="/hire-angular-js-developers">
                          Hire AngularJS Developer Experts
                        </Link>
                      </li>
                      <li>
                        <Link href="/hire-yii-developers">
                          Hire Yii Developer Experts
                        </Link>
                      </li>
                      <li>
                        <Link href="/hire-opencart-developers">
                          Hire Opencart Developer Experts
                        </Link>
                      </li>
                      <li>
                        <Link href="/hire-hybrid-mobile-app-developer">
                          Hire Hybrid App Developer Experts
                        </Link>
                      </li>
                      <li>
                        <Link href="/hire-codeigniter-developers">
                          Hire CodeIgniter Developer Experts
                        </Link>
                      </li>
                      <li>
                        <Link href="/hire-php-developers">
                          Hire PHP Developer Experts
                        </Link>
                      </li>
                      <li>
                        <Link href="/hire-quality-analyst">
                          Hire Quality Assurance Tester Experts
                        </Link>
                      </li>
                      <li>
                        <Link href="/hire-react-developers">
                          hire-react-developers Experts
                        </Link>
                      </li>
                      <li>
                        <Link href="/hire-react-native-developers">
                          hire-react-native-developers Experts
                        </Link>
                      </li>
                      <li>
                        <Link href="/hire-python-developers">
                          hire-python-developers Experts
                        </Link>
                      </li>
                      <li>
                        <Link href="/hire-yii-developers">
                          Hire Yii Developers Experts
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
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
              src="/img/images/whatsapp.png"
              alt="whatsapp-icon"
              height={50}
              width={50}
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
