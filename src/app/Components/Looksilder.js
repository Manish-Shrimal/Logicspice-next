"use client";
import React from "react";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Looksilder = () => {
  const settings = {
    dots: false,
    arrows: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
  };
  return (
    <>
      <Slider {...settings}>
        <div class="row d-flex align-items-center">
          <div class="col-md-6">
            <img
              data-aos="fade-right"
              class="Zibjob aos-init aos-animate"
              src="https://www.logicspice.com/img/images/look/Zibzob.webp"
              alt="Zibjob"
            />
          </div>

          <div class="col-md-6">
            <div class="ClientLogoHome">
              <img
                src="https://www.logicspice.com/img/images/look/zip-joblogo.webp"
                data-original=""
                alt="Zibzob"
              />
            </div>
            <p class="to_matf"> We Write Resumes that Get You Hired</p>
            <a
              href="https://www.logicspice.com/case-study/zipjob"
              class="case-study"
            >
              Case Study
            </a>
            <p class="have_look">Have a look at similar Projects </p>
            <div class="multibutton">
              <a
                href="https://www.logicspice.com/portfolio"
                class="btn btn-primary"
              >
                Portfolio
              </a>
              <a
                href="https://www.logicspice.com/contact-us"
                class="btn btn-default"
              >
                Request a quote
              </a>
            </div>
          </div>
        </div>
        <div class="row d-flex align-items-center">
          <div class="col-md-6">
            <img
              data-aos="fade-right"
              class="Zibjob aos-init aos-animate"
              src="https://www.logicspice.com/img/images/look/Zibzob.webp"
              alt="Zibjob"
            />
          </div>

          <div class="col-md-6">
            <div class="ClientLogoHome">
              <img
                src="https://www.logicspice.com/img/images/look/zip-joblogo.webp"
                data-original=""
                alt="Zibzob"
              />
            </div>
            <p class="to_matf"> We Write Resumes that Get You Hired</p>
            <a
              href="https://www.logicspice.com/case-study/zipjob"
              class="case-study"
            >
              Case Study
            </a>
            <p class="have_look">Have a look at similar Projects </p>
            <div class="multibutton">
              <a
                href="https://www.logicspice.com/portfolio"
                class="btn btn-primary"
              >
                Portfolio
              </a>
              <a
                href="https://www.logicspice.com/contact-us"
                class="btn btn-default"
              >
                Request a quote
              </a>
            </div>
          </div>
        </div>
      </Slider>
    </>
  );
};

export default Looksilder;
