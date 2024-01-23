<template>
  <HomeContainer class="tw-bg-blackbg tw-relative tw-mt-16 tw-min-h-[800px]">
    <div class="tw-w-full tw-absolute tw-top-10 tw-h-[600px]">
      <img :src="getImageUrl('about.png')" />
    </div>
    <div class="tw-flex">
      <div
        class="tw-ml-[10%] tw-basis-5/6 tw-rounded-t-[80px] tw-rounded-bl-[80px] tw-border-l tw-border-b tw-border-[#fff6] tw-p-[30px] lg:tw-p-[80px] tw-overflow-hidden blockGradient lg:tw-ml-[30%] lg:tw-basis-3/5 tw-mt-[60px] lg:tw-mt-[200px]"
      >
        <div class="tw-mx-auto tw-w-[90%]">
          <div
            class="tw-text-h3 lg:tw-text-h2 tw-flex tw-items-center tw-gap-10 tw-mb-8 tw-whitespace-nowrap"
          >
            關於<br />
            我們
            <hr class="gb-divider tw-bg-white tw-w-[80px] lg:tw-w-[160px]" />
          </div>
          <div>
            <div
              v-for="(content, idx) in homeData.about"
              :key="idx"
              class="tw-mb-4 tw-whitespace-pre-line"
            >
              {{ content.paragraph }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </HomeContainer>
</template>

<script setup lang="ts">
import HomeContainer from "./HomeContainer.vue";
import { useHelper } from "@/utils/useHelper";
import { homeData } from "@/utils/homeData";

const { getImageUrl } = useHelper();
</script>

<style scoped>
.blockGradient {
  background: linear-gradient(
    180deg,
    rgba(20, 15, 10, 0.8) 0%,
    rgba(190, 156, 124, 0.8) 100%
  );

  backdrop-filter: blur(10px);
}
</style>
