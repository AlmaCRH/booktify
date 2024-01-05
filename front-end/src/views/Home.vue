<template>
  <div
    class="bg-[url('./assets/coverHome.jpeg')] bg-cover bg-center opacity-60 h-36 w-auto"
  ></div>
  <h3 class="absolute top-28 left-0 right-0 mr-auto ml-auto w-28 text-3xl">Booktify</h3>
  <span class="absolute top-36 left-0 right-0 mr-auto ml-auto w-52">Unravel the secret of books</span>
  <div class="h-screen bg-black">
   <section>
    <h3 class="text-white">Discover the horrors, made their knowledge yours. </h3>
    <loginNavButtonComponent/>
    <SignupNavButtonComponent/>
   </section>

    <section>
    <h3>Genres</h3>
    <span v-for="genre in allGenres">{{ " " + genre + "," }}</span> 
  </section>
  </div>
 
</template>

<script setup>
import loginNavButtonComponent from "../components/loginNavButtonComponent.vue"
import SignupNavButtonComponent from "../components/signupNavButtonComponent.vue";
import {allGenres} from "../data/genresData"

</script>

<style scoped></style>
