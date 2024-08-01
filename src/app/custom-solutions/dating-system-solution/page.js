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
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Support from "@/app/Components/Support";
import { Accordion, Card, Button } from "react-bootstrap";

import {
  MDBAccordion,
  MDBAccordionItem,
  MDBModal,
  MDBModalBody,
} from "mdb-react-ui-kit";

const Page = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const [sellerTab, setSellerTab] = useState(true);
  const [buyerTab, setBuyerTab] = useState(false);

  const openModal = () => {
    console.log(showModal);

    setShowModal(!showModal);
  };

  const handleSellerTab = () => {
    setSellerTab(true);
    setBuyerTab(false);
  };
  const handleBuyerTab = () => {
    setSellerTab(false);
    setBuyerTab(true);
  };

  var settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <Navbar />
      <div className="top-head-custom Dating-System">
        <div className="container">
          <div className="col-md-8">
            <div className="head-enquiry">
              <h1>Custom Dating App Development</h1>
              <p>
                Get the best dating mobile apps (Android and iphone) or web
                solution from Logicspice, customized for your matchmaking
                application requirement. It could be a matrimonial or a dating
                app as per the specific requirements, to help your community
                members find and introduce themselves to potential connections
                over the Internet.
              </p>

              <div className="btn btn-primary" onClick={openModal}>
                <button>Enquire Now</button>
                {
                  <Enquirymodal
                    modalStatus={showModal}
                    toggle={openModal}
                    title="Custom Dating App Development"
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
              <li>Flexible modalities</li>
              <li>Budget Utilization</li>
              <li>highly creative team for a dynamic digital presence</li>
              <li>Intelligent Design</li>
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
                  Dating App
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
          <h2>Custom Dating System Software Development</h2>
        </div>
        <div className="inner_content_SBG">
          <div className="container">
            <p>
              The Dating System development will enable the user to create their
              free account over website by submitting their email id and can
              search for the other users through the search criteria defined
              over website. Users can see other user&apos;s profile from the list
              that will be shown according to the criteria and can view his/her
              profile. By using this custom dating software like Tinder, users
              can answers the questions over the website that they can compare
              with other users over the website.
            </p>

            <p>
              Our custom Dating app development like tinder, allow users to send
              messages to other users and can also check the messages that they
              have received by other users over website. Users can save other
              profiles; they can also see who viewed their profile, which they
              viewed etc. Users will be register as free member but they update
              their membership by paying respective amount through payment
              gateway integrated over website. According to the membership the
              users can access other features that are restricted.
            </p>
          </div>
        </div>
      </div>
      <div className="demand_app">
        <div className="container">
          <h2>Key Benefits of Our Custom Dating App Development</h2>

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
                  <h3>Subscribe to Upgrade</h3>
                  <p>
                    Users can stand out of the crowd by subscribing to premium
                    memberships
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
                  <h3>Profile Completeness </h3>
                  <p>
                    {" "}
                    More information the user enters, better is the chance the
                    find their correct date{" "}
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
                  <h3>Messages </h3>
                  <p>
                    User will be able to view the message sent to them by other
                    users in their in-box
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
                  <h3>Privacy Settings </h3>
                  <p>
                    {" "}
                    User can utilize advanced privacy settings so that his/her
                    profile is only visible to specific people
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
                  <h3>Advanced Filters</h3>
                  <p>
                    Users will able to filter the search for date using more
                    than 20 options
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
                  <h3>Over 300+ Questions</h3>
                  <p>
                    User can answer multiple questions according to which
                    potential dates will be listed for him/her
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
            Dating App/Web Development Features
          </h2>

          <div className="features-tab">
            <div className="clearfix">
              <ul className="nav nav-tabs" role="tablist">
                <li
                  id="tab1_li"
                  className={`jobseeker_app_job ddlj ${
                    sellerTab ? "active" : ""
                  }`}
                  onClick={() => handleSellerTab()}
                >
                  <a> Features</a>
                </li>
                <li
                  id="tab2_li"
                  className={`business-directory-system ddlj ${
                    buyerTab ? "active" : ""
                  }`}
                  onClick={() => handleBuyerTab()}
                >
                  <a>Screenshot </a>
                </li>
              </ul>

              <div className="tab-content">
                <div role="tabpanel" className="tab-pane active" id="features-car1">
                  {sellerTab && (
                    <>
                      <div className="row">
                        <div className="col-sm-3">
                          <div className="ftr-detail">
                            <Image
                              height={100}
                              width={60}
                              src="/img/customsolutions/Bid-Offer-Management.png"
                              alt="Smart Routing"
                            />
                            <h3>Bid Offer Management For Seller</h3>
                            <p>
                              Sellers can view the bid offers for their listed
                              products. Check the highest bidder, which will be
                              the auction winner.
                            </p>
                          </div>
                          <div className="ftr-detail">
                            <Image
                              height={100}
                              width={60}
                              src="/img/customsolutions/search.png"
                              alt="Delivery Status"
                            />
                            <h3>Search Product</h3>
                            <p>
                              Buyers can search for product by selecting the
                              category/sub-category, location &amp; keywords
                              over the website.
                            </p>
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="ftr-detail">
                            <Image
                              height={100}
                              width={60}
                              src="/img/customsolutions/payments.png"
                              alt="Partial &amp; Failed Delivery Status"
                            />
                            <h3>Payment</h3>
                            <p>
                              Buyers can make payment for purchase products by
                              secure credit card processing.
                            </p>
                          </div>

                          <div className="ftr-detail">
                            <Image
                              height={100}
                              width={60}
                              src="/img/customsolutions/User-Profile.png"
                              alt="Track Sales"
                            />
                            <h3>User Profile</h3>
                            <p>
                              Buyers/Sellers will be able to manage their basic
                              information includes add/edit details.
                            </p>
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="ftr-detail">
                            <Image
                              height={100}
                              width={60}
                              src="/img/customsolutions/Shop-Management.png"
                              alt="Admin Control"
                            />
                            <h3>Shop Management For Seller</h3>
                            <p>
                              Sellers can create their shop/store, one seller
                              can only create one store. They will be able to
                              add/edit/delete store.
                            </p>
                          </div>
                          <div className="ftr-detail">
                            <Image
                              height={100}
                              width={60}
                              src="/img/customsolutions/product-listing.png"
                              alt="Ratings &amp; Reviews"
                            />
                            <h3>Product Listing</h3>
                            <p>
                              Buyers can view listings of product and sort them
                              by keyword, price or alphabetical format.
                            </p>
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="ftr-detail">
                            <Image
                              height={100}
                              width={60}
                              src="/img/customsolutions/manage-product.png"
                              alt="Automated Dispatching"
                            />
                            <h3>Product Management For Seller</h3>
                            <p>
                              Sellers can add, edit or delete the products
                              online. While adding a product they have to enter
                              the details.
                            </p>
                          </div>

                          <div className="ftr-detail">
                            <Image
                              height={100}
                              width={60}
                              src="/img/customsolutions/product-detail.png"
                              alt="Easy to Use"
                            />
                            <h3>Product Detail</h3>
                            <p>
                              Buyer can view the product Image, category,
                              sub-category, seller name or store name, store
                              location.
                            </p>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
                <div role="tabpanel" className="tab-pane active" id="features-car1">
                  {buyerTab && (
                    <>
                      <div>
                        <Slider {...settings}>
                          <div className="SliderMainBx">
                            <a>
                              <Image
                                src="/img/customsolutions/Search_Module.jpg"
                                alt="icon"
                                title=""
                                className="img-fluid"
                                width={1300}
                                height={500 / (100 / 100)}
                              />
                            </a>
                          </div>
                          <div className="SliderMainBx">
                            <a>
                              <Image
                                src="/img/customsolutions/Profile-Listing-Module.jpg"
                                alt="icon"
                                title=""
                                className="img-fluid"
                                width={1300}
                                height={500 / (100 / 100)}
                              />
                            </a>
                          </div>
                          <div className="SliderMainBx">
                            <a>
                              <Image
                                src="/img/customsolutions/Advance_search.jpg"
                                alt="icon"
                                title=""
                                className="img-fluid"
                                width={1300}
                                height={500 / (100 / 100)}
                              />
                            </a>
                          </div>
                          <div className="SliderMainBx">
                            <a>
                              <Image
                                src="/img/customsolutions/Chat-module.jpg"
                                alt="icon"
                                title=""
                                className="img-fluid"
                                width={1300}
                                height={500 / (100 / 100)}
                              />
                            </a>
                          </div>
                        </Slider>
                      </div>
                    </>
                  )}
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
                    title="Custom Dating App Development"
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
