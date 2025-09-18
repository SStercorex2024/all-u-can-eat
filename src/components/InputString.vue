<script setup lang="ts">
import type { InputString } from '@/Interfaces/InputString.ts'

const props = defineProps<InputString>()

const modelValue = defineModel<string>()
</script>

<template>
  <input
    v-model="modelValue"
    :type="props.type"
    :name="props.type"
    :placeholder="props.placeholder"
    :id="props.type"
  />
</template>

<style scoped>
input {
  width: 100%;
  height: var(--height-button-l);
  padding-inline: 16px;
  background-color: var(--color-white);
  border: none;
  border-bottom: 2px solid var(--color-black);
  border-radius: var(--border-radius-m);
  line-height: 1.6;
}

input::placeholder {
  font-size: 16px;
  opacity: 0.75;
  color: var(--color-black);
}

input {
  caret-color: black;
}
</style>
