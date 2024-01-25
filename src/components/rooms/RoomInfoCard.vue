<template>
  <div
    class="tw-w-[100px] tw-aspect-square tw-rounded-lg tw-p-4 md:tw-p-4"
    :class="$attrs.variant === 'solid' ? 'solid' : 'outlined'"
  >
    <v-icon :icon="info.icon" color="primary" class="tw-mb-2"></v-icon>
    <p class="sm:tw-text-subtitle md:tw-text-title">
      {{ info.num }} {{ info.unit }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  info: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.outlined {
  @apply tw-border tw-border-primary-100;
}
.solid {
  @apply tw-bg-white;
}
</style>
