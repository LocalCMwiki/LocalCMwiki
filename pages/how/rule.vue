<template>
  <div class="article content">
    <h1>記事作成のルール</h1>

    <h2>IPアドレスについて</h2>
    <ul>
      <li>このサイトは記事の作成者及び編集者のIPアドレスを収集しています。</li>
      <li>
        本サイトで収集したIPアドレスは、法的な開示請求が無い限り外部に公開することはありません。
      </li>
    </ul>

    <h2>禁止事項</h2>
    <ul>
      <li>出演者・企業等・CMの制作会社等を侮辱・誹謗中傷する内容</li>
      <li>企業等などの<span class="red">クレーム・不祥事</span>の記載</li>
      <li><span class="red">著名人以外のCMの出演者等</span>の個人情報の記載</li>
      <li>犯罪予告などの記載</li>
    </ul>

    <p><nuxt-link to="/how/titletag">タイトルとタグの付け方→</nuxt-link></p>
  </div>
</template>

<script>
export default {
  name: "titletag",
  head() {
    return {
      title: "記事作成のルール",
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
</style>
