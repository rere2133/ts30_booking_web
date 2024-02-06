<template>
  <div class="member-profile tw-px-[40px]">
    <div class="md:tw-flex tw-mx-[-40px]" v-if="roomList.length > 0">
      
      <div class="tw-mb-[20px] md:tw-mb-0 tw-flex-[6] tw-mx-[40px]">
          <member-card class="tw-text-black-100">
            <div class="tw-text-body tw-mb-[8px]">預定參考編號：{{ roomList[0].roomInfo._id }}</div>
            <div class="tw-text-h5 tw-mb-[24px]">即將來的行程</div>
            <img class="tw-w-full tw-rounded-[10px] tw-h-[200px] tw-object-center tw-object-cover" :src="roomList[0].roomInfo.imageUrl"/>
            <div class="tw-my-[24px]">
              <span class="tw-text-h6 tw-pr-[8px] tw-mr-[8px] tw-border-r-[1px] tw-border-r-solid tw-border-r-black-60">
                {{roomList[0].roomInfo.name}}，{{roomList[0].day}} 晚
              </span>
              <span className="tw-text-h6">住宿人數：{{roomList[0].peopleNum}} 位</span>
            </div>
            <div className="start-date">
              {{dateFormat(new Date(roomList[0].checkInDate.split('T')[0]).getTime())}}，15:00 可入住
            </div>
            <div className="end-date">
              {{dateFormat(
                new Date(roomList[0].checkOutDate.split('T')[0]).getTime()
              )}}
              ，12:00 前退房
            </div>
            <div class="tw-text-body tw-mt-[24px]">
              <span>NT$ </span>
                {{(Number(roomList[0].roomInfo.price) * Number(roomList[0].day))
                  .toLocaleString(undefined, {
                    style: 'currency',
                    currency: 'NTD',
                    maximumFractionDigits: 0
                  })
                  .replace('NTD', '')}}
            </div>
            <Order :roomInfo="roomList[0].roomInfo" />
            <div class="tw-flex tw-mx-[-8px] tw-mt-[24px]">
              <v-btn color="primary" variant="outlined" class="tw-mx-[8px] tw-flex-1">取消預定</v-btn>
              <v-btn color="primary" class="tw-mx-[8px] tw-flex-1">查看詳情</v-btn>
            </div>
          </member-card>
        </div>
        <div class="tw-flex-[6] tw-mx-[40px]">
          <member-card class="tw-text-black-100">
            <div class="tw-text-h5 tw-mb-[24px]">歷史訂單</div>
            <div v-for="item in roomList" :key="`history_${item._id}`">
              <div class="tw-flex">
                <img class="tw-flex-0 tw-mr-[8px] tw-rounded-[5px] tw-object-center tw-object-cover tw-max-h-[80px]" :src="item.roomInfo.imageUrl" width="120px" height="80px" />
                <div class="history-item-info">
                  <div class="tw-text-body tw-mb-[8px]">預定參考編號：#{{ item._id }}</div>
                  <div class="tw-text-h6">{{ item.roomInfo.name }}</div>
                  <div class="tw-text-body tw-my-[8px]">住宿天數：{{ item.day }} 晚</div>
                  <div class="tw-text-body tw-my-[8px]">住宿人數：{{ item.peopleNum }} 位</div>
                  <div class="start-date">入住：{{ dateFormat(new Date(item.checkInDate).getTime()) }}</div>
                  <div class="end-date">
                    退房：{{ dateFormat(new Date(item.checkOutDate).getTime()) }}
                  </div>
                  <div class="tw-text-body tw-mt-[16px]">
                    <span>NT$ </span>
                    {{(Number(item.roomInfo.price) * Number(item.day))
                      .toLocaleString(undefined, {
                        style: 'currency',
                        currency: 'NTD',
                        maximumFractionDigits: 0
                      })
                      .replace('NTD', '')}}
                  </div>
                </div>
              </div>
            </div>
          </member-card>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  type orderInfo =  {
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
  }
  type roomInfo =  {
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
  }
  type mixinOrderInfo = orderInfo & {
      day: string;
    } & {
    roomInfo: roomInfo 
  }
  import {ref, onMounted} from 'vue';
  import {useHttp} from '@/plugins/httpAxios';
  import MemberCard from "@/components/member/Card.vue";
  import Order from "@/components/member/Order/Order.vue";
  const {_axios} = useHttp();
  const roomList = ref<mixinOrderInfo[]>([]);
    const dateToString = (timestamp: number) => {
  let date = new Date(timestamp);
  switch (date.getDay()) {
    case 0: {
      return '星期日';
    }
    case 1: {
      return '星期一';
    }
    case 2: {
      return '星期二';
    }
    case 3: {
      return '星期三';
    }
    case 4: {
      return '星期四';
    }
    case 5: {
      return '星期五';
    }
    case 6: {
      return '星期六';
    }
    default: {
      return '星期六';
    }
  }
};
  const dateFormat = (timestamp: number) => {
  let date = new Date(timestamp - 1000);
  return `${date.getMonth() + 1} 月 ${date.getDate()} 日${dateToString(timestamp)}`;
};
  onMounted(() => {
    _axios.get(`orders`).then((res) => {
      res.data.data.forEach(async (item: orderInfo) => {
        _axios.get(`rooms/${item.roomId}`).then((res) => {
          let tempObject = JSON.parse(JSON.stringify(item));
          tempObject.roomInfo = res.data.data;
          tempObject.day = String(
          (new Date(tempObject.checkOutDate).getTime() - new Date(tempObject.checkInDate).getTime()) / 24 / 60 / 60 / 1000
        )
          roomList.value.push(tempObject);
        })
      })
    })
  })
</script>
<style scoped lang="scss">
  .start-date {
    padding-left: 16px;
    position: relative;
    margin-bottom: 16px;
    &::before {
      content: '';
      position: absolute;
      display: block;
      width: 4px;
      height: 24px;
      top: 0;
      left: 0;
      background: #BF9D7D;
    }
  }
  .end-date {
    padding-left: 16px;
    position: relative;
    &::before {
      content: '';
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
