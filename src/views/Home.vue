<template>
  <div>
    <Banner>
      <template #bannerRight>
        <BannerRight />
      </template>
    </Banner>
    <NewInfo />
    <About />
  </div>
</template>

<script setup lang="ts">
import Banner from "@/components/Banner.vue";
import BannerRight from "@/components/home/BannerRight.vue";
import NewInfo from "@/components/home/NewInfo.vue";
import About from "@/components/home/About.vue";
</script>

<style scoped lang="scss"></style>
