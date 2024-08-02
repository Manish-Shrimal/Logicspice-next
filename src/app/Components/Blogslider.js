"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const Blogslider = () => {
  const settings = {
    dots: false,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  };
  return (
    <>
      {/* <Slider {...settings}>
        <div>
        <li>
                        <figure>
                            <Image width={500}
height={100 / (100 /100)}  src="https://www.logicspice.com/app/webroot/files/blogs/thumb/be5ea_Best-PHP-Frameworks.jpg" class="lazy" alt="10 Best PHP Frameworks for Web Developers"/>                            <figcaption>
                                <a href="https://blog.logicspice.com/10-best-php-frameworks-for-web-developers" title="Read more" class="btn btn-primary">Read more</a>                            </figcaption>
                        </figure>
                    </li>
        </div>
       
        </Slider> */}

      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <li style={{ listStyle: "none" }}>
              <figure>
                <Image
                  width={500}
                  height={100 / (100 / 100)}
                  src="/img/home/blog/AI-Software-Development.jpg"
                  class="lazy"
                  alt="10 Best PHP Frameworks for Web Developers"
                />{" "}
                <figcaption>
                  <a
                    href="https://blog.logicspice.com/10-best-php-frameworks-for-web-developers"
                    title="Read more"
                    class="btn btn-primary"
                  >
                    Read more
                  </a>{" "}
                </figcaption>
              </figure>
            </li>
          </div>
          <div>
            <div>
              <li style={{ listStyle: "none" }}>
                <figure>
                  <Image
                    width={500}
                    height={100 / (100 / 100)}
                    src="/img/home/blog/AI-Software-Development.jpg"
                    class="lazy"
                    alt="AI Integration in Software Development: From Theory to Real-World Applications"
                  />{" "}
                  <figcaption>
                    <a
                      href="https://blog.logicspice.com/ai-Integration-in-software-development-from-theory-to-real-world-applications"
                      title="Read more"
                      class="btn btn-primary"
                    >
                      Read more
                    </a>{" "}
                  </figcaption>
                </figure>
              </li>
            </div>
          </div>
          <div>
            <li style={{ listStyle: "none" }}>
              <figure>
                <Image
                  width={500}
                  height={100 / (100 / 100)}
                  src="https://www.logicspice.com/app/webroot/files/blogs/thumb/759ba_AI-Software-Development.jpg"
                  class="lazy"
                  alt="AI Integration in Software Development: From Theory to Real-World Applications"
                />{" "}
                <figcaption>
                  <a
                    href="https://blog.logicspice.com/ai-Integration-in-software-development-from-theory-to-real-world-applications"
                    title="Read more"
                    class="btn btn-primary"
                  >
                    Read more
                  </a>{" "}
                </figcaption>
              </figure>
            </li>
          </div>
          <div>
            <li style={{ listStyle: "none" }}>
              <figure>
                <Image
                  width={500}
                  height={100 / (100 / 100)}
                  src="/img/home/blog/AI-Software-Development.jpg"
                  class="lazy"
                  alt="AI Integration in Software Development: From Theory to Real-World Applications"
                />{" "}
                <figcaption>
                  <a
                    href="https://blog.logicspice.com/ai-Integration-in-software-development-from-theory-to-real-world-applications"
                    title="Read more"
                    class="btn btn-primary"
                  >
                    Read more
                  </a>{" "}
                </figcaption>
              </figure>
            </li>
          </div>
          <div>
            <li style={{ listStyle: "none" }}>
              <figure>
                <Image
                  width={500}
                  height={100 / (100 / 100)}
                  src="/img/home/blog/AI-Software-Development.jpg"
                  class="lazy"
                  alt="AI Integration in Software Development: From Theory to Real-World Applications"
                />{" "}
                <figcaption>
                  <a
                    href="https://blog.logicspice.com/ai-Integration-in-software-development-from-theory-to-real-world-applications"
                    title="Read more"
                    class="btn btn-primary"
                  >
                    Read more
                  </a>{" "}
                </figcaption>
              </figure>
            </li>
          </div>
          <div>
            <li style={{ listStyle: "none" }}>
              <figure>
                <Image
                  width={500}
                  height={100 / (100 / 100)}
                  src="/img/home/blog/AI-Software-Development.jpg"
                  class="lazy"
                  alt="AI Integration in Software Development: From Theory to Real-World Applications"
                />{" "}
                <figcaption>
                  <a
                    href="https://blog.logicspice.com/ai-Integration-in-software-development-from-theory-to-real-world-applications"
                    title="Read more"
                    class="btn btn-primary"
                  >
                    Read more
                  </a>{" "}
                </figcaption>
              </figure>
            </li>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Blogslider;
