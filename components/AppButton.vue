<template>
  <div
    ref="buttonHover"
    class="flex justify-center items-center gap-2 relative cursor-pointer"
  >
    <div
      class="w-16 h-16 rounded-full flex items-center justify-center cursor-pointer"
      :class="isHovered ? 'bg-[#6d6bd4]' : 'bg-[#807EEC]'"
    >
      <ArrowRight class="w-8 h-8" />
    </div>
    <div
      class="absolute top-1/2 -translate-y-1/2 left-12 w-12 h-12 rounded-full after:w-8 after:h-9 after:rounded-full after:bg-black after:absolute after:-bottom-7 after:left-1 before:w-8 before:h-9 before:rounded-full before:bg-black before:absolute before:-top-7 before:left-1"
      :class="isHovered ? 'bg-[#6d6bd4]' : 'bg-[#807EEC]'"
    />
    <div
      class="bg-[#807EEC] text-white font-title text-xl py-5 px-14 rounded-full"
      :class="isHovered ? 'bg-[#6d6bd4]' : 'bg-[#807EEC]'"
    >
      <slot />
    </div>
  </div>
</template>

<script setup>
import { ArrowRight } from "lucide-vue-next";
import { useElementHover } from "@vueuse/core";

const buttonHover = ref();
const isHovered = useElementHover(buttonHover);

</script>

<style></style>
