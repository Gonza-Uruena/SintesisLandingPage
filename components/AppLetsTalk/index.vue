<template>
  <div class="w-full h-full flex justify-center items-center mt-32">
    <div class="w-1/2 h-full flex flex-col justify-center gap-4">
      <h1 class="self-start font-title font-bold text-2xl leading-snug">
        ¡Tu historia nos importa!
      </h1>
      <p class="text-xl pr-10 font-accent font-medium">
        Queremos conocerte a fondo y entender cómo podemos ayudarte a dar vida a ese sueño. 
      </p>
      <div class="mt-4">
        <AppForm />
      </div>

    </div>
    <div class="w-1/2 h-full flex flex-col justify-center gap-10">
      <div class="flex flex-col justify-center items-center">
        <h1 class="font-accent text-4xl text-center italic w-96 mb-4"> 
          <span class="comillas block not-italic h-10">"</span>
          Todas las historias del mundo se tejen con la trama de nuestra propia vida
        </h1>
        <h2 class="font-accent text-3xl font-semibold self-end">-Ricardo Piglia</h2>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.comillas{
  font-family: "Inter", sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
  font-size: 150px;
}
</style>