<script setup lang="ts">
import { useRecipsStore } from '@/stores/RecipsStore.ts'
import type { Recipe } from '@/Interfaces/Recipe.ts'
import { computed, ref } from 'vue'

const props = withDefaults(
  defineProps<{
    allItems: Recipe[]
    initialLimit?: number
  }>(),
  {
    allItems: () => [],
    initialLimit: 6,
  },
)

const store = useRecipsStore()
const showAll = ref(false)

const displayedItems = computed(() => {
  if (showAll.value) {
    return props.allItems
  }
  return props.allItems.slice(0, props.initialLimit)
})

const hasMoreItems = computed(() => {
  return props.allItems.length > props.initialLimit
})

const toggleShowAll = () => {
  showAll.value = !showAll.value
}
</script>

<template>
  <div v-if="allItems.length >= 1">
    <ul class="card__list">
      <li class="card__card" v-for="recipe in displayedItems" :key="recipe.id">
        <div class="card__image">
          <img
            :src="`./src/assets/images/rec-l/${recipe.image}.jpg`"
            :alt="recipe.name"
            loading="lazy"
          />
          <div class="card__link-wrapper">
            <RouterLink
              class="card__link"
              :to="{ name: store.getCategoryByRecipeId(recipe.id).toLowerCase() }"
              >View recipe
              <span
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </span>
            </RouterLink>
          </div>
        </div>
        <span class="card__name white-btn">
          {{ store.getCategoryByRecipeId(recipe.id) }}
        </span>
        <ul class="card__extra">
          <li class="card__extra-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
            <p class="card__extra-title">
              {{ `${recipe.servings} ervings` }}
            </p>
          </li>
          <li class="card__extra-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <p class="card__extra-title">{{ recipe.timePrep }} prep</p>
          </li>
          <li class="card__extra-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <p class="card__extra-title">{{ recipe.timeCook }} cook</p>
          </li>
        </ul>
        <h3 class="card__title">
          {{ recipe.name }}
        </h3>
      </li>
    </ul>
    <div class="card__show-more" v-if="hasMoreItems">
      <button @click="toggleShowAll" class="card__show-more-btn green-btn">
        {{ showAll ? 'View less recipes' : 'View all recipes' }}
      </button>
    </div>
  </div>
  <div class="card__not-found" v-else>Category not found</div>
</template>

<style scoped>
.card__list {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  flex-wrap: wrap;
  margin-bottom: 40px;
}

.card__card {
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 12px;
}

.card__card:hover {
  .card__link-wrapper {
    bottom: 14px;
    opacity: 1;
  }
}

.card__image {
  position: relative;
  width: 373px;
  border-radius: var(--border-radius-m);

  img {
    width: 100%;
  }
}

.card__name {
  position: absolute;
  padding-inline: 8px;
  top: 12px;
  right: 14px;
  font-weight: 500;
}

.card__extra {
  display: flex;
  column-gap: 16px;
  flex-wrap: wrap;
  gap: 10px;
}

.card__extra-item {
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 4px;
  padding: 4px 8px;
  border: 1px solid var(--color-gray);
  color: var(--color-gray);
  border-radius: var(--border-radius-m);

  svg {
    width: 16px;
    height: 16px;
    color: var(--color-gray);
  }
}

.card__extra-title {
  font-size: 14px;
}

.card__link-wrapper {
  display: flex;
  align-items: center;
  height: var(--height-button-m);
  padding-inline: 14px;
  position: absolute;
  bottom: -50px;
  left: 10px;
  right: 10px;
  background-color: var(--color-white);
  border-radius: var(--border-radius-m);
  transition: var(--transition-duration);
  opacity: 0;
  cursor: pointer;
  user-select: none;

  svg {
    position: absolute;
    width: 14px;
    height: 14px;
    right: 14px;
    top: 50%;
    translate: 0 -50%;
  }
}

.card__link-wrapper:hover {
  .card__link {
    color: var(--color-yellow);
  }
}

.card__link {
  font-size: 14px;
  text-transform: uppercase;
  color: var(--color-black);
}

.card__show-more {
  display: flex;
  align-items: center;
  justify-content: center;
}

.card__show-more-btn {
  text-transform: uppercase;
  padding-inline: 12px;
}

.card__not-found {
  text-align: center;
  color: var(--color-gray);
  font-size: 64px;
  font-weight: 500;
  padding-block: 60px;
}

@media (max-width: 1240px) {
  .card__image {
    width: 400px;
  }
}

@media (max-width: 924px) {
  .card__image {
    width: 340px;
  }
}
</style>
