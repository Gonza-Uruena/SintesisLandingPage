<template>
  <div class="w-full h-full flex justify-center items-center flex-col">
    <!-- Hero section -->
    <AppSection class="bg-black h-screen">
      <Suspense>
        <template #default>
          <AppHero />
        </template>
        <template #fallback>
          <div>Loading...</div>
        </template>
      </Suspense>
    </AppSection>
    <!-- Proyectos en acción -->

    <AppSection
      class="bg-section-background-dark text-white px-[72px] py-20 mb-20"
    >
      <Suspense>
        <template #default>
          <AppOurWorks />
        </template>
        <template #fallback>
          <div>Loading...</div>
        </template>
      </Suspense>
    </AppSection>

    <!-- Nuestro ADN -->

    <AppSection
      class="bg-section-background-light text-white -mt-96 mb-20"
    >
      <Suspense>
        <template #default>
          <AppOurADN />
        </template>
        <template #fallback>
          <div>Loading...</div>
        </template>
      </Suspense>
    </AppSection>

    <!-- Nuestras Crisalidas -->

    <AppSection class="bg-section-background-dark text-white px-[72px]">
      <Suspense>
        <template #default>
          <AppOurServices />
        </template>
        <template #fallback>
          <div>Loading...</div>
        </template>
      </Suspense>
    </AppSection>

    <!-- Testimonials -->

    <AppSection class="bg-section-background-light text-black mb-20">
      <Suspense>
        <template #default>
          <AppTestimonials />
        </template>
        <template #fallback>
          <div>Loading...</div>
        </template>
      </Suspense>
    </AppSection>

    <!-- Hablemos -->

    <AppSection class="bg-section-background-light text-black px-[72px] mb-20">
      <Suspense>
        <template #default>
          <AppLetsTalk />
        </template>
        <template #fallback>
          <div>Loading...</div>
        </template>
      </Suspense>
    </AppSection>  

  </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from "vue";

const AppHero = defineAsyncComponent(
  () => import("../components/AppHero/index.vue")
);
const AppOurWorks = defineAsyncComponent(
  () => import("../components/AppOurWorks/index.vue")
);
const AppOurADN = defineAsyncComponent(
  () => import("../components/AppOurADN/index.vue")
);
const AppOurServices = defineAsyncComponent(
  () => import("../components/AppOurServices/index.vue")
);
const AppLetsTalk = defineAsyncComponent(
  () => import("../components/AppLetsTalk/index.vue")
);
const AppTestimonials = defineAsyncComponent(
  () => import("../components/AppTestimonials/index.vue")
);
</script>

<style></style>
