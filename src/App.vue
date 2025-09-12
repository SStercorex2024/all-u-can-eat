<script setup lang="ts">
import { RouterView } from 'vue-router'
import OurHeader from '@/components/OurHeader.vue'
import OurFooter from '@/components/OurFooter.vue'
</script>

<template>
  <OurHeader/>
  <RouterView />
  <OurFooter/>
</template>

<style scoped></style>
