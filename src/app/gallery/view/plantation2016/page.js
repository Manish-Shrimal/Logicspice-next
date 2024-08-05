import React from 'react'
import Link from "next/link";
import Image from "next/image";

const Page = () => {
  return (
    <div>
      <section class="resources-header">
  <div class="container">
    <span>
      <span>Plantation 2016</span>
    </span>
  </div>
</section>

<section class="breadcrems_header">
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <h1>Plantation 2016</h1>
      </div>
      <div class="col-md-6">
        <ol class="breadcrumb">
          <li><Link href="/">Home</Link></li>
          /
          <li><Link href="/gallery/">Gallery</Link></li>
          /
          <li class="current">
            <span id="title_here"
              >Plantation 2016 ( <span>July 16,2016</span> )</span
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
                  href="/img/plantation/0a6a1_Logicspice-Plantation-event.JPG"
                  data-lightbox="images"
                  ><Image width ={100} height ={100}
                    src="/img/plantation/0a6a1_Logicspice-Plantation-event.JPG"
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
                  href="/img/plantation/ab165_Logicspice-plantation-in-2016.JPG"
                  data-lightbox="images"
                  ><Image width ={100} height ={100}
                    src="/img/plantation/ab165_Logicspice-plantation-in-2016.JPG"
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
                  href="/img/plantation/cfa52_Plantation-By-Team-Logicspice.JPG"
                  data-lightbox="images"
                  ><Image width ={100} height ={100}
                    src="/img/plantation/cfa52_Plantation-By-Team-Logicspice.JPG"
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
                  href="/img/plantation/2a91a_Plantation-By-Logicspice.jpg"
                  data-lightbox="images"
                  ><Image width ={100} height ={100}
                    src="/img/plantation/2a91a_Plantation-By-Logicspice.jpg"
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
                  href="/img/plantation/6bd08_Plantation-By-Logicspice.jpg"
                  data-lightbox="images"
                  ><Image width ={100} height ={100}
                    src="/img/plantation/6bd08_Plantation-By-Logicspice.jpg"
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
                  href="/img/plantation/a5707_Plantation-2.JPG"
                  data-lightbox="images"
                  ><Image width ={100} height ={100}
                    src="/img/plantation/a5707_Plantation-2.JPG"
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
                  href="/img/plantation/d885b_Plantation2.jpg"
                  data-lightbox="images"
                  ><Image width ={100} height ={100}
                    src="/img/plantation/d885b_Plantation2.jpg"
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
                  href="/img/plantation/13cc2_Plantation1.jpg"
                  data-lightbox="images"
                  ><Image width ={100} height ={100}
                    src="/img/plantation/13cc2_Plantation1.jpg"
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
                  href="/img/plantation/0a224_plantation1.jpg"
                  data-lightbox="images"
                  ><Image width ={100} height ={100}
                    src="/img/plantation/0a224_plantation1.jpg"
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

    </div>
  )
}

export default Page
