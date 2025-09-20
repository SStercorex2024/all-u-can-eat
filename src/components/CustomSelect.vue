<script setup lang="ts">
import { ref, onMounted, defineProps, defineEmits } from 'vue'
import type { CustomSelect } from '@/Interfaces/CustomSelect.ts'

const props = withDefaults(defineProps<CustomSelect>(), {
  default: null,
  tabindex: 0,
})

const emit = defineEmits<{
  input: [value: string | null]
}>()

const selected = ref<string | null>(
  props.default ? props.default : props.options.length > 0 ? props.options[0] : null,
)

const open = ref<boolean>(false)

const toggleSelect = () => {
  open.value = !open.value
}

const selectOption = (option: string) => {
  selected.value = option
  open.value = false
  emit('input', option)
}

const closeSelect = () => {
  open.value = false
}

onMounted(() => {
  emit('input', selected.value)
})
</script>

<template>
  <div class="custom-select" :tabindex="tabindex" @blur="closeSelect">
    <div class="selected" :class="{ open: open }" @click="toggleSelect">
      {{ selected }}
    </div>
    <div class="items" :class="{ selectHide: !open }">
      <div v-for="(option, i) of options" :key="i" @click="selectOption(option)">
        {{ option }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.custom-select {
  position: relative;
  width: 100%;
  text-align: left;
  height: var(--height-button-l);
  line-height: var(--height-button-l);
  z-index: var(--z-index-select);
}

.custom-select:focus {
  outline: 2px dashed var(--color-blue);
  border-bottom: none;
  border-radius: var(--border-radius-m);
}

.custom-select .selected {
  background-color: var(--color-white);
  border-radius: var(--border-radius-m);
  border: none;
  border-bottom: 2px solid var(--color-black);
  color: var(--color-black);
  padding-left: 16px;
  cursor: pointer;
  user-select: none;
}

.custom-select .selected.open {
  border-bottom: none;
}

.custom-select .selected.open:after {
  rotate: 90deg;
}

.custom-select .selected:after {
  position: absolute;
  content: '';
  top: 22px;
  right: 1em;
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-color: var(--color-black) transparent transparent transparent;
}

.custom-select .items {
  position: absolute;
  color: #fff;
  border-radius: 0 0 4px 4px;
  overflow: hidden;
  border-right: 1px solid var(--color-black);
  border-left: 1px solid var(--color-black);
  border-bottom: 1px solid var(--color-black);
  background-color: var(--color-white);
  left: 0;
  right: 0;
}

.custom-select .items div {
  color: var(--color-black);
  padding-left: 16px;
  cursor: pointer;
  user-select: none;
}

.custom-select .items div:hover {
  background-color: var(--color-yellow);
}

.selectHide {
  display: none;
}
</style>
