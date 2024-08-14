"use client";
import React from "react";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Link from "next/link";


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
  const takeAlookData = [{
    notMobileImage: '/img/home/look/iWorks.webp',
    classname:'',
    originalImage : '/img/home/look/iwork-logo.webp',
    alt: 'iwork',
    text:'iWorks supports Multilingual and Social Media Sign in and Sign Up Features.',
    link:'https://lswebsitedemo.logicspice.com/Vuejs/case-study/iworks',
},{
    notMobileImage: '/img/home/look/Job-to-home.webp',
    classname:'',
    originalImage : '/img/home/look/logo-job-at-home.webp',
    alt: 'JOB AT HOME',
    text:'Job At Home supports Multiple social channels to sharing the jobs including Whatsapp, Facebook, LinkedIn, Twitter etc',
    link:'https://lswebsitedemo.logicspice.com/Vuejs/case-study/job-at-home',
    
},{
    notMobileImage: '/img/home/look/GB-Lancer.webp',
    classname:'',
    originalImage : '/img/home/look/logo-gb-lancers.webp',
    alt: 'GB Lancers',
    text:'GB Lancers supports Seller and Buyer management.',
    link:'https://lswebsitedemo.logicspice.com/Vuejs/case-study/gb-lancers',
},{
    notMobileImage: '/img/home/look/We-do.webp',
    classname:'beano',
    originalImage : '/img/home/look/logo-we-do.webp',
    alt: 'We do it Cheaper',
    text:'We Do it Cheaper supports Buyer and Freelancer management.',
    link:'https://lswebsitedemo.logicspice.com/Vuejs/case-study/we-do-it-cheaper', 
},{
    notMobileImage: '/img/home/look/your-pension.webp',
    classname:'',
    originalImage : '/img/home/look/yp-logo.webp',
    alt: 'YourPension',
    text:'Responsive Custom Build website for Pension Plan Management',
    link:'https://lswebsitedemo.logicspice.com/Vuejs/case-study/pension-plan-management',
},{
    notMobileImage: '/img/home/look/Iamcleaning.webp',
    classname:'utrack',
    originalImage : '/img/home/look/Iamcleaninglogo.webp',
    alt: 'utrack',
    text:"It's provides domestic and commercial cleaning services.",
    link:'https://lswebsitedemo.logicspice.com/Vuejs/case-study/Iamcleaning',
},{
    notMobileImage: '/img/home/look/Zibzob.webp',
    classname:'',
    originalImage : '/img/home/look/zip-joblogo.webp',
    alt: 'Zibzob',
    text:'We Write Resumes that Get You Hired',
    link:'https://lswebsitedemo.logicspice.com/Vuejs/case-study/zipjob',
}];


  return (
    <>
      <Slider {...settings}>
        {/* <div class="row d-flex align-items-center">
          <div class="col-md-6">
            <Image
              width={500}
              height={100 / (100 / 100)}
              data-aos="fade-right"
              class="Zibjob aos-init aos-animate"
              src="/img/home/look/Zibzob.webp"
              alt="Zibjob"
            />
          </div>

          <div class="col-md-6">
            <div class="ClientLogoHome">
              <Image
                width={200}
                height={100 / (100 / 100)}
                src="/img/home/look/zip-joblogo.webp"
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
            <Image
              width={500}
              height={100 / (100 / 100)}
              data-aos="fade-right"
              class="Zibjob aos-init aos-animate"
              src="/img/home/look/Zibzob.webp"
              alt="Zibjob"
            />
          </div>

          <div class="col-md-6">
            <div class="ClientLogoHome">
              <Image
                width={200}
                height={100 / (100 / 100)}
                src="/img/home/look/zip-joblogo.webp"
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
        </div> */}
     
        {takeAlookData.map((lookData, index) => (
        <div key={index} className="row d-flex">
          <div className="col-md-7">
            <Image
              data-aos="fade-right"
              src={lookData.notMobileImage}
              className={lookData.classname}
              alt={lookData.alt}
              width={500} // Adjust width and height according to your design
              height={300}
            />
          </div>
          <div className="col-md-5">
            <Image
              src={lookData.originalImage}
              alt={lookData.alt}
              width={150}
              height={50}
            />
            <p className="to_matf">{lookData.text}</p>
            <a href={lookData.link} className="case-study">
              Case Study
            </a>
            <p className="have_look">Have a look on similar Project </p>
            <div className="multibutton">
              <Link href="/company/portfolio" className="btn btn-primary">
                Portfolio
              </Link>
              <Link href="/contact-us" className="btn btn-default">
                Request a quote
              </Link>
            </div>
          </div>
        </div>
      ))}
       
    
      </Slider>
    </>
  );
};

export default Looksilder;
