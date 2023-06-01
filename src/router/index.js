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
      path: '/vessels',
      name: 'vessels',
      component: () => import('@/views/VesselsView.vue')
    },
    {
      path: '/weapons',
      name: 'weapons',
      component: () => import('@/views/WeaponsView.vue')
    },
    {
      path: '/cards',
      name: 'cards',
      component: () => import('@/views/CardsView.vue')
    }
  ]
})

export default router
