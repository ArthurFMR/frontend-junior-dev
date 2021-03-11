<template>
  <div>
    <nav class="md:m-6 md:rounded-md">
      <div class="px-8">
        <div class="flex items-center justify-between h-14">
          <div class="flex">
            <h1 class="text-white text-lg font-medium">LOGO</h1>
            <div class="hidden md:block ml-10">
              <div class="ml-10 space-x-16">
                <router-link
                  v-for="menu in menus"
                  :key="menu"
                  :to="menu.to"
                  class="text-white text-sm hover:bg-blue-900 p-2 rounded-md"
                  >{{ menu.text }}</router-link
                >
              </div>
            </div>
          </div>
          <div class="hidden md:block">
            <div class="ml-4 md:ml-6">
              <!-- Profile dropdown -->
              <div class="ml-3 relative">
                <div>
                  <button
                    @click="dropDownRevealed = !dropDownRevealed"
                    v-on:blur="dropDownRevealed = false"
                    type="button"
                    class="rounded-full flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  >
                    <img
                      class="w-8 rounded-full"
                      :src="userInfo.picture"
                      alt=""
                    />
                  </button>
                </div>

                <div
                  v-show="dropDownRevealed"
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
              </div>
            </div>
          </div>
          <!-- Mobile menu button -->
          <div class="mr-2 flex md:hidden">
            <button
             @click="mobileMenuRevealed = !mobileMenuRevealed"
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
                v-show="!mobileMenuRevealed"
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
                v-show="mobileMenuRevealed"
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
      <!-- Mobile menu, show/hide based on menu state. -->
      <MobileNavBar :menus="menus" :userInfo="userInfo" v-show="mobileMenuRevealed"/>
    </nav>
  </div>
</template>

<script>
import MobileNavBar from "./MobileNavBar";

export default {
  name: "NavBar",
  components: {
    MobileNavBar,
  },
  data() {
    return {
      dropDownRevealed: false,
      mobileMenuRevealed: false,
      userInfo:{
        name: 'Arthur F.',
        picture: 'https://image.freepik.com/free-vector/man-profile-cartoon_18591-58482.jpg'
      },
      menus: [
        { to: "/", text: "Menu" },
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
