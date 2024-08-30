// "use client";
// import Link from "next/link";
// import React, { useEffect, useState } from "react";
// import Navbar from "@/app/Components/Navbar";
// import Footer from "@/app/Components/Footer";
// import "../elements.css";
// import Contactusmodel from "@/app/Components/Contactusmodel";
// import Image from "next/image";
// import "@fortawesome/fontawesome-free/css/all.css";

// const Page = () => {
//   const [modalOpen, setModalOpen] = useState(false);

//   const toggleModal = () => {
//     setModalOpen(!modalOpen);
//   };
//   return (
//     <>
//       <Navbar />
//       <section
//         className="resources-header"
//         style={{
//           background: "url(/img/ourteam/we_are_hiring.png)",
//         }}
//       >
//         <div className="container">
//           <span>We Are Hiring - Apply Now</span>
//         </div>
//       </section>
//       <section className="breadcrems_header">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-6">
//               <h1>We Are Hiring</h1>
//             </div>
//             <div className="col-md-6">
//               <ol className="breadcrumb">
//                 <li>
//                   <a href="/">Home</a>
//                 </li>
                
//                 <li>We Are Hiring</li>
//               </ol>
//             </div>
//           </div>
//         </div>
//       </section>
//       <section className="content_area SubmitResume ">
      
//         <div className="container">
       
//           <div className="ersu_message suuu_msg" id="suc_msg">
//             {" "}
//           </div>
//           <div className="form-group row">
//             <div className="col-md-5">&nbsp;</div>
//           </div>
//           <h3>
//             Submit Your Resume{" "}
//             <Link href="/career" className="curr_btn" size="30" label="">
//               (See our current openings)
//             </Link>
//           </h3>
//           <form
//             action="/apply-now"
//             enctype="multipart/form-data"
//             name="applynow"
//             id="applynow"
//             method="post"
//             accept-charset="utf-8"
//             novalidate="novalidate"
//           >
//             <div style={{ display: "none" }}>
//               <input type="hidden" name="_method" value="POST" />
//             </div>{" "}
//             <div className="form-group row">
//               <div className="col-md-6">
//                 <input
//                   name="data[Appliedjob][name]"
//                   placeholder="Your Name*"
//                   value=""
//                   size="40"
//                   className="required form-control"
//                   type="text"
//                   id="AppliedjobName"
//                 />{" "}
//               </div>
//               <div className="col-md-6">
//                 <input
//                   name="data[Appliedjob][email]"
//                   placeholder="Email*"
//                   value=""
//                   size="40"
//                   className="required form-control email"
//                   type="text"
//                   id="AppliedjobEmail"
//                 />{" "}
//               </div>
//             </div>
//             <div className="form-group row">
//               <div className="col-md-6">
//                 <input
//                   name="data[Appliedjob][contact]"
//                   placeholder="Contact Number*"
//                   value=""
//                   size="40"
//                   className="required form-control"
//                   type="text"
//                   id="AppliedjobContact"
//                 />{" "}
//               </div>
//               <div className="col-md-6">
//                 <input
//                   name="data[Appliedjob][city_state]"
//                   placeholder="Current city &amp; state*"
//                   value=""
//                   size="40"
//                   className="required form-control"
//                   type="text"
//                   id="AppliedjobCityState"
//                 />{" "}
//               </div>
//             </div>
//             <div className="form-group row">
//               <div className="col-md-6">
//                 <input
//                   name="data[Appliedjob][currenct_ctc]"
//                   placeholder="Current CTC(LPA)*"
//                   value=""
//                   size="40"
//                   className="required form-control"
//                   type="text"
//                   id="AppliedjobCurrenctCtc"
//                 />{" "}
//               </div>
//               <div className="col-md-6">
//                 <input
//                   name="data[Appliedjob][expected_ctc]"
//                   placeholder="Expected CTC(LPA)*"
//                   value=""
//                   size="40"
//                   className="required form-control"
//                   type="text"
//                   id="AppliedjobExpectedCtc"
//                 />{" "}
//               </div>
//             </div>
//             <div className="form-group row">
//               <div className="col-md-6">
//                 <input
//                   name="data[Appliedjob][notice_days]"
//                   placeholder="Notice Days*"
//                   value=""
//                   size="40"
//                   className="required form-control"
//                   type="text"
//                   id="AppliedjobNoticeDays"
//                 />{" "}
//               </div>
//               <div className="col-md-6">
//                 <input
//                   name="data[Appliedjob][apply_for]"
//                   placeholder="Apply For*"
//                   value=""
//                   size="40"
//                   className="required form-control"
//                   type="text"
//                   id="AppliedjobApplyFor"
//                 />{" "}
//               </div>
//             </div>
//             <div className="form-group row">
//               <div className="col-md-6">
//                 <div className="row">
//                   <div className="col-sm-4">
//                     <label>Upload Resume*</label>
//                   </div>
//                   <div className="col-sm-8">
//                     <input
//                       type="file"
//                       name="data[Appliedjob][resume]"
//                       value=""
//                       size="40"
//                       className="required"
//                       id="AppliedjobResume"
//                     />{" "}
//                     <div className="help_text">
//                       Supported File Types: doc, docx, pdf (Max. 2MB).
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="form-group row">
//               <div className="col-md-6">
//                 <input
//                   title="Submit"
//                   className="btn btn-primary"
//                   size="30"
//                   label=""
//                   type="submit"
//                   value="Send"
//                 />

//                 {/* <div className="loadloader popup_loader" id="loadloaderApply">
//                   <img src="/img/loading-old.gif" alt="" />
//                 </div> */}
//               </div>
//             </div>
//           </form>{" "}
//         </div>
//       </section>
//       <div className="quoue_box_full_sec">
//         <div className="whatsapp-call">
//           <a
//             href="https://api.whatsapp.com/send?phone=+919829559922&amp;text=Hi Logicspice Team, I have a question regarding the solutions you provide. Please Help!"
//             target="_blank"
//           >
//             <Image
//               src="/img/images/whatsapp.png"
//               alt="whatsapp-icon"
//               height={50}
//               width={50}
//             />
//           </a>
//         </div>
//         <div className="quote_pop_plus quote_pop_in" onClick={toggleModal}>
//           <Contactusmodel modalStatus={modalOpen} toggle={toggleModal} />
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Page;




"use client";
import Link from "next/link";
import React, { useState } from "react";
import Navbar from "@/app/Components/Navbar";
import Footer from "@/app/Components/Footer";
import "../elements.css";
import Contactusmodel from "@/app/Components/Contactusmodel";
import Image from "next/image";
import "@fortawesome/fontawesome-free/css/all.css";

const Page = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    cityState: "",
    currentCtc: "",
    expectedCtc: "",
    noticeDays: "",
    applyFor: "",
    resume: null,
  });

  const [errors, setErrors] = useState({});

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
    setErrors({ ...errors, [name]: "" }); // Clear errors when user starts typing
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    // Basic validation
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
    }
    if (!formData.contact) newErrors.contact = "Contact Number is required";
    if (!formData.cityState) newErrors.cityState = "City and State are required";
    if (!formData.currentCtc) newErrors.currentCtc = "Current CTC is required";
    if (!formData.expectedCtc) newErrors.expectedCtc = "Expected CTC is required";
    if (!formData.noticeDays) newErrors.noticeDays = "Notice Days are required";
    if (!formData.applyFor) newErrors.applyFor = "Job title is required";
    if (!formData.resume) newErrors.resume = "Resume is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // If no errors, proceed with form submission
    console.log(formData);
    // Submit form data via fetch or axios
  };

  return (
    <>
      <Navbar />
      <section
        className="resources-header"
        style={{
          background: "url(/img/ourteam/we_are_hiring.png)",
        }}
      >
        <div className="container">
          <span>We Are Hiring - Apply Now</span>
        </div>
      </section>
      <section className="breadcrems_header">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1>We Are Hiring</h1>
            </div>
            <div className="col-md-6">
              <ol className="breadcrumb">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>We Are Hiring</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section className="content_area SubmitResume">
        <div className="container">
          <h3>
            Submit Your Resume{" "}
            <Link href="/career" className="curr_btn" size="30" label="">
              (See our current openings)
            </Link>
          </h3>
          <form
            onSubmit={handleSubmit}
            encType="multipart/form-data"
            name="applynow"
            id="applynow"
          >
            <div className="form-group row">
              <div className="col-md-6">
                <input
                  name="name"
                  placeholder="Your Name*"
                  value={formData.name}
                  onChange={handleChange}
                  className={`required form-control ${errors.name ? "is-invalid" : ""}`}
                  type="text"
                  id="AppliedjobName"
                />
                {errors.name && (
                  <div className="invalid-feedback">{errors.name}</div>
                )}
              </div>
              <div className="col-md-6">
                <input
                  name="email"
                  placeholder="Email*"
                  value={formData.email}
                  onChange={handleChange}
                  className={`required form-control email ${errors.email ? "is-invalid" : ""}`}
                  type="email"
                  id="AppliedjobEmail"
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>
            </div>
            <div className="form-group row">
              <div className="col-md-6">
                <input
                  name="contact"
                  placeholder="Contact Number*"
                  value={formData.contact}
                  onChange={handleChange}
                  className={`required form-control ${errors.contact ? "is-invalid" : ""}`}
                  type="text"
                  id="AppliedjobContact"
                />
                {errors.contact && (
                  <div className="invalid-feedback">{errors.contact}</div>
                )}
              </div>
              <div className="col-md-6">
                <input
                  name="cityState"
                  placeholder="Current city &amp; state*"
                  value={formData.cityState}
                  onChange={handleChange}
                  className={`required form-control ${errors.cityState ? "is-invalid" : ""}`}
                  type="text"
                  id="AppliedjobCityState"
                />
                {errors.cityState && (
                  <div className="invalid-feedback">{errors.cityState}</div>
                )}
              </div>
            </div>
            <div className="form-group row">
              <div className="col-md-6">
                <input
                  name="currentCtc"
                  placeholder="Current CTC(LPA)*"
                  value={formData.currentCtc}
                  onChange={handleChange}
                  className={`required form-control ${errors.currentCtc ? "is-invalid" : ""}`}
                  type="text"
                  id="AppliedjobCurrenctCtc"
                />
                {errors.currentCtc && (
                  <div className="invalid-feedback">{errors.currentCtc}</div>
                )}
              </div>
              <div className="col-md-6">
                <input
                  name="expectedCtc"
                  placeholder="Expected CTC(LPA)*"
                  value={formData.expectedCtc}
                  onChange={handleChange}
                  className={`required form-control ${errors.expectedCtc ? "is-invalid" : ""}`}
                  type="text"
                  id="AppliedjobExpectedCtc"
                />
                {errors.expectedCtc && (
                  <div className="invalid-feedback">{errors.expectedCtc}</div>
                )}
              </div>
            </div>
            <div className="form-group row">
              <div className="col-md-6">
                <input
                  name="noticeDays"
                  placeholder="Notice Days*"
                  value={formData.noticeDays}
                  onChange={handleChange}
                  className={`required form-control ${errors.noticeDays ? "is-invalid" : ""}`}
                  type="text"
                  id="AppliedjobNoticeDays"
                />
                {errors.noticeDays && (
                  <div className="invalid-feedback">{errors.noticeDays}</div>
                )}
              </div>
              <div className="col-md-6">
                <input
                  name="applyFor"
                  placeholder="Apply For*"
                  value={formData.applyFor}
                  onChange={handleChange}
                  className={`required form-control ${errors.applyFor ? "is-invalid" : ""}`}
                  type="text"
                  id="AppliedjobApplyFor"
                />
                {errors.applyFor && (
                  <div className="invalid-feedback">{errors.applyFor}</div>
                )}
              </div>
            </div>
            <div className="form-group row">
              <div className="col-md-6">
                <label htmlFor="AppliedjobResume">Upload Resume*</label>
                <input
                  type="file"
                  name="resume"
                  onChange={handleChange}
                  className={`required ${errors.resume ? "is-invalid" : ""}`}
                  id="AppliedjobResume"
                />
                {errors.resume && (
                  <div className="invalid-feedback">{errors.resume}</div>
                )}
                <div className="help_text">
                  Supported File Types: doc, docx, pdf (Max. 2MB).
                </div>
              </div>
            </div>
            <div className="form-group row">
              <div className="col-md-6">
                <input
                  title="Submit"
                  className="btn btn-primary"
                  size="30"
                  label=""
                  type="submit"
                  value="Send"
                />
              </div>
            </div>
          </form>
        </div>
      </section>
      <div className="quoue_box_full_sec">
        <div className="whatsapp-call">
          <a
            href="https://api.whatsapp.com/send?phone=+919829559922&amp;text=Hi Logicspice Team, I have a question regarding the solutions you provide. Please Help!"
            target="_blank"
          >
            <Image
              src="/img/images/whatsapp.png"
              alt="whatsapp-icon"
              height={50}
              width={50}
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

