<template>
  <div>
    <Banner justify="tw-justify-center">
      <template #bannerRight>
        <div class="tw-relative tw-text-h1 tw-self-center tw-z-10">
          客房旅宿
        </div>
      </template>
    </Banner>
    <HomeContainer class="tw-bg-primary-40">
      <div class="container">
        <p class="tw-text-black-80 tw-text-h6 tw-mb-4">房型選擇</p>
        <h1 class="tw-text-primary-100 tw-text-h1">各種房型，任您挑選</h1>
        <div class="tw-pt-10">
          <RoomCard
            v-for="room in rooms"
            :key="room._id"
            :room="room"
            class="tw-mb-6"
          />
        </div>
      </div>
    </HomeContainer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import Banner from "@/components/Banner.vue";
import HomeContainer from "@/components/home/HomeContainer.vue";
import RoomCard from "@/components/rooms/RoomCard.vue";
import { useHttp } from "@/plugins/httpAxios";
import type { RoomType } from "@/types";

const { _axios } = useHttp();
const rooms = ref<RoomType[] | null>([
  // {
  //   id: 1,
  //   name: "尊爵雙人房",
  //   description:
  //     "享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。",
  //   imageUrl: 'https://fakeimg.pl/300/',
  //   imageUrlList: ["room2-1.png"],
  //   info: [
  //     {
  //       icon: "mdi-arrow-expand",
  //       num: "24",
  //       unit: "坪",
  //     },
  //     {
  //       icon: "mdi-bed",
  //       num: "1",
  //       unit: "張大床",
  //     },
  //     {
  //       icon: "mdi-account",
  //       num: "2-4",
  //       unit: "人",
  //     },
  //   ],
  //   price: "10000",
  // },
]);
const getRooms = async () => {
  try {
    const res = await _axios.get("/rooms");
    console.log({ res });
    rooms.value = res.data.data;
  } catch (error) {
    console.log(error);
  }
};
onMounted(() => {
  getRooms();
});
</script>

<style scoped></style>
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
