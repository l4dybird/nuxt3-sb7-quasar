<script setup lang="ts">
defineProps<{
  label: string;
}>()
const emit = defineEmits(["click"]);
const onClick = () => {
  emit("click");
}
</script>

<template>
  <q-btn color="primary" :label="label" @click="onClick" />
</template>