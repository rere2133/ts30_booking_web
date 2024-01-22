<template>
  <HomeContainer class="tw-relative tw-bg-blackbg container">
    <v-container max-width="900" class="tw-pb-[100px] lg:tw-pb-[140px]">
      <div class="tw-flex tw-items-center tw-w-[200px] tw-gap-4 tw-mb-10">
        <h2
          class="tw-text-h4 tw-text-primary-100 lg:tw-text-h2 tw-whitespace-nowrap"
        >
          交通<br />
          方式
        </h2>
        <hr class="gb-divider textGradient tw-mt-4 tw-w-full" />
      </div>
      <p class="tw-mb-4">台灣高雄市新興區六角路123號</p>
      <div class="tw-rounded-lg tw-mb-8">
        <img :src="getImageUrl('map.png')" />
      </div>
      <div class="tw-flex tw-gap-5 tw-flex-wrap lg:tw-flex-nowrap">
        <TransportCard
          v-for="trans in homeData.trans"
          :key="trans.id"
          :trans="trans"
        />
      </div>
    </v-container>

    <img
      class="tw-absolute tw-left-[-32px] lg:tw-left-[-45px] tw-bottom-0 tw-w-[180vw] tw-min-w-[180vw] lg:tw-w-[100vw] lg:tw-min-w-[100vw] tw-max-h-[140px]"
      :src="getImageUrl('line3.png')"
    />
  </HomeContainer>
</template>

<script setup lang="ts">
import HomeContainer from "./HomeContainer.vue";
import TransportCard from "./TransportCard.vue";
import { useHelper } from "@/utils/useHelper";
import { homeData } from "@/utils/homeData";

const { getImageUrl } = useHelper();
</script>

<style scoped></style>
