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
import { Modal, ModalBody } from "react-bootstrap";
import "../../resposive.css";
import Whylogicspice from "@/app/Components/Whylogicspice";
import Reviewmodals from "@/app/Components/Reviewmodals";

const page = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [jobportal, setJobportal] = useState(false);
  const [buyjobportal, setBuyJobportal] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);

  const toggleJobPortalModal = () => setJobportal(!jobportal);
  const toggleBuyJobPortalModal = () => setBuyJobportal(!buyjobportal);

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
      <section className="paid-pro job-portal-banner  fiverr-new-banner NewJobSiteDesign JobBoardNewDesign NewCrowdDesigns job-portal-bg crowdfunding-banner-new">
        <div className="container">
          <div className="row">
            <div className="col-sm-7 col-md-7">
              <h1>CrowdFunding Script</h1>
              <div className="both-left-p-sec">
                <h2>Fundraising Software like GoFundMe & Kickstarter</h2>
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
                          src="/img/softwares-banner-img/more-info.png"
                          alt=""
                        />
                      </i>
                      <p>Limited Period Offer for First Year</p>
                    </span>
                  </div>
                </div>
                <div className="job-valu-btn">
                  <span>Fill your basic details and</span>
                  {/* <Link
                    href="#"
                    className="btn btn-get"
                    id="buy_now_1"
                    onClick={() => openDemoModel()}
                  >
                    Get Demo Access!
                  </Link> */}
                  <div className="btn btn-get" onClick={openModal}>
                    <button>Get Demo Access!</button>
                    {
                      <Enquirymodal
                        modalStatus={showModal}
                        toggle={openModal}
                        title="Please fill the form below and get access to the live demo of Crowd Funding PHP Script
                  .See how it work yourself!"
                      />
                    }
                  </div>
                  <Link className="btn fiverr-buys" href="/softwares/udemy-clone">
                    Buy Now
                  </Link>
                </div>
                <div className="SubscriptionPrice">
                  <div className="line-border NewLineBoader">
                    <img
                      alt="crowd_funding_script"
                      src="/img/jobboard/stars.png"
                    />
                    <p>47 Reviews</p>
                  </div>
                </div>
              </div>
              <div className="jocpp">
                <ul className="job-pr-icon">
                  <li>
                    <i className="fa-solid fa-earth-americas"></i>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-5 col-md-5">
              <div className="por-mobile-new">
                <img
                  alt="crowd_funding_script"
                  src="/img/softwares-banner-img/crowdfunding-banner-img.png"
                />
              </div>
            </div>
          </div>
          <div className="job-portal-banner-link">
            <div aria-label="breadcrumb" className="my-breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link href="">Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link href="/softwares">Softwares</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Crowdfunding
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section className="job-section-top-new JobBoardSectionNew">
        <div className="container">
          <p>
            This CrowdFunding PHP Script can be used by any creators like
            artists, musicians, filmmakers, designers, developers, writers,
            painters, poets, gamers,etc to create their projects and get funds.
            Fundraisers can add collaborators and Backers can backed for
            projects.
          </p>
        </div>
      </section>
      <section className="client-say">
        <div className="container">
          <div className="row">
            <div className="col-md-6 job-video">
              <iframe
                width="100%"
                height="312"
                src="https://www.youtube.com/embed/DSEYDgFahFU?rel=0"
                title="Ls Crowdfunding Script"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className="col-md-6">
              <div className="job-portal-ttd">
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
      <section className="job_portal_area">
        <div className="container">
          <div className="job_or_title">
            <h2 className="taxt_tt_job">Crowdfunding Script Features</h2>
          </div>

          <div className="tatxt_txt_job">
            With our ready to use <strong>Crowdfunding software</strong>, users
            can easily create their own projects to raise funds over the
            platform. They will have a variety of categories to choose from when
            setting up their projects over the platform. Fundraisers can add
            collaborators on their project. Investors can also see the list of
            their backed project on which they have invested their funds and
            made payment via integrated payment gateway.
          </div>

          <div className="tab_bbx_job">
            <div className="tab_bbx_top_job">
              <ul className="">
                <li
                  id="tab1_li"
                  className={`fund_raiserbg ddlj ${sellerTab ? "active" : ""}`}
                  onClick={() => handleSellerTab()}
                >
                  <a>Fund Raiser</a>
                </li>
                <li
                  id="tab2_li"
                  className={`investors-bg ddlj ${buyerTab ? "active" : ""}`}
                  onClick={() => handleBuyerTab()}
                >
                  <a>Investors</a>
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
            <div className="tab_contant">
              {sellerTab && (
                <>
                  <div className="costomer_tab rj" id="tab1">
                    <div className="row">
                      <div className="col-lg-4 col-md-3">
                        <div className="costomer_tab_right costomer_tab_rightleft">
                          <img
                            src="/img/product-img//crowdfunding-mobile.png"
                            alt="Fund Raiser"
                          />
                        </div>
                      </div>
                      <div className="col-lg-8 col-md-9">
                        <div className="costomer_tab_left costomer_tab_leftright">
                          <ul>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/raising-img.png"
                                />
                              </i>
                              <span>
                                Create fund raising Projects
                                <div className="product-idea">
                                  <p>
                                    Fundraiser can create a project by adding
                                    project image, videos, title, Short blurb,
                                    category, sub-category, project location,
                                    funding duration, funding goals, project
                                    description, Risks & Challenges & FAQ.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/manage-project.png"
                                />
                              </i>
                              <span>
                                Manage Projects
                                <div className="product-idea">
                                  <p>
                                    Fundraiser can view the list of Project
                                    posted & can manage(add/edit/delete) the
                                    Project. Fundraiser can activate/deactivate
                                    Projects.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/add-collab.png"
                                />
                              </i>
                              <span>
                                Add collaborators
                                <div className="product-idea">
                                  <p>
                                    Fundraiser can view list of Collaborator &
                                    can manage(add/edit/delete) collaborators.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/refine_search.png"
                                />
                              </i>
                              <span>
                                Search & Filter Projects
                                <div className="product-idea">
                                  <p>
                                    Fundraiser can search for projects on the
                                    portal by entering the Keywords. Fundraiser
                                    can add filters for Project Category,
                                    Location & Sorting which will provide the
                                    relevant result.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/view-coll.png"
                                />
                              </i>
                              <span>
                                View Collaborators Profile
                                <div className="product-idea">
                                  <p>
                                    Fundraiser can view the profile of
                                    Collaborator and can add Collaborators if
                                    find suitable/relevant.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/post_project.png"
                                />
                              </i>
                              <span>
                                Post Projects
                                <div className="product-idea">
                                  <p>
                                    Fundraiser can post the projects on the
                                    portal where Fundrasier can view how many
                                    Investors has Pledged, Funded, backers &
                                    from how many days long it's been posted.
                                  </p>
                                </div>
                              </span>
                            </li>

                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/self_profile.png"
                                />
                              </i>
                              <span>
                                Profile Management
                                <div className="product-idea">
                                  <p>
                                    Fundraiser can post the projects on the
                                    portal where Fundrasier can view how many
                                    Investors has Pledged, Funded, backers &
                                    from how many days long it's been posted.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/view_created.png"
                                />
                              </i>
                              <span>
                                View Created Projects
                                <div className="product-idea">
                                  <p>
                                    Fundraiser can view the list of posted
                                    projects with the current status of the
                                    project.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/manage-notifi.png"
                                />
                              </i>
                              <span>
                                Manage Notifications
                                <div className="product-idea">
                                  <p>
                                    Fundraiser can receive the notifications for
                                    the updates & can view/delete the
                                    notification.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/share_project.png"
                                />
                              </i>
                              <span>
                                Share Projects
                                <div className="product-idea">
                                  <p>
                                    Fundraiser can the share the projects on
                                    other Social Media.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/view_activities.png"
                                />
                              </i>
                              <span>
                                View Recent activities
                                <div className="product-idea">
                                  <p>
                                    Fundraiser can view the recent activities on
                                    the portal & keep track of the activities.
                                  </p>
                                </div>
                              </span>
                            </li>

                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/withdraw_request.png"
                                />
                              </i>
                              <span>
                                Withdraw Fund Request
                                <div className="product-idea">
                                  <p>
                                    Fundraiser can request for withdrawing fund
                                    & can keep track of the payments.
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
                  <div className="costomer_tab rj active" id="tab2">
                    <div className="row">
                      <div className="col-lg-4 col-md-3">
                        <div className="costomer_tab_right">
                          <img
                            src="/img/product-img//crowdfunding-mobile2.png"
                            alt="Investors"
                          />
                        </div>
                      </div>
                      <div className="col-lg-8 col-md-9">
                        <div className="costomer_tab_left">
                          <ul>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/back-project.png"
                                />
                              </i>
                              <span>
                                Back Project
                                <div className="product-idea">
                                  <p>
                                    Investor can back projects in found
                                    intresting.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/view-project.png"
                                />
                              </i>
                              <span>
                                View Backed projects
                                <div className="product-idea">
                                  <p>
                                    Investor can view the list of the projects &
                                    can also view details of the projects.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/send-message.png"
                                />
                              </i>
                              <span>
                                Send and view messages
                                <div className="product-idea">
                                  <p>
                                    Investor can send the messages to Fundraiser
                                    & can communicate with Fundraiser. Investor
                                    can view all the chat between him/her &
                                    Investor.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/make-payment.png"
                                />
                              </i>
                              <span>
                                Manage Payment
                                <div className="product-idea">
                                  <p>
                                    Investor can view all the payments made by
                                    him/her & can manage it.
                                  </p>
                                </div>
                              </span>
                            </li>

                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/view_listing.png"
                                />
                              </i>
                              <span>
                                View Project Listings
                                <div className="product-idea">
                                  <p>
                                    Investor can view the list of Projects on
                                    the portal with detail description.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/project-profile.png"
                                />
                              </i>
                              <span>
                                View and Contact Project creator profile
                                <div className="product-idea">
                                  <p>
                                    Investor can view the Project Creators
                                    Profile & can contact them for project
                                    details.
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
                                <div className="product-idea">
                                  <p>
                                    Investor can view their Profile & can manage
                                    (update) their profile.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/post_comments.png"
                                />
                              </i>
                              <span>
                                Post Comments
                                <div className="product-idea">
                                  <p>
                                    Investor can comment on the Project post on
                                    the Portal.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/view_save_projects.png"
                                />
                              </i>
                              <span>
                                View Saved Projects
                                <div className="product-idea">
                                  <p>
                                    Investor can save the projects and can view
                                    later & can remove from saved jobs.
                                  </p>
                                </div>
                              </span>
                            </li>

                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/view_project_detail.png"
                                />
                              </i>
                              <span>
                                View Each Project Details
                                <div className="product-idea">
                                  <p>
                                    Investor can view details of each project
                                    which will display Name of Project Creator,
                                    Name of project, Video, Pledge, Backers,
                                    Location, Campaign, FAQ & Community.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/post_request.png"
                                />
                              </i>
                              <span>
                                Follow Project Creators and Facebook Friends
                                <div className="product-idea">
                                  <p>
                                    Investor can follow the Project Creator &
                                    Facebook Friends on the portal where the
                                    investor will be able to view their project
                                    post.
                                  </p>
                                </div>
                              </span>
                            </li>

                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/save_projects.png"
                                />
                              </i>
                              <span>
                                Save Projects
                                <div className="product-idea">
                                  <p>
                                    Investor can follow the Project Creator &
                                    Facebook Friends on the portal where the
                                    investor will be able to view their project
                                    post.
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
                  <div className="costomer_tab rj" id="tab3">
                    <div className="row">
                      <div className="col-lg-4 col-md-3 ">
                        <div className="costomer_tab_right costomer_tab_rightleft2">
                          <img
                            src="/img/product-img//crowdfunding_admin.png"
                            alt="Admin Panel"
                          />
                        </div>
                      </div>
                      <div className="col-lg-8 col-md-9">
                        <div className="costomer_tab_left costomer_tab_leftright2">
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
                                <div className="product-idea">
                                  <p>
                                    Admin can login securely in portal using
                                    Email Address & Password.
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
                                Admin Dashboard
                                <div className="product-idea">
                                  <p>
                                    Admin can view dashboard (which will display
                                    the total number of counts for Users) & User
                                    Statistics.
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
                                <div className="product-idea">
                                  <p>
                                    Admin can view list of Users & can
                                    manage(view/add/edit/delete) users. Admin
                                    can activate/deactivate Users.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/manage-project.png"
                                />
                              </i>
                              <span>
                                Manage Projects
                                <div className="product-idea">
                                  <p>
                                    Admin can view list of Projects & can
                                    (view/add/edit/delete) Projects. Admin can
                                    activate/deactivate Projects & can backlist
                                    Projects.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/withdraw_request.png"
                                />
                              </i>
                              <span>
                                Manage Withdraw Request
                                <div className="product-idea">
                                  <p>
                                    Admin can view the list of Withdraw request
                                    & can search withdraw request using title,
                                    from & to date etc.
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
                                Manage Content
                                <div className="product-idea">
                                  <p>
                                    Admin can view all the Front End Pages & can
                                    view & edit the Pages.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/payment_history.png"
                                />
                              </i>
                              <span>
                                Payment History
                                <div className="product-idea">
                                  <p>
                                    Admin can view the list of payment done by
                                    Investor for the projects.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/manage_commission.png"
                                />
                              </i>
                              <span>
                                Manage Commission
                                <div className="product-idea">
                                  <p>
                                    Admin can view the Commission for the
                                    projects & can edit it. Admin can
                                    activate/deactivate the commission.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/manage_blog.png"
                                />
                              </i>
                              <span>
                                Manage Blogs
                                <div className="product-idea">
                                  <p>
                                    Admin can view list of blogs & can
                                    manage(view/add/edit/delete) Blogs. Admin
                                    can activate/deactivate blogs.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/manage_currency.png"
                                />
                              </i>
                              <span>
                                Manage Currency
                                <div className="product-idea">
                                  <p>
                                    Admin can view list of currency & can
                                    manage(add/edit/delete) it. Admin can
                                    activate/ deactivate currency.
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
                                Manage Categories and Subcategories
                                <div className="product-idea">
                                  <p>
                                    Admin can view list of Categories &
                                    SubCategories & can manage (add/edit/delete)
                                    Categories & SubCategories. Admin can
                                    activate/deactivate Categories &
                                    SubCategories.
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
                                <div className="product-idea">
                                  <p>
                                    Admin can view their profile & can manage
                                    (edit/delete) Email, Username & Password.
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
              What does our Crowdfunding Software do for you ?
            </h2>
            <p>Raise Funds For Creative Projects !!!</p>
            <p>
              Our Crowd Funding Script enables you to get started with your own
              Crowd Funding website similar to KickStarter & GoFundMe. Our
              Script is highly scalable, robust and user-friendly.
            </p>
            <p>
              The product that we have developed is easy to use platform for
              your crowdfunding application development requirement and could be
              used for multiple areas of Arts, Comics, Dance, Design, Fashion,
              Medical, Volunteer, Education etc. The User who want to get fund
              on their project can select from multiple categories like Artists,
              Musicians, Filmmakers, Designers, Developers, Writers, Painters,
              Poets, Gamer, etc.
            </p>
            <p>
              Using this <i>Crowd Funding PHP Script</i>, your website users can
              create projects and get funding from the investors. Fundraisers
              can add collaborators on their project. Investors can search for
              projects. Investors can view the project details and contact the
              project creators. Users can view blogs over the site. If investors
              feel to invest on the project, they can fund the amount on the
              project and the payment gateway will process the transaction on
              the solution.
            </p>
            <p>
              Considering Ease to Use, Cost Effectiveness, Great Features,
              Security, It's the best and worth choice to start with LS
              Crowdfunding.
            </p>
            <p>
              Use LS Crowdfunding script for building your fundraising software
              !!!
            </p>
            <p>
              LogicSpice offers CrowdFunding Software that enables you to manage
              your investors for your projects through an automated online
              platform. We help you in creating your own CrowdFunding software.
              Our Readymade CrowdFunding Script helps you to launch this
              CrowdFunding Software in a quick time.
            </p>
          </div>
        </div>
      </section>
      <section className="SubscriptionModel" id="subscriptionmodel">
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
                    Unlimited Project Postings: Post as many project postings as
                    you need without any limitations.
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
                ₹88,190<span className="sml_labl"> INR</span>
              </h4>
              <strike className="srik_cls">
                ₹147,805<span className="sml_labl"> INR</span>
              </strike>
              <div className="SubscriptionModelPriceBtn">
                {/* <Link
                  href="#"
                  className="btn btn-get"
                  id="buy_now_1"
                  onClick={() => openDemoModel()}
                >
                  Get Demo Access!
                </Link> */}
                <div className="btn btn-get" onClick={openModal}>
                  <button>Get Demo Access!</button>
                  {
                    <Enquirymodal
                      modalStatus={showModal}
                      toggle={openModal}
                      title="Please fill the form below and get access to the live demo of Crowd Funding PHP Script
                  .See how it work yourself!"
                    />
                  }
                </div>
                <Link
                  className="btn fiverr-buys"
                  href="/softwares/crowdfunding-script"
                >
                  Buy Now
                </Link>
              </div>
              <div className="jocpp">
                <ul className="job-pr-icon">
                  <li>
                    <i className="fa-solid fa-earth-americas"></i>
                  </li>
                </ul>
                <div className="portel-btnbx">
                  <div className="line-border NewLineBoader">
                    <img src="/img/jobboard/stars.png" alt="" className="lazy" />
                    <p>47 Reviews</p>
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
              <a href="#" onClick={toggleModal}>
                contact us
              </a>
              .
            </p>
          </div>
        </div>
      </section>
      <section className="job_portal_area script-update-bg">
        <div className="container">
          <div className="job_or_title">
            <h2 className="taxt_tt_job">Script Update History</h2>
            <br />
            <div className="script-update_title">
              <p>
                V1.0 - April 01, 2022 - Major updates and improvements
                completed!
              </p>
              <ul>
                <li>
                  <span>
                    Project sharing over Facebook, Gmail, and Twitter.
                  </span>
                </li>
                <li>
                  <span>Updated the steps of the Post Project.</span>
                </li>
                <li>
                  <span>
                    Visitors are also able to do funding or direct funding
                    without login.
                  </span>
                </li>
                <li>
                  <span>Gifting over given funds, to the donors.</span>
                </li>
                <li>
                  <span>
                    Admin is able to set commission separately for each project
                    or Project wise admin commission.
                  </span>
                </li>
                <li>
                  <span>
                    Create a hashtag while adding the project to post the
                    project over social media platforms.
                  </span>
                </li>
                <li>
                  <span>
                    Project sharing through admin over the official social media
                    pages.
                  </span>
                </li>
                <li>
                  <span>
                    Default admin commission for each project if the commission
                    isn't added for that respective project.
                  </span>
                </li>
                <li>
                  <span>
                    Thanks email sending feature with inbuilt mail to the donor.
                  </span>
                </li>
                <li>
                  <span>
                    Inbuilt platform messaging between project owner and donor.
                  </span>
                </li>
                <li>
                  <span>
                    Import and export feature for user listing on the admin
                    side.
                  </span>
                </li>
                <li>
                  <span>Signup & Sign In with Gmail, Facebook.</span>
                </li>
                <li>
                  <span>Multi Language (French Translation).</span>
                </li>
                <li>
                  <span>Inbuilt Blog Feature.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="job_portal_area job_portal_area_food">
        <div className="container">
          <div className="job_or_title">
            <h2 className="taxt_tt_job">
              Best Partner Company For Your Technological Solutions!
            </h2>
            <br />
            <div className="logic-parter">
              <a
                className=""
                aria-controls="jobportal"
                onClick={toggleJobPortalModal}
              >
                <i className="fa fa-cogs" aria-hidden="true"></i>
                <span>How It Works</span>
              </a>
              <a
                className=""
                aria-controls="buyjobportal"
                onClick={toggleBuyJobPortalModal}
              >
                <i className="fa fa-building" aria-hidden="true"></i>
                <span>Companies Using It</span>
              </a>
              <a onClick={toggleInfo} className="ylogicspice">
                <i>
                  <img src="/img/jobboard/why-logic-icon.png" alt="" className="" />
                </i>
                <span>Why Logicspice</span>
              </a>
              <Whylogicspice open={showInfo} />
            </div>
          </div>

          {/* {showInfo && (
            <>
              <div className="small_bbx_job_new">
                <div className="row">
                  <div className="col-sm-4 col-md-4">
                    <div className="thumbnail-new thumbnail-bx1">
                      <div className="caption">
                        <div className="best-partner-img-bx">
                          <img src="/img/jobboard/coding.png" alt="img" />
                        </div>
                        <h3>Optimized Code with proper commenting</h3>
                        <p>
                          Our script code is fully optimized, which results in
                          quick load time and, Code is properly commented for
                          each function and module so anyone can easily update
                          the code in future.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4 col-md-4">
                    <div className="thumbnail-new thumbnail-bx2">
                      <div className="caption">
                        <div className="best-partner-img-bx">
                          <img
                            src="/img/jobboard/data-complexity.png"
                            alt="img"
                          />
                        </div>
                        <h3>Strong Framework of PHP & Well managed database</h3>
                        <p>
                          We used popular and strong Framework of PHP with
                          latest versions to keep the code up to date and
                          prevalent for longer duration. Our experienced team
                          managed all the database tables with complete
                          flexibility for extension versions in future.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4 col-md-4">
                    <div className="thumbnail-new thumbnail-bx3">
                      <div className="caption">
                        <div className="best-partner-img-bx">
                          <img src="/img/jobboard/coordinate.png" alt="img" />
                        </div>
                        <h3>
                          Quick Response and
                          <br /> Coordination
                        </h3>
                        <p>
                          Customers will always get a quick response from our
                          technical support team, with the best possible
                          solution. Expect our response within 24 hours.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-4 col-md-4">
                    <div className="thumbnail-new thumbnail-bx4">
                      <div className="caption">
                        <div className="best-partner-img-bx">
                          <img src="/img/jobboard/customize.png" alt="img" />
                        </div>
                        <h3>Customization at affordable price</h3>
                        <p>
                          We provide customization of our scripts, to meet
                          customer expectations with best affordable price and
                          minimum turn-around time.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4 col-md-4">
                    <div className="thumbnail-new thumbnail-bx5">
                      <div className="caption">
                        <div className="best-partner-img-bx">
                          <img
                            src="/img/jobboard/smartphone-icon.png"
                            alt="img"
                          />
                        </div>
                        <h3>Mobile Friendly Script</h3>
                        <p>
                          Our Script is mobile friendly so, users can easily
                          access all the features through mobile devices that
                          gives improved user experience with portability.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4 col-md-4">
                    <div className="thumbnail-new thumbnail-bx6">
                      <div className="caption">
                        <div className="best-partner-img-bx">
                          <img src="/img/jobboard/data.png" alt="img" />
                        </div>
                        <h3>Dedicated Support Team</h3>
                        <p>
                          You will get the dedicated support team while
                          purchasing the script or product. Technical support
                          team will resolve your query quickly in a given time.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-4 col-md-4">
                    <div className="thumbnail-new thumbnail-box thumbnail-bx7">
                      <div className="caption">
                        <div className="best-partner-img-bx">
                          <img src="/img/jobboard/web-icon.png" alt="img" />
                        </div>
                        <h3>Global company with agile development approach</h3>
                        <p>
                          Our customers are almost equally spread around the
                          globe and we provide international standard solutions
                          for USA, UK, Europe, Australia, UAE and other
                          countries. We follow a transparent work process and
                          divide all the development processes into small
                          phases. We can use the latest technology and standards
                          that assure the smooth development and execution.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4 col-md-4">
                    <div className="thumbnail-new thumbnail-box thumbnail-bx8">
                      <div className="caption">
                        <div className="best-partner-img-bx">
                          <img src="/img/jobboard/encrypted.png" alt="img" />
                        </div>
                        <h3>
                          Customer information and application level security
                        </h3>
                        <p>
                          Security of customer data and application is a major
                          aspect of any of the solutions, Logicspice provides.
                          Our programming is robust and secure that assures
                          password encryption.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4 col-md-4">
                    <div className="thumbnail-new thumbnail-box thumbnail-bx9">
                      <div className="caption">
                        <div className="best-partner-img-bx">
                          <img src="/img/jobboard/history-icon.png" alt="img" />
                        </div>
                        <h3>
                          Experienced workforce with 3000+ project history
                        </h3>
                        <p>
                          We are a team of experienced web and mobile app
                          developers, having expertise in handling complex tasks
                          since the past 16+ years. We delivered lots of
                          projects with 100% client satisfaction on different
                          platforms with high levels of standards.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-4 col-md-4">
                    <div className="thumbnail-new productthumbnail-box thumbnail-bx10">
                      <div className="caption">
                        <div className="best-partner-img-bx">
                          <img
                            src="/img/jobboard/seouser-friendly.png"
                            alt="img"
                          />
                        </div>
                        <h3>Seo Friendly Development</h3>
                        <p>
                          Our developed websites are SEO optimized so it can
                          rank better on Google.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-4 col-md-4">
                    <div className="thumbnail-new productthumbnail-box thumbnail-bx11">
                      <div className="caption">
                        <div className="best-partner-img-bx">
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

                  <div className="col-sm-4 col-md-4">
                    <div className="thumbnail-new productthumbnail-box thumbnail-bx12">
                      <div className="caption">
                        <div className="best-partner-img-bx">
                          <img
                            src="/img/jobboard/third-party-api.png"
                            alt="img"
                          />
                        </div>
                        <h3>Integration With Third Party Api</h3>
                        <p>
                          We integrate your website with third party API on our
                          end to serve you better.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-4 col-md-4">
                    <div className="thumbnail-new productthumbnail-box thumbnail-bx13">
                      <div className="caption">
                        <div className="best-partner-img-bx">
                          <img
                            src="/img/jobboard/cost-effective.png"
                            alt="img"
                          />
                        </div>
                        <h3>Cost Effective</h3>
                        <p>
                          Powerful technology back-end with basic ready-made
                          modules save time and hence overall project cost for
                          your script gets reduced.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )} */}
        </div>
      </section>
      <div>
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
                <div className="SliderMainBx">
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
                <div className="SliderMainBx">
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
                <div className="SliderMainBx">
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
                <div className="SliderMainBx">
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
                <div className="SliderMainBx">
                  <div className="feat-slide-img">
                    <img
                      src="/img/jobboard/Manage_jobs_job_portal_script.png"
                      alt="Job Management"
                    />
                  </div>
                  <div className="hands-proved">
                    <div className="titleof_scnew">Job Management</div>
                    <div className="pro-feat-detai">
                      Manage the jobs created by them making them active or
                      inactive. Check the list of job seekers who applied for
                      job.
                    </div>
                  </div>
                </div>
                <div className="SliderMainBx">
                  <div className="feat-slide-img">
                    <img
                      src="/img/jobboard/membership_plan_job_portal_script.png"
                      alt="Membership Plan"
                    />
                  </div>
                  <div className="hands-proved">
                    <div className="titleof_scnew">Membership Plan</div>
                    <div className="pro-feat-detai">
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
                  <li data-aos="fade-up">
                    <div className="icntechimg">
                      <img
                        src="/img/jobboard/tech_cakephp_icon.png"
                        alt="CakePHP Development"
                      />
                    </div>
                    <div className="icntechimg_nm">CakePHP</div>
                  </li>
                  <li data-aos="fade-up">
                    <div className="icntechimg">
                      <img src="/img/jobboard/html-5.png" alt="HTML5" />
                    </div>
                    <div className="icntechimg_nm">HTML5</div>
                  </li>
                  <li data-aos="fade-up">
                    <div className="icntechimg">
                      <img
                        src="/img/jobboard/tech_mysql_icon.png"
                        alt="MySQL"
                      />
                    </div>
                    <div className="icntechimg_nm">MySQL</div>
                  </li>
                  <li data-aos="fade-up">
                    <div className="icntechimg">
                      <img
                        src="/img/jobboard/tech_apache_icon.png"
                        alt="Apache"
                      />
                    </div>
                    <div className="icntechimg_nm">Apache</div>
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
                    <b>Framework - </b> CakePHP
                  </li>
                  <li className="same aos-init aos-animate" data-aos="fade-up">
                    <b>Language - </b> PHP 7 Supported, AJAX, jQuery
                  </li>
                  <li className="other aos-init aos-animate" data-aos="fade-up">
                    <b>Design - </b> HTML 5, CSS 3, JavaScript
                  </li>
                  <li className="other aos-init" data-aos="fade-up">
                    <b>Database - </b> MySQL 5.5+{" "}
                  </li>
                  <li className="other aos-init" data-aos="fade-up">
                    <b>Server - </b> Apache 2.4+
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
                        <span>4.8 out of 5 stars</span>
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
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                      <div className="people_star_num">42</div>
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
                          style={{ width: "10%" }}
                        ></div>
                      </div>
                      <div className="people_star_num">5</div>
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
                          style={{ width: "0%" }}
                        ></div>
                      </div>
                      <div className="people_star_num">0</div>
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
                <div className="col-md-7">
                  <a className="btn btn-primary" onClick={openReviewModel}>
                    Rate and Review product
                  </a>

                  <Reviewmodals
                    modalStatus={showReviewModal}
                    toggle={openReviewModel}
                    title="CrowdFunding Script"
                  />
                </div>
                <div className="col-md-12">
                  <div className="customers_review_sec_row">
                    <div className="customer_review_stext">
                      "Best,User-Friendly Script Offered best solution for my
                      project... Thanks LogicSpice Team !!! "
                    </div>

                    <div className="who_ratset">
                      <span className="star_review_main">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star-half" aria-hidden="true"></i>
                      </span>
                      <span id="client-name">Adam Wilson, USA</span>{" "}
                      <span>
                        <img
                          src="/img/jobboard/usa_flag_img.png"
                          alt="mobile app development in USA"
                        />
                      </span>
                    </div>
                  </div>
                  <div className="customers_review_sec_row">
                    <div className="customer_review_stext">
                      "Its an exicting platform for funding your projects. I am
                      pleased with My LogicSpice Experience."
                    </div>

                    <div className="who_ratset">
                      <span className="star_review_main">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                      </span>
                      Jason Dinsmore, Germany{" "}
                      <span>
                        <img
                          src="/img/jobboard/german.png"
                          alt="mobile app development in USA"
                        />
                      </span>
                    </div>
                  </div>
                  <div className="customers_review_sec_row">
                    <div className="customer_review_stext">
                      "Its incredible,powerful crowdfunding platform. Nearly 50%
                      projects funding I got from people found with LS
                      Crowdfunding Script."
                    </div>

                    <div className="who_ratset">
                      <span className="star_review_main">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                      </span>
                      Emma Davis, AUS{" "}
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
              <h4 className="title_main">FAQ's</h4>
              <div className="MainFaqBx">
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
      <section className="content_area feature_inner" id="features">
        <div className="container">
          <h2 className="title_main">Crowdfunding Features</h2>
          <div id="joblboardslide">
            <Slider {...settings}>
              <div className="SliderMainBx">
                <div className="feat-slide-img">
                  <img
                    src="/img/crowdfunding/collaborators-profile.png"
                    alt="Collaborators Profile"
                  />
                </div>
                <div className="hands-proved">
                  <div className="titleof_scnew">Collaborators Profile</div>
                  <div className="pro-feat-detai">
                    It will facilitate users to view collaborators profile.
                    Users can view following details about collaborator: Profile
                    image icon,Name,Number of backed projects,Joined
                    date,About,Backed.
                  </div>
                </div>
              </div>
              <div className="SliderMainBx">
                <div className="feat-slide-img">
                  <img
                    src="/img/crowdfunding/create-project.png"
                    alt="Create Projects"
                  />
                </div>
                <div className="hands-proved">
                  <div className="titleof_scnew">Create Projects</div>
                  <div className="pro-feat-detai">
                    It will facilitate users to create project over the site.
                    Users can create projects by specifying project details.
                  </div>
                </div>
              </div>
              <div className="SliderMainBx">
                <div className="feat-slide-img">
                  <img
                    src="/img/crowdfunding/search-project.png"
                    alt="Search Projects"
                  />
                </div>
                <div className="hands-proved">
                  <div className="titleof_scnew">Search Projects</div>
                  <div className="pro-feat-detai">
                    It will facilitate users to search projects over the site.
                    Users can search project by specifying keyword on search bar
                    or they can search projects by categories.{" "}
                  </div>
                </div>
              </div>
              <div className="SliderMainBx">
                <div className="feat-slide-img">
                  <img
                    src="/img/crowdfunding/backed-projects.png"
                    alt="Backed projects"
                  />
                </div>
                <div className="hands-proved">
                  <div className="titleof_scnew">Backed projects</div>
                  <div className="pro-feat-detai">
                    This will facilitate users to view list of their backed
                    projects.It will facilitate users to back project over the
                    site. Users can backed project by specifying pledged amount
                    and click on continue.
                  </div>
                </div>
              </div>
              <div className="SliderMainBx">
                <div className="feat-slide-img">
                  <img
                    src="/img/crowdfunding/view-creator.png"
                    alt="View Creator"
                  />
                </div>
                <div className="hands-proved">
                  <div className="titleof_scnew">View Creator</div>
                  <div className="pro-feat-detai">
                    It will facilitate users to view creator profile. On
                    clicking on profile image icon of creator users can view
                    details about creator profile
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
      <section className="enq-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 text-center">
              <div className="btn btn-primary" onClick={openModal}>
                <button>Enquire Now</button>
                {
                  <Enquirymodal
                    modalStatus={showModal}
                    toggle={openModal}
                    title="Please fill the form below and get access to the live demo of Crowd Funding PHP Script
                  .See how it work yourself!"
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
                    href="/softwares/service-marketplace-script"
                    title="View Detail"
                    target="_black"
                  >
                    <div className="caption">
                      <div className="other-caption-bx">
                        <h3>Service Marketplace Script</h3>
                        <div className="other-project-logo">
                          <img
                            src="/img/jobboard/service-logo.png"
                            alt="Service Marketplace Script"
                          />
                        </div>
                        <p>
                          <span>
                            On demand service marketplace like Thumbtack Clone,
                            Airtasker Clone, UrbanCompany Clone.
                          </span>{" "}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="thumbnail">
                  <Link
                    href="/softwares/fiverr-clone"
                    title="View Detail"
                    target="_black"
                  >
                    <div className="caption">
                      <div className="other-caption-bx">
                        <h3>Fiverr clone</h3>

                        <div className="other-project-logo">
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
                  </Link>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="thumbnail">
                  <Link
                    href="/softwares/logistic-marketplace-software"
                    title="View Detail"
                    target="_black"
                  >
                    <div className="caption">
                      <div className="other-caption-bx">
                        <h3>Uship clone</h3>

                        <div className="other-project-logo">
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