<script setup lang="ts">
import { useRecipsStore } from '@/stores/RecipsStore.ts'
import { onMounted } from 'vue'
import CardRecipe from '@/components/CardRecipe.vue'

const store = useRecipsStore()

onMounted(() => {
  store.fetchRecipes()
})
</script>

<template>
  <section class="newest" aria-labelledby="newest-title">
    <div class="newest__title-wrapper">
      <div class="container">
        <h1 id="newest-title" class="newest__title">Newest recipes</h1>
      </div>
    </div>
    <div class="container">
      <div class="newest__cards">
        <CardRecipe :all-items="store.allNewesRecipes" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.newest {
  background-color: var(--color-white);
  padding-block: 50px;
}

.newest__title-wrapper{
  padding-block: 80px;
  background: var(--color-gray);
}

.newest__cards {
  margin-top: 50px;
}

.newest__title {
  color: var(--color-white);
  font-weight: 700;
  font-size: 56px;
}
@media (max-width: 924px) {
  .newest__title-wrapper {
    padding-block: 30px;
  }
}
</style>
