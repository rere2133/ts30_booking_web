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
      <div
        class="tw-aspect-[10/4] tw-rounded-[20px] tw-overflow-hidden tw-mb-8"
      >
        <img
          class="tw-w-full tw-h-full tw-object-left-bottom tw-object-none"
          :src="getImageUrl('/room2-1.png')"
        />
      </div>
    </div>

    <div class="container">
      <v-row>
        <v-col cols="12" md="8">
          <h1 class="tw-text-h1 tw-mb-4">{{ roomInfo.title }}</h1>
          <p class="tw-text-body tw-text-black-80">
            {{ roomInfo.description }}
          </p>
          <div class="roomTitle tw-mb-6">房型基本資訊</div>
          <div class="tw-flex tw-mt-8 tw-gap-2 md:tw-gap-4">
            <RoomInfoCard
              v-for="info in roomInfo.info"
              :key="info.icon"
              :info="info"
              variant="solid"
            />
          </div>
          <div class="roomTitle tw-mb-6">房間格局</div>
          <RoomDetailCard :items="roomInfo.layout" />
          <div class="roomTitle tw-mb-6">房內設備</div>
          <RoomDetailCard :items="roomInfo.facility" />
          <div class="roomTitle tw-mb-6">備品提供</div>
          <RoomDetailCard :items="roomInfo.toiletries" />
          <div class="roomTitle tw-mb-6">訂房須知</div>
          <div class="tw-whitespace-pre-line tw-text-black-80 tw-leading-7">
            {{ roomInfo.notice }}
          </div>
        </v-col>
        <v-col
          ref="bookingWrap"
          class="tw-hidden lg:tw-block bookingWrap tw-min-w-[400px]"
        >
          <div
            ref="bookingList"
            :class="fixedBookingList ? 'fixedBooking' : ''"
          >
            <RoomBookingList :roomInfo="roomInfo" />
          </div>
        </v-col>
      </v-row>
    </div>
  </HomeContainer>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import HomeContainer from "@/components/home/HomeContainer.vue";
import RoomInfoCard from "@/components/rooms/RoomInfoCard.vue";
import RoomDetailCard from "@/components/rooms/RoomDetailCard.vue";
import RoomBookingList from "@/components/rooms/RoomBookingList.vue";
import { useHelper } from "@/utils/useHelper";

const { getImageUrl } = useHelper();
const router = useRouter();
const roomInfo = ref({
  id: 1,
  title: "尊爵雙人房",
  description:
    "享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。",
  imgs: ["room2-1.png"],
  info: [
    {
      icon: "mdi-arrow-expand",
      num: "24",
      unit: "坪",
    },
    {
      icon: "mdi-bed",
      num: "1",
      unit: "張大床",
    },
    {
      icon: "mdi-account",
      num: "2-4",
      unit: "人",
    },
  ],
  price: "10000",
  layout: ["市景", "獨立衛浴", "客廳", "書房", "樓層電梯"],
  facility: [
    "平面電視",
    "吹風機",
    "冰箱",
    "熱水壺",
    "檯燈",
    "衣櫃",
    "除濕機",
    "浴缸",
    "書桌",
    "音響",
  ],
  toiletries: [
    "衛生紙",
    "沐浴用品",
    "刮鬍刀",
    "清潔用品",
    "刷牙用品",
    "刮鬍膏",
    "吊衣架",
    "浴袍",
    "拖鞋",
    "罐裝水",
    "梳子",
  ],
  notice: `1.入住時間為下午3點，退房時間為上午12點。
    2.如需延遲退房，請提前與櫃檯人員聯繫，視當日房況可能會產生額外費用。
    3.請勿在房間內抽煙，若有抽煙需求，可以使用設在酒店各樓層的專用吸煙區。
    4.若發現房間內的設施有損壞或遺失，將會按照價值收取賠償金。
    5.請愛惜我們的房間與公共空間，並保持整潔。
    6.如需額外的毛巾、盥洗用品或其他物品，請聯繫櫃檯。
    7.我們提供免費的Wi-Fi，密碼可以在櫃檯或是房間內的資訊卡上找到。
    8.請勿帶走酒店房內的物品，如有需要購買，請與我們的櫃檯人員聯繫。
    9.我們提供24小時櫃檯服務，若有任何需求或疑問，歡迎隨時詢問。
    10.為了確保所有客人的安全，請勿在走廊或公共區域大聲喧嘩，並遵守酒店的其他規定。`,
});
const bookingList = ref<HTMLElement | null>(null);
const bookingWrap = ref<HTMLElement | null>(null);
const fixedBookingList = ref(false);
const bookingPosition = ref({
  offsetTop: 0,
  offsetLeft: 0,
});
const handleScroll = () => {
  if (window.scrollY > bookingPosition.value!.offsetTop) {
    fixedBookingList.value = true;
    let width = getbookingWrapWidth();
    console.log({ width });

    bookingList.value?.style.setProperty("--bookingWrapWidth", `${width}px`);
    bookingList.value?.style.setProperty(
      "--bookingWrapLeft",
      `${bookingPosition.value!.offsetLeft}px`
    );
  } else {
    fixedBookingList.value = false;
  }
};
const getbookingWrapWidth = (): number => {
  const bookingWrap: HTMLElement | null =
    document.querySelector(".bookingWrap");
  if (bookingWrap === null) return 0;
  const width = bookingWrap.getBoundingClientRect().width;
  return width || 0;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  bookingPosition.value = {
    offsetTop: bookingList.value!.offsetTop,
    offsetLeft: bookingList.value!.offsetLeft,
  };
});
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped lang="scss">
.roomTitle {
  @apply tw-text-h5 tw-mt-20 tw-pl-4 tw-border-l-4 tw-border-primary-100;
}
.fixedBooking {
  min-width: var(--bookingWrapWidth);
  position: fixed;
  top: 100px;
  left: var(--bookingWrapLeft);
  z-index: 10;
}
</style>
