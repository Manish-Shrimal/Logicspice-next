"use client";
import Footer from "@/app/Components/Footer";
import NavBar from "@/app/Components/Navbar";
import "@/app/company/company.css";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Blogslider from "../../Components/Blogslider";
import Ourclient from "../../Components/Ourclient";

const Page = () => {

  return (
    <>
    <NavBar />
        <section class="breadcrems_header_new">
        <div class="container">
            <h1>Case Studies</h1>
            <ol class="breadcrumb">
                <li><a href="https://www.logicspice.com">Home</a></li>
                <li class="current">Case Studies</li>
            </ol>
        </div>
    </section>

    <section class="content_area_resources">
        <div class="container">
            <div class="col-md-12 col-sm-12">
                <div id="content" class="content_left_bar_resources" role="main">
                    <div class="m_content" id="listID">
                        <form action="/case-study" method="post" id="CasestudyIndexForm" accept-charset="utf-8">
                        <div class="row">
                        
                        <div class="col-xs-12 col-sm-6 col-md-4 case-study-listing">
                            <article id="post-76" class="blog_row racing_cartel_header">
                                <div class="media">
                                    <h4 class="media-heading">
                                    <Link href="/case-study/racing-cartel" class="light_blue" >Racing Cartel</Link>                        
                                    </h4>
                                    <h3>Tipping Platform</h3>
                                    <div class="media-left">
                                        <img src="https://www.logicspice.com/app/webroot/files/portfolio/thumb/4dc11_Racing_cartal.png" alt="Racing Cartel-logicspice" width="300px" /> 
                                    </div>
                                    <div class="media-body"> 
                                        <Link href="#" class="blog_read_more" title="read more">View Case Study</Link>                              
                                    </div>
                                </div>
                            </article>
                        </div>
                        </div>
                      
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="testimonial-hire">
  <div className="container">
  <div className="headings">
  <h2 class="our-title">OUR CLIENTS</h2>
  </div>
  <div>
    <Ourclient/>
  </div>
  </div>
</section>
    <section className="blog-home" style={{position:"relative"}}>
  <div className="container">
  <div className="headings">
                <h2>OUR BLOGS</h2>
                <p>A Sneak Peek into the Future of Innovation</p>
  </div>
  <div>
    <Blogslider/>
  </div>
  </div>
</section>
    <Footer />
    </>
  )
  
}

export default Page

