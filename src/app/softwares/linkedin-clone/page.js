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
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);


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
<section class="paid-pro job-portal-banner  fiverr-new-banner NewJobSiteDesign JobBoardNewDesign NewCrowdDesigns job-portal-bg LinkedinBannerNew">
    <div class="container">
        <div class="row">
            <div class="col-sm-7 col-md-7">
                <h1>LinkedIn Clone</h1>
                <div class="both-left-p-sec">
                    <h2>Develop A Professional Social Networking Website With Our Ready To Use LinkedIn Clone Script.</h2>                      
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
                        title="Please fill the form below and get access to the live demo of Linkedin Clone .See how it work yourself!"
                      />
                    }
                  </div>
                  <Link class="btn fiverr-buys NewGreenBtnJob" href="/softwares/linkedin-clone">
                    Buy Now
                  </Link>
                </div>
                <div class="SubscriptionPrice">
                  <div class="line-border NewLineBoader">
                    <img
                      alt="crowd_funding_script"
                      src="/img/jobboard/stars.png"
                    />
                    <p>27 Reviews</p>
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
                  alt="LinkedIn_Clone"
                  src="/img/softwares-banner-img/linkedin-banner-img.png"
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
                LinkedIn Clone
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section class="job-section-top-new JobBoardSectionNew">
    <div class="container">
    <p>This LinkedIn Clone software script can help you to launch your own business networking website like LinkedIn. It will allow users to connect with millions of 
            professionals around the globe. This clone is an interactional enterprise platform with social media network touch for professional job seekers, employees, 
            freelancers and students. Get our best LinkedIn clone or customize own social networking sites like linkedIn. </p>
    </div>
</section>
      <section class="client-say WhatsaapCliets" style={{ backgroundColor: "#fff" }}>
        <div class="container">
          <div class="row">
          
            <div class="col-md-12">
            <div class="service-market-ttd">
            <ul>
                        <li>User/Admin can register and login using their own credentials and manage their own account</li>
                        <li>Members can post their feeds, images, video, document publically on their profile and connected groups.</li>
                        <li>Group management dashboard - Create Public, Private Groups, invite other members to join the group.</li>
                        <li>User friendly dashboard.</li>
                        <li>Responsive website (mobile friendly)</li>
                        <li>White labeled script </li>
                        <li>One time License Fee</li>
                        <li>Users can send public and private messages to others.</li>
                    </ul>
                </div>

            </div>


          </div>
        </div>
      </section>
      <section class="job_portal_area">
        <div class="container">
          <div class="job_or_title">
          <h2 class="taxt_tt_job">LinkedIn Clone Features</h2>
          </div>

          <div class="tatxt_txt_job text-center">Our LinkedIn Clone is a professional social network which provides the equivalent features as a Linkedin web 
            and mobile app. Users can use the website properly to make a professional portfolio over it. The admin can manage accounts, pages, 
            and users from the advanced dashboard.
        </div>

          <div class="tab_bbx_job">
            <div class="tab_bbx_top_job tab_bbx_job_classified">
              <ul className="">
                <li
                  id="tab1_li"
                  className={`jobseeker_app_job ddlj ${sellerTab ? "active" : ""}`}
                  onClick={() => handleSellerTab()}
                >
                  <a>User</a>
                </li>
                
                <li
                  id="tab3_li"
                  className={`admin_app_job ddlj ${adminTab ? "active" : ""}`}
                  onClick={() => handleAdminTab()}
                >
                  <a>Administrator</a>
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
                            src="/img/linkedin-clone/linkedinls-mobile.png"
                            alt="Linkedin_User"
                          />
                        
                        </div>
                      </div>
                      <div class="col-lg-8 col-md-9">
                        <div class="costomer_tab_left costomer_tab_leftright">
                        <ul>
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/ragister-icon.png" /></i>
                                        <span>Create Account
                                            <div class="product-idea">
                                                <p>User able to register on portal and post an update.</p>
                                            </div>
                                        </span>
                                    </li>
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/manage_account.png" /></i>
                                        <span>Manage Account
                                            <div class="product-idea">
                                                <p>Member can manage his own account.</p>
                                            </div>
                                        </span>
                                    </li>
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/post_management.png" /></i>
                                        <span>Post a Job
                                            <div class="product-idea">
                                                <p>Members can post and manage their jobs listing.</p>
                                            </div>
                                        </span>
                                    </li>
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/manage_messages.png" /></i>
                                        <span>Private Messaging
                                            <div class="product-idea">
                                                <p>Members can send private messages to other users.</p>
                                            </div>
                                        </span>
                                    </li>
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/manage_emp.png" /></i>
                                        <span>Create Groups
                                            <div class="product-idea">
                                                <p>Members can create, manage and  join groups. </p>
                                            </div>
                                        </span>
                                    </li>
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/post_project.png" /></i>
                                        <span>Frontend Management
                                            <div class="product-idea">
                                                <p>Members will have a user friendly front end panel.</p>
                                            </div>
                                        </span>
                                    </li>

                                    <li>
                                        <i><img alt="img" src="/img/jobboard/self_profile.png" /></i>
                                        <span>User Connections
                                            <div class="product-idea">
                                                <p>User can connect with other Members. And they can also follow / unfollow to others.</p>
                                            </div>
                                        </span>
                                    </li>
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/manager.png" /></i>
                                        <span>Profile Privacy
                                            <div class="product-idea">
                                                <p>User can set the privacy of their profile.</p>
                                            </div>
                                        </span>
                                    </li>
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/manage-notifi.png" /></i>
                                        <span>Activity Notification
                                            <div class="product-idea">
                                                <p>User can get activity notifications.</p>
                                            </div>
                                        </span>
                                    </li>
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/genrate_cv.png" /></i>
                                        <span>Resume Management
                                            <div class="product-idea">
                                                <p>User can add their resume with skills, education and experience.</p>
                                            </div>
                                        </span>
                                    </li>
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/view_activities.png" /></i>
                                        <span>Activity Feeds
                                            <div class="product-idea">
                                                <p>User can post, like, edit, delete and share the feeds.</p>
                                            </div>
                                        </span>
                                    </li>


                                    <li>
                                        <i><img alt="img" src="/img/jobboard/search_activity.png" /></i>
                                        <span>Search Activity
                                            <div class="product-idea">
                                                <p>User can search jobs, people, groups, feeds.</p>
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
                            src="/img/linkedin-clone/linkedin_admin.png"
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
                                                <p>Admin can login securely in Admin Panel.</p>
                                            </div>
                                        </span>
                                    </li>                               
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/admin_dash.png" /></i>
                                        <span>Dashboard Management
                                            <div class="product-idea">
                                                <p>Admin can manage all the user modules from dashboard.</p>
                                            </div>
                                        </span>
                                    </li>                               
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/manage_user.png" /></i>
                                        <span>Manage User
                                            <div class="product-idea">
                                                <p>Admin can manage (add, edit, delete) all users.</p>
                                            </div>
                                        </span>
                                    </li>                               
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/manage-project.png" /></i>
                                        <span>Manage Job Application
                                            <div class="product-idea">
                                                <p>Admin can manage job applications and job listings.</p>
                                            </div>
                                        </span>
                                    </li>                               
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/view_activities.png" /></i>
                                        <span>Manage Activity Feeds
                                            <div class="product-idea">
                                                <p>Admin can manage (edit, delete) activities of all users.</p>
                                            </div>
                                        </span>
                                    </li>                               
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/manage_emp.png" /></i>
                                        <span>Manage Groups
                                            <div class="product-idea">
                                                <p>Admin can manage the settings (edit, delete, change privacy, assign roles to users) of all groups.</p>
                                            </div>
                                        </span>
                                    </li>    
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/reviews_ratings.png" /></i>
                                        <span>Manage Group Reviews
                                            <div class="product-idea">
                                                <p>Admin can (view, approve, delete) group reviews.</p>
                                            </div>
                                        </span>
                                    </li>    
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/genrate_cv.png" /></i>
                                        <span>Manage Resumes
                                            <div class="product-idea">
                                                <p>Admin can manage resumes categories, candidate skills.</p>
                                            </div>
                                        </span>
                                    </li>    
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/email_verific.png" /></i>
                                        <span>Email Management
                                            <div class="product-idea">
                                                <p>Admin can manage (add, edit, delete) email bodies sent to users.</p>
                                            </div>
                                        </span>
                                    </li>    
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/membership_pur.png" /></i>
                                        <span>User Membership
                                            <div class="product-idea">
                                                <p>Admin can manage user membership level for the users.</p>
                                            </div>
                                        </span>
                                    </li>    
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/coupon-codes.png" /></i>
                                        <span>Admin Panel CMS
                                            <div class="product-idea">
                                                <p>Admin can manage (add,edit,delete) all front end contents.</p>
                                            </div>
                                        </span>
                                    </li>    
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/manage_configur.png" /></i>
                                        <span>Manage Configuration
                                            <div class="product-idea">
                                                <p>Admin can manage (edit, update, delete) user can also add extra fields to profile.</p>
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
            <h2 class="headhs">What does our LinkedIn Clone Script offer you?</h2>
            <p>Logicspice offers the <strong><i>LinkedIn clone script</i></strong>, developed to build your own professional social networking website similar to LinkedIn. 
                It will help you to receive quality website traffic, more signups, and active professional uses. Our clone is a social networking 
                platform that helps users to connect with experts worldwide which will support to enhance their network and skills. </p>
            <p>Our ready-made <strong><i>LinkedIn clone PHP</i></strong> script comes with updates and innovative features. We can easily post our jobs for people who are 
                looking for jobs or internship projects. It is a cost-effective and less effort approach for those who are planning to develop a 
                website like LinkedIn in a short time. </p>
            <p>LinkedIn clone is the best option for startups, business organizations and entrepreneurs to start their own professional social 
                networking platform. This <strong><i>LinkedIn Clone</i></strong> has been  developed with PHP and WordPress framework. There are many ways to generate revenue 
                from the LinkedIn clone. </p>
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
                    <button>Get Demo Access!</button>
                    {
                      <Enquirymodal
                        modalStatus={showModal}
                        toggle={openModal}
                        title="Please fill the form below and get access to the live demo of Linkedin Clone.See how it work yourself!"
                      />
                    }
                  </div>
                <Link
                  class="btn fiverr-buys"
                  href="/softwares/linkedin-clone"
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
                    <p>27 Reviews</p>
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
                    <li class="same"><b>CMS  - </b> WordPress</li>  
                    <li class="same "><b>Language  - </b> PHP 5.4+, AJAX, jQuery</li> 
                    <li class="other"><b>Design  - </b> HTML 5, CSS 3, JavaScript</li> 
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
                      <div class="people_star_num">24</div>
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
                <a className="btn btn-primary" onClick={openReviewModel}>
                    Rate and Review product
                  </a>

                  <Reviewmodals
                    modalStatus={showReviewModal}
                    toggle={openReviewModel}
                    title="Job Board Software"
                  />
                </div>
                <div class="col-md-12">
                  <div class="customers_review_sec_row">
                    <div class="customer_review_stext">
                      "This is the best solution for LinkedIn Replacement in affordable price. Really appreciate LS Team Work. "
                    </div>

                    <div class="who_ratset">
                      <span class="star_review_main">
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star-half" aria-hidden="true"></i>
                      </span>
                      <span id="client-name">Mark Mathew , AUS</span>{" "}
                      <span class="ConuntryFlagIcon">
                        <img
                          src="/img/jobboard/australia_flag_img.png"
                          alt="mobile app development in AUS"
                        />
                      </span>
                    </div>
                  </div>
                  <div class="customers_review_sec_row">
                    <div class="customer_review_stext">
                      "LogicSpice provided best platform in Wordpress for Job Search. Great Work Done !"
                    </div>

                    <div class="who_ratset">
                      <span class="star_review_main">
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                      </span>
                      Adam Daniel, USA{" "}
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
                      "It helped my Client to build a network worldwide for their business. Impressive Work and Support."
                    </div>

                    <div class="who_ratset">
                      <span class="star_review_main">
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                      </span>
                      Sophia Joseph, Saudi Arabia{" "}
                      <span class="ConuntryFlagIcon">
                        <img
                          src="/img/jobboard/saudi.png"
                          alt="mobile app development in Arabia"
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
                    headerTitle="Can I update some design and functionality in application code myself?"
                    collapseId="flush-collapse1"
                  >
                    <p>Yes, You will have access to all the code, except some of the core encrypted files.</p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Can I get help for customization?"
                    collapseId="flush-collapse2"
                  >
                    <p>Yes, we have an experienced team of developers to help you with customization as per your requirements. </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Will I be able to use it on multiple domains, after I purchase this script?"
                    collapseId="flush-collapse4"
                  >
                    <p>You will be licensed to use it only for the domain, you purchased for.</p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Can I resell the script? Will I have rights over the script code?"
                    collapseId="flush-collapse5"
                  >
                    <p>No, You can't resell the script. All rights will remain with Logicspice only.</p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="How can I get quick assistance if I need it?"
                    collapseId="flush-collapse6"
                  >
                    <p>You can email us your question at info@logicspice.com. We will contact you back within 24 hours.</p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Do you offer a Money Back Guarantee?"
                    collapseId="flush-collapse7"
                  >
                   <p>Yes, we offer a 30 days money back guarantee to ensure customer satisfaction of our softwares. If for any reason, you wish to 
                                    discontinue using the product, you can ask us for a refund. We will refund your total money except for the installation and 
                                    configuration charges, which is USD 65 or 20% of an application cost, whichever is greater.</p>
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
      <section class="content_area feature_inner" id="features">
        <div class="container">
          <h2 class="title_main">LinkedIn Clone Features</h2>
          <div id="joblboardslide">
            <Slider {...settings}>
              <div class="SliderMainBx">
              <div class="feat-slide-img"><img src="/img/linkedin-clone/linkedin-clone-account.png" alt="linkedin_clone_Profile"/></div>
                    <div class="hands-proved">
                        <div class="titleof_scnew">User Account</div>
                        <div class="pro-feat-detai">User will be able to see all changes regarding updates and they can even post the updates.User will be able to see number of likes and comments on this.</div>
                    </div>
              </div>
         

              <div class="SliderMainBx">
              <div class="feat-slide-img"><img src="/img/linkedin-clone/user-profile.png" alt="User_Profile"/></div>
                    <div class="hands-proved">
                        <div class="titleof_scnew">User Profile</div>
                        <div class="pro-feat-detai">User will be able to view the profile, edit the profile, can manage the profile. </div>
                    </div>
              </div>

              <div class="SliderMainBx">
              <div class="feat-slide-img"><img src="/img/linkedin-clone/messages-user.png" alt="Linkedin_Messages"/></div>
                    <div class="hands-proved">
                        <div class="titleof_scnew">Messages</div>
                        <div class="pro-feat-detai">User can send message to each other. User can compose message, Search Messages, can view sent messages and Starred messages, User can delete messages </div>
                    </div>
              </div>

              <div class="SliderMainBx">
                    <div class="feat-slide-img"><img src="/img/linkedin-clone/acitivity.png" alt="acitivity"/></div>
                    <div class="hands-proved">
                        <div class="titleof_scnew">Manage Profile</div>
                        <div class="pro-feat-detai">User will be able to manage their profiles. They can view messages. They can manage Notification, friends, Profile, Activities, Following people, Followers, Groups, Jobs, Resumes, Gallery</div>
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
                    title="LinkedIn Clone"
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
                        <h3>Job Board Software</h3>
                        <div class="other-project-logo">
                          <img
                            src="/img/jobboard/job-board-logo.png"
                            alt="Job board software"
                          />
                        </div>
                        <p>
                          <span>
                          Best white label job board software. 
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
                        <h3>Udemy Clone</h3>

                        <div class="other-project-logo">
                          <img
                            src="/img/jobboard/udemy_new.png"
                            alt="Udemy Clone"
                          />
                        </div>
                        <p>
                          <span>Readymade Script of video E- Learning Platform like Udemy.</span>
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
                        <h3>WhatsApp Clone App</h3>

                        <div class="other-project-logo">
                          <img
                            src="/img/jobboard/ls-chat-logo.png"
                            alt="WhatsApp Clone App"
                          />
                        </div>
                        <p>
                          <span>Readymade WhatsApp Clone Script.</span>
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