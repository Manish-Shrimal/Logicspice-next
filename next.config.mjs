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
    domains: ["www.logicspice.com", "lswebsitedemo.logicspice.com"],
  },

  async redirects() {
    return [
     
      {
        source: "/products",
        destination: "/softwares", 
        permanent: true,
      },
      {
        source: "/products/:slug*",
        destination: "/:slug*", 
        permanent: true,
      },
      {
        source: "/hire-experts",
        destination: "/hire-developers", 
        permanent: true,
      },
      {
        source: "/hire-experts/:slug*",
        destination: "/hire-:slug*", 
        permanent: true,
      },
      {
        source: "/erp-system-software-developement",
        destination: "/erp-system-software-development",
        permanent: true,
      },
      {
        source: "/online-course-management-script",
        destination: "https://setcourses.logicspice.com/", 
        permanent: true,
      },
      {
        source: "/services/website-development/cakephp-development",
        destination: "/cakephp-development", 
        permanent: true,
      },
      {
        source: "/services/:slug*",
        destination: "/:slug*", 
        permanent: true,
      },
      {
        source: "/softwares/blog-script",
        destination: "/blog-script", 
        permanent: true,
      },
      {
        source: "/softwares/cakephp-cms-script",
        destination: "/cakephp-cms-script", 
        permanent: true,
      },
      {
        source: "/softwares/lead-generation-contact-form-php-script",
        destination: "/lead-generation-contact-form-php-script", 
        permanent: true,
      },
      
    ];
  },
};

export default nextConfig;
