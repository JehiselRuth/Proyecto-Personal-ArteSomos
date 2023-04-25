<script setup>
import TheWelcome from "../components/TheWelcome.vue";
import ButtonAdviceComponent from "../components/buttons/ButtonAdviceComponent.vue";
import AdviceComponent from "../components/advices/AdviceComponent.vue";
import ApiRepository from "../assets/ApiRepository/ApiRepository.js";
import { onBeforeMount, ref, computed } from "vue";
import FooterComponent from "../components/FooterComponent.vue";

const repository = new ApiRepository("advices");
const api = repository.chooseApi();

let advicesList = ref([]);
onBeforeMount(async () => {
  advicesList.value = await api.getAll();
});

const advicesToShow = computed(() => {
  return advicesList.value;
});
</script>

<template>
  <body>
    <h1>No te pasa sólo a tí, sólo estás en medio de algo que no entiendes.</h1>
    <div class="btnComp">
      <ButtonAdviceComponent />
    </div>
    <AdviceComponent
      v-for="advice in advicesToShow"
      :key="advice.id"
      :advice="advice"
    />
    <div class="textBottom">
      <p>MANTÉN LA CALMA</p>
      <p>Lo que es difícil hoy, un día será más fácil</p>
    </div>
    <TheWelcome class="gif1" />
    <FooterComponent/>
  </body>
</template>
<style lang="scss" scoped>
@import "../../src/assets/sass/variables.scss";

body {
  height: 100%;
  font-family: Arial, Helvetica, sans-serif;
  font-size: small;
  display: wrap;
  align-items: center;
  justify-content: center;
  align-content: center;
  background-size: cover;
  background: linear-gradient(
    180deg,
    rgba(175, 18, 209, 1) 0%,
    rgba(250, 232, 64, 1) 100%
  );
  h1 {
    color: $background-white;
    opacity: 0.8;
    font-size: small;
    text-align: center;
    margin-right: 2em;
    margin-left: 2em;
    padding-top: 2em;
  }
  .textBottom {
    line-height: 0.3;
    opacity: 0.7;
    margin-top: 2em;
    text-align: center;
    font-weight: lighter;
    font-size: smaller;
    color: $background-white;
  }
  .btnComp {
    display: flex;
    justify-content: center;
  }
}
@media (max-width: 576px) {
  .gif1 {
    margin-top: -2em;
    margin-bottom: -3.5em;
  }
}
</style>
