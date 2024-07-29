"use client";
import React, { useState } from "react";
import Footer from "@/app/Components/Footer";
import NavBar from "@/app/Components/Navbar";
import "@/app/services/services.css";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import Image from "next/image";
import Link from "next/link";
import "@fortawesome/fontawesome-free/css/all.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Enquirymodal from "@/app/Components/Enquirymodal";
import Contactusmodel from "@/app/Components/Contactusmodel";
import "../../resposive.css";
const Page = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const [saascmsTab, setSaascmsTab] = useState(true);
  const [saascrmTab, setSaascrmTab] = useState(false);
  const [customecommerceTab, setCustomecommerceTab] = useState(false);

  const openModal = () => {
    console.log(showModal);

    setShowModal(!showModal);
  };

  const handleSaascmsTab = () => {
    setSaascmsTab(true);
    setSaascrmTab(false);
    setCustomecommerceTab(false);
  };
  const handleSaascrmTab = () => {
    setSaascmsTab(false);
    setSaascrmTab(true);
    setCustomecommerceTab(false);
  };
  const handleCustomecommerceTab = () => {
    setSaascmsTab(false);
    setSaascrmTab(false);
    setCustomecommerceTab(true);
  };


  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <NavBar />
      <section class="yellow_slider web-cloning_slider">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="slidere-tittle">
                        <h1>Tailor Made Website Cloning Service</h1>
                        <p>Logicspice offers website cloning services focusing on helping with low cost readymade solutions in various fields respectively.</p>
    					<h3>About Our Services</h3>
                        <p>
                           We are offering website cloning services with a different and uniquely creative approach for our clients.
                        </p>
    					<p>We at Logicspice understand the expectations you have with the services and to respect your choice, we guarantee best quality website clone 
    					development from a team of highly experienced and qualified professionals. Our experts understand the requirements you have along with the required 
    					modification to provide you with a complete guide throughout the process and fulfill the process in a proper manner.</p>
                    </div>
                    <div className="btn btn-primary" onClick={openModal}>
                  <button>Enquire Now</button>
                  {
                    <Enquirymodal
                      modalStatus={showModal}
                      toggle={openModal}
                      title="Website Cloning Service"
                    />
                  }
                </div>
                <Link
                  href="https://api.whatsapp.com/send?phone=+919829559922&text=Hi Logicspice Team, I have a question regarding the solutions you provide. Please Help!"
                  target="_blank"
                >
                  <div class="WhatsappIcon">
                    <div class="coccoc-alo-phone coccoc-alo-green coccoc-alo-show">
                      <div class="coccoc-alo-ph-circle"></div>
                      <div class="coccoc-alo-ph-circle-fill"></div>
                      <div class="coccoc-alo-ph-img-circle"></div>
                    </div>
                  </div>
                </Link>
                </div>
                <div class="col-md-6">
                    <div class="images-section">
                        <img src="/img/websitecloningservice/website-cloning-service.png" alt="website_cloning_service" />
                    </div>
                </div>
            </div>
        </div>
    </section>
      
      
      <section class="resources-banner our-sass">
        <div class="container">
        <h2>Advantages Of Website Cloning Services</h2>
          <div class="resources-bx-top">
            <ul class="resources-tabs">
              <li
                id="tab1_li"
                className={`ddlj ${saascmsTab ? "active" : ""}`}
                onClick={() => handleSaascmsTab()}
              >
                <a>
                  <i>
                    <img
                      src="/img/websitecloningservice/customized-imgs.png"
                      alt="logo"
                    />
                  </i>
                  <span>Customized Designing</span>
                </a>
              </li>
              <li
                id="tab2_li"
                className={`ddlj ${saascrmTab ? "active" : ""}`}
                onClick={() => handleSaascrmTab()}
              >
                <a>
                  <i>
                    <img
                      src="/img/websitecloningservice/engaging-imgs.png"
                      alt="logo"
                    />
                  </i>
                  <span>Engaging</span>
                </a>
              </li>
              <li
                id="tab3_li"
                className={`ddlj ${customecommerceTab ? "active" : ""}`}
                onClick={() => handleCustomecommerceTab()}
              >
                <a>
                  <i>
                    <img
                      src="/img/websitecloningservice/adaptive-imgs.png"
                      alt="logo"
                    />
                  </i>
                  <span>Adaptive</span>
                </a>
              </li>
              
            </ul>

            <div class="tab-content">
              {saascmsTab && (
                <>
                  <div class="costomer_tab rj" id="tab1">
                    <div class="resources-contan">
                    <p>At Logicspice, you are offered custom built scalability, attractive designing that are able to utilise a wide 
                        array of robust features. These features encourage brand new and existing organizations to reward their 
                        consumers to make them come back every time they need the service.</p>
                    </div>
                  </div>
                </>
              )}
              {saascrmTab && (
                <>
                  <div class="costomer_tab rj " id="tab2">
                    <div class="resources-contan">
                    <p>Logicspice aims at building a customer engagement machine for your organizations. We offer customized website 
                        cloning service for your organizations in accordance with your organizational requirements. We make the 
                        customer service more engaging for your website by developing top notch interactive cloning.</p>
                    </div>
                  </div>
                </>
              )}
              {customecommerceTab && (
                <>
                  <div class="costomer_tab rj " id="tab3">
                    <div class="resources-contan">
                    <p>Unlike other available cloning services, Logicspice offers adaptability for every client covering from features 
                        to modified designing as they focus on creating customized clones. These help custom made cloning services 
                        from scratch to illustrate and expand the brand.</p>
                    </div>
                  </div>
                </>
              )}
             
            </div>
          </div>
        </div>
      </section>
      <section class="sasss-middle-section">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="sa_t">
              <p>We offer an effective website cloning service in a way that allows entrepreneurs to imply their thoughts within the 
                process. We do our best with some fresh improvements in basic ideas of solution, through proper research and development.</p>
             <p>The entire process is executed with a technological holistic approach and our ready-made customized cloning services 
                suit the specific requirements in accordance with your organization. The website cloning service draws attention from 
                your targeted audiences while reflecting a strong organisational competency.</p>
                        <p>We help create your brand identity and make sure your visitors get the best user experience of the brand. 
                            Our experts collaborate throughout the development process to ensure whether you are receiving expected 
                            design and functionality from the process. The time you let us handle the entire technical part covering 
                            web and mobile app development, we ensure perfection on every step we execute.</p>
                    <p>Logicspice offers bespoke website cloning services in order to let our customers experience the rapid growth 
                        of the online platforms.</p>
              </div>
            </div>

            <div class="col-md-6"></div>
          </div>
          <div class="img_saaa">
            <img
              src="/img/saassoftwaredevelopment/saaa_img.png"
              alt="saaa_img"
            />
          </div>
        </div>
      </section>

      <section class="new-why-choose-section sass_title">
        <div class="container">
            <h2>Reasons To Choose Logicspice <span>For Website Cloning Services</span></h2>
    		<p class="new-choice-text">Logicspice offers high quality website cloning services & development using updated technology. We create websites using upgraded technologies and latest coding practices. We use a wide range of php frameworks. Like CodeIgniter, Zend, Laravel, Cake PHP, Custom PHP, WordPress are on our list of coding languages for website cloning service development.</p>
            <div class="row">
            <div class="col-sm-6 col-md-6 aos-init aos-animate" data-aos="fade-right">
                <div class="new_libraries">
                    <i><img src="/img/websitecloningservice/responsiveness-imgs.png" alt="Web development" /></i>
                    <div class="new-libra-bx">
                        <h3>Responsiveness</h3>
                        <p>Responsive website is one of the most common things for nowadays and our team of qualified experts provide effective alluring design with mobile friendly design and development process.</p>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-md-6">
                <div class="new_libraries aos-init aos-animate" data-aos="fade-left">
                    <i><img src="/img/websitecloningservice/seo-friendly-imgs.png" alt="Web development" /></i>
                    <div class="new-libra-bx">
                        <h3>SEO Friendly</h3>
                        <p>Every solution we offer from our custom designed website, mobile app development to website cloning services are tailor made. All 
    					the services are SEO friendly in order to make a good presence of the application over the internet.</p>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-md-6">
                <div class="new_libraries aos-init aos-animate" data-aos="fade-right">
                    <i><img src="/img/websitecloningservice/documentation-imgs.png" alt="Web development" /></i>
                    <div class="new-libra-bx">
                        <h3>Documentation</h3>
                        <p>Logicspice offers all the documentations including user manual, product guidelines, online help documents for software documentation services.
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-md-6">
                <div class="new_libraries aos-init aos-animate" data-aos="fade-left">
                    <i><img src="/img/websitecloningservice/support-imgs.png" alt="Web development" /></i>
                    <div class="new-libra-bx">
                        <h3>Support</h3>
                        <p>At Logicspice, we understand and value every aspect of our clients. For that reason, we offer a complete service before, during, and after the project delivery.</p>
                    </div>
                </div>
            </div>
            </div>
           
        </div>
    </section>

    <section class="testing-statred-section resources-statred-section">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-12">
              <h2 class="sas12">Enquiry Now</h2>
              <a
                id=""
                data-toggle="modal"
                data-target="#contactFix"
                class="btn btn-primary sas13"
              >
                Get a Free Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="quoue_box_full_sec">
        <div className="whatsapp-call">
          <a
            href="https://api.whatsapp.com/send?phone=+919829559922&amp;text=Hi Logicspice Team, I have a question regarding the solutions you provide. Please Help!"
            target="_blank"
          >
            <img src="/img/images/whatsapp.png" alt="whatsapp-icon" />
          </a>
        </div>
        <div className="quote_pop_plus quote_pop_in" onClick={toggleModal}>
          <Contactusmodel modalStatus={modalOpen} toggle={toggleModal} />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Page;
