import { defineStore } from 'pinia'
import type {
  Recipe,
  RecipeCategory,
  RecipeDatabase
} from '@/Interfaces/Recipe.ts'
import { ref, computed } from 'vue'

export const useRecipsStore = defineStore('recips', () => {
  const recips = ref<RecipeDatabase>()
  const activeRecipe = ref<RecipeCategory>('Breakfast')

  async function fetchRecipes() {
    const response = await fetch('./bd.json')
    recips.value = await response.json()
  }

  function getRecipesByCategory(category: RecipeCategory): Recipe[] {
    if (!recips.value) return []
    return recips.value[category] || []
  }

  const allCategory = computed<Recipe[]>(() => {
    if (!recips.value) return []

    return [...recips.value.Breakfast, ...recips.value.Lunch, ...recips.value.Dinner]
  })

  const allNewesRecipes = computed<Recipe[]>(() => {
    if (!allCategory.value) return []
    return allCategory.value.filter((recipe) => recipe.newest === true)
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
    getCategoryByRecipeId,
    allNewesRecipes,
    activeRecipe
  }
})
