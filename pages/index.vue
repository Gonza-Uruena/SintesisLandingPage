<template>
  <div class="w-full h-full flex justify-center items-center flex-col">
    <!-- Hero section -->
    <AppSection class="bg-black h-screen">
      <AppHero />
    </AppSection>
    <!-- Proyectos en acción -->

    <AppSection class="bg-section-background-dark text-white px-8 pt-20 mb-20">
      <AppOurWorks />
    </AppSection>

    <!-- Nuestro ADN -->

    <AppSection class="bg-section-background-light text-white px-8 mb-20">
      <AppOurADN />
    </AppSection>

    <!-- Nuestras Crisalidas -->

    <AppSection class="bg-section-background-dark h-screen text-white px-8">
      <AppOurServices />
    </AppSection>

        <!-- Hablemos -->

    <AppSection class=" bg-section-background-light text-black px-32 mb-20">
      <AppLetsTalk />
    </AppSection>
  </div>
</template>

<script lang="ts" setup>


</script>

<style></style>
