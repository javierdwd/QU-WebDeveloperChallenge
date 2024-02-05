<script setup lang="ts">
  import type { PaginatedResource, Planet } from "@qu-challenge/swapi"
  import { sortPlanetsBy } from "@qu-challenge/swapi"

  import PlanetCard, { PlanetCardSkeleton } from './PlanetCard.vue'
  import type { SorteableBy } from './PlanetListFilter.vue'
  import PlanetListFilter from './PlanetListFilter.vue'

  import ErrorMessage from '../UI/ErrorMessage.vue'
  import Button from '../UI/Button.vue'
  
  const env = usePublicEnv();

  const randomBoolean = useRandomBoolean(60);
  
  const {data, pending, error, refresh, status} = await useFetch<PaginatedResource<Planet>>("/planets", {
    baseURL:  env.swapiBaseUrl,
    server: false,
    transform: (data) => {
      if(randomBoolean()) {
        return data;
      }

      // Make it fails intentionally to show the error status UI...
      throw new Error()
    },

  })

  const showingPlanetList = computed(() => {
    return status.value === 'success'
  })

  // Sorting
  const sortBy = ref<SorteableBy>("name");

  const handleChangeSortBy = ({ value }: { value: SorteableBy }) => {
    sortBy.value = value
  }

  const sortedPlanets = computed(() => {
    if(!showingPlanetList.value) {
      return []
    }

    return data.value?.results.toSorted(sortPlanetsBy(sortBy.value))
  })

  const skeletonArr = new Array(9).fill("");
</script>

<template>
  <!-- Error handling -->
  <ErrorMessage v-if="error && !pending" message="Something went wrong. We couldn't load the Planet List.">
    <template v-slot:actions>
      <Button v-on:click="refresh">Retry</Button>
    </template>
  </ErrorMessage>

  <div class="mx-auto max-w-7xl">
    <!-- Filters -->
    <PlanetListFilter v-if="showingPlanetList" :onChangeSortBy="handleChangeSortBy" />

    <!-- Content -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
      <PlanetCardSkeleton v-if="pending" v-for="_ in skeletonArr" />
  
      <PlanetCard
        v-if="showingPlanetList"
        v-for="planet in sortedPlanets"
        :planet="planet"
        :showAttributes="['terrain', 'climate', 'diameter', 'population']"
      />
    </div>
  </div>

</template>