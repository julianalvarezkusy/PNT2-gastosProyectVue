import Vue from "vue";
import App from "./App.vue";
import "./quasar";
import routes from "./router/routes";
import router from "./router/index";
import store from "./store";

Vue.config.productionTip = false;

console.log(routes);

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
