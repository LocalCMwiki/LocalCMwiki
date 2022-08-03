<template>
  <div>
    <b-breadcrumb>
      <b-breadcrumb-item tag="nuxt-link" to="/">ホーム</b-breadcrumb-item>
      <b-breadcrumb-item tag="nuxt-link" to="/list/create"
        >記事</b-breadcrumb-item
      >
      <b-breadcrumb-item tag="nuxt-link" to="/" active>{{
        title
      }}</b-breadcrumb-item>
    </b-breadcrumb>
    <div class="content">
      <h1>{{ title }}</h1>
      <a
        href="https://twitter.com/share?ref_src=twsrc%5Etfw"
        class="twitter-share-button"
        data-show-count="false"
        >Tweet</a
      >
      <div>
        <b-taglist>
          <b-tag type="is-info" v-for="(list, id) in tags" :key="id">
            <nuxt-link class="white" :to="'/tag/' + encodeURI(list)">{{
              list
            }}</nuxt-link>
          </b-tag>
        </b-taglist>
      </div>

      <div class="mt-50 wiki" v-html="body"></div>

      <div class="mt-50">
        <ul>
          <li>作成日時:{{ time(created_at) }}</li>
          <li>最終更新:{{ time(updated_at) }}</li>
        </ul>
        <p>
          <nuxt-link
            :to="'/list/' + $route.params.id + '?title=' + encodeURI(title)"
            >編集履歴</nuxt-link
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { getDoc, getFirestore, doc } from "firebase/firestore";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

export default {
  name: "HomePage",
  script: [
    {
      src: "https://platform.twitter.com/widgets.js",
    },
  ],
  head() {
    return {
      title: this.title,
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: process.env.npm_package_description || "",
        },
        {
          hid: "og:site_name",
          property: "og:site_name",
          content: "ローカルCMwiki",
        },
        { hid: "og:type", property: "og:type", content: "website" },
        { hid: "og:url", property: "og:url", content: this.$route.path },
        { hid: "og:title", property: "og:title", content: this.title },
        { hid: "keywords", name: "keywords", content: this.tags.join(",") },
        {
          hid: "og:description",
          property: "og:description",
          content: "共通ディスクリプション",
        },
        {
          hid: "og:image",
          property: "og:image",
          content:
            "https://lh3.googleusercontent.com/TjgIxB_IVpzpX7ObNd2Z9DfwUn_C0AtrPz1ayjDG48pZjPPR0vRXa1ySAr7MPmKKPrQtLTIEPFxWy-lvRnxMBbDddHqtYIFSB8RFQULS6TeapAmzNKARVDlLjLH24HZG_2M0KYUxYGiooq8poHbZ0r--ZWSxSjwZ0BChTgXeEPCaKnx7dDe5q05i9ZjIU4_Bb2ZVhWOSsXuMl8yukwz2h6vz12UIraeL5uVcoKOsC2Xbt9c4NgUoORrEc5CAGz3yZixqca0JWLqnbzQfGET9d84W-BLQqJHPjBpJrkCqZjETIplHpCZvui8zfGhCEixhlgYeqyPseK7EMuhNCBxhxOiJnwYYxRQ_Eaz3ipp4bEZ18JSA1Ae1ijjR3T4kvWaI4hm0QtMc-FsReMnnDs8Gv38BhR-jPpjEArN-oUvUxYpo5XVUHNZkYkwmr1G8oMQWcteHwFjO6HTfd0wBkvE4ArFjYFntw3U1re-WVixN4LoJebywenfwCKOa9WSTjdoATSLQGwURUS0i4AdgOTQ99lfhpO32-jYX57hmLWlFsODvvPrLC3Ui1XeIV7eE91Jeb7To7ZPTK5yBdfzqPI3H8uJopw6AmqTCHxzHwoynK9FiR3Y4BAj4gSMkjFGGKOSfDGcZ8zIaDRtDnOqnArh1A9uEKxvrz3rOOAjBEL2EJoK9nRfOUhlhYD3T5SPywB2jKJdctjelovi3-WU=w1280-h720-no?authuser=0",
        },
        { name: "twitter:card", content: "summary" },
      ],
    };
  },
  async asyncData({ route, error }) {
    const id = route.params.id;
    const db = getFirestore();

    const docRef = doc(db, "article", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      error({});
    }
  },
  methods: {
    time: function (data) {
      const time = dayjs
        .utc(new Date(data.seconds * 1000))
        .tz("Asia/Tokyo")
        .format("YYYY-MM-DD HH:mm:ss");

      return time;
    },
  },
};
</script>

<style>
a {
  word-break: break-all;
}
.p-10 {
  padding: 10px;
}

.mt-30 {
  margin-top: 30px;
}
</style>
