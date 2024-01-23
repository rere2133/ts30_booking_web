<template>
  <div>
    <v-icon
      :icon="trans.icon"
      color="primary"
      size="80"
      class="tw-mb-4"
    ></v-icon>
    <h3 class="tw-text-h3 tw-mb-4">
      {{ trans.title }}
    </h3>
    <p>
      {{ trans.content }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  trans: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped></style>
