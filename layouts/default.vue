<template>
  <div>
    <div class="container">
      <Header></Header>

      <div class="columns is-desktop r-desktop">
        <div class="column is-8-desktop is-full">
          <div class="p-10">
            <Nuxt></Nuxt>
          </div>
        </div>
        <div class="column is-4-desktop is-full">
          <div class="p-10">
            <Side></Side>
          </div>
        </div>
      </div>
    </div>
    <footer class="footer">
      <div class="content has-text-centered">
        <p>©2022 LocalCMwiki</p>
      </div>
    </footer>
  </div>
</template>

<style></style>

<script>
import Header from "@/components/Header.vue";
import Side from "@/components/Side.vue";
import { getAuth, onAuthStateChanged, signInAnonymously } from "firebase/auth";

export default {
  middleware: "maintenance",
  data() {
    return {
      data: [],
      password: "",
    };
  },
  components: {
    Header,
    Side,
  },
  watch: {
    $route() {
      window.scrollTo({
        top: 0,
      });
    },
  },
  mounted() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        signInAnonymously(auth)
          .then(() => {
            console.log("Login");
          })
          .catch((error) => {
            this.$router.push("/error");
          });
      }
    });
  },
};
</script>
