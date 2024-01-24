<template>
  <div
    class="tw-w-full tw-rounded-[20px] tw-bg-white md:tw-flex tw-overflow-hidden"
  >
    <div class="tw-basis-3/5 tw-min-h-full">
      <img
        class="tw-object-cover tw-h-full"
        :src="getImageUrl('room2-1.png')"
      />
    </div>
    <div class="tw-basis-2/5 tw-text-black-100 tw-p-10">
      <h2 class="tw-text-h4 lg:tw-text-h2 tw-mb-2">尊爵雙人房</h2>
      <p class="tw-text-body">
        享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。
      </p>
      <div class="tw-flex tw-mt-8">
        <RoomInfoCard
          class="tw-mr-4"
          icon="icon-person"
          :title="`2人`"
          :content="`人數`"
          v-for="i in 3"
        />
      </div>
      <hr class="tw-my-10 textGradient bg-divider tw-w-full" />
      <div class="tw-flex tw-justify-between tw-text-primary-100">
        <h5 class="tw-text-h5">NT$ 10,000</h5>
        <v-icon icon="mdi-arrow-right"></v-icon>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import RoomInfoCard from "./RoomInfoCard.vue";
import { useHelper } from "@/utils/useHelper";
const { getImageUrl } = useHelper();
</script>

<style scoped></style>
