// import main from "../layouts/MainLayout";

const MainLayout = () => import("../layouts/MainLayout.vue");


const routes = [
  {
    path: "/Home",
    components: MainLayout,
  

    // components: () => import("../layouts/LayoutTest.vue"),
    // children: [
    //   {
    //     path: "Home",
    //     components: () => import("../pages/Index.vue"),
    //   },
    //   {
    //     path: "Test",
    //     components: () => import("../pages/Test.vue"),
    //   },
    // ],
  },

  { path: "*", components: () => import("../pages/Error404.vue") },
  
];

export default routes;
