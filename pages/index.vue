<template>
  <div class="w-full h-full flex justify-center items-center flex-col">
    <!-- Hero section -->
    <AppSection class="bg-black">
      <div class="flex flex-col md:flex-row justify-center items-center gap-4 text-center">
        <div
          class="w-full h-full flex justify-center items-center flex-col px-10 text-white gap-8"
        >
          <h1 class="font-title font-bold md:text-5xl lg:text-6xl leading-snug">
            Diseñamos lo que amas, <br> impulsamos lo que soñas.
          </h1>
          <p class="md:px-20 lg:px-80 sm:text-xl md:text-2xl font-body mb-4">
            Creamos puentes, no barreras.<br>
            Proporcionamos un enfoque humanizado, centrado en las personas y sus
            sueños.
          </p>
          <AppButton
            @click="console.log('hola')"
          > Transformemos </AppButton>
        </div>
      </div>
    </AppSection>
    <!-- --------------------------------------------------------------------------- -->

    <AppSection class="bg-[#161616] text-white min-h-screen">
      <div class="flex flex-col justify-center items-center w-full h-full mt-10 font-title">
        <h1 class="text-2xl md:text-5xl lg:text-6xl font-bold font-title">
          Más allá de diseño: <br> Esencia y transformación.
        </h1>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 place-items-center">
          <div class="">
           hola
          </div>
          <div class="">
           hola
          </div>
        </div>
      </div>
    </AppSection>
  </div>
</template>

<script lang="ts" setup>
</script>

<style></style>
