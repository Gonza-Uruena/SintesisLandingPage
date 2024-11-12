
<template>
  <div ref="scrollTarget" class="relative w-full h-[3000px]">
    <div
      class="sticky top-0 w-full h-screen grid grid-cols-2 gap-10 place-items-center"
    >
      <!-- Overlay Text -->
      <div
        class="overlay-text-container col-start-1 col-end-3 row-start-1 w-full h-full z-30 bg-section-background-light text-black flex justify-center items-center"
      >
        <h1
          class="overlay-text opacity-0 text-black text-7xl leading-tight font-title font-semibold text-center"
        >
          Los que <br>
          Los que transforman
        </h1>
      </div>
      <!-- Overlay Image -->
      <div
        class="overlay-image opacity-0 rounded-xsm col-start-1 col-end-3 row-start-1 w-screen h-full z-20 text-black flex justify-center items-center overflow-hidden"
      >
        <img
          src="/public/img/Nuestro ADN/LosQueTransforman.jpg"
          alt="Fotografia grupal de los integrantes"
          class="w-full h-full rounded-xl overflow-hidden object-cover pt-20"
        >
      </div>

      <!-- Section -->
      <div
        class="section-container col-start-1 col-end-3 row-start-1 w-full h-full z-10 flex justify-center items-center"
      >
        <div class="w-3/6 h-full flex flex-col justify-center gap-8 pr-10">
          <h1
            class="text-black text-5xl leading-tight font-title font-semibold"
          >
            Los que <br>
            transforman
          </h1>
          <p class="text-black text-xl font-body">
            Síntesis nació con una visión clara sobre transformar ideas y sueños
            en empresas con aspiración. Colaboramos para transformar ideas en
            experiencias que resuenan con la esencia de quienes las viven.
          </p>
        </div>
        <div class="section-image opacity-0 w-4/6 h-auto flex justify-center items-center">
          <img
            src="/public/img/Nuestro ADN/LosQueTransforman.jpg"
            alt="Fotografia grupal de los integrantes"
            class="w-full h-full rounded-xl object-contain"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { timeline, scroll } from "motion";

const scrollTarget = ref(null);
const ourADNTimeline = [
  [
    ".overlay-text",
    {
      opacity: [0, 1, 1, 1, 1, 1],
      y: ["-150%", "-100%", "-50%", "-30%", "-10%", 0],
    },
    { duration: 4, easing: "ease-in-out" },
  ],
  [
    ".overlay-text-container",
    {
      opacity: [1, 1, 1, 1, 0, 0],
      x: [0, "10%", "30%", "70%", "100%", "150%"],
    },
    { duration: 4, easing: "ease-in-out" },
  ],
  [
    ".overlay-image",
    {
      opacity: [0, 1, 1, 1, 1, 1],
      x: ["-150%", "-100%", "-70%", "-30%", "-10%", 0],
    },
    { duration: 4, easing: "ease-in-out", at: "<" },
  ],
  [
    ".overlay-image",
    {
      scaleX: [1, 0.8, 0.635, 0.535, 0.535],
      scaleY: [1,0.8, 0.633,0.533, 0.533],
       x: [null, null, null, "+10.25%", "+20.25%"],
      y: [null, null, null, "-2.5%", "-3.5%"],
    },
    { duration: 4, easing: "ease-in-out", at: "+1.5" },
  ],
  [
    ".section-container",
    { opacity: [0, 1, 1, 1, 1, 1] },
    { duration: 6, easing: "ease-in-out", at: "-2" },
  ],
   [
    ".section-image",
    { opacity: [0, 1, 1, 1, 1, 1] },
    { duration: 6, easing: "ease-in-out", at: "-4.9" },
  ],
  


];

onMounted(() => {
  /* Scroll Animation */
  scroll(timeline(ourADNTimeline, { duration: 11 }), {
    target: scrollTarget.value,
    offset: ["-400px 0px", "end 10px"],
  });
});
</script>

<style></style>
