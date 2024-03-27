import Home from "../views/Home/Home.vue"
import Pdi from "../views/Pdi/Pdi.vue"
import Capacitacao from "../views/Capacitacao/Capacitacao.vue"
import Empreendedorismo from "../views/Empreendedorismo/Empreendedorismo.vue"
import Consultoria from "../views/Consultoria/Consultoria.vue"
import Cases from "../views/Cases/Cases.vue"
import Sobre_Nós from "../views/Sobre_nos/Sobre_nos.vue"
import Energia from "../views/Energia/Energia.vue"
import Saude from "../views/Saude/Saude.vue"
import Industria from "../views/Industria/Industria.vue"
import Sustentabilidade from "../views/Sustentabilidade/Sustentabilidade.vue"
import Educacao from "../views/Educacao/Educacao.vue"
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
    {
      path: "/educacao",
      name: "Educação",
      component: Educacao,
    },
    {
      path: "/energia",
      name: "Energia",
      component: Energia,
    },
    {
      path: "/industria",
      name: "Industria",
      component: Industria,
    },
    {
      path: "/saude",
      name: "Saude",
      component: Saude,
    },
    {
      path: "/sustentabilidade",
      name: "Sustentabilidade",
      component: Sustentabilidade,
    },
    
  ],
});
 
export default router;