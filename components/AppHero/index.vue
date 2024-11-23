<template>
  <div
    class="hero-container relativeflex flex-col md:flex-row justify-center items-center gap-4 text-center"
  >
    <div
      class="relative w-full h-full flex justify-center items-center flex-col px-10 text-section-background-light gap-8 z-50"
    >
      <h1
        class="hero-section opacity-0 font-title font-bold md:text-5xl lg:text-6xl leading-snug"
      >
        Diseñamos lo que amas, <br />
        impulsamos lo que soñas.
      </h1>
      <p
        class="hero-section opacity-0 md:px-20 lg:px-80 sm:text-xl md:text-2xl font-body mb-4"
      >
        Creamos puentes, no barreras.<br />
        Proporcionamos un enfoque humanizado, centrado en las personas y sus
        sueños.
      </p>

    </div>
    <!-- Masks background -->
    <!-- Masks smaller circle -->
    <div
      class="hero-section-mask-1 absolute top-0 left-0 w-full h-screen flex justify-center items-center flex-col text-white gap-8 z-30 brightness-100 saturate-100 overflow-hidden"
    >
      <div class="relative w-full h-full">
        <div
          v-for="image in heroImages"
          :key="image.id"
          :style="`z-index:${10 - image.id}`"
          class="absolute top-0 left-0 w-full h-full flex justify-center items-center flex-col"
        >
          <img
            :src="image.src"
            :alt="image.alt"
            :class="`hero-mask-img-${image.id}`"
            class="hero-mask opacity-0 scale-[1.2] w-[2732px] h-[2732px]"
          />
        </div>
      </div>
    </div>
    <!-- Masks middle circle -->
    <div
      class="hero-section-mask-2 absolute top-0 left-0 w-full h-screen flex justify-center items-center flex-col text-white gap-8 z-20 brightness-100 saturate-100 grayscale overflow-hidden"
    >
    <div class="relative w-full h-full">
      <div
          v-for="image in heroImages"
          :key="image.id"
          :style="`z-index:${10 - image.id}`"
          class="absolute top-0 left-0 w-full h-full flex justify-center items-center flex-col"
        >
          <img
            :src="image.src"
            :alt="image.alt"
            :class="`hero-mask-img-${image.id}`"
            class="hero-mask opacity-0 scale-[1.2] w-[2732px] h-[2732px]"
          />
        </div>
      </div>
    </div>
    <!-- Masks bigger circle -->
    <div
      class="hero-section-mask-3 absolute top-0 left-0 w-full h-screen flex justify-center items-center flex-col text-white gap-8 z-10 overflow-hidden"
    >
    <div class="relative w-full h-full">
        <div
          v-for="image in heroImages"
          :key="image.id"
          :style="`z-index:${10 - image.id}`"
          class="absolute top-0 left-0 w-full h-full flex justify-center items-center flex-col"
        >
          <img
            :src="image.src"
            :alt="image.alt"
            :class="`hero-mask-img-${image.id}`"
            class="hero-mask opacity-0 scale-[1.2] w-[2732px] h-[2732px]"
          />
        </div>
      </div>
    </div>
    <!-- Masks end -->

    <!-- Background scroll trigger -->
    <div
      class="absolute top-1/2 -translate-y-1/2 right-5 w-20 h-96 flex justify-center items-center flex-col text-white gap-8 z-50 overflow-hidden"
    >
      <div
        ref="heroScrollTarget"
        class="scroll-trigger w-full h-full scrollbar-hidden overflow-y-scroll overflow-x-hidden flex flex-col justify-center items-center"
      >
        <div class="scroll-trigger-container w-full h-[2000vh]">
          <div
            class="scroll-trigger-content w-full h-[2000vh] bg-pink-200"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { animate, stagger, scroll } from "motion";
import { useEventListener } from "@vueuse/core";

const heroScrollTarget = ref(null);
const heroImages = [
  {
    id: 1,
    src: "/img/Hero/Test1.jpg",
    alt: "Logo",
  },
   {
    id: 2,
    src: "/img/Hero/Test2.jpg",
    alt: "Logo",
  },
  {
    id: 3,
    src: "/img/Hero/Test3.jpg",
    alt: "Logo",
  },
  {
    id: 4,
    src: "/img/Hero/Test4.jpg",
    alt: "Logo",
  },
  {
    id: 5,
    src: "/img/Hero/Test5.jpg",
    alt: "Logo",
  },
   
]


useEventListener(heroScrollTarget, "scroll", () => {
  const element = heroScrollTarget.value;

  if (element.scrollTop >= element.scrollHeight - 400) {
    element.scrollTo({
      top: 1,
    });
  } else if (element.scrollTop <= 0) {
    element.scrollTo({
      top: element.scrollHeight - 401,
      
    });
  }
});

const heroAnimation = [
  [".hero-section", { opacity: [0, 1], y: [200, 0] }, { duration: 1 }],
  [
    ".hero-button",
    { opacity: [0, 1], scale: [0, 1] },
    { at: "-0.5", duration: 1 },
  ],
];

/* Animation Background */
const heroAnimationBackground = [

  /* First Image */
  [
    ".hero-mask-img-1",
    {
      rotate: [0, 360],
      scale: [1.2, 1.25, 1.2],
    },
    {
      duration: 1.5,
      ease: [0.42, 0, 0.58, 1],
      delay: stagger(0.05, { ease: [0.32, 0.23, 0.4, 0.9] }),
    },
  ],
  [
    ".hero-mask-img-2",
    {
      rotate: [0, 360],
      scale: [1.2, 1.25, 1.2],
      opacity: [0.01, 1],
    },
    {
      duration: 1.5,
      ease: [0.42, 0, 0.58, 1],
      delay: stagger(0.05, { ease: [0.32, 0.23, 0.4, 0.9] }),
      at: "<",
    },
  ],
  [
    ".hero-mask-img-1",
    {
      opacity: [1, 0],
    },
    {
      duration: 1.5,
      ease: [0.42, 0, 0.58, 1],
      delay: stagger(0.1, { ease: [0.32, 0.23, 0.4, 0.9] }),
      at: "<",
    },
  ],

  /* Second Image */
  [
    ".hero-mask-img-2",
    {
      rotate: [null, 720],
      scale: [1.2, 1.25, 1.2],
    },
    {
      duration: 1.5,
      ease: [0.42, 0, 0.58, 1],
      delay: stagger(0.05, { ease: [0.32, 0.23, 0.4, 0.9] }),
    },
  ],
  [
    ".hero-mask-img-3",
    {
      rotate: [0, 360],
      scale: [1.2, 1.25, 1.2],
      opacity: [0.01, 1],
    },
    {
      duration: 1.5,
      ease: [0.42, 0, 0.58, 1],
      delay: stagger(0.05, { ease: [0.32, 0.23, 0.4, 0.9] }),
      at: "<",
    },
  ],
  [
    ".hero-mask-img-2",
    {
      opacity: [1, 0],
    },
    {
      duration: 1.5,
      ease: [0.42, 0, 0.58, 1],
      delay: stagger(0.1, { ease: [0.32, 0.23, 0.4, 0.9] }),
      at: "<",
    },
  ],
    /* Third Image */
    [
    ".hero-mask-img-3",
    {
      rotate: [null, 720],
      scale: [1.2, 1.25, 1.2],
    },
    {
      duration: 1.5,
      ease: [0.42, 0, 0.58, 1],
      delay: stagger(0.05, { ease: [0.32, 0.23, 0.4, 0.9] }),
      
    },
  ],
  [
    ".hero-mask-img-4",
    {
      rotate: [0, 360],
      scale: [1.2, 1.25, 1.2],
      opacity: [0.01, 1],
    },
    {
      duration: 1.5,
      ease: [0.42, 0, 0.58, 1],
      delay: stagger(0.05, { ease: [0.32, 0.23, 0.4, 0.9] }),
      at: "<",
    },
  ],
  [
    ".hero-mask-img-3",
    {
      opacity: [1, 0],
    },
    {
      duration: 1.5,
      ease: [0.42, 0, 0.58, 1],
      delay: stagger(0.1, { ease: [0.32, 0.23, 0.4, 0.9] }),
      at: "<",
    },
  ],
  /* fourth Image */
  [
    ".hero-mask-img-4",
    {
      rotate: [null, 720],
      scale: [1.2, 1.25, 1.2],
    },
    {
      duration: 1.5,
      ease: [0.42, 0, 0.58, 1],
      delay: stagger(0.05, { ease: [0.32, 0.23, 0.4, 0.9] }),
    },
  ],
  [
    ".hero-mask-img-5",
    {
      rotate: [0, 360],
      scale: [1.2, 1.25, 1.2],
      opacity: [0.01, 1],
    },
    {
      duration: 1.5,
      ease: [0.42, 0, 0.58, 1],
      delay: stagger(0.05, { ease: [0.32, 0.23, 0.4, 0.9] }),
      at: "<",
    },
  ],
  [
    ".hero-mask-img-4",
    {
      opacity: [1, 0],
    },
    {
      duration: 1.5,
      ease: [0.42, 0, 0.58, 1],
      delay: stagger(0.1, { ease: [0.32, 0.23, 0.4, 0.9] }),
      at: "<",
    },
    ],
    /* Fifth Image / reset */
    [
    ".hero-mask-img-5",
    {
      rotate: [null, 720],
      scale: [1.2, 1.25, 1.2],
    },
    {
      duration: 1.5,
      ease: [0.42, 0, 0.58, 1],
      delay: stagger(0.05, { ease: [0.32, 0.23, 0.4, 0.9] }),
    },
  ],
  [
    ".hero-mask-img-1",
    {
      rotate: [0, 360],
      scale: [1.2, 1.25, 1.2],
      opacity: [0.01, 1],
    },
    {
      duration: 1.5,
      ease: [0.42, 0, 0.58, 1],
      delay: stagger(0.05, { ease: [0.32, 0.23, 0.4, 0.9] }),
      at: "<",
    },
  ],
  [
    ".hero-mask-img-5",
    {
      opacity: [1, 0],
    },
    {
      duration: 1.5,
      ease: [0.42, 0, 0.58, 1],
      delay: stagger(0.1, { ease: [0.32, 0.23, 0.4, 0.9] }),
      at: "<",
    },
    ],
];

onMounted(() => {
  animate(heroAnimation, {
    duration: 1,
  });
  scroll(animate(heroAnimationBackground), {
    container: heroScrollTarget.value,
    offset: ["start start", "end 401px"],
  });
});
</script>

<style scoped>
.hero-section-mask-1 {
  clip-path: circle(27% at 50% 50%);
  display: flex;
  justify-content: center;
  align-items: center;
}
.hero-section-mask-2 {
  clip-path: circle(50% at 50% 50%);
  display: flex;
  justify-content: center;
  align-items: center;
}
.hero-section-mask-3 {
  clip-path: circle(100% at 50% 50%);
  display: flex;
  justify-content: center;
  align-items: center;
}
.scrollbar-hidden {
  scrollbar-width: none; /*Firefox */
  -ms-overflow-style: none; /*Internet Explorer */
}

.scrollbar-hidden::-webkit-scrollbar {
  display: none; /*Chrome, Safari, and Opera */
}
</style>
