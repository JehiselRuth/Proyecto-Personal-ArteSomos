<script setup>
import router from "../../router";
import { theAdvices } from "../../stores/theAdvices";

const advicesItem = theAdvices();

function oneAdvice(id, theAdvices) {
  advicesItem.adviceObject = theAdvices;
  router.push("/advicedetail" + "/" + id);
}

const props = defineProps({
  advice: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div :id="`${advice.id}`" class="options">
    <ul class="list-group">
      <li @click="oneAdvice(advice.id, advice)" class="list-group-item">{{ advice.title }}</li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
@import "../src/assets/sass/variables.scss";

.options {
    margin-left: 3em;
    margin-right: 3em;
    margin-bottom: 0.3em ;

.list-group-item  {
  background-color: transparent;
  border: solid 1px;
  border-color: aliceblue;
  font-size: small;
  color: $background-white;

}
.list-group:hover {
  cursor: pointer;
  background-color: #8fc1e3;
}
}
</style>
