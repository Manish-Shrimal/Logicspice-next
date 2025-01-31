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
      "blog.logicspice.com"
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
      {
        source: "/feed",
        destination: "/feed.rss",
        permanent: true,
      },
      {
        source: "/homes/contact",
        destination: "/contact-us",
        permanent: true,
      },
      {
        source: "/pages/",
        destination: "/sitemap.html",
        permanent: true,
      },
      {
        source: "/sitemap",
        destination: "/sitemap.html",
        permanent: true,
      },
      {
        source: "/how-it-works/how-can-we-help/",
        destination: "/resources/how-can-we-help",
        permanent: true,
      },
      {
        source: "/company/testimonials-and-reviews/4",
        destination: "/company/testimonials-and-reviews",
        permanent: true,
      },

      // gallery
      {
        source: "/gallery/amber-vatika",
        destination: "/gallery/view/amber-vatika",
        permanent: true,
      },

      // Industries
      {
        source: "/company/industries-we-served/",
        destination: "/industries",
        permanent: true,
      },
      {
        source: "/industries/commercial-and-residential-real-estate-apps",
        destination: "/industries/commercial-and-residential-apps",
        permanent: true,
      },
      {
        source: "/company/industries-we-served/transportation-apps/",
        destination: "/industries/transportation-apps",
        permanent: true,
      },
      {
        source: "/company/industries-we-served/Transportation-apps/",
        destination: "/industries/transportation-apps",
        permanent: true,
      },
      {
        source: "/industries/Transportation-apps",
        destination: "/industries/transportation-apps",
        permanent: true,
      },
      {
        source: "/industries/Transportation-apps/",
        destination: "/industries/transportation-apps",
        permanent: true,
      },
      {
        source: "/industries/Hotels-apps/",
        destination: "/industries/Hotel-apps",
        permanent: true,
      },
      {
        source: "/industries/Hotels-apps",
        destination: "/industries/Hotel-apps",
        permanent: true,
      },
      {
        source: "/industries/hotels-apps",
        destination: "/industries/Hotel-apps",
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
        source: "/hire-drupal-experts",
        destination: "/hire-developers",
        permanent: true,
      },
      {
        source: "/services/hire-web-developer/hire-wordpress-experts",
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
        source: "/products/readymade-crm-solution",
        destination: "/crm-software-development",
        permanent: true,
      },
      {
        source: "/custom_solutions/readymade-crm-solution",
        destination: "/crm-software-development",
        permanent: true,
      },
      {
        source: "/custom_solutions/readymade-crm-solution/",
        destination: "/crm-software-development",
        permanent: true,
      },
      {
        source: "/readymade-crm-solution",
        destination: "/crm-software-development",
        permanent: true,
      },
      {
        source: "/services/software-development/action-script",
        destination: "/software-development",
        permanent: true,
      },
      {
        source: "/services/software-development/action-script/",
        destination: "/software-development",
        permanent: true,
      },
      {
        source: "/services/software-development/online-booking-software-solution",
        destination: "/booking-app-development",
        permanent: true,
      },
      {
        source: "/services/software-development/online-booking-software-solution/",
        destination: "/booking-app-development",
        permanent: true,
      },
      {
        source: "/custom_solutions/booking-app-script/",
        destination: "/booking-app-development",
        permanent: true,
      },
      {
        source: "/products/booking-app-script/",
        destination: "/booking-app-development",
        permanent: true,
      },
      {
        source: "/custom_solutions/booking-app-script",
        destination: "/booking-app-development",
        permanent: true,
      },
      {
        source: "/custom_solutions/booking-app-script//",
        destination: "/booking-app-development",
        permanent: true,
      },
      {
        source: "/enterprises-solutions",
        destination: "/custom-solutions",
        permanent: true,
      },
      {
        source: "/services/software-development/enterprises-solutions",
        destination: "/custom-solutions",
        permanent: true,
      },
      {
        source: "/logistic-software-development",
        destination: "/logistics-software-development",
        permanent: true,
      },
      {
        source: "/services/software-development/crm",
        destination: "/crm-software-development",
        permanent: true,
      },
      {
        source: "/services/software-development/crm/",
        destination: "/crm-software-development",
        permanent: true,
      },
      {
        source: "/custom_solutions/ecommerce-script/",
        destination: "/ecommerce-website",
        permanent: true,
      },
      {
        source: "/custom_solutions/ecommerce-script",
        destination: "/ecommerce-website",
        permanent: true,
      },
      {
        source: "/products/seat-booking-script",
        destination: "/seat-booking-system",
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
        source: "/devops-services/",
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
        source: "/mobile-app-development/android",
        destination: "/android-app-development",
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
        source: "/support",
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
        source: "/services/website-design/flash-web-design.htm",
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
        source: "/services/website-development/drupal/",
        destination: "/web-development",
        permanent: true,
      },
      {
        source: "/web-development/drupal",
        destination: "/web-development",
        permanent: true,
      },
      {
        source: "/web-development/joomla",
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
        source: "/services/website-design/responsive-design/",
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
        source: "/services/digital-marketing/internet-marketing-solutions",
        destination: "/digital-marketing",
        permanent: true,
      },
      {
        source: "/services/digital-marketing/internet-marketing-solutions/",
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
        source: "/products/ecommerce-script",
        destination: "/ecommerce-website",
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
      {
        source: "/services/software-development/open-source-cms/",
        destination: "/open-source-cms",
        permanent: true,
      },
      {
        source: "/services/software-development/open-source-cms",
        destination: "/open-source-cms",
        permanent: true,
      },
      {
        source: "/shopify-framework",
        destination: "/shopify-development",
        permanent: true,
      },
      {
        source: "/services/mobile-application/android",
        destination: "/android-app-development",
        permanent: true,
      },
      {
        source: "/web-development-services/php-programming-services.htm",
        destination: "/php-development",
        permanent: true,
      },
      {
        source: "/services/website-development//php-programming-services.htm",
        destination: "/php-development",
        permanent: true,
      },
      {
        source: "/services/mobile-apps-development/android",
        destination: "/android-app-development",
        permanent: true,
      },
      {
        source: "/services/mobile-apps-development/android/",
        destination: "/android-app-development",
        permanent: true,
      },
      {
        source: "/salesforce_development_company",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/salesforce_development_company/",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/mobile-phone-computing-software/android.htm",
        destination: "/android-app-development",
        permanent: true,
      },
      {
        source: "/web-development-services/mobile-application/android.htm",
        destination: "/android-app-development",
        permanent: true,
      },
      {
        source: "/web-development-services//mobile-application/android.htm",
        destination: "/android-app-development",
        permanent: true,
      },
      {
        source: "/services/software-development/live-support-script/",
        destination: "/software-development",
        permanent: true,
      },
      {
        source: "/services/software-development/live-support-script",
        destination: "/software-development",
        permanent: true,
      },
      {
        source: "/services/psd-to-shopify/",
        destination: "/psd-to-shopify",
        permanent: true,
      },
      {
        source: "/services/psd-to-html/",
        destination: "/psd-to-html",
        permanent: true,
      },

      {
        source: "/nodejs-development-company",
        destination: "/nodejs-development",
        permanent: true,
      },
      {
        source: "/services/website-design/ui_ux_design_company/",
        destination: "/website-design",
        permanent: true,
      },
      {
        source: "/services/website-design/ui_ux_design_company",
        destination: "/website-design",
        permanent: true,
      },
      {
        source: "/services/search-engine-optimization/",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/web-development-services/project-consultation.htm",
        destination: "/web-development",
        permanent: true,
      },
      {
        source: "/web-development-services",
        destination: "/web-development",
        permanent: true,
      },
      {
        source: "/services/open-source-customization/oscommerce",
        destination: "/open-source-customization",
        permanent: true,
      },
      {
        source: "/services/website-development/codeigniter-development",
        destination: "/codeigniter-development",
        permanent: true,
      },
      {
        source: "/services/mobile-application/iphone-application",
        destination: "/ios-app-development",
        permanent: true,
      },
      {
        source: "/artificial-",
        destination: "/artificial-intelligence",
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
        source: "/softwares/cakephp-cms-script/",
        destination: "/softwares",
        permanent: true,
      },
      {
        source: "/cakephp-cms-script",
        destination: "/softwares",
        permanent: true,
      },
      {
        source: "/products/cakephp-cms-script",
        destination: "/softwares",
        permanent: true,
      },
      {
        source: "/products/cakephp-cms-script/",
        destination: "/softwares",
        permanent: true,
      },
      {
        source: "/softwares/buynow/foodordering",
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
        source: "/softwares/buynow/linkedin-clone",
        destination: "/linkedin-clone",
        permanent: true,
      },
      {
        source: "/appointment-booking-system",
        destination: "/appointment-booking-software",
        permanent: true,
      },
      {
        source: "/demo/cmsscript/admin",
        destination: "/softwares",
        permanent: true,
      },
      {
        source: "/softwares/buynow/classified-ads-script",
        destination: "/classified-ads-script",
        permanent: true,
      },
      {
        source: "/products/online-appointment-booking-script",
        destination: "/appointment-booking-software",
        permanent: true,
      },
      {
        source: "/custom_solutions/online-appointment-booking-script/",
        destination: "/appointment-booking-software",
        permanent: true,
      },
      {
        source: "/custom_solutions/online-appointment-booking-script",
        destination: "/appointment-booking-software",
        permanent: true,
      },
      {
        source: "/softwares/buynow/service-marketplace-script",
        destination: "/service-marketplace-script",
        permanent: true,
      },
      {
        source: "/custom_solutions/service-offering-system",
        destination: "/service-marketplace-script",
        permanent: true,
      },
      {
        source: "/products/service-offering-system",
        destination: "/service-marketplace-script",
        permanent: true,
      },
      {
        source: "/service-offering-system",
        destination: "/service-marketplace-script",
        permanent: true,
      },
      {
        source: "/softwares/buynow/crowdfunding",
        destination: "/crowdfunding-script",
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
        source: "/softwares/wordpress-twitter-login-plugin",
        destination: "/softwares",
        permanent: true,
      },
      {
        source: "/products/wordpress-twitter-login-plugin",
        destination: "/softwares",
        permanent: true,
      },
      {
        source: "/products/wordpress-twitter-login-plugin/",
        destination: "/softwares",
        permanent: true,
      },
      {
        source: "/wordpress-twitter-login-plugin",
        destination: "/softwares",
        permanent: true,
      },
      {
        source: "/equipment-rental",
        destination: "/equipment-rental-software",
        permanent: true,
      },
      {
        source: "/products/equipment-rental-script",
        destination: "/equipment-rental-software",
        permanent: true,
      },
      {
        source: "/products/equipment-rental-script/",
        destination: "/equipment-rental-software",
        permanent: true,
      },
      {
        source: "/products/equipment-rental-system/",
        destination: "/equipment-rental-software",
        permanent: true,
      },
      {
        source: "/softwares/buynow/equipment-rental-software",
        destination: "/equipment-rental-software",
        permanent: true,
      },
      {
        source: "/softwares/buynow/recruitment-management-software",
        destination: "/recruitment-management-software",
        permanent: true,
      },
      {
        source: "/softwares/buynow/forum-script",
        destination: "/forum-script",
        permanent: true,
      },
      {
        source: "/softwares/buynow/fiverr-clone",
        destination: "/fiverr-clone",
        permanent: true,
      },
      {
        source: "/softwares/buynow/teacher-marketplace",
        destination: "/teacher-marketplace",
        permanent: true,
      },
      {
        source: "/custom_solutions/property-rental-script",
        destination: "/rental-property-management-software",
        permanent: true,
      },
      {
        source: "/custom_solutions/property-rental-script/",
        destination: "/rental-property-management-software",
        permanent: true,
      },
      {
        source: "/products/property-rental-script/",
        destination: "/rental-property-management-software",
        permanent: true,
      },
      {
        source: "/products/property-rental-system/",
        destination: "/rental-property-management-software",
        permanent: true,
      },
      {
        source: "/appointment-booking-system",
        destination: "/appointment-scheduling-software",
        permanent: true,
      },
      {
        source: "/whatsapp-",
        destination: "/whatsapp-clone",
        permanent: true,
      },
      {
        source: "/booking-software-solution",
        destination: "/booking-software-solutions",
        permanent: true,
      },
      {
        source: "/internal-communication-software/",
        destination: "/group-chat-internal-communication",
        permanent: true,
      },

      // Case study

      {
        source: "/casestudies/view/:slug*",
        destination: "/case-study/:slug*",
        permanent: true,
      },

      // blog
      {
        source: "/blog/why-choose-wordpress-for-your-website-development",
        destination: "https://blog.logicspice.com/why-choose-wordpress-for-your-website-development",
        permanent: true,
      },
      {
        source: "/blog/startup-ideas-for-small-business-with-low-investment",
        destination: "https://blog.logicspice.com/startup-ideas-for-small-business-with-low-investment",
        permanent: true,
      },
      {
        source: "/blog/facebook-an-impressive-marketing-platform",
        destination: "https://blog.logicspice.com/facebook-an-impressive-marketing-platform",
        permanent: true,
      },
      {
        source: "/why-choose-wordpress-for-your-website-development",
        destination: "https://blog.logicspice.com/why-choose-wordpress-for-your-website-development",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
