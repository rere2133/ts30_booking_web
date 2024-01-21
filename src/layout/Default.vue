<template>
  <v-app>
    <v-app-bar
      class="tw-px-[16px] lg:tw-px-[80px] tw-py-6"
      flat
      color="transparent"
    >
      <template #title>
        <v-img
          max-width="200"
          class="tw-cursor-pointer"
          :src="getImageUrl('logo.png')"
          @click="router.push('/')"
        ></v-img>
      </template>
      <template #append>
        <div v-if="webOrMobile == 'web'" class="tw-flex tw-items-center">
          <router-link to="/rooms" class="mr-8 tw-text-md tw-font-bold"
            >客房旅宿</router-link
          >
          <router-link to="/login" class="mr-8 tw-text-md tw-font-bold"
            >會員登入</router-link
          >
          <div
            class="mr-8 tw-text-md tw-font-bold tw-text-white tw-bg-primary-100 tw-py-4 tw-px-8 tw-rounded-lg tw-cursor-pointer hover:tw-bg-primary-80 tw-transition-all"
          >
            <router-link to="/rooms">立即訂房</router-link>
          </div>
        </div>
        <div v-else>
          <v-icon icon="mdi-menu" class="tw-mr-4" />
        </div>
      </template>
    </v-app-bar>
    <v-main style="--v-layout-top: 112px">
      <div class="mx-auto">
        <router-view></router-view>
      </div>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useHelper } from "@/utils/useHelper";
import { useDisplay } from "vuetify";
const router = useRouter();
const { getImageUrl, webOrMobile } = useHelper();
</script>

<style scoped lang="scss">
.mainContainer {
  --v-layout-left: 100px !important;
  --v-layout-right: 100px !important;
  --v-layout-top: 120px !important;
  --v-layout-bottom: 80px !important;
  @media (max-width: 1280px) {
    --v-layout-left: 24px !important;
    --v-layout-right: 24px !important;
    --v-layout-top: 80px !important;
    --v-layout-bottom: 50px !important;
  }
}
</style>
