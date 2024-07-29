"use client";
import React, { useState } from "react";
import Footer from "@/app/Components/Footer";
import Navbar from "@/app/Components/Navbar";
import "@/app/(hire-developers)/hire-developer.css";
import Image from "next/image";
import Link from "next/link";
import Enquirymodal from "@/app/Components/Enquirymodal";
import Contactusmodel from "@/app/Components/Contactusmodel";
import "../../resposive.css";
import "@fortawesome/fontawesome-free/css/all.css";
import Customsolutiontabs from "@/app/Components/Customsolutiontabs";
import Support from "@/app/Components/Support";
import WhyHireFromLogicspice from "@/app/Components/WhyHireFromLogicspice";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";

const Page = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  const testimonialData = [
    {
      id: 1,
      image:
        "https://www.logicspice.com/app/webroot/img/images/alex-morgan.jpg",
      heading: "",
      text: "Our Python development needs were complex, but the developer we hired from Logicspice tackled them with ease. Their proficiency in Django was particularly impressive.",
      name: "Michael T.,",
      location: "Startup Founder",
    },
    {
      id: 2,
      image:
        "https://www.logicspice.com/app/webroot/img/images/sophia-turner.jpg",
      heading: "",
      text: "We needed a Python expert for our machine learning project, and the professional from Logicspice exceeded all expectations.",
      name: "Sophia R.,",
      location: "Tech Department Manager",
    },
    {
      id: 3,
      image:
        "https://www.logicspice.com/app/webroot/img/images/david-clark.jpg",
      heading: "",
      text: "Hiring a Python developer for our backend systems was a crucial step. The developer's skill in Flask and database management has greatly improved our application's performance.",
      name: "David K.,",
      location: "IT Project Coordinator",
    },
    {
      id: 4,
      image:
        "https://www.logicspice.com/app/webroot/img/images/isabella-clark.jpg",
      heading: "",
      text: "The Python developer we hired was outstanding. They understood our vision and brought in their unique perspective, which added immense value to our web application.",
      name: "Isabella G.,",
      location: "Product Manager",
    },
    {
      id: 5,
      image:
        "https://www.logicspice.com/app/webroot/img/images/emma-turner.jpg",
      heading: "",
      text: "The Python developer we brought on board from Logicspice was a game-changer for our project. Their expertise in data analysis and web development helped us achieve milestones ahead of schedule.",
      name: "Emma L.,",
      location: "Project Lead",
    },
  ];
  return (
    <>
      {" "}
      <Navbar />
      <section
        style={{}}
        class="hire_developer_back_iin otherhire_developer_back_iin"
      >
        <div class="hire_developer_back_iin_mask new-developers-mask">
          <div class="container">
            <div class="row">
              <div class="col-md-7 text-start">
              <h1 class="slide_title">Hire ReactJS Developers</h1>
          <div class="subinstet">
            Start your web development journey with the expertise of ReactJS
            developers. Seamless, efficient, and tailored specifically for your
            unique needs.
          </div>
          <div class="developer-servicees-bx">
            <div class="developer-servicees">
              <i class="fa fa-check" aria-hidden="true"></i>
              <span>Efficient Development</span>
            </div>
            <div class="developer-servicees">
              <i class="fa fa-check" aria-hidden="true"></i>
              <span>Cost Effective Solution</span>
            </div>
            <div class="developer-servicees">
              <i class="fa fa-check" aria-hidden="true"></i>
              <span>Broad Industry Knowledge</span>
            </div>
            <div class="developer-servicees">
              <i class="fa fa-check" aria-hidden="true"></i>
              <span>Transparent Client Interaction</span>
            </div>
          </div>
                <div class="nt_cdl">
                  <a onClick={toggleModal} className="btn btn-primary">
                    <Contactusmodel
                      modalStatus={modalOpen}
                      toggle={toggleModal}
                      title="Hire Python Developers"
                    />
                    Hire Now!
                  </a>

                  <a
                    href="javascript:$zopim.livechat.window.show();"
                    class="btn btn-primary"
                  >
                    Chat with a Developer
                  </a>
                </div>
              </div>
              <div class="col-md-5">
                <div class="cack_logo_img">
                  <Image
                    width={300}
                    height={100}
                    alt="Zencart"
                    src="/img/hiredevelopers/react-icon.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="snop_animation"></div>
        </div>
      </section>
      <section class="dev_flexibility new-hirig-section HireFlexNewSection">
        <div class="container">

        <div class="new-hiring-div">
          <div class="row">
                <div class="col-md-3 col-sm-4 p-0">
                    <div class="HireFlexNewImg"><img width={64} height={100} alt="app development" src="/img/hiredevelopers/hire-women-img.png" /></div>
                </div>
                
                <div class="col-md-9 col-sm-8 p-0">
                    <div class="title_heading">Hiring Model </div>  
                    <div class="row">
                <div class="col-md-4 col-sm-4">
                    <div class="HireFlexNewTxt">
                        <i><img width={41} height={100} alt="app development" src="/img/hiredevelopers/periodic-new-icon.png" /></i>
                        <div class="HireFlexNewHeading">Periodic Basis</div>
                    </div></div>
                <div class="col-md-4 col-sm-4">
                    <div class="HireFlexNewTxt">
                        <i><img width={27} height={100} alt="app development" src="/img/hiredevelopers/clock-new-icon.png" /></i>
                        <div class="HireFlexNewHeading">Hourly Basis</div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-4">
                    <div class="HireFlexNewTxt">
                        <i><img width={41} height={100} alt="app development" src="/img/hiredevelopers/checklist-new-icon.png" /></i>
                        <div class="HireFlexNewHeading">Project Basis</div>
                    </div>
                </div> 
                </div>
                </div> 
                </div>
            </div>


          <div class="hiring-sr">
      <div class="row">
        <div class="col-md-8">
          <div class="jumbotron">
            <h2>Hire ReactJS Expert</h2>
            <p>
              Businesses aiming for unparalleled digital growth need only
              specialists' expertise. We support businesses to grow by
              connecting them with top-tier ReactJS Experts. Choosing ReactJS is
              a strategic decision, given its capacity to deliver dynamic web
              solutions.
            </p>
            <p>
              ReactJS stands as a superior framework geared towards designing
              immersive web experiences. If you're considering using the ReactJS
              ecosystem for your web interface, we're here to introduce you to
              the ReactJS experts.
            </p>
            <p>
              Our ReactJS developers have years of experience, making us a
              trusted name in ReactJS development. We understand web development
              deeply, ensuring we build user-friendly, modern, and responsive
              websites for you.
            </p>
          </div>
        </div>
        <div class="col-md-4">
          <h2>Technical expertise</h2>
          <ul class="list-group">
            <li class="list-group-item">
              <span>Proficiency in JavaScript & JSX.</span>
            </li>
            <li class="list-group-item">
              <span>Deep-seated ReactJS insights.</span>
            </li>
            <li class="list-group-item">
              <span>Proven experience with e-commerce & web portals.</span>
            </li>
            <li class="list-group-item">
              <span>Command over front end & back-end development.</span>
            </li>
            <li class="list-group-item">
              <span>Web Database Streamlining.</span>
            </li>
            <li class="list-group-item">
              <span>Mastery over responsive web design.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
        </div>
      </section>
      <section class="new-custom-section">
        <div class="container">
          <h2>
          Hire dedicated ReactJS developers for custom web development

          </h2>
          <div class="custom-solution-bx">
            <div class="row">
              <div class="col-md-6">
                <ul class="list-group">
                  <li class="list-group-item">
                    <i>
                      <Image
                        width={60}
                        height={100}
                        alt="icon-1"
                        src="/img/hiredevelopers/custom-icon1.png"
                        style={{ display: "inline" }}
                      />
                    </i>
                    <div class="custom-ser-txt">
                <h3>1. E-Commerce Web Development</h3>
                <p>
                  Rely on our ReactJS experts to craft dynamic and efficient
                  online shopping platforms.
                </p>
              </div>
                  </li>
                  <li class="list-group-item">
                    <i>
                      <Image
                        width={60}
                        height={100}
                        alt="icon-2"
                        src="/img/hiredevelopers/custom-icon2.png"
                        style={{ display: "inline" }}
                      />
                    </i>
                    <div class="custom-ser-txt">
                <h3>2. Web Migration Solutions</h3>
                <p>
                  Our ReactJS specialists guarantee seamless website migrations
                  with the latest best practices.
                </p>
              </div>
                  </li>
                  <li class="list-group-item">
                    <i>
                      <Image
                        width={60}
                        height={100}
                        alt="icon-3"
                        src="/img/hiredevelopers/custom-icon3.png"
                        style={{ display: "inline" }}
                      />
                    </i>
                    <div class="custom-ser-txt">
                <h3>3. CMS Web Solutions</h3>
                <p>
                  Optimized, cost-effective web CMS solutions crafted to grow
                  your business forward.
                </p>
              </div>
                  </li>
                </ul>
              </div>
              <div class="col-md-6">
                <ul class="list-group">
                  <li class="list-group-item">
                    <i>
                      <Image
                        width={60}
                        height={100}
                        alt="icon-4"
                        src="/img/hiredevelopers/custom-icon4.png"
                        style={{ display: "inline" }}
                      />
                    </i>
                    <div class="custom-ser-txt">
                <h3>4. Social Networking Websites</h3>
                <p>
                  Boost online interactions with premium web-based social
                  platforms crafted by ReactJS Experts.
                </p>
              </div>
                  </li>
                  <li class="list-group-item">
                    <i>
                      <Image
                        width={60}
                        height={100}
                        alt="icon-5"
                        src="/img/hiredevelopers/custom-icon5.png"
                        style={{ display: "inline" }}
                      />
                    </i>
                    <div class="custom-ser-txt">
                <h3>5. Theme Design & Integration</h3>
                <p>
                  Integrate stunning themes and layouts into your website,
                  backed by our best ReactJS developers.
                </p>
              </div>
                  </li>
                  <li class="list-group-item">
                    <i>
                      <Image
                        width={60}
                        height={100}
                        alt="icon-6"
                        src="/img/hiredevelopers/custom-icon6.png"
                        style={{ display: "inline" }}
                      />
                    </i>
                    <div class="custom-ser-txt">
                <h3>6. Web Extension Development</h3>
                <p>
                  Strengthen the website's functionality with additional
                  features and tools carefully designed by our ReactJS experts.
                </p>
              </div>
                  </li>
                </ul>
              </div>
            </div>{" "}
          </div>
        </div>
      </section>
      <section class="dev_step_solution">
        <div class="container">
          <h2 class="title_heading">
          Hire ReactJS Developers in 5 streamlined steps.
          </h2>
          <div className="step-row">
            <div className="col-md-2">
              <div className="dev-steps">
                <i>
                  <Image
                    alt="step-1"
                    src="/img/hiredevelopers/step-icon1.png"
                    width={64}
                    height={50}
                  />
                </i>
                <h5>Raise Your Request</h5>
              </div>
            </div>
            <div className="col-md-2">
              <div className="dev-steps">
                <i>
                  <Image
                    alt="step-2"
                    src="/img/hiredevelopers/step-icon2.png"
                    width={63}
                    height={50}
                  />
                </i>
                <h5>Discuss Your Requirment</h5>
              </div>
            </div>
            <div className="col-md-2">
              <div className="dev-steps">
                <i>
                  <Image
                    alt="step-3"
                    src="/img/hiredevelopers/step-icon3.png"
                    width={63}
                    height={50}
                  />
                </i>
                <h5>Select Experts</h5>
              </div>
            </div>
            <div className="col-md-2">
              <div className="dev-steps">
                <i>
                  <Image
                    alt="step-4"
                    src="/img/hiredevelopers/step-icon4.png"
                    width={53}
                    height={50}
                  />
                </i>
                <h5>Finalize the Terms</h5>
              </div>
            </div>
            <div className="col-md-2">
              <div className="dev-steps last-step">
                <i>
                  <Image
                    alt="step-5"
                    src="/img/hiredevelopers/step-icon5.png"
                    width={63}
                    height={50}
                  />
                </i>
                <h5>Assign and kick start</h5>
              </div>
            </div>
          </div>

          <div class="step-but">
            <a onClick={toggleModal} className="btn btn-primary">
              <Contactusmodel
                modalStatus={modalOpen}
                toggle={toggleModal}
                title="Hire Python Developers"
              />
              Hire Now!
            </a>
          </div>
        </div>
      </section>
      <WhyHireFromLogicspice testimonialData={testimonialData} />
      <div class="clearfix"></div>
      <section class="enq-section">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-12 text-center">
              <a onClick={toggleModal} className="btn btn-primary">
                <Contactusmodel
                  modalStatus={modalOpen}
                  toggle={toggleModal}
                  title="Hire Python Developers"
                />
                Hire Now!
              </a>
            </div>
          </div>
        </div>
      </section>{" "}
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
                  <Image
                    width={500}
                    height={100}
                    src="/img/laraveldevelopment/FaqLaravelImg.png"
                    alt="laravel web development"
                  />
                </div>
              </div>

              <div class="col-md-7">
          <MDBAccordion v-model="activeItem" borderless>
            <MDBAccordionItem
              headerTitle="Why is ReactJS used in web development?"
              collapseId="flush-collapse1"
            >
              <p>
                ReactJS allows developers to craft dynamic user interfaces for
                web applications with reusable components.
              </p>
            </MDBAccordionItem>

            <MDBAccordionItem
              headerTitle="Why should I hire ReactJS developers from Logicspice?"
              collapseId="flush-collapse2"
            >
              <p>
                Logicspice's ReactJS developers are experienced professionals
                known for creating efficient, responsive web apps tailored for
                your enterprise.
              </p>
            </MDBAccordionItem>

            <MDBAccordionItem
              headerTitle="How does ReactJS differ from other frontend libraries/frameworks?"
              collapseId="flush-collapse3"
            >
              <p>
                ReactJS emphasizes component-based architecture, facilitating
                faster development and easier maintenance compared to
                traditional frameworks.
              </p>
            </MDBAccordionItem>

            <MDBAccordionItem
              headerTitle="How do you ensure my project's confidentiality?"
              collapseId="flush-collapse4"
            >
              <p>
                At Logicspice, client confidentiality is our priority. We're
                committed to ensuring your project's confidentiality via NDAs
                etc.
              </p>
            </MDBAccordionItem>

            <MDBAccordionItem
              headerTitle="Can I hire developers for varied project durations?"
              collapseId="flush-collapse5"
            >
              <p>
                Indeed! Be it a short-term task or a long-drawn project,
                Logicspice has flexible hiring models to suit all needs.
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
            href="https://api.whatsapp.com/send?phone=+919829559922&amp;text=Hi Logicspice Team, I have a question regarding the solutions you provide. Please Help!"
            target="_blank"
          >
            <Image
              src="/img/images/whatsapp.png"
              alt="whatsapp-icon"
              width={50}
              height={50}
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
