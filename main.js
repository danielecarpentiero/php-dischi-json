const { createApp } = Vue;

createApp({
  data() {
    return {
      records: [],
      activeRecord: null,
      showImage: true,
    };
  },
  mounted() {
    axios.get("albums.php").then((response) => {
      this.records = response.data;
    });
  },
  methods: {
    getActiveRecord(index) {
      axios
        .get("albums.php", {
          params: index !== undefined ? { index: index } : null,
        })
        .then((response) => {
          this.activeRecord = response.data;
        });
    },
    resetActiveRecord() {
      console.log("Resetting activeRecord");
      this.activeRecord = null;
      this.showImage = true;
    },
    hideImage() {
      this.showImage = false;
    },
  },
}).mount("#app");
