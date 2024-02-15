<template>
  <div>
    <div class="tw-bg-white tw-rounded-[20px] tw-p-6 xl:tw-p-10">
      <h5 class="tw-text-h5">預訂房型</h5>
      <hr class="tw-my-4" />
      <h2 class="tw-text-h4 xl:tw-text-h2 tw-mb-2">
        {{ roomInfo?.name }}
      </h2>
      <p class="tw-text-tiny tw-text-black-80 tw-mb-6">
        {{ roomInfo?.description }}
      </p>
      <div class="tw-flex tw-gap-4">
        <v-text-field
          @click="openDatePicker"
          :model-value="dateFormat(checkInDate)"
          label="入住"
          readonly
          variant="outlined"
        ></v-text-field>
        <v-text-field
          @click="openDatePicker"
          :model-value="dateFormat(checkOutDate)"
          label="退房"
          readonly
          variant="outlined"
        ></v-text-field>
      </div>

      <div class="tw-flex tw-items-center tw-mb-8">
        <div>人數</div>
        <div class="tw-ml-auto">
          <v-btn
            @click="peopleNum--"
            icon="mdi-minus"
            variant="outlined"
            color="black80"
            size="small"
            :disabled="peopleNum <= 1"
          ></v-btn>
          <span class="tw-mx-4 tw-text-h6">{{ peopleNum }}</span>
          <v-btn
            @click="peopleNum++"
            icon="mdi-plus"
            variant="outlined"
            color="black80"
            size="small"
            :disabled="maxNum"
          ></v-btn>
        </div>
      </div>
      <div class="tw-text-h6 tw-text-primary-100 tw-mb-6">
        NT$ {{ totalPrice }}
      </div>
      <BtnNormal
        text="立即預定"
        @action="bookingSubmit"
        :disabled="!checkInDate || !checkOutDate || totalPrice == 0"
      />
    </div>
    <v-dialog v-model="datePicker" width="600">
      <v-card class="pt-10 pb-8 px-10" style="border-radius: 20px">
        <div class="tw-flex tw-mb-4">
          <div class="tw-flex-1">
            <p class="tw-text-h5 tw-mb-2">{{ tempNights }}晚</p>
            <p class="tw-text-body">
              {{ dateFormat(selectedDate[0]) }} -
              {{ dateFormat(selectedDate[selectedDate.length - 1]) }}
            </p>
          </div>
          <div class="tw-flex tw-flex-1 tw-gap-3">
            <v-text-field
              label="入住"
              :model-value="dateFormat(selectedDate[0]) || ''"
              readonly
              variant="outlined"
            ></v-text-field>
            <v-text-field
              label="退房"
              :model-value="
                dateFormat(selectedDate[selectedDate.length - 1]) || ''
              "
              readonly
              variant="outlined"
            ></v-text-field>
          </div>
        </div>
        <v-date-picker
          v-model:model-value="selectedDate"
          title=""
          keyboard-icon=""
          hide-header
          color="primary"
          multiple="range"
          class="datePicker tw-mx-auto"
          :min="minDate"
        >
        </v-date-picker>
        <div class="tw-flex tw-items-center">
          <v-spacer></v-spacer>
          <v-btn variant="text" color="primary" @click="clearDate"
            >清除日期</v-btn
          >
          <v-btn
            color="primary"
            variant="flat"
            height="56"
            min-width="130"
            rounded="lg"
            @click="dateSubmit"
            :disabled="
              !selectedDate[0] ||
              !selectedDate[selectedDate.length - 1] ||
              selectedDate[0] == selectedDate[selectedDate.length - 1]
            "
            >確認日期</v-btn
          >
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import BtnNormal from "../BtnNormal.vue";
import { useHelper } from "@/utils/useHelper";
import useSnackbarStore from "@/store/snackbarStore";
import useRoomStore from "@/store/roomStore";
import type { RoomType } from "@/types";

const snackbarStore = useSnackbarStore();
const roomStore = useRoomStore();
const { dateFormat } = useHelper();
const router = useRouter();
const { params } = useRoute();

const props = defineProps<{ roomInfo: RoomType | undefined }>();

// People
// const bookingData = ref({
//   num: 2,
// });
const peopleNum = ref(2);
const maxNum = computed(() => {
  let max = props.roomInfo?.maxPeople || 4;
  if (peopleNum.value >= max) return true;
  else return false;
});

watch(
  () => props.roomInfo?.maxPeople,
  (val) => {
    if (val && peopleNum.value > val) {
      peopleNum.value = val || 1;
    }
  },
  {
    immediate: true,
  }
);

// Date
const minDate = computed(() => {
  let d = new Date();
  return new Date(d.setDate(d.getDate() - 1));
});
const datePicker = ref(false);
const checkInDate = ref();
const checkOutDate = ref();
const selectedDate = ref<Date[]>([]);
const nights = ref(1);
const tempNights = computed(() => {
  let sd = selectedDate.value[0];
  let ed = selectedDate.value[selectedDate.value.length - 1];
  if (!sd || !ed) return 0;
  return Math.floor((ed.getTime() - sd.getTime()) / (1000 * 60 * 60 * 24));
  // return (
  //   (selectedDate.value[0].getTime() -
  //     selectedDate.value[selectedDate.value.length - 1].getTime()) /
  //   (1000 * 60 * 60 * 24)
  // );
});
const totalPrice = computed(() => {
  return props.roomInfo?.price ? props.roomInfo?.price * nights.value : 0;
});
const dateSubmit = () => {
  checkInDate.value = selectedDate.value[0];
  checkOutDate.value = selectedDate.value[selectedDate.value.length - 1];
  datePicker.value = false;
  nights.value = tempNights.value;
};
const clearDate = () => {
  selectedDate.value = [];
  datePicker.value = false;
};

const openDatePicker = () => {
  datePicker.value = true;
  if (checkInDate.value && checkOutDate.value) {
    const numDays = Math.floor(
      (checkOutDate.value.getTime() - checkInDate.value.getTime()) /
        (1000 * 60 * 60 * 24) +
        1
    );

    // 製作一個新陣列，從checkinDate.value到checkoutDate.value
    selectedDate.value = Array.from({ length: numDays }, (_, idx) => {
      return new Date(checkInDate.value.getTime() + idx * 86400000);
    });
  }
};
// Submit
const bookingSubmit = () => {
  console.log("bookingSubmit");
  if (!checkInDate.value || !checkOutDate.value) {
    snackbarStore.setSnackBar({
      message: "請選擇入住日期",
      color: "error",
      isOpen: true,
    });
    return;
  }
  roomStore.bookingRoomData = {
    name: props.roomInfo?.name || "",
    checkInDate: checkInDate.value,
    checkOutDate: checkOutDate.value,
    peopleNum: peopleNum.value,
    imageUrl: props.roomInfo?.imageUrl || "",
    nights: nights.value,
  };
  router.push(`/booking/${params.id}`);
};
// init
const initCheckOutDate = () => {
  let d = new Date();
  let nextDay = new Date(d.setDate(d.getDate() + 1));
  checkInDate.value = new Date();
  checkOutDate.value = nextDay;
};
onMounted(() => {
  if (roomStore.bookingRoomData != undefined) {
    checkInDate.value = roomStore.bookingRoomData.checkInDate;
    checkOutDate.value = roomStore.bookingRoomData.checkOutDate;
    peopleNum.value = roomStore.bookingRoomData.peopleNum || 2;
    nights.value = roomStore.bookingRoomData.nights;
  } else {
    initCheckOutDate();
  }
});
</script>

<style scoped lang="scss">
.datePicker {
  &:deep(.v-picker__body) {
    @apply tw-text-black-100;
  }
}
</style>
