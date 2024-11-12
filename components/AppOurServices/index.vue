<template>
  <div class="relative w-full h-full flex justify-center items-center gap-10">
    <div class="w-1/2 h-full flex flex-col justify-center gap-10">
      <h1 class="self-start font-title font-bold text-4xl leading-snug">
        Nuestras <br>
        Crisálidas
      </h1>
      <p class="self-start text-lg pr-60">
        Trabajamos bajo el concepto “one-Stop-Shop” ofreciendo servicios
        integrales que te ayudarán a optimizar costos y tiempos en tu proyecto.
      </p>
    </div>

    <!-- Divider -->
    <div class="absolute top-0 left-1/2 translate-x-[-50%] w-0.5 h-full bg-white bg-gradient-to-b  from-30% from-section-background-dark via-white to-70% to-section-background-dark" />
    <!-- Carousel -->
    <div
      class="w-1/2 h-full flex justify-center items-center gap-4"
    >
    <Swiper
    ref="swiperRef"
    class="w-full h-full"
    :direction="'vertical'"
    :modules="[SwiperAutoplay, SwiperEffectCreative]"
    :slides-per-view="1"
    :loop="true"
  >
    <SwiperSlide v-for="slide in slidesContent" :key="slide.id" >
      <AppOurServicesSlides 
        :title="slide.title"
        :description="slide.description"
        :tags="slide.tags"
      />
    </SwiperSlide>
  </Swiper>
    </div>
  </div>
</template>

<script setup>


const swiperRef = ref(null);

onMounted(() => {

  
});
const slidesContent = [
  {
    id: 1,
    title: "Animación",
    description: "La animación es un elemento para conectar dinámicamente con tu audiencia. Refleja el espíritu de tu marca a través del movimiento.",
    tags: ["Planificación de estrategias", "Diseño gráfico", "Brandig Emocional", "Identidad Visual Corporativa", "Identidad Verbal", "Packaging"],
  },
  {
    id: 2,
    title: "Frontend",
    description: "Es el desarrollo de la cara de tu página web o aplicación. Pensamos desde la aplicación visual a las necesidades de los usuarios.",
    tags: ["Planificación de estrategias", "Diseño gráfico", "Brandig Emocional", "Identidad Visual Corporativa", "Identidad Verbal", "Packaging"],
  },
  {
    id: 3,
    title: "Branding",
    description: "El branding es tu negocio. Planificamos como debe verse, comunicarse y todo lo que influya en la percepción de las personas sobre tu proyecto.",
    tags: ["Planificación de estrategias", "Diseño gráfico", "Brandig Emocional", "Identidad Visual Corporativa", "Identidad Verbal", "Packaging"],
  },
  {
    id: 4,
    title: "Backend",
    description: "El código detrás de tus plataformas, donde se sostiene la funcionalidad de todas las ideas que proyectaste para tus webs o aplicaciones.",
    tags: ["Planificación de estrategias", "Diseño gráfico", "Brandig Emocional", "Identidad Visual Corporativa", "Identidad Verbal", "Packaging"],
  },
]

</script>

<style></style>
