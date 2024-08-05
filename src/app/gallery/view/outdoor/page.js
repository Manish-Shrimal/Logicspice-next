import React from "react";
import Link from "next/link";
import Image from "next/image";
import NavBar from "@/app/Components/Navbar";
import Footer from "@/app/Components/Footer";

const Page = () => {
  return (
    <>
    <NavBar />
      <section class="resources-header">
        <div class="container">
          <span>
            <span>Outdoor Activities</span>
          </span>
        </div>
      </section>

      <section class="breadcrems_header">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h1>Outdoor Activities</h1>
            </div>
            <div class="col-md-6">
              <ol class="breadcrumb">
                <li>
                  <Link href="/Vuejs/">Home</Link>
                </li>
                /
                <li>
                  <Link href="/Vuejs/gallery/">Gallery</Link>
                </li>
                /
                <li class="current">
                  <span id="title_here">
                    Outdoor Activities ( <span>April 18,2009</span> )
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
                        href="/img/outdoor/DSC00060.jpg"
                        data-lightbox="images"
                      >
                        <Image
                          width={100}
                          height={100}
                          src="/img/outdoor/DSC00060.jpg"
                          alt="Logicspice functions &amp; events"
                          class="attachment-thumbnail size-thumbnail"
                        />
                      </Link>{" "}
                    </div>
                  </figure>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-12">
                  <figure class="gallery-item">
                    <div class="gallery-icon landscape">
                      <Link
                        href="/img/outdoor/DSC00064.jpg"
                        data-lightbox="images"
                      >
                        <Image
                          width={100}
                          height={100}
                          src="/img/outdoor/DSC00064.jpg"
                          alt="Logicspice functions &amp; events"
                          class="attachment-thumbnail size-thumbnail"
                        />
                      </Link>{" "}
                    </div>
                  </figure>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-12">
                  <figure class="gallery-item">
                    <div class="gallery-icon landscape">
                      <Link
                        href="/img/outdoor/DSC00084.jpg"
                        data-lightbox="images"
                      >
                        <Image
                          width={100}
                          height={100}
                          src="/img/outdoor/DSC00084.jpg"
                          alt="Logicspice functions &amp; events"
                          class="attachment-thumbnail size-thumbnail"
                        />
                      </Link>{" "}
                    </div>
                  </figure>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-12">
                  <figure class="gallery-item">
                    <div class="gallery-icon landscape">
                      <Link
                        href="/img/outdoor/DSC00091.jpg"
                        data-lightbox="images"
                      >
                        <Image
                          width={100}
                          height={100}
                          src="/img/outdoor/DSC00091.jpg"
                          alt="Logicspice functions &amp; events"
                          class="attachment-thumbnail size-thumbnail"
                        />
                      </Link>{" "}
                    </div>
                  </figure>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-12">
                  <figure class="gallery-item">
                    <div class="gallery-icon landscape">
                      <Link
                        href="/img/outdoor/DSC00132.jpg"
                        data-lightbox="images"
                      >
                        <Image
                          width={100}
                          height={100}
                          src="/img/outdoor/DSC00132.jpg"
                          alt="Logicspice functions &amp; events"
                          class="attachment-thumbnail size-thumbnail"
                        />
                      </Link>{" "}
                    </div>
                  </figure>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-12">
                  <figure class="gallery-item">
                    <div class="gallery-icon landscape">
                      <Link
                        href="/img/outdoor/DSC00029.jpg"
                        data-lightbox="images"
                      >
                        <Image
                          width={100}
                          height={100}
                          src="/img/outdoor/DSC00029.jpg"
                          alt="Logicspice functions &amp; events"
                          class="attachment-thumbnail size-thumbnail"
                        />
                      </Link>{" "}
                    </div>
                  </figure>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-12">
                  <figure class="gallery-item">
                    <div class="gallery-icon landscape">
                      <Link
                        href="/img/outdoor/DSC00040.jpg"
                        data-lightbox="images"
                      >
                        <Image
                          width={100}
                          height={100}
                          src="/img/outdoor/DSC00040.jpg"
                          alt="Logicspice functions &amp; events"
                          class="attachment-thumbnail size-thumbnail"
                        />
                      </Link>{" "}
                    </div>
                  </figure>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-12">
                  <figure class="gallery-item">
                    <div class="gallery-icon landscape">
                      <Link
                        href="/img/outdoor/DSC00051.jpg"
                        data-lightbox="images"
                      >
                        <Image
                          width={100}
                          height={100}
                          src="/img/outdoor/DSC00051.jpg"
                          alt="Logicspice functions &amp; events"
                          class="attachment-thumbnail size-thumbnail"
                        />
                      </Link>{" "}
                    </div>
                  </figure>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-12">
                  <figure class="gallery-item">
                    <div class="gallery-icon landscape">
                      <Link
                        href="/img/outdoor/DSC00052.jpg"
                        data-lightbox="images"
                      >
                        <Image
                          width={100}
                          height={100}
                          src="/img/outdoor/DSC00052.jpg"
                          alt="Logicspice functions &amp; events"
                          class="attachment-thumbnail size-thumbnail"
                        />
                      </Link>{" "}
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
