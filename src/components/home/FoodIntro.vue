<template>
  <HomeContainer class="tw-relative tw-bg-primary-40 tw-py-20">
    <div class="tw-flex tw-pl-6">
      <div class="tw-hidden lg:tw-block tw-flex-none tw-w-[15vw] tw-relative">
        <img
          :src="getImageUrl('line.png')"
          class="tw-w-[10vw] tw-absolute tw-top-[5%] tw-left-[20%]"
        />
      </div>
      <div class="tw-w-full">
        <div class="tw-flex tw-items-center tw-w-[200px] tw-gap-4 tw-mb-10">
          <h2
            class="tw-text-h4 tw-text-primary-100 lg:tw-text-h2 tw-whitespace-nowrap"
          >
            佳饌<br />
            美食
          </h2>
          <hr class="gb-divider textGradient tw-mt-4 tw-w-full" />
        </div>
        <div
          class="tw-flex tw-overflow-x-scroll tw-pb-4 tw-mr-4 tw-w-full lg:tw-w-[84vw] scrollBar"
        >
          <FoodCard
            v-for="food in homeData.food"
            :key="food.id"
            :food="food"
            class="tw-mr-5"
          />
        </div>
      </div>
    </div>
    <div class="tw-w-[200px] tw-absolute tw-top-[-10%] tw-right-[5%]">
      <img
        :src="getImageUrl('dot.png')"
        class="tw-w-full tw-aspect-square tw-z-10"
      />
    </div>
  </HomeContainer>
</template>

<script setup lang="ts">
import HomeContainer from "./HomeContainer.vue";
import FoodCard from "./FoodCard.vue";
import { useHelper } from "@/utils/useHelper";
import { homeData } from "@/utils/homeData";

const { getImageUrl } = useHelper();
</script>

<style scoped>
.scrollBar {
  ::-webkit-scrollbar {
    height: 5px;
  }
}
</style>
