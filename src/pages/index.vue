<script setup lang="ts">
const route = useRoute();
const value = ref("string");
</script>

<template>
  <q-page class="row items-center justify-evenly">
    meta: <span class="text-red">{{ route.meta.sample }}</span>
    <CBind v-model="value" />
  </q-page>
</template>
