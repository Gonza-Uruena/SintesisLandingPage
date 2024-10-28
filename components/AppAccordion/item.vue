<template>
  <AccordionItem :value="props.value">
    <AccordionTrigger class="h-20 md:h-14 relative rounded-t-md" :class="props.bgColor">
      <div class="static font-bold ml-3 md:-ml-1 md:h-10 md:w-28 md:-mt-[60px] z-10">
       {{props.title}}
      </div>
      <div
        class="absolute -top-6 right-0 md:left-0 h-10 w-28 rounded-xl"
        :class="props.bgColor"
      />
    </AccordionTrigger>
    <AccordionContent class="px-4 h-auto min-h-20" :class="props.bgColor">
      <slot name="content" />
    </AccordionContent>
  </AccordionItem>
</template>

<script lang="ts" setup>
 const props = defineProps({
   title: {
     type: String,
     required: true,
   },
   bgColor: {
     type: String,
     default: '[#000000]',
   },
   value:{
    type: String,
    required: true,
   },
   customClasses:{
    type: String,
    default: '',
   }
 })

</script>

<style></style>
