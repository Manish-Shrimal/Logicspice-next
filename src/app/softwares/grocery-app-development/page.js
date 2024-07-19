"use client";
import React, { useState } from "react";
import Footer from "@/app/Components/Footer";
import NavBar from "@/app/Components/Navbar";
import "@/app/softwares/softwares.css";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import Image from "next/image";
import Link from "next/link";
import "@fortawesome/fontawesome-free/css/all.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Contactusmodel from "@/app/Components/Contactusmodel";
import Enquirymodal from "@/app/Components/Enquirymodal";
import Reviewmodals from "@/app/Components/Reviewmodals";
import Whylogicspice from "@/app/Components/Whylogicspice";
import { Modal, ModalBody } from "react-bootstrap";

const page = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [jobportal, setJobportal] = useState(false);

  const toggleJobPortalModal = () => setJobportal(!jobportal);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  const openReviewModel = () => {
    setShowReviewModal(!showReviewModal);
  };
  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };
  const openModal = () => {
    setShowModal(!showModal);
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
  const [activeTab, setActiveTab] = useState("tab2");
  const [sellerTab, setSellerTab] = useState(true);
  const [adminTab, setAdminTab] = useState(false);

  const handleSellerTab = () => {
    setSellerTab(true);
    setAdminTab(false);
  };

  const handleAdminTab = () => {
    setSellerTab(false);
    setAdminTab(true);
  };

  const opendiv = (tab) => {
    setActiveTab(tab);
  };
  return (
    <>
      <NavBar />
      <section class="paid-pro job-portal-banner fiverr-new-banner NewJobSiteDesign JobBoardNewDesign NewCrowdDesigns job-portal-bg grocery-banner-new">
        <div class="container">
          <div class="row">
            <div class="col-sm-7 col-md-7">
              <h1>Grocery App Development Script</h1>
              <div class="both-left-p-sec">
                <h2>Bigbasket Clone, Instacart Clone</h2>
              </div>
              <div class="job-valu">
                <div class="portal-price NewPriceDesign">
                  <h4>
                    $45 USD<small>/mo</small>{" "}
                  </h4>
                  <div class="OfferPriceProduct">
                    <strike class="srik_cls">$175 USD</strike>
                    <span class="MoreInfo">
                      <i>
                        <img
                          src="/img/softwares-banner-img/more-info.png"
                          alt=""
                        />
                      </i>
                      <p>Limited Period Offer for First Year</p>
                    </span>
                  </div>
                </div>
                <div class="job-valu-btn">
                  <span>Fill your basic details and</span>
                  <div className="btn btn-get" onClick={openModal}>
                    <button>Get Demo Access!</button>
                    {
                      <Enquirymodal
                        modalStatus={showModal}
                        toggle={openModal}
                        title="Please fill the form below and get access to the live demo of Grocery Store & Delivery Script.
See how it work yourself!"
                      />
                    }
                  </div>
                  <Link
                    class="btn fiverr-buys NewGreenBtnJob"
                    href="/softwares/grocery-store-script"
                  >
                    Buy Now
                  </Link>
                </div>
                <div class="SubscriptionPrice">
                  <div class="line-border NewLineBoader">
                    <img
                      alt="crowd_funding_script"
                      src="/img/jobboard/stars.png"
                    />
                    <p>26 Reviews</p>
                  </div>
                </div>
              </div>
              <div class="jocpp">
                <ul class="job-pr-icon">
                  <li>
                    <i class="fa-solid fa-earth-americas"></i>
                  </li>
                  <li>
                    <i class="fa-brands fa-android"></i>
                  </li>
                  <li>
                    <i class="fa-brands fa-apple"></i>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-sm-5 col-md-5">
              <div class="por-mobile-new">
                <img
                  alt="Grocery_Store_Script"
                  src="/img/softwares-banner-img/grocery-banner-img.png"
                />
              </div>
            </div>
          </div>
          <div class="job-portal-banner-link">
            <div aria-label="breadcrumb" class="my-breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="">Home</a>
                </li>
                <li class="breadcrumb-item">
                  <a href="/softwares">Softwares</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  Online Grocery Store Script
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section class="job-section-top-new JobBoardSectionNew">
        <div class="container">
          <p>
            Take our online grocery store software on your smart mobile phones.
            Mobile application will provide all the features of the website. Get
            in touch with Logicspice today to get a grocery store app developed
            for your business. Our expert team specializes in comprehensive
            grocery app development, ensuring a seamless transition to mobile
            shopping for your customers.
          </p>
        </div>
      </section>
      <section
        class="client-say service-market-say"
        style={{ backgroundColor: "#fff" }}
      >
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="service-market-ttd">
                <ul>
                  <li>
                    Food Basket : Customers can add the item to the basket which
                    they want to purchase.
                  </li>
                  <li>
                    Categorically Search : Search products by selecting the
                    categories and subcategories.{" "}
                  </li>
                  <li>
                    Secure Payment : Pay for the purchased items by through an
                    integrated payment gateway.
                  </li>
                  <li>
                    Statistics : Which would include the total customers, total
                    products, total transactions etc.
                  </li>
                  <li>
                    Review Management : View a list of review given to the
                    products and delete them if required.
                  </li>
                  <li>
                    Product Management : Add/edit/delete the list of products
                    displayed on the website.
                  </li>
                  <li>Responsive website (mobile friendly)</li>
                  <li>White labeled script </li>
                  <li>One time License Fee</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="job_portal_area">
        <div class="container">
          <div class="job_or_title">
            <h2 class="taxt_tt_job">Online Grocery Store Software Features</h2>
          </div>

          <div class="tatxt_txt_job text-center">
            Maximize the potential of your online grocery store with our
            feature-rich online grocery store software. Enhance your business
            with customized Android & iOS apps, tailored to your unique
            requirements. Our extensive grocery app development services empower
            stores to expand their reach and boost sales. Experience seamless
            integration and personalized solutions designed to maximize your
            success.
          </div>

          <div class="tab_bbx_job">
            <div class="tab_bbx_top_job tab_bbx_job_classified">
              <ul className="">
                <li
                  id="tab1_li"
                  className={`food_app_job ddlj ${sellerTab ? "active" : ""}`}
                  onClick={() => handleSellerTab()}
                >
                  <a>Customer</a>
                </li>

                <li
                  id="tab3_li"
                  className={`admin_app_job ddlj ${adminTab ? "active" : ""}`}
                  onClick={() => handleAdminTab()}
                >
                  <a>Admin Panel</a>
                </li>
              </ul>
            </div>
            <div class="tab_contant">
              {sellerTab && (
                <>
                  <div class="costomer_tab rj" id="tab1">
                    <div class="row">
                      <div class="col-lg-4 col-md-3">
                        <div class="costomer_tab_right costomer_tab_rightleft">
                          <img
                            src="/img/grocery/lsgrocery_customer.png"
                            alt="Customer"
                          />
                        </div>
                      </div>
                      <div class="col-lg-8 col-md-9">
                        <div class="costomer_tab_left costomer_tab_leftright">
                          <ul>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/email_verific.png"
                                />
                              </i>
                              <span>
                                Email Verification
                                <div class="product-idea">
                                  <p>
                                    Customer will have to get themselves
                                    verified by the email they receive on their
                                    account.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/modular_home.png"
                                />
                              </i>
                              <span>
                                Modular Home Page
                                <div class="product-idea">
                                  <p>
                                    Homepage would show the popular Grocery
                                    Products so that Customer doesn't need to
                                    search them.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/manage_wishlist.png"
                                />
                              </i>
                              <span>
                                Wish list Feature
                                <div class="product-idea">
                                  <p>
                                    Customers can make a wish list of the
                                    products that they want to buy later or not
                                    available right now.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/transporter_list.png"
                                />
                              </i>
                              <span>
                                Product Listing
                                <div class="product-idea">
                                  <p>
                                    Customers can view complete list of the
                                    Grocery Products according to search
                                    criterion.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/membership_plan.png"
                                />
                              </i>
                              <span>
                                Membership Plans
                                <div class="product-idea">
                                  <p>
                                    Customers can subscribe to the membership
                                    plan to get free shipping or delivery of all
                                    the products.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/favorite-orders.png"
                                />
                              </i>
                              <span>
                                Favorites
                                <div class="product-idea">
                                  <p>
                                    Customers can add their favorite grocery
                                    products to their favorites list to find
                                    them quickly.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/view_save_projects.png"
                                />
                              </i>
                              <span>
                                Product Detail
                                <div class="product-idea">
                                  <p>
                                    Customers can see detail of the product like
                                    title, description, price, ratings, reviews
                                    and key points.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/search_product.png"
                                />
                              </i>
                              <span>
                                Categorically Search Products
                                <div class="product-idea">
                                  <p>
                                    Customers can search for products by
                                    selecting the categories first and then by
                                    selecting their subcategory.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/reviews_ratings.png"
                                />
                              </i>
                              <span>
                                Rating Feature
                                <div class="product-idea">
                                  <p>
                                    Customer can see the rating of different
                                    grocery items given by other customers
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/food_basket.png"
                                />
                              </i>
                              <span>
                                Food Basket
                                <div class="product-idea">
                                  <p>
                                    Add grocery item to the basket, add multiple
                                    items, change their quantity and delete them
                                    from the basket.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/browse_gig.png"
                                />
                              </i>
                              <span>
                                Guest User Browsing
                                <div class="product-idea">
                                  <p>
                                    Customers do not need to be signed in to
                                    browse the website and view the grocery
                                    items.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/get_paid.png"
                                />
                              </i>
                              <span>
                                payment gateway
                                <div class="product-idea">
                                  <p>
                                    Customer can pay for the purchased items by
                                    paying safely through an integrated payment
                                    gateway.
                                  </p>
                                </div>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {adminTab && (
                <>
                  <div class="costomer_tab rj" id="tab3">
                    <div class="row">
                      <div class="col-lg-4 col-md-3 ">
                        <div class="costomer_tab_right costomer_tab_rightleft2">
                          <img
                            src="/img/grocery/grocery_admin_mac.png"
                            alt="Admin Panel"
                          />
                        </div>
                      </div>
                      <div class="col-lg-8 col-md-9">
                        <div class="costomer_tab_left costomer_tab_leftright2">
                          <ul>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/configuration.png"
                                />
                              </i>
                              <span>
                                Configuration
                                <div class="product-idea">
                                  <p>
                                    Configure the app/website through the
                                    configuration section.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/admin_dash.png"
                                />
                              </i>
                              <span>
                                Manage Dashboard
                                <div class="product-idea">
                                  <p>
                                    Admin can manage their account settings and
                                    see their personal info over the dashboard
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/sponsorship-history.png"
                                />
                              </i>
                              <span>
                                Statistics
                                <div class="product-idea">
                                  <p>
                                    See the statistics which include the total
                                    customers, total products, total
                                    transactions, total reviews etc.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/manage_category.png"
                                />
                              </i>
                              <span>
                                Category Management
                                <div class="product-idea">
                                  <p>
                                    Admin can manage the categories of the
                                    products that he adds to the website/app and
                                    add/edit/delete them
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/manage_user.png"
                                />
                              </i>
                              <span>
                                Customer Management
                                <div class="product-idea">
                                  <p>
                                    Admin can Manage the list of customers
                                    registered to the website/app and
                                    add/edit/delete them
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/view_category.png"
                                />
                              </i>
                              <span>
                                Subcategory Management
                                <div class="product-idea">
                                  <p>
                                    Admin can Manage the sub categories for each
                                    categories of the products add/edit/delete
                                    them.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/manage-project.png"
                                />
                              </i>
                              <span>
                                Product Management
                                <div class="product-idea">
                                  <p>
                                    Admin can Manage the list of products
                                    displayed on the website/app and
                                    add/edit/delete them
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/manage_order.png"
                                />
                              </i>
                              <span>
                                Manage orders
                                <div class="product-idea">
                                  <p>
                                    Admin can see the Orders which are placed by
                                    customer from Front End. Admin can cancel
                                    the Order if product is out stock or due to
                                    some other reason.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/manage_faq.png"
                                />
                              </i>
                              <span>
                                Manage FAQs
                                <div class="product-idea">
                                  <p>
                                    Admin can manage(add/edit/delete) all the
                                    Questions & Answers which are under FAQ's
                                    section.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/reviews_ratings.png"
                                />
                              </i>
                              <span>
                                Review Management
                                <div class="product-idea">
                                  <p>
                                    Admin can view a list of reviews that were
                                    given to the products and delete them if
                                    they find it inappropriate
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/manage_transaction.png"
                                />
                              </i>
                              <span>
                                Transaction Management
                                <div class="product-idea">
                                  <p>
                                    Admin can View the list of transactions that
                                    took place over the website/app
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <img
                                  alt="img"
                                  src="/img/jobboard/view-blogs.png"
                                />
                              </i>
                              <span>
                                Manage Blogs
                                <div class="product-idea">
                                  <p>
                                    Admin will be able to add post for blogs
                                    with blogs articles & images. Admin can
                                    manage the blog posts.
                                  </p>
                                </div>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
      <section class="job_product_page_header_in">
        <div class="container">
          <div class="whateissuprt">
            <h2 class="headhs">
              What does{" "}
              <span>our Grocery E-Commerce Store Script offer you?</span>
            </h2>
            <p>
              If you're planning to sell groceries online, our online grocery
              store software stands out as the best available choice in the
              market. Our grocery app development offers a modern, highly
              interactive, and responsive solution with unique features
              specially tailored for your grocery store. Our grocery delivery
              script is designed to be user-friendly, allowing easy management
              without requiring any technical knowledge. Whether you're a
              seasoned professional or new to the online grocery business, our
              grocery store supermarket script ensures a seamless experience for
              both you and your customers.
            </p>
            <p>
              Online shopping for groceries has truly revolutionized
              convenience, sparing people the hassle of getting their cars out
              of the garage, struggling through traffic jams, and spending hours
              in a supermarket selecting the best products, only to wait in a
              queue to pay. Investing in grocery shopping app development or
              on-demand grocery delivery app development services is a smart
              move to ensure success in your grocery business. With the right
              technology in place, your grocery store website or app can attract
              and retain customers, offering them the convenience and efficiency
              they desire.
            </p>
            <p>
              With our grocery store software, you can effortlessly upload and
              manage unlimited grocery products. Drawing from our extensive
              experience in the industry, we understand the intricacies of this
              line of work, making it easier for you as a client to communicate
              your requirements effectively. Our grocery script, similar to
              PepperTab, BigBasket Clone, NetGrocer, and Instacart Clone, saves
              you considerable time and effort. Additionally, our grocery
              delivery software eliminates the need for calculators and enables
              convenient online payments.{" "}
            </p>
            <p>
              At Logicspice, we've developed a clean, modern, user-friendly, and
              responsive online grocery store software. Our grocery delivery
              script streamlines the management of your online grocery store,
              ensuring efficiency and ease of use. We're confident that our
              advanced grocery store script will fully satisfy your needs. You
              can customize this script according to your specific requirements
              with the help of our best
              <a href="/ecommerce-development" style={{ color: "#fff" }}>
                custom E-commerce Development Services
              </a>{" "}
              for tailored solutions and enhancements. Explore our grocery
              delivery app development services for further enhancements and
              tailored solutions.
            </p>
          </div>
        </div>
      </section>
      <section
        class="SubscriptionModel"
        id="subscriptionmodel"
        style={{ bgbackgroundColor: "#fff" }}
      >
        <div class="container">
          <div class="job_or_title">
            <h2 class="taxt_tt_job">Subscription Model</h2>
            <br />
            <div class="SubscriptionModelBx">
              <p>
                Experience convenience like never before with our
                subscription-based hassle-free model, available at just{" "}
                <strong>USD 45 per month</strong>, limited offer available for
                the first year.
              </p>
              <p>Key Benefits:</p>
              <ul>
                <li>
                  <span>
                    Lifetime Updates: Enjoy complimentary updates for your
                    software version throughout its lifespan.
                  </span>
                </li>
                <li>
                  <span>
                    Timely Upgrades: Seamlessly transition to upgraded versions
                    at regular intervals, all at no extra cost.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Zero Setup Fees</strong>:- There are no additional
                    charges for the setup and installation of the software,
                    making it easier for customers to get started.
                  </span>
                </li>
                <li>
                  <span>
                    Unlimited product Listing: List as many products as you need
                    without any limitations.
                  </span>
                </li>
                <li>
                  <span>
                    Mobile Apps: Stay perpetually connected with Android and
                    iPhone apps, available for an additional USD 45 per month
                    for each, android or iPhone. These apps will be launched
                    through your dedicated developer accounts on Google Play and
                    the Apple App Store.
                  </span>
                </li>
                <li>
                  <span>
                    Effortless Program Operation: Revel in robust bandwidth that
                    guarantees your program runs flawlessly, supported by
                    resources allocated to your subscription model. Any increase
                    in allocated resources will incur additional charges beyond
                    the standard subscription model.
                  </span>
                </li>
                <li>
                  <span>
                    Enduring Support: We are committed to providing lifelong
                    assistance through our subscription model. If any software
                    issues arise, our <strong>dedicated technical team</strong>{" "}
                    will promptly address them during office hours.
                  </span>
                </li>
                <li>
                  <span>
                    Personalized Customization Assistance: Delivering Custom
                    Features According to Client Requirements at additional
                    cost.
                  </span>
                </li>
              </ul>
              <p>
                Discover a new era of convenience and efficiency with our
                subscription offering. Subscribe today and elevate your
                experience with our readymade solution!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="subscriptionprice" class="SubscriptionpriceSection">
        <div class="container">
          <h2 class="taxt_tt_job">Delivered Solution</h2>
          <div class="SubscriptionModelPrice">
            <div class="SubscriptionModelPriceBx">
              <h4>
                ₹88,190<span class="sml_labl"> INR</span>
              </h4>
              <strike class="srik_cls">
                ₹147,805<span class="sml_labl"> INR</span>
              </strike>
              <div class="SubscriptionModelPriceBtn">
                <div className="btn btn-get" onClick={openModal}>
                  <button>Get Demo Access!</button>
                  {
                    <Enquirymodal
                      modalStatus={showModal}
                      toggle={openModal}
                      title="Please fill the form below and get access to the live demo of Grocery Store & Delivery Script.
See how it work yourself!"
                    />
                  }
                </div>
                <Link
                  class="btn fiverr-buys"
                  href="/softwares/grocery-app-development"
                >
                  Buy Now
                </Link>
              </div>
              <div class="jocpp">
                <ul class="job-pr-icon">
                  <li>
                    <i class="fa-solid fa-earth-americas"></i>
                  </li>
                </ul>
                <div class="portel-btnbx">
                  <div class="line-border NewLineBoader">
                    <img src="/img/jobboard/stars.png" alt="" class="lazy" />
                    <p>26 Reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="SubscriptionModelBx">
            <p>
              The solution offered by Logicspice provides several advantages
              that can assist you in expanding your business within the
              competitive market. Here are some key benefits outlined below:
            </p>

            <ul>
              <li>
                <span>
                  Obtain a lifetime license for your domain under the pro
                  license with a one-time fee.
                </span>
              </li>
              <li>
                <span>
                  Enjoy free installation of the software for the first time.
                </span>
              </li>
              <li>
                <span>
                  Benefit from a white-labelled solution featuring your
                  branding, logo, and content at no additional cost.
                </span>
              </li>
              <li>
                <span>
                  Access custom features according to your specific
                  requirements, available at an additional charge.
                </span>
              </li>
              <li>
                <span>
                  Receive three months of complimentary support for any bugs or
                  issues you encounter.
                </span>
              </li>
              <li>
                <span>
                  Experience efficient communication channels via email,
                  WhatsApp, Google Meet, Skype, Zoom and Teams.
                </span>
              </li>
            </ul>
            <p>
              For details on an Enterprise license, please{" "}
              <a onClick={toggleModal}>contact us</a>.
            </p>
          </div>
        </div>
      </section>

      <section className="job_portal_area job_portal_area_food">
        <div className="container">
          <div className="job_or_title">
            <h2 className="taxt_tt_job">
              Best Partner Company For Your Technological Solutions!
            </h2>
            <br />
            <div className="logic-parter">
              <a
                className=""
                aria-controls="jobportal"
                onClick={toggleJobPortalModal}
              >
                <i className="fa fa-cogs" aria-hidden="true"></i>
                <span>How It Works</span>
              </a>
              <a onClick={toggleInfo} className="ylogicspice">
                <i>
                  <img
                    src="/img/images/why-logic-icon.png"
                    alt=""
                    className=""
                  />
                </i>
                <span>Why Logicspice</span>
              </a>
              <Whylogicspice open={showInfo} />
            </div>
          </div>
        </div>
      </section>
      <div>
        <Modal
          show={jobportal}
          onHide={toggleJobPortalModal}
          id="jobportal"
          className="modal-service"
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <img
              src="/img/foodordering/foodordering_marketplace.jpg"
              alt="icon"
              title=""
              className="img-fluid"
            />
          </Modal.Body>
          <Modal.Footer>
            <button
              className="btn btn-secondary"
              onClick={toggleJobPortalModal}
            >
              Close
            </button>
          </Modal.Footer>
        </Modal>
      </div>
      <section class="used_technology_section" id="technologies">
        <div class="container">
          <h4 class="title_main">
            <span>Used Technologies</span> and Server Requirements
          </h4>
          <div class="used_technology_section_dataa">
            <div class="row">
              <div class="col-sm-6">
                <ul>
                  <li data-aos="fade-up">
                    <div class="icntechimg">
                      <img
                        src="/img/jobboard/wp_icon.png"
                        alt="Wordpress Development"
                      />
                    </div>
                    <div class="icntechimg_nm">Wordpress</div>
                  </li>
                  <li data-aos="fade-up">
                    <div class="icntechimg">
                      <img src="/img/jobboard/html-5.png" alt="HTML5" />
                    </div>
                    <div class="icntechimg_nm">HTML5</div>
                  </li>
                  <li data-aos="fade-up">
                    <div class="icntechimg">
                      <img
                        src="/img/jobboard/tech_mysql_icon.png"
                        alt="MySQL"
                      />
                    </div>
                    <div class="icntechimg_nm">MySQL</div>
                  </li>
                  <li data-aos="fade-up">
                    <div class="icntechimg">
                      <img
                        src="/img/jobboard/tech_apache_icon.png"
                        alt="Apache"
                      />
                    </div>
                    <div class="icntechimg_nm">Apache</div>
                  </li>
                </ul>
              </div>
              <div class="col-sm-6">
                <ul class="list_detail">
                  <li class="same">
                    <b>Browsers - </b> Firefox 32.6+, Chrome 20.0+, Opera 30.0+,
                    Safari 5+, IE 9+
                  </li>
                  <li class="same">
                    <b>Framework - </b> Cakephp
                  </li>
                  <li class="same">
                    <b>Language - </b> PHP 5.4+, AJAX, jQuery
                  </li>
                  <li class="same">
                    <b>Design - </b> HTML 5, CSS 3, JavaScript
                  </li>
                  <li class="same">
                    <b>Database - </b> MySQL 5.5+{" "}
                  </li>
                  <li class="same">
                    <b>Server - </b> Apache 2.4+
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="whatsupport_section" id="support">
        <div class="container">
          <h4 class="title_main">
            What <span>support</span> you will get?
          </h4>
          <div class="supportsetting">
            <ul>
              <li data-aos="fade">
                <div class="supportsetting_icn">
                  <img
                    src="/img/jobboard/month_half_icon.png"
                    alt="manager_icn"
                  />
                </div>
                <div class="supportsettingtext">Free Support</div>
              </li>
              <li data-aos="fade">
                <div class="supportsetting_icn">
                  <img
                    src="/img/jobboard/free_remove_icon.png"
                    alt="manager_icn"
                  />
                </div>
                <div class="supportsettingtext">Free Brand Removal</div>
              </li>
              <li data-aos="fade">
                <div class="supportsetting_icn">
                  <img src="/img/jobboard/free_instal.png" alt="manager_icn" />
                </div>
                <div class="supportsettingtext">Free Installation</div>
              </li>
              <li data-aos="fade">
                <div class="supportsetting_icn">
                  <img
                    src="/img/jobboard/access_secure_code_icon.png"
                    alt="manager_icn"
                  />
                </div>
                <div class="supportsettingtext">Easily scalable</div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section class="su_rev_section" id="reviews">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h4 class="title_main">Customer Reviews </h4>
              <div class="row">
                <div class="col-md-5">
                  <div class="outof_rating">
                    <div class="main-rait">
                      <span>
                        <i class="fa fa-star"></i>{" "}
                        <span>4.8 out of 5 stars</span>
                      </span>
                    </div>
                    <div class="review_rating_fjs">
                      <div class="star_num">
                        5 <i class="fa fa-star"></i>
                      </div>
                      <div class="progress">
                        <div
                          class="progress-bar progress-bar-danger progress-bar-striped"
                          role="progressbar"
                          aria-valuenow="70"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                      <div class="people_star_num">23</div>
                    </div>

                    <div class="review_rating_fjs">
                      <div class="star_num">
                        4 <i class="fa fa-star"></i>
                      </div>
                      <div class="progress">
                        <div
                          class="progress-bar progress-bar-danger progress-bar-striped"
                          role="progressbar"
                          aria-valuenow="70"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: "10%" }}
                        ></div>
                      </div>
                      <div class="people_star_num">3</div>
                    </div>

                    <div class="review_rating_fjs">
                      <div class="star_num">
                        3 <i class="fa fa-star"></i>
                      </div>
                      <div class="progress">
                        <div
                          class="progress-bar progress-bar-danger progress-bar-striped"
                          role="progressbar"
                          aria-valuenow="70"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: "0%" }}
                        ></div>
                      </div>
                      <div class="people_star_num">0</div>
                    </div>

                    <div class="review_rating_fjs">
                      <div class="star_num">
                        2 <i class="fa fa-star"></i>
                      </div>
                      <div class="progress">
                        <div
                          class="progress-bar progress-bar-danger progress-bar-striped"
                          role="progressbar"
                          aria-valuenow="70"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: "0%" }}
                        ></div>
                      </div>
                      <div class="people_star_num">0</div>
                    </div>

                    <div class="review_rating_fjs">
                      <div class="star_num">
                        1 <i class="fa fa-star"></i>
                      </div>
                      <div class="progress">
                        <div
                          class="progress-bar progress-bar-danger progress-bar-striped"
                          role="progressbar"
                          aria-valuenow="70"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: "0%" }}
                        ></div>
                      </div>
                      <div class="people_star_num">0</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-7">
                  <a className="btn btn-primary" onClick={openReviewModel}>
                    Rate and Review product
                  </a>

                  <Reviewmodals
                    modalStatus={showReviewModal}
                    toggle={openReviewModel}
                    title="Grocery App Development & Delivery Script"
                  />
                </div>
                <div class="col-md-12">
                  <div class="customers_review_sec_row">
                    <div class="customer_review_stext">
                      "This is the perfect clone script to launch an online
                      grocery store. Quick response and support was very helpful
                      for me. I wanted a little customization in the script
                      according to my plan and they had done this at very low
                      cost. Thank you!"
                    </div>

                    <div class="who_ratset">
                      <span class="star_review_main">
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star-half" aria-hidden="true"></i>
                      </span>
                      <span id="client-name">Marcus Cruz, Canada</span>{" "}
                      <span class="ConuntryFlagIcon">
                        <img
                          src="/img/jobboard/canada_flag_img.png"
                          alt="mobile app development in Canada"
                        />
                      </span>
                    </div>
                  </div>
                  <div class="customers_review_sec_row">
                    <div class="customer_review_stext">
                      "Feature rich online grocery software with easy
                      installation process. The team logicspice guided me with
                      full details and installed the script for me. Fast
                      response, proper guidance and free consultation, Thank you
                      logicspice. Highly recommended!"
                    </div>

                    <div class="who_ratset">
                      <span class="star_review_main">
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                      </span>
                      Lisa Jonhathan, Switzerland{" "}
                      <span class="ConuntryFlagIcon">
                        <img
                          src="/img/jobboard/switzerland_flag_img.png"
                          alt="mobile app development in Switzerland"
                        />
                      </span>
                    </div>
                  </div>
                  <div class="customers_review_sec_row">
                    <div class="customer_review_stext">
                      "I was planning to start new online grocery store and
                      initialy I got wrong developers but when I consulted my
                      need with logicspice, they provided the right solution in
                      less time as a ready-made online grocery store script like
                      PepperTab & Instacart. The support team handled my queries
                      very politely and explained each and every step for the
                      script and installed it for me. Thank you team!"
                    </div>

                    <div class="who_ratset">
                      <span class="star_review_main">
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                      </span>
                      Antom D, UK{" "}
                      <span class="ConuntryFlagIcon">
                        <img
                          src="/img/jobboard/uk_flag_img.png"
                          alt="mobile app development in UK"
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 Quick_FAQ">
              <h4 class="title_main">FAQ's</h4>
              <div class="MainFaqBx">
                <MDBAccordion v-model="activeItem" borderless>
                  <MDBAccordionItem
                    headerTitle="How will the potential customers reach you?"
                    collapseId="flush-collapse1"
                  >
                    <p>
                      The customers can enter their postcode to find the store
                      that delivers in their area.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Can customers post a review about the store, even if the customers haven't visited the store yet?"
                    collapseId="flush-collapse2"
                  >
                    <p>
                      Yes, the customers and potential customers both can write
                      reviews, they can also rate the business out of five.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Can the owner of the business upload more than one service or product on the website?"
                    collapseId="flush-collapse4"
                  >
                    <p>
                      Candidate will give the online test in the Multiple Choice
                      Question(MCQ) pattern.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Can candidates see Test Result ?"
                    collapseId="flush-collapse5"
                  >
                    <p>
                      Yes, the owner of the business can post multiple grocery
                      products or services in which one deals.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Can the business owner display his or her contact details for the customers?"
                    collapseId="flush-collapse6"
                  >
                    <p>
                      Yes, by selecting the option to display contact details,
                      the business owner can display the details to the
                      customers.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Can I update some design and functionality in application code myself?"
                    collapseId="flush-collapse7"
                  >
                    <p>Yes, You will have access of the all the code. </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Will I be able to use it on multiple domains, after I purchase this script?"
                    collapseId="flush-collapse8"
                  >
                    <p>
                      You will be licensed to use it only for the domain, you
                      purchased for.
                    </p>
                  </MDBAccordionItem>
                  <MDBAccordionItem
                    headerTitle="Can I resell the script? Will I have rights over the script code?"
                    collapseId="flush-collapse9"
                  >
                    <p>
                      No, You can’t resell the script. All rights will remain
                      with Logicspice only.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Do you offer Money Back Guarantee?"
                    collapseId="flush-collapse13"
                  >
                    <p>
                      Yes, we offer 30 days money back guarantee to ensure
                      customer satisfaction of our softwares. If for any reason,
                      you wish to discontinue using the product, you can ask us
                      for refund. We will refund your total money except the
                      installation and configuration charges, which is USD 65 or
                      20% of application cost, whichever is greater.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Along with hosting server details, what other recommendations?"
                    collapseId="flush-collapse14"
                  >
                    <p>
                      We recommend you purchase SSL certificate along with a
                      hosting server, considering that an SSL certificate is
                      necessary for all the websites these days and it provides
                      a secure layer to the website as well.
                    </p>
                  </MDBAccordionItem>
                </MDBAccordion>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="content_area feature_inner" id="features">
        <div class="container">
          <h2 class="title_main">Grocery Store Script Features</h2>
          <div id="joblboardslide">
            <Slider {...settings}>
              <div class="SliderMainBx">
                <div class="feat-slide-img">
                  <img
                    src="/img/grocery/categorically_search_products.png"
                    alt="Categorically Search Products"
                  />
                </div>
                <div class="hands-proved">
                  <div class="titleof_scnew">Categorically Search Products</div>
                  <div class="pro-feat-detai">
                    Customers can search for products by selecting the
                    categories first and then by selecting their subcategory.
                  </div>
                </div>
              </div>

              <div class="SliderMainBx">
                <div class="feat-slide-img">
                  <img
                    src="/img/grocery/product_details.png"
                    alt="Product Detail"
                  />
                </div>
                <div class="hands-proved">
                  <div class="titleof_scnew">Product Detail</div>
                  <div class="pro-feat-detai">
                    Customers can see detail of the product like title,
                    description, price, ratings, reviews and key points.
                  </div>
                </div>
              </div>

              <div class="SliderMainBx">
                <div class="feat-slide-img">
                  <img
                    src="/img/grocery/product_listing.png"
                    alt="Product Listing"
                  />
                </div>
                <div class="hands-proved">
                  <div class="titleof_scnew">Product Listing</div>
                  <div class="pro-feat-detai">
                    Customers can make a wish list of the products that they
                    want to buy later or not available right now.
                  </div>
                </div>
              </div>

              <div class="SliderMainBx">
                <div class="feat-slide-img">
                  <img
                    src="/img/grocery/wishlist.png"
                    alt="Wish list Feature"
                  />
                </div>
                <div class="hands-proved">
                  <div class="titleof_scnew">Wish list Feature</div>
                  <div class="pro-feat-detai">
                    Customers can make a wish list of the products that they
                    want to buy later or not available right now.
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
      <section class="enq-section">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-12 text-center">
          
              <div className="btn btn-primary" onClick={openModal}>
                <button>Enquire Now</button>
                {
                  <Enquirymodal
                    modalStatus={showModal}
                    toggle={openModal}
                    title=" Grocery Store & Delivery Script"
                  />
                }
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="latest_feature_product">
        <div class="container">
          <h2 class="title_main">Other Popular Softwares</h2>
          <div class="other-product-box">
            <div class="row">
              <div class="col-sm-6 col-md-4">
                <div class="thumbnail">
                  <a title="View Detail" target="_black">
                    <div class="caption">
                      <div class="other-caption-bx">
                        <h3>Job Board Software</h3>
                        <div class="other-project-logo">
                          <img
                            src="/img/jobboard/job-board-logo.png"
                            alt="Job board software"
                          />
                        </div>
                        <p>
                          <span>Best white label job board software.</span>{" "}
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div class="col-sm-6 col-md-4">
                <div class="thumbnail">
                  <a title="View Detail" target="_black">
                    <div class="caption">
                      <div class="other-caption-bx">
                        <h3>Udemy Clone</h3>

                        <div class="other-project-logo">
                          <img
                            src="/img/jobboard/udemy_new.png"
                            alt="Udemy Clone"
                          />
                        </div>
                        <p>
                          <span>
                            Readymade Script of video E- Learning Platform like
                            Udemy.
                          </span>
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div class="col-sm-6 col-md-4">
                <div class="thumbnail">
                  <a title="View Detail" target="_black">
                    <div class="caption">
                      <div class="other-caption-bx">
                        <h3>WhatsApp Clone App</h3>

                        <div class="other-project-logo">
                          <img
                            src="/img/jobboard/ls-chat-logo.png"
                            alt="WhatsApp Clone App"
                          />
                        </div>
                        <p>
                          <span>Readymade WhatsApp Clone Script.</span>
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
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
            <img
              src="https://www.logicspice.com/img/images/whatsapp.png"
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

export default page;
