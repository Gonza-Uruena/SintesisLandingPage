<template>
  <div class="w-full h-screen flex justify-center">
  <div class="relative w-full h-screen flex justify-center items-center">
    <div class="w-full h-full flex flex-col justify-center gap-8 pl-[72px]">
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
      ref="scrollTarget"
      class="relative w-full h-full flex justify-center items-center px-44 mt-12 overflow-x-hidden overflow-y-auto scrollbar-hidden"
      @mouseenter="isHovering = true"
      @mouseleave="isHovering = false"
    >
      <div class="w-full h-[8000px] flex justify-center items-center">
        <div
          class="sticky-container sticky top-0 w-full h-screen flex justify-center items-center"
        >
          <div
            v-for="card in cardsContent"
            :id="'carousel-slide-' + card.id"
            :key="card.id"
            :class="card.id === 7 ? 'top-card' : 'starting-deck'"
            class="absolute w-80 h-96 flex justify-center items-center overflow-x-visible p-6"
          >
            <AppCard 
            @click="console.log('card number ' + n)" 
            :name="card.name"
            :role="card.role"
            :image="card.image"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script setup>
import { animate, scroll } from "motion";


const cardsContent = [
  {
    id: 1,
    name: "Abigail Bertelli",
    role: "UX Designer",
    image: "/img/Nuestro ADN/Abigail.png",
  },
  {
    id: 2,
    name: "Gonzalo Urueña",
    role: "FrontEnd Developer",
    image: "/img/Nuestro ADN/Gonzalo.png",
  },
  {
    id: 3,
    name: "Matias Loaiza",
    role: "Branding Designer",
    image: "/img/Nuestro ADN/Matias.png",
  },
  {
    id: 4,
    name: "Oriana Gomez",
    role: "FrontEnd Developer",
    image: "/img/Nuestro ADN/Oriana.png",
  },
  {
    id: 5,
    name: "Lucia Caponni",
    role: "Ux Designer",
    image: "/img/Nuestro ADN/Lucia.png",
  },
  {
    id: 6,
    name: "Emilia Marcatili",
    role: "Ux Writer",
    image: "/img/Nuestro ADN/Emilia.png",
  },
   {
    id: 7,
    name: "Rosario Daurat",
    role: "Graphic Designer",
    image: "/img/Nuestro ADN/Rosario.png",
  },

]

const scrollTarget = ref(null);
const isHovering = ref(false);
const ourADNCarousel = [
  [
    "#carousel-slide-8",
    {
      x: [0, "-60%", "-35%", "-35%", "-35%", "-35%", "-35%"],
      rotate: [0, -6, 0, -0, -0, -0, -0],
    },
    { duration: 0.45, ease: "easeInOut", },
  ],
  [
    ".starting-deck",
    {
      x: [0, "80%", "80%", "80%", "80%", "80%"],
      y: [0, "20%", "20%", "20%", "20%", "20%"],
      rotate: [0, 20, 20, 20, 20, 20],
      zIndex: [10],
    },
    { duration: 0.5, at: "<", ease: "easeInOut" },
  ],
  [
    "#carousel-slide-7",
    {
      x: [null, "-60%", "-35%", "-35%", "-35%", "-35%"],
      y: [null, 0, 0, 0, 0, 0],
      rotate: [null, -6, -0, -0, -0, -0],
      zIndex: [10],
    },
    { duration: 0.5, at: "-0.2", ease: "easeInOut" },
  ],
 
  [
    "#carousel-slide-6",
    {
      x: [null, "-60%", "-35%", "-35%", "-35%", "-35%"],
      y: [null, 0, 0, 0, 0, 0],
      rotate: [null, -6, -0, -0, -0, -0],
      zIndex: [9],
    },
    { duration: 0.5, at: "-0.2", ease: "easeInOut" },
  ],
  [
    "#carousel-slide-5",
    {
      x: [null, "-60%", "-35%", "-35%", "-35%", "-35%"],
      y: [null, 0, 0, 0, 0, 0],
      rotate: [null, -6, -0, -0, -0, -0],
      zIndex: [8],
    },
    { duration: 0.5, at: "-0.2", ease: "easeInOut" },
  ],
  [
    "#carousel-slide-4",
    {
      x: [null, "-60%", "-35%", "-35%", "-35%", "-35%"],
      y: [null, 0, 0, 0, 0, 0],
      rotate: [null, -6, -0, -0, -0, -0],
      zIndex: [7],
    },
    { duration: 0.5, at: "-0.2", ease: "easeInOut" },
  ],
  [
    "#carousel-slide-3",
    {
      x: [null, "-60%", "-35%", "-35%", "-35%", "-35%"],
      y: [null, 0, 0, 0, 0, 0],
      rotate: [null, -6, -0, -0, -0, -0],
      zIndex: [6],
    },
    { duration: 0.5, at: "-0.2", ease: "easeInOut" },
  ],
  [
    "#carousel-slide-2",
    {
      x: [null, "-60%", "-35%", "-35%", "-35%", "-35%"],
      y: [null, 0, 0, 0, 0, 0],
      rotate: [null, -6, -0, -0, -0, -0],
      zIndex: [5],
    },
    { duration: 0.5, at: "-0.2", ease: "easeInOut" },
  ],
  [
    "#carousel-slide-1",
    {
      x: [null, "-60%", "-35%", "-35%", "-35%", "-35%"],
      y: [null, 0, 0, 0, 0, 0],
      rotate: [null, -6, -0, -0, -0, -0],
      zIndex: [4],
    },
    { duration: 0.6, at: "-0.2", ease: "easeInOut" },
  ],
];

onMounted(() => {
  scroll(
    animate(ourADNCarousel, { duration: 11 }),
    {
      container: scrollTarget.value,
      offset: ["0px 0px", "end -200px"],
      condition: () => isHovering.value,
    }
  );
});
</script>

<style scoped>
.scrollbar-hidden {
  scrollbar-width: none; /*Firefox */
  -ms-overflow-style: none; /*Internet Explorer */
}

.scrollbar-hidden::-webkit-scrollbar {
  display: none; /*Chrome, Safari, and Opera */
}
</style>
