<template>
  <div>
    <Title></Title>
    <div class="space"></div>
    <List></List>
  </div>
</template>

<script>
import Title from "~/components/Title";
import List from "~/components/List";

export default {
  name: "IndexPage",
  head() {
    return {
      title: "ローカルCMwiki",
      titleTemplate: null,
    };
  },
  components: {
    Title,
    List,
  },
};
</script>

<style>
.space {
  margin: 20px 0 20px 0;
}
</style>
