<script>
import { createApp } from "vue";
import { defineAsyncComponent, defineComponent } from "vue";
const home = defineAsyncComponent(() => import("./views/Home.vue"));
export default defineComponent({name:"App",components:{home}})
</script>

<template>
  <home />
</template>

<style scoped>

</style>
