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
          <RoomCard />
        </div>
      </div>
    </HomeContainer>
  </div>
</template>

<script setup lang="ts">
import Banner from "@/components/Banner.vue";
import HomeContainer from "@/components/home/HomeContainer.vue";
import RoomCard from "@/components/rooms/RoomCard.vue";
</script>

<style scoped></style>
