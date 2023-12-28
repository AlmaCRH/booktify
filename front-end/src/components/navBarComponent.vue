<script setup>
import {ref} from "vue"
const show = ref(false)

const toggle = () => {
    console.log(show)
    show.value = !show.value
}
</script>

<template>
  <div class="h-[69px] flex justify-center items-center space-x-60 bg-black sm:bg-olivine">
    <section class="h-[52px] w-[52px]">
      <img src="../assets/Ellipse 1.png" />
    </section>
    <section @click="toggle" class="h-[22px] w-[39.2px]">
        <img  src="../assets/Menu Icon.png">
         
    </section>
    <!-- Here goes the menu -->
    <span v-show="show" class="absolute">AAAAAAA</span>
   
    
  </div>
 
</template>

<style scoped></style>
