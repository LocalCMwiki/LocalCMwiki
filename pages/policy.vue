<template>
  <div>
    <h1 class="pagetitle">プライバシーポリシー</h1>

    <div class="article content">
      <h2>記事について</h2>
      <ul>
        <li>企業等の記事は「CMを紹介」することを目的として作られています。</li>
        <li>
          企業等・出演者などを侮辱・誹謗中傷する内容は発見次第修正するよう心がけます。
        </li>
      </ul>

      <h2>掲載されたCMについて</h2>
      <ul>
        <li>
          このサイトにて掲載された動画は、「ローカルCMを楽しむ」目的のために掲載しています。
        </li>
      </ul>
      <h2>著作権について</h2>
      <ul>
        <li>
          問題が発生した場合、<nuxt-link to="/contact">お問い合わせ</nuxt-link
          >にてお願いします。
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Policy",
  head() {
    return {
      title: "プライバシーポリシー",
    };
  },
};
</script>

<style>
.space {
  margin: 20px 0 20px 0;
}
</style>
