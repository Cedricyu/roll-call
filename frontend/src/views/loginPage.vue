<template>
  <div class="custom-container">
      <div>
          <h1>Sign In</h1>
          <el-form>
              <el-form-item label="Username">
                  <el-input v-model="formData.email" placeholder="Enter your username"></el-input>
              </el-form-item>
              <el-form-item label="Password">
                  <el-input v-model="formData.password" placeholder="Enter your password" type="password"></el-input>
              </el-form-item>
              <el-form-item>
                  <el-button type="primary" @click="login">Login</el-button>
              </el-form-item>
          </el-form>
      </div>

  </div>
</template>
<script>
export default {
  data() {
      return {
        formData: {
          email: '',
          password: '',
          loginError: false,
        }
      };
  },
  methods: {
      login() {
          if (this.formData.username === '' || this.formData.password === '') {
              this.loginError = true;
          } else {

            console.log(this.formData.email,this.formData.password)
            const hostIP = process.env.VUE_APP_BACKEND_URL; // Access the environment variable

            fetch(`http://${hostIP}:8090/login`,{
                method: "POST",
                body: JSON.stringify(this.formData),
                credentials: "include",
                headers: {
                "Content-Type": "application/json",
                }
            })
            .then((response) => console.log(response.json()))
            .then((data) => {
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
.custom-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>