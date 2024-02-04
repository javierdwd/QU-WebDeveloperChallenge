<script setup lang="ts">
import type { Planet } from "@qu-challenge/swapi"
import { TextsMap, NumbericalAttrs } from "@qu-challenge/swapi"

type ValidAttributes = "diameter" | 'climate' | 'terrain' | 'population'

const props = defineProps<{
  planet: Planet,
  showAttributes: ValidAttributes[]
}>()

const { safeFormat } = useNumberFormatter("es-AR");

const shouldFormat = (attrName: string) => {
  return NumbericalAttrs.includes(attrName);
}
</script>

<template>
  <article class="bg-white p-2 rounded-md">
    <h1 class="text-center text-xl sm:text-2xl">{{ props.planet.name }}</h1>

    <hr class="my-2" />

    <ul>
      <li v-for="visibleAttr in showAttributes" class="my-3">
        <strong class="block text-sm font-normal text-cyan-600 leading-3">{{TextsMap[visibleAttr]}}:</strong>
        <span class="capitalize">
          {{
            shouldFormat(visibleAttr)
            ? safeFormat(props.planet[visibleAttr], '--')
            : props.planet[visibleAttr]
          }}
        </span>
      </li>
    </ul>
  </article>
</template>