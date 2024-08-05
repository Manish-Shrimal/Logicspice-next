import React from 'react'
import Link from "next/link";
import Image from "next/image";

const Page = () => {
  return (
    <>
      <section class="resources-header">
  <div class="container">
    <span>
      <span>Samod Palace</span>
    </span>
  </div>
</section>

<section class="breadcrems_header">
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <h1>Samod Palace</h1>
      </div>
      <div class="col-md-6">
        <ol class="breadcrumb">
          <li><Link href="/">Home</Link></li>
          /
          <li><Link href="/gallery/">Gallery</Link></li>
          /
          <li class="current">
            <span id="title_here"
              >Samod Palace ( <span> January 01,2013</span> )</span
            >
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
                  href="/img/samod/New-Year-02.jpg"
                  data-lightbox="images"
                  ><img
                    src="/img/samod/New-Year-02.jpg"
                    alt="Logicspice functions &amp; events"
                    class="attachment-thumbnail size-thumbnail"
                /></Link>
              </div>
            </figure>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-12">
            <figure class="gallery-item">
              <div class="gallery-icon landscape">
                <Link
                  href="/img/samod/New-Year-09.jpg"
                  data-lightbox="images"
                  ><img
                    src="/img/samod/New-Year-09.jpg"
                    alt="Logicspice functions &amp; events"
                    class="attachment-thumbnail size-thumbnail"
                /></Link>
              </div>
            </figure>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-12">
            <figure class="gallery-item">
              <div class="gallery-icon landscape">
                <Link
                  href="/img/samod/New-Year-01.jpg"
                  data-lightbox="images"
                  ><img
                    src="/img/samod/New-Year-01.jpg"
                    alt="Logicspice functions &amp; events"
                    class="attachment-thumbnail size-thumbnail"
                /></Link>
              </div>
            </figure>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-12">
            <figure class="gallery-item">
              <div class="gallery-icon landscape">
                <Link
                  href="/img/samod/New-Year-10.jpg"
                  data-lightbox="images"
                  ><img
                    src="/img/samod/New-Year-10.jpg"
                    alt="Logicspice functions &amp; events"
                    class="attachment-thumbnail size-thumbnail"
                /></Link>
              </div>
            </figure>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-12">
            <figure class="gallery-item">
              <div class="gallery-icon landscape">
                <Link
                  href="/img/samod/New-Year-08.jpg"
                  data-lightbox="images"
                  ><img
                    src="/img/samod/New-Year-08.jpg"
                    alt="Logicspice functions &amp; events"
                    class="attachment-thumbnail size-thumbnail"
                /></Link>
              </div>
            </figure>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-12">
            <figure class="gallery-item">
              <div class="gallery-icon landscape">
                <Link
                  href="/img/samod/New-Year-04.jpg"
                  data-lightbox="images"
                  ><img
                    src="/img/samod/New-Year-04.jpg"
                    alt="Logicspice functions &amp; events"
                    class="attachment-thumbnail size-thumbnail"
                /></Link>
              </div>
            </figure>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-12">
            <figure class="gallery-item">
              <div class="gallery-icon landscape">
                <Link
                  href="/img/samod/New-Year-05.jpg"
                  data-lightbox="images"
                  ><img
                    src="/img/samod/New-Year-05.jpg"
                    alt="Logicspice functions &amp; events"
                    class="attachment-thumbnail size-thumbnail"
                /></Link>
              </div>
            </figure>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-12">
            <figure class="gallery-item">
              <div class="gallery-icon landscape">
                <Link
                  href="/img/samod/New-Year-06.jpg"
                  data-lightbox="images"
                  ><img
                    src="/img/samod/New-Year-06.jpg"
                    alt="Logicspice functions &amp; events"
                    class="attachment-thumbnail size-thumbnail"
                /></Link>
              </div>
            </figure>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-12">
            <figure class="gallery-item">
              <div class="gallery-icon landscape">
                <Link
                  href="/img/samod/New-Year-07.jpg"
                  data-lightbox="images"
                  ><img
                    src="/img/samod/New-Year-07.jpg"
                    alt="Logicspice functions &amp; events"
                    class="attachment-thumbnail size-thumbnail"
                /></Link>
              </div>
            </figure>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-12">
            <figure class="gallery-item">
              <div class="gallery-icon landscape">
                <Link
                  href="/img/samod/New-Year-03.jpg"
                  data-lightbox="images"
                  ><img
                    src="/img/samod/New-Year-03.jpg"
                    alt="Logicspice functions &amp; events"
                    class="attachment-thumbnail size-thumbnail"
                /></Link>
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
  )
}

export default Page
