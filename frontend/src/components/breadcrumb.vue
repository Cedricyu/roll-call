<template>
    <ol class="flex">
      <li v-for="(item, i) in breadcrumbList" :key="i" class="pl-2">
        <router-link :to="item.path">{{ item.name}}</router-link>
      </li>
    </ol>
</template>

<script>
import { ref, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
export default {
  name: 'BreadCrumb',
  setup () {
    const route = useRoute()
    const breadcrumbList = ref([])
    const isHome = () => {
      return route.name === 'Home' || !route.name; // Check if route.name is undefined
    };
    const getBreadcrumbs = () => {
      let matched = route.matched
      if (!isHome(matched[0])) {
        matched = [{ path: '/', name : 'Home' }].concat(matched)
        console.log(matched)
      }
      breadcrumbList.value = matched
      console.log(breadcrumbList.value)

    }
    watch(route, () => {
      getBreadcrumbs()
    })
    onMounted(() => {
      getBreadcrumbs()
    })
    return { breadcrumbList, getBreadcrumbs }
  }
}
</script>

<style scoped>
  li::after {
    content: '/';
    display: inline-block;
    padding-left: .5rem;
  }
  li:last-child::after {
    content: '';
  }

  .flex{
    display: flex; /* Use flexbox to make items display in a row */
    justify-content: center;
    list-style: none; /* Remove the default list bullet points */
    margin-bottom: 2rem;
  }
</style>