<script setup lang="ts">
defineProps<{
  label: string;
}>()
</script>

<template>
  <p>{{ label }}</p>
</template>