import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/digital-divide",
    name: "digital-divide",
    component: () =>
      import(
        /* webpackChunkName: "digital-divide" */ "../views/DigitalDivideView.vue"
      ),
  },
  {
    path: "/Get-Involved",
    name: "get-involved",

    component: () =>
      import(
        /* webpackChunkName: "get-involved" */ "../views/GetInvolvedView.vue"
      ),
  },
  {
    path: "/our-network",
    name: "our-network",

    component: () =>
      import(
        /* webpackChunkName: "our-network" */ "../views/OurNetworkView.vue"
      ),
  },
  {
    path: "/insights",
    name: "insights",

    component: () =>
      import(/* webpackChunkName: "insights" */ "../views/InsightsView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
