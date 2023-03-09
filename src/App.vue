<template>
  <div class="app">
    <Header />
  </div>
</template>

<script lang="ts">
import process from "process";
import Header from "./components/header/Header.vue";
export default {
  name: "App",
  components: {
    Header,
  },
  mounted() {
    console.log(import.meta.env.VITE_GEOLOC_API);
  },
};
</script>

<style scoped>
.app {
  width: 100vw;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 0;
}
</style>
