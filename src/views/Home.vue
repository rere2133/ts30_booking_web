<template>
  <div>
    <div
      class="tw-h-screen tw-w-screen tw-absolute tw-top-0 tw-left-0 tw-bg-contain tw-brightness-50"
      :class="`tw-bg-[url(${img_host}/banner.png)]`"
    ></div>
    <div class="tw-relative">
      <div class="tw-flex">
        <div class="tw-flex-1">
          <div
            class="tw-text-4xl tw-font-bold tw-tracking-wider gradient tw-inline-block tw-text-transparent tw-bg-clip-text"
          >
            享樂酒店<br />
            <span class="tw-text-2xl">Enjoyment Luxury Hotel</span>
          </div>
          <hr class="tw-mt-4 gradient tw-border-0 tw-h-[1px] tw-w-5/6" />
        </div>
        <div class="tw-flex-1">
          <div class="tw-text-[80px] tw-font-bold">
            高雄<br />
            豪華住宿之選
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { img_host } from "@/utils/imageSource";
</script>

<style scoped>
.gradient {
  @apply tw-bg-gradient-to-r tw-from-primary-100 tw-to-[#fff];
}
</style>
