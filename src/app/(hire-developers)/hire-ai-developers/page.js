// import React from 'react'

// const Page = () => {
//   return (
//     <div>

//     </div>
//   )
// }

// export default Page

"use client";
import React, { useState } from "react";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import "../../(hire-developers)/hire-developer.css";
import Image from "next/image";
import Link from "next/link";
import Enquirymodal from "../../Components/Enquirymodal";
import Contactusmodel from "../../Components/Contactusmodel";
import "../../resposive.css";
// import "@fortawesome/fontawesome-free/css/all.css";
import "../../../../public/css/font-awesome.css";
import Customsolutiontabs from "../../Components/Customsolutiontabs";
import Support from "../../Components/Support";
import WhyHireFromLogicspice from "../../Components/WhyHireFromLogicspice";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";

const Page = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(!showModal);
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  const testimonialData = [
    {
      id: 1,
      image: "/img/hire-ai-developers/george.w.jpg",
      heading: "",
      text: "Hiring AI developers from Logicspice was a game-changer. They understood our business case and delivered a top-class AI solution.",
      name: "George W.,",
      location: "Operations Head ",
    },
    {
      id: 2,
      image: "/img/hire-ai-developers/david-r.jpg",
      heading: "",
      text: "The AI experts from Logicspice streamlined our manual processes with intelligent automation. Results exceeded expectations.",
      name: "David R,",
      location: "Project Manager",
    },
    {
      id: 3,
      image: "/img/hire-ai-developers/emily-k.jpg",
      heading: "",
      text: "Excellent collaboration and clear communication. Their AI developers helped us build a smart recommendation system.",
      name: "Emily K,",
      location: "SaaS Product Owner",
    },
    // {
    //   id: 4,
    //   image: "/img/pythondevelopment/isabella-clark.jpg",
    //   heading: "",
    //   text: "The Python developer we hired was outstanding. They understood our vision and brought in their unique perspective, which added immense value to our web application.",
    //   name: "Isabella G.,",
    //   location: "Product Manager",
    // },
    // {
    //   id: 5,
    //   image: "/img/pythondevelopment/emma-turner.jpg",
    //   heading: "",
    //   text: "The Python developer we brought on board from Logicspice was a game-changer for our project. Their expertise in data analysis and web development helped us achieve milestones ahead of schedule.",
    //   name: "Emma L.,",
    //   location: "Project Lead",
    // },
  ];
  return (
    <>
      {" "}
      <Navbar />
      <section className="blockchain-developement">
        <section
          style={{}}
          class="hire_developer_back_iin otherhire_developer_back_iin"
        >
          <div class="hire_developer_back_iin_mask HireNewBanners">
            <div class="container">
              <div class="row">
                <div class="col-md-7 text-start">
                  <h1 class="slide_title">
                    Hire Artificial Intelligence Developers
                  </h1>
                  <div class="subinstet">
                    Artificial Intelligence is changing the way businesses work.
                    Our AI experts help companies automate processes, boost
                    efficiency, and unlock new growth opportunities through
                    advanced machine learning, deep learning, and AI
                    integration. Smart, scalable, and tailored to meet the
                    evolving demands of your industry.
                  </div>
                  {/* <div class="subinstet">
                  Logicspice offers highly skilled blockchain developers for
                  hire who match your project’s exact needs.
                </div> */}
                  <div class="developer-servicees-bx">
                    <div class="developer-servicees">
                      <i class="HireCheckIcon">
                      <Image
                      width={20}
                      height={20}
                      alt="Zencart"
                      src="/img/hiredevelopers/hire-check-icon.svg"
                    />
                      </i>
                      <span>AI-Powered Solutions</span>
                    </div>
                    <div class="developer-servicees">
                    <i class="HireCheckIcon">
                      <Image
                      width={20}
                      height={20}
                      alt="Zencart"
                      src="/img/hiredevelopers/hire-check-icon.svg"
                    />
                      </i>
                      <span>Scalable & Future-Ready</span>
                    </div>
                    <div class="developer-servicees">
                    <i class="HireCheckIcon">
                      <Image
                      width={20}
                      height={20}
                      alt="Zencart"
                      src="/img/hiredevelopers/hire-check-icon.svg"
                    />
                      </i>
                      <span>Diverse Domain Expertise</span>
                    </div>
                    <div class="developer-servicees">
                    <i class="HireCheckIcon">
                      <Image
                      width={20}
                      height={20}
                      alt="Zencart"
                      src="/img/hiredevelopers/hire-check-icon.svg"
                    />
                      </i>
                      <span>Transparent Collaboration</span>
                    </div>
                  </div>
                  <div class="nt_cdl">
                    <a onClick={openModal} className="btn btn-primary">
                      <Enquirymodal
                        modalStatus={showModal}
                        toggle={openModal}
                        title="Hire BlockChain Developers"
                      />
                      Hire Now!
                    </a>

                    {/* <a
                      href="javascript:$zopim.livechat.window.show();"
                      class="btn btn-primary"
                    >
                      Chat With an AI Expert
                    </a> */}

<a
            href="https://api.whatsapp.com/send?phone=+919829559922&amp;text=Hi Logicspice Team, I have a question regarding the solutions you provide. Please Help!"
            target="_blank"
            className="btn btn-primary"
          >
            Chat With an AI Expert
          </a>
                  </div>
                </div>
                <div class="col-md-5">
                  <div class="cack_logo_img">
                    <Image
                      width={384}
                      height={100}
                      alt="Zencart"
                      src="/img/hiredevelopers/hire-ai-developers-img.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="snop_animation"></div>
          </div>
        </section>
        <section class="HireModelNewSection">
         <div class="container">
         <div class="NewHiringModelBx">
              <div class="row">
                <div class="col-md-3 col-sm-4 ">
                  <div class="HireFlexNewImg">
                    <Image
                      width={300}
                      height={500 / (100 / 100)}
                      alt="app development"
                      src="/img/hiredevelopers/hire-women-img.png"
                    />
                  </div>
                </div>

                <div class="col-md-9 col-sm-8">
                  <div class="title_heading">Hiring Model </div>
                  <div class="row">
                    <div class="col-md-4 col-sm-4">
                      <div class="HireFlexNewTxt">
                        <i>
                          <Image
                            width={41}
                            height={100}
                            alt="app development"
                            src="/img/hiredevelopers/periodic-new-icon.png"
                          />
                        </i>
                        <div class="HireFlexNewHeading">Periodic Basis</div>
                      </div>
                    </div>
                    <div class="col-md-4 col-sm-4">
                      <div class="HireFlexNewTxt">
                        <i>
                          <Image
                            width={27}
                            height={100}
                            alt="app development"
                            src="/img/hiredevelopers/clock-new-icon.png"
                          />
                        </i>
                        <div class="HireFlexNewHeading">Hourly Basis</div>
                      </div>
                    </div>
                    <div class="col-md-4 col-sm-4">
                      <div class="HireFlexNewTxt">
                        <i>
                          <Image
                            width={41}
                            height={100}
                            alt="app development"
                            src="/img/hiredevelopers/checklist-new-icon.png"
                          />
                        </i>
                        <div class="HireFlexNewHeading">Project Basis</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
         </div>
        </section>
        <section class="dev_flexibility new-hirig-section HireFlexNewSection">
          <div class="container">
            <div class="hiring-sr">
              <div class="row">
                <div class="col-md-7">
                  <div class="jumbotron">
                    <h2>Hire an AI Development Expert</h2>
                    <p>
                      At Logicspice, we help businesses grow by connecting them
                      with skilled{" "}
                      <Link href="/artificial-intelligence">
                        {" "}
                        Artificial Intelligence developers{" "}
                      </Link>{" "}
                      who can turn complex ideas into smart, real-world AI
                      solutions.
                    </p>
                    <p>
                      Our expert AI developers have hands-on experience in
                      machine learning, deep learning, and AI-based software
                      development. Whether you want to automate tasks, improve
                      decision-making, or build new AI-powered products, our
                      team can help you every step of the way.
                    </p>
                    <p>
                      We work with the latest AI tools and platforms like
                      TensorFlow, PyTorch, OpenAI APIs, and scikit-learn to make
                      sure your project is strong, future-ready, and secure. If
                      you're looking to hire AI developer for your project, our
                      skilled professionals are ready to deliver solutions
                      tailored to your specific needs.
                    </p>
                    <p>
                      From predictive analytics and natural language processing
                      (NLP) to image recognition and AI-powered chatbots, our
                      developers deliver solutions that drive innovation. We
                      ensure smooth integration of AI into your existing systems
                      while maintaining flexibility for future enhancements. For
                      businesses seeking cost-effective and quality solutions,
                      you can hire AI developers in India from Logicspice,
                      ensuring both expertise and value for your investment.
                    </p>
                  </div>
                </div>
                <div class="col-md-5">
                  <h2>Technical expertise</h2>
                  <ul class="list-group">
                    <li class="list-group-item">
                    <i class="fa fa-check-circle"></i>
                      <span>AI Model Design & Development</span>
                    </li>
                    <li class="list-group-item">
                    <i class="fa fa-check-circle"></i>
                      <span>Machine Learning Algorithm Implementation</span>
                    </li>
                    <li class="list-group-item">
                    <i class="fa fa-check-circle"></i>
                      <span>
                        Deep Learning Frameworks (TensorFlow, PyTorch)
                      </span>
                    </li>
                    <li class="list-group-item">
                    <i class="fa fa-check-circle"></i>
                      <span>Natural Language Processing (NLP) Solutions</span>
                    </li>
                    <li class="list-group-item">
                    <i class="fa fa-check-circle"></i>
                      <span>Computer Vision and Image Recognition</span>
                    </li>
                    <li class="list-group-item">
                    <i class="fa fa-check-circle"></i>
                      <span>AI Integration for Web & Mobile Applications </span>
                    </li>
                    <li class="list-group-item">
                    <i class="fa fa-check-circle"></i>
                      <span>AI Model Training, Testing & Optimization </span>
                    </li>
                    <li class="list-group-item">
                    <i class="fa fa-check-circle"></i>
                      <span>Cloud-based AI Deployment (AWS, GCP, Azure) </span>
                    </li>
                    <li class="list-group-item">
                    <i class="fa fa-check-circle"></i>
                      <span>
                        AI-driven Data Analysis & Predictive Modeling{" "}
                      </span>
                    </li>
                    <li class="list-group-item">
                    <i class="fa fa-check-circle"></i>
                      <span>AI Security, Ethics & Bias Mitigation </span>
                    </li>
                  </ul>{" "}
                </div>
              </div>
            </div>
          </div>
        </section>

<section class="HireWhiDevelopersSolution">
<div class="container">
  <div class="HireWhiDevelopersHadding">
            <h2>Why Hire Our Laravel Developers?</h2>
            <p>Partner with our skilled Laravel developers to transform your vision into a robust,<br /> scalable web application.</p>
            </div>
            <div class="HireWhiDevelopersbx">
              <div class="row">

              <div class="col-xs-12 col-md-6 col-lg-4">
              <div class="card HireBenefitCard">
              <div class="HireBenefitIcon">
              <i class="fa fa-code"></i>
              </div>
                <h3>Technical Expertise</h3>
                <p>Our Laravel developers stay updated with the latest framework features, ensuring your project benefits from modern development practices.</p>
              </div>
              </div>
              <div class="col-xs-12 col-md-6 col-lg-4">
              <div class="card HireBenefitCard">
              <div class="HireBenefitIcon">
              <i class="fa fa-rocket"></i>
              </div>
                <h3>Rapid Development</h3>
                <p>Leverage Laravel's elegant syntax and powerful features to accelerate the development process and reduce time-to-market.</p>
              </div>
              </div>
              <div class="col-xs-12 col-md-6 col-lg-4">
              <div class="card HireBenefitCard">
              <div class="HireBenefitIcon">
              <i class="fa fa-shield"></i>
              </div>
                <h3>Secure Applications</h3>
                <p>Our experts implement robust security measures to protect against common vulnerabilities and threats.</p>
              </div>
              </div>
              <div class="col-xs-12 col-md-6 col-lg-4">
              <div class="card HireBenefitCard">
              <div class="HireBenefitIcon">
              <i class="fa fa-tachometer"></i>
              </div>
                <h3>Optimized Performance</h3>
                <p>We build applications with performance in mind, ensuring fast loading times and smooth user experiences.</p>
              </div>
              </div>
              <div class="col-xs-12 col-md-6 col-lg-4">
              <div class="card HireBenefitCard">
              <div class="HireBenefitIcon">
              <i class="fa fa-refresh"></i>
              </div>
                <h3>Scalable Solutions</h3>
                <p>Our Laravel applications can grow alongside your business, handling increased traffic and data with ease.</p>
              </div>
              </div>
              <div class="col-xs-12 col-md-6 col-lg-4">
              <div class="card HireBenefitCard">
              <div class="HireBenefitIcon">
              <i class="fa fa-phone"></i>
              </div>
                <h3>Dedicated Support</h3>
                <p>Enjoy ongoing maintenance and support to ensure your application runs smoothly long after launch.</p>
              </div>
              </div>


              </div>
            </div>
            </div>
</section>

        <section class="new-custom-section CustomNewSolution">
          <div class="container">
            <h2>Hire Dedicated AI Developers for Custom AI Solutions</h2>
            <div class="custom-solution-bx">
              <div class="row">
                <div class="col-xs-12 col-md-6 col-lg-4">
                    <div class="card CardCustomSolution">
                      <i>
                        <Image
                          width={48}
                          height={100}
                          alt="icon-1"
                          src="/img/hiredevelopers/applications-icon.svg"
                          style={{ display: "inline" }}
                        />
                      </i>
                      <div class="CardCustomSolutionTxt">
                        <h3>1. AI-Powered Web & Mobile Applications </h3>
                        <p>
                          Use the power of AI to build smart, user-friendly web
                          and mobile apps that solve real business problems and
                          improve customer experience.
                        </p>
                      </div>
                    </div>
                    </div>
                    <div class="col-xs-12 col-md-6 col-lg-4">
                    <div class="card CardCustomSolution">
                      <i>
                        <Image
                          width={48}
                          height={100}
                          alt="icon-2"
                          src="/img/hiredevelopers/machine-learning-icon.svg"
                          style={{ display: "inline" }}
                        />
                      </i>
                      <div class="CardCustomSolutionTxt">
                        <h3>2. Machine Learning Model Development </h3>
                        <p>
                          Our AI developers build and fine-tune predictive
                          models that help businesses make smarter decisions.
                        </p>
                      </div>
                    </div>
</div>
<div class="col-xs-12 col-md-6 col-lg-4">
                    <div class="card CardCustomSolution">
                      <i>
                        <Image
                          width={48}
                          height={100}
                          alt="icon-3"
                          src="/img/hiredevelopers/language-processing-icon.svg"
                          style={{ display: "inline" }}
                        />
                      </i>
                      <div class="CardCustomSolutionTxt">
                        <h3>3. Natural Language Processing Solutions</h3>
                        <p>
                          From chatbots to text analysis, our developers create
                          NLP solutions to enhance customer engagement and
                          automation.
                        </p>
                      </div>
                    </div>
                </div>
               
                
                <div class="col-xs-12 col-md-6 col-lg-4">
                    <div class="card CardCustomSolution">
                      <i>
                        <Image
                          width={48}
                          height={100}
                          alt="icon-4"
                          src="/img/hiredevelopers/computer-vision-icon.svg"
                          style={{ display: "inline" }}
                        />
                      </i>
                      <div class="CardCustomSolutionTxt">
                        <h3>4. Computer Vision Applications </h3>
                        <p>
                          Hire Artificial Intelligence developers skilled in
                          developing visual recognition and image processing
                          systems for real-time insights.
                        </p>
                      </div>
                    </div>
</div>
<div class="col-xs-12 col-md-6 col-lg-4">
                    <div class="card CardCustomSolution">
                      <i>
                        <Image
                          width={48}
                          height={100}
                          alt="icon-5"
                          src="/img/hiredevelopers/legacy-systems-icon.svg"
                          style={{ display: "inline" }}
                        />
                      </i>
                      <div class="CardCustomSolutionTxt">
                        <h3>5. AI Integration for Legacy Systems</h3>
                        <p>
                          Modernize your software ecosystem by integrating AI
                          capabilities into your existing infrastructure.
                        </p>
                      </div>
                    </div>
</div>
<div class="col-xs-12 col-md-6 col-lg-4">
                    <div class="card CardCustomSolution">
                      <i>
                        <Image
                          width={48}
                          height={100}
                          alt="icon-6"
                          src="/img/hiredevelopers/data-engineering-icon.svg"
                          style={{ display: "inline" }}
                        />
                      </i>
                      <div class="CardCustomSolutionTxt">
                        <h3>6. Data Engineering & AI Model Training</h3>
                        <p>
                          We help businesses structure and prepare their data
                          for training accurate and efficient AI models.
                        </p>
                      </div>
                    </div>
                 
                </div>
              </div>{" "}
            </div>
          </div>
        </section>
        <section class="DevelopersEasySteps">
          <div class="container">
            <h2 class="title_heading">
              Hire Artificial Intelligence Developers in 5 easy steps.
            </h2>
            <div className="DevelopersEasyStepsRow">
<ul>
  <li><div class="DevelopersEasyStepsBarBx"><i>
                    <Image
                      alt="step-1"
                      src="/img/hiredevelopers/request-icon.svg"
                      width={48}
                      height={50}
                    />
                  </i>
                  <h5>Raise Your Request</h5>
                  </div>
                  </li>
                  <li>
                  <div class="DevelopersEasyStepsBarBx">
                  <i>
                    <Image
                      alt="step-2"
                      src="/img/hiredevelopers/discuss-requirment-icon.svg"
                      width={50}
                      height={50}
                    />
                  </i>
                  <h5>Discuss Your Requirment</h5>
                  </div>
                  </li>
                  <li>
                  <div class="DevelopersEasyStepsBarBx">
                  <i>
                    <Image
                      alt="step-3"
                      src="/img/hiredevelopers/select-experts-icon.svg"
                      width={58}
                      height={50}
                    />
                  </i>
                  <h5>Select Experts</h5>
                  </div>
                  </li>
                  <li>
                  <div class="DevelopersEasyStepsBarBx">
                  <i>
                    <Image
                      alt="step-4"
                      src="/img/hiredevelopers/finalize-terms-icon.svg"
                      width={48}
                      height={50}
                    />
                  </i>
                  <h5>Finalize the Terms</h5>
                  </div>
                  </li>
                  <li>
                    <div class="DevelopersEasyStepsBarBx">
                  <i>
                    <Image
                      alt="step-5"
                      src="/img/hiredevelopers/kick-start-icon.svg"
                      width={48}
                      height={50}
                    />
                  </i>
                  <h5>Assign and kick start</h5>
                  </div>
                  </li>
</ul>

            </div>

            <div class="step-but">
              <a onClick={openModal} className="btn btn-primary">
                <Enquirymodal
                  modalStatus={showModal}
                  toggle={openModal}
                  title="Request to hire-blockchain-developers"
                />
                Hire Now!
              </a>
            </div>
          </div>
        </section>
        <div class="HireTestimonialMainBx">
        <WhyHireFromLogicspice testimonialData={testimonialData} />
        </div>
        <div class="clearfix"></div>
        <section class="ecommerce_faq_section NewFaqDesignSection">
          <div class="container">
            <div class="row">
              <div class=" row  CustomQuickFAQScript">
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
                      headerTitle="What services can your AI developers provide?"
                      collapseId="flush-collapse1"
                    >
                      <p>
                        Our developers offer end-to-end AI services — from model
                        design, training, and deployment to AI integration and
                        optimization.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle="Can I hire AI developers for short-term or project-based work?"
                      collapseId="flush-collapse2"
                    >
                      <p>
                        Yes, we offer flexible hiring models including
                        part-time, full-time, and project-based contracts
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle="Will your AI developers help in model selection and data preparation?
"
                      collapseId="flush-collapse3"
                    >
                      <p>
                        Absolutely! Our developers assist in data preprocessing,
                        model selection, fine-tuning, and deployment.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle="How do you ensure the quality of AI solutions?
"
                      collapseId="flush-collapse4"
                    >
                      <p>
                        We follow rigorous testing, validation, and performance
                        monitoring at every stage to ensure scalable and
                        high-performing AI systems.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle=" Can your AI developers help integrate AI into existing systems?
"
                      collapseId="flush-collapse5"
                    >
                      <p>
                        Definitely! Our developers specialize in seamless AI
                        integration with your existing web, mobile, and
                        cloud-based systems to enhance business processes and
                        automation.
                      </p>
                    </MDBAccordionItem>
                  </MDBAccordion>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="enq-section EnquriBtn">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12 text-center">
                <div className="btn btn-primary" onClick={openModal}>
                  <a>Hire Now!</a>
                  {
                    <Enquirymodal
                      modalStatus={showModal}
                      toggle={openModal}
                      title="Hire BlockChain Developers"
                    />
                  }
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
      </section>
      <Footer />
    </>
  );
};

export default Page;
