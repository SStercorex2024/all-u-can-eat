<script setup lang="ts">
import { onMounted } from 'vue'
import CardRecipe from '@/components/CardRecipe.vue'
import { useRecipsStore } from '@/stores/RecipsStore.ts'
import type { RecipeCategory } from '@/Interfaces/Recipe.ts'

onMounted(() => {
  store.fetchRecipes()
})

const store = useRecipsStore()

const listLinks: RecipeCategory[] = [
  'Breakfast',
  'Lunch',
  'Dinner',
  'Snack',
  'Dessert',
  'Vegan',
  'Vegetarian',
  'Pescatarian'
]

</script>

<template>
  <div class="recipe-head">
    <div class="container">
      <h1 class="recipe-head__title">{{ store.activeRecipe }}</h1>
    </div>
  </div>
  <div class="recipe__row">
    <div class="container">
      <ul class="recipe__list">
        <li
          @click="store.activeRecipe = link"
          :class="[{ active: store.activeRecipe === link }, 'recipe__item']"
          v-for="link in listLinks"
          :key="link"
        >
          {{ link }}
        </li>
      </ul>
    </div>
  </div>
  <div class="container recipe-body">
    <CardRecipe :all-items="store.getRecipesByCategory(store.activeRecipe)" />
  </div>
</template>

<style scoped>
.recipe-head {
  font-size: 56px;
  font-weight: 700;
  color: var(--color-white);
  padding-block: 80px;
  background-color: var(--color-gray);
}

.recipe__row {
  background-color: var(--color-white);
  padding-block: 8px;
  margin-bottom: 50px;
}

.recipe__list {
  display: flex;
  row-gap: 20px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.recipe__item {
  display: flex;
  cursor: pointer;
  align-items: center;
  height: var(--height-button-m);
  padding-inline: 12px;
  border-radius: var(--border-radius-m);
  color: var(--color-gray);
  font-weight: 500;
  transition: var(--transition-duration);
  text-transform: uppercase;
}

.recipe__item:hover {
  color: var(--color-yellow);
}

.recipe__item.active {
  color: var(--color-white);
  background-color: var(--color-gray);
}

.recipe__item.active:hover {
  opacity: 0.5;
}

.recipe-body {
  padding-bottom: 40px;
}

@media (max-width: 864px) {
  .recipe-head {
    padding-block: 30px;
  }

  .recipe-head__title {
    font-size: 48px;
  }
}
</style>
