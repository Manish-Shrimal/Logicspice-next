import Footer from "@/app/Components/Footer";
import NavBar from "@/app/Components/Navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <>
    <NavBar />
      <section class="casestudies_header we_do_it_cheaper_header">
        <div class="container">
          <div class="casestudies_sec">
            <div class="breadcrumb-casestudies">
              <h1>Case Study for We do it Cheaper</h1>

              <ol class="breadcrumb">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/case-study">Case Studies</Link>
                </li>
                <li class="current"> We do it Cheaper</li>
              </ol>
            </div>
            <div class="row">
              <div class="col-xs-12 col-sm-6 col-md-8">
                <div class="blog_detail_bgs_img">
                  {/* <!--entry-thumbnail-inner--> */}
                  <Image
                    width={150000}
                    height={100}
                    src="https://www.logicspice.com/app/webroot/files/portfolio/full/05933_wedoitcheaper-banner.png"
                    alt=" We do it Cheaper-logicspice"
                    class="attachment-full size-full wp-post-image"
                  />{" "}
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-4">
                <div class="case-studies-pagedtl">
                  <ul>
                    <li>
                      We Do it Cheaper supports Buyer and Freelancer management.
                    </li>
                    <li>
                      Over We Do it Cheaper Buyer and Freelancer are able to
                      send 1 to 1 messages, there aren&apos;t any restrictions for
                      messaging like they need to purchase a gig or hire for a
                      service.
                    </li>
                    <li>
                      Freelancers are able to send Custom offers through the
                      messaging system to Buyers.
                    </li>
                    <li>
                      They are using payment gateways like PayPal, Stripe, and
                      Debit/Credit cards from all over the world.
                    </li>
                  </ul>
                  {/*                 <div class="case-studies-pagedtl">
                        <div class="case-studies-logo"><img src="https://www.logicspice.com/app/webroot/img/images/tradebench-logo.png" alt="logo" /></div>
                        <h2>Location And User Directory</h2>
                        <ul>
                            <li>Hire workers.</li>
                            <li>Hire employees of other companies of common field.</li>
                            <li>Date & time based availability of employees shown.</li>
                            <li>Rating/review provided.</li>
                        </ul>
                    </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Page;
