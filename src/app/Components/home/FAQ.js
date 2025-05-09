// import React from 'react'

// const FAQ = () => {
//   return (
//     <div>FAQ</div>
//   )
// }

// export default FAQ

"use client";
// import React, { useState } from "react";
// // import './FAQ.css';

// const faqData = [
//   {
//     question: "What types of ready-made software does Logicspice offer?",
//     answer:
//       "We offer a wide range of pre-built software solutions, including job portal scripts, on-demand service apps, salon and doctor booking systems, and many more — all customizable to suit your business needs.",
//   },
//   {
//     question: "Can Logicspice speed up the delivery of projects?",
//     answer:
//       "Yes, with our modular approach and reusable components, project delivery is significantly faster.",
//   },
//   {
//     question: "What development process do you follow?",
//     answer:
//       "We follow Agile methodology involving sprint planning, daily standups, and iterative delivery.",
//   },
//   {
//     question: "How do you make sure the software is high quality?",
//     answer:
//       "We ensure quality through automated testing, peer reviews, and client validation at each phase.",
//   },
//   {
//     question: "Will I be updated regularly during the project?",
//     answer:
//       "Absolutely. We provide weekly demos, reports, and communication through tools like Slack or Jira.",
//   },
//   {
//     question: "What if I need changes after the project is live?",
//     answer:
//       "We offer maintenance and support plans to help you evolve your software post-launch.",
//   },
//   {
//     question:
//       "Can I hire developers from your team on a full-time or part-time basis?",
//     answer:
//       "Yes, we provide flexible hiring models including full-time, part-time, and hourly.",
//   },
//   {
//     question: "Can Logicspice help us integrate AI into our existing software?",
//     answer:
//       "Yes, we have expertise in AI integration including chatbots, analytics, and recommendation systems.",
//   },
//   {
//     question: "Why choose Logicspice for custom software development services?",
//     answer:
//       "Our years of experience, rapid delivery, and deep understanding of business domains make us ideal.",
//   },
// ];

// const FAQ = () => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleAccordion = (index) => {
//     setOpenIndex(index === openIndex ? null : index);
//   };

//   return (
//     <>
//       <section className="faq-wrapper">
//         <h2 className="faq-heading">FAQs – What People Usually Ask Us</h2>

//         <div className="faq-container">
//           {faqData.map((faq, index) => (
//             <div key={index} className="faq-item">
//               <div
//                 className="faq-question"
//                 onClick={() => toggleAccordion(index)}
//               >
//                 <span>
//                   {index + 1 < 10 ? `0${index + 1}` : index + 1}. {faq.question}
//                 </span>
//                 <span className="faq-icon">
//                   {openIndex === index ? "−" : "+"}
//                 </span>
//               </div>
//               {openIndex === index && (
//                 <div className="faq-answer">{faq.answer}</div>
//               )}
//             </div>
//           ))}
//         </div>
//       </section>
//     </>
//   );
// };

// export default FAQ;




// import React, { useState } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';




// const faqData = [
//     {
//       question: 'What types of ready-made software does Logicspice offer?',
//       answer: (
//         <>
//           We offer a wide range of pre-built software solutions, including job portal scripts, on-demand service apps, salon and doctor booking systems, and many more — all customizable to suit your business needs. Check all the software we offer{' '}
//           <a href="/softwares" target="_blank" rel="noopener noreferrer">
//             here.
//           </a>
//         </>
//       ),
//     },
//     {
//       question: 'Can Logicspice speed up the delivery of projects?',
//       answer: (
//         <>
//           Yes, we can! If you’re on a tight deadline, we have ready-to-use solutions and a skilled team that can get things done faster without cutting corners. Just let us know your timeline.{' '}
//           <a href="/contact-us" target="_blank" rel="noopener noreferrer">
//             Let’s discuss now!
//           </a>
//         </>
//       ),
//     },
//     {
//       question: 'What development process do you follow?',
//       answer: (
//         <>
//           We usually go with an Agile approach — that means we work in small steps, keep you in the loop, and stay flexible so we can make changes quickly if needed. Check out {' '}
//           <a href="/our-work-process" target="_blank" rel="noopener noreferrer">
//          our development process.
//           </a>
//         </>
//       ),
//     },
//     {
//       question: 'How do you make sure the software is high quality?',
//       answer:
//         'We’ve got a solid testing process in place. Our QA team checks everything carefully, from the code to how the final product works, to make sure it’s smooth, secure, and ready to use.',
//     },
//     {
//       question: 'Will I be updated regularly during the project?',
//       answer:
//         'Absolutely. You’ll get regular updates and can track progress through tools like Trello or Jira. We want you to feel involved and confident from start to finish. Apart from this, we have multiple channels of communication, which make things easier.',
//     },
//     {
//       question: 'What if I need changes after the project is live?',
//       answer:
//         'No worries! We offer ongoing support. Whether it’s fixing bugs or adding new features, our team is here to help even after your project goes live.',
//     },
//     {
//         question: 'Can I hire developers from your team on a full-time or part-time basis?',
//         answer: (
//           <>
//             Definitely. We offer flexible hiring models. You can{' '}
//             <a href="/hire-developers" target="_blank" rel="noopener noreferrer">
//               hire dedicated developers
//             </a>{' '}
//             full-time, part-time, or even on an hourly basis, depending on what suits your project.
//           </>
//         ),
//       },
      
//     {
//       question: 'Can Logicspice help us integrate AI into our existing software?',
//       answer: (
//         <>
//           Absolutely. Our team can integrate AI features like chatbots, recommendation engines, or automation tools into your current system to boost performance and user experience.{' '}
//           <a href="/artificial-intelligence" target="_blank" rel="noopener noreferrer">
//             Let’s discuss.
//           </a>
//         </>
//       ),
//     },
//     {
//       question: 'Why choose Logicspice for custom software development services?',
//       answer:
//         'Logicspice brings together deep industry experience and modern tech like AI, Blockchain, React.js, Next.js, Node.js, React Native, and Laravel to build smart, scalable software that fits your business perfectly.',
//     },
//   ];
  

// const FAQ = () => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleAccordion = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
// //     <section className="faq-section">
// //         <div className='container'>
// //             <div className='HomeFaqSection'>
// //             <img src="/img/home/faq/faq-women.png" alt="Top Illustration" className="faq-top-img" />
// //       <h2 className="faq-heading">FAQs – What People Usually Ask Us</h2>

// //       <div className="faq-box">
// //         {faqData.map((faq, index) => (
// //           <div key={index} className="faq-item">
// //             <div className="faq-question" onClick={() => toggleAccordion(index)}>
// //               <span>{index + 1 < 10 ? `0${index + 1}` : index + 1}. {faq.question}</span>
// //               {/* <span className="faq-icon">{openIndex === index ? <i class="fa fa-minus-circle minus-icon" aria-hidden="true"></i> : <i class="fa fa-plus-circle" aria-hidden="true"></i>}</span> */}
// //               <span className="faq-icon">
// //   {openIndex === index ? (
// //     <i className="fa fa-minus-circle minus-icon" aria-hidden="true"></i>
// //   ) : (
// //     <i className="fa fa-plus-circle plus-icon" aria-hidden="true"></i>
// //   )}
// // </span>

// //             </div>
// //             {openIndex === index && (
// //               <div className="faq-answer">
// //                 {faq.answer}
// //               </div>
// //             )}
// //           </div>
// //         ))}
// //       </div>

// //       <img src="/img/home/faq/faq-men.png" alt="Bottom Illustration" className="faq-bottom-img" />
// //             </div>

       
// //         </div>

     
// //     </section>


// <section className="faq-section" data-aos="fade-up">
//   <div className='container'>
//     <div className='HomeFaqSection'>
//       <img
//         src="/img/home/faq/faq-women.png"
//         alt="Top Illustration"
//         className="faq-top-img"
//         data-aos="fade-right"
//       />

//       <h2 className="faq-heading" data-aos="zoom-in">FAQs – What People Usually Ask Us</h2>

//       <div className="faq-box">
//         {faqData.map((faq, index) => (
//           <div key={index} className="faq-item" data-aos="fade-up" data-aos-delay={index * 100}>
//             <div className="faq-question" onClick={() => toggleAccordion(index)}>
//               <span>{index + 1 < 10 ? `0${index + 1}` : index + 1}. {faq.question}</span>
//               <span className="faq-icon">
//                 {openIndex === index ? (
//                   <i className="fa fa-minus-circle minus-icon" aria-hidden="true"></i>
//                 ) : (
//                   <i className="fa fa-plus-circle plus-icon" aria-hidden="true"></i>
//                 )}
//               </span>
//             </div>
//             {openIndex === index && (
//               <div className="faq-answer" data-aos="fade-in">
//                 {faq.answer}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>

//       <img
//         src="/img/home/faq/faq-men.png"
//         alt="Bottom Illustration"
//         className="faq-bottom-img"
//         data-aos="fade-left"
//       />
//     </div>
//   </div>
// </section>

//   );
// };

// export default FAQ;


















import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const faqData = [
  {
    question: 'What types of ready-made software does Logicspice offer?',
    answer: (
      <>
        We offer a wide range of pre-built software solutions, including job portal scripts, on-demand service apps, salon and doctor booking systems, and many more — all customizable to suit your business needs. Check all the software we offer{' '}
        <a href="/softwares" target="_blank" rel="noopener noreferrer">
          here.
        </a>
      </>
    ),
  },
  {
    question: 'Can Logicspice speed up the delivery of projects?',
    answer: (
      <>
        Yes, we can! If you’re on a tight deadline, we have ready-to-use solutions and a skilled team that can get things done faster without cutting corners. Just let us know your timeline.{' '}
        <a href="/contact-us" target="_blank" rel="noopener noreferrer">
          Let’s discuss now!
        </a>
      </>
    ),
  },
  {
    question: 'What development process do you follow?',
    answer: (
      <>
        We usually go with an Agile approach — that means we work in small steps, keep you in the loop, and stay flexible so we can make changes quickly if needed. Check out{' '}
        <a href="/our-work-process" target="_blank" rel="noopener noreferrer">
          our development process.
        </a>
      </>
    ),
  },
  {
    question: 'How do you make sure the software is high quality?',
    answer:
      'We’ve got a solid testing process in place. Our QA team checks everything carefully, from the code to how the final product works, to make sure it’s smooth, secure, and ready to use.',
  },
  {
    question: 'Will I be updated regularly during the project?',
    answer:
      'Absolutely. You’ll get regular updates and can track progress through tools like Trello or Jira. We want you to feel involved and confident from start to finish. Apart from this, we have multiple channels of communication, which make things easier.',
  },
  {
    question: 'What if I need changes after the project is live?',
    answer:
      'No worries! We offer ongoing support. Whether it’s fixing bugs or adding new features, our team is here to help even after your project goes live.',
  },
  {
    question: 'Can I hire developers from your team on a full-time or part-time basis?',
    answer: (
      <>
        Definitely. We offer flexible hiring models. You can{' '}
        <a href="/hire-developers" target="_blank" rel="noopener noreferrer">
          hire dedicated developers
        </a>{' '}
        full-time, part-time, or even on an hourly basis, depending on what suits your project.
      </>
    ),
  },
  {
    question: 'Can Logicspice help us integrate AI into our existing software?',
    answer: (
      <>
        Absolutely. Our team can integrate AI features like chatbots, recommendation engines, or automation tools into your current system to boost performance and user experience.{' '}
        <a href="/artificial-intelligence" target="_blank" rel="noopener noreferrer">
          Let’s discuss.
        </a>
      </>
    ),
  },
  {
    question: 'Why choose Logicspice for custom software development services?',
    answer:
      'Logicspice brings together deep industry experience and modern tech like AI, Blockchain, React.js, Next.js, Node.js, React Native, and Laravel to build smart, scalable software that fits your business perfectly.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section" data-aos="fade-up">
      <div className="container">
        <div className="HomeFaqSection">
          <img src="/img/home/faq/faq-women.png" alt="Top Illustration" className="faq-top-img" />
          <h2 className="faq-heading">FAQs – What People Usually Ask Us</h2>

          <div className="faq-box">
            {faqData.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="faq-item"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="faq-question" onClick={() => toggleAccordion(index)}>
                    <span>
                      {faq.question}
                    </span>
                    <span className="faq-icon">
                      {isOpen ? (
                        <i className="fa fa-minus-circle minus-icon" aria-hidden="true"></i>
                      ) : (
                        <i className="fa fa-plus-circle plus-icon" aria-hidden="true"></i>
                      )}
                    </span>
                  </div>
                  <div
                    className={`faq-answer-wrapper ${isOpen ? 'open' : ''}`}
                    style={{
                      maxHeight: isOpen ? '500px' : '0px',
                    //   opacity: isOpen ? 1 : 0,
                      overflow: 'hidden',
                      transition: 'max-height 1s ease, opacity 1s ease',
                    }}
                  >
                    <div className="faq-answer">{faq.answer}</div>
                  </div>
                </div>
              );
            })}
          </div>

          <img src="/img/home/faq/faq-men.png" alt="Bottom Illustration" className="faq-bottom-img" />
        </div>
      </div>
    </section>
  );
};

export default FAQ;


