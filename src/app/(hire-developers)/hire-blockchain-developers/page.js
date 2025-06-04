// import React from 'react'

// const Page = () => {
//   return (
//     <>

//     </>
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
      image: "/img/hireblockchain/chole-p.jpg",
      heading: "",
      text: "Hiring blockchain developers from Logicspice was the best decision for our Web 3.0 Application. Professional, proactive, and highly skilled!",
      name: "Chloe P,",
      location: "Product Owner",
    },
    {
      id: 2,
      image: "/img/hireblockchain/liam-h.jpg",
      heading: "",
      text: "The smart contract developers from Logicspice delivered flawless code for our DeFi platform. Smooth process and on-time delivery.",
      name: "Liam H,",
      location: "Blockchain Project Manager",
    },
    {
      id: 3,
      image: "/img/hireblockchain/daniel-s.jpg",
      heading: "",
      text: "From design to deployment, Logicspice’s blockchain experts handled everything perfectly. Highly recommended for any blockchain project!",
      name: "Daniel S,",
      location: "Startup Founder",
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
        <div class="hire_developer_back_iin_mask new-developers-mask">
          <div class="container">
            <div class="row">
              <div class="col-md-7 text-start">
                <h1 class="slide_title">Hire Blockchain Developers</h1>
                <div class="subinstet">
                  Blockchain is changing the future of industries with its
                  trust, security, and decentralized power. Whether you’re
                  building a crypto wallet, launching a DeFi app, or developing
                  smart contracts, our blockchain experts can help turn your
                  ideas into reliable and scalable digital products.
                </div>
                <div class="subinstet">
                  Logicspice offers highly skilled blockchain developers for
                  hire who match your project’s exact needs.
                </div>
                <div class="developer-servicees-bx">
                  <div class="developer-servicees">
                    <i class="fa fa-check" aria-hidden="true"></i>
                    <span>Decentralized & Secure Solutions</span>
                  </div>
                  <div class="developer-servicees">
                    <i class="fa fa-check" aria-hidden="true"></i>
                    <span>Future-Ready Blockchain Architecture</span>
                  </div>
                  <div class="developer-servicees">
                    <i class="fa fa-check" aria-hidden="true"></i>
                    <span>Smart Contract Development</span>
                  </div>
                  <div class="developer-servicees">
                    <i class="fa fa-check" aria-hidden="true"></i>
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
                    Chat With a Blockchain Expert
                  </a> */}
                  <a
            href="https://api.whatsapp.com/send?phone=+919829559922&amp;text=Hi Logicspice Team, I have a question regarding the solutions you provide. Please Help!"
            target="_blank"
            className="btn btn-primary"
          >
             Chat With a Blockchain Expert
          </a>
                </div>
              </div>
              <div class="col-md-5">
                <div class="cack_logo_img">
                  <Image
                    width={300}
                    height={100}
                    alt="Zencart"
                    src="/img/hiredevelopers/hire-blockchain-developers.png"
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
                <div class="HireFlexNewImg">
                  <Image
                    width={300}
                    height={500 / (100 / 100)}
                    alt="app development"
                    src="/img/hiredevelopers/hire-women-img.png"
                  />
                </div>
              </div>

              <div class="col-md-9 col-sm-8 p-0">
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

          <div class="hiring-sr">
            <div class="row">
              <div class="col-md-6">
                <div class="jumbotron">
                  <h2>Hire a Blockchain Development Expert</h2>
                  <p>
                    At Logicspice, we turn innovative ideas into
                    high-performance, secure, and scalable blockchain
                    applications.
                  </p>
                  <p>
                    Our developers have deep expertise in public and private
                    blockchain platforms, including Ethereum & Hyperledger.
                    Whether you're planning to launch a crypto exchange, NFT
                    marketplace, or a decentralized app, our blockchain
                    developers bring technical precision and creativity to every
                    project.
                  </p>
                  <p>
                    Looking to hire a blockchain developer for your next
                    venture? Our skilled professionals offer complete,
                    end-to-end{" "}
                    <Link href="/blockchain-development">
                      {" "}
                      blockchain development{" "}
                    </Link>{" "}
                    support — from blockchain architecture design and smart
                    contract development to seamless deployment, testing, and
                    post-launch maintenance. Whether you're aiming to launch a
                    DeFi platform, NFT marketplace, crypto wallet, or any other
                    blockchain-powered solution, our developers ensure secure,
                    scalable, and future-ready products.
                  </p>
                  <p>
                    If you're seeking cost-effective solutions without
                    compromising quality, you can confidently hire blockchain
                    developers in India through Logicspice, trusted by
                    businesses worldwide.
                  </p>
                </div>
              </div>
              <div class="col-md-6">
                <h2>Technical expertise</h2>
                <ul class="list-group">
                  <li class="list-group-item">
                    <span>Blockchain Architecture Design & Development</span>
                  </li>
                  <li class="list-group-item">
                    <span>Smart Contract Creation & Auditing</span>
                  </li>
                  <li class="list-group-item">
                    <span>Decentralized App (DApp) Development</span>
                  </li>
                  <li class="list-group-item">
                    <span>Private & Public Blockchain Networks</span>
                  </li>
                  <li class="list-group-item">
                    <span>
                      Ethereum, Binance Smart Chain & Polygon Integration
                    </span>
                  </li>
                  <li class="list-group-item">
                    <span>NFT Marketplace Development </span>
                  </li>
                  <li class="list-group-item">
                    <span>Decentralized Finance (DeFi) Solutions </span>
                  </li>
                  <li class="list-group-item">
                    <span>Blockchain Security Best Practices </span>
                  </li>
                  <li class="list-group-item">
                    <span>Token Development (ERC-20, ERC-721, ERC-1155) </span>
                  </li>
                  <li class="list-group-item">
                    <span>Blockchain-based Payment Gateway Integration </span>
                  </li>
                </ul>{" "}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="new-custom-section">
        <div class="container">
          <h2>
            Hire Dedicated Blockchain Developers for Custom Blockchain Solutions
          </h2>
          <div class="custom-solution-bx">
            <div class="row">
              <div class="col-md-6">
                <ul class="list-group">
                  <li class="list-group-item">
                    <i>
                      <Image
                        width={64}
                        height={100}
                        alt="icon-1"
                        src="/img/hiredevelopers/custom-icon1.png"
                        style={{ display: "inline" }}
                      />
                    </i>
                    <div class="custom-ser-txt">
                      <h3>1. Blockchain App Development</h3>
                      <p>
                      {/* Develop secure, scalable, decentralized blockchain apps tailored to your business needs. Our developers ensure smooth performance, future-ready architecture, and strong security. */}
                      Build secure, scalable blockchain apps tailored to your business needs. We ensure smooth performance, future-ready design, and robust security.
                      </p>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <i>
                      <Image
                        width={64}
                        height={100}
                        alt="icon-2"
                        src="/img/hiredevelopers/custom-icon2.png"
                        style={{ display: "inline" }}
                      />
                    </i>
                    <div class="custom-ser-txt">
                      <h3>2. Smart Contract Development </h3>
                      <p>
                      Hire smart contract developers to automate and secure transactions with self-executing agreements. We deliver bug-free, efficient contracts that minimize risk and save time.
                      </p>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <i>
                      <Image
                        width={64}
                        height={100}
                        alt="icon-3"
                        src="/img/hiredevelopers/custom-icon3.png"
                        style={{ display: "inline" }}
                      />
                    </i>
                    <div class="custom-ser-txt">
                      <h3>3. DeFi Application Development</h3>
                      <p>
                      Build cutting-edge DeFi platforms, staking protocols, liquidity pools, and yield farming apps. We ensure your project is secure, scalable, and market-ready.
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
                        width={64}
                        height={100}
                        alt="icon-4"
                        src="/img/hiredevelopers/custom-icon4.png"
                        style={{ display: "inline" }}
                      />
                    </i>
                    <div class="custom-ser-txt">
                      <h3>4. NFT Marketplace Solutions </h3>
                      <p>
                      Launch secure, feature-rich marketplaces for minting, trading, and auctioning NFTs. We deliver smooth user experiences with strong smart contract integration.
                      </p>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <i>
                      <Image
                        width={64}
                        height={100}
                        alt="icon-5"
                        src="/img/hiredevelopers/custom-icon5.png"
                        style={{ display: "inline" }}
                      />
                    </i>
                    <div class="custom-ser-txt">
                      <h3>5. Crypto Wallet Solutions</h3>
                      <p>
                      Hire blockchain app developers in the USA to build crypto wallets and payment gateways. Our wallets support multi-currency, multi-signature, and real-time tracking.
                      </p>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <i>
                      <Image
                        width={64}
                        height={100}
                        alt="icon-6"
                        src="/img/hiredevelopers/custom-icon6.png"
                        style={{ display: "inline" }}
                      />
                    </i>
                    <div class="custom-ser-txt">
                      <h3>6. Blockchain for Enterprises</h3>
                      <p>
                      Integrate blockchain to boost transparency, security, and efficiency. We help future-proof your systems with seamless distributed ledger adoption.
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
            Hire Blockchain Developers in 5 easy steps.
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
      <WhyHireFromLogicspice testimonialData={testimonialData} />
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
                    headerTitle="What services do your blockchain developers offer?"
                    collapseId="flush-collapse1"
                  >
                    <p>
                      Our developers handle everything — blockchain
                      architecture, smart contract development, DApp creation,
                      NFT marketplaces, and more.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Can I hire blockchain developers for short-term projects?"
                    collapseId="flush-collapse2"
                  >
                    <p>
                      Yes! We offer flexible hiring models — full-time,
                      part-time, or project-based — to suit your requirements.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Do you offer smart contract audit services?
"
                    collapseId="flush-collapse3"
                  >
                    <p>
                      Absolutely! Our smart contract developers can write, test,
                      and audit contracts for security and performance.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Can your developers help integrate blockchain into my existing system?
"
                    collapseId="flush-collapse4"
                  >
                    <p>
                      Absolutely! Our team makes it easy to connect blockchain
                      solutions with your existing websites and mobile apps.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Do you offer blockchain app development services in the USA?
"
                    collapseId="flush-collapse5"
                  >
                    <p>
                      Yes, you can hire blockchain app developers USA from
                      Logicspice to handle everything from concept to
                      deployment.
                    </p>
                  </MDBAccordionItem>
                </MDBAccordion>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="enq-section">
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
