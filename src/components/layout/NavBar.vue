<template>
  <div>
    <nav class="lg:m-6 lg:rounded-md">
      <div class="px-8">
        <div class="flex items-center justify-between h-14">
          <div class="flex">
            <h1 class="text-white text-lg font-medium">LOGO</h1>
            <div class="hidden md:block ml-10">
              <div class="ml-10 space-x-16">
                <router-link
                  v-for="(menu, index) in menus"
                  :key="index"
                  :to="menu.to"
                  class="text-white text-sm hover:bg-blue-900 p-2 rounded-md"
                  >{{ menu.text }}</router-link
                >
              </div>
            </div>
          </div>

         <ProfileDropdown :userInfo="userInfo"/>

          <!-- Mobile menu button -->
          <div class="mr-2 flex md:hidden">
            <button
              @click="mobileMenuOpenned = !mobileMenuOpenned"
              type="button"
              class="bg-black inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <!-- Open iocn -->
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
                v-show="!mobileMenuOpenned"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <!-- Close Icon -->
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
                v-show="mobileMenuOpenned"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <!-- Mobile menu-->
      <MobileNavBar
        :menus="menus"
        :userInfo="userInfo"
        v-show="mobileMenuOpenned"
      />
    </nav>
  </div>
</template>

<script>
import MobileNavBar from "./MobileNavBar";
import ProfileDropdown from "../ProfileDropdown";

export default {
  name: "NavBar",
  components: {
    MobileNavBar,
    ProfileDropdown,
  },
  data() {
    return {
      mobileMenuOpenned: false,
      userInfo: {
        name: "Arthur F.",
        picture:
          "https://image.freepik.com/free-vector/man-profile-cartoon_18591-58482.jpg",
      },
      menus: [
        { to: "/", text: "Home" },
        { to: "#", text: "Menu" },
        { to: "#", text: "Menu" },
        { to: "#", text: "Menu" },
      ],
    };
  },
};
</script>

<style scoped>
nav {
  background-color: #1e1add;
}

.my-profile-text span {
  color: #747577;
}

.my-profile-text p {
  color: #a0aec0;
}

.logout-text {
  color: #e53e3e;
}
</style>
