<template>
  <input @input="debounceSearch" class="input-field" v-model="text" />
</template>

<script lang="ts">
import axios from "axios";
import { geoLocOptions } from "../apis/geoLoc";
import { Data } from "../interfaces/dataSearch";

export default {
  data: (): Data => ({
    text: "",
    city: "",
    debounce: "",
  }),
  methods: {
    // debounce for search method
    debounceSearch() {
      clearTimeout(this.debounce);
      this.debounce = setTimeout(() => {
        this.city = this.text;
        console.log(this.city);
        /*    axios
      .request(geoLocOptions)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });  */
      }, 600);
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
