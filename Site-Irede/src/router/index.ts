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
import residencia from "../views/Residencia/Residencia.vue"
import ead from "../views/EAD/Ead.vue"
import ia_saude from "../views/IA_saude/IA_saude.vue"
import ia_segurança from "../views/IA_segurança/IA_segurança.vue"
import devops from "../views/Devops/Devops.vue"
import dev_ios from "../views/Dev_ios/Dev_ios.vue"
import visao from "../views/Visao/Visao.vue"
import banco_dados from "../views/Banco_dados/Banco_dados.vue"
import firmware from "../views/Firmware/Firmware.vue"
import software from "../views/Software/Software.vue"
import auto_comercial from "../views/Auto_comercial/Auto_comercial.vue"
import auto_industrial from "../views/Auto_industrial/Auto_industrial.vue"
import dev_software from "../views/Dev_software/Dev_software.vue"
import protocolos from "../views/Protocolos/Protocolos.vue"
import edu_imersiva from "../views/Edu_imersiva/Edu_imersiva.vue"
import contato from "../views/Contato/Contato.vue"

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
      path: "/contato",
      name: "Contato",
      component: contato,
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
      path: "/Sustentabilidade",
      name: "Sustentabilidade",
      component: Sustentabilidade,
    },
    {
      path: "/residencia",
      name: "residencia",
      component: residencia,
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
      path: "/firmware",
      name: "firmware",
      component: firmware,
    },
    {
      path: "/software",
      name: "software",
      component: software,
    },
    {
      path: "/plataformaead",
      name: "Ead",
      component: ead,
    },
    {
      path: "/ia_saude",
      name: "ia_saude",
      component: ia_saude,
    },
    {
      path: "/ia_seguranca",
      name: "ia_segurança",
      component: ia_segurança,
    },
    {
      path: "/devops",
      name: "devops",
      component: devops,
    },
    {
      path: "/dev_ios",
      name: "dev_ios",
      component: dev_ios,
    },
    {
      path: "/visao",
      name: "visao",
      component: visao,
    },
    {
      path: "/banco_dados",
      name: "banco_dados",
      component: banco_dados,
    },
    {
      path: "/auto_comercial",
      name: "auto_comercial",
      component: auto_comercial,
    },
    {
      path: "/auto_industrial",
      name: "auto_industrial",
      component: auto_industrial,
    },
    {
      path: "/dev_software",
      name: "dev_software",
      component: dev_software,
    },
    {
      path: "/protocolos",
      name: "protocolos",
      component: protocolos,
    },
    {
      path: "/edu_imersiva",
      name: "edu_imersiva",
      component: edu_imersiva,
    },
        
  ],
});
 
export default router;