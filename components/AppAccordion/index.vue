<template>
  <Accordion class="mt-4" type="single" collapsible>
    <AppAccordionItem
      class="text-white"
      value="1"
      title="Diseño"
      bg-color="bg-[#024536]"
    >
      <template #content>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, quam
        perspiciatis! Recusandae inventore quo laborum.
      </template>
    </AppAccordionItem>

    <AppAccordionItem
      class="text-black -mt-1"
      value="2"
      title="Marketing"
      bg-color="bg-[#BFCFFF]"
    >
      <template #content>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, quam
        perspiciatis! Recusandae inventore quo laborum.
      </template>
    </AppAccordionItem>

    <AppAccordionItem
      class="text-white -mt-1"
      value="3"
      title="Backend"
      bg-color="bg-[#323C59]"
    >
      <template #content>
        <div class="flex flex-col w-full h-full gap-4 pb-10">
          <p class="w-80 md:w-full">
            Gestión de la marca a través de acciones de posicionamiento,
            propósito y valores.
          </p>
          <div class="w-60 md:w-full flex items-center flex-wrap gap-2">
            <Badge class="text-white" variant="outline">
              Identidad visual
            </Badge>
            <Badge class="text-white" variant="outline">
              Identidad verbal
            </Badge>
            <Badge class="text-white" variant="outline">
              Identidad corporativa
            </Badge>
          </div>
        </div>
      </template>
    </AppAccordionItem>

    <AppAccordionItem
      class="text-black -mt-1"
      custom-classes="rounded-b-md"
      value="34"
      title="Frontend"
      bg-color="bg-[#F09A22]"
    >
      <template #content>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, quam
        perspiciatis! Recusandae inventore quo laborum.
      </template>
    </AppAccordionItem>
  </Accordion>
</template>

<script lang="ts" setup>
</script>

<style></style>
