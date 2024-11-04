// /** @type {import('next').NextConfig} */
// const nextConfig = {};


  
  

// export default nextConfig;


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//       domains: ['www.logicspice.com',
//       'lswebsitedemo.logicspice.com'],
//     },
//   };

  
  
  
//   export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'www.logicspice.com',
      'lswebsitedemo.logicspice.com',
    ],
  },

  async redirects() {
    return [
      // New redirects for /products URLs
      {
        source: '/products',
        destination: '/softwares', // Redirect `/products` to `/softwares`
        permanent: true,
      },
      {
        source: '/products/:slug*',
        destination: '/:slug*', // Redirect to the path without `/products`
        permanent: true,
      },
      
      {
        source: '/hire-experts',
        destination: '/hire-developers', // Redirect to the path without `/products`
        permanent: true,
      },
      {
        source: '/hire-experts/:slug*',
        destination: '/hire-:slug*', // Correctly adds "hire-" as a prefix to the dynamic part
        permanent: true,
      },
      
      {
        source: '/erp-system-software-developement',
        destination: '/erp-system-software-development', // Redirect to the path without `/products`
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

  