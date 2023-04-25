<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container p-3 shadow sm bg-body rounded">
      <a href="/" class="navbar-brand">
        <h1>ArteSomos</h1>
        <p>Nuestra obra mas importante</p>
        <p>somos nosotros mismos</p>
      </a>
      <i class="bi bi-wechat"></i>
      <button
        class="navbar-toggler shadow-sm p-1 mb-2 bg-body rounded"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
        <h6 class="menu">MENÚ</h6>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink class="nav-link shadow-sm p-1" to="/"
              >Inicio</RouterLink
            >
          </li>

          <li class="nav-item">
            <RouterLink class="nav-link shadow-sm p-1" to="/login"
              >Login</RouterLink
            >
          </li>

          <li class="nav-item">
            <RouterLink to="/register" class="nav-link shadow-sm p-1"
              >Registrarme</RouterLink
            >
          </li>

          <li class="nav-item">
            <RouterLink class="nav-link shadow-sm p-1" to="/advices"
              >Consejos Prácticos</RouterLink
            >
          </li>

          <li class="nav-item">
            <RouterLink class="nav-link shadow-sm p-1" to="/activities"
              >Actividades</RouterLink
            >
          </li>

          <li class="nav-item">
            <RouterLink class="nav-link shadow-sm p-1" to="/scanner"
              >Detector de osbtáculos</RouterLink
            >
          </li>

          <li class="nav-item">
            <RouterLink class="nav-link shadow-sm p-1" to="/help"
              >AYUDA</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link shadow-sm p-1" to="/myspace"
              >My Space</RouterLink
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <RouterView />
</template>

<style lang="scss" scoped>
@import "../assets/sass/variables";

.navbar {
  background-color: $background-white;

  a {
    color: $text-color;
    transition: all 0.4s;

    p {
      font-size: small;
      line-height: 0%;
    }

    .navbar-toggler {
      color: $text-color;
    }
    button {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  }
  a.router-link-exact-active,
  a:hover {
    color: $background-mustard;
    letter-spacing: 1px;
  }
}

@media (min-width: 1440px) {
  .navbar {
    font-size: 1.3em;
  }
}
</style>
