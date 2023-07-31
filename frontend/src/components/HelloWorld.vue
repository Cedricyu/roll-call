<template>
  <div class="hello">
    <a-space direction="vertical">
      <form>
        <a-input
          v-model:value.lazy="formData.name"
          placeholder="select your name"
        />
        <button type="submit" @click.prevent="submitForm">Submit</button>
      </form>
    </a-space>
  </div>
  <div id="profile" class="container" v-if="student_name !== ''">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>{{ student_name }}</span>
          <el-button class="button" text>Operation button</el-button>
        </div>
      </template>
    </el-card>
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

    var student_name = ref("");

    function submitForm() {
      // You can handle the form submission here
      const hostIP = process.env.VUE_APP_BACKEND_URL; // Access the environment variable

      fetch(`http://${hostIP}:8090/students/${formData.value.name}`)
        .then((response) => response.json())
        .then((data) => {
          student_name.value = data.name;
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
      // console.log("Form Data:", formData.value);
    }

    return {
      msg,
      formData,
      submitForm,
      student_name,
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

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 480px;
  flex-direction: column;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
