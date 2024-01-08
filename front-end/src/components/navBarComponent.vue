<script setup>
import { ref } from "vue";
import loginNavButtonComponent from "./loginNavButtonComponent.vue";
import signupNavButtonComponent from "./signupNavButtonComponent.vue";
const open = ref(false);


const toggle = () => {
  open.value = !open.value
}
</script>

<template>
  <div class="h-[69px] flex justify-center bg-navbar sticky">
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
    <button @click="toggle()">
      <img src="../assets/Menu Icon.png"/>
    </button>
    <!-- Here goes the sidebar -->
    <div class="relative flex min-h-screen overflow-hidden"
    :class="[open ? 'max-w-lg' : 'max-w-0']">
      <!-- sidebar -->
      <div class="bg-olive flex flex-col text-white w-72">
        <span class="mr-auto ml-auto">Booktify</span>

        <section>
         <!--  Welp <span>User</span> <span>View Profile</span> -->
        </section>
        <section class="flex flex-col items-end" >
          <router-link :to="{ name: 'Profile' }"><span class="text-white">Profile</span>  </router-link>
    <router-link :to="{ name: 'Bookshelve' }" target="_blank"><span class="text-white">Books</span>  </router-link>
    <router-link :to="{ name: 'AboutUs' }" target="_blank">
      <span class="text-white">About us</span>
    </router-link>
        </section>
        <section class="flex justify-center space-x-5">
        <loginNavButtonComponent/>
        <signupNavButtonComponent/>
        </section>

        

    <!--     <section class="h-[52px] w-[52px] ">
      
        <img src="../assets/Ellipse 1.png" />
      
    </section> -->
      </div>
    </div>
  </div>
</template>
<style scoped></style>
