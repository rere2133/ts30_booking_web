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
          <div v-for="link in links" :key="link.path">
            <router-link
              v-if="link.title != '立即訂房'"
              :to="link.path"
              class="mr-8 tw-text-md tw-font-bold"
              >{{ link.title }}</router-link
            >
            <div
              v-else
              class="mr-8 tw-text-md tw-font-bold tw-text-white tw-bg-primary-100 tw-py-4 tw-px-8 tw-rounded-lg tw-cursor-pointer hover:tw-bg-primary-80 tw-transition-all"
            >
              <router-link :to="link.path">{{ link.title }}</router-link>
            </div>
          </div>
        </div>
        <div v-else>
          <v-icon
            v-if="!showOverlay"
            @click="showOverlay = true"
            icon="mdi-menu"
            class="tw-pr-4"
          />
          <v-icon
            v-else
            @click="showOverlay = false"
            icon="mdi-close"
            class="tw-pr-4"
          />
        </div>
      </template>
    </v-app-bar>
    <v-main style="--v-layout-top: 112px">
      <div class="mx-auto">
        <router-view></router-view>
      </div>
    </v-main>
    <transition name="fade">
      <div v-if="showOverlay" class="overlay">
        <!-- overlay 内容放在这里 -->
        <div class="overlay-content">
          <v-list bg-color="transparent" class="text-center tw-w-full">
            <v-list-item
              v-for="link in links"
              :key="link.path"
              @click="toPage(link.path)"
            >
              <p v-if="link.title != '立即訂房'" class="tw-text-title tw-mb-8">
                {{ link.title }}
              </p>
              <div
                v-else
                class="tw-text-md tw-font-bold tw-text-white tw-bg-primary-100 tw-py-4 tw-w-[90%] tw-mx-auto tw-rounded-lg tw-cursor-pointer hover:tw-bg-primary-80 tw-transition-all"
              >
                {{ link.title }}
              </div>
            </v-list-item>
          </v-list>
        </div>
      </div>
    </transition>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useHelper } from "@/utils/useHelper";
const { getImageUrl, webOrMobile } = useHelper();
const router = useRouter();
const showOverlay = ref(false);
const links = ref([
  {
    title: "客房旅宿",
    path: "/rooms",
  },
  {
    title: "會員登入",
    path: "/login",
  },
  {
    title: "立即訂房",
    path: "/rooms",
  },
]);
const toPage = (path: string) => {
  showOverlay.value = false;
  router.push(path);
};
</script>

<style scoped lang="scss">
@import "@/styles/main.scss";
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #0a0705; /* 半透明黑色背景 */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999; /* 确保在页面上其他元素之上 */
  opacity: 0.9;
}

.overlay-content {
  width: 100%;
  height: 100%;
  background-color: #0a0705;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  @include center($h: "50%");
}
.fade-enter-active,
.fade-leave-active {
  transition: transform 0.6s ease-in-out, opacity 0.5s 0.3s ease-in;
}
.fade-enter-from /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
  transform: translateY(-100%);
}
.fade-leave-active {
  opacity: 0;
}
.fade-enter-to, .fade-leave /* .fade-leave-active in <2.1.8 */ {
  transform: translateY(0);
}
</style>
