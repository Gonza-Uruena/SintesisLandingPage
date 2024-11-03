<template>
  <div
    ref="buttonHover"
    class="inline-flex items-center gap-2 relative cursor-pointer align-start"
  >
    <div
      class="w-14 h-14 rounded-full flex items-center justify-center cursor-pointer"
      :class="isHovered ? 'bg-[#6664da]' : 'bg-[#807EEC]'"
    >
      <ArrowRight class="w-8 h-8 text-white -rotate-45" />
    </div>
    <div
      class="pinch-effect absolute top-1/2 -translate-y-1/2 left-10 w-12 h-12 rounded-full"
    >
      <div class="w-full h-full pinch-effect-layer-1">
        <div class="w-full h-full pinch-effect-layer-2">
          <div
            class="w-full h-full rounded-full relative z-10"
            :class="isHovered ? 'bg-[#6664da]' : 'bg-[#807EEC]'"
          />
        </div>
      </div>
    </div>
    <div
      class="text-white font-title text-xl py-4 px-14 rounded-full"
      :class="isHovered ? 'bg-[#6664da]' : 'bg-[#807EEC]'"
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

<style scoped>
.pinch-effect-layer-1 {
  mask-image: radial-gradient(circle at 40% -10%, transparent 25%, black 5%);
  -webkit-mask-image: radial-gradient(
    circle at 40% -10%,
    transparent 25%,
    black 5%
  );
}
.pinch-effect-layer-2 {
  mask-image: radial-gradient(circle at 40% 110%, transparent 25%, black 5%);
  -webkit-mask-image: radial-gradient(
    circle at 40% 110%,
    transparent 25%,
    black 5%
  );
}
</style>
