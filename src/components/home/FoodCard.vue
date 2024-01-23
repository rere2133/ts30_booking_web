<template>
  <div
    class="tw-relative tw-min-w-[350px] lg:tw-min-w-[416px] tw-h-[600px] tw-bg-cover tw-bg-center tw-bg-no-repeat tw-rounded-lg tw-overflow-hidden"
    :class="`tw-bg-${food.img}`"
  >
    <div
      class="cardBg tw-w-full tw-h-[36%] lg:tw-h-[200px] tw-absolute tw-bottom-0 tw-p-6"
    >
      <div class="tw-flex tw-mb-6">
        <h5 class="tw-text-h5">{{ food.title }}</h5>
        <p class="tw-ml-auto tw-text-title">{{ food.time }}</p>
      </div>
      <p class="tw-text-body">
        {{ food.content }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  food: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped lang="scss">
.cardBg {
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #140f0a 77.6%);

  backdrop-filter: blur(10px);
}
</style>
