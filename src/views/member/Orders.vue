<template>
  <div class="member-profile tw-px-[24px]">
    <div class="md:tw-flex tw-mx-[-24px]">
      <div class="tw-mb-[20px] md:tw-mb-0 tw-flex-[6] tw-mx-[40px]">
        <member-card class="tw-text-black-100">
          <template v-if="readyRoomList.length > 0">
            <div class="tw-text-body tw-mb-[8px]">
              預定參考編號：{{ roomList[0].roomInfo._id }}
            </div>
            <div class="tw-text-h5 tw-mb-[24px]">即將來的行程</div>
            <img
              class="tw-w-full tw-rounded-[10px] tw-h-[200px] tw-object-center tw-object-cover"
              :src="roomList[0].roomInfo.imageUrl"
            />
            <div class="tw-my-[24px]">
              <span
                class="tw-text-h6 tw-pr-[8px] tw-mr-[8px] tw-border-r-[1px] tw-border-r-solid tw-border-r-black-60"
              >
                {{ roomList[0].roomInfo.name }}，{{ roomList[0].day }} 晚
              </span>
              <span className="tw-text-h6"
                >住宿人數：{{ roomList[0].peopleNum }} 位</span
              >
            </div>
            <div className="start-date">
              {{
                dateFormat(
                  new Date(roomList[0].checkInDate.split("T")[0]).getTime()
                )
              }}，15:00 可入住
            </div>
            <div className="end-date">
              {{
                dateFormat(
                  new Date(roomList[0].checkOutDate.split("T")[0]).getTime()
                )
              }}
              ，12:00 前退房
            </div>
            <div class="tw-text-body tw-mt-[24px]">
              <span>NT$ </span>
              {{
                (Number(roomList[0].roomInfo.price) * Number(roomList[0].day))
                  .toLocaleString(undefined, {
                    style: "currency",
                    currency: "NTD",
                    maximumFractionDigits: 0,
                  })
                  .replace("NTD", "")
              }}
            </div>
            <hr class="gb-divider tw-bg-black-40 tw-my-10" />
            <Order :roomInfo="roomList[0].roomInfo" />
            <div class="tw-flex tw-mx-[-8px] tw-mt-[24px]">
              <v-btn
                color="primary"
                variant="outlined"
                class="tw-mx-[8px] tw-flex-1"
                @click="openCancelDialog"
                >取消預定</v-btn
              >
              <v-btn
                color="primary"
                class="tw-mx-[8px] tw-flex-1"
                @click="toRoomInfo"
                >查看詳情</v-btn
              >
            </div>
          </template>
          <template v-else>
            <div class="tw-text-title">暫無即將到來訂單</div>
          </template>
        </member-card>
      </div>
      <div class="tw-flex-[6] tw-mx-[40px]">
        <member-card class="tw-text-black-100">
          <template v-if="historyRoomList.length > 0">
            <div class="tw-text-h5 tw-mb-[24px]">歷史訂單</div>
            <div
              v-for="(item, idx) in displayRoomList"
              :key="`history_${item._id}`"
            >
              <div class="tw-flex tw-gap-4">
                <img
                  class="tw-flex-0 tw-mr-[8px] tw-rounded-[5px] tw-object-center tw-object-cover tw-max-h-[80px]"
                  :src="item.roomInfo.imageUrl"
                  width="120px"
                  height="80px"
                />
                <div class="history-item-info tw-text-black-80">
                  <div class="tw-text-body tw-mb-[8px]">
                    預定參考編號：#{{ item._id }}
                  </div>
                  <div class="tw-text-h6 tw-my-4">{{ item.roomInfo.name }}</div>
                  <div class="tw-text-body tw-mb-2">
                    住宿天數：{{ item.day }} 晚
                  </div>
                  <div class="tw-text-body tw-mb-4">
                    住宿人數：{{ item.peopleNum }} 位
                  </div>
                  <div class="start-date">
                    入住：{{ dateFormat(new Date(item.checkInDate).getTime()) }}
                  </div>
                  <div class="end-date">
                    退房：{{ dateFormat(new Date(item.checkOutDate).getTime()) }}
                  </div>
                  <div class="tw-text-body tw-mt-[16px]">
                    <span>NT$ </span>
                    {{
                      (Number(item.roomInfo.price) * Number(item.day))
                        .toLocaleString(undefined, {
                          style: "currency",
                          currency: "NTD",
                          maximumFractionDigits: 0,
                        })
                        .replace("NTD", "")
                    }}
                  </div>
                </div>
              </div>
              <hr
                v-if="idx != displayRoomList.length - 1"
                class="gb-divider tw-bg-black-40 tw-my-8"
              />
            </div>
            <v-btn
              v-if="!showMore && roomList.length > 3"
              @click="showMore = true"
              variant="outlined"
              color="primary"
              class="tw-mt-10"
              block
              >查看更多
              <v-icon icon="mdi-chevron-down"></v-icon>
            </v-btn>
          </template>
          <template v-else>
            <div class="tw-text-title">暫無歷史訂單</div>
          </template>
        </member-card>
      </div>
    </div>
    <v-dialog v-model="isCancelDialogOpen">
      <v-card class="tw-w-[600px] tw-mx-[auto]">
        <div class="tw-p-[10px] tw-text-right">
          <button type="button" @click="isCancelDialogOpen = false">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_569_8964)">
                <path
                  d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                  fill="#4B4B4B"
                />
              </g>
              <defs>
                <clipPath id="clip0_569_8964">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
        <div
          class="tw-py-[100px] tw-px-[80px] tw-text-center tw-border-b-[1px] tw-border-b-solid tw-border-b-primary"
        >
          <span class="tw-text-body">確定要取消此房型的預定嗎？</span>
        </div>
        <div class="tw-flex tw-p-[20px] tw-mx-[-10px]">
          <v-btn
            @click="isCancelDialogOpen = false"
            color="primary"
            variant="outlined"
            class="tw-flex-1 tw-mx-[10px]"
            >關閉視窗</v-btn
          >
          <v-btn
            color="primary"
            class="tw-flex-1 tw-mx-[10px]"
            @click="removeOrder"
            >確定取消</v-btn
          >
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
type orderInfo = {
  userInfo: {
    address: {
      zipcode: number;
      county: string;
      city: string;
    };
    name: string;
    phone: string;
    email: string;
  };
  _id: string;
  roomId: string;
  checkInDate: string;
  checkOutDate: string;
  peopleNum: number;
  orderUserId: string;
  status: number;
  createdAt: string;
  updatedAt: string;
};
type roomInfo = {
  _id: string;
  name: string;
  description: string;
  imageUrl: string;
  imageUrlList: string[];
  areaInfo: string;
  bedInfo: string;
  maxPeople: number;
  price: number;
  facilityInfo: {
    title: string;
    isProvide: boolean;
  }[];
  amenityInfo: {
    title: string;
    isProvide: boolean;
  }[];
  status: number;
  creator: string;
  createdAt: string;
  updatedAt: string;
};
type mixinOrderInfo = orderInfo & {
  day: string;
} & {
  roomInfo: roomInfo;
};
import { ref, onMounted, computed } from "vue";
import { useHttp } from "@/plugins/httpAxios";
import MemberCard from "@/components/member/Card.vue";
import Order from "@/components/member/Order/Order.vue";
import router from "@/plugins/router";
const { _axios } = useHttp();
const roomList = ref<mixinOrderInfo[]>([]);
const readyRoomList = ref<mixinOrderInfo[]>([]);
const historyRoomList = ref<mixinOrderInfo[]>([]);
const showMore = ref(false);

const displayRoomList = computed(() => {
  return showMore.value ? historyRoomList.value : historyRoomList.value.slice(0, 3);
});
const dateToString = (timestamp: number) => {
  let date = new Date(timestamp);
  switch (date.getDay()) {
    case 0: {
      return "星期日";
    }
    case 1: {
      return "星期一";
    }
    case 2: {
      return "星期二";
    }
    case 3: {
      return "星期三";
    }
    case 4: {
      return "星期四";
    }
    case 5: {
      return "星期五";
    }
    case 6: {
      return "星期六";
    }
    default: {
      return "星期六";
    }
  }
};
const dateFormat = (timestamp: number) => {
  let date = new Date(timestamp - 1000);
  return `${date.getMonth() + 1} 月 ${date.getDate()} 日${dateToString(
    timestamp
  )}`;
};
const getOrders = () => {
  _axios.get(`orders`).then((res) => {
    roomList.value = [];
    res.data.data.forEach(async (item: orderInfo) => {
      _axios.get(`rooms/${item.roomId}`).then((res) => {
        let tempObject = JSON.parse(JSON.stringify(item));
        tempObject.roomInfo = res.data.data;
        tempObject.day = String(
          (new Date(tempObject.checkOutDate).getTime() -
            new Date(tempObject.checkInDate).getTime()) /
            24 /
            60 /
            60 /
            1000
        );
        roomList.value.push(tempObject);
        historyRoomList.value = roomList.value.filter(item => item.status != 1);
        readyRoomList.value = roomList.value.filter(item => item.status == 1);
      });
    });
  });
};
onMounted(() => {
  getOrders();
});
const isCancelDialogOpen = ref(false);
const openCancelDialog = () => {
  isCancelDialogOpen.value = true;
};
const removeOrder = () => {
  _axios.delete(`orders/${readyRoomList.value[0]._id}`).then(() => {
    getOrders();
    isCancelDialogOpen.value = false;
  });
};
const toRoomInfo = () => {
  router.push(`/roomDetail/${readyRoomList.value[0].roomInfo._id}`);
};
</script>
<style scoped lang="scss">
.start-date {
  padding-left: 16px;
  position: relative;
  margin-bottom: 8px;
  &::before {
    content: "";
    position: absolute;
    display: block;
    width: 4px;
    height: 24px;
    top: 0;
    left: 0;
    background: #bf9d7d;
  }
}
.end-date {
  padding-left: 16px;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    display: block;
    width: 4px;
    height: 24px;
    top: 0;
    left: 0;
    background: #909090;
  }
}
</style>
