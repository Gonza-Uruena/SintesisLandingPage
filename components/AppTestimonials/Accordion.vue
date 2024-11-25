<template>
  <div class="flex gap-4">
    <div 
    v-for="(item, index) in items" 
    :key="index"
    class="w-full h-full flex flex-col justify-center items-center gap-4"
    >
      <slot :name="`card-${index}`">
        <div
          class="group relative w-56 h-32 overflow-hidden rounded-lg shadow-lg transition-all duration-500 ease-in-out hover:w-[30rem]"
          @mouseenter="hoveredIndex = index"
          @mouseleave="hoveredIndex = null"
        >
        <NuxtImg 
          loading="lazy"
          :src="item.imageUrl"
          :alt="item.title"
          class="w-56 h-32 object-fill transition-transform duration-500 group-hover:scale-110"
        />
          
          <div
            class="absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-500"
            :class="hoveredIndex === index ? 'opacity-100' : 'opacity-0'"
          />
          <div
            class="absolute top-0 left-56 w-64 h-full bg-pink-200 p-4 transition-transform duration-500 transform"
            :class="
              hoveredIndex === index ? 'translate-x-0' : 'translate-x-0'
            "
          >
            <h3 class="text-md font-bold font-title">{{ item.title }}</h3>
            <p class="text-sm text-gray-600 mb-2">{{ item.description }}</p>
            <h5 class="text-md font-bold font-title text-right">{{ item.author }}</h5>
          </div>
        </div>
      </slot>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const hoveredIndex = ref(null);

const items = [
  {
    imageUrl: "/img/Testimonials/Testimonial-img-3.png",
    title: "Mountain Landscape",
    author: "Gonzalo, Urueña",
    description:
      "A picturesque tropical beach with crystal clear waters, white sand",
  },
  {
    imageUrl: "/img/Testimonials/Testimonial-img-1.png",
    title: "City Skyline",
    author: "Gonzalo, Urueña",
    description:
      "A picturesque tropical beach with crystal clear waters, white sand",
  },
  {
    imageUrl: "/img/Testimonials/Testimonial-img-2.png",
    title: "Tropical Beach",
    author: "Gonzalo, Urueña",
    description:
      "A picturesque tropical beach with crystal clear waters, white sand",
  },
  {
    imageUrl: "/img/Testimonials/Testimonial-img-3.png",
    title: "Mountain Landscape",
    author: "Gonzalo, Urueña",
    description:
      "A picturesque tropical beach with crystal clear waters, white sand",
  },
  {
    imageUrl: "/img/Testimonials/Testimonial-img-4.png",
    title: "City Skyline",
    author: "Gonzalo, Urueña",
    description:
      "A picturesque tropical beach with crystal clear waters, white sand",
  },
  {
    imageUrl: "/img/Testimonials/Testimonial-img-5.png",
    title: "Tropical Beach",
    author: "Gonzalo, Urueña",
    description:
      "A picturesque tropical beach with crystal clear waters, white sand",
  },
  {
    imageUrl: "/img/Testimonials/Testimonial-img-1.png",
    title: "Tropical Beach",
    author: "Gonzalo, Urueña",
    description:
      "A picturesque tropical beach with crystal clear waters, white sand",
  },
];
</script>
<style></style>
