<template>
  <HomeContainer>
    <div class="container">
      <v-row>
        <v-col cols="12" md="7">
          <div class="tw-flex tw-items-center tw-gap-6 tw-mb-10">
            <v-icon icon="mdi-check-circle" color="success" size="54"></v-icon>
            <h2 class="tw-text-h2">
              恭喜，{{ bookingRoomData?.userInfo?.name }}!<br />
              您已預訂成功
            </h2>
          </div>
          <p>
            我們已發送訂房資訊及詳細內容至你的電子信箱，入住時需向櫃檯人員出示訂房人證件。
          </p>
          <hr class="gb-divider tw-bg-white tw-my-20" />
          <h4 class="tw-text-h5 tw-mb-8">立即查看您的訂單紀錄</h4>
          <BtnNormal
            text="前往我的訂單"
            class="tw-w-[220px]"
            @action="router.push(`/member/orders`)"
          />
          <hr class="gb-divider tw-bg-white tw-my-20" />
          <h4 class="tw-text-h5 tw-mb-6">訂房人資訊</h4>
          <div class="tw-mb-4">
            <p>姓名</p>
            <p>{{ bookingRoomData?.userInfo?.name }}</p>
          </div>
          <div class="tw-mb-4">
            <p>手機號碼</p>
            <p>{{ bookingRoomData?.userInfo?.phone }}</p>
          </div>
          <div class="tw-mb-4">
            <p>電子信箱</p>
            <p>{{ bookingRoomData?.userInfo?.email }}</p>
          </div>
        </v-col>
        <v-col class="blockEle tw-w-[400px]">
          <div ref="blockList">
            <div
              class="tw-bg-white tw-p-8 tw-rounded-[20px] tw-shadow-lg tw-mb-6 tw-text-black-100"
              :class="`${fixedBlock ? 'fixedBooking' : ''}`"
            >
              <p class="tw-mb-2">
                預訂參考編號： {{ bookingRoomData?.orderId }}
              </p>
              <h4 class="tw-text-h5 tw-mb-6">即將到來的行程</h4>
              <img
                :src="bookingRoomData?.imageUrl"
                class="tw-w-full tw-h-[200px] tw-object-cover tw-rounded-[20px] tw-mb-4"
              />
              <div class="tw-text-title tw-mb-6">
                {{ bookingRoomData?.name }}， {{ bookingRoomData?.nights }}晚
                <span class="tw-mx-3">|</span> 住宿人數：{{
                  bookingRoomData?.peopleNum
                }}
                位
              </div>
              <p class="tw-text-subTitle bookingTitle tw-border-primary-100">
                入住：{{ dateToChinese(bookingRoomData?.checkInDate) }}，
                15:00可入住
              </p>
              <p
                class="tw-text-subTitle bookingTitle tw-border-black-60 tw-mb-8"
              >
                退房：{{ dateToChinese(bookingRoomData?.checkOutDate) }}，
                12:00前退房
              </p>
              <p>NT$ {{ bookingRoomData?.price }}</p>
              <hr class="gb-divider tw-bg-black-40 tw-my-5" />
              <p
                v-if="roomInfo?.facilityInfo?.length != 0"
                class="tw-text-subTitle bookingTitle tw-border-primary-100"
              >
                房內設備
              </p>
              <RoomDetailCard
                v-if="roomInfo?.facilityInfo?.length != 0"
                :items="roomInfo?.facilityInfo"
                variant="outlined"
                class="tw-mb-6 tw-mt-2"
              />
              <p
                v-if="roomInfo?.amenityInfo?.length != 0"
                class="tw-text-subTitle bookingTitle tw-border-primary-100"
              >
                備品提供
              </p>
              <RoomDetailCard
                v-if="roomInfo?.amenityInfo?.length != 0"
                :items="roomInfo?.amenityInfo"
                variant="outlined"
                class="tw-mt-2"
              />
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </HomeContainer>
</template>

<script setup lang="ts">
import HomeContainer from "@/components/home/HomeContainer.vue";
import BtnNormal from "@/components/BtnNormal.vue";
import RoomDetailCard from "@/components/rooms/RoomDetailCard.vue";
import { onMounted, onUnmounted } from "vue";
import { useFixedBlock } from "@/utils/useFixedBlock";
import useRoomStore from "@/store/roomStore";
import { useHelper } from "@/utils/useHelper";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";

const { blockList, fixedBlock, setBlockPosition, handleScroll, resizeHandler } =
  useFixedBlock();
const { dateToChinese } = useHelper();
const roomStore = useRoomStore();
const router = useRouter();
const { bookingRoomData, roomInfo } = storeToRefs(roomStore);
// const bookingRoomData = ref({
//   name: "極致奢華VIP豪華套房",
//   checkInDate: new Date("2024-09-05T16:00:00.000Z"),
//   checkOutDate: new Date("2024-09-06T16:00:00.000Z"),
//   peopleNum: 2,
//   imageUrl:
//     "https://hotel-reservation-backend-sgtq.onrender.com/api/v1/url/1e0897a5",
//   nights: 1,
//   orderId: "65c09febaf358bab011c5c3b",
//   userInfo: {
//     name: "RRR",
//     phone: "0911112223",
//     email: "abc@gmail.com",
//     address: { zipcode: 100, county: "中正區", city: "臺北市" },
//   },
//   price: 200000,
// });
// const roomInfo = ref({
//   _id: "65b8b67cf2c275190556784b",
//   name: "極致奢華VIP豪華套房",
//   description:
//     "融入至高無上的奢華享受，我們的極致奢華VIP三人豪華套房，提供您舒適寬敞的空間和華麗的裝潢，猶如宮殿般的尊榮待遇。",
//   imageUrl:
//     "https://hotel-reservation-backend-sgtq.onrender.com/api/v1/url/1e0897a5",
//   imageUrlList: [
//     "https://hotel-reservation-backend-sgtq.onrender.com/api/v1/url/1e0897a5",
//   ],
//   areaInfo: "200坪",
//   bedInfo: "五張大床",
//   maxPeople: 10,
//   price: 200000,
//   facilityInfo: [{ title: "平面電視", isProvide: true }],
//   amenityInfo: [
//     { title: "提供高級牙刷牙膏組合", isProvide: true },
//     { title: "精選迎賓水果盤", isProvide: true },
//     { title: "私人管家服務", isProvide: true },
//     { title: "24小時客房送餐服務", isProvide: true },
//   ],
//   status: 1,
//   creator: "65b4f5455f65e687c4bd4435",
//   createdAt: "2024-01-30T08:42:36.309Z",
//   updatedAt: "2024-01-30T08:42:36.309Z",
//   layout: [
//     { title: "市景", isProvide: true },
//     { title: "獨立衛浴", isProvide: true },
//     { title: "客廳", isProvide: true },
//     { title: "書房", isProvide: false },
//     { title: "樓層電梯", isProvide: true },
//   ],
// });

onMounted(() => {
  if (!bookingRoomData.value || !roomInfo.value) {
    router.push({ name: "Rooms" });
  }
});

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
.bookingTitle {
  @apply tw-border-l-4  tw-pl-2 tw-mb-2 tw-font-bold;
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
