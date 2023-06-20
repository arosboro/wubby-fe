import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Studio from "../views/Studio.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: Studio,
  },
  {
    path: "/training-grounds",
    name: "training-grounds",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "training-grounds" */ "../views/TrainingGroundsView.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
