<script setup lang="ts">
  defineProps<{
    labelText: string
  }>()

  const model = defineModel()
</script>

<template>
  <label class="text-cyan-100">
    {{ labelText }}
    <br />

    <select
      class="bg-cyan-500 hover:bg-cyan-700 text-white font-normal py-1 px-4 rounded"
      v-bind="$attrs"
      v-model="model"
    >
      <slot />
    </select>
  </label>
</template>