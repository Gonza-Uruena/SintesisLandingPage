<template>
  <div class="w-full h-full flex flex-col justify-center items-center gap-10 pl-10">
    <h1 class="self-start font-title font-bold text-3xl leading-snug">
      {{props.title}}
    </h1>
    <p class="self-start text-lg">
      {{props.description}}
    </p>
    <div class="self-start min-w-[550px] flex flex-wrap gap-4">
      <div
        v-for="tag in props.tags"
        :key="tag as string"
        class="bg-primary-500 text-white rounded-full border px-4 py-1 text-sm"
      >
        {{tag}}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
 
 const props = defineProps({
   title: {
     type: String,
     default: "Title",
   },
   description: {
     type: String,
     default: "Description",
   },
   tags: {
     type: Array,
     default: () => [
      {
        id: 1,
        title: "Title",
        description: "Description",
        tags: ["Planificación de estrategias", "Diseño gráfico", "Brandig Emocional", "Identidad Visual Corporativa", "Identidad Verbal", "Packaging"],
      }
     ],
   }
 });

</script>

<style>

</style>