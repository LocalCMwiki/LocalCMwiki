<template>
  <div>
    <b-breadcrumb>
      <b-breadcrumb-item tag="nuxt-link" to="/">ホーム</b-breadcrumb-item>
      <b-breadcrumb-item tag="nuxt-link" :to="'/page/' + page_id">{{
        title
      }}</b-breadcrumb-item>
      <b-breadcrumb-item
        tag="nuxt-link"
        :to="'/list/' + page_id + '?title=' + title"
        >{{ title }}の編集履歴</b-breadcrumb-item
      >
      <b-breadcrumb-item active>{{ time(date) }}</b-breadcrumb-item>
    </b-breadcrumb>

    <div class="card" id="wiki">
      <div class="media-content wiki p-10">
        <h1 class="wikititle">{{ title }}({{ time(date) }})</h1>
        <div class="content" id="wiki" v-html="body"></div>
      </div>
      <div class="media-content wiki p-10 mt-30">
        <p>
          <nuxt-link :to="'/edit/' + page_id + '?backup=' + id"
            >このデータを使って編集</nuxt-link
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

import { getDoc, getFirestore, doc } from "firebase/firestore";

export default {
  head() {
    return {
      title: this.time(this.date) + "版" + this.title,
    };
  },
  data() {
    return {
      title: "",
      id: this.$route.params.pageid,
      data: [],
    };
  },
  async asyncData({ route, error }) {
    const id = route.params.pageid;
    const db = getFirestore();

    const docRef = doc(db, "backup", id);
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
