"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "@/app/globals.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

const Workingwith = () => {
 

  const clientLog = [
    {
      link: "https://iworks.sn/",
      img: "/img/home/look/iwork-logo.webp",
    },
    {
      link: "https://jobathome.fr/",
      img: "/img/home/look/logo-job-at-home.webp",
    },
    {
      link: "https://www.wedoitcheaper.com/",
      img: "/img/home/look/logo-we-do.webp",
    },
    {
      link: "https://www.gblancers.com/",
      img: "/img/home/look/logo-gb-lancers.webp",
    },
    {
      link: "https://www.yourpension.ch/",
      img: "/img/home/look/yp-logo.webp",
    },
  ];

  return (
    <div id="workingowl">
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {clientLog.map((client, index) => (
          <SwiperSlide key={index}>
            <div className="client_logos">
              <a rel="nofollow" href={client.link} target="_blank">
                <Image
                  width={110}
                  height={100 / (100 / 100)}
                  src={client.img}
                  alt={`client project logo - ${index}`}
                  className="lazy"
                  // style={{
                  //   backgroundImage: `url(${client.img})`,
                  // }}
                />
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Workingwith;


        

        


