<script setup lang="ts">
const props = defineProps<{
  modelValue: string;
}>();
const emit = defineEmits<{(e: 'update:modelValue', text: string): void}>();

const text = computed({
  get() {
    return props.modelValue;
  },
  set(value: string) {
    emit('update:modelValue', value);
  },
})
</script>

<template>
  <q-input aria-label="Input" v-model="text" type="text" />
</template>