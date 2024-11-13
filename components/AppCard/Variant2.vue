<template>
  <Card
    class="bg-black text-white w-full h-full rounded-tr-[45px] rounded-bl-[52px] p-4"
  >
    <CardHeader>
      <CardTitle class="px-2">
        <img
          src="/public/img/Cards/TalhackLogo.png"
          alt="iverna"
          class="w-full h-full object-cover rounded-md"
        >
      </CardTitle>
    </CardHeader>
    <CardContent class="flex flex-col justify-center items-center gap-4 p-4">
      <div class="w-full h-full">
        <NuxtImg
          preload
          src="/img/Cards/ivernaLogo.jpg"
          loading="lazy"
          alt="talhack"
          sizes="100vw sm:50vw md:400px"
          fit="cover"
          class="rounded-md"
        />
      </div>
      <div>
        <NuxtImg
          src="/img/Cards/TalhackBanner2.png"
          loading="lazy"
          alt="iverna"
          sizes="100vw sm:50vw md:400px"
          fit="cover"
          class="rounded-md"
        />
      </div>
    </CardContent>
  </Card>
</template>

<script lang="ts" setup></script>

<style></style>
