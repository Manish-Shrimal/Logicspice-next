"use client";
import Image from "next/image";
import React, { useState } from "react";
import "@/app/company/company.css";
import NavBar from "@/app/Components/Navbar";
import Footer from "@/app/Components/Footer";
import Contactusmodel from "@/app/Components/Contactusmodel";
import "@fortawesome/fontawesome-free/css/all.css";

const page = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  return (
    <>
      <NavBar />
      <section class="CompanyResourcesHeader">
        <div class="container">
          <h1>Our Company</h1>
          <p>
            LogicSpice is a team of experienced and enthusiastic experts
            providing software development services for mobile app and web
            development.
          </p>
        </div>
        <div class="OurCompanyBanner">
          <Image
            width={1600}
            height={100}
            src="/img/ourteam/companybannerimg.png"
            alt="Comapny"
          />
        </div>
      </section>
      <section class="WhoWeAreSection">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-sm-8 col-md-9">
              <div class="WhoWeAreBx">
                <h2>Who We Are</h2>
                <p>
                  LogicSpice specializes in providing efficient software
                  development services. Our services include mobile app and web
                  development, with a focus on Android and iPhone app
                  development. We do lots of complex web application
                  programming. Our seasoned and efficient team is committed to
                  delivering robust, user-friendly, and efficient applications
                  designed to optimize day-to-day business operations.
                  Established in 2006 and headquartered in Jaipur, India,
                  LogicSpice is your trusted partner for turning digital ideas
                  into reality.
                </p>
                <p>
                  We provide a comprehensive range of web and app
                  technology-related services. Our offerings encompass website
                  design, digital marketing, custom web application development,
                  e-commerce solutions, software testing, software maintenance,
                  project management and consulting. Our mission is to empower
                  our customers with cutting-edge technology, equipping them to
                  thrive in the dynamic and ever-evolving e-Business landscape.
                </p>
                <p>
                  Currently, our customer base spans across INDIA, EUROPE, USA,
                  UK, AUSTRALIA, and the Middle East. Our vision is to drive
                  transformative changes within the information
                  technology-driven economy. We take pride in our reputation and
                  uphold a customer-centric approach, emphasizing flexibility
                  and friendliness because we value long-term relationships with
                  our clients. We believe in giving our clients full authority,
                  allowing them direct control over their projects, and
                  providing unwavering support every step of the way. Our area
                  of expertise is centered around the provision of in-depth
                  custom and ready-made solutions, meticulously designed to meet
                  your unique requirements.
                </p>
                <p>
                  In addition to this, we excel in website promotion strategies
                  and top-tier SEO services, ensuring that our customers get
                  best ROI (Return on Investment) and we also ensure that your
                  online presence reaches its full potential.
                </p>
                <p>
                  We understand that the success of your business hinges on
                  generating substantial profits. Therefore, we tailor our
                  solutions to help you achieve your objectives effectively.
                  Additionally, we continuously identify fresh opportunities to
                  support your growth, all while minimizing the associated
                  costs.
                </p>
                <p>
                  At LogicSpice, our unwavering commitment is to attain the
                  highest levels of customer satisfaction through the provision
                  of quality, cost-effective, and punctual solutions from our
                  software development. Our relentless pursuit of excellence
                  encompasses not only technical proficiency but also financial
                  acumen, business prowess, and unwavering moral integrity. Our
                  goal is to consistently deliver exceptional value to our
                  clients.
                </p>
              </div>
            </div>
            <div class="col-xs-12 col-sm-4 col-md-3">
              <div class="sidebar_right">
                <div
                  id="tertiary"
                  class="sidebar-container"
                  role="complementary"
                >
                  <div class="sidebar-inner">
                    <div class="widget-area">
                      {/* <aside id="text-3" class="widget widget_text">
                                    <h3 class="widget-title">Like us on Facebook</h3>
                        <div class="fb-page fb_iframe_widget" data-href="https://www.facebook.com/LogicSpice.company" data-tabs="timeline" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true" fb-xfbml-state="rendered" fb-iframe-plugin-query="adapt_container_width=true&amp;app_id=1945351702357034&amp;container_width=243&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2FLogicSpice.company&amp;locale=en_GB&amp;sdk=joey&amp;show_facepile=true&amp;small_header=false&amp;tabs=timeline"><span style="vertical-align: bottom; width: 243px; height: 500px;"><iframe name="f140c73270ce5ca" allowtransparency="true" allowfullscreen="true" scrolling="no" title="fb:page Facebook Social Plugin" style="border: medium none; visibility: visible; width: 243px; height: 500px;" src="https://www.facebook.com/v2.6/plugins/page.php?adapt_container_width=true&amp;app_id=1945351702357034&amp;channel=http%3A%2F%2Fstaticxx.facebook.com%2Fconnect%2Fxd_arbiter%2Fr%2FXBwzv5Yrm_1.js%3Fversion%3D42%23cb%3Df215369a84a8838%26domain%3D192.168.0.251%26origin%3Dhttp%253A%252F%252F192.168.0.251%252Ff400207f85196e%26relation%3Dparent.parent&amp;container_width=243&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2FLogicSpice.company&amp;locale=en_GB&amp;sdk=joey&amp;show_facepile=true&amp;small_header=false&amp;tabs=timeline" class="" width="1000px" height="1000px" frameborder="0"></iframe></span></div>
                        <div id="fb-root" class=" fb_reset"><div style="position: absolute; top: -10000px; height: 0px; width: 0px;"><div><iframe name="fb_xdm_frame_http" allowtransparency="true" allowfullscreen="true" scrolling="no" id="fb_xdm_frame_http" aria-hidden="true" title="Facebook Cross Domain Communication Frame" tabindex="-1" style="border: medium none;" src="http://staticxx.facebook.com/connect/xd_arbiter/r/XBwzv5Yrm_1.js?version=42#channel=f400207f85196e&amp;origin=http%3A%2F%2F192.168.0.251" frameborder="0"></iframe><iframe name="fb_xdm_frame_https" allowtransparency="true" allowfullscreen="true" scrolling="no" id="fb_xdm_frame_https" aria-hidden="true" title="Facebook Cross Domain Communication Frame" tabindex="-1" style="border: medium none;" src="https://staticxx.facebook.com/connect/xd_arbiter/r/XBwzv5Yrm_1.js?version=42#channel=f400207f85196e&amp;origin=http%3A%2F%2F192.168.0.251" frameborder="0"></iframe></div></div><div style="position: absolute; top: -10000px; height: 0px; width: 0px;"><div></div></div></div>
                        <script>(function(d, s, id) {
                          var js, fjs = d.getElementsByTagName(s)[0];
                          if (d.getElementById(id)) return;
                          js = d.createElement(s); js.id = id;
                          js.src = "//connect.facebook.net/en_GB/sdk.js#xfbml=1&amp;version=v2.6&amp;appId=1945351702357034";
                          fjs.parentNode.insertBefore(js, fjs);
                        }(document, 'script', 'facebook-jssdk'));</script>
                        </aside>	 */}
                    </div>{" "}
                    {/*<!-- .widget-area --> */}
                  </div>{" "}
                  {/*<!-- .sidebar-inner --> */}
                  {/*  #tertiary */}{" "}
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12">
              <div class="WhoWeAreFutcher">
                <div class="row">
                  <div class="col-xs-12 col-sm-6 col-md-6">
                    <div class="WhoWeAreTxt">
                      <i>
                        <Image
                          width={29}
                          height={100}
                          src="/img/ourteam/arrow-icon.png"
                          alt="icon"
                        />
                      </i>
                      <span>
                        We are your comprehensive destination for project
                        consultation services.
                      </span>
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-6 col-md-6">
                    <div class="WhoWeAreTxt">
                      <i>
                        <Image
                          width={29}
                          height={100}
                          src="/img/ourteam/arrow-icon.png"
                          alt="icon"
                        />
                      </i>
                      <span>
                        We offer a complimentary initial analysis of your
                        requirements and provide a free project quote.
                      </span>
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-6 col-md-6">
                    <div class="WhoWeAreTxt MinHeights">
                      <i>
                        <Image
                          width={29}
                          height={100}
                          src="/img/ourteam/arrow-icon.png"
                          alt="icon"
                        />
                      </i>
                      <span>
                        We specialize in creating comprehensive and detailed
                        project reports.
                      </span>
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-6 col-md-6">
                    <div class="WhoWeAreTxt MinHeights">
                      <i>
                        <Image
                          width={29}
                          height={100}
                          src="/img/ourteam/arrow-icon.png"
                          alt="icon"
                        />
                      </i>
                      <span>
                        We excel in crafting precise project scopes and
                        specifications, often in the form of Request for
                        Proposals (RFPs).
                      </span>
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-6 col-md-6">
                    <div class="WhoWeAreTxt">
                      <i>
                        <Image
                          width={29}
                          height={100}
                          src="/img/ourteam/arrow-icon.png"
                          alt="icon"
                        />
                      </i>
                      <span>
                        We assign specialized experts to handle the relevant
                        project modules with precision and expertise.
                      </span>
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-6 col-md-6">
                    <div class="WhoWeAreTxt">
                      <i>
                        <Image
                          width={29}
                          height={100}
                          src="/img/ourteam/arrow-icon.png"
                          alt="icon"
                        />
                      </i>
                      <span>
                        We maintain a dedicated quality assurance team to ensure
                        the highest standards of quality in our projects.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="OurGallerySection">
        <h2>Gallery</h2>
        <div id="galleryslider1" class="owl-carousel OurGallery slide">
          <div class="OurGalleryImg">
            <Image
              width={100}
              height={100}
              src="/img/ourteam/gallery-img1.png"
              alt="icon"
            />
          </div>
          <div class="OurGalleryImg">
            <Image
              width={100}
              height={100}
              src="/img/ourteam/gallery-img2.png"
              alt="icon"
            />
          </div>
          <div class="OurGalleryImg">
            <Image
              width={100}
              height={100}
              src="/img/ourteam/gallery-img3.png"
              alt="icon"
            />
          </div>
          <div class="OurGalleryImg">
            <Image
              width={100}
              height={100}
              src="/img/ourteam/gallery-img4.png"
              alt="icon"
            />
          </div>
          <div class="OurGalleryImg">
            <Image
              width={100}
              height={100}
              src="/img/ourteam/gallery-img5.png"
              alt="icon"
            />
          </div>
          <div class="OurGalleryImg">
            <Image
              width={100}
              height={100}
              src="/img/ourteam/gallery-img6.png"
              alt="icon"
            />
          </div>
        </div>
        <div id="galleryslider2" class="owl-carousel OurGallery slide">
          <div class="OurGalleryImg">
            <Image
              width={100}
              height={100}
              src="/img/ourteam/gallery-img7.png"
              alt="icon"
            />
          </div>
          <div class="OurGalleryImg">
            <Image
              width={100}
              height={100}
              src="/img/ourteam/gallery-img8.png"
              alt="icon"
            />
          </div>
          <div class="OurGalleryImg">
            <Image
              width={100}
              height={100}
              src="/img/ourteam/gallery-img9.png"
              alt="icon"
            />
          </div>
          <div class="OurGalleryImg">
            <Image
              width={100}
              height={100}
              src="/img/ourteam/gallery-img10.png"
              alt="icon"
            />
          </div>
          <div class="OurGalleryImg">
            <Image
              width={100}
              height={100}
              src="/img/ourteam/gallery-img11.png"
              alt="icon"
            />
          </div>
          <div class="OurGalleryImg">
            <Image
              width={100}
              height={100}
              src="/img/ourteam/gallery-img12.png"
              alt="icon"
            />
          </div>
        </div>
      </section>
      <section class="OurOfficeSection">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-6 stickybx">
              <section class="OurOfficeLeft stickybx">
                <div class="OurOfficeBx">
                  <h2>Our Office</h2>
                  <p>
                    LogicSpice specializes in delivering expert software
                    development services encompassing mobile app and web
                    development. Our proficiency extends to Android and iPhone
                    app development, as well as intricate web application
                    programming. With a highly experienced and efficient team,
                    we are committed to crafting robust, user-friendly, and
                    efficient applications tailored to streamline day-to-day
                    business operations. Your digital aspirations are in capable
                    hands with LogicSpice.
                  </p>
                  <div class="OurOfficeImg">
                    <Image
                      width={544}
                      height={100}
                      src="/img/ourteam/our-office-img.png"
                      alt="Our Office"
                    />
                  </div>
                </div>
              </section>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-6">
              <div class="OurOfficeTxt ">
                <ul>
                  <li>
                    <i>
                      <Image
                        width={29}
                        height={100}
                        src="/img/ourteam/arrow-icon.png"
                        alt="icon"
                      />
                    </i>
                    <span>
                      Since 2006, LogicSpice excels in expert software
                      development.
                    </span>
                  </li>
                  <li>
                    <i>
                      <Image
                        width={29}
                        height={100}
                        src="/img/ourteam/arrow-icon.png"
                        alt="icon"
                      />
                    </i>
                    <span>
                      40+ experienced full-time professionals on board.
                    </span>
                  </li>
                  <li>
                    <i>
                      <Image
                        width={29}
                        height={100}
                        src="/img/ourteam/arrow-icon.png"
                        alt="icon"
                      />
                    </i>
                    <span>
                      We&apos;ve served 1400+ satisfied clients worldwide.
                    </span>
                  </li>
                  <li>
                    <i>
                      <Image
                        width={29}
                        height={100}
                        src="/img/ourteam/arrow-icon.png"
                        alt="icon"
                      />
                    </i>
                    <span>We&apos;ve catered to clients in 40+ countries.</span>
                  </li>
                  <li>
                    <i>
                      <Image
                        width={29}
                        height={100}
                        src="/img/ourteam/arrow-icon.png"
                        alt="icon"
                      />
                    </i>
                    <span>
                      Our primary focus includes Australia, US, Europe, and the
                      UK.
                    </span>
                  </li>
                  <li>
                    <i>
                      <Image
                        width={29}
                        height={100}
                        src="/img/ourteam/arrow-icon.png"
                        alt="icon"
                      />
                    </i>
                    <span>We excel in managing large, complex projects.</span>
                  </li>
                  <li>
                    <i>
                      <Image
                        width={29}
                        height={100}
                        src="/img/ourteam/arrow-icon.png"
                        alt="icon"
                      />
                    </i>
                    <span>
                      Leading provider of both readymade and custom solutions.
                    </span>
                  </li>
                  <li>
                    <i>
                      <Image
                        width={29}
                        height={100}
                        src="/img/ourteam/arrow-icon.png"
                        alt="icon"
                      />
                    </i>
                    <span>Remote and onsite support without limitations.</span>
                  </li>
                  <li>
                    <i>
                      <Image
                        width={29}
                        height={100}
                        src="/img/ourteam/arrow-icon.png"
                        alt="icon"
                      />
                    </i>
                    <span>Full-fledged IT Management Services</span>
                  </li>
                  <li>
                    <i>
                      <Image
                        width={29}
                        height={100}
                        src="/img/ourteam/arrow-icon.png"
                        alt="icon"
                      />
                    </i>
                    <span>
                      We hold a position in the top 10 on freelancer.com
                    </span>
                  </li>
                  <li>
                    <i>
                      <Image
                        width={29}
                        height={100}
                        src="/img/ourteam/arrow-icon.png"
                        alt="icon"
                      />
                    </i>
                    <span>Highly Qualified and Skilled IT Professionals</span>
                  </li>
                </ul>
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
              height={50}
              width={50}
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