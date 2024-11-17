<template>
  <div
    class="relative w-full h-auto mt-20 flex flex-col justify-center items-center gap-10"
  >
    <!-- Testimonials Overlay animation -->
    <div
      class="testimonials-layout-overlay absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center"
    >
      <AppTestimonialsOverlay />
    </div>

    <!-- Testimonials Layout -->
    <div
      class="testimonials-layoutw-full h-full flex flex-col justify-center items-center gap-4 overflow-hidden"
    >
      <!-- First Row -->
      <AppTestimonialsAccordion class="testimonials-row-1 opacity-0" />

      <!-- Second Row -->
      <AppTestimonialsAccordion class="testimonials-row-2 -ml-32 opacity-0">
        <template #card-2>
          <div class="testimonials-layout-card w-56 h-32 content-center">
            <h1 class="font-title font-bold text-5xl text-center">Historias</h1>
          </div>
        </template>
      </AppTestimonialsAccordion>

      <!-- Third Row -->
      <AppTestimonialsAccordion class="testimonials-row-3 opacity-0">
        <template #card-3>
          <div class="testimonials-layout-card w-56 h-32 content-center">
            <h1 class="font-title font-bold text-5xl text-center">Que</h1>
          </div>
        </template>
      </AppTestimonialsAccordion>

      <!-- Fourth Row -->
      <AppTestimonialsAccordion class="testimonials-row-4 ml-32 opacity-0">
        <template #card-4>
          <div class="testimonials-layout-card w-56 h-32 content-center">
            <h1 class="font-title font-bold text-5xl text-center">Inspiran</h1>
          </div>
        </template>
      </AppTestimonialsAccordion>

      <!-- Fifth Row -->
      <AppTestimonialsAccordion class="testimonials-row-5 ml-16 opacity-0" />
    </div>
  </div>
</template>

<script setup>
import { timeline, inView } from "motion";

const testimonialsTimeline = [
  [
    ".testimonial-overlay-card-3",
    {
      opacity: [0, 1, 1, 1, 1, 1],
      rotateY: [-90, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    },
    { duration: 1, easing: "ease-out" },
  ],
  [
    ".testimonial-overlay-card-2",
    {
      opacity: [0, 1, 1, 1, 1, 1],
      rotateY: [-90, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    },
    { duration: 1, easing: "ease-out", at: "-0.98" },
  ],
  [
    ".testimonial-overlay-card-4",
    {
      opacity: [0, 1, 1, 1, 1, 1],
      rotateY: [-90, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    },
    { duration: 1, easing: "ease-out", at: "-0.98" },
  ],
  [
    ".testimonial-overlay-card-1",
    {
      opacity: [0, 1, 1, 1, 1, 1],
      rotateY: [-90, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    },
    { duration: 1, easing: "ease-out", at: "-0.98" },
  ],
  [
    ".testimonial-overlay-card-5",
    {
      opacity: [0, 1, 1, 1, 1, 1],
      rotateY: [-90, -90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    },
    { duration: 1, easing: "ease-out", at: "-0.98" },
  ],

  /* Second Part */
  [
    ".testimonial-overlay-card-3",
    {
      x: ["0%", "-200%", "500%"],
      scale: [1, 1.4, 1],
      rotateY: [0, 90, 180, 90],
      opacity: [1, 1, 1, 1, 1, 0],
      transformOrigin: "center center",
    },
    { duration: 0.25, easing: "ease-in-out", at: "-0.85" },
  ],
  [
    ".testimonial-overlay-card-2",
    {
      x: ["0%", "200%", "-500%"],
      scale: [1, 1.4, 1],
      rotateY: [0, -90, -180, -90],
      opacity: [1, 1, 1, 1, 1, 0],
      transformOrigin: "center center",
    },
    { duration: 0.25, easing: "ease-in-out", at: "<" },
  ],
  [
    ".testimonial-overlay-card-4",
    {
      x: ["0%", "200%", "-500%"],
      scale: [1, 1.4, 1],
      rotateY: [0, -90, -180, -90],
      opacity: [1, 1, 1, 1, 1, 0],
      transformOrigin: "center center",
    },
    { duration: 0.25, easing: "ease-in-out", at: "<" },
  ],
  [
    ".testimonial-overlay-card-1",
    {
      x: ["0%", "-200%", "500%"],
      scale: [1, 1.4, 1],
      rotateY: [0, 90, 180, 90],
      opacity: [1, 1, 1, 1, 1, 0],
      transformOrigin: "center center",
    },
    { duration: 0.25, easing: "ease-in-out", at: "<" },
  ],
  [
    ".testimonial-overlay-card-5",
    {
      x: ["0%", "-200%", "500%"],
      scale: [1, 1.4, 1],
      rotateY: [0, 90, 180, 90],
      opacity: [1, 1, 1, 1, 1, 0],
      transformOrigin: "center center",
    },
    { duration: 0.25, easing: "ease-in-out", at: "<" },
  ],

  /* Third Part */
  [
    ".testimonials-row-3",
    {
      x: ["100%", 0],
      opacity: [0, 1, 1, 1],
    },
    { duration: 0.25, easing: "ease-in-out", at: "-0.09" },
  ],
  [
    ".testimonials-row-2",
    {
      x: ["-100%", 0],
      opacity: [0, 1, 1, 1],
    },
    { duration: 0.25, easing: "ease-in-out", at: "<" },
  ],
  [
    ".testimonials-row-4",
    {
      x: ["-100%", 0],
      opacity: [0, 1, 1, 1],
    },
    { duration: 0.25, easing: "ease-in-out", at: "<" },
  ],
  [
    ".testimonials-row-1",
    {
      x: ["100%", 0], 
      opacity: [0, 1, 1, 1],
    },
    { duration: 0.25, easing: "ease-in-out", at: "<" },
  ],
  [
    ".testimonials-row-5",
    {
      x: ["100%", 0],
      opacity: [0, 1, 1, 1],
    },
    { duration: 0.25, easing: "ease-in-out", at: "<" },
  ],
];

onMounted(() => {
  inView(".testimonial-overlay-card-1", () => {
    timeline(testimonialsTimeline, { duration: 8 });
  });
});
</script>

<style></style>
