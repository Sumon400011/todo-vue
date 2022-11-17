import { defineStore } from "pinia";

export const mainStore = defineStore("store", {
  state: () => {
    return { count: 0 };
  },
});
