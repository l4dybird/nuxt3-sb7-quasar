<script setup lang="ts">
import { defineProps, defineEmits, computed } from "vue";
const props = defineProps<{
  modelValue: string;
}>();
const emits = defineEmits<{(e: 'update:modelValue', text: string): void}>();

const text = computed({
  get() {
    return props.modelValue;
  },
  set(value: string) {
    emits('update:modelValue', value);
  },
})
</script>

<template>
  <q-input aria-label="Input" v-model="text" type="text" />
</template>