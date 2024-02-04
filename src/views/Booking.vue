<template>
  <HomeContainer class="tw-bg-primary-40 tw-text-black-100">
    <div class="container">
      <v-row>
        <v-col cols="12" md="8">
          <v-btn variant="text">
            <v-icon icon="mdi-chevron-left" size="44"></v-icon>
            <div class="tw-text-h3">確認訂房資訊</div>
          </v-btn>
          <div class="tw-text-h4 tw-my-10">訂房資訊</div>
          <div class="tw-flex tw-mb-4">
            <div>
              <div class="bookingTitle">選擇房型</div>
              <p>尊爵雙人房</p>
            </div>
            <div class="tw-ml-auto">
              <v-btn variant="text" class="tw-underline tw-underline-offset-2">
                編輯
              </v-btn>
            </div>
          </div>
          <div class="tw-flex tw-mb-4">
            <div>
              <div class="bookingTitle">訂房日期</div>
              <p>入住：12 月 4 日星期二</p>
              <p>退房：12 月 6 日星期三</p>
            </div>
            <div class="tw-ml-auto">
              <v-btn variant="text" class="tw-underline tw-underline-offset-2">
                編輯
              </v-btn>
            </div>
          </div>
          <div class="tw-flex">
            <div>
              <div class="bookingTitle">房客人數</div>
              <p>2 人</p>
            </div>
            <div class="tw-ml-auto">
              <v-btn variant="text" class="tw-underline tw-underline-offset-2">
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
            v-model="bookingInfo.name"
          />
          <TextField
            label="手機號碼"
            placeholder="請輸入手機號碼"
            class="tw-mb-4"
            v-model="bookingInfo.name"
          />
          <TextField
            label="電子信箱"
            placeholder="請輸入電子信箱"
            class="tw-mb-4"
            v-model="bookingInfo.name"
          />
          <!-- TODO:地區資料 -->
          <div class="tw-flex tw-items-end tw-gap-4">
            <SelectInput label="地址" placeholder="縣市" class="tw-flex-1" />
            <SelectInput placeholder="區域" class="tw-flex-1" />
          </div>
          <TextField placeholder="請輸入詳細地址" class="tw-mb-4" />
          <hr class="gb-divider tw-bg-black-bg tw-my-10" />
          <div class="tw-text-h4 tw-my-6">房間資訊</div>
          <RoomInfoZone :roomInfo="roomStore.roomInfo" />
        </v-col>
        <v-col class="tw-hidden lg:tw-block blockEle tw-w-[400px]">
          <div ref="blockList">
            <div
              class="tw-bg-white tw-p-8 tw-rounded-[20px] tw-shadow-lg tw-mb-6"
              :class="`${fixedBlock ? 'fixedBooking' : ''}`"
            >
              <h4 class="tw-text-h4 tw-mb-6">價格詳情</h4>
              <div class="tw-flex">
                <div>NT$ 1000 * 2</div>
                <div class="tw-ml-auto">NT$ 2000</div>
              </div>
              <hr class="gb-divider tw-bg-black-80 tw-my-10" />
              <div class="tw-flex tw-font-bold">
                <div>總價</div>
                <div class="tw-ml-auto">NT$ 2000</div>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </HomeContainer>
</template>

<script setup lang="ts">
import HomeContainer from "@/components/home/HomeContainer.vue";
import TextField from "@/components/input/TextField.vue";
import SelectInput from "@/components/input/SelectInput.vue";
import RoomInfoZone from "@/components/rooms/RoomInfoZone.vue";
import useRoomStore from "@/store/roomStore";
import { useFixedBlock } from "@/utils/useFixedBlock";
import { ref, onMounted, onUnmounted } from "vue";

const roomStore = useRoomStore();
const { blockList, blockPosition, fixedBlock, setBlockPosition, handleScroll } =
  useFixedBlock();
const bookingInfo = ref({
  name: "",
  email: "",
  phone: "",
});

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  // bookingPosition.value = {
  //   offsetTop: bookingList.value!.offsetTop,
  //   offsetLeft: bookingList.value!.offsetLeft,
  // };
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
