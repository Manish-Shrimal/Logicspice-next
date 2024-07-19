"use client";
import Footer from "@/app/Components/Footer";
import NavBar from "@/app/Components/Navbar";
import "@/app/softwares/softwares.css";
import Image from "next/image";
import Link from "next/link";
import "@fortawesome/fontawesome-free/css/all.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  MDBAccordion,
  MDBAccordionItem,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalFooter,
} from "mdb-react-ui-kit";
import React, { useRef, useState } from "react";
import Reviewmodals from "@/app/Components/Reviewmodals";
import Contactusmodel from "@/app/Components/Contactusmodel";




const page = () => {
    const [modalOpen, setModalOpen] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);


  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  const openReviewModel = () => {
    setShowReviewModal(!showReviewModal);
  };
  const submitView = (event) => {
    event.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted");
  };
  return (
    <>
  <NavBar />
      <section class="product_top_sectins">
        <img
          src="/img/leadgeneration/bg.png"
          alt="product-bg"
          class="bg_images"
        />
        <div class="container">
          <h1>LS Lead Generation Form</h1>
          <h2>Contact Form PHP Scrip</h2>
         
            <div class="both-left-p-sec">
              <h3>
                Attach contact form to your website to get connect with your
                users and collect their information.
              </h3>
              <div class="left-p-sec">
                <ul>
                  <li>
                    Cross Domain Compatible : The form can be easily integrated
                    with any third party site without any hassle.
                  </li>
                  <li>
                    No installation required. Add the HTMl/Javascript code
                    directly to the site or page where form is required.
                  </li>
                  <li>
                    Captcha validation included in contact form to make this
                    form more secure and advance.
                  </li>
                </ul>
              </div>
              <div class="left-p-sec">
                <ul>
                  <li>
                    Get the email with all the details when any user submit the
                    form and respond to their query quickly.
                  </li>
                  <li>
                    Form is compatible with any custom framework includes
                    wordpress, joomla, cakephp, laravel.
                  </li>
                  <li>
                    Form width is extended dynamically to the full width. It can
                    be customized as per your requirement.
                  </li>
                </ul>
              </div>
            </div>
            <div class="right-p-sec">
              <h4>Free</h4>
              <div class="line-border">
                <img src="/img/jobboard/stars.png" alt="stars" class="" />
                <p>42 Reviews</p>
              </div>
              <Link class="btn btn-primary" href="#formbuilder">
                DOWNLOAD
              </Link>
            </div>
        
        </div>
      </section>
      <section class="product_page_header_in">
        <div class="container">
        <div class="whateissuprt">
            <div class="headhs"><strong>Lead Generation Form Builder</strong></div>
            <p>This is an excellent way to customize your contact form with custom form fields like text fields, multiple choice check boxes, radio buttons, file attachment control, 
                drop-down lists, and paragraph text controls on your form. You can generate the custom PHP form with dynamic fields for <strong>Lead Generation</strong> with our free 
                contact form builder over an online platform. You can select the kind of validation you needed over the form fields so that it validates the data input by the user. 
                You can also put the placeholder text over the form fields if you want to give extra guidance to the user. Once you customized your email/contact/lead generator 
                form format, download it. It's easy and ready to install the contact forms PHP script for your website/webpage online.</p>

            <p>You can also put your own form title and description for the php contact form and can select the desired background color of the form and can change the placement of 
                the form objects with a simple drag-and-drop control facility. You can choose the email ID you want to configure for your form to send email. You can change the 
                label of each form field to make it easy to understand for the user.</p>

            <p>You can use this <strong>custom PHP form builder</strong> to generate the form for the purpose of creating a contact form, order inquiry form, or creating a form 
                to collect different choices and preferences from your customers, maybe through your order form or over so many other places where you want to take input from 
                your website visitors. You can use it online wherever you require a good customized contact form, which is ready-made and super easy to install.</p>

            <p>This <strong>contact form PHP script</strong> is an excellent way of bringing in new customers online. This PHP form captures your website leads/inquiries with a 
                simple contact/inquiry/lead form. It could help you in a big way to generate leads through your website. Lead generation can be significantly improved through 
                having a professionally scripted form structure, which is easy to use and has a decent look and format. The flexibility in customizing this form allows you to 
                conduct free-flowing communication and to develop a relationship with the prospect/visitor of your website or web form. We have used a captcha in the form for 
                security purposes.</p>

        </div>

          <div class="clear"></div>
        </div>

        <div class="LeadFormSectionMain">
          <div class="vfbg" id="formbuilder">
            <div class="container">
              <div class="acc_pro_right">
                <div class="acc_profd">
                  <div class="mars">
                    <div class="ld_main_m">
                      <div class="mainhead">
                        <span>Lead Generation Form Builder</span>
                      </div>
                      <div class="ld_main">
                        <div class="ld_main_l">
                          <div class="ld_h">Select Your Form Fields</div>
                          <div class="ld_flist">
                            <ul>
                              <li
                                onclick="loadTextBox('slt')"
                                class="lfsl"
                                id="slt"
                              >
                                Single Line Text
                              </li>
                              <li
                                onclick="loadTextAreaBox('pt')"
                                class="lfsl"
                                id="pt"
                              >
                                Paragraph Text
                              </li>
                              <li
                                onclick="loadCheckBox('cb')"
                                class="lfsl"
                                id="cb"
                              >
                                Checkboxes
                              </li>
                              <li
                                onclick="loadRadioBtn('mc')"
                                class="lfsl"
                                id="mc"
                              >
                                Multiple Choice
                              </li>
                              <li
                                onclick="loadDropdown('dd')"
                                class="lfsl"
                                id="dd"
                              >
                                Dropdown
                              </li>
                              <li
                                onclick="loadfilebox('filebox')"
                                class="lfsl"
                                id="filebox"
                              >
                                File Upload
                              </li>
                              <li onclick="setFrom('fs')" class="lfsl" id="fs">
                                Form Settings
                              </li>
                            </ul>
                          </div>
                          <div class="showaddform" id="showformdields"></div>
                        </div>
                        <div class="ld_main_r">
                          <form
                            onSubmit={submitView}
                            id="viewform"
                            method="post"
                            acceptCharset="utf-8"
                            target="_blank"
                          >
                            <div class="lfha" id="frmId" onclick="setFrom(25)">
                              <div class="formtitel" id="cfromttitle">
                                Untitled Form
                              </div>
                              <div class="formtitel_de" id="cfromdescription">
                                This is my form, please fill it.
                              </div>
                              <div
                                class="formtitel_de displayne"
                                id="cformtextcolor"
                              >
                                222222
                              </div>
                              <div
                                class="formtitel_de displayne"
                                id="cformbgcolor"
                              >
                                ffffff
                              </div>
                              <div
                                class="formtitel_de displayne"
                                id="cformbtncolor"
                              >
                                074376
                              </div>
                              <div
                                class="formtitel_de displayne"
                                id="cformbgtitlecolor"
                              >
                                dedede
                              </div>
                              <input
                                id="fordataid"
                                name="jsondata[]"
                                value='{"type":"form","forhead":"Untitled Form","formdescription":"This is my form, please fill it."}'
                                type="hidden"
                              />{" "}
                            </div>
                            <div
                              class="lfha setemail "
                              id="frmIdEmail"
                              onclick="setEmail()"
                            >
                              <div class="setemail" id="cfromttitle">
                                Email Address where you want to receive form
                                data after submission{" "}
                                <div class="af_ra ssemail">
                                  <input
                                    name="setemail"
                                    id="setemail"
                                    class=" required"
                                    minlength="0"
                                    maxlength=""
                                    placeholder=""
                                    type="text"
                                    value="youremail@gmail.com"
                                  />
                                </div>
                              </div>
                              <input
                                id="fordataidemail"
                                name="jsondata[]"
                                value='{"type":"setemail","email":"youremail@gmail.com"}'
                                type="hidden"
                              />{" "}
                            </div>
                            <div class="ld_SS" id="show_from">
                              <div
                                class="af_r_new"
                                id="addfull_name2"
                                onclick="editText('full_name2')"
                              >
                                <div class="af_la">
                                  Full Name <span class="reqstar">*</span>
                                </div>
                                <div class="af_ra">
                                  <input
                                    name="full_name"
                                    id="full_name2"
                                    class=" required"
                                    minlength="0"
                                    maxlength=""
                                    placeholder="Your name"
                                    type="text"
                                  />
                                </div>
                                <div class="afh">
                                  <input
                                    name="jsondata[]"
                                    id="jsonfull_name2"
                                    value='{"type":"text","lable_name":"Full Name","lable_required":"*","field_name":"full_name","field_id":"full_name2","validation":" required","minimum":"0","maximum":"","placeholder":"Your name"}'
                                    type="hidden"
                                  />
                                </div>
                              </div>
                              <div
                                class="af_r_new"
                                id="addemail_address3"
                                onclick="editText('email_address3')"
                              >
                                <div class="af_la">
                                  Email Address <span class="reqstar">*</span>
                                </div>
                                <div class="af_ra">
                                  <input
                                    name="email_address"
                                    id="email_address3"
                                    class=" required email"
                                    minlength="0"
                                    maxlength=""
                                    placeholder="Your email address"
                                    type="text"
                                  />
                                </div>
                                <div class="afh">
                                  <input
                                    name="jsondata[]"
                                    id="jsonemail_address3"
                                    value='{"type":"text","lable_name":"Email Address","lable_required":"*","field_name":"email_address","field_id":"email_address3","validation":" required email","minimum":"0","maximum":"","placeholder":"Your email address"}'
                                    type="hidden"
                                  />
                                </div>
                              </div>
                              <div
                                class="af_r_new"
                                id="addcontact_number4"
                                onclick="editText('contact_number4')"
                              >
                                <div class="af_la">
                                  Contact Number <span class="reqstar">*</span>
                                </div>
                                <div class="af_ra">
                                  <input
                                    name="contact_number"
                                    id="contact_number4"
                                    class=" required number"
                                    minlength="0"
                                    maxlength="12"
                                    placeholder="Your mobile number"
                                    type="text"
                                  />
                                </div>
                                <div class="afh">
                                  <input
                                    name="jsondata[]"
                                    id="jsoncontact_number4"
                                    value='{"type":"text","lable_name":"Contact Number","lable_required":"*","field_name":"contact_number","field_id":"contact_number4","validation":" required number","minimum":"0","maximum":"12","placeholder":"Your mobile number"}'
                                    type="hidden"
                                  />
                                </div>
                              </div>
                              <div
                                class="af_r_new"
                                id="addcomment5"
                                onclick="editTextArea('comment5')"
                              >
                                <div class="af_la">
                                  Comment <span class="reqstar">*</span>
                                </div>
                                <div class="af_ra">
                                  <textarea
                                    class="textareaname"
                                    name="comment"
                                    id="comment5"
                                    minlength="0"
                                    maxlength="500"
                                    placeholder="Enter your comment"
                                  ></textarea>
                                </div>
                                <div class="afh">
                                  <input
                                    name="jsondata[]"
                                    id="jsoncomment5"
                                    value='{"type":"textarea","lable_name":"Comment","lable_required":"*","field_name":"comment","field_id":"comment5","validation":" required","minimum":"0","maximum":"500","placeholder":"Enter your comment"}'
                                    type="hidden"
                                  />
                                </div>
                              </div>
                            </div>
                            <div
                              class="lfsavebtn"
                              id="lfsavebtn"
                              style={{ display: "block" }}
                            >
                              <input
                                type="submit"
                                value="Preview Form"
                                id=""
                                class="viewsaveform"
                              />
                              <input
                                type="button"
                                onClick={() => openmodel()}
                                class="saveform"
                                id=""
                                value="Download Form"
                              />
                            </div>
                          </form>
                        </div>
                        <input
                          type="hidden"
                          value="1"
                          id="fcount"
                          name="fcount"
                        />
                      </div>
                    </div>
                    <div class="note">
                      Note: To change form title and receiver email, you need to
                      click over the field in right section and update according
                      to your requirement.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <MDBModal
            id="downloadmodel"
            tabindex="-1"
            labelledby="exampleModalLabel"
            v-model="downloadmodel"
          >
            <MDBModalHeader>
              <MDBModalTitle id="exampleModalLabel">
                Share your information
              </MDBModalTitle>
            </MDBModalHeader>

            <form onSubmit={submitView} id="reviewForm">
              <MDBModalBody>
                <div class="modal-body">
                  <div style={{ display: "none" }}>
                    <input type="hidden" name="_wpcf7" value="4265" />
                    <input type="hidden" name="_wpcf7_version" value="4.3.1" />
                    <input type="hidden" name="_wpcf7_locale" value="en_US" />
                    <input
                      type="hidden"
                      name="_wpcf7_unit_tag"
                      value="wpcf7-f4265-o1"
                    />
                    <input type="hidden" name="_wpnonce" value="356e2903be" />
                  </div>

                  <div class="form-group">
                    <div class="input-group">
                      <span class="input-group-text" id="inputGroupPrepend">
                        <i class="fa fa-user"></i>
                      </span>
                      <input
                        type="text"
                        v-model="formData['your-name']"
                        class="form-control"
                        placeholder="Name*"
                        id="UserName"
                        aria-describedby="inputGroupPrepend"
                      />
                    </div>
                    <div class="FormError">{/* {{ usarnameerror }} */}</div>
                  </div>

                  <div class="form-group">
                    <div class="input-group">
                      <span class="input-group-text" id="inputGroupPrepend">
                        <i class="fa fa-envelope"></i>
                      </span>
                      <input
                        type="email"
                        v-model="formData['your-email']"
                        class="form-control"
                        placeholder="Email*"
                        id="UserEmail"
                        aria-describedby="inputGroupPrepend"
                      />
                    </div>
                    <div class="FormError">{/* {{ emailerror }} */}</div>
                  </div>

                  <div class="form-group">
                    <div class="input-group">
                      <span class="input-group-text" id="inputGroupPrepend">
                        <i class="fa fa-phone"></i>
                      </span>
                      <input
                        type="text"
                        v-model="formData['your-phone']"
                        class="form-control"
                        placeholder="Phone*"
                        id="UserPhone"
                        aria-describedby="inputGroupPrepend"
                      />
                    </div>
                    <div class="FormError">{/* {{ phoneerror }} */}</div>
                  </div>

                  <div class="form-group">
                    <div class="form-group-google">
                      <div
                        id="recaptchaC"
                        style={{
                          transform: "scale(0.75)",
                          transformOrigin: "left top",
                        }}
                      ></div>
                      <div class="gcpc" id="captcha_msg">
                        {/* {{ reacptchaerror }} */}
                      </div>
                    </div>
                  </div>

                  <div class="form-group">
                    <div
                      class="display_success_message"
                      id="review_success_message"
                      style={{ display: "none" }}
                    ></div>
                    <div
                      class="display_error_message"
                      id="review_error_message"
                      style={{ display: "none" }}
                    ></div>
                  </div>
                </div>
              </MDBModalBody>

              <MDBModalFooter>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form_contactinput_row">
                      <input
                        type="submit"
                        value="Submit &amp; Download Now"
                        class="btn btn-primary wpcf7-submit"
                      />
                    </div>
                    <div v-if="loader" id="loadloader">
                      <img src="/img/loading-old.gif" />
                    </div>
                  </div>
                  <div class="col-md-6 text-right">
                    <div class="form_contactinput_row">
                      <Link
                        href="javascript:void(0)"
                        onClick={() => downloadform("sentip")}
                      >
                        No Thank You Direct Download
                      </Link>
                    </div>
                  </div>
                </div>
              </MDBModalFooter>
            </form>
          </MDBModal>
        </div>
      </section>
      <section class="gettoknow_sectins">
        <div class="gettoknow_sectins_in">
          <div class="container">
            <div class="titlesettop">
              Have a look on the advance and flexible set of features in our{" "}
              <span>Lead Generation Form Creator</span>
            </div>
            <div class="clear"></div>

            <div class="row">
              <div class="col-md-4">
                <div class="media">
                  <div class="media-left">
                    <Link href="#">
                      <img
                        class="media-object"
                        src="/img/leadgeneration/customizable.png"
                        alt="..."
                      />
                    </Link>
                  </div>
                  <div class="media-body">
                    <h4 class="media-heading">
                      Customise your Form title, background color and fields
                    </h4>
                    <p>
                      User can easily customize the form title, color and fields
                      to mathc your company's brand.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="media">
                  <div class="media-left">
                    <Link href="#">
                      <img
                        class="media-object"
                        src="/img/leadgeneration/drag.png"
                        alt="..."
                      />
                    </Link>
                  </div>
                  <div class="media-body">
                    <h4 class="media-heading">
                      Drag and drop field placements
                    </h4>
                    <p>
                      Place your text field wherever you want top, bottom or
                      appropriate place.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="media">
                  <div class="media-left">
                    <Link href="#">
                      <img
                        class="media-object"
                        src="/img/leadgeneration/put-in-box.png"
                        alt="..."
                      />
                    </Link>
                  </div>
                  <div class="media-body">
                    <h4 class="media-heading">
                      Put Label, validation and placeholder text for the fields
                    </h4>
                    <p>
                      Themes with ‘fit-all-screen’ compatibility allow user to
                      access from mobile as well as tablet.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="media">
                  <div class="media-left">
                    <Link href="#">
                      <img
                        class="media-object"
                        src="/img/leadgeneration/email.png"
                        alt="..."
                      />
                    </Link>
                  </div>
                  <div class="media-body">
                    <h4 class="media-heading">Email ID to send form values</h4>
                    <p>
                      Update the email id and send the query at your business
                      email.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="media">
                  <div class="media-left">
                    <Link href="#">
                      <img
                        class="media-object"
                        src="/img/leadgeneration/preview.png"
                        alt="..."
                      />
                    </Link>
                  </div>
                  <div class="media-body">
                    <h4 class="media-heading">Preview the Form</h4>
                    <p>
                      Preview your customized form and cross check all the
                      values.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="media">
                  <div class="media-left">
                    <Link href="#">
                      <img
                        class="media-object"
                        src="/img/leadgeneration/download-archive-tray.png"
                        alt="..."
                      />
                    </Link>
                  </div>
                  <div class="media-body">
                    <h4 class="media-heading">
                      Download your easy to install form script
                    </h4>
                    <p>
                      Download the lead form and embedded in your website
                      easily.
                    </p>
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
                {/* <!-- Brand and toggle get grouped for better mobile display --> */}
                <div class="navbar-header">
                  <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span class="navbar-toggler-icon"></span>
                  </button>
                </div>
                <div
                  class="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul class="navbar-nav me-auto">
                    <li>
                      <Link href="#features">Features</Link>
                    </li>
                    <li>
                      <Link href="#technologies">Technologies</Link>
                    </li>
                    <li>
                      <Link href="#support">Support</Link>
                    </li>
                    <li>
                      <Link href="#reviews">Reviews</Link>
                    </li>
                  </ul>
                  <ul class="navbar-nav ms-auto navbar-right">
                    <li>
                      <Link
                        class="page-scroll btn btn-default"
                        href="javascript:void(0);"
                        id="buy_now_1"
                        onClick={() => openEnquiryModal()}
                      >
                        <span>
                          <img
                            src="/img/leadgeneration/enquiry_btn_bg.png"
                            alt="enquiry"
                          />
                        </span>{" "}
                        Enquire Now
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </section>
        <section class="Frequently_Asked_Questions" id="features">
          <div class="container">
            <h3>
              Contact form php <span>Script</span>
            </h3>
            <p>
              Logicspice <strong>lead generation form builder</strong> can be
              embedded easily onto your website which is fully customizable to
              match your company’s brand. Customize it in your own way and
              Download the free lead generation PHP form script.{" "}
            </p>
            <p>
              Custom contact forms are essentially a handshake between you and
              your business prospects. The forms are essential for initiating
              the engagement between a business and customer. Customize your
              form to automatically send email notifications after a lead
              submits the form.{" "}
            </p>
            <p>
              This is very simple but powerful contact form generator. Forms are
              fully compatible with WordPress, Drupal, Joomla, or any other web
              site where you have option to add HTML code.{" "}
            </p>
            <p>
              These lead management <strong>PHP script</strong> also includes a
              captcha so, that users can be differentiated from bots. Captcha is
              an important tool that prevents fake lead generation from
              automated computers. Whenever a user would fill a form, he has to
              input the answer to the mathematical question asked in the
              captcha. If you don’t use a captcha in a lead generation, it could
              result in degradation of the quality of leads generated so, keep
              the security measures in mind it is necessary to have captcha in
              forms.
            </p>
          </div>
        </section>
        <section class="used_technology_section" id="technologies">
          <div class="container">
            <h4 class="title_main">
              <span>Used Technologies</span> and Server Requirements
            </h4>
            <div class="used_technology_section_dataa">
              <ul>
                <li data-aos="fade-up">
                  <div class="icntechimg">
                    <img src="/img/jobboard/bootstrap.png" alt="manager_icn" />
                  </div>
                  <div class="icntechimg_nm">Bootstrap</div>
                </li>
                <li data-aos="fade-up">
                  <div class="icntechimg">
                    <img src="/img/jobboard/css.png" alt="manager_icn" />
                  </div>
                  <div class="icntechimg_nm">CSS3</div>
                </li>
                <li data-aos="fade-up">
                  <div class="icntechimg">
                    <img src="/img/jobboard/html-5.png" alt="manager_icn" />
                  </div>
                  <div class="icntechimg_nm">HTML5</div>
                </li>
                <li data-aos="fade-up">
                  <div class="icntechimg">
                    <img
                      src="/img/jobboard/tech_php_icon.png"
                      alt="manager_icn"
                    />
                  </div>
                  <div class="icntechimg_nm">PHP</div>
                </li>
                <li data-aos="fade-up">
                  <div class="icntechimg">
                    <img src="/img/jobboard/javascript.png" alt="manager_icn" />
                  </div>
                  <div class="icntechimg_nm">Javascript</div>
                </li>
              </ul>
            </div>
          </div>
        </section>
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
                    src="/img/jobboard/free_remove_icon.png"
                    alt="manager_icn"
                  />
                </div>
                <div class="supportsettingtext">Free Brand Removal</div>
              </li>
              <li data-aos="fade">
                <div class="supportsetting_icn">
                  <img
                    src="/img/jobboard/access_secure_code_icon.png"
                    alt="manager_icn"
                  />
                </div>
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
                      <div class="people_star_num">20</div>
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
                          style={{ width: "100%" }}
                        ></div>
                      </div>
                      <div class="people_star_num">22</div>
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
                    title="Lead Generation Form Script"
                  />
                </div>
                <div class="col-md-12">
                  <div class="reviews_down_pro">
                    <div class="customers_review_sec_row_ra">
                      <div class="starget">
                        5 <i class="fa fa-star" aria-hidden="true"></i>
                      </div>
                      <span>Build an Online Store</span>
                    </div>
                    <div class="who_ratset">Oapriliao</div>
                    <div class="customer_review_stext">
                      Professional, Always put in extra effort, Good Knowledge.
                      One of the best Developer. Will continue to work with them
                      with upcoming project.
                    </div>
                  </div>
                  <div class="reviews_down_pro">
                    <div class="customers_review_sec_row_ra">
                      <div class="starget">
                        5 <i class="fa fa-star" aria-hidden="true"></i>
                      </div>
                      <span>
                        website interface design and back-end business
                        implementation using php
                      </span>
                    </div>
                    <div class="who_ratset">Emsall</div>
                    <div class="customer_review_stext">
                      The word "perfect" is not enough to describe the
                      capability of Logicspice. They are just wonderful and
                      willing to extend the effort until the customer satisfied,
                      definitely will re-hire them
                    </div>
                  </div>
                  <div class="reviews_down_pro">
                    <div class="customers_review_sec_row_ra">
                      <div class="starget">
                        5 <i class="fa fa-star" aria-hidden="true"></i>
                      </div>
                      <span>Online Box Office</span>
                    </div>
                    <div class="who_ratset">Konataalleyne</div>
                    <div class="customer_review_stext">
                      Excellent work. Would definitely use them again. Fast and
                      effective work.
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
                    headerTitle="Are your given source code modifiable?"
                    collapseId="flush-collapse1"
                  >
                    <p>
                      Yes, our given scripts are flexible. Clients can customize
                      according to their requirement.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="How can I get my form delivered?"
                    collapseId="flush-collapse2"
                  >
                    <p>
                      You can simply download it once you complete adding the
                      fields and text in the form.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Which technology will the generated forms support?"
                    collapseId="flush-collapse3"
                  >
                    <p>HTML, Javascript, Bootstrap, PHP</p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Can I use your script without any programming skills?"
                    collapseId="flush-collapse4"
                  >
                    <p>
                      You need to have basic knowledge of HTML and javascript to
                      integrate the form in your website.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="How many forms can I generate at a time?"
                    collapseId="flush-collapse5"
                  >
                    <p>
                      We provide unlimited downloads. You can download any
                      number of forms.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Can I change the fields label according to my requirement in the form?"
                    collapseId="flush-collapse6"
                  >
                    <p>
                      Yes, we provide you the option to create fields and rename
                      the labels as per your requirement.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Is it free to download these customize lead generation forms?"
                    collapseId="flush-collapse7"
                  >
                    <p>Yes, its totally free.</p>
                  </MDBAccordionItem>
                </MDBAccordion>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="clearfix"></div>
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
