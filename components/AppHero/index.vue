<template>
  <div
        class="flex flex-col md:flex-row justify-center items-center gap-4 text-center"
      >
        <div
          class="w-full h-full flex justify-center items-center flex-col px-10 text-white gap-8"
        >
          <h1 class="hero-section opacity-0 font-title font-bold md:text-5xl lg:text-6xl leading-snug">
            Diseñamos lo que amas, <br>
            impulsamos lo que soñas.
          </h1>
          <p class="hero-section opacity-0 md:px-20 lg:px-80 sm:text-xl md:text-2xl font-body mb-4">
            Creamos puentes, no barreras.<br>
            Proporcionamos un enfoque humanizado, centrado en las personas y sus
            sueños.
          </p>
<!--           <AppButton 
          class="hero-button opacity-0"
          @click="console.log('hola')"> 
            Transformemos
          </AppButton> -->
        </div>
      </div>
</template>

<script setup>
import { animate } from "motion";

 const heroAnimation = [
  [".hero-section", { opacity: [0, 1], y: [200, 0] }, {duration: 1}],
  [".hero-button", { opacity: [0, 1], scale: [0, 1] }, { at: '-0.5', duration: 1 }],

 ]
onMounted(async () => {
  animate(heroAnimation , {
    duration: 1})

  });

</script>

<style>

</style>