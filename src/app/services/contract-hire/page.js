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
      <section class="laravel-banner ContractHireBanner">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-6 col-md-6">
                    <div class="laravel-banner-txt">
                        <h1>Contract-to-Hire IT Staffing <br />Services</h1>
                        <div class="LaravelText">
                            Maximize your hiring flexibility and minimize risks with our contract-to-hire <strong>IT staffing services</strong>, ensuring a perfect match between talent and organizational needs.
                        </div>
                        <div class="laravel-anquire">
                        <div className="btn btn-primary" onClick={openModal}>
                    <button>Quick Enquiry</button>
                    {
                      <Enquirymodal
                        modalStatus={showModal}
                        toggle={openModal}
                        title="Contract-to-Hire IT Staffing"
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
                    <div class="page_img"><img src="/img/contracthire/contract-hire-img.png" alt="Codeigniter Development" /></div>  
                </div>
            </div>
        </div>
    </section>
    
    <section class="ContractDevlopmentsServices ">
        <div class="container">
            <p class="ContractHireSub2">Logicspice provides IT professionals on a contractual basis for a specific project or a defined period of time to the organizations around the globe. This approach allows organizations to tap into specialized IT expertise without the need for permanent employment.</p>
            <p class="ContractHireSub2">We have over 16 years of industry experience in <strong >recruitment services</strong> and have a solid foundation to assist organizations in finding the right talent and solutions. Our commitment to accelerating the hiring process and connecting with the right talent aligns well with the needs of businesses looking to efficiently fill their workforce gaps.</p>
            <p class="ContractHireSub2">The emphasis on flexibility, scalability, and uninterrupted services is crucial in today's dynamic business environment, where organizations need to adapt quickly to changing demands. By offering comprehensive workforce solutions, you can cater to a wide range of staffing requirements, whether they involve short-term projects, long-term contracts, or permanent placements.</p>
        
        </div>
    </section>
    
    <section class="ContractHireFeaturesSection">
        <div class="container">
            <h2>Here are some key features for contract hire for IT professionals</h2>
            <div class="laravel_core_features_bx">
                <div class="row">
                    <div class="col-sm-6 col-md-4" data-aos="fade-up">
                        <div class="ContractFeatureBox">
                            <div class="ContractFeatures_img">
                                <img src="/img/contracthire/contract-features-icon1.png" alt="img1" />
                            </div>
                            <div class="ContractFeatures_detail">
                                <h3>Flexibility</h3>
                                <p>We offer flexibility to organizations by bringing in IT professionals as and when needed. This is particularly beneficial for short-term projects, seasonal workloads, or specialized skill requirements.</p>
                            </div>
                        </div>
                    </div>
    
                    <div class="col-sm-6 col-md-4" data-aos="fade-up">
                        <div class="ContractFeatureBox">
                            <div class="ContractFeatures_img">
                                <img src="/img/contracthire/contract-features-icon2.png" alt="img4" />
                            </div>
                            <div class="ContractFeatures_detail">
                                <h3>Specialized Skills</h3>
                                <p>The employers possess specialized skills and expertise that may be required for specific projects or technology implementations. Organizations can leverage their knowledge and experience without the need for long-term commitments.</p>
                            </div>
                        </div>
                    </div>
    
                    <div class="col-sm-6 col-md-4" data-aos="fade-up">
                        <div class="ContractFeatureBox">
                            <div class="ContractFeatures_img">
                                <img src="/img/contracthire/contract-features-icon3.png" alt="img2" />
                            </div>
                            <div class="ContractFeatures_detail">
                                <h3>Cost Control</h3>
                                <p>It is cost-effective compared to hiring full-time employees. We are open to negotiate rates and terms with contractors based on the project requirements, reducing costs associated with benefits, training, and long-term employment commitments.
    </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4" data-aos="fade-up">
                        <div class="ContractFeatureBox">
                            <div class="ContractFeatures_img">
                                <img src="/img/contracthire/contract-features-icon4.png" alt="img5" />
                            </div>
                            <div class="ContractFeatures_detail">
                                <h3>Rapid Staffing</h3>
                                <p>We allow organizations to quickly fill IT positions and initiate projects without going through lengthy recruitment processes. This agility is crucial in time-sensitive situations or when there is a shortage of qualified IT professionals in the job market.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4" data-aos="fade-up">
                        <div class="ContractFeatureBox">
                            <div class="ContractFeatures_img">
                                <img src="/img/contracthire/contract-features-icon5.png" alt="img3" />
                            </div>
                            <div class="ContractFeatures_detail">
                                <h3>Access to Talent Pool</h3>
                                <p>We open up access to a broader talent pool of IT professionals who prefer or specialize in contract work. This provides organizations with opportunities to bring in top-notch expertise and diverse perspectives.</p>
                            </div>
                        </div>
                    </div>
    
    
                    <div class="col-sm-6 col-md-4" data-aos="fade-up">
                       <div class="ContractFeatureBox">
                            <div class="ContractFeatures_img">
                                <img src="/img/contracthire/contract-features-icon6.png" alt="img6" />
                            </div>
                            <div class="ContractFeatures_detail">
                                <h3>Industry-Specific Knowledge</h3>
                                <p>The involved employees have experience working across different organizations and industries. This exposure brings valuable industry-specific knowledge and best practices to the organization, enhancing the quality of IT projects.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4" data-aos="fade-up">
                        <div class="ContractFeatureBox" >
                            <div class="ContractFeatures_img">
                                <img src="/img/contracthire/contract-features-icon7.png" alt="img6" />
                            </div>
                            <div class="ContractFeatures_detail">
                                <h3>Reduced Employment Risks</h3>
                                <p>As contractors are not permanent employees and we as contract hire handle all the formalities, considering these scenarios organizations do not face fewer employment-related risks, such as termination costs, severance packages, or legal implications.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <section class="ContractSection">
        <div class="container">
            <p>We properly manage and integrate the employees into the organization's IT teams to ensure effective collaboration and successful project outcomes. Clear project objectives, communication channels, and expectations established to maximize the benefits of employee hire arrangements.</p>
            <p>We offer organizations flexibility, access to specialized skills, and cost control while enabling IT professionals to work on diverse projects and maintain a flexible work schedule.</p>
            <p>Overall, our mission to achieve clients business goals through workforce solutions while emphasizing integrity and alignment showcases our commitment to excellence in 
                recruitment services. By delivering efficient and <strong>effective hiring solutions</strong>, we are helping organizations to meet their talent acquisition objectives and drive their success.</p>
            <p>If your business requires specialized IT expertise, don't hesitate to <a href="https://www.approhire.com/request_consultation" target="_blank">consult with us today</a> for access to a network of skilled professionals ready to support your growth.</p>
        
        <div class="main_btn_hire">
        <div className="btn btn-primary" onClick={openModal}>
                    <button>Enquire Now</button>
                    {
                      <Enquirymodal
                        modalStatus={showModal}
                        toggle={openModal}
                        title="Contract-to-Hire IT Staffing"
                      /> 
                    }
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
