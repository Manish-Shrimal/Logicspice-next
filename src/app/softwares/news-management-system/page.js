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
      <section class="paid-pro job-portal-banner  fiverr-new-banner NewJobSiteDesign JobBoardNewDesign NewCrowdDesigns job-portal-bg lsnews-banner-new">
    <div class="container">
        <div class="row">
            <div class="col-sm-7 col-md-7">
                <h1>News Portal Management Script</h1>
                <div class="both-left-p-sec">
                    <h2>Perfect start for your News Portal with a CMS</h2>                      
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
                        title="Please fill the form below and get access to the live demo of News Portal Management software.
See how it work yourself!"
                      />
                    }
                  </div>
                  <Link class="btn fiverr-buys NewGreenBtnJob" href="/softwares/news-management-system">
                    Buy Now
                  </Link>
                </div>
                <div class="SubscriptionPrice">
                  <div class="line-border NewLineBoader">
                    <img
                      alt="crowd_funding_script"
                      src="/img/jobboard/stars.png"
                    />
                    <p>18 Reviews</p>
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
                  alt="News Portal Management software"
                  src="/img/softwares-banner-img/ls-news-banner-img.png"
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
                News Portal software
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section class="job-section-top-new JobBoardSectionNew">
    <div class="container">
        <p>Digital media is playing a major role in authentic flow of information and the news, to the masses and this news portal management script can play a major role
		for your corporate, political or any other kind of news showcasing. This software is efficient in management of news in a quick time and can save a lot of time 
		and money for you.</p>

    </div>
</section>
      <section class="client-say WhatsaapCliets" style={{ backgroundColor: "#fff" }}>
        <div class="container">
          <div class="row">
          
            <div class="col-md-12">
            <div class="service-market-ttd">
            <ul>
                        <li>Responsive & SEO Friendly</li>
                        <li>Social Media Sharing</li>
                        <li>User Oriented</li>
                        <li>Reporting</li>
                        <li>Validity Restriction</li>
                        <li>News Editors dashboard</li>
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
          <h2 class="taxt_tt_job">News Portal Management software Features</h2>
          </div>

          <div class="tatxt_txt_job text-center">With today's booms of digital media and publishing, this news website portal script has been developed by giving due consideration 
            to user friendly and handy features. This advanced News Management System tends to provide quick flow of news and information across the globe. 
        </div>

          <div class="tab_bbx_job">
            <div class="tab_bbx_top_job tab_bbx_job_classified">
              <ul className="">
                <li
                  id="tab1_li"
                  className={`jobseeker_app_job ddlj ${sellerTab ? "active" : ""}`}
                  onClick={() => handleSellerTab()}
                >
                  <a>Editor</a>
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
                            src="/img/news/lsnews_saler.png"
                            alt="Editor"
                          />
                        
                        </div>
                      </div>
                      <div class="col-lg-8 col-md-9">
                        <div class="costomer_tab_left costomer_tab_leftright">
                        <ul>
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/secure_login.png" class="lazy" /></i>
                                        <span>Secure Login
                                            <div class="product-idea">
                                                <p>Editor can login securely in editor's panel</p>
                                            </div>
                                        </span>
                                    </li>
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/add_gig.png"  class="lazy" /></i>
                                        <span>Manage Profile
                                            <div class="product-idea">
                                                <p>Editor can manage his profile for the editor's panel.</p>
                                            </div>
                                        </span>
                                    </li>
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/manage_gig.png" class="lazy" /></i>
                                        <span>Manage News Posts
                                            <div class="product-idea">
                                                <p>Editor can add and manage news posts from the panel.</p>
                                            </div>
                                        </span>
                                    </li>
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/admin_dash.png" /></i>
                                        <span>Add Categories
                                            <div class="product-idea">
                                                <p>Editor can add and manage multiple categories and the sub categories for the news from the panel.</p>
                                            </div>
                                        </span>
                                    </li>
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/gig_gallery.png" /></i>
                                        <span>Video News Posts
                                            <div class="product-idea">
                                                <p>Editor can add video news posts and publish from the panel.</p>
                                            </div>
                                        </span>
                                    </li>
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/view_public.png" /></i>
                                        <span>Approve Comments
                                            <div class="product-idea">
                                                <p>Editor can approve and unapprove comments on the news post added by the users on the news posts.</p>
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
                            src="/img/news/new-mac.jpg"
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
                                                <p>Admin can login securely in admin panel</p>
                                            </div>
                                        </span>
                                    </li>                               
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/admin_dash.png" /></i>
                                        <span>Manage Dashboard
                                            <div class="product-idea">
                                                <p>Admin can view and manage the news post and add multiple news posts.</p>
                                            </div>
                                        </span>
                                    </li>                               
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/manage_user.png" /></i>
                                        <span>Manage Editors
                                            <div class="product-idea">
                                                <p>Admin can add editors to post the news from the backend.</p>
                                            </div>
                                        </span>
                                    </li>                               
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/manage_gig.png" /></i>
                                        <span>Infinite Categories
                                            <div class="product-idea">
                                                <p>Admin can add multiple categories and the subcategories for the news from the backend.</p>
                                            </div>
                                        </span>
                                    </li>                               
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/manage_gig_order.png" /></i>
                                        <span>Manage Subcategories
                                            <div class="product-idea">
                                                <p>Admin can manage multiple categories for the news posts from the backend.</p>
                                            </div>
                                        </span>
                                    </li>                               
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/manage_service.png" /></i>
                                        <span>Video News Posts
                                            <div class="product-idea">
                                                <p>Admin can manage his own video news from the backend.</p>
                                            </div>
                                        </span>
                                    </li>    
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/manage_category.png" /></i>
                                        <span>Manage Comments
                                            <div class="product-idea">
                                                <p>Admin can manage comments added by the users on the news posts from the backend.</p>
                                            </div>
                                        </span>
                                    </li>    
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/manage_skill.png" /></i>
                                        <span>Manage Tags
                                            <div class="product-idea">
                                                <p>Admin can manage the tags from the backend for the news posts.</p>
                                            </div>
                                        </span>
                                    </li>    
                                    <li>
                                        <i><img alt="img" src="/img/jobboard/manage_cat.png" /></i>
                                        <span>News Tickers
                                            <div class="product-idea">
                                                <p>Admin can add and manage news tickers from the backend for breaking news and top stories.</p>
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
            <h2 class="headhs">What does our News Portal Website Management System offer you?</h2>
            <p>With the growing demand of digital media these days, there is a significant requirement for such a news content management tool, which can manage the news content efficiently with low cost of development and maintenance. </p>
            <p>Our news portal website management system offers the facility, where editors or the news portal website owner can easily manage itâ€™s content, upload pictures, video and other types of files and content for its visitors.</p>
            <p>With this news management system, which is developed in php web scripting language, it becomes very easy to manage and extend its functionality in the future, as required. We offer seamless support for the success of your news portal. </p>

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
                    <li><span>Unlimited Online Test Listings: List as many test postings as you need without any limitations.</span></li>
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
                        title="Please fill the form below and get access to the live demo of News Portal Management software.
See how it work yourself!"
                      />
                    }
                  </div>
                <Link
                  class="btn fiverr-buys"
                  href="/softwares/news-management-system"
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
                    <p>18 Reviews</p>
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
                  <li data-aos="fade-up">
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
                    <li class="same"><b>Browsers - </b> Firefox 32.6+, Chrome 20.0+, Opera 30.0+, Safari 5+, IE 9+</li> 
                    <li class="same"><b>CMS  - </b> WordPress</li>  
                    <li class="same "><b>Language  - </b> PHP 7.2+, AJAX, jQuery</li> 
                    <li class="other"><b>Design  - </b> HTML 5, CSS 3, Bootstrap 3.3.7, JavaScript</li> 
                    <li class="other"><b>Database  - </b> MySQL 5.5+ </li>
                    <li class="other"><b>Server  - </b>  Apache 2.4+</li>
                    <li class="other"><b>Android  - </b> java 9 and Android Studio 3.4</li>
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
                      <div class="people_star_num">16</div>
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
                    title="News Portal Management software"
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
                      "This is the best News Portal Management software. Thanks for your great efforts and support while installing the script. Your prompt service
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
                      recommend for all whom looking for a News Portal Management software, it's really nice."
                    </div>

                    <div class="who_ratset">
                      <span class="star_review_main">
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                      </span>
                      Mike wilshon, AUS{" "}
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
                    headerTitle="Does your software support multi-language?"
                    collapseId="flush-collapse1"
                  >
                    <p>Yes. Our software supports multi-language. </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Where can I get a live demo?"
                    collapseId="flush-collapse2"
                  >
                    <p>Please click on the 'Live Demo' button on this page above and submit your request for a live demo and you will get live demo details 
                    by email immediately.</p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Once I purchase this script, how many days will it take to go online?"
                    collapseId="flush-collapse4"
                  >
                    <p>It will take 2 working days generally, provided all the information to make it live has been provided. </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Can I get help for customization?"
                    collapseId="flush-collapse5"
                  >
                    <p>Yes, we have an experienced team of developers to help you with customization as per your requirements.</p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Can I resell the script? Will I have rights over the script code?"
                    collapseId="flush-collapse6"
                  >
                    <p>No, You can't resell the script. All rights will remain with Logicspice only.</p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Will I be able to use it on multiple domains, after I purchase this script?"
                    collapseId="flush-collapse7"
                  >
                    <p>You will be licensed to use it only for the domain, you purchased for.</p>
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
          <h2 class="title_main">News Portal Management software Features</h2>
          <div id="joblboardslide">
            <Slider {...settings}>
              <div class="SliderMainBx">
              <div class="feat-slide-img"><img src="/img/news/lsnews-home.jpg" /></div>
                    <div class="hands-proved">
                        <div class="titleof_scnew">Home</div>
                    </div>
              </div>
         

              <div class="SliderMainBx">
              <div class="feat-slide-img"><img src="/img/news/lsnews-technology.jpg" /></div>
                    <div class="hands-proved">
                        <div class="titleof_scnew">Technology News</div>
                    </div>
              </div>

              <div class="SliderMainBx">
              <div class="feat-slide-img"><img src="/img/news/lsnews-internation.jpg" /></div>
                    <div class="hands-proved">
                        <div class="titleof_scnew">International News</div>
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
                    title="News Portal Management software"
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
