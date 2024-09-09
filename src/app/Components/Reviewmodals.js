"use client";
import React, { useState, useEffect, useRef } from "react";
// import { MDBModal } from 'mdb-react-ui-kit';
import { Modal, Button } from "react-bootstrap";
import Image from "next/image";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import BaseAPI from "../BaseAPI/BaseAPI";

const Contactusmodel = ({ modalStatus, toggle, title }) => {
  const recaptchaRef = useRef(null);
  const recaptchaKey = "6Lep5B8qAAAAABS1ppbvL1LHjDXYRjPojknlmdzo";
  const [popupScReview, setPopupScReview] = useState(modalStatus);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_no: "",
    message: "",
    product_name: "",
  });
  const [resultSuccess, setResultSuccess] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    reacptcha: "",
  });
  const [loader, setLoader] = useState(false);
  const [html, setHtml] = useState("");

  useEffect(() => {
    setPopupScReview(modalStatus);
  }, [modalStatus]);

  useEffect(() => {
    // Fetch the current URL and update the formData
    const currentUrl = window.location.href;
    // Extract the last part of the path
    const pathSegments = currentUrl.split('/');
    const lastSegment = pathSegments[pathSegments.length - 1];

    console.log(lastSegment, "lastSegment");

    setFormData((prevData) => ({
      ...prevData,
      product_name: lastSegment,
    }));
    // console.log(currentUrl,"currentUrl")
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;

    console.log(value)

    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Handle form submission
    let newErrors = {};

    // if (!isRecaptchaVerified) {
    //   newErrors.reacptchaerror = "Please verify that you are not a robot";
    // }

    const nameRegex = /^[a-zA-Z\s]+$/;
    if (!formData.name) {
      newErrors.usarnameerror = "Name is required";
    } else if(!nameRegex.test(formData.name)) {
      newErrors.usarnameerror = "Name can only contain letters and spaces";
    }

    if (formData.email === "") {
      newErrors.emailerror = "Please enter your email";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.emailerror = "Please enter a valid email address";
    }

    if (formData.message === "") {
      newErrors.messageerror = "Please enter your message";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try{

      const response = await axios.post(BaseAPI + "/pages/review", formData);

      if (response.data.status === 200) {
        setFormData({
          name: "",
          email: "",
          phone_no: "",
          message: "",
        });

        if (recaptchaRef.current) {
          recaptchaRef.current.reset();
        }
      }

    }catch(error){
      console.log(error.message)
    }

  };
  const onRecaptchaChange = (token) => {
    setFormData((prevData) => ({
      ...prevData,
      recaptchaToken: token,
    }));
    if (token) {
      setErrors((prevError) => ({
        ...prevError,
        recaptchaerror: "",
      }));
    }
  };

  const close = () => {
    setPopupScReview(false);
    toggle();
  };

  return (
    <div style={{ display: modalStatus ? "block" : "none" }}>
      <div>
        <Modal
          id="popup_sc_review"
          tabIndex="-1"
          labelledby="exampleModalLabel"
          show={popupScReview}
          //   className="contact-modal"
        >
          <div className="review_model">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Post your review for {title}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={close}
                ></button>
              </div>

              <form onSubmit={handleSubmit} id="reviewForm">
                <div className="modal-body">
                  {!resultSuccess ? (
                    <>
                      <div className="mb-3">
                        <div className="input-group">
                          <span
                            className="input-group-text"
                            id="inputGroupPrepend"
                          >
                            <i className="fa fa-user"></i>
                          </span>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Your Name *"
                            aria-describedby="inputGroupPrepend"
                            required
                          />
                          {errors.name && (
                            <div className="invalid-feedback d-block">
                              {errors.name}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="mb-3">
                        <div className="input-group">
                          <span
                            className="input-group-text"
                            id="inputGroupPrepend"
                          >
                            <i className="fa fa-envelope"></i>
                          </span>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Your Email *"
                            aria-describedby="inputGroupPrepend"
                            required
                          />
                          {errors.email && (
                            <div className="invalid-feedback d-block">
                              {errors.email}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="mb-3">
                        <div className="input-group">
                          <span
                            className="input-group-text"
                            id="inputGroupPrepend"
                          >
                            <i className="fa fa-phone"></i>
                          </span>
                          <input
                            type="text"
                            name="phone_no"
                            id="phone_no"
                            value={formData.phone_no}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Your Mobile Number"
                            aria-describedby="inputGroupPrepend"
                          />
                        </div>
                      </div>
                      <div className="mb-3">
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          id="message"
                          className="form-control"
                          placeholder="Your Message *"
                          rows="4"
                          required
                        ></textarea>
                        {errors.message && (
                          <div className="invalid-feedback d-block">
                            {errors.message}
                          </div>
                        )}
                      </div>
                      {/* <div className="mb-3">
                        <div id="recaptchaQ" className="g-recaptcha"></div>
                        {errors.recaptcha && (
                          <div className="invalid-feedback d-block">
                            {errors.recaptcha}
                          </div>
                        )}
                      </div> */}
                      <div className=" mb-3">
                        <ReCAPTCHA
                          key={recaptchaKey}
                          sitekey={recaptchaKey}
                          onChange={onRecaptchaChange}
                        />
                        <div className="gcpc FormError" id="captcha_msg">
                          {errors.reacptchaerror}
                        </div>
                      </div>

                      {loader && (
                        <div className="popup_loader">
                          <Image
                            width={100}
                            height={100}
                            src="/img/loading-old.gif"
                            alt="Loading..."
                          />
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="text-center">
                      <h5>Thank you for submitting your review for {title}!</h5>
                      <p>
                        Your review is under moderation. We will update you
                        soon.
                      </p>
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={handleClose}
                      >
                        OK
                      </button>
                    </div>
                  )}
                </div>
                {!resultSuccess && (
                  <div className="modal-footer">
                    <input
                      type="hidden"
                      name="product_name"
                      value={formData.product_name}
                    />
                    <button type="submit" className="btn btn-primary">
                      Send
                    </button>
                  </div>
                )}
              </form>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Contactusmodel;
