<template>
  <input @keypress="debounceSearch" class="input-field" v-model="text" />
</template>

<script lang="ts">
import { getLocalization } from "../apis/geoLoc";
import { locationData } from "../interfaces/dataSearch";

export default {
  data: (): locationData => ({
    text: "",
    debounce: "",
  }),
  methods: {
    debounceSearch() {
      // debounce for search method
      clearTimeout(this.debounce);
      this.debounce = setTimeout(() => {
        this.text = this.text;
        getLocalization(this.text);
      }, 800);
    },
  },
  watch: {
    text(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.debounceSearch;
      }
    },
  },
};
</script>

<style scoped>
.input-field {
  width: 20%;
  border: none;
  outline: none;
  border-radius: 10px;
  padding: 0px 15px 0px 15px;
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition-duration: 1s;
  background-color: var(--font-color);
}
.input-field:focus {
  outline: none;
  width: 60%;
}
</style>
