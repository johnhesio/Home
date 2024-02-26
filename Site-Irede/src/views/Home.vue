<script>
    import { defineComponent, defineAsyncComponent } from "vue";
    const topbar = defineAsyncComponent(() => import("./topbar/topbar.vue"));
    const carrossel = defineAsyncComponent(() => import("./carrossel/carrossel.vue"));
    export default defineComponent({name:"home",components:{topbar,carrossel}})

</script>

<template>
  <topbar />
  <carrossel />
</template>

<style scoped>

</style>
