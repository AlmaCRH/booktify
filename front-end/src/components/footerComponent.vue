<template>
  <div class="bg-footer">
    <router-link :to="{ name: 'AboutUs' }"><span class="text-white">About us</span>  </router-link>
    <router-link :to="{ name: 'Github' }" target="_blank"><span class="text-white">Github</span>  </router-link>
    <router-link :to="{ name: 'Linkedin' }" target="_blank">
      <span class="text-white">Author</span>
    </router-link>
    <img src="../assets/Ellipse 1.png" />
  </div>
</template>

<script setup></script>

<style scoped></style>
