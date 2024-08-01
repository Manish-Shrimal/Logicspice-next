"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const Slidersimple = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <>
      <Slider {...settings}>
        <div class="HomeSlider HomeSliderJobSlide">
          <div class="container">
            <div class="row">
              <div class="col-xs-12 col-sm-6 col-md-6 pull-right">
                <div class="HomeBannerImg">
                  <div class="LeftGolImg balloon">
                    <Image
                      width={100}
                      height={100 / (100 / 100)}
                      src="/img/home/top-banner/gol-img.webp"
                      alt=""
                    />
                  </div>
                  <div class="LeftTxtImg">
                    <Image
                      width={100}
                      height={100 / (100 / 100)}
                      src="/img/home/top-banner/job-text-img.webp"
                      alt=""
                    />
                  </div>
                  <Image
                    width={500}
                    height={100 / (100 / 100)}
                    class="AppDevelomentsImgHome"
                    src="/img/home/top-banner/app-development-banner.webp"
                    alt=""
                  />
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-6 pull-left">
                <div class="HomeSliderTxt">
                  <h2>
                    Mobile Apps Development{" "}
                    <span class="smallText">Company</span>
                  </h2>
                  <p>
                    Ready to use, affordable &amp; custom solutions
                    <br />
                    1800+ projects | 18+ years | 60% repeat clients
                  </p>
                  <a href="/portfolio" class="btn btn-primary bt34">
                    PORTFOLIO
                  </a>{" "}
                  <a
                    href="/softwares/hire-developers"
                    class="btn btn-default bt234"
                  >
                    HIRE A DEVELOPER
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="HomeSlider HomeSliderJobSlide">
          <div class="container">
            <div class="row">
              <div class="col-sm-12 col-md-6 pull-right">
                <div class="HomeBannerImg">
                  <div class="GrouponIcons1">
                    <Image
                      width={100}
                      height={100 / (100 / 100)}
                      src="/img/home/top-banner/groupon-icon1.webp"
                      alt="Groupon Clone"
                    />
                  </div>
                  <div class="GrouponIcons2">
                    <Image
                      width={100}
                      height={100 / (100 / 100)}
                      src="/img/home/top-banner/groupon-icon2.webp"
                      alt="Groupon Clone"
                    />
                  </div>
                  <div class="GrouponIcons3">
                    <Image
                      width={500}
                      height={100 / (100 / 100)}
                      src="/img/home/top-banner/groupon-icon3.webp"
                      alt="Groupon Clone"
                    />
                  </div>
                  <Image
                    width={500}
                    height={100 / (100 / 100)}
                    src="/img/home/top-banner/groupon-development-banner.webp"
                    alt="Groupon Clone"
                  />
                </div>
              </div>
              <div class="col-sm-12 col-md-6 pull-left">
                <div class="HomeSliderTxt">
                  <h2>
                    Groupon Clone <span>Script</span>
                  </h2>
                  <p>Similar to Daily Deal Software &amp; Coupon Script</p>
                  <a class="btn btn-primary" href="/softwares/groupon-clone">
                    KNOW MORE
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="HomeSlider HomeSliderJobSlide">
          <div class="container">
            <div class="row">
              <div class="col-sm-4 col-md-6 pull-right">
                <div class="HomeBannerImg">
                  <div class="FivverIcons1">
                    <Image
                      width={100}
                      height={100 / (100 / 100)}
                      src="/img/home/top-banner/fivver-icon1.webp"
                      alt="gigger"
                    />
                  </div>
                  <div class="FivverIcons2">
                    <Image
                      width={100}
                      height={100 / (100 / 100)}
                      src="/img/home/top-banner/fivver-icon2.webp"
                      alt="gigger"
                    />
                  </div>
                  <div class="FivverIcons3">
                    <Image
                      width={500}
                      height={100 / (100 / 100)}
                      src="/img/home/top-banner/fivver-icon3.webp"
                      alt="gigger"
                    />
                  </div>
                  <div class="FivverIcons4">
                    <Image
                      width={100}
                      height={100 / (100 / 100)}
                      src="/img/home/top-banner/fivver-icon4.webp"
                      alt="gigger"
                    />
                  </div>
                  <Image
                    width={500}
                    height={100 / (100 / 100)}
                    src="/img/home/top-banner/fivver-development-banner.webp"
                    alt="gigger"
                  />
                </div>
              </div>
              <div class="col-sm-8 col-md-6 pull-left">
                <div class="HomeSliderTxt">
                  <h2>
                    Fiverr Clone <span>Script</span>
                  </h2>
                  <p>Online Micro Job Portal Software and Mobile Apps</p>
                  <a class="btn btn-primary" href="/softwares/fiverr-clone">
                    KNOW MORE
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div class="HomeSlider HomeSliderJobSlide">
            <div class="container">
              <div class="row">
                <div class="col-sm-12 col-md-6 pull-right">
                  <div class="HomeBannerImg">
                    <div class="FreelancerIcons1">
                      <Image
                        width={100}
                        height={100 / (100 / 100)}
                        src="/img/home/top-banner/freelancer-icon1.webp"
                        alt="Freelancer Clone"
                      />
                    </div>
                    <div class="FreelancerIcons2">
                      <Image
                        width={100}
                        height={100 / (100 / 100)}
                        src="/img/home/top-banner/freelancer-icon2.webp"
                        alt="Freelancer Clone"
                      />
                    </div>
                    <div class="FreelancerIcons3">
                      <Image
                        width={100}
                        height={100 / (100 / 100)}
                        src="/img/home/top-banner/fivver-icon4.webp"
                        alt="Freelancer Clone"
                      />
                    </div>
                    <div class="FreelancerIcons4">
                      <Image
                        width={500}
                        height={100 / (100 / 100)}
                        src="/img/home/top-banner/freelancer-icon2.webp"
                        alt="Freelancer Clone"
                      />
                    </div>
                    <div class="FreelancerIcons5">
                      <Image
                        width={100}
                        height={100 / (100 / 100)}
                        src="/img/home/top-banner/freelancer-icon3.webp"
                        alt="Freelancer Clone"
                      />
                    </div>
                    <Image
                      width={500}
                      height={100 / (100 / 100)}
                      src="/img/home/top-banner/freelancer-development-banner.webp"
                      alt="Freelancer Clone"
                    />
                  </div>
                </div>
                <div class="col-sm-12 col-md-6 pull-left">
                  <div class="HomeSliderTxt">
                    <h2>
                      Freelancer <span>Clone</span>
                    </h2>
                    <p>
                      Freelance Marketplace software &amp; Upwork clone script
                    </p>
                    <a
                      class="btn btn-primary"
                      href="/softwares/freelancer-clone"
                    >
                      KNOW MORE
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div class="HomeSlider HomeSliderJobSlide">
            <div class="container">
              <div class="row">
                <div class="col-sm-12 col-md-6 pull-right">
                  <div class="HomeBannerImg">
                    <div class="LaravelIcons1">
                      <Image
                        width={500}
                        height={100 / (100 / 100)}
                        src="/img/home/top-banner/laravel-icon1.webp"
                        alt="Laravel Development"
                      />
                    </div>
                    <div class="LaravelIcons2">
                      <Image
                        width={500}
                        height={100 / (100 / 100)}
                        src="/img/home/top-banner/laravel-icon2.webp"
                        alt="Laravel Development"
                      />
                    </div>
                    <Image
                      width={500}
                      height={100 / (100 / 100)}
                      src="/img/home/top-banner/laravel-development-banner.webp"
                      alt="Laravel Development"
                    />
                  </div>
                </div>
                <div class="col-sm-12 col-md-6 pull-left">
                  <div class="HomeSliderTxt">
                    <h2>
                      Laravel <span>Development</span>
                    </h2>
                    <p>
                      Logicspice offers Laravel Web development services for any
                      kind of enterprise.{" "}
                    </p>
                    <a
                      class="btn btn-primary"
                      href="/softwares/laravel-development"
                    >
                      KNOW MORE
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="HomeSlider HomeSliderJobSlide">
            <div class="container">
              <div class="row">
                <div class="col-sm-12 col-md-6 pull-right">
                  <div class="HomeBannerImg">
                    <div class="ClassifiedIcons1">
                      <Image
                        width={500}
                        height={100 / (100 / 100)}
                        src="/img/home/top-banner/classified-icon1.webp"
                        alt="PHP Classified Ads Script"
                      />
                    </div>
                    <div class="ClassifiedIcons2">
                      <Image
                        width={500}
                        height={100 / (100 / 100)}
                        src="/img/home/top-banner/classified-icon2.webp"
                        alt="PHP Classified Ads Script"
                      />
                    </div>
                    <Image
                      width={500}
                      height={100 / (100 / 100)}
                      src="/img/home/top-banner/classified-development-banner.webp"
                      alt="PHP Classified Ads Script"
                    />
                  </div>
                </div>
                <div class="col-sm-12 col-md-6 pull-left">
                  <div class="HomeSliderTxt">
                    <h2>
                      PHP Classified Ads <span>Script</span>
                    </h2>
                    <p>Empower Your Ads, Expand Your Reach</p>
                    <a
                      class="btn btn-primary"
                      href="/softwares/classified-ads-script"
                    >
                      KNOW MORE
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </>
  );
};

export default Slidersimple;
