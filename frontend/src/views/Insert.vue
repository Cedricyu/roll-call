<template>
  <UpdateForm msg="Welcome to Your Vue.js App" />
</template>

<script>
import UpdateForm from "../components/form.vue";

export default {
  name: "InsertPage",
  components: {
    UpdateForm,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
