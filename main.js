const { createApp } = Vue;

createApp({
  data() {
    return {
      records: [],
    };
  },
  mounted() {
    axios.get("albums.json").then((response) => {
      this.records = response.data;
    });
  },
}).mount("#app");
