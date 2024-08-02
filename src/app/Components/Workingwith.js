"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";

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
  return (
    <>
      <div className="slider-container">
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
    </>
  );
};

export default Workingwith;
