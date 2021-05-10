import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import swal from 'vue-sweetalert2';


Vue.use(swal);

import "bootstrap/dist/css/bootstrap.css";

// const base = axios.create({
//   baseURL: "http://localhost:4000"
// });

const base = axios.create({
  baseURL: process.env.BASE_URL
});

Vue.prototype.$http = base;
Vue.config.productionTip = false;
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");