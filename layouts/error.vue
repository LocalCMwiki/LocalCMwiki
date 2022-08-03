<template>
  <div class="content">
    <h1>エラーが発生しました</h1>

    <h2>原因と考えられるもの</h2>
    <ul>
      <li>通信エラー</li>
      <li>存在しないページ・データへのアクセス</li>
    </ul>
    <NuxtLink to="/">ホームに戻る</NuxtLink>
  </div>
</template>

<script>
export default {
  name: "Error",
  head() {
    return {
      title: "エラーページ",
    };
  },
};
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
