"use client";
import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

const Enquirymodal = ({ modalStatus, toggle, title }) => {
  const [popupScProductEnquiry, setPopupScProductEnquiry] =
    useState(modalStatus);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_no: "",
    budget: "",
    message: "",
    product_name: "",
    post_slug: "",
    post_url: "",
  });
  const [formErrors, setFormErrors] = useState({
    usernameerror: "",
    emailerror: "",
    phoneerror: "",
    budgeterror: "",
    messageerror: "",
    reacptchaerror: "",
  });
  const [resultSuccess, setResultSuccess] = useState(false);
  const [loader, setLoader] = useState(false);

  const submitEnquiryForm = (e) => {
    e.preventDefault();
    // Your form submission logic here
    console.log(formData); // Example: Logging form data
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
                      <form
                        encType="multipart/form-data"
                        onSubmit={submitEnquiryForm}
                        name="request"
                        id="request_ppp"
                        acceptCharset="utf-8"
                        noValidate
                      >
                        <div className="modal-body">
                          <div className="form-group">
                            <div className="input-group">
                              <span className="input-group-text">
                                <i className="fa fa-user"></i>
                              </span>
                              <input
                                type="text"
                                value={formData.name}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    name: e.target.value,
                                  })
                                }
                                className="form-control"
                                placeholder="Your Name *"
                                id="UserName"
                                aria-describedby="inputGroupPrepend"
                              />
                            </div>
                            <div className="FormError">
                              {formErrors.usernameerror}
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="input-group">
                              <span className="input-group-text">
                                <i className="fa fa-envelope"></i>
                              </span>
                              <input
                                type="email"
                                value={formData.email}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    email: e.target.value,
                                  })
                                }
                                className="form-control"
                                placeholder="Your Email *"
                                id="UserEmail"
                                aria-describedby="inputGroupPrepend"
                              />
                            </div>
                            <div className="FormError">
                              {formErrors.emailerror}
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="input-group">
                              <span className="input-group-text">
                                <i className="fa fa-phone"></i>
                              </span>
                              <input
                                type="text"
                                value={formData.phone_no}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    phone_no: e.target.value,
                                  })
                                }
                                className="form-control"
                                placeholder="Your Mobile Number"
                                id="UserPhoneNo"
                                aria-describedby="inputGroupPrepend"
                              />
                            </div>
                            <div className="FormError">
                              {formErrors.phoneerror}
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="input-group">
                              <span className="input-group-text">
                                <i className="fa fa-dollar"></i>
                              </span>
                              <input
                                type="text"
                                value={formData.budget}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    budget: e.target.value,
                                  })
                                }
                                className="form-control"
                                placeholder="Budget (optional)"
                                id="UserBudget"
                                aria-describedby="inputGroupPrepend"
                              />
                            </div>
                            <div className="FormError">
                              {formErrors.budgeterror}
                            </div>
                          </div>
                          <div className="form-group">
                            <textarea
                              value={formData.message}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  message: e.target.value,
                                })
                              }
                              placeholder="Your Message *"
                              className="form-control"
                              size="50"
                              rows="4"
                              noResize="1"
                              id="UserMessage"
                            ></textarea>
                            <div className="FormError">
                              {formErrors.messageerror}
                            </div>
                          </div>
                          <div className="form-group">
                            <div
                              id="recaptchaEnquiry"
                              className="g-recaptcha"
                            ></div>
                            <div className="gcpc" id="captcha_msg">
                              {formErrors.reacptchaerror}
                            </div>
                          </div>
                          <div className="form-group">
                            <div
                              className="display_success_message"
                              id="request_success_message"
                              style={{
                                display: resultSuccess ? "block" : "none",
                              }}
                            ></div>
                            <div
                              className="display_error_message"
                              id="request_error_message"
                              style={{
                                display: resultSuccess ? "none" : "block",
                              }}
                            ></div>
                          </div>
                        </div>
                        <div className="modal-footer">
                          <input
                            type="hidden"
                            id="contact_fr1"
                            value={formData.product_name}
                          />
                          <input
                            type="hidden"
                            id="contact_slug"
                            value={formData.post_slug}
                          />
                          <input type="hidden" value={formData.post_url} />
                          <input
                            title="Send"
                            className="btn btn-primary"
                            size="30"
                            label=""
                            type="submit"
                            value="Request Live Demo Access!"
                          />
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
