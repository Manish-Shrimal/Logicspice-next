"use client";
import React, { useState, useEffect } from 'react';
import Footer from "@/app/Components/Footer";
import NavBar from "@/app/Components/Navbar";
import "@/app/softwares/softwares.css";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import Image from "next/image";
import Link from "next/link";
import "@fortawesome/fontawesome-free/css/all.css";
import Contactusmodel from "@/app/Components/Contactusmodel";
import Enquirymodal from "@/app/Components/Enquirymodal";
import Reviewmodals from "@/app/Components/Reviewmodals";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { IconButton } from "@mui/material";

const Page = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  const openModal = () => {
    setShowModal(!showModal);
  };

  const openReviewModel = () => {
    setShowReviewModal(!showReviewModal);
  };

  const [activeTab, setActiveTab] = useState("tab1");
  const [userfeaturesTab, setUserFeaturesTab] = useState(true);
  const [adminTab, setAdminTab] = useState(false);

  const handleUserFeaturesTab = () => {
    setUserFeaturesTab(true);
    setAdminTab(false);
  };

  const handleAdminTab = () => {
    setUserFeaturesTab(false);
    setAdminTab(true);
  };

  const opendiv = (tab) => {
    setActiveTab(tab);
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
      // transform: "rotate(90deg)",
    },
    "& .MuiAccordionSummary-content": {
      marginLeft: theme.spacing(1),
    },
    ...theme.applyStyles("dark", {
      backgroundColor: "rgba(255, 255, 255, .05)",
    }),
  }));

  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: "1px solid rgba(0, 0, 0, .125)",
  }));

  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) { // Adjust this value based on when you want the navbar to appear
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <NavBar />
      <section className="product_middle_menu_box">
      {isScrolled && (
        <section className="product_middle_menu top-fixed">
          <div className="container">
            <nav className="navbar navbar-default">
              <div className="container-fluid">
                <div className="navbar-header">
                  <button
                    type="button"
                    className="navbar-toggle collapsed"
                    data-toggle="collapse"
                    data-target="#bs-example-navbar-collapse-2"
                    aria-expanded="false"
                  >
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                </div>
                <div
                  className="collapse navbar-collapse"
                  id="bs-example-navbar-collapse-2"
                >
                  <ul className="nav navbar-nav">
                    <li><a href="#features">Features</a></li>
                    <li><a href="#technologies">Technologies</a></li>
                    <li><a href="#reviews">Reviews</a></li>
                    <li><a href="#faq">FAQ</a></li>
                  </ul>
                  <ul className="nav navbar-nav navbar-right">
                    <li>
                      {/* <a className="page-scroll btn btn-default" href="javascript:void(0);" data-toggle="modal" data-target="#popup_sc_product" onclick="if (!window.__cfRLUnblockHandlers) return false; $(&quot;#update_frm&quot;).html(&quot;FAQ Script&quot;); $(&quot;#contact_fr&quot;).val(&quot;FAQ Script&quot;);" id="buy_now_1">
                            <span><img src="https://www.logicspice.com/app/webroot/img/images/enquiry_btn_bg.png" alt="Enquiry"></span> Enquire Now
                        </a> */}
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </section>
      )}
    </section>
      <section className="FaqBannerSection">
        <div className="FaqBannerLeftImg">
          <Image
            unoptimized={true}
            src="/img/faqscript/faqbanner-leftimg.png"
            alt="icon"
            width={35}
            height={100}
          />
        </div>
        <div className="FaqBannerRightImg">
          <Image
            unoptimized={true}
            src="/img/faqscript/faqbanner-rightimg.png"
            alt="icon"
            width={100}
            height={100}
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-7 col-md-7">
              <div className="FaqBannerTxt">
                <h1>
                  LS Asker / FAQ <span>Script</span>
                </h1>
                <h2>
                  Solve Commonly Asked Questions of Your{" "}
                  <strong style={{ color: "#fe8620" }}>
                    {" "}
                    Website Visitors &amp; Clients
                  </strong>{" "}
                  by Adding FAQ Section In Your{" "}
                  <strong>Software Application.</strong>
                </h2>

                <div className="btn btn-primary" onClick={openModal}>
                  <button>Get Demo Access!</button>
                  {
                    <Enquirymodal
                      modalStatus={showModal}
                      toggle={openModal}
                      title="FAQ Script"
                    />
                  }
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-5 col-md-5">
              <div className="FaqBannerImgTop">
                <Image
                  unoptimized={true}
                  src="/img/faqscript/faqbannerimg.png"
                  width={300}
                  height={500 / (100 / 100)}
                  alt="banner"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="FaqScriptDescriptio aos-init aos-animate"
        data-aos="fade-up"
      >
        <div className="container">
          We provide the <strong>Best FAQ Software</strong> which allows you to
          set up your own FAQ&apos;s on your web application by providing an
          interface to manage your FAQ&apos;s in an easy way. Our web FAQ script
          installation is a one step simple process to create new FAQ&apos;s or
          user suggested FAQ&apos;S also welcomed and that can be also displayed
          on the script. You can integrate our FAQ software in your website to
          get hassle from common questions asked by your clients.
        </div>
      </section>
      <section className="FaqLatestFeaturesSection" id="features">
        <div className="container">
          <h2 className="FaqTopHadding aos-init aos-animate" data-aos="fade-up">
            Latest Features
          </h2>

          <div className="FaqLatestFeaturesTop">
            <div className="row">
              <div
                className="col-xs-12 col-sm-4 col-md-4 aos-init aos-animate"
                data-aos="fade-up"
              >
                <div className="FaqLatestFeatures">
                  <i>
                    <Image
                      unoptimized={true}
                      className="FeaturesIcon"
                      src="/img/faqscript/faq-Features-icon1.png"
                      alt="FAQ Script"
                      width={50}
                      height={100}
                    />
                    <Image
                      unoptimized={true}
                      className="FeaturesIconHover"
                      src="/img/faqscript/faq-Features-icon1hover.png"
                      alt="FAQ Script"
                      width={50}
                      height={100}
                    />
                  </i>
                  <div className="FaqLatestFeaturesRight">
                    <h3>CK Editor</h3>
                    <p>
                      WYSIWYG rich text editor which enables add text, images
                      and text formatting.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-xs-12 col-sm-4 col-md-4 aos-init aos-animate"
                data-aos="fade-up"
              >
                <div className="FaqLatestFeatures">
                  <i>
                    <Image
                      unoptimized={true}
                      className="FeaturesIcon"
                      src="/img/faqscript/faq-Features-icon2.png"
                      alt="FAQ Script"
                      width={50}
                      height={100}
                    />
                    <Image
                      unoptimized={true}
                      className="FeaturesIconHover"
                      src="/img/faqscript/faq-Features-icon2hover.png"
                      alt="FAQ Script"
                      width={50}
                      height={100}
                    />
                  </i>
                  <div className="FaqLatestFeaturesRight">
                    <h3>Responsive</h3>
                    <p>
                      FAQ script is compatible with any screen, tablet or mobile
                      device.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-xs-12 col-sm-4 col-md-4 aos-init aos-animate"
                data-aos="fade-up"
              >
                <div className="FaqLatestFeatures">
                  <i>
                    <Image
                      unoptimized={true}
                      className="FeaturesIcon"
                      src="/img/faqscript/faq-Features-icon3.png"
                      alt="FAQ Script"
                      width={50}
                      height={100}
                    />
                    <Image
                      unoptimized={true}
                      className="FeaturesIconHover"
                      src="/img/faqscript/faq-Features-icon3hover.png"
                      alt="FAQ Script"
                      width={50}
                      height={100}
                    />
                  </i>
                  <div className="FaqLatestFeaturesRight">
                    <h3>Email Notification</h3>
                    <p>
                      Subscribed users receive an email notification whenever a
                      new FAQ is added by admin.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-xs-12 col-sm-4 col-md-4 aos-init aos-animate"
                data-aos="fade-up"
              >
                <div className="FaqLatestFeatures">
                  <i>
                    <Image
                      unoptimized={true}
                      className="FeaturesIcon"
                      src="/img/faqscript/faq-Features-icon4.png"
                      alt="FAQ Script"
                      width={50}
                      height={100}
                    />
                    <Image
                      unoptimized={true}
                      className="FeaturesIconHover"
                      src="/img/faqscript/faq-Features-icon4hover.png"
                      alt="FAQ Script"
                      width={50}
                      height={100}
                    />
                  </i>
                  <div className="FaqLatestFeaturesRight">
                    <h3>FAQ Requests Welcomed</h3>
                    <p>
                      User requested FAQ&apos;s are welcomed, and after admin
                      approval that will be displayed over the front end.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-xs-12 col-sm-4 col-md-4 aos-init aos-animate"
                data-aos="fade-up"
              >
                <div className="FaqLatestFeatures">
                  <i>
                    <Image
                      unoptimized={true}
                      className="FeaturesIcon"
                      src="/img/faqscript/faq-Features-icon5.png"
                      alt="FAQ Script"
                      width={50}
                      height={100}
                    />
                    <Image
                      unoptimized={true}
                      className="FeaturesIconHover"
                      src="/img/faqscript/faq-Features-icon5hover.png"
                      alt="FAQ Script"
                      width={50}
                      height={100}
                    />
                  </i>
                  <div className="FaqLatestFeaturesRight">
                    <h3>Subscribe for FAQ&apos;s</h3>
                    <p>User are able to Subscribe for the FAQ&apos;s</p>
                  </div>
                </div>
              </div>
              <div
                className="col-xs-12 col-sm-4 col-md-4 aos-init aos-animate"
                data-aos="fade-up"
              >
                <div className="FaqLatestFeatures">
                  <i>
                    <Image
                      unoptimized={true}
                      className="FeaturesIcon"
                      src="/img/faqscript/faq-Features-icon6.png"
                      alt="FAQ Script"
                      width={50}
                      height={100}
                    />
                    <Image
                      unoptimized={true}
                      className="FeaturesIconHover"
                      src="/img/faqscript/faq-Features-icon6hover.png"
                      alt="FAQ Script"
                      width={50}
                      height={100}
                    />
                  </i>
                  <div className="FaqLatestFeaturesRight">
                    <h3>FAQ Categories</h3>
                    <p>Admin is able to manage FAQ categories.</p>
                  </div>
                </div>
              </div>
              <div
                className="col-xs-12 col-sm-4 col-md-4 aos-init aos-animate"
                data-aos="fade-up"
              >
                <div className="FaqLatestFeatures">
                  <i>
                    <Image
                      unoptimized={true}
                      className="FeaturesIcon"
                      src="/img/faqscript/faq-Features-icon7.png"
                      alt="FAQ Script"
                      width={50}
                      height={100}
                    />
                    <Image
                      unoptimized={true}
                      className="FeaturesIconHover"
                      src="/img/faqscript/faq-Features-icon7hover.png"
                      alt="FAQ Script"
                      width={50}
                      height={100}
                    />
                  </i>
                  <div className="FaqLatestFeaturesRight">
                    <h3>Laravel Framework 10.1.5</h3>
                    <p>
                      We have updated the FAQ script framework to the latest
                      one.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="col-xs-12 col-sm-4 col-md-4 aos-init aos-animate"
                data-aos="fade-up"
              >
                <div className="FaqLatestFeatures">
                  <i>
                    <Image
                      unoptimized={true}
                      className="FeaturesIcon"
                      src="/img/faqscript/faq-Features-icon9.png"
                      alt="FAQ Script"
                      width={50}
                      height={100}
                    />
                    <Image
                      unoptimized={true}
                      className="FeaturesIconHover"
                      src="/img/faqscript/faq-Features-icon9hover.png"
                      alt="FAQ Script"
                      width={50}
                      height={100}
                    />
                  </i>
                  <div className="FaqLatestFeaturesRight">
                    <h3>Social Media Sharing</h3>
                    <p>
                      Users are able to share the FAQs through different social
                      media.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-xs-12 col-sm-4 col-md-4 aos-init aos-animate"
                data-aos="fade-up"
              >
                <div className="FaqLatestFeatures">
                  <i>
                    <Image
                      unoptimized={true}
                      className="FeaturesIcon"
                      src="/img/faqscript/faq-Features-icon8.png"
                      alt="FAQ Script"
                      width={50}
                      height={100}
                    />
                    <Image
                      unoptimized={true}
                      className="FeaturesIconHover"
                      src="/img/faqscript/faq-Features-icon8hover.png"
                      alt="FAQ Script"
                      width={50}
                      height={100}
                    />
                  </i>
                  <div className="FaqLatestFeaturesRight">
                    <h3>Easy one step Installation</h3>
                    <p>
                      {" "}
                      Install the script directly in a single step with no
                      programming skills required.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="FaqScriptFeaturesSection aos-init aos-animate"
        data-aos="fade-up"
      >
        <h2 className="FaqTopHadding">LS Asker Features</h2>
        <p className="FaqLatestFeaturesDescrip">
          Using our FAQ Script, you will be able to create your own FAQ site
          within minutes. This script is fully responsive and is compatible with
          any screen with web, tablet and mobile view.
        </p>
        <div className="FaqScriptFeaturesTop">
          <div className="container">
            <ul className="FaqNavTabs">
              <li
                id="tab1_li"
                className={` ${userfeaturesTab ? "active" : ""}`}
                onClick={() => handleUserFeaturesTab()}
              >
                <a>
                  <i>
                    <Image
                      unoptimized={true}
                      className=""
                      src="/img/faqscript/FaqUserIcon.png"
                      alt="FAQ Script"
                      width={200}
                      height={100}
                    />
                  </i>
                  <span>User Features</span>
                </a>
              </li>

              <li
                id="tab3_li"
                className={` ${adminTab ? "active" : ""}`}
                onClick={() => handleAdminTab()}
              >
                <a>
                  <i>
                    <Image
                      unoptimized={true}
                      className="FeaturesIcon"
                      src="/img/faqscript/FaqAdminIcon.png"
                      alt="FAQ Script"
                      width={200}
                      height={100}
                    />
                  </i>
                  <span>Admin Features</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="tab-content">
            {userfeaturesTab && (
              <>
                <div className="costomer_tab active" id="tab1">
                  <div className="UserFeaturesBx">
                    <div className="container">
                      <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-5">
                          <div className="FaqUserImg">
                            <Image
                              unoptimized={true}
                              className="FeaturesIcon"
                              src="/img/faqscript/FaqUserimg.jpg"
                              alt="FAQ Script"
                              width={100}
                              height={100}
                            />
                          </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-7">
                          <div className="FaqScriptFeaturesMainBx">
                            <div className="FaqScriptFeaturesMain">
                              <div className="row">
                                <div className="col-xs-12 col-sm-6 col-md-6">
                                  <div className="FaqScriptFeaturesBx">
                                    <h3>FAQ Listing</h3>
                                    <p>
                                      Users will be able to view the FAQ&apos;s
                                      added by the admin.
                                    </p>
                                  </div>
                                </div>
                                <div className="col-xs-12 col-sm-6 col-md-6">
                                  <div className="FaqScriptFeaturesBx FaqScriptFeaturesBxRight">
                                    <h3>Request FAQ</h3>
                                    <p>
                                      Users are able to suggest FAQ&apos;s which
                                      they want should be present in the script.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="FaqScriptFeaturesMain">
                              <div className="row">
                                <div className="col-xs-12 col-sm-6 col-md-6">
                                  <div className="FaqScriptFeaturesBx">
                                    <h3>FAQ Category Listing</h3>
                                    <p>
                                      Users will be able to view Category wise
                                      FAQ.
                                    </p>
                                  </div>
                                </div>
                                <div className="col-xs-12 col-sm-6 col-md-6">
                                  <div className="FaqScriptFeaturesBx FaqScriptFeaturesBxRight">
                                    <h3>Send Enquiry</h3>
                                    <p>
                                      Users are able to send enquiry to the
                                      <br /> admin.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="FaqScriptFeaturesMain FaqScriptFeaturesMainLast">
                              <div className="row">
                                <div className="col-xs-12 col-sm-6 col-md-6">
                                  <div className="FaqScriptFeaturesBx">
                                    <h3>FAQ Subscriber</h3>
                                    <p>
                                      Users can subscribe to receive FAQ email
                                      notifications for the newly added
                                      FAQ&apos;s.
                                    </p>
                                  </div>
                                </div>
                                <div className="col-xs-12 col-sm-6 col-md-6 FaqScriptFeaturesBxRight">
                                  <div className="FaqScriptFeaturesBx">
                                    <h3>Share FAQ</h3>
                                    <p>
                                      Users are also able to <br />
                                      share FAQ&apos;s.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
            {adminTab && (
              <>
                <div className="costomer_tab" id="tab3">
                  <div className="AdminFeaturesBx">
                    <div className="container">
                      <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-7">
                          <div className="FaqScriptFeaturesMainBx FaqScriptFeaturesMainAdmin">
                            <div className="FaqScriptFeaturesMain">
                              <div className="row">
                                <div className="col-xs-12 col-sm-6 col-md-6">
                                  <div className="FaqScriptFeaturesBx">
                                    <h3>Manage Configuration</h3>
                                    <p>
                                      Admin can update Username, Password,
                                      Email, Contact Us Address, Logo, Favicon,
                                      etc
                                    </p>
                                  </div>
                                </div>
                                <div className="col-xs-12 col-sm-6 col-md-6">
                                  <div className="FaqScriptFeaturesBx FaqScriptFeaturesBxRight">
                                    <h3>Manage Categories</h3>
                                    <p>
                                      Admin can view list of categories & can
                                      manage(view/add/edit/delete) ca. Admin can
                                      activate/ deactivate Categories.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="FaqScriptFeaturesMain">
                              <div className="row">
                                <div className="col-xs-12 col-sm-6 col-md-6">
                                  <div className="FaqScriptFeaturesBx">
                                    <h3>Search & Filter</h3>
                                    <p>
                                      Admin is able to search FAQ&apos;s,
                                      Enquiries, Subscribers etc.
                                    </p>
                                  </div>
                                </div>
                                <div className="col-xs-12 col-sm-6 col-md-6">
                                  <div className="FaqScriptFeaturesBx FaqScriptFeaturesBxRight">
                                    <h3>Manage FAQ&apos;s</h3>
                                    <p>
                                      Admin can view the list of added
                                      FAQ&apos;s and can
                                      manage(view/edit/delete) the FAQ&apos;s.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="FaqScriptFeaturesMain ">
                              <div className="row">
                                <div className="col-xs-12 col-sm-6 col-md-6">
                                  <div className="FaqScriptFeaturesBx">
                                    <h3>Manage Enquiries</h3>
                                    <p>
                                      Admin is able to view and delete the
                                      enquiries sent by users.
                                    </p>
                                  </div>
                                </div>
                                <div className="col-xs-12 col-sm-6 col-md-6">
                                  <div className="FaqScriptFeaturesBx FaqScriptFeaturesBxRight">
                                    <h3>Manage Subscribers</h3>
                                    <p>
                                      Admin is able to view Subscribers list who
                                      are subscribed for the FAQ&apos;s email
                                      notifications.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="FaqScriptFeaturesMain ">
                              <div className="row">
                                <div className="col-xs-12 col-sm-6 col-md-6">
                                  <div className="FaqScriptFeaturesBx">
                                    <h3>Manage User Requested FAQ&apos;s</h3>
                                    <p>
                                      Admin is able to view the User Requested
                                      FAQ&apos;s and also able to activate,
                                      deactivate, delete, edit it. The activated
                                      FAQ&apos;s will be displayed over the
                                      frontend.
                                    </p>
                                  </div>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-6">
                                  <div className="FaqScriptFeaturesBx FaqScriptFeaturesBxRight">
                                    <h3>
                                      Activate/Deactivate for Category, FAQ
                                      Listing
                                    </h3>
                                    <p>
                                      Admin is able to activate and deactivate
                                      the Categories, FAQ&apos;s added by admin,
                                      User Requested FAQ&apos;s etc
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="FaqScriptFeaturesMain FaqScriptFeaturesMainLast">
                              <div className="row">
                                <div className="col-xs-12 col-sm-6 col-md-6">
                                  <div className="FaqScriptFeaturesBx">
                                    <h3>Secure Login</h3>
                                    <p>
                                      Admin can login securely in the FAQ
                                      script.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-5">
                          <div className="FaqUserImg">
                            <Image
                              unoptimized={true}
                              className="FeaturesIcon FeaturesImgDesktop"
                              src="/img/faqscript/FaqAdminimg.jpg"
                              alt="FAQ Script"
                              width={100}
                              height={100}
                            />
                            <Image
                              unoptimized={true}
                              className="FeaturesImgmobile"
                              src="/img/faqscript/FaqAdminImgMobile.jpg"
                              alt="FAQ Script"
                              width={100}
                              height={100}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      <section
        className="FaqScriptOfferSection aos-init aos-animate"
        data-aos="fade-up"
      >
        <div className="container">
          <h2 className="FaqTopHadding">What does our FAQ Script offer you?</h2>
          <div className="FaqScriptOffer">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-6">
                <div className="FaqScriptOfferBx">
                  <ul>
                    <li>
                      LS Asker is a knowledge base script and you can use it as
                      a Frequently Asked Questions in your website. You can
                      easily integrate our
                      <strong>FAQ Builder</strong> in your website to get hassle
                      from the commonly asked questions by your clients.
                    </li>
                    <li>
                      Logicspice offers one of the top FAQ script, helping you
                      to have an extensive FAQ section on your website.
                    </li>
                    <li>
                      It has a robust admin panel to Manage FAQ&apos;s,
                      Categories, User Requested FAQ&apos;s, FAQ Subscribers
                      through a single dashboard. There isn&apos;t any limit for
                      creating Categories, FAQs etc. In our script we have given
                      the features of Subscribe for FAQ&apos;s so the subscriber
                      will receive an email notification whenever any new FAQ is
                      added by admin. We also have given the FAQ sharing feature
                      and have allowed users to submit their requested
                      FAQ&apos;s. And if the admin thinks that the user
                      requested the FAQ is genuine they can add that in the FAQ
                      listing and that will be displayed over the front end.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6">
                <div className="FaqScriptOfferBx FaqScriptOfferBxRight">
                  <ul>
                    <li>
                      Our FAQ script has a ckeditor that can support to add text{" "}
                      <br />
                      and images.
                    </li>
                    <li>
                      Anyone can deploy this ready to use FAQ script with any
                      web app and can also customize according to their need.
                    </li>
                    <li>
                      Free licenses also function the same way, however it has
                      some limitations to update the code.
                    </li>
                    <li>
                      Those users who want to integrate our FAQ script in their
                      web application, then they can have a live demo of our
                      ready-made FAQ script.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="FaqScriptUpdateSection">
        <div className="container">
          <h2 className="FaqTopHadding aos-init aos-animate" data-aos="fade-up">
            Script Update History
          </h2>
          <div className="FaqScriptUpdate">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-6">
                <div
                  className="FaqScriptUpdateBx FaqScriptUpdateBxTop aos-init aos-animate"
                  data-aos="fade-up"
                >
                  <h3>
                    V1.1 - April 26th, 2023 - New Features Added and Minor
                    Improvements!
                  </h3>
                  <ul>
                    <li>Share FAQ Feature</li>
                    <li>Subscribe FAQ Feature</li>
                    <li>Enquiry Feature</li>
                    <li>User Requested FAQ Feature</li>
                    <li>Site Settings</li>
                    <li>Updated the Framework</li>
                  </ul>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6">
                <div
                  className="FaqScriptUpdateBx aos-init aos-animate"
                  data-aos="fade-up"
                >
                  <h3>
                    V1.0 - July 10th, 2020 - New Features Added and Minor
                    Improvements!
                  </h3>
                  <ul>
                    <li>Category addition for FAQ&apos;s</li>
                    <li>Made it Responsive</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="used_technology_section FaqUsedTechnologiesSection"
        id="technologies"
      >
        <div className="container">
          <h2 className="FaqTopHadding">
            Used Technologies and Server Requirements
          </h2>
          <div className="used_technology_section_dataa">
            <div className="row">
              <div className="col-sm-6">
                <ul>
                  <li data-aos="fade-up" className="aos-init aos-animate">
                    <div className="icntechimg">
                      <Image
                        unoptimized={true}
                        src="/img/jobboard/LaravelLogo.png"
                        alt="Laravel Development"
                        width={60}
                        height={100}
                      />
                    </div>
                    <div className="icntechimg_nm">Laravel</div>
                  </li>
                  <li data-aos="fade-up" className="aos-init aos-animate">
                    <div className="icntechimg">
                      <Image
                        unoptimized={true}
                        src="/img/jobboard/html-5.png"
                        alt="HTML5"
                        width={50}
                        height={100}
                      />
                    </div>
                    <div className="icntechimg_nm">HTML5</div>
                  </li>
                  <li data-aos="fade-up" className="aos-init aos-animate">
                    <div className="icntechimg">
                      <Image
                        unoptimized={true}
                        src="/img/jobboard/tech_mysql_icon.png"
                        alt="MySQL"
                        width={60}
                        height={100}
                      />
                    </div>
                    <div className="icntechimg_nm">MySQL</div>
                  </li>
                  <li data-aos="fade-up" className="aos-init aos-animate">
                    <div className="icntechimg">
                      <Image
                        unoptimized={true}
                        src="/img/jobboard/tech_apache_icon.png"
                        alt="Apache"
                        width={60}
                        height={100}
                      />
                    </div>
                    <div className="icntechimg_nm">Apache</div>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6">
                <ul className="list_detail">
                  <li className="same aos-init aos-animate" data-aos="fade-up">
                    <b>Browsers - </b> IE 10+, Firefox 110.0+, Chrome 110.0+,
                    Opera 90.0+, Safari 16+
                  </li>
                  <li className="same aos-init aos-animate" data-aos="fade-up">
                    <b>Framework - </b> Laravel 10.1.5, Angular 15.2.4
                  </li>
                  <li className="same aos-init aos-animate" data-aos="fade-up">
                    <b>Language - </b> PHP 8 Supported, jQuery, TypeScript
                  </li>
                  <li className="other aos-init aos-animate" data-aos="fade-up">
                    <b>Design - </b> HTML 5, CSS 3, Bootstrap 5.2.3, JavaScript
                  </li>
                  <li className="other aos-init aos-animate" data-aos="fade-up">
                    <b>Database - </b> MySQL 8.0.32
                  </li>
                  <li className="other aos-init aos-animate" data-aos="fade-up">
                    <b>Server - </b> Apache 2.4+
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="ecommerce_review_section aos-init aos-animate"
        id="reviews"
        data-aos="fade-up"
      >
        <div className="ecommerce_review__img">
          <Image
            unoptimized={true}
            src="/img/marketplacesoftware/faq-review-img.png"
            alt="Laravel Development"
            width={500}
            height={500 / (100 / 100)}
          />
        </div>
        <div className="container">
          <h2>Customer Reviews</h2>
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <div className="ecommerce--review ecommerce--review--faq">
                <div className="customers_review_sec_row">
                  <div className="customer_review_stext">
                    I have taken this script and have integrated that with my
                    own website. This was an easy task because of
                    logicspice&apos;s free installation and support. Keep up the
                    good work.{" "}
                  </div>
                  <div className="who_ratset">
                    <span
                      className="star_review_main"
                      style={{ paddingRight: "10px", Color: "#451095" }}
                    >
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </span>
                    Marcus Cruz, Canada
                    <span>
                      <Image
                        unoptimized={true}
                        src="/img/jobboard/canada-flag.png"
                        alt="Laravel Development"
                        style={{ width: "27px", marginLeft: "3px" }}
                        width={27}
                        height={100}
                      />
                    </span>
                  </div>
                </div>
                <div className="customers_review_sec_row">
                  <div className="customer_review_stext">
                    This is the best FAQ script which fulfills all my
                    requirements. Thanks for your great efforts and support
                    while installing the script. And again thanks for Your
                    prompt services it was superb.
                  </div>
                  <div className="who_ratset">
                    <span
                      className="star_review_main"
                      style={{ paddingRight: "10px", Color: "#451095" }}
                    >
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </span>
                    <span id="client-name">Lisa Jonhathan, Switzerland</span>{" "}
                    <span>
                      <Image
                        unoptimized={true}
                        src="/img/jobboard/switzerland_flag_img.png"
                        alt="Laravel Development"
                        style={{ width: "27px", marginLeft: "3px" }}
                        width={20}
                        height={100}
                      />
                    </span>
                  </div>
                </div>
                <div className="customers_review_sec_row">
                  <div className="customer_review_stext">
                    I bought this script from Logicspice and it worked really
                    nice, it helped to get hassle free from the commonly asked
                    questions of my clients. I recommend it to all who are
                    looking for a FAQ script, it&apos;s really nice.
                  </div>
                  <div className="who_ratset">
                    <span
                      className="star_review_main"
                      style={{ paddingRight: "10px", Color: "#451095" }}
                    >
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </span>
                    <span id="client-name">John, USA</span>{" "}
                    <span>
                      <Image
                        unoptimized={true}
                        src="/img/jobboard/usa_flag_img.png"
                        alt="Laravel Development"
                        style={{ width: "27px", marginLeft: "3px" }}
                        width={20}
                        height={100}
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="ecommerce--review--point ecommerce--review--faq--point">
                <div className="outof_rating">
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
                    <div className="people_star_num">20</div>
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
                        style={{ width: "50%" }}
                      ></div>
                    </div>
                    <div className="people_star_num">4</div>
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
                        style={{ width: "10%" }}
                      ></div>
                    </div>
                    <div className="people_star_num">2</div>
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
                <div className="ecommerce--review--btn ">
                  <a className="btn btn-primary" onClick={openReviewModel}>
                    Rate and Review product
                  </a>

                  <Reviewmodals
                    modalStatus={showReviewModal}
                    toggle={openReviewModel}
                    title="FAQ Script"
                  />
                </div>
                <div className="main-rait">
                  <span>
                    <i className="fa fa-star"></i>{" "}
                    <span>4.7 out of 5 stars</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ecommerce_faq_section" id="faq">
        <div className="container">
          <div className="ecommerce__Quick_FAQ_Script">
            <div className="row">
              <div className="col-md-5" data-aos="fade-up">
                <h4 className="title_main">
                  Frequently <br />
                  Asked Questions
                </h4>
                <div className="FaqImgBx">
                  <Image
                    unoptimized={true}
                    src="/img/marketplacesoftware/FaqLaravelImg.png"
                    alt="laravel web development"
                    width={300}
                    height={500 / (100 / 100)}
                  />
                </div>
              </div>
              <div className="col-md-7">
                <div className="ecommerce__Quick_FAQ">
                  {/* <MDBAccordion v-model="activeItem" borderless>
                    <MDBAccordionItem
                      headerTitle="Are you given source code modifiable?"
                      collapseId="flush-collapse1"
                    >
                      <p>
                        Yes, our scripts are flexible. Clients can customize
                        according to their requirements.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle="Do Logicspice give technical support?"
                      collapseId="flush-collapse2"
                    >
                      <p>
                        Yes, we believe in long-term relationships and provide
                        technical support to the client at affordable cost.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle="Are you willing to advise us with ideas?"
                      collapseId="flush-collapse3"
                    >
                      <p>
                        Sure, we fulfill the client. Your suggestions or ideas
                        are always welcomed which can make your business more
                        interactive.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle="Will you deliver the exact product as shown in the demo?"
                      collapseId="flush-collapse4"
                    >
                      <p>
                        Yes, We deliver the exact product. We don&apos;t
                        compromise with quality at all.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle="Can I use your script without any programming skills?"
                      collapseId="flush-collapse5"
                    >
                      <p>
                        Yes, You can directly install our given script and can
                        manage everything in the admin panel which is very user
                        friendly.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle="Can I remove your company proprietary notices?"
                      collapseId="flush-collapse6"
                    >
                      <p>
                        With an extra charge for that, you are allowed to modify
                        the branding there. You can remove our company
                        information and put yours. But you cannot put
                        &quot;copyright by&quot; because only Logicspice owns
                        the copyrights for our softwares.
                      </p>
                    </MDBAccordionItem>
                  </MDBAccordion> */}
                  <Accordion
                    expanded={expanded === "panel1"}
                    onChange={handleChange("panel1")}
                  >
                    <AccordionSummary
                      expandIcon={
                        expanded === "panel1" ? (
                          <IconButton>
                            <RemoveIcon />
                          </IconButton>
                        ) : (
                          <IconButton>
                            <AddIcon />
                          </IconButton>
                        )
                      }
                      aria-controls="panel1d-content"
                      id="panel1d-header"
                    >
                      <Typography>
                        Are you given source code modifiable?
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Yes, our scripts are flexible. Clients can customize
                        according to their requirements.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>

                  <Accordion
                    expanded={expanded === "panel2"}
                    onChange={handleChange("panel2")}
                  >
                    <AccordionSummary
                      expandIcon={
                        expanded === "panel2" ? (
                          <IconButton>
                            <RemoveIcon />
                          </IconButton>
                        ) : (
                          <IconButton>
                            <AddIcon />
                          </IconButton>
                        )
                      }
                      aria-controls="panel2d-content"
                      id="panel2d-header"
                    >
                      <Typography>
                        Do Logicspice give technical support?
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Yes, we believe in long-term relationships and provide
                        technical support to the client at an affordable cost.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>

                  <Accordion
                    expanded={expanded === "panel3"}
                    onChange={handleChange("panel3")}
                  >
                    <AccordionSummary
                      expandIcon={
                        expanded === "panel3" ? (
                          <IconButton>
                            <RemoveIcon />
                          </IconButton>
                        ) : (
                          <IconButton>
                            <AddIcon />
                          </IconButton>
                        )
                      }
                      aria-controls="panel3d-content"
                      id="panel3d-header"
                    >
                      <Typography>
                        Are you willing to advise us with ideas?
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Sure, we fulfill the client. Your suggestions or ideas
                        are always welcomed which can make your business more
                        interactive.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>

                  <Accordion
                    expanded={expanded === "panel4"}
                    onChange={handleChange("panel4")}
                  >
                    <AccordionSummary
                      expandIcon={
                        expanded === "panel4" ? (
                          <IconButton>
                            <RemoveIcon />
                          </IconButton>
                        ) : (
                          <IconButton>
                            <AddIcon />
                          </IconButton>
                        )
                      }
                      aria-controls="panel4d-content"
                      id="panel4d-header"
                    >
                      <Typography>
                        Will you deliver the exact product as shown in the demo?
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Yes, we deliver the exact product. We don’t compromise
                        with quality at all.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>

                  <Accordion
                    expanded={expanded === "panel5"}
                    onChange={handleChange("panel5")}
                  >
                    <AccordionSummary
                      expandIcon={
                        expanded === "panel5" ? (
                          <IconButton>
                            <RemoveIcon />
                          </IconButton>
                        ) : (
                          <IconButton>
                            <AddIcon />
                          </IconButton>
                        )
                      }
                      aria-controls="panel5d-content"
                      id="panel5d-header"
                    >
                      <Typography>
                        Can I use your script without any programming skills?
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Yes, you can directly install our given script and can
                        manage everything in the admin panel, which is very
                        user-friendly.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>

                  <Accordion
                    expanded={expanded === "panel6"}
                    onChange={handleChange("panel6")}
                  >
                    <AccordionSummary
                      expandIcon={
                        expanded === "panel6" ? (
                          <IconButton>
                            <RemoveIcon />
                          </IconButton>
                        ) : (
                          <IconButton>
                            <AddIcon />
                          </IconButton>
                        )
                      }
                      aria-controls="panel6d-content"
                      id="panel6d-header"
                    >
                      <Typography>
                        Can I remove your company proprietary notices?
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        With an extra charge, you are allowed to modify the
                        branding. You can remove our company information and put
                        yours. However, you cannot put &quot;copyright by&quot; as
                        Logicspice owns the copyrights for our software.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
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
              src="/img/images/whatsapp.png"
              alt="whatsapp-icon"
              width={50}
              height={50}
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
