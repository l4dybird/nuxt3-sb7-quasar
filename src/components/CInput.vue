<script setup lang="ts">
const props = defineProps<{
  modelValue: string;
}>();
const emit = defineEmits<{ "update:modelValue": [text: string]}>();

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