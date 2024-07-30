"use client";
import React, { useState } from "react";
import Footer from "@/app/Components/Footer";
import NavBar from "@/app/Components/Navbar";
import "@/app/services/services.css";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import Image from "next/image";
import Link from "next/link";
import "@fortawesome/fontawesome-free/css/all.css";
import Enquirymodal from "@/app/Components/Enquirymodal";
import Contactusmodel from "@/app/Components/Contactusmodel";
import "../../resposive.css";
const Page = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    console.log(showModal);

    setShowModal(!showModal);
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <NavBar />
      <section className="inner-qa-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-6">
              <h1>
                Software <br />
                Testing Services
              </h1>
            </div>
            <div className="col-sm-6 col-md-6">
              <div className="qa-img">
                <Image
                  width={300}
                  height={500 / (100 / 100)}
                  src="/img/softwaretestingservices/qa-img.png"
                  alt="QA"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-qa-section" data-aos="fade-up">
        <div className="container">
          <div className="jumbotron">
            <h2>Software Quality Assurance and Testing Services </h2>
            <p>
              Software testing is a quality assurance (QA) process in which we
              analyze a system and its workflow with the intent to find the
              vulnerability of the application/product and also check whether it
              meets the specified project requirements. Every software system or
              app we develop, goes through the process of manual testing, in
              order to identify any gaps, errors, or missing requirements in
              contrary to the actual requirements and this professional practice
              strengthen our client&apos;s confidence in our software
              development services.
            </p>
            <p>
              Quality is the top criteria for any new innovative product or
              service and a valuable aspect for users for its selection. The
              software quality testing services include several software testing
              techniques and methodologies that help to enhance the quality of a
              web & mobile application. Our software testing for web & mobile
              includes various aspects like performance, functional and
              non-functional and security.
            </p>
            <p>
              We at Logicspice provide dedicated QA team & individuals who will
              work exclusively for a client&apos;s project and collaborate with
              the clientâ€™s staff.
            </p>
          </div>
        </div>
      </section>

      <section className="testing-qa-section" data-aos="fade-up">
        <div className="container">
          <h2>Types of Software Testing</h2>
          <div className="testin-bx">
            <div className="row">
              <div className="col-sm-6 col-md-6" data-aos="fade-right">
                <div className="tesitng-fild">
                  <div className="testing-top">
                    <i>
                      <Image
                       width={50}
                       height={500 / (100 / 100)}
                        src="/img/softwaretestingservices/qa-icon1.png"
                        alt="QA-Icon"
                      />
                    </i>
                    <h3>Manual Testing: </h3>
                  </div>
                  <p>
                    It&apos;s not easy to build a web & mobile application
                    perfectly in the first attempt, it includes a number of
                    development phases and there are strong possibilities of
                    errors. So here the software testing process helps to
                    achieve the &quot;perfect&quot; production quality of
                    software/ product. In this manual testing our QA takes over
                    the role of an end-user and test the whole project workflow
                    process to identify bugs.{" "}
                  </p>
                  <p>
                    There are different stages for manual testing such as unit
                    testing, integration testing, system testing, and user
                    acceptance testing etc.{" "}
                  </p>
                </div>
                <div className="tesitng-fild">
                  <div className="testing-top">
                    <i>
                      <Image
                        width={50}
                        height={100}
                        src="/img/softwaretestingservices/qa-icon2.png"
                        alt="QA-Icon"
                      />
                    </i>

                    <h3>Automation Testing</h3>
                  </div>
                  <p>
                    The automation software testing services are designed to
                    increase the efficiency & to reduce manual efforts and
                    costs. With the automation testing its easy to achieve
                    consistent & accurate results in minimum time. This process
                    involves automation of a manual process.{" "}
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-md-6" data-aos="fade-left">
                <div className="testing-img">
                  <Image
                  width={500}
                  height={500 / (100 / 100)}
                    src="/img/softwaretestingservices/qa-img2.png"
                    alt="testing-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testing-services-section" data-aos="fade-up">
        <div className="container">
          <h2>Software Testing Services To Enhance Customer Experience</h2>
          <div className="testin-sercvies">
            <div className="row">
              <div className="col-sm-6 col-md-6" data-aos="fade-right">
                <div className="testin-sercvies-bx">
                  <h3>Our Areas of Expertise</h3>
                  <ul className="list-group">
                    <li className="list-group-item">Functional Testing </li>
                    <li className="list-group-item">Compatibility testing </li>
                    <li className="list-group-item">Mobile Testing</li>
                    <li className="list-group-item">Performance Testing </li>
                    <li className="list-group-item">Regression Testing</li>
                    <li className="list-group-item">Cross browser testing </li>
                    <li className="list-group-item">Security Testing </li>
                    <li className="list-group-item">Usability Testing </li>
                  </ul>
                </div>
              </div>

              <div className="col-sm-6 col-md-6" data-aos="fade-left">
                <div className="form_quote form_testing">
                  <form
                    action="/pages/quote"
                    enctype="multipart/form-data"
                    name="quote"
                    id="quote"
                    method="post"
                    accept-charset="utf-8"
                  >
                    <h4>Get a Quote</h4>
                    <div className="form-group">
                      <input
                        name="data[User][name]"
                        placeholder="Your Full Name*"
                        value=""
                        size="40"
                        className="form-control required"
                        type="text"
                        id="UserName"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        name="data[User][email]"
                        placeholder="Email*"
                        value=""
                        size="40"
                        className="form-control required email"
                        type="text"
                        id="UserEmail"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        name="data[User][phone_no]"
                        placeholder="Phone Number"
                        value=""
                        size="40"
                        className="form-control"
                        type="text"
                        id="UserPhoneNo"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        name="data[User][company]"
                        placeholder="Company Name"
                        value=""
                        size="40"
                        className="form-control"
                        type="text"
                        id="UserCompany"
                      />
                    </div>

                    <div className="form-group">
                      <textarea
                        name="data[User][message]"
                        placeholder="Your Message*"
                        className="form-control required"
                        id="UserMessage"
                      ></textarea>
                    </div>
                    <div className="form-group">
                      <div id="recaptchaq"></div>
                    </div>
                    <div id="captcha_msg_contact2"></div>
                    <div className="form-group">
                      <div
                        className="display_success_message"
                        id="quote1_success_message"
                      ></div>
                      <div
                        className="display_error_message"
                        id="quote1_error_message"
                      ></div>
                    </div>
                    <div className="form-group">
                      <input
                        id="submitquote"
                        title="Submit"
                        className="btn  btn-primary btn-block"
                        type="submit"
                        value="Submit"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="qatesting-services-section" data-aos="fade-up">
        <div className="container">
          <h2>Why Logicspice for QA Testing Services? </h2>
          <p>
            At Logicspice, we offer independent software testing services to
            business, enterprises and startups in various industries. Our
            testing team validates and verify that a software
            program/application/product meets the business and technical
            requirements of the application.{" "}
          </p>
          <ul className="list-group">
            <li className="list-group-item">
              <i className="fa fa-check-circle" aria-hidden="true"></i>
              <span>
                Enhanced user experience with optimum QA strategy
              </span>{" "}
            </li>
            <li className="list-group-item">
              <i className="fa fa-check-circle" aria-hidden="true"></i>
              <span>
                We use creative, smart and effective testing techniques
              </span>{" "}
            </li>
            <li className="list-group-item">
              <i className="fa fa-check-circle" aria-hidden="true"></i>
              <span>10+ Years in providing QA testing services</span>{" "}
            </li>
            <li className="list-group-item">
              <i className="fa fa-check-circle" aria-hidden="true"></i>
              <span>Skilled & knowledgeable QA engineers</span>{" "}
            </li>
            <li className="list-group-item">
              <i className="fa fa-check-circle" aria-hidden="true"></i>
              <span>offshore & on-site testing models</span>{" "}
            </li>
            <li className="list-group-item">
              <i className="fa fa-check-circle" aria-hidden="true"></i>
              <span>Dedicated Team to work exclusively</span>{" "}
            </li>
            <li className="list-group-item">
              <i className="fa fa-check-circle" aria-hidden="true"></i>
              <span>Ensure maximum return on your investments.</span>{" "}
            </li>
            <li className="list-group-item">
              <i className="fa fa-check-circle" aria-hidden="true"></i>
              <span>100% Working Transparency</span>{" "}
            </li>
            <li className="list-group-item">
              <i className="fa fa-check-circle" aria-hidden="true"></i>
              <span>Timely delivery at an affordable price</span>{" "}
            </li>
          </ul>
        </div>
      </section>
      <section className="testing-statred-section" data-aos="fade-up">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-6">
              <h2>Let&apos;s Get Started! -</h2>
            </div>
            <div className="col-sm-6 col-md-6">
              <a
                id=""
                data-toggle="modal"
                data-target="#contactFix"
                className="btn btn-primary"
              >
                Get a Free Quote
              </a>
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
            <Image
              width={50}
              height={100}
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
  );
};

export default Page;
