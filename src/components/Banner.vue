<template>
  <HomeContainer class="tw-relative bg">
    <!-- <div
      class="tw-w-screen tw-absolute tw-top-0 tw-left-0 tw-brightness-[.30] tw-z-0"
    >
      <img
        class="banner tw-aspect-[4/3] tw-object-cover tw-object-top tw-w-full"
        :src="getImageUrl('banner.png')"
      />
    </div> -->
    <div
      class="container tw-pt-[40px] tw-max-h-screen tw-flex tw-flex-wrap tw-gap-8 tw-w-full tw-h-[75vh] lg:tw-h-[90vh] lg:tw-flex-nowrap"
      :class="$attrs.justify || 'tw-justify-between'"
    >
      <!-- <div class="tw-flex tw-flex-wrap tw-items-center tw-relative tw-h-[600px]"> -->
      <div
        class="tw-w-full tw-flex tw-flex-col tw-justify-center tw-items-center tw-text-center tw-relative tw-z-10 lg:tw-w-[40%] lg:tw-items-start lg:tw-text-left"
      >
        <div
          class="tw-text-h4 lg:tw-text-h2 tw-tracking-wider textGradient tw-inline-block tw-text-transparent tw-bg-clip-text"
        >
          享樂酒店<br />
          <span class="tw-text-title lg:tw-text-h5"
            >Enjoyment Luxury Hotel</span
          >
        </div>
        <hr class="tw-mt-4 textGradient bannerDivider gb-divider tw-w-5/6" />
      </div>
      <!-- To show the element remind to add 'tw-relative' class at the first layer of bannerRight -->
      <slot name="bannerRight" />
    </div>
  </HomeContainer>
</template>

<script setup lang="ts">
import { watch } from "vue";
import { useHelper } from "@/utils/useHelper";
import HomeContainer from "./home/HomeContainer.vue";
const { getImageUrl, webOrMobile } = useHelper();
watch(
  () => webOrMobile,
  () => {
    document.documentElement.style.setProperty(
      "--bgImg",
      `url(${getImageUrl("banner.png")})`
    );
  },
  { immediate: true }
);
</script>

<style scoped lang="scss">
@import "@/styles/mixins.scss";
.center {
  @include center($h: 900px);
}
.bg {
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: inherit;
    background: var(--bgImg);
    background-size: cover;
    background-position: top;
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: inherit;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.5) 100%
    );
  }
}

.bannerDivider {
  display: block;
  @media (max-width: 1279px) {
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
</style>
