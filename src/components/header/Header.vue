<template>
  <div class="container">
    <div class="left">
      <Search />
    </div>
    <div class="right">
      <h1 class="title">Weather App</h1>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Search from "../search_bar/Search.vue";

export default defineComponent({
  name: "Header",
  components: {
    Search,
  },
});
</script>

<style scoped>
.container {
  width: 99%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: var(--lightBg-color);
  margin-top: 5px;
  border-radius: 10px;
}
.left,
.right {
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
}
.title {
  width: 80%;
  height: 100%;
  justify-content: center;
  display: flex;
  align-items: center;
}
</style>
