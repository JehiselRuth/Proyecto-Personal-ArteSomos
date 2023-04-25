<script setup>
import CarouselComponent from "../components/CarouselComponent.vue";
import ButtonAdviceComponent from "../components/buttons/ButtonAdviceComponent.vue";
import ButtonActivitiesComponent from "../components/buttons/ButtonActivitiesComponent.vue";
import ButtonScannerComponent from "../components/buttons/ButtonScannerComponent.vue";
import ButtonHelpComponent from "../components/buttons/ButtonHelpComponent.vue";
import ButtonMySpaceComponent from "../components/buttons/ButtonMySpaceComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";

</script>

<template>
  <body>
    
  
  <div class="containerHome">
    <CarouselComponent class="carousel" />
    <div class="subtitle1 shadow-sm">
      <h3>¡Una herramienta para encaminarte a ser tu mejor versión!</h3>
    </div>
    <div class="text1">
      <h1>Primer Paso</h1>
      <p>Descubrir</p>
      <p>
        Escoge una de las siguientes actividades y cuando encuentres útil alguna
        de ellas, dale like para que se guarde en MI ESPACIO
      </p>
    </div>
    <div class="buttonsHome">
      <div class="btnGroup1">
        <ButtonAdviceComponent />
        <ButtonActivitiesComponent />
      </div>
      <div class="btnGroup2">
        <ButtonScannerComponent class="btn3" />
        <ButtonHelpComponent class="btn4" />
      </div>
    </div>
    <div class="text1">
      <h1>Segundo Paso</h1>
      <p>Practicar</p>
      <p>
        MI ESPACIO guardará tus preferencias y tu App ArteSomos te ayudará a
        recordar lo que has aprendido para que lo pongas en práctica
      </p>
    </div>
    <div class="btnMySpace">
      <ButtonMySpaceComponent class="btn5" />
    </div>
    <div class="text2">
      <h1>Último Paso</h1>
      <p>Insistir</p>
      <p>
        Crear una mejor versión de nosotros requiere dar ese primer paso cada
        día, poner en práctica lo que nos hace bien e insistir en ello para
        poder ver los cambios.
      </p>
      <p>
        No desesperes, Roma no se construyó en un día y tú eres tu obra más
        importante, cambiar años de habitos que nos hacían daño toma tiempo pero
        ya estás aquí, este puede ser el comienzo de algo trascendental para tí
      </p>
    </div>
    
  </div>
<FooterComponent />
</body>
</template>
<style lang="scss" scoped>
@import "../assets/sass/variables.scss";

body {

  height: 100%;
  display: wrap;
  background-size: cover;
  background: linear-gradient(
    180deg,
    rgba(255, 165, 35, 0.8) 0%,
    rgba(255, 27, 174, 0.5) 83%,
    rgba(255, 0, 205, 0.8) 100%
    );
    .subtitle1 {
      text-align: center;
      color: $text-color;
      font-size: 0.8em;
      padding: 1em;
      font-family: Arial, Helvetica, sans-serif;
      background-color: $background-white;
      border: 4px solid hsla(0, 0%, 100%, 0.8);
      box-shadow: 2px 2px 40px 3px rgb(228, 255, 255);
  
      h3 {
        margin-left: 3em;
        margin-right: 3em;
        font-size: medium;
      }
    }
    .text1 {
      font-size: small;
      color: $text-color;
      text-align: center;
      margin-top: 1.5em;
      margin-left: 3em;
      margin-right: 3em;
      margin-bottom: 2em;
      line-height: 1.3;
    }
    .text2 {
      font-size: small;
      color: $text-color;
      text-align: center;
      margin-top: 1.5em;
      margin-left: 3em;
      margin-right: 3em;
      margin-bottom: 3em;
      line-height: 1.3;
    }
    .buttonsHome {
      display: flex;
      grid-template-columns: 1fr 1fr 1fr;
      justify-content: center;
      align-items: center;
      margin: 3em;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 1em;
    }
    .btnMySpace {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

@media (max-width: 425px) {
  .subtitle1 h3 {
    font-size: 1em;
    text-align: center;
    color: $text-color;
    font-family: Arial, Helvetica, sans-serif;
  }
}
@media (min-width: 425px) {
  .subtitle1 {
    font-size: 0.5em;
    text-align: center;
    color: $text-color;
    padding: 1em;
    font-family: Arial, Helvetica, sans-serif;
  }
}
@media (max-width: 768px) {
  .subtitle1 {
    font-size: 1em;
    text-align: center;
    color: $text-color;
    padding: 3em;
    font-family: Arial, Helvetica, sans-serif;
  }
}
@media (min-width: 768px) {
  .subtitle1 {
    padding: 1em;
    font-size: 1.5em;
    text-align: center;
    color: $text-color;
    font-family: Arial, Helvetica, sans-serif;
  }
}
@media (min-width: 1024px) {
  .buttonsHome {
    display: flex;
  }
  .subtitle1 {
    font-size: 2em;
    text-align: center;
    color: $text-color;
    font-family: Arial, Helvetica, sans-serif;
  }
}
@media (min-width: 1440px) {
  .subtitle1 {
    font-size: 3em;
    text-align: center;
    color: $text-color;
    font-family: Arial, Helvetica, sans-serif;
  }
}
</style>
