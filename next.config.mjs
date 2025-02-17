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
      // {
      //   source: "/products/:slug*",
      //   destination: "/:slug*",
      //   permanent: true,
      // },
      {
        source: "/feed",
        destination: "/feed.rss",
        permanent: true,
      },
      {
        source: "/offers/",
        destination: "/careers",
        permanent: true,
      },
      {
        source: "/company/career.htm",
        destination: "/careers",
        permanent: true,
      },
      {
        source: "/company/career/web-designer.htm",
        destination: "/careers",
        permanent: true,
      },
      {
        source: "/viewfrom",
        destination: "/careers",
        permanent: true,
      },
      {
        source: "/homes/contact",
        destination: "/contact-us",
        permanent: true,
      },
      {
        source: "/contact.htm",
        destination: "/contact-us",
        permanent: true,
      },
      {
        source: "/sitemap.html/",
        destination: "/sitemap.html",
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
        source: "/portfolios/index/page",
        destination: "/portfolio",
        permanent: true,
      },
      {
        source: "/company/portfolio",
        destination: "/portfolio",
        permanent: true,
      },
      {
        source: "/portfolios/index",
        destination: "/portfolio",
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
      {
        source: "/company/testimonials-and-reviews/1",
        destination: "/company/testimonials-and-reviews",
        permanent: true,
      },
      {
        source: "/company/testimonials-and-reviews/feed/",
        destination: "/company/testimonials-and-reviews",
        permanent: true,
      },
      {
        source: "/company/technologies/photoshop/",
        destination: "/technologies",
        permanent: true,
      },
      {
        source: "/technologies.htm",
        destination: "/technologies",
        permanent: true,
      },
      {
        source: "/company/technologies/",
        destination: "/technologies",
        permanent: true,
      },
      {
        source: "/company/technologies",
        destination: "/technologies",
        permanent: true,
      },
      {
        source: "/about-us/",
        destination: "/company/about-us",
        permanent: true,
      },
      {
        source: "/pages/applynow",
        destination: "/apply-now",
        permanent: true,
      },
      {
        source: "/company/career/business-analyst.htm",
        destination: "/apply-now",
        permanent: true,
      },
      {
        source: "/career",
        destination: "/careers",
        permanent: true,
      },
      {
        source: "/career.htm",
        destination: "/careers",
        permanent: true,
      },
      {
        source: "/company/top-freelancer-company",
        destination: "/top-freelancer-company",
        permanent: true,
      },
      {
        source: "/how-it-works/our-work-process/",
        destination: "/resources/our-work-process",
        permanent: true,
      },
      {
        source: "/our-process/",
        destination: "/our-work-process",
        permanent: true,
      },
      {
        source: "/submit-guest-post/",
        destination: "/submit-guest-post",
        permanent: true,
      },
      {
        source: "/company.htm",
        destination: "/company",
        permanent: true,
      },
      {
        source: "/our-company/",
        destination: "/company",
        permanent: true,
      },
      {
        source: "/our-company",
        destination: "/company",
        permanent: true,
      },
      // gallery
      {
        source: "/gallery/amber-vatika",
        destination: "/gallery/view/amber-vatika",
        permanent: true,
      },
      {
        source: "/gallery/amber-vatika/",
        destination: "/gallery/view/amber-vatika",
        permanent: true,
      },
      {
        source: "/gallery/outdoor-activities",
        destination: "/gallery/view/outdoor-activities",
        permanent: true,
      },
      {
        source: "/gallery/outdoor-activities/",
        destination: "/gallery/view/outdoor-activities",
        permanent: true,
      },
      {
        source: "/gallery/diwali-celebration-2/",
        destination: "/gallery/view/diwali-celebration-2",
        permanent: true,
      },
      {
        source: "/gallery/diwali-celebration-2",
        destination: "/gallery/view/diwali-celebration-2",
        permanent: true,
      },
      {
        source: "/gallery/chokhi-dhani-tour",
        destination: "/gallery/view/chokhi-dhani-tour",
        permanent: true,
      },
      // Case studies
      {
        source: "/case-studies/job-at-home",
        destination: "/case-study/job-at-home",
        permanent: true,
      },
      {
        source: "/case-study/job-at-home/",
        destination: "/case-study/job-at-home",
        permanent: true,
      },
      {
        source: "/case-studies/zipjob",
        destination: "/case-study/zipjob",
        permanent: true,
      },
      {
        source: "/case-studies/nedarom",
        destination: "/case-study/nedarom",
        permanent: true,
      },
      {
        source: "/case-studies/afodel",
        destination: "/case-study/afodel",
        permanent: true,
      },
      {
        source: "/case-studies/Iamcleaning",
        destination: "/case-study/Iamcleaning",
        permanent: true,
      },
      {
        source: "/case-studies/martgram-app",
        destination: "/case-study/martgram-app",
        permanent: true,
      },
      {
        source: "/case-study/beano-app/",
        destination: "/case-study/beano-app",
        permanent: true,
      },
      {
        source: "/case-study/bestcit-app/",
        destination: "/case-study/bestcit-app",
        permanent: true,
      },
      {
        source: "/case-studies/bestcit-app",
        destination: "/case-study/bestcit-app",
        permanent: true,
      },
      {
        source: "/case-studies/social-securitas",
        destination: "/case-study/social-securitas",
        permanent: true,
      },
      {
        source: "/case-studies/pension-plan-management",
        destination: "/case-study/pension-plan-management",
        permanent: true,
      },
      {
        source: "/casestudies/view/lazybed",
        destination: "/case-study/lazybed",
        permanent: true,
      },
      {
        source: "/case-study/utrack-app/",
        destination: "/case-study/utrack-app",
        permanent: true,
      },
      {
        source: "/case-study/martgram-app/",
        destination: "/case-study/martgram-app",
        permanent: true,
      },
      {
        source: "/case-study/food-portal/",
        destination: "/case-study/food-portal",
        permanent: true,
      },
      {
        source: "/case-study/one-gai/",
        destination: "/case-study/one-gai",
        permanent: true,
      },
      {
        source: "/case-studies",
        destination: "/case-study",
        permanent: true,
      },
      // Industries
      
      {
        source: "/industries/commercial-and-residential-real-estate-apps",
        destination: "/industries/commercial-and-residential-apps",
        permanent: true,
      },

      {
        source: "/industries/transportation-apps/",
        destination: "/industries/transportation-apps",
        permanent: true,
      },
      // {
      //   source: "/industries/Transportation-apps",
      //   destination: "/industries/transportation-apps",
      //   permanent: true,
      // },
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
        source: "/company/industries-we-served/hotels-apps/",
        destination: "/industries/Hotel-apps",
        permanent: true,
      },
      {
        source: "/company/industries-we-served/",
        destination: "/industries",
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
      {
        source: "/industries/hotels-apps/",
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
        source: "/hire-angular-js-developers/",
        destination: "/hire-angular-js-experts",
        permanent: true,
      },
      {
        source: "/hire-joomla-experts",
        destination: "/hire-developers",
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
        source: "/hire-drupal-experts/",
        destination: "/hire-developers",
        permanent: true,
      },
      {
        source: "/hire-experts/drupal-experts/",
        destination: "/hire-developers",
        permanent: true,
      },
      {
        source: "/hire-experts/drupal-experts",
        destination: "/hire-developers",
        permanent: true,
      },
      {
        source: "/hire-experts/hire-quality-analyst/",
        destination: "/hire-quality-analyst",
        permanent: true,
      },
      {
        source: "/hire-experts/",
        destination: "/hire-developers",
        permanent: true,
      },
      {
        source: "/hire-experts/hire-magento-experts/",
        destination: "/hire-magento-experts",
        permanent: true,
      },
      {
        source: "/hire-experts/wordpress-experts/",
        destination: "/hire-wordpress-experts",
        permanent: true,
      },
      {
        source: "/hire-experts/wordpress-experts",
        destination: "/hire-wordpress-experts",
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
      {
        source: "/services/hire-web-developer.htm",
        destination: "/hire-web-developers",
        permanent: true,
      },
      {
        source: "/hire-experts/node-js-experts/",
        destination: "/hire-node-js-experts",
        permanent: true,
      },
      {
        source: "/hire-experts/codeigniter-developers",
        destination: "/hire-codeignitor-developers",
        permanent: true,
      },
      {
        source: "/hire-experts/codeigniter-developers/",
        destination: "/hire-codeignitor-developers",
        permanent: true,
      },
      {
        source: "/hire-codeigniter-developers",
        destination: "/hire-codeignitor-developers",
        permanent: true,
      },
      {
        source: "/hire-codeigniter-developers/",
        destination: "/hire-codeignitor-developers",
        permanent: true,
      },
      {
        source: "/hire-developers/web-developers",
        destination: "/hire-web-developers",
        permanent: true,
      },

      // Custom solutions

      {
        source: "/erp-system-software-developement",
        destination: "/erp-system-software-development",
        permanent: true,
      },
      {
        source: "/erp-system-software-developement/",
        destination: "/erp-system-software-development",
        permanent: true,
      },
      {
        source: "/restaurant-table-booking-script",
        destination: "/restaurant-table-booking-system",
        permanent: true,
      },
      {
        source: "/products/jewellery-ecommerce-script",
        destination: "/jewellery-ecommerce-system-solution",
        permanent: true,
      },
      {
        source: "/products/jewellery-ecommerce-script/",
        destination: "/jewellery-ecommerce-system-solution",
        permanent: true,
      },
      {
        source: "/custom_solutions/jewellery-ecommerce-script",
        destination: "/jewellery-ecommerce-system-solution",
        permanent: true,
      },
      {
        source: "/products/jewellery-e-commerce-system/",
        destination: "/jewellery-ecommerce-system-solution",
        permanent: true,
      },
      {
        source: "/products/readymade-crm-solution",
        destination: "/crm-software-development",
        permanent: true,
      },
      {
        source: "/products/readymade-crm-solution/",
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
        source: "/services/software-development.htm",
        destination: "/software-development",
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
        source: "/products/booking-app-script",
        destination: "/booking-app-development",
        permanent: true,
      },
      {
        source: "/products/angularjs-blog-script",
        destination: "/blog-script",
        permanent: true,
      },
      {
        source: "/products/angularjs-blog-script/",
        destination: "/blog-script",
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
        source: "/products/booking-app-script//",
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
        source: "/products/ecommerce-script/",
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
        source: "/products/seat-booking-script/",
        destination: "/seat-booking-system",
        permanent: true,
      },
      {
        source: "/custom_solutions/seat-booking-script/",
        destination: "/seat-booking-system",
        permanent: true,
      },
      {
        source: "/custom_solutions/seat-booking-script",
        destination: "/seat-booking-system",
        permanent: true,
      },
      {
        source: "/products/booking-applications/",
        destination: "/seat-booking-system",
        permanent: true,
      },
      {
        source: "/custom_solutions/php-auction-script/",
        destination: "/auction-software-solution",
        permanent: true,
      },
      {
        source: "/custom_solutions/php-auction-script",
        destination: "/auction-software-solution",
        permanent: true,
      },
      {
        source: "/products/php-auction-script/",
        destination: "/auction-software-solution",
        permanent: true,
      },
      {
        source: "/products/php-auction-script",
        destination: "/auction-software-solution",
        permanent: true,
      },
      {
        source: "/Auction-software-solution",
        destination: "/auction-software-solution",
        permanent: true,
      },
      {
        source: "/products/auction-script.htm",
        destination: "/auction-software-solution",
        permanent: true,
      },
      {
        source: "/services/software-development/dating-website/",
        destination: "/dating-system-solution",
        permanent: true,
      },
      {
        source: "/services/software-development/dating-website",
        destination: "/dating-system-solution",
        permanent: true,
      },
      {
        source: "/products/dating-system/",
        destination: "/dating-system-solution",
        permanent: true,
      },
      {
        source: "/products/dating-system",
        destination: "/dating-system-solution",
        permanent: true,
      },
      {
        source: "/custom_solutions/dating-system/",
        destination: "/dating-system-solution",
        permanent: true,
      },
      {
        source: "/custom_solutions/online-test-script/",
        destination: "/online-exam-software-solution",
        permanent: true,
      },
      {
        source: "/services/software-development/erp-openbravo",
        destination: "/erp-system-software-development",
        permanent: true,
      },
      {
        source: "/restaurant-food-delivery-script",
        destination: "/food-ordering-script",
        permanent: true,
      },
      {
        source: "/online-food-ordering-system/",
        destination: "/food-ordering-script",
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
        source: "/service",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/service/",
        destination: "/services",
        permanent: true,
      },
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
        source: "/android",
        destination: "/android-app-development",
        permanent: true,
      },
      {
        source: "/android-app-developmen",
        destination: "/android-app-development",
        permanent: true,
      },
      {
        source: "/startup-mobile-app-development-company/",
        destination: "/startup-mobile-app-development-company",
        permanent: true,
      },
      {
        source: "/services/mobile-app-development",
        destination: "/android-app-development",
        permanent: true,
      },
      {
        source: "/mobile-app-development/android",
        destination: "/android-app-development",
        permanent: true,
      },
      {
        source: "/services/mobile-app-development/",
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
        source: "/services/support/",
        destination: "/software-maintenance-support",
        permanent: true,
      },
      {
        source: "/support",
        destination: "/software-maintenance-support",
        permanent: true,
      },
      {
        source: "/support/",
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
        source: "/web-design-consulting-company.htm",
        destination: "/website-design",
        permanent: true,
      },
      {
        source: "/services/website-design/flash-web-design.htm",
        destination: "/website-design",
        permanent: true,
      },
      {
        source: "/services/website-design/flash-web-design/",
        destination: "/website-design",
        permanent: true,
      },
      {
        source: "/flash-web-design/",
        destination: "/website-design",
        permanent: true,
      },
      {
        source: "/website-designing-offer/",
        destination: "/website-design",
        permanent: true,
      },
      {
        source: "/web-hosting.htm",
        destination: "/web-hosting",
        permanent: true,
      },
      {
        source: "/services/web-hosting/",
        destination: "/web-hosting",
        permanent: true,
      },
      {
        source: "/services/web-hosting",
        destination: "/web-hosting",
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
        source: "/drupal/",
        destination: "/web-development",
        permanent: true,
      },
      {
        source: "/services/website-development/drupal/",
        destination: "/web-development",
        permanent: true,
      },
      {
        source: "/services/website-development/",
        destination: "/web-development",
        permanent: true,
      },
      {
        source: "/web-development/drupal",
        destination: "/web-development",
        permanent: true,
      },
      {
        source: "/drupal",
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
        source: "/services/website-development/cakephp-framework",
        destination: "/cakephp-development",
        permanent: true,
      },
      {
        source: "/services/website-development/php-programming-services.htm",
        destination: "/php-development",
        permanent: true,
      },
      {
        source: "/company/technologies/php-framework/codeigniter/",
        destination: "/codeigniter-development",
        permanent: true,
      },
      {
        source: "/services/website-development/codeigniter-framework",
        destination: "/codeigniter-development",
        permanent: true,
      },
      {
        source: "/android-development-services",
        destination: "/mobile-app-development",
        permanent: true,
      },
      {
        source: "/android-development-services/",
        destination: "/mobile-app-development",
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
        source: "/technologies/php-framework/yii-framework/",
        destination: "/hire-yii-developers",
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
        source: "/shopify-framework/",
        destination: "/shopify-development",
        permanent: true,
      },
      {
        source: "/web-development/shopify-framework",
        destination: "/shopify-development",
        permanent: true,
      },
      {
        source: "/services/website-development/shopify-framework",
        destination: "/shopify-development",
        permanent: true,
      },
      {
        source: "/services/mobile-application/android",
        destination: "/android-app-development",
        permanent: true,
      },
      {
        source: "/services/mobile-application/android/",
        destination: "/android-app-development",
        permanent: true,
      },
      {
        source: "/services/mobile-application/iphone.htm",
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
        source: "/services/website-development//php-programming-services.htm",
        destination: "/php-development",
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
        source: "/nodejs-development-company/",
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
        source: "/website-design/ui_ux_design_company",
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
        source: "/web-development-services/software-development.htm",
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
        source: "/hire-experts/ios-app-developers/",
        destination: "/ios-app-development",
        permanent: true,
      },
      {
        source: "/services/mobile-application/iphone-application",
        destination: "/ios-app-development",
        permanent: true,
      },
      {
        source: "/services/mobile-application/iphone-application/",
        destination: "/ios-app-development",
        permanent: true,
      },
      {
        source: "/services/mobile-apps-development/iphone-application/",
        destination: "/ios-app-development",
        permanent: true,
      },
      {
        source: "/services/mobile-apps-development/iphone-application",
        destination: "/ios-app-development",
        permanent: true,
      },
      {
        source: "/mobile-app-development/iphone-application",
        destination: "/ios-app-development",
        permanent: true,
      },
      {
        source: "/mobile-app-development/iphone-application/",
        destination: "/ios-app-development",
        permanent: true,
      },
      
      {
        source: "/artificial-",
        destination: "/artificial-intelligence",
        permanent: true,
      },
      {
        source: "/hire-experts/laravel-developers/",
        destination: "/laravel-development",
        permanent: true,
      },
      {
        source: "/laravel/",
        destination: "/laravel-development",
        permanent: true,
      },
      {
        source: "/laravel",
        destination: "/laravel-development",
        permanent: true,
      },
      {
        source: "/services/web-consulting",
        destination: "/web-development",
        permanent: true,
      },
      {
        source: "/services/web-consulting/",
        destination: "/web-development",
        permanent: true,
      },
      {
        source: "/services/website-development/wordpress/",
        destination: "/wordpress-web-development",
        permanent: true,
      },
      {
        source: "/services/advanced-web-programming",
        destination: "/advanced-web-programming",
        permanent: true,
      },
      {
        source: "/services/advanced-web-programming/",
        destination: "/advanced-web-programming",
        permanent: true,
      },

      // softwares

      {
        source: "/softwares/blog-script",
        destination: "/blog-script",
        permanent: true,
      },
      {
        source: "/softwares/blog-script/",
        destination: "/blog-script",
        permanent: true,
      },
      {
        source: "/products/blog-script/",
        destination: "/blog-script",
        permanent: true,
      },
      {
        source: "/products/blog-script",
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
        source: "/products/freelancer-clone-script",
        destination: "/freelancer-clone",
        permanent: true,
      },
      {
        source: "/softwares/freelancer-clone",
        destination: "/freelancer-clone",
        permanent: true,
      },
      {
        source: "/softwares/buynow/freelancer-clone",
        destination: "/freelancer-clone",
        permanent: true,
      },
      {
        source: "/softwares/buynow/groupon-clone",
        destination: "/groupon-clone",
        permanent: true,
      },
      {
        source: "/products/buynow/groupon-clone",
        destination: "/groupon-clone",
        permanent: true,
      },
      {
        source: "/softwares/buynow/news-management-system",
        destination: "/news-management-system",
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
        source: "/buy-now",
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
        source: "/softwares/lead-generation-contact-form-php-script/",
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
        destination: "/appointment-scheduling-software",
        permanent: true,
      },
      {
        source: "/appointment-booking-system/",
        destination: "/appointment-scheduling-software",
        permanent: true,
      },
      {
        source: "/demo/cmsscript/admin",
        destination: "/softwares",
        permanent: true,
      },
      {
        source: "/classified-ads-system-development",
        destination: "/classified-ads-script",
        permanent: true,
      },
      {
        source: "/job-board-software'",
        destination: "/job-board-software",
        permanent: true,
      },
      {
        source: "/jobboard/job_board_remainingpage",
        destination: "/job-board-software",
        permanent: true,
      },
      {
        source: "/softwares/buynow/classified-ads-script",
        destination: "/classified-ads-script",
        permanent: true,
      },
      {
        source: "/products/buynow/classified-ads-script",
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
        destination: "/appointment-scheduling-software",
        permanent: true,
      },
      {
        source: "/custom_solutions/online-appointment-booking-script",
        destination: "/appointment-scheduling-software",
        permanent: true,
      },
      {
        source: "/softwares/buynow/service-marketplace-script",
        destination: "/service-marketplace-script",
        permanent: true,
      },
      {
        source: "/products/marketplace-Script/",
        destination: "/service-marketplace-script",
        permanent: true,
      },
      {
        source: "/products/marketplace-Script",
        destination: "/service-marketplace-script",
        permanent: true,
      },
      {
        source: "/products/buynow/service-marketplace-script",
        destination: "/service-marketplace-script",
        permanent: true,
      },
      {
        source: "/softwares/buynow/whatsapp-clone",
        destination: "/whatsapp-clone",
        permanent: true,
      },
      {
        source: "/products/buynow/whatsapp-clone",
        destination: "/whatsapp-clone",
        permanent: true,
      },
      {
        source: "/products/business-directory-script",
        destination: "/business-directory-system",
        permanent: true,
      },
      {
        source: "/custom_solutions/business-directory-script",
        destination: "/business-directory-system",
        permanent: true,
      },
      {
        source: "/softwares/buynow/business-directory-system",
        destination: "/business-directory-system",
        permanent: true,
      },
      {
        source: "/products/buynow/business-directory-system",
        destination: "/business-directory-system",
        permanent: true,
      },
      {
        source: "/products/business-directory-system",
        destination: "/business-directory-system",
        permanent: true,
      },
      {
        source: "/softwares/buynow/order-management-software",
        destination: "/order-management-software",
        permanent: true,
      },
      {
        source: "/softwares/buynow/online-exam-software-solution",
        destination: "/online-exam-software-solution",
        permanent: true,
      },
      {
        source: "/softwares/buynow/ecommerce-website",
        destination: "/wordpress-ecommerce-website",
        permanent: true,
      },
      {
        source: "/wordpess.htm",
        destination: "/wordpress-ecommerce-website",
        permanent: true,
      },
      {
        source: "/softwares/buynow/blog-script",
        destination: "/blog-script",
        permanent: true,
      },
      {
        source: "/custom_solutions/marketplace-Script",
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
        source: "/service-offering-system/",
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
        source: "/products/fundraising-script/crowdfunding-website/",
        destination: "/crowdfunding-script",
        permanent: true,
      },
      {
        source: "/products/fundraising-script/",
        destination: "/crowdfunding-script",
        permanent: true,
      },
      {
        source: "/products/fundraising-script",
        destination: "/crowdfunding-script",
        permanent: true,
      },
      {
        source: "/fundraising-script/",
        destination: "/crowdfunding-script",
        permanent: true,
      },
      {
        source: "/fundraising-script",
        destination: "/crowdfunding-script",
        permanent: true,
      },
      {
        source: "/products/fund-raising/",
        destination: "/crowdfunding-script",
        permanent: true,
      },
      {
        source: "/products/fund-raising/crowdfunding-website/",
        destination: "/crowdfunding-script",
        permanent: true,
      },
      {
        source: "/products/crowdfunding-script/",
        destination: "/crowdfunding-script",
        permanent: true,
      },
      {
        source: "/products/crowdfunding-script",
        destination: "/crowdfunding-script",
        permanent: true,
      },
      {
        source: "/services/software-development/forum-script",
        destination: "/forum-script",
        permanent: true,
      },
      {
        source: "/services/software-development/forum-script/",
        destination: "/forum-script",
        permanent: true,
      },
      {
        source: "/services/software-development/",
        destination: "/software-development",
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
        source: "/wordpress-twitter-login-plugin/",
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
        source: "/products/buynow/equipment-rental-software",
        destination: "/equipment-rental-software",
        permanent: true,
      },
      // {
      //   source: "/recruitment-management-softwarehttp://",
      //   destination: "/recruitment-management-software",
      //   permanent: true,
      // },
      {
        source: "/softwares/buynow/recruitment-management-software",
        destination: "/recruitment-management-software",
        permanent: true,
      },
      {
        source: "/recruitment-m",
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
        source: "/softwares/buynow/rental-property-management-software",
        destination: "/rental-property-management-software",
        permanent: true,
      },
      {
        source: "/appointment-scheduling-software/",
        destination: "/appointment-scheduling-software",
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
      {
        source: "/custom_solutions/event-booking-script/",
        destination: "/event-booking-software",
        permanent: true,
      },
      {
        source: "/custom_solutions/event-booking-script",
        destination: "/event-booking-software",
        permanent: true,
      },
      {
        source: "/products/event-booking-script",
        destination: "/event-booking-software",
        permanent: true,
      },
      {
        source: "/products/event-booking-script/",
        destination: "/event-booking-software",
        permanent: true,
      },
      {
        source: "/softwares/faq-script",
        destination: "/faq-script",
        permanent: true,
      },
      {
        source: "/products/faq-script/",
        destination: "/faq-script",
        permanent: true,
      },

      // Case study

      {
        source: "/casestudies/view/:slug*",
        destination: "/case-study/:slug*",
        permanent: true,
      },

      {
        source: "/services/professional-training",
        destination: "https://plp.logicspice.com/",
        permanent: true,
      },
      
      {
        source: "/services/professional-training/",
        destination: "https://plp.logicspice.com/",
        permanent: true,
      },

      // blog
      // {
      //   source: "/blog/why-choose-wordpress-for-your-website-development",
      //   destination: "https://blog.logicspice.com/why-choose-wordpress-for-your-website-development",
      //   permanent: true,
      // },
      // {
      //   source: "/blog/startup-ideas-for-small-business-with-low-investment",
      //   destination: "https://blog.logicspice.com/startup-ideas-for-small-business-with-low-investment",
      //   permanent: true,
      // },
      // {
      //   source: "/blog/facebook-an-impressive-marketing-platform",
      //   destination: "https://blog.logicspice.com/facebook-an-impressive-marketing-platform",
      //   permanent: true,
      // },
      // {
      //   source: "/why-choose-wordpress-for-your-website-development",
      //   destination: "https://blog.logicspice.com/why-choose-wordpress-for-your-website-development",
      //   permanent: true,
      // },
    ];
  },
};

export default nextConfig;
