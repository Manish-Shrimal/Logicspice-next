// "use client";
// import React, { useState, useEffect } from "react";
// import { Modal, Button } from "react-bootstrap";
// import Link from "next/link";
// import axios from "axios";
// import BaseAPI from "@/app/BaseAPI/BaseAPI";
// import Image from "next/image";
// import ReCAPTCHA from "react-google-recaptcha";

// const Contactusmodel = ({ modalStatus, toggle }) => {
//   let recaptchaKey = "6Lep5B8qAAAAABS1ppbvL1LHjDXYRjPojknlmdzo";

//   const [popupScProductContacts, setPopupScProductContacts] =
//     useState(modalStatus);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone_no: "",
//     message: "",
//     post_url: "https://lswebsitedemo.logicspice.com/fiverr-clone",
//   });
//   const [resultSuccess, setResultSuccess] = useState(false);
//   const [errors, setErrors] = useState({
//     usarnameerror: "",
//     emailerror: "",
//     phoneerror: "",
//     messageerror: "",
//     reacptchaerror: "",
//   });
//   const [loader, setLoader] = useState(false);
//   const [html, setHtml] = useState("");

//   useEffect(() => {
//     setPopupScProductContacts(modalStatus);
//   }, [modalStatus]);

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setFormData({
//       ...formData,
//       [id]: value,
//     });
//   };

//   // const validateForm = () => {
//   //   const newErrors = {};

//   //   if (!formData.name.trim()) {
//   //     newErrors.usarnameerror = "Name is required";
//   //   }

//   //   if (!formData.email) {
//   //     newErrors.emailerror = "Email is required";
//   //   } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//   //     newErrors.emailerror = "Email is invalid";
//   //   }

//   //   if (!formData.phone_no) {
//   //     newErrors.phoneerror = "Phone number is required";
//   //   } else if (!/^\d{10}$/.test(formData.phone_no)) {
//   //     newErrors.phoneerror = "Phone number is invalid";
//   //   }

//   //   if (!formData.message.trim()) {
//   //     newErrors.messageerror = "Message is required";
//   //   }

//   //   if (!formData.recaptcha) {
//   //     newErrors.reacptchaerror = "Please verify Recaptcha";
//   //   }

//   //   setErrors(newErrors);

//   //   return Object.keys(newErrors).length === 0;
//   // };
//   const validateForm = () => {
//     const newErrors = {};

//     if (!formData.name.trim()) {
//       newErrors.usarnameerror = "Name is required";
//     } else if (/[\d]/.test(formData.name)) {
//       newErrors.usarnameerror = "Name cannot contain numbers";
//     }

//     if (!formData.email) {
//       newErrors.emailerror = "Email is required";
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.emailerror = "Email is invalid";
//     }

//     if (!formData.phone_no) {
//       newErrors.phoneerror = "Phone number is required";
//     } else if (!/^\d{10}$/.test(formData.phone_no)) {
//       newErrors.phoneerror = "Phone number must be 10 digits long";
//     }

//     if (!formData.message.trim()) {
//       newErrors.messageerror = "Message is required";
//     }

//     if (!formData.recaptchaToken) {
//       newErrors.reacptchaerror = "Please verify Recaptcha";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission
//     if (validateForm()) {
//       setLoader(true);
//       handleClick();
//       setLoader(false);
//     }
//   };
//   const onRecaptchaChange = (token) => {
//     setFormData({
//       ...formData,
//       recaptchaToken: token,
//     });
//   };

//   const close = () => {
//     setPopupScProductContacts(false);
//     toggle();
//   };

//   const stopPropagation = (e) => {
//     e.stopPropagation();
//   };

//   const handleClick = async () => {
//     console.log("clicking on")

//     if(validateForm()) {
//       setLoader(true);
//       handleClick();
//       setLoader(false);
//     }
//     try {
//       const response = await axios.post(BaseAPI + "/pages/contact", formData);
//       if (response.data.status === 200) {
//         setResultSuccess(true);
//         console.log("click");
//       }
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   return (
//     <div style={{ display: modalStatus ? "block" : "none" }}>
//       <div onClick={close}>
//         <Modal
//           id="popup_sc_product_contacts"
//           tabIndex="-1"
//           labelledby="exampleModalLabel"
//           show={popupScProductContacts}
//           className="contact-modal"
//           onHide={close}
//         >
//           <div
//             className="modal-dialog ContactModalDialog"
//             role="document"
//             onClick={stopPropagation}
//           >
//             <div className="modal-content ContactModalContent">
//               <button
//                 type="button"
//                 className="close"
//                 data-dismiss="modal"
//                 aria-label="Close"
//                 onClick={close}
//               >
//                 <span aria-hidden="true">×</span>
//               </button>
//               <div className="row m-0">
//                 <div className="col-sm-6 col-md-8 padding-no">
//                   {!resultSuccess ? (
//                     <>
//                       <div className="modal-header">
//                         <h4 className="modal-title" id="myModalLabel">
//                           contact us
//                           <span>
//                             <Image
//                               width={100}
//                               height={100}
//                               src="/img/contactus/contact-img.png"
//                               alt=""
//                             />
//                           </span>
//                         </h4>
//                       </div>
//                       <form
//                         onSubmit={handleSubmit}
//                         enctype="multipart/form-data"
//                         name="contact"
//                         id="slide_contact"
//                         acceptCharset="utf-8"
//                         noValidate
//                       >
//                         <div style={{ display: "none" }}>
//                           <input type="hidden" name="_method" value="POST" />
//                         </div>
//                         <div className="modal-body">
//                           <div className="form-group">
//                             <div className="input-group">
//                               <span className="input-group-addon">
//                                 <Image
//                                   width={30}
//                                   height={100}
//                                   src="/img/contactus/con-user.png"
//                                   alt=""
//                                 />
//                               </span>
//                               <input
//                                 onChange={handleChange}
//                                 placeholder="Full Name"
//                                 size="40"
//                                 className="form-control required"
//                                 type="text"
//                                 id="name"
//                                 value={formData.name}
//                               />
//                             </div>
//                             <div className="FormError">
//                               {errors.usarnameerror}
//                             </div>
//                           </div>
//                           <div className="form-group">
//                             <div className="input-group">
//                               <span className="input-group-addon">
//                                 <Image
//                                   width={30}
//                                   height={100}
//                                   src="/img/contactus/con-email.png"
//                                   alt=""
//                                 />
//                               </span>
//                               <input
//                                 onChange={handleChange}
//                                 placeholder="Email Address"
//                                 size="40"
//                                 className="form-control required"
//                                 type="text"
//                                 id="email"
//                                 value={formData.email}
//                               />
//                             </div>
//                             <div className="FormError">{errors.emailerror}</div>
//                           </div>
//                           <div className="form-group">
//                             <div className="input-group">
//                               <span className="input-group-addon">
//                                 <Image
//                                   width={30}
//                                   height={100}
//                                   src="/img/contactus/con-phone.png"
//                                   alt=""
//                                 />
//                               </span>
//                               <input
//                                 onChange={handleChange}
//                                 placeholder="Contact Number"
//                                 size="40"
//                                 className="form-control"
//                                 type="text"
//                                 id="phone_no"
//                                 value={formData.phone_no}
//                               />
//                             </div>
//                             {/* <div className="FormError">{errors.phoneerror}</div> */}
//                             {errors.phoneerror && (
//                               <span>{errors.phoneerror}</span>
//                             )}
//                           </div>
//                           <div className="form-group">
//                             <div className="input-group">
//                               <span className="input-group-addon">
//                                 <Image
//                                   width={30}
//                                   height={100}
//                                   src="/img/contactus/con-massege.png"
//                                   alt=""
//                                 />
//                               </span>
//                               <textarea
//                                 onChange={handleChange}
//                                 placeholder="Message"
//                                 className="required form-control"
//                                 size="50"
//                                 rows="4"
//                                 id="message"
//                                 value={formData.message}
//                               />
//                             </div>
//                             <div className="FormError">
//                               {errors.messageerror}
//                             </div>
//                           </div>
//                           <div className="form-group buttonSubmit">
//                             <div className="form-group-google">
//                               {/* <ReCAPTCHA
//                                 key={recaptchaKey}
//                                 sitekey={recaptchaKey}
//                               /> */}
//                               <ReCAPTCHA
//                                 key={recaptchaKey}
//                                 sitekey={recaptchaKey}
//                                 onChange={onRecaptchaChange}
//                               />
//                               {/* <div
//                                 id="recaptchaContact"
//                                 className="g-recaptcha"
//                               ></div> */}
//                               <div className="gcpc" id="captcha_msg">
//                                 {errors.reacptchaerror}
//                               </div>
//                             </div>

//                             <div className="form-group-btn">
//                               <input
//                                 type="hidden"
//                                 id="postUrl"
//                                 value="http://www.logicspice.com/job-board-software"
//                                 name="data[User][post_url]"
//                               />
//                               <input
//                                 type="button"
//                                 id="googletrack"
//                                 className="btn btn-primary"
//                                 onClick={handleClick}
//                                 value="Submit your query"
//                               />
//                               {loader && (
//                                 <div className="side_page" id="loadloader6">
//                                   <Image
//                                     width={100}
//                                     height={100}
//                                     src="/img/loading-old.gif"
//                                     alt=""
//                                   />
//                                 </div>
//                               )}
//                             </div>
//                           </div>
//                         </div>

//                         <div
//                           className="display_success_message"
//                           id="side_success_message"
//                           style={{ display: "none" }}
//                         ></div>

//                         <div
//                           className="display_error_message"
//                           id="side_error_message"
//                           style={{ display: "none" }}
//                         ></div>

//                         <div className="clearfix"></div>
//                       </form>
//                     </>
//                   ) : (
//                     <div className="thk_sdd" id="thnaks_section">
//                       <section className="thanks_you thnks_se">
//                         <div className="">
//                           <div className="sid_oivd smwood smwoodde">
//                             <div className="panel">
//                               <div className="panel-thanks">
//                                 <span
//                                   className="thnk_ss"
//                                   id="thnak_message_sec"
//                                 >
//                                   Thank you, we have received your message
//                                 </span>
//                                 <p className="hh_cls" id="sub_message">
//                                   We will get back to you within the next 24
//                                   hours.
//                                 </p>

//                                 <span
//                                   id="pnglnk"
//                                   dangerouslySetInnerHTML={{ __html: html }}
//                                 ></span>
//                                 <a
//                                   onClick={close}
//                                   className="btn btn_kcls"
//                                   id="pop_clos"
//                                   href="javascript:void(0);"
//                                 >
//                                   OK
//                                 </a>
//                                 <div className="ftt_lon d-flex justify-content-center">
//                                   <a href="/" className="">
//                                     <Image
//                                       width={250}
//                                       height={100 / (100 / 100)}
//                                       src="/img/logo.png"
//                                       alt=""
//                                     />
//                                   </a>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </section>
//                     </div>
//                   )}
//                 </div>
//                 <div className="col-sm-6 col-md-4 padding-no">
//                   <div className="logicspice-contact">
//                     <div className="logicspice-contact-bx">
//                       <label>MAIL US</label>
//                       <div className="logicspice-mail">
//                         <a href="mailto:info@logicspice.com">
//                           <Image
//                             width={100}
//                             height={100}
//                             src="/img/contactus/logic-mail.png"
//                             alt=""
//                           />{" "}
//                           info@logicspice.com
//                         </a>
//                       </div>
//                     </div>
//                     <div className="logicspice-contact-bx">
//                       <label>OUR SKYPE ID</label>
//                       <div className="logicspice-mail">
//                         <a href="skype:logicspice?call">
//                           <Image
//                             width={100}
//                             height={100}
//                             src="/img/contactus/logic-skyap.png"
//                             alt=""
//                           />{" "}
//                           logicspice
//                         </a>
//                       </div>
//                     </div>
//                     <div className="logicspice-contact-bx logicspice-call">
//                       <label>CALL US</label>
//                       <div className="logicspice-call-dtl">
//                         <i>
//                           <Image
//                             width={30}
//                             height={100}
//                             src="/img/globalpages/usa.png"
//                             alt=""
//                           />
//                         </i>
//                         <span>+1-616-929-4064</span>
//                       </div>
//                       <div className="logicspice-call-dtl">
//                         <i>
//                           <Image
//                             width={30}
//                             height={100}
//                             src="/img/globalpages/UK.png"
//                             alt=""
//                           />
//                         </i>
//                         <span>+44782-404-8483</span>
//                       </div>
//                       <div className="logicspice-call-dtl">
//                         <i>
//                           <Image
//                             width={30}
//                             height={100}
//                             src="/img/contactus/india_flag.png"
//                             alt=""
//                           />
//                         </i>
//                         <span>+91-9829559922</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </Modal>
//       </div>
//     </div>
//   );
// };

// export default Contactusmodel;

"use client";
import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import axios from "axios";
import BaseAPI from "@/app/BaseAPI/BaseAPI";
import Image from "next/image";
import ReCAPTCHA from "react-google-recaptcha";

const Contactusmodel = ({ modalStatus, toggle }) => {
  const recaptchaKey = "6Lep5B8qAAAAABS1ppbvL1LHjDXYRjPojknlmdzo";

  const [popupScProductContacts, setPopupScProductContacts] =
    useState(modalStatus);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_no: "",
    message: "",
    post_url: "https://lswebsitedemo.logicspice.com/fiverr-clone",
    recaptchaToken: "",
  });
  const [resultSuccess, setResultSuccess] = useState(false);
  const [errors, setErrors] = useState({});
  const [loader, setLoader] = useState(false);
  const [html, setHtml] = useState("");

  useEffect(() => {
    setPopupScProductContacts(modalStatus);
  }, [modalStatus]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.usarnameerror = "Name is required";
    } else if (/[\d]/.test(formData.name)) {
      newErrors.usarnameerror = "Name cannot contain numbers";
    }

    if (!formData.email) {
      newErrors.emailerror = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.emailerror = "Email is invalid";
    }

    if (!formData.phone_no) {
      newErrors.phoneerror = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone_no)) {
      newErrors.phoneerror = "Phone number must be 10 digits long";
    }

    if (!formData.message.trim()) {
      newErrors.messageerror = "Message is required";
    }

    if (!formData.recaptchaToken) {
      newErrors.reacptchaerror = "Please verify Recaptcha";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setLoader(true);
      try {
        const response = await axios.post(BaseAPI + "/pages/contact", formData);
        if (response.data.status === 200) {
          setResultSuccess(true);
        }
      } catch (error) {
        console.error("Submission error:", error.message);
      }
    }
  };

  const onRecaptchaChange = (token) => {
    setFormData((prevData) => ({
      ...prevData,
      recaptchaToken: token,
    }));
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
          <div
            className="modal-dialog ContactModalDialog"
            role="document"
            onClick={stopPropagation}
          >
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
                          Contact Us
                          <span>
                            <Image
                              width={100}
                              height={100}
                              src="/img/contactus/contact-img.png"
                              alt="Contact Us"
                            />
                          </span>
                        </h4>
                      </div>
                      <form
                        onSubmit={handleSubmit}
                        encType="multipart/form-data"
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
                                <Image
                                  width={30}
                                  height={100}
                                  src="/img/contactus/con-user.png"
                                  alt="User"
                                />
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
                                <Image
                                  width={30}
                                  height={100}
                                  src="/img/contactus/con-email.png"
                                  alt="Email"
                                />
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
                                <Image
                                  width={30}
                                  height={100}
                                  src="/img/contactus/con-phone.png"
                                  alt="Phone"
                                />
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
                            {/* {errors.phoneerror && (
                              <span>{errors.phoneerror}</span>
                            )} */}
                            <div className="FormError">{errors.phoneerror}</div>
                          </div>
                          <div className="form-group">
                            <div className="input-group">
                              <span className="input-group-addon">
                                <Image
                                  width={30}
                                  height={100}
                                  src="/img/contactus/con-massege.png"
                                  alt="Message"
                                />
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
                          <div className="form-group buttonSubmit">
                            <div className="form-group-google">
                              <ReCAPTCHA
                                key={recaptchaKey}
                                sitekey={recaptchaKey}
                                onChange={onRecaptchaChange}
                              />
                              <div className="gcpc FormError" id="captcha_msg">
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
                              <button
                                type="submit"
                                id="googletrack"
                                className="btn btn-primary"
                              >
                                Submit your query
                              </button>
                              {loader && (
                                <div className="side_page" id="loadloader6">
                                  <Image
                                    width={100}
                                    height={100}
                                    src="/img/loading-old.gif"
                                    alt="Loading"
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
                                <div className="ftt_lon d-flex justify-content-center">
                                  <a href="/" className="">
                                    <Image
                                      width={250}
                                      height={100 / (100 / 100)}
                                      src="/img/logo.png"
                                      alt=""
                                    />
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
                          <Image
                            width={100}
                            height={100}
                            src="/img/contactus/logic-mail.png"
                            alt=""
                          />{" "}
                          info@logicspice.com
                        </a>
                      </div>
                    </div>
                    <div className="logicspice-contact-bx">
                      <label>OUR SKYPE ID</label>
                      <div className="logicspice-mail">
                        <a href="skype:logicspice?call">
                          <Image
                            width={100}
                            height={100}
                            src="/img/contactus/logic-skyap.png"
                            alt=""
                          />{" "}
                          logicspice
                        </a>
                      </div>
                    </div>
                    <div className="logicspice-contact-bx logicspice-call">
                      <label>CALL US</label>
                      <div className="logicspice-call-dtl">
                        <i>
                          <Image
                            width={30}
                            height={100}
                            src="/img/globalpages/usa.png"
                            alt=""
                          />
                        </i>
                        <span>+1-616-929-4064</span>
                      </div>
                      <div className="logicspice-call-dtl">
                        <i>
                          <Image
                            width={30}
                            height={100}
                            src="/img/globalpages/UK.png"
                            alt=""
                          />
                        </i>
                        <span>+44782-404-8483</span>
                      </div>
                      <div className="logicspice-call-dtl">
                        <i>
                          <Image
                            width={30}
                            height={100}
                            src="/img/contactus/india_flag.png"
                            alt=""
                          />
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
