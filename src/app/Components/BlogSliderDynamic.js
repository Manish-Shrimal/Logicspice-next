"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
const BlogSliderDynamic = ({blogData, blogImagePath}) => {
  const settings = {
    dots: false,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  };

  // console.log(blogData,"data");
  // console.log(blogImagePath,"imagepath");

  return (
    <>
    
      <div className="slider-container">
        <Slider {...settings}>
            {blogData &&blogData.map((item) => (
                <div>
                <li style={{ listStyle: "none" }}>
                  <figure>
                    <Image
                      width={500}
                      height={100 / (100 / 100)}
                      src={`${blogImagePath}/${item.image}`}
                      class="lazy"
                      alt="10 Best PHP Frameworks for Web Developers"
                    />{" "}
                    <figcaption>
                      <a
                        href={`https://blog.logicspice.com/${item.slug}`}
                        title="Read more"
                        class="btn btn-primary"
                      >
                        Read more
                      </a>{" "}
                    </figcaption>
                  </figure>
                </li>
              </div>
            ))}
          
        </Slider>
      </div>
    </>
  );
};

export default BlogSliderDynamic;
