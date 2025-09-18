<script setup lang="ts">
import { useRecipsStore } from '@/stores/RecipsStore.ts'
import Insta from '@/components/icons/Insta.vue'
import Facebook from '@/components/icons/Facebook.vue'
import TicToc from '@/components/icons/TicToc.vue'
import Pinterest from '@/components/icons/Pinterest.vue'

const store = useRecipsStore()
</script>

<template>
  <div v-if="store.activeOneRecipe" class="recipe">
    <div class="recipe-head__content">
      <div class="container recipe-head__container">
        <p class="recipe-head__recipe">
          {{ store.getCategoryByRecipeId(store.activeOneRecipe.id).toUpperCase() }}
        </p>
        <h1 class="recipe-head__main-title">
          {{ store.activeOneRecipe.name }}
        </h1>
        <ul class="recipe-head__extra">
          <li class="recipe-head__item">
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
            <div class="recipe-head__text">
              <span>Servings</span>
              <p class="slide-extra__title">
                {{ `${store.activeOneRecipe.servings} people` }}
              </p>
            </div>
          </li>
          <li class="recipe-head__item">
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
            <div class="recipe-head__text">
              <span>Prep</span>
              <p class="recipe-head__title">
                {{ store.activeOneRecipe.timePrep }}
              </p>
            </div>
          </li>
          <li class="recipe-head__item">
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
            <div class="recipe-head__text">
              <span>Cook</span>
              <p class="recipe-head__title">
                {{ store.activeOneRecipe.timeCook }}
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div class="recipe-body">
        <div class="container recipe-body__content">
          <div class="recipe-body__about">
            <div class="recipe-body__image-wrapper">
              <img
                class="recipe-body__image"
                :src="`/src/assets/images/one-recipe/${store.activeOneRecipe.image}.jpg`"
                :alt="store.activeOneRecipe.name"
              />
            </div>
            <h3 class="recipe-body__title">
              {{ `"${store.activeOneRecipe.title}"` }}
            </h3>
            <p class="recipe-body__desc">{{ store.activeOneRecipe.desc }}</p>
            <div class="recipe-body__author">
              <img src="/src/assets/images/one-recipe/sarrach.jpg" alt="Sharon" loading="lazy" />
              <div class="recipe-body__text-wrapper">
                <p class="recipe-body__author-name">Hi, I’m Sharon</p>
                <p class="recipe-body__text">
                  I am a passionate home chef with a focus on simplicity. I like to craft
                  easy-to-follow recipes that transform everyday ingredients into delicious
                  creations.
                </p>
                <ul class="recipe-body__social-list">
                  <li class="recipe-body__social-item">
                    <a href="#">
                      <TicToc />
                    </a>
                  </li>
                  <li class="recipe-body__social-item">
                    <a href="#">
                      <Insta />
                    </a>
                  </li>
                  <li class="recipe-body__social-item">
                    <a href="#">
                      <Pinterest />
                    </a>
                  </li>
                  <li class="recipe-body__social-item">
                    <a href="#">
                      <Facebook />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <aside class="recipe-body__aside">
            <div class="recipe-body__aside-head">
              <div class="recipe-body__aside-head-content">
                <span class="recipe-body__aside-category">
                  {{ store.getCategoryByRecipeId(store.activeOneRecipe.id) }}
                </span>
                <h2 class="recipe-body__aside-title">
                  {{ store.activeOneRecipe.name }}
                </h2>
                <ul class="recipe-body__aside-extra">
                  <li class="recipe-body__aside-extra-item">
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
                    <p class="recipe-body__aside-extra-title">
                      {{ `${store.activeOneRecipe.servings} ervings` }}
                    </p>
                  </li>
                  <li class="recipe-body__aside-extra-item">
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
                    <p class="recipe-body__aside-extra-title">
                      {{ store.activeOneRecipe.timePrep }} prep
                    </p>
                  </li>
                  <li class="recipe-body__aside-extra-item">
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
                    <p class="recipe-body__aside-extra-title">
                      {{ store.activeOneRecipe.timeCook }} cook
                    </p>
                  </li>
                </ul>
                <dl>
                  <dt>Ingredients</dt>
                  <dd>
                    <ul>
                      <li v-for="ingredient in store.activeOneRecipe.ingredients" :key="ingredient">
                        <p>{{ ingredient }}</p>
                      </li>
                    </ul>
                  </dd>
                </dl>
                <dl>
                  <dt>Directions</dt>
                  <dd>{{ store.activeOneRecipe.directions }}</dd>
                </dl>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="recipe-not-found">
    <div class="container">Sorry Recipe Not Found</div>
  </div>
</template>

<style scoped>
.recipe-not-found {
  color: var(--color-gray);
  font-size: 58px;
  padding-block: 80px;
}

.recipe-head__extra {
  display: flex;
  column-gap: 8px;
}

.recipe-head__item {
  display: flex;
  align-items: center;
  column-gap: 6px;
  border: 1px solid var(--color-blue);
  padding: 4px 10px;
  border-radius: var(--border-radius-m);

  svg {
    color: var(--color-blue);
    height: 32px;
    width: 32px;
  }
}

.recipe-head__text {
  display: flex;
  flex-direction: column;
  row-gap: 4px;

  span {
    font-size: 8px;
    font-weight: 500;
  }
}

.recipe-head__title {
  font-size: 14px;
}

.recipe-head__content {
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  color: var(--color-blue);
  background-color: var(--color-yellow);
}

.recipe-head__container {
  padding-block: 80px;
}

.recipe-head__recipe {
  font-size: 14px;
  text-transform: uppercase;
}

.recipe-head__main-title {
  font-size: 72px;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 20px;
}

.recipe-body__social-list {
  display: flex;
  column-gap: 16px;
}

.recipe-body__social-item {
  a {
    display: flex;
    align-items: center;
  }

  svg {
    width: 24px;
    height: 24px;
    color: var(--color-blue);
    transition: var(--transition-duration);
  }

  svg:hover {
    color: var(--color-yellow);
  }
}

.recipe-body {
  background-color: var(--color-white);
  padding-block: 80px;
}

.recipe-body__content {
  display: grid;
  grid-template-columns: 57% 1fr;
  gap: 30px;
}

.recipe-body__image-wrapper {
  width: 683px;
  height: 548px;
  max-width: 100%;
  overflow: hidden;
}

.recipe-body__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: var(--border-radius-m);
}

.recipe-body__about {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}

.recipe-body__author {
  display: flex;
  column-gap: 10px;

  img {
    border-radius: 150px 150px 0 0;
  }
}

.recipe-body__text-wrapper {
  display: flex;
  flex-direction: column;
  row-gap: 4px;
  justify-content: center;
}

.recipe-body__author-name {
  font-size: 24px;
}

.recipe-body__aside {
  display: flex;
  flex-direction: column;
  row-gap: 40px;
}

.recipe-body__aside-head {
  background-color: var(--color-beige);
  border-radius: var(--border-radius-m);
  padding: 40px;
}

.recipe-body__aside-head-content {
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  color: var(--color-black);
}

.recipe-body__aside-extra {
  display: flex;
  column-gap: 16px;
  flex-wrap: wrap;
  gap: 10px;
}

.recipe-body__aside-extra-item {
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

.recipe-body__aside-extra-title {
  font-size: 14px;
}

dl {
  display: flex;
  row-gap: 10px;
  flex-direction: column;
  margin: 0;
}

dt {
  font-size: 24px;
  font-weight: 700;
}

dd {
  margin: 0;
  font-size: 16px;
  font-weight: 500;
}

@media (max-width: 886px) {
  .recipe-head__container {
    padding-block: 28px;
  }
  .recipe-body__about {
    grid-column: 1/-1;
  }

  .recipe-body__content {
    grid-template-columns: 1fr 1fr 1fr;
  }

  .recipe-body__aside {
    grid-row: 2/3;
    grid-column: 1/3;
  }
}

@media (max-width: 768px) {
  .recipe-head__main-title {
    font-size: 46px;
  }

  .recipe-head__extra {
    row-gap: 8px;
    flex-wrap: wrap;
  }
}

@media (max-width: 624px) {
  .recipe-body__aside {
    grid-column: 1/-1;
  }

  .recipe-body__author {
    flex-direction: column;
    align-items: center;
    row-gap: 20px;
  }

  .recipe-body__social-list {
    justify-content: center;
  }

  .recipe-body__text-wrapper {
    display: contents;
    text-align: center;
  }

  .recipe-body__author-name {
    order: -1;
  }
}
</style>
