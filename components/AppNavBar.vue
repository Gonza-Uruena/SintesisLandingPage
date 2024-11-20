<template>
    <nav
    ref="logo"
    class="bg-transparent p-4">
      <div class="container mx-auto flex items-center">
        <div
          :class="[ isHidden ? 'logo-hidden' : 'logo-visible'], isHovered ? 'logo-visible' : 'logo-hidden'"
          class="nav-bar-logo text-section-background-light flex justify-center items-center text-lg font-semibold gap-4 z-40"
        >
          <img src="/public/img/Logo.svg" alt="Logo" class="w-full h-10" >
        </div>

        <div
        :class="[ isHidden ? 'items-hidden' : 'items-visible'], isHovered ? 'items-visible' : 'items-hidden'"
        class="nav-bar-items w-auto h-full flex items-center ml-2">
          <img src="/public/img/LogoName.svg" alt="Logo" class="w-28 h-10" >
          <div
            class="flex space-x-4 ml-32 bg-section-background-light rounded-full px-16 py-1"
          >
            <a
              v-for="(item, index) in props.items"
              :key="index"
              :href="item.href"
              class="text-black hover:bg-sintesis-light-blue hover:rounded-full px-3 py-2 text-sm font-medium"
            >
              {{ item.label }}
            </a>
          </div>
        </div>

      </div>
    </nav>

 <!--   Mobile Navbar
    <nav v-else class="bg-gray-100 p-4 h-12 flex justify-between items-center">
      <a href="/">
        <img src="/public/img/Logo.png" alt="Logo" class="w-6 h-6">
      </a>
      <Drawer direction="right">
        <DrawerTrigger>
          <Menu class="w-6 h-6" />
        </DrawerTrigger>
        <DrawerContent
          class="w-full ml-28 fixed inset-x-0 top-0 z-50 mt-0 flex h-auto flex-col rounded-t-[10px] border bg-background"
        >
          Accesibility stuff 
          <DrawerTitle class="hidden">NavBar </DrawerTitle>
          <DrawerDescription class="hidden"> NavBar items </DrawerDescription>
          

          <div class="flex flex-col gap-1">
            <a
              v-for="(item, index) in props.items"
              :key="index"
              :href="item.href"
              class="text-black bg-slate-400 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              {{ item.label }}
            </a>
          </div>
        </DrawerContent>
      </Drawer>
    </nav> -->
</template>

<script setup>
//import { useMediaQuery } from "@vueuse/core";
//import { Menu } from "lucide-vue-next";
import { animate } from "motion";
import { useWindowScroll, useElementHover } from '@vueuse/core'

//const isDesktop = useMediaQuery("(min-width: 1024px)");
const logo = ref(null)
const isHovered = useElementHover(logo)
const props  = defineProps({
  items: {
    type: Array,
    default: () => [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
})

/* Animation */

const isHidden = ref(false);
const lastScrollY = ref(0)
const { y } = useWindowScroll()

const handleScroll = (newY) => {
  if (newY > lastScrollY.value) {
    if (!isHidden.value) {
      isHidden.value = true
    }
  } else {
    if (isHidden.value) {
      isHidden.value = false
    }
  }
  
  lastScrollY.value = newY
}

onMounted(() => {
  // Watch the scroll position
  watch(y, handleScroll)
})

onUnmounted(() => {
  // Stop watching scroll position when the component is destroyed
  lastScrollY.value = 0
})

</script>

<style scoped>

.nav-bar-items{
  transform-origin: left center; 
  transition: all 0.4s cubic-bezier(0.28, -0.25, 0.27, 1.2);
}
.nav-bar-logo{
  transition: all 0.5s cubic-bezier(0.48, -0.25, 0.27, 1.2);
}
.nav-background {
  background-color: rgba(0, 0, 0, 0.5);
}


.logo-hidden {
  transform: rotate(-180deg);
}

.items-hidden {
  transform: scaleX(0) translateX(-80px);
  opacity: 0;
}

.items-visible {
  transform: scaleX(1);
  opacity: 1;
}

.logo-visible {
  transform: rotate(0deg);
  }
</style>
