<template>
  <div
    ref="scrollTarget"
    class="scrollable-container relative flex flex-col w-full  h-[450vh]"
  >
    <div
      class="sticky-section sticky top-0 w-full h-auto flex flex-col justify-center items-center"
    >
      <!-- Layer 1 -->
      <div
        class="opacity-0 section-title-layer-1 w-full h-screen text-center flex justify-center items-center"
      >
        <h1 class="section-title-top-layer-1 text-6xl font-bold font-title">
          Más allá de diseño: <br>
          <span
            class="section-title-bottom-layer-1 inline-block font-accent italic font-semibold"
          >
            Esencia y transformación
          </span>
        </h1>
      </div>

      <!-- Layer 2 -->
      <div
        class="section-container-layer-2 w-full h-auto flex flex-col justify-center items-center"
      >
        <div class="section-grid-1 opacity-0 w-full h-screen mb-20">
          <div
            class="w-full h-full grid grid-cols-8 grid-rows-4 gap-4 place-items-center text-black"
          >
            <div class="w-full h-full col-span-4 row-span-2 rounded-2xl overflow-hidden">
              <NuxtImg 
              preload
              src="https://picsum.photos/400/200"
              loading="lazy"
              alt="Random"
              sizes="100vw md:100vw"
              class="w-full h-full object-cover"
              />
            </div>
            <div class="w-full h-full col-span-2 row-span-2 col-start-1 row-start-3 rounded-2xl overflow-hidden">
              <NuxtImg 
              preload
              src="https://picsum.photos/200/200"
              loading="lazy"
              alt="Random"
              sizes="100vw md:200px"
              class="w-full h-full object-cover"
              />
            </div>
            <div class="w-full h-full col-span-2 row-span-2 col-start-3 row-start-3 rounded-2xl overflow-hidden">
              <NuxtImg 
              preload
              src="https://picsum.photos/200/200"
              loading="lazy"
              alt="Random"
              sizes="100vw md:200px"
              class="w-full h-full object-cover"
              />
            </div>
            <div class="w-full h-full col-span-4 row-span-2 col-start-5 row-start-1 rounded-2xl overflow-hidden">
              <NuxtImg 
              preload
              src="https://picsum.photos/400/200"
              loading="lazy"
              alt="Random"
              sizes="100vw md:100vw"
              class="w-full h-full object-cover"
              />
            </div>
            <div class="w-full h-full col-span-4 row-span-2 col-start-5 row-start-3 rounded-2xl overflow-hidden">
              <NuxtImg 
              preload
              src="https://picsum.photos/400/200"
              loading="lazy"
              alt="Random"
              sizes="100vw md:100vw"
              class="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div class="section-grid-2 opacity-0 w-full h-screen">
          <div
            class="w-full h-full grid grid-cols-8 grid-rows-4 gap-4 place-items-center text-black"
          >
            <div class="w-full h-full col-span-4 row-span-2 rounded-2xl overflow-hidden">
              <NuxtImg 
              preload
              src="https://picsum.photos/400/200"
              loading="lazy"
              alt="Random"
              sizes="100vw md:100vw"
              class="w-full h-full object-cover"
              />
            </div>
            <div class="w-full h-full col-span-2 row-span-2 col-start-1 row-start-3 rounded-2xl overflow-hidden">
              <NuxtImg 
              preload
              src="https://picsum.photos/200/200"
              loading="lazy"
              alt="Random"
              sizes="100vw md:200px"
              class="w-full h-full object-cover"
              />
            </div>
            <div class="w-full h-full col-span-2 row-span-2 col-start-3 row-start-3 rounded-2xl overflow-hidden">
              <NuxtImg 
              preload
              src="https://picsum.photos/200/200"
              loading="lazy"
              alt="Random"
              sizes="100vw md:200px"
              class="w-full h-full object-cover"
              />
            </div>
            <div class="w-full h-full col-span-4 row-span-2 col-start-5 row-start-1 rounded-2xl overflow-hidden">
              <NuxtImg 
              preload
              src="https://picsum.photos/400/200"
              loading="lazy"
              alt="Random"
              sizes="100vw md:100vw"
              class="w-full h-full object-cover"
              />
            </div>
            <div class="w-full h-full col-span-4 row-span-2 col-start-5 row-start-3 rounded-2xl overflow-hidden">
              <NuxtImg 
              preload
              src="https://picsum.photos/400/200"
              loading="lazy"
              alt="Random"
              sizes="100vw md:100vw"
              class="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { scroll, animate } from "motion";

const scrollTarget = ref(null);
const ourWorkTimeline = [
  [
    ".section-title-layer-1",
    { opacity: [null, 1, 1], scale: [0.4, 1, 1] },
    { duration: 2, ease: [0.25, 0.46, 0.45, 0.94] },
  ],
  [
    ".section-title-layer-1",
    {
      x: [null, "-37%", "-37%", "-37%"],
      y: [null, "-24%", "-24%"],
      scale: [null, 0.6, 0.6],
    },
    { duration: 2.5, ease: "easeInOut", at: "-1" },
  ],
  [
    ".section-title-bottom-layer-1",
    { x: [null, "20px", "20px", "20px", "20px"] },
    { duration: 4, ease: "easeInOut", at: "<" },
  ],
  [
    ".section-grid-1",
    { opacity: [0, 1], y: ["-20%", "-60%"], x: ["100%", 0] },
    { duration: 1, ease: "easeInOut", at: "-3.8" },
  ],
  [
    ".section-grid-2",
    { opacity: [0, 1], y: ["-60%", "-60%"], x: ["-100%", 0] },
    { duration: 1, ease: "easeInOut", at: "+0.8" },
  ],
];

onMounted(() => {
  /* Scroll Animation */
  scroll(animate(ourWorkTimeline, { duration: 11 }), {
    target: scrollTarget.value,
    offset: ["-400px 0px", "end end"],
  });
});
</script>

<style scoped></style>
