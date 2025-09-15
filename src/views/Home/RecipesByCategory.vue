<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'

const itemsCategory = [
  {
    name: 'Breakfast',
    icon: '1',
  },
  {
    name: 'Dessert',
    icon: '2',
  },
  {
    name: 'Dinner',
    icon: '3',
  },
  {
    name: 'Lunch',
    icon: '4',
  },
  {
    name: 'Snack',
    icon: '5',
  },
  {
    name: 'Breakfast',
    icon: '1',
  },
  {
    name: 'Dessert',
    icon: '2',
  },
  {
    name: 'Dinner',
    icon: '3',
  },
  {
    name: 'Lunch',
    icon: '4',
  },
  {
    name: 'Snack',
    icon: '5',
  },
]

const swiperOptions = {
  modules: [Navigation],
  direction: 'horizontal' as const,
  slidesPerView: 2,
  spaceBetween: 15,
  breakpoints: {
    660: {
      spaceBetween: 30,
      slidesPerView: 3,
    },
    1024: {
      spaceBetween: 40,
      slidesPerView: 5,
    },
  },
  navigation: {
    nextEl: '.slider-button-next-rec',
    prevEl: '.slider-button-prev-rec',
  },
}
</script>

<template>
  <section class="category" aria-labelledby="category-title">
    <div class="container">
      <div class="category__content">
        <h1 id="category-title" class="category__title">Recipes by category</h1>
        <Swiper class="category-swiper" v-bind="swiperOptions">
          <SwiperSlide class="category-slide" v-for="slide in itemsCategory" :key="slide.name">
            <RouterLink class="category__link" :to="slide.name.toLowerCase()" />
            <img
              class="category-icon"
              :src="`./src/assets/images/${slide.icon}.jpg`"
              :alt="slide.name"
              loading="lazy"
            />
            <p class="category-name">{{ slide.name }}</p>
          </SwiperSlide>
        </Swiper>
        <div class="category-navigation">
          <div class="slider-button-prev-rec green-btn">
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
          <div class="slider-button-next-rec green-btn">
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
      </div>
    </div>
  </section>
</template>

<style scoped>
.category {
  padding-block: 70px;
  background-color: var(--color-white);
}

.category-swiper {
  width: 100%;
}

.category__content {
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 40px;
}

.category__title {
  font-size: 56px;
  font-weight: 700;
  color: var(--color-gray);
}

.category-slide {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 12px;
  background-color: var(--color-beige);
  border-radius: var(--border-radius-m);
  padding: 12px;
}

.category__link {
  position: absolute;
  width: 100%;
  height: 100%;
}

.category-icon {
  border-radius: var(--border-radius-m);
}

.category-navigation {
  position: absolute;
  top: 24px;
  right: 0;
  display: flex;
  column-gap: 12px;
}

.green-btn {
  padding-inline: 4px;
  cursor: pointer;

  svg {
    width: 24px;
    height: 24px;
    color: var(--color-gray);
    transition: var(--transition-duration);
  }
}

.green-btn:hover {
  svg {
    color: var(--color-yellow);
  }
}

@media (max-width: 880px) {
  .category__title {
    font-size: 42px;
  }
  .category-navigation {
    top: 105%;
    right: 50%;
    translate: 50% 0;
    column-gap: 40px;
  }
}

@media (max-width: 600px) {
  .category__title {
    font-size: 24px;
  }
}
</style>
