<script setup>
import XLSX from "xlsx"; // Import the xlsx library
import { ElNotification } from 'element-plus'
import { ref, onMounted } from 'vue';


const submit = () => {
  console.log("submit excel");
  const fileInput = document.querySelector('input[type="file"]');

  if (!fileInput.files.length) {
    console.error("No file selected");
    return;
  }

  const file = fileInput.files[0];

  // Check if the selected file is of the right type (Excel format)
  if (
    file.type !==
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" &&
    file.type !== "application/vnd.ms-excel"
  ) {
    console.error("Invalid file format. Please select an Excel file.");
    return;
  }

  const reader = new FileReader();

  reader.onload = (e) => {
    const data = new Uint8Array(e.target.result);
    const workbook = XLSX.read(data, { type: "array" });

    // Assuming you want to read the first sheet (index 0)
    const sheetName = workbook.SheetNames[0];
    const jsonData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

    console.log("JSON Data:", jsonData);   
    const hostIP = import.meta.env.VITE_BACKEND_URL; // Using Vite's env variable syntax

    fetch(`${hostIP}/${value.value}`, {
            method: "POST",
            body: JSON.stringify(jsonData),
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
          })
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      open_success();
    })
    .catch((error) => {
      console.error("Error fetching user data:", error);
      open_error();
    });
    };

  reader.readAsArrayBuffer(file);

}
const value = ref('')
    
const options = [
  {
    value: 'week1',
    label: 'week1',
  },
  {
    value: 'week2',
    label: 'week2',
  },
  {
    value: 'week3',
    label: 'week3',
  },
  {
    value: 'week4',
    label: 'week4',
  },
  {
    value: 'week5',
    label: 'week5',
  },
  {
    value: 'week5',
    label: 'week5',
  },
  {
    value: 'week6',
    label: 'week6',
  },
  {
    value: 'week7',
    label: 'week7',
  },
  {
    value: 'week8',
    label: 'week8',
  },
  {
    value: 'week9',
    label: 'week9',
  },
  {
    value: 'week10',
    label: 'week10',
  },
  {
    value: 'week11',
    label: 'week11',
  },
  {
    value: 'week12',
    label: 'week12',
  },
  {
    value: 'week13',
    label: 'week13',
  },
  {
    value: 'week14',
    label: 'week14',
  },
  {
    value: 'week15',
    label: 'week15',
  },
  {
    value: 'week16',
    label: 'week16',
  },

]

const open_success = () => {
  ElNotification({
    title: 'Success',
    message: 'This is a success message',
    type: 'success',
  })
}

const open_error = () => {
  ElNotification({
    title: 'Error',
    message: 'This is an error message',
    type: 'error',
  })
}

const students_data = ref([]); // Initialize with an empty array

const load_table = () => {
  const hostIP = import.meta.env.VITE_BACKEND_URL; // Using Vite's env variable syntax

  fetch(`${hostIP}/printTable`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      students_data.value = data;
    })
    .catch((error) => {
      console.error("Error fetching user data:", error);
      open_error();
    });
};

onMounted(() => {
  load_table(); // Call the function to load data when the component is mounted
});
</script>

<template>
  <div id="app">
    <h3>上傳點名紀錄</h3>
    <section class="upload-section">
      <form id="upload-form" enctype="multipart/form-data">
        <input type="file" name="excelFile" accept=".xlsx, .xls" class="upload-button"/>
      </form>
      <el-select v-model="value" class="selection" placeholder="Select" size="small" >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </section>
    <el-button type="primary" class="submit-button" @click="submit" 
    text
    bg >Submit</el-button>
  </div>
  <div class="container">
    <el-table :data="students_data" 
      style="width: 80%;"
      :height="400"
    >
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
    </el-table>
  </div>
</template>

<script>
export default {
  name: "SetPage",
};
</script>

<style>
:root {
	--primary: #EA40A4;
	--business: #3A82EE;
	--personal: var(--primary);
	--light: #EEE;
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
	font-family: 'montserrat', sans-serif;
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

.container{
  display: flex;
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
  width : 80%;
  margin: 0 auto;
}
.upload-section .upload-button {
	display: flex;
	align-items: center;
	background-color: #FFF;
	padding: 1rem;
	border-radius: 0.5rem;
	margin-top: 1rem;
  margin-bottom: 1rem;
  background-color: var(--light);
}
.upload-section .selection{
  margin-left: 1rem;
}

.submit-button{
  margin-top: 2rem;

}

</style>
