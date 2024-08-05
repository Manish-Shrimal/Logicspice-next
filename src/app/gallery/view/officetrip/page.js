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
            <span>Office Trip</span>
          </span>
        </div>
      </section>

      <section class="breadcrems_header">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h1>Office Trip</h1>
            </div>
            <div class="col-md-6">
              <ol class="breadcrumb">
                <li>
                  <Link href="/">Home</Link>
                </li>
                /
                <li>
                  <Link href="/gallery">Gallery</Link>
                </li>
                /
                <li class="current">
                  <span id="title_here">
                    Office Trip ( <span>November 23,2019</span> )
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
                        href="/img/Gallery/e7a4e_img1.JPG"
                        data-lightbox="images"
                      >
                        <Image
                          width={100}
                          height={100}
                          src="/img/Gallery/e7a4e_img1.JPG"
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
                        href="/img/Gallery/bf989_Ganpatipule-7.jpg"
                        data-lightbox="images"
                      >
                        <Image
                          width={100}
                          height={100}
                          src="/img/Gallery/bf989_Ganpatipule-7.jpg"
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
                        href="/img/Gallery/7459d_img2.JPG"
                        data-lightbox="images"
                      >
                        <Image
                          width={100}
                          height={100}
                          src="/img/Gallery/7459d_img2.JPG"
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
                        href="/img/Gallery/9f958_Ganpatipule-1.jpg"
                        data-lightbox="images"
                      >
                        <Image
                          width={100}
                          height={100}
                          src="/img/Gallery/9f958_Ganpatipule-1.jpg"
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
                        href="/img/Gallery/5edc5_img4.jpg"
                        data-lightbox="images"
                      >
                        <Image
                          width={100}
                          height={100}
                          src="/img/Gallery/5edc5_img4.jpg"
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
                        href="/img/Gallery/dbd37_Ganpatipule-12.jpg"
                        data-lightbox="images"
                      >
                        <Image
                          width={100}
                          height={100}
                          src="/img/Gallery/dbd37_Ganpatipule-12.jpg"
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
                        href="/img/Gallery/f8677_img6.jpg"
                        data-lightbox="images"
                      >
                        <Image
                          width={100}
                          height={100}
                          src="/img/Gallery/f8677_img6.jpg"
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
                        href="/img/Gallery/01b6d_Ganpatipule-3.jpg"
                        data-lightbox="images"
                      >
                        <Image
                          width={100}
                          height={100}
                          src="/img/Gallery/01b6d_Ganpatipule-3.jpg"
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
                        href="/img/Gallery/6135a_img7.jpg"
                        data-lightbox="images"
                      >
                        <Image
                          width={100}
                          height={100}
                          src="/img/Gallery/6135a_img7.jpg"
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
                        href="/img/Gallery/e3b02_Maha-Lakshmi-Temple.jpg"
                        data-lightbox="images"
                      >
                        <Image
                          width={100}
                          height={100}
                          src="/img/Gallery/e3b02_Maha-Lakshmi-Temple.jpg"
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
                        href="/img/Gallery/ac312_img8.JPG"
                        data-lightbox="images"
                      >
                        <Image
                          width={100}
                          height={100}
                          src="/img/Gallery/ac312_img8.JPG"
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
                        href="/img/Gallery/e0c12_Ganpatipule-11.jpg"
                        data-lightbox="images"
                      >
                        <Image
                          width={100}
                          height={100}
                          src="/img/Gallery/e0c12_Ganpatipule-11.jpg"
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
                        href="/img/Gallery/0ac6e_img9.jpg"
                        data-lightbox="images"
                      >
                        <Image
                          width={100}
                          height={100}
                          src="/img/Gallery/0ac6e_img9.jpg"
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
                        href="/img/Gallery/d7eb8_Ganpatipule-9.jpg"
                        data-lightbox="images"
                      >
                        <Image
                          width={100}
                          height={100}
                          src="/img/Gallery/d7eb8_Ganpatipule-9.jpg"
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
                        href="/img/Gallery/73d41_img10.jpg"
                        data-lightbox="images"
                      >
                        <Image
                          width={100}
                          height={100}
                          src="/img/Gallery/73d41_img10.jpg"
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
                        href="/img/Gallery/26573_Ganpatipule-8.jpg"
                        data-lightbox="images"
                      >
                        <Image
                          width={100}
                          height={100}
                          src="/img/Gallery/26573_Ganpatipule-8.jpg"
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
                        href="/img/Gallery/90c22_img12.jpg"
                        data-lightbox="images"
                      >
                        <Image
                          width={100}
                          height={100}
                          src="/img/Gallery/90c22_img12.jpg"
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
                        href="/img/Gallery/8b49a_Ganpatipule-13.jpg"
                        data-lightbox="images"
                      >
                        <Image
                          width={100}
                          height={100}
                          src="/img/Gallery/8b49a_Ganpatipule-13.jpg"
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
                        href="/img/Gallery/3dfce_img11.jpg"
                        data-lightbox="images"
                      >
                        <Image
                          width={100}
                          height={100}
                          src="/img/Gallery/3dfce_img11.jpg"
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
                        href="/img/Gallery/86617_Ganpatipule-6.jpg"
                        data-lightbox="images"
                      >
                        <Image
                          width={100}
                          height={100}
                          src="/img/Gallery/86617_Ganpatipule-6.jpg"
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
