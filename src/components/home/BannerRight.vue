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
      <BtnWithLine to="/rooms" text="立即訂房" width="97%" />
    </div>
    <div
      class="tw-absolute tw-w-[90%] tw-h-[50vh] tw-max-h-[70vh] tw-max-w-full tw-top-[50%] tw-right-0 tw-translate-y-[-50%] tw-rounded-[40px] tw-border-t tw-border-r tw-border-[#fff6] lg:tw-h-full lg:tw-mr-10 lg:tw-w-[40vw] lg:tw-rounded-[80px] bannerRightBg"
    ></div>
  </div>
</template>

<script setup lang="ts">
// import { useRouter } from "vue-router";
import BtnWithLine from "../BtnWithLine.vue";

// const router = useRouter();
</script>

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
