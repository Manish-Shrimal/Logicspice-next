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
  const [staffTab, setStaffTab] = useState(true);
  const [jobseekersTab, setJobSeekersTab] = useState(false);
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

  const handleStaffTab = () => {
    setStaffTab(true);
    setJobSeekersTab(false);
    setAdminTab(false);
  };
  const handleJobSeekersTab = () => {
    setStaffTab(false);
    setJobSeekersTab(true);
    setAdminTab(false);
  };
  const handleAdminTab = () => {
    setStaffTab(false);
    setJobSeekersTab(false);
    setAdminTab(true);
  };

  const opendiv = (tabId) => {
    setActiveTab(tabId);
  };
  return (
    <>
      <NavBar />
      <section class="paid-pro job-portal-banner fiverr-new-banner NewJobSiteDesign JobBoardNewDesign NewCrowdDesigns job-portal-bg rms-banner-new">
        <div class="container">
          <div class="row">
            <div class="col-sm-7 col-md-7">
              <h1>Recruitment Management Software</h1>
              <div class="both-left-p-sec">
                <h2>
                  Readymade recruitment PHP script that automates your job
                  applicant tracking through this software
                </h2>
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
                        title="Please fill the form below and get access to the live demo of Recruitment Management Software.
See how it work yourself!"
                      />
                    }
                  </div>
                  <Link
                    class="btn fiverr-buys"
                    href="/softwares/recruitment-management-software"
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
                    <p>44 Reviews</p>
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
                </ul>
              </div>
            </div>
            <div class="col-sm-5 col-md-5">
              <div class="por-mobile-new">
                <img
                  alt="Recruitment_Management_Software"
                  src="/img/softwares-banner-img/rms-banner-img.png"
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
                  Recruitment Management Software
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="job-section-top-new JobBoardSectionNew">
        <div className="container">
          <p>
            An online recruitment management system tends to make the HR job
            faster, more precise and proficient. This application can streamline
            the end to end hiring process, as well as reduce the time cycle to
            recruit new talents. Get our white label recruitment software that
            helps you to facilitate the onboarding of new talent.
          </p>
        </div>
      </section>
      <section
        className="client-say WhatsaapCliets"
        style={{ backgroundColor: "#fff" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="service-market-ttd">
                <ul>
                  <li>Post Unlimited Jobs</li>

                  <li>Advance Search Filter</li>
                  <li>SEO Friendly</li>
                  <li>Responsive website (mobile friendly)</li>
                  <li>White labeled script </li>
                  <li>Manage Candidate Database</li>
                  <li>Social Media Sharing</li>
                  <li>Location Management</li>
                  <li>Reporting</li>
                  <li>One time License Fee</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="job_portal_area">
        <div className="container">
          <div className="job_or_title">
            <h2 className="taxt_tt_job">Candidate Tracking System Features</h2>
          </div>
          <div className="tatxt_txt_job text-center">
            Using our candidate tracking system HR can access the centralized
            candidate database at any time, which improves the communication
            between management, HR and candidates which reduces the total cycle
            time. This RMS software assists to identify required talents, verify
            the contact information and facilitates to export all the candidate
            profiles into a single excel file.
          </div>
          <div className="tab_bbx_job">
            <div className="tab_bbx_top_job">
              <ul className="">
                <li
                  id="tab1_li"
                  className={`emplyer_app_job ddlj ${staffTab ? "active" : ""}`}
                  onClick={() => handleStaffTab()}
                >
                  <a>Staff / HR Features</a>
                </li>
                <li
                  id="tab2_li"
                  className={`jobseeker_app_job ddlj ${
                    jobseekersTab ? "active" : ""
                  }`}
                  onClick={() => handleJobSeekersTab()}
                >
                  <a>Job Seekers Features</a>
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
              {staffTab && (
                <>
                  <div className="costomer_tab rj" id="tab1">
                    <div className="row">
                      <div className="col-lg-4 col-md-3">
                        <div className="costomer_tab_right costomer_tab_rightleft">
                          <img
                            src="/img/rms/mobile-rms.png"
                            alt="Staff / HR Features"
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
                                  src="/img/jobboard/secure_login.png"
                                />
                              </i>
                              <span>
                                Secure Login
                                <div className="product-idea">
                                  <p>Staff login is secured.</p>
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
                                <div className="product-idea">
                                  <p>
                                    Staff can change a username, password, email
                                    as per their ease.
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
                                Staff Log List
                                <div className="product-idea">
                                  <p>
                                    Staff members can view the self log activity
                                    on each job application which can be managed
                                    by themselves,and submit the staff log
                                    comment for activity.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/book_apartment.png"
                                />
                              </i>
                              <span>
                                Manage Job Application
                                <div className="product-idea">
                                  <p>
                                    Staff members can view the list of
                                    shortlisted job applicants data.
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
              {jobseekersTab && (
                <>
                  <div className="costomer_tab rj " id="tab2">
                    <div className="row">
                      <div className="col-lg-4 col-md-3">
                        <div className="costomer_tab_right">
                          <img
                            src="/img/rms/mobile-rms.png"
                            alt="Job Seekers Features"
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
                                  src="/img/jobboard/search_job.png"
                                />
                              </i>
                              <span>
                                Search Jobs
                                <div className="product-idea">
                                  <p>
                                    Job aspirant can search Jobs using keyword,
                                    category, location & work type etc. which
                                    will provide them with the relevant result.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/share_job.png"
                                />
                              </i>
                              <span>
                                Share A Job
                                <div className="product-idea">
                                  <p>
                                    Job aspirant can share Job on Tumblr,
                                    Facebook, Twitter, Pinterest, Gmail etc..
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/apply_job.png"
                                />
                              </i>
                              <span>
                                Apply A Job
                                <div className="product-idea">
                                  <p>
                                    Job Seeker can apply for Job, which is a
                                    potential match for their profile.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/book_apartment.png"
                                />
                              </i>
                              <span>
                                Job Application
                                <div className="product-idea">
                                  <p>
                                    Once the profile is shortlisted, aspirants
                                    need to submit job application data with
                                    their personal information, experience,
                                    education, etc..
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
                          <img src="/img/rms/rms-admin.png" alt="Admin Panel" />
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
                                <div className="product-idea">
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
                                <div className="product-idea">
                                  <p>
                                    Admin can view the dashboard where it will
                                    display the total number of jobseekers,
                                    categories, skills, designation, locations,
                                    jobs etc.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/view_category.png"
                                />
                              </i>
                              <span>
                                Manage Category
                                <div className="product-idea">
                                  <p>
                                    Admin can view and manage (add/edit/delete)
                                    all categories.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/manage_skill.png"
                                />
                              </i>
                              <span>
                                Manage Skills
                                <div className="product-idea">
                                  <p>
                                    Admin can view and manage (add/edit/delete)
                                    all skills.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/ragister-icon.png"
                                />
                              </i>
                              <span>
                                Manage Designation
                                <div className="product-idea">
                                  <p>
                                    Admin can view a list of all designations
                                    and can manage (add/edit/delete) all
                                    designations.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/manager.png"
                                />
                              </i>
                              <span>
                                Manage Jobseekers
                                <div className="product-idea">
                                  <p>
                                    Admin can view the list of jobseekers & can
                                    activate, deactivate, delete, edit, view &
                                    can view applied job list.
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
                                Manage Jobs
                                <div className="product-idea">
                                  <p>
                                    Admin can view the list of Jobs posted with
                                    and can manage(view/edit/delete) the jobs.
                                    Admin can activate/deactivate jobs. Admin
                                    can view the jobseekers list who has already
                                    applied for this Job.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/corporate_training.png"
                                />
                              </i>
                              <span>
                                Manage Staff members
                                <div className="product-idea">
                                  <p>
                                    Admin can have a look at the list of staff
                                    members and can manage the staff members.
                                    Admin can activate/deactivate staff members
                                    & admin can assign the roles for each staff
                                    member of the management.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/branch_organizations.png"
                                />
                              </i>
                              <span>
                                Staff Log List
                                <div className="product-idea">
                                  <p>
                                    Admin can view the staff log activity on
                                    each job application and can view the staff
                                    log comment for activity.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/book_apartment.png"
                                />
                              </i>
                              <span>
                                Manage Job Application
                                <div className="product-idea">
                                  <p>
                                    Admin can view the list of shortlisted job
                                    applicants data.
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
              What does our <span>Recruitment Management Software </span> can do
              for you?
            </h2>
            <p align="justify">
              Our{" "}
              <strong>
                <i>Online Recruitment Management Software</i>
              </strong>{" "}
              equips HR Managers or Recruiters to post jobs and provide a
              platform for the candidates to apply for the listed job posting.
              With the help of our RMS, the organisation can enhance their
              recruitment process as well as increase productivity. With the
              help of RMS the Entire Recruitment process can take place without
              making use of any paper as the entire process is carried out
              online, hence not even a single paper will be used.
            </p>
            <p align="justify">
              This{" "}
              <strong>
                <i>recruitment management system software</i>
              </strong>{" "}
              features the function of screening the candidate's qualification
              and experience for required positions and helps to recruit the
              right candidate for the right job.
            </p>
            <p align="justify">
              Using this{" "}
              <strong>
                <i>recruitment PHP</i>
              </strong>{" "}
              script small business owners can make their own applicant tracking
              system in less time. This ready to use recruitment software script
              designed to enhance your hiring process flow. It can provide an
              online platform for the candidate to submit their applications
              easily and receive a quick response from the admin or HR
              department which is very important in today's highly competitive
              environment.This script has been developed with the CakePHP
              framework, which makes it user-friendly, flexible and secure.
            </p>
            <p align="justify">
              With our <strong>applicant tracking software</strong> you can
              manage your entire Recruitment related activity with the best of
              the ability, and that too without compromising with the quality of
              work.
            </p>
          </div>
        </div>
      </section>

      <section
        className="SubscriptionModel"
        id="subscriptionmodel"
        style={{ background: "#f1f1f1" }}
      >
        <div className="container">
          <div className="job_or_title">
            <h2 className="taxt_tt_job">Subscription Model</h2>
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
                    Unlimited Candidate Database: Manage as many records for
                    candidate database as you need without any limitations.
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
                      title="Please fill the form below and get access to the live demo of Recruitment Management Software.
See how it work yourself!"
                    />
                  }
                </div>
                <Link
                  class="btn fiverr-buys"
                  href="/softwares//recruitment-management-software"
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
                    <p>44 Reviews</p>
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
              <a onClick={toggleModal}>contact us</a>.
            </p>
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
          <template v-if="whylogicspice">
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
                        quick load time and, Code is properly commented for each
                        function and module so anyone can easily update the code
                        in future.
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
                        We used popular and strong Framework of PHP with latest
                        versions to keep the code up to date and prevalent for
                        longer duration. Our experienced team managed all the
                        database tables with complete flexibility for extension
                        versions in future.
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
                        technical support team, with the best possible solution.
                        Expect our response within 24 hours.
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
                        You will get the dedicated support team while purchasing
                        the script or product. Technical support team will
                        resolve your query quickly in a given time.
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
                        Our customers are almost equally spread around the globe
                        and we provide international standard solutions for USA,
                        UK, Europe, Australia, UAE and other countries. We
                        follow a transparent work process and divide all the
                        development processes into small phases. We can use the
                        latest technology and standards that assure the smooth
                        development and execution.
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
                        aspect of any of the solutions, Logicspice provides. Our
                        programming is robust and secure that assures password
                        encryption.
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
                      <h3>Experienced workforce with 3000+ project history</h3>
                      <p>
                        We are a team of experienced web and mobile app
                        developers, having expertise in handling complex tasks
                        since the past 16+ years. We delivered lots of projects
                        with 100% client satisfaction on different platforms
                        with high levels of standards.
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
                        Our developed websites are SEO optimized so it can rank
                        better on Google.
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
                        <img src="/img/jobboard/cost-effective.png" alt="img" />
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
          </template>
        </div>
      </section>

      <section className="used_technology_section" id="technologies">
        <div className="container">
          <h4 className="title_main">
            <span>Used Technologies</span> and Server Requirements
          </h4>
          <div className="row used_technology_section_dataa">
            <div className="col-sm-6">
              <ul>
                <li data-aos="fade-up">
                  <div className="icntechimg">
                    <img
                      src="/img/jobboard/LaravelLogo.png"
                      alt="Laravel Development"
                    />
                  </div>
                  <div className="icntechimg_nm">Laravel</div>
                </li>
                <li data-aos="fade-up">
                  <div className="icntechimg">
                    <img src="/img/jobboard/html-5.png" alt="HTML5" />
                  </div>
                  <div className="icntechimg_nm">HTML5</div>
                </li>
                <li data-aos="fade-up">
                  <div className="icntechimg">
                    <img src="/img/jobboard/tech_mysql_icon.png" alt="MySQL" />
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
                  <b>Framework - </b> Laravel 8
                </li>
                <li className="same aos-init aos-animate" data-aos="fade-up">
                  <b>Language - </b> PHP 8.0 Supported, AJAX, jQuery
                </li>
                <li className="other aos-init aos-animate" data-aos="fade-up">
                  <b>Design - </b> HTML 5, CSS 3, Bootstrap4, JavaScript
                </li>
                <li className="other aos-init" data-aos="fade-up">
                  <b>Database - </b> MySQL 5.5+
                </li>
                <li className="other aos-init" data-aos="fade-up">
                  <b>Server - </b> Apache 2.4+
                </li>
              </ul>
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
                        <span>4.7 out of 5 stars</span>
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
                          style={{ width: "100%" }}
                        ></div>
                      </div>
                      <div className="people_star_num">39</div>
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
                    title=" Recruitment Management Software"
                  />
                </div>
                <div className="col-md-12">
                  <div className="customers_review_sec_row">
                    {/* <!--                    <div className="customers_review_sec_row_ra"><div className="starget">5 <i className="fa fa-star" aria-hidden="true"></i></div><span>Build an Online Store</span></div>--> */}

                    <div className="customer_review_stext">
                      "I installed this Recruitment Management Software and it
                      is working properly. I appreciate logicspice and their
                      support team, Thank you!"
                    </div>
                    <div
                      className="who_ratset"
                      style={{ paddingRight: "17px" }}
                    >
                      <span
                        className="star_review_main"
                        style={{ paddingRight: "10px", color: "gold" }}
                      >
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star-half" aria-hidden="true"></i>
                      </span>
                      Mike., Australia{" "}
                      <span>
                        <img
                          src="/img/jobboard/australia_flag_img.png"
                          alt="mobile app development in Australia"
                        />
                      </span>
                    </div>
                  </div>
                  <div className="customers_review_sec_row">
                    {/* <!--                    <div className="customers_review_sec_row_ra"><div className="starget">5 <i className="fa fa-star" aria-hidden="true"></i></div><span>Build an Online Store</span></div>--> */}
                    <div className="customer_review_stext" id="fiveer-clone">
                      "Recently I bought this script from logicspice and it
                      worked really nice. I recommend for all whom looking for a
                      ready-made script, it's really nice."
                    </div>

                    <div
                      className="who_ratset"
                      style={{ paddingRight: "17px" }}
                    >
                      <span
                        className="star_review_main"
                        style={{ paddingRight: "10px", color: "gold" }}
                      >
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                      </span>
                      <span id="client-name">Andrew, USA</span>{" "}
                      <span>
                        <img
                          src="/img/jobboard/usa_flag_img.png"
                          alt="mobile app development in USA"
                        />
                      </span>
                    </div>
                  </div>
                  <div className="customers_review_sec_row">
                    {/* <!--                    <div className="customers_review_sec_row_ra"><div className="starget">5 <i className="fa fa-star" aria-hidden="true"></i></div><span>Build an Online Store</span></div>--> */}
                    <div className="customer_review_stext">
                      "Well functioning script and the team is very professional
                      & always put in extra effort, technically strong
                      knowledge. Best after sales support."
                    </div>
                    <div
                      className="who_ratset"
                      style={{ paddingRight: "17px" }}
                    >
                      <span
                        className="star_review_main"
                        style={{ paddingRight: "10px", color: "gold" }}
                      >
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                      </span>
                      Thomsan, UAE{" "}
                      <span>
                        <img
                          src="/img/jobboard/uae_flag_iimg.png"
                          alt="mobile app development in UAE"
                          style={{ width: "20px", marginLeft: "3px" }}
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
                    headerTitle="Can candidates upload their CV to apply for job?"
                    collapseId="flush-collapse1"
                  >
                    <p>
                      Yes, they can upload their CV and can apply for a
                      particular job position.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Can jobseeker search for jobs using work type and location?"
                    collapseId="flush-collapse2"
                  >
                    <p>
                      Yes, they can search for Jobs by using Keyword, Category,
                      Location & Work Type etc.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Once I purchase this script, how many days will it take to go online?"
                    collapseId="flush-collapse3"
                  >
                    <p>
                      it takes 2 working days generally, provided all the
                      information to make it live has been given.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Can I get help for customization?"
                    collapseId="flush-collapse4"
                  >
                    <p>
                      Yes, we have an experienced team of developers to help you
                      with customization as per your requirements.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Can I resell the script? Will I have rights over the script code?"
                    collapseId="flush-collapse5"
                  >
                    <p>
                      No, You can't resell the script. All rights will remain
                      with Logicspice only.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Will I be able to use it on multiple domains, after I purchase this script?"
                    collapseId="flush-collapse6"
                  >
                    <p>
                      You will be licensed to use it only for the domain, you
                      purchased for.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Along with hosting server details, what other recommendations?"
                    collapseId="flush-collapse7"
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
          <h2 class="title_main">Recruitment Management Software Features</h2>
          <div id="joblboardslide">
            <Slider {...settings}>
              <div class="SliderMainBx">
                <div className="feat-slide-img">
                  <img
                    src="/img/rms/rms_listing.jpg"
                    alt="Recruitment Management Software"
                  />
                </div>
                <div className="hands-proved">
                  <div className="titleof_scnew">Job Search</div>
                </div>
              </div>
              <div class="SliderMainBx">
                <div className="feat-slide-img">
                  <img src="/img/rms/rms_details.jpg" alt="Job Details" />
                </div>
                <div className="hands-proved">
                  <div className="titleof_scnew">Job Details</div>
                </div>
              </div>
              <div class="SliderMainBx">
                <div className="feat-slide-img">
                  <img src="/img/rms/rms_jobapply.jpg" alt="Job Apply" />
                </div>
                <div className="hands-proved">
                  <div className="titleof_scnew">Job Apply</div>
                </div>
              </div>
              <div class="SliderMainBx">
                <div className="feat-slide-img">
                  <img src="/img/rms/rms_blog.jpg" alt="RMS Blog" />
                </div>
                <div className="hands-proved">
                  <div className="titleof_scnew">
                    Recruitment Management Software Blog
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>

      <div className="clearfix"></div>
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
                    title="Recruitment Management Software"
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
                    title="View Detail"
                    target="_black"
                    href="/softwares/job-board-software'"
                  >
                    <div className="caption">
                      <div className="other-caption-bx">
                        <h3>Job Board Software</h3>

                        <div className="other-project-logo">
                          <img
                            src="/img/jobboard/job-board-logo.png"
                            alt="Job board software"
                            className=""
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
              <div className="col-sm-6 col-md-4">
                <div className="thumbnail">
                  <Link
                    title="View Detail"
                    target="_black"
                    href="/softwares/udemy-clone'"
                  >
                    <div className="caption">
                      <div className="other-caption-bx">
                        <h3>Udemy Clone</h3>
                        <div className="other-project-logo">
                          <img
                            src="/img/jobboard/udemy_new.png"
                            alt="Udemy Clone"
                            className=""
                          />
                        </div>
                        <p>
                          <span>
                            Readymade Script of video E- Learning Platform like
                            Udemy.
                          </span>
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="thumbnail">
                  <Link
                    title="View Detail"
                    target="_black"
                    href="/softwares/online-exam-software-solution'"
                  >
                    <div className="caption">
                      <div className="other-caption-bx">
                        <h3>Online Exam Software</h3>
                        <div className="other-project-logo">
                          <img
                            src="/img/jobboard/online_logo_new.png"
                            alt="Online Exam Software"
                            className=""
                          />
                        </div>
                        <p>
                          <span>
                            Conduct all types of online exams & tests for remote
                            locations.
                          </span>
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