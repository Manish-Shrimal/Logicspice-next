import React from "react";
import Image from "next/image";
import AOS from "aos"; // Import AOS
import "../resposive.css";
import Link from "next/link";

const ServicesNewSection = () => {
  return (
    <section className="ServicesNewSection">
      <div className="container">
        <div className="positivity">
          <div className="positivitymain">
            <div
              className="ServiceTextAnimationWeb ServiceTextApp hidediv"
              id="mobilediv"
              style={{ display: "none", opacity: "0" }}
            >
              <span className="positivity__alone">Mobile app development</span>
              <div className="positivity__words">
                <span className="change color-blue">
                  Your vision, Our expertise, Live results
                  <i>
                    <Image
                      width={600}
                      height={100 / (100 / 100)}
                      src="/img/home/your-vision.png"
                      alt="icon"
                    />
                  </i>
                </span>
                <span className="change color-red">
                  Turning vision into apps
                  <i>
                    <Image
                      width={600}
                      height={100 / (100 / 100)}
                      src="/img/home/turning-vision.png"
                      alt="icon"
                    />
                  </i>
                </span>
                <span className="change color-yellow">
                  Empower business solutions
                  <i>
                    <Image
                      width={600}
                      height={100 / (100 / 100)}
                      src="/img/home/empower-business.png"
                      alt="icon"
                    />
                  </i>
                </span>
              </div>

              <div className="positivity__words2">
                <span className="change2">
                  <span className="color-blue-bg"></span>
                </span>
                <span className="change2">
                  <span className="color-red-bg"></span>
                </span>
                <span className="change2">
                  <span className="color-yellow-bg"></span>
                </span>
              </div>
            </div>

            <div
              className="ServiceTextAnimationWeb ServiceTextApp showdiv"
              id="websitediv"
              style={{ opacity: "1" }}
            >
              <span className="positivity__alone">Web development</span>
              <div className="positivity__words">
                <span className="change color-blue">
                  Seamless web: Design, function, UX
                  <i>
                    <Image
                      width={600}
                      height={100 / (100 / 100)}
                      src="/img/home/ux-design.png"
                      alt="icon"
                    />
                  </i>
                </span>
                <span className="change color-red">
                  Turning ideas into responsive web
                  <i>
                    <Image
                      width={600}
                      height={100 / (100 / 100)}
                      src="/img/home/responsive-web.png"
                      alt="icon"
                    />
                  </i>
                </span>
                <span className="change color-yellow">
                  Laravel experts, web &amp; app solutions
                  <i>
                    <Image
                      width={600}
                      height={100 / (100 / 100)}
                      src="/img/home/laravel-experts.png"
                      alt="icon"
                    />
                  </i>
                </span>
              </div>

              <div className="positivity__words2">
                <span className="change2">
                  <span className="color-blue-bg"></span>
                </span>
                <span className="change2">
                  <span className="color-red-bg"></span>
                </span>
                <span className="change2">
                  <span className="color-yellow-bg"></span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="MoreServicesBtn">
          <Link href="/services" className="">
            <span>
              More Services
              <i>
                <Image
                  width={20}
                  height={100}
                  src="/img/home/top-banner/rightArrowIcon.svg"
                  className="d-inline"
                  alt="icon"
                />
              </i>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesNewSection;

// import React from "react";
// import Image from "next/image";
// import AOS from "aos"; // Import AOS
// import "../resposive.css";
// import Link from "next/link";

// const ServicesNewSection = () => {
//   return (
//     <section className="ServicesNewSection">

//       <div className="container">
//         <div className="positivity">
//           <div className="positivitymain">
//             {/* Mobile Development Section */}
//             <div
//               className="ServiceTextAnimationWeb ServiceTextApp hidediv"
//               id="mobilediv"
//               style={{ display: "none", opacity: "0" }}
//             >
//               <span className="positivity__alone">Mobile app development</span>
//               <div className="positivity__words">
//                 <span className="change color-blue">
//                   Your vision, Our expertise, Live results
//                   <i>
//                     <Image
//                      priority={true}
//                       layout="responsive"
//                       width={600}
//                       height={100}
//                       sizes="(max-width: 768px) 100vw, 600px"
//                       src="/img/home/your-vision.png"
//                       alt="icon"
//                     />
//                   </i>
//                 </span>
//                 <span className="change color-red">
//                   Turning vision into apps
//                   <i>
//                     <Image
//                      priority={true}
//                       layout="responsive"
//                       width={600}
//                       height={100}
//                       sizes="(max-width: 768px) 100vw, 600px"
//                       src="/img/home/turning-vision.png"
//                       alt="icon"
//                     />
//                   </i>
//                 </span>
//                 <span className="change color-yellow">
//                   Empower business solutions
//                   <i>
//                     <Image
//                        priority={true}
//                       layout="responsive"
//                       width={600}
//                       height={100}
//                       sizes="(max-width: 768px) 100vw, 600px"
//                       src="/img/home/empower-business.png"
//                       alt="icon"
//                     />
//                   </i>
//                 </span>
//               </div>
//             </div>

//             {/* Web Development Section */}
//             <div
//               className="ServiceTextAnimationWeb ServiceTextApp showdiv"
//               id="websitediv"
//               style={{ opacity: "1" }}
//             >
//               <span className="positivity__alone">Web development</span>
//               <div className="positivity__words">
//                 <span className="change color-blue">
//                   Seamless web: Design, function, UX
//                   <i>
//                     <Image
//                       layout="responsive"
//                       width={600}
//                       height={100}
//                       sizes="(max-width: 768px) 100vw, 600px"
//                       src="/img/home/ux-design.png"
//                       alt="icon"
//                       priority={true}
//                     />
//                   </i>
//                 </span>
//                 <span className="change color-red">
//                   Turning ideas into responsive web
//                   <i>
//                     <Image
//                       layout="responsive"
//                       width={600}
//                       height={100}
//                       sizes="(max-width: 768px) 100vw, 600px"
//                       src="/img/home/responsive-web.png"
//                       alt="icon"
//                       priority={true}
//                     />
//                   </i>
//                 </span>
//                 <span className="change color-yellow">
//                   Laravel experts, web &amp; app solutions
//                   <i>
//                     <Image
//                       layout="responsive"
//                       width={600}
//                       height={100}
//                       sizes="(max-width: 768px) 100vw, 600px"
//                       src="/img/home/laravel-experts.png"
//                       alt="icon"
//                       priority={true}
//                     />
//                   </i>
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="MoreServicesBtn">
//           <Link href="/services" rel="preload" className="">
//             <span>
//               More Services
//               <i>
//                 <Image
//                   layout="fixed"
//                   width={20}
//                   height={20}
//                   src="/img/home/top-banner/rightArrowIcon.svg"
//                   alt="icon"
//                   priority={true}
//                 />
//               </i>
//             </span>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesNewSection;

// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import "../resposive.css";

// const ServicesNewSection = () => {
//   return (
//     <section className="ServicesNewSection">
//       <div className="container">
//         <div className="positivity">
//           <div className="positivitymain">
//             {/* Mobile Development Section (Initially Hidden) */}
//             <div
//               className="ServiceTextAnimationWeb ServiceTextApp hidediv"
//               id="mobilediv"
//               style={{ display: "none", opacity: "0" }}
//             >
//               <span className="positivity__alone">Mobile app development</span>
//               <div className="positivity__words">
//                 <span className="change color-blue">
//                   Your vision, Our expertise, Live results
//                   <i>
//                     <Image
//                       layout="responsive"
//                       width={600}
//                       height={100}
//                       sizes="(max-width: 768px) 100vw, 600px"
//                       src="/img/home/your-vision.png"
//                       alt="Your Vision Icon"
//                     />
//                   </i>
//                 </span>
//                 <span className="change color-red">
//                   Turning vision into apps
//                   <i>
//                     <Image
//                       layout="responsive"
//                       width={600}
//                       height={553}
//                       sizes="(max-width: 768px) 100vw, 600px"
//                       src="/img/home/turning-vision.png"
//                       alt="Turning Vision Icon"
//                     />
//                   </i>
//                 </span>
//                 <span className="change color-yellow">
//                   Empower business solutions
//                   <i>
//                     <Image
//                       layout="responsive"
//                       width={600}
//                       height={553}
//                       sizes="(max-width: 768px) 100vw, 600px"
//                       src="/img/home/empower-business.png"
//                       alt="Empower Business Icon"
//                     />
//                   </i>
//                 </span>
//               </div>
//             </div>

//             {/* Web Development Section (Visible by Default) */}
//             <div
//               className="ServiceTextAnimationWeb ServiceTextApp showdiv"
//               id="websitediv"
//               style={{ opacity: "1" }}
//             >
//               <span className="positivity__alone">Web development</span>
//               <div className="positivity__words">
//                 <span className="change color-blue">
//                   Seamless web: Design, function, UX
//                   <i>
//                     <Image
//                       layout="responsive"
//                       width={600}
//                       height={553}
//                       sizes="(max-width: 768px) 100vw, 600px"
//                       src="/img/home/ux-design.png"
//                       alt="UX Design Icon"
//                       priority={true} // ✅ Only this image has priority
//                       loading="eager"
//                     />
//                   </i>
//                 </span>
//                 <span className="change color-red">
//                   Turning ideas into responsive web
//                   <i>
//                     <Image
//                       layout="responsive"
//                       width={600}
//                       height={553}
//                       sizes="(max-width: 768px) 100vw, 600px"
//                       src="/img/home/responsive-web.png"
//                       alt="Responsive Web Icon"
//                     />
//                   </i>
//                 </span>
//                 <span className="change color-yellow">
//                   Laravel experts, web &amp; app solutions
//                   <i>
//                     <Image
//                       layout="responsive"
//                       width={600}
//                       height={553}
//                       sizes="(max-width: 768px) 100vw, 600px"
//                       src="/img/home/laravel-experts.png"
//                       alt="Laravel Experts Icon"
//                     />
//                   </i>
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* More Services Button */}
//         <div className="MoreServicesBtn">
//           <Link href="/services" rel="preload">
//             <span>
//               More Services
//               <i>
//                 <Image
//                   layout="fixed"
//                   width={20}
//                   height={20}
//                   src="/img/home/top-banner/rightArrowIcon.svg"
//                   alt="Right Arrow Icon"
//                 />
//               </i>
//             </span>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesNewSection;

// "use client"; // If using Next.js 13+ with app directory

// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import "../resposive.css";

// const ServicesNewSection = () => {
//   const [showMobileDiv, setShowMobileDiv] = useState(false);

//   useEffect(() => {
//     // Render mobile section only after initial mount
//     setShowMobileDiv(true);
//   }, []);

//   return (
//     <section className="ServicesNewSection">
//       <div className="container">
//         <div className="positivity">
//           <div className="positivitymain">
//             {/* Mobile Development Section - Delayed Render */}
//             {showMobileDiv && (
//               <div
//                 className="ServiceTextAnimationWeb ServiceTextApp hidediv"
//                 id="mobilediv"
//                 style={{ opacity: "0", display: "none" }}
//               >
//                 <span className="positivity__alone">Mobile app development</span>
//                 <div className="positivity__words">
//                   <span className="change color-blue">
//                     Your vision, Our expertise, Live results
//                     <i>
//                       <Image
//                         src="/img/home/your-vision.png"
//                         alt="Your Vision Icon"
//                         width={600}
//                         height={100}
//                         loading="lazy"
//                       />
//                     </i>
//                   </span>
//                   <span className="change color-red">
//                     Turning vision into apps
//                     <i>
//                       <Image
//                         src="/img/home/turning-vision.png"
//                         alt="Turning Vision Icon"
//                         width={600}
//                         height={553}
//                         loading="lazy"
//                       />
//                     </i>
//                   </span>
//                   <span className="change color-yellow">
//                     Empower business solutions
//                     <i>
//                       <Image
//                         src="/img/home/empower-business.png"
//                         alt="Empower Business Icon"
//                         width={600}
//                         height={553}
//                         loading="lazy"
//                       />
//                     </i>
//                   </span>
//                 </div>
//               </div>
//             )}

//             {/* Web Development Section - LCP Critical */}
//             <div
//               className="ServiceTextAnimationWeb ServiceTextApp showdiv"
//               id="websitediv"
//               style={{ opacity: "1" }}
//             >
//               <span className="positivity__alone">Web development</span>
//               <div className="positivity__words">
//                 <span className="change color-blue">
//                   Seamless web: Design, function, UX
//                   <i>
//                     <Image
//                       src="/img/home/ux-design.png"
//                       alt="UX Design Icon"
//                       width={600}
//                       height={553}
//                       priority // LCP optimization
//                       loading="eager"
//                     />
//                   </i>
//                 </span>
//                 <span className="change color-red">
//                   Turning ideas into responsive web
//                   <i>
//                     <Image
//                       src="/img/home/responsive-web.png"
//                       alt="Responsive Web Icon"
//                       width={600}
//                       height={553}
//                       priority
//                       loading="eager"
//                     />
//                   </i>
//                 </span>
//                 <span className="change color-yellow">
//                   Laravel experts, web &amp; app solutions
//                   <i>
//                     <Image
//                       src="/img/home/laravel-experts.png"
//                       alt="Laravel Experts Icon"
//                       width={600}
//                       height={553}
//                       priority
//                       loading="eager"
//                     />
//                   </i>
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* More Services Button */}
//         <div className="MoreServicesBtn">
//           <Link href="/services" prefetch={true}>
//             <span>
//               More Services
//               <i>
//                 <Image
//                   src="/img/home/top-banner/rightArrowIcon.svg"
//                   alt="Right Arrow Icon"
//                   width={20}
//                   height={20}
//                   loading="eager"
//                 />
//               </i>
//             </span>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesNewSection;

// "use client"; // For Next.js App Router
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import "../resposive.css";

// const ServicesNewSection = () => {
//   const [showMobileDiv, setShowMobileDiv] = useState(false);

//   useEffect(() => {
//     setShowMobileDiv(true); // Show mobile section after first render
//   }, []);

//   return (
//     <section className="ServicesNewSection">
//       <div className="container">
//         <div className="positivity">
//           <div className="positivitymain">
//             {/* Web Development Section (LCP Critical) */}
//             <div className="ServiceTextAnimationWeb ServiceTextApp showdiv" id="websitediv">
//               <span className="positivity__alone">Web development</span>
//               <div className="positivity__words">
//                 <span className="change color-blue">
//                   Seamless web: Design, function, UX
//                   <i>
//                     <Image
//                       src="/img/home/ux-design.png"
//                       alt="UX Design Icon"
//                       width={400} // Reduce size
//                       height={350}
//                       priority // LCP optimization
//                     />
//                   </i>
//                 </span>
//                 <span className="change color-red">
//                   Turning ideas into responsive web
//                   <i>
//                     <Image
//                       src="/img/home/responsive-web.png"
//                       alt="Responsive Web Icon"
//                       width={400}
//                       height={350}
//                       loading="lazy" // Lazy load non-LCP images
//                     />
//                   </i>
//                 </span>
//                 <span className="change color-yellow">
//                   Laravel experts, web &amp; app solutions
//                   <i>
//                     <Image
//                       src="/img/home/laravel-experts.png"
//                       alt="Laravel Experts Icon"
//                       width={400}
//                       height={350}
//                       loading="lazy"
//                     />
//                   </i>
//                 </span>
//               </div>
//             </div>

//             {/* Mobile Development Section (Lazy Load) */}
//             {showMobileDiv && (
//               <div className="ServiceTextAnimationWeb ServiceTextApp hidediv" id="mobilediv">
//                 <span className="positivity__alone">Mobile app development</span>
//                 <div className="positivity__words">
//                   <span className="change color-blue">
//                     Your vision, Our expertise, Live results
//                     <i>
//                       <Image
//                         src="/img/home/your-vision.png"
//                         alt="Your Vision Icon"
//                         width={400}
//                         height={350}
//                         loading="lazy"
//                       />
//                     </i>
//                   </span>
//                   <span className="change color-red">
//                     Turning vision into apps
//                     <i>
//                       <Image
//                         src="/img/home/turning-vision.png"
//                         alt="Turning Vision Icon"
//                         width={400}
//                         height={350}
//                         loading="lazy"
//                       />
//                     </i>
//                   </span>
//                   <span className="change color-yellow">
//                     Empower business solutions
//                     <i>
//                       <Image
//                         src="/img/home/empower-business.png"
//                         alt="Empower Business Icon"
//                         width={400}
//                         height={350}
//                         loading="lazy"
//                       />
//                     </i>
//                   </span>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* More Services Button */}
//         <div className="MoreServicesBtn">
//           <Link href="/services" prefetch>
//             <span>
//               More Services
//               <i>
//                 <Image
//                   src="/img/home/top-banner/rightArrowIcon.svg"
//                   alt="Right Arrow Icon"
//                   width={20}
//                   height={20}
//                   loading="lazy"
//                 />
//               </i>
//             </span>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesNewSection;

// "use client"; // For Next.js App Router
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import "../resposive.css";

// const ServicesNewSection = () => {
//   const [showMobileDiv, setShowMobileDiv] = useState(false);

//   useEffect(() => {
//     setShowMobileDiv(true); // Show mobile section after first render
//   }, []);

//   return (
//     <section className="ServicesNewSection">
//       <div className="container">
//         <div className="positivity">
//           <div className="positivitymain">
//             {/* Web Development Section (LCP Optimized) */}
//             <div className="ServiceTextAnimationWeb ServiceTextApp showdiv" id="websitediv">
//               <span className="positivity__alone">Web development</span>
//               <div className="positivity__words">
//                 <span className="change color-blue">
//                   Seamless web: Design, function, UX
//                   <i>
//                     <Image
//                       src="/img/home/ux-design.png"
//                       alt="UX Design Icon"
//                       width={600}
//                       height={553}
//                       // priority // LCP optimization
//                     />
//                   </i>
//                 </span>
//                 <span className="change color-red">
//                   Turning ideas into responsive web
//                   <i>
//                     <Image
//                       src="/img/home/responsive-web.png"
//                       alt="Responsive Web Icon"
//                       width={400}
//                       height={350}
//                       loading="lazy" // Lazy load non-critical images
//                     />
//                   </i>
//                 </span>
//                 <span className="change color-yellow">
//                   Laravel experts, web &amp; app solutions
//                   <i>
//                     <Image
//                       src="/img/home/laravel-experts.png"
//                       alt="Laravel Experts Icon"
//                       width={400}
//                       height={350}
//                       loading="lazy"
//                     />
//                   </i>
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Development Section (Deferred Render) */}
//         {showMobileDiv && (
//           <div className="ServiceTextAnimationWeb ServiceTextApp hidediv" id="mobilediv">
//             <span className="positivity__alone">Mobile app development</span>
//             <div className="positivity__words">
//               <span className="change color-blue">
//                 Your vision, Our expertise, Live results
//                 <i>
//                   <Image
//                     src="/img/home/your-vision.png"
//                     alt="Your Vision Icon"
//                     width={400}
//                     height={350}
//                     loading="lazy"
//                   />
//                 </i>
//               </span>
//               <span className="change color-red">
//                 Turning vision into apps
//                 <i>
//                   <Image
//                     src="/img/home/turning-vision.png"
//                     alt="Turning Vision Icon"
//                     width={400}
//                     height={350}
//                     loading="lazy"
//                   />
//                 </i>
//               </span>
//               <span className="change color-yellow">
//                 Empower business solutions
//                 <i>
//                   <Image
//                     src="/img/home/empower-business.png"
//                     alt="Empower Business Icon"
//                     width={400}
//                     height={350}
//                     loading="lazy"
//                   />
//                 </i>
//               </span>
//             </div>
//           </div>
//         )}

//         {/* More Services Button */}
//         <div className="MoreServicesBtn">
//           <Link href="/services" prefetch>
//             <span>
//               More Services
//               <i>
//                 <Image
//                   src="/img/home/top-banner/rightArrowIcon.svg"
//                   alt="Right Arrow Icon"
//                   width={20}
//                   height={20}
//                   loading="lazy"
//                 />
//               </i>
//             </span>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesNewSection;
