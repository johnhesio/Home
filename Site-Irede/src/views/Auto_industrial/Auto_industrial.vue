<script>
import { defineComponent, defineAsyncComponent } from "vue";

const topbar = defineAsyncComponent(() => import("../../views/Home/topbar/topbar.vue"));

const rodape = defineAsyncComponent(() => import("../../views/Home/rodape/rodape.vue"));


export default defineComponent({ name: "auto_industrial", components: { topbar,  rodape } })
</script>

<template>
    <topbar />
    
    <rodape />
</template>

<style scoped></style>
