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


const page = () => {
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const openReviewModel = () => {
    setShowReviewModal(!showReviewModal);
  };
  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
     <NavBar />
     <section class="product_top_sectins">
    <img src="/img/leadgeneration/bg.png" alt="product-bg" class="bg_images"/>
    <div class="container">
    <h1>Social Network Integration For Android</h1>
            <div class="both-left-p-sec">
            <h3>Social network integration APK to give instant access to user for login. </h3>
                  <div class="left-p-sec s-log-in">
                    <ul>
                    <li class="fb-p"><span>Facebook login</span></li>
                    <li class="tw-p"><span>Twitter login</span></li>
                    </ul>
                </div>
                <div class="left-p-sec s-log-in">
                    <ul>
                    <li class="lin-p"><span>Linkedin login</span></li>
                    <li class="gp-p"><span>Google Plus login</span></li>
                    </ul>
                </div>
            </div>
            <div class="right-p-sec">
                <h4>Free</h4>
                <div class="line-border">
                     <img src="/img/jobboard/stars.png" alt="stars" class=""/>
                    <p>12 Reviews</p>
                </div>
                <a class="btn btn-primary" href="#">DOWNLOAD</a>
            </div>
       
        <h5>Social network integration with an android app is a common practice and essential part of any application to provide a 
            better user interface. It allow users to easily Login/Sign-up with their social accounts to your app and share their 
            activities. There are lots of ways to do it, but, you need to spend time to learn and use different social network SDKs.</h5>
            <div aria-label="breadcrumb" class="my-breadcrumb ">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="<?php echo MAIN_HTTP_PATH; ?>">Home</a></li>
                    <li class="breadcrumb-item"><a href="<?php echo MAIN_HTTP_PATH; ?>/custom-solutions">Custom Solutions</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Social network integration</li> 
                </ol>
            </div>
    </div>
</section>
<section class="gettoknow_sectins">
    <div class="gettoknow_sectins_in">
        <div class="container">
        <div class="titlesettop">Have a look on the advance and unique set of features that are powered in our  <h2>Social Network Integration App</h2></div>             
            <div class="clear"></div>
            
            <div class="row">
            <div class="col-md-6">
                    <div class="media">
                        <div class="media-left">
                            <img class="media-object" src="/img/leadgeneration/unique_signupicon.png" alt="Easy Configuration" />
                        </div>
                        <div class="media-body">
                          <h3 class="media-heading">Easy Configuration</h3>
                          <p>Anyone can easily use this code for their existing app or any new app. </p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="media">
                        <div class="media-left">
                            <img class="media-object" src="/img/leadgeneration/great_profile_managment_icon.png" alt="Easy Login/Registration" />
                        </div>
                        <div class="media-body">
                          <h3 class="media-heading">Easy Login/Registration</h3>
                          <p>This social network integration code will help users to login directly through their social account in a single tap.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="media">
                        <div class="media-left">
                            <img class="media-object" src="/img/leadgeneration/fully_responsive_icon.png" alt="Secure login" />
                        </div>
                        <div class="media-body">
                          <h3 class="media-heading">Secure login</h3>
                          <p>This code is completely secure and well tested and you can directly apply into your APKs.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="media">
                        <div class="media-left">
                          <a href="#">
                            <img class="media-object" src="/img/leadgeneration/lost-password-icon.png" alt="Combined Integration" />
                          </a>
                        </div>
                        <div class="media-body">
                        <h3 class="media-heading">Combined Integration</h3>
                        <p>This enables a single login screen with all essential social media networks. </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>
<section class="product_middle_menu_box">
        <section class="product_middle_menu">
        <div class="container">
            <nav class="navbar navbar-expand-lg navbar-default">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

                    </div>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto">
                             <li><a href="#features">Features</a></li>
                        <li><a href="#technologies">Technologies</a></li>                        
                        <li><a href="#support">Support</a></li>
                        <li><a href="#reviews">Reviews</a></li>
                        <li><a href="#">Enquire Now</a></li>
                        </ul>
                        <ul class="navbar-nav ms-auto navbar-right">
                            <li>
                                <a class="page-scroll btn btn-default" href="javascript:void(0);" >
                                    <span><img src="/img/leadgeneration/enquiry_btn_bg.png" alt="enquiry"/></span> Enquire Now
                                </a>

                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </section>
    </section>
    <section class="Frequently_Asked_Questions" id="features">
    <div class="container">
        <h2>Social Network Integration <span>For Android</span></h2>
        <p>What if you have one social network integrated into your android app, but you need to add one more social network for your application? This problem leads to move 
                    forward towards common social network interface with all social networks. It will save time and simplifies the process of user login by providing different social 
                    media networks. Here at logicspice we provide free source code of all social network integration for your Android app.</p>
                <p>With this you can easily integrate Facebook, Twitter, Google+ & LinkedIn in any android app using this source code. </p>
                <p>Download the full code and enable it into your aplication APK. </p>
    </div>
</section>
         <section class="used_technology_section" id="technologies">
        <div class="container">
            <h4 class="title_main"><span>Used Technologies</span> and Server Requirements</h4>     
            <div class="used_technology_section_dataa">
        <ul>
                   <li ><div class="icntechimg"><img src="/img/jobboard/tech_java_icon.png" alt="Java"/></div><div class="icntechimg_nm">Java</div></li>
                    <li><div class="icntechimg"><img src="/img/jobboard/andoird_icon.png" alt="Android"/></div><div class="icntechimg_nm">Android</div></li>
                    <li><div class="icntechimg"><img src="/img/jobboard/tech_php_icon.png" alt="PHP Development"/></div><div class="icntechimg_nm">PHP</div></li>
                    <li><div class="icntechimg"><img src="/img/jobboard/tech_cakephp_icon.png" alt="CakePHP"/></div><div class="icntechimg_nm">CakePHP</div></li>
                    <li><div class="icntechimg"><img src="/img/jobboard/tech_mysql_icon.png" alt="manager_icn"/></div><div class="icntechimg_nm">MySQL</div></li>
                   </ul> 
            </div>
        </div>
    </section>
    <section class="whatsupport_section" id="support">
        <div class="container">
            <h4 class="title_main">What <span>support</span> you will get?</h4>     
            <div class="supportsetting">
                <ul>
                  
                    <li data-aos="fade">
                        <div class="supportsetting_icn"><img src="/img/jobboard/free_remove_icon.png" alt="manager_icn"/></div>
                        <div class="supportsettingtext">Free Brand Removal</div>
                    </li>
                    <li data-aos="fade">
                        <div class="supportsetting_icn"><img src="/img/jobboard/access_secure_code_icon.png" alt="manager_icn"/></div>
                        <div class="supportsettingtext">Access to Source code</div>
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
                      <div class="people_star_num">14</div>
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
                    title="Social Network Integration For Android"
                  />
                </div>
                <div class="col-md-12">
            
                 
                <div class="reviews_down_pro">
                                <div class="customers_review_sec_row_ra"><div class="starget">5 <i class="fa fa-star" aria-hidden="true"></i></div>
                                    <span>Build an Online Store</span></div>
                                <div class="who_ratset">Oapriliao</div>
                                <div class="customer_review_stext">Professional, Always put in extra effort, Good Knowledge. One of the best Developer. Will continue to work with 
                                    them with upcoming project.</div>
                            </div>
                            <div class="reviews_down_pro">
                                <div class="customers_review_sec_row_ra"><div class="starget">5 <i class="fa fa-star" aria-hidden="true"></i></div>
                                    <span>website interface design and back-end business implementation using php</span></div>
                                <div class="who_ratset">Emsall</div>
                                <div class="customer_review_stext">The word "perfect" is not enough to describe the capability of Logicspice. They are just wonderful and willing to extend 
                                    the effort until the customer satisfied, definitely will re-hire them</div>
                            </div>
                            <div class="reviews_down_pro">
                                <div class="customers_review_sec_row_ra"><div class="starget">5 <i class="fa fa-star" aria-hidden="true"></i></div>
                                    <span>Online Box Office</span></div>
                                <div class="who_ratset">Konataalleyne</div>
                                <div class="customer_review_stext">Excellent work. Would definitely use them again. Fast and effective work.</div>
                            </div>

                  
                </div>
              </div>
            </div>
            <div class="col-md-6 Quick_FAQ">
              <h4 class="title_main">Quick FAQ</h4>
              <div class="MainFaqBx">
                <MDBAccordion v-model="activeItem" borderless>
                <MDBAccordionItem
                          headerTitle="Are your given source code modifiable?"
                          collapseId="flush-collapse1" >
                            <p>Yes, our given scripts are flexible. Clients can customize according to their requirement.</p>
                        </MDBAccordionItem>
                        
                        <MDBAccordionItem
                          headerTitle="Do logicspice give technical support?"
                          collapseId="flush-collapse2">
                          <p>Yes, we believe in long-term relationship and provide technical support to our client at affordable cost. </p>
                        </MDBAccordionItem>
                        
                        <MDBAccordionItem
                          headerTitle="Are you willing to advise us with ideas?"
                          collapseId="flush-collapse3">
                          <p>Sure, we fulfill the requirement of client. Your suggestion or ideas are always welcomed which can make your business more interactive.</p>
                        </MDBAccordionItem>
                        
                        <MDBAccordionItem
                          headerTitle="Will you deliver the exact product as shown in demo?"
                          collapseId="flush-collapse4">
                          <p>Yes, We deliver the exact product. We don't compromise with quality at all.</p>
                        </MDBAccordionItem>
                        
                        <MDBAccordionItem
                          headerTitle="Can I use your script without any programming skills?"
                          collapseId="flush-collapse5">
                          <p>Yes, You can directly install our given script and can manage everything in admin panel which is very user friendly.</p>
                        </MDBAccordionItem>
                        
                        <MDBAccordionItem
                          headerTitle="Can I remove your company proprietary notices?"
                          collapseId="flush-collapse6">
                          <p>You are allowed to modify the script. You can remove our company information and put yours. But you cannot put "copyright by" because only we own the copyrights for our products. </p>
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
  )
}

export default page
