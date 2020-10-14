import Vue from "vue";
import VueRouter from "vue-router";
//import routes from "./routes";
import PageIndex from "../pages/Index";
import ListadoGastos from "../components/ListadoGastos";

Vue.use(VueRouter);

//console.log(ListadoGastos);

const router = new VueRouter({
  routes: [
    {
      path: "/",
      name: "PageIndex",
      component: PageIndex,
      children: [
        {
          path: "ListadoGastos",
          name: "ListadoGastos",
          component: ListadoGastos,
        },
      ],
    },
  ],
});

console.log(router);

export default router;
