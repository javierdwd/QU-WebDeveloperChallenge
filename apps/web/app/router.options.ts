import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig> {
  // https://router.vuejs.org/api/interfaces/routeroptions.html#routes
  routes: (_routes) => [
    {
      name: 'planets',
      path: '/',
      component: () => import('~/pages/planets/index.vue').then(r => r.default || r)
    }
  ],
}
