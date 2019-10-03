/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: "Ignite",
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: "https://ignite.org.pk/wp-content/uploads/2018/06/ignite.png",
    infoLink: "https://ignite.org.pk/",
    pinned: true
  },
  {
    caption: "MOITT",
    image: "http://web.lums.edu.pk/~basit/bpcom/images/logo_moit.jpg",
    infoLink: "https://moitt.gov.pk/"
  },
  {
    caption: "LUMS",
    image: "https://lums.edu.pk/sites/all/themes/lums/logo.png",
    infoLink: "https://lums.edu.pk/"
  }
];

const siteConfig = {
  title: "ERP", // Title for your website.
  tagline: "An erp application made for the assembler tool.",
  url: "https://nidafarooqui.github.io", // Your website URL
  baseUrl: "/documentation-erp/", // Base URL for your project */
  docsUrl: "", // don't prefix docs URLs with /docs/
  repoUrl: "https://github.com/nidafarooqui/erp",
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',
  editUrl:
    "https://github.com/nidafarooqui/documentation-erp/edit/master/docs/",
  // Used for publishing and more
  projectName: "documentation-erp",
  organizationName: "nidafarooqui",
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    { doc: "installation", label: "Docs" },
    { doc: "creating-processes", label: "Guides" },
    { doc: "add-product", label: "API" },
    { href: "https://github.com/nidafarooqui/erp", label: "GitHub" }
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: "img/favicon.ico",
  footerIcon: "img/favicon.ico",
  favicon: "img/favicon.ico",

  /* Colors for website */
  colors: {
    primaryColor: "#922639",
    secondaryColor: "#661a27"
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} LUMS`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: "monokai"
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: [
    "https://buttons.github.io/buttons.js",
    "https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js",
    "/documentation-erp/js/code-block-buttons.js"
  ],

  // On page navigation for the current documentation page.
  onPageNav: "separate",
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: "img/undraw_online.svg",
  twitterImage: "img/undraw_tweetstorm.svg",

  // For sites with a sizable amount of content, set collapsible to true.
  // Expand/collapse the links and subcategories under categories.
  // docsSideNavCollapsible: true,

  // Show documentation's last contributor's name.
  enableUpdateBy: true,

  // Show documentation's last update time.
  enableUpdateTime: true,

  cleanUrl: true,
  scrollToTop: true,
  scrollToTopOptions: {
    zIndex: 100
  },
  // Collapsible categories in the side navigation.
  docsSideNavCollapsible: true

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
};

module.exports = siteConfig;
