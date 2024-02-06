<template>
  <div>
    <div class="roomTitle tw-text-h5 tw-mb-6">房內設備</div>
    <ProfileDevice :items="roomInfo?.facilityInfo" />
    <div class="roomTitle tw-text-h5 tw-mb-6">備品提供</div>
    <ProfileDevice :items="roomInfo?.amenityInfo" />
  </div>
</template>

<script setup lang="ts">
import ProfileDevice from "@/components/member/profile/ProfileDevice.vue";
type roomInfo =  {
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
  }
defineProps<{ roomInfo: roomInfo | undefined }>();
</script>

<style scoped>
.roomTitle {
  @apply tw-mt-12 tw-pl-4 tw-border-l-4 tw-border-primary-100;
}
</style>
