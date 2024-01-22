<template>
  <HomeContainer class="tw-bg-blackbg tw-relative">
    <v-row>
      <v-col cols="12" lg="6" class="tw-py-[100px]">
        <div
          class="tw-relative tw-z-10 tw-max-h-[900px] tw-rounded-r-lg tw-overflow-hidden"
        >
          <img :src="getImageUrl('room1.png')" />
        </div>
      </v-col>
      <v-col cols="12" lg="6">
        <div
          class="tw-mt-[70%] tw-pl-10 tw-w-[75%] tw-max-w-[560px] tw-relative tw-z-10"
        >
          <h2 class="tw-text-h2 tw-mb-4">尊爵雙人房</h2>
          <p>
            享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。
          </p>
          <h3 class="tw-text-h3 tw-mt-6 tw-mb-10">NT$ 10,000</h3>
          <BtnWithLine to="/rooms" text="查看更多" />
        </div>
        <img
          class="bgDecImg"
          style="--top: 15%"
          :src="getImageUrl('line2.png')"
        />
        <img class="bgDecImg" style="--top: 40%" :src="getImageUrl('bg.png')" />
      </v-col>
    </v-row>
  </HomeContainer>
</template>

<script setup lang="ts">
import HomeContainer from "./HomeContainer.vue";
import BtnWithLine from "../BtnWithLine.vue";
import { useHelper } from "@/utils/useHelper";

const { getImageUrl } = useHelper();
</script>

<style scoped lang="scss">
.bgDecImg {
  position: absolute;
  top: var(--top);
  left: 0;
  z-index: 0;
  width: 100%;
  object-fit: cover;
}
</style>
