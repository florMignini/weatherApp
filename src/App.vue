<template>
  <div class="app">
    <Header />
  </div>
</template>

<script lang="ts">
import { storeToRefs } from "pinia";
import { userLocation } from "./apis/userLocation";
import Header from "./components/header/Header.vue";
import { initialData } from "./interfaces/dataSearch";
import { locationStore } from "./store/locationStore";
export default {
  name: "App",
  components: {
    Header,
  },
  setup() {
    const localizationStore = locationStore();
    return { localizationStore };
  },
  methods: {
    async bringLocation() {
      const response = await userLocation();
      this.localizationStore.getlocationInfo(response);

      console.log(this.localizationStore.locations);
    },
  },
  //here I bring the exact localization of the person who request the forecast
  created() {
    this.bringLocation();
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
