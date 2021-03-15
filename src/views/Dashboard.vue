<template>
  <div>
    <header class="mb-4">
      <div class="ml-12 bread-color">
        <router-link to="/">Home</router-link> /
        <span class="underline">Reports & Insights</span>
      </div>
    </header>
    <div class="grid lg:grid-cols-3 gap-x-6 sm:grid-cols-1 gap-y-6">
      <div class="shadow-md bg-white grid justify-items-stretch">
        <div class="mt-4 mx-4">
          <p class="text-lg chart-title">Why do you create a startup?</p>
          <span class="chart-subtitle">Trends</span>
        </div>
        <Chart
          typeChart="pie"
          :series="reportSeries"
          :options="optionsPieChart"
          width="370"
          class="justify-self-center mb-3"
        />
      </div>
      <div class="px-4 py-6 lg:col-span-2 shadow-md bg-white min-w-0">
        <p class="mb-4 text-lg chart-title">Employees</p>
        <UsersTable :users="users" :headerLabels="usersTableHeaders" />
      </div>
    </div>
  </div>
</template>

<script>
import Chart from "../components/Chart";
import UsersTable from "../components/UsersTable";

export default {
  name: "Dashboard",
  components: {
    Chart,
    UsersTable,
  },

  data() {
    return {
      reportSeries: [],
      optionsPieChart: {},
      users: [],
      usersTableHeaders: ["Employee", "Last login", "Department", "Status"],
    };
  },

  created() {
    this.loadPieChartData();
    this.loadUsersData();
  },

  methods: {
    async loadUsersData() {
      const userResponse = await fetch("/api/users");
      const usersObj = await userResponse.json();
      this.users = usersObj.users;
    },

    async loadPieChartData() {
      const reportResponse = await fetch("/api/reports");
      const reports = await reportResponse.json();

      this.reportSeries = reports["reports"].map((report) => report.total);

      this.optionsPieChart = {
        legend: {
          position: "bottom",
          itemMargin: {
            horizontal: 7,
          },
        },
        dataLabels: {
          enabled: false,
        },

        stroke: {
          show: false,
        },

        tooltip: {
          enabled: false,
        },
        labels: reports["reports"].map((report) => report.category),
        colors: ["#B085FF", "#855CF8", "#503795", "#E289F2"],
      };
    },
  },
};
</script>

<style scoped>
.bread-color {
  color: #718096;
}

.chart-title {
  color: #4a5568;
}

.chart-subtitle {
  color: #a0aec0;
}
</style>