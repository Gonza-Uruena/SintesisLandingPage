<template>
  <div
    ref="scrollTarget"
    class="relative w-full h-[8000px] flex justify-center"
  >
    <div
      class="sticky-container sticky top-0 w-full h-screen flex justify-center items-center"
    >
      <div class="w-3/6 h-full flex flex-col justify-center gap-8">
        <h1 class="text-black text-4xl leading-tight font-title font-semibold">
          Nuestra <br>
          cultura
        </h1>
        <p class="text-black font-body">
          Somos un grupo de profesionales que valoran la <br>
          creatividad y entusiasmo a la hora de crear. <br>
          Combinamos distintos talentos para formar los <br>
          equipos indicados para cada proyecto.
        </p>
      </div>
      <div
        class="relative w-3/6 h-full flex justify-center items-center px-32 mt-12 ml-80"
      >
        <div
          v-for="n in 8"
          :id="'carousel-slide-' + n"
          :key="n"
          :class="n === 8 ? 'top-card' : 'starting-deck'"
          class="absolute w-80 h-96 flex justify-center items-center"
        >
          <AppCard @click="console.log('card number ' + n)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { timeline, scroll } from "motion";

const scrollTarget = ref(null);
const ourADNCarousel = [
  [
    "#carousel-slide-8",
    {
      x: [0, "-60%", "-35%", "-35%", "-35%", "-35%", "-35%"],
      rotate: [0, -10, 0, -0, -0, -0, -0],
    },
    { duration: 0.45, easing: "ease-in-out" },
  ],
  [
    ".starting-deck",
    {
      x: [0, "80%", "80%", "80%", "80%", "80%"],
      y: [0, "20%", "20%", "20%", "20%", "20%"],
      rotate: [0, 20, 20, 20, 20, 20],
      zIndex: [0, 0, 12, 12, 12, 10],
    },
    { duration: 0.5, at: "<", easing: "ease-in-out" },
  ],
  [
    "#carousel-slide-7",
    {
      x: [null, "-60%", "-35%", "-35%", "-35%", "-35%"],
      y: [null, 0, 0, 0, 0, 0],
      rotate: [null, -10, -0, -0, -0, -0],
      zIndex: [null, null, 1, 1, 1, 1],
    },
    { duration: 0.5, at: "-0.2", easing: "ease-in-out" },
  ],
  [
    "#carousel-slide-6",
    {
      x: [null, "-60%", "-35%", "-35%", "-35%", "-35%"],
      y: [null, 0, 0, 0, 0, 0],
      rotate: [null, -10, -0, -0, -0, -0],
      zIndex: [null, null, 2, 2, 2, 2],
    },
    { duration: 0.5, at: "-0.2", easing: "ease-in-out" },
  ],
  [
    "#carousel-slide-5",
    {
      x: [null, "-60%", "-35%", "-35%", "-35%", "-35%"],
      y: [null, 0, 0, 0, 0, 0],
      rotate: [null, -10, -0, -0, -0, -0],
      zIndex: [null, null, 3, 3, 3, 3],
    },
    { duration: 0.5, at: "-0.2", easing: "ease-in-out" },
  ],
  [
    "#carousel-slide-4",
    {
      x: [null, "-60%", "-35%", "-35%", "-35%", "-35%"],
      y: [null, 0, 0, 0, 0, 0],
      rotate: [null, -10, -0, -0, -0, -0],
      zIndex: [null, null, 4, 4, 4, 4],
    },
    { duration: 0.5, at: "-0.2", easing: "ease-in-out" },
  ],
  [
    "#carousel-slide-3",
    {
      x: [null, "-60%", "-35%", "-35%", "-35%", "-35%"],
      y: [null, 0, 0, 0, 0, 0],
      rotate: [null, -10, -0, -0, -0, -0],
      zIndex: [null, null, 5, 5, 5, 5],
    },
    { duration: 0.5, at: "-0.2", easing: "ease-in-out" },
  ],
  [
    "#carousel-slide-2",
    {
      x: [null, "-60%", "-35%", "-35%", "-35%", "-35%"],
      y: [null, 0, 0, 0, 0, 0],
      rotate: [null, -10, -0, -0, -0, -0],
      zIndex: [null, null, 6, 6, 6, 6],
    },
    { duration: 0.5, at: "-0.2", easing: "ease-in-out" },
  ],
  [
    "#carousel-slide-1",
    {
      x: [null, "-60%", "-35%", "-35%", "-35%", "-35%"],
      y: [null, 0, 0, 0, 0, 0],
      rotate: [null, -10, -0, -0, -0, -0],
      zIndex: [null, null, 7, 7, 7, 7],
    },
    { duration: 0.6, at: "-0.2", easing: "ease-in-out" },
  ],
];

onMounted(() => {
  scroll(timeline(ourADNCarousel, { duration: 11 }), {
    target: scrollTarget.value,
    offset: ["-300px 0px", "end -200px"],
  });
});
</script>

<style scoped></style>
