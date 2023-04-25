<script setup>
import TheWelcome from "../components/TheWelcome.vue";
import ButtonMySpaceComponent from "../components/buttons/ButtonMySpaceComponent.vue";
import MySpaceComponent from "../components/MySpaceComponent.vue";
import ApiRepository from "../assets/ApiRepository/ApiRepository.js";
import { onBeforeMount, ref, computed } from "vue";
import RegisterForm from "../components/RegisterForm.vue";
import FooterComponent from "../components/FooterComponent.vue";



const repository = new ApiRepository("quienesSomos");
const api = repository.chooseApi();

let membersList = ref([]);
onBeforeMount(async () => {
  membersList.value = await api.getAll();
});

const membersToShow = computed(() => {
  return membersList.value;
});





</script>

<template>
  <body>
    <div class="text1MySpace">
      <p>
        Este es un espacio especial para que coleciones momentos de gratitud.
      </p>
    </div>
    <div class="btnComp">
      <ButtonMySpaceComponent />
    </div>
    <p>¡Agrega uno nuevo!</p>
    <div class="savedAdvices">
      <MySpaceComponent
        v-for="member in membersToShow"
        :key="member.id"
        :member="member"
      />
    </div>
    <div>
      <RegisterForm />

    </div>

    <div class="textBottom">
      <p>MANTÉN LA CALMA</p>
      <p>Lo que es difícil hoy, un día será más fácil</p>
    </div>
    <TheWelcome class="gif1" />
<FooterComponent />

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
  .text1MySpace {
    color: $background-white;
    opacity: 0.8;
    font-size: small;
    text-align: center;
    margin-right: 2em;
    margin-left: 2em;
    padding-top: 2em;
  }

  p {
    color: $background-white;
    opacity: 0.8;
    padding: 1em;
    font-weight: 700;
    font-size: medium;
    text-align: center;
  }
  .textBottom {
    opacity: 0.7;
    margin: 1.5em;
    text-align: center;
    font-weight: lighter;
    font-size: smaller;
    color: $background-white;
  }
  .btnComp {
    display: flex;
    justify-content: center;
  }
  .savedAdvices {
  justify-content: space-around;
 
}
}
@media (max-width: 576px) {
  .gif1 {
    margin-top: -2em;
    margin-bottom: -3.5em;
  }
}

</style>
