"use client";
import React, { useEffect, useState, useRef } from "react";
import Footer from "@/app/Components/Footer";
import Navbar from "@/app/Components/Navbar";
import "@/app/(softwares)/softwares.css";
import Image from "next/image";
import Link from "next/link";
// import "@fortawesome/fontawesome-free/css/all.css";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Contactusmodel from "@/app/Components/Contactusmodel";
import SoftwareEnquiry from "@/app/Components/SoftwareEnquiry";
import Reviewmodals from "@/app/Components/Reviewmodals";
import Whylogicspice from "@/app/Components/Whylogicspice";
import { Modal, ModalBody } from "react-bootstrap";
import axios from "axios";
import BaseAPI from "@/app/BaseAPI/BaseAPI";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import GetDemoEnquiry from "@/app/Components/GetDemoEnquiry";
// import "../../../../public/css/font-awesome.min.css";
import "../../../../public/css/font-awesome.css";

const Page = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [buyjobportal, setBuyJobportal] = useState(false);
  const [jobportal, setJobportal] = useState(false);
  const toggleBuyJobPortalModal = () => setBuyJobportal(!buyjobportal);

  const toggleJobPortalModal = () => setJobportal(!jobportal);
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
  var companies = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
  };
  const [activeTab, setActiveTab] = useState("tab2");
  const [employerTab, setEmployerTab] = useState(true);
  const [freelancerTab, setFreelancerTab] = useState(false);
  const [adminTab, setAdminTab] = useState(false);
  const [pageData, setPageData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(
        BaseAPI + "/product/Details/freelancer-clone"
      );
      // console.log(response.data.data)
      setPageData(response.data.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  const openReviewModel = () => {
    setShowReviewModal(!showReviewModal);
  };
  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };
  const openModal = () => {
    setShowModal(!showModal);
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const handleEmployerTab = () => {
    setEmployerTab(true);
    setFreelancerTab(false);
    setAdminTab(false);
  };
  const handleFreelancerTab = () => {
    setEmployerTab(false);
    setFreelancerTab(true);
    setAdminTab(false);
  };
  const handleAdminTab = () => {
    setEmployerTab(false);
    setFreelancerTab(false);
    setAdminTab(true);
  };

 

  const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&::before": {
      display: "none",
    },
  }));

  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor: "rgba(0, 0, 0, .03)",
    flexDirection: "row-reverse",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
      transform: "rotate(90deg)",
    },
    "& .MuiAccordionSummary-content": {
      marginLeft: theme.spacing(1),
    },
    // Change the background color when expanded
    "&.Mui-expanded": {
      backgroundColor: "#dbdbdb", // You can adjust this color
    },
  }));

  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: "1px solid rgba(0, 0, 0, .125)",
  }));

  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const opendiv = (tab) => {
    setActiveTab(tab);
  };

  const [demoAccessModal, setDemoAccessModal] = useState(false);
  const openDemoAccessModal = () => {
    // console.log(showModal);

    setDemoAccessModal(!demoAccessModal);
  };

 

  const iframeRef = useRef(null);
  const [player, setPlayer] = useState(null);
  const [isInView, setIsInView] = useState(false);

  // Load and initialize the YouTube Player API
  useEffect(() => {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);

    window.onYouTubeIframeAPIReady = () => {
      const ytPlayer = new YT.Player("ytplayer", {
        events: {
          onReady: (event) => {
            const savedTime =
              parseFloat(localStorage.getItem("lastPlayedTime")) || 0;
            event.target.seekTo(savedTime);
            setPlayer(event.target);
          },
          onStateChange: (event) => {
            if (
              event.data === YT.PlayerState.PLAYING ||
              event.data === YT.PlayerState.PAUSED
            ) {
              const currentTime = event.target.getCurrentTime();
              localStorage.setItem("lastPlayedTime", currentTime);
            }
          },
        },
      });
    };

    return () => {
      document.body.removeChild(tag);
    };
  }, []);

  // Set up IntersectionObserver to handle play/pause based on viewport visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (iframeRef.current) observer.observe(iframeRef.current);

    return () => {
      if (iframeRef.current) observer.unobserve(iframeRef.current);
    };
  }, []);

  // Control playback based on `isInView` and `player` readiness
  useEffect(() => {
    if (player) {
      if (isInView) {
        const savedTime =
          parseFloat(localStorage.getItem("lastPlayedTime")) || 0;
        player.seekTo(savedTime);
        player.playVideo();
      } else {
        player.pauseVideo();
      }
    }
  }, [isInView, player]);
  return (
    <>
      <Navbar />
      <section className="paid-pro job-portal-banner  fiverr-new-banner NewJobSiteDesign JobBoardNewDesign NewCrowdDesigns job-portal-bg freelacer-banner-new">
        <div className="container">
          <div className="row">
            <div className="col-sm-7 col-md-7">
              <h1>Freelancer Clone</h1>
              <div className="both-left-p-sec">
                <h2>
                  Freelance Marketplace software &amp; Upwork clone script
                </h2>
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
                        <Image
                          unoptimized={true}
                          width={100}
                          height={100}
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
                  <div
                    className=" btn-get"
                    onClick={openDemoAccessModal}
                    style={{ textAlign: "center" }}
                  >
                    <button>Get Demo Access!</button>
                    {
//                       <SoftwareEnquiry
//                         modalStatus={showModal}
//                         toggle={openModal}
//                         title="Please fill the form below and get access to the live demo of Freelancer Clone.
// See how it work yourself!"
//                       />

<GetDemoEnquiry
                        modalStatus={demoAccessModal}
                        toggle={openDemoAccessModal}
                        title="Please fill the form below and get access to the live demo of Freelancer Clone. See how it works yourself!"
                      />
                    }
                  </div>
                  <Link
                    className="btn fiverr-buys"
                    href="/buy-now/freelancer-clone"
                  >
                    Buy Now
                  </Link>
                </div>
                <div className="SubscriptionPrice">
                  <div className="line-border NewLineBoader">
                    <Image
                      unoptimized={true}
                      width={100}
                      height={100}
                      alt="crowd_funding_script"
                      src="/img/jobboard/stars.png"
                    />
                    <p>128 Reviews</p>
                  </div>
                </div>
              </div>

              <div className="jocpp">
                <ul className="job-pr-icon jobwidthauto">
                  <li>
                  <i class="fa fa-globe" aria-hidden="true"></i>
                  </li>
                  <li>
                    <i className="fa fa-android"></i>
                  </li>
                  <li>
                    <i className="fa fa-apple"></i>
                  </li>
                </ul>
                <div
                  className="portel-btnbx"
                  style={{ marginLeft: "0", display: "none" }}
                >
                  <a
                    className="btn text-primary jobportal-btn js-anchor-link"
                    style={{ marginLeft: "0", display: "none" }}
                    href="#subscriptionmodel"
                  >
                    <i>
                      {/* <Image unoptimized={true}
                        width={100}
                        height={100}
                        src="https://www.logicspice.com/app/webroot/img/images/product_new/subscription.png"
                        alt="subscription"
                      /> */}
                    </i>
                    Subscription Model
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-5 col-md-5">
              <div className="por-mobile-new">
                {/* <Image
                  unoptimized={true}
                  width={330}
                  height={100 / (100 / 100)}
                  src="/img/freelancerclone/lsfreelancer-banner-img.png"
                  alt="Freelancer_clone"
                /> */}

{/* <Image
          src="/img/freelancerclone/lsfreelancer-banner-img.png" // Use WebP format
          alt="Freelancer Clone"
          width={330}
          height={100} // Maintain proper aspect ratio
          priority={false} // Lazy load for performance
          quality={75} // Adjust quality for balance between size and clarity
          placeholder="blur" // Optional: Blur effect before loading
          blurDataURL="/img/freelancerclone/lsfreelancer-banner-img-small.webp" // Smaller preview image
        /> */}

{/* <Image
  src="/img/freelancerclone/lsfreelancer-banner-img.png" // ✅ Use WebP for better compression
  alt="Freelancer Clone"
  width={330}
  height={100}
  sizes="(max-width: 768px) 100vw, 330px" // ✅ Adaptive for smaller screens
  priority // ✅ Critical for LCP optimization
  fetchPriority="high" // ✅ Browser loads it ASAP
  quality={80} // ✅ Optimized balance for performance
  decoding="async" // ✅ Faster rendering
  loading="eager" // ✅ Ensures immediate loading
  placeholder="blur"
  blurDataURL="/img/freelancerclone/lsfreelancer-banner-img-small.png" // ✅ Use WebP preview
  style={{
   
    objectFit: "cover", // ✅ Ensures proper rendering
  }}

/> */}



<Image
  src="/img/freelancerclone/lsfreelancer-banner-img.png" // ✅ better compression
  alt="Freelancer Clone"
  width={330}
  height={100}
  sizes="(max-width: 768px) 100vw, 330px"
  priority
  fetchPriority="high"
  quality={75} // lower it slightly if using webp/avif
  decoding="async"
  loading="eager"
  placeholder="blur"
  blurDataURL="/img/freelancerclone/lsfreelancer-banner-img-small.png"
  style={{
    objectFit: "cover",
  }}
/>


              </div>
            </div>
          </div>
          <div className="job-portal-banner-link">
            <div aria-label="breadcrumb" className="my-breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="/softwares">Softwares</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Freelancer Clone
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="job-section-top-new JobBoardSectionNew">
        <div className="container">
          <p>
            Take our Freelancer clone application on your smart mobile phones.
            The mobile application will provide all the features of the website.
            Nowadays the freelancing industry is growing rapidly. It&apos;s time
            to take advantage of these changing trends, our freelancer
            marketplace script helps you to launch your own freelancing bidding
            website with all advance modules in less time. Get in touch with
            Logicspice today to get a demo of your app.
          </p>
        </div>
      </section> */}

<section className="job-section-top-new JobBoardSectionNew">
  <div className="container">
    <div style={{ minHeight: "120px" }}> {/* Adjust based on content */}
      <p>
        Take our Freelancer clone application on your smart mobile phones.
        The mobile application will provide all the features of the website.
        Nowadays the freelancing industry is growing rapidly. It&apos;s time
        to take advantage of these changing trends, our freelancer
        marketplace script helps you to launch your own freelancing bidding
        website with all advance modules in less time. Get in touch with
        Logicspice today to get a demo of your app.
      </p>
    </div>
  </div>
</section>

      <section
        className="client-say crowdfunding-say"
        style={{ backgroundColor: "#fff" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6 job-video">
       
              {/* <div ref={iframeRef}>
                <iframe
                  id="ytplayer"
                  width="100%"
                  height="312"
                  src="https://www.youtube.com/embed/MaLzH8m_GqQ?enablejsapi=1&mute=1"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div> */}

<div ref={iframeRef}>
  <iframe
    id="ytplayer"
    width="100%"
    height="312"
    src="https://www.youtube.com/embed/MaLzH8m_GqQ?enablejsapi=1&mute=1"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    loading="lazy"
  ></iframe>
</div>

            </div>
            <div className="col-md-6">
              <div className="service-market-ttd-new">
                <ul className="freelancer_features">
                  <li>
                    Payment gateway: Payment solution is completely integrated
                    with PayPal for the fast, easy and secure transaction.
                  </li>
                  <li>
                    SEO friendly: Freelancer marketplace script contains SEO
                    friendly URL which makes your site easy for search engines
                    and users.
                  </li>
                  <li>
                    Popular social media integration so freelancer and employer
                    can share their profile on a social media website.
                  </li>
                  <li>
                    Freelancer clone script completely supports an unlimited
                    number of categories and subcategories and number of
                    postings.
                  </li>
                  <li>
                    Easily manage all the projects, site and the script fully
                    flexible for customization.
                  </li>
                  <li>
                    Revenue: Our freelance script is specially designed from the
                    revenue point of view: Employee commission, freelancer
                    commission, project listing fees.
                  </li>
                  <li>Responsive website (mobile friendly)</li>
                  <li>White labeled script </li>
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
            <h2 className="taxt_tt_job">Freelance Clone Features</h2>
          </div>
          <div className="tatxt_txt_job text-center">
            Our freelancer clone script application is the right medium for
            freelancer and employers to get in touch with each other. The
            employer can easily create and manage their projects. They can also
            view profile and review of the freelancer. Freelancer can manage
            their profile, bids and able to search projects according to their
            skills. This freelance script provides the user-friendly admin
            panel, support secure payment gateways, dispute forum, secure login
            and more.
          </div>
          <div className="tab_bbx_job">
            <div className="tab_bbx_top_job">
              <ul className="fiverrClone">
                <li
                  id="tab1_li"
                  className={`jobseeker_app_job ddlj ${
                    employerTab ? "active" : ""
                  }`}
                  onClick={() => handleEmployerTab()}
                >
                  <a>Employer</a>
                </li>
                <li
                  id="tab2_li"
                  className={`emplyer_app_job  ddlj ${
                    freelancerTab ? "active" : ""
                  }`}
                  onClick={() => handleFreelancerTab()}
                >
                  <a>Freelancer</a>
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
              {employerTab && (
                <>
                  <div className="costomer_tab rj active" id="tab2">
                    <div className="row">
                      <div className="col-lg-4 col-md-3">
                        <div className="costomer_tab_right">
                          <Image
                            unoptimized={true}
                            width={300}
                            height={100}
                            src="/img/freelancerclone/freelancer_employee.png"
                            alt="Employee"
                          />
                        </div>
                      </div>
                      <div className="col-lg-8 col-md-9">
                        <div className="costomer_tab_left">
                          <ul>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  alt="img"
                                  src="/img/jobboard/secure_login.png"
                                />
                              </i>
                              <span>
                                Secure Login
                                <div className="product-idea">
                                  <p>
                                    Employer can securely login using Facebook,
                                    Gmail or Login Details of the Freelancer
                                    Portal.{" "}
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  alt="img"
                                  src="/img/jobboard/create-project.png"
                                />
                              </i>
                              <span>
                                Create project
                                <div className="product-idea">
                                  <p>
                                    Employer can post project by providing
                                    details; specific country, category, budget,
                                    skills, attachment.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  alt="img"
                                  src="/img/jobboard/view-project.png"
                                />
                              </i>
                              <span>
                                Manage Projects
                                <div className="product-idea">
                                  <p>
                                    Employers can add/edit/delete the projects
                                    which they have posted over the site and
                                    cancel their projects.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  alt="img"
                                  src="/img/jobboard/browse_gig.png"
                                />
                              </i>
                              <span>
                                Receive Bids On Project
                                <div className="product-idea">
                                  <p>
                                    Employers can check the receive bids on
                                    their project and award project to
                                    appropriate worker.{" "}
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  alt="img"
                                  src="/img/jobboard/view-fr-profile.png"
                                />
                              </i>
                              <span>
                                View Freelancer Profile
                                <div className="product-idea">
                                  <p>
                                    Employer can view the Profile of Freelancer
                                    which will show details about the project,
                                    his/her work history, reviews & ratings they
                                    have received in past.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  alt="img"
                                  src="/img/jobboard/refine_search.png"
                                />
                              </i>
                              <span>
                                Search Freelancer
                                <div className="product-idea">
                                  <p>
                                    Employer can browse proposals posted by
                                    Freelancer, will review it & will find out
                                    relevant one.{" "}
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  alt="img"
                                  src="/img/jobboard/manage_messages.png"
                                />
                              </i>
                              <span>
                                Messages (For Employers)
                                <div className="product-idea">
                                  <p>
                                    Employers can send message to workers who
                                    have placed bid on the project for
                                    discussing project with them.{" "}
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  alt="img"
                                  src="/img/jobboard/find-hire-fre.png"
                                />
                              </i>
                              <span>
                                Hire Freelancer & Award project
                                <div className="product-idea">
                                  <p>
                                    Employer can hire the freelancer & can award
                                    the project.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  alt="img"
                                  src="/img/jobboard/manage-notifi.png"
                                />
                              </i>
                              <span>
                                Notifications
                                <div className="product-idea">
                                  <p>
                                    Employer will receive the notification for
                                    the updates which can be
                                    managed(view/delete).
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  alt="img"
                                  src="/img/jobboard/payment_history.png"
                                />
                              </i>
                              <span>
                                Payment History
                                <div className="product-idea">
                                  <p>
                                    Employer can view the Payment History for
                                    all projects
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  alt="img"
                                  src="/img/jobboard/send_mail.png"
                                />
                              </i>
                              <span>
                                Send Invitation
                                <div className="product-idea">
                                  <p>
                                    Employer can view the profile of freelancer
                                    & can individually send an invitation.{" "}
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  alt="img"
                                  src="/img/jobboard/view_testimonial.png"
                                />
                              </i>
                              <span>
                                Review & Rating Module
                                <div className="product-idea">
                                  <p>
                                    Employer can give rating to that worker
                                    after completion of project as per their
                                    performance.
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
              {freelancerTab && (
                <>
                  <div className="costomer_tab rj" id="tab2">
                    <div className="row">
                      <div className="col-lg-4 col-md-3">
                        <div className="costomer_tab_right">
                          <Image
                            unoptimized={true}
                            width={300}
                            height={100}
                            src="/img/freelancerclone/freelancer_login.png"
                            alt="Freelancer"
                          />
                        </div>
                      </div>
                      <div className="col-lg-8 col-md-9">
                        <div className="costomer_tab_left">
                          <ul>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  alt="img"
                                  src="/img/jobboard/manage_user_acc.png"
                                />
                              </i>
                              <span>
                                Manage Profile
                                <div className="product-idea">
                                  <p>
                                    Freelancer can view their profile & can
                                    manage (add/edit/delete) Profile (First
                                    Name, Last name, Address, Email Address,
                                    Paypal Email Address, Profile Picture).{" "}
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  alt="img"
                                  src="/img/jobboard/view-fr-profile.png"
                                />
                              </i>
                              <span>
                                View Employers Profile
                                <div className="product-idea">
                                  <p>
                                    Freelancer can view the employer&apos;s
                                    profile, reviews & ratings received from the
                                    past freelancer, payment-verified or not
                                    etc.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  alt="img"
                                  src="/img/jobboard/transporter_list.png"
                                />
                              </i>
                              <span>
                                Project Listing
                                <div className="product-idea">
                                  <p>
                                    Freelancer can view the list of projects and
                                    details like no. of bids, deadline for bid,
                                    price.{" "}
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  alt="img"
                                  src="/img/jobboard/send_mail.png"
                                />
                              </i>
                              <span>
                                Send a Proposal
                                <div className="product-idea">
                                  <p>
                                    Freelancer can post a proposal for the
                                    project on the Portal by answering the
                                    questions & providing estimation on it.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  alt="img"
                                  src="/img/jobboard/accepet_reject_reque.png"
                                />
                              </i>
                              <span>
                                Accept/Decline Project
                                <div className="product-idea">
                                  <p>
                                    Freelancer can accept or reject the project
                                    if any employer award project to them within
                                    the time period.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  alt="img"
                                  src="/img/jobboard/browse_gig.png"
                                />
                              </i>
                              <span>
                                Browse Projects
                                <div className="product-idea">
                                  <p>
                                    Freelancer can browse projects by applying
                                    filters for category, budget, skills &
                                    keyword. Freelancer can apply to sort while
                                    browsing projects. Freelancer can view the
                                    project description in detail with reviews &
                                    ratings, bids on the project, project
                                    posted, hires, address etc.{" "}
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  alt="img"
                                  src="/img/jobboard/create-bid.png"
                                />
                              </i>
                              <span>
                                Scan & Write Proposal
                                <div className="product-idea">
                                  <p>
                                    Freelancer can scan proposals and mark as
                                    favorite. They can write a proposal for
                                    saved one.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  alt="img"
                                  src="/img/jobboard/manage-bid.png"
                                />
                              </i>
                              <span>
                                Place Bid
                                <div className="product-idea">
                                  <p>
                                    Freelancer can place the bid on the project
                                    by entering estimated budget and time frame.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  alt="img"
                                  src="/img/jobboard/search_project.png"
                                />
                              </i>
                              <span>
                                Search Projects Workers
                                <div className="product-idea">
                                  <p>
                                    Freelancer will be able to search projects
                                    by keyword, skills. They can filter projects
                                    by budget, type.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  alt="img"
                                  src="/img/jobboard/manage-packages.png"
                                />
                              </i>
                              <span>
                                Get Awarded
                                <div className="product-idea">
                                  <p>
                                    Freelancer will get a project through the
                                    portal & can accept the project.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  alt="img"
                                  src="/img/jobboard/view-blogs.png"
                                />
                              </i>
                              <span>
                                Project Detail
                                <div className="product-idea">
                                  <p>
                                    Freelancer can view the complete detail of
                                    the project on site as title, description,
                                    no. of bids.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  alt="img"
                                  src="/img/jobboard/payment_history.png"
                                />
                              </i>
                              <span>
                                Receiving Payment
                                <div className="product-idea">
                                  <p>
                                    Freelancer will request for the payment &
                                    can receive payment as per the milestones.
                                    Freelancer can view all Payment History.
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
                          <Image
                            unoptimized={true}
                            width={300}
                            height={100}
                            src="/img/freelancerclone/freelancer_admin.png"
                            alt="Admin Panel"
                          />
                        </div>
                      </div>
                      <div className="col-lg-8 col-md-9">
                        <div className="costomer_tab_left costomer_tab_leftright2">
                          <ul>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  alt="img"
                                  src="/img/jobboard/secure_login.png"
                                />
                              </i>
                              <span>
                                Secure Login
                                <div className="product-idea">
                                  <p>Admin can login securely on the Portal.</p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  alt="img"
                                  src="/img/jobboard/admin_dash.png"
                                />
                              </i>
                              <span>
                                Admin Dashboard
                                <div className="product-idea">
                                  <p>
                                    Admin can view the Dashboard with the total
                                    number of counts for Category&apos;s,
                                    Workers, Payments, Employers & Projects.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  alt="img"
                                  src="/img/jobboard/view_communica.png"
                                />
                              </i>
                              <span>
                                Communication List
                                <div className="product-idea">
                                  <p>
                                    Admin can view the list of all
                                    Communications done on the Portal & can
                                    open/view the chat in detail.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  alt="img"
                                  src="/img/jobboard/manage_emp.png"
                                />
                              </i>
                              <span>
                                Manage Employers
                                <div className="product-idea">
                                  <p>
                                    Admin can view the list of Employers & can
                                    manage(add/edit/delete) all Employers. Admin
                                    can Activate/ Deactivate Employers.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  alt="img"
                                  src="/img/jobboard/manage_workers.png"
                                />
                              </i>
                              <span>
                                Manage Workers
                                <div className="product-idea">
                                  <p>
                                    Admin can view list of Worker&apos;s & can
                                    manage(add/edit/delete) all Workers. Admin
                                    can Activate/ Deactivate Workers.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  alt="img"
                                  src="/img/jobboard/manage-project.png"
                                />
                              </i>
                              <span>
                                Manage Projects
                                <div className="product-idea">
                                  <p>
                                    Admin can view the list of Project which can
                                    be managed (add/edit/delete). Admin can view
                                    messages for that projects, can
                                    activate/deactivate projects & can edit
                                    gig/milestone of the project.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  alt="img"
                                  src="/img/jobboard/manage-bid.png"
                                />
                              </i>
                              <span>
                                Manage Bids
                                <div className="product-idea">
                                  <p>
                                    Admin can view the list of Bids of the
                                    Projects. Admin can search for bids using
                                    bidder Name, From & To etc.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  alt="img"
                                  src="/img/jobboard/manage_dispute_produ.png"
                                />
                              </i>
                              <span>
                                Manage Dispute
                                <div className="product-idea">
                                  <p>
                                    Admin can view the list of Disputes. Admin
                                    will refund to the winner of dispute
                                    (Employer or Worker).
                                  </p>
                                </div>
                              </span>
                            </li>

                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  alt="img"
                                  src="/img/jobboard/payment_history.png"
                                />
                              </i>
                              <span>
                                View Payments
                                <div className="product-idea">
                                  <p>
                                    Admin can view the list of Payments
                                    transaction is done by Employer to
                                    Freelancer. Admin can delete the payment
                                    history.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  alt="img"
                                  src="/img/jobboard/view_category.png"
                                />
                              </i>
                              <span>
                                Configuration
                                <div className="product-idea">
                                  <p>
                                    Admin can manage(update) Email, Password,
                                    Username, Commission, Contact Information &
                                    Social Links.
                                  </p>
                                </div>
                              </span>
                            </li>

                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  alt="img"
                                  src="/img/jobboard/manage_news.png"
                                />
                              </i>
                              <span>
                                Manage Newsletters
                                <div className="product-idea">
                                  <p>
                                    Admin can view Newsletter & Subscribers
                                    list. Admin can manage(add/edit/delete)
                                    Newsletter, can send Newsletter & view Email
                                    logs.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  alt="img"
                                  src="/img/jobboard/manage-packages.png"
                                />
                              </i>
                              <span>
                                Manage Packs
                                <div className="product-idea">
                                  <p>
                                    Admin can view the list of Packs & can edit
                                    it. Admin can activate/ deactivate packs.
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
              What does our <span>Freelancer clone script</span> offer you ?
            </h2>
            <p align="justify">
              Logicspice offers{" "}
              <strong>
                <i>freelance marketplace script</i>
              </strong>
              , developed to build your own freelance marketplace similar to
              upwork clone, elance clone and more. Freelancer marketplace is the
              revolutionary platform for business interactions where employers
              search for the best talent and freelancer get hired for their best
              skills. This is the medium for freelancer and employers to
              interact with each other.
            </p>
            <p align="justify">
              Our{" "}
              <strong>
                <i>freelancer clone</i>
              </strong>{" "}
              allows the user to post unlimited projects in particular
              categories and subcategories along with required skills and
              project budget
            </p>
            <p align="justify">
              The{" "}
              <strong>
                <i>best freelancer script</i>
              </strong>{" "}
              comes with amazing and innovative features, bidding module,
              project module. It is an cost effective approach if you are
              looking to setup your business with small investment. A freelance
              marketplace software is the easiest and quickest method to let
              your own freelancing website. Our freelance script upwork clone,
              elance clone, is similar to freelancing websites and include most
              of the functionalities.
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
                    Unlimited Project Listings: List as many projects as you
                    need without any limitations.
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
                {pageData.currency_symbol}
                {pageData.price}
                <span className="sml_labl"> {pageData.name}</span>
              </h4>
              <strike className="srik_cls">
                {pageData.currency_symbol}
                {pageData.other_price}
                <span className="sml_labl"> {pageData.name}</span>
              </strike>
              <div className="SubscriptionModelPriceBtn">
                {/* <a
                  className="btn btn-get"
                  data-toggle="modal"
                  data-target="#popup_sc_product_pro_demo"
                  onclick=&apos;if (!window.__cfRLUnblockHandlers) return false; $("#update_frm1").html("Freelancer Clone");$("#update_frm2").html("Freelancer Clone");$("#review_msg").html($(".customer_review_stext").html());$(".client-name").html($("#client-name").html());
                                 $("#contact_fr1").val("Freelancer Clone");&apos;
                >
                  Get Demo Access!
                </a> */}
                <div className="btn btn-get" onClick={openDemoAccessModal}>
                  <button>Get Demo Access!</button>
                  {
//                     <SoftwareEnquiry
//                       modalStatus={showModal}
//                       toggle={openModal}
//                       title="Please fill the form below and get access to the live demo of Groupon Clone Script.
// See how it work yourself!"
//                     />

<GetDemoEnquiry
                        modalStatus={demoAccessModal}
                        toggle={openDemoAccessModal}
                        title="Please fill the form below and get access to the live demo of Freelancer Clone. See how it works yourself!"
                      />
                  }
                </div>
                <Link
                  className="btn fiverr-buys"
                  href="/buy-now/freelancer-clone"
                  id="buy_now_1"
                >
                  Buy Now
                </Link>
              </div>
              <div className="job-valu"></div>
              <div className="jocpp">
                <ul className="job-pr-icon">
                  <li>
                  <i class="fa fa-globe" aria-hidden="true"></i>
                  </li>
                  <li>
                    <i className="fa fa-android"></i>
                  </li>
                  <li>
                    <i className="fa fa-apple"></i>
                  </li>
                </ul>
                <div className="portel-btnbx">
                  <div className="line-border NewLineBoader">
                    <Image
                      unoptimized={true}
                      width={100}
                      height={100}
                      src="/img/jobboard/stars.png"
                      alt=""
                      className="lazy"
                    />
                    <p>128 Reviews</p>
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
              <a onClick={toggleModal}>contact us</a>.
            </p>
          </div>
        </div>
      </section>

      <section className="job_portal_area job_portal_area_food">
        <div className="container">
          <div className="job_or_title">
            <h2 className="taxt_tt_job">
              Logicspice is the best partner for your Fiverr Clone solution!
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
                  <Image
                    unoptimized={true}
                    width={20}
                    height={100}
                    src="/img/images/why-logic-icon.png"
                    alt=""
                    className=""
                  />
                </i>
                <span>Why Logicspice</span>
              </a>
            </div>
          </div>

          {showInfo && (
            <>
              <div className="small_bbx_job_new">
                <div className="row">
                  <div className="col-sm-4 col-md-4">
                    <div className="thumbnail-new thumbnail-bx1">
                      <div className="caption">
                        <div className="best-partner-img-bx">
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            src="/img/jobboard/coding.png"
                            alt="img"
                          />
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
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
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
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            src="/img/jobboard/coordinate.png"
                            alt="img"
                          />
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
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            src="/img/jobboard/customize.png"
                            alt="img"
                          />
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
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
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
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            src="/img/jobboard/data.png"
                            alt="img"
                          />
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
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            src="/img/jobboard/web-icon.png"
                            alt="img"
                          />
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
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            src="/img/jobboard/encrypted.png"
                            alt="img"
                          />
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
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            src="/img/jobboard/history-icon.png"
                            alt="img"
                          />
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
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
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
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
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
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
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
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
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
          )}
        </div>
      </section>

      <div>
        {/* Button to Open Job Portal Modal */}

        {/* Job Portal Modal */}
        <Modal
          show={jobportal}
          onHide={toggleJobPortalModal}
          id="jobportal"
          className="modal-service"
        >
          <Modal.Header className="modal-dialog-service">
            <button
              type="button"
              className="custom-close-button"
              aria-label="Close"
              onClick={toggleJobPortalModal}
            >
              &times;
            </button>
          </Modal.Header>
          <Modal.Body>
            <Image
              unoptimized={true}
              width={900}
              height={100}
              src="/img/freelancerclone/online-freelancer.png"
              alt="icon"
              title=""
              className="img-fluid"
            />
          </Modal.Body>
         
        </Modal>

        <Modal
          show={buyjobportal}
          onHide={toggleBuyJobPortalModal}
          id="buyjobportal"
          className="modal-service"
        >
         <Modal.Header className="modal-dialog-service">
            <button
              type="button"
              className="custom-close-button"
              aria-label="Close"
              onClick={toggleBuyJobPortalModal}
            >
              &times;
            </button>
          </Modal.Header>
          <Modal.Body>
            <div id="jobboardclients" closeButton>
              <Slider {...companies}>
                <div className="SliderMainBx">
                  <div className="site-titles">
                    <Link
                      href="https://gigaminute.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      gigaminute.com
                    </Link>
                  </div>
                  <Link
                    href="https://gigaminute.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      unoptimized={true}
                      width={900}
                      height={100}
                      src="/img/freelancerclone/gigaminute.jpg"
                      alt="icon"
                      title=""
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="SliderMainBx">
                  <div className="site-titles">
                    <a
                      href="https://iworks.sn/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      iworks.com
                    </a>
                  </div>
                  <a
                    href="https://iworks.sn/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      unoptimized={true}
                      width={900}
                      height={100}
                      src="/img/freelancerclone/iworks.jpg"
                      alt="icon"
                      title=""
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="SliderMainBx">
                  <div className="site-titles">
                    <a
                      href="https://ujuzitu.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ujuzitu.com
                    </a>
                  </div>
                  <a
                    href="https://ujuzitu.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      unoptimized={true}
                      width={900}
                      height={100}
                      src="/img/freelancerclone/ujuzitu.jpg"
                      alt="icon"
                      title=""
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="SliderMainBx">
                  <div className="site-titles">
                    <Link
                      href="https://www.xirfad.so/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      xirfad.so
                    </Link>
                  </div>
                  <Link
                    href="https://www.xirfad.so/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      unoptimized={true}
                      width={900}
                      height={100}
                      src="/img/freelancerclone/xirfad.jpg"
                      alt="icon"
                      title=""
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="SliderMainBx">
                  <div className="site-titles">
                    <Link
                      href="https://talent.shineywise.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      talent.shineywise.com
                    </Link>
                  </div>
                  <Link
                    href="https://talent.shineywise.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      unoptimized={true}
                      width={900}
                      height={100}
                      src="/img/freelancerclone/shineywise.jpg"
                      alt="icon"
                      title=""
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="SliderMainBx">
                  <div className="site-titles">
                    <Link
                      href="https://community.mu"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      community.mu
                    </Link>
                  </div>
                  <Link
                    href="https://community.mu"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      unoptimized={true}
                      width={900}
                      height={100}
                      src="/img/freelancerclone/community.jpg"
                      alt="icon"
                      title=""
                      className="img-fluid"
                    />
                  </Link>
                </div>
              </Slider>
            </div>
          </Modal.Body>
          
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
                      <Image
                        unoptimized={true}
                        width={50}
                        height={100}
                        src="/img/jobboard/tech_reactjs_icon.png"
                        alt="ReactJS Development"
                      />
                    </div>
                    <div className="icntechimg_nm">ReactJS</div>
                  </li>
                  <li data-aos="fade-up">
                    <div className="icntechimg">
                      <Image
                        unoptimized={true}
                        width={60}
                        height={100}
                        src="/img/jobboard/LaravelLogo.png"
                        alt="Laravel Development"
                      />
                    </div>
                    <div className="icntechimg_nm">Laravel</div>
                  </li>
                  <li data-aos="fade-up">
                    <div className="icntechimg">
                      <Image
                        unoptimized={true}
                        width={50}
                        height={100}
                        src="/img/jobboard/html-5.png"
                        alt="HTML5 Logo"
                      />
                    </div>
                    <div className="icntechimg_nm">HTML5</div>
                  </li>
                  <li data-aos="fade-up">
                    <div className="icntechimg">
                      <Image
                        unoptimized={true}
                        width={50}
                        height={100}
                        src="/img/jobboard/tech_mysql_icon.png"
                        alt="MySQL Logo"
                      />
                    </div>
                    <div className="icntechimg_nm">MySQL</div>
                  </li>
                  <li data-aos="fade-up">
                    <div className="icntechimg">
                      <Image
                        unoptimized={true}
                        width={50}
                        height={100}
                        src="/img/jobboard/tech_apache_icon.png"
                        alt="Apache Server Logo"
                      />
                    </div>
                    <div className="icntechimg_nm">Apache</div>
                  </li>
                  <li data-aos="fade-up">
                    <div className="icntechimg">
                      <Image
                        unoptimized={true}
                        width={50}
                        height={100}
                        src="/img/jobboard/apple_phn_icon.png"
                        alt="MySQL"
                        className="lazy"
                      />
                    </div>
                    <div className="icntechimg_nm">iOS</div>
                  </li>
                  <li data-aos="fade-up">
                    <div className="icntechimg">
                      <Image
                        unoptimized={true}
                        width={50}
                        height={100}
                        src="/img/jobboard/andoird_icon.png"
                        alt="Apache"
                        className="lazy"
                      />
                    </div>
                    <div className="icntechimg_nm">Android</div>
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
                  <Image
                    unoptimized={true}
                    width={50}
                    height={100}
                    src="/img/jobboard/month_half_icon.png"
                    alt="manager_icn"
                  />
                </div>
                <div className="supportsettingtext">Free Support</div>
              </li>
              <li data-aos="fade">
                <div className="supportsetting_icn">
                  <Image
                    unoptimized={true}
                    width={50}
                    height={100}
                    src="/img/jobboard/free_remove_icon.png"
                    alt="manager_icn"
                  />
                </div>
                <div className="supportsettingtext">Free Brand Removal</div>
              </li>
              <li data-aos="fade">
                <div className="supportsetting_icn">
                  <Image
                    unoptimized={true}
                    width={50}
                    height={100}
                    src="/img/jobboard/free_instal.png"
                    alt="manager_icn"
                  />
                </div>
                <div className="supportsettingtext">Free Installation</div>
              </li>
              <li data-aos="fade">
                <div className="supportsetting_icn">
                  <Image
                    unoptimized={true}
                    width={50}
                    height={100}
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
                        <span>4.9 out of 5 stars</span>
                      </span>
                    </div>
                    {/* <div className="review_rating_fjs">
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
                      <div className="people_star_num">115</div>
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
                          style={{ width: "60%" }}
                        ></div>
                      </div>
                      <div className="people_star_num">13</div>
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
                          style={{ width: "20%" }}
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
                    </div> */}


<div className="review_rating_fjs">
  <div className="star_num">
    5 <i className="fa fa-star" aria-hidden="true"></i>
  </div>
  <div className="progress">
    <div
      className="progress-bar progress-bar-danger progress-bar-striped"
      role="progressbar"
      aria-label="5 star rating progress"
      aria-valuenow="100"
      aria-valuemin="0"
      aria-valuemax="100"
      style={{ width: "100%" }}
    ></div>
  </div>
  <div className="people_star_num">115</div>
</div>

<div className="review_rating_fjs">
  <div className="star_num">
    4 <i className="fa fa-star" aria-hidden="true"></i>
  </div>
  <div className="progress">
    <div
      className="progress-bar progress-bar-danger progress-bar-striped"
      role="progressbar"
      aria-label="4 star rating progress"
      aria-valuenow="60"
      aria-valuemin="0"
      aria-valuemax="100"
      style={{ width: "60%" }}
    ></div>
  </div>
  <div className="people_star_num">13</div>
</div>

<div className="review_rating_fjs">
  <div className="star_num">
    3 <i className="fa fa-star" aria-hidden="true"></i>
  </div>
  <div className="progress">
    <div
      className="progress-bar progress-bar-danger progress-bar-striped"
      role="progressbar"
      aria-label="3 star rating progress"
      aria-valuenow="20"
      aria-valuemin="0"
      aria-valuemax="100"
      style={{ width: "20%" }}
    ></div>
  </div>
  <div className="people_star_num">0</div>
</div>

<div className="review_rating_fjs">
  <div className="star_num">
    2 <i className="fa fa-star" aria-hidden="true"></i>
  </div>
  <div className="progress">
    <div
      className="progress-bar progress-bar-danger progress-bar-striped"
      role="progressbar"
      aria-label="2 star rating progress"
      aria-valuenow="0"
      aria-valuemin="0"
      aria-valuemax="100"
      style={{ width: "0%" }}
    ></div>
  </div>
  <div className="people_star_num">0</div>
</div>

<div className="review_rating_fjs">
  <div className="star_num">
    1 <i className="fa fa-star" aria-hidden="true"></i>
  </div>
  <div className="progress">
    <div
      className="progress-bar progress-bar-danger progress-bar-striped"
      role="progressbar"
      aria-label="1 star rating progress"
      aria-valuenow="0"
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
                    title="PHP Business Directory Script"
                  />
                </div>
                <div className="col-md-12">
                  <div className="customers_review_sec_row">
                    {/*                     <div className="customers_review_sec_row_ra"><div className="starget">5 <i className="fa fa-star" aria-hidden="true"></i></div><span>Build an Online Store</span></div> */}

                    <div className="customer_review_stext">
                      &quot;I have purchased this script and has constructed my
                      own web-site. This was an easy task because of
                      logicspice&apos;s free installation and support. Keep up
                      the good work. I will be back for more in the
                      future.&quot;
                    </div>
                    <div
                      className="who_ratset"
                      style={{ textAlign: "right", paddingRight: "17px" }}
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
                      John, USA{" "}
                      <span>
                        <Image
                          unoptimized={true}
                          width={20}
                          height={100}
                          src="/img/jobboard/usa_flag_img.png"
                          alt="mobile app development in USA"
                        />
                      </span>
                    </div>
                  </div>
                  <div className="customers_review_sec_row">
                    {/*                     <div className="customers_review_sec_row_ra"><div className="starget">5 <i className="fa fa-star" aria-hidden="true"></i></div><span>Build an Online Store</span></div> */}
                    <div className="customer_review_stext" id="fiveer-clone">
                      &quot;This is the best fiverr clone script. Thanks for
                      your great efforts and support while installing the
                      script. Your prompt service regarding a few minor issues
                      was superb.&quot;
                    </div>

                    <div
                      className="who_ratset"
                      style={{ textAlign: "right", paddingRight: "17px" }}
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
                      <span id="client-name">D. Smith, Germany</span>{" "}
                      <span>
                        <Image
                          unoptimized={true}
                          width={20}
                          height={100}
                          src="/img/jobboard/german.png"
                          alt="mobile app development in german"
                        />
                      </span>
                    </div>
                  </div>
                  <div className="customers_review_sec_row">
                    {/*                    <div className="customers_review_sec_row_ra"><div className="starget">5 <i className="fa fa-star" aria-hidden="true"></i></div><span>Build an Online Store</span></div> */}
                    <div className="customer_review_stext">
                      &quot;Recently I bought this script from logicspice and it
                      worked really nice, it helped my business to gain more
                      efficiency. I recommend for all whom looking for a Fiverr
                      Clone script, it&apos;s really nice.&quot;
                    </div>
                    <div
                      className="who_ratset"
                      style={{ textAlign: "right", paddingRight: "17px" }}
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
                      mike wilshon, AUS{" "}
                      <span>
                        <Image
                          unoptimized={true}
                          width={20}
                          height={100}
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
              <h4 className="title_main">FAQ&apos;s</h4>
              <div className="MainFaqBx">
                {/* <MDBAccordion v-model="activeItem" borderless>
                  <MDBAccordionItem
                    headerTitle="Can the Employer give rating to a Worker even if they havent completed the project?"
                    collapseId="flush-collapse1"
                  >
                    <p>
                      No. The Employer and Worker can rate each other only when
                      they have completed the project.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Can Employer contact a Worker if they are interested in taking their services?"
                    collapseId="flush-collapse2"
                  >
                    <p>
                      Yes. Employer can send messages to the Worker but not
                      before the Worker has posted a bid on the project that is
                      uploaded by the Employer.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="How many days will it take to implement the customization?"
                    collapseId="flush-collapse3"
                  >
                    <p>
                      Time taken to implement your Freelancer Custom development
                      depends on the level of customization and data migration.
                      The time frame generally ranges 5-6 weeks.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="How can a worker get hired for a project by the employer?"
                    collapseId="flush-collapse4"
                  >
                    <p>
                      Worker can post a bid along with a proposal on the project
                      of his skills. Employer can review the bid and award the
                      project to the worker whose proposal they like.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Can a Employer upload more than one projects on the website?"
                    collapseId="flush-collapse5"
                  >
                    <p>
                      Can a Employer upload more than one projects on the
                      website?
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="What information does the Worker is required to send while posting a bid on a project?"
                    collapseId="flush-collapse6"
                  >
                    <p>
                      The Worker is required to enter the estimated budget, time
                      frame and a description of his understanding of the
                      project while posting a bid.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Can I update some design and functionality in application code myself?"
                    collapseId="flush-collapse7"
                  >
                    <p>
                      Yes, You will have access of the all the code, except some
                      of the core encrypted files.{" "}
                    </p>
                  </MDBAccordionItem>
                  <MDBAccordionItem
                    headerTitle="Will I be able to use it on multiple domains, after I purchase this script?"
                    collapseId="flush-collapse8"
                  >
                    <p>
                      You will be licensed to use it only for the domain, you
                      purchased for.
                    </p>
                  </MDBAccordionItem>
                  <MDBAccordionItem
                    headerTitle="Can I resell the script? Will I have rights over the script code?"
                    collapseId="flush-collapse9"
                  >
                    <p>
                      No, You can�t resell the script. All rights will remain
                      with Logicspice only.
                    </p>
                  </MDBAccordionItem>
                  <MDBAccordionItem
                    headerTitle="Do you offer Money Back Guarantee?"
                    collapseId="flush-collapse10"
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
                    collapseId="flush-collapse11"
                  >
                    <p>
                      We recommend you purchase SSL certificate along with a
                      hosting server, considering that an SSL certificate is
                      necessary for all the websites these days and it provides
                      a secure layer to the website as well.
                    </p>
                  </MDBAccordionItem>
                </MDBAccordion> */}
                <Accordion
                  expanded={expanded === "panel1"}
                  onChange={handleChange("panel1")}
                >
                  <AccordionSummary
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                  >
                    <Typography>
                      Can the Employer give a rating to a Worker even if they
                      haven&apos;t completed the project?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      No. The Employer and Worker can rate each other only when
                      they have completed the project.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  expanded={expanded === "panel2"}
                  onChange={handleChange("panel2")}
                >
                  <AccordionSummary
                    aria-controls="panel2d-content"
                    id="panel2d-header"
                  >
                    <Typography>
                      Can the Employer contact a Worker if they are interested
                      in taking their services?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Yes. The Employer can send messages to the Worker, but not
                      before the Worker has posted a bid on the project that is
                      uploaded by the Employer.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  expanded={expanded === "panel3"}
                  onChange={handleChange("panel3")}
                >
                  <AccordionSummary
                    aria-controls="panel3d-content"
                    id="panel3d-header"
                  >
                    <Typography>
                      How many days will it take to implement the customization?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      The time taken to implement your Freelancer Custom
                      development depends on the level of customization and data
                      migration. The time frame generally ranges from 5-6 weeks.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  expanded={expanded === "panel4"}
                  onChange={handleChange("panel4")}
                >
                  <AccordionSummary
                    aria-controls="panel4d-content"
                    id="panel4d-header"
                  >
                    <Typography>
                      How can a Worker get hired for a project by the Employer?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      The Worker can post a bid along with a proposal on a
                      project of their skills. The Employer can review the bid
                      and award the project to the Worker whose proposal they
                      prefer.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  expanded={expanded === "panel5"}
                  onChange={handleChange("panel5")}
                >
                  <AccordionSummary
                    aria-controls="panel5d-content"
                    id="panel5d-header"
                  >
                    <Typography>
                      Can an Employer upload more than one project on the
                      website?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Yes, an Employer can upload multiple projects on the
                      website.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  expanded={expanded === "panel6"}
                  onChange={handleChange("panel6")}
                >
                  <AccordionSummary
                    aria-controls="panel6d-content"
                    id="panel6d-header"
                  >
                    <Typography>
                      What information is the Worker required to send while
                      posting a bid on a project?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      The Worker is required to enter the estimated budget, time
                      frame, and a description of their understanding of the
                      project while posting a bid.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  expanded={expanded === "panel7"}
                  onChange={handleChange("panel7")}
                >
                  <AccordionSummary
                    aria-controls="panel7d-content"
                    id="panel7d-header"
                  >
                    <Typography>
                      Can I update some design and functionality in the
                      application code myself?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Yes, you will have access to all the code, except some of
                      the core encrypted files.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  expanded={expanded === "panel8"}
                  onChange={handleChange("panel8")}
                >
                  <AccordionSummary
                    aria-controls="panel8d-content"
                    id="panel8d-header"
                  >
                    <Typography>
                      Will I be able to use it on multiple domains after I
                      purchase this script?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      You will be licensed to use it only for the domain you
                      purchased it for.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  expanded={expanded === "panel9"}
                  onChange={handleChange("panel9")}
                >
                  <AccordionSummary
                    aria-controls="panel9d-content"
                    id="panel9d-header"
                  >
                    <Typography>
                      Can I resell the script? Will I have rights over the
                      script code?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      No, you can&apos;t resell the script. All rights will remain
                      with Logicspice only.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  expanded={expanded === "panel10"}
                  onChange={handleChange("panel10")}
                >
                  <AccordionSummary
                    aria-controls="panel10d-content"
                    id="panel10d-header"
                  >
                    <Typography>
                      Do you offer a Money Back Guarantee?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Yes, we offer a 30-day money-back guarantee to ensure
                      customer satisfaction with our software. If for any reason
                      you wish to discontinue using the product, you can request
                      a refund. We will refund your total money except for the
                      installation and configuration charges, which are USD 65
                      or 20% of the application cost, whichever is greater.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  expanded={expanded === "panel11"}
                  onChange={handleChange("panel11")}
                >
                  <AccordionSummary
                    aria-controls="panel11d-content"
                    id="panel11d-header"
                  >
                    <Typography>
                      Along with hosting server details, what other
                      recommendations?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      We recommend you purchase an SSL certificate along with a
                      hosting server, as an SSL certificate is necessary for all
                      websites these days and provides a secure layer to the
                      website.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="content_area feature_inner" id="features">
        <div className="container">
          <h2 className="title_main">Freelancer Clone Script Features</h2>
          <div id="joblboardslide">
            <Slider {...settings}>
              <div className="SliderMainBx">
                <div className="feat-slide-img">
                  <Image
                    unoptimized={true}
                    width={1075}
                    height={100}
                    src="/img/freelancerclone/freelancer_profile.png"
                    alt="Freelancer profile"
                  />
                </div>
                <div className="hands-proved">
                  <div className="titleof_scnew">Freelancer profile</div>
                  <div className="pro-feat-detai">
                    Get more information about freelancer, skills, hourly rate
                    and hire them.
                  </div>
                </div>
              </div>
              <div className="SliderMainBx">
                <div className="feat-slide-img">
                  <Image
                    unoptimized={true}
                    width={1075}
                    height={100}
                    src="/img/freelancerclone/find_freelancer .png"
                    alt="Search freelancer"
                  />
                </div>
                <div className="hands-proved">
                  <div className="titleof_scnew">Search freelancer</div>
                  <div className="pro-feat-detai">
                    Search freelancer by category, keyword, hourly rate and
                    skills.
                  </div>
                </div>
              </div>
              <div className="SliderMainBx">
                <div className="feat-slide-img">
                  <Image
                    unoptimized={true}
                    width={1075}
                    height={100}
                    src="/img/freelancerclone/bid_over_projects.png"
                    alt="Bid over projects"
                  />
                </div>
                <div className="hands-proved">
                  <div className="titleof_scnew">Bid over projects</div>
                  <div className="pro-feat-detai">
                    Freelancer can bid on the project by giving the budget,
                    duration and additional information.
                  </div>
                </div>
              </div>
              <div className="SliderMainBx">
                <div className="feat-slide-img">
                  <Image
                    unoptimized={true}
                    width={1075}
                    height={100}
                    src="/img/freelancerclone/project_listing.png"
                    alt="Project listing"
                  />
                </div>
                <div className="hands-proved">
                  <div className="titleof_scnew">Project listing</div>
                  <div className="pro-feat-detai">
                    Search projects by keyword, category, budget.
                  </div>
                </div>
              </div>
              <div className="SliderMainBx">
                <div className="feat-slide-img">
                  <Image
                    unoptimized={true}
                    width={1075}
                    height={100}
                    src="/img/freelancerclone/project_details.png"
                    alt="Project Details"
                  />
                </div>
                <div className="hands-proved">
                  <div className="titleof_scnew">Project Details</div>
                  <div className="pro-feat-detai">
                    Know more details about project, description, and bid on the
                    relevant project.
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
                  <SoftwareEnquiry
                    modalStatus={showModal}
                    toggle={openModal}
                    title="Freelancer Clone"
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
                    href="/fiverr-clone"
                  >
                    <div className="caption">
                      <div className="other-caption-bx">
                        <h3>Fiverr clone</h3>

                        <div className="other-project-logo">
                          <Image
                            unoptimized={true}
                            width={150}
                            height={100}
                            src="/img/jobboard/gigger_logo_new.png"
                            alt="fiverr-clone"
                            className=""
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
                    title="View Detail"
                    target="_black"
                    href="/logistic-marketplace-software"
                  >
                    <div className="caption">
                      <div className="other-caption-bx">
                        <h3>Uship clone</h3>

                        <div className="other-project-logo">
                          <Image
                            unoptimized={true}
                            width={250}
                            height={100}
                            src="/img/jobboard/logictic_logo_new.png"
                            alt="logistic-marketplace-software"
                            className=""
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
              <div className="col-sm-6 col-md-4">
                <div className="thumbnail">
                  <Link
                    title="View Detail"
                    target="_black"
                    href="/job-board-software"
                  >
                    <div className="caption">
                      <div className="other-caption-bx">
                        <h3>Job Board Software</h3>

                        <div className="other-project-logo">
                          <Image
                            unoptimized={true}
                            width={250}
                            height={100}
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
              unoptimized={true}
              width={50}
              height={50}
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

export default Page;
