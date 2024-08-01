"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const WorkedWith = ({ workedWithData }) => {
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
          {workedWithData.map((item, index) => (
            <div className="client_logos" key={index}>
              <a rel="nofollow" href={item.link} target="_blank">
                <Image
                  width={100}
                  height={100}
                  src={item.image}
                  alt="client project logo - logicspice"
                  className="lazy"
                  style={{
                    backgroundImage: `url(${item.image})`,
                  }}
                />
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default WorkedWith;
