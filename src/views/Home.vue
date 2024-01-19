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
        class="lg:tw-max-w-[50%] tw-flex tw-flex-col tw-justify-center tw-items-center lg:tw-items-start tw-text-center lg:tw-text-left tw-w-full tw-relative tw-z-10"
      >
        <div
          class="tw-text-h4 lg:tw-text-h2 tw-font-bold tw-tracking-wider gradient tw-inline-block tw-text-transparent tw-bg-clip-text"
        >
          享樂酒店<br />
          <span class="tw-text-title lg:tw-text-h5"
            >Enjoyment Luxury Hotel</span
          >
        </div>
        <hr
          class="tw-mt-4 gradient bannerDivider tw-border-0 tw-h-[1px] tw-w-5/6"
        />
      </div>
      <div class="tw-relative tw-w-full lg:tw-w-auto lg:tw-static lg:tw-mr-44">
        <div class="tw-relative tw-z-10">
          <div class="tw-text-h2 lg:tw-text-display tw-mb-6">
            高雄<br />
            豪華住宿之選
          </div>
          <div class="tw-text-title lg:tw-text-2xl tw-mb-4">
            我們致力於為您提供無與倫比的奢華體驗與優質服務
          </div>
          <div
            class="tw-group tw-flex tw-items-center tw-bg-white tw-text-black-100 tw-text-right tw-w-[97%] tw-p-6 tw-rounded-lg hover:tw-bg-primary-100 hover:tw-text-white tw-cursor-pointer"
          >
            <div class="tw-basis-4/5 tw-h-[1px]"></div>
            <div class="tw-whitespace-nowrap mr-2 tw-text-h6">立即訂房</div>
            <div
              class="tw-basis-2/5 tw-h-[1px] tw-bg-black-60 group-hover:tw-bg-white"
            ></div>
          </div>
        </div>
        <div
          class="tw-absolute tw-w-[90%] lg:tw-w-[40vw] tw-h-[400px] lg:tw-h-[600px] tw-max-w-full lg:tw-right-[-50px] tw-top-0 tw-right-0 tw-rounded-[40px] lg:tw-rounded-[80px] tw-border-t tw-border-r tw-border-[#fff6] bannerRightBg"
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
.bannerDivider {
  display: block;
  @media (max-width: 1280px) {
    transform: rotate(90deg);
    width: 100px;
    margin: 80px 0 60px;
  }
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
