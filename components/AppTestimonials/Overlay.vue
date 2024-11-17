<template>
  <div
    class="testimonial-overlay-content w-full h-full flex flex-col justify-center items-center gap-4"
  >
    <div
      v-for="n in 5"
      :key="n"
      :class="`testimonial-overlay-card-${n}`"
      class="relative w-56 h-32 bg-pink-200 rounded-xl opacity-0"
    >
      <NuxtImg
        preload
        loading="lazy"
        :src="`/img/Testimonials/Testimonial-img-${n}.png`"
        alt="Testimonial-img-1"
        class="w-56 h-32 object-fill"
      />
    </div>
  </div>
</template>

<script setup>

</script>

<style></style>
