import { createWebHistory, createRouter } from "vue-router";
import About from "../pages/About.vue";
import Home from "../pages/Home.vue";
import Contact from "../pages/Contact.vue";
import Portfolio from "../pages/Portfolio.vue";
import Technologies from "../pages/Technologies.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/contact", component: Contact },
  { path: "/portfolio", component: Portfolio },
  { path: "/technologies", component: Technologies },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
export default router;
