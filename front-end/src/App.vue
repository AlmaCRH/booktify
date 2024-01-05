<script setup>
import navBarComponent from "./components/navBarComponent.vue";
import footerComponent from "./components/footerComponent.vue";
</script>

<template>
  <navBarComponent />
  <router-view/>
  <footerComponent/>
</template>

<style scoped></style>
