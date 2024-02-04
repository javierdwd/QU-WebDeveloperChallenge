<script setup lang="ts">
  import type { PaginatedResource, Planet } from "@qu-challenge/swapi"
  import PlanetCard, { PlanetCardSkeleton } from './PlanetCard.vue'

  import ErrorMessage from '../UI/ErrorMessage.vue'
  import Button from '../UI/Button.vue'
  
  const env = usePublicEnv();

  const randomBoolean = useRandomBoolean(60);
  
  const {data, pending, error, refresh} = await useFetch<PaginatedResource<Planet>>("/planets", {
    baseURL:  env.swapiBaseUrl,
    server: false,
    transform: (data) => {
      if(randomBoolean()) {
        return data;
      }

      // Make it fails in porpuse to show the error UI/UX...
      throw new Error()
    }
  })

  const skeletonArr = new Array(9).fill("");
</script>

<template>
  <ErrorMessage v-if="error && !pending" message="Something went wrong. We couldn't load the Planet List.">
    <template v-slot:actions>
      <Button v-on:click="refresh">Retry</Button>
    </template>
  </ErrorMessage>
  <div class="mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    <PlanetCardSkeleton v-if="pending" v-for="_ in skeletonArr" />

    <PlanetCard
      v-if="!!data?.results"
      v-for="planet in data?.results"
      :planet="planet"
      :showAttributes="['terrain', 'climate', 'diameter', 'population']"
    />
  </div>
</template>