// "use client";
// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Link from "next/link";
// import Image from "next/image";

// const Customizeweb = () => {
//   const [activeTab, setActiveTab] = useState("AboutUs");

//   const handleTabClick = (tabName) => {
//     console.log(tabName);
//     console.log("hi");
//     setActiveTab(tabName);
//   };

//   return (
//     <>
//       <div>
//         <ul className="nav nav-tabs" role="tablist">
//           <li
//             role="presentation"
//             className={activeTab === "AboutUs" ? "active" : ""}
//           >
//             <a onClick={() => handleTabClick("AboutUs")}>
//               <span>About Us</span>
//             </a>
//             <p onClick={() => handleTabClick("AboutUs")}>About</p>
//           </li>
//           <li
//             role="presentation"
//             className={activeTab === "OurProcess" ? "active" : ""}
//           >
//             <a onClick={() => handleTabClick("OurProcess")}>
//               <span>Our Process</span>
//             </a>
//           </li>
//           <li
//             role="presentation"
//             className={activeTab === "Testimonials" ? "active" : ""}
//           >
//             <a onClick={() => handleTabClick("Testimonials")}>
//               <span>Testimonials</span>
//             </a>
//           </li>
//           <li
//             role="presentation"
//             className={activeTab === "WhyLogicspice" ? "active" : ""}
//           >
//             <a onClick={() => handleTabClick("WhyLogicspice")}>
//               <span>Why Logicspice</span>
//             </a>
//           </li>
//         </ul>
//         <div className="tab-content">
//           {activeTab === "AboutUs" && (
//             <div role="tabpanel" className="tab-pane" id="about-cw">
//               <div className="tab-cw-content">
//                 <div className="row">
//                   <div className="col-sm-6">
//                     <h3>Providing a feasible and cost effective solution</h3>
//                     <p>
//                       At Logicspice, we believe in providing a feasible and cost
//                       effective solution to match with a fast pace world. We do
//                       web development and
//                       <a
//                         className="inline-link"
//                         href="/mobile-app-development/"
//                         target="_blank"
//                       >
//                         mobile app development
//                       </a>
//                       (iPhone and Android) based on tried-and-tested subsystems.
//                       In addition to our expertise in mobile and web
//                       development, we stand as a leading Laravel development
//                       company. Our dedicated
//                       <a
//                         className="inline-link"
//                         href="/laravel-development"
//                         target="_blank"
//                       >
//                         Laravel app development services
//                       </a>{" "}
//                       offer cutting-edge solutions to enhance your web
//                       applications. Our expertise extends to crafting hybrid
//                       mobile app development &amp; custom web app development
//                       services that elevate user experiences, ensuring robust
//                       and scalable solutions that meet the demands of the modern
//                       digital landscape.
//                     </p>
//                     <p>
//                       Logicspice has been in the business for over 18 years. To
//                       know more about us: who we are, what we do, how we work,
//                       our corporate culture and values.
//                     </p>
//                     <a
//                       href="/company/about-us"
//                       className="btn btn-primary tab-btn"
//                     >
//                       Read More
//                     </a>
//                   </div>
//                   <div className="col-sm-6">
//                     <div className="dev-custom">
//                       <Image
//                         src="/img/home/customdev/dev-custom.png"
//                         alt="about"
//                         width={500}
//                         height={300}
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}
//           {activeTab === "OurProcess" && (
//             <div role="tabpanel" className="tab-pane" id="process-cw">
//               {/* <div className="tabs_content_sec_content full_bx_shet">
//                 <div className="process_sect">
//                   <div className="process_border">&nbsp;</div>
//                   <ul>
//                     <li>
//                       <div className="icon_process">
//                         <Image
//                           src="/img/bannerpage/choose-plan-icon.png"
//                           alt="choose Plan"
//                           width={50}
//                           height={50}
//                         />
//                       </div>
//                       <div className="titiie">
//                         CHOOSE <b>Plan</b>
//                       </div>
//                       <div className="value_process">
//                         <p>
//                           To do great things it requires great plans and our
//                           team plans in a way that complies your priorities
//                           along with your desired requirements.
//                         </p>
//                       </div>
//                     </li>
//                     <li>
//                       <div className="icon_process">
//                         <Image
//                           src="/img/images/select-design-icon.png"
//                           alt="SELECT DESIGN"
//                           width={50}
//                           height={50}
//                         />
//                       </div>
//                       <div className="titiie">
//                         SELECT <b>DESIGN</b>
//                       </div>
//                       <div className="value_process">
//                         <p>
//                           To capture attraction of your customers our team
//                           throws in all the efforts to give you an elegant
//                           design that your customers will fall in love with.
//                         </p>
//                       </div>
//                     </li>
//                     <li>
//                       <div className="icon_process">
//                         <Image
//                           src="/img/images/choose-develop-icon.png"
//                           alt="choose DEVELOP"
//                           width={50}
//                           height={50}
//                         />
//                       </div>
//                       <div className="titiie">
//                         CHOOSE <b>DEVELOP</b>
//                       </div>
//                       <div className="value_process">
//                         <p>
//                           Our team develops what is required not what is
//                           compensable and that makes our services efficient
//                           enough to achieve your business goals.
//                         </p>
//                       </div>
//                     </li>
//                     <li>
//                       <div className="icon_process">
//                         <Image
//                           src="/img/images/choose-launch-icon.png"
//                           alt="choose LAUNCH"
//                           width={50}
//                           height={50}
//                         />
//                       </div>
//                       <div className="titiie">
//                         CHOOSE <b>LAUNCH</b>
//                       </div>
//                       <div className="value_process">
//                         <p>
//                           A proper plan to launch is the key and our team
//                           consider all the factors and testing before the
//                           launch of product to make a solid impact on the
//                           audience.
//                         </p>
//                       </div>
//                     </li>
//                     <li>
//                       <div className="icon_process">
//                         <Image
//                           src="/img/images/customer-support-img.png"
//                           alt="Support"
//                           width={50}
//                           height={50}
//                         />
//                       </div>
//                       <div className="titiie">
//                         24*7 <b>Support</b>
//                       </div>
//                       <div className="value_process">
//                         <p>
//                           Our experienced &amp; proactive technical team is
//                           always there to provide support &amp; maintenance
//                           services with practical approach.
//                         </p>
//                       </div>
//                     </li>
//                   </ul>
//                 </div>
//               </div> */}
//               <div class="tabs_content_sec_content full_bx_shet">
//                 <div class="process_sect">
//                   <div class="process_border">&nbsp;</div>
//                   <ul>
//                     <li>
//                       <div class="icon_process">
//                         <img
//                           src="https://www.logicspice.com/img/images/choose-plan-icon.png"
//                           alt="choose Plan"
//                         />
//                       </div>
//                       <div class="titiie">
//                         CHOOSE <b>Plan</b>
//                       </div>
//                       <div class="value_process">
//                         <p>
//                           To do great things it requires great plans and our
//                           team plans in a way that complies your priorities
//                           along with your desired requirements.
//                         </p>
//                       </div>
//                     </li>
//                     <li>
//                       <div class="icon_process">
//                         <img
//                           src="https://www.logicspice.com/img/images/select-design-icon.png"
//                           alt="SELECT DESIGN"
//                         />
//                       </div>
//                       <div class="titiie">
//                         SELECT <b>DESIGN</b>
//                       </div>
//                       <div class="value_process">
//                         <p>
//                           To capture attraction of your customers our team
//                           throws in all the efforts to give you an elegant
//                           design that your customers will fall in love with.
//                         </p>
//                       </div>
//                     </li>
//                     <li>
//                       <div class="icon_process">
//                         <img
//                           src="https://www.logicspice.com/img/images/choose-develop-icon.png"
//                           alt="choose DEVELOP"
//                         />
//                       </div>
//                       <div class="titiie">
//                         CHOOSE <b>DEVELOP</b>
//                       </div>
//                       <div class="value_process">
//                         <p>
//                           Our team develops what is required not what is
//                           compensable and that makes our services efficient
//                           enough to achieve your business goals.
//                         </p>
//                       </div>
//                     </li>
//                     <li>
//                       <div class="icon_process">
//                         <img
//                           src="https://www.logicspice.com/img/images/choose-launch-icon.png"
//                           alt="choose LAUNCH"
//                         />
//                       </div>
//                       <div class="titiie">
//                         CHOOSE <b>LAUNCH</b>
//                       </div>
//                       <div class="value_process">
//                         <p>
//                           A proper plan to launch is the key and our team
//                           consider all the factors and testing before the launch
//                           of product to make a solid impact on the audience.
//                         </p>
//                       </div>
//                     </li>
//                     <li>
//                       <div class="icon_process">
//                         <img
//                           src="https://www.logicspice.com/img/images/customer-support-img.png"
//                           alt="Support"
//                         />
//                       </div>
//                       <div class="titiie">
//                         24*7 <b>Support</b>
//                       </div>
//                       <div class="value_process">
//                         <p>
//                           Our experienced &amp; proactive technical team is
//                           always there to provide support &amp; maintenance
//                           services with practical approach.
//                         </p>
//                       </div>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           )}
//           {activeTab === "Testimonials" && (
//             <div role="tabpanel" className="tab-pane" id="testimonial-cw">
//               <div>
//                 <ul
//                   className="owl-carousel owl-loaded owl-drag owl-hidden"
//                   id="testiCW"
//                 >
//                   <li>
//                     <div className="testimonial_row_inner">
//                       <div className="testimonial_row_cover home_testi">
//                         <div className="cilent_img">
//                           <Image
//                             src="/img/images/sabdeen.jpg"
//                             alt="Client"
//                             width={100}
//                             height={100}
//                           />
//                         </div>
//                         <div className="testimonial_sectks_cont">
//                           <span className="titleoftestimthis">
//                             Build a Website
//                           </span>
//                           <p>
//                             "Best project management experience/journey I had.
//                             Great team spirit, very flexible and understanding
//                             while maintaining time
//                             <span className="hidendata">
//                               and budget target.Top tear professional
//                               communication and support."
//                             </span>
//                           </p>
//                           <span className="author_name">
//                             <span></span>
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                   </li>
//                   <li>
//                     <div className="testimonial_row_inner">
//                       <div className="testimonial_row_cover home_testi">
//                         <div className="cilent_img">
//                           <Image
//                             src="/img/images/beatbuehlmann.jpg"
//                             alt="Client"
//                             width={100}
//                             height={100}
//                           />
//                         </div>
//                         <div className="testimonial_sectks_cont">
//                           <span className="titleoftestimthis">
//                             Financial Web Application For Pensioners
//                           </span>
//                           <p>
//                             "Excellent work again from logicspice! They
//                             definitely put their best effort into the project
//                             along with very valuable inputs regarding possible
//                             <span className="hidendata">
//                               solutions and best practice. We had a great time
//                               working together and hope to do so in the future."
//                             </span>
//                           </p>
//                           <span className="author_name">
//                             <span></span>
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                   </li>
//                   <li>
//                     <div className="testimonial_row_inner">
//                       <div className="testimonial_row_cover home_testi">
//                         <div className="cilent_img">
//                           <Image
//                             src="/img/images/testimonial-client5.png"
//                             alt="Client"
//                             width={100}
//                             height={100}
//                           />
//                         </div>
//                         <div className="testimonial_sectks_cont">
//                           <span className="titleoftestimthis">HR Partner</span>
//                           <p>
//                             "Very happy with the work! The team is amazing,
//                             creative, helpful and proactive. They provide great
//                             ideas and fast solutions.
//                             <span className="hidendata">
//                               We are looking forward to working with Logicspice
//                               again."
//                             </span>
//                           </p>
//                           <span className="author_name">
//                             <span></span>
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                   </li>
//                   <li>
//                     <div className="testimonial_row_inner">
//                       <div className="testimonial_row_cover home_testi">
//                         <div className="cilent_img">
//                           <Image
//                             src="/img/images/beatbuehlmann.jpg"
//                             alt="Client"
//                             width={100}
//                             height={100}
//                           />
//                         </div>
//                         <div className="testimonial_sectks_cont">
//                           <span className="titleoftestimthis">
//                             Financial Web Application For Pensioners
//                           </span>
//                           <p>
//                             "Excellent work again from logicspice! They
//                             definitely put their best effort into the project
//                             along with very valuable inputs regarding possible
//                             solutions and best practice. We had a great time
//                             working together and hope to do so in the future."
//                           </p>
//                           <span className="author_name">
//                             <span></span>
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                   </li>
//                   <li>
//                     <div className="testimonial_row_inner">
//                       <div className="testimonial_row_cover home_testi">
//                         <div className="cilent_img">
//                           <Image
//                             src="/img/images/testimonial-client5.png"
//                             alt="Client"
//                             width={100}
//                             height={100}
//                           />
//                         </div>
//                         <div className="testimonial_sectks_cont">
//                           <span className="titleoftestimthis">HR Partner</span>
//                           <p>
//                             "Very happy with the work! The team is amazing,
//                             creative, helpful and proactive. They provide great
//                             ideas and fast solutions. We are looking forward to
//                             working with Logicspice again."
//                           </p>
//                           <span className="author_name">
//                             <span></span>
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           )}
//           {activeTab === "WhyLogicspice" && (
//             <div role="tabpanel" className="tab-pane" id="about-cw">
//               <div className="tab-cw-content">
//                 <div className="row">
//                   <div className="col-sm-6">
//                     <h3>Providing a feasible and cost effective solution</h3>
//                     <p>
//                       At Logicspice, we believe in providing a feasible and cost
//                       effective solution to match with a fast pace world. We do
//                       web development and
//                       <a
//                         className="inline-link"
//                         href="/mobile-app-development/"
//                         target="_blank"
//                       >
//                         mobile app development
//                       </a>
//                       (iPhone and Android) based on tried-and-tested subsystems.
//                       In addition to our expertise in mobile and web
//                       development, we stand as a leading Laravel development
//                       company. Our dedicated
//                       <a
//                         className="inline-link"
//                         href="/laravel-development"
//                         target="_blank"
//                       >
//                         Laravel app development services
//                       </a>{" "}
//                       offer cutting-edge solutions to enhance your web
//                       applications. Our expertise extends to crafting hybrid
//                       mobile app development &amp; custom web app development
//                       services that elevate user experiences, ensuring robust
//                       and scalable solutions that meet the demands of the modern
//                       digital landscape.
//                     </p>
//                     <p>
//                       Logicspice has been in the business for over 18 years. To
//                       know more about us: who we are, what we do, how we work,
//                       our corporate culture and values.
//                     </p>
//                     <a
//                       href="/company/about-us"
//                       className="btn btn-primary tab-btn"
//                     >
//                       Read More
//                     </a>
//                   </div>
//                   <div className="col-sm-6">
//                     <div className="dev-custom">
//                       <Image
//                         src="/img/images/dev-custom.png"
//                         alt="about"
//                         width={500}
//                         height={300}
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Customizeweb;


"use client";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import Image from "next/image";

const Customizeweb = () => {
  const [activeTab, setActiveTab] = useState("AboutUs");

  const handleTabClick = (tabName) => {
    console.log("handleTabClick")
    setActiveTab(tabName);
  };

  return (
    <>
    
        <ul className="nav nav-tabs" role="tablist">
          <li
            role="presentation"
            className={activeTab === "AboutUs" ? "active" : ""}
          >
            <a onClick={() => handleTabClick("AboutUs")}>
              <span>About Us</span>
            </a>
          </li>
          <li
            role="presentation"
            className={activeTab === "OurProcess" ? "active" : ""}
          >
            <a onClick={() => handleTabClick("OurProcess")}>
              <span>Our Process</span>
            </a>
          </li>
          <li
            role="presentation"
            className={activeTab === "Testimonials" ? "active" : ""}
          >
            <a onClick={() => handleTabClick("Testimonials")}>
              <span>Testimonials</span>
            </a>
          </li>
          <li
            role="presentation"
            className={activeTab === "WhyLogicspice" ? "active" : ""}
          >
            <a onClick={() => handleTabClick("WhyLogicspice")}>
              <span>Why Logicspice</span>
            </a>
          </li>
        </ul>
        <div className="tab-content">
          {activeTab === "AboutUs" && (
            <div role="tabpanel" className="tab-pane active" id="about-cw">
              <div className="tab-cw-content">
                <div className="row">
                  <div className="col-sm-6">
                    <h3>Providing a feasible and cost effective solution</h3>
                    <p>
                      At Logicspice, we believe in providing a feasible and cost
                      effective solution to match with a fast pace world. We do
                      web development and
                      <Link
                        className="inline-link"
                        href="/mobile-app-development/"
                        target="_blank"
                      >
                        mobile app development
                      </Link>
                      (iPhone and Android) based on tried-and-tested subsystems.
                      In addition to our expertise in mobile and web
                      development, we stand as a leading Laravel development
                      company. Our dedicated
                      <Link
                        className="inline-link"
                        href="/laravel-development"
                        target="_blank"
                      >
                        Laravel app development services
                      </Link>{" "}
                      offer cutting-edge solutions to enhance your web
                      applications. Our expertise extends to crafting hybrid
                      mobile app development &amp; custom web app development
                      services that elevate user experiences, ensuring robust
                      and scalable solutions that meet the demands of the modern
                      digital landscape.
                    </p>
                    <p>
                      Logicspice has been in the business for over 18 years. To
                      know more about us: who we are, what we do, how we work,
                      our corporate culture and values.
                    </p>
                    <Link href="/company/about-us">
                      <button className="btn btn-primary tab-btn">Read More</button>
                    </Link>
                  </div>
                  <div className="col-sm-6">
                    <div className="dev-custom">
                      <Image
                        src="/img/home/customdev/dev-custom.png"
                        alt="about"
                        width={500}
                        height={300}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeTab === "OurProcess" && (
            <div role="tabpanel" className="tab-pane active" id="process-cw">
              <div className="tabs_content_sec_content full_bx_shet">
                <div className="process_sect">
                  <div className="process_border">&nbsp;</div>
                  <ul>
                    <li>
                      <div className="icon_process">
                        <Image
                          src="/img/bannerpage/choose-plan-icon.png"
                          alt="choose Plan"
                          width={50}
                          height={50}
                        />
                      </div>
                      <div className="titiie">
                        CHOOSE <b>Plan</b>
                      </div>
                      <div className="value_process">
                        <p>
                          To do great things it requires great plans and our
                          team plans in a way that complies your priorities
                          along with your desired requirements.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon_process">
                        <Image
                          src="/img/images/select-design-icon.png"
                          alt="SELECT DESIGN"
                          width={50}
                          height={50}
                        />
                      </div>
                      <div className="titiie">
                        SELECT <b>DESIGN</b>
                      </div>
                      <div className="value_process">
                        <p>
                          To capture attraction of your customers our team
                          throws in all the efforts to give you an elegant
                          design that your customers will fall in love with.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon_process">
                        <Image
                          src="/img/images/choose-develop-icon.png"
                          alt="choose DEVELOP"
                          width={50}
                          height={50}
                        />
                      </div>
                      <div className="titiie">
                        CHOOSE <b>DEVELOP</b>
                      </div>
                      <div className="value_process">
                        <p>
                          Our team develops what is required not what is
                          compensable and that makes our services efficient
                          enough to achieve your business goals.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon_process">
                        <Image
                          src="/img/images/choose-launch-icon.png"
                          alt="choose LAUNCH"
                          width={50}
                          height={50}
                        />
                      </div>
                      <div className="titiie">
                        CHOOSE <b>LAUNCH</b>
                      </div>
                      <div className="value_process">
                        <p>
                          A proper plan to launch is the key and our team
                          consider all the factors and testing before the
                          launch of product to make a solid impact on the
                          audience.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon_process">
                        <Image
                          src="/img/images/customer-support-img.png"
                          alt="Support"
                          width={50}
                          height={50}
                        />
                      </div>
                      <div className="titiie">
                        24*7 <b>Support</b>
                      </div>
                      <div className="value_process">
                        <p>
                          Our experienced &amp; proactive technical team is
                          always there to provide support &amp; maintenance
                          services with practical approach.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
          {activeTab === "Testimonials" && (
            <div role="tabpanel" className="tab-pane active" id="testimonial-cw">
              <div>
                <ul
                  className="owl-carousel owl-loaded owl-drag owl-hidden"
                  id="testiCW"
                >
                  <li>
                    <div className="testimonial_row_inner">
                      <div className="testimonial_row_cover home_testi">
                        <div className="cilent_img">
                          <Image
                            src="/img/images/sabdeen.jpg"
                            alt="Client"
                            width={100}
                            height={100}
                          />
                        </div>
                        <div className="testimonial_sectks_cont">
                          <span className="titleoftestimthis">
                            Build a Website
                          </span>
                          <p>
                            "Best project management experience/journey I had.
                            Great team spirit, very flexible and understanding
                            while maintaining time and budget target. Top tier
                            professional communication and support."
                          </p>
                          <span className="author_name">
                            <span></span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="testimonial_row_inner">
                      <div className="testimonial_row_cover home_testi">
                        <div className="cilent_img">
                          <Image
                            src="/img/images/beatbuehlmann.jpg"
                            alt="Client"
                            width={100}
                            height={100}
                          />
                        </div>
                        <div className="testimonial_sectks_cont">
                          <span className="titleoftestimthis">
                            RTF to Image Converter
                          </span>
                          <p>
                            "Very professional and helpful team. Excellent
                            skills and quick implementation. Understands and
                            solves customer requirements effectively. I can
                            recommend this team without any hesitation. Great
                            job. Thank you."
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
            </div>
          )}
          {activeTab === "WhyLogicspice" && (
            <div role="tabpanel" className="tab-pane active" id="logicspice-cw">
              <div className="tab-cw-content">
                <div className="row">
                  <div className="col-sm-12">
                    <p>
                      Our technical team consists of well-qualified and
                      experienced software professionals with a customer driven
                      attitude. Our team of experienced professionals bring
                      innovation, creativity, and enthusiasm to every project.
                      We stay ahead of the curve by adopting the latest
                      technologies and following industry best practices.
                      Whether it's developing a groundbreaking mobile
                      application, creating an e-commerce platform, or
                      providing reliable IT support, we are dedicated to
                      excellence.
                    </p>
                    <p>
                      <strong>Skilled Professionals:</strong> Our technical
                      team consists of well-qualified and experienced software
                      professionals with a customer-driven attitude. We
                      leverage their knowledge and skills to deliver
                      high-quality, scalable solutions.
                    </p>
                    <p>
                      <strong>Innovation and Creativity:</strong> Our team of
                      experienced professionals bring innovation, creativity,
                      and enthusiasm to every project. We stay ahead of the
                      curve by adopting the latest technologies and following
                      industry best practices.
                    </p>
                    <p>
                      <strong>Client-Centric Approach:</strong> Whether it's
                      developing a groundbreaking mobile application, creating
                      an e-commerce platform, or providing reliable IT support,
                      we are dedicated to excellence. Your success is our
                      success, and we work tirelessly to exceed your
                      expectations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      
    </>
  );
};

export default Customizeweb;

