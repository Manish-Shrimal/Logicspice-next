"use client";
import React from "react";
import Slider from "react-slick";

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
                <img
                  src="https://www.logicspice.com/img/images/look/iwork-logo.webp"
                  data-original="https://www.logicspice.com/img/images/look/iwork-logo.webp"
                  class="lazy"
                  alt="client project logo - logicspice"
                  style={{
                    backgroundImage:
                      "url(&quot;https://www.logicspice.com/img/images/look/iwork-logo.webp&quot;)",
                  }}
                />
              </a>
            </div>
            <div class="client_logos ">
              <a rel="nofollow" href="https://iworks.sn/" target="_blank">
                <img
                  src="https://www.logicspice.com/img/images/look/iwork-logo.webp"
                  data-original="https://www.logicspice.com/img/images/look/iwork-logo.webp"
                  class="lazy"
                  alt="client project logo - logicspice"
                  style={{
                    backgroundImage:
                      "url(&quot;https://www.logicspice.com/img/images/look/iwork-logo.webp&quot;)",
                  }}
                />
              </a>
            </div>
            <div class="client_logos ">
              <a rel="nofollow" href="https://iworks.sn/" target="_blank">
                <img
                  src="https://www.logicspice.com/img/images/look/iwork-logo.webp"
                  data-original="https://www.logicspice.com/img/images/look/iwork-logo.webp"
                  class="lazy"
                  alt="client project logo - logicspice"
                  style={{
                    backgroundImage:
                      "url(&quot;https://www.logicspice.com/img/images/look/iwork-logo.webp&quot;)",
                  }}
                />
              </a>
            </div>
            <div class="client_logos ">
              <a rel="nofollow" href="https://iworks.sn/" target="_blank">
                <img
                  src="https://www.logicspice.com/img/images/look/iwork-logo.webp"
                  data-original="https://www.logicspice.com/img/images/look/iwork-logo.webp"
                  class="lazy"
                  alt="client project logo - logicspice"
                  style={{
                    backgroundImage:
                      "url(&quot;https://www.logicspice.com/img/images/look/iwork-logo.webp&quot;)",
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
