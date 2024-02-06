<template>
  <HomeContainer class="tw-bg-primary-40 tw-text-black-100">
    <div class="container">
      <v-row>
        <v-col cols="12" md="8">
          <v-btn variant="text" @click="router.back()">
            <v-icon icon="mdi-chevron-left" size="44"></v-icon>
            <div class="tw-text-h3">確認訂房資訊</div>
          </v-btn>
          <div class="tw-text-h4 tw-my-10">訂房資訊</div>
          <div class="tw-flex tw-mb-4">
            <div>
              <div class="bookingTitle">選擇房型</div>
              <p>{{ bookingRoomData?.name }}</p>
            </div>
            <div class="tw-ml-auto">
              <v-btn
                variant="text"
                class="tw-underline tw-underline-offset-2"
                @click="router.back()"
              >
                編輯
              </v-btn>
            </div>
          </div>
          <div class="tw-flex tw-mb-4">
            <div>
              <div class="bookingTitle">訂房日期</div>
              <p>入住：{{ dateToChinese(bookingRoomData?.checkInDate) }}</p>
              <p>退房：{{ dateToChinese(bookingRoomData?.checkOutDate) }}</p>
            </div>
            <div class="tw-ml-auto">
              <v-btn
                variant="text"
                class="tw-underline tw-underline-offset-2"
                @click="router.back()"
              >
                編輯
              </v-btn>
            </div>
          </div>
          <div class="tw-flex">
            <div>
              <div class="bookingTitle">房客人數</div>
              <p>{{ bookingRoomData?.peopleNum }} 人</p>
            </div>
            <div class="tw-ml-auto">
              <v-btn
                variant="text"
                class="tw-underline tw-underline-offset-2"
                @click="router.back()"
              >
                編輯
              </v-btn>
            </div>
          </div>
          <hr class="gb-divider tw-bg-black-bg tw-my-10" />
          <div class="tw-text-h4 tw-my-10">訂房人資訊</div>
          <TextField
            label="姓名"
            placeholder="請輸入姓名"
            class="tw-mb-4"
            v-model="userInfo!.name"
          />
          <TextField
            label="手機號碼"
            placeholder="請輸入手機號碼"
            class="tw-mb-4"
            v-model="userInfo!.phone"
          />
          <TextField
            label="電子信箱"
            placeholder="請輸入電子信箱"
            class="tw-mb-4"
            v-model="userInfo!.email"
          />
          <div class="tw-flex tw-items-end tw-gap-4">
            <SelectInput
              v-model="userInfo!.address.city"
              :items="cityItems"
              label="地址"
              placeholder="縣市"
              class="tw-flex-1"
            />
            <SelectInput
              v-model="userInfo!.address.county"
              :items="countyItems"
              :disabled="countyItems.length === 0"
              placeholder="區域"
              class="tw-flex-1"
              item-title="AreaName"
              item-value="AreaName"
            />
          </div>
          <TextField
            placeholder="請輸入詳細地址"
            class="tw-mb-4"
            v-model="userInfo!.address.detail"
          />
          <hr class="gb-divider tw-bg-black-bg tw-my-10" />
          <div class="tw-text-h4 tw-my-6">房間資訊</div>
          <RoomInfoZone :roomInfo="roomStore.roomInfo" />
        </v-col>
        <v-col class="blockEle tw-w-[400px]">
          <div ref="blockList">
            <div
              class="tw-bg-white tw-p-8 tw-rounded-[20px] tw-shadow-lg tw-mb-6"
              :class="`${fixedBlock ? 'fixedBooking' : ''}`"
            >
              <img
                :src="bookingRoomData?.imageUrl"
                class="tw-w-full tw-h-[200px] tw-object-cover tw-rounded-[20px] tw-mb-4"
              />

              <h4 class="tw-text-h4 tw-mb-6">價格詳情</h4>
              <div class="tw-flex">
                <div>
                  NT$ {{ roomStore.roomInfo?.price }} *
                  {{ bookingRoomData?.nights }}
                </div>
                <div class="tw-ml-auto">NT$ {{ totalPrice }}</div>
              </div>
              <hr class="gb-divider tw-bg-black-80 tw-my-10" />
              <div class="tw-flex tw-font-bold tw-mb-6">
                <div>總價</div>
                <div class="tw-ml-auto">NT$ {{ totalPrice }}</div>
              </div>
              <BtnNormal text="確認訂房" @action="confirmBooking" />
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
    <SecceedLoading v-model="loading" />
  </HomeContainer>
</template>

<script setup lang="ts">
import HomeContainer from "@/components/home/HomeContainer.vue";
import TextField from "@/components/input/TextField.vue";
import SelectInput from "@/components/input/SelectInput.vue";
import RoomInfoZone from "@/components/rooms/RoomInfoZone.vue";
import BtnNormal from "@/components/BtnNormal.vue";
import SecceedLoading from "@/components/booking/SucceedLoading.vue";
import useRoomStore from "@/store/roomStore";
import { useFixedBlock } from "@/utils/useFixedBlock";
import { ref, onMounted, onUnmounted, computed, watch } from "vue";
import { storeToRefs } from "pinia";
import { useRoute, useRouter } from "vue-router";
import { useHelper } from "@/utils/useHelper";
import { CityCountyData } from "@/utils/CityCountyData";
import { useHttp } from "@/plugins/httpAxios";
import type { AreaType, UserInfo } from "@/types";

const router = useRouter();
const { params } = useRoute();
const { _axios } = useHttp();
const roomStore = useRoomStore();
const { bookingRoomData } = storeToRefs(roomStore);
const { dateToChinese, dateFormat } = useHelper();
const { blockList, fixedBlock, setBlockPosition, handleScroll } =
  useFixedBlock();
const userInfo = ref<UserInfo | undefined>({
  name: "",
  phone: "",
  email: "",
  address: {
    city: "",
    county: "",
    detail: "",
    zipcode: 0,
  },
});
const loading = ref(false);
const cityItems = computed(() => {
  return CityCountyData.map((item) => item.CityName);
});
const countyItems = ref<AreaType[]>([]);
watch(
  () => userInfo.value?.address.city,
  (city) => {
    if (city && userInfo.value) {
      userInfo.value.address.county = "";
      const cityData = CityCountyData.find((item) => item.CityName === city);
      countyItems.value = cityData?.AreaList || [];
    }
  }
);
const totalPrice = computed(() => {
  if (roomStore.roomInfo?.price && bookingRoomData.value?.nights) {
    return roomStore.roomInfo.price * bookingRoomData.value.nights;
  } else {
    return "-";
  }
});
const confirmBooking = async () => {
  let zipcode = countyItems.value.find(
    (item) => item?.AreaName === userInfo.value!.address.county
  )?.ZipCode;
  userInfo.value!.address.zipcode = zipcode ? +zipcode : 0;
  let payload = {
    roomId: params.id,
    checkInDate: dateFormat(bookingRoomData.value?.checkInDate),
    checkOutDate: dateFormat(bookingRoomData.value?.checkOutDate),
    peopleNum: bookingRoomData.value?.peopleNum,
    userInfo: userInfo.value,
  };
  // console.log({ payload });
  try {
    const res = await _axios.post("/orders", payload);
    console.log({ res });
    if (res.status) {
      roomStore.bookingRoomData!.orderId = res.data.data._id;
      roomStore.bookingRoomData!.userInfo = res.data.data.userInfo;
      roomStore.bookingRoomData!.price = totalPrice.value;
      // console.log(roomStore.bookingRoomData);
      loading.value = true;
      await setTimeout(() => {
        loading.value = false;
        router.push({ name: "BookSucceed" });
      }, 2000);
    }
  } catch (err) {
    console.log(err);
  }
};

onMounted(() => {
  if (!bookingRoomData.value?.name) {
    router.back();
  }
});

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  setBlockPosition(blockList.value!.offsetTop, blockList.value!.offsetLeft);
});
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped lang="scss">
.bookingTitle {
  @apply tw-border-l-4 tw-border-primary-100 tw-pl-2 tw-mb-2 tw-font-bold;
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
