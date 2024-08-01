import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const Lsclassified = () => {
  return (
    <>
      <>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div class="feat-slide-img">
              <Image
                width={100}
                height={100}
                src="https://www.logicspice.com/app/webroot/img/images/classifier/Advanced_Filters.jpg"
                alt="Advanced Filters"
              />
            </div>
            <div class="hands-proved">
              <div class="titleof_scnew">Advanced Filters</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="feat-slide-img">
              <Image
                width={100}
                height={100}
                src="https://www.logicspice.com/app/webroot/img/images/classifier/Classifieds_Management.jpg"
                alt="Classifieds Management"
              />
            </div>
            <div class="hands-proved">
              <div class="titleof_scnew">Classifieds Management</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="feat-slide-img">
              <Image
                width={100}
                height={100}
                src="https://www.logicspice.com/app/webroot/img/images/classifier/Post_Classfied.jpg"
                alt="Post Classified"
              />
            </div>
            <div class="hands-proved">
              <div class="titleof_scnew">Post Classified</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="feat-slide-img">
              <Image
                width={100}
                height={100}
                src="https://www.logicspice.com/app/webroot/img/images/classifier/Multiple_Picture_Upload.jpg"
                alt="Multiple Picture Upload"
              />
            </div>
            <div class="hands-proved">
              <div class="titleof_scnew">Multiple Picture Upload</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="feat-slide-img">
              <Image
                width={100}
                height={100}
                src="https://www.logicspice.com/app/webroot/img/images/classifier/Location_Based.jpg"
                alt="Location Based"
              />
            </div>
            <div class="hands-proved">
              <div class="titleof_scnew">Location Based</div>
            </div>
          </SwiperSlide>
        </Swiper>
      </>
    </>
  );
};

export default Lsclassified;
