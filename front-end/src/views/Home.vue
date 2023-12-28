<script setup>
import showBooksComponent from "../components/showBooksComponent.vue";
</script>

<template>
  <div
    class="bg-[url('./assets/coverHome.jpeg')] bg-cover bg-center opacity-60 h-36 w-auto"
  ></div>
  <h3 class=" absolute top-28 left-0 right-0 mr-auto ml-auto w-28 text-3xl">Booktify</h3>
  <span class=" absolute top-36 left-0 right-0 mr-auto ml-auto w-52">Unravel the secret of books</span>
  <showBooksComponent />
</template>

<style scoped></style>
