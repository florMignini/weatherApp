import { defineStore } from "pinia";
import { Location } from "../interfaces/location";

export const locationStore = defineStore("location", {
  state: (): Location => ({
    value: "",
    location: "",
  }),
  actions: {
    getlocationInfo(res: Location) {
      console.log(res);
      this.value = res.value;
      this.location = res.location;
    },
    clearState() {
      (this.value = ""), (this.location = "");
    },
  },
});
