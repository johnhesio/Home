import Home from "../views/Home/Home.vue"
import Pdi from "../views/Pdi/Pdi.vue"
import Capacitacao from "../views/Capacitacao/Capacitacao.vue"
import Empreendedorismo from "../views/Empreendedorismo/Empreendedorismo.vue"
import Consultoria from "../views/Consultoria/Consultoria.vue"
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
    {
      path: "/capacitacao",
      name: "Capacitação",
      component: Capacitacao,
    },
    {
      path: "/empreendedorismo",
      name: "Empreendedorismo",
      component: Empreendedorismo,
    },
    {
      path: "/consultoria",
      name: "Consultoria",
      component: Consultoria,
    },
  ],
});
 
export default router;