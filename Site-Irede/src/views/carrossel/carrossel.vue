<script>
import image1 from "../../assets/Imagens/bg_1.png";
import image2 from "../../assets/Imagens/bg_2.png";
import image3 from "../../assets/Imagens/bg_3.png";
import image4 from "../../assets/Imagens/bg_4.png";
import Galleria from "primevue/galleria";
import { defineComponent } from "vue";
export default defineComponent({
  name: "carrossel",
  components: { Galleria },
  setup() {
    const carouselSlides = [{
      image: image1,
      title: "Construindo Parcerias, Ampliando Horizontes! ",
      imageText: "Explore as oportunidades que o Irede oferece aos nossos valiosos institutos parceiros. Nossa missão é apoiar e potencializar suas iniciativas educacionais, proporcionando um ambiente dinâmico para crescimento conjunto, inovação e impacto positivo. ",
      buttonName: "Saiba Mais!",
      buttonLink: "Hello.com",
      cssClass: "Slide_1",
      right: true,
    },
    {
      image: image2,
      title: "Impulsione a Inovação, Conquiste o Futuro! ",
      imageText: "Explore nossos recursos avançados, projetados para acelerar o ciclo de inovação em sua organização. Da pesquisa à implementação, o Irede oferece um ambiente colaborativo que amplia fronteiras e transforma ideias em realidade.",
      buttonName: "Saiba Mais!",
      buttonLink: "Hello.com",
      cssClass: "Slide_1",
      right: true,
    },
    {
      image: image3,
      title: "Descubra nossos projetos de capacitação inovadores!",
      imageText: "Projetados para impulsionar sua carreira e prepará-lo para os desafios do mundo digital. Prepare-se para explorar, aprender e crescer. Seu futuro começa aqui, no iRede.",
      buttonName: "Saiba Mais!",
      buttonLink: "Hello.com",
      cssClass: "Slide_1",
      right: false,
    },
    {
      image: image4,
      title: "Você sabe onde está a base para construir inovação?",
      imageText: "Está na Criatividade, na educação, na pesquisa e no desenvolvimento. É ai que o Irede entra em ação! Buscamos promover a inovação e transformar vidas por meio de capacitações, preparando as pessoas para o futuro.",
      buttonName: "Saiba Mais!",
      buttonLink: "Hello.com",
      cssClass: "Slide_1",
      right: true,
    },
    ];
    return { carouselSlides };
  },
});
</script>
 
<template>
  <Galleria :value="carouselSlides" :responsiveOptions="responsiveOptions" :numVisible="5" :circular="true"
    :showItemNavigators="true" :showThumbnails="false">

    <template #item="slotProps">

      <div class="w-full h-screen" v-if="slotProps.item.right">
        <img :src="slotProps.item.image" :alt="slotProps.item.image" style="width: 100%; display: block" />
        <div>
          <h1>{{ slotProps.item.title }}</h1>
          <p>{{ slotProps.item.imageText }}</p>
          <button :class="slotProps.item.cssClass">{{ slotProps.item.buttonName }}</button>
        </div>
      </div>

      <div class="w-full h-screen" v-else="">
        <img :src="slotProps.item.image" :alt="slotProps.item.image" style="width: 100%; display: block" />
        <div>
          <h1>{{ slotProps.item.title }}</h1>
          <p>{{ slotProps.item.imageText }}</p>
          <button :class="slotProps.item.cssClass">{{ slotProps.item.buttonName }}</button>
        </div>
      </div>
    </template>

  </Galleria>
</template>
 
<style scoped></style>