<template>
  <div class="container">
    <div class="custom-container">
      <div>
        <el-form label-width="80px">
          <h3 class="title">Sign In</h3>

          <el-form-item label="Username">
            <el-input
              v-model="formData.username"
              placeholder="Enter your username"
            ></el-input>
          </el-form-item>
          <el-form-item label="Password">
            <el-input
              v-model="formData.password"
              placeholder="Enter your password"
              type="password"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="log">Login</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      formData: {
        username: "",
        password: "",
        loginError: false,
      },
    };
  },
  methods: {
    ...mapActions(["login", "logout"]),

    log() {
      if (this.formData.username === "" || this.formData.password === "") {
        this.loginError = true;
        console.log("please input name");
      } else {
        console.log(this.formData.username, this.formData.password);
        const hostIP = process.env.VUE_APP_BACKEND_URL; // Access the environment variable

        fetch(`http://${hostIP}:8090/login`, {
          method: "POST",
          body: JSON.stringify(this.formData),
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.success) {
              // Call the Vuex action to update login state
              this.login();
              this.$router.push("/setting");
            } else {
              // Handle unsuccessful login here
              console.error("Login failed:", data.message);
            }
          })
          .catch((error) => {
            console.error("Error fetching user data:", error);
          });
      }
    },
  },
};
</script>

<style scoped>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'montserrat', sans-serif;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.custom-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  width: 100vh;
  box-shadow: 2px 2px 4px rgba(66, 41, 41, 0.514);
}

.title{
  display: flex;
  margin-bottom: 2rem;
}

</style>
