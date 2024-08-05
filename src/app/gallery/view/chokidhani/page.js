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
            <span>Chowki Dhani </span>
          </span>
        </div>
      </section>

      <section class="breadcrems_header">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h1>Chowki Dhani</h1>
            </div>
            <div class="col-md-6">
              <ol class="breadcrumb">
                <li>
                  <Link href="/">Home</Link>
                </li>
                /
                <li>
                  <Link href="/gallery/">Gallery</Link>
                </li>
                /
                <li class="current">
                  <span id="title_here">
                    Chowki Dhani ( <span>July 08,2008</span> )
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
                      href="/img/chokhi/DSC02692.jpg"
                      data-lightbox="images"
                    >
                      <Image
                        width={100}
                        height={100}
                        src="/img/chokhi/DSC02692.jpg"
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
                      href="/img/chokhi/DSC02763.jpg"
                      data-lightbox="images"
                    >
                      <Image
                        width={100}
                        height={100}
                        src="/img/chokhi/DSC02763.jpg"
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
                    <Link href="/img/chokhi/img-1.jpg" data-lightbox="images">
                      <Image
                        width={100}
                        height={100}
                        src="/img/chokhi/img-1.jpg"
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
                    <Link href="/img/chokhi/img-2.jpg" data-lightbox="images">
                      <Image
                        width={100}
                        height={100}
                        src="/img/chokhi/img-2.jpg"
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
                    <Link href="/img/chokhi/img-3.jpg" data-lightbox="images">
                      <Image
                        width={100}
                        height={100}
                        src="/img/chokhi/img-3.jpg"
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
                    <Link href="/img/chokhi/img4.jpg" data-lightbox="images">
                      <Image
                        width={100}
                        height={100}
                        src="/img/chokhi/img4.jpg"
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
                      href="/img/chokhi/DSC00044.jpg"
                      data-lightbox="images"
                    >
                      <Image
                        width={100}
                        height={100}
                        src="/img/chokhi/DSC00044.jpg"
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
                      href="/img/chokhi/DSC00056.jpg"
                      data-lightbox="images"
                    >
                      <Image
                        width={100}
                        height={100}
                        src="/img/chokhi/DSC00056.jpg"
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
                      href="/img/chokhi/DSC00066.jpg"
                      data-lightbox="images"
                    >
                      <Image
                        width={100}
                        height={100}
                        src="/img/chokhi/DSC00066.jpg"
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
                      href="/img/chokhi/DSC02674.jpg"
                      data-lightbox="images"
                    >
                      <Image
                        width={100}
                        height={100}
                        src="/img/chokhi/DSC02674.jpg"
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
                      href="/img/chokhi/DSC02678.jpg"
                      data-lightbox="images"
                    >
                      <Image
                        width={100}
                        height={100}
                        src="/img/chokhi/DSC02678.jpg"
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
                      href="/img/chokhi/DSC02683.jpg"
                      data-lightbox="images"
                    >
                      <Image
                        width={100}
                        height={100}
                        src="/img/chokhi/DSC02683.jpg"
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
        </div>{" "}
        {/* <!-- #content --> */}
        {/* </div> */}
      </section>
      <Footer />
    </>
  );
};

export default Page;
