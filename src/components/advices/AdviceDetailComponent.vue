<script setup>
import ApiRepository from "../././../assets/ApiRepository/ApiRepository";
import { onBeforeMount, ref, computed } from "vue";

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  detail: {
    type: String,
  },
});

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
  
    <div class="advicesImg">
      <img
        class="imgCard"
        :src="`http://localhost:8080/images/motivation-photos/${detail}`"
        alt="Imagen"
        id="imgCards"
      />
    </div>
 
</template>
<style lang="scss" scoped>
@import "../src/assets/sass/variables.scss";

.cardDet  {
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(50, 22, 22);
  font-size: smaller;

  .iconHeart {
    margin: 0.4em;
  cursor: pointer;
}
  .iconHeart:hover {
    transform: scale(0.95);
    mix-blend-mode: hard-light;
  transition-duration: 0.4s;
width: 3em;
  color: rgba(255, 255, 255, 1);
  border-color: aqua;
  }

}
.advicesImg {
  display: flex;
  justify-content: center;
  align-items: center;
  .imgCard {
    width: 90%;
    margin: 1em;
    object-fit: cover;
    border-radius: 40px;
    border: 10px;
    border: solid rgba(#fafafa, 0.7);
    mix-blend-mode: color-burn;
  }
}

</style>
