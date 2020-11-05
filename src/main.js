import Vue from "vue";
import App from "./App.vue";
import "./quasar";
import router from "./router/index";
import store from "./store";

Vue.config.productionTip = false;

let app = new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");

window.miapp = app;
