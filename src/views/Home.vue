<template>
  <div>
    <Banner>
      <template #bannerRight>
        <BannerRight />
      </template>
    </Banner>
    <NewInfo />
    <About />
    <RoomIntro />
    <FoodIntro />
    <TransportInfo />
  </div>
</template>

<script setup lang="ts">
import Banner from "@/components/Banner.vue";
import BannerRight from "@/components/home/BannerRight.vue";
import NewInfo from "@/components/home/NewInfo.vue";
import About from "@/components/home/About.vue";
import RoomIntro from "@/components/home/RoomIntro.vue";
import FoodIntro from "@/components/home/FoodIntro.vue";
import TransportInfo from "@/components/home/TransportInfo.vue";
</script>

<style scoped lang="scss"></style>
