<template>
  <div class="member-index">
    <div class="banner" :class="`tw-h-[206px] md:tw-h-[384px] tw-bg-member-hero tw-bg-cover`">
      <div class="tw-max-w-[1280px] tw-px-[40px] tw-mx-auto tw-h-full tw-flex md:tw-items-center tw-justify-center md:tw-justify-start tw-flex-col md:tw-flex-row">
        <img class="tw-w-[72px] tw-h-[72px] tw-mb-[16px] md:tw-w-[144px] md:tw-h-[144px] md:tw-mb-0 md:tw-mr-[24px]" :src="`${img_desktop_host}/user1.png`" />
        <p class="tw-text-white tw-font-[700] tw-text-[32px] md:tw-text-[48px] tw-tracking-[1.6px] md:tw-tracking-[2.4px]" v-if="userInfo != null">Hello，{{ userInfo.name }}</p>
      </div>
    </div>
    <div class="tw-max-w-[1280px] tw-mx-auto tw-mt-[40px] md:tw-mt-[112px] tw-mb-[40px] md:tw-mb-[120px]" >
      <section-tab class="tw-mb-[40px] md:tw-mb-[80px]" :sectionList="sectionList" :activeItemValue="activeItemValue" @change="emitSectionTabChange"></section-tab>
      <router-view></router-view>
    </div>
    <img class="tw-w-full" object-fit="cover" :src="getImageUrl('line3.png')" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import SectionTab from "@/components/member/SectionTab.vue";
import { useRouter, useRoute } from "vue-router";
import { img_desktop_host } from "@/utils/imageSource";
import {useHttp} from "@/plugins/httpAxios";
import { useHelper } from "@/utils/useHelper";
const { getImageUrl } = useHelper();

const router = useRouter();
const route = useRoute();
const sectionList = [
  {
    id: '1',
    label: '個人資料',
    value: '0'
  }, 
  {
    id: '2',
    label: '我的訂單',
    value: '1'
  }
];
const activeItemValue = ref("0");
onMounted(() => {
  let routeName = route.name;
  console.log(routeName);
  if (routeName == 'Member') {
    router.push({
      name: 'Profile'
    })
    routerMatch('0')
  } else if (routeName == 'Profile') {
    activeItemValue.value = '0';
  } else if (routeName == 'Orders') {
    activeItemValue.value = '1';
  }
})
const routerMatch = (val: string) => {
  if (val == '0') {
    router.push({
      name: 'Profile'
    })
  } else if (val == '1') {
    router.push({
      name: 'Orders'
    })
  }
}
const emitSectionTabChange = (val: string) => {
  activeItemValue.value = val;
  routerMatch(val);
}
const {_axios} = useHttp();
const userInfo = ref<any>(null);
onMounted(() => {
  _axios.get(`/user`).then((res) => {
    userInfo.value = res.data.data;
  })
})
</script>
<style scoped></style>
