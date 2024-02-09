<template>
  <div>
    <div
      v-if="roomInfo?.facilityInfo?.length != 0"
      class="roomTitle tw-text-h5 tw-mb-6"
    >
      房內設備
    </div>
    <OrderDevice
      v-if="roomInfo?.facilityInfo?.length != 0"
      :items="roomInfo?.facilityInfo"
    />
    <div
      v-if="roomInfo?.amenityInfo?.length != 0"
      class="roomTitle tw-text-h5 tw-mb-6"
    >
      備品提供
    </div>
    <OrderDevice
      v-if="roomInfo?.amenityInfo?.length != 0"
      :items="roomInfo?.amenityInfo"
    />
  </div>
</template>

<script setup lang="ts">
import OrderDevice from "@/components/member/Order/OrderDevice.vue";
type roomInfo = {
  _id: string;
  name: string;
  description: string;
  imageUrl: string;
  imageUrlList: string[];
  areaInfo: string;
  bedInfo: string;
  maxPeople: number;
  price: number;
  facilityInfo: {
    title: string;
    isProvide: boolean;
  }[];
  amenityInfo: {
    title: string;
    isProvide: boolean;
  }[];
  status: number;
  creator: string;
  createdAt: string;
  updatedAt: string;
};
defineProps<{ roomInfo: roomInfo | undefined }>();
</script>

<style scoped>
.roomTitle {
  @apply tw-mt-12 tw-pl-4 tw-border-l-4 tw-border-primary-100;
}
</style>
