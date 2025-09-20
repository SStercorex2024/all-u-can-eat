<script setup lang="ts">
import type { CustomCheckbox } from '@/Interfaces/CustomCheckbox.ts'

const props = defineProps<CustomCheckbox>()

const emit = defineEmits<{
  'update:modelValue': [value: boolean | string | number]
}>()

const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement

  if (props.type === 'checkbox') {
    emit('update:modelValue', target.checked)
  } else if (props.type === 'radio') {
    emit('update:modelValue', props.value || props.label)
  }
}
</script>

<template>
  <div class="input-wrapper">
    <input
      :class="[
        props.type === 'checkbox' && 'input-checkbox',
        props.type === 'radio' && 'input-radio',
      ]"
      :type="props.type"
      :id="props.label"
      :name="props.name"
      :value="props.value || props.label"
      :checked="props.type === 'checkbox' ? !!props.modelValue : props.modelValue === (props.value || props.label)"
      @change="handleChange"
    />
    <label :for="props.label">{{ props.label }}</label>
  </div>
</template>

<style scoped>
.input-wrapper {
  display: flex;
  column-gap: 10px;
  justify-content: flex-start;
  align-items: center;
  width: fit-content;
}
input {
  margin: 0;
}
.input-checkbox {
  position: relative;
  width: 16px;
  height: 16px;
  border-radius: var(--border-radius-m);
  border: 1px solid var(--color-black);
  background-color: var(--color-white);
  transition: var(--transition-duration);
}
.input-checkbox:checked {
  background-color: var(--color-blue);
  border: transparent;
}
.input-checkbox:checked:before {
  position: absolute;
  content: '';
  background-image: url("/check.svg");
  background-position: center center;
  background-repeat: no-repeat;
  width: 12px;
  height: 8px;
  inset: 0;
}
.input-radio {
  position: relative;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid var(--color-black);
  background-color: var(--color-white);
  transition: var(--transition-duration);
}
.input-radio:checked {
  background-color: var(--color-blue);
  border: transparent;
}
.input-radio:checked:before {
  position: absolute;
  content: '';
  width: 6px;
  height: 6px;
  inset: 0;
  border-radius: 50%;
  background-color: var(--color-white);
}
</style>
