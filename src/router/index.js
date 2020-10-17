import Vue from "vue";
import VueRouter from "vue-router";
// import Routes from "./routes.js";
import PageIndex from "../pages/Index";
// import ListadoGastos from "../components/ListadoGastos";
// import MainLayout from "../layouts/MainLayout";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/",
      name: "MainLayout",
      // component: MainLayout,
      component: () => import("../layouts/MainLayout"),
      children: [
        {
          path: "",
          name: "PageIndex",
          component: PageIndex,
        },
      ],
    },
  ],
});

// console.log(routes);

export default router;
