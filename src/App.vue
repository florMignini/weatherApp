<template>
  <div class="app">
    <Header />
  </div>
</template>

<script lang="ts">
import { userLocation } from "./apis/userLocation";
import Header from "./components/header/Header.vue";
import { initialData } from "./interfaces/dataSearch";
export default {
  name: "App",
  components: {
    Header,
  },
  data: (): initialData => ({
    firstLocation: [],
  }),
  methods: {
    async fetchLocation() {
      const res = await userLocation();
      return res;
    },
  },
  //here I bring the exact localization of the person who request the forecast
  async created() {
    this.firstLocation = await this.fetchLocation();
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
