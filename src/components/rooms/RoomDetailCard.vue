<template>
  <div class="tw-bg-white tw-rounded-xl tw-p-6 tw-flex tw-gap-4 tw-flex-wrap">
    <div v-for="(item, idx) in items" :key="idx" class="tw-flex">
      <v-icon icon="mdi-check" color="primary"></v-icon>
      <p class="tw-pl-1 tw-whitespace-nowrap">{{ item }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  items: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped></style>
