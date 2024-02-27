<script>
import { createApp } from "vue";
import { defineAsyncComponent, defineComponent } from "vue";
export default defineComponent({ name: "topbar" })
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white roboto-regular">
    <a class="navbar-brand" href="#">
      <img src="../../assets/Imagens/logo_irede.jpg" alt="" width="200">
    </a>
    <div class="topbar-menu collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="topbar-button nav-link" href="#">INICÍO</a>
        </li>
        <li class="nav-item">
          <a class="topbar-button nav-link" href="#">NÓS</a>
        </li>
        <li class="nav-item">
          <a class="topbar-button nav-link" href="#">CASES</a>
        </li>
        <li class="nav-item">
          <a class="topbar-button nav-link" href="#">ATUAÇÃO</a>
        </li>
        <li class="nav-item">
          <a class="topbar-button nav-link" href="#">CONTATO</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: absolute;
  top: 0;
  left: 0;
}

.navbar-brand {
  margin-left: 7rem;
}


.topbar-menu {
  align-items: center;
  margin-left: 20rem;
}

.topbar-menu a {
  margin: 0 1rem;
  color: #000000;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border: none;
  border-radius: 50px;
}

.topbar-menu a:hover {
  background-color: #8B47FE;
  border: none;
  border-radius: 50px;
  color: #fff;
}

.topbar-button{
  padding: 0.8rem 2rem !important;
}
</style>
