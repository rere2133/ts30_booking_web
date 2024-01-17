<template>
  <v-app>
    <v-app-bar class="tw-px-[80px] tw-py-6" flat color="transparent">
      <template #title>
        <v-img
          max-width="200"
          class="tw-cursor-pointer"
          :src="getImageUrl('logo.png')"
          @click="router.push('/')"
        ></v-img>
      </template>
      <template #append>
        <router-link to="/rooms" class="mr-8 tw-text-md tw-font-bold"
          >客房旅宿</router-link
        >
        <router-link to="/login" class="mr-8 tw-text-md tw-font-bold"
          >會員登入</router-link
        >
        <div
          class="mr-8 tw-text-md tw-font-bold tw-text-white tw-bg-primary-100 tw-py-4 tw-px-8 tw-rounded-lg tw-cursor-pointer hover:tw-bg-primary-80 tw-transition-all"
        >
          <router-link to="/booking">立即訂房</router-link>
        </div>
      </template>
    </v-app-bar>
    <v-main
      class="tw-max-w-[1280px]"
      style="
        --v-layout-left: 100px;
        --v-layout-right: 100px;
        --v-layout-top: 120px;
        --v-layout-bottom: 80px;
      "
    >
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { useHelper } from "@/utils/useHelper";
const router = useRouter();
const { getImageUrl } = useHelper();
</script>

<style scoped></style>
