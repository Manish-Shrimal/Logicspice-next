"use client";
import React, { useState } from "react";
import Footer from "@/app/Components/Footer";
import Navbar from "@/app/Components/Navbar";
import "@/app/softwares/softwares.css";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import Image from "next/image";
import Link from "next/link";
import "@fortawesome/fontawesome-free/css/all.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
const page = () => {
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

  const opendiv = (tabId) => {
    setActiveTab(tabId);
  };
  return (
    <>
    <Navbar/>
  <section class="paid-pro job-portal-banner  fiverr-new-banner NewJobSiteDesign JobBoardNewDesign NewCrowdDesigns job-portal-bg BlogScriptBanner">
    <div class="container">
        <div class="row">
            <div class="col-sm-7 col-md-7">
                <h1>Blog Script</h1>
                <div class="both-left-p-sec">
                    <h2>Create And Manage Your Own Blog With Our Readymade Blog Software</h2>                      
                </div>
              <div class="job-valu">
                <div class="portal-price NewPriceDesign">
                <div class="free-img"><img src="/img/blogscript/free-img.png" alt="" title="Website"/></div>
                </div>


                <div class="job-valu-btn">
                  <span>Fill your basic details and</span>

                  <Link
                    href="#"
                    className="btn btn-get"
                    id="buy_now_1"
                    onClick={() => openDemoModel()}
                  >
                    Live Demo
                  </Link>
                  <Link
                    href="#"
                    className="btn fiverr-buys NewGreenBtnJob"
                    id="buy_now_1"
                    onClick={() => openEnquiryModal()}
                  >
                    Download
                  </Link>
                </div>
                <div class="SubscriptionPrice">
                  <div class="line-border NewLineBoader">
                    <img
                      alt="crowd_funding_script"
                      src="/img/jobboard/stars.png"
                    />
                    <p>18 Reviews</p>
                  </div>
                </div>
              </div>

              
              <div class="jocpp">
                <ul class="job-pr-icon">
                  <li>
                    <i class="fa-solid fa-earth-americas"></i>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-sm-5 col-md-5">
              <div class="por-mobile-new">
                <img
                  alt="blog-script-mobile"
                  src="/img/softwares-banner-img/blog-banner-img.png"
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
                Blog Script
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      
      <section class="job-section-top-new JobBoardSectionNew">
    <div class="container">
        <p>We provide the best Blog Script which allows you to setup your own blog on the Web by providing an interface to manage your posts in an easy way. Our web blog software script installation is one step simple process to create a new blog or add the blog module to your existing website. </p>
    </div>
</section>
<section className="client-say WhatsaapCliets" style={{ backgroundColor: "#fff" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="service-market-ttd">
                <ul>
                  <li>WYSIWYG (html) editor</li>
                  <li>Responsive</li>
                  <li>Multi language Support</li>
                  <li>Customize Blog Comment</li>
                  <li>Email Notification</li>
                  <li>Blog Categories</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="job_portal_area">
        <div className="container">
          <div className="job_or_title">
            <h2 className="taxt_tt_job">Blog Script Features</h2>
          </div>
          <div className="tatxt_txt_job">
            Using our Blog Script, users or bloggers will be able to create
            their own blog sites within minutes. This script is fully responsive
            and is compatible with any screen with web, tablet and mobile view.
          </div>
          <div className="tab_bbx_job">
            <div className="tab_bbx_top_job tab_bbx_job_classified">
            <ul className="">
                <li
                  id="tab1_li"
                  className={`jobseeker_app_job ddlj ${sellerTab ? "active" : ""}`}
                  onClick={() => handleSellerTab()}
                >
                  <a>User</a>
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
              <div className="costomer_tab rj " id="tab2">
                <div className="row">
                  <div className="col-lg-4 col-md-3">
                    <div className="costomer_tab_right">
                      <img
                        src="/img/blogscript/blogscript-user.png"
                        alt="User"
                      />
                    </div>
                  </div>
                  <div className="col-lg-8 col-md-9">
                    <div className="costomer_tab_left costomer_tab_leftright">
                      <ul>
                        <li>
                          <i>
                            <img
                              alt="img"
                              src="/img/jobboard/tickets_list.png"
                            />
                          </i>
                          <span>
                            Blog Listing
                            <div className="product-idea">
                              <p>
                                Blog listing are all different in some way and
                                all bring something unique to their readers &
                                subscribers.
                              </p>
                            </div>
                          </span>
                        </li>
                        <li>
                          <i>
                            <img
                              alt="img"
                              src="/img/jobboard/recent-blog.png"
                            />
                          </i>
                          <span>
                            Recent Blogs
                            <div className="product-idea">
                              <p>
                                Displaying recent posts helps visitors to find
                                best blog easily.
                              </p>
                            </div>
                          </span>
                        </li>
                        <li>
                          <i>
                            <img
                              alt="img"
                              src="/img/jobboard/equipment_search.png"
                            />
                          </i>
                          <span>
                            Search & Filter Blogs
                            <div className="product-idea">
                              <p>
                                Visitors can search blogs by entering a subject,
                                tags and category.
                              </p>
                            </div>
                          </span>
                        </li>
                        <li>
                          <i>
                            <img
                              alt="img"
                              src="/img/jobboard/social_login.png"
                            />
                          </i>
                          <span>
                            Category Listing Blogs
                            <div className="product-idea">
                              <p>
                                Website blog visitors can search blog from
                                category listing.
                              </p>
                            </div>
                          </span>
                        </li>
                        <li>
                          <i>
                            <img alt="img" src="/img/jobboard/manage_cat.png" />
                          </i>
                          <span>
                            Blog Subscribers
                            <div className="product-idea">
                              <p>
                                Blog Subscribing is one of the most common ways
                                for readers to subscribe to blogs.
                              </p>
                            </div>
                          </span>
                        </li>
                        <li>
                          <i>
                            <img
                              alt="img"
                              src="/img/jobboard/manage_blog.png"
                            />
                          </i>
                          <span>
                            Blog Comments
                            <div className="product-idea">
                              <p>
                                User can submit comments regarding any blog with
                                user information.
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
              <div className="costomer_tab rj" id="tab3">
                <div className="row">
                  <div className="col-lg-4 col-md-3 ">
                    <div className="costomer_tab_right costomer_tab_rightleft2">
                      <img
                        src="/img/blogscript/blogscrit_admin_mac.png"
                        alt="Admin Panel"
                      />
                    </div>
                  </div>
                  <div className="col-lg-8 col-md-9">
                    <div className="costomer_tab_left costomer_tab_leftright2">
                      <ul>
                        <li>
                          <i>
                            <img
                              alt="img"
                              src="/img/jobboard/secure_login.png"
                            />
                          </i>
                          <span>
                            Secure Login
                            <div className="product-idea">
                              <p>Admin can login securely in Admin Panel.</p>
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
                            Manage Blog
                            <div className="product-idea">
                              <p>
                                Admin can view a list of all blogs and can
                                manage (add/edit/delete) all blogs.
                              </p>
                            </div>
                          </span>
                        </li>
                        <li>
                          <i>
                            <img
                              alt="img"
                              src="/img/jobboard/equipment_search.png"
                            />
                          </i>
                          <span>
                            Search & Filter Feature
                            <div className="product-idea">
                              <p>
                                Admin can search blogs by entering a subject or
                                created date. Admin can apply filters using a
                                date.
                              </p>
                            </div>
                          </span>
                        </li>
                        <li>
                          <i>
                            <img
                              alt="img"
                              src="/img/jobboard/configuration.png"
                            />
                          </i>
                          <span>
                            Manage Configuration
                            <div className="product-idea">
                              <p>
                                Admin can change a username, password, email,
                                set contact address & can do site settings.
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
                            Manage Category
                            <div className="product-idea">
                              <p>
                                Admin can view and manage (add/edit/delete) all
                                categories.
                              </p>
                            </div>
                          </span>
                        </li>
                        <li>
                          <i>
                            <img alt="img" src="/img/jobboard/manage_cat.png" />
                          </i>
                          <span>
                            Manage Subscribers
                            <div className="product-idea">
                              <p>
                                Admin can view and manage (delete) all blog
                                subscribers.
                              </p>
                            </div>
                          </span>
                        </li>
                        <li>
                          <i>
                            <img
                              alt="img"
                              src="/img/jobboard/manage_bookings.png"
                            />
                          </i>
                          <span>
                            View and Manage Comments
                            <div className="product-idea">
                              <p>
                                Admin can view and manage (edit/delete) all blog
                                comments. Admin can search blog comments by
                                entering a comment keyword.
                              </p>
                            </div>
                          </span>
                        </li>
                        <li>
                          <i>
                            <img
                              alt="img"
                              src="/img/jobboard/active_deactive.png"
                            />
                          </i>
                          <span>
                            Activate/Deactivate Categories
                            <div className="product-idea">
                              <p>
                                Admin can activate & deactivate the categories.
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

      <section className="job_product_page_header_in">
        <div className="container">
          <div className="whateissuprt">
            <h2 className="headhs">
              What does our <span>Blog Script</span> offers you?
            </h2>
            <p align="justify">
              Nowadays blogging becomes more tending. Having a own blog is most
              important and necessary to sharing the knowledge or other
              information to online readers.
            </p>
            <p align="justify">
              Logicspice offers one of the top blog script, help you to have
              extensive blog section on your website.
            </p>
            <p align="justify">
              It has a robust admin panel to manage blogs post, authors and
              comments through single dashboard. The script provides the user
              friendly dashboard with multi language support. You can also
              create many category, blog posts, pages, meta tags and social
              sharing. The blog can be monetized with adsense and private
              advertisement.
            </p>
            <p align="justify">
              Our PHP blog script has WYSIWYG (html) editor can support to add
              text, flash movies, vimeo and youtube videos. This blog software
              has email notification alerts which notify you when new comments
              appear on post and new use can subscribe to the blog.{" "}
            </p>
            <p align="justify">
              Anyone can deploy this ready to use blog script with any web app
              and can also customize according to their need.
            </p>
            <p align="justify">
              Free licence also function the same way, however it has some
              limitations to update the code.
            </p>
            <p align="justify">
              Those bloggers who want to develop their own blogging website,
              then they can have a live demo of our readymade blog script.
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
            <div class="logic-parter">
              <a href="javascript:void(0);" class="ylogicspice">
                <i>
                  <img
                    src="/img/jobboard/why-logic-icon.png"
                    alt=""
                    class=""
                  />
                </i>
                <span>Why Logicspice</span>
              </a>
            </div>
          </div>
          <template v-if="whylogicspice">
            <div className="small_bbx_job_new">
              <div className="row">
                <div className="col-sm-4 col-md-4">
                  <div className="thumbnail-new thumbnail-bx1">
                    <div className="caption">
                      <div className="best-partner-img-bx">
                        <img src="/img/jobboard/coding.png" alt="img" />
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
                        <img
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
                        <img src="/img/jobboard/coordinate.png" alt="img" />
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
                        <img src="/img/jobboard/customize.png" alt="img" />
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
                        <img
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
                        <img src="/img/jobboard/data.png" alt="img" />
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
                        <img src="/img/jobboard/web-icon.png" alt="img" />
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
                        <img src="/img/jobboard/encrypted.png" alt="img" />
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
                        <img src="/img/jobboard/history-icon.png" alt="img" />
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
                        <img
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
                        <img
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
                        <img
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
                        <img src="/img/jobboard/cost-effective.png" alt="img" />
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

      <section className="used_technology_section" id="technologies">
        <div className="container">
          <h4 className="title_main">
            <span>Used Technologies</span> and Server Requirements
          </h4>
          <div className="row used_technology_section_dataa">
            <div className="col-sm-6">
              <ul>
                <li data-aos="fade-up">
                  <div className="icntechimg">
                    <img
                      src="/img/jobboard/LaravelLogo.png"
                      alt="Laravel Development"
                      className="lazy"
                    />
                  </div>
                  <div className="icntechimg_nm">Laravel</div>
                </li>
                <li data-aos="fade-up">
                  <div className="icntechimg">
                    <img src="/img/jobboard/html-5.png" alt="HTML5" />
                  </div>
                  <div className="icntechimg_nm">HTML5</div>
                </li>
                <li data-aos="fade-up">
                  <div className="icntechimg">
                    <img src="/img/jobboard/tech_mysql_icon.png" alt="MySQL" />
                  </div>
                  <div className="icntechimg_nm">MySQL</div>
                </li>
                <li data-aos="fade-up">
                  <div className="icntechimg">
                    <img
                      src="/img/jobboard/tech_apache_icon.png"
                      alt="Apache"
                    />
                  </div>
                  <div className="icntechimg_nm">Apache</div>
                </li>
              </ul>
            </div>
            <div className="col-sm-6">
              <ul className="list_detail">
                <li className="same aos-init aos-animate" data-aos="fade-up">
                  <b>Browsers - </b> IE 9+ , Firefox 32.6+, Chrome 20.0+, Opera
                  30.0+, Safari 5+
                </li>
                <li className="same aos-init aos-animate" data-aos="fade-up">
                  <b>Framework - </b> Laravel 5.5.41
                </li>
                <li className="same aos-init aos-animate" data-aos="fade-up">
                  <b>Language - </b> PHP 7 Supported, AJAX, jQuery
                </li>
                <li className="other aos-init aos-animate" data-aos="fade-up">
                  <b>Design - </b> HTML 5, CSS 3, Bootstrap 3.3.7, JavaScript
                </li>
                <li className="other aos-init" data-aos="fade-up">
                  <b>Database - </b> MySQL 5.5+{" "}
                </li>
                <li className="other aos-init" data-aos="fade-up">
                  <b>Server - </b> Apache 2.4+
                </li>
              </ul>
            </div>
          </div>
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
                  <img
                    src="/img/jobboard/month_half_icon.png"
                    alt="manager_icn"
                  />
                </div>
                <div className="supportsettingtext">Free Support</div>
              </li>
              <li data-aos="fade">
                <div className="supportsetting_icn">
                  <img
                    src="/img/jobboard/free_remove_icon.png"
                    alt="manager_icn"
                  />
                </div>
                <div className="supportsettingtext">Free Brand Removal</div>
              </li>
              <li data-aos="fade">
                <div className="supportsetting_icn">
                  <img src="/img/jobboard/free_instal.png" alt="manager_icn" />
                </div>
                <div className="supportsettingtext">Free Installation</div>
              </li>
              <li data-aos="fade">
                <div className="supportsetting_icn">
                  <img
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
      <section className="su_rev_section" id="reviews">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h4 className="title_main">Customer Reviews </h4>
              <div className="row">
                <div className="col-md-5">
                  <div className="outof_rating">
                    <div className="main-rait">
                      <span>
                        <i className="fa fa-star"></i>{" "}
                        <span>4.7 out of 5 stars</span>
                      </span>
                    </div>
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
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                      <div className="people_star_num">16</div>
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
                          style={{ width: "10%" }}
                        ></div>
                      </div>
                      <div className="people_star_num">2</div>
                    </div>

                    <div className="review_rating_fjs">
                      <div className="star_num">
                        3 <i className="fa fa-star"></i>
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
                </div>
                <div className="col-md-7">
                  <Link
                    href="#"
                    className="btn btn-primary"
                    onClick={() => openReviewModel()}
                  >
                    Rate and Review product{" "}
                  </Link>
                </div>
                <div className="col-md-12">
                  <div className="customers_review_sec_row">
                    {/* <!--                    <div className="customers_review_sec_row_ra"><div className="starget">5 <i className="fa fa-star" aria-hidden="true"></i></div><span>Build an Online Store</span></div>--> */}

                    <div className="customer_review_stext">
                      "Professional, Always put in extra effort, Good Knowledge.
                      One of the best Developer. Will continue to work with them
                      with upcoming project."
                    </div>
                    <div
                      className="who_ratset"
                      style={{ paddingRight: "17px" }}
                    >
                      <span
                        className="star_review_main"
                        style={{ paddingRight: "10px", color: "gold" }}
                      >
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star-half" aria-hidden="true"></i>
                      </span>
                      Adam Wilson, USA{" "}
                      <span>
                        <img
                          src="/img/jobboard/usa_flag_img.png"
                          alt="mobile app development in USA"
                        />
                      </span>
                    </div>
                  </div>
                  <div className="customers_review_sec_row">
                    {/* <!--                    <div className="customers_review_sec_row_ra"><div className="starget">5 <i className="fa fa-star" aria-hidden="true"></i></div><span>Build an Online Store</span></div>--> */}
                    <div className="customer_review_stext" id="fiveer-clone">
                      "website interface design and back-end business
                      implementation using php."
                    </div>

                    <div
                      className="who_ratset"
                      style={{  paddingRight: "17px" }}
                    >
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
                      <span id="client-name">Jason Dinsmore, Germany</span>{" "}
                      <span>
                        <img
                          src="/img/jobboard/german.png"
                          alt="mobile app development in german"
                        />
                      </span>
                    </div>
                  </div>
                  <div className="customers_review_sec_row">
                    {/* <!--                    <div className="customers_review_sec_row_ra"><div className="starget">5 <i className="fa fa-star" aria-hidden="true"></i></div><span>Build an Online Store</span></div>--> */}
                    <div className="customer_review_stext">
                      "The word "perfect" is not enough to describe the
                      capability of Logicspice. They are just wonderful and
                      willing to extend the effort until the customer satisfied,
                      definitely will re-hire them."
                    </div>
                    <div
                      className="who_ratset"
                      style={{ paddingRight: "17px" }}
                    >
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
                      Emma Davis, AUS{" "}
                      <span>
                        <img
                          src="/img/jobboard/australia_flag_img.png"
                          alt="mobile app development in USA"
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 Quick_FAQ">
              <h4 className="title_main">FAQ's</h4>
              <div className="MainFaqBx">
                <MDBAccordion v-model="activeItem" borderless>
                  <MDBAccordionItem
                    headerTitle="Are your given source code modifiable?"
                    collapseId="flush-collapse1"
                  >
                    <p>
                      Yes, our scripts are flexible. Clients can customize
                      according to their requirement.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Do logicspice give technical support?"
                    collapseId="flush-collapse2"
                  >
                    <p>
                      Yes, we believe in long-term relationships and provide
                      technical support to the client at affordable cost.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Are you willing to advise us with ideas?"
                    collapseId="flush-collapse3"
                  >
                    <p>
                      Sure, we fulfill the requirement of client. Your
                      suggestion or ideas are always welcomed which can make
                      your business more interactive.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Will you deliver the exact product as shown in the demo?"
                    collapseId="flush-collapse4"
                  >
                    <p>
                      Yes, We deliver the exact product. We don't compromise
                      with quality at all.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Can I use your script without any programming skills?"
                    collapseId="flush-collapse5"
                  >
                    <p>
                      Yes, You can directly install our given script and can
                      manage everything in admin panel which is very user
                      friendly.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Can I remove your company proprietary notices?"
                    collapseId="flush-collapse6"
                  >
                    <p>
                      With an extra charge for that, you are allowed to modify
                      the branding there. You can remove our company information
                      and put yours. But you cannot put “copyright by“ because
                      only Logicspice own the copyrights for our softwares.
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
          <h2 class="title_main">Blog Script Features</h2>
          <div id="joblboardslide">
            <Slider {...settings}>
              <div class="SliderMainBx">
              <div class="feat-slide-img"><img
                  src="/img/blogscript/blog-banners1.jpg"
                  alt="Post Classified"
                /></div>
                    <div class="hands-proved">
                    <div className="titleof_scnew">Blog Script List</div>
                     </div>
              </div>
         

              <div class="SliderMainBx">
              <div class="feat-slide-img"> <img
                  src="/img/blogscript/blog-banners2.jpg"
                  alt="Classifieds Management"
                /></div>
                    <div class="hands-proved">
                    <div className="titleof_scnew">Blog Script List</div>  </div>
              </div>

            </Slider>
          </div>
        </div>
      </section>



      <Footer /> 
    </>
  );
};

export default page;