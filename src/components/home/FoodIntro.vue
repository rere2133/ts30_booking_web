<template>
  <HomeContainer class="tw-relative tw-bg-primary-40">
    <div class="tw-flex">
      <div class="tw-flex-none tw-w-[15vw] tw-relative">
        <img
          :src="getImageUrl('line.png')"
          class="tw-w-[10vw] tw-absolute tw-top-[5%] tw-left-[20%]"
        />
      </div>
      <div>
        <div class="tw-flex tw-items-center tw-w-[200px] tw-gap-4 tw-mb-10">
          <h2
            class="tw-text-h4 tw-text-primary-100 lg:tw-text-h2 tw-whitespace-nowrap"
          >
            佳饌<br />
            美食
          </h2>
          <hr class="gb-divider textGradient tw-mt-4 tw-w-full" />
        </div>
        <div class="tw-flex tw-gap-4 tw-overflow-x-scroll tw-w-full">
          <FoodCard v-for="food in 5" :key="food" :num="food" />
        </div>
      </div>
    </div>
  </HomeContainer>
</template>

<script setup lang="ts">
import HomeContainer from "./HomeContainer.vue";
import FoodCard from "./FoodCard.vue";
import { useHelper } from "@/utils/useHelper";

const { getImageUrl } = useHelper();
</script>

<style scoped></style>
