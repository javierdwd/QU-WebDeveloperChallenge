<template>
  <div class="bg-white p-2 pb-5 rounded-md">
    <div class="animate-pulse flex space-x-4">
      <div class="flex-1 space-y-4">
        <div class="h-6 bg-slate-700/75 mt-2 rounded"></div>
        
        <hr  />

        <div class="space-y-6">
          <div class="grid grid-cols-2 grid-rows-4 gap-4">
            <div class="space-y-1">
              <div class="h-3 bg-cyan-600/75 rounded"></div>
              <div class="h-3 bg-slate-700/75 rounded"></div>
            </div>

            <div></div>

            <div class="space-y-1">
              <div class="h-3 bg-cyan-600/75 rounded"></div>
              <div class="h-3 bg-slate-700/75 rounded"></div>
            </div>

            <div></div>

            <div class="space-y-1">
              <div class="h-3 bg-cyan-600/75 rounded"></div>
              <div class="h-3 bg-slate-700/75 rounded"></div>
            </div>

            <div></div>

            <div class="space-y-1">
              <div class="h-3 bg-cyan-600/75 rounded"></div>
              <div class="h-3 bg-slate-700/75 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

<!-- <article class="bg-white p-2 rounded-md">
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
  </article> -->
</template>