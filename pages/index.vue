<template>
  <div class="w-full h-full flex justify-center items-center flex-col">
    <!-- Hero section -->
    <AppSection class="bg-black h-screen">
      <div
        class="flex flex-col md:flex-row justify-center items-center gap-4 text-center"
      >
        <div
          class="w-full h-full flex justify-center items-center flex-col px-10 text-white gap-8"
        >
          <h1 class="font-title font-bold md:text-5xl lg:text-6xl leading-snug">
            Diseñamos lo que amas, <br>
            impulsamos lo que soñas.
          </h1>
          <p class="md:px-20 lg:px-80 sm:text-xl md:text-2xl font-body mb-4">
            Creamos puentes, no barreras.<br>
            Proporcionamos un enfoque humanizado, centrado en las personas y sus
            sueños.
          </p>
          <AppButton @click="console.log('hola')"> 
            Transformemos
          </AppButton>
        </div>
      </div>
    </AppSection>
    <!-- Proyectos en acción -->

    <AppSection class="bg-[#161616] text-white px-8 mb-20">
      <AppOurWorks />
    </AppSection>

    <!-- Nuestro ADN -->

    <AppSection class="bg-white text-white px-8 mb-20">
      <AppOurADN />
    </AppSection>

    <!-- Nuestras Crisalidas -->

    <AppSection class="bg-[#161616] text-white">
      <div>
        Section
      </div>
    </AppSection>

        <!-- Hablemos -->

        <AppSection class="bg-[#161616] text-white">
      <div>
        Section
      </div>
    </AppSection>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
