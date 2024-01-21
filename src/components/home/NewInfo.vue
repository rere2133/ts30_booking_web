<template>
  <HomeContainer class="tw-bg-primary-40 tw-relative tw-z-10 tw-py-20">
    <v-container max-width="900">
      <v-row justify="space-between" wrap>
        <v-col cols="12" lg="1">
          <h2
            class="tw-text-h4 tw-text-primary-100 lg:tw-text-h2 tw-whitespace-nowrap"
          >
            最新<br />
            消息
          </h2>
          <hr class="textGradient tw-mt-4 tw-border-0 tw-h-[1px] tw-w-full" />
        </v-col>
        <v-col cols="12" lg="10">
          <NewInfoPlan
            v-for="plan in homeData.news"
            :key="plan.id"
            :plan="plan"
          />
        </v-col>
      </v-row>
    </v-container>
    <v-img class="dotImg dot1" :src="getImageUrl('dot.png')"></v-img>
    <v-img class="dotImg dot2" :src="getImageUrl('dot.png')"></v-img>
  </HomeContainer>
</template>

<script setup lang="ts">
import HomeContainer from "@/components/home/HomeContainer.vue";
import NewInfoPlan from "./NewInfoPlan.vue";
import { homeData } from "@/utils/homeData";
import { useHelper } from "@/utils/useHelper";

const { getImageUrl } = useHelper();
</script>

<style scoped lang="scss">
@import "@/styles/mixins.scss";
.center {
  @include center($h: "fit-content");
}
.dotImg {
  position: absolute;
  width: 200px;
  height: 200px;
  &.dot1 {
    top: 80px;
    right: 200px;
  }
  &.dot2 {
    left: 200px;
    bottom: -80px;
  }
}
</style>
