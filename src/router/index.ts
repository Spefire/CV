import Home from "@/views/Home.vue";
import Legacy from "@/views/Legacy.vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/mentions-legales",
    name: "Legacy",
    component: Legacy,
  },
  { path: "/*", redirect: "/" },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  scrollBehavior(_to, _from, savedPosition): any {
    if (savedPosition) {
      return savedPosition;
    }
    if (_to.hash) {
      return { el: _to.hash, behavior: "smooth" };
    } else if (_to.path !== _from.path) {
      window.scrollTo(0, 0);
    }
  },
  routes
});

export default router;
