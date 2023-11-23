<script setup lang="ts">
const props = defineProps<{
  modelValue: string;
}>();
const emit = defineEmits<{ "update:modelValue": [text: string]}>();

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value: string) {
    emit('update:modelValue', value);
  },
})
</script>

<template>
    <CSample :label="value" />
    <CInput v-model="value" />
</template>