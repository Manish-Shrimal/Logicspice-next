

// 'use client';

// import HTMLReactParser from 'html-react-parser';
// import Image from 'next/image';
// import Link from 'next/link';
// import React, { useState } from 'react';
// import '../services.css';

// const FrameworkSelector = () => {
//   const [selectedFramework, setSelectedFramework] = useState('Laravel');

//   const frameworks = {
//     Laravel: {
//       image: '/img/technology/laravel-icon-old.png',
//       bgImage: '/img/technology/laravel-bg.png',
//       link: '/laravel-development',
//       description:
//         'Laravel is a modern, open-source PHP framework for building robust, scalable web applications with an elegant syntax and powerful tools like Eloquent ORM and Blade templating.',
//       advantages: [
//         '<strong>High Performance:</strong> Optimized for fast load times and efficient execution, ensuring smooth user experiences.',
//         '<strong>Powerful Ecosystem:</strong> Includes Eloquent ORM, Blade templating, and Artisan CLI, offering developers a robust set of tools.',
//         '<strong>Built-in Authentication:</strong> Offers easy-to-implement user authentication and authorization for secure apps.',
//         '<strong>Strong Community Support:</strong> Laravel has a large, active community, providing a wealth of resources, tutorials, and third-party packages to speed up development.',
//       ],
//     },
//     CakePHP: {
//       image: '/img/technology/cake-icon.png',
//       bgImage: '/img/technology/cakephp-bg.png',
//       link: '/cakephp-development',
//       description:
//         'CakePHP is an open-source PHP framework that helps developers build web applications quickly with a simple, elegant MVC architecture.',
//       advantages: [
//         '<strong>Rapid Development:</strong> CakePHP’s built-in tools and conventions speed up development, allowing developers to build powerful web apps in less time.',
//         '<strong>Easy-to-Organize Code:</strong> By using the Model-View-Controller (MVC) approach, CakePHP keeps your code clean, structured, and easy to maintain.',
//         '<strong>Built-in Features:</strong> With features like login systems, form validation, and caching, developers can focus on the core functionality without starting from scratch.',
//         '<strong>Security Features:</strong> Built-in security measures like CSRF protection and input validation help keep your apps secure.',
//       ],
//     },
//     CodeIgniter: {
//       image: '/img/technology/codeigniter-icon.png',
//       bgImage: '/img/technology/codeigniter-bg.png',
//       link: '/codeigniter-development',
//       description:
//         'CodeIgniter is a lightweight, open-source PHP framework for building dynamic web applications with a simple and fast MVC-based structure.',
//       advantages: [
//         '<strong>Lightweight & Fast:</strong> CodeIgniter is a lightweight framework that helps build fast, high-performance web apps with minimal resources.',
//         '<strong>Simple Configuration:</strong> With simple configuration, CodeIgniter is quick to set up, making it ideal for building projects rapidly.',
//         '<strong>Clear Documentation:</strong> CodeIgniter provides easy-to-understand documentation, helping developers get started quickly.',
//         '<strong>Security Features:</strong> CodeIgniter offers built-in security tools like XSS filtering and CSRF protection to help safeguard your web applications.',
//       ],
//     },
//     Yii: {
//       image: '/img/technology/yii-icon.png',
//       bgImage: '/img/technology/yii-icon.png',
//       link: '/hire-yii-developers',
//       description:
//         'Yii is a fast, secure, and efficient PHP framework for developing modern web applications with a component-based, MVC architecture.',
//       advantages: [
//         '<strong>High Performance:</strong> Yii is known for its high-speed performance, ensuring your web apps load quickly and handle heavy traffic smoothly.',
//         '<strong>Gii Code Generator:</strong> Yii’s Gii tool simplifies the creation of CRUD operations and model generation, saving you development time.',
//         '<strong>Security Features:</strong> Yii offers built-in security features like input validation, SQL injection prevention, and CSRF protection for safer applications.',
//         '<strong>Scalability:</strong> Yii is built for scalability, allowing applications to handle high traffic and growing data without sacrificing performance.',
//       ],
//     },
//   };

//   const handleFrameworkClick = (framework) => {
//     setSelectedFramework(framework);
//   };

//   return (
//     <>
//       <div className="min-h-screen my-6">
//         <div className="max-w-screen-2xl mx-auto bg-white rounded shadow-2xl overflow-hidden h-[94vh]">
//           <div className="flex flex-col md:flex-row h-full">
//             {/* Left side */}
//             <div className="w-full md:w-1/2 p-6 bg-gray-50 overflow-auto">
//               <h2 className="text-2xl font-bold text-gray-800 mb-6">PHP Frameworks</h2>
//               <ul className="space-y-3">
//                 {Object.keys(frameworks).map((framework) => (
//                   <li key={framework}>
//                     <button
//                       onClick={() => handleFrameworkClick(framework)}
//                       className={`w-full text-left p-4 rounded transition-all duration-300 flex items-center ${
//                         selectedFramework === framework
//                           ? 'bg-blue-500 text-white shadow-md'
//                           : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
//                       }`}
//                     >
//                       <Image
//                         src={frameworks[framework].image}
//                         width={30}
//                         height={30}
//                         alt={framework}
//                         unoptimized={true}
//                         className="inline-block mr-2"
//                       />
//                       <span className="font-semibold">{framework}</span>
//                     </button>
//                     <div
//                       className={`transition-all duration-500 ease-in-out overflow-hidden ${
//                         selectedFramework === framework ? 'max-h-96' : 'max-h-0'
//                       }`}
//                     >
//                       <div className="mt-3 p-4 bg-white rounded-lg shadow-inner text-gray-600">
//                         <p>{frameworks[framework].description}</p>
//                       </div>
//                     </div>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Right side */}
//             <div
//               className="w-full md:w-1/2 px-2 py-6 bg-blue-100 relative framework-bg flex flex-col flex-grow overflow-hidden"
//               style={{
//                 '--bg-image': `url(${frameworks[selectedFramework].bgImage})`,
//               }}
//             >
//               <div className="relative z-10 overflow-auto px-2">
//                 <h3 className="text-2xl text-center font-bold text-gray-700 mb-6">
//                   Advantages of {selectedFramework}
//                 </h3>
//                 <div className="space-y-4 w-full">
//                   {frameworks[selectedFramework]?.advantages.map((advantage, index) => (
//                     <div
//                       key={index}
//                       className="p-4 bg-white rounded-lg shadow-md transform transition-transform duration-300 hover:scale-[1.01]"
//                     >
//                       {HTMLReactParser(advantage)}
//                     </div>
//                   ))}
//                   <Link href={frameworks[selectedFramework]?.link || '#'}>
//                     <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
//                       Read More About {selectedFramework}{' '}
//                       <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
//                     </button>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default FrameworkSelector;


'use client';

import HTMLReactParser from 'html-react-parser';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import '../services.css';

const FrameworkSelector = () => {
  const [selectedFramework, setSelectedFramework] = useState('Laravel');

  const frameworks = {
    Laravel: {
      image: '/img/technology/laravel-icon-old.png',
      bgImage: '/img/technology/laravel-bg.png',
      link: '/laravel-development',
      description:
        'Laravel is a modern, open-source PHP framework for building robust, scalable web applications with an elegant syntax and powerful tools like Eloquent ORM and Blade templating.',
      advantages: [
        '<strong>High Performance:</strong> Optimized for fast load times and efficient execution, ensuring smooth user experiences.',
        '<strong>Powerful Ecosystem:</strong> Includes Eloquent ORM, Blade templating, and Artisan CLI, offering developers a robust set of tools.',
        '<strong>Built-in Authentication:</strong> Offers easy-to-implement user authentication and authorization for secure apps.',
        '<strong>Strong Community Support:</strong> Laravel has a large, active community, providing a wealth of resources, tutorials, and third-party packages to speed up development.',
      ],
    },
    CakePHP: {
      image: '/img/technology/cake-icon.png',
      bgImage: '/img/technology/cakephp-bg.png',
      link: '/cakephp-development',
      description:
        'CakePHP is an open-source PHP framework that helps developers build web applications quickly with a simple, elegant MVC architecture.',
      advantages: [
        '<strong>Rapid Development:</strong> CakePHP’s built-in tools and conventions speed up development, allowing developers to build powerful web apps in less time.',
        '<strong>Easy-to-Organize Code:</strong> By using the Model-View-Controller (MVC) approach, CakePHP keeps your code clean, structured, and easy to maintain.',
        '<strong>Built-in Features:</strong> With features like login systems, form validation, and caching, developers can focus on the core functionality without starting from scratch.',
        '<strong>Security Features:</strong> Built-in security measures like CSRF protection and input validation help keep your apps secure.',
      ],
    },
    CodeIgniter: {
      image: '/img/technology/codeigniter-icon.png',
      bgImage: '/img/technology/codeigniter-bg.png',
      link: '/codeigniter-development',
      description:
        'CodeIgniter is a lightweight, open-source PHP framework for building dynamic web applications with a simple and fast MVC-based structure.',
      advantages: [
        '<strong>Lightweight & Fast:</strong> CodeIgniter is a lightweight framework that helps build fast, high-performance web apps with minimal resources.',
        '<strong>Simple Configuration:</strong> With simple configuration, CodeIgniter is quick to set up, making it ideal for building projects rapidly.',
        '<strong>Clear Documentation:</strong> CodeIgniter provides easy-to-understand documentation, helping developers get started quickly.',
        '<strong>Security Features:</strong> CodeIgniter offers built-in security tools like XSS filtering and CSRF protection to help safeguard your web applications.',
      ],
    },
    Yii: {
      image: '/img/technology/yii-icon.png',
      bgImage: '/img/technology/yii-icon.png',
      link: '/hire-yii-developers',
      description:
        'Yii is a fast, secure, and efficient PHP framework for developing modern web applications with a component-based, MVC architecture.',
      advantages: [
        '<strong>High Performance:</strong> Yii is known for its high-speed performance, ensuring your web apps load quickly and handle heavy traffic smoothly.',
        '<strong>Gii Code Generator:</strong> Yii’s Gii tool simplifies the creation of CRUD operations and model generation, saving you development time.',
        '<strong>Security Features:</strong> Yii offers built-in security features like input validation, SQL injection prevention, and CSRF protection for safer applications.',
        '<strong>Scalability:</strong> Yii is built for scalability, allowing applications to handle high traffic and growing data without sacrificing performance.',
      ],
    },
  };

  const handleFrameworkClick = (framework) => {
    setSelectedFramework(framework);
  };

  return (
    <>
      <div className="my-6">
        <div className="max-w-screen-2xl mx-auto bg-white rounded shadow-2xl overflow-hidden md:h-[94vh]">
          <div className="flex flex-col md:flex-row md:h-full">
            {/* Left side (Tabs) */}
            <div className="w-full md:w-1/2 md:p-6 p-4 bg-gray-50 md:overflow-auto">
              <h3 className="text-2xl text-center font-bold !text-gray-600 md:!mb-6 mb-2">PHP Frameworks</h3>
              <ul className="flex flex-wrap justify-center md:overflow-x-auto gap-2.5 md:space-x-0 md:space-y-3 md:flex-col md:pb-4 md:pb-0">
                {Object.keys(frameworks).map((framework) => (
                  <li key={framework} className="inline-block md:block">
                    <button
                      onClick={() => handleFrameworkClick(framework)}
                      className={`w-32 h-16 p-3 md:w-full text-left md:p-4 rounded transition-all duration-300 flex items-center whitespace-nowrap ${
                        selectedFramework === framework
                          ? 'bg-blue-500 text-white shadow-md'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      <Image
                        src={frameworks[framework].image}
                        width={20}
                        height={20}
                        alt={framework}
                        unoptimized={true}
                        className="inline-block mr-2"
                      />
                      <span className="font-semibold text-sm md:text-base">{framework}</span>
                    </button>
                    <div
                      className={`transition-all duration-500 ease-in-out overflow-hidden hidden md:block ${
                        selectedFramework === framework ? 'max-h-96' : 'max-h-0'
                      }`}
                    >
                      <div className="mt-3 p-4 bg-white rounded-lg shadow-inner text-gray-600">
                        <p>{frameworks[framework].description}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right side (Advantages) */}
            <div
              className="w-full md:w-1/2 px-2 py-6 bg-blue-100 relative framework-bg flex flex-col flex-grow md:overflow-auto"
              style={{
                '--bg-image': `url(${frameworks[selectedFramework].bgImage})`,
              }}
            >
              <div className="relative z-10 px-2">
                <h3 className="text-2xl text-center font-bold text-gray-700 mb-6">
                  Advantages of {selectedFramework}
                </h3>
                <div className="space-y-4 w-full">
                  {frameworks[selectedFramework]?.advantages.map((advantage, index) => (
                    <div
                      key={index}
                      className="p-4 bg-white rounded-lg shadow-md transform transition-transform duration-300 hover:scale-[1.01]"
                    >
                      {HTMLReactParser(advantage)}
                    </div>
                  ))}
                  <Link href={frameworks[selectedFramework]?.link || '#'}>
                    <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                      Read More About {selectedFramework}{' '}
                      <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FrameworkSelector;