<template>
  <div class="article content">
    <h1>このサイトについて</h1>

    <h2>ローカルCMwikiとは?</h2>
    <ul>
      <li>
        このサイトは、ローカルCMを発信する企業・学校・団体(以下企業等)をまとめるサイトです。
      </li>
      <li>
        このサイトは5chの「未出･迷宮入りCM捜索」及び「<a
          href="https://w.atwiki.jp/commercial/"
          >未出･迷宮入りCM捜索@wiki</a
        >」とは一切関係ありません。
      </li>
    </ul>

    <h2>サイトリンク集</h2>
    <ul>
      <li>
        Twitter:<a href="https://twitter.com/localcmwiki">@localcmwiki</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Article",
  head() {
    return {
      title: "このサイトについて",
    };
  },
};
</script>

<style>
img {
  border: 1px solid black;
}

.red {
  color: red;
}

.article p {
  margin-bottom: 0 !important;
}
</style>
