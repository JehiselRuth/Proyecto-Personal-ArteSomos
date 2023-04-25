<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <div class="button-87">
    <router-link class="nav-link" to="/help"
      ><img  src="../../assets/images/buttons/BotonHelp.png" alt="boton consejos"
    /></router-link>
    <p>Consejos Prácticos</p>
  </div>
</template>
<style lang="scss" scoped>
.button-87 {
  width: 8em;
  height: 8em;
  display: wrap;
  // margin: 5px;
  margin: 0.9em;
  padding: 5px 4px;
  text-align: center;
  transition: 0.5s;
  background-size: 200% auto;
  color: #FDFEF7;
  line-height: 1;
  border-radius: 60px;
  display: block;
  border: 10px;
  border: solid rgba(#fafafa, .7);
  font-weight: 600;
  box-shadow: 10px 0px 14px -7px #f551d4;
  background-image: linear-gradient(45deg, #ff2fc8 0%, #F09819  51%, #2ffff8  100%);
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  p {
    font-size: 90%;
    padding: 0.2em;
    opacity: 0.8;
  }
}

.button-87:hover {
  background-position: right center;
  /* change the direction of the change here */
  color: #fff;
  text-decoration: none;
}

.button-87:active {
  transform: scale(0.95);
}
.nav-link  {
  display: flex;
  align-items: center;
  justify-content: center;
img {
  background-color: transparent;
  transition-duration: 0.4s;
  max-width: 58%;
  margin-bottom: 0.1em;
  
}
img:hover {
  cursor: pointer;
  mix-blend-mode: hard-light;
  transition-duration: 0.4s;
  // opacity: 0.5;
  // font-size: 1.5em;
  color: rgba(255, 255, 255, 1);
  border-color: aqua;
}
}
</style>
