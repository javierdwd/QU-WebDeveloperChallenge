<script setup lang="ts">
  import { ref, watch } from "vue";
  import FormSelect from "../UI/FormSelect.vue"

  const emit = defineEmits(["changeSortBy"]);

  const sortBy = ref<SorteableBy>('name')

  watch(sortBy, () => {
    emit('changeSortBy', {
      value: sortBy.value
    })
  })
</script>

<script lang="ts">
  export type SorteableBy = "name" | "diameter" | "population";
</script>

<template>
  <div class="flex justify-end">
    <FormSelect v-model="sortBy" :labelText="'Sort by'">
      <option value="name">Name</option>
      <option value="diameter">Diameter</option>
      <option value="population">Population</option>
    </FormSelect>
  </div>
</template>