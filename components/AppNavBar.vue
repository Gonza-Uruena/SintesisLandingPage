<template>
  <ClientOnly>
    <nav v-if="isDesktop" class="bg-transparent p-4">
      <div class="container mx-auto flex items-center">
        <div
          class="text-white flex justify-center items-center text-lg font-semibold gap-4"
        >
          <img src="/public/img/Logo.svg" alt="Logo" class="nav-bar-logo w-full h-10" >
        </div>
        <div class="nav-bar-items w-auto h-full flex items-center">
          <img src="/public/img/LogoName.svg" alt="Logo" class="w-32 h-10" >
          <div
            class="flex space-x-4 ml-32 bg-section-background-light rounded-full px-16 py-1"
          >
            <a
              v-for="(item, index) in items"
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

    <!-- Mobile Navbar -->
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
          <!-- Accesibility stuff -->
          <DrawerTitle class="hidden">NavBar </DrawerTitle>
          <DrawerDescription class="hidden"> NavBar items </DrawerDescription>
          <!-- --- -->

          <div class="flex flex-col gap-1">
            <a
              v-for="(item, index) in items"
              :key="index"
              :href="item.href"
              class="text-black bg-slate-400 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              {{ item.label }}
            </a>
          </div>
        </DrawerContent>
      </Drawer>
    </nav>
  </ClientOnly>
</template>

<script lang="ts" setup>
import { useMediaQuery } from "@vueuse/core";
import { Menu } from "lucide-vue-next";

const isDesktop = useMediaQuery("(min-width: 1024px)");

interface NavItem {
  label: string;
  href: string;
}
const props = defineProps<{
  items: NavItem[];
}>();

const defaultItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const items = props.items ?? defaultItems;

 /* Animation */



</script>

<style scoped>
.nav-background {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
