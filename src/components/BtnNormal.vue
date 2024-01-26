<template>
  <div
    @click="$emit('action')"
    class="tw-group tw-items-center tw-bg-white tw-text-black-100 tw-text-right tw-p-6 tw-rounded-lg hover:tw-bg-primary-100 hover:tw-text-white tw-cursor-pointer tw-w-[97%]"
  >
    <div class="tw-whitespace-nowrap mr-2 tw-text-h6">{{ text }}</div>
  </div>
</template>

<script setup lang="ts">
defineEmits(["action"]);

defineProps({
  text: {
    type: String,
    default: "",
  },
});
</script>

<style scoped></style>
