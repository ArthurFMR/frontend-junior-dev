<template>
  <div>
    <div class="mt-4 mx-4">
      <p class="text-lg chart-title">Why do you create a startup?</p>
      <span class="chart-subtitle">Trends</span>
    </div>
    <img class="mx-auto justify-center mt-6" src="@/assets/pie-classic.png" />
  </div>
</template>

<script>
export default {
  name: "PieChart",
};
</script>

<style scoped>
.chart-title {
  color: #4a5568;
}

.chart-subtitle {
  color: #a0aec0;
}
</style>