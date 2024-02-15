<template>
  <v-app>
    <v-app-bar
      class="tw-px-[16px] lg:tw-px-[80px] tw-py-6"
      flat
      color="transparent"
      scroll-behavior="hide"
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
          <div v-for="link in appStore.navItems" :key="link.path">
            <div
              v-if="link.title == '立即訂房'"
              class="mr-8 tw-text-md tw-font-bold tw-text-white tw-bg-primary-100 tw-py-4 tw-px-8 tw-rounded-lg tw-cursor-pointer hover:tw-bg-primary-80 tw-transition-all"
            >
              <router-link :to="link.path">{{ link.title }}</router-link>
            </div>
            <p
              v-else-if="link.path == '/member'"
              class="mr-8 tw-text-md tw-font-bold tw-cursor-pointer"
            >
              {{ link.title }}
              <v-menu activator="parent">
                <v-list min-width="250">
                  <v-list-item
                    v-for="(item, index) in memeberItems"
                    :key="index"
                    :value="index"
                    class="memberActive"
                    @click="
                      item.title == '會員資料' ? toPage(item.path) : logout()
                    "
                  >
                    <v-list-item-title>
                      {{ item.title }}
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </p>
            <router-link
              v-else
              :to="link.path"
              class="mr-8 tw-text-md tw-font-bold"
              >{{ link.title }}</router-link
            >
          </div>
        </div>
        <div v-else>
          <v-icon
            v-if="!showOverlay"
            @click="(showOverlay = true), updateMobileUserName()"
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
    <v-footer
      class="tw-px-[16px] tw-py-[80px] md:tw-pb-[120px] lg:tw-px-[80px] tw-bg-black-bg"
    >
      <Footer></Footer>
    </v-footer>
    <transition name="fade">
      <div v-if="showOverlay" class="overlay">
        {{ appStore.navItems }}
        <!-- overlay 内容放在这里 -->
        <div class="overlay-content">
          <v-list bg-color="transparent" class="text-center tw-w-full">
            <v-list-item class="tw-py-8">
              <p class="tw-text-title" @click="toPage('/rooms')">客房旅宿</p>
            </v-list-item>
            <v-list-item v-if="appStore.isLogin" class="tw-py-8">
              <p class="tw-text-title" @click="toPage('/member/profile')">
                {{ mobileUserName }}
              </p>
            </v-list-item>
            <v-list-item v-if="!appStore.isLogin" class="tw-py-8">
              <p class="tw-text-title" @click="toPage('/login')">會員登入</p>
            </v-list-item>
            <v-list-item class="tw-py-8">
              <div
                class="tw-text-md tw-font-bold tw-text-white tw-bg-primary-100 tw-py-4 tw-w-[90%] tw-mx-auto tw-rounded-lg tw-cursor-pointer hover:tw-bg-primary-80 tw-transition-all"
                @click="toPage('/rooms')"
              >
                立即訂房
              </div>
            </v-list-item>
            <v-list-item>
              <p v-if="appStore.isLogin" class="tw-text-title" @click="logout">
                登出
              </p>
            </v-list-item>
          </v-list>
        </div>
      </div>
    </transition>
  </v-app>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { useRouter } from "vue-router";
import { useHelper } from "@/utils/useHelper";
import Footer from "@/components/Footer.vue";
import { useAppStore } from "@/store/app";

const appStore = useAppStore();
const { getImageUrl, webOrMobile, clearLocalStorage } = useHelper();
const router = useRouter();
const showOverlay = ref(false);
// const links = ref([
//   {
//     title: "客房旅宿",
//     path: "/rooms",
//   },
//   {
//     title: "會員登入",
//     path: "/login",
//   },
//   {
//     title: "立即訂房",
//     path: "/rooms",
//   },
// ]);
const memeberItems = ref([
  {
    title: "會員資料",
    path: "/member/profile",
  },
  {
    title: "登出",
    path: "",
  },
]);
const toPage = (path: string) => {
  showOverlay.value = false;
  router.push(path);
};
const logout = () => {
  clearLocalStorage();
  location.reload();
};
const mobileUserName = ref("");
const userName = computed(() => {
  return localStorage.getItem("userName") || "";
});
const updateMobileUserName = () => {
  mobileUserName.value = localStorage.getItem("userName") || "";
};

watch(
  userName,
  (val) => {
    if (val) {
      appStore.navItems.splice(1, 1, {
        title: userName.value,
        path: "/member/profile",
      });
      mobileUserName.value = val;
    }
  },
  {
    immediate: true,
  }
);
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
  opacity: 0.98;
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
.memberActive {
  @apply tw-transition-all;
  &:hover {
    @apply tw-bg-primary-40 tw-text-primary-100;
  }
}
</style>
