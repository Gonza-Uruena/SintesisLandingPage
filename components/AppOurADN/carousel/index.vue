<template>
  <div class="relative w-full max-w-3xl mx-auto">
    <div >
      <div
        class="carousel-container flex"
      >
      <div
        v-for="(position, index) in cardPositions"
        :key="index"
        class="carousel-item"
        :class="{
          'top-card': index === currentIndex && position === 'stack1',
          'stacked': position === 'stack1',
          'stacked-on-top': position === 'stack2',
          'slide-out': index === prevIndex && direction === 'next',
          'slide-in-reverse': index === prevIndex && direction === 'prev',
        }"
        :style="{ zIndex: slides - index }"
      >
        <!--    
          :class=" currentIndex === n ? 'animated-carousel-item' : ''"
        class="transition-transform duration-300 ease-in-out"
          :style="{ transform: `rotate(-${currentIndex * 100}deg)` }"  -->
          <AppCardVariant1
          class="w-72"
          />
        </div>
      </div>
    </div>
    <button
      class="absolute rotate-90 -left-14 top-32 transform -translate-y-1/2 bg-slate-400 bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 focus:outline-none z-50"
      @click="prev"
    >
      <ChevronLeftIcon class="w-6 h-6 text-gray-800" />
    </button>
    <button
      class="absolute rotate-90 -left-14 top-60 transform -translate-y-1/2 bg-slate-400 bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 focus:outline-none z-50"
      @click="next"
    >
      <ChevronRightIcon class="w-6 h-6 text-gray-800" />
    </button>
  </div>
</template>

<script setup>
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-vue-next";

/* const props = defineProps({
  images: {
    type: Array,
    required: true,
  },
  autoplay: {
    type: Boolean,
    default: true,
  },
  interval: {
    type: Number,
    default: 5000,
  },
}); */

const slides = 12;
const currentIndex = ref(0);
const prevIndex = ref(null);
const direction = ref(null);
const cardPositions = ref(Array(slides).fill("stack1")); 

const next = () => {
 

  direction.value = 'prev';
  prevIndex.value = currentIndex.value;

  // Move the current card back to stack1
  cardPositions.value[currentIndex.value] = "stack1";

  // Update currentIndex and wrap around if it goes below 0
  currentIndex.value = (currentIndex.value - 1 + slides) % slides;

  // Reset all cards to stack2 when the first card is reached
  if (currentIndex.value === slides - 1) {
    cardPositions.value = Array(slides).fill("stack2");
  }
};


const prev = () => {
  direction.value = 'next';
  prevIndex.value = currentIndex.value;
  // Move the current card to stack2
  cardPositions.value[currentIndex.value] = "stack2";
  // Update currentIndex and reset if it reaches the end
  currentIndex.value = (currentIndex.value + 1) % slides;

  if (currentIndex.value === 0) {
    // Reset all cards to stack1 when all cards have moved
    cardPositions.value = Array(slides).fill("stack1");
  }
};
/* const startAutoplay = () => {
  if (props.autoplay) {
    autoplayInterval = setInterval(next, props.interval);
  }
};

const stopAutoplay = () => {
  clearInterval(autoplayInterval);
};



onUnmounted(() => {
  stopAutoplay();
}); */

onMounted(() => {
  next();
  next();
});
</script>

<style scoped>

.carousel-container {
  position: relative;
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(10deg) translateX(65%);
}

.carousel-item {
  position: absolute;
  transition: transform 0.6s ease, opacity 0.6s ease;
}

.top-card {
  transform: translateX(0%) rotate(0deg);
  opacity: 1;
}

.stacked {
  /* Initial stack position styling */
  transform:  translateX(-100%) rotate(-10deg) ;
  opacity: 1;
}

.stacked-on-top {
  /* Styling for cards moved to the second stack */
  transform: translateY(0) rotate(0deg) translateX(0);
  opacity: 1;
}

.slide-out {
  /* Sliding out effect to move a card from stack1 to stack2 */
  transform: translateX(-100%) rotate(-10deg);
  opacity: 1;
}

.slide-in-reverse {
  /* Reverse slide effect */
  transform: translateX(-100%) rotate(-10deg);
  opacity: 1;
}
</style>
