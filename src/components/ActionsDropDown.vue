<template>
  <div class="relative">
    <!--Up Arrow icon-->  
    <button
      v-show="!dropDownOpened"
      class="block"
      @click="dropDownOpened = !dropDownOpened"
      
    >
      <svg
        class="h-7 w-7"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clip-rule="evenodd"
        />
      </svg>
    </button>

    <!--Down Arrow icon-->
    <button
      v-show="dropDownOpened"
      class="block"
      @click="dropDownOpened = !dropDownOpened"
     
    >
      <svg
        class="h-7 w-7"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
          clip-rule="evenodd"
        />
      </svg>
    </button>

    <!--Dropdown content-->
    <div
      v-show="dropDownOpened"
      class="absolute right-8 mt-1 py-2 w-44 bg-white rounded-lg shadow-lg border z-10"
    >
      <button class="flex p-2 hover:bg-gray-100 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="w-5 h-5 text-indigo-500"
        >
          <path
            d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
          />
        </svg>
        <span class="ml-1">Edit</span>
      </button>

      <button class="block flex p-2 hover:bg-gray-100 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="red"
          class="w-5 h-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
        <span class="ml-1">Delete</span>
      </button>
    </div>
    <!--Dropdown content-->
  </div>
</template>

<script>
export default {
  name: "ActionsDropDown",
  data() {
    return {
      dropDownOpened: false,
    };
  },
};
</script>

<style>
</style>