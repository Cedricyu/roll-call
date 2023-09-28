<template>
  <div class="container">
    <div class="custom-container">
        <form>
          <el-input v-model="student_id" placeholder="Please input student ID" />
        </form>
        <el-button type="success" class="button" @click.prevent="submitForm">Submit</el-button>
        <el-button type="danger" class="button" @click.prevent="student_name = ''" v-if="student_name !== ''">Close</el-button>
    </div>

      <div id="profile" class="pop" v-if="student_name !== ''">
        <el-card class="box-card">
          <div class="card-header">
            <span>{{ student_name }}</span>
            <el-button @click="confirm" text
              >Commit Attend</el-button
            >
          </div>
        </el-card>
      </div>
  </div>
</template>

<script setup>
import { ref } from "vue"; // Import ref from Vue 3

const student_id = ref("");
const hostIP = process.env.VUE_APP_BACKEND_URL; // Access the environment variable

var student_name = ref("");

function submitForm() {
  // You can handle the form submission here
  fetch(`http://${hostIP}:8090/students/${student_id.value}`)
    .then((response) => response.json())
    .then((data) => {
      student_name.value = data.name;
    })
    .catch((error) => {
      console.error("Error fetching user data:", error);
    });
  // console.log("Form Data:", formData.value);
}

function confirm() {
  fetch(`https://${hostIP}/update`, {
    method: "POST",
    body: JSON.stringify(student_id.value),
    headers: {
      "Content-Type": "application/json",
    },
  }).catch((error) => {
    console.error("Error fetching user data:", error);
  });
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
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
  flex-direction: column;
}

.container .pop {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: -5rem;
}
.custom-container {
  display: flex;
  align-items: center;
  height: 50vh;
  width: 100vh;
  box-shadow: 2px 2px 4px rgba(66, 41, 41, 0.514);
  padding-left: 35px;
}

.custom-container .button{
  margin-left: 25px;
}


</style>
