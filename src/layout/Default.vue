<template>
  <v-app>
    <v-app-bar
      class="tw-px-[80px] tw-py-6"
      flat
      theme="dark"
      color="background"
    >
      <template #title>
        <v-img
          max-width="200"
          src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/logo.png"
        ></v-img>
      </template>
      <template #append>
        <router-link to="/rooms" class="mr-8 tw-text-md tw-font-bold"
          >客房旅宿</router-link
        >
        <router-link to="/login" class="mr-8 tw-text-md tw-font-bold"
          >會員登入</router-link
        >
        <v-btn
          variant="tonal"
          class="mr-8 tw-text-md tw-font-bold"
          color="primary80"
        >
          <router-link to="/booking">立即訂房</router-link>
        </v-btn>
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

<script setup lang="ts"></script>

<style scoped></style>
