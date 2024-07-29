


"use client";
import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Customizeweb = () => {
  const [loadImage, setLoadImage] = useState(true);
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
  };

  return (
    <Tabs className="">
      <TabList>
        <Tab>
          <span>About Us</span>
        </Tab>
        <Tab>
          <span>Our Process</span>
        </Tab>
        <Tab>
          <span>Testimonials</span>
        </Tab>
        <Tab>
          <span>Why Logicspice</span>
        </Tab>
      </TabList>

      <TabPanel>
        <div className="tab-cw-content">
          <div className="row">
            <div className="col-sm-6">
              <h3>Providing a feasible and cost effective solution</h3>
              <p>
                At Logicspice, we believe in providing a feasible and cost effective solution to match with a fast pace world. Our team have specialized experts who work well in close coordination to meet the technological and quality standards. We do web development and
                <a className="inline-link" href="https://www.logicspice.com/mobile-app-development/">
                  {" "}mobile app development{" "}
                </a>
                (iPhone and Android) based on tried-and-tested subsystems that work with any business class for any complex bespoke or customized software development.
              </p>
              <p>
                Logicspice has been in the business since 10+ years. To know more about us: who we are, what we do, how we work, our corporate culture and values.
              </p>
              <a href="https://www.logicspice.com/company/about-us" className="btn btn-primary tab-btn">
                Read More
              </a>
            </div>
            <div className="col-sm-6">
              <div className="dev-custom">
                {loadImage && (
                  <img src="https://www.logicspice.com/img/images/dev-custom.png" alt="about" />
                )}
              </div>
            </div>
          </div>
        </div>
      </TabPanel>

      <TabPanel>
        <div className="tabs_content_sec_content full_bx_shet">
          <div className="process_sect">
            <div className="process_border"></div>
            <ul>
              <li>
                <div className="icon_process">
                  {loadImage && (
                    <img src="/img/choose-plan-icon.png" alt="choose Plan" />
                  )}
                </div>
                <div className="titiie">
                  CHOOSE <b>Plan</b>
                </div>
                <div className="value_process">
                  <p>
                    To do great things it requires great plans and our team plans in a way that complies your priorities along with your desired requirements.
                  </p>
                </div>
              </li>
              <li>
                <div className="icon_process">
                  {loadImage && (
                    <img src="/img/select-design-icon.png" alt="SELECT DESIGN" />
                  )}
                </div>
                <div className="titiie">
                  SELECT <b>DESIGN</b>
                </div>
                <div className="value_process">
                  <p>
                    To capture attraction of your customers our team throws in all the efforts to give you an elegant design that your customers will fall in love with.
                  </p>
                </div>
              </li>
              <li>
                <div className="icon_process">
                  {loadImage && (
                    <img src="/img/choose-develop-icon.png" alt="choose DEVELOP" />
                  )}
                </div>
                <div className="titiie">
                  CHOOSE <b>DEVELOP</b>
                </div>
                <div className="value_process">
                  <p>
                    Our team develops what is required not what is compensable and that makes our services efficient enough to achieve your business goals.
                  </p>
                </div>
              </li>
              <li>
                <div className="icon_process">
                  {loadImage && (
                    <img src="/img/choose-launch-icon.png" alt="choose LAUNCH" />
                  )}
                </div>
                <div className="titiie">
                  CHOOSE <b>LAUNCH</b>
                </div>
                <div className="value_process">
                  <p>
                    A proper plan to launch is the key and our team consider all the factors and testing before the launch of product to make a solid impact on the audience.
                  </p>
                </div>
              </li>
              <li>
                <div className="icon_process">
                  {loadImage && (
                    <img src="/img/customer-support-img.png" alt="Support" />
                  )}
                </div>
                <div className="titiie">
                  24*7 <b>Support</b>
                </div>
                <div className="value_process">
                  <p>
                    Our experienced & proactive technical team is always there to provide support & maintenance services with practical approach.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </TabPanel>

      <TabPanel>
      <Slider {...settings}>
          <div>
            <ul>
              <li>
                <div className="testimonial_row_inner">
                  <div className="testimonial_row_cover home_testi">
                    <div className="cilent_img">
                      {loadImage && (
                        <img
                          src="/img/home/customdev/kesepara.jpg"
                          alt="Client"
                        />
                      )}
                    </div>
                    <div className="testimonial_sectks_cont">
                      <span className="titleoftestimthis">
                        C2C Ecommerce Website About Fashion
                      </span>
                      <p>
                        "Exactly the best team available online ! I have been
                        working and communicating with a few companies over the
                        internet and i didn't see a single better
                        <a className="second_show new_csx_shw">[...]</a>
                        <span className="hidendata" style={{ display: "none" }}>
                          company than logicspice. They are so skilled and
                          professional. Their knowledge about coding is
                          incredible. And they never say "no" or "we can't" to
                          any situation. Actually they are the best guys i have
                          ever work with in my life. Their communication,
                          kindness are so high level. Every step of my project,
                          every progress of my project we need maybe 15 to 20
                          changes. And every time i wrote those needs to them,
                          they did their work at most 1-2 days. Their speed and
                          work quality is amazing ! Final word to those who
                          wants to hire them: don't think twice ! Literally they
                          are the best team in this website. And also their work
                          progress and milestones are literally clear as they
                          said. I am advising them to all of my friends and i
                          will hire them again for sure !"
                        </span>
                      </p>
                      <span className="author_name">
                        <span></span>
                      </span>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <div className="testimonial_row_inner">
                  <div className="testimonial_row_cover home_testi">
                    <div className="cilent_img">
                      {loadImage && (
                        <img
                          src="/img/home/customdev/dsherevk.jpg"
                          alt="Client"
                        />
                      )}
                    </div>
                    <div className="testimonial_sectks_cont">
                      <span className="titleoftestimthis">
                        Website + Mobile App (iOs&Android)
                      </span>
                      <p>
                        "Manish was very cooperative and professional during the
                        project. The team was great, the project was very
                        complicated and they tried
                        <a
                          style={{ cursor: "pointer", color: "#fff" }}
                          className="second_show"
                        >
                          [...]
                        </a>
                        <span className="hidendata" style={{ display: "none" }}>
                          their best to complete it with the best diligence. I
                          will definitely contact this company in the future for
                          my project updates and would recommend to anyone who
                          is looking for a good quality work."
                        </span>
                      </p>
                      <span className="author_name">
                        <span></span>
                      </span>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <div className="testimonial_row_inner">
                  <div className="testimonial_row_cover home_testi">
                    <div className="cilent_img">
                      {loadImage && (
                        <img
                          src="/img/home/customdev/sabdeen.jpg"
                          alt="Client"
                        />
                      )}
                    </div>
                    <div className="testimonial_sectks_cont">
                      <span className="titleoftestimthis">Build a Website</span>
                      <p>
                        "Best project management experience/journey I had. Great
                        team spirit, very flexible and understanding while
                        maintaining time
                        <a
                          style={{ cursor: "pointer", color: "#fff" }}
                          className="second_show"
                        >
                          [...]
                        </a>
                        <span className="hidendata" style={{ display: "none" }}>
                          and budget target.Top tear professional communication
                          and support."
                        </span>
                      </p>
                      <span className="author_name">
                        <span></span>
                      </span>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <div className="testimonial_row_inner">
                  <div className="testimonial_row_cover home_testi">
                    <div className="cilent_img">
                      {loadImage && (
                        <img
                          src="/img/home/customdev/beatbuehlmann.jpg"
                          alt="Client"
                        />
                      )}
                    </div>
                    <div className="testimonial_sectks_cont">
                      <span className="titleoftestimthis">
                        Financial Web Application For Pensioners
                      </span>
                      <p>
                        "Excellent work again from logicspice! They definitely
                        put their best effort into the project along with very
                        valuable inputs regarding possible
                        <a
                          style={{ cursor: "pointer", color: "#fff" }}
                          className="second_show"
                        >
                          [...]
                        </a>
                        <span className="hidendata" style={{ display: "none" }}>
                          enhancements of the web project. With logicspice you
                          don't just hire someone to execute your project
                          specification but much more someone who helps you
                          really make good and sophisticated web project. The
                          communication is greate and feedback time very short.
                          I really can't find anything to criticise and will
                          definitely rehire soon as I'm very happy with their
                          work. Thanks a lot to Manish and his team!"
                        </span>
                      </p>
                      <span className="author_name">
                        <span></span>
                      </span>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </Slider>
      </TabPanel>

      <TabPanel>
        <div className="tab-cw-content">
          <div className="row">
            <div className="col-sm-12">
              <h3>Enhance The Chances Of Getting The Best Website</h3>
              <p>
                The knowledge of modern technology is as important as you know what your customer wants, Our custom web development services increase the chances of achieving the best website as per your demand. Our service features are the key factor which distinguishes us from other competitors.
              </p>
            </div>
          </div>
        </div>
      </TabPanel>
    </Tabs>
  );
};

export default Customizeweb;

