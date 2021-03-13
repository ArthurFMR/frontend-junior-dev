<template>
  <div id="app">
    <NavBar />
    <main class="px-6 mt-8">
     
        <router-view />
     
    </main>
  </div>
</template>

<script>
import NavBar from "./components/layout/NavBar/NavBar.vue";
export default {
  name: "app",
  components: {
    NavBar,
  },

  data() {
    return {};
  },
  async mounted() {
    // Users
    // const userResponse = await fetch('/api/users');
    // const users = await userResponse.json();
    // Reports
    // const reportResponse = await fetch('/api/reports');
    // this.reports = await reportResponse.json();
  },
};
</script>

<style lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;

html,
body,
#app {
  margin: 0;
  background-color: #f7fafc;
}
</style>
