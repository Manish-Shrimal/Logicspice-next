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
  const [jobportal, setJobportal] = useState(false);
  const toggleJobPortalModal = () => setJobportal(!jobportal);

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
      <section class="paid-pro job-portal-banner  fiverr-new-banner NewJobSiteDesign JobBoardNewDesign NewCrowdDesigns job-portal-bg onlineexam-banner-new">
        <div class="container">
          <div class="row">
            <div class="col-sm-7 col-md-7">
              <h1>Online Exam Software Script</h1>
              <div class="both-left-p-sec">
                <h2>
                  Conduct all types of online exams & tests for remote
                  locations.
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
                        title="Please fill the form below and get access to the live demo of Online Exam Software Solution.
See how it work yourself!!"
                      />
                    }
                  </div>
                  <Link
                    class="btn fiverr-buys NewGreenBtnJob"
                    href="/softwares/online-exam-software-solution"
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
                    <p>26 Reviews</p>
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
                  alt="Online_exam_Software_Solution"
                  src="/img/softwares-banner-img/onlineexam-banner-img.png"
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
                  Online Exam Software Solution
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section class="job-section-top-new JobBoardSectionNew">
        <div class="container">
          <p>
            As the best online exam software company, we provide you with the
            best online exam web & mobile app solution that will serve as an
            attractive platform for the candidates to take various online tests.
            Candidates can view all exam details on their dashboard and can
            apply for it. They can see the history of all applied exams and can
            view detailed exam results and download score cards.
          </p>
        </div>
      </section>
      <section
        class="client-say WhatsaapCliets"
        style={{ backgroundColor: "#fff" }}
      >
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="service-market-ttd">
                <ul>
                  <li>Easy test maker online</li>
                  <li>Engaging</li>
                  <li>Responsive website (mobile friendly)</li>
                  <li>White labeled script </li>
                  <li>Highly scalable & robust</li>
                  <li>Complete Powerful Solution</li>
                  <li>Timer to perform online test</li>
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
            <h2 class="taxt_tt_job">Online Exam Software Features</h2>
          </div>

          <div class="tatxt_txt_job text-center">
            This online exam test script will help you to build online exam test
            portal where teacher or admin can automate their examination process
            smoothly. Students or user can apply for that test easily.
          </div>

          <div class="tab_bbx_job">
            <div class="tab_bbx_top_job tab_bbx_job_classified">
              <ul className="">
                <li
                  id="tab1_li"
                  className={`online_student ddlj ${sellerTab ? "active" : ""}`}
                  onClick={() => handleSellerTab()}
                >
                  <a>Student Section</a>
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
                            src="/img/onlineexam/onlineexam_student.png"
                            alt="Customer"
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
                                  src="/img/jobboard/ragister-icon.png"
                                />
                              </i>
                              <span>
                                Securely Login
                                <div class="product-idea">
                                  <p>
                                    Student can login securely on the portal
                                    using Email Addresss or Google/LinkedIn.{" "}
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
                                    Student can view their profile & can manage
                                    their Profile.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/view_test.png"
                                />
                              </i>
                              <span>
                                View Test
                                <div class="product-idea">
                                  <p>
                                    Student can view all test added by Admin for
                                    each subject & can apply for test.{" "}
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/online_test.png"
                                />
                              </i>
                              <span>
                                Take Online Test
                                <div class="product-idea">
                                  <p>
                                    Student can take online test after login.
                                    After applying for the test Student will be
                                    able to see the instruction page & once they
                                    read all instruction they can start the
                                    test.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/applied_test.png"
                                />
                              </i>
                              <span>
                                View Applied Test
                                <div class="product-idea">
                                  <p>
                                    User can view number of applied tests along
                                    with all exam analysis details under Exam
                                    Histories Section. They can also download
                                    score card certificate.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/view_result.png"
                                />
                              </i>
                              <span>
                                View Result
                                <div class="product-idea">
                                  <p>
                                    Students will be able to view detailed exam
                                    analysis like number of marks obtained,
                                    number of attended/not attended questions,
                                    number of correct/wrong answers along with
                                    score card certificate.{" "}
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/current_ans.png"
                                />
                              </i>
                              <span>
                                View Correct Answer
                                <div class="product-idea">
                                  <p>
                                    Student will be able to view correct answer
                                    after submission of the test on View Result
                                    page.{" "}
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
                                View Announcements
                                <div class="product-idea">
                                  <p>
                                    User will be able to view announcements on
                                    the Front page of the Portal.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/find-hire-fre.png"
                                />
                              </i>
                              <span>
                                Download Certificate
                                <div class="product-idea">
                                  <p>
                                    Students can download their score card
                                    certificates of all applied exams.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/view_result.png"
                                />
                              </i>
                              <span>
                                Exam Report
                                <div class="product-idea">
                                  <p>
                                    Students will be able to view statistical
                                    report of overall exam analysis and detailed
                                    exam analysis like total number of
                                    questions, number of correct answers, wrong
                                    answers, number of attended/Non-attended
                                    questions, overall marks obtained etc.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/view_test.png"
                                />
                              </i>
                              <span>
                                View Recent Exams
                                <div class="product-idea">
                                  <p>
                                    Students can view details of recent exams
                                    given along with applicant name,their
                                    scores.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/tickets_history.png"
                                />
                              </i>
                              <span>
                                View all Exam History
                                <div class="product-idea">
                                  <p>
                                    Students can view details like Exam
                                    Name,Number of questions,Number of
                                    Right/Wrong Answers,Score and date of exam.
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
                            src="/img/onlineexam/onlineexam_mac.png"
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
                                  src="/img/jobboard/configuration.png"
                                />
                              </i>
                              <span>
                                Secure Login
                                <div class="product-idea">
                                  <p>
                                    Admin will be able to login securely on the
                                    portal.
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
                                <div class="product-idea">
                                  <p>
                                    Admin will be able to view total number of
                                    students, subjects, Test Questions, Test
                                    Papers, Test Results on their dashboard.
                                  </p>
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
                                Manage Settings
                                <div class="product-idea">
                                  <p>
                                    Admin will be able to manage
                                    (add/edit/view/delete) Username, Email id,
                                    Password and can view and edit front end
                                    pages content of website.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/class_details.png"
                                />
                              </i>
                              <span>
                                Manage Students
                                <div class="product-idea">
                                  <p>
                                    Admin will be able to view list of Students
                                    & can manage(add/edit/delete) Students.
                                    Admin will be able to activate & deactivate
                                    Students profile.{" "}
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/course_details.png"
                                />
                              </i>
                              <span>
                                Manage Subjects
                                <div class="product-idea">
                                  <p>
                                    Admin will be able to view list of Subjects
                                    & can manage (add/edit/delete) Subjects.{" "}
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/send_question.png"
                                />
                              </i>
                              <span>
                                Manage Questions
                                <div class="product-idea">
                                  <p>
                                    Admin will be able to view list of Questions
                                    with multiple options & can
                                    manage(add/edit/delete) Questions with image
                                    and without images.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/stu_test_paper.png"
                                />
                              </i>
                              <span>
                                Manage Test Paper
                                <div class="product-idea">
                                  <p>
                                    Admin will be able to view Test Papers List
                                    and can create test papers by adding details
                                    like Title, Subject, Time Duration,
                                    Certificate Generation (Enabled/ Disabled),
                                    Negative Marking (Yes/No). Admin will be
                                    able to manage (Add/Edit/Delete) all test
                                    papers and can activate/Deactivate test
                                    papers.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/view_queries.png"
                                />
                              </i>
                              <span>
                                View Student Test Results
                                <div class="product-idea">
                                  <p>
                                    Admin will be able to view the list of
                                    students who have successfully submitted
                                    tests and can export data.
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
                                Manage Announcements
                                <div class="product-idea">
                                  <p>
                                    Admin will be able manage(add/edit/delete)
                                    accounements which are displayed in student
                                    account at front end.{" "}
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
                                <div class="product-idea">
                                  <p>
                                    Admin will be able to manage (View/Edit)
                                    frontend Pages.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/manage_edu.png"
                                />
                              </i>
                              <span>
                                Manage Test <br />
                                Instructions
                                <div class="product-idea">
                                  <p>
                                    Admin will be able to manage (Edit/View)
                                    Online Test Instructions.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/download_test.png"
                                />
                              </i>
                              <span>
                                Download Test Results Data
                                <div class="product-idea">
                                  <p>
                                    Admin will be able to export all Test
                                    Results data by selecting date range.{" "}
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
              What does our <span>Online Test Exam Portal Script</span> do for
              you?
            </h2>
            <p>
              LogicSpice offers Online Test Exam Portal Script to build Online
              test portal for their Students.
            </p>
            <p>
              Online Test Exam Portal is platform to keep track of student's
              capabilities and test them.
            </p>
            <p>
              Online Exam portal is essential for Colleges, Universities,
              Teachers, Professors, Employees, Partners, Technicians.
            </p>
            <p>
              It would be helpful for folks within the educational development
              of children to enhance their instructional skills.
            </p>
            <p>
              <strong>
                <i>Online Exam PHP Script</i>
              </strong>{" "}
              will be User-Friendly, Responsive, Offering several types of
              questions, Give Scorecard etc.
            </p>
            <p>
              As per the client requirement we can customise the native mobile
              application.{" "}
            </p>
          </div>
        </div>
      </section>
      <section class="SubscriptionModel" id="subscriptionmodel">
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
                    Unlimited Online Test Listings: List as many test postings
                    as you need without any limitations.
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
                      title="Please fill the form below and get access to the live demo of Online Exam Software Solution.
See how it work yourself!"
                    />
                  }
                </div>
                <Link
                  class="btn fiverr-buys"
                  href="/softwares/online-exam-software-solution"
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
                    <p>26 Reviews</p>
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
      <section class="job_portal_area script-update-bg">
        <div class="container">
          <div class="job_or_title">
            <h2 class="taxt_tt_job">Script Update History</h2>
            <br />
            <div class="script-update_title">
              <p>
                V1.0 - May 15th, 2020 - PHP framework upgrade to Laravel and
                other major improvements!
              </p>
              <ul>
                <li>
                  <span>PHP framework upgrade to Laravel.</span>{" "}
                </li>
                <li>
                  <span>
                    Flexible Start time for Exam : Now admin have ability to
                    decide Whether all the exams would start on the same time,
                    or candidate can participate at any point of time.
                  </span>
                </li>
                <li>
                  <span>
                    Payment feature for every test paper: Every student needs to
                    purchase a test paper before participating in the exam.
                  </span>
                </li>
                <li>
                  <span>
                    Change test paper design : Test paper layout has been
                    improved.
                  </span>{" "}
                </li>
                <li>
                  <span>
                    Exam Timer in milliseconds : Students can view exam timer in
                    milliseconds also.
                  </span>
                </li>
                <li>
                  <span>
                    Time period: Students are able to view time period spent in
                    the test paper.
                  </span>
                </li>
                <li>
                  <span>
                    More SEO friendly with content keyword and description
                    management in the admin panel.
                  </span>{" "}
                </li>
                <li>
                  <span>
                    Google analytics tracking code management in the admin
                    panel.
                  </span>
                </li>
                <li>
                  <span>
                    How it works content images and title management in the
                    admin panel.
                  </span>
                </li>
                <li>
                  <span>
                    Sharing(AddThis API) tool added to share the exam details
                    over the popular social media websites.
                  </span>{" "}
                </li>
              </ul>
            </div>
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
              <a
                className=""
                aria-controls="jobportal"
                onClick={toggleJobPortalModal}
              >
                <i className="fa fa-cogs" aria-hidden="true"></i>
                <span>How It Works</span>
              </a>

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
              src="/img/jobboard/Job_board_for_page.jpg"
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
      </div>
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
                        src="/img/jobboard/tech_cakephp_icon.png"
                        alt="CakePHP Development"
                      />
                    </div>
                    <div class="icntechimg_nm">CakePHP</div>
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
                    <b>Framework - </b> Cakephp
                  </li>
                  <li class="same">
                    <b>Language - </b> PHP 5.6+, AJAX, jQuery
                  </li>
                  <li class="other">
                    <b>Design - </b> HTML 5, CSS 3, JavaScript
                  </li>
                  <li class="other">
                    <b>Database - </b> MySQL 5.5+{" "}
                  </li>
                  <li class="other">
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
                      <div class="people_star_num">23</div>
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
                      "We needed a customized Online Exam Portal for our Online
                      Exam to manage Users. Logicspice has provided us with the
                      right online solution. Thanks!""We needed a customized
                      Online Exam Portal for our Online Exam to manage Users.
                      Logicspice has provided us with the right online solution.
                      Thanks!"
                    </div>

                    <div class="who_ratset">
                      <span class="star_review_main">
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star-half" aria-hidden="true"></i>
                      </span>
                      <span id="client-name">Sagar., India</span>{" "}
                      <span class="ConuntryFlagIcon">
                        <img
                          src="/img/jobboard/india_flag_img.png"
                          alt="mobile app development in India"
                        />
                      </span>
                    </div>
                  </div>
                  <div class="customers_review_sec_row">
                    <div class="customer_review_stext">
                      "Recently I purchased the Online Exam Portal Script to
                      launch my own online Exam Software from LS(Logicspice) and
                      it worked really nice. Buying this script was worth as
                      they have provided me with full source code & I was able
                      to customize it. Highly Recommended!!!!!!"
                    </div>

                    <div class="who_ratset">
                      <span class="star_review_main">
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                      </span>
                      Alen, USA{" "}
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
                      "Online Exam Portal was easy to use & useful for My
                      Educational Institute which helps us to create Test for
                      Students"
                    </div>

                    <div class="who_ratset">
                      <span class="star_review_main">
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                      </span>
                      Robert, New York{" "}
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
                      "LogicSpice is the best IT Service Provider. I would
                      highly recommend it for any Institutes or Organization
                      which is looking for Online Exam Portal."
                    </div>

                    <div class="who_ratset">
                      <span class="star_review_main">
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                      </span>
                      Selina, Atlanta{" "}
                      <span class="ConuntryFlagIcon">
                        <img
                          src="/img/jobboard/usa_flag_img.png"
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
                    headerTitle="How candidate can search for online exams ?"
                    collapseId="flush-collapse1"
                  >
                    <p>
                      Candidates can view list of all exams on their Dashboard.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Will admin be able to add test papers ?"
                    collapseId="flush-collapse2"
                  >
                    <p>
                      Admin can manage (add/edit/delete) test papers along with
                      other details.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="What will be the pattern of Online Test ?"
                    collapseId="flush-collapse4"
                  >
                    <p>
                      Candidate will give the online test in the Multiple Choice
                      Question(MCQ) pattern.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Can candidates see Test Result ?"
                    collapseId="flush-collapse5"
                  >
                    <p>
                      Yes, They can see detailed exam result along with all
                      details.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Can candidates receive Certificate after passing Exam ?"
                    collapseId="flush-collapse6"
                  >
                    <p>Yes. Candidates can download Score Certificate Copy.</p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Can Candidates register using any social Accounts ?"
                    collapseId="flush-collapse7"
                  >
                    <p>
                      Yes. We have provided Sign Up/Login using Google and
                      Linkedin.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Can Candidate see correct Answers?"
                    collapseId="flush-collapse8"
                  >
                    <p>
                      Yes, Candidate will be able to view number of correct
                      answers and wrong answers after submitting the test.
                    </p>
                  </MDBAccordionItem>
                  <MDBAccordionItem
                    headerTitle="Can Candidate see their appeared tests?"
                    collapseId="flush-collapse9"
                  >
                    <p>
                      Yes, Candidate can see all the list of exams appeared
                      under Exam History section
                    </p>
                  </MDBAccordionItem>
                  <MDBAccordionItem
                    headerTitle="Can I update some design and functionality in application code myself?"
                    collapseId="flush-collapse10"
                  >
                    <p>
                      Yes, You will have access of the all the code, except some
                      of the core encrypted files.{" "}
                    </p>
                  </MDBAccordionItem>
                  <MDBAccordionItem
                    headerTitle="Will I be able to use it on multiple domains, after I purchase this script?"
                    collapseId="flush-collapse11"
                  >
                    <p>
                      You will be licensed to use it only for the domain, you
                      purchased for.
                    </p>
                  </MDBAccordionItem>
                  <MDBAccordionItem
                    headerTitle="Can I resell the script? Will I have rights over the script code?"
                    collapseId="flush-collapse12"
                  >
                    <p>
                      No, You can't resell the script. All rights will remain
                      with Logicspice only.
                    </p>
                  </MDBAccordionItem>
                  <MDBAccordionItem
                    headerTitle="Do you offer Money Back Guarantee?"
                    collapseId="flush-collapse13"
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
                    collapseId="flush-collapse14"
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
          <h2 class="title_main">Online Exam Software Features</h2>
          <div id="joblboardslide">
            <Slider {...settings}>
              <div class="SliderMainBx">
                <div class="feat-slide-img">
                  <img
                    src="/img/onlineexam/my_account.png"
                    alt="Student Profile"
                  />
                </div>
                <div class="hands-proved">
                  <div class="titleof_scnew">My Dashboard</div>
                  <div class="pro-feat-detai">
                    Students can view all exams list and can apply for it
                  </div>
                </div>
              </div>

              <div class="SliderMainBx">
                <div class="feat-slide-img">
                  <img
                    src="/img/onlineexam/overall_exam.png"
                    alt="overall_exam"
                  />
                </div>
                <div class="hands-proved">
                  <div class="titleof_scnew">View Result</div>
                  <div class="pro-feat-detai">
                    Students can view detailed exam analysis of all appeared
                    tests.
                  </div>
                </div>
              </div>

              <div class="SliderMainBx">
                <div class="feat-slide-img">
                  <img
                    src="/img/onlineexam/online_test.png"
                    alt="Online Exam"
                  />
                </div>
                <div class="hands-proved">
                  <div class="titleof_scnew">Online Exam</div>
                  <div class="pro-feat-detai">
                    Students can start the test after reading instructions.
                    There will be timer for the exam.Students can see total
                    number of questions,attended questions,non attended
                    questions details and can save answers and submit test.
                  </div>
                </div>
              </div>

              <div class="SliderMainBx">
                <div class="feat-slide-img">
                  <img
                    src="/img/onlineexam/exam_histories.png"
                    alt="Online Exam"
                  />
                </div>
                <div class="hands-proved">
                  <div class="titleof_scnew">Exam Histories</div>
                  <div class="pro-feat-detai">
                    Students can see list of all their appeared exams and can
                    view and download score card.
                  </div>
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
                    title="Online Exam Custom App Development"
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
                          <span>Best white label job board software.</span>{" "}
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
                          <span>
                            Readymade Script of video E- Learning Platform like
                            Udemy.
                          </span>
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
