<template>
  <div>
    <Banner justify="tw-justify-center">
      <template #bannerRight>
        <div class="tw-relative tw-text-h1 tw-self-center tw-z-10">
          客房旅宿
        </div>
      </template>
    </Banner>
    <HomeContainer class="tw-bg-primary-40">
      <div class="container">
        <p class="tw-text-black-80 tw-text-h6 tw-mb-4">房型選擇</p>
        <h1 class="tw-text-primary-100 tw-text-h1">各種房型，任您挑選</h1>
        <div class="tw-pt-10">
          <RoomCard
            v-for="room in rooms"
            :key="room.id"
            :room="room"
            class="tw-mb-6"
          />
        </div>
      </div>
    </HomeContainer>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Banner from "@/components/Banner.vue";
import HomeContainer from "@/components/home/HomeContainer.vue";
import RoomCard from "@/components/rooms/RoomCard.vue";

const rooms = ref([
  {
    id: 1,
    title: "尊爵雙人房",
    description:
      "享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。",
    imgs: ["room2-1.png"],
    info: [
      {
        icon: "mdi-arrow-expand",
        num: "24",
        unit: "坪",
      },
      {
        icon: "mdi-bed",
        num: "1",
        unit: "張大床",
      },
      {
        icon: "mdi-account",
        num: "2-4",
        unit: "人",
      },
    ],
    price: "10000",
  },
]);
</script>

<style scoped></style>
