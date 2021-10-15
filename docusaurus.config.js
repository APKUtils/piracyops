/** @type {import('@docusaurus/types').DocusaurusConfig} */

module.exports = {
  title: "Piracy",
  tagline: "It's illegal cuz they can't tax you!",
  url: "https://piracyops.now.sh",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  themeConfig: {
    image: "img/ogimage.png",
    navbar: {
      title: "Piracy",
      logo: {
        alt: "",
        src: "img/logo.svg",
        srcDark: "img/darklogo.svg",
      },
      items: [
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/APKUtils/piracyops",
          label: "Github",
          position: "right",
        },
      ],
    },
    algolia: {
      apiKey: "5470eae5ca52eb07867cedc3fdd33424",
      indexName: "awesome_piracy",
    },
    prism: {
      theme: require("prism-react-renderer/themes/dracula"),
    },
    googleAnalytics: {
      trackingID: "UA-210244496-1",
      anonymizeIP: true,
    },
    gtag: {
      trackingID: "UA-210244496-1",
      anonymizeIP: true,
    },
    announcementBar: {
      id: "star",
      content:
        '<b><a target="_blank" href="https://github.com/APKUtils/piracyops#:~:text=star">PLEASE LEAVE A STAR ON GITHUB</a></b>',
      backgroundColor: "var(--ifm-background-surface-color)",
      textColor: "var(--ifm-color-primary)",
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/APKUtils/piracyops/-/edit/master/docs/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: "all",
            copyright: "It's free real estate! (CC0)",
          },
          editUrl: "https://github.com/APKUtils/piracyops/-/edit/master/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-sitemap',
      {
        changefreq: 'weekly',
        priority: 0.5,
        trailingSlash: false,
      },
    ],
  ],
};
