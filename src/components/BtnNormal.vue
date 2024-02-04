<template>
  <div
    @click="action"
    class="tw-group tw-items-center tw-text-white tw-text-center tw-p-4 tw-rounded-lg tw-bg-primary-100 tw-cursor-pointer hover:tw-bg-primary-120"
    :class="disabled ? 'tw-opacity-50 tw-cursor-not-allowed' : ''"
  >
    <div class="tw-whitespace-nowrap mr-2 tw-text-h6">{{ text }}</div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(["action"]);

const props = defineProps({
  text: {
    type: String,
    default: "",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
const action = () => {
  if (props.disabled) return;
  emit("action");
};
</script>

<style scoped></style>
