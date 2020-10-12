const routes = [
  {
    path: "/",
    components: () =>
      import(
        "C:/Users/jualvarez/Documents/PNT2/ProyectoVueQuasar/indumentariaproject/src/layouts/MainLayout.vue"
      ),
    children: [
      {
        path: "",
        components: () => import("./pages/Index.vue"),
      },
    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  { path: "*", components: () => import("./pages/Error404.vue") },
];

export default routes;
