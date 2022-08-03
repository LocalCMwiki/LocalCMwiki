<template>
  <div>
    <b-breadcrumb>
      <b-breadcrumb-item tag="nuxt-link" to="/">ホーム</b-breadcrumb-item>
      <b-breadcrumb-item tag="nuxt-link" to="/list/create" active
        >新規ページ</b-breadcrumb-item
      >
    </b-breadcrumb>
    <div class="content">
      <h1>新規ページ</h1>
      <div v-if="loading && !error">
        <b-progress type="is-info"></b-progress>
        <p class="has-text-centered">読み込み中</p>
      </div>

      <div v-if="error" class="content">
        <h3 class="has-text-centered red">データが取得できませんでした</h3>
        <p class="has-text-centered">時間を置いて再度お試しください</p>
      </div>
      <ul>
        <li v-for="(list, num) in data" :key="num">
          <nuxt-link :to="'/page/' + list.id">{{ list.title }}</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {
  collection,
  getDocs,
  getFirestore,
  query,
  limit,
  orderBy,
} from "firebase/firestore";

export default {
  watchQuery: ["page"],
  head() {
    return {
      title: "作成されたページ",
    };
  },
  data() {
    return {
      page: 1,
      data: [],
      total: 0,
      loading: false,
      error: false,
    };
  },
  methods: {
    dataget: function () {
      let data = [];
      const db = getFirestore();
      const docRef = collection(db, "article");

      getDocs(query(docRef, orderBy("created_at", "desc"), limit(100))).then(
        (snapshot) => {
          snapshot.forEach((doc) => {
            data.push(doc.data());
          });
        }
      );

      this.data = data;
    },
  },
  mounted() {
    this.dataget();
  },
  watch: {
    $route() {
      this.dataget();
    },
  },
};
</script>
