"use client";
import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import Link from "next/link";


const Contactusmodel = ({ modalStatus, toggle }) => {
  const [popupScProductContacts, setPopupScProductContacts] = useState(modalStatus);
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
    setPopupScProductContacts(modalStatus);
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
    setPopupScProductContacts(false);
    toggle();
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <div style={{ display: modalStatus ? "block" : "none" }}>
      <div onClick={close}>
        <Modal
          id="popup_sc_product_contacts"
          tabIndex="-1"
          labelledby="exampleModalLabel"
          show={popupScProductContacts}
          className="contact-modal"
          onHide={close}
        >
          <div className="modal-dialog ContactModalDialog" role="document" onClick={stopPropagation}>
            <div className="modal-content ContactModalContent">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={close}
              >
                <span aria-hidden="true">×</span>
              </button>
              <div className="row m-0">
                <div className="col-sm-6 col-md-8 padding-no">
                  {!resultSuccess ? (
                    <>
                      <div className="modal-header">
                        <h4 className="modal-title" id="myModalLabel">
                        contact us
                          <span>
                            <img src="https://www.logicspice.com/app/webroot/img/images/contact-img.png" />
                          </span>
                        </h4>
                      </div>
                      <form
                        onSubmit={handleSubmit}
                        enctype="multipart/form-data"
                        name="contact"
                        id="slide_contact"
                        acceptCharset="utf-8"
                        noValidate
                      >
                        <div style={{ display: "none" }}>
                          <input type="hidden" name="_method" value="POST" />
                        </div>
                        <div className="modal-body">
                          <div className="form-group">
                            <div className="input-group">
                              <span className="input-group-addon">
                                <img src="https://www.logicspice.com/app/webroot/img/images/con-user.png" />
                              </span>
                              <input
                                onChange={handleChange}
                                placeholder="Full Name"
                                size="40"
                                className="form-control required"
                                type="text"
                                id="name"
                                value={formData.name}
                              />
                            </div>
                            <div className="FormError">
                              {errors.usarnameerror}
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="input-group">
                              <span className="input-group-addon">
                                <img src="https://www.logicspice.com/app/webroot/img/images/con-email.png" />
                              </span>
                              <input
                                onChange={handleChange}
                                placeholder="Email Address"
                                size="40"
                                className="form-control required"
                                type="text"
                                id="email"
                                value={formData.email}
                              />
                            </div>
                            <div className="FormError">{errors.emailerror}</div>
                          </div>
                          <div className="form-group">
                            <div className="input-group">
                              <span className="input-group-addon">
                                <img src="https://www.logicspice.com/app/webroot/img/images/con-phone.png" />
                              </span>
                              <input
                                onChange={handleChange}
                                placeholder="Contact Number"
                                size="40"
                                className="form-control"
                                type="text"
                                id="phone_no"
                                value={formData.phone_no}
                              />
                            </div>
                            <div className="FormError">{errors.phoneerror}</div>
                          </div>
                          <div className="form-group">
                            <div className="input-group">
                              <span className="input-group-addon">
                                <img src="https://www.logicspice.com/app/webroot/img/images/con-massege.png" />
                              </span>
                              <textarea
                                onChange={handleChange}
                                placeholder="Message"
                                className="required form-control"
                                size="50"
                                rows="4"
                                id="message"
                                value={formData.message}
                              />
                            </div>
                            <div className="FormError">
                              {errors.messageerror}
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="form-group-google">
                              <div
                                id="recaptchaContact"
                                className="g-recaptcha"
                              ></div>
                              <div className="gcpc" id="captcha_msg">
                                {errors.reacptchaerror}
                              </div>
                            </div>

                            <div className="form-group-btn">
                              <input
                                type="hidden"
                                id="postUrl"
                                value="http://www.logicspice.com/job-board-software"
                                name="data[User][post_url]"
                              />
                              <input
                                type="submit"
                                id="googletrack"
                                className="btn btn-primary"
                                value="SEND YOUR INQUIRY"
                              />
                              {loader && (
                                <div className="side_page" id="loadloader6">
                                  <img
                                    src="./assets/img/loading-old.gif"
                                    alt=""
                                  />
                                </div>
                              )}
                            </div>
                          </div>
                        </div>

                        <div
                          className="display_success_message"
                          id="side_success_message"
                          style={{ display: "none" }}
                        ></div>

                        <div
                          className="display_error_message"
                          id="side_error_message"
                          style={{ display: "none" }}
                        ></div>

                        <div className="clearfix"></div>
                      </form>
                    </>
                  ) : (
                    <div className="thk_sdd" id="thnaks_section">
                      <section className="thanks_you thnks_se">
                        <div className="">
                          <div className="sid_oivd smwood smwoodde">
                            <div className="panel">
                              <div className="panel-thanks">
                                <span
                                  className="thnk_ss"
                                  id="thnak_message_sec"
                                >
                                  Thank you, we have received your message
                                </span>
                                <p className="hh_cls" id="sub_message">
                                  We will get back to you within the next 24
                                  hours.
                                </p>

                                <span
                                  id="pnglnk"
                                  dangerouslySetInnerHTML={{ __html: html }}
                                ></span>
                                <a
                                  onClick={close}
                                  className="btn btn_kcls"
                                  id="pop_clos"
                                  href="javascript:void(0);"
                                >
                                  OK
                                </a>
                                <div className="ftt_lon">
                                  <a href="/" className="">
                                    <img src="./assets/img/logo.png" alt="" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                  )}
                </div>
                <div className="col-sm-6 col-md-4 padding-no">
                  <div className="logicspice-contact">
                    <div className="logicspice-contact-bx">
                      <label>MAIL US</label>
                      <div className="logicspice-mail">
                        <a href="mailto:info@logicspice.com">
                          <img src="https://www.logicspice.com/app/webroot/img/images/logic-mail.png" />{" "}
                          info@logicspice.com
                        </a>
                      </div>
                    </div>
                    <div className="logicspice-contact-bx">
                      <label>OUR SKYPE ID</label>
                      <div className="logicspice-mail">
                        <a href="skype:logicspice?call">
                          <img src="https://www.logicspice.com/app/webroot/img/images/logic-skyap.png" />{" "}
                          logicspice
                        </a>
                      </div>
                    </div>
                    <div className="logicspice-contact-bx logicspice-call">
                      <label>CALL US</label>
                      <div className="logicspice-call-dtl">
                        <i>
                          <img src="https://www.logicspice.com/app/webroot/img/images/count/usa.png" />
                        </i>
                        <span>+1-616-929-4064</span>
                      </div>
                      <div className="logicspice-call-dtl">
                        <i>
                          <img src="https://www.logicspice.com/app/webroot/img/images/count/UK.png" />
                        </i>
                        <span>+44782-404-8483</span>
                      </div>
                      <div className="logicspice-call-dtl">
                        <i>
                          <img src="https://www.logicspice.com/app/webroot/img/images/count/india.png" />
                        </i>
                        <span>+91-9829559922</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Contactusmodel;

