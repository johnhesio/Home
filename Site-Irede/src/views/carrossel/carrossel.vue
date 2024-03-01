<script>
import { createApp } from "vue";
import Galleria from 'primevue/galleria';
import { defineAsyncComponent, defineComponent } from "vue";
export default defineComponent({ name: "carrossel",
setup() {
    images = [
  {
    name: "../../assets/Imagens/Slides_bg_1.png",
    alt: "Slide_1"
  },
  {
    name: "../../assets/Imagens/Slides_bg_1.png",
    alt: "Slide_1"
  },
  {
    name: "../../assets/Imagens/Slides_bg_1.png",
    alt: "Slide_1"
  },
  {
    name: "../../assets/Imagens/Slides_bg_1.png",
    alt: "Slide_1"
  },
  
]
  }
})
</script>

<template>
    <Galleria :value="images" :numVisible="1" containerStyle="max-w-fit" :showThumbnails="false"
        :showIndicators="true">
        <template #item="slotProps" v-for="images in setup">
            <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;"/>
        </template>
    </Galleria>
</template>

<style scoped></style>

