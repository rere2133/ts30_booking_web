<template>
  <div class="member-order tw-px-[40px]">
    <div class="md:tw-flex tw-mx-[-40px]" v-if="userInfo!= null">
      <template v-if="orderMode == 'show'">
        <div class="tw-mb-[20px] md:tw-mb-0 tw-flex-[5] tw-mx-[40px]">
          <member-card class="tw-text-black-100">
            <p class="tw-text-black-100 tw-text-[24px] tw-font-[700] tw-mb-[40px]">修改密碼</p>
            <div class="tw-mb-[24px]">
              <p class="tw-mb-[8px] tw-text-black-80 tw-leading-[1.5] tw-font-[500] tw-tracking-[0.32px]">電子信箱</p>
              <p class="tw-font-[700] tw-leading-[1.5] tw-tracking-[0.32px]">{{ userInfo.email }}</p>
            </div>
            <div class="tw-flex tw-items-center">
              <div class="tw-mr-[16px] tw-flex-[1]">
                <p class="tw-mb-[8px] tw-text-black-80 tw-leading-[1.5] tw-font-[500] tw-tracking-[0.32px]">密碼</p>
                <p class="tw-flex tw-py-[8px]">
                  <template v-for="_ in 8" :key="key">
                    <i class="tw-block tw-w-[8px] tw-h-[8px] tw-rounded-[4px] tw-bg-black-100 tw-mr-[8px]"></i>
                  </template>
                </p>
              </div>
              <button type="button" class="tw-p-0 tw-font-[700] tw-text-primary-100 tw-underline" @click="changeMode('edit')">重設</button>
            </div>
          </member-card>
        </div>
        <div class="tw-flex-[7] tw-mx-[40px]">
          <member-card class="tw-text-black-100">
            <p class="tw-text-black-100 tw-text-[24px] tw-font-[700] tw-mb-[40px]">基本資料</p>
            <div class="tw-mb-[24px]">
              <p class="tw-mb-[8px] tw-text-black-80 tw-leading-[1.5] tw-font-[500] tw-tracking-[0.32px]">姓名</p>
              <p class="tw-font-[700] tw-leading-[1.5] tw-tracking-[0.32px]">{{ userInfo.name }}</p>
            </div>
            <div class="tw-mb-[24px]">
              <p class="tw-mb-[8px] tw-text-black-80 tw-leading-[1.5] tw-font-[500] tw-tracking-[0.32px]">手機號碼</p>
              <p class="tw-font-[700] tw-leading-[1.5] tw-tracking-[0.32px]">{{ userInfo.phone }}</p>
            </div>
            <div class="tw-mb-[24px]">
              <p class="tw-mb-[8px] tw-text-black-80 tw-leading-[1.5] tw-font-[500] tw-tracking-[0.32px]">生日</p>
              <p class="tw-font-[700] tw-leading-[1.5] tw-tracking-[0.32px]">{{ userInfo.birthday }}</p>
            </div>
            <div class="tw-mb-[24px]">
              <p class="tw-mb-[8px] tw-text-black-80 tw-leading-[1.5] tw-font-[500] tw-tracking-[0.32px]">地址</p>
              <p class="tw-font-[700] tw-leading-[1.5] tw-tracking-[0.32px]">{{ `${userInfo.address.city}${userInfo.address.county}${userInfo.address.detail}` }}</p>
            </div>
            <button
              type="button"
              class="tw-py-[16px] tw-px-[32px] tw-border-primary-100 tw-border-[1px] tw-border-solid tw-rounded-[8px] tw-text-primary-100"
            >
              編輯
            </button>
          </member-card>
        </div>
      </template>
      <template v-else-if="orderMode == 'edit'">
        <div class="tw-mb-[20px] md:tw-mb-0 tw-flex-[5] tw-mx-[40px]">
          <member-card class="tw-text-black-100">
            <p class="tw-text-black-100 tw-text-[24px] tw-font-[700] tw-mb-[40px]">修改密碼</p>
            <div class="tw-mb-[24px]">
              <p class="tw-mb-[8px] tw-text-black-80 tw-leading-[1.5] tw-font-[500] tw-tracking-[0.32px]">電子信箱</p>
              <input class="tw-p-4 tw-bg-white tw-text-gray-600 tw-w-full tw-rounded tw-border-solid tw-border-[1px] tw-border-black-40" v-model="email" />
            </div>
            <div class="tw-flex tw-items-center">
              <div class="tw-mr-[16px] tw-flex-[1]">
                <p class="tw-mb-[8px] tw-text-black-80 tw-leading-[1.5] tw-font-[500] tw-tracking-[0.32px]">舊密碼</p>
                <input class="tw-p-4 tw-bg-white tw-text-gray-600 tw-w-full tw-rounded tw-border-solid tw-border-[1px] tw-border-black-40" type="password" v-model="oldPassword" />
              </div>
            </div>
            <div class="tw-flex tw-items-center">
              <div class="tw-mr-[16px] tw-flex-[1]">
                <p class="tw-mb-[8px] tw-text-black-80 tw-leading-[1.5] tw-font-[500] tw-tracking-[0.32px]">新密碼</p>
                <input class="tw-p-4 tw-bg-white tw-text-gray-600 tw-w-full tw-rounded tw-border-solid tw-border-[1px] tw-border-black-40" type="password" v-model="newPassword" />
              </div>
            </div>
            <div class="tw-flex tw-items-center">
              <div class="tw-mr-[16px] tw-flex-[1]">
                <p class="tw-mb-[8px] tw-text-black-80 tw-leading-[1.5] tw-font-[500] tw-tracking-[0.32px]">重複新密碼</p>
                <input class="tw-p-4 tw-bg-white tw-text-gray-600 tw-w-full tw-rounded tw-border-solid tw-border-[1px] tw-border-black-40" type="password" v-model="reNewPassword" />
              </div>
            </div>
            <button
              type="button"
              class="tw-py-[16px] tw-mt-[24px] tw-px-[32px] tw-border-primary-100 tw-border-[1px] tw-border-solid tw-rounded-[8px] tw-text-primary-100" @click="orderMode = 'show'"
            >
              儲存設定
            </button>
          </member-card>
        </div>
        <div class="tw-flex-[7] tw-mx-[40px]">
          <member-card class="tw-text-black-100">
            <p class="tw-text-black-100 tw-text-[24px] tw-font-[700] tw-mb-[40px]">基本資料</p>
            <div class="tw-mb-[24px]">
              <p class="tw-mb-[8px] tw-text-black-80 tw-leading-[1.5] tw-font-[500] tw-tracking-[0.32px]">姓名</p>
              <input class="tw-p-4 tw-bg-white tw-text-gray-600 tw-w-full tw-rounded tw-border-solid tw-border-[1px] tw-border-black-40" v-model="name" />
            </div>
            <div class="tw-mb-[24px]">
              <p class="tw-mb-[8px] tw-text-black-80 tw-leading-[1.5] tw-font-[500] tw-tracking-[0.32px]">手機號碼</p>
              <input class="tw-p-4 tw-bg-white tw-text-gray-600 tw-w-full tw-rounded tw-border-solid tw-border-[1px] tw-border-black-40" v-model="phone" />
            </div>
            <div class="tw-mb-[24px]">
              <p class="tw-mb-[8px] tw-text-black-80 tw-leading-[1.5] tw-font-[500] tw-tracking-[0.32px]">生日</p>
              <div class="tw-flex tw-mx-[-10px]">
                <select class="tw-p-4 tw-bg-white tw-text-gray-600 tw-flex-[1] tw-mx-[10px] tw-rounded tw-border-solid tw-border-[1px] tw-border-black-40" v-model="year" @change="reSetDates">
                  <option v-for="y in 100" :key="`year_${y}`" :value="String(y + 1924)">{{ y + 1924 }} 年</option>
                </select>
                <select class="tw-p-4 tw-bg-white tw-text-gray-600 tw-flex-[1] tw-mx-[10px] tw-rounded tw-border-solid tw-border-[1px] tw-border-black-40" v-model="month" @change="reSetDates">
                  <option v-for="m in 12" :key="`month_${m}`" :value="String(m)">{{ m }} 月</option>
                </select>
                <select class="tw-p-4 tw-bg-white tw-text-gray-600 tw-flex-[1] tw-mx-[10px] tw-rounded tw-border-solid tw-border-[1px] tw-border-black-40" v-model="date">
                  <option v-for="d in dates" :key="`date_${d}`" :value="String(d)">{{ d }} 日</option>
                </select>
              </div>
            </div>
            <div class="tw-mb-[24px]">
              <p class="tw-mb-[8px] tw-text-black-80 tw-leading-[1.5] tw-font-[500] tw-tracking-[0.32px]">地址</p>
              <div class="tw-flex tw-mx-[-10px] tw-mb-[8px]">
                <select class="tw-p-4 tw-bg-white tw-text-gray-600 tw-flex-[1] tw-mx-[10px] tw-rounded tw-border-solid tw-border-[1px] tw-border-black-40" v-model="city" @change="reloadTownList">
                  <option v-for="cityItem in cityList" :key="`city_${cityItem}`">{{ cityItem }}</option>
                </select>
                <select class="tw-p-4 tw-bg-white tw-text-gray-600 tw-flex-[1] tw-mx-[10px] tw-rounded tw-border-solid tw-border-[1px] tw-border-black-40" v-model="town">
                  <option v-for="townItem in townList" :key="`city_${townItem}`" :value="townItem.zipCode">{{ townItem.areaName }}</option>
                </select>
              </div>
              <input class="tw-p-4 tw-bg-white tw-text-gray-600 tw-w-full tw-rounded tw-border-solid tw-border-[1px] tw-border-black-40" v-model="addressDetail" />
            </div>
            <button
              type="button"
              class="tw-py-[16px] tw-px-[32px] tw-border-primary-100 tw-border-[1px] tw-border-solid tw-rounded-[8px] tw-text-primary-100" @click="orderMode = 'show'"
            >
              儲存設定
            </button>
          </member-card>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref,onMounted} from 'vue';
import {useHttp} from '@/plugins/httpAxios';
import MemberCard from "@/components/member/Card.vue";
import {CityCountyData} from '@/utils/CityCountyData';
const {_axios} = useHttp();
const userInfo = ref<any>(null);
const orderMode = ref('show');

onMounted(() => {
  _axios.get(`/user`).then((res) => {
    userInfo.value = res.data.data;
    let birthdaySource = userInfo.value.birthday.split('T')[0].split('-');
    userInfo.value.birthday = `${birthdaySource[0]} 年 ${birthdaySource[1]} 月 ${birthdaySource[2]} 日`
    name.value = userInfo.value.name;
    phone.value = userInfo.value.phone;
    year.value = birthdaySource[0];
    month.value = birthdaySource[1];
    if (Number(month.value) < 10) {
      month.value = month.value.replace('0', '');
    }
    reSetDates();
    date.value = birthdaySource[2];
    if (Number(date.value) < 10) {
      date.value = date.value.replace('0', '');
    }
    city.value = userInfo.value.address.city;
    reloadTownList();
    town.value = String(userInfo.value.address.zipcode);
    addressDetail.value = userInfo.value.address.detail;
  })
})

const changeMode = (mode: string) => {
  orderMode.value = mode;
}

// edit area
const email = ref(userInfo.email);
const oldPassword = ref('');
const newPassword = ref('');
const reNewPassword = ref('');
const name = ref('');
const phone = ref('');
const year = ref('1950');
const month = ref('3');
const date = ref('15');
const dates = ref<string[]>([]);
const reSetDates = () => {
  let lastDate = new Date(Number(year.value), Number(month.value), 0).getDate();
  let datesList = Array.from(
    {
      length: lastDate
    },
    (_, index) => String(index + 1)
  );
  dates.value = datesList
}
const city = ref('基隆市');
const town = ref('200');
const cityList = ref<string[]>([]);
const townList = ref<{zipCode: string; areaName: string}[]>([]);
CityCountyData.forEach((item) => {
  cityList.value.push(item.CityName);
  if (item.CityName == city.value) {
    item.AreaList.forEach(townItem => {
      townList.value.push({
        zipCode: townItem.ZipCode,
        areaName: townItem.AreaName
      })
    })
    town.value = townList.value[0].zipCode;
  }
})
const addressDetail = ref('');
const reloadTownList = () => {
  let matchCity = CityCountyData.find(item => item.CityName == city.value);
  townList.value = [];
  matchCity?.AreaList.forEach(item => {
    townList.value.push({
        zipCode: item.ZipCode,
        areaName: item.AreaName
      })
  })
  town.value = townList.value[0].zipCode;
}
</script>

<style scoped></style>
