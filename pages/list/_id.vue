<template>
  <div>
    <b-breadcrumb>
      <b-breadcrumb-item tag="nuxt-link" to="/">ホーム</b-breadcrumb-item>
      <b-breadcrumb-item tag="nuxt-link" :to="'/page/' + $route.params.id">{{
        title
      }}</b-breadcrumb-item>
      <b-breadcrumb-item
        tag="nuxt-link"
        :to="'/list/' + $route.params.id"
        active
        >{{ title }}の編集履歴</b-breadcrumb-item
      >
    </b-breadcrumb>

    <div class="content">
      <h1>{{ title }}の編集履歴</h1>
      <ul>
        <li v-for="(list, id) in data">
          <nuxt-link :to="'/backup/' + list.id">{{
            time(list.date)
          }}</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
  orderBy,
} from "firebase/firestore";

export default {
  head() {
    return {
      title: this.$route.query.title + "の編集履歴",
    };
  },
  data() {
    return {
      data: [],
      title: "",
      id: this.$route.params.id,
      title: this.$route.query.title,
    };
  },
  mounted() {
    let data = [];
    const page_id = this.$route.params.id;
    const db = getFirestore();
    const docRef = collection(db, "backup");

    getDocs(
      query(docRef, where("page_id", "==", page_id), orderBy("date", "desc"))
    ).then((snapshot) => {
      snapshot.forEach((doc) => {
        data.push(doc.data());
      });
    });

    this.data = data;
  },
  methods: {
    time: function (data) {
      return dayjs
        .utc(data.toDate())
        .tz("Asia/Tokyo")
        .format("YYYY-MM-DD HH:mm:ss");
    },
  },
};
</script>
