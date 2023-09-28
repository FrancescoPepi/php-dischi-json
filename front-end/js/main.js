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
        console.log(this.list);
        this.list = response.data;
      });
  },
}).mount("#app");
