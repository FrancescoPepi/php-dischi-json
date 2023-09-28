const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "Hello Vue!",
    };
  },

  method: {},

  mounted() {
    axios
      .get("http://localhost/php-dischi-json/back-end/main.php")
      .then((response) => {
        console.log(response.data);
      });
  },
}).mount("#app");
