<script>
import { defineComponent, defineAsyncComponent } from "vue";
import Projeto_energia from "../../views/Pdi/projeto_energia/projeto_energia.vue";
const topbar = defineAsyncComponent(() => import("../../views/Home/topbar/topbar.vue"));
const firstcontent = defineAsyncComponent(() => import("../../views/Capacitacao/firstcontent/firstcontent.vue"));
const conhecimento = defineAsyncComponent(() => import("../../views/Capacitacao/conhecimento/conhecimento.vue"));
const metodologia = defineAsyncComponent(() => import("../../views/Capacitacao/metodologia/metodologia.vue"));
const capacitacoes = defineAsyncComponent(() => import("../../views/Capacitacao/capacitacoes/capacitacoes.vue"));
const restic_12 = defineAsyncComponent(() => import("../../views/Capacitacao/restic_12/restic_12.vue"));
const hp = defineAsyncComponent(() => import("../../views/Capacitacao/hp/hp.vue"));
const restic_10 = defineAsyncComponent(() => import("../../views/Capacitacao/restic_10/restic_10.vue"));
const academy = defineAsyncComponent(() => import("../../views/Capacitacao/academy/academy.vue"));
const iosi = defineAsyncComponent(() => import("../../views/Capacitacao/iosi/iosi.vue"));
const negocio = defineAsyncComponent(() => import("../../views/Capacitacao/negocio/negocio.vue"));


export default defineComponent({ name: "Capacitacao", components: { topbar, firstcontent, conhecimento, metodologia, capacitacoes, restic_12, hp, restic_10, academy, iosi, negocio,} })
</script>

<template>
  <topbar />
  <firstcontent />
  <conhecimento />
  <metodologia />
  <capacitacoes />
  <restic_12 />
  <hp />
  <restic_10 />
  <academy />
  <iosi />
  <negocio />
</template>

<style scoped></style>
