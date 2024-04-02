<script>
import { defineComponent, defineAsyncComponent } from "vue";

const topbar = defineAsyncComponent(() => import("../../views/Home/topbar/topbar.vue"));
const hp_it = defineAsyncComponent(() => import("../../views/Devops/hp_it/hp_it.vue"));
const inovacao = defineAsyncComponent(() => import("../../views/Devops/inovacao/inovacao.vue"));
const duracao = defineAsyncComponent(() => import("../../views/Devops/duracao/duracao.vue"));
const impacto = defineAsyncComponent(() => import("../../views/Devops/impacto/impacto.vue"));
const rodape = defineAsyncComponent(() => import("../../views/Home/rodape/rodape.vue"));

export default defineComponent({ name: "dev_ops", components: { topbar, hp_it, inovacao, duracao, impacto, rodape } })
</script>

<template>
    <topbar />
    <hp_it />
    <inovacao />
    <duracao />
    <impacto />
    <rodape />
</template>

<style scoped></style>
