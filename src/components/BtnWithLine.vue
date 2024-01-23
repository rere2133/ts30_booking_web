<template>
  <div
    @click="router.push(to)"
    class="tw-group tw-flex tw-items-center tw-bg-white tw-text-black-100 tw-text-right tw-p-6 tw-rounded-lg hover:tw-bg-primary-100 hover:tw-text-white tw-cursor-pointer tw-w-[97%]"
  >
    <div class="tw-basis-4/5 tw-h-[1px]"></div>
    <div class="tw-whitespace-nowrap mr-2 tw-text-h6">{{ text }}</div>
    <div
      class="tw-basis-2/5 tw-h-[1px] tw-bg-black-60 group-hover:tw-bg-white"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();

defineProps({
  to: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    default: "",
  },
});
</script>

<style scoped></style>
