import Home from "../views/Home/Home.vue"
import Pdi from "../views/Pdi/Pdi.vue"
import Capacitacao from "../views/Capacitacao/Capacitacao.vue"
import Empreendedorismo from "../views/Empreendedorismo/Empreendedorismo.vue"
import Consultoria from "../views/Consultoria/Consultoria.vue"
import Cases from "../views/Cases/Cases.vue"
import Sobre_Nós from "../views/Sobre_nos/Sobre_nos.vue"
import { createRouter, createWebHashHistory } from "vue-router";
 
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/home",
      name: "home",
      component: Home,
    },
    {
      path: "/sobre",
      name: "Sobre Nós",
      component: Sobre_Nós,
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
    {
      path: "/cases",
      name: "Cases",
      component: Cases,
    },
  ],
});
 
export default router;