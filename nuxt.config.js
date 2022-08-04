import { collection, getDocs, getFirestore } from "firebase/firestore";

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
        content: "kWYa6n5c3aqEpMGUG_0gvL_tah9QiuSA9OwRNYCFv94",
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
  plugins: [],

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
    [
      "@nuxtjs/firebase",
      {
        config: {
          apiKey: process.env.NUXT_ENV_API_KEY,
          authDomain: process.env.NUXT_ENV_AUTH_DOMAIN,
          projectId: process.env.NUXT_ENV_PROJECT_ID,
          storageBucket: process.env.NUXT_ENV_STORAGE_BUCKET,
          messagingSenderId: process.env.NUXT_ENV_MESSAGING_SENDER_ID,
          appId: process.env.NUXT_ENV_APP_ID,
          measurementId: process.env.NUXT_ENV_MEASUREMENT_ID,
        },
        services: {
          auth: true, // Just as example. Can be any other service.
        },
      },
    ],
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  sitemap: {
    path: "/sitemap.xml",
    exclude: ["/create", "/edit/*", "/maintenance", "/list/*", "/backup/*"],
    routes: async () => {
      let list = [];
      const db = getFirestore();

      const querySnapshot = await getDocs(collection(db, "article"));

      querySnapshot.forEach((doc) => {
        list.push(doc.data());
      });

      return list.map((info) => "/page/" + info.id);
    },
  },
};
