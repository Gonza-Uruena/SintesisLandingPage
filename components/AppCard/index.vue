<template>
  <Card class="bg-section-background-light w-full h-full bg-transparent shadow-none border-none">
    <CardContent class="flex justify-center relative p-0">
      <NuxtImg
      :src="props.image"
      loading="lazy"
      :alt="props.name"
      sizes="100vw md:100vw"
      class="w-full h-full rounded-tr-3xl rounded-bl-3xl cursor-pointer"
      />
      <div class="absolute bottom-0 left-0 w-full h-20 border border-t-sintesis-light-blue rounded-tr-3xl rounded-bl-3xl flex flex-col justify-center items-center bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 text-section-background-light cursor-pointer">
        <h3 class="font-title">{{ props.name }}</h3>
        <h4 class="font-accent">{{ props.role }}</h4>
      </div>
    </CardContent>
  </Card>
</template>

<script lang="ts" setup>

  const props = defineProps({
    name: String,
    role: String,
    image: String,
  });

</script>

<style>

</style>