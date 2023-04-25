<script setup>
import { onBeforeMount, ref, computed } from "vue";
import ApiRepository from "./../assets/ApiRepository/ApiRepository.js";
import { userStore } from "../stores/userStore";
// import { imageUser } from "../stores/imageUser";
import router from "../router/index";
import { defineStore } from 'pinia'



const userItem = userStore();
// const imageUserItem = imageUser();

// function update(id, member, memberImage) {
//   userItem.userObject = member;
//   imageUserItem.imageUserObject = memberImage;
//   router.push("/modificarusuario" + "/" + id);
// }

function updateImage(id, member, memberImage) {
  userItem.userObject = member;
  imageUserItem.userImageObject = memberImage;
  router.push("/registrofotousuario" + "/" + id);
}
const ourEventsData = {
  dateevent: '2023/04/24' 
};

function formatDate(date) {
  return date.split(/[-/]/).reverse().join('-');
}
const repository = new ApiRepository("quienesSomos");
const api = repository.chooseApi();

let membersList = ref([]);
onBeforeMount(async () => {
  membersList.value = await api.getAll();
});

const membersToShow = computed(() => {
  return membersList.value;
});


function deletePost(id) {
  if (confirm("¿Está seguro de que quiere borrar a este usuario?") == true) {
    deleteThis(id);
  }
}

async function deleteThis(id) {
  const respone = fetch(`http://localhost:8080/api/users/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    if (response.status == 200) {
      alert("Usuario borrado correctamente.");
      location.reload();
    } else {
      alert(
        "Se ha producido un error. \nPor favor, inténtelo de nuevo en unos minutos."
      );
    }
  });
}
</script>
<template>
  <main>
    <div
      class="card mb-3"
      v-for="member in membersToShow"
      :key="member.id"
      :member="member"
    />
      <div class="row g-0">
        <div v-if="member">
          <img
            :src="`http://localhost:8080/images/user-photos/${member.image}`"
            class="img-fluid"
            alt="..."
          />
        </div>

        <div class="text">
          <div class="text-name">
            <p class="font-name"><b>{{ member.lastname }}</b>, {{ member.name }}</p>

            <p class="font-italic">Fecha admisión: {{ formatDate(member.dateadmission) }}</p>

          </div>
          <div class="options">
          <div class="text-date">
            <div class="card-body">
              <p class="btnsUser">
                <button
                type="button"
                class="btn btn-danger"
                @click="deletePost(member.id)"
              >
                Borrar
              </button>
              <button
                type="button"
                class="btn btn-warning"
                @click="update(member.id, member, member)"
              >
                Modificar
              </button>
              <button
                type="button"
                class="btn btn-success"
                @click="updateImage(member.id, member, member)"
              >
              Imagen
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>


  </main>
</template>

<style scoped lang="scss">

main {
  padding-top: 5vw;
}
.row {
  width: 90%;
  max-width: none;
  margin: auto;
  background: #feffd7;
  display: flex;
  justify-content: space-between;
}

.row > * {
  max-width: none;
  width: auto;
}

img {
  aspect-ratio: 16/9;
  object-fit: cover;
  width: 200px;
}

.btn {
  margin: 0.3em;
  width: 5.4em;
}

.card-body {
  display: flex;
  justify-content: end;
  align-items: flex-end;
}
.text,
.text-date {
  padding: 10px;
}

.options {
  justify-self: end;
  align-self: self-end;
}

@media (max-width: 768px) {
  .row {
    flex-direction: column;

    img {
      width: 100%;
    }
    .options {
      justify-self: start;
      align-self: center;
    }
  }
}
.card {
  background-color: black;
}
</style>
