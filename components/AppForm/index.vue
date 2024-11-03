<template>
  <form
    class="space-y-12 max-w-lg w-full"
    @submit.prevent="handleSubmit"
  >
    <div>
      <label for="name" class="block text-md font-accent font-semibold">¿Como te llamas?</label>
      <input
        id="name"
        v-model="form.name"
        type="text"
        required
        class="mt-1 block w-full p-3 border rounded-lg shadow-lg placeholder:text-[#3D3D3D] placeholder:text-sm"
        placeholder="¡Saludamos a la persona detrás de la idea!"
      >
    </div>

    <div>
      <label for="email" class="block text-md font-accent font-semibold">Email</label>
      <input
        id="email"
        v-model="form.email"
        type="email"
        required
        class="mt-1 block w-full p-3 border rounded-lg shadow-lg placeholder:text-[#3D3D3D] placeholder:text-sm"
        placeholder="maildeejemplo@mail.com"
      >
    </div>

    <div>
      <label for="message" class="block text-md font-accent font-semibold">Mensaje</label>
      <textarea
        id="message"
        v-model="form.message"
        required
        class="mt-1 block w-full p-3 border rounded-lg shadow-lg placeholder:text-[#3D3D3D] placeholder:text-sm"
        rows="4"
        placeholder="Queremos conocer qué te mueve y que te inspira"
      />
    </div>
      <AppButton 
    @click="handleSubmit"> 
      Transformemos 
    </AppButton>

  </form>
</template>

<script lang="ts" setup>
const form = reactive({
  name: "",
  email: "",
  message: "",
});

function handleSubmit() {
  console.log("Form data:", form);
  // Reset form or handle submission logic here
  form.name = "";
  form.email = "";
  form.message = "";
}
</script>

<style></style>
