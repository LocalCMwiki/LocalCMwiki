<template>
  <div>
    <b-breadcrumb>
      <b-breadcrumb-item tag="nuxt-link" to="/">ホーム</b-breadcrumb-item>
      <b-breadcrumb-item tag="nuxt-link" to="/create" active
        >新規ページ作成</b-breadcrumb-item
      >
    </b-breadcrumb>

    <h1 class="wikititle">新規ページ作成</h1>

    <b-field label="タイトル">
      <b-input v-model="title" maxlength="30"></b-input>
    </b-field>

    <b-field label="タグ">
      <b-taginput
        v-model="tags"
        ellipsis
        icon="label"
        placeholder="タグは最大20個です。"
        aria-close-label="タグを削除する"
        maxtags="20"
      >
      </b-taginput>
    </b-field>

    <b-field label="内容">
      <editor v-model="body" :api-key="apikey" :init="init" />
    </b-field>

    <div v-if="error" class="errors content">
      <h3>エラー</h3>
      <ul>
        <li v-for="(list, id) in error" :key="id">{{ list }}</li>
      </ul>
      <p v-if="error.length >= 1">
        通信エラーが続く場合、<nuxt-link to="/contact">お問い合わせ</nuxt-link
        >にて伝えてくだされば幸いです。
      </p>
    </div>

    <div class="buttons">
      <b-button type="is-primary" expanded v-bind:disabled="check" @click="post"
        >投稿</b-button
      >
    </div>
  </div>
</template>

<style>
.errors {
  margin: 10px 0;
}
</style>

<script>
import { doc, setDoc, collection, getFirestore } from "firebase/firestore";
import Editor from "@tinymce/tinymce-vue";

export default {
  head() {
    return {
      title: "新規ページ作成",
    };
  },
  components: {
    editor: Editor,
  },
  data() {
    return {
      title: "",
      tags: [],
      body: "",
      apikey: "",
      error: null,
      init: {
        language: "ja",
        height: 500,
        menubar: false,
        plugins: ["media table lists paste link"],
        toolbar:
          "formatselect | undo redo | bold italic forecolor backcolor | link |alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | media | table",
        block_formats: "Paragraph=p;見出し=h2",
      },
    };
  },
  computed: {
    check: function () {
      if (
        !this.title ||
        this.title.length > 30 ||
        this.tags.length < 1 ||
        this.tags.length > 20 ||
        !this.body
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    post: async function () {
      const now = new Date();
      const db = getFirestore();
      const getid = collection(db, "article");
      const backup = collection(db, "backup");
      const page_id = doc(getid).id;
      const backup_id = doc(backup).id;

      const page = await setDoc(doc(db, "article", page_id), {
        id: page_id,
        title: this.title,
        tags: this.tags,
        body: this.body,
        created_at: now,
        updated_at: now,
      });

      setDoc(doc(db, "backup", backup_id), {
        id: backup_id,
        page_id: page_id,
        title: this.title,
        tags: this.tags,
        body: this.body,
        date: now,
      });

      this.$router.push("/page/" + page_id);
    },
  },
  async asyncData() {
    return {
      apikey: process.env.NUXT_ENV_TINY_MCE,
      password: process.env.NUXT_ENV_PASSWORD,
    };
  },
};
</script>
