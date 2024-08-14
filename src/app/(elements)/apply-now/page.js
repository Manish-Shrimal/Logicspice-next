"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Navbar from "@/app/Components/Navbar";
import Footer from "@/app/Components/Footer";
import "../elements.css";
import Contactusmodel from "@/app/Components/Contactusmodel";
import Image from "next/image";
import "@fortawesome/fontawesome-free/css/all.css";c

const Page = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
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
                  <a href="/">Home</a>
                </li>
                <li> / </li>
                <li>We Are Hiring</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section className="content_area SubmitResume ">
        <div className="container">
          <div className="ersu_message suuu_msg" id="suc_msg">
            {" "}
          </div>
          <div className="form-group row">
            <div className="col-md-5">&nbsp;</div>
          </div>
          <h3>
            Submit Your Resume{" "}
            <Link href="/company/careers" className="curr_btn" size="30" label="">
              (See our current openings)
            </Link>
          </h3>
          <form
            action="/apply-now"
            enctype="multipart/form-data"
            name="applynow"
            id="applynow"
            method="post"
            accept-charset="utf-8"
            novalidate="novalidate"
          >
            <div style={{ display: "none" }}>
              <input type="hidden" name="_method" value="POST" />
            </div>{" "}
            <div className="form-group row">
              <div className="col-md-6">
                <input
                  name="data[Appliedjob][name]"
                  placeholder="Your Name*"
                  value=""
                  size="40"
                  className="required form-control"
                  type="text"
                  id="AppliedjobName"
                />{" "}
              </div>
              <div className="col-md-6">
                <input
                  name="data[Appliedjob][email]"
                  placeholder="Email*"
                  value=""
                  size="40"
                  className="required form-control email"
                  type="text"
                  id="AppliedjobEmail"
                />{" "}
              </div>
            </div>
            <div className="form-group row">
              <div className="col-md-6">
                <input
                  name="data[Appliedjob][contact]"
                  placeholder="Contact Number*"
                  value=""
                  size="40"
                  className="required form-control"
                  type="text"
                  id="AppliedjobContact"
                />{" "}
              </div>
              <div className="col-md-6">
                <input
                  name="data[Appliedjob][city_state]"
                  placeholder="Current city &amp; state*"
                  value=""
                  size="40"
                  className="required form-control"
                  type="text"
                  id="AppliedjobCityState"
                />{" "}
              </div>
            </div>
            <div className="form-group row">
              <div className="col-md-6">
                <input
                  name="data[Appliedjob][currenct_ctc]"
                  placeholder="Current CTC(LPA)*"
                  value=""
                  size="40"
                  className="required form-control"
                  type="text"
                  id="AppliedjobCurrenctCtc"
                />{" "}
              </div>
              <div className="col-md-6">
                <input
                  name="data[Appliedjob][expected_ctc]"
                  placeholder="Expected CTC(LPA)*"
                  value=""
                  size="40"
                  className="required form-control"
                  type="text"
                  id="AppliedjobExpectedCtc"
                />{" "}
              </div>
            </div>
            <div className="form-group row">
              <div className="col-md-6">
                <input
                  name="data[Appliedjob][notice_days]"
                  placeholder="Notice Days*"
                  value=""
                  size="40"
                  className="required form-control"
                  type="text"
                  id="AppliedjobNoticeDays"
                />{" "}
              </div>
              <div className="col-md-6">
                <input
                  name="data[Appliedjob][apply_for]"
                  placeholder="Apply For*"
                  value=""
                  size="40"
                  className="required form-control"
                  type="text"
                  id="AppliedjobApplyFor"
                />{" "}
              </div>
            </div>
            <div className="form-group row">
              <div className="col-md-6">
                <div className="row">
                  <div className="col-sm-4">
                    <label>Upload Resume*</label>
                  </div>
                  <div className="col-sm-8">
                    <input
                      type="file"
                      name="data[Appliedjob][resume]"
                      value=""
                      size="40"
                      className="required"
                      id="AppliedjobResume"
                    />{" "}
                    <div className="help_text">
                      Supported File Types: doc, docx, pdf (Max. 2MB).
                    </div>
                  </div>
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

                {/* <div className="loadloader popup_loader" id="loadloaderApply">
                  <img src="/img/loading-old.gif" alt="" />
                </div> */}
              </div>
            </div>
          </form>{" "}
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
