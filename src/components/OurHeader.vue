<script setup lang="ts">
import OurButton from '@/components/OurButton.vue'
import BurgerInactive from '@/components/icons/BurgerInactive.vue'
import Ex from '@/components/icons/Ex.vue'
import { ref, watch } from 'vue'
import SearchButton from '@/components/SearchButton.vue'

defineOptions({
  name: 'OurHeader',
})

const modalMenuIsOpen = ref(false)

const modalItems = [
  {
    nameCategories: 'categories',
    categoriesItems: ['Breakfast', 'Lunch', 'Dinner', 'Snack', 'Dessert', 'Vegan', 'Vegetarian'],
  },
  {
    nameLinks: 'links',
    linksItems: ['About', 'Blog', 'Contact'],
  },
]

function toggleModal() {
  return (modalMenuIsOpen.value = !modalMenuIsOpen.value)
}

watch(modalMenuIsOpen, (isOpen) => {
  if(isOpen) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})
</script>

<template>
  <header>
    <div class="header__first-row">
      <div class="container">
        <RouterLink class="header__first-link" :to="{ name: 'blog' }"
          >New recipes added every week!
        </RouterLink>
      </div>
    </div>
    <div class="header__second-row container">
      <OurButton
        @click="toggleModal"
        :class="modalMenuIsOpen ? 'burger-button--hidden' : 'burger-button'"
      >
        <BurgerInactive class="burger-button__icon" />
        Menu
      </OurButton>
      <RouterLink class="header__logo" :to="{ name: 'home' }">
        ALL YOU<br />
        CAN EAT
      </RouterLink>
      <SearchButton />
    </div>
  </header>
  <div
    @click.self="toggleModal"
    @keydown.esc="toggleModal"
    class="modal__shadow"
    tabindex="0"
    v-if="modalMenuIsOpen"
  >
    <div class="menu">
      <div class="modal__menu">
        <div class="modal__close-wrapper">
          <OurButton @click="toggleModal" class="modal__close">
            <Ex />
          </OurButton>
          <p class="modal__categories-title">
            {{ modalItems[0].nameCategories }}
          </p>
        </div>
        <ul class="modal__categories-list">
          <li
            class="modal__categories__item"
            v-for="item in modalItems[0].categoriesItems"
            :key="item"
          >
            <RouterLink class="modal__categories-link" :to="item.toLocaleLowerCase()">
              {{ item }}
            </RouterLink>
          </li>
        </ul>
        <p class="modal__link-title">
          {{ modalItems[1].nameLinks }}
        </p>
        <ul class="modal__link-list">
          <li class="modal__link-item" v-for="item in modalItems[1].linksItems" :key="item">
            <RouterLink class="modal__link-link" :to="item.toLowerCase()">
              {{ item }}
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
header {
  display: flex;
  flex-direction: column;
}

.header__first-row {
  padding-block: 12px;
  background-color: var(--color-blue);
}

.header__first-link {
  display: block;
  color: var(--color-white);
  line-height: 1.6;
  width: 100%;
  text-align: center;
}

.header__first-link:hover {
  color: var(--color-yellow);
}

.header__second-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 16px;
  width: 100%;
}

.header__logo {
  line-height: 1;
  font-size: 32px;
  color: var(--color-blue);
  font-weight: 700;
}

.burger-button {
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 8px;
  font-weight: 600;
  line-height: 1.2;
  padding: 0;
  color: var(--color-blue);
}

.burger-button--hidden {
  opacity: 0;
  user-select: none;
  pointer-events: none;
}

.burger-button__icon {
  width: 24px;
  height: 24px;
}

.modal__shadow {
  width: 100%;
  height: 100vh;
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: var(--z-index-modal-menu-shadow);
}

.menu {
  position: relative;
}

.modal__menu {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  padding: 60px 60px 200px 60px;
  overflow-y: auto;
  background-color: var(--color-gray);
  z-index: var(--z-index-modal-menu);
}

.modal__close {
  order: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-white);

  svg {
    height: 30px;
    width: 30px;
    transition: var(--transition-duration);
  }

  svg:hover {
    color: var(--color-blue);
  }
}

.modal__close-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.modal__categories-list {
  display: flex;
  flex-direction: column;
  row-gap: 16px;
}

.modal__link-list {
  display: flex;
  flex-direction: column;
  row-gap: 16px;
}

.modal__categories-title,
.modal__categories-link,
.modal__link-title,
.modal__link-link {
  color: var(--color-beige);
}

.modal__link-title {
  margin-bottom: 20px;
}

.modal__categories-link:hover,
.modal__link-link:hover {
  color: var(--color-yellow);
}

.modal__categories-title,
.modal__categories-link {
  font-size: 14px;
  line-height: 1.4;
  text-transform: uppercase;
  font-weight: 500;
}

.modal__categories-link {
  font-size: 40px;
  font-weight: 700;
  line-height: 1.2;
}

.modal__link-link {
  line-height: 1.2;
  font-weight: 700;
  font-size: 24px;
}

@media (max-width: 650px) {
  .modal__menu {
    width: 100%;
    height: 100vh;
  }

  .modal__categories-list,
  .modal__link-list {
    text-align: center;
  }

  .modal__categories-title {
    font-size: 24px;
  }

  .modal__link-title {
    font-size: 24px;
  }

  .modal__close {
    svg {
      height: 40px;
      width: 40px;
    }
  }
}
</style>
