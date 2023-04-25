<script setup>
const props = defineProps({
  member: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <div :id="`${member.id}`" class="card-container">
    <div class="card">
      <img
        class="imgCard"
        :src="`http://localhost:8080/images/user-photos/${member.imageUser.image}`"
        alt="Imagen"
        v-if="member.imageUser"
      />

      <div class="card-body pt-1" id="hg-size">
        <p class="card-text">
          <small class="text-muted"> {{ member.dateadmission }}</small>
        <h4 class="card-title">{{ member.name }}</h4>
        </p>
        <h6>{{ member.lastname }}</h6>
       </div>
    </div>

    <div
      class="modal fade"
      :id="`exampleModal${member.id}`"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" :id="`modalDialog${member.id}`">
        <div class="modal-content bg-transparent" :id="`boxImg${member.id}`">
         
           
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "../assets/sass/variables";

.card-container {
  color: $text-color;
display: wrap;
.text-muted  {
  opacity: .7;
}
    margin-bottom: 0.5em;
    font-weight: 700;
   h5  {
    color: $background-white;
    text-align: center;
   }
   .card-title  {
    line-height:1;
    font-family:Arial, Helvetica, sans-serif; 
   }
  // .card {
 
    // .imgCard {
    //   aspect-ratio: 16/9;
    //   width: 100%;
    //   padding: 1em;
    //   object-fit: cover;
    // }
    // #containerBtnMemebrs {
    //   display: flex;
    //   justify-content: center;
    //   color: $text-color;
      
    // }
//   }
//   .modal {
//     width: 100vw;
//     .modal-dialog {
//       max-width: none;
//       padding: 15px;
//       border-radius: 10px;
//       .modal-content {
//         justify-content: center;
//         border: none;
//         figure {
//           object-fit: scale-down;
//           width: fit-content;
//           margin: auto;
//           background-color: $background-white;
//           padding: 1em;
//           border-radius: 8px;

//           img {
//             object-fit: scale-down;
//             width: 100%;
//             max-height: 70vh;
//             margin: auto;
//           }

//           button {
//             background-color: $background-white;
//             opacity: 100%;
//             position: absolute;
//             margin: 10px 10px 0 0;
//             color: $background-mustard;
//             padding: 2px 5px;
//             border-radius: 2px;
//             border: none;
//             transition: all 0.4s;
//             font-family: Verdana, Geneva, Tahoma, sans-serif;
//             font-weight: bold;
//             &:hover {
//               color: white;
//             }
//           }
//         }
//       }
//     }
//   }
}

// @media (max-width: 768px) {
//   .card-container {
//     width: 45%;
//   }
// }

</style>
