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
  const [adminTab, setAdminTab] = useState(false);

  const handleSellerTab = () => {
    setSellerTab(true);
    setAdminTab(false);
  };

  const handleAdminTab = () => {
    setSellerTab(false);
    setAdminTab(true);
  };

  const opendiv = (tab) => {
    setActiveTab(tab);
  };
  return (
    <>
      <NavBar />
<section class="paid-pro job-portal-banner fiverr-new-banner NewJobSiteDesign JobBoardNewDesign NewCrowdDesigns job-portal-bg product-review-new-banner">
    <div class="container">
        <div class="row">
            <div class="col-sm-7 col-md-7">
                <h1>Product Review & Rating PHP Script</h1>
                <div class="both-left-p-sec">
                    <h2>Make your own star rating system like TrustPilot</h2>                      
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
                        title="Product Review & Rating PHP Script"
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
                    <p>23 Reviews</p>
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
                  alt="Product Review & Rating PHP Script"
                  src="/img/softwares-banner-img/product-review-mobile.png"
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
                Product Review
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
<section class="job-section-top-new JobBoardSectionNew">
    <div class="container">
    <p>Get valuable feedback from your customers by giving them the opportunity to share their reviews. Let them rate your products and services directly on 
            your website. The customer review system is useful for both clients and the service providers, for any type of website. The PHP Review Script can help 
            in improving quality of your products and services, by getting genuine feedback from customers, which inturn will increase credibility and brand awareness, 
            and will ultimately increase your market.</p>
    </div>
</section>
      <section class="client-say service-market-say" style={{ backgroundColor: "#fff" }}>
        <div class="container">
          <div class="row">
          
            <div class="col-md-12">
            <div class="service-market-ttd">
            <ul>
                         <li>Attractive & Responsive Design: This script works on all the devices, seamlessly adapting to various screen sizes.</li>
                        <li>Email Notifications: Set up the online review system to send email alerts when a new review is posted. </li>
                        <li>High Performance</li>
                        <li>One Admin</li>
                        <li>Ready to Use Code & Easy Installation with proper guidelines. </li>
                        <li>Script Modification</li>
                        <li>White labeled script</li>
                        <li>One time License Fee</li>
			<li>Complete monitoring & management from administration panel</li>
                    </ul>
                </div>

            </div>


          </div>
        </div>
      </section>
      <section class="job_portal_area">
        <div class="container">
          <div class="job_or_title">
          <h2 class="taxt_tt_job">PHP Review Script Features</h2>
          </div>

          <div class="tatxt_txt_job text-center">The PHP Review Script is a web tool that authorize our customers to share their experiences by giving reviews and by rating 
            on our various products and services. The customer review system is useful to both, the clients and the service providers 
            for any type of website in business.
        </div>

          <div class="tab_bbx_job">
            <div class="tab_bbx_top_job tab_bbx_job_classified">
              <ul className="">
                <li
                  id="tab1_li"
                  className={`jobseeker_app_job ddlj ${sellerTab ? "active" : ""}`}
                  onClick={() => handleSellerTab()}
                >
                  <a>Customer/ User Panel</a>
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
                            src="/img/product-review/product-review-img.png"
                            alt="Product Review & Rating PHP Script"
                          />
                        
                        </div>
                      </div>
                      <div class="col-lg-8 col-md-9">
                        <div class="costomer_tab_left costomer_tab_leftright">
                        <ul>
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/secure_login.png" /></i>
                                        <span>Secure login
                                            <div class="product-idea">
                                                <p>User can securely login</p>
                                            </div>
                                        </span>
                                    </li>
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/manage-notifi.png" /></i>
                                        <span>Simple Review & Rating tool
                                            <div class="product-idea">
                                                <p>Our PHP review system will help to build credibility, attract new clients, and manage customer relationships in an open and engaging manner. </p>
                                            </div>
                                        </span>
                                    </li>
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/post_comments.png" /></i>
                                        <span>Easy Review Form
                                            <div class="product-idea">
                                                <p>Only name and email required, registration not required.</p>
                                            </div>
                                        </span>
                                    </li>
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/view_save_projects.png" /></i>
                                        <span>Quick tips
                                            <div class="product-idea">
                                                <p>Use the tip box space to add importance notes.</p>
                                            </div>
                                        </span>
                                    </li>
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/view_testimonial.png" /></i>
                                        <span>Overall Rating
                                            <div class="product-idea">
                                                <p>User can write a comment.</p>
                                            </div>
                                        </span>
                                    </li>
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/pros-and-cons.png" /></i>
                                        <span>Pros & Cons
                                            <div class="product-idea">
                                                <p>No fake reviews, only the facts through the client's eyes.</p>
                                            </div>
                                        </span>
                                    </li>
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/manage_profile.png" /></i>
                                        <span>Select User type
                                            <div class="product-idea">
                                                <p>Customers can select their user type depending on the services / products used.</p>
                                            </div>
                                        </span>
                                    </li>
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/clear-cut-rating.png" /></i>
                                        <span>Clear-cut Rating
                                            <div class="product-idea">
                                                <p>Customer reviews and the rating score based on all reviews will show up on the web page that you paste.</p>
                                            </div>
                                        </span>
                                    </li>
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/rating-scoring-icon.png" /></i>
                                        <span>Rating Score
                                            <div class="product-idea">
                                                <p>Based on 5-star rating system, the average rating based on all criteria and the average rating for each separate criterion are shown.</p>
                                            </div>
                                        </span>
                                    </li>
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/filter-ratings-icon.png" /></i>
                                        <span>Filter ratings
                                            <div class="product-idea">
                                                <p>Can filter all ratings given by a selected user type.</p>
                                            </div>
                                        </span>
                                    </li>
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/high-flexibility.png" /></i>
                                        <span>High Flexibility
                                            <div class="product-idea">
                                                <p>The PHP Review Script handles even the most data-intensive workloads flawlessly.</p>
                                            </div>
                                        </span>
                                    </li>
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/easy-installation.png" /></i>
                                        <span>Easy Installation & Integration
                                            <div class="product-idea">
                                                <p>An installation  guideline will be provided to install the customer review system for you.</p>
                                            </div>
                                        </span>
                                    </li>
                                    
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/manage_faq.png" /></i>
                                        <span>Subscription Management
                                            <div class="product-idea">
                                                <p>Users can subscribe so that whenever any new blog for a product or services gets added then they get informed of that.</p>
                                            </div>
                                        </span>
                                    </li>
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/social_login.png" /></i>
                                        <span>Social Media Integration
                                            <div class="product-idea">
                                                <p>Added various social networking sites such as Facebook, Twitter etc, in a review website. This helps the customers as well as admin to share reviews on the social media platforms.</p>
                                            </div>
                                        </span>
                                    </li>
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/tickets_list.png" /></i>
                                        <span>Contact Us Form
                                            <div class="product-idea">
                                                <p>Allows Visitors or Users to ask queries related to any product or service or about anything. </p>
                                            </div>
                                        </span>
                                    </li>
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/manage_user_acc.png" /></i>
                                        <span>Video or Photo/Image Reviews
                                            <div class="product-idea">
                                                <p>Users can post reviews by uploading the video or Photo/images.</p>
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
                            src="/img/product-review/product_review_deshboard.png"
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
                                                <p>Admin can securely login on this portal</p>
                                            </div>
                                        </span>
                                    </li>                               
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/admin_dash.png" /></i>
                                        <span>Advanced Administration
                                            <div class="product-idea">
                                                <p>The PHP Review Script can provide the complete overview of all reviews, ratings, and users.</p>
                                            </div>
                                        </span>
                                    </li>                               
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/manage-dashboard.png" /></i>
                                        <span>User Friendly Dashboard
                                            <div class="product-idea">
                                                <p>Can check the fresh ratings, reviews (Comments) and reviewers.</p>
                                            </div>
                                        </span>
                                    </li>                               
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/ragister-icon.png" /></i>
                                        <span>Check reviewer's details
                                            <div class="product-idea">
                                                <p>Require Name, contacts, ratings posted, first rating and status.</p>
                                            </div>
                                        </span>
                                    </li>                               
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/manage_keywords.png" /></i>
                                        <span>Export Ratings
                                            <div class="product-idea">
                                                <p>Export rating in different formats.</p>
                                            </div>
                                        </span>
                                    </li>                               
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/manage_service.png" /></i>
                                        <span>Rating order
                                            <div class="product-idea">
                                                <p>Define rating order (newer on top or at the bottom) and ratings per page.</p>
                                            </div>
                                        </span>
                                    </li>    
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/manage_category.png" /></i>
                                        <span>Review management
                                            <div class="product-idea">
                                                <p>Admin can configure all general options, manage rating criteria and user types, and adapt the review and rating script to your specific business needs.</p>
                                            </div>
                                        </span>
                                    </li>    
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/manage_skill.png" /></i>
                                        <span>Sub Admin Management
                                            <div class="product-idea">
                                                <p>Sub Admin should be able to manage all the functionality of the admin side on behalf of the admin.</p>
                                            </div>
                                        </span>
                                    </li>    
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/manage_blog.png" /></i>
                                        <span>Blog Management
                                            <div class="product-idea">
                                                <p>This can give a well designed blog management so that Admin can inform users of the newly added products and services.</p>
                                            </div>
                                        </span>
                                    </li>    
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/manage_news.png" /></i>
                                        <span>Newsletter Management
                                            <div class="product-idea">
                                                <p>Add Newsletter Template, Send Newsletter to Reviewers and Subscribers. </p>
                                            </div>
                                        </span>
                                    </li>    
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/manage_testimonial.png" /></i>
                                        <span>Review Search Management
                                            <div class="product-idea">
                                                <p>View a list of reviews given to a particular product or for a particular service.</p>
                                            </div>
                                        </span>
                                    </li>    
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/payment_history.png" /></i>
                                        <span>Enquiry Management
                                            <div class="product-idea">
                                                <p>Able to view all the enquiries sent by Visitors and Users.</p>
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
            <h2 class="headhs">What does our Online Forum Software offer you?</h2>
            <p>Having an online discussion forum has become the need of every online business nowadays as tends to reduce time to connect with the company and the users. By discussing the queries in a common transparent platform you can improve productivity within your team, stakeholders and prospective clients. With our ready to use forum script, you can create an online community so your audience will naturally feel more engaged with your product or project.  </p>
            <p>This PHP forum script has a secure admin dashboard where admin can control the forum by viewing and deleting the list of all registered users and can edit and delete their topics and comment which provides full command over the forum. Users can raise the questions regarding knowledge, reviews, suggestions threads of product or services by our easy to use help forum. It can be easily integrated with your website in less time.</p>
            <p>The active forum makes the users and prospective clients feel authenticated regarding your product or service. Get our readymade forum clone and save your development cost.</p>

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
                    <li><span>Lifetime Updates: Enjoy complimentary updates for your software version throughout its lifespan.</span></li>
                    <li><span>Timely Upgrades: Seamlessly transition to upgraded versions at regular intervals, all at no extra cost.</span></li>
                    <li><span><strong>Zero Setup Fees</strong>:- There are no additional charges for the setup and installation of the software, making it easier for customers to get started.</span></li>
                    <li><span>Unlimited User Connection Listings: List as many user connections as you need without any limitations.</span></li>
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
              <h4>
                ₹88,190<span class="sml_labl"> INR</span>
              </h4>
              <strike class="srik_cls">
                ₹147,805<span class="sml_labl"> INR</span>
              </strike>
              <div class="SubscriptionModelPriceBtn">
              <div className="btn btn-get" onClick={openModal}>
                    <button>Enquire Now</button>
                    {
                      <Enquirymodal
                        modalStatus={showModal}
                        toggle={openModal}
                        title="Product Review & Rating PHP Script"
                      />
                    }
                  </div>
                
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
                    <p>23 Reviews</p>
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
                    <li class="same"><b>Framework  - </b> Laravel 8.16</li>  
                    <li class="same "><b>Language  - </b> PHP 5.4+, AJAX, jQuery</li> 
                    <li class="other"><b>Design  - </b> HTML 5, CSS 3, Bootstrap 4.7, JavaScript</li> 
                    <li class="other"><b>Database  - </b> MySQL 5.5+ </li>
                    <li class="other"><b>Server  - </b>  Apache 2.4+</li>
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
                      <div class="people_star_num">22</div>
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
                      <div class="people_star_num">1</div>
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
                    title=" Product Review & Rating PHP Script"
                  />
                </div>
                <div class="col-md-12">
                  <div class="customers_review_sec_row">
                    <div class="customer_review_stext">
                      "I have purchased this script and has constructed my own web-site. This was an easy task because of logicspice's free
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
                      "This is the best Product Review & Rating PHP Script. Thanks for your great efforts and support while installing the script. Your prompt service
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
                          alt="mobile app development in Germany"
                        />
                      </span>
                    </div>
                  </div>
                  <div class="customers_review_sec_row">
                    <div class="customer_review_stext">
                      "Recently I bought this script from logicspice and it worked really nice, it helped my business to gain more efficiency. I
                      recommend for all whom looking for a Forum Script, it's really nice."
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
                          alt="mobile app development in AUS"
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
                    headerTitle="What do I need to use your software?"
                    collapseId="flush-collapse1"
                  >
                    <p>Your hosting services must support PHP 5.1 and MySQL 5.1 or greater version.</p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Do you make custom changes to the scripts?"
                    collapseId="flush-collapse2"
                  >
                    <p>Yes, we can make custom changes to the script as per your requirements.</p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Can you help me in installing the script?"
                    collapseId="flush-collapse4"
                  >
                    <p>Yes, we can help you in installing the script.</p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="How long does it take to receive the script after payment?"
                    collapseId="flush-collapse5"
                  >
                    <p>It takes 2 working days generally, if all the provided hosting information has required PHP extensions to make it live. If you want 
                    customizations, then time taken to implement depends on the level of customization and data migration.</p>
                  </MDBAccordionItem>
                  <MDBAccordionItem
                    headerTitle="Can I resell the script? Will I have rights over the script code?"
                    collapseId="flush-collapse6"
                  >
                    <p>No, You can't resell the script. All rights will remain with Logicspice only.</p>
                  </MDBAccordionItem>
                  <MDBAccordionItem
                    headerTitle="Can I update some design and functionality in application code myself?"
                    collapseId="flush-collapse7"
                  >
                    <p>Yes, You will have access to all the code, except some of the core encrypted files.</p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Along with hosting server details, what other recommendations?"
                    collapseId="flush-collapse14"
                  >
                    <p>We recommend you purchase SSL certificate along with a hosting server, considering that an SSL certificate is necessary for all the websites 
                    these days and it provides a secure layer to the website as well.</p>
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
                    title="Product Review & Rating PHP Script"
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
                        <h3>eBay Clone</h3>

                        <div class="other-project-logo">
                          <img
                            src="/img/jobboard/ecart_new.png"
                            alt="eBay Clone"
                          />
                        </div>
                        <p>
                          <span>eBay - A multi vendor eCommerce script, specially designed.</span>
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
                        <h3>Appointment Booking System</h3>
                        <div class="other-project-logo">
                          <img
                            src="/img/jobboard/abs_logo_new.png"
                            alt="Appointment Booking System"
                          />
                        </div>
                        <p>
                          <span>
                          A user-friendly appointment booking system that enables owners to manage.
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
                        <h3>News Management System</h3>

                        <div class="other-project-logo">
                          <img
                            src="/img/jobboard/news_logo_new.png"
                            alt="News Management System"
                          />
                        </div>
                        <p>
                          <span>Digital media is playing a major role in authentic flow of information.</span>
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