<script setup lang="ts">
import type { OurButton } from '@/Interfaces/OurButton.ts'

defineOptions({
  name: 'OurButton',
})

const props = defineProps<OurButton>()
</script>

<template>
  <button :type="props.isSubmit ? 'submit' : 'button'">
    <slot />
  </button>
</template>

<style scoped>

</style>
