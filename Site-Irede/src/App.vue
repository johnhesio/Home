<script>
import { createApp } from "vue";
import { defineAsyncComponent, defineComponent } from "vue";
const home = defineAsyncComponent(() => import("./views/Home/Home.vue"));
const pdi = defineAsyncComponent(() => import("./views/Pdi/Pdi.vue"));
const empreendedorismo = defineAsyncComponent(() => import("./views/Empreendedorismo/Empreendedorismo.vue"));
const consultoria = defineAsyncComponent(() => import("./views/Consultoria/Consultoria.vue"));
const contato = defineAsyncComponent(() => import("./views/Contato/Contato.vue"));
const cases = defineAsyncComponent(() => import("./views/Cases/Cases.vue"));
const sobre_nos = defineAsyncComponent(() => import("./views/Sobre_nos/Sobre_nos.vue"));
const energia = defineAsyncComponent(() => import("./views/Energia/Energia.vue"));
const saude = defineAsyncComponent(() => import("./views/Saude/Saude.vue"));
const industria = defineAsyncComponent(() => import("./views/Industria/Industria.vue"));
const sustentabilidade = defineAsyncComponent(() => import("./views/Sustentabilidade/Sustentabilidade.vue"));
const educacao = defineAsyncComponent(() => import("./views/Educacao/Educacao.vue"));
const residencia = defineAsyncComponent(() => import("./views/Residencia/Residencia.vue"));
const ead = defineAsyncComponent (() => import("./views/EAD/Ead.vue"));
const ia_saude = defineAsyncComponent (() => import("./views/IA_saude/IA_saude.vue"));
const ia_segurança = defineAsyncComponent (() => import("./views/IA_segurança/IA_segurança.vue"));
const devops = defineAsyncComponent (() => import("./views/Devops/Devops.vue"));
const dev_ios = defineAsyncComponent (() => import("./views/Dev_ios/Dev_ios.vue"));
const visao = defineAsyncComponent (() => import("./views/Visao/Visao.vue"));
const banco_dados = defineAsyncComponent (() => import("./views/Banco_dados/Banco_dados.vue"));
const firmware = defineAsyncComponent (() => import("./views/Firmware/Firmware.vue"));
const software = defineAsyncComponent (() => import("./views/Software/Software.vue"));
const auto_comercial = defineAsyncComponent (() => import("./views/Auto_comercial/Auto_comercial.vue"));
const auto_industrial = defineAsyncComponent (() => import("./views/Auto_industrial/Auto_industrial.vue"));
const dev_software = defineAsyncComponent (() => import("./views/Dev_software/Dev_software.vue"));
const protocolos = defineAsyncComponent (() => import("./views/Protocolos/Protocolos.vue"));
const Edu_imersiva = defineAsyncComponent (() => import("./views/Edu_imersiva/Edu_imersiva.vue"));

export default defineComponent({ name: "App", components: { home } })
</script>

<template>
  <main>
    <router-view v-slot="{ Component }">
      <transition name="scale" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
</template>

<style scoped></style>
