<template>
  <div class="article content">
    <p><nuxt-link to="/how/titletag">←タイトル・タグ</nuxt-link></p>

    <h1>編集方法(記事)</h1>

    <b-image
      src="https://lh3.googleusercontent.com/pw/AM-JKLXUFd8rqS2gY9xCt2puzOfYetRWqzUQcDIwsX_fM_ia6-gOp4heh-75YpU5Wg7rUS0Orzlqp6UztJtb8Q7bQKblDfRpAWpJgVXFYrgq_cG8Hyr7MCynYRG6kuVd4AXXZgs2s5r167L8ErIi0gAw7hw=w882-h517-no?authuser=0"
    ></b-image>

    <h2>編集画面について</h2>
    <p>編集画面はリッチテキストエディタを使用しています。</p>
    <p>ライブラリには「tinyMCE-Vue」を使用しています。</p>

    <h2>最低限書いて欲しい内容</h2>
    <b-image
      src="https://lh3.googleusercontent.com/pw/AM-JKLWOgA8XtuluDc1F-CFuOoN4o_cB-mldRC7IFVkjAnWnTQrtFLV7Xpz3UhK-POh_k9CgdE-hc-_fzItjoLUaJtYgRNeTUKSeT8p77Yqz0eTxCANhrG_vcb-YuB1wWcukGthFjqThXSRoy04vwNRtxzQ=w884-h595-no?authuser=0"
    ></b-image>
    <ul>
      <li>概要</li>
      <li>公式サイト、公式サイトのCMギャラリー、Wikipediaなど</li>
      <li>CMギャラリー</li>
      <li>未発見CMの情報</li>
      <li>上記の情報は無い場合は書かなくてもいい</li>
    </ul>

    <h2>リッチテキストエディタの使い方</h2>

    <b-image
      src="https://lh3.googleusercontent.com/pw/AM-JKLWsEYaFn76z-9Lb9k-A4Q6PB8-ZHSE90uxBDrc-sRBvEgjhoM6Gu2Gcw33N8BVOJjuccek5rtZpGa8QUBHiXp51JU7Ic_pLk3MaTt0_2ulmLcPi9VKFFPRw9XZ9tjCPF_yHGs-ggNNJZpRPdWqyX7w=w882-h517-no?authuser=0"
    ></b-image>

    <ul>
      <li>(1):見出し</li>
      <li>(2):前の状態に戻る/次の状態に戻す</li>
      <li>
        (3):右から
        <ul>
          <li>太字</li>
          <li>斜字</li>
          <li>文字の色</li>
          <li>文字の背景色</li>
        </ul>
      </li>
      <li>(4):文字の位置</li>
      <li>
        (5):右から
        <ul>
          <li>数字のないリスト</li>
          <li>数字付きリスト</li>
          <li>右に1文字ずらす</li>
          <li>左に1文字ずらす</li>
        </ul>
      </li>
      <li>
        (6):メディアファイル(外部サイトの動画のみ対応)
        <ul>
          対応している形式
          <li>YouTubeの動画</li>
          <li>mp4</li>
          <li>mp3</li>
        </ul>
      </li>
      <li>(7):テーブル</li>
      <li>(8):記事の内容</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Article",
  head() {
    return {
      title: "記事の書き方について",
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
