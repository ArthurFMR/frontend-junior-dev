<template>
  <div>
    <header class="mb-4">
      <div class="ml-12">
        <div class="bread-color">
          <router-link to="/">Home</router-link> /
          <span class="underline">Reports & Insights</span>
        </div>
      </div>
    </header>
    <div class="grid md:grid-cols-3 gap-x-6 sm:grid-cols-1 gap-y-6">
      <div class="shadow-md bg-white">
        <PieChart/>
      </div>
      <div class="md:col-span-2 shadow-md bg-white">
        <UsersTable />
      </div>
    </div>
  </div>
</template>

<script>
import PieChart from "../components/PieChart";
import UsersTable from "../components/UsersTable";
export default {
  name: "Dashboard",
  components: {
    PieChart,
    UsersTable,
  },
};
</script>

<style scoped>
.bread-color {
  color: #718096;
}
</style>