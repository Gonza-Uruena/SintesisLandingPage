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

    <AppSection class="bg-[#161616]">
      <div class="w-full mt-10 font-title">
        <h1>Hola soy un titulo</h1>
      </div>
      <div class="w-60 mt-10 self-start">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
        perferendis velit praesentium atque unde at alias commodi corrupti illum
        modi!
      </div>
    </AppSection>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
