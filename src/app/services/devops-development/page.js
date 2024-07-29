"use client";
import React, { useState } from "react";
import Footer from "@/app/Components/Footer";
import NavBar from "@/app/Components/Navbar";
import "@/app/services/services.css";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import Image from "next/image";
import Link from "next/link";
import "@fortawesome/fontawesome-free/css/all.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Enquirymodal from "@/app/Components/Enquirymodal";
import Contactusmodel from "@/app/Components/Contactusmodel";
import "../../resposive.css";
const Page = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1.5,
    centerMode: true,
    vertical: false,
  };

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
      <section class="laravel-banner DevOpsBanner">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-6">
              <div class="laravel-banner-txt">
                <h1>
                  <strong class="LaravelBannerHadding">DevOps </strong>
                  Development Services
                </h1>
                <div class="LaravelText">
                  Logicspice offers premier global DevOps services&sbquo;
                  providing robust and advanced solutions. We guarantee seamless
                  integration and swift delivery&sbquo; setting DevOps excellence
                  standards.
                </div>
                <div class="laravel-anquire">
                  <div className="btn btn-primary" onClick={openModal}>
                    <button>Enquire Now</button>
                    {
                      <Enquirymodal
                        modalStatus={showModal}
                        toggle={openModal}
                        title="DevOps Development Services"
                      />
                    }
                  </div>
                  <Link
                    href="https://api.whatsapp.com/send?phone=+919829559922&text=Hi Logicspice Team&sbquo; I have a question regarding the solutions you provide. Please Help!"
                    target="_blank"
                  >
                    <div class="WhatsappIcon">
                      <div class="coccoc-alo-phone coccoc-alo-green coccoc-alo-show">
                        <div class="coccoc-alo-ph-circle"></div>
                        <div class="coccoc-alo-ph-circle-fill"></div>
                        <div class="coccoc-alo-ph-img-circle"></div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-6">
              <div class="page_img">
                <img
                  src="/img/devopsdevelopment/devops-img.png"
                  alt="DevOps Development Services"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="laravel-descriptions cackphp-descriptions BigDataDescription DevOpsDescription">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-6 pull-right">
              <div class="laravel_img">
                <img
                  src="/img/devopsdevelopment/devops-icon.png"
                  alt="DevOps Development Services"
                />
              </div>
            </div>
            <div class="col-sm-6 col-md-6 pull-left">
              <div class="laravel-descriptions-bx">
                <h2>
                  <strong>DevOps</strong>
                  <br /> Development
                </h2>
                <p>
                  As a leading DevOps development company&sbquo; we pride ourselves on
                  bridging the gap between software development and IT
                  operations. Recognized among the top DevOps consulting
                  companies&sbquo; we offer tailored DevOps consulting services to
                  enterprises seeking to optimize their workflows.{" "}
                </p>
                <p>
                  With our comprehensive DevOps services and solutions&sbquo; we
                  address the unique challenges businesses face in today&apos;s
                  fast-paced digital landscape. Our DevOps development services
                  are designed to ensure seamless integration&sbquo; automated
                  processes&sbquo; and enhanced collaboration. Whether you are
                  searching for a dedicated DevOps consulting company or
                  exploring various DevOps companies for end-to-end solutions&sbquo;
                  our team is equipped to guide and support you at every step of
                  your DevOps journey.
                </p>
                <p>
                  DevOps application streamlines development and operations to
                  achieve business goals through integrated tools and
                  methodologies. It leverages best practices and platforms like
                  Jenkins&sbquo; Docker&sbquo; Kubernetes&sbquo; and Terraform to automate&sbquo;
                  monitor&sbquo; and enhance the software delivery lifecycle. Our team
                  is committed to delivering tailored DevOps solutions that
                  ensure seamless collaboration and optimize the development
                  pipeline across diverse environments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="laravel-devlopments-services">
        <div class="container">
          <h2>
            <strong>DevOps</strong> Development Services
          </h2>
          <div class="laravel-services-bx-top">
            <div class="row">
              <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="laravel_service_box ">
                  <div class="laravel-services-icon laravel_service_box3">
                    <i>
                      <img
                        class="widout-hover"
                        src="/img/devopsdevelopment/containerization-icon.png"
                        alt="DevOps Development Services"
                      />
                      <img
                        class="on-hover"
                        src="/img/devopsdevelopment/containerization-icon-white.png"
                        alt="DevOps Development Services"
                      />
                      <div class="mask"></div>
                    </i>
                  </div>
                  <h3>Containerization</h3>
                  <p>
                    Leverage the power of Docker and similar tools for
                    environment consistency.
                  </p>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="laravel_service_box ">
                  <div class="laravel-services-icon laravel_service_box8">
                    <i>
                      <img
                        class="widout-hover"
                        src="/img/devopsdevelopment/cloud-automation-icon.png"
                        alt="DevOps Development Services"
                      />
                      <img
                        class="on-hover"
                        src="/img/devopsdevelopment/cloud-automation-white-icon.png"
                        alt="DevOps Development Services"
                      />
                      <div class="mask"></div>
                    </i>
                  </div>
                  <h3>Cloud Automation</h3>
                  <p>
                    Embrace the cloud with automated deployment and scaling
                    strategies.
                  </p>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="laravel_service_box ">
                  <div class="laravel-services-icon laravel_service_box7">
                    <i>
                      <img
                        class="widout-hover"
                        src="/img/devopsdevelopment/deployment-automation-icon.png"
                        alt="DevOps Development Services"
                      />
                      <img
                        class="on-hover"
                        src="/img/devopsdevelopment/deployment-automation-white-icon.png"
                        alt="DevOps Development Services"
                      />
                      <div class="mask"></div>
                    </i>
                  </div>
                  <h3>Deployment Automation</h3>
                  <p>
                    Automate your release process&sbquo; ensuring faster and safer
                    deliveries.
                  </p>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="laravel_service_box ">
                  <div class="laravel-services-icon laravel_service_box2">
                    <i>
                      <img
                        class="widout-hover"
                        src="/img/devopsdevelopment/infrastructure-icon.png"
                        alt="DevOps Development Services"
                      />
                      <img
                        class="on-hover"
                        src="/img/devopsdevelopment/infrastructure-white-icon.png"
                        alt="DevOps Development Services"
                      />
                      <div class="mask"></div>
                    </i>
                  </div>
                  <h3>Infrastructure as Code</h3>
                  <p>
                    Script your infrastructure needs&sbquo; a key component of our
                    DevOps development services.
                  </p>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="laravel_service_box ">
                  <div class="laravel-services-icon laravel_service_box1">
                    <i>
                      <img
                        class="widout-hover"
                        src="/img/devopsdevelopment/infrastructure-automation-icon.png"
                        alt="DevOps Development Services"
                      />
                      <img
                        class="on-hover"
                        src="/img/devopsdevelopment/infrastructure-automation-white-icon.png"
                        alt="DevOps Development Services"
                      />
                      <div class="mask"></div>
                    </i>
                  </div>
                  <h3>Infrastructure Automation</h3>
                  <p>
                    Our DevOps development services have transformed the
                    operational efficiency of numerous enterprises&sbquo; from
                    startups to established corporations.
                  </p>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="laravel_service_box ">
                  <div class="laravel-services-icon laravel_service_box6">
                    <i>
                      <img
                        class="widout-hover"
                        src="/img/devopsdevelopment/monitoring-logging-icon.png"
                        alt="DevOps Development Services"
                      />
                      <img
                        class="on-hover"
                        src="/img/devopsdevelopment/monitoring-logging-white-icon.png"
                        alt="DevOps Development Services"
                      />
                      <div class="mask"></div>
                    </i>
                  </div>
                  <h3>Monitoring and Logging Solutions</h3>
                  <p>
                    Step up your system surveillance game. Keep a vigilant eye
                    on applications and infrastructure performance.
                  </p>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="laravel_service_box ">
                  <div class="laravel-services-icon laravel_service_box5">
                    <i>
                      <img
                        class="widout-hover"
                        src="/img/devopsdevelopment/security-compliance-icon.png"
                        alt="DevOps Development Services"
                      />
                      <img
                        class="on-hover"
                        src="/img/devopsdevelopment/security-compliance-white-icon.png"
                        alt="DevOps Development Services"
                      />
                      <div class="mask"></div>
                    </i>
                  </div>
                  <h3>Security and Compliance</h3>
                  <p>
                    Prioritize your software&apos;s security with our dedicated
                    DevOps practices&sbquo; ensuring your applications meet compliance
                    standards.
                  </p>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="laravel_service_box ">
                  <div class="laravel-services-icon laravel_service_box4">
                    <i>
                      <img
                        class="widout-hover"
                        src="/img/devopsdevelopment/configuration-management-icon.png"
                        alt="DevOps Development Services"
                      />
                      <img
                        class="on-hover"
                        src="/img/devopsdevelopment/configuration-management-white-icon.png"
                        alt="DevOps Development Services"
                      />
                      <div class="mask"></div>
                    </i>
                  </div>
                  <h3>Configuration Management</h3>
                  <p>
                    Ensure consistent settings across development&sbquo; staging&sbquo; and
                    production.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="laravel_core_features_section">
        <div class="container">
          <h2>
            Core Features of Our <strong>DevOps</strong> Services
          </h2>
          <div class="laravel_core_features_bx">
            <div class="row">
              <div class="col-sm-6 col-md-6" data-aos="fade-right">
                <div class="laravel_core_featureBox">
                  <div class="laravel_core_features_img">
                    <img
                      src="/img/devopsdevelopment/operational-efficiency.png"
                      alt="img1"
                    />
                  </div>
                  <div class="laravel_core_features_detail">
                    <h3>Operational Efficiency</h3>
                    <p>
                      Simplified workflows for faster&sbquo; error-free operations.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-md-6" data-aos="fade-left">
                <div class="laravel_core_featureBox">
                  <div class="laravel_core_features_img">
                    <img
                      src="/img/devopsdevelopment/custom-infrastructure.png"
                      alt="img4"
                    />
                  </div>
                  <div class="laravel_core_features_detail">
                    <h3>Custom Infrastructure</h3>
                    <p>
                      Bespoke solutions in tune with your DevOps services and
                      solutions needs.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-md-6" data-aos="fade-right">
                <div class="laravel_core_featureBox">
                  <div class="laravel_core_features_img">
                    <img
                      src="/img/devopsdevelopment/flexible-rates.png"
                      alt="img2"
                    />
                  </div>
                  <div class="laravel_core_features_detail">
                    <h3>Flexible rates</h3>
                    <p>
                      The DevOps development can help you in getting more
                      services at reasonable rates.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-md-6" data-aos="fade-left">
                <div class="laravel_core_featureBox">
                  <div class="laravel_core_features_img">
                    <img
                      src="/img/devopsdevelopment/scalable-architecture.png"
                      alt="img5"
                    />
                  </div>
                  <div class="laravel_core_features_detail">
                    <h3>Scalable Architecture</h3>
                    <p>Infrastructure that grows with your needs.</p>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-md-6" data-aos="fade-right">
                <div class="laravel_core_featureBox">
                  <div class="laravel_core_features_img">
                    <img
                      src="/img/devopsdevelopment/real-time-reporting.png"
                      alt="img3"
                    />
                  </div>
                  <div class="laravel_core_features_detail">
                    <h3>Real-time Reporting</h3>
                    <p>
                      Immediate feedback for timely interventions and strategy
                      changes.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-md-6" data-aos="fade-left">
                <div class="laravel_core_featureBox">
                  <div class="laravel_core_features_img">
                    <img
                      src="/img/devopsdevelopment/diverse-expertise.png"
                      alt="img6"
                    />
                  </div>
                  <div class="laravel_core_features_detail">
                    <h3>Diverse Expertise</h3>
                    <p>
                      Our team is efficient across a broad spectrum of DevOps
                      tools and practices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="laravel_choose_features_section">
        <div class="container">
          <h2>
            Benefits of <strong>DevOps</strong> Development
          </h2>
          <div class="laravel_choose_features_bx">
            <div class="row">
              <div class="col-sm-6 col-md-6" data-aos="fade-right">
                <div class="libraries_laravel_choose">
                  <div class="laravel_choose_features_img laravel_choose_features_img1">
                    <img
                      src="/img/devopsdevelopment/seamless-collaboration.png"
                      alt="img1"
                    />
                  </div>
                  <div class="laravel_choose_details">
                    <h3>Seamless Collaboration</h3>
                    <p>
                      DevOps ensures unified operations&sbquo; leading to efficient
                      teamwork between developers and operators.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-md-6" data-aos="fade-left">
                <div class="libraries_laravel_choose libraries_laravel_choose-right">
                  <div class="laravel_choose_features_img laravel_choose_features_img2">
                    <img
                      src="/img/devopsdevelopment/swift-market.png"
                      alt="img1"
                    />
                  </div>
                  <div class="laravel_choose_details">
                    <h3>Swift Market Launch</h3>
                    <p>
                      Frequent releases ensure your products hit the market
                      swiftly&sbquo; thanks to continuous deployment.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-md-6 " data-aos="fade-right">
                <div class="libraries_laravel_choose">
                  <div class="laravel_choose_features_img laravel_choose_features_img3">
                    <img
                      src="/img/devopsdevelopment/peak-performance.png"
                      alt="img1"
                    />
                  </div>
                  <div class="laravel_choose_details">
                    <h3>Peak Performance Levels</h3>
                    <p>
                      With DevOps&sbquo; systems are stable and reliable&sbquo; minimizing
                      operational hitches.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-md-6" data-aos="fade-left">
                <div class="libraries_laravel_choose libraries_laravel_choose-right">
                  <div class="laravel_choose_features_img laravel_choose_features_img4">
                    <img
                      src="/img/devopsdevelopment/budget-friendly.png"
                      alt="img1"
                    />
                  </div>
                  <div class="laravel_choose_details">
                    <h3>Budget-Friendly Fixes</h3>
                    <p>
                      Catch issues early&sbquo; leading to cost-effective solutions
                      and reduced overall expenses.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-md-6" data-aos="fade-right">
                <div class="libraries_laravel_choose">
                  <div class="laravel_choose_features_img laravel_choose_features_img5">
                    <img
                      src="/img/devopsdevelopment/easy-scalability.png"
                      alt="img1"
                    />
                  </div>
                  <div class="laravel_choose_details">
                    <h3>Easy Scalability</h3>
                    <p>
                      Adapting to growing demands is effortless&sbquo; as DevOps
                      ensures scalable solutions.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-md-6" data-aos="fade-left">
                <div class="libraries_laravel_choose libraries_laravel_choose-right">
                  <div class="laravel_choose_features_img laravel_choose_features_img6">
                    <img
                      src="/img/devopsdevelopment/automated-quick.png"
                      alt="img1"
                    />
                  </div>
                  <div class="laravel_choose_details">
                    <h3>Automated & Quick</h3>
                    <p>
                      A single DevOps pipeline enhances speed with integrated
                      platform automation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="ecommerce_faq_section NewFaqDesignSection">
        <div class="container">
          <div class="row">
            <div class=" row ecommerce__Quick_FAQ">
              <div class="col-md-5">
                <h4 class="title_main">
                  Frequently <br />
                  Asked Questions
                </h4>
                <div class="FaqImgBx">
                  <img
                    src="/img/laraveldevelopment/FaqLaravelImg.png"
                    alt="laravel web development"
                  />
                </div>
              </div>
              <div class="col-md-7">
                <MDBAccordion v-model="activeItem" borderless>
                  <MDBAccordionItem
                    headerTitle="What is DevOps&sbquo; and why are companies using it more nowadays?"
                    collapseId="flush-collapse1"
                  >
                    <p>
                      DevOps combines software development (Dev) and IT
                      operations (Ops) to speed up and improve the software
                      delivery process. With DevOps&sbquo; companies can release new
                      features faster&sbquo; fix problems quicker&sbquo; and offer more
                      stable solutions. It&apos;s becoming popular because
                      businesses need to adapt rapidly in our digital world.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Why is LogicSpice considered a top DevOps development company?"
                    collapseId="flush-collapse2"
                  >
                    <p>
                      LogicSpice stands out because of its commitment to quality
                      and speed. We use the best tools and methods to make
                      software development and IT operations work better
                      together. Our goal is to help businesses move faster
                      without problems&sbquo; which is why many trust us for their
                      DevOps needs.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="How do DevOps services ensure that software is both high quality and delivered quickly?"
                    collapseId="flush-collapse3"
                  >
                    <p>
                      DevOps uses automated testing and deployment methods. This
                      means we can check the software for issues quickly and
                      often. So&sbquo; by the time the software is ready for users&sbquo; it
                      has been tested many times&sbquo; ensuring its quality while
                      also getting it out fast.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="What tools are commonly used in DevOps&sbquo; and why?"
                    collapseId="flush-collapse4"
                  >
                    <p>
                      Tools like Jenkins&sbquo; Docker&sbquo; and Kubernetes are popular in
                      DevOps. Jenkins helps with automating different stages of
                      development&sbquo; Docker packages software into units called
                      containers&sbquo; and Kubernetes manages these containers. Using
                      these tools makes the process smoother and more efficient.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="How does DevOps benefit businesses directly?"
                    collapseId="flush-collapse5"
                  >
                    <p>
                      With DevOps&sbquo; businesses can release new software features
                      faster&sbquo; which keeps customers happy. They can also respond
                      to market changes more quickly and have fewer software
                      problems. Overall&sbquo; it saves time and money while improving
                      the product.
                    </p>
                  </MDBAccordionItem>
                </MDBAccordion>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="quoue_box_full_sec">
        <div className="whatsapp-call">
          <a
            href="https://api.whatsapp.com/send?phone=+919829559922&amp;text=Hi Logicspice Team&sbquo; I have a question regarding the solutions you provide. Please Help!"
            target="_blank"
          >
            <img src="/img/images/whatsapp.png" alt="whatsapp-icon" />
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
