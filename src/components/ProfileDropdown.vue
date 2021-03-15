<template>
  <div class="hidden lg:block">
    <div class="ml-3 relative">
      <div>
        <button
          @click="dropDownOpened = !dropDownOpened"
          v-on:blur="dropDownOpened = false"
          type="button"
          class="block rounded-full flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
        >
          <img class="w-8 rounded-full" :src="userInfo.picture" alt="" />
        </button>
      </div>
      <!--Dropdown content-->
      <div
        v-show="dropDownOpened"
        class="origin-top-right absolute right-3 mt-2 w-56 rounded-md shadow-lg py-1 bg-white focus:outline-none"
      >
        <div class="border-b-2">
          <router-link
            to="#"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="#718096"
              class="w-8 h-8 mr-4"
            >
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                clip-rule="evenodd"
              />
            </svg>
            <div class="my-profile-text">
              <span>My Profile</span>
              <p class="mt-1">Change settings of your account.</p>
            </div>
          </router-link>
        </div>
        <router-link
          to="#"
          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="#E53E3E"
            class="w-6 h-6 mr-4"
          >
            <path
              fill-rule="evenodd"
              d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
              clip-rule="evenodd"
            />
          </svg>

          <span class="logout-text">Logout</span>
        </router-link>
      </div>
      <!--Dropdown content-->
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileDropdown",
  props:["userInfo"],
  data() {
    return {
      dropDownOpened: false,
    };
  },
};
</script>

<style>
</style>