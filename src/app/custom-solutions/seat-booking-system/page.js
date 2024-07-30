"use client";
import React, { useState } from "react";
import Footer from "@/app/Components/Footer";
import Navbar from "@/app/Components/Navbar";
import "@/app/custom-solutions/customsolutions.css";
import Image from "next/image";
import Link from "next/link";
import Enquirymodal from "@/app/Components/Enquirymodal";
import Contactusmodel from "@/app/Components/Contactusmodel";
import "../../resposive.css";
import "@fortawesome/fontawesome-free/css/all.css";
import Customsolutiontabs from "@/app/Components/Customsolutiontabs";
import { Accordion, Card, Button } from "react-bootstrap";

import Support from "@/app/Components/Support";
import {
  MDBAccordion,
  MDBAccordionItem,
  MDBModal,
  MDBModalBody,
} from "mdb-react-ui-kit";

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
      <Navbar />
      <div className="top-head-custom">
        <div className="container">
          <div className="col-md-8">
            <div className="head-enquiry">
              <h1>Custom Seat Booking App Development</h1>
              <p>
                Our custom seat booking solution provides you the best solution
                for your business related to hotel, theater, bus or any other
                kind of seat reservation system, customised to your very
                specific requirements. Potential customers can easily find and
                reserve a seat that meets their needs.
              </p>

              <div className="btn btn-primary" onClick={openModal}>
                <button>Enquire Now</button>
                {
                  <Enquirymodal
                    modalStatus={showModal}
                    toggle={openModal}
                    title="Custom Seat Booking App Development"
                  />
                }
              </div>
              <Link
                href="https://api.whatsapp.com/send?phone=+919829559922&text=Hi Logicspice Team, I have a question regarding the solutions you provide. Please Help!"
                target="_blank"
              >
                <div className="WhatsappIcon WhatsappIconCustom">
                  <div className="coccoc-alo-phone coccoc-alo-green coccoc-alo-show">
                    <div className="coccoc-alo-ph-circle"></div>
                    <div className="coccoc-alo-ph-circle-fill"></div>
                    <div className="coccoc-alo-ph-img-circle"></div>
                  </div>
                </div>
              </Link>
            </div>
            <ul className="head-feature">
              <li>Creating Liquid and Elastic Layouts</li>
              <li>Breathtaking UI & UX</li>
              <li>
                Customized development to meet your business requirements.
              </li>
              <li>We build robust web applications faster than ever before.</li>
            </ul>
            <div aria-label="breadcrumb" className="my-breadcrumb ">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link href="/">Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link href="/custom-solutions">Custom Solutions</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Seat Booking App
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="BFC_logic">
        <div className="container">
          <h2>Why logicspice is Best For Custom App/Web Development?</h2>
          <div className="row">
            <div className="col-md-3">
              <div className="top-box-BFC">
                <Image
                  height={100}
                  width={100}
                  src="/img/customsolutions/capp1.png"
                  alt="img1"
                />
                <h3>Ready to Go for Development</h3>
                <p>
                  We have a team of dedicated developers who are ready to work
                  on your requirements for app or web development. Our solution
                  is robust &amp; highly scalable.
                </p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="top-box-BFC">
                <Image
                  height={100}
                  width={100}
                  src="/img/customsolutions/capp2.png"
                  alt="img2"
                />
                <h3>Support &amp; Maintenance</h3>
                <p>
                  We support our customers from business analysis, designing,
                  development, maintenance. Our team is always available to
                  solve your query.
                </p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="top-box-BFC">
                <Image
                  height={100}
                  width={100}
                  src="/img/customsolutions/capp3.png"
                  alt="img3"
                />
                <h3>Cost- Efficient</h3>
                <p>
                  Our development varies with your requirement. We assure to
                  give cost efficient solution of development.
                </p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="top-box-BFC">
                <Image
                  height={100}
                  width={100}
                  src="/img/customsolutions/capp4.png"
                  alt="img4"
                />
                <h3>Future Extendibility</h3>
                <p>
                  You can extend the features &amp; functionality in your
                  customised app in future if you want to explore more. This
                  feature doesn&apos;t come up with a ready made script.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="SBC_logic">
        <div className="container">
          <h2>Custom Seat Booking App Development</h2>
        </div>
        <div className="inner_content_SBG">
          <div className="container">
            <p>
              Logicspice provide customized and affordable seat booking app
              development which is scalable & robust. Enquire, pick a team on
              seat booking demand app development from our pool of expert
              developers.We offer Bus Reservation System, Online movie ticket
              booking system,Indian railway ticket booking software.
            </p>

            <p>
              We help bring your on demand seat booking app business to life. It
              may be possible that ready made script may not fulfill your
              requirements. Our custom solution for seat booking app development
              is highly scalable & robust.
            </p>
            <p>
              Our Seat Booking Solution will facilitate the customers to find
              buses, trains, available movie tickets and book seats in them.
              They can find the bus & train by entering the source and
              destination along with the date of journey. They can choose the
              type of bus or train they want to travel in and see the available
              seats. If the seats are available, they can select the number of
              seats they want to book and select the seats.
            </p>
            <p>
              Logicspice offers seat booking custom development which allow
              customers to choose boarding and dropping point while booking the
              tickets. Once the seats are booked, they can receive the ticket by
              email. They will always have an option to cancel the tickets that
              have been booked and check the refund status.
            </p>
            <p>
              Transparency with client at every stage help us to deliver project
              within time & budget. Being a Mobile app & web development company
              over 10 years, we have a client across the world for on-demand
              seat booking website development.
            </p>
          </div>
        </div>
      </div>
      <div className="demand_app">
        <div className="container">
          <h2>Key Benefits of Our On Demand Seat Booking App Development</h2>

          {/* <div className="row">
            <div className="col-sm-4">
              <div
                className="demand-card aos-init aos-animate"
                data-aos="fade-right"
              >
                <div className="demand-img">
                  <Image
                    height={100}
                    width={80}
                    src="/img/customsolutions/b_icon1.png"
                    alt="img5"
                  />
                </div>
                <div className="demand-content">
                  <h3>Account Management</h3>
                  <p>
                    Track all businesses/firms you work with. These can be
                    future clients, customers, referral sources, or general
                    business connections.
                  </p>
                </div>
                <div className="clearfix"></div>
              </div>

              <div
                className="demand-card aos-init aos-animate"
                data-aos="fade-right"
              >
                <div className="demand-img">
                  <Image
                    height={100}
                    width={80}
                    src="/img/customsolutions/b_icon3.png"
                    alt="img6"
                  />
                </div>
                <div className="demand-content">
                  <h3>Sales Activity Tracking</h3>
                  <p>
                    Tasks you need to do/complete in order to move a sale
                    forward.
                  </p>
                </div>
                <div className="clearfix"></div>
              </div>

              <div
                className="demand-card aos-init aos-animate"
                data-aos="fade-right"
              >
                <div className="demand-img">
                  <Image
                    height={100}
                    width={80}
                    src="/img/customsolutions/b_icon5.png"
                    alt="img7"
                  />
                </div>
                <div className="demand-content">
                  <h3>Opportunity Management </h3>
                  <p>
                    Create a pipeline of future closed/potential business for
                    you.
                  </p>
                </div>
                <div className="clearfix"></div>
              </div>
            </div>
            <div className="col-sm-4 center_image">
              <Image
                height={100}
                width={250}
                src="/img/customsolutions/benifit.png"
                alt="img8"
              />
            </div>
            <div className="col-sm-4">
              <div
                className="demand-card aos-init aos-animate"
                data-aos="fade-left"
              >
                <div className="demand-content">
                  <h3>Lead Management </h3>
                  <p>
                    Track leads generated including who the sales rep is, what
                    products/services it’s for, timing, status, etc.
                  </p>
                </div>
                <div className="demand-img">
                  <Image
                    height={100}
                    width={80}
                    src="/img/customsolutions/b_icon2.png"
                    alt="img9"
                  />
                </div>
                <div className="clearfix"></div>
              </div>

              <div
                className="demand-card aos-init aos-animate"
                data-aos="fade-left"
              >
                <div className="demand-content">
                  <h3>Campaign Management</h3>
                  <p>
                    Track variety of information about an event, mailing,
                    emailing or other marketing initiative.
                  </p>
                </div>
                <div className="demand-img">
                  <Image
                    height={100}
                    width={80}
                    src="/img/customsolutions/b_icon4.png"
                    alt="img10"
                  />
                </div>
                <div className="clearfix"></div>
              </div>

              <div
                className="demand-card aos-init aos-animate"
                data-aos="fade-left"
              >
                <div className="demand-content">
                  <h3>Report Management </h3>
                  <p>
                    Create reports based on Demographics, Sales stage, Leads and
                    Sales profits.
                  </p>
                </div>
                <div className="demand-img">
                  <Image
                    height={100}
                    width={80}
                    src="/img/customsolutions/b_icon6.png"
                    alt="img11"
                  />
                </div>
                <div className="clearfix"></div>
              </div>
            </div>
          </div> */}
          <div className="row">
            <div className="col-sm-4">
              <div
                className="demand-card aos-init aos-animate"
                data-aos="fade-right"
              >
                <div className="demand-img">
                  <Image
                    height={100}
                    width={80}
                    src="/img/customsolutions/b_icon1.png"
                    alt="img5"
                  />
                </div>
                <div className="demand-content">
                  <h3>User Profile Integration</h3>
                  <p>
                    User can easily register &amp; login with one step by giving
                    the required details. Make the most out of by social media
                    registration &amp; login.
                  </p>
                </div>
                <div className="clearfix"></div>
              </div>

              <div
                className="demand-card aos-init aos-animate"
                data-aos="fade-right"
              >
                <div className="demand-img">
                  <Image
                    height={100}
                    width={80}
                    src="/img/customsolutions/b_icon3.png"
                    alt="img6"
                  />
                </div>
                <div className="demand-content">
                  <h3>Manage Request Services</h3>
                  <p>
                    Manage all the bookings at your fingertips with mobility
                    solution 24*7. Move your business ahead offering services to
                    users.
                  </p>
                </div>
                <div className="clearfix"></div>
              </div>

              <div
                className="demand-card aos-init aos-animate"
                data-aos="fade-right"
              >
                <div className="demand-img">
                  <Image
                    height={100}
                    width={80}
                    src="/img/customsolutions/b_icon5.png"
                    alt="img7"
                  />
                </div>
                <div className="demand-content">
                  <h3>Fully Responsive</h3>
                  <p>
                    Themes with ‘fit-all-screen’ compatibility allow user to
                    access from mobile as well as tablet.
                  </p>
                </div>
                <div className="clearfix"></div>
              </div>
            </div>
            <div className="col-sm-4 center_image">
              <Image
                height={100}
                width={250}
                src="/img/customsolutions/benifit.png"
                alt="img8"
              />
            </div>
            <div className="col-sm-4">
              <div
                className="demand-card aos-init aos-animate"
                data-aos="fade-left"
              >
                <div className="demand-content">
                  <h3>Lost Password Recovery</h3>
                  <p>
                    This feature allows customers to reset their password with
                    the ease of customized password resetter.
                  </p>
                </div>
                <div className="demand-img">
                  <Image
                    height={100}
                    width={80}
                    src="/img/customsolutions/b_icon2.png"
                    alt="img9"
                  />
                </div>
                <div className="clearfix"></div>
              </div>

              <div
                className="demand-card aos-init aos-animate"
                data-aos="fade-left"
              >
                <div className="demand-content">
                  <h3>Search Filter</h3>
                  <p>
                    This allows to search a keyword and give relevant result
                    back to the user.
                  </p>
                </div>
                <div className="demand-img">
                  <Image
                    height={100}
                    width={80}
                    src="/img/customsolutions/b_icon4.png"
                    alt="img10"
                  />
                </div>
                <div className="clearfix"></div>
              </div>

              <div
                className="demand-card aos-init aos-animate"
                data-aos="fade-left"
              >
                <div className="demand-content">
                  <h3>Unified payment methods</h3>
                  <p>
                    Get the secured and efficient payment gateway and offer
                    various payments like credit card, debit card &amp; net
                    banking.
                  </p>
                </div>
                <div className="demand-img">
                  <Image
                    height={100}
                    width={80}
                    src="/img/customsolutions/b_icon6.png"
                    alt="img11"
                  />
                </div>
                <div className="clearfix"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="content_area feature_inner" id="features">
        <div className="container">
          <h2 className="titlesettop titlesettop_mar">
            Custom Online Booking App/Web Development Features
          </h2>

          <div className="features-tab">
            <div className="clearfix">
              <ul className="nav nav-tabs" role="tablist">
                <li role="presentation" className="active">
                  <Link
                    href="#features-car1"
                    aria-controls="features-car"
                    role="tab"
                    data-toggle="tab"
                  >
                    Features
                  </Link>
                </li>
              </ul>

              <div className="tab-content">
                <div role="tabpanel" className="tab-pane active" id="features-car1">
                  {/* <div className="row">
                    <div className="col-sm-3">
                      <div className="ftr-detail">
                        <Image
                          height={100}
                          width={60}
                          src="/img/customsolutions/Lead-Management.png"
                          alt="Delivery Status"
                        />
                        <h3>Lead Management</h3>
                        <p>
                          Determine the customers based upon the demographics
                          and many other psychological factors.
                        </p>
                      </div>
                      <div className="ftr-detail">
                        <Image
                          height={100}
                          width={60}
                          src="/img/customsolutions/Sales-Management.png"
                          alt="Smart Routing"
                        />
                        <h3>Sales Management</h3>
                        <p>
                          Manager can easily manage their sales team performance
                          and data can be organized by the salesperson.
                        </p>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="ftr-detail">
                        <Image
                          height={100}
                          width={60}
                          src="/img/customsolutions/Assign-Salesperson.png"
                          alt="Easy to Use"
                        />
                        <h3>Assign to Salesperson</h3>
                        <p>
                          Organize the leads by work, location, skills and
                          assign it to the respective sales representatives.
                        </p>
                      </div>
                      <div className="ftr-detail">
                        <Image
                          height={100}
                          width={60}
                          src="/img/customsolutions/Chat-Integration.png"
                          alt="Automated Dispatching"
                        />
                        <h3>Chat Integration </h3>
                        <p>
                          You can directly chat to the customers, clients, leads
                          and provide them customer support.
                        </p>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="ftr-detail">
                        <Image
                          height={100}
                          width={60}
                          src="/img/customsolutions/Receive-Alert-Notifications.png"
                          alt="Admin Control"
                        />
                        <h3>Receive Alert Notifications</h3>
                        <p>
                          Receive alerts on email and popup when any task or
                          leads assigned to you with the appropriate details.
                        </p>
                      </div>
                      <div className="ftr-detail">
                        <Image
                          height={100}
                          width={60}
                          src="/img/customsolutions/Email-marketing-integration.png"
                          alt="Ratings &amp; Reviews"
                        />
                        <h3>Email marketing integration</h3>
                        <p>
                          Send emails to your customer about your latest
                          products, services and offers.
                        </p>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="ftr-detail">
                        <Image
                          height={100}
                          width={60}
                          src="/img/customsolutions/Customer-Satisfaction.png"
                          alt="Track Sales"
                        />
                        <h3>Customer Satisfaction</h3>
                        <p>
                          Manage each customer very carefully and efficiently to
                          make customer satisfied at high level.
                        </p>
                      </div>
                      <div className="ftr-detail">
                        <Image
                          height={100}
                          width={60}
                          src="/img/customsolutions/View-Reports.png"
                          alt="Partial &amp; Failed Delivery Status"
                        />
                        <h3>View Reports</h3>
                        <p>
                          View the report of the each client and check the
                          overall status of the report either it is good or not.{" "}
                        </p>
                      </div>
                    </div>
                  </div> */}
                  <div className="row">
                    <div className="col-sm-3">
                      <div className="ftr-detail">
                        <Image
                          height={100}
                          width={60}
                          src="/img/customsolutions/Book-Seat.png"
                          alt="Delivery Status"
                        />
                        <h3>Book Seat</h3>
                        <p>
                          Customer can book their seat through the app which
                          they like if the preferred seat are available.
                        </p>
                      </div>
                      <div className="ftr-detail">
                        <Image
                          height={100}
                          width={60}
                          src="/img/customsolutions/Cancel-Ticket.png"
                          alt="Smart Routing"
                        />
                        <h3>Cancel Ticket</h3>
                        <p>
                          Customers can cancel the ticket anytime and the amount
                          will be refunded to their account.
                        </p>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="ftr-detail">
                        <Image
                          height={100}
                          width={60}
                          src="/img/customsolutions/Ticket-Confirmation.png"
                          alt="Easy to Use"
                        />
                        <h3>Ticket Confirmation Mail</h3>
                        <p>
                          Email has been sent to the users with the confirmation
                          of their booking at associate email account.
                        </p>
                      </div>
                      <div className="ftr-detail">
                        <Image
                          height={100}
                          width={60}
                          src="/img/customsolutions/Print-Email-ticket.png"
                          alt="Automated Dispatching"
                        />
                        <h3>Print Email ticket</h3>
                        <p>
                          Ticket will be sent to your mobile through message and
                          email, you can print it if required.{" "}
                        </p>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="ftr-detail">
                        <Image
                          height={100}
                          width={60}
                          src="/img/customsolutions/Payment-Gateway.png"
                          alt="Admin Control"
                        />
                        <h3>Payment Gateway</h3>
                        <p>
                          User can easily make the payment through the
                          integrated payment gateway from debit card, credit
                          card.
                        </p>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="ftr-detail">
                        <Image
                          height={100}
                          width={60}
                          src="/img/customsolutions/Booking-Details.png"
                          alt="Track Sales"
                        />
                        <h3>Booking Details</h3>
                        <p>
                          Customers can check their all the booking details in
                          the my booking section.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="app_solution">
        <div className="container">
          <h2>Custom CRM App Development Solution</h2>
          <Customsolutiontabs />
        </div>
      </div>
      <div className="support_logic">
        <div className="container">
          <h2>What Support You Will Get ?</h2>
          <Support />
        </div>
      </div>

      {/*  */}
      <section className="ecommerce_faq_section CustomSolutionFaqSection">
        <div className="container">
            <div className="row">
                <div className="col-md-12 ecommerce__Quick_FAQ">
                    <h4 className="title_main">Quick FAQ</h4>
                    
                    <MDBAccordion v-model="activeItem" borderless>
              <MDBAccordionItem
                headerTitle="How can a customer search for businesses around his location?"
                collapseId="flush-collapse1"
              >
                <p>
                  A Customer can enter his zip/postal code on the website and
                  all the businesses that are around will be listed to the
                  customer.
                </p>
              </MDBAccordionItem>

              <MDBAccordionItem
                headerTitle="Can the customer give rating to a business even if he hasn't visited the store?"
                collapseId="flush-collapse2"
              >
                <p>
                  Yes, customer can give rating out of 5 even if they
                  haven&apos;t visited the store. Customer can also write a
                  review along with the rating.
                </p>
              </MDBAccordionItem>

              <MDBAccordionItem
                headerTitle="Can a business owner upload multiple services to the website?"
                collapseId="flush-collapse3"
              >
                <p>
                  Yes, the business owner can upload multiple services/products
                  that he deals in.
                </p>
              </MDBAccordionItem>

              <MDBAccordionItem
                headerTitle="How can a customer ensure the authenticity of the information of different businesses?"
                collapseId="flush-collapse4"
              >
                <p>
                  Whenever a business owner creates a page for his business, it
                  has to be approved by the admin.
                </p>
              </MDBAccordionItem>

              <MDBAccordionItem
                headerTitle="Can a user view the contact information of the seller?"
                collapseId="flush-collapse5"
              >
                <p>
                  Yes. If a seller chooses to share his contact information on
                  the website, the customer can see it.
                </p>
              </MDBAccordionItem>

              <MDBAccordionItem
                headerTitle="Can I update some design and functionality in the application code myself?"
                collapseId="flush-collapse6"
              >
                <p>Yes, You will have access to all the code.</p>
              </MDBAccordionItem>

              <MDBAccordionItem
                headerTitle="Will I be able to use it on multiple domains, after I purchase this software?"
                collapseId="flush-collapse7"
              >
                <p>
                  You will be licensed to use it only for the domain, you
                  purchased for.
                </p>
              </MDBAccordionItem>

              <MDBAccordionItem
                headerTitle="Can I resell the software? Will I have rights over the software code?"
                collapseId="flush-collapse8"
              >
                <p>
                  No, You can&apos;t resell the software. All rights will remain
                  with Logicspice only.
                </p>
              </MDBAccordionItem>

              <MDBAccordionItem
                headerTitle="Do you offer Money Back Guarantee?"
                collapseId="flush-collapse9"
              >
                <p>
                  Yes, we offer 30 days money-back guarantee to ensure customer
                  satisfaction with our software. If for any reason, you wish to
                  discontinue using the product, you can ask us for a refund. We
                  will refund your total money except the installation and
                  configuration charges, which is USD 65 or 20% of the
                  application cost, whichever is greater.
                </p>
              </MDBAccordionItem>

              <MDBAccordionItem
                headerTitle="Along with hosting server details, what other recommendations?"
                collapseId="flush-collapse10"
              >
                <p>
                  We recommend you purchase an SSL certificate along with a
                  hosting server, considering that an SSL certificate is
                  necessary for all websites these days and it provides a secure
                  layer to the website as well.
                </p>
              </MDBAccordionItem>
            </MDBAccordion>
                    
                </div>
            </div>
        </div>
    </section>
  
      <section className="enq-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 text-center">
              <div className="btn btn-primary" onClick={openModal}>
                <button>Enquire Now</button>
                {
                  <Enquirymodal
                    modalStatus={showModal}
                    toggle={openModal}
                    title="Custom Seat Booking App Development"
                  />
                }
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="quoue_box_full_sec">
        <div className="whatsapp-call">
          <Link
            href="https://api.whatsapp.com/send?phone=+919829559922&amp;text=Hi Logicspice Team, I have a question regarding the solutions you provide. Please Help!"
            target="_blank"
          >
            <Image
              src="/img/images/whatsapp.png"
              alt="whatsapp-icon"
              width={50}
              height={50}
            />
          </Link>
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
