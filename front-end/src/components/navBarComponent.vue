<script setup>
import { ref } from "vue";
import loginNavButtonComponent from "./loginNavButtonComponent.vue";
import signupNavButtonComponent from "./signupNavButtonComponent.vue";
const show = ref(false);

const toggle = () => {
  console.log(show);
  show.value = !show.value;
};
</script>

<template>
  <div
    class="h-[69px] flex justify-center bg-black sm:bg-olivine"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
      />
    </svg>

    <section class="h-[52px] w-[52px]">
      <router-link :to="{ name: 'Home' }">
        <img src="../assets/Ellipse 1.png" />
      </router-link>
    </section>
    <section @click="toggle" class="h-[22px] w-[39.2px]">
      <img src="../assets/Menu Icon.png" />
    </section>
    <!-- Here goes the menu -->
    <div class=" h-screen w-3/4">
      <router-link :to="{name:'Profile'}">
        <span>Profile</span>
      </router-link>
      <router-link :to="{name:'Bookshelve'}">
        <span>Books</span>
      </router-link>
      <router-link :to="{name:'AboutUs'}">
        <span>About us</span>
      </router-link>
      <loginNavButtonComponent/>
      <signupNavButtonComponent/>
    </div>
  </div>
</template>

<style scoped></style>
