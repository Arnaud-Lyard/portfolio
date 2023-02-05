import { createWebHistory, createRouter } from "vue-router";
import About from "../pages/About.vue";
import Home from "../pages/Home.vue";
import Contact from "../pages/Contact.vue";
import Portfolio from "../pages/Portfolio.vue";
import Technologies from "../pages/Technologies.vue";
import Login from "../pages/Login.vue";
import { useUserStore } from "../store";
import Dashboard from "../pages/Dashboard.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/contact", component: Contact },
  { path: "/portfolio", component: Portfolio },
  { path: "/technologies", component: Technologies },
  { path: "/login", name: "login", component: Login },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const userStore = useUserStore();
  const authUser = userStore.email;
  if (to.name === "dashboard" && !authUser) next({ name: "login" });
  else next();
});
export default router;
