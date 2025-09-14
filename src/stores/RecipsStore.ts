import { defineStore } from 'pinia'
import type { MealType, Recipe, RecipeDatabase } from '@/Interfaces/Recipe.ts'
import { ref, computed } from 'vue'

export const useRecipsStore = defineStore('recips', () => {
  const recips = ref<RecipeDatabase>()

  async function fetchRecipes() {
    try {
      const response = await fetch('./bd.json')
      recips.value = await response.json()
    } catch (error) {
      console.error('Ошибка загрузки рецептов:', error)
    }
  }

  function getRecipesByCategory(category: MealType): Recipe[] {
    if (!recips.value) return []
    return recips.value[category] || []
  }

  const allCategory = computed<Recipe[]>(() => {
    if (!recips.value) return []

    return [
      ...recips.value.Breakfast,
      ...recips.value.Lunch,
      ...recips.value.Dinner
    ]
  })

  function getCategoryByRecipeId(id: number): string {
    if (id >= 1 && id <= 12) return 'Breakfast'
    if (id >= 13 && id <= 24) return 'Lunch'
    if (id >= 25 && id <= 36) return 'Dinner'
    return 'Unknown'
  }

  return {
    recips,
    fetchRecipes,
    getRecipesByCategory,
    allCategory,
    getCategoryByRecipeId
  }
})

