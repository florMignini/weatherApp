import { defineStore } from "pinia";
import { Location } from "../interfaces/location";

export const locationStore = defineStore("location", {
  state: (): Location => ({
    locations: [],
  }),
  actions: {
    getlocationInfo(res: []) {
      this.locations = res;
    },
    clearState() {
      this.locations = [];
    },
  },
});
