<script setup>
import router from "../router";
import { userStore } from "../stores/userStore.js";


const userToAdd = userStore();

let member = {
  name: "",
  lastname: "",
  dateadmission: "",
  userStorename: "",
  password: "",
};

async function save() {
  if (member.name === "") {
    alert("Se necesita añadir un titulo.");
    return;
  }

  if (member.lastname === "") {
    alert("Se necesita añadir un motivo");
    return;
  }

  if (member.dateadmission === "") {
    alert("Se necesita añadir la fecha");
    return;
  }

  const payload = JSON.stringify(member);
  const url = "http://localhost:8080/api/register";
  const response = fetch(url, {
    method: "POST",
    body: payload,
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.name) {
        userToAdd.userObject = data;
        alert(data.name + " añadido correctamente.");
        router.push("/greetings/" + data.id);

      } else {
        alert(
          "Se ha producido un error. \nPor favor, inténtelo de nuevo en unos minutos."
        );
      }
    });
}
</script>

<template>
  <form>
    <div class="container mt-2">
      <div class="col-12 col-md-8">
        <h2 class="mt-2">Agrega un nuevo recuerdo de gratitud</h2>
        <div class="mb-2">
          <label for="name" class="form-label"></label>
          <input
            v-model="member.name"
            id="name"
            class="form-control"
            type="text"
            placeholder="Título"
          />
        </div>
        <div class="mb-2">
          <label for="surname" class="form-label"></label>
          <input
            v-model="member.lastname"
            id="surname"
            class="form-control"
            type="text"
            placeholder="Motivo"
          />
        </div>
        <div class="mb-3">
          <label for="date" class="form-label"></label>
          <input
            v-model="member.dateadmission"
            id="date"
            class="form-control"
            type="date"
            placeholder="Fecha"
          />
        </div>
      </div>
      <div class="d-flex w-80 mb-3 mt-3">
        <button
          @click.prevent="save"
          type="submit"
          class="btn btn-outline-success me-2 w-50"
        >
          Enviar
        </button>
        <button type="reset" class="btn btn-outline-danger w-50">Borrar</button>
      </div>
    </div>
  </form>
</template>

<style lang="scss" scoped>
@import "../assets/sass/variables";

.container {
  border-radius: 20px;
  color: $text-color;
  h2 {
    font-size: medium;
    text-align: center;
  }
  width: 70%;
  max-width: none;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  background-color: $background-component;
  mix-blend-mode: hard-light;
  height: 100%;
}

.form-control {
  width: 100%;
  border-radius: 10px;
}

.label {
  font-family: $font-text;
}

input {
  width: 100%;
  background-color: #ffffff;
}

.btn {
  width: 100%;
}

@media (min-width: 768px) {
  .w-10 {
    width: 10%;
  }
}
</style>
