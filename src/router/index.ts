import { createRouter, createWebHistory } from 'vue-router'
import Today from '@/views/Today.vue'
import Login from '@/views/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'today',
      component: Today
    },
    {
      path: '/week',
      name: 'week',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/Week.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})

export default router
