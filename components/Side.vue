<template>
  <div>
    <div>
      <div class="content" v-if="error.length > 0">
        <h3>エラー</h3>
        <ul>
          <li v-for="(list, id) in error" :key="id">
            {{ list }}
          </li>
        </ul>
      </div>
      <h2 class="list">サイト説明</h2>
      <ul>
        <li><nuxt-link to="/siteinfo">このサイトについて</nuxt-link></li>
      </ul>

      <h2 class="list">メニュー</h2>
      <ul>
        <li><nuxt-link to="/create">新規ページ作成</nuxt-link></li>
        <li><nuxt-link to="/contact">お問い合わせ</nuxt-link></li>
      </ul>

      <h2 class="list">ページの作り方＆編集</h2>
      <ul>
        <li><nuxt-link to="/how/rule">記事作成のルール</nuxt-link></li>
        <li><nuxt-link to="/how/titletag">タイトル＆タグ</nuxt-link></li>
        <li><nuxt-link to="/how/article">記事</nuxt-link></li>
      </ul>

      <h2 class="list">新規ページ</h2>
      <ul>
        <li v-for="(list, num) in newdata" :key="num">
          <nuxt-link :to="'/page/' + list.id">{{ list.title }}</nuxt-link>
        </li>
      </ul>
      <p v-if="error.create">ページが取得できませんでした</p>
      <p class="mtb-10">
        <nuxt-link to="/list/create">もっと見る</nuxt-link>
      </p>
    </div>
    <div>
      <h2 class="list">更新ページ</h2>
      <ul>
        <li v-for="(list, num) in up" :key="num">
          <nuxt-link :to="'/page/' + list.id">{{ list.title }}</nuxt-link>
        </li>
      </ul>
      <p v-if="error.update">ページが取得できませんでした</p>
      <p class="mtb-10">
        <nuxt-link to="/list/update">もっと見る</nuxt-link>
      </p>
    </div>
  </div>
</template>

<style>
.menu {
  margin-bottom: 10px;
}

.list {
  font-size: 24px;
  margin-top: 10px;
}

.mtb-10 {
  margin: 10px 0;
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
      error: {
        create: false,
        update: false,
      },
    };
  },
  methods: {
    get: function () {
      let data = [];
      let up = [];
      const db = getFirestore();
      const docRef = collection(db, "article");

      getDocs(query(docRef, limit(10), orderBy("created_at", "desc"))).then(
        (snapshot) => {
          snapshot.forEach((doc) => {
            data.push(doc.data());
          });
        }
      );

      getDocs(query(docRef, limit(10), orderBy("updated_at", "desc"))).then(
        (snapshot) => {
          snapshot.forEach((doc) => {
            up.push(doc.data());
          });
        }
      );

      this.newdata = data;
      this.up = up;
    },
  },
  mounted() {
    this.get();
  },
};
</script>
