<template>
  <div class="search-container">
    <div class="icon-side">
      <!-- aca va un icon the lupita -->
    </div>
    <div class="input-side">
      <Input />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Input from "../../utils/Input.vue";

export default defineComponent({
  name: "Search",
  components: {
    Input,
  },
});
</script>

<style>
.search-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.icon-side {
  width: 10%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.input-side {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
