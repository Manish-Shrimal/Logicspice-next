"use client";
import React, { useState } from "react";
import Footer from "@/app/Components/Footer";
import NavBar from "@/app/Components/Navbar";
import Image from "next/image";
import Link from "next/link";
import "@/app/softwares/softwares.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import "../../resposive.css";
import Reviewmodals from "@/app/Components/Reviewmodals";
import Contactusmodel from "@/app/Components/Contactusmodel";
import Enquirymodal from "@/app/Components/Enquirymodal";

const Page = () => {
  const [showModal, setShowModal] = useState(false);

  const [showReviewModal, setShowReviewModal] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const openReviewModel = () => {
    setShowReviewModal(!showReviewModal);
  };
  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  const openModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <NavBar />
      <section className="product_top_sectins">
        <Image
          width={100}
          height={100}
          src="/img/leadgeneration/bg.png"
          alt="product-bg"
          className="bg_images"
        />
        <div className="container">
          <h1>Social Network Integration For Android</h1>
          <div className="both-left-p-sec">
            <h3>
              Social network integration APK to give instant access to user for
              login.{" "}
            </h3>
            <div className="left-p-sec s-log-in">
              <ul>
                <li className="fb-p">
                  <span>Facebook login</span>
                </li>
                <li className="tw-p">
                  <span>Twitter login</span>
                </li>
              </ul>
            </div>
            <div className="left-p-sec s-log-in">
              <ul>
                <li className="lin-p">
                  <span>Linkedin login</span>
                </li>
                <li className="gp-p">
                  <span>Google Plus login</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="right-p-sec">
            <h4>Free</h4>
            <div className="line-border">
              <Image
                width={100}
                height={100}
                src="/img/jobboard/stars.png"
                alt="stars"
                className=""
              />
              <p>12 Reviews</p>
            </div>
            <a className="btn btn-primary" href="#">
              DOWNLOAD
            </a>
          </div>

          <h5>
            Social network integration with an android app is a common practice
            and essential part of any application to provide a better user
            interface. It allow users to easily Login/Sign-up with their social
            accounts to your app and share their activities. There are lots of
            ways to do it, but, you need to spend time to learn and use
            different social network SDKs.
          </h5>
          <div aria-label="breadcrumb" className="my-breadcrumb ">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="<?php echo MAIN_HTTP_PATH; ?>">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="<?php echo MAIN_HTTP_PATH; ?>/custom-solutions">
                  Custom Solutions
                </a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Social network integration
              </li>
            </ol>
          </div>
        </div>
      </section>
      <section className="gettoknow_sectins">
        <div className="gettoknow_sectins_in">
          <div className="container">
            <div className="titlesettop">
              Have a look on the advance and unique set of features that are
              powered in our <h2>Social Network Integration App</h2>
            </div>
            <div className="clear"></div>

            <div className="row">
              <div className="col-md-6">
                <div className="media">
                  <div className="media-left">
                    <Image
                      width={100}
                      height={100}
                      className="media-object"
                      src="/img/leadgeneration/unique_signupicon.png"
                      alt="Easy Configuration"
                    />
                  </div>
                  <div className="media-body">
                    <h3 className="media-heading">Easy Configuration</h3>
                    <p>
                      Anyone can easily use this code for their existing app or
                      any new app.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="media">
                  <div className="media-left">
                    <Image
                      width={100}
                      height={100}
                      className="media-object"
                      src="/img/leadgeneration/great_profile_managment_icon.png"
                      alt="Easy Login/Registration"
                    />
                  </div>
                  <div className="media-body">
                    <h3 className="media-heading">Easy Login/Registration</h3>
                    <p>
                      This social network integration code will help users to
                      login directly through their social account in a single
                      tap.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="media">
                  <div className="media-left">
                    <Image
                      width={100}
                      height={100}
                      className="media-object"
                      src="/img/leadgeneration/fully_responsive_icon.png"
                      alt="Secure login"
                    />
                  </div>
                  <div className="media-body">
                    <h3 className="media-heading">Secure login</h3>
                    <p>
                      This code is completely secure and well tested and you can
                      directly apply into your APKs.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="media">
                  <div className="media-left">
                    <a href="#">
                      <Image
                        width={100}
                        height={100}
                        className="media-object"
                        src="/img/leadgeneration/lost-password-icon.png"
                        alt="Combined Integration"
                      />
                    </a>
                  </div>
                  <div className="media-body">
                    <h3 className="media-heading">Combined Integration</h3>
                    <p>
                      This enables a single login screen with all essential
                      social media networks.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="product_middle_menu_box">
        <section className="product_middle_menu">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-default">
              <div className="container-fluid">
                <div className="navbar-header">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                </div>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav me-auto">
                    <li>
                      <a href="#features">Features</a>
                    </li>
                    <li>
                      <a href="#technologies">Technologies</a>
                    </li>
                    <li>
                      <a href="#support">Support</a>
                    </li>
                    <li>
                      <a href="#reviews">Reviews</a>
                    </li>
                    <li>
                      <a href="#">Enquire Now</a>
                    </li>
                  </ul>
                  <ul className="navbar-nav ms-auto navbar-right">
                    <li>
                      <a
                        className="page-scroll btn btn-default"
                        href="javascript:void(0);"
                        onClick={openModal}
                      >
                        <span>
                          <Image
                            width={30}
                            height={100}
                            src="/img/leadgeneration/enquiry_btn_bg.png"
                            alt="enquiry"
                          />
                        </span>{" "}
                        Enquire Now
                        {
                          <Enquirymodal
                            modalStatus={showModal}
                            toggle={openModal}
                            title="Social Network Integration For Android"
                          />
                        }
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </section>
      </section>
      <section className="Frequently_Asked_Questions" id="features">
        <div className="container">
          <h2>
            Social Network Integration <span>For Android</span>
          </h2>
          <p>
            What if you have one social network integrated into your android
            app, but you need to add one more social network for your
            application? This problem leads to move forward towards common
            social network interface with all social networks. It will save time
            and simplifies the process of user login by providing different
            social media networks. Here at logicspice we provide free source
            code of all social network integration for your Android app.
          </p>
          <p>
            With this you can easily integrate Facebook, Twitter, Google+ &
            LinkedIn in any android app using this source code.{" "}
          </p>
          <p>Download the full code and enable it into your aplication APK. </p>
        </div>
      </section>
      <section className="used_technology_section" id="technologies">
        <div className="container">
          <h4 className="title_main">
            <span>Used Technologies</span> and Server Requirements
          </h4>
          <div className="used_technology_section_dataa">
            <ul>
              <li>
                <div className="icntechimg">
                  <Image
                    width={40}
                    height={100}
                    src="/img/jobboard/tech_java_icon.png"
                    alt="Java"
                  />
                </div>
                <div className="icntechimg_nm">Java</div>
              </li>
              <li>
                <div className="icntechimg">
                  <Image
                    width={40}
                    height={100}
                    src="/img/jobboard/andoird_icon.png"
                    alt="Android"
                  />
                </div>
                <div className="icntechimg_nm">Android</div>
              </li>
              <li>
                <div className="icntechimg">
                  <Image
                    width={40}
                    height={100}
                    src="/img/jobboard/tech_php_icon.png"
                    alt="PHP Development"
                  />
                </div>
                <div className="icntechimg_nm">PHP</div>
              </li>
              <li>
                <div className="icntechimg">
                  <Image
                    width={40}
                    height={100}
                    src="/img/jobboard/tech_cakephp_icon.png"
                    alt="CakePHP"
                  />
                </div>
                <div className="icntechimg_nm">CakePHP</div>
              </li>
              <li>
                <div className="icntechimg">
                  <Image
                    width={40}
                    height={100}
                    src="/img/jobboard/tech_mysql_icon.png"
                    alt="manager_icn"
                  />
                </div>
                <div className="icntechimg_nm">MySQL</div>
              </li>
            </ul>
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
                    width={40}
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
                    width={40}
                    height={100}
                    src="/img/jobboard/access_secure_code_icon.png"
                    alt="manager_icn"
                  />
                </div>
                <div className="supportsettingtext">Access to Source code</div>
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
                      <div className="people_star_num">14</div>
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
                      <div className="people_star_num">2</div>
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
                    title="Social Network Integration For Android"
                  />
                </div>
                <div className="col-md-12">
                  <div className="reviews_down_pro">
                    <div className="customers_review_sec_row_ra">
                      <div className="starget">
                        5 <i className="fa fa-star" aria-hidden="true"></i>
                      </div>
                      <span>Build an Online Store</span>
                    </div>
                    <div className="who_ratset">Oapriliao</div>
                    <div className="customer_review_stext">
                      Professional, Always put in extra effort, Good Knowledge.
                      One of the best Developer. Will continue to work with them
                      with upcoming project.
                    </div>
                  </div>
                  <div className="reviews_down_pro">
                    <div className="customers_review_sec_row_ra">
                      <div className="starget">
                        5 <i className="fa fa-star" aria-hidden="true"></i>
                      </div>
                      <span>
                        website interface design and back-end business
                        implementation using php
                      </span>
                    </div>
                    <div className="who_ratset">Emsall</div>
                    <div className="customer_review_stext">
                      The word &quot;perfect&quot; is not enough to describe the
                      capability of Logicspice. They are just wonderful and
                      willing to extend the effort until the customer satisfied,
                      definitely will re-hire them
                    </div>
                  </div>
                  <div className="reviews_down_pro">
                    <div className="customers_review_sec_row_ra">
                      <div className="starget">
                        5 <i className="fa fa-star" aria-hidden="true"></i>
                      </div>
                      <span>Online Box Office</span>
                    </div>
                    <div className="who_ratset">Konataalleyne</div>
                    <div className="customer_review_stext">
                      Excellent work. Would definitely use them again. Fast and
                      effective work.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 Quick_FAQ">
              <h4 className="title_main">Quick FAQ</h4>
              <div className="MainFaqBx">
                <MDBAccordion v-model="activeItem" borderless>
                  <MDBAccordionItem
                    headerTitle="Are your given source code modifiable?"
                    collapseId="flush-collapse1"
                  >
                    <p>
                      Yes, our given scripts are flexible. Clients can customize
                      according to their requirement.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Do logicspice give technical support?"
                    collapseId="flush-collapse2"
                  >
                    <p>
                      Yes, we believe in long-term relationship and provide
                      technical support to our client at affordable cost.{" "}
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Are you willing to advise us with ideas?"
                    collapseId="flush-collapse3"
                  >
                    <p>
                      Sure, we fulfill the requirement of client. Your
                      suggestion or ideas are always welcomed which can make
                      your business more interactive.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Will you deliver the exact product as shown in demo?"
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
                      manage everything in admin panel which is very user
                      friendly.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Can I remove your company proprietary notices?"
                    collapseId="flush-collapse6"
                  >
                    <p>
                      You are allowed to modify the script. You can remove our
                      company information and put yours. But you cannot put
                      &quot;copyright by&quot; because only we own the
                      copyrights for our products.{" "}
                    </p>
                  </MDBAccordionItem>
                </MDBAccordion>
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
              width={100}
              height={100}
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
