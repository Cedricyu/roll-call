<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <a-space direction="vertical">
      <form>
        <a-input v-model:value.lazy="formData.name" placeholder="select your name" />
        <a-input
          v-model:value.lazy="formData.email"
          autofocus
          placeholder="identification"
        />
        <button type="submit" @click.prevent="submitForm">Submit</button>
      </form>
    </a-space>
  </div>
</template>

<script>
import { ref } from "vue"; // Import ref from Vue 3

export default {
  setup() {
    const msg = "who are you";
    const formData = ref({
      name: "",
      email: "",
      message: "",
    });

    function submitForm() {
      // You can handle the form submission here
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
</style>
