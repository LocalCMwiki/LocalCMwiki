<template>
  <div>
    <div>
      <b-breadcrumb>
        <b-breadcrumb-item tag="nuxt-link" to="/">ホーム</b-breadcrumb-item>
        <b-breadcrumb-item tag="nuxt-link" to="/tags">タグ</b-breadcrumb-item>
        <b-breadcrumb-item
          tag="nuxt-link"
          :to="'/tag/' + $route.params.tag"
          active
          >{{ $route.params.tag }}</b-breadcrumb-item
        >
      </b-breadcrumb>
      <div class="content">
        <h1>タグ:{{ $route.params.tag }}({{ data.length }}件)</h1>
        <div v-if="loading">
          <b-progress type="is-info"></b-progress>
          <p class="has-text-centered">読み込み中</p>
        </div>

        <div v-if="error" class="content">
          <h3 class="has-text-centered red">データが取得できませんでした</h3>
          <p class="has-text-centered">時間を置いて再度お試しください</p>
        </div>

        <div>
          <ul>
            <li v-for="(list, num) in data" :key="num">
              <nuxt-link :to="'/page/' + list.id">{{ list.title }}</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  collection,
  getDocs,
  getFirestore,
  query,
  orderBy,
  where,
} from "firebase/firestore";

export default {
  head() {
    return {
      title: "タグ「" + this.$route.params.tag + "」を含むページ一覧",
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
    dataget: async function () {
      let data = [];
      const db = getFirestore();
      const docRef = collection(db, "article");

      getDocs(
        query(
          docRef,
          where("tags", "array-contains", this.$route.params.tag),
          orderBy("updated_at", "desc")
        )
      ).then((snapshot) => {
        snapshot.forEach((doc) => {
          data.push(doc.data());
        });
      });

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
