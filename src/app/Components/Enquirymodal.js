"use client";
import React, { useState, useEffect, useRef } from "react";
import { Modal, Button } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import BaseAPI from "../BaseAPI/BaseAPI";
import "@/app/services/services.css";

const Enquirymodal = ({ modalStatus, toggle, title }) => {
  const recaptchaKey = "6Lep5B8qAAAAABS1ppbvL1LHjDXYRjPojknlmdzo";
  const recaptchaRef = useRef(null);
  const [popupScProductEnquiry, setPopupScProductEnquiry] =
    useState(modalStatus);
    const [isRecaptchaVerified, setIsRecaptchaVerified] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_no: "",
    budget: "",
    message: "",
    product_name: "",
    post_slug: "",
    post_url: "",
    budget: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: "",
    product_name: "",
    post_slug: "",
    post_url: "",
    budget: "",
  });
  const [errors, setErrors] = useState({});

  const [resultSuccess, setResultSuccess] = useState(false);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    // Fetch the current URL and update the formData
    const currentUrl = window.location.href;
    // Extract the last part of the path
    const pathSegments = currentUrl.split('/');
    const lastSegment = pathSegments[pathSegments.length - 1];

    // console.log(lastSegment, "lastSegment");

    setFormData((prevData) => ({
      ...prevData,
      post_url: currentUrl,
      post_slug: lastSegment,
      product_name: lastSegment,
    }));
    // console.log(currentUrl,"currentUrl")
  }, []);

  const onRecaptchaChange = (token) => {
    if (token) {
      setIsRecaptchaVerified(true);
      setFormErrors((prevError) => ({
        ...prevError,
        recaptchaerror: "",
      }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setFormErrors((prevError) => ({
      ...prevError,
      [name]: "",
    }));
  };

  const submitEnquiryForm = async (e) => {
    e.preventDefault();
    console.log("en")
    const newErrors = {};

    if (!isRecaptchaVerified) {
      newErrors.recaptchaerror = "Please verify that you are not a robot";
    }

    if (formData.name === "") {
      newErrors.name = "Please enter your name";
    }

    if (formData.email === "") {
      newErrors.email = "Please enter your email";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (formData.message === "") {
      newErrors.message = "Please enter your message";
    }

    if (Object.keys(newErrors).length > 0) {
      setFormErrors(newErrors);
      return;
    }

    try {
      const response = await axios.post(BaseAPI + "/pages/enquire", formData);

      if (response.data.status === 200) {
        setFormData({
          name: "",
          email: "",
          company: "",
          phone_no: "",
          message: "",
        });

        if (recaptchaRef.current) {
          recaptchaRef.current.reset();
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const closeModal = () => {
    setPopupScProductEnquiry(false);
    toggle();
    // Additional logic to reset form data or perform other actions upon closing
  };
  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  useEffect(() => {
    setPopupScProductEnquiry(modalStatus);
  }, [modalStatus]);

  return (
    <div onClick={closeModal}>
      <Modal
        id="popup_sc_product_enquiry"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        show={popupScProductEnquiry}
        className="newpop_enqury"
        onHide={closeModal}
        backdrop="static" // Disable closing on backdrop click
        keyboard={false} // Disable closing on ESC key press
      >
        <div
          className="modal-dialog "
          role="document"
          onClick={stopPropagation}
        >
          {/* <div className="modal-content ModalContentEnqury"> */}
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
            onClick={closeModal}
          >
            {/* <span aria-hidden="true">&times;</span> */}
            <Image
              width={30}
              height={100}
              src="/img/contactus/close-img.png"
              alt="logo"
            />
          </button>
          <div className="logo-enqury">
            <Link href="/">
              <Image
                width={250}
                height={100 / (100 / 100)}
                src="/img/logo-white.png"
                alt="Mobile App & Web Development Company - Logicspice"
              />
            </Link>
          </div>

          <div className="">
            <div className="product-details">
              <h2>
                <span id="update_frm1">{title}</span>
              </h2>
            </div>
            <div className="ModalDialogEnqury">
              <div className="row">
                <div className="col-md-7">
                  <div className="modal-content ModalContentEnqury">
                    <div id="show_demo" className="show_fixxx">
                      <form>
                        <div className="modal-body">
                          <div className="form-group">
                            <div className="input-group">
                              <span className="input-group-text">
                                <i className="fa fa-user"></i>
                              </span>
                              <input
                                type="text"
                                name="name"
                                value={formData.name}
                                className={`form-control ${
                                  formErrors.name ? "fieldRequired" : ""
                                }`}
                                style={{ height: "40px" }}
                                placeholder="Your Name *"
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="input-group">
                              <span className="input-group-text">
                                <i className="fa fa-envelope"></i>
                              </span>
                              <input
                                type="email"
                                name="email"
                                value={formData.email}
                                className={`form-control ${
                                  formErrors.email ? "fieldRequired" : ""
                                }`}
                                placeholder="Your Email *"
                                style={{ height: "40px" }}
                                id="UserEmail"
                                aria-describedby="inputGroupPrepend"
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="input-group">
                              <span className="input-group-text">
                                <i className="fa fa-phone"></i>
                              </span>
                              <input
                                type="text"
                                name="phone_no"
                                value={formData.phone_no}
                                className="form-control"
                                placeholder="Your Mobile Number"
                                style={{ height: "40px" }}
                                id="UserPhoneNo"
                                aria-describedby="inputGroupPrepend"
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="input-group">
                              <span className="input-group-text">
                                <i className="fa fa-dollar"></i>
                              </span>
                              <input
                                type="text"
                                name="budget"
                                value={formData.budget}
                                className="form-control"
                                placeholder="Budget (optional)"
                                style={{ height: "40px" }}
                                id="UserBudget"
                                aria-describedby="inputGroupPrepend"
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className="form-group">
                            <textarea
                              value={formData.message}
                              name="message"
                              placeholder="Your Message *"
                              className={`form-control ${
                                formErrors.message ? "fieldRequired" : ""
                              }`}
                              size="50"
                              rows="4"
                              noResize="1"
                              id="UserMessage"
                              onChange={handleChange}
                            ></textarea>
                          </div>
                          <div className="form-group">
                            <ReCAPTCHA
                              key={recaptchaKey}
                              sitekey={recaptchaKey}
                              onChange={onRecaptchaChange}
                            />
                            <div className="gcpc FormError" id="captcha_msg">
                              {formErrors.reacptchaerror}
                            </div>
                          </div>
                        </div>
                        <div className="modal-footer">
                          <button
                            className="btn btn-primary"
                            size="30"
                            label=""
                            type="submit"
                            onClick={submitEnquiryForm}
                          >
                            SEND
                          </button>
                          {/* <input
                            type="hidden"
                            id="contact_fr1"
                            value={formData.product_name}
                          />
                          <input
                            type="hidden"
                            id="contact_slug"
                            value={formData.post_slug}
                          />
                          <input type="hidden" value={formData.post_url} /> */}
                          {/* <input
                            title="Send"
                            className="btn btn-primary"
                            size="30"
                            label=""
                            type="submit"
                            value="Request Live Demo Access!"
                          /> */}
                          <div
                            style={{ display: loader ? "block" : "none" }}
                            className="popup_loader"
                            id="loadloader2"
                          >
                            <Image
                              width={200}
                              height={100}
                              src="/img/loading-old.gif"
                              alt=""
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="ls-awards-swction">
                    <h3>Awards and Recognition</h3>
                    <div className="ls-awards-img">
                      <Image
                        width={400}
                        height={100}
                        src="/img/contactus/ls_award_img.png"
                        alt="logo"
                      />
                    </div>
                  </div>
                  <div className="ls-google-swction">
                    <div className="ls-google-img">
                      <Image
                        width={100}
                        height={100}
                        src="/img/contactus/google-reting.png"
                        alt="logo"
                      />
                    </div>
                    <p id="review_msg">
                      “Considering all the adjustments we asked for, the
                      patience they showed, extremely swift turnaround times,
                      good value for money and quality of work, they have shown
                      to be a great partner.
                    </p>
                    <div className="client-star">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <div className="client-name">D. Smith, Germany in USA</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
      </Modal>
    </div>
  );
};

export default Enquirymodal;
