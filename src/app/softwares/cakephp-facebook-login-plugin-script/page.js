"use client";
import React, { useState } from "react";
import Footer from "@/app/Components/Footer";
import NavBar from "@/app/Components/Navbar";
import Image from "next/image";
import Link from "next/link";
import "@/app/softwares/softwares.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import Reviewmodals from "@/app/Components/Reviewmodals";
import "../../resposive.css";

const page = () => {
  const [showReviewModal, setShowReviewModal] = useState(false);

  const openReviewModel = () => {
    setShowReviewModal(!showReviewModal);
  };

  return (
    <>
      <NavBar />
      <section className="product_top_sectins">
        <img
          src="/img/leadgeneration/bg.png"
          alt="product-bg"
          className="bg_images"
        />
        <div className="container">
          <h1>Cake PHP Facebook Login Plugin Script</h1>
          <div className="both-left-p-sec">
            <h3>
              Integrate the facebook plugin to give instant access to user for
              login.
            </h3>
            <div className="left-p-sec">
              <ul>
                <li>
                  The follow button allows people subscribe to the public
                  updates of others on Facebook
                </li>
                <li>
                  Embedded post by a page or person into the website or content,
                  only public post can get embedded
                </li>
                <li>
                  Let your users share what they find interesting on your site
                  so their friends can also see them.
                </li>
              </ul>
            </div>
            <div className="left-p-sec">
              <ul>
                <li>
                  Allow users to send privately content to one of more friends
                  in a facebook message
                </li>
                <li>
                  Let your users comment on your site using facebook account
                </li>
                <li>
                  Let your users like what they find on your site which will
                  show in their activity feed.
                </li>
              </ul>
            </div>
          </div>
          <div className="right-p-sec">
            <h4>Free</h4>
            <div className="line-border">
              <img src="/img/jobboard/stars.png" alt="stars" className="" />
              <p>9 Reviews</p>
            </div>
            <a className="btn btn-primary" href="#">
              DOWNLOAD
            </a>
          </div>

          <h5>
            Nowadays users are not interested in filling a big form to
            registration. Short registration process helps to get more
            subscribers for your website. CakePHP Facebook log in plug in script
            is a quick and powerful way to integrate registration and log in
            system on the website.
          </h5>
          <div className="text-center">
            <div className="lft_cnt">
              <a target="_blank" className="btn btn-primary lnk_dwn_cen" href="#">
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="gettoknow_sectins">
        <div className="gettoknow_sectins_in">
          <div className="container">
            <div className="titlesettop">
              Have a look on the advance and unique set of features that are
              powered in our
              <h2>Cake PHP Facebook Login Plugin Script</h2>
            </div>
            <div className="clear"></div>

            <div className="row">
              <div className="col-md-4">
                <div className="media">
                  <div className="media-left">
                    <a href="#">
                      <img
                        className="media-object"
                        src="/img/leadgeneration/unique_signupicon.png"
                        alt="Easy Registration"
                      />
                    </a>
                  </div>
                  <div className="media-body">
                    <h3 className="media-heading">Easy Registration</h3>
                    <p>
                      User can easily register by giving the required details.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="media">
                  <div className="media-left">
                    <a href="#">
                      <img
                        className="media-object"
                        src="/img/leadgeneration/great_profile_managment_icon.png"
                        alt="Great Profile Management"
                      />
                    </a>
                  </div>
                  <div className="media-body">
                    <h3 className="media-heading">Great Profile Management</h3>
                    <p>
                      User or admin both can edit their profile information
                      anytime.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="media">
                  <div className="media-left">
                    <a href="#">
                      <img
                        className="media-object"
                        src="/img/leadgeneration/fully_responsive_icon.png"
                        alt="Fully Responsive"
                      />
                    </a>
                  </div>
                  <div className="media-body">
                    <h3 className="media-heading">Fully Responsive</h3>
                    <p>
                      Themes with 'fit-all-screen' compatibility allow user to
                      access from mobile as well as tablet.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="media">
                  <div className="media-left">
                    <a href="#">
                      <img
                        className="media-object"
                        src="/img/leadgeneration/lost-password-icon.png"
                        alt="Lost Password Recovery"
                      />
                    </a>
                  </div>
                  <div className="media-body">
                    <h3 className="media-heading">Lost Password Recovery</h3>
                    <p>
                      This feature allows customers to reset their password with
                      the ease of customized password resetter.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="media">
                  <div className="media-left">
                    <a href="#">
                      <img
                        className="media-object"
                        src="/img/leadgeneration/search_filter_icon.png"
                        alt="Search Filter"
                      />
                    </a>
                  </div>
                  <div className="media-body">
                    <h3 className="media-heading">Search Filter</h3>
                    <p>
                      This allows to search a keyword and give relevant result
                      back to the user.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="media">
                  <div className="media-left">
                    <a href="#">
                      <img
                        className="media-object"
                        src="/img/leadgeneration/payment_options_icon.png"
                        alt="Payment Options"
                      />
                    </a>
                  </div>
                  <div className="media-body">
                    <h3 className="media-heading">Payment Options</h3>
                    <p>
                      You can offer payment options like : COD, Debit Card,
                      Credit Card etc.
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
                      >
                        <span>
                          <img
                            src="/img/leadgeneration/enquiry_btn_bg.png"
                            alt="enquiry"
                          />
                        </span>{" "}
                        Enquire Now
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
            Cake PHP Facebook Login Plugin <span>Script</span>
          </h2>
          <div classNameName="text-center main-text">
            <p>
              Nowadays users are not interested in filling a big form to
              registration. Short registration process helps to get more
              subscribers for your website. CakePHP Facebook log in plug in
              script is a quick and powerful way to integrate registration and
              log in system on the website. Facebook is the most popular social
              network and most of the users have a Facebook account. Facebook
              Log in allow users to sign into your website using their Facebook
              account credentials without sign up on your website.
            </p>
          </div>
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
                  <img src="/img/jobboard/apple_phn_icon.png" alt="iOS" />
                </div>
                <div className="icntechimg_nm">iOS</div>
              </li>
              <li>
                <div className="icntechimg">
                  <img src="/img/jobboard/tech_java_icon.png" alt="Java" />
                </div>
                <div className="icntechimg_nm">Java</div>
              </li>
              <li>
                <div className="icntechimg">
                  <img src="/img/jobboard/andoird_icon.png" alt="Android" />
                </div>
                <div className="icntechimg_nm">Android</div>
              </li>
              <li>
                <div className="icntechimg">
                  <img
                    src="/img/jobboard/tech_php_icon.png"
                    alt="PHP Development"
                  />
                </div>
                <div className="icntechimg_nm">PHP</div>
              </li>
              <li>
                <div className="icntechimg">
                  <img
                    src="/img/jobboard/tech_cakephp_icon.png"
                    alt="CakePHP"
                  />
                </div>
                <div className="icntechimg_nm">CakePHP</div>
              </li>
              <li>
                <div className="icntechimg">
                  <img src="/img/jobboard/bootstrap.png" alt="manager_icn" />
                </div>
                <div className="icntechimg_nm">Bootstrap</div>
              </li>
              <li>
                <div className="icntechimg">
                  <img
                    src="/img/jobboard/tech_mysql_icon.png"
                    alt="manager_icn"
                  />
                </div>
                <div className="icntechimg_nm">MySQL</div>
              </li>
              <li>
                <div className="icntechimg">
                  <img
                    src="/img/jobboard/tech_apache_icon.png"
                    alt="manager_icn"
                  />
                </div>
                <div className="icntechimg_nm">Apache</div>
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
                      <div className="people_star_num">8</div>
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
                      <div className="people_star_num">3</div>
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
                <div classNameName="col-md-7">
                  <a classNameName="btn btn-primary" onClick={openReviewModel}>
                    Rate and Review product
                  </a>

                  <Reviewmodals
                    modalStatus={showReviewModal}
                    toggle={openReviewModel}
                    title="Cake PHP Facebook Login Plugin Script"
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
                      The word "perfect" is not enough to describe the
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
                      technical support to the client at affordable cost.
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
                      Yes, We deliver the exact product. We don't compromise
                      with quality at all.
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
                      "copyright by" because only we own the copyrights for our
                      products.{" "}
                    </p>
                  </MDBAccordionItem>
                </MDBAccordion>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default page;