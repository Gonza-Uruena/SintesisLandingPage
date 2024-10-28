<template>
  <ClientOnly>
    <nav v-if="isDesktop" class="bg-black p-4">
      <div class="container mx-auto flex items-center">
        <div class="text-white text-lg font-semibold">
          <img src="/public/img/LogoDesktop.png" alt="Logo" class="w-30 h-12">
        </div>

        <div class="flex space-x-4 ml-24">
          <a
            v-for="(item, index) in items"
            :key="index"
            :href="item.href"
            class="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
          >
            {{ item.label }}
          </a>
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
</script>

<style></style>
