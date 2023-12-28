<script setup>
import { getAllBooks } from "../services/booksService";
import { ref, onMounted } from "vue";
import dividerComponent from "./dividerComponent.vue";
const books = ref();

onMounted(async () => {
  books.value = await getAllBooks();
});
</script>

<template>
  <div class="flex bg-black h-screen">
    <div class="flex-col flex items-center" v-for="(book, idx) in books" :key="idx">
      <img class="w-[127px] h-[153px] border-4 border-green" src="../assets/cover.jpeg" />
      <dividerComponent />
      <h3 class="text-center">{{ book.title }}</h3>
      <span v-for="(genre, idx) in book.genres" :key="idx">
        {{ genre }} <br />
      </span>
      <span>{{ book.publisher }}</span>
    </div>
  </div>
</template>

<style scoped></style>
