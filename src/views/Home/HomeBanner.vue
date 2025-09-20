<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import { useRecipsStore } from '@/stores/RecipsStore.ts'
import { onMounted } from 'vue'

const store = useRecipsStore()

onMounted(async () => {
  await store.fetchRecipes()
})

const swiperOptions = {
  modules: [Navigation],
  slidesPerView: 1,
  navigation: {
    nextEl: '.slider-button-next',
    prevEl: '.slider-button-prev',
  },
}
</script>

<template>
  <section class="banner">
    <div class="banner__content container">
      <div class="banner__text-wrapper">
        <div class="banner__text">
          <h1 class="banner__title">Let's get cooking!</h1>
          <div class="banner__desc">
            A blog full of healthy and easy to make recipes that take the stress out of cooking.
          </div>
          <RouterLink class="banner__link" :to="{ name: 'categories' }">
            view all recipes
          </RouterLink>
        </div>
      </div>
    </div>
    <div class="banner__slider">
      <Swiper class="recipe-swiper" v-bind="swiperOptions">
        <SwiperSlide v-for="slide in store.allCategory" :key="slide.id">
          <div class="slide-image">
            <img :src="`./recipe/${slide.image}.jpg`" :alt="slide.name" />
          </div>
          <div class="slide-content">
            <div class="slider-name white-btn">
              {{ store.getCategoryByRecipeId(slide.id) }}
            </div>
            <div class="slide-title">
              {{ slide.name }}
            </div>
            <ul class="slide-extra">
              <li class="slide-extra-item">
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
                <div class="slider-extra-text">
                  <span>Servings</span>
                  <p class="slide-extra-title">
                    {{ `${slide.servings} people` }}
                  </p>
                </div>
              </li>
              <li class="slide-extra-item">
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
                <div class="slider-extra-text">
                  <span>Prep</span>
                  <p class="slide-extra-title">
                    {{ slide.timePrep }}
                  </p>
                </div>
              </li>
              <li class="slide-extra-item">
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
                <div class="slider-extra-text">
                  <span>Cook</span>
                  <p class="slide-extra-title">
                    {{ slide.timeCook }}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </SwiperSlide>
        <div class="slier-navigation">
          <div class="slider-button-prev white-btn">
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
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
          </div>
          <div class="slider-button-next white-btn">
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
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </div>
        </div>
      </Swiper>
    </div>
  </section>
</template>

<style scoped>
.banner {
  background-color: var(--color-beige);
  display: flex;
  align-items: center;
  justify-content: center;
}

.banner__text-wrapper {
  max-width: 332px;
  padding-block: 80px;
}

.banner__text {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 24px;
  color: var(--color-blue);
}

.banner__title {
  line-height: 1;
  font-size: 72px;
  font-weight: 700;
}

.banner__desc {
  font-size: 24px;
}

.banner__link {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--color-blue);
  border-radius: var(--border-radius-m);
  font-size: 14px;
  font-weight: 500;
  margin-top: 12px;
  text-transform: uppercase;
  height: var(--height-button-l);
  align-self: baseline;
  padding-inline: 12px;
}

.banner__slider {
  width: 50vw;
}

.slide-content {
  position: absolute;
  left: 40px;
  bottom: 96px;
  max-width: 353px;
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  z-index: var(--z-index-slider-text-banner);
}

.slider-name {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-inline: 12px;
  height: var(--height-button-m);
  width: fit-content;
}

.slide-title {
  color: var(--color-white);
  font-size: 40px;
  font-weight: 700;
  margin-bottom: -12px;
}

.slide-extra {
  display: flex;
  column-gap: 8px;
}

.slide-extra-item {
  display: flex;
  column-gap: 6px;
  color: var(--color-white);
  border: 1px solid var(--color-white);
  padding: 4px 10px;
  border-radius: var(--border-radius-m);

  svg {
    color: var(--color-white);
    height: 32px;
    width: 32px;
  }
}

.slider-extra-text {
  display: flex;
  flex-direction: column;
  row-gap: 4px;

  span {
    font-size: 8px;
    font-weight: 500;
  }
}

.slide-extra-title {
  font-size: 14px;
}

.slier-navigation {
  position: absolute;
  display: flex;
  column-gap: 8px;
  bottom: 40px;
  left: 40px;
  width: 72px;
  z-index: var(--z-index-slider-navigation);
}

.slider-button-next,
.slider-button-prev {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: var(--height-button-m);

  svg {
    color: var(--color-black);
    width: 24px;
    height: 24px;
  }
}

.slider-button-next:hover,
.slider-button-prev:hover {
  cursor: pointer;

  svg {
    color: var(--color-blue);
  }
}

.swiper-slide {
  height: inherit;
}

.slide-image {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: var(--z-index-inage-banner);

  img {
    object-fit: cover;
    width: 100%;
  }
}

.slide-image:after {
  position: absolute;
  inset: 0;
  content: '';
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: var(--z-index-inage-banner-shadow);
}

@media (max-width: 900px) {
  .banner {
    flex-direction: column;
  }
  .banner__slider {
    width: 100vw;
  }

}
@media (max-width: 420px) {
  .slide-title {
    font-size: 28px;
  }
  .slide-content {
    row-gap: 10px;
  }
  .banner__title {
    font-size: 52px;
  }
}
</style>
