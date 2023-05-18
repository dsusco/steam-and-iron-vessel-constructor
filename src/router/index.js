import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/weapons',
      name: 'weapons',
      component: () => import('@/views/WeaponsView.vue')
    }
  ]
})

export default router
