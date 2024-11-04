<template>
  <div class="w-full h-auto">
    <!---- AppNavBar ----->
    <div class="nav-bar fixed w-full top-0 left-0 h-16">
      <AppNavBar :items="navItems" />
    </div>

    <!---- AppContent ----->
    <div class="flex justify-center flex-col w-full h-full">
      <slot />
    </div>

    <!---- AppFooter ----->

    <!--  <div>
      <AppFooter />
    </div>
 -->
  </div>
</template>

<script lang="ts" setup>
import { animate } from "motion";
const navItems = [
  { label: 'Proyectos en Acción', href: '/' },	
  { label: 'Nuestro ADN', href: '/' },
  { label: 'Soluciones Creativas', href: '/' },
  { label: 'Hablemos', href: '/' },
]

onMounted(() => {
    animate(".nav-bar", 
      {
        opacity: [0, 1],
        y: [-100, 0],
      },
      {
        duration: 0.8,
        delay: 0.5,
        easing: "ease-in-out",
      });
  });

</script>

<style scoped>
.nav-bar{
  z-index: 999;
}
</style>
