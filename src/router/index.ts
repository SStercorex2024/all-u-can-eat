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
      children: [
        {
          path: '/breakfast',
          name: 'breakfast',
          component: () => import('@/views/Recipe/RecipeCategories.vue'),
        },
        {
          path: '/lunch',
          name: 'lunch',
          component: () => import('@/views/Recipe/RecipeCategories.vue'),
        },
        {
          path: '/dinner',
          name: 'dinner',
          component: () => import('@/views/Recipe/RecipeCategories.vue'),
        },
        {
          path: '/snack',
          name: 'snack',
          component: () => import('@/views/Recipe/RecipeCategories.vue'),
        },
        {
          path: '/dessert',
          name: 'dessert',
          component: () => import('@/views/Recipe/RecipeCategories.vue'),
        },
        {
          path: '/vegan',
          name: 'vegan',
          component: () => import('@/views/Recipe/RecipeCategories.vue'),
        },
        {
          path: '/vegetarian',
          name: 'vegetarian',
          component: () => import('@/views/Recipe/RecipeCategories.vue'),
        },
        {
          path: '/pescatarian',
          name: 'pescatarian',
          component: () => import('@/views/Recipe/RecipeCategories.vue'),
        },
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/views/NotFound/NotFound.vue'),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
