<template>
  <div>
    <div
      class="tw-h-screen tw-w-screen tw-absolute tw-top-0 tw-left-0 tw-brightness-[.30] tw-z-0"
    >
      <v-img
        class="banner"
        height="100vh"
        cover
        :src="`${img_host}/banner.png`"
      ></v-img>
    </div>
    <div class="tw-flex tw-flex-wrap tw-items-center tw-relative tw-h-[600px]">
      <div
        class="tw-flex-1 tw-flex tw-flex-col tw-justify-center tw-relative tw-z-10"
      >
        <div
          class="tw-text-h2 tw-font-bold tw-tracking-wider gradient tw-inline-block tw-text-transparent tw-bg-clip-text"
        >
          享樂酒店<br />
          <span class="tw-text-h5">Enjoyment Luxury Hotel</span>
        </div>
        <hr class="tw-mt-4 gradient tw-border-0 tw-h-[1px] tw-w-5/6" />
      </div>
      <div class="tw-flex-1 tw-min-w-[400px]">
        <div class="tw-relative tw-z-10">
          <div class="tw-text-display tw-mb-6">
            高雄<br />
            豪華住宿之選
          </div>
          <div class="tw-text-2xl">
            我們致力於為您提供無與倫比的奢華體驗與優質服務
          </div>
        </div>

        <div
          class="tw-absolute tw-w-full lg:tw-w-[40vw] tw-h-[600px] tw-max-w-full tw-right-[-50px] tw-top-0 tw-rounded-[80px] tw-border-t tw-border-r tw-border-[#fff6] bannerRightBg"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { img_host } from "@/utils/imageSource";
</script>

<style scoped lang="scss">
.gradient {
  @apply tw-bg-gradient-to-r tw-from-primary-100 tw-to-[#fff];
}
.banner {
  &:deep(.v-img__img) {
    object-position: top;
  }
}
.bannerRightBg {
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.3) 100%
  );

  backdrop-filter: blur(10px);
}
</style>
