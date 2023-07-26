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
      path: '/vognmand',
      name: 'vognmand',
      component: () => import('@/views/VognmandView.vue')
    },
    {
      path: '/entreprenør',
      name: 'entreprenuer',
      component: () => import('@/views/EntreprenuerView.vue')
    },
    {
      path: '/sand-og-grus',
      name: 'sandoggrus',
      component: () => import('@/views/SandoggrusView.vue')
    },
    {
      path: '/containerkørsel',
      name: 'container',
      component: () => import('@/views/ContainerView.vue')
    },
    {
      path: '/maskinudlejning',
      name: 'maskinudlejning',
      component: () => import('@/views/MaskinView.vue')
    },
    {
      path: '/kontakt',
      name: 'kontakt',
      component: () => import('@/views/ContactView.vue')
    },
  ]
})

export default router
