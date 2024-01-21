<template>
  <div>
    <Banner>
      <template #bannerRight>
        <BannerRight />
      </template>
    </Banner>
  </div>
</template>

<script setup lang="ts">
import Banner from "@/components/Banner.vue";
import BannerRight from "@/components/home/BannerRight.vue";
</script>

<style scoped lang="scss"></style>
