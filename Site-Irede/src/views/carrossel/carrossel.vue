<script>
import { createApp } from "vue";
import { defineAsyncComponent, defineComponent } from "vue";
export default defineComponent({ name: "carrossel" })
</script>

<template>
  <div id="carouselExampleIndicators" class="carrossel-slide carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
        aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
        aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
        aria-label="Slide 3"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"
        aria-label="Slide 4"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="../../assets/Imagens/bg_1.png" class="d-block w-100" alt="...">
        <div class="carousel-caption">
          <a class="button-slide-1 roboto-regular" href="#">Saiba Mais</a>
        </div>
      </div>

      <div class="carousel-item ">
        <img src="../../assets/Imagens/bg_2.png" class="d-block w-100" alt="...">
        <div class="carousel-caption">
          <a class="button-slide-2 roboto-regular" href="#">Saiba Mais</a>
        </div>
      </div>

      <div class="carousel-item ">
        <img src="../../assets/Imagens/bg_3.png" class="d-block w-100" alt="...">
        <div class="carousel-caption">
          <a class="button-slide-3 roboto-regular" href="#">Saiba Mais</a>
        </div>
      </div>
      <div class="carousel-item ">
        <img src="../../assets/Imagens/bg_4.png" class="d-block w-100" alt="...">
        <div class="carousel-caption">
          <a class="button-slide-4 roboto-regular" href="#">Saiba Mais</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.carrossel-slide {
  margin-top: 6rem;
}

.button-slide-1 {
  text-decoration: none;
  margin: 2rem 2rem 2rem 0;
  float: left;
  padding: 0.8rem 4rem;
  color: #fff;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border: none;
  border-radius: 50px;
  background-color: #000000;
}

.button-slide-1:hover {
  background-color: #8B47FE;
  border: none;
  border-radius: 50px;
  color: #fff;
}

.button-slide-2 {
  text-decoration: none;
  margin: 1rem 1rem 3rem 0;
  float: left;
  padding: 0.8rem 4rem;
  color: #000;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border: none;
  border-radius: 50px;
  background-color: #fff;
}

.button-slide-2:hover {
  background-color: #479FA8;
  border: none;
  border-radius: 50px;
  color: #fff;
}

.button-slide-3 {
  text-decoration: none;
  margin: 2rem 15rem 4rem 0;
  float: right;
  padding: 0.8rem 4rem;
  color: #fff;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border: none;
  border-radius: 50px;
  background-color: #000000;
}

.button-slide-3:hover {
  background-color: #8B47FE;
  border: none;
  border-radius: 50px;
  color: #fff;
}

.button-slide-4 {
  text-decoration: none;
  margin: 2rem 2rem 4rem 0;
  float: left;
  padding: 0.8rem 4rem;
  color: #000;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border: none;
  border-radius: 50px;
  background-color: #fff;
}

.button-slide-4:hover {
  background-color: #479FA8;
  border: none;
  border-radius: 50px;
  color: #fff;
}
</style>
