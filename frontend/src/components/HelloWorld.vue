<template>
  <div class="container">
    <div class="custom-container">
      <div class="week-display">
        <span>Current Week: {{ weekNumber }}</span>
      </div>
      <form>
        <el-input v-model="student_id" placeholder="Please input student ID" />
      </form>
      <el-button type="success" class="button" @click.prevent="submitForm"
        >Submit</el-button
      >
      <el-button
        type="danger"
        class="button"
        @click.prevent="student_name = ''"
        v-if="student_name !== ''"
        >Close</el-button
      >
    </div>

    <div id="profile" class="pop" v-if="student_name !== ''">
      <el-card class="box-card">
        <div class="card-header">
          <span>{{ student_name }}</span>
          <el-button @click="confirm" text>Commit Attend</el-button>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"; // Import ref from Vue 3

const student_id = ref("");
const hostIP = import.meta.env.VITE_BACKEND_URL; // Using Vite's env variable syntax
const weekNumber = 11; 


var student_name = ref("");

function submitForm() {
  // You can handle the form submission here
  fetch(`${hostIP}/students/${student_id.value}`)
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
  const studentId = student_id.value; // Assuming student_id is an input field

  fetch(`${hostIP}/students/${studentId}/week/${weekNumber}`, {
    method: "PUT", // Use PUT for updating
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Network response was not ok.");
    })
    .then((data) => {
      console.log("Success:", data);
      alert(`Student ID ${studentId} week ${weekNumber} updated successfully!`);
    })
    .catch((error) => {
      console.error("Error updating student:", error);
      alert("Error updating student data. Please try again.");
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

.custom-container .button {
  margin-left: 25px;
}

.week-display {
  font-size: 1.2rem;
  color: #333;
  padding: 0.5rem;
}
</style>
