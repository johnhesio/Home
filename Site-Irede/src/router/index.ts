import Home from "../views/Home/Home.vue"
import Pdi from "../views/Pdi/Pdi.vue"
import { createRouter, createWebHashHistory } from "vue-router";
 
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      alias: "/home",
      name: "home",
      component: Home,
    },
    {
      path: "/pdi",
      name: "PDI",
      component: Pdi,
    },
  ],
});
 
export default router;