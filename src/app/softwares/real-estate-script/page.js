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
      <section class="paid-pro job-portal-banner  fiverr-new-banner NewJobSiteDesign JobBoardNewDesign NewCrowdDesigns job-portal-bg realestate-banner-new">
    <div class="container">
        <div class="row">
            <div class="col-sm-7 col-md-7">
                <h1>Real Estate Script</h1>
                <div class="both-left-p-sec">
                    <h2>Readymade real estate CRM software allows an individual or a business to make classified listing of their properties</h2>                      
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
                        title="Please fill the form below and get access to the live demo of Real Estate.
See how it work yourself!"
                      />
                    }
                  </div>
                  <Link class="btn fiverr-buys NewGreenBtnJob" href="/softwares/real-estate-script">
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
                <li><i class="fa-solid fa-earth-americas" aria-hidden="true"></i></li>
                </ul>
              </div>
            </div>
            <div class="col-sm-5 col-md-5">
              <div class="por-mobile-new">
                <img
                  alt="Real Estate Script"
                  src="/img/softwares-banner-img/realstate-banner-img.png"
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
                Real Estate
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section class="job-section-top-new JobBoardSectionNew">
    <div class="container">
    <p>Are you looking to make your own real estate CRM software? Get on to our ready to use real estate clone script to make your own online real estate 
		classified website. This script allows an individual or a business to easily list, manage and organize the properties for sale or rent purpose.  It is the one-stop 
		solution for real estate agencies and realtors.</p>
    </div>
</section>
      <section class="client-say WhatsaapCliets" style={{ backgroundColor: "#fff" }}>
        <div class="container">
          <div class="row">
         
            <div class="col-md-12">
                <div class="service-market-ttd">
                <ul>
                        <li>Easily manage the Agent Subscriptions</li>
                        <li>Compatible With All Browsers</li>
                        <li>Responsive website</li>
                        <li>White labeled script</li>
                        <li>Geolocation supported</li>
                        <li>One time License Fee</li>
                        <li>Manage rental plans, discounts, agents & users  permissions.</li>

                    </ul>
                </div>
            </div>


          </div>
        </div>
      </section>
      <section class="job_portal_area">
        <div class="container">
          <div class="job_or_title">
            <h2 class="taxt_tt_job">Real Estate Classifieds Script Features</h2>
          </div>

          <div class="tatxt_txt_job text-center">Our ready to use real estate classified software is well designed and has a separate dashboard for Admin, Agents and Users so they 
            can manage their listing well from their unique dashboard with secure login credentials. This script is robust, scalable, secure and  user friendly even non 
            technical people can tackle. It's easily compatible with different devices. The admin can take complete control over the software with the admin dashboard.
        </div>

          <div class="tab_bbx_job">
            <div class="tab_bbx_top_job">
              <ul className="">
                <li
                  id="tab1_li"
                  className={`emplyer_app_job ddlj ${sellerTab ? "active" : ""}`}
                  onClick={() => handleSellerTab()}
                >
                  <a>Agent Features</a>
                </li>
                <li
                  id="tab2_li"
                  className={`jobseeker_app_job ddlj ${buyerTab ? "active" : ""}`}
                  onClick={() => handleBuyerTab()}
                >
                  <a>User Features</a>
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
                            src="/img/realestate/real_saler.png"
                            alt="Agent Features"
                          />
                        
                        </div>
                      </div>
                      <div class="col-lg-8 col-md-9">
                        <div class="costomer_tab_left costomer_tab_leftright">
                        <ul>
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/ragister-icon.png" /></i>
                                        <span>Agent Registration
                                            <div class="product-idea">
                                                <p>Users can register as an agent on the script by entering his email, password and other details with the selected membership package.</p>
                                            </div>
                                        </span>
                                    </li>
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/manage-dashboard.png" /></i>
                                        <span>Manage Dashboard
                                            <div class="product-idea">
                                                <p>Agent can manage all property classifieds and the other sections from his dashboard.</p>
                                            </div>
                                        </span>
                                    </li>
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/self_profile.png" /></i>
                                        <span>Manage Account
                                            <div class="product-idea">
                                                <p>Agent can view and manage his account information from the personal details tab on the dashboard.</p>
                                            </div>
                                        </span>
                                    </li>
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/manage_city.png" /></i>
                                        <span>Submit Property Classified
                                            <div class="product-idea">
                                                <p>Agents can submit the property classified from the submit property with all the property details like property description, images, brochure.</p>
                                            </div>
                                        </span>
                                    </li>
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/view_map.png" /></i>
                                        <span>Property Location & amenities
                                            <div class="product-idea">
                                                <p>Agent can submit his property details with the amenities list available and the location of the property.</p>
                                            </div>
                                        </span>
                                    </li>
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/view_public.png" /></i>
                                        <span>360 View and Floor Plans
                                            <div class="product-idea">
                                                <p>Agents can add 360 degree view of the property with video and the floor plan for the properties with price.</p>
                                            </div>
                                        </span>
                                    </li>
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/view_apartment.png" /></i>
                                        <span>View Properties
                                            <div class="product-idea">
                                                <p>Agents can view and manage all the properties added from dashboard, with published, pending and expired properties listing.</p>
                                            </div>
                                        </span>
                                    </li>
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/view_order.png" /></i>
                                        <span>Featured Listing 
                                            <div class="product-idea">
                                                <p>Agents can make their property classified listing featured, to get it on the top.</p>
                                            </div>
                                        </span>
                                    </li>
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/membership_plan.png" /></i>
                                        <span>Manage Membership 
                                            <div class="product-idea">
                                                <p>Seller can view their profile & can change password & PayPal email address.</p>
                                            </div>
                                        </span>
                                    </li>
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/payment_history.png" /></i>
                                        <span>Payment History
                                            <div class="product-idea">
                                                <p>Agents can view the list of their payment history and the last payment details in payment history.</p>
                                            </div>
                                        </span>
                                    </li>
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/manage_messages.png" /></i>
                                        <span>Manage Messages
                                            <div class="product-idea">
                                                <p>Agents can view and manage the inquiry messages received for the properties from the dashboard.</p>
                                            </div>
                                        </span>
                                    </li>
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/manage_appea.png" class="lazy" /></i>
                                        <span>View Reviews
                                            <div class="product-idea">
                                                <p>Agents can view a list of reviews received for the properties added by him in the reviews tab on the dashboard.</p>
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
                            src="/img/realestate/real_saler.png"
                            alt="User Features"
                          />
                         
                        </div>
                      </div>
                      <div class="col-lg-8 col-md-9">
                        <div class="costomer_tab_left">
                        <ul>
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/search_apartment.png" /></i>
                                        <span>Find Properties
                                            <div class="product-idea">
                                                <p>Users can find properties listed by different agents for sale, for rent and ongoing properties.</p>
                                            </div>
                                        </span>
                                    </li>
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/browse_gig.png" /></i>
                                        <span>Search by Proximity
                                            <div class="product-idea">
                                                <p>Users can search properties by entering the city, property type and by selection property category.</p>
                                            </div>
                                        </span>
                                    </li>
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/refine_search.png" /></i>
                                        <span>Advanced Search
                                            <div class="product-idea">
                                                <p>Users can search properties by entering more advanced options on the property search form with available parking, price range, property area and so on.</p>
                                            </div>
                                        </span>
                                    </li>
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/view_map.png" /></i>
                                        <span>Map Search
                                            <div class="product-idea">
                                                <p>Users can search properties, commercial spaces, offices on the Google map by entering the location.</p>
                                            </div>
                                        </span>
                                    </li>
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/view_apartment.png" /></i>
                                        <span>View Property Details
                                            <div class="product-idea">
                                                <p>Users can view all the property details with description, price, images, status, amenities, facilities, video post, 360 view. </p>
                                            </div>
                                        </span>
                                    </li>
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/contact.png" /></i>
                                        <span>Contact Property Owner
                                            <div class="product-idea">
                                                <p>Users can view property owners contact details on the property page and can send contact inquiry for the property to the listing owner.</p>
                                            </div>
                                        </span>
                                    </li>                                    

                                    <li>
                                        <i><img alt="img" src="/img/jobboard/payServices.png" /></i>
                                        <span>Mortgage Payment Calculator
                                            <div class="product-idea">
                                                <p>Users can view and calculate the mortgage payment with sale price, deposit, annual interest and year for payment per month.</p>
                                            </div>
                                        </span>
                                    </li>

                                    <li>
                                        <i><img alt="img" src="/img/jobboard/reviews_ratings.png" /></i>
                                        <span>Rating and Reviews
                                            <div class="product-idea">
                                                <p>Users can give ratings and reviews to the properties added by the agents, which helps in experiences with the agents for other users.</p>
                                            </div>
                                        </span>
                                    </li>
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/Ser_provider_ragis.png" /></i>
                                        <span>Share with Friends
                                            <div class="product-idea">
                                                <p>Users can share the properties details with his friend using social media like whatsapp, facebook, linkedin and twitter.</p>
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
                            src="/img/realestate/real_estate_deshboard.png"
                            alt="Admin Panel"
                          />
                        
                        </div>
                      </div>
                      <div class="col-lg-8 col-md-9">
                        <div class="costomer_tab_left costomer_tab_leftright2">
                        <ul>
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/secure_login.png" /></i>
                                        <span>Secure Login
                                            <div class="product-idea">
                                                <p>Admin can login securely entering valid credentials.</p>
                                            </div>
                                        </span>
                                    </li>                               
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/admin_dash.png" /></i>
                                        <span>Manage Dashboard
                                            <div class="product-idea">
                                                <p>Admin can view and manage all agents and users, properties, categories, membership packages and the coupons on the dashboard.  </p>
                                            </div>
                                        </span>
                                    </li>                               
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/manage_city.png" /></i>
                                        <span>Add / Manage Agencies
                                            <div class="product-idea">
                                                <p>Admin can add and manage agencies with all information and add or assign the agents in the team of the agency.  </p>
                                            </div>
                                        </span>
                                    </li>                               
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/manage_user.png" /></i>
                                        <span>Add / Manage Agents
                                            <div class="product-idea">
                                                <p>Admin can add and manage all registered agents and agent levels data from the admin dashboard.</p>
                                            </div>
                                        </span>
                                    </li>                               
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/manage_apartment.png" /></i>
                                        <span>Add / Manage Properties
                                            <div class="product-idea">
                                                <p>Admin can view, add and manage all the property classifieds added by different agents and can update the status of properties and featured properties. </p>
                                            </div>
                                        </span>
                                    </li>                               
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/manage_category.png" /></i>
                                        <span>Manage Categories / Subcategories 
                                            <div class="product-idea">
                                                <p>Admin can add, delete and manage categories and subcategories settings for the properties.</p>
                                            </div>
                                        </span>
                                    </li>    
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/sort_apartment.png" /></i>
                                        <span>Manage Property Types
                                            <div class="product-idea">
                                                <p>Admin can view and manage the property types and the property labels from the dashboard. </p>
                                            </div>
                                        </span>
                                    </li>    
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/manage_countries.png" /></i>
                                        <span>Manage Country / State
                                            <div class="product-idea">
                                                <p>Admin can add and manage the countries and states for the properties from the dashboard.</p>
                                            </div>
                                        </span>
                                    </li>    
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/manage_appea.png" /></i>
                                        <span>Manage Rating Features
                                            <div class="product-idea">
                                                <p>Admin can manage the rating features for the properties, agents and the agencies from the backend.</p>
                                            </div>
                                        </span>
                                    </li>    
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/membership_plan.png" /></i>
                                        <span>Add / Manage Membership
                                            <div class="product-idea">
                                                <p>Admin can add and manage membership packages for the agents and and manage member users.</p>
                                            </div>
                                        </span>
                                    </li>    
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/spec_price.png" /></i>
                                        <span>Add / Manage Coupons
                                            <div class="product-idea">
                                                <p>Admin can add and manage the coupons for the memberships packages from the backend.</p>
                                            </div>
                                        </span>
                                    </li>    
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/pay_transaction.png" /></i>
                                        <span>Manage Payments
                                            <div class="product-idea">
                                                <p>Admin can view and edit the list of all the payments received for the memberships packages from backend.</p>
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
            <h2 class="headhs">What does our real estate script offer you?`</h2>
            <p>Nowadays real estate applications and agent websites are becoming more and more popular for searching and selling the property. So, take advantage of its 
                popularity and you can launch your own online real estate application. We at Logicspice, provide readymade real estate clone script which help to start your 
                portal in less time at an affordable cost.</p>
            <p>This script allows the admin to manage the agents, properties, category, ratings, countries and more. Admin can manage all the payments records and agent 
                memberships packages or plans from their dashboard. Our real estate CRM script is able to generate the data of property and agent listing over the portal. </p>
            <p>The agent has a separate dashboard with many features. They can submit their properties with 360 degree view with video of the floor plan with price
                according to locations. They can make their listed property as featured, to get it on the top searching.  Also they can manage their enquiries and reviews.
                Users can search properties, commercial spaces and offices from advanced options with available parking, price range, property area, plans and more.</p>
            <p>Our script allows you to monetize your portal so you can increase the revenue by placing third party advertisements.  This PHP script has a WordPress framework, so you can customize as per your requirements.</p>

        </div>
    </div>
</section>
      <section class="SubscriptionModel" id="subscriptionmodel">
        <div class="container">
          <div class="job_or_title">
            <h2 class="taxt_tt_job">Subscription Model</h2>
            <br />
            <div class="SubscriptionModelBx">
            <p>Experience convenience like never before with our subscription-based hassle-free model, available at just <strong>USD 45 per month</strong>, limited offer available for the first year.</p>
              <p>Key Benefits:</p>
              <ul>
                    <li><span>Lifetime Updates: Enjoy complimentary updates for your software version throughout its lifespan.</span></li>
                    <li><span>Timely Upgrades: Seamlessly transition to upgraded versions at regular intervals, all at no extra cost.</span></li>
                    <li><span><strong>Zero Setup Fees</strong>:- There are no additional charges for the setup and installation of the software, making it easier for customers to get started.</span></li>
                    <li><span>Unlimited Property Listings: List as properties as you need without any limitations.</span></li>
                    <li><span>Effortless Program Operation: Revel in robust bandwidth that guarantees your program runs flawlessly, supported by resources allocated to your subscription model. Any increase in allocated resources will incur additional charges beyond the standard subscription model.</span></li>
                    <li><span>Enduring Support: We are committed to providing lifelong assistance through our subscription model. If any software issues arise, our <strong>dedicated technical team</strong> will promptly address them during office hours.</span></li>
                    <li><span>Personalized Customization Assistance: Delivering Custom Features According to Client Requirements at additional cost.</span></li>    
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
                        title="Please fill the form below and get access to the live demo of Real Estate.
See how it work yourself!"
                      />
                    }
                  </div>
                <Link
                  class="btn fiverr-buys"
                  href="/softwares/real-estate-script"
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
                <li><span>Obtain a lifetime license for your domain under the pro license with a one-time fee.</span></li>
                <li><span>Enjoy free installation of the software for the first time.</span></li>
                <li><span>Benefit from a white-labelled solution featuring your branding, logo, and content at no additional cost.</span></li>
                <li><span>Access custom features according to your specific requirements, available at an additional charge.</span></li>
                <li><span>Receive three months of complimentary support for any bugs or issues you encounter.</span></li>
                <li><span>Experience efficient communication channels via email, WhatsApp, Google Meet, Skype, Zoom and Teams.</span></li>
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
              Best Partner Company For Your Technological Solutions!
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
                    <li class="same"><b>Browsers - </b> Firefox 32.6+, Chrome 20.0+, Opera 30.0+, Safari 5+, IE 9+</li> 
                    <li class="same"><b>CMS   - </b> Wordpress</li>  
                    <li class="same"><b>Language  - </b> PHP 7.2+, AJAX, jQuery</li> 
                    <li class="other"><b>Design  - </b> HTML 5, CSS 3, Bootstrap 3.3.7, JavaScript</li> 
                    <li class="other"><b>Database  - </b> MySQL 5.5+ </li>
                    <li class="other"><b>Server  - </b>  Apache 2.4+ </li>


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
                      <div class="people_star_num">10</div>
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
                          style={{ width: "20%" }}
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
                <a className="btn btn-primary" onClick={openReviewModel}>
                    Rate and Review product
                  </a>

                  <Reviewmodals
                    modalStatus={showReviewModal}
                    toggle={openReviewModel}
                    title=" Free Script"
                  />
                </div>
                <div class="col-md-12">
                  <div class="customers_review_sec_row">
                    <div class="customer_review_stext">
                      "I have purchased this script and has constructed my own Real Estate. This was an easy task because of logicspice's free
                      installation and support. Keep up the good work. I will be back for more in the future."
                    </div>

                    <div class="who_ratset">
                      <span class="star_review_main">
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star-half" aria-hidden="true"></i>
                      </span>
                      <span id="client-name">John, USA</span>{" "}
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
                      "This is the best Real Estate script. Thanks for your great efforts and support while installing the script. Your prompt service
                      regarding a few minor issues was superb."
                    </div>

                    <div class="who_ratset">
                      <span class="star_review_main">
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                      </span>
                      D. Smith, Germany{" "}
                      <span class="ConuntryFlagIcon">
                        <img
                          src="/img/jobboard/german.png"
                          alt="mobile app development in german"
                        />
                      </span>
                    </div>
                  </div>
                  <div class="customers_review_sec_row">
                    <div class="customer_review_stext">
                      "Recently I bought this script from logicspice and it worked really nice, it helped my business to gain more efficiency. I
                      recommend for all whom looking for a Real Estate script, it's really nice."
                    </div>

                    <div class="who_ratset">
                      <span class="star_review_main">
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                      </span>
                      mike wilshon, AUS{" "}
                      <span class="ConuntryFlagIcon">
                        <img
                          src="/img/jobboard/australia_flag_img.png"
                          alt="mobile app development in Australia"
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
                    <p>It takes 2 working days generally, provided all the information to make it live has been given. </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Can I get help for customization?"
                    collapseId="flush-collapse2"
                  >
                   <p>Yes, we have an experienced team of developers to help you with customization as per your requirements.</p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Can I resell the script? Will I have rights over the script code?"
                    collapseId="flush-collapse4"
                  >
                   <p>No, You can't resell the script. All rights will remain with Logicspice only.</p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Will I be able to use it on multiple domains, after I purchase this script?"
                    collapseId="flush-collapse5"
                  >
                    <p>You will be licensed to use it only for the domain, you purchased for.</p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Can I use your script without any programming skills?"
                    collapseId="flush-collapse6"
                  >
                    <p>Yes, You can directly install our given script and can manage everything in the admin panel which is very user friendly.</p>
                  </MDBAccordionItem>

                  
                </MDBAccordion>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="content_area feature_inner" id="features">
        <div class="container">
          <h2 class="title_main">Real Estate Script Features</h2>
          <div id="joblboardslide">
            <Slider {...settings}>
              <div class="SliderMainBx">
              <div class="feat-slide-img"><img src="/img/realestate/real_home.jpg" alt="Real Estate" /></div>
                    <div class="hands-proved">
                        <div class="titleof_scnew">Real Estate</div>

                    </div>    
              </div>
         

              <div class="SliderMainBx">
              <div class="feat-slide-img"><img src="/img/realestate/real_proparty.jpg" alt="Property" class="lazy"/></div>
                    <div class="hands-proved">
                        <div class="titleof_scnew">Property</div>
                    </div>
                            
              </div>

              <div class="SliderMainBx">
              <div class="feat-slide-img"><img src="/img/realestate/real_proparty_detail.jpg"  alt="Property Details" class="lazy"/></div>
                    <div class="hands-proved">
                        <div class="titleof_scnew">Property Details</div>
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
                    title="Real Estate"
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
                          <span>
                          Readymade WhatsApp Clone Script.
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
