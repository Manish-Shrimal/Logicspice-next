"use client";
import React, { useEffect, useState } from "react";
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
// import axios from "axios";
import BaseAPI from "@/app/BaseAPI/BaseAPI";

const Page = () => {
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
  const [modalOpen, setModalOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  // const [activeTab, setActiveTab] = useState("");
  const [sellerTab, setSellerTab] = useState(true);
  const [buyerTab, setBuyerTab] = useState(false);
  const [adminTab, setAdminTab] = useState(false);
  const [customerTab, setCustomerTab] = useState(false);
  const [pageData, setPageData] = useState([]);

  // const getData = async () => {
  //   try {
  //     const response = await axios.get(
  //       BaseAPI + "/product/Details/inventory-management-software"
  //     );
  //     // console.log(response.data.data)
  //     setPageData(response.data.data);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

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

  const handleSellerTab = () => {
    setSellerTab(true);
    setBuyerTab(false);
    setCustomerTab(false);
    setAdminTab(false);
  };
  const handleCustomerTab = () => {
    setSellerTab(false);
    setBuyerTab(false);
    setCustomerTab(true);
    setAdminTab(false);
  };
  const handleBuyerTab = () => {
    setSellerTab(false);
    setBuyerTab(true);
    setCustomerTab(false);
    setAdminTab(false);
  };
  const handleAdminTab = () => {
    setSellerTab(false);
    setBuyerTab(false);
    setCustomerTab(false);
    setAdminTab(true);
  };

  const opendiv = (tabId) => {
    setActiveTab(tabId);
  };
  return (
    <>
      <NavBar />
      <section className="paid-pro job-portal-banner fiverr-new-banner job-portal-bg NewJobSiteDesign InventoryManagementBanner">
        <div className="container">
          <div className="row">
            <div className="col-sm-7 col-md-7 col-lg-8">
              <h1>LS Inventorizerr - Inventory Management Software</h1>
              <div className="both-left-p-sec">
                <h2>Efficient Inventory Control and Tracking</h2>
              </div>
              <div className="job-valu">
                <div className="portal-price NewPriceDesign">
                  <h4>
                    $45 USD<small>/mo</small>{" "}
                  </h4>
                  <div className="OfferPriceProduct">
                    <strike className="srik_cls">$175 USD</strike>
                    <span className="MoreInfo">
                      <i>
                        <Image
                          width={100}
                          height={100}
                          src="https://www.logicspice.com/app/webroot/img/images/more-info.png"
                          alt=""
                        />
                      </i>
                      <p>Limited Period Offer for First Year</p>
                    </span>
                    <span className="AppPrice" style={{ display: "none" }}>
                      <a
                        className="text-primary js-anchor-link"
                        href="#subscriptionmodel"
                      >
                        More Details
                      </a>
                    </span>
                  </div>
                </div>
                <div className="job-valu-btn">
                  <span>Fill your basic details and</span>
                  <div className="btn btn-get" onClick={openModal}>
                    <button>Enquire Now</button>
                    {
                      <Enquirymodal
                        modalStatus={showModal}
                        toggle={openModal}
                        title={"Inventory Management Software"}
                      />
                    }
                  </div>
                </div>
              </div>
              <div className="jocpp">
                <div className="portel-btnbx">
                  <div className="line-border NewLineBoader">
                    <Image
                      width={100}
                      height={100}
                      src="/img/jobboard/stars.png"
                      alt=""
                      className="lazy"
                    />
                    <p>70 Reviews</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-5 col-md-5 col-lg-4">
              <div className="por-mobile-new">
                <Image
                  width={400}
                  height={100}
                  className=""
                  src="/img/inventory-management/inventory-banner-img.png"
                  alt="Marketplace Software"
                />
              </div>
            </div>
          </div>
          <div className="job-portal-banner-link">
            <div aria-label="breadcrumb" className="my-breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link href="/">Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link href="/softwares">Softwares</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Inventory Management Software
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section className="job-section-top-new JobBoardSectionNew">
        <div className="container">
          <p>
            Experience comprehensive end-to-end supply chain visibility and
            control with our web based inventory management system. From the
            moment you initiate a purchase order to the final customer sale, our
            robust solution diligently tracks your goods at every stage of the
            journey. You&apos;ll gain real-time insights into inventory levels,
            demand fluctuations, and production status, empowering you to make
            data-driven decisions for optimized stock management and enhanced
            operational efficiency. Streamline your supply chain processes and
            take charge of your inventory management with our powerful software.
          </p>
        </div>
      </section>

      <section
        className="client-say crowdfunding-say"
        style={{ backgroundColor: "#fff" }}
      >
        <div className="container">
          <div className="service-market-ttd-new event-ttd-new">
            <ul>
              <li className="FirstMarketplace">
                Boosting Profits via Inventory Precision
              </li>
              <li>Effortless Scaling for Market Demands</li>
              <li>Holistic Business Empowerment</li>
              <li>Precision-Driven Warehouse Efficiency</li>
              <li className="FirstMarketplace">
                Sales and Customer Service Synergy
              </li>
              <li>Effective Strategies in Product Management</li>
              <li>Return Policy and Procedures</li>
              <li>Simplified Quotation Process</li>
              <li className="FirstMarketplace">
                Proactive Notifications Management
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="job_portal_area InventoryManagementArea">
        <div className="container">
          <div className="job_or_title">
            <h2 className="taxt_tt_job">Exploring LS Inventorizerr Features</h2>
          </div>
          <div className="tatxt_txt_job MarketplaceTxtJob">
            <p>
              An automated inventory management system is a vital asset for
              businesses. It meticulously tracks both incoming and outgoing
              inventory, enabling precise responses to customer demands while
              mitigating the risks associated with overstocking and stockouts.
              It has a far-reaching impact, influencing core business functions
              such as accounting, production, warehouse management, purchasing,
              sales, and customer service. This system empowers organizations to
              maintain accurate financial records, streamline production
              processes, optimize storage conditions, make informed procurement
              decisions, provide real-time stock availability information to
              sales teams, and expedite customer service responses. In summary,
              it is a multifaceted tool that enhances operational efficiency and
              cost-effectiveness across the board.
            </p>
          </div>

          <div className="tab_bbx_job">
            <div className="tab_bbx_top_job">
              <ul className="JobBoardNewtab">
                <li
                  id="tab1_li"
                  className={`jobseeker_app_job ddlj ${
                    sellerTab ? "active" : ""
                  }`}
                  onClick={() => handleSellerTab()}
                >
                  <a>Jobseeker App Features </a>
                </li>
                <li
                  id="tab2_li"
                  className={`supplier_app_job ddljddlj ${
                    buyerTab ? "active" : ""
                  }`}
                  onClick={() => handleBuyerTab()}
                >
                  <a>Employer App Features </a>
                </li>
                <li
                  id="tab3_li"
                  className={`emplyer_app_job ddlj ${
                    customerTab ? "active" : ""
                  }`}
                  onClick={() => handleCustomerTab()}
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

            <div className="tab_contant">
              {sellerTab && (
                <>
                  <div className="row">
                    <div className="col-lg-4 col-md-3">
                      <div className="costomer_tab_right costomer_tab_rightleft">
                        <Image
                          width={300}
                          height={100}
                          src="/img/inventory-management/billers-img.png"
                          alt="Billers / Staff"
                        />
                      </div>
                    </div>
                    <div className="col-lg-8 col-md-9">
                      <div className="costomer_tab_left costomer_tab_leftright">
                        <ul>
                          <li>
                            <i>
                              <Image
                                width={100}
                                height={100}
                                alt="img"
                                src="/img/jobboard/ragister-icon.png"
                              />
                            </i>
                            <span>
                              Create Account
                              <div className="product-idea">
                                <p>
                                  Biller can register and create an account
                                  using valid email on the website as a staff.
                                </p>
                              </div>
                            </span>
                          </li>
                          <li>
                            <i>
                              <Image
                                width={100}
                                height={100}
                                alt="img"
                                src="/img/jobboard/manage_alert.png"
                              />
                            </i>
                            <span>
                              Secure Login
                              <div className="product-idea">
                                <p>
                                  Secure login for billers and staff
                                  representatives using valid email and
                                  password. Biller is the representative of the
                                  company
                                </p>
                              </div>
                            </span>
                          </li>
                          <li>
                            <i>
                              <Image
                                width={100}
                                height={100}
                                alt="img"
                                src="/img/jobboard/manage_profile.png"
                              />
                            </i>
                            <span>
                              Manage Products
                              <div className="product-idea">
                                <p>
                                  Biller&apos;s capability to Add, Edit, and
                                  Delete products from the backend as a staff
                                  member after account creation.
                                </p>
                              </div>
                            </span>
                          </li>
                          <li>
                            <i>
                              <Image
                                width={100}
                                height={100}
                                alt="img"
                                src="/img/jobboard/save_fav.png"
                              />
                            </i>
                            <span>
                              Manage Sales Orders
                              <div className="product-idea">
                                <p>
                                  Billers can manage and create the sales orders
                                  for products.
                                </p>
                              </div>
                            </span>
                          </li>
                          <li>
                            <i>
                              <Image
                                width={100}
                                height={100}
                                alt="img"
                                src="/img/jobboard/apply_job.png"
                              />
                            </i>
                            <span>
                              Manage Purchase Orders
                              <div className="product-idea">
                                <p>
                                  Handling customer biller&apos;s ability to
                                  initiate sales and purchase orders for
                                  customers from warehouse inventory.
                                </p>
                              </div>
                            </span>
                          </li>
                          <li>
                            <i>
                              <Image
                                width={100}
                                height={100}
                                alt="img"
                                src="/img/jobboard/search_job.png"
                              />
                            </i>
                            <span>
                              Expenses Management
                              <div className="product-idea">
                                <p>
                                  Billers can create expenses categories for
                                  warehouses with expenses categories.
                                </p>
                              </div>
                            </span>
                          </li>
                          <li>
                            <i>
                              <Image
                                width={100}
                                height={100}
                                alt="img"
                                src="/img/jobboard/applied_job.png"
                              />
                            </i>
                            <span>
                              Warehouse transfers management
                              <div className="product-idea">
                                <p>
                                  Billers can effortlessly move products between
                                  warehouses using the transfer Module.
                                </p>
                              </div>
                            </span>
                          </li>
                          <li>
                            <i>
                              <Image
                                width={100}
                                height={100}
                                alt="img"
                                src="/img/jobboard/share_job.png"
                              />
                            </i>
                            <span>
                              Sale / purchase Returns
                              <div className="product-idea">
                                <p>
                                  Biller can return products with the return
                                  module. Biller can track return of both
                                  purchase and sale with this module.
                                </p>
                              </div>
                            </span>
                          </li>
                          <li>
                            <i>
                              <Image
                                width={100}
                                height={100}
                                alt="img"
                                src="/img/jobboard/manage_edu.png"
                              />
                            </i>
                            <span>
                              Manage Customers
                              <div className="product-idea">
                                <p>
                                  Billers can seamlessly manage customers as
                                  employees or staff within user management.
                                </p>
                              </div>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {buyerTab && (
                <>
                  <div className="row">
                    <div className="col-lg-4 col-md-3">
                      <div className="costomer_tab_right">
                        <Image
                          width={300}
                          height={100}
                          src="/img/inventory-management/supplier-mode.png"
                          alt="Supplier Mode"
                        />
                      </div>
                    </div>
                    <div className="col-lg-8 col-md-9">
                      <div className="costomer_tab_left">
                        <ul>
                          <li>
                            <i>
                              <Image
                                width={100}
                                height={100}
                                alt="img"
                                src="/img/jobboard/manage-availability-icon.png"
                              />
                            </i>
                            <span>
                              Secure login
                              <div className="product-idea">
                                <p>
                                  Admin adds suppliers, allowing them to log in
                                  securely using valid email and password.
                                </p>
                              </div>
                            </span>
                          </li>
                          <li>
                            <i>
                              <Image
                                width={100}
                                height={100}
                                alt="img"
                                src="/img/jobboard/manage-services-icon.png"
                              />
                            </i>
                            <span>
                              Suppliers Management
                              <div className="product-idea">
                                <p>
                                  Suppliers Enable Admins and Billers to procure
                                  products and generate sales and purchase
                                  orders.
                                </p>
                              </div>
                            </span>
                          </li>

                          <li>
                            <i>
                              <Image
                                width={100}
                                height={100}
                                alt="img"
                                src="/img/jobboard/manage-outstanding-icon.png"
                              />
                            </i>
                            <span>
                              Manage Profile
                              <div className="product-idea">
                                <p>
                                  Suppliers can easily access and modify their
                                  profile information.
                                </p>
                              </div>
                            </span>
                          </li>
                          <li>
                            <i>
                              <Image
                                width={100}
                                height={100}
                                alt="img"
                                src="/img/jobboard/accept-requests-icon.png"
                              />
                            </i>
                            <span>
                              View Purchase Orders
                              <div className="product-idea">
                                <p>
                                  Suppliers can access and review the list of
                                  purchased orders.
                                </p>
                              </div>
                            </span>
                          </li>
                          <li>
                            <i>
                              <Image
                                width={100}
                                height={100}
                                alt="img"
                                src="/img/jobboard/manage-requests-icon.png"
                              />
                            </i>
                            <span>
                              Email Notifications
                              <div className="product-idea">
                                <p>
                                  Suppliers get email notifications when the
                                  purchase order is created for the products.
                                </p>
                              </div>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </>
              )}
              {customerTab && (
                <>
                  <div className="row">
                    <div className="col-lg-4 col-md-3">
                      <div className="costomer_tab_right">
                        <Image
                          width={300}
                          height={100}
                          src="/img/inventory-management/customer-img.png"
                          alt="Customer"
                        />
                      </div>
                    </div>
                    <div className="col-lg-8 col-md-9">
                      <div className="costomer_tab_left">
                        <ul>
                          <li>
                            <i>
                              <Image
                                width={100}
                                height={100}
                                alt="img"
                                src="/img/jobboard/manage-availability-icon.png"
                              />
                            </i>
                            <span>
                              Create Account
                              <div className="product-idea">
                                <p>
                                  Users can create an account on the website by
                                  choosing from admin-defined customer groups.
                                </p>
                              </div>
                            </span>
                          </li>
                          <li>
                            <i>
                              <Image
                                width={100}
                                height={100}
                                alt="img"
                                src="/img/jobboard/manage-services-icon.png"
                              />
                            </i>
                            <span>
                              Securely login
                              <div className="product-idea">
                                <p>
                                  Customers can access their accounts by
                                  entering a valid email address and password.
                                </p>
                              </div>
                            </span>
                          </li>

                          <li>
                            <i>
                              <Image
                                width={100}
                                height={100}
                                alt="img"
                                src="/img/jobboard/manage-outstanding-icon.png"
                              />
                            </i>
                            <span>
                              Manage Profile
                              <div className="product-idea">
                                <p>
                                  Customers have the capability to view and make
                                  detailed updates to their profile information.
                                </p>
                              </div>
                            </span>
                          </li>
                          <li>
                            <i>
                              <Image
                                width={100}
                                height={100}
                                alt="img"
                                src="/img/jobboard/accept-requests-icon.png"
                              />
                            </i>
                            <span>
                              Manage Sales Orders
                              <div className="product-idea">
                                <p>
                                  Customers can handle sales orders placed by
                                  billers or admin on their behalf.
                                </p>
                              </div>
                            </span>
                          </li>
                          <li>
                            <i>
                              <Image
                                width={100}
                                height={100}
                                alt="img"
                                src="/img/jobboard/manage-requests-icon.png"
                              />
                            </i>
                            <span>
                              Manage Purchase Orders
                              <div className="product-idea">
                                <p>
                                  Customers can oversee purchase orders placed
                                  by billers or admin on their behalf.
                                </p>
                              </div>
                            </span>
                          </li>
                          <li>
                            <i>
                              <Image
                                width={100}
                                height={100}
                                alt="img"
                                src="/img/jobboard/manage-requests-icon.png"
                              />
                            </i>
                            <span>
                              Sale Purchase Returns
                              <div className="product-idea">
                                <p>
                                  Customers can initiate returns for sales and
                                  purchase orders from their accounts.
                                </p>
                              </div>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {adminTab && (
                <>
                  <div className="row">
                    <div className="col-lg-4 col-md-3 ">
                      <div className="costomer_tab_right costomer_tab_rightleft2">
                        <Image
                          width={300}
                          height={100}
                          src="/img/inventory-management/admin-dashboard-img.png"
                          alt="Admin Panel"
                        />
                      </div>
                    </div>
                    <div className="col-lg-8 col-md-9">
                      <div className="costomer_tab_left costomer_tab_leftright2">
                        <ul>
                          <li>
                            <i>
                              <Image
                                width={100}
                                height={100}
                                alt="img"
                                src="/img/jobboard/secure_login.png"
                              />
                            </i>
                            <span>
                              Secure Login
                              <div className="product-idea">
                                <p>Admins can securely log in to this panel.</p>
                              </div>
                            </span>
                          </li>
                          <li>
                            <i>
                              <Image
                                width={100}
                                height={100}
                                alt="img"
                                src="/img/jobboard/admin_dash.png"
                              />
                            </i>
                            <span>
                              Admin Dashboard
                              <div className="product-idea">
                                <p>
                                  Within the admin panel, administrators can
                                  access a comprehensive dashboard that provides
                                  detailed counts of sellers, billers, and
                                  orders.
                                </p>
                              </div>
                            </span>
                          </li>
                          <li>
                            <i>
                              <Image
                                width={100}
                                height={100}
                                alt="img"
                                src="/img/jobboard/configuration.png"
                              />
                            </i>
                            <span>
                              Manage Products
                              <div className="product-idea">
                                <p>
                                  Admin can view a list of products and have the
                                  capability to manage them, including viewing,
                                  adding, editing, and deleting products.
                                </p>
                              </div>
                            </span>
                          </li>
                          <li>
                            <i>
                              <Image
                                width={100}
                                height={100}
                                alt="img"
                                src="/img/jobboard/manage_skill.png"
                              />
                            </i>
                            <span>
                              Manage Stock
                              <div className="product-idea">
                                <p>
                                  Admin have the ability to view stocks and
                                  manage them, including viewing, adding,
                                  editing, and deleting stock for both products
                                  and warehouses.
                                </p>
                              </div>
                            </span>
                          </li>
                          <li>
                            <i>
                              <Image
                                width={100}
                                height={100}
                                alt="img"
                                src="/img/jobboard/manage_emp.png"
                              />
                            </i>
                            <span>
                              Purchase Management
                              <div className="product-idea">
                                <p>
                                  Admin can create purchase orders, generate
                                  invoices for orders, and adjust stock
                                  quantities for products as needed.
                                </p>
                              </div>
                            </span>
                          </li>
                          <li>
                            <i>
                              <Image
                                width={100}
                                height={100}
                                alt="img"
                                src="/img/jobboard/manage_job.png"
                              />
                            </i>
                            <span>
                              Sale Management
                              <div className="product-idea">
                                <p>
                                  Admin can create sales orders for customers,
                                  warehouses, and billers using the sales
                                  management feature. Additionally, admins can
                                  generate invoices for sale orders.
                                </p>
                              </div>
                            </span>
                          </li>
                          <li>
                            <i>
                              <Image
                                width={100}
                                height={100}
                                alt="img"
                                src="/img/jobboard/manage_news.png"
                              />
                            </i>
                            <span>
                              Expenses Management
                              <div className="product-idea">
                                <p>
                                  Admin can create expense categories for
                                  warehouses, enabling the categorization and
                                  management of expenses.
                                </p>
                              </div>
                            </span>
                          </li>
                          <li>
                            <i>
                              <Image
                                width={100}
                                height={100}
                                alt="img"
                                src="/img/jobboard/course_details.png"
                              />
                            </i>
                            <span>
                              Quotation Management
                              <div className="product-idea">
                                <p>
                                  Admin can generate quotations within the
                                  Quotation module, and have the flexibility to
                                  convert these quotations into sales orders
                                  while also being able to update the sale order
                                  accordingly.
                                </p>
                              </div>
                            </span>
                          </li>
                          <li>
                            <i>
                              <Image
                                width={100}
                                height={100}
                                alt="img"
                                src="/img/jobboard/manage_cat.png"
                              />
                            </i>
                            <span>
                              Warehouse Transfer Management
                              <div className="product-idea">
                                <p>
                                  Admin can efficiently move products from one
                                  warehouse to another within the Transfer
                                  module.
                                </p>
                              </div>
                            </span>
                          </li>
                          <li>
                            <i>
                              <Image
                                width={100}
                                height={100}
                                alt="img"
                                src="/img/jobboard/manage_blog.png"
                              />
                            </i>
                            <span>
                              Sale Purchase Return Management
                              <div className="product-idea">
                                <p>
                                  Admin can process product returns using the
                                  return module, allowing them to track returns
                                  for both purchase and sale transactions.
                                </p>
                              </div>
                            </span>
                          </li>
                          <li>
                            <i>
                              <Image
                                width={100}
                                height={100}
                                alt="img"
                                src="/img/jobboard/manage_banner.png"
                              />
                            </i>
                            <span>
                              Manage Payments Accounts
                              <div className="product-idea">
                                <p>
                                  Admin can oversee money transfer records
                                  between internal accounts within the system.
                                </p>
                              </div>
                            </span>
                          </li>
                          <li>
                            <i>
                              <Image
                                width={100}
                                height={100}
                                alt="img"
                                src="/img/jobboard/manage_banner.png"
                              />
                            </i>
                            <span>
                              Manage Users
                              <div className="product-idea">
                                <p>
                                  Admin can access lists of billers, sellers,
                                  and customers, and have the capability to
                                  manage all users, including viewing, adding,
                                  editing, and deleting user accounts from the
                                  backend.
                                </p>
                              </div>
                            </span>
                          </li>
                          <li>
                            <i>
                              <Image
                                width={100}
                                height={100}
                                alt="img"
                                src="/img/jobboard/manage_banner.png"
                              />
                            </i>
                            <span>
                              Manage Reports
                              <div className="product-idea">
                                <p>
                                  Admin can effortlessly generate a variety of
                                  reports automatically through the system.
                                </p>
                              </div>
                            </span>
                          </li>
                          <li>
                            <i>
                              <Image
                                width={100}
                                height={100}
                                alt="img"
                                src="/img/jobboard/manage_banner.png"
                              />
                            </i>
                            <span>
                              Manage IMS Configuration
                              <div className="product-idea">
                                <p>
                                  Admin have the ability to manage IMS
                                  configuration, staff members for billers and
                                  sellers, warehouse settings, customer group
                                  management, and other relevant configurations.
                                </p>
                              </div>
                            </span>
                          </li>
                          <li>
                            <i>
                              <Image
                                width={100}
                                height={100}
                                alt="img"
                                src="/img/jobboard/manage_banner.png"
                              />
                            </i>
                            <span>
                              Manage Categories
                              <div className="product-idea">
                                <p>
                                  Admin can efficiently oversee categories and
                                  subcategories, with options for viewing,
                                  adding, editing, and deleting.
                                </p>
                              </div>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="job_product_page_header_in">
        <div className="container">
          <div className="whateissuprt">
            <h2 className="headhs">
              {" "}
              What does our LS Inventorizerr do for you?
            </h2>
            <p>
              Discover the Power of Our Top-Tier Vendor Managed inventory
              software. Our system empowers your business to efficiently manage
              and track goods throughout your entire supply chain. It&apos;s a
              versatile tool that optimizes every step, from order placement
              with your vendor to final delivery to your customer, seamlessly
              mapping the entire product journey.
            </p>
            <p>
              If you&apos;re in search of an affordable and hassle-free
              automated inventory management system for your business, look no
              further. Our experienced team has successfully delivered numerous
              software solutions tailored to inventory management and tracking
              systems, ensuring a smooth and cost-effective implementation for
              your business.
            </p>
          </div>
        </div>
      </section>

      <section
        className="SubscriptionModel"
        id="subscriptionmodel"
        style={{ background: "#f5f5f5" }}
      >
        <div className="container">
          <div className="job_or_title">
            <h2 className="taxt_tt_job">Subscription Model</h2>
            <br />
            <div className="SubscriptionModelBx">
              <p>
                Experience convenience like never before with our
                subscription-based hassle-free model, available at just USD 245
                per month
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
                    Zero Setup Fees:- There are no additional charges for the
                    setup and installation of the software, making it easier for
                    customers to get started.
                  </span>
                </li>
                <li>
                  <span>
                    Unlimited Item/Product Listings: List as many items/products
                    as you need without any limitations.
                  </span>
                </li>
                <li>
                  <span>
                    Enhanced Communication: Avail yourself of 5 domain-based
                    email accounts to enhance your professional communication.
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
                    issues arise, our dedicated technical team will promptly
                    address them during office hours.
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
      <section id="subscriptionprice" className="SubscriptionpriceSection">
        <div className="container">
          <h2 className="taxt_tt_job">Delivered Solution</h2>
          <div className="SubscriptionModelPrice">
            <div className="SubscriptionModelPriceBx">
              {/* <h4>
                {pageData.currency_symbol}
                {pageData.price}
                <span className="sml_labl"> {pageData.name}</span>
              </h4>
              <strike className="srik_cls">
                {pageData.currency_symbol}
                {pageData.other_price}
                <span className="sml_labl"> {pageData.name}</span>
              </strike> */}
              <div className="SubscriptionModelPriceBtn">
                <div className="btn btn-get" onClick={openModal}>
                  <button>Enquiry Now</button>
                  {
                    <Enquirymodal
                      modalStatus={showModal}
                      toggle={openModal}
                      title="Demo Details For Food Ordering PHP Script"
                    />
                  }
                </div>
              </div>
              <div className="jocpp">
                <div className="portel-btnbx">
                  <div className="line-border NewLineBoader">
                    <Image
                      width={100}
                      height={100}
                      src="/img/jobboard/stars.png"
                      alt=""
                      className="lazy"
                    />
                    <p>70 Reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="SubscriptionModelBx">
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
              Logicspice is the best partner for vendor managed inventory
              software!
            </h2>
            <br />
            <div className="logic-parter">
              <a onClick={toggleInfo} className="ylogicspice">
                <i>
                  <Image
                    width={20}
                    height={100}
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
          <template v-if="whylogicspice">
            <div className="small_bbx_job_new">
              <div className="row">
                <div className="col-sm-4 col-md-4">
                  <div className="thumbnail-new thumbnail-bx1">
                    <div className="caption">
                      <div className="best-partner-img-bx">
                        <Image
                          width={100}
                          height={100}
                          src="/img/jobboard/coding.png"
                          alt="img"
                        />
                      </div>
                      <h3>Optimized Code with proper commenting</h3>
                      <p>
                        Our script code is fully optimized, which results in
                        quick load time and, Code is properly commented for each
                        function and module so anyone can easily update the code
                        in future.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 col-md-4">
                  <div className="thumbnail-new thumbnail-bx2">
                    <div className="caption">
                      <div className="best-partner-img-bx">
                        <Image
                          width={100}
                          height={100}
                          src="/img/jobboard/data-complexity.png"
                          alt="img"
                        />
                      </div>
                      <h3>Strong Framework of PHP & Well managed database</h3>
                      <p>
                        We used popular and strong Framework of PHP with latest
                        versions to keep the code up to date and prevalent for
                        longer duration. Our experienced team managed all the
                        database tables with complete flexibility for extension
                        versions in future.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 col-md-4">
                  <div className="thumbnail-new thumbnail-bx3">
                    <div className="caption">
                      <div className="best-partner-img-bx">
                        <Image
                          width={100}
                          height={100}
                          src="/img/jobboard/coordinate.png"
                          alt="img"
                        />
                      </div>
                      <h3>
                        Quick Response and
                        <br /> Coordination
                      </h3>
                      <p>
                        Customers will always get a quick response from our
                        technical support team, with the best possible solution.
                        Expect our response within 24 hours.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-4 col-md-4">
                  <div className="thumbnail-new thumbnail-bx4">
                    <div className="caption">
                      <div className="best-partner-img-bx">
                        <Image
                          width={100}
                          height={100}
                          src="/img/jobboard/customize.png"
                          alt="img"
                        />
                      </div>
                      <h3>Customization at affordable price</h3>
                      <p>
                        We provide customization of our scripts, to meet
                        customer expectations with best affordable price and
                        minimum turn-around time.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 col-md-4">
                  <div className="thumbnail-new thumbnail-bx5">
                    <div className="caption">
                      <div className="best-partner-img-bx">
                        <Image
                          width={100}
                          height={100}
                          src="/img/jobboard/smartphone-icon.png"
                          alt="img"
                        />
                      </div>
                      <h3>Mobile Friendly Script</h3>
                      <p>
                        Our Script is mobile friendly so, users can easily
                        access all the features through mobile devices that
                        gives improved user experience with portability.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 col-md-4">
                  <div className="thumbnail-new thumbnail-bx6">
                    <div className="caption">
                      <div className="best-partner-img-bx">
                        <Image
                          width={100}
                          height={100}
                          src="/img/jobboard/data.png"
                          alt="img"
                        />
                      </div>
                      <h3>Dedicated Support Team</h3>
                      <p>
                        You will get the dedicated support team while purchasing
                        the script or product. Technical support team will
                        resolve your query quickly in a given time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-4 col-md-4">
                  <div className="thumbnail-new thumbnail-box thumbnail-bx7">
                    <div className="caption">
                      <div className="best-partner-img-bx">
                        <Image
                          width={100}
                          height={100}
                          src="/img/jobboard/web-icon.png"
                          alt="img"
                        />
                      </div>
                      <h3>Global company with agile development approach</h3>
                      <p>
                        Our customers are almost equally spread around the globe
                        and we provide international standard solutions for USA,
                        UK, Europe, Australia, UAE and other countries. We
                        follow a transparent work process and divide all the
                        development processes into small phases. We can use the
                        latest technology and standards that assure the smooth
                        development and execution.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 col-md-4">
                  <div className="thumbnail-new thumbnail-box thumbnail-bx8">
                    <div className="caption">
                      <div className="best-partner-img-bx">
                        <Image
                          width={100}
                          height={100}
                          src="/img/jobboard/encrypted.png"
                          alt="img"
                        />
                      </div>
                      <h3>
                        Customer information and application level security
                      </h3>
                      <p>
                        Security of customer data and application is a major
                        aspect of any of the solutions, Logicspice provides. Our
                        programming is robust and secure that assures password
                        encryption.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 col-md-4">
                  <div className="thumbnail-new thumbnail-box thumbnail-bx9">
                    <div className="caption">
                      <div className="best-partner-img-bx">
                        <Image
                          width={100}
                          height={100}
                          src="/img/jobboard/history-icon.png"
                          alt="img"
                        />
                      </div>
                      <h3>Experienced workforce with 3000+ project history</h3>
                      <p>
                        We are a team of experienced web and mobile app
                        developers, having expertise in handling complex tasks
                        since the past 16+ years. We delivered lots of projects
                        with 100% client satisfaction on different platforms
                        with high levels of standards.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-sm-4 col-md-4">
                  <div className="thumbnail-new productthumbnail-box thumbnail-bx10">
                    <div className="caption">
                      <div className="best-partner-img-bx">
                        <Image
                          width={100}
                          height={100}
                          src="/img/jobboard/seouser-friendly.png"
                          alt="img"
                        />
                      </div>
                      <h3>Seo Friendly Development</h3>
                      <p>
                        Our developed websites are SEO optimized so it can rank
                        better on Google.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-sm-4 col-md-4">
                  <div className="thumbnail-new productthumbnail-box thumbnail-bx11">
                    <div className="caption">
                      <div className="best-partner-img-bx">
                        <Image
                          width={100}
                          height={100}
                          src="/img/jobboard/one-stop-solution.png"
                          alt="img"
                        />
                      </div>
                      <h3>One Stop Solution</h3>
                      <p>
                        We offer complete design & development solutions along
                        with the business strategy, all under one roof.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-sm-4 col-md-4">
                  <div className="thumbnail-new productthumbnail-box thumbnail-bx12">
                    <div className="caption">
                      <div className="best-partner-img-bx">
                        <Image
                          width={100}
                          height={100}
                          src="/img/jobboard/third-party-api.png"
                          alt="img"
                        />
                      </div>
                      <h3>Integration With Third Party Api</h3>
                      <p>
                        We integrate your website with third party API on our
                        end to serve you better.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-sm-4 col-md-4">
                  <div className="thumbnail-new productthumbnail-box thumbnail-bx13">
                    <div className="caption">
                      <div className="best-partner-img-bx">
                        <Image
                          width={100}
                          height={100}
                          src="/img/jobboard/cost-effective.png"
                          alt="img"
                        />
                      </div>
                      <h3>Cost Effective</h3>
                      <p>
                        Powerful technology back-end with basic ready-made
                        modules save time and hence overall project cost for
                        your script gets reduced.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </div>
      </section>

      <section className="whatsupport_section" id="support">
        <div className="container">
          <h4 className="title_main">
            What <span>support</span> you will get?
          </h4>
          <div className="supportsetting">
            <ul>
              <li data-aos="fade">
                <div className="supportsetting_icn">
                  <Image
                    width={40}
                    height={100}
                    src="/img/jobboard/month_half_icon.png"
                    alt="manager_icn"
                  />
                </div>
                <div className="supportsettingtext">3 months Free Support</div>
              </li>
              <li data-aos="fade">
                <div className="supportsetting_icn">
                  <Image
                    width={40}
                    height={100}
                    src="/img/jobboard/free_remove_icon.png"
                    alt="manager_icn"
                  />
                </div>
                <div className="supportsettingtext">Free Brand Removal</div>
              </li>
              <li data-aos="fade">
                <div className="supportsetting_icn">
                  <Image
                    width={40}
                    height={100}
                    src="/img/jobboard/free_instal.png"
                    alt="manager_icn"
                  />
                </div>
                <div className="supportsettingtext">Free Installation</div>
              </li>
              <li data-aos="fade">
                <div className="supportsetting_icn">
                  <Image
                    width={40}
                    height={100}
                    src="/img/jobboard/access_secure_code_icon.png"
                    alt="manager_icn"
                  />
                </div>
                <div className="supportsettingtext">Easily scalable</div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section
        className="ecommerce_review_section MarketplaceSoftwareReviewSection"
        id="reviews"
      >
        <div className="ecommerce_review__img">
          <Image
            width={300}
            height={100}
            src="/img/marketplacesoftware/faq-review-img.png"
            alt="Marketplace Software"
            className=""
          />
        </div>
        <div className="container">
          <h2>Customer Reviews</h2>
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <div className="ecommerce--review">
                <div className="customers_review_sec_row">
                  <div className="customer_review_stext">
                    I&apos;m delighted to share my experience with Logicspice
                    and their parts inventory management software.. The process
                    of purchasing the software and constructing my own website
                    was remarkably smooth, thanks to their free installation and
                    outstanding support. The ease of setup was impressive, and
                    it truly simplified the task. I commend Logicspice for their
                    excellent work, and I look forward to collaborating with
                    them for more customization in the future.
                  </div>
                  <div className="who_ratset">
                    <span
                      className="star_review_main"
                      style={{ paddingRight: "10px", color: "gold" }}
                    >
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </span>
                    Daniel Mugari Nyutu, South Africa
                    <span>
                      <Image
                        width={100}
                        height={100}
                        src="/img/jobboard/south_africa_flag_img.png"
                        alt="mobile app development"
                        style={{ width: "20px", marginLeft: "3px" }}
                      />
                    </span>
                  </div>
                </div>
                <div className="customers_review_sec_row">
                  <div className="customer_review_stext" id="fiveer-clone">
                    I want to express my gratitude for providing the best
                    readymade parts inventory softwares I&apos;ve come across
                    for my business. Your team&apos;s dedication, commitment,
                    and support during the software installation process were
                    outstanding. I especially appreciate your prompt attention
                    to minor issues, demonstrating superb customer service and
                    excellent communication skills. Thanks for a job well done!
                  </div>

                  <div className="who_ratset">
                    <span
                      className="star_review_main"
                      style={{ paddingRight: "10px", color: "gold" }}
                    >
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </span>
                    <span id="client-name">Marcus Elveen, Germany</span>{" "}
                    <span>
                      <Image
                        width={100}
                        height={100}
                        src="/img/jobboard/german.png"
                        alt="mobile app development"
                        style={{ width: "20px", marginLeft: "3px" }}
                      />
                    </span>
                  </div>
                </div>

                <div className="customers_review_sec_row">
                  <div className="customer_review_stext" id="fiveer-clone">
                    I recently purchased inventory management software from
                    Logicspice, and it has exceeded my expectations. It
                    significantly improved the efficiency of my business
                    operations. I highly recommend it to anyone seeking
                    freelance-based models; it&apos;s a fantastic solution.
                  </div>
                  <div className="who_ratset">
                    <span
                      className="star_review_main"
                      style={{ paddingRight: "10px", color: "gold" }}
                    >
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </span>
                    <span id="client-name">Michael Batota, USA</span>{" "}
                    <span>
                      <Image
                        width={100}
                        height={100}
                        src="/img/jobboard/usa_flag_img.png"
                        alt="mobile app development in USA"
                        style={{ width: "20px", marginLeft: "3px" }}
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="ecommerce--review--point ">
                <div className="outof_rating">
                  <div className="review_rating_fjs">
                    <div className="star_num">
                      5 <i className="fa fa-star"></i>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-danger progress-bar-striped"
                        role="progressbar"
                        aria-valuenow="70"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "100%" }}
                      ></div>
                    </div>
                    <div className="people_star_num">65</div>
                  </div>

                  <div className="review_rating_fjs">
                    <div className="star_num">
                      4 <i className="fa fa-star"></i>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-danger progress-bar-striped"
                        role="progressbar"
                        aria-valuenow="70"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "50%" }}
                      ></div>
                    </div>
                    <div className="people_star_num">5</div>
                  </div>
                  <div className="review_rating_fjs">
                    <div className="star_num">
                      0 <i className="fa fa-star"></i>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-danger progress-bar-striped"
                        role="progressbar"
                        aria-valuenow="70"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "0%" }}
                      ></div>
                    </div>
                    <div className="people_star_num">0</div>
                  </div>
                  <div className="review_rating_fjs">
                    <div className="star_num">
                      2 <i className="fa fa-star"></i>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-danger progress-bar-striped"
                        role="progressbar"
                        aria-valuenow="70"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "0%" }}
                      ></div>
                    </div>
                    <div className="people_star_num">0</div>
                  </div>
                  <div className="review_rating_fjs">
                    <div className="star_num">
                      1 <i className="fa fa-star"></i>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-danger progress-bar-striped"
                        role="progressbar"
                        aria-valuenow="70"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "0%" }}
                      ></div>
                    </div>
                    <div className="people_star_num">0</div>
                  </div>
                </div>
                <div className="ecommerce--review--btn ">
                  <a className="btn btn-primary" onClick={openReviewModel}>
                    Rate and Review product
                  </a>

                  <Reviewmodals
                    modalStatus={showReviewModal}
                    toggle={openReviewModel}
                    title="Job Board Software"
                  />
                </div>
                <div className="main-rait">
                  <span>
                    <i className="fa fa-star"></i>{" "}
                    <span>4.7 out of 5 stars</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ecommerce_faq_section" id="faq">
        <div className="container">
          <div className="ecommerce__Quick_FAQ_Script">
            <div className="row">
              <div className="col-md-5" data-aos="fade-up">
                <h4 className="title_main">
                  Frequently <br />
                  Asked Questions
                </h4>
                <div className="FaqImgBx">
                  <Image
                    width={400}
                    height={100}
                    src="/img/marketplacesoftware/FaqLaravelImg.png"
                    alt="laravel web development"
                  />
                </div>
              </div>
              <div className="col-md-7">
                <div className="ecommerce__Quick_FAQ">
                  <MDBAccordion v-model="activeItem" borderless>
                    <MDBAccordionItem
                      headerTitle="Why should I use inventory management software?"
                      collapseId="flush-collapse1"
                    >
                      <p>
                        Our inventory management solution is designed to elevate
                        your business. It not only enhances sales but also saves
                        valuable time, mitigates errors, and reduces the
                        workload on your team. Ultimately, it fosters increased
                        productivity and contributes to heightened customer
                        satisfaction.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle="What is the best way to Manage Inventory?"
                      collapseId="flush-collapse2"
                    >
                      <p>
                        The choice of an inventory management solution should
                        align with your priorities, budget constraints, customer
                        expectations, the scale of your business, and various
                        other variables. Making the right decision requires a
                        thoughtful consideration of these factors.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle="What results can I expect by using the Inventory Management System?"
                      collapseId="flush-collapse3"
                    >
                      <p>
                        By using the Inventory Management System, you can expect
                        improved operational efficiency, greater accuracy in
                        inventory management, cost savings, faster order
                        fulfillment, enhanced planning capabilities, optimized
                        layouts, increased customer satisfaction, reduced
                        workload, and enhanced compliance and reporting
                        capabilities.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle="How do I get the best value for my money with Inventory Management System?"
                      collapseId="flush-collapse4"
                    >
                      <p>
                        To get the best value from an Inventory Management
                        System, consider the costs of transitioning from a
                        cheaper solution or Excel. This is crucial in a rapidly
                        changing business environment. Evaluate factors like
                        initial expenses, data migration, training,
                        customization, integration, and scalability. Calculate
                        potential ROI and stay mindful of industry changes to
                        make an informed decision.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle="Can Admin be able to add multiple items/products?"
                      collapseId="flush-collapse5"
                    >
                      <p>
                        Indeed, the admin has the ability to add numerous items
                        or products.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle="Can an Admin be able to add the same item/product from multiple suppliers?"
                      collapseId="flush-collapse6"
                    >
                      <p>
                        Yes, the admin has the capability to add identical items
                        or products from various suppliers.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle="Can Admin be able to add multiple suppliers?"
                      collapseId="flush-collapse7"
                    >
                      <p>
                        Yes, there are no limitations on the number of suppliers
                        that can be added by the admin.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle="Is Admin able to generate reports at any time?"
                      collapseId="flush-collapse8"
                    >
                      <p>
                        Yes, the admin has the freedom to generate reports
                        whenever they choose.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle="How many days will it take to implement?"
                      collapseId="flush-collapse9"
                    >
                      <p>
                        The whole process will take maximum 1 week time and the
                        rest depends on your response time and customization
                        requirements.
                      </p>
                    </MDBAccordionItem>
                  </MDBAccordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content_area feature_inner" id="features">
        <div className="container">
          <h2 className="title_main">Inventory Management Software Features</h2>

          <div id="joblboardslide">
            <Slider {...settings}>
              <div className="SliderMainBx">
                <div className="feat-slide-img">
                  <Image
                    width={100}
                    height={100}
                    src="/img/inventory-management/admin-dashboard.jpg"
                    alt="admin-dashboard"
                  />
                </div>
                <div className="hands-proved">
                  <div className="titleof_scnew">Admin Dashboard</div>
                </div>
              </div>
              <div className="SliderMainBx">
                <div className="feat-slide-img">
                  <Image
                    width={100}
                    height={100}
                    src="/img/inventory-management/supplier.jpg"
                    alt="Supplier"
                  />
                </div>
                <div className="hands-proved">
                  <div className="titleof_scnew">Supplier</div>
                </div>
              </div>
              <div className="SliderMainBx">
                <div className="feat-slide-img">
                  <Image
                    width={100}
                    height={100}
                    src="/img/inventory-management/customer.jpg"
                    alt="customer"
                  />
                </div>
                <div className="hands-proved">
                  <div className="titleof_scnew">Customer</div>
                </div>
              </div>
              <div className="SliderMainBx">
                <div className="feat-slide-img">
                  <Image
                    width={100}
                    height={100}
                    src="/img/inventory-management/category-list.jpg"
                    alt="category-list"
                  />
                </div>
                <div className="hands-proved">
                  <div className="titleof_scnew">Category List</div>
                </div>
              </div>
              <div className="SliderMainBx">
                <div className="feat-slide-img">
                  <Image
                    width={100}
                    height={100}
                    src="/img/inventory-management/products-management.jpg"
                    alt="Products Management"
                  />
                </div>
                <div className="hands-proved">
                  <div className="titleof_scnew">Products Management</div>
                </div>
              </div>
              <div className="SliderMainBx">
                <div className="feat-slide-img">
                  <Image
                    width={100}
                    height={100}
                    src="/img/jobboard/membership_plan_job_portal_script.png"
                    alt="Membership Plan"
                  />
                </div>
                <div className="hands-proved">
                  <div className="titleof_scnew">Membership Plan</div>
                  <div className="pro-feat-detai">
                    Employers buy membership plan which suits their requirement
                    best.They can renew or update your membership plan at any
                    time.
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>

      <div className="clearfix"></div>
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
                    title="vedanta"
                  />
                }
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="latest_feature_product">
        <div className="container">
          <h2 className="title_main">Other Popular Softwares</h2>
          <div className="other-product-box">
            <div className="row">
              <div className="col-sm-6 col-md-4">
                <div className="thumbnail">
                  <Link
                    title="View Detail"
                    target="_black"
                    href="/softwares/business-directory-system"
                  >
                    <div className="caption">
                      <div className="other-caption-bx">
                        <h3>Business Directory</h3>
                        <div className="other-project-logo">
                          <Image
                            width={100}
                            height={100}
                            src="/img/jobboard/business-logo.png"
                            alt="business-directory-system"
                            className=""
                          />
                        </div>
                        <p>
                          <span>Yellow Pages Clone, Yelp Clone</span>{" "}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="thumbnail">
                  <Link
                    title="View Detail"
                    target="_black"
                    href="/softwares/logistic-marketplace-software"
                  >
                    <div className="caption">
                      <div className="other-caption-bx">
                        <h3>Uship clone</h3>

                        <div className="other-project-logo">
                          <Image
                            width={100}
                            height={100}
                            src="/img/jobboard/logictic_logo_new.png"
                            alt="logistic-marketplace-software"
                            className=""
                          />
                        </div>
                        <p>
                          <span>Similar to Uship Clone, Shiply Clone.</span>
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="thumbnail">
                  <Link
                    title="View Detail"
                    target="_black"
                    href="/softwares/job-board-software'"
                  >
                    <div className="caption">
                      <div className="other-caption-bx">
                        <h3>Job Board Software</h3>

                        <div className="other-project-logo">
                          <Image
                            width={100}
                            height={100}
                            src="/img/jobboard/job-board-logo.png"
                            alt="Job board software"
                            className=""
                          />
                        </div>
                        <p>
                          <span>Best white label job board software. </span>{" "}
                        </p>
                      </div>
                    </div>
                  </Link>
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
            <Image
              width={100}
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

//
