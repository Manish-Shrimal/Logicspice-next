"use client";
import React, { useState, useEffect } from "react";
// import { MDBModal } from 'mdb-react-ui-kit';
import { Modal, Button } from "react-bootstrap";

const Contactusmodel = ({ modalStatus, toggle, title }) => {
  const [popupScReview, setPopupScReview] = useState(modalStatus);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_no: "",
    message: "",
  });
  const [resultSuccess, setResultSuccess] = useState(false);
  const [errors, setErrors] = useState({
    usarnameerror: "",
    emailerror: "",
    phoneerror: "",
    messageerror: "",
    reacptchaerror: "",
  });
  const [loader, setLoader] = useState(false);
  const [html, setHtml] = useState("");

  useEffect(() => {
    setPopupScReview(modalStatus);
  }, [modalStatus]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
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
          <div className="modal-dialog">
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
                      <div className="mb-3">
                        <div id="recaptchaQ" className="g-recaptcha"></div>
                        {errors.recaptcha && (
                          <div className="invalid-feedback d-block">
                            {errors.recaptcha}
                          </div>
                        )}
                      </div>
                      {loader && (
                        <div className="popup_loader">
                          <img
                            src="./assets/img/loading-old.gif"
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
