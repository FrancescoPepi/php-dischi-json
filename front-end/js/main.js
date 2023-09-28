const { createApp } = Vue;
createApp({
  data() {
    return {
      axios,
      message: "Hello Vue!",
      list: [],
    };
  },

  method: {},

  mounted() {
    axios
      .get("http://localhost/php-dischi-json/back-end/api/get-list.php")
      .then((response) => {
        this.list = response.data;
        console.log(this.list);
      });
  },
}).mount("#app");
