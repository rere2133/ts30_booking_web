<template>
  <HomeContainer class="tw-bg-blackbg tw-relative tw-overflow-hidden">
    <v-row class="tw-items-center">
      <v-col cols="12" lg="6">
        <img
          class="bgDecImg d-block d-lg-none"
          style="--left: 30%; --min-width: 300%"
          :src="getImageUrl('line2.png')"
        />
        <div
          class="tw-pt-[20%] tw-relative tw-z-10 tw-max-h-[900px] tw-rounded-r-lg tw-overflow-hidden lg:tw-py-[10%]"
        >
          <img :src="getImageUrl('room1.png')" />
        </div>
        <img
          class="bgDecImg d-block d-lg-none"
          style="--top: 60%"
          :src="getImageUrl('bg.png')"
        />
      </v-col>
      <v-col cols="12" lg="6">
        <div
          class="lg:tw-mt-[50%] tw-pl-10 tw-w-[75%] tw-max-w-[560px] tw-relative tw-z-10"
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
          style="--top: 20%"
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
  --top: 0%;
  --left: 0%;
  --min-width: 100%;
  position: absolute;
  top: var(--top);
  left: var(--left);
  z-index: 0;
  width: var(--min-width);
  min-width: var(--min-width);

  object-fit: cover;
}
</style>
