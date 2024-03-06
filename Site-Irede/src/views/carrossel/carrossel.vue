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
      imageText: "Explore as oportunidades que o Irede oferece aos nossos valiosos institutos parceiros.  Nossa missão é apoiar e potencializar suas iniciativas educacionais, proporcionando um ambiente dinâmico para crescimento conjunto, inovação e impacto positivo. ",
      isPurple: false,
      cssClass: "Slide_1",
      left: true,
      isWhite: true,
      buttonLink: "teste.com",
      buttonText: "Saiba Mais!",
    },
    {
      image: image2,
      title: "Impulsione a Inovação, Conquiste o Futuro! ",
      imageText: "Explore nossos recursos avançados, projetados para acelerar o ciclo de inovação em sua organização. Da pesquisa à implementação, o Irede oferece um ambiente colaborativo que amplia fronteiras e transforma ideias em realidade.",
      isPurple: true,
      cssClass: "Slide_2",
      left: true,
      isWhite: false,
      buttonLink: "teste.com",
      buttonText: "Saiba Mais!",
    },
    {
      image: image3,
      title: "Descubra nossos projetos de capacitação inovadores!",
      imageText: "Projetados para impulsionar sua carreira e prepará-lo para os desafios do mundo digital. Prepare-se para explorar, aprender e crescer. Seu futuro começa aqui, no iRede.",
      cssClass: "Slide_3",
      left: false,
      isWhite: false,
      buttonLink: "teste.com",
      buttonText: "Saiba Mais!",
    },
    {
      image: image4,
      title: "Você sabe onde está a base para construir inovação?",
      imageText: "Está na Criatividade, na educação, na pesquisa e no desenvolvimento. É ai que o Irede entra em ação! Buscamos promover a inovação e transformar vidas por meio de capacitações, preparando as pessoas para o futuro.",
      isPurple: true,
      cssClass: "Slide_4",
      left: true,
      isWhite: false,
      buttonLink: "teste.com",
      buttonText: "Saiba Mais!",
    },
    ];
    return { carouselSlides };
  },
});
</script>

<template>
  <Galleria :value="carouselSlides" :responsiveOptions="responsiveOptions" :numVisible="4" :circular="true"
    :showItemNavigators="true" :showThumbnails="false" >

    <template #item="slotProps">

      <div class="w-full relative" v-if="slotProps.item.left">
        <img :src="slotProps.item.image" :alt="slotProps.item.image" style="width: 100%; display: block" />
        <div class="absolute top-0 left-0 h-screen md:px-20 px-10 py-10">
          <div class="md:w-[60%] md-screen md:flex md:flex-col md:justify-center w-[50%]">
            <h1 v-if="slotProps.item.isPurple"
              class=" text-white md:text-6xl md:font-bold md:italic md:pt-20 text-[16px] font-bold italic">{{
    slotProps.item.title }}</h1>
            <h1 v-else class="text-[#8b47fe] md:text-6xl md:font-bold md:italic md:pt-20 text-[16px] font-bold italic">
              {{
    slotProps.item.title }}</h1>
            <p v-if="slotProps.item.isWhite" class="md:w-[50%] md:py-5 md:text-xl w-[50%] text-[12px] hidden md:block">
              {{ slotProps.item.imageText }}</p>
            <p v-else class="md:text-[#fff] md:w-[50%] md:py-5 md:text-xl hidden md:block">{{ slotProps.item.imageText
              }}</p>
            <a :href="slotProps.item.buttonLink" class="md:bg-black md:text-white md:text-2xl rounded-full md:w-[30%] text-center md:py-2 hover:bg-purple-700 bg-black text-white text-[10px]
               px-2 py-1 mt-6">
              {{ slotProps.item.buttonText }} </a>
          </div>
        </div>
      </div>

      <div class="md:w-full md:h-screen" v-else>
        <img :src="slotProps.item.image" :alt="slotProps.item.image" style="width: 100%; display: block" />
        <div class="absolute flex flex-row justify-end top-0 left-0 h-screen px-20">
          <div class="w-[45%] h-screen mflex flex-col justify-center">
            <h1 v-if="slotProps.item.isPurple"
              class="md:text-white md:text-6xl md:font-bold md:italic md:pt-20 text-sm font-bold italic">{{
    slotProps.item.title }}</h1>
            <h1 v-else
              class="text-[#8b47fe] md:text-5xl md:font-bold md:italic md:pt-20 md:leading-tight text-sm font-bold italic mt-7 pl-2">
              {{
    slotProps.item.title }}
            </h1>
            <p class="md:py-5 md:text-xl hidden md:block">{{ slotProps.item.imageText }}</p>
            <a :href="slotProps.item.buttonLink" class="md:bg-black md:text-white rounded-full md:text-2xl md:w-[30%]
              text-center md:py-2 md:px-12 hover:bg-purple-700 bg-black text-white text-[10px] px-2 py-1 mt-20 ml-2">
              {{slotProps.item.buttonText}} </a>
          </div>
        </div>
      </div>
    </template>
  </Galleria>
</template>

<style scoped></style>