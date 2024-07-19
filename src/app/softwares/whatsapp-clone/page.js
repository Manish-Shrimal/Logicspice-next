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
  const [buyerTab, setBuyerTab] = useState(true);
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

  const handleBuyerTab = () => {
    setBuyerTab(true);
    setAdminTab(false);
  };
  const handleAdminTab = () => {
    setBuyerTab(false);
    setAdminTab(true);
  };

  const opendiv = (tab) => {
    setActiveTab(tab);
  };
  return (
    <>
      <NavBar />
      <section class="paid-pro job-portal-banner  fiverr-new-banner NewJobSiteDesign JobBoardNewDesign NewCrowdDesigns job-portal-bg whatsapp-clone-new">
        <div class="container">
          <div class="row">
            <div class="col-sm-7 col-md-7">
              <h1>WhatsApp Clone App</h1>
              <div class="both-left-p-sec">
                <h2>Instant messaging app like whatsapp</h2>
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
                        title="Please fill the form below and get access to the live demo of Whatsapp Clone.
See how it work yourself!"
                      />
                    }
                  </div>
                  <Link
                    class="btn fiverr-buys"
                    href="/softwares/whatsapp-clone"
                  >
                    Buy Now
                  </Link>
                </div>
                <div class="SubscriptionPrice">
                  <div class="line-border NewLineBoader">
                    <img
                      alt="crowd_funding_script"
                      src="/img/jobboard/stars.png"
                    />
                    <p>24 Reviews</p>
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
                  alt="WhatsApp Clone"
                  src="/img/softwares-banner-img/whatsapp-banner-img.png"
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
                  WhatsApp Clone
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section class="job-section-top-new JobBoardSectionNew">
        <div class="container">
          <p>
            Want to develop your instant messaging app like WhatsApp? Get on to
            our ready to use WhatsApp clone app and make your messenger similar
            to WhatsApp. This script works on the web, android and iOS platforms
            and helps users to stay connected with their friends, colleagues and
            relatives by sharing messages, photos, videos and files.
          </p>
        </div>
      </section>
      <section class="client-say WhatsaapCliets" style={{ background: "#fff" }}>
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="service-market-ttd">
                <ul>
                  <li>SEO Friendly</li>
                  <li>Social Media Sharing</li>
                  <li>Group Chat</li>
                  <li>Chat History</li>
                  <li>Responsive website (mobile friendly)</li>
                  <li>White labeled script </li>
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
            <h2 class="taxt_tt_job">WhatsApp Clone Features</h2>
          </div>

          <div class="tatxt_txt_job text-center">
            Our ready to use app is well designed and has a variety of features
            like notifications, invite to friends, share location, status story
            and many more. This app
            <br /> is robust, scalable, secure and easily compatible with
            different devices. The admin can take complete control over the
            application with the admin dashboard.
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
              {buyerTab && (
                <>
                  <div class="costomer_tab rj active" id="tab2">
                    <div class="row">
                      <div class="col-lg-4 col-md-3">
                        <div class="costomer_tab_right">
                          <img
                            src="/img/whatsappclone/whatsapp_user.png"
                            alt="Seller App Features"
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
                                User Registration
                                <div class="product-idea">
                                  <p>
                                    User can register over the website if he
                                    wants to chat with any friend.
                                  </p>
                                </div>
                              </span>
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
                                    User can manage his basic profile like name,
                                    DOB, profile picture, password etc.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/private-chat.png"
                                />
                              </i>
                              <span>
                                Private Chat
                                <div class="product-idea">
                                  <p>
                                    This platform will provide private chat
                                    between users.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/manage_job.png"
                                />
                              </i>
                              <span>
                                Group Chat
                                <div class="product-idea">
                                  <p>
                                    This platform will provide group chat where
                                    you can make your own group.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/search-friend.png"
                                />
                              </i>
                              <span>
                                Search Friend
                                <div class="product-idea">
                                  <p>
                                    User will search a friend by the keyword and
                                    select a user from the list of related users
                                    to start chat.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/add-group.png"
                                />
                              </i>
                              <span>
                                Add Group
                                <div class="product-idea">
                                  <p>
                                    User can create his own group and add
                                    friends to chat.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/update-group.png"
                                />
                              </i>
                              <span>
                                Update Group
                                <div class="product-idea">
                                  <p>
                                    User can update his created group
                                    information like name and group profile
                                    picture.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/delete-group.png"
                                />
                              </i>
                              <span>
                                Delete Group
                                <div class="product-idea">
                                  <p>
                                    User can delete his own created group if he
                                    wants to delete.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/chear-chat.png"
                                />
                              </i>
                              <span>
                                Clear Chat
                                <div class="product-idea">
                                  <p>
                                    User can clear his all chat history of a
                                    group.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/leave-group.png"
                                />
                              </i>
                              <span>
                                Leave Group
                                <div class="product-idea">
                                  <p>User can leave a group.</p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/add-group.png"
                                />
                              </i>
                              <span>
                                Add Friend in Group
                                <div class="product-idea">
                                  <p>
                                    User can add new friends in his created
                                    group.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/remove-friend.png"
                                />
                              </i>
                              <span>
                                Remove Friend in Group
                                <div class="product-idea">
                                  <p>
                                    User can remove any friend from his created
                                    group.
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
                            src="/img/whatsappclone/whatsapp_deshboard.png"
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
                                  <p>Admin login is secured.</p>
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
                                    Admin can change the username, password,
                                    email, set contact address & can also change
                                    the site settings.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/manage-dashboard.png"
                                />
                              </i>
                              <span>
                                Admin Dashboard
                                <div class="product-idea">
                                  <p>
                                    Admin can view the dashboard where it will
                                    display the total number of users, chats
                                    etc.
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
                                    Admin can view the list of users & can
                                    activate, deactivate, delete, edit, view
                                    etc.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/manage_contents.png"
                                />
                              </i>
                              <span>
                                Manage Contents
                                <div class="product-idea">
                                  <p>
                                    Admin can manage the listed static pages
                                    content.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/manage_service.png"
                                />
                              </i>
                              <span>
                                Manage Chat
                                <div class="product-idea">
                                  <p>
                                    Admin can view the chat of the users on the
                                    basis of selected group or all history. If
                                    he finds any inappropriate content then he
                                    can delete the chat and a complete group
                                    also.
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
            <h2 class="headhs">What does our WhatsApp Clone App offer you?</h2>
            <p>
              With the boom in this era of social networking{" "}
              <strong>WhatsApp</strong> has become the world's most popular
              messenger. More than one billion people are using this app for
              communication. So, take advantage of its popularity you can launch
              your messenger app like WhatsApp. We at Logicspice, provide ready
              to use <strong>WhatsApp clone script</strong> which helps to start
              your messenger in less time.{" "}
            </p>
            <p>
              This script is fully responsive and provides an excellent user
              experience and interaction with smooth navigation that gives a
              better user experience. Integrated with all-inclusive features
              like user registration, profile management, create and manage
              groups, broadcast message, share files, push notification and many
              more. Users can control the privacy setting for display picture,
              status, last seen update, etc.{" "}
            </p>
            <p>
              In this ever changing market, Having your own messaging app for
              your business is the best and easiest way to generate revenue from
              AdMob, banner ads and commissions. Get our readymade{" "}
              <strong>WhatsApp clone</strong> and save development cost.{" "}
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
                    Unlimited Group Creations: Create as many groups as you need
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
                    issues arise, <strong>dedicated technical team</strong> will
                    promptly address them during office hours.
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
                        title="Please fill the form below and get access to the live demo of Whatsapp Clone.
See how it work yourself!"
                      />
                    }
                  </div>
                <Link class="btn fiverr-buys" href="/softwares/whatsapp-clone">
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
                    <p>24 Reviews</p>
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
                  <li>
                    <div class="icntechimg">
                      <img
                        src="/img/jobboard/tech_cakephp_icon.png"
                        alt="CakePHP Development"
                      />
                    </div>
                    <div class="icntechimg_nm">CakePHP</div>
                  </li>
                  <li>
                    <div class="icntechimg">
                      <img
                        src="/img/jobboard/nodejs_icon.png"
                        alt="Node.js"
                        class="lazy"
                      />
                    </div>
                    <div class="icntechimg_nm">Node.js</div>
                  </li>
                  <li>
                    <div class="icntechimg">
                      <img src="/img/jobboard/html-5.png" alt="HTML5" />
                    </div>
                    <div class="icntechimg_nm">HTML5</div>
                  </li>
                  <li>
                    <div class="icntechimg">
                      <img
                        src="/img/jobboard/tech_mysql_icon.png"
                        alt="MySQL"
                      />
                    </div>
                    <div class="icntechimg_nm">MySQL</div>
                  </li>
                  <li>
                    <div class="icntechimg">
                      <img
                        src="/img/jobboard/tech_apache_icon.png"
                        alt="Apache"
                      />
                    </div>
                    <div class="icntechimg_nm">Apache</div>
                  </li>
                  <li>
                    <div class="icntechimg">
                      <img
                        src="/img/jobboard/apple_phn_icon.png"
                        alt="IOS"
                        class="lazy"
                      />
                    </div>
                    <div class="icntechimg_nm">iOS</div>
                  </li>
                  <li>
                    <div class="icntechimg">
                      <img
                        src="/img/jobboard/andoird_icon.png"
                        alt="Android"
                        class="lazy"
                      />
                    </div>
                    <div class="icntechimg_nm">Android</div>
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
                    <b>Framework - </b> CakePHP
                  </li>
                  <li class="same">
                    <b>Language - </b> Node.js 12.15.0, PHP 5.4+, AJAX, jQuery
                  </li>
                  <li class="other ">
                    <b>Design - </b> HTML 5, CSS 3, Bootstrap 4.3.1, JavaScript
                  </li>
                  <li class="other">
                    <b>Database - </b> MySQL 5.5+{" "}
                  </li>
                  <li class="other">
                    <b>Server - </b> Apache 2.4+{" "}
                  </li>
                  <li class="other">
                    <b>iOS - </b> Xcode 11.3 and swift 5{" "}
                  </li>
                  <li class="other">
                    <b>Android - </b> Java 9 and Android Studio 4.1
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
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                      <div class="people_star_num">21</div>
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
                    title=" Whatsapp Clone"
                  />
                </div>
                <div class="col-md-12">
                  <div class="customers_review_sec_row">
                    <div class="customer_review_stext">
                      "I have purchased this script and has constructed my own
                      web-site. This was an easy task because of logicspice's
                      free installation and support. Keep up the good work. I
                      will be back for more in the future."
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
                      <span>
                        <img
                          src="/img/jobboard/usa_flag_img.png"
                          alt="mobile app development in USA"
                        />
                      </span>
                    </div>
                  </div>
                  <div class="customers_review_sec_row">
                    <div class="customer_review_stext">
                      "This is the best WhatsApp Clone App. Thanks for your
                      great efforts and support while installing the script.
                      Your prompt service regarding a few minor issues was
                      superb."
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
                      <span>
                        <img
                          src="/img/jobboard/german.png"
                          alt="mobile app development in USA"
                        />
                      </span>
                    </div>
                  </div>
                  <div class="customers_review_sec_row">
                    <div class="customer_review_stext">
                      "Recently I bought this script from logicspice and it
                      worked really nice, it helped my business to gain more
                      efficiency. I recommend for all whom looking for a
                      WhatsApp Clone, it's really nice."
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
                      information to make it live has been given.{" "}
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
                    headerTitle="Can I resell the script? Will I have rights over the script code?"
                    collapseId="flush-collapse4"
                  >
                    <p>
                      No, You can't resell the script. All rights will remain
                      with Logicspice only.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Will I be able to use it on multiple domains, after I purchase this script?"
                    collapseId="flush-collapse5"
                  >
                    <p>
                      You will be licensed to use it only for the domain, you
                      purchased for.
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
      <section class="content_area feature_inner" id="features">
        <div class="container">
          <h2 class="title_main">WhatsApp Clone Features</h2>
          <div id="joblboardslide">
            <Slider {...settings}>
              <div class="SliderMainBx">
                <div class="feat-slide-img">
                  <img
                    src="/img/whatsappclone/whatsapp-clone.png"
                    alt="Ls Chat"
                  />
                </div>
                <div class="hands-proved">
                  <div class="titleof_scnew">Ls Chat</div>
                </div>
              </div>
              <div class="SliderMainBx">
                <div class="feat-slide-img">
                  <img
                    src="/img/whatsappclone/chat-login.png"
                    alt="Chat Login"
                  />
                </div>
                <div class="hands-proved">
                  <div class="titleof_scnew">Chat Login</div>
                </div>
              </div>
              <div class="SliderMainBx">
                <div class="feat-slide-img">
                  <img
                    src="/img/whatsappclone/edit-profile.png"
                    alt="Edit Profile"
                  />
                </div>
                <div class="hands-proved">
                  <div class="titleof_scnew">Edit Profile</div>
                </div>
              </div>
              <div class="SliderMainBx">
                <div class="feat-slide-img">
                  <img src="/img/whatsappclone/message.png" alt="Message" />
                </div>
                <div class="hands-proved">
                  <div class="titleof_scnew">Message</div>
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
                    title="Whatsapp Clone"
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
                  <Link href="#">
                    <div class="caption">
                      <div class="other-caption-bx">
                        <h3>Crowdfunding</h3>
                        <div class="other-project-logo">
                          <img
                            src="/img/jobboard/crowdfunding_new.png"
                            alt="Crowdfunding"
                            class=""
                          />
                        </div>
                        <p>
                          <span>
                            Fundraising Software like GoFundMe & Kickstarter.
                          </span>
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div class="col-sm-6 col-md-4">
                <div class="thumbnail">
                  <Link href="#">
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
                  <Link href="#">
                    <div class="caption">
                      <div class="other-caption-bx">
                        <h3>Logistic Marketplace software</h3>
                        <div class="other-project-logo">
                          <img
                            src="/img/jobboard/logictic_logo_new.png"
                            alt="logistic-marketplace-software"
                            class=""
                          />
                        </div>
                        <p>
                          <span>Similar to Uship Clone, Shiply Clone.</span>
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
