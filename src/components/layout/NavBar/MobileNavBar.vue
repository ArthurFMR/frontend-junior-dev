<template>
  <div class="md:hidden mb-8">
    <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
      <router-link
        v-for="menu in menus"
        :key="menu"
        :to="menu.to"
        class="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-900 p-2"
        >{{ menu.text }}</router-link
      >
    </div>
    <div class="pt-4 pb-3 border-t border-gray-500">
      <div class="flex items-center px-5">
        <div class="flex-shrink-0">
          <img
            class="h-10 w-10 rounded-full"
            :src="userInfo.picture"
            alt=""
          />
        </div>
        <div class="ml-3">
          <div class="text-base font-medium leading-none text-white">
            {{ userInfo.name }}
          </div>
        </div>
      </div>
      <div class="mt-3 px-2 space-y-1">
        <router-link
          to="#"
          class="text-white block px-3 py-2 rounded-md text-base font-medium flex hover:bg-blue-900"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="white"
            class="w-7 h-7 mr-1"
          >
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
              clip-rule="evenodd"
            />
          </svg>
          <span>My Profile</span>
        </router-link>

        <router-link
          to="#"
          class="text-white block px-3 py-2 rounded-md text-base font-medium flex hover:bg-blue-900"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="white"
            class="w-6 h-6 mr-1"
          >
            <path
              fill-rule="evenodd"
              d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
              clip-rule="evenodd"
            />
          </svg>
           <span >Logout</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MobileNavBar",
  props: ["menus", "userInfo"],
  data(){
      return{
          
      }
  }
};
</script>

<style>
</style>