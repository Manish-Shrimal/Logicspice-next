"use client";
import React, { useState } from "react";
import Footer from "@/app/Components/Footer";
import NavBar from "@/app/Components/Navbar";
import "@/app/services/services.css";
import Image from "next/image";
import Link from "next/link";
import "@fortawesome/fontawesome-free/css/all.css";
const Page = () => {
  return (
    <>
      <NavBar />

      <section className="d-framework d-framework1 none_space">
        <div className="page_img">
          <Image
            width={1400}
            height={500 / (200 / 200)}
            src="/img/businesssupportservices/business-banner.png"
            alt="Best Business Support Services for Small & Medium Enterprises"
          />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-8">
              <h1 className="main--title">Business Support Services</h1>
              <p>
                Business support services become the most important aspect of
                businesses from small to large enterprises. Having a reliable
                business support system is showing the positive image of our
                business or brand. It helps an organization to manage and solve
                the customer&apos;s queries or request properly. The Company can
                outsource their support services to other companies on a
                contract basis to maintain focus on their core business
                operations. Business support assistant can understand your
                business as a result&sbquo; you would see that all task are
                performed well and it cut down an operational cost.
              </p>
              <h2>The Best Business Support Services</h2>
              <p>
                We at Logicspice&sbquo; offer the best business helping services
                for all kind of enterprise to move their business to the next
                level. It can support to keep all your customer support
                interactions in a central place&sbquo; so communication is
                personal and effective. Personal communication is most important
                for satisfied the customers. Our experienced virtual assistant
                provides administrative supports and completes the other day to
                day tasks at a competitive cost to drive your business growth in
                a short duration.
              </p>
              <p>
                We have experienced tech experts and resources provide real-time
                maintenance support to the committed smooth functioning of your
                IT infrastructure. Documentation is a very important aspect of
                business operation&sbquo; need to keep maintain it on regular
                basis. We are not only responsible for documentation but also
                analysis of your system to keep updated on regular basis.
              </p>
              <p>
                We also work for Call Center Services&sbquo; Call Answering
                Service&sbquo; online chat support and other related services to
                clients. Our expert can advise the user in a proper way&sbquo;
                as a result&sbquo; clients get the long-term business benefits.
                We help our clients to focus on their business doing what they
                are good at and we deal with the tedious support services that
                we are best at serving.
              </p>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="form_quote form_top">
                <form>
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
                    />{" "}
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
                    />{" "}
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
                    />{" "}
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
                    />{" "}
                  </div>

                  <div className="form-group">
                    <textarea
                      name="data[User][message]"
                      placeholder="Your Message*"
                      size="40"
                      className="form-control required"
                      id="UserMessage"
                    ></textarea>{" "}
                  </div>
                  <div className="form-group">
                    <div id="recaptchaq"></div>
                  </div>
                  <div id="captcha_msg_contact2"></div>

                  <div className="form-group">
                    <input
                      id="submitquote"
                      title="Submit"
                      className="btn btn-primary btn-block"
                      size="30"
                      label=""
                      type="submit"
                      value="Submit"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="d-services d-services1">
        <div className="container">
          <h2>Our Business Support Services</h2>
          <div className="row">
            <div className="col-sm-6 col-md-6">
              <div className="service_box Application1 ">
                <h3>Customer Support Service</h3>
                <p>
                  We provide the best Customer support service from small to
                  large business. Our expert can help to make a positive image
                  of your business or brand. We help our client to manage and
                  solve their customer&apos;s queries or request properly. Our
                  Customer support system can make it easy to manage customer
                  interactions and them satisfied and happy.{" "}
                </p>
              </div>
              <div className="service_box Application2">
                <h3>Virtual Assistant Services</h3>
                <p>
                  We offer the best online virtual assistant services can
                  provide the effortless ways to work from home office. Our
                  Virtual Assistants are professionally trained&sbquo; can
                  easily understand and adapt your business process and maintain
                  workflow efficiency and accuracy by saving your effort&sbquo;
                  time and costs.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-6">
              <div className="service_box Application3">
                <h3>Technical Support Services</h3>
                <p>
                  We provide expert IT Technical Support and maintenance service
                  to our valuable clients. We always ensure that our client
                  keeps satisfied by providing comprehensive tech support
                  solutions to fulfill their requirements. Our experienced tech
                  experts and resources provide real-time maintenance support to
                  the committed smooth functioning of your IT infrastructure.{" "}
                </p>
              </div>
              <div className="service_box Application4">
                <h3>Call Center Services</h3>
                <p>
                  Our call center services can provide the effortless solutions
                  for Call Answering Service&sbquo; online chat support and
                  other related services to clients. Our expert can advise the
                  user in a proper way&sbquo; as a result&sbquo; clients get the
                  long-term business benefits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="d-features">
        <div className="container">
          <h2>Why Go For Business Support Services?</h2>
          <div className="row">
            <div className="col-sm-6 col-md-4">
              <div className="featureBox">
                <Image
                  width={100}
                  height={100}
                  src="/img/businesssupportservices/lara_icon1.png"
                  alt="img1"
                />
                <h3>No office space required</h3>
                <p>
                  When you hire Business support services&sbquo; you won&apos;t
                  have to provide office space&sbquo; desk&sbquo;
                  computer&sbquo; phone and other things.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="featureBox">
                <Image
                  width={100}
                  height={100}
                  src="/img/businesssupportservices/lara_icon5.png"
                  alt="img2"
                />
                <h3>Cost Saving</h3>
                <p>
                  You can hire the support services for particular business
                  tasks rather than paying a part-time or full-time staff.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="featureBox">
                <Image
                  width={100}
                  height={100}
                  src="/img/businesssupportservices/lara_icon4.png"
                  alt="img3"
                />
                <h3>Assurance</h3>
                <p>
                  It is assured for completing all the task within the given
                  time period.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="featureBox">
                <Image
                  width={100}
                  height={100}
                  src="/img/businesssupportservices/lara_icon6.png"
                  alt="img4"
                />
                <h3>Overcome Weak Area</h3>
                <p>
                  Business support services can fill the skill gap in your
                  organization.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="featureBox">
                <Image
                  width={100}
                  height={100}
                  src="/img/businesssupportservices/lara_icon3.png"
                  alt="img5"
                />
                <h3>Maximize The ROI</h3>
                <p>
                  Eliminate the call waiting or downtime. Get satisfied client
                  which leads to maximizing profit volume.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="featureBox">
                <Image
                  width={100}
                  height={100}
                  src="/img/businesssupportservices/lara_icon2.png"
                  alt="img6"
                />
                <h3>Peace Of Mind </h3>
                <p>Ensured about overall performance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="d-choose">
        <div className="container">
          <h2>Why Choose Logicspice For Technical Support Services?</h2>
          <div className="row">
            <div className="col-sm-6 col-md-6 text-right">
              <div className="libraries" data-aos="fade-right">
                <h3>
                  We have a team of experienced support experts&sbquo; account
                  managers&sbquo; callers and other staff.
                </h3>
              </div>
            </div>
            <div className="col-sm-6 col-md-6">
              <div className="libraries" data-aos="fade-left">
                <h3>
                  Our clients are fully satisfied with our Business Support
                  services.
                </h3>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 text-right">
              <div className="libraries" data-aos="fade-right">
                <h3>
                  We work with productivity&sbquo; efficiency&sbquo; save time &
                  cost and deliver quality work.
                </h3>
              </div>
            </div>
            <div className="col-sm-6 col-md-6">
              <div className="libraries" data-aos="fade-left">
                <h3>We can resolve the issues in the expedited time frame.</h3>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 text-right">
              <div className="libraries" data-aos="fade-right">
                <h3>
                  We are also very peculiar about our services and available to
                  our clients 24/7.
                </h3>
              </div>
            </div>
            <div className="col-sm-6 col-md-6">
              <div className="libraries" data-aos="fade-left">
                <h3>Our services are fully secured.</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Page;