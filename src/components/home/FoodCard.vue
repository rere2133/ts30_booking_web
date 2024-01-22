<template>
  <div
    class="tw-w-[416px] tw-h-[600px] tw-bg-cover tw-bg-center tw-bg-no-repeat"
    :class="`tw-bg-[url('/imgs/web/food${num}.png')]`"
  ></div>
</template>

<script setup lang="ts">
import { useHelper } from "@/utils/useHelper";
const { getImageUrl } = useHelper();

defineProps({
  num: {
    type: Number,
    required: true,
  },
});
</script>

<style scoped></style>
