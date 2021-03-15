<template>
  <div>
    <div class="border border-gray-200 rounded-lg overflow-x-auto">
      <table class="w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th
              v-for="(label, index) in headerLabels"
              :key="index"
              scope="col"
              class="px-6 py-3 text-left text-sm font-medium text-gray-500"
            >
              {{ label }}
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="user in paginator" :key="user.id">
            <td class="px-6 py-4">
              <div class="flex">
                <div>
                  <img class="h-10 w-10 rounded-full" :src="user.profile_img" />
                </div>
                <div class="ml-4">
                  <div class="text-sm font-medium">
                    {{ `${user.first_name} ${user.last_name}` }}
                  </div>
                  <div class="text-sm text-gray-500">
                    {{ user.email }}
                  </div>
                </div>
              </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm font-medium">
                {{ dateManagement(user.sessions).latestDate }}
              </div>
              <div class="text-sm text-gray-500">
                {{ dateManagement(user.sessions).relativeTime }}
              </div>
            </td>
            <td class="px-6 py-4 text-sm font-medium">
              {{ user.department }}
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <span
                class="px-2 inline-flex text-sm font-medium"
                :class="{
                  'text-green-500': user.status,
                  'text-red-500': !user.status,
                }"
              >
                {{ user.status ? "Active" : "Inactive" }}
              </span>
            </td>

            <!--Actions column-->
            <td class="px-6 py-4">
              <ActionsDropDown />
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!--Pagination-->
    <div class="flex">
      <button
        v-for="numberPage in totalPages"
        :key="numberPage"
        @click="currentPage = numberPage"
        class="mr-2 mt-2 py-2 px-4 bg-transparent hover:bg-gray-300 text-grey-500 font-medium border border-gray-300 rounded"
        :class="{ 'bg-gray-300': numberPage == currentPage }"
      >
        {{ numberPage }}
      </button>
    </div>
  </div>
</template>

<script>
import momentJs from "moment";
import ActionsDropDown from "./ActionsDropDown";

export default {
  name: "UsersTable",
  props: ["users", "headerLabels"],
  components: {
    ActionsDropDown,
  },

  data() {
    return {
      totalPages: 0,
      currentPage: 1,
      pageSize: 4,
    };
  },

  beforeUpdate() {
    this.totalPages = Math.ceil(this.users.length / this.pageSize);
  },

  computed: {
    paginator() {
      let offset = (this.currentPage - 1) * this.pageSize;
      let paginatedData = this.users.slice(offset).slice(0, this.pageSize);

      return paginatedData;
    },
  },

  methods: {
    dateManagement(strDates) {
      const dates = strDates.map((date) => new Date(date));
      const latestDate = new Date(Math.max(...dates));

      const date = {
        latestDate: momentJs(latestDate).format("MMMM D, Y"),
        relativeTime: momentJs(latestDate, "YYYYMMDD").fromNow(),
      };

      return date;
    },
  },
};
</script>

<style>
</style>