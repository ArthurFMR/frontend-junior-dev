<template>
  <div>
    <ApexCharts
      :type="typeChart"
      :series="series"
      :options="options"
      :width="width"
    />
  </div>
</template>

<script>
import ApexCharts from "vue-apexcharts";
export default {
  name: "PieChart",
  props: ["series", "width", "typeChart", "options"],
  components: {
    ApexCharts,
  },
  data() {
    return {};
  },
};
</script>

<style>
</style>