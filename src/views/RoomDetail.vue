<template>
  <HomeContainer class="tw-bg-primary-40 tw-text-black-100">
    <div class="tw-w-[90vw] tw-mx-auto">
      <v-btn
        class="tw-mb-6 tw-mt-[-20px]"
        prepend-icon="mdi-arrow-left"
        variant="tonal"
        color="primary"
        @click="router.go(-1)"
      >
        <span class="tw-text-title">返回</span></v-btn
      >
      <div class="tw-aspect-[3/1] tw-rounded-[20px] tw-overflow-hidden tw-mb-8">
        <img
          class="tw-w-full tw-h-full tw-object-center tw-object-cover"
          :src="roomStore.roomInfo?.imageUrl"
        />
      </div>
    </div>
    <div class="container">
      <v-row>
        <v-col cols="12" md="8">
          <h1 class="tw-text-h1 tw-mb-4">{{ roomStore.roomInfo?.name }}</h1>
          <p class="tw-text-body tw-text-black-80">
            {{ roomStore.roomInfo?.description }}
          </p>
          <RoomInfoZone :roomInfo="roomStore.roomInfo" />
          <div class="roomTitle tw-text-h5 tw-mb-6">訂房須知</div>
          <div class="tw-whitespace-pre-line tw-text-black-80 tw-leading-7">
            {{ roomNotice }}
          </div>
        </v-col>
        <v-col class="blockEle tw-w-[400px]">
          <div ref="blockList">
            <RoomBookingList
              :roomInfo="roomStore.roomInfo"
              :class="`bookingList ${fixedBlock ? 'fixedBooking' : ''}`"
            />
          </div>
        </v-col>
      </v-row>
    </div>
  </HomeContainer>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import HomeContainer from "@/components/home/HomeContainer.vue";
import RoomInfoZone from "@/components/rooms/RoomInfoZone.vue";
import RoomBookingList from "@/components/rooms/RoomBookingList.vue";
import { useHttp } from "@/plugins/httpAxios";
import { roomNotice } from "@/utils/roomNotice";
import useRoomStore from "@/store/roomStore";
import { useFixedBlock } from "@/utils/useFixedBlock";

const { _axios } = useHttp();
const router = useRouter();
const { params } = useRoute();
const roomStore = useRoomStore();
const { blockList, fixedBlock, setBlockPosition, handleScroll, resizeHandler } =
  useFixedBlock();

const getRooms = async () => {
  try {
    const res = await _axios.get(`/rooms/${params.id}`);
    console.log({ res });
    roomStore.roomInfo = res.data.data;
    if (roomStore.roomInfo) {
      roomStore.roomInfo.layout = [
        {
          title: "市景",
          isProvide: true,
        },
        {
          title: "獨立衛浴",
          isProvide: true,
        },
        {
          title: "客廳",
          isProvide: true,
        },
        {
          title: "書房",
          isProvide: false,
        },
        {
          title: "樓層電梯",
          isProvide: true,
        },
      ];
    }
  } catch (error) {
    console.log(error);
  }
};
onMounted(() => {
  getRooms();
});

// const resizeHandler = () => {
//   setBlockPosition(blockList.value!.offsetTop, blockList.value!.offsetLeft);
//   handleScroll();
// };

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", resizeHandler);
  setBlockPosition(blockList.value!.offsetTop, blockList.value!.offsetLeft);
});
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  window.removeEventListener("resize", resizeHandler);
});
</script>

<style scoped lang="scss">
.roomTitle {
  @apply tw-mt-20 tw-pl-4 tw-border-l-4 tw-border-primary-100;
}
.fixedBooking {
  width: var(--bookingWrapWidth);
  min-width: var(--bookingWrapWidth);
  position: fixed;
  top: var(--bookingWrapTop);
  left: var(--bookingWrapLeft);
  z-index: 10;
}
</style>
<!-- {
  "status": true,
  "data": {
      "_id": "659679a318be02c00c255bc0",
      "name": "尊爵雙人房",
      "description": "享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。",
      "imageUrl": "https://fakeimg.pl/300/",
      "imageUrlList": [
          "https://fakeimg.pl/300/",
          "https://fakeimg.pl/301/",
          "https://fakeimg.pl/302/"
      ],
      "areaInfo": "24坪",
      "bedInfo": "一張大床",
      "maxPeople": 4,
      "price": 10000,
      "facilityInfo": [
          {
              "title": "平面電視",
              "isProvide": true
          }
      ],
      "amenityInfo": [
          {
              "title": "衛生紙",
              "isProvide": true
          }
      ],
      "status": 1,
      "creator": "658f9c76b2b2db227d53a287",
      "createdAt": "2024-01-04T09:25:55.208Z",
      "updatedAt": "2024-01-04T09:25:55.208Z"
  },
  "message": "取得單一房型"
} -->
