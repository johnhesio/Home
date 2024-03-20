<script>
import { defineComponent, defineAsyncComponent } from "vue";
const topbar = defineAsyncComponent(() => import("./topbar/topbar.vue"));
const carrossel = defineAsyncComponent(() => import("./carrossel/carrossel.vue"));
const atuacao = defineAsyncComponent(() => import("./atuacao/atuacao.vue"));
const cati = defineAsyncComponent(() => import("./cati/cati.vue"));
const cases = defineAsyncComponent(() => import("./cases/cases.vue"));
const numeros = defineAsyncComponent(() => import("./numeros/numeros.vue"));
const compentencias = defineAsyncComponent(() => import("./competencias/competencias.vue"));
const clientes = defineAsyncComponent(() => import("./clientes/clientes.vue"));
const mapa = defineAsyncComponent(() => import("./mapa/mapa.vue"));
const rodape = defineAsyncComponent(() => import("./rodape/rodape.vue"));
export default defineComponent({ name: "home", components: { topbar, carrossel, atuacao, cati, cases, numeros, compentencias, clientes, mapa, rodape } })
</script>

<template>
  <topbar />
  <carrossel />
  <atuacao />
  <cati />
  <cases />
  <numeros />
  <compentencias />
  <clientes />
  <mapa />
  <rodape />
</template>

<style scoped></style>
