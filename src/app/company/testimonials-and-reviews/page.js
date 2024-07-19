"use client";
import Footer from "@/app/Components/Footer";
import NavBar from "@/app/Components/Navbar";
import "@/app/company/company.css";
import Image from "next/image";
const page = () => {
  return (
    <>
    <NavBar />
    <section class="resources-header-riview">
    <div class="container">
        <h1>Testimonials &amp; Reviews</h1>
        <p>Our mobile app development solutions are the best of their kind.</p>
    </div>
</section>
<section class="content_area_resources new-review-content_area_resources">
    <div class="container">
      <div class="row">
        <div class="col-md-9 col-sm-8 ">
          
            <div class="m_content" id="listID">
               <div class="panel-body">
                <section class="lstng-section">
                <b class="ctname">MyMentions Website</b>
                <hr class="dotted" />
                <img src="https://www.logicspice.com/app/webroot/files/testimonial/full/Alanc13.png" alt="MyMentions Website" />
                <p></p>
                <p class="western" lang="en-US" align="justify"><span >MyMention website is a Social media site where users can create and manage profiles and search for other users. Here they can follow other users and tag pictures with them. This site also have other social features such as tagging(Javascript),POP up pictures, profile setting,background video ,Comment, like and share.</span></p>
                <p class="western" lang="en-US" align="justify">You can also review the case study for the project over here: <a class="p_excerpt_url" href="https://www.logicspice.com/case-study/mymentions/">Case Study</a></p>
                </section>
               </div>
            </div>
        </div>
        <div class="col-md-3 col-sm-4">
            <div class="sidebar_right new_right_side">
               <div class="client-video">
                    <iframe width="255" height="634" src="https://www.youtube.com/embed/6nVErp2Cl_A?1&loop=1&playlist=6nVErp2Cl_A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
               
            </div>
        </div>
    </div>
    </div>
</section>
<Footer />
    </>
    
  )
}

export default page
