<template>
  <div>
    <div class="roomTitle tw-text-h5 tw-mb-6">房型基本資訊</div>
    <div class="tw-flex tw-mt-8 tw-gap-2 md:tw-gap-4">
      <RoomInfoCard
        variant="solid"
        icon="mdi-arrow-expand"
        :info="roomInfo?.areaInfo"
      />
      <RoomInfoCard variant="solid" icon="mdi-bed" :info="roomInfo?.bedInfo" />
      <RoomInfoCard
        variant="solid"
        icon="mdi-account"
        :info="`${roomInfo?.maxPeople}人`"
      />
    </div>
    <div class="roomTitle tw-text-h5 tw-mb-6">房間格局</div>
    <RoomDetailCard :items="roomInfo?.layout" />
    <div class="roomTitle tw-text-h5 tw-mb-6">房內設備</div>
    <RoomDetailCard :items="roomInfo?.facilityInfo" />
    <div class="roomTitle tw-text-h5 tw-mb-6">備品提供</div>
    <RoomDetailCard :items="roomInfo?.amenityInfo" />
  </div>
</template>

<script setup lang="ts">
import RoomInfoCard from "@/components/rooms/RoomInfoCard.vue";
import RoomDetailCard from "@/components/rooms/RoomDetailCard.vue";
import type { RoomType } from "@/types";

defineProps<{ roomInfo: RoomType | undefined }>();
</script>

<style scoped>
.roomTitle {
  @apply tw-mt-12 tw-pl-4 tw-border-l-4 tw-border-primary-100;
}
</style>
