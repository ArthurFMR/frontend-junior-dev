<template>
  <div id="app">
    <NavBar />
    <main>
      <div class="px-6 mt-8">
        <!-- Replace with your content -->     
        <router-view/>
        <!-- /End replace -->
      </div>
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
  async mounted() {
    /* // Users
    const userResponse = await fetch('/api/users');
    const users = await userResponse.json();
    // Reports
    const reportResponse = await fetch('/api/reports');
    const reports = await reportResponse.json(); */
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
  width: 100%;
  height: 100%;
  margin: 0;
  overflow: auto;
  background-color: #f7fafc;
}
</style>
