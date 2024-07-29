"use client";
import React, { useState } from "react";
import Footer from "@/app/Components/Footer";
import NavBar from "@/app/Components/Navbar";
import "@/app/services/services.css";
import Image from "next/image";
import Link from "next/link";
import Enquirymodal from "@/app/Components/Enquirymodal";
import Contactusmodel from "@/app/Components/Contactusmodel";
import "../../resposive.css";
import "@fortawesome/fontawesome-free/css/all.css";
const Page = () => {
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

      <section class="d-framework d-framework1 none_space">
        <div class="page_img">
          <Image
            src="/img/digitalmarketing/digital-marketing.jpg"
            alt="web design service"
          />
        </div>

        <div class="container">

          <p>
            Digital marketing is the need of the hour and with increasing access
            to digital mediums&sbquo; it is imperative for the brands to market
            themselves on these digital platforms. It can help you create a
            niche on the world of web and {""}
            <a
              href="https://www.logicspice.com/custom-solutions"
              target="_blank"
              className="WebsiteTxtLink"
            >
              Mobile App
            </a> {""}
            with innovative and tech savvy approach.
          </p>

          <p>
            There are varied varieties of Digital marketing services from search
            engine optimization to social media marketing and Google adwords. It
            is imperative for any brand to make sure that you are choosing the
            right partners and right set of strategies to take your company to
            the next.
          </p>
        </div>
      </section>

      <section class="d-marketing-services">
        
        <div class="container">
        <h2>Digital Marketing Services</h2>
        <div class="dms-ims">
            <div class="row">
                <div class="col-md-6 col-sm-12 col-xs-12">
                    <div class="ims-img">
                        <Image src="https://www.logicspice.com/app/webroot/img/images/lara/ims1.png" alt="Internet Marketing Solutions"/>
                    </div>
                </div>
                <div class="col-md-6 col-sm-12 col-xs-12">
                    <div class="ims-content">
                        <h3><span>1</span> <strong>Internet Marketing Solutions</strong></h3>
                        <p>The internet marketing program is highly focused and helps you to maximize the lead conversion.</p>

                        <ul>
                            <li>Data analysis and filtration to obtain qualified leads.</li>
                            <li>E- Commerce tracking to generate more data.</li>
                            <li>Studying the pattern of the market and raiding similar companies for generation of qualified audience.</li>
                            <li>Regular and timely follow up of the qualified leads.</li>
                            <li>Optimization analysis of conversion on regular intervals.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
        
        <div class="dms-ims">
            <div class="row">
                <div class="col-md-6 col-sm-12 col-xs-12 pull-right">
                    <div class="ims-img">
                        <Image src="https://www.logicspice.com/app/webroot/img/images/lara/ims2.png" alt="Social Media Management"/>
                    </div>
                </div>
                <div class="col-md-6 col-sm-12 col-xs-12 pull-left">
                    <div class="ims-content">
                        <h3><span>2</span> <strong>Social Media Management</strong></h3>
                        <p>With increasing prevalence of social media&sbquo; this is another important aspect to promote your business in the best manner.</p>

                        <ul>
                            <li>Using different pages to promote your products.</li>
                            <li>Promoting your brand in various groups and making people take a note of you.</li>
                            <li>Use of animated images and GIF&apos;s that are quite in trend these days.</li>
                            <li>Usage of keywords in posts and comments.</li>
                            <li>Boost your page and get more likes</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="dms-ims">
            <div class="row">
                <div class="col-md-6 col-sm-12 col-xs-12">
                    <div class="ims-img">
                        <Image src="https://www.logicspice.com/app/webroot/img/images/lara/ims3.png" alt="Brand Development"/>
                    </div>
                </div>
                <div class="col-md-6 col-sm-12 col-xs-12">
                    <div class="ims-content">
                        <h3><span>3</span> <strong>Brand Development</strong></h3>
                        <p>This is probably the most important thing for any company to create a reputation on various platforms. Brand development performs this job for you with 
                            absolute perfection by making use of the Google and Facebook Ads that can help create a reputation of your brand in a short span of time.</p>

                        <ul>
                            <li>Google and Facebook ads from certified developers that can easily catch the attention of the audience</li>
                            <li>Creating audience based on the target audience to have best results</li>
                            <li>Budget based adwords so that you do not invest so much money on one campaign only</li>
                            <li>Enhanced Feedback services</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
        
        <div class="dms-ims">
            <div class="row">
                <div class="col-md-6 col-sm-12 col-xs-12 pull-right">
                    <div class="ims-img">
                        <Image src="https://www.logicspice.com/app/webroot/img/images/lara/ims4.png" alt="Search Engine Optimization"/>
                    </div>
                </div>
                <div class="col-md-6 col-sm-12 col-xs-12 pull-left">
                    <div class="ims-content">
                        <h3><span>4</span> <strong>Search Engine Optimization</strong></h3>
                        <p>Search engine optimization is the base and heart of any digital marketing campaign. It helps you to make an impact on the audience by helping you amongst 
                            the first few search options. </p>

                        <ul>
                            <li>Organic techniques for rank improvement and optimization. </li>
                            <li>Transparent techniques to avoid spamming that can get your website banned. </li>
                            <li>Back linking on the high PR websites.</li>
                            <li>Making the website SEO friendly.</li>
                            <li>SEO friendly URL to enable easy crawling through the website.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
        
    </div>
      </section>


      <section class="enq-section">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-12 text-center">
              <div className="btn btn-primary" onClick={openModal}>
                <button>Enquire Now</button>
                {
                  <Enquirymodal
                    modalStatus={showModal}
                    toggle={openModal}
                    title="Digital marketing"
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
      </section>

      <section className="quoue_box_full_sec">
        <div className="whatsapp-call">
          <a
            href="https://api.whatsapp.com/send?phone=+919829559922&amp;text=Hi Logicspice Team&sbquo; I have a question regarding the solutions you provide. Please Help!"
            target="_blank"
          >
            <Image src="/img/images/whatsapp.png" alt="whatsapp-icon" />
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
