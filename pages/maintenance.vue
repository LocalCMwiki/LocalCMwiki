<template>
  <div>
    <h1 class="pagetitle">メンテナンス中です</h1>

    <div class="article content">
      <p>復旧までお待ちください</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "maintenance",
  head() {
    return {
      title: "メンテナンス中",
      meta: [{ hid: "robots", name: "robots", content: "noindex" }],
    };
  },
};
</script>

<style>
.space {
  margin: 20px 0 20px 0;
}
</style>
