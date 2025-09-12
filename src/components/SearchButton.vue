<script setup lang="ts">
import Search from '@/components/icons/Search.vue'
import OurButton from '@/components/OurButton.vue'
</script>

<template>
  <OurButton class="search-button">
    <Search class="search-button__icon" />
  </OurButton>
</template>

<style scoped>
.search-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border: none;
  padding: 0;
  background-color: transparent;
}
.search-button__icon {
  color: var(--color-blue);
}
</style>
