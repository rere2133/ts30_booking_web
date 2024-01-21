<template>
  <div>
    <div class="tw-h-screen tw-w-screen tw-absolute tw-top-0 tw-left-0 tw-z-0">
      <img
        class="tw-w-full tw-brightness-50 tw-object-top"
        :src="getImageUrl('banner.png')"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHelper } from "@/utils/useHelper";
const { getImageUrl } = useHelper();
</script>

<style scoped></style>
