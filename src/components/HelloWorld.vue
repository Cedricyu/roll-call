<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <a-space direction="vertical">
      <a-input v-model:value="value" placeholder="Basic usage" />
      <a-input v-model:value.lazy="value1" autofocus placeholder="Lazy usage" />
    </a-space>
  </div>
</template>

<script>
import { watch, ref } from "vue";
const value = ref("");
const value1 = ref("");
watch(value, () => {
  console.log(value.value);
});
watch(value1, () => {
  console.log(value1.value);
});

export default {
  name: "HelloWorld",
  props: {
    msg: String,
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
