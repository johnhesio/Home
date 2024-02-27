<script>
    import { defineComponent, defineAsyncComponent } from "vue";
    const topbar = defineAsyncComponent(() => import("./topbar/topbar.vue"));
    const carrossel = defineAsyncComponent(() => import("./carrossel/carrossel.vue"));
    const atuacao = defineAsyncComponent(() => import("./atuacao/atuacao.vue"));
    const cati = defineAsyncComponent(() => import("./cati/cati.vue"));
    const cases = defineAsyncComponent(() => import("./cases/cases.vue"));
    export default defineComponent({name:"home",components:{topbar,carrossel,atuacao,cati}})

</script>

<template>
  <topbar />
  <carrossel />
  <atuacao />
  <cati />
  <cases />
</template>

<style scoped>

</style>
