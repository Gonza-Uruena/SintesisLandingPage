<template>
  <div
    ref="scrollTarget"
    class="relative w-full h-[450vh]"
  >
  <div class="sticky top-0 w-full h-screen flex justify-center items-center gap-10">
    <div class="our-services-left-container w-1/2 h-full flex flex-col justify-center gap-6">
      <h1 class="self-start font-title font-bold text-4xl leading-snug">
        Nuestras <br>
        Crisálidas
      </h1>
      <p class="self-start">
        Trabajamos bajo el concepto “one-Stop-Shop” <br>
         ofreciendo servicios integrales que te ayudarán <br>
          a optimizar costos y tiempos en tu proyecto.
      </p>
    </div>

    <!-- Divider -->
    <div
      class="absolute top-0 left-1/2 translate-x-[-50%] w-0.5 h-screen bg-white bg-gradient-to-b from-30% from-section-background-dark via-white to-70% to-section-background-dark"
    />
    <!-- Carousel -->
    <div class="our-services-right-container opacity-0 w-1/2 h-full flex flex-col items-center mt-96 gap-40">
      <div v-for="slide in slidesContent" :key="slide.id" class="w-full h-full">
        <AppOurServicesSlides
          :id="'slide-item' +slide.id"
          :title="slide.title"
          :description="slide.description"
          :tags="slide.tags"
        />
      </div>
    </div>
  </div>
    
  </div>
</template>

<script setup>
import { animate, scroll } from "motion";

const scrollTarget = ref(null);
const ourServicesTimeline = [
  [
     ".our-services-right-container ",
    { opacity: [0,1,1,1, 1,1,1,1], y: ["20%","0%","-63%","-127%","-197%", "-268%"] },
    { duration: 1, ease: "easeOut" }, 
  ],
  [
     ".our-services-left-container ",
    { opacity: [0,1,1,1, 1,1,1,1], x: ["-30%","0%","0%","0%","0%","0%","0%", "0%"] },
    { duration: 1, ease: "easeInOut", at: "<" }, 
  ],

];

onMounted(() => {
  scroll(animate(ourServicesTimeline, { duration: 11 }), {
    target: scrollTarget.value,
    offset: ["-150px 0px", "end end"],
  });
});

const slidesContent = [
  {
    id: 1,
    title: "Animación",
    description:
      "La animación es un elemento para conectar dinámicamente con tu audiencia. Refleja el espíritu de tu marca a través del movimiento.",
    tags: [
      "Planificación de estrategias",
      "Diseño gráfico",
      "Brandig Emocional",
      "Identidad Visual Corporativa",
      "Identidad Verbal",
      "Packaging",
    ],
  },
  {
    id: 2,
    title: "Frontend",
    description:
      "Es el desarrollo de la cara de tu página web o aplicación. Pensamos desde la aplicación visual a las necesidades de los usuarios.",
    tags: [
      "Planificación de estrategias",
      "Diseño gráfico",
      "Brandig Emocional",
      "Identidad Visual Corporativa",
      "Identidad Verbal",
      "Packaging",
    ],
  },
  {
    id: 3,
    title: "Branding",
    description:
      "El branding es tu negocio. Planificamos como debe verse, comunicarse y todo lo que influya en la percepción de las personas sobre tu proyecto.",
    tags: [
      "Planificación de estrategias",
      "Diseño gráfico",
      "Brandig Emocional",
      "Identidad Visual Corporativa",
      "Identidad Verbal",
      "Packaging",
    ],
  },
  {
    id: 4,
    title: "Backend",
    description:
      "El código detrás de tus plataformas, donde se sostiene la funcionalidad de todas las ideas que proyectaste para tus webs o aplicaciones.",
    tags: [
      "Planificación de estrategias",
      "Diseño gráfico",
      "Brandig Emocional",
      "Identidad Visual Corporativa",
      "Identidad Verbal",
      "Packaging",
    ],
  },
  {
    id: 4,
    title: "Marketing",
    description:
      "El código detrás de tus plataformas, donde se sostiene la funcionalidad de todas las ideas que proyectaste para tus webs o aplicaciones.",
    tags: [
      "Planificación de estrategias",
      "Diseño gráfico",
      "Brandig Emocional",
      "Identidad Visual Corporativa",
      "Identidad Verbal",
      "Packaging",
    ],
  },
];



</script>

<style></style>
