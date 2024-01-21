<template>
  <div
    class="tw-relative tw-w-[95%] tw-flex tw-flex-col tw-justify-center lg:tw-min-h-[400px] lg:tw-w-[60%]"
  >
    <div
      class="tw-relative tw-mx-auto lg:tw-ml-0 tw-z-10 tw-max-w-full lg:tw-max-w-[80%]"
    >
      <div class="tw-text-h2 lg:tw-text-display tw-mb-6">
        高雄<br />
        豪華住宿之選
      </div>
      <div class="tw-text-title lg:tw-text-2xl tw-mb-[40px] lg:tw-mb-[60px]">
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
      class="tw-absolute tw-w-[90%] tw-h-[50vh] tw-max-h-[70vh] tw-max-w-full tw-top-[50%] tw-right-0 tw-translate-y-[-50%] tw-rounded-[40px] tw-border-t tw-border-r tw-border-[#fff6] lg:tw-h-full lg:tw-right-[-20px] lg:tw-w-[40vw]lg:tw-rounded-[80px] bannerRightBg"
    ></div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.bannerRightBg {
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.3) 100%
  );

  backdrop-filter: blur(10px);
}
</style>
