<template>
  <div class="tw-h-[400px] tw-bg-white tw-rounded-[20px] tw-p-10">
    <h5 class="tw-text-h5">預訂房型</h5>
    <hr class="tw-my-4" />
    <h2 class="tw-text-h2 tw-mb-2">{{ roomInfo.title }}</h2>
    <p class="tw-text-body tw-text-black-80 tw-mb-10">
      {{ roomInfo.description }}
    </p>
    <div class="tw-flex tw-items-center">
      <div>人數</div>
      <div class="tw-ml-auto">
        <v-btn icon="mdi-minus" variant="outlined" color="black80"></v-btn>
        <span class="tw-mx-4 tw-text-h6">{{ booingData.num }}</span>
        <v-btn icon="mdi-plus" variant="outlined" color="black80"></v-btn>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

defineProps({
  roomInfo: {
    type: Object,
    required: true,
  },
});

const booingData = ref({
  num: 2,
});
</script>

<style scoped></style>
