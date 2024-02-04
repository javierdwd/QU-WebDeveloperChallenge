<script setup lang="ts">
  const props = defineProps<{
    title?: string,
    message: string
  }>()
</script>

<template>
  <div class="bg-white p-2 rounded-md mx-auto max-w-fit">
    <h1 class="text-slate-700 text-center text-xl sm:text-2xl">{{ props.title || "Error" }}</h1>

    <hr class="my-2" />

    <div class="text-md">
      <p>{{message}}</p>
    </div>

    <div class="flex justify-center gap-2 py-4">
      <slot name="actions" />
    </div>
  </div>
</template>