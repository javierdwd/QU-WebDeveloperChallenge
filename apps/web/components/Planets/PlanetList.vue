<script setup lang="ts">
  import type { PaginatedResource, Planet } from "@qu-challenge/swapi"
  import PlanetCard from './PlanetCard.vue'
  
  const env = usePublicEnv();

  const {data, pending, status, error} = await useFetch<PaginatedResource<Planet>>("/planets", {
    baseURL:  env.swapiBaseUrl,
    server: false
  })
</script>

<template>
  <div class="mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    <PlanetCard
      v-if="!!data?.results"
      v-for="planet in data?.results"
      :planet="planet"
      :showAttributes="['terrain', 'climate', 'diameter', 'population']"
    />
  </div>
</template>