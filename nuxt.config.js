import axios from "axios";
const base = "https://localcmwiki.com";
const url = process.env.NUXT_ENV_SITE_MAP;

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s - ローカルCMwiki",
    title: "ローカルCMwiki",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "google-site-verification",
        content: "UbTQiLpenbGMILxxdDyfHt8f5brqO0fCVgBcClVfThM",
      },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
      {
        hid: "og:site_name",
        property: "og:site_name",
        content: "ローカルCMwiki",
      },
      { hid: "og:type", property: "og:type", content: "website" },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://www.localcmwiki.com/",
      },
      { hid: "og:title", property: "og:title", content: "ローカルCMwiki" },
      {
        hid: "og:description",
        property: "og:description",
        content: "ローカルCMをまとめるwikiです。",
      },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:creator", content: "@localcmwiki" },
      {
        hid: "og:image",
        property: "og:image",
        content:
          "https://lh3.googleusercontent.com/pw/AL9nZEUVJ4LxFltcN1Vn-LQe4X2-9uxSPozf9ouq952ca3PeDV1OmT2OJLU-i72stv_sK9Ng5JMd7MOBxAtYe6qOX2kHfhwPgj77B6Ie1aH5GbjHequBbxGjOGIfIvnerLSUGG0G329GPKvNqBuy9eSDR2A=w1280-h768-no?authuser=0",
      },
      {
        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9376668799007336",
        crossorigin: "anonymous",
        async: true,
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~assets/css/style.css",
    "~assets/css/layout.css",
    "~assets/css/wiki.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: "@/plugins/firebase.js", mode: "client" }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/buefy
    "nuxt-buefy",
    "@nuxtjs/sitemap",
    "@nuxtjs/axios",
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  sitemap: {
    path: "/sitemap.xml",
    hostname: base,
    exclude: ["/create", "/edit/*", "/maintenance", "/list/*", "/backup/*"],
    routes: async () => {
      const res = await axios.get(url);
      return res.data.documents.map(
        (info) => "/page/" + info.fields.id.stringValue
      );
    },
  },
};
