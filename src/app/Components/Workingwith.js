"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "@/app/globals.css"

const Workingwith = () => {
  const settings = {
    dots: false,
    arrows: true,

    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
  };
  const clientLog = [
    {
      link: 'https://iworks.sn/',
      img: '/img/home/look/iwork-logo.webp',
    },
    {
      link: 'https://jobathome.fr/',
      img: '/img/home/look/logo-job-at-home.webp',
    },
    {
      link: 'https://www.wedoitcheaper.com/',
      img: '/img/home/look/logo-we-do.webp',
    },
    {
      link: 'https://www.gblancers.com/',
      img: '/img/home/look/logo-gb-lancers.webp',
    },
    {
      link: 'https://www.yourpension.ch/',
      img: '/img/home/look/yp-logo.webp',
    },
  ];
  return (
    <>
      <div className="slider-container">
      <div id="workingowl">
        <Slider {...settings}>
      
          <div class="client_logos ">
         
        
          
            <a rel="nofollow" href="https://iworks.sn/" target="_blank">
              <Image
                width={100}
                height={100}
                src="/img/home/look/iwork-logo.webp"
                data-original="/img/home/look/iwork-logo.webp"
                class="lazy"
                alt="client project logo - logicspice"
                style={{
                  backgroundImage:
                    "url(&quot;/img/home/look/iwork-logo.webp&quot;)",
                }}
              />
            </a>
          </div>
          <div class="client_logos ">
            <a rel="nofollow" href="https://iworks.sn/" target="_blank">
              <Image
                width={100}
                height={100}
                src="/img/home/look/iwork-logo.webp"
                data-original="/img/home/look/iwork-logo.webp"
                class="lazy"
                alt="client project logo - logicspice"
                style={{
                  backgroundImage:
                    "url(&quot;/img/home/look/iwork-logo.webp&quot;)",
                }}
              />
            </a>
          </div>
          <div class="client_logos ">
            <a rel="nofollow" href="https://iworks.sn/" target="_blank">
              <Image
                width={100}
                height={100}
                src="/img/home/look/iwork-logo.webp"
                data-original="/img/home/look/iwork-logo.webp"
                class="lazy"
                alt="client project logo - logicspice"
                style={{
                  backgroundImage:
                    "url(&quot;/img/home/look/iwork-logo.webp&quot;)",
                }}
              />
            </a>
          </div>
          <div class="client_logos ">
            <a rel="nofollow" href="https://iworks.sn/" target="_blank">
              <Image
                width={100}
                height={100}
                src="/img/home/look/iwork-logo.webp"
                data-original="/img/home/look/iwork-logo.webp"
                class="lazy"
                alt="client project logo - logicspice"
                style={{
                  backgroundImage:
                    "url(&quot;/img/home/look/iwork-logo.webp&quot;)",
                }}
              />
            </a>
          </div>
       
        </Slider>
        </div>
      </div>
    </>
  );
};

export default Workingwith;
