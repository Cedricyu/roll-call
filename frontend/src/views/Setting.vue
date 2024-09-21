<script setup>
import { ref, onMounted } from "vue";
import {
  ElNotification,
  ElDialog,
  ElForm,
  ElInput,
  ElButton,
} from "element-plus";

const students_data = ref([]);
const isAddStudentModalVisible = ref(false);
const newStudent = ref({ id: "", name: "" });

const showAddStudentModal = () => {
  isAddStudentModalVisible.value = true;
};

const closeAddStudentModal = () => {
  isAddStudentModalVisible.value = false;
};

const addStudent = () => {
  const hostIP = import.meta.env.VITE_BACKEND_URL;

  fetch(`${hostIP}/students`, {
    method: "POST",
    body: JSON.stringify(newStudent.value),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        open_success("Student added successfully!");
        load_table();
        isAddStudentModalVisible.value = false;
        newStudent.value = { id: "", name: "" }; // Reset form
      } else {
        throw new Error("Failed to add the student.");
      }
    })
    .catch((error) => {
      console.error("Error adding student:", error);
      open_error();
    });
};

const deleteStudent = (studentId) => {
  const hostIP = import.meta.env.VITE_BACKEND_URL; // Using Vite's env variable syntax
  fetch(`${hostIP}/students/${studentId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        open_success(`Student ${studentId} deleted successfully!`);
        load_table(); // Reload the table after deletion
      } else {
        throw new Error("Failed to delete the student.");
      }
    })
    .catch((error) => {
      console.error("Error fetching user data:", error);
      console.error("Error deleting student:", error);
      open_error();
    });
};

const open_success = (message) => {
  ElNotification({
    title: "Success",
    message,
    type: "success",
  });
};

const open_error = () => {
  ElNotification({
    title: "Error",
    message: "This is an error message",
    type: "error",
  });
};

const load_table = () => {
  const hostIP = import.meta.env.VITE_BACKEND_URL;

  fetch(`${hostIP}/printTable`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      students_data.value = data;
    })
    .catch((error) => {
      console.error("Error fetching student data:", error);
      open_error();
    });
};

onMounted(() => {
  load_table();
});
</script>

<template>
  <!-- <div id="app">
    <h3>上傳點名紀錄</h3>
    <section class="upload-section">
      <form id="upload-form" enctype="multipart/form-data">
        <input
          type="file"
          name="excelFile"
          accept=".xlsx, .xls"
          class="upload-button"
        />
      </form>
      <el-select
        v-model="value"
        class="selection"
        placeholder="Select"
        size="small"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </section>
    <el-button type="primary" class="submit-button" @click="submit" text bg
      >Submit</el-button
    >
  </div> -->
  <div class="container">
    <el-button
      type="primary"
      class="add-student-button"
      @click="showAddStudentModal"
    >
      New Student
    </el-button>

    <el-table :data="students_data" style="width: 80%" :height="400">
      <el-table-column fixed prop="id" label="Student No." width="150" />
      <el-table-column fixed prop="name" label="Name" width="120" />
      <el-table-column
        v-for="weekNumber in 16"
        :key="`week${weekNumber}`"
        :prop="`week${weekNumber}`"
        :label="`Week ${weekNumber}`"
        width="120"
      >
      </el-table-column>
      <el-table-column label="Actions" fixed="right" width="100">
        <template #default="scope">
          <el-button
            type="danger"
            icon="el-icon-delete"
            @click="deleteStudent(scope.row.id)"
          >
            Delete
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>

  <div v-if="isAddStudentModalVisible" class="modal-overlay">
    <div class="modal-content">
      <h3>Add New Student</h3>
      <div class="modal-body">
        <el-form :model="newStudent" ref="addStudentForm">
          <el-form-item label="Student No." prop="id">
            <el-input v-model="newStudent.id" />
          </el-form-item>
          <el-form-item label="Name" prop="name">
            <el-input v-model="newStudent.name" />
          </el-form-item>
        </el-form>
      </div>
      <div class="modal-footer">
        <el-button type="primary" @click="addStudent">Add</el-button>
        <el-button @click="closeAddStudentModal">Cancel</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SetPage",
};
</script>

<style>
:root {
  --primary: #ea40a4;
  --business: #3a82ee;
  --personal: var(--primary);
  --light: #eee;
  --grey: #888;
  --dark: #313154;
  --danger: #ff5b57;

  --shadow: 0 1px 3px rgba(0, 0, 0, 0.5);

  --business-glow: 0px 0px 4px rgba(58, 130, 238, 0.75);
  --personal-glow: 0px 0px 4px rgba(234, 64, 164, 0.75);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "montserrat", sans-serif;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h3 {
  color: var(--dark);
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 0.5rem;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2.5rem;
}

section {
  display: flex;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding-left: 1.5rem;
  padding-right: 1.5em;
  border-radius: 0.5rem;
  box-shadow: var(--shadow);
  margin-bottom: 1rem;
  width: 80%;
  margin: 0 auto;
}
.upload-section .upload-button {
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 1rem;
  border-radius: 0.5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  background-color: var(--light);
}
.upload-section .selection {
  margin-left: 1rem;
}

.submit-button {
  margin-top: 2rem;
}
.add-student-button {
  margin-bottom: 1rem;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.modal-content {
  background-color: #fff;
  padding: 2rem;
  border-radius: 8px;
  width: 400px;
}

.modal-body {
  margin-bottom: 1rem;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
}

.modal-footer el-button {
  margin-left: 10px;
}
</style>
