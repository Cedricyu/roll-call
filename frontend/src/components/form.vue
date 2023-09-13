<template>
  <div class="custom-container">
    <a-space direction="vertical">
      <h1>{{ msg }}</h1>
      <form>
        <a-input
          v-model:value.lazy="formData.name"
          placeholder="type your name"
        />
        <a-input
          v-model:value.lazy="formData.id"
          autofocus
          placeholder="type your student id"
        />
        <button type="submit" @click.prevent="submitForm">Submit</button>
      </form>
    </a-space>
  </div>
</template>

<script>
import { ref } from "vue"; // Import ref from Vue 3

export default {
  name: "FormComponent",
  setup() {
    const msg = "add new students";
    const formData = ref({
      name: "",
      id: "",
    });

    function submitForm() {
      // You can handle the form submission here
      const hostIP = process.env.VUE_APP_BACKEND_URL; // Access the environment variable

      // console.log(JSON.stringify(formData.value))

      fetch(`http://${hostIP}:8090/students`, {
        method: "POST",
        body: JSON.stringify(formData.value),

        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          const appendedElement = document.createElement("div");
          appendedElement.textContent = `update scuccess`;
          document.querySelector(".hello").appendChild(appendedElement);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
      console.log("Form Data:", formData.value);
    }

    return {
      msg,
      formData,
      submitForm,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.custom-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
