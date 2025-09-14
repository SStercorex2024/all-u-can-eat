import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home/HomeView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/About/AboutView.vue'),
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('@/views/Blog/BlogView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/Contact/ContactView.vue'),
    },
    {
      path: '/categories',
      name: 'categories',
      component: () => import('@/views/Recipe/RecipeCategories.vue'),
    },
  ],
})

export default router
