<template>
  <div>
    <router-view />
    <VueSidebarMenuAkahon
      menuIcon="bxl-vuejs"
      menuTitle="roll-call"
      :menuItems="menuItems"
      isUsedVueRouter="true"
    />
  </div>
</template>

<script>
import VueSidebarMenuAkahon from "vue-sidebar-menu-akahon";

export default {
  name: "App",
  components: {
    VueSidebarMenuAkahon,
  },
  data() {
    return {
      menuItems: [
        {
          link: "/",
          name: "User",
          tooltip: "User",
          icon: "bx-user",
        },
        {
          link: "/search",
          name: "Search",
          tooltip: "Setting",
          icon: "bx-search-alt",
        },
        {
          link: "/insert",
          name: "Add Student",
          tooltip: "Setting",
          icon: "bx-cog",
        },
        {
          link: "/login",
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
