<template>
  <div>
    <b-breadcrumb>
      <b-breadcrumb-item tag="nuxt-link" to="/">ホーム</b-breadcrumb-item>
      <b-breadcrumb-item tag="nuxt-link" :to="'/page/' + id">{{
        title
      }}</b-breadcrumb-item>
      <b-breadcrumb-item tag="nuxt-link" :to="'/edit/' + id" active
        >{{ title }}の編集</b-breadcrumb-item
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

<style></style>

<script>
import {
  getDoc,
  setDoc,
  getFirestore,
  collection,
  updateDoc,
  doc,
} from "firebase/firestore";
import Editor from "@tinymce/tinymce-vue";

export default {
  head() {
    return {
      title: this.title + "の編集",
    };
  },
  components: {
    editor: Editor,
  },
  data() {
    return {
      initialValue: "",
      init: {
        language: "ja",
        height: 500,
        menubar: false,
        plugins: ["media table lists paste link"],
        toolbar:
          "formatselect | undo redo | bold italic forecolor backcolor | link | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | media | table",
        block_formats: "Paragraph=p;見出し=h2",
      },
      title: "",
      body: "",
      error: null,
      apikey: process.env.NUXT_ENV_TINY_MCE,
    };
  },
  async asyncData({ route, error }) {
    const db = getFirestore();
    const id = route.params.id;
    let docSnap;

    if (route.query.backup) {
      const backup_id = route.query.backup;

      const docRef = doc(db, "backup", backup_id);
      docSnap = await getDoc(docRef);
    } else {
      const docRef = doc(db, "article", id);
      docSnap = await getDoc(docRef);
    }

    return docSnap.data();
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
      const backup = collection(db, "backup");
      const backup_id = doc(backup).id;

      const page = await updateDoc(doc(db, "article", this.$route.params.id), {
        id: this.$route.params.id,
        title: this.title,
        tags: this.tags,
        body: this.body,
        updated_at: now,
      });

      setDoc(doc(db, "backup", backup_id), {
        id: backup_id,
        page_id: this.$route.params.id,
        title: this.title,
        tags: this.tags,
        body: this.body,
        date: now,
      });

      this.$router.push("/page/" + this.$route.params.id);
    },
    tagsplit(str) {
      if (str != null) {
        return str.split(",");
      }
      return null;
    },
  },
};
</script>
