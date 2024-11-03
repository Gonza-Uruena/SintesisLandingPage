<template>
  <div class="w-full h-auto">
    <!---- AppNavBar ----->
    <div class="fixed w-full top-0 left-0 h-16 z-50">
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
const navItems = [
  { label: 'Proyectos en Acción', href: '/' },	
  { label: 'Nuestro ADN', href: '/' },
  { label: 'Soluciones Creativas', href: '/' },
  { label: 'Hablemos', href: '/' },
]
</script>

<style></style>
