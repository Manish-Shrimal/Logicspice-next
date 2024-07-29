"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
          {workedWithData.map((item) => (
            <div class="client_logos ">
              <a rel="nofollow" href={item.link} target="_blank">
                <img
                  src={item.image}
                  data-original="https://www.logicspice.com/img/images/look/iwork-logo.webp"
                  class="lazy"
                  alt="client project logo - logicspice"
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
