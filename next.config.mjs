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
      "www.logicspice.com",
      "lswebsitedemo.logicspice.com",
      "manage.logicspice.com",
    ],
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

      // Hire experts
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
        source: "/hire-angular-js-developers",
        destination: "/hire-angular-js-experts",
        permanent: true,
      },
      {
        source: "/services/hire-web-developer/hire-magento-experts",
        destination: "/hire-magento-experts",
        permanent: true,
      },
      {
        source: "/services/hire-web-developer/hire-drupal-experts",
        destination: "/hire-developers",
        permanent: true,
      },
      {
        source: "/services/hire-web-developer/hire-wordpress-experts ",
        destination: "/hire-wordpress-experts",
        permanent: true,
      },
      {
        source: "/services/hire-web-developer/hire-wordpress-experts.htm",
        destination: "/hire-wordpress-experts",
        permanent: true,
      },

      // Custom solutions

      {
        source: "/erp-system-software-developement",
        destination: "/erp-system-software-development",
        permanent: true,
      },
      {
        source: "/restaurant-table-booking-script",
        destination: "/restaurant-table-booking-system",
        permanent: true,
      },
      {
        source: "/readymade-crm-solution",
        destination: "/crm-software-development",
        permanent: true,
      },
      {
        source: "/online-course-management-script",
        destination: "https://setcourses.logicspice.com/",
        permanent: true,
      },

      // services

      // {
      //   source: "/services/:slug*",
      //   destination: "/:slug*",
      //   permanent: true,
      // },
      {
        source: "/services/digital-marketing",
        destination: "/digital-marketing",
        permanent: true,
      },
      {
        source: "/services/website-development/cakephp-development",
        destination: "/cakephp-development",
        permanent: true,
      },
      {
        source: "/devops-services",
        destination: "/devops-development",
        permanent: true,
      },
      {
        source: "/android-app-development/",
        destination: "/android-app-development",
        permanent: true,
      },
      {
        source: "/startup-mobile-app-development-company/",
        destination: "/startup-mobile-app-development-company",
        permanent: true,
      },
      {
        source: "/php-programing",
        destination: "/php-development",
        permanent: true,
      },
      {
        source: "/software-mainenance-support",
        destination: "/software-maintenance-support",
        permanent: true,
      },
      {
        source: "/services/website-development",
        destination: "/web-development",
        permanent: true,
      },

      {
        source: "/services/website-design",
        destination: "/website-design",
        permanent: true,
      },
      {
        source: "/services/digital-marketing/search-engine-optimization",
        destination: "/digital-marketing",
        permanent: true,
      },
      {
        source: "/services/website-development/php-programing",
        destination: "/php-development",
        permanent: true,
      },
      {
        source: "/services/website-development/drupal",
        destination: "/web-development",
        permanent: true,
      },
      {
        source: "/services/software-development",
        destination: "/software-development",
        permanent: true,
      },
      {
        source: "/services/website-design/responsive-design",
        destination: "/responsive-web-design",
        permanent: true,
      },
      {
        source: "/startup",
        destination: "/startup-mobile-app-development-company",
        permanent: true,
      },
      {
        source: "/website-development",
        destination: "/web-development",
        permanent: true,
      },
      {
        source: "/services/digital-marketing/internet-marketing-solution",
        destination: "/digital-marketing",
        permanent: true,
      },
      {
        source: "/services/website-development/laravel-development",
        destination: "/laravel-development",
        permanent: true,
      },
      {
        source: "/services/website-design.htm",
        destination: "/website-design",
        permanent: true,
      },
      {
        source: "/technologies/php-framework",
        destination: "/php-development",
        permanent: true,
      },
      {
        source: "/ecommerce-script",
        destination: "/ecommerce-website",
        permanent: true,
      },
      {
        source: "/ecommerce",
        destination: "/ecommerce-website",
        permanent: true,
      },
      
      // softwares

      {
        source: "/softwares/blog-script",
        destination: "/blog-script",
        permanent: true,
      },
      {
        source: "/softwares/cakephp-cms-script",
        destination: "/softwares",
        permanent: true,
      },
      {
        source: "/cakephp-cms-script",
        destination: "/softwares",
        permanent: true,
      },
      {
        source: "/softwares/lead-generation-contact-form-php-script",
        destination: "/softwares",
        permanent: true,
      },
      {
        source: "/lead-generation-contact-form-php-script",
        destination: "/softwares",
        permanent: true,
      },

      {
        source: "/social-network-integration-in-android-app",
        destination: "/softwares",
        permanent: true,
      },
      {
        source: "/best/best-property-management-software",
        destination: "/rental-property-management-software",
        permanent: true,
      },
      {
        source: "/taxi-booking-script",
        destination: "/softwares",
        permanent: true,
      },
      {
        source: "/appointment-booking-system",
        destination: "/appointment-booking-software",
        permanent: true,
      },
      {
        source: "/service-offering-system",
        destination: "/service-marketplace-script",
        permanent: true,
      },
      {
        source: "/crowdfunding",
        destination: "/crowdfunding-script",
        permanent: true,
      },
      {
        source: "/cakephp-facebook-login-plugin-script",
        destination: "/softwares",
        permanent: true,
      },
      {
        source: "/social-network-integration-in-android-app",
        destination: "/softwares",
        permanent: true,
      },
      {
        source: "/wordpress-twitter-login-plugin",
        destination: "/softwares",
        permanent: true,
      },

      // Case study

      {
        source: "/casestudies/view/:slug*",
        destination: "/case-study/:slug*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
