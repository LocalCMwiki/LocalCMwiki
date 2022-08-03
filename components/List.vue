<template>
  <div>
    <div class="article">
      <h2 class="list">新規ページ</h2>
      <div v-if="error != true">
        <ul>
          <li v-for="(list, num) in newdata" :key="num">
            <nuxt-link :to="'/page/' + list.id">{{ list.title }}</nuxt-link>
          </li>
        </ul>
      </div>
      <div v-if="error === true">
        <p>エラーが発生しました</p>
      </div>
    </div>
  </div>
</template>

<style>
.list {
  font-size: 24px;
  margin-top: 10px;
}
</style>

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
  data() {
    return {
      menu: [],
      newdata: [],
      up: [],
      side: "",
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

      this.newdata = data;
    },
  },
  mounted() {
    this.dataget();
  },
};
</script>
