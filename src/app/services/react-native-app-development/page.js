"use client";
import React, { useState } from "react";
import Footer from "@/app/Components/Footer";
import NavBar from "@/app/Components/Navbar";
import "@/app/services/services.css";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import Image from "next/image";
import Link from "next/link";
import "@fortawesome/fontawesome-free/css/all.css";
import Enquirymodal from "@/app/Components/Enquirymodal";
import Contactusmodel from "@/app/Components/Contactusmodel";
import "../../resposive.css";
const page = () => {


  const [showModal, setShowModal] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  

  const openModal = () => {
    console.log(showModal);

    setShowModal(!showModal);
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };


  return (
    <>
      <NavBar />
      <section class="ReactNavtiveAppBanner">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-6 col-md-6">
                    <div class="laravel-banner-txt">
                        <h1>React Native App<br /> <span>Development Services</span></h1>
                         <div class="LaravelText">
                            Logicspice provides top-notch and reliable services in React Native application development worldwide, delivering highly functional and feature-packed solutions.
                        </div>
                      
                        <div class="laravel-anquire">
                        <div className="btn btn-primary" onClick={openModal}>
                    <button>Hire Now</button>
                    {
                      <Enquirymodal
                        modalStatus={showModal}
                        toggle={openModal}
                        title="Request To Hire React Native App Developers"
                      /> 
                    }
                  </div>
                  <div className="btn btn-primary" onClick={openModal}>
                    <button>Quick Enquiry</button>
                    {
                      <Enquirymodal
                        modalStatus={showModal}
                        toggle={openModal}
                        title="Request To Hire React Native App Developers"
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
                    </div>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-6">
                    <div class="page_img"><img src="/img/reactnativeappdevelopment/ReactImg.png" alt="React Native App Development Services" /></div>  
                </div>
            </div>
        </div>
    </section>
    <section class="laravel-descriptions ReactNavtive-descriptions">
        <div class="container">
            <div class="row">
                 <div class="col-xs-12 col-sm-6 col-md-6 pull-right">
                    <div class="laravel_img"><img src="/img/reactnativeappdevelopment/react-logo-img.png" alt="React Native App Development Services" /></div>  
                </div>
                <div class="col-sm-6 col-md-6 pull-left">
                    <div class="laravel-descriptions-bx">
                        <h2>React Native Application<br /> Development</h2>
                        <p>React Native is a cross-platform framework designed to meet your organization's technological requirements. It is used to construct the most effective and adaptable applications using a well-structured and widely dispersed code base across multiple platforms. Our team commits to delivering 100% custom React Native Mobile Applications that operate effectively across multiple devices.</p>
                        <p>The React Native <a href="https://www.logicspice.com/mobile-app-development" target="_blank">app development services</a> integrate the latest and most 
                            advanced technological inputs while programming React Native mobile applications. We ensure that our clients get involved in the application development 
                            process. We also maintain a design team that synchronises with our developers to make React Native apps visually appealing and interactive. </p>
                        <p>Such designers and developers work diligently on the application across multiple platforms to give it elegance and fluidity. They construct mobile 
                            applications using JavaScript, JSX, Redux, and other React Native development frameworks. We have provided an extraordinary service to all our clients across 
                            various platforms. As a <strong>React Native app development company</strong>, we construct simplified and authentic applications.</p>
                        
                    </div>
                </div>           
            </div>
        </div>
    </section>
    
    <section class="laravel-devlopments-services ReactNativeServices">
        <div class="container">
            <h2>React Native Application Development Services</h2>
            <div class="laravel-services-bx-top">
                <div class="row">
                    <div class="col-xs-12 col-sm-6 col-md-3">
                        <div class="laravel_service_box ">
                            <div class="laravel-services-icon laravel_service_box1">
                                <i><img class="widout-hover" src="/img/reactnativeappdevelopment/react-new-icon1.png" alt="React Native App Development Services" />
                                    <img class="on-hover" src="/img/reactnativeappdevelopment/react-white-icon1.png" alt="React Native App Development Services" />
                                    <div class="mask"></div></i>
                                
                            </div>
                            <h3>Custom App Development</h3>
                            <p>We build custom React Native apps to meet your business needs and goals, ensuring optimal engagement and user satisfaction.</p>
                        </div>
                    </div>
    
                    <div class="col-xs-12 col-sm-6 col-md-3">
                        <div class="laravel_service_box ">
                            <div class="laravel-services-icon laravel_service_box4">
                                <i><img class="widout-hover" src="/img/reactnativeappdevelopment/react-new-icon2.png" alt="React Native App Development Services" />
                                    <img class="on-hover" src="/img/reactnativeappdevelopment/react-white-icon2.png" alt="React Native App Development Services" />
                                <div class="mask"></div>
                                </i>
                            </div>
                            <h3>Migration Services</h3>
                            <p>We migrate businesses to React Native. Our team ensures a perfect shift that improves performance and scalability without disturbing operations.</p>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-3">
                        <div class="laravel_service_box ">
                            <div class="laravel-services-icon laravel_service_box3">
                                <i><img class="widout-hover" src="/img/reactnativeappdevelopment/react-new-icon3.png" alt="React Native App Development Services" />
                                    <img class="on-hover" src="/img/reactnativeappdevelopment/react-white-icon3.png" alt="React Native App Development Services" />
                                <div class="mask"></div>
                                </i>
                            </div>
                            <h3>UI/UX Design</h3>
                            <p>Our React Native app user <br />interfaces are intuitive, responsive, and visually appealing, improving user engagement and app experience.</p>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-3">
                        <div class="laravel_service_box ">
                            <div class="laravel-services-icon laravel_service_box6">
                                <i>
                                    <img class="widout-hover" src="/img/reactnativeappdevelopment/react-new-icon4.png" alt="React Native App Development Services" />
                                    <img class="on-hover" src="/img/reactnativeappdevelopment/react-white-icon4.png" alt="React Native App Development Services" />
                                <div class="mask"></div>
                                </i>
                            </div>
                            <h3>API Integration</h3>
                            <p>Our staff can integrate <br />third-party APIs into your React Native app. This expands your app's capability, assuring smooth user interactions.</p>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-3">
                        <div class="laravel_service_box ">
                            <div class="laravel-services-icon laravel_service_box5">
                                <i><img class="widout-hover" src="/img/reactnativeappdevelopment/react-new-icon5.png" alt="React Native App Development Services" />
                                    <img class="on-hover" src="/img/reactnativeappdevelopment/react-white-icon5.png" alt="React Native App Development Services" />
                                <div class="mask"></div>
                                </i>
                            </div>
                            <h3>App Testing and QA</h3>
                            <p>We thoroughly evaluate and QA your React Native app. We make sure your app is usable, secure, and fast.</p>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-3">
                        <div class="laravel_service_box ">
                            <div class="laravel-services-icon laravel_service_box2">
                                <i><img class="widout-hover" src="/img/reactnativeappdevelopment/react-new-icon6.png" alt="React Native App Development Services" />
                                    <img class="on-hover" src="/img/reactnativeappdevelopment/react-white-icon6.png" alt="React Native App Development Services" />
                                <div class="mask"></div>
                                </i>
                            </div>
                            <h3>Support and Maintenance</h3>
                            <p>We update, fix bugs, and improve your React Native app to meet changing business and user needs.</p>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-3">
                        <div class="laravel_service_box ">
                            <div class="laravel-services-icon laravel_service_box7">
                                <i><img class="widout-hover" src="/img/reactnativeappdevelopment/react-new-icon7.png" alt="React Native App Development Services" />
                                    <img class="on-hover" src="/img/reactnativeappdevelopment/react-white-icon7.png" alt="React Native App Development Services" />
                                <div class="mask"></div>
                                </i>
                            </div>
                            <h3>Performance Optimization</h3>
                            <p>Our team optimizes React Native apps for speed and responsiveness. We optimize your app across devices and platforms.</p>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-3">
                        <div class="laravel_service_box ">
                            <div class="laravel-services-icon laravel_service_box8">
                                <i><img class="widout-hover" src="/img/reactnativeappdevelopment/react-new-icon8.png" alt="React Native App Development Services" />
                                    <img class="on-hover" src="/img/reactnativeappdevelopment/react-white-icon8.png" alt="React Native App Development Services" />
                                <div class="mask"></div>
                                </i>
                            </div>
                            <h3>Business Applications</h3>
                            <p>Our experts can help you use React Native for your business. We advise from strategy to execution.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <section class="laravel_core_features_section">
        <div class="container">
            <h2>Core Features Of React Native App Development</h2>
            <div class="laravel_core_features_bx">
                <div class="row">
                    <div class="col-sm-6 col-md-6" data-aos="fade-right">
                        <div class="laravel_core_featureBox">
                            <div class="laravel_core_features_img">
                                <img src="/img/reactnativeappdevelopment/core_features_icon1.png" alt="img1" />
                            </div>
                            <div class="laravel_core_features_detail">
                                <h3>Cross-Platform Development</h3>
                                <p>Develop apps for iOS and Android using a single codebase.</p>
                            </div>
                        </div>
                    </div>
    
                    <div class="col-sm-6 col-md-6" data-aos="fade-left">
                        <div class="laravel_core_featureBox">
                            <div class="laravel_core_features_img">
                                <img src="/img/reactnativeappdevelopment/core_features_icon4.png" alt="img4" />
                            </div>
                            <div class="laravel_core_features_detail">
                                <h3>Personalised Applications</h3>
                                <p>The entire application is customisable.</p>
                            </div>
                        </div>
                    </div>
    
                    <div class="col-sm-6 col-md-6" data-aos="fade-right">
                        <div class="laravel_core_featureBox">
                            <div class="laravel_core_features_img">
                                <img src="/img/reactnativeappdevelopment/core_features_icon2.png" alt="img2" />
                            </div>
                            <div class="laravel_core_features_detail">
                                <h3>Performance</h3>
                                <p>Utilize native components for faster and smoother app performance.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-6" data-aos="fade-left">
                        <div class="laravel_core_featureBox">
                            <div class="laravel_core_features_img">
                                <img src="/img/reactnativeappdevelopment/core_features_icon5.png" alt="img5" />
                            </div>
                            <div class="laravel_core_features_detail">
                                <h3>JavaScript Framework</h3>
                                <p>Leverage the popular and versatile JavaScript language for development.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-6" data-aos="fade-right">
                        <div class="laravel_core_featureBox">
                            <div class="laravel_core_features_img">
                                <img src="/img/reactnativeappdevelopment/core_features_icon3.png" alt="img3" />
                            </div>
                            <div class="laravel_core_features_detail">
                                <h3>Reusable Components</h3>
                                <p>Speed up development with reusable and interchangeable UI components.</p>
                            </div>
                        </div>
                    </div>
    
    
                    <div class="col-sm-6 col-md-6" data-aos="fade-left">
                        <div class="laravel_core_featureBox">
                            <div class="laravel_core_features_img">
                                <img src="/img/reactnativeappdevelopment/core_features_icon6.png" alt="img6" />
                            </div>
                            <div class="laravel_core_features_detail">
                                <h3>Diversity of Skill Set Among Developers</h3>
                                <p>Our React Native app developers have adapted themselves to the different platforms and their specific requirements for application development.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <section class="laravel_choose_features_section">
        <div class="container">
            <h2>Benefits Of React Native App Development</h2>
            <div class="laravel_choose_features_bx">
                <div class="row">
                    <div class="col-sm-6 col-md-6" data-aos="fade-right">
                        <div class="libraries_laravel_choose">
                            <div class="laravel_choose_features_img laravel_choose_features_img1">
                                <img src="/img/reactnativeappdevelopment/react-why-icon1.png" alt="img1" />
                            </div>
                            <div class="laravel_choose_details">
                                <h3>Code Reusability</h3>
                                <p>Write once, use everywhere-speed up development by reusing code across platforms.</p>
                            </div>
                        </div>
                    </div>
    
                    <div class="col-sm-6 col-md-6" data-aos="fade-left">
                        <div class="libraries_laravel_choose libraries_laravel_choose-right">
                            <div class="laravel_choose_features_img laravel_choose_features_img2">
                                <img src="/img/reactnativeappdevelopment/react-why-icon2.png" alt="img1" />
                            </div>
                            <div class="laravel_choose_details">
                                <h3>Cost Efficiency</h3>
                                <p>Single codebase reduces development time, thus lowering the development cost.</p>
                            </div>
                        </div>
                    </div>
    
                    <div class="col-sm-6 col-md-6 " data-aos="fade-right">
                        <div class="libraries_laravel_choose">
                            <div class="laravel_choose_features_img laravel_choose_features_img3">
                                <img src="/img/reactnativeappdevelopment/react-why-icon3.png" alt="img1" />
                            </div>
                            <div class="laravel_choose_details">
                                <h3>Performance</h3>
                                <p>Direct interaction with native APIs ensures high performance and responsiveness.</p>
                            </div>
                        </div>
                    </div>
    
                    <div class="col-sm-6 col-md-6" data-aos="fade-left">
                        <div class="libraries_laravel_choose libraries_laravel_choose-right">
                            <div class="laravel_choose_features_img laravel_choose_features_img4">
                                <img src="/img/reactnativeappdevelopment/react-why-icon4.png" alt="img1" />
                            </div>
                            <div class="laravel_choose_details">
                                <h3>Faster Time to Market</h3>
                                <p>Quicker development process enables faster product launches.</p>
                            </div>
                        </div>
                    </div>
    
                    <div class="col-sm-6 col-md-6" data-aos="fade-right">
                        <div class="libraries_laravel_choose">
                            <div class="laravel_choose_features_img laravel_choose_features_img5">
                                <img src="/img/reactnativeappdevelopment/react-why-icon5.png" alt="img1" />
                            </div>
                            <div class="laravel_choose_details">
                                <h3>Offer On Multiple Stages</h3>
                                <p>A single React Native app can be launched on Google Playstore for Android and App Store for iOS.</p>
                            </div>
                        </div>
                    </div>
    
                    <div class="col-sm-6 col-md-6" data-aos="fade-left">
                        <div class="libraries_laravel_choose libraries_laravel_choose-right">
                            <div class="laravel_choose_features_img laravel_choose_features_img6">
                                <img src="/img/reactnativeappdevelopment/react-why-icon6.png" alt="img1" />
                            </div>
                            <div class="laravel_choose_details">
                                <h3>Better User Experience</h3>
                                <p>React Native apps offer an enhanced user experience on each platform.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <section class="laravel_choose_features_section LaravelChooseFeaturesSection">
        <div class="container">
            <h2>Why Choose Logicspice For React Native <br />App Development?</h2>
            <div class="laravel_choose_features_bx ReactJsChooseFeaturesBx">
                <div class="row">
                    <div class="col-sm-6 col-md-6" data-aos="fade-right">
                        <div class="libraries_laravel_choose">
                            <div class="laravel_choose_details">
                                <p>We have worked in this industry for 18+ years with 1900+ clients across 15 countries.</p>
                            </div>
                        </div>
                    </div>
    
                    <div class="col-sm-6 col-md-6" data-aos="fade-left">
                        <div class="libraries_laravel_choose libraries_laravel_choose-right">
                            <div class="laravel_choose_details">
                                <p>We promise the best available technological advancement through our applications.</p>
                            </div>
                        </div>
                    </div>
    
                    <div class="col-sm-6 col-md-6 " data-aos="fade-right">
                        <div class="libraries_laravel_choose">
                            <div class="laravel_choose_details">
                                <p>Our service stands out in terms of quality and being cost-effective.</p>
                            </div>
                        </div>
                    </div>
    
                    <div class="col-sm-6 col-md-6" data-aos="fade-left">
                        <div class="libraries_laravel_choose libraries_laravel_choose-right">
                            <div class="laravel_choose_details">
                                <p>Logicspice maintains seamless communication with clients to develop applications that meet their unique needs.</p>
                            </div>
                        </div>
                    </div>
    
                    <div class="col-sm-6 col-md-6" data-aos="fade-right">
                        <div class="libraries_laravel_choose">
                            <div class="laravel_choose_details">
                                <p>Our developers and design team always focus on client satisfaction through dedicated customer support service and other communication channels.</p>
                            </div>
                        </div>
                    </div>
    
                </div>
                <div class="col-sm-12 main_btn_hire">
        <a id="" class="btn btn-primary" >Hire Now</a>
                
                </div>
                </div>
                </div>
    </section>
    
    
    <section class="ecommerce_faq_section NewFaqDesignSection">
        <div class="container">
            <div class="row">
                <div class=" row ecommerce__Quick_FAQ">
                <div class="col-md-5">
                    <h4 class="title_main">Frequently <br />Asked Questions</h4>
                    <div class="FaqImgBx"><img src="/img/laraveldevelopment/FaqLaravelImg.png" alt="laravel web development" /></div>
                </div>
                    <div class="col-md-7">
                    
                        <MDBAccordion v-model="activeItem" borderless>
                        <MDBAccordionItem
                          headerTitle="What is React Native App Development?"
                          collapseId="flush-collapse1"
                        >
                            <p>React Native App Development builds mobile apps utilizing the technology. Facebook's open-source framework lets JavaScript and React 
developers build native Android and iOS apps. React Native's key benefit is code reuse across platforms, which can save time and money.</p>
                        </MDBAccordionItem>
                        
                        <MDBAccordionItem
                           headerTitle="How does the performance of a React Native app compare to a native app?"
                          collapseId="flush-collapse2"
                        >
                          <p>React Native apps closely match the performance of native apps as they utilize native components, providing a seamless user experience.</p>
                        </MDBAccordionItem>
                        
                        <MDBAccordionItem
                           headerTitle="Can Logicspice help migrate my existing native app to React Native?"
                          collapseId="flush-collapse3"
                        >
                        <p>Absolutely. We offer seamless migration services to transition your native app to React Native, ensuring minimal disruption to your operations.</p>
                        </MDBAccordionItem>
                        
                        <MDBAccordionItem
                           headerTitle="Can I integrate existing APIs and third-party services with a React Native app?"
                          collapseId="flush-collapse4"
                        >
                        <p>Yes, React Native supports integration with most APIs and third-party services, expanding the functionality and versatility of your application.</p>
                        </MDBAccordionItem>
                        
                        <MDBAccordionItem
                           headerTitle="Can Logicspice handle complex React Native projects with custom requirements?"
                          collapseId="flush-collapse5"
                        >
                         <p>Absolutely, we excel in developing custom solutions and can handle complex React Native projects with unique business requirements.</p>
                        </MDBAccordionItem>
                    
                                                
                        
                    </MDBAccordion>
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

export default page;