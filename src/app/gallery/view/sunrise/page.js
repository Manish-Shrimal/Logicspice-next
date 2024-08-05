import React from "react";
import Link from "next/link";
import Image from "next/image";

const Page = () => {
  return (
    <>
      <section class="resources-header">
        <div class="container">
          <span>
            <span>Sunrise Tour</span>
          </span>
        </div>
      </section>

      <section class="breadcrems_header">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h1>Sunrise Tour</h1>
            </div>
            <div class="col-md-6">
              <ol class="breadcrumb">
                <li>
                  <a href="/">Home</a>
                </li>
                /
                <li>
                  <a href="/gallery/">Gallery</a>
                </li>
                /
                <li class="current">
                  <span id="title_here">
                    Sunrise Tour ( <span>July 11,2010</span> )
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
                      <a href="/img/sunrise/080.jpg" data-lightbox="images">
                        <Image width ={100} height ={100}
                          src="/img/sunrise/080.jpg"
                          alt="Logicspice functions &amp; events"
                          class="attachment-thumbnail size-thumbnail"
                        />
                      </a>
                    </div>
                  </figure>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-12">
                  <figure class="gallery-item">
                    <div class="gallery-icon landscape">
                      <a href="/img/sunrise/061.jpg" data-lightbox="images">
                        <Image width ={100} height ={100}
                          src="/img/sunrise/061.jpg"
                          alt="Logicspice functions &amp; events"
                          class="attachment-thumbnail size-thumbnail"
                        />
                      </a>
                    </div>
                  </figure>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-12">
                  <figure class="gallery-item">
                    <div class="gallery-icon landscape">
                      <a href="/img/sunrise/076.jpg" data-lightbox="images">
                        <Image width ={100} height ={100}
                          src="/img/sunrise/076.jpg"
                          alt="Logicspice functions &amp; events"
                          class="attachment-thumbnail size-thumbnail"
                        />
                      </a>
                    </div>
                  </figure>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-12">
                  <figure class="gallery-item">
                    <div class="gallery-icon landscape">
                      <a href="/img/sunrise/058.jpg" data-lightbox="images">
                        <Image width ={100} height ={100}
                          src="/img/sunrise/058.jpg"
                          alt="Logicspice functions &amp; events"
                          class="attachment-thumbnail size-thumbnail"
                        />
                      </a>
                    </div>
                  </figure>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-12">
                  <figure class="gallery-item">
                    <div class="gallery-icon landscape">
                      <a href="/img/sunrise/055.jpg" data-lightbox="images">
                        <Image width ={100} height ={100}
                          src="/img/sunrise/055.jpg"
                          alt="Logicspice functions &amp; events"
                          class="attachment-thumbnail size-thumbnail"
                        />
                      </a>
                    </div>
                  </figure>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-12">
                  <figure class="gallery-item">
                    <div class="gallery-icon landscape">
                      <a href="/img/sunrise/054.jpg" data-lightbox="images">
                        <Image width ={100} height ={100}
                          src="/img/sunrise/054.jpg"
                          alt="Logicspice functions &amp; events"
                          class="attachment-thumbnail size-thumbnail"
                        />
                      </a>
                    </div>
                  </figure>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-12">
                  <figure class="gallery-item">
                    <div class="gallery-icon landscape">
                      <a href="/img/sunrise/051.jpg" data-lightbox="images">
                        <Image width ={100} height ={100}
                          src="/img/sunrise/051.jpg"
                          alt="Logicspice functions &amp; events"
                          class="attachment-thumbnail size-thumbnail"
                        />
                      </a>
                    </div>
                  </figure>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-12">
                  <figure class="gallery-item">
                    <div class="gallery-icon landscape">
                      <a href="/img/sunrise/066.jpg" data-lightbox="images">
                        <Image width ={100} height ={100}
                          src="/img/sunrise/066.jpg"
                          alt="Logicspice functions &amp; events"
                          class="attachment-thumbnail size-thumbnail"
                        />
                      </a>
                    </div>
                  </figure>
                </div>
              </div>
            </div>

            <div class="navigation"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
