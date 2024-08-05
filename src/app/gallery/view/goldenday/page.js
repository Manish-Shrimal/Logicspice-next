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
            <span>Golden Days Resort</span>
          </span>
        </div>
      </section>

      <section class="breadcrems_header">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h1>Golden Days Resort</h1>
            </div>
            <div class="col-md-6">
              <ol class="breadcrumb">
                <li>
                  <Link href="/">Home</Link>
                </li>
                /
                <li>
                  {" "}
                  <Link href="/gallery">Gallery</Link>
                </li>
                /
                <li class="current">
                  <span id="title_here">
                    Golden Days Resort ( <span>July 25,2015</span> )
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
            />
            <div class="row">
              <div class="col-lg-3 col-md-4 col-sm-12">
                <figure class="gallery-item">
                  <div class="gallery-icon landscape">
                    <Link
                      href="/img/goldenday/DSC00951.jpg"
                      data-lightbox="images"
                    >
                      <Image
                        width={100}
                        height={100}
                        src="/img/goldenday/DSC00951.jpg"
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
                      href="/img/goldenday/DSC_3774.jpg"
                      data-lightbox="images"
                    >
                      <Image
                        width={100}
                        height={100}
                        src="/img/goldenday/DSC_3774.jpg"
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
                      href="/img/goldenday/IMG_1451.jpg"
                      data-lightbox="images"
                    >
                      <Image
                        width={100}
                        height={100}
                        src="/img/goldenday/IMG_1451.jpg"
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
                      href="/img/goldenday/IMG_5395.jpg"
                      data-lightbox="images"
                    >
                      <Image
                        width={100}
                        height={100}
                        src="/img/goldenday/IMG_5395.jpg"
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
                      href="/img/goldenday/IMG_5551.jpg"
                      data-lightbox="images"
                    >
                      <Image
                        width={100}
                        height={100}
                        src="/img/goldenday/IMG_5551.jpg"
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
                      href="/img/goldenday/IMG_5570.jpg"
                      data-lightbox="images"
                    >
                      <Image
                        width={100}
                        height={100}
                        src="/img/goldenday/IMG_5570.jpg"
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

        {/* </div> */}
      </section>
      <Footer />
    </>
  );
};

export default Page;
