<template>
  <div>
    <div>
      <BreadCrumb />
      <router-view />
    </div>
    <VueSidebarMenuAkahon
      menuIcon="bxl-vuejs"
      menuTitle="zoe's class"
      :menuItems="menuItems"
      :isUsedVueRouter="true"
      profileName="CEDRIC YU"
      @button-exit-clicked="onButtonExitClicked"
    />
  </div>
</template>

<script>
import VueSidebarMenuAkahon from "vue-sidebar-menu-akahon";
import { mapActions } from "vuex";
import BreadCrumb from "./components/breadcrumb.vue"

export default {
  name: "App",
  components: {
    VueSidebarMenuAkahon,
    BreadCrumb
  },
  methods: {
    ...mapActions(["login", "logout"]),
    onButtonExitClicked() {
      const hostIP = process.env.VUE_APP_BACKEND_URL; // Access the environment variable

      fetch(`http://${hostIP}:8090/logout`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          this.logout();
          console.log(data);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
      // Add your logout logic here
    },
  },
  data() {
    return {
      menuItems: [
        {
          link: "/",
          name: "Home",
          tooltip: "Home",
          icon: "bx bx-home",
        },
        {
          link: "/search",
          name: "Search",
          tooltip: "Setting",
          icon: "bx-search-alt",
        },
        {
          link: "/setting",
          name: "Setting",
          tooltip: "Setting",
          icon: "bx-cog",
        },
      ],
    };
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

.content {
  margin-left: 200px; /* Adjust the margin to accommodate the sidebar width */
  /* Add other styles for your main content */
}
</style>
