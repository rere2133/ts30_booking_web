<template>
  <div
    class="tw-w-[120px] tw-aspect-square tw-rounded-lg tw-p-4 md:tw-p-4"
    :class="$attrs.variant === 'solid' ? 'solid' : 'outlined'"
  >
    <v-icon :icon="icon" color="primary" class="tw-mb-2"></v-icon>
    <p class="sm:tw-text-subtitle md:tw-text-title">
      {{ info }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  icon: {
    type: String,
    required: true,
  },

  info: {
    type: String,
    default: "",
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
