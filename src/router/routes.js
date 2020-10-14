// import main from "../layouts/MainLayout";

const routes = [
  {
    path: "/",
    components: () => import("../layouts/MainLayout.vue"),
    // components: () => import("../layouts/LayoutTest.vue"),
    children: [
      {
        path: "Home",
        components: () => import("../pages/Index.vue"),
      },
      {
        path: "Test",
        components: () => import("../pages/Test.vue"),
      },
    ],
  },

  { path: "*", components: () => import("../pages/Error404.vue") },
];

export default routes;
