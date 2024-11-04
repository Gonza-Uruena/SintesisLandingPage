<template>
  <div
    class="relative our-work-container flex flex-col items-center w-full h-full gap-8 py-4"
  >
    <div
      v-show="isOverlayVisible"
      class="our-work-text-overlay sticky w-screen h-screen top-0 -left-8 flex justify-center items-center bg-section-background-dark z-50"
    >
      <h1
        class="our-work-text-anim opacity-0 text-2xl md:text-3xl lg:text-7xl font-semibold font-title text-center"
      >
        Más allá de diseño: <br>
        <span class="font-accent italic">Esencia y transformación.</span>
      </h1>
    </div>

    <h1
      class="sticky text-2xl md:text-3xl lg:text-4xl font-bold font-title self-start"
    >
      Más allá de diseño: <br>
      Esencia y transformación.
    </h1>
    <div class="w-full grid grid-cols-8 grid-rows-4 gap-4 place-items-center">
      <div
        class="our-work-text-anim-2 w-full h-full bg-slate-600 flex items-center justify-center col-start-1 row-start-1 col-span-4 row-span-2 z-20"
      >
        <img
          src="/public/img/Cards/TalhackBanner1.png"
          alt="Talhack Banner 1"
          class="w-full h-auto object-cover"
        >
      </div>
      <div
        class="w-full h-full bg-slate-400 flex items-center justify-center col-span-2 row-span-2 col-start-1 row-start-3 hover:col-span-8 hover:col-start-1 hover:row-start-1"
      >
        2
      </div>
      <div
        class="w-full h-full bg-slate-400 flex items-center justify-center col-span-2 row-span-2 col-start-3 row-start-3"
      >
        3
      </div>
      <div
        class="w-full h-full bg-slate-400 flex items-center justify-center col-span-4 row-span-2 col-start-5 row-start-1"
      >
        4
      </div>
      <div
        class="w-full h-full bg-slate-400 flex items-center justify-center col-span-4 row-span-2 col-start-5 row-start-3"
      >
        5
      </div>
    </div>
  </div>
  <!-- ------------------Starting Animation -------------------- -->
</template>

<script setup>
import { animate, inView, timeline } from "motion";

const isOverlayVisible = ref(true);

const overlayAnimation = [
  [
    ".our-work-text-anim",
    { transform: ["translateX(-50%)"], opacity: [1, 0] },
    { duration: 1, delay: 0.5, easing: "ease-in-out" },
  ],
  [
    ".our-work-text-overlay",
    { opacity: [1, 0] },
    { duration: 0.8, delay: 0.5, easing: "ease-in-out" },
  ],
];

onMounted(() => {
  inView(".our-work-text-anim", (info) => {
    animate(
      info.target,
      {
        opacity: [0, 1],
        scale: [0.4, 1],
      },
      {
        duration: 0.8,
        delay: 0.5,
        easing: "ease-in-out",
      }
    );
  });

  inView(
    ".our-work-text-anim-2",
    async () => {
      await timeline(overlayAnimation, { duration: 1 }).finished.then(() => {
        isOverlayVisible.value = false;
        console.log("finished");
      });
    },
    {
      margin: "0px 0px -20px 0px",
    }
  );
});
</script>

<style scoped>
.progress {
  position: fixed;
  left: 0;
  right: 0;
  height: 5px;
  background: red;
  bottom: 50px;
  transform: scaleX(0);
}
</style>
