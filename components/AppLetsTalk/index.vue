<template>
  <div class="form-container relative w-full h-full flex justify-center items-center mt-32">
    <!-- Form overlay -->
    <div class="form-form w-1/2 h-full opacity-0 flex flex-col justify-center gap-4">
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
    <div class="form-quote w-1/2 h-full opacity-0 flex flex-col justify-center gap-10">
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

<script setup>
import { animate, inView } from "motion";

const formAnimation = [
  ['.form-quote', { opacity: [0,1], x: ["-50%","-50%"], scale: [1,1.4] },{ duration: 1, ease: "easeInOut"}],
  ['.form-quote', { x: ["-50%","0%"], scale: [null,1] },{ duration: 1, ease: "easeInOut"}],
  ['.form-form', { opacity: [0,1], scale: [0.8,1] },{ duration: 0.8, ease: "easeInOut", at: '-0.8'}],
]

onMounted(() => {
  inView(".form-container", () => {
  animate(formAnimation)
},{ margin: "0px 0px -300px 0px"})
})


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