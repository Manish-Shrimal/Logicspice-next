import Layout from "./layout";
import NavBar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Link from "next/link";
import "@fortawesome/fontawesome-free/css/all.css";
import Slidersimple from "./Components/Slidersimple";
import Looksilder from "./Components/Looksilder";
import Blogslider from "./Components/Blogslider";
import Workingwith from "./Components/Workingwith";
import Certificationtabs from "./Components/Certificationtabs";
import Customizeweb from "./Components/Customizeweb";
import Contactusmodel from "@/app/Components/Contactusmodel";
import "./resposive.css";
import Image from "next/image";
import Servercomponents from "./Components/Servercomponents";

// import React, { useState } from "react";

const Page = () => {
  return (
    <>
      <NavBar />
      <div className="home-slider">
      <div className="container">
        <Slidersimple />
      </div>
      </div>

      <section className="ServicesNewSection">
        <div className="container">
          <div className="positivity">
            <div className="positivitymain">
              <div
                className="ServiceTextAnimationWeb ServiceTextApp hidediv"
                id="mobilediv"
                style={{ display: "none", opacity: "0" }}
              >
                <span className="positivity__alone">
                  Mobile app development
                </span>
                <div className="positivity__words">
                  <span className="change color-blue">
                    Your vision, Our expertise, Live results
                    <i>
                      <Image
                        width={600}
                        height={100 / (100 / 100)}
                        src="/img/home/your-vision.png"
                        alt="icon"
                      />
                    </i>
                  </span>
                  <span className="change color-red">
                    Turning vision into apps
                    <i>
                      <Image
                        width={600}
                        height={100 / (100 / 100)}
                        src="/img/home/turning-vision.png"
                        alt="icon"
                      />
                    </i>
                  </span>
                  <span className="change color-yellow">
                    Empower business solutions
                    <i>
                      <Image
                        width={600}
                        height={100 / (100 / 100)}
                        src="/img/home/empower-business.png"
                        alt="icon"
                      />
                    </i>
                  </span>
                </div>

                <div className="positivity__words2">
                  <span className="change2">
                    <span className="color-blue-bg"></span>
                  </span>
                  <span className="change2">
                    <span className="color-red-bg"></span>
                  </span>
                  <span className="change2">
                    <span className="color-yellow-bg"></span>
                  </span>
                </div>
              </div>

              <div
                className="ServiceTextAnimationWeb ServiceTextApp showdiv"
                id="websitediv"
                style={{ opacity: "1" }}
              >
                <span className="positivity__alone">Web development</span>
                <div className="positivity__words">
                  <span className="change color-blue">
                    Seamless web: Design, function, UX
                    <i>
                      <Image
                        width={600}
                        height={100 / (100 / 100)}
                        src="/img/home/ux-design.png"
                        alt="icon"
                      />
                    </i>
                  </span>
                  <span className="change color-red">
                    Turning ideas into responsive web
                    <i>
                      <Image
                        width={600}
                        height={100 / (100 / 100)}
                        src="/img/home/responsive-web.png"
                        alt="icon"
                      />
                    </i>
                  </span>
                  <span className="change color-yellow">
                    Laravel experts, web &amp; app solutions
                    <i>
                      <Image
                        width={600}
                        height={100 / (100 / 100)}
                        src="/img/home/laravel-experts.png"
                        alt="icon"
                      />
                    </i>
                  </span>
                </div>

                <div className="positivity__words2">
                  <span className="change2">
                    <span className="color-blue-bg"></span>
                  </span>
                  <span className="change2">
                    <span className="color-red-bg"></span>
                  </span>
                  <span className="change2">
                    <span className="color-yellow-bg"></span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="MoreServicesBtn">
            <Link href="/services" className="">
              <span>
                More Services
                <i>
                  <Image
                    width={20}
                    height={100}
                    src="/img/home/top-banner/rightArrowIcon.svg"
                    className="d-inline"
                    alt="icon"
                  />
                </i>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Take a look Section  */}
      {/* <section className="take-a-look">
        <div className="container">
          <div className="headings">
            <h2>TAKE A LOOK AT WHAT WE HAVE BEEN WORKING ON</h2>
            <p>
              We have established partnerships with prominent organizations and
              well-known brands,
              <br /> offering innovative custom software solutions for both web
              and mobile platforms.
            </p>
          </div>
          <Looksilder />
        </div>
      </section> */}
      <section class="take-a-look">
        <div class="container">
          <div class="headings">
            <h2>TAKE A LOOK AT WHAT WE HAVE BEEN WORKING ON</h2>
            <p>
              We have established partnerships with prominent organizations and
              well-known brands,
              <br /> offering innovative custom software solutions for both web
              and mobile platforms.
            </p>
          </div>
          <Looksilder />
        </div>
      </section>

      {/* REadyMade Solution Section  */}

      <section className="readymateSolution">
        <div className="container">
          <div className="headings">
            <h2>READYMADE SOFTWARE SOLUTIONS</h2>
            <p>
              Our readily available solutions for various types of industries
            </p>
          </div>
          <div className="readymateSolution">
            <div className="row">
              <div className="col-md-3 col-sm-3">
                <Link
                  href="/softwares/fiverr-clone/"
                  className="ready-product aos-init aos-animate"
                  data-aos="fade-up"
                >
                  <Image
                    width={100}
                    height={100}
                    src="/img/images/gigger-product-img.webp"
                    alt="gigger"
                  />{" "}
                  <div className="abs-product">
                    <h3>Fiverr Clone</h3>
                    <p>White label fiverr clone php script</p>
                    <div className="product-star">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <div className="product-review">553 REVIEWS</div>
                    <ul className="make-style">
                      <li>
                        <Image
                          width={100}
                          height={100}
                          src="/img/images/android-new.webp"
                          alt="android"
                        />
                      </li>
                      <li>
                        <Image
                          width={100}
                          height={100}
                          src="/img/images/apple.webp"
                          alt="apple"
                        />
                      </li>
                      <li>
                        <Image
                          width={100}
                          height={100}
                          src="/img/images/web_new.webp"
                          alt="web"
                        />
                      </li>
                    </ul>
                  </div>
                </Link>
              </div>

              <div className="col-md-3 col-sm-3">
                <Link
                  href="/softwares/job-board-software/"
                  className="ready-product aos-init aos-animate"
                  data-aos="fade-up"
                >
                  <Image
                    width={100}
                    height={100}
                    src="/img/images/jobboard-product-img.webp"
                    alt="Job-board"
                  />{" "}
                  <div className="abs-product">
                    <h3>Job Board Software</h3>
                    <p>White Label Job Board Script</p>
                    <div className="product-star">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <div className="product-review">213 REVIEWS</div>
                    <ul className="make-style">
                      <li>
                        <Image
                          width={100}
                          height={100}
                          src="/img/images/android-new.webp"
                          alt="android"
                        />
                      </li>
                      <li>
                        <Image
                          width={100}
                          height={100}
                          src="/img/images/apple.webp"
                          alt="apple"
                        />
                      </li>
                      <li>
                        <Image
                          width={100}
                          height={100}
                          src="/img/images/web_new.webp"
                          alt="web"
                        />
                      </li>
                    </ul>
                  </div>
                </Link>
              </div>
              <div className="col-md-3 col-sm-3">
                <Link
                  href="/service-marketplace-script/"
                  className="ready-product aos-init aos-animate"
                  data-aos="fade-up"
                >
                  <Image
                    width={100}
                    height={100}
                    src="/img/images/servicemarket-product-img.webp"
                    alt="service-marketplace"
                  />{" "}
                  <div className="abs-product">
                    <h3>Service Marketplace</h3>
                    <p>Thumbtack Clone Script</p>
                    <div className="product-star">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <div className="product-review">47 REVIEWS</div>
                    <ul className="make-style">
                      <li>
                        <Image
                          width={100}
                          height={100}
                          src="/img/images/android-new.webp"
                          alt="android"
                        />
                      </li>
                      <li>
                        <Image
                          width={100}
                          height={100}
                          src="/img/images/apple.webp"
                          alt="apple"
                        />
                      </li>
                      <li>
                        <Image
                          width={100}
                          height={100}
                          src="/img/images/web_new.webp"
                          alt="web"
                        />
                      </li>
                    </ul>
                  </div>
                </Link>
              </div>
              <div className="col-md-3 col-sm-3">
                <Link
                  href="/freelancer-clone"
                  className="ready-product aos-init aos-animate"
                  data-aos="fade-up"
                >
                  <Image
                    width={100}
                    height={100}
                    src="/img/images/freelancer-product-img.webp"
                    alt="freelancerclone"
                  />{" "}
                  <div className="abs-product">
                    <h3>Freelancer Clone</h3>
                    <p>Freelance Marketplace</p>
                    <div className="product-star">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <div className="product-review">124 REVIEWS</div>
                    <ul className="make-style">
                      <li>
                        <Image
                          width={100}
                          height={100}
                          src="/img/images/android-new.webp"
                          alt="android"
                        />
                      </li>
                      <li>
                        <Image
                          width={100}
                          height={100}
                          src="/img/images/apple.webp"
                          alt="apple"
                        />
                      </li>
                      <li>
                        <Image
                          width={100}
                          height={100}
                          src="/img/images/web_new.webp"
                          alt="web"
                        />
                      </li>
                    </ul>
                  </div>
                </Link>
              </div>
              <div className="col-md-3 col-sm-3">
                <Link
                  href="/whatsapp-clone"
                  className="ready-product aos-init aos-animate"
                  data-aos="fade-up"
                >
                  <Image
                    width={100}
                    height={100}
                    src="/img/images/whatsapp-product-img.webp"
                    alt="whatsApp-clone"
                  />{" "}
                  <div className="abs-product">
                    <h3>Whatsapp Clone</h3>
                    <p>Instant messaging app</p>
                    <div className="product-star">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <div className="product-review">23 REVIEWS</div>
                    <ul className="make-style">
                      <li>
                        <Image
                          width={100}
                          height={100}
                          src="/img/images/android-new.webp"
                          alt="android"
                        />
                      </li>
                      <li>
                        <Image
                          width={100}
                          height={100}
                          src="/img/images/apple.webp"
                          alt="apple"
                        />
                      </li>
                      <li>
                        <Image
                          width={100}
                          height={100}
                          src="/img/images/web_new.webp"
                          alt="web"
                        />
                      </li>
                    </ul>
                  </div>
                </Link>
              </div>
              <div className="col-md-3 col-sm-3">
                <Link
                  href="/logistic-marketplace-software"
                  className="ready-product aos-init aos-animate"
                  data-aos="fade-up"
                >
                  <Image
                    width={100}
                    height={100}
                    src="/img/images/logisticr-product-img.webp"
                    alt="logistic-marketplace"
                  />{" "}
                  <div className="abs-product">
                    <h3>Logicstic Marketplace Software</h3>
                    <p>Uship clone script</p>
                    <div className="product-star">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <div className="product-review">168 REVIEWS</div>
                    <ul className="make-style">
                      <li>
                        <Image
                          width={100}
                          height={100}
                          src="/img/images/android-new.webp"
                          alt="android"
                        />
                      </li>
                      <li>
                        <Image
                          width={100}
                          height={100}
                          src="/img/images/apple.webp"
                          alt="apple"
                        />
                      </li>
                      <li>
                        <Image
                          width={100}
                          height={100}
                          src="/img/images/web_new.webp"
                          alt="web"
                        />
                      </li>
                    </ul>
                  </div>
                </Link>
              </div>
              <div className="col-md-3 col-sm-3">
                <Link
                  href="/food-ordering-script"
                  className="ready-product aos-init aos-animate"
                  data-aos="fade-up"
                >
                  <Image
                    width={100}
                    height={100}
                    src="/img/images/foododer-product-img.webp"
                    alt="food-ordering"
                  />{" "}
                  <div className="abs-product">
                    <h3>Food Ordering Script</h3>
                    <p>Foodpanda Clone, Swiggy Clone</p>
                    <div className="product-star">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <div className="product-review">31 REVIEWS</div>
                    <ul className="make-style">
                      <li>
                        <Image
                          width={100}
                          height={100}
                          src="/img/images/android-new.webp"
                          alt="android"
                        />
                      </li>
                      <li>
                        <Image
                          width={100}
                          height={100}
                          src="/img/images/apple.webp"
                          alt="apple"
                        />
                      </li>
                      <li>
                        <Image
                          width={100}
                          height={100}
                          src="/img/images/web_new.webp"
                          alt="web"
                        />
                      </li>
                    </ul>
                  </div>
                </Link>
              </div>
              <div className="col-md-3 col-sm-3">
                <Link
                  href="/appointment-scheduling-software"
                  className="ready-product aos-init aos-animate"
                  data-aos="fade-up"
                >
                  <Image
                    width={100}
                    height={100}
                    src="/img/images/appointment-product-img.webp"
                    alt="appointment-scheduling"
                  />{" "}
                  <div className="abs-product">
                    <h3>Appointment Scheduling </h3>
                    <p>Appointment Booking Script</p>
                    <div className="product-star">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <div className="product-review">27 REVIEWS</div>
                    <ul className="make-style">
                      <li>
                        <Image
                          width={100}
                          height={100}
                          src="/img/images/android-new.webp"
                          alt="android"
                        />
                      </li>
                      <li>
                        <Image
                          width={100}
                          height={100}
                          src="/img/images/apple.webp"
                          alt="apple"
                        />
                      </li>
                      <li>
                        <Image
                          width={100}
                          height={100}
                          src="/img/images/web_new.webp"
                          alt="web"
                        />
                      </li>
                    </ul>
                  </div>
                </Link>
              </div>

              <div className="col-md-3 col-sm-3">
                <Link
                  href="/crowdfunding-script"
                  className="ready-product aos-init"
                  data-aos="fade-up"
                >
                  <Image
                    width={100}
                    height={100}
                    src="/img/images/crowdfunding-product-img.webp"
                    alt="Crowdfunding Script"
                  />{" "}
                  <div className="abs-product">
                    <h3>Crowdfunding Script</h3>
                    <p>Fundraising Software like GoFundMe &amp; Kickstarter</p>
                    <div className="product-star">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <div className="product-review">45 REVIEWS</div>
                    <ul className="make-style">
                      <li>
                        <Image
                          width={100}
                          height={100}
                          src="/img/images/web_new.webp"
                          alt="web"
                        />
                      </li>
                    </ul>
                  </div>
                </Link>
              </div>

              <div className="col-md-3 col-sm-3">
                <Link
                  href="/equipment-rental-software"
                  className="ready-product aos-init"
                  data-aos="fade-up"
                >
                  <Image
                    width={100}
                    height={100}
                    src="/img/images/equipment-product-img.webp"
                    alt="Equipment Rental Script"
                  />{" "}
                  <div className="abs-product">
                    <h3>Equipment Rental Software</h3>
                    <p>
                      Advanced equipment rental software for renting equipment
                      tools.
                    </p>
                    <div className="product-star">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <div className="product-review">37 REVIEWS</div>
                    <ul className="make-style">
                      <li>
                        <Image
                          width={100}
                          height={100}
                          src="/img/images/web_new.webp"
                          alt="web"
                        />
                      </li>
                    </ul>
                  </div>
                </Link>
              </div>

              <div className="col-md-3 col-sm-3">
                <Link
                  href="/groupon-clone"
                  className="ready-product aos-init"
                  data-aos="fade-up"
                >
                  <Image
                    width={100}
                    height={100}
                    src="/img/images/groupon-product-img.webp"
                    alt="Groupon Clone Script"
                  />{" "}
                  <div className="abs-product">
                    <h3>Groupon Clone Script</h3>
                    <p>Similar to Daily Deal Software &amp; Coupon Script</p>
                    <div className="product-star">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <div className="product-review">26 REVIEWS</div>
                    <ul className="make-style">
                      <li>
                        <Image
                          width={100}
                          height={100}
                          src="/img/images/android-new.webp"
                          alt="android"
                        />
                      </li>
                      <li>
                        <Image
                          width={100}
                          height={100}
                          src="/img/images/apple.webp"
                          alt="apple"
                        />
                      </li>
                      <li>
                        <Image
                          width={100}
                          height={100}
                          src="/img/images/web_new.webp"
                          alt="web"
                        />
                      </li>
                    </ul>
                  </div>
                </Link>
              </div>

              <div className="col-md-3 col-sm-3">
                <Link
                  href="/recruitment-management-software"
                  className="ready-product aos-init"
                  data-aos="fade-up"
                >
                  <Image
                    width={100}
                    height={100}
                    src="/img/images/recruitment-product-img.webp"
                    alt="Recruitment management software"
                  />{" "}
                  <div className="abs-product">
                    <h3>Recruitment management Software</h3>
                    <p>Readymade applicant tracking system</p>
                    <div className="product-star">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <div className="product-review">43 REVIEWS</div>
                    <ul className="make-style">
                      <li>
                        <Image
                          width={100}
                          height={100}
                          src="/img/images/web_new.webp"
                          alt="web"
                        />
                      </li>
                    </ul>
                  </div>
                </Link>
              </div>

              <div className="product-view">
                <Link href="/softwares" className="btn btn-primary">
                  View All
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hire section  */}
      <section className="hire-expert-home">
        <div className="container">
          <div className="headings">
            <h2>HIRE DEVELOPER MINDS FOR DIFFERENT PLATFORM</h2>
            <p>
              Hire developers &amp; programmers from logicspice. Our technical
              experts and skilled developers offer you quite a huge range of
              services in Web, iPhone and Android development.
            </p>
          </div>
          <ul className="hiring-list">
            <li data-aos="fade-left" class="aos-init aos-animate">
              <Link href="/hire-reactjs-developers">
                <span className="home-hire-icon">
                  <span className="bg">
                    <span className="icon reactjs-icon"></span>
                  </span>
                </span>
                <strong>Hire ReactJS Developers</strong>
              </Link>
            </li>
            <li data-aos="fade-left" class="aos-init aos-animate">
              <Link href="/hire-ios-app-developers">
                <span className="home-hire-icon">
                  <span className="bg">
                    <span className="icon apple-icon"></span>
                  </span>
                </span>
                <strong>Hire iOS App Developer</strong>
              </Link>
            </li>
            <li data-aos="fade-left" class="aos-init aos-animate">
              <Link href="/hire-web-developers">
                <span className="home-hire-icon">
                  <span className="bg">
                    <span className="icon web-icon"></span>
                  </span>
                </span>
                <strong>Hire Web Developer</strong>
              </Link>
            </li>
            <li data-aos="fade-left" class="aos-init aos-animate">
              <Link href="/hire-node-js-experts">
                <span className="home-hire-icon">
                  <span className="bg">
                    <span className="icon cake-icon"></span>
                  </span>
                </span>
                <strong>Hire Node.JS Developer</strong>
              </Link>
            </li>

            <li data-aos="fade-left" class="aos-init aos-animate">
              <Link href="/hire-laravel-developers">
                <span className="home-hire-icon">
                  <span className="bg">
                    <span className="icon lara-icon"></span>
                  </span>
                </span>
                <strong>Hire Laravel Developer</strong>
              </Link>
            </li>
            <li data-aos="fade-left" class="aos-init aos-animate">
              <Link href="/hire-react-native-developers">
                <span className="home-hire-icon">
                  <span className="bg">
                    <span className="icon react-native-icon"></span>
                  </span>
                </span>
                <strong>Hire React Native Developers</strong>
              </Link>
            </li>
            <li data-aos="fade-left" class="aos-init aos-animate">
              <Link href="/hire-hybrid-mobile-app-developer">
                <span className="home-hire-icon">
                  <span className="bg">
                    <span className="icon mag-icon"></span>
                  </span>
                </span>
                <strong>Hire Hybrid App Developer</strong>
              </Link>
            </li>
            <li data-aos="fade-left" class="aos-init aos-animate">
              <Link href="/hire-wordpress-experts">
                <span className="home-hire-icon">
                  <span className="bg">
                    <span className="icon word-icon"></span>
                  </span>
                </span>
                <strong>Hire Wordpress Developer</strong>
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <section className="blog-home">
        <div className="container">
          <div className="headings">
            <h2>OUR BLOGS</h2>
            <p>A Sneak Peek into the Future of Innovation</p>
          </div>
          <div>
            <Blogslider />
          </div>
        </div>
      </section>
      <section className="certificates">
        <div className="container">
          <Certificationtabs />
        </div>
      </section>

      {/* client side  */}
      <section className="client-side">
        <div className="container">
          <div className="row">
            <div className="col-sm-3 col-xs-6">
              <i className="cs_icon cs_icon1"></i>
              <div className="number-client">1286</div>
              <p>Satisfied Clients</p>
            </div>
            <div className="col-sm-3 col-xs-6">
              <i className="cs_icon cs_icon2"></i>
              <div className="number-client">1844</div>
              <p>Projects</p>
            </div>
            <div className="col-sm-3 col-xs-6">
              <i className="cs_icon cs_icon3"></i>
              <div className="number-client">327</div>
              <p>Mobile Apps</p>
            </div>
            <div className="col-sm-3 col-xs-6">
              <i className="cs_icon cs_icon4"></i>
              <div className="number-client">1082</div>
              <p>Likes</p>
            </div>
          </div>
        </div>
      </section>
      <section className="working_with">
        <div className="container">
          <h3
            className="title_heading title_heading_bgg"
            style={{ marginBottom: "30px" }}
          >
            Worked with 1500+ companies worldwide, from startups to enterprises.
          </h3>

          <Workingwith />
        </div>
      </section>

      <section className="customize-top">
        <div id="particles-js2"> </div>
        <div className="container">
          <div className="headings headings_white">
            <h1>CUSTOMISED WEB AND MOBILE APP DEVELOPMENT</h1>
            <p>
              We are a Custom Mobile App &amp; Software Development Company
              creating world-class user experiences across web, Android and
              iPhone apps.
            </p>
          </div>

          <Customizeweb />
        </div>
      </section>
      <section className="client-say">
        <div className="container">
          <div className="headings">
            <h2>WHAT OUR CLIENTS SAY</h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <iframe
                id="you_iframe"
                className="embed-responsive-item"
                src="https://www.youtube.com/embed/DwZRqMYOmZo?rel=0"
                allow="encrypted-media"
                allowfullscreen=""
                height="300"
                width="100%"
                frameborder="0"
              ></iframe>
            </div>
            <div className="col-md-6">
              <p>
                Logicspice offers <span>Cost Effective</span> Solution and the{" "}
                <span>quality</span> of their work is very good. Logicspice has
                very <span>good reviews</span> and 100&apos;s of different
                project of different areas and work with detailed feedback about
                our request with very <span>standardized process.</span>{" "}
              </p>
              <p>
                Very friendly environment and I highly recommend Logicspice for
                Android &amp; iPhone app development...
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries  */}

      <section className="ind-we-serv">
        <div class="IndustriesIcon1">
          <Image width={100} height={100} src="/img/home/industries/icon1.png" alt="" />
        </div>
        <div class="IndustriesIcon2">
          <Image width={100} height={100} src="/img/home/industries/icon2.png" alt="" />
        </div>
        <div class="IndustriesIcon3">
          <Image width={100} height={100} src="/img/home/industries/icon3.png" alt="" />
        </div>
        <div class="IndustriesIcon4">
          <Image width={100} height={100} src="/img/home/industries/icon4.png" alt="" />
        </div>
        <div class="IndustriesIcon5">
          <Image width={100} height={100} src="/img/home/industries/icon5.png" alt="" />
        </div>
        <div class="IndustriesIcon6">
          <Image width={100} height={100} src="/img/home/industries/icon6.png" alt="" />
        </div>
        <div class="IndustriesIcon7">
          <Image width={100} height={100} src="/img/home/industries/icon7.png" alt="" />
        </div>
        <div class="IndustriesIcon8">
          <Image width={100} height={100} src="/img/home/industries/icon8.png" alt="" />
        </div>
        <div className="container">
          <div className="headings headings_white">
            <h2>INDUSTRIES WE HAVE SERVED</h2>
            <p>
              With our expert and dedicated team, we at Logicspice can transform
              your business using our latest technological approach, skills, and
              dedication to meet your needs. We serve all kind of industry like
              Real Estate, Online Booking, Online Education and Health Care etc.
            </p>
          </div>
          <ul>
            <li
              data-aos="fade-up"
              className="IndustriesBx1 aos-init aos-animate"
            >
              <Link href="/industries/Hotel-apps" className="">
                <span>
                  <i className="ind_icons ind_icon1"></i>
                </span>
                <strong>Travel &amp; Hospitality</strong>
              </Link>{" "}
            </li>
            <li
              data-aos="fade-up"
              className="IndustriesBx2 aos-init aos-animate"
            >
              <Link href="/industries/health-care-apps" className="">
                <span>
                  <i className="ind_icons ind_icon2"></i>
                </span>
                <strong>Healthcare</strong>
              </Link>{" "}
            </li>
            <li
              data-aos="fade-up"
              className="IndustriesBx3 aos-init aos-animate"
            >
              <Link
                href="/industries/commercial-and-residential-apps"
                className=""
              >
                <span>
                  <i className="ind_icons ind_icon3"></i>
                </span>
                <strong>Real Estate</strong>
              </Link>{" "}
            </li>
            <li
              data-aos="fade-up"
              className="IndustriesBx4 aos-init aos-animate"
            >
              <Link href="/industries/transportation-apps" className="">
                <span>
                  <i className="ind_icons ind_icon4"></i>
                </span>
                <strong>Logistics &amp; Transportation</strong>
              </Link>{" "}
            </li>
            <li
              data-aos="fade-up"
              className="IndustriesBx5 aos-init aos-animate"
            >
              <Link
                href="/industries/professional-consultant-mobile-app-development"
                className=""
              >
                <span>
                  <i className="ind_icons ind_icon5"></i>
                </span>
                <strong>Consultants</strong>
              </Link>{" "}
            </li>

            <li
              data-aos="fade-up"
              className="IndustriesBx6 aos-init aos-animate"
            >
              <Link
                href="/industries/service-contractors-and-cleaning-companies-apps"
                className=""
              >
                <span>
                  <i className="ind_icons ind_icon6"></i>
                </span>
                <strong>
                  Service
                  <br /> Contractors
                </strong>
              </Link>{" "}
            </li>
            <li
              data-aos="fade-up"
              className="IndustriesBx7 aos-init aos-animate"
            >
              <Link href="/industries/schools-and-education-apps" className="">
                <span>
                  <i className="ind_icons ind_icon7"></i>
                </span>
                <strong>
                  Schools
                  <br /> &amp; Education
                </strong>
              </Link>{" "}
            </li>

            <li
              data-aos="fade-up"
              className="IndustriesBx8 aos-init aos-animate"
            >
              <Link
                href="/industries/accountants-and-financial-services-real-estate-apps"
                className=""
              >
                <span>
                  <i className="ind_icons ind_icon8"></i>
                </span>
                <strong>
                  Finance <br />
                  &amp; Insurance
                </strong>
              </Link>{" "}
            </li>

            <li
              data-aos="fade-up"
              className="IndustriesBx9 aos-init aos-animate"
            >
              <Link
                href="/industries/ideas-and-business-concepts-apps"
                className=""
              >
                <span>
                  <i className="ind_icons ind_icon9"></i>
                </span>
                <strong>
                  Ideas and <br />
                  Business Concepts
                </strong>
              </Link>{" "}
            </li>
            <li
              data-aos="fade-up"
              className="IndustriesBx10 aos-init aos-animate"
            >
              <Link
                href="/industries/government-and-municipal-and-other-administrative-operations-apps"
                className=""
              >
                <span>
                  <i className="ind_icons ind_icon10"></i>
                </span>
                <strong>
                  Government <br />
                  Operations
                </strong>
              </Link>{" "}
            </li>
          </ul>
          <div className="product-view">
            <Link href="/industries" className="btn btn-primary">
              View All Industries
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <Servercomponents />
    </>
  );
};

export default Page;
