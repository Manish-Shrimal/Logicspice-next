import Footer from "@/app/Components/Footer";
import NavBar from "@/app/Components/Navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <>
    <NavBar />
      <section class="resources-header">
        <div class="container">
          <span>
            <span>Diwali celebration 2015</span>
          </span>
        </div>
      </section>

      <section class="breadcrems_header">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h1>DIWALI CELEBRATION 2015</h1>
            </div>
            <div class="col-md-6">
              <ol class="breadcrumb">
                <li>
                  <Link href="/">Home</Link>
                </li>
                /
                <li>
                  {" "}
                  <Link href="/gallery/">Gallery</Link>
                </li>
                /
                <li class="current">
                  <span id="title_here">
                    Diwali celebration 2015 ( <span>November 09,2015</span> )
                  </span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section class="content_area content_area_gallery">
        <div class="container">
          <div id="content" class="site-content afclr" role="main">
            <div
              id="gallery-1"
              class="gallery galleryid-2301 gallery-columns-5 gallery-size-thumbnail"
            >
              <div class="row">
                <div class="col-lg-3 col-md-4 col-sm-12">
                  <figure class="gallery-item">
                    <div class="gallery-icon landscape">
                      <Link
                        href="/img/diwali/DSC02038.jpg"
                        data-lightbox="images"
                      >
                        <Image
                          width={100}
                          height={100}
                          src="/img/diwali/DSC02038.jpg"
                          alt="Logicspice functions &amp; events"
                          class="attachment-thumbnail size-thumbnail"
                        />
                      </Link>
                    </div>
                  </figure>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-12">
                  <figure class="gallery-item">
                    <div class="gallery-icon landscape">
                      <Link
                        href="/img/diwali/DSC02043.jpg"
                        data-lightbox="images"
                      >
                        <Image
                          width={100}
                          height={100}
                          src="/img/diwali/DSC02043.jpg"
                          alt="Logicspice functions &amp; events"
                          class="attachment-thumbnail size-thumbnail"
                        />
                      </Link>
                    </div>
                  </figure>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-12">
                  <figure class="gallery-item">
                    <div class="gallery-icon landscape">
                      <Link
                        href="/img/diwali/DSC02059.jpg"
                        data-lightbox="images"
                      >
                        <Image
                          width={100}
                          height={100}
                          src="/img/diwali/DSC02059.jpg"
                          alt="Logicspice functions &amp; events"
                          class="attachment-thumbnail size-thumbnail"
                        />
                      </Link>
                    </div>
                  </figure>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-12">
                  <figure class="gallery-item">
                    <div class="gallery-icon landscape">
                      <Link
                        href="/img/diwali/DSC02060.jpg"
                        data-lightbox="images"
                      >
                        <Image
                          width={100}
                          height={100}
                          src="/img/diwali/DSC02060.jpg"
                          alt="Logicspice functions &amp; events"
                          class="attachment-thumbnail size-thumbnail"
                        />
                      </Link>
                    </div>
                  </figure>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-12">
                  <figure class="gallery-item">
                    <div class="gallery-icon landscape">
                      <Link
                        href="/img/diwali/DSC02062.jpg"
                        data-lightbox="images"
                      >
                        <Image
                          width={100}
                          height={100}
                          src="/img/diwali/DSC02062.jpg"
                          alt="Logicspice functions &amp; events"
                          class="attachment-thumbnail size-thumbnail"
                        />
                      </Link>
                    </div>
                  </figure>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-12">
                  <figure class="gallery-item">
                    <div class="gallery-icon landscape">
                      <Link
                        href="/img/diwali/DSC02089.jpg"
                        data-lightbox="images"
                      >
                        <Image
                          width={100}
                          height={100}
                          src="/img/diwali/DSC02089.jpg"
                          alt="Logicspice functions &amp; events"
                          class="attachment-thumbnail size-thumbnail"
                        />
                      </Link>
                    </div>
                  </figure>
                </div>
              </div>
            </div>

            <div class="navigation"></div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Page;
