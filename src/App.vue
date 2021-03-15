<template>
  <div id="app">
    <NavBar />
    <main class="px-6">
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
html,
body,
#app {
  width: 100%;
  height: 100%;
  margin: 0;
  background-color: #f7fafc;
}
</style>
