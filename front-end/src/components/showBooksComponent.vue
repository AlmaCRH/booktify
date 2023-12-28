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
  <div class="grid grid-cols-2 place-items-center bg-black">
    <div class="" v-for="(book, idx) in books" :key="idx">
      <img class="w-[127px] h-[163px] border-4 border-green mb-1" :src=book.cover_image />
      
      <h3 class="text-center text-white">{{ book.title }}</h3>
      <dividerComponent />
    </div>
  </div>
</template>

<style scoped></style>
