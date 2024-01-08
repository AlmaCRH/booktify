<template>
  <div
    class="bg-[url('./assets/coverHome.jpeg')] bg-cover bg-center flex h-36 w-auto items-center justify-center flex-col"
  >
    <h3 class="w-28 text-3xl shadow">Booktify</h3>
    <span class="w-52">Unravel the secret of books</span>
  </div>

  <div class="h-screen bg-black">
    <section>
      <h3 class="text-white">
        Discover the horrors, made their knowledge yours.
      </h3>
      <loginNavButtonComponent />
      <SignupNavButtonComponent />
    </section>

    <section>
      <h3 class="text-white">Genres</h3>
      <span class="text-white" v-for="genre in allGenres">{{
        " " + genre + ","
      }}</span>
    </section>
  </div>
</template>

<script setup>
import loginNavButtonComponent from "../components/loginNavButtonComponent.vue";
import SignupNavButtonComponent from "../components/signupNavButtonComponent.vue";
import { allGenres } from "../data/genresData";
</script>

<style scoped></style>
