"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import NavBar from "@/app/Components/Navbar";
import Footer from "@/app/Components/Footer";
import "@/app/company/company.css";
import Slider from "react-slick"; // Import react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const page = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <>
      <NavBar />
      <section class="team_head">
        <div class="container">
          <h1>Meet Our Team</h1>
        </div>
      </section>

      <section class="intro-team">
        <div class="container">
          <h2>We Are Nothing Without Our People</h2>
          <p>
            A company is known by the capabilities and skills of its employees
            and LogicSpice is proud to have such a diversified and proficient
            team of dedicated professionals. Our main strategy to grow as a
            company is to invest in human resources that is believed to be our
            main asset.
          </p>

          <p>
            At LogicSpice our clients have the legitimacy to choose from the
            wide pool of professionals according to their project specification.
            We always ensure that our professionals are updated with latest
            technologies persisting in the market and always work towards
            innovation. With the hands on various projects in web application
            development our team has evolved in way to deliver effective and
            lucrative projects within given deadline and this has helped us in
            gaining the trust and satisfaction of our clients for a long run.
          </p>
        </div>
      </section>

      <section class="director-desk">
        <div class="container">
          <div class="team-director">
            <div class="row">
              <div class="col-md-6">
                <img
                  alt="From The Director Desk - Logicspice"
                  src="/img/ourteam/director.png"
                />
              </div>
              <div class="col-md-6">
                <h2>From The Director Desk</h2>
                <p>
                  The management team of LogicSpice is dedicated towards
                  maintaining coordination, commitment and communication that
                  helps our company in achieving efficiency on each project we
                  work on. Our management team is always up for providing
                  appropriate training to our employees according to the
                  requirement of the project and this is the fuel that drives
                  our work towards desired success. Our team always analyzes the
                  requirement received by the client and frame strategies
                  according to the current market trends that keeps our clients
                  always ahead of their competitors.
                </p>
                <div class="name-of-director">
                  Manish Shrimal <br /> <span>CEO & Founder</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="aboutLogicTeam">
        <div class="container">
          <h2>Our Team</h2>

          <div class="row">
            <div class="col-md-6">
              <div class="team-img">
                <img
                  alt="Android Team - Logicspice"
                  src="/img/ourteam/android-team.png"
                  class="img-thumbnail"
                />
                <img alt="img" src="/img/ourteam/shadow.png" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="team-content">
                <h3>
                  Android Team{" "}
                  <span>
                    <img alt="img" src="/img/ourteam/android-icon.png" />
                  </span>
                </h3>
                <p>
                  We have a team of{" "}
                  <Link href="/hire-android-app-developers" target="_blank">
                    android developers
                  </Link>{" "}
                  who is having more than 7+ years experience in their field.
                  Our android app developers approach is to ensure that client
                  receive user friendly product that expands customers
                  experience. Our developers are always willing to work on the
                  <strong>latest technologies in android.</strong> We always
                  believe in keeping our clients to get in touch with our
                  android team directly to give better exposure to your project.
                </p>
              </div>
            </div>
          </div>

          <div class="row AboutLogocOurTeamRight">
            <div class="col-md-6 pull-right">
              <div class="team-img">
                <img
                  alt="iPhone Team - Logicspice"
                  src="/img/ourteam/iphone-team.png"
                  class="img-thumbnail"
                />
                <img alt="img" src="/img/ourteam/shadow.png" />
              </div>
            </div>
            <div class="col-md-6 pull-left">
              <div class="team-content text-right">
                <h3>
                  <span>
                    <img alt="img" src="/img/ourteam/iphone-icon.png" />
                  </span>{" "}
                  iPhone Team
                </h3>
                <p>
                  We have a team of{" "}
                  <Link href="hire-ios-app-developers" target="_blank">
                    iOS developers
                  </Link>{" "}
                  who provides best solution to our customers. Our team is
                  aligned with the client{" "}
                  <strong>
                    from concept till submitting your app to the iOS store.
                  </strong>
                  Our iPhone experts keep themselves updated with the latest
                  technologies and trends worldwide and provide world-proved
                  technologies. While developing iOS app, our team provides
                  regular progress report and demonstration of the project. Get
                  in touch with our team to share your idea. Our team will
                  convert your idea into digital success.
                </p>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6">
              <div class="team-img">
                <img
                  alt="SEO Team - Logicspice"
                  src="/img/ourteam/SEO-team.png"
                  class="img-thumbnail"
                />
                <img alt="img" src="/img/ourteam/shadow.png" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="team-content">
                <h3>
                  SEO Team{" "}
                  <span>
                    <img alt="img" src="/img/ourteam/Seo_icon.png" />
                  </span>
                </h3>
                <p>
                  SEO plays an important role and it is becoming more and more
                  popular day by day. Our team of SEO has a great understanding
                  in marketing, product, research, analysis which deliver
                  outstanding result to any business. Our SEO team does not end
                  with bringing the traffic, they also play an important role in{" "}
                  <strong>
                    converting those customers into buyer by using their
                    marketing tactics and techniques.
                  </strong>{" "}
                  Everyone is aware about that how much organic traffic is
                  important in this competitive market.
                </p>
              </div>
            </div>
          </div>

          <div class="row AboutLogocOurTeamRight">
            <div class="col-md-6 pull-right">
              <div class="team-img">
                <img
                  alt="PHP Team - Logicspice"
                  src="/img/ourteam/php-team.png"
                  class="img-thumbnail"
                />
                <img alt="img" src="/img/ourteam/shadow.png" />
              </div>
            </div>
            <div class="col-md-6 pull-left">
              <div class="team-content text-right">
                <h3>
                  <span>
                    <img alt="img" src="/img/ourteam/php-icon.png" />
                  </span>{" "}
                  PHP Team
                </h3>
                <p>
                  Logicspice have a team of expert PHP developers who is having
                  more than <strong>10 years experience</strong> in their field.
                  Our PHP developers have a great technical expertise in
                  <strong>HTML5, CSS, Jquery, mySQL</strong> and more. Our
                  developer will let you know the tool, resources, skills,
                  knowledge while doing your PHP project. Logicspice PHP team
                  has a technical breadth and experience of developing fully
                  featured and customizable solution to your business. Meet our
                  team of{" "}
                  <Link href="hire-php-developers" target="_blank">
                    PHP developers
                  </Link>{" "}
                  to discuss your business needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="grow-to-bloom">
        <div class="row">
          <div class="col-md-7">
            <img
              alt="Grow to Bloom - Logicspice"
              src="/img/ourteam/growToBloom.png"
            />
          </div>
          <div class="col-md-5">
            <div class="bloom-dev">
              <h2>Grow to Bloom</h2>
              <p>
                The end to end development process starts from research and ends
                with delivering the product. The major thing is delivering the
                right product at the right time.
              </p>
              <ul>
                <li>
                  <span>
                    We take the initiative by submitting a detailed proposal of
                    the project and wait for your approval and after approval we
                    move forward to the next step.
                  </span>
                </li>
                <li>
                  <span>
                    We design the wireframe and develop a proof of concept by
                    designing mock up.
                  </span>
                </li>
                <li>
                  <span>
                    We make it more and more attractive and fruitful by doing
                    the required changes. The process takes time if we need a
                    fruitful result.
                  </span>
                </li>
                <li>
                  <span>
                    Anything in excess is harmful; so we never delay our project
                    before deliver anything, it is must to do proper testing so
                    we test it thoroughly & remove the bugs if any occurs.
                  </span>
                </li>
                <li>
                  <span>
                    Our work doesn’t end here, after delivering the project
                    successfully, we give 1 month free support.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="counsult-expert">
        <div class="container">
          <div class="row">
            <div class="col-sm-8">
              <h2>Let’s Consult With Our Experts</h2>
              <a data-toggle="modal" data-target="#contactFix">
                Get In Touch{" "}
                <span>
                  <img alt="img" src="/img/ourteam/getTouch.png" />
                </span>
              </a>
            </div>
            <div class="col-sm-4">
              <img
                alt="11+ Experince - Logicspice"
                src="/img/ourteam/exp.png"
              />
            </div>
          </div>
        </div>
      </section>

      {/* <section class="events">
        <div class="container">
          <ul id="event-home" class="owl-carousel GlobalpagesSlider slide">
            <li>
              <div class="event_gallery_colsshom_col_box_in">
                <div class="img-event">
                  <img
                    src="/img/ourteam/trip_photo.jpg"
                    alt="Office Trip 2019"
                    class="lazy"
                  />
                </div>
                <div class="even_img_name">Office Trip</div>
                <div class="even_img_date">November 23, 2019</div>
              </div>
              <div class="event_gallery_colsshom_col_box_in_shadow"></div>
            </li>
            <li>
              <div class="event_gallery_colsshom_col_box_in">
                <div class="img-event">
                  <img
                    src="/img/ourteam/sunrise2019.jpg"
                    alt="Sunrise_Resort_2019img"
                    class="lazy"
                  />
                </div>
                <div class="even_img_name">Sunrise Resort</div>
                <div class="even_img_date">July 27, 2019</div>
              </div>
              <div class="event_gallery_colsshom_col_box_in_shadow"></div>
            </li>
            <li>
              <div class="event_gallery_colsshom_col_box_in">
                <div class="img-event">
                  <img
                    src="/img/ourteam/appu_ghar_2018img.jpg"
                    alt="appu_ghar_2018img"
                    class="lazy"
                  />
                </div>
                <div class="even_img_name">Appu Ghar</div>
                <div class="even_img_date">August 04, 2018</div>
              </div>
              <div class="event_gallery_colsshom_col_box_in_shadow"></div>
            </li>
            <li>
              <div class="event_gallery_colsshom_col_box_in">
                <div class="img-event">
                  <img
                    src="/img/ourteam/plantation_2016img.png"
                    alt="plantation_2016img"
                    class="lazy"
                  />
                </div>
                <div class="even_img_name">Plantation</div>
                <div class="even_img_date">July 16, 2016</div>
              </div>
              <div class="event_gallery_colsshom_col_box_in_shadow"></div>
            </li>
            <li>
              <div class="event_gallery_colsshom_col_box_in">
                <div class="img-event">
                  <img
                    src="/img/ourteam/newyear_2017img.png"
                    alt="newyear_2017img"
                    class="lazy"
                  />
                </div>
                <div class="even_img_name">New Year Celebration</div>
                <div class="even_img_date">December 31, 2016</div>
              </div>
              <div class="event_gallery_colsshom_col_box_in_shadow"></div>
            </li>
            <li>
              <div class="event_gallery_colsshom_col_box_in">
                <div class="img-event">
                  <img
                    src="/img/ourteam/diwali_2016_img.png"
                    alt="diwali_2016_img"
                    class="lazy"
                  />
                </div>
                <div class="even_img_name">Diwali Celebration</div>
                <div class="even_img_date">October 10, 2016</div>
              </div>
              <div class="event_gallery_colsshom_col_box_in_shadow"></div>
            </li>
          </ul>
        </div>
      </section> */}

      <section className="events">
        <div className="container">
          <Slider {...settings}>
            {/* Slide 1 */}
            <div>
              <img
                src="/img/ourteam/trip_photo.jpg"
                alt="Office Trip 2019"
                className="slider-image"
              />
              <div className="even_img_name">Office Trip</div>
              <div className="even_img_date">November 23, 2019</div>
            </div>

            {/* Slide 2 */}
            <div>
              <img
                src="/img/ourteam/sunrise2019.jpg"
                alt="Sunrise Resort 2019"
                className="slider-image"
              />
              <div className="even_img_name">Sunrise Resort</div>
              <div className="even_img_date">July 27, 2019</div>
            </div>

            {/* Slide 3 */}
            <div>
              <img
                src="/img/ourteam/appu_ghar_2018img.jpg"
                alt="Appu Ghar 2018"
                className="slider-image"
              />
              <div className="even_img_name">Appu Ghar</div>
              <div className="even_img_date">August 04, 2018</div>
            </div>

            {/* Slide 4 */}
            <div>
              <img
                src="/img/ourteam/plantation_2016img.png"
                alt="Plantation 2016"
                className="slider-image"
              />
              <div className="even_img_name">Plantation</div>
              <div className="even_img_date">July 16, 2016</div>
            </div>

            {/* Slide 5 */}
            <div>
              <img
                src="/img/ourteam/newyear_2017img.png"
                alt="New Year Celebration 2016"
                className="slider-image"
              />
              <div className="even_img_name">New Year Celebration</div>
              <div className="even_img_date">December 31, 2016</div>
            </div>

            {/* Slide 6 */}
            <div>
              <img
                src="/img/ourteam/diwali_2016_img.png"
                alt="Diwali Celebration 2016"
                className="slider-image"
              />
              <div className="even_img_name">Diwali Celebration</div>
              <div className="even_img_date">October 10, 2016</div>
            </div>
          </Slider>
        </div>
      </section>

      <section class="fun-team">
        <h2>We believe people learn more, when they are having fun!</h2>
        <p>
          At Logicspice we believe that everything needs certain amount of fun
          in it. The brains that are often engaged in cracking the codes and
          designing new thoughts, get the required rest with the essence of fun
          activities.
        </p>
        <div class="row m-0">
          <div class="col-sm-4 p-0">
            <div class="logic-fun-time">
              <img alt="Outing - Logicspice" src="/img/ourteam/out1.png" />
              <p>
                <span>Outing</span>
              </p>
            </div>
          </div>
          <div class="col-sm-4 p-0">
            <div class="logic-fun-time">
              <img alt="Plantation - Logicspice" src="/img/ourteam/out2.png" />
              <p>
                <span>Plantation</span>
              </p>
            </div>
          </div>
          <div class="col-sm-4 p-0">
            <div class="logic-fun-time">
              <img alt="Resort Trip - Logicspice" src="/img/ourteam/out3.png" />
              <p>
                <span>Resort Trip</span>
              </p>
            </div>
          </div>
          <div class="col-sm-4 p-0">
            <div class="logic-fun-time">
              <img
                alt="Environmental Cause Activity - Logicspice"
                src="/img/ourteam/out4.png"
              />
              <p>
                <span>Environmental Cause Activity</span>
              </p>
            </div>
          </div>
          <div class="col-sm-4 p-0">
            <div class="logic-fun-time">
              <img
                alt="Diwali Celebration - Logicspice"
                src="/img/ourteam/out5.png"
              />
              <p>
                <span>Diwali Celebration</span>
              </p>
            </div>
          </div>
          <div class="col-sm-4 p-0">
            <div class="logic-fun-time">
              <img
                alt="Outdoor Activities - Logicspice"
                src="/img/ourteam/out6.png"
              />
              <p>
                <span>Outdoor Activities</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default page;