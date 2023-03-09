<template>
  <div class="app">
    <Header />
  </div>
</template>

<script lang="ts">
import Header from "./components/header/Header.vue";
export default {
  name: "App",
  components: {
    Header,
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
