// "use client";
// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Image from "next/image";

// const Blogslider = () => {
//   const settings = {
//     dots: false,
//     lazyLoad: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 2,
//     slidesToScroll: 2,
//   };
//   return (
//     <>

//       <div className="slider-container">
//         <Slider {...settings}>
//           <div>
//             <li style={{ listStyle: "none" }}>
//               <figure>
//                 <Image
//                   width={500}
//                   height={100 / (100 / 100)}
//                   src="/img/home/blog/AI-Software-Development.jpg"
//                   class="lazy"
//                   alt="10 Best PHP Frameworks for Web Developers"
//                 />{" "}
//                 <figcaption>
//                   <a
//                     href="https://blog.logicspice.com/10-best-php-frameworks-for-web-developers"
//                     title="Read more"
//                     class="btn btn-primary"
//                   >
//                     Read more
//                   </a>{" "}
//                 </figcaption>
//               </figure>
//             </li>
//           </div>
//           <div>
//             <div>
//               <li style={{ listStyle: "none" }}>
//                 <figure>
//                   <Image
//                     width={500}
//                     height={100 / (100 / 100)}
//                     src="/img/home/blog/AI-Software-Development.jpg"
//                     class="lazy"
//                     alt="AI Integration in Software Development: From Theory to Real-World Applications"
//                   />{" "}
//                   <figcaption>
//                     <a
//                       href="https://blog.logicspice.com/ai-Integration-in-software-development-from-theory-to-real-world-applications"
//                       title="Read more"
//                       class="btn btn-primary"
//                     >
//                       Read more
//                     </a>{" "}
//                   </figcaption>
//                 </figure>
//               </li>
//             </div>
//           </div>
//           <div>
//             <li style={{ listStyle: "none" }}>
//               <figure>
//                 <Image
//                   width={500}
//                   height={100 / (100 / 100)}
//                   src="https://www.logicspice.com/app/webroot/files/blogs/thumb/759ba_AI-Software-Development.jpg"
//                   class="lazy"
//                   alt="AI Integration in Software Development: From Theory to Real-World Applications"
//                 />{" "}
//                 <figcaption>
//                   <a
//                     href="https://blog.logicspice.com/ai-Integration-in-software-development-from-theory-to-real-world-applications"
//                     title="Read more"
//                     class="btn btn-primary"
//                   >
//                     Read more
//                   </a>{" "}
//                 </figcaption>
//               </figure>
//             </li>
//           </div>
//           <div>
//             <li style={{ listStyle: "none" }}>
//               <figure>
//                 <Image
//                   width={500}
//                   height={100 / (100 / 100)}
//                   src="/img/home/blog/AI-Software-Development.jpg"
//                   class="lazy"
//                   alt="AI Integration in Software Development: From Theory to Real-World Applications"
//                 />{" "}
//                 <figcaption>
//                   <a
//                     href="https://blog.logicspice.com/ai-Integration-in-software-development-from-theory-to-real-world-applications"
//                     title="Read more"
//                     class="btn btn-primary"
//                   >
//                     Read more
//                   </a>{" "}
//                 </figcaption>
//               </figure>
//             </li>
//           </div>
//           <div>
//             <li style={{ listStyle: "none" }}>
//               <figure>
//                 <Image
//                   width={500}
//                   height={100 / (100 / 100)}
//                   src="/img/home/blog/AI-Software-Development.jpg"
//                   class="lazy"
//                   alt="AI Integration in Software Development: From Theory to Real-World Applications"
//                 />{" "}
//                 <figcaption>
//                   <a
//                     href="https://blog.logicspice.com/ai-Integration-in-software-development-from-theory-to-real-world-applications"
//                     title="Read more"
//                     class="btn btn-primary"
//                   >
//                     Read more
//                   </a>{" "}
//                 </figcaption>
//               </figure>
//             </li>
//           </div>
//           <div>
//             <li style={{ listStyle: "none" }}>
//               <figure>
//                 <Image
//                   width={500}
//                   height={100 / (100 / 100)}
//                   src="/img/home/blog/AI-Software-Development.jpg"
//                   class="lazy"
//                   alt="AI Integration in Software Development: From Theory to Real-World Applications"
//                 />{" "}
//                 <figcaption>
//                   <a
//                     href="https://blog.logicspice.com/ai-Integration-in-software-development-from-theory-to-real-world-applications"
//                     title="Read more"
//                     class="btn btn-primary"
//                   >
//                     Read more
//                   </a>{" "}
//                 </figcaption>
//               </figure>
//             </li>
//           </div>
//         </Slider>
//       </div>
//     </>
//   );
// };

// export default Blogslider;

// "use client";
// import React, { useState, useEffect } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Image from "next/image";
// import BaseAPI from "@/app/BaseAPI/BaseAPI";
// import axios from "axios";

// const Blogslider = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [error, setError] = useState(null); // State for handling errors
//   const getData = async () => {
//     try {
//       const response = await axios.get(BaseAPI + "/home/blog");
//       // console.log(response.data.data);
//       setBlogs(response.data);
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   useEffect(() => {
//     getData();
//   }, []);



//   const settings = {
//     dots: false,
//     lazyLoad: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 2,
//     slidesToScroll: 2,
//   };

//   return (
//     <div className="slider-container">
//       {error ? (
//         <p>{error}</p> // Display error message if API call fails
//       ) : (
//         <Slider {...settings}>
//           {blogs.map((blog, index) => (
//             <div key={index}>
//               <li style={{ listStyle: "none" }}>
//                 <figure>
//                   <Image
//                     width={500}
//                     height={100}
//                     src={blog.imageUrl}
//                     alt={blog.title}
//                     className="lazy"
//                   />
//                   <figcaption>
//                     <a
//                       href={blog.url}
//                       title="Read more"
//                       className="btn btn-primary"
//                     >
//                       Read more
//                     </a>
//                   </figcaption>
//                 </figure>
//               </li>
//             </div>
//           ))}
//         </Slider>
//       )}
//     </div>
//   );
// };

// export default Blogslider;



"use client";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import BaseAPI from "@/app/BaseAPI/BaseAPI";
import axios from "axios";

const Blogslider = () => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);

  // const getData = async () => {
  //   try {
  //     const response = await axios.get(`${BaseAPI}/home/blog`);
  //     const blogData = response.data?.data || []; // Adjust according to your API structure
  //     if (Array.isArray(blogData)) {
  //       setBlogs(blogData);
  //     } else {
  //       setError("Unexpected data format received");
  //     }
  //   } catch (error) {
  //     console.log(error.message);
  //     setError("Failed to load blogs. Please try again later.");
  //   }
  // };

  const getData = async () => {
        try {
           const response = await axios.get(BaseAPI + "/home/blog");
           // console.log(response.data.data);
           setBlogs(response.data && response.data.data);
        } catch (error) {
           console.log(error.message);
         }
       };
    
   

  useEffect(() => {
    getData();
  }, []);

  const settings = {
    dots: false,
    lazyLoad: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  };

  return (
    <div className="slider-container">
      {error ? (
        <p>{error}</p> // Display error message if API call fails
      ) : (
        <Slider {...settings}>
          {blogs.map((blog, index) => (
            <div key={index} style={{gap: "10px"}}>
              <li style={{ listStyle: "none", marginRight : "50px" }}>
                <figure>
                  <Image
                     
                    width={500}
                    height={100}
                    src={blog.img}
                    alt={blog.alt}
                    className="lazy"
                  />
                  <figcaption>
                    <a
                      href={blog.link}
                      title="Read more"
                      className="btn btn-primary"
                    >
                      Read more
                    </a>
                  </figcaption>
                </figure>
              </li>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default Blogslider;

