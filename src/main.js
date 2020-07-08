import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import ElementUI from "element-ui";
import "./element-variables.scss";


Vue.use(ElementUI);

const setBaseUrl = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return axios.create({
      baseURL: process.env.VUE_APP_HTTP,
      headers: { Authorization: `Bearer ${token}` }
    });
  } else {
    return axios.create({
      baseURL: process.env.VUE_APP_HTTP
    });
  }
};

Vue.config.productionTip = false;
Vue.prototype.$http = setBaseUrl();

new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app");
