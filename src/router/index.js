import { createRouter, createWebHistory } from "vue-router";
import * as Public from "@/views/public";

const routes = [
  {
    path: "/",
    name: "public",
    component: Public.LayoutPublic,
    children: [
      { path: "/", name: "home", component: Public.HomePage },
      {
        path: "/laboratoire/:view",
        name: "labo",
        component: Public.LaboPage,
        props: true,
      },
      {
        path: "/formations/:view",
        name: "formations",
        component: Public.FormationPage,
        props: true,
      },
      {
        path: "/about/:view",
        name: "about",
        component: Public.AboutPage,
        props: true,
      },
      { path: "/methode", name: "methode", component: Public.MethodePage },
    ],
  },
  { path: "/:patMatch(.*)*", redirect: "/" },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
