<template>
  <div class="tw-h-[90vh] tw-pt-10 sm:tw-pt-0 tw-flex">
    <div
      class="tw-w-1/2 tw-bg-cover tw-bg-center tw-hidden sm:tw-block"
      :style="`background-image: url(${getImageUrl('register.png')});`"
    ></div>
    <div
      class="tw-w-full sm:tw-w-1/2 tw-flex tw-justify-center tw-items-center tw-px-4"
    >
      <div
        class="tw-flex tw-flex-col tw-gap-5 sm:tw-w-1/2 sm:tw-min-w-[280px] tw-w-full"
      >
        <div class="tw-flex tw-flex-col tw-gap-4">
          <div class="tw-flex tw-flex-col tw-gap-2">
            <div
              class="tw-text-[#bf9d7d] sm:tw-text-lg tw-font-bold tw-tracking-wide"
            >
              享樂酒店，誠摯歡迎
            </div>
            <div
              class="tw-text-white tw-text-3xl sm:tw-text-5xl tw-font-bold tw-tracking-widest"
            >
              立即註冊
            </div>
          </div>
          <div class="tw-flex tw-flex-col tw-pt-4 tw-pb-4 tw-gap-4">
            <div class="tw-flex tw-justify-center tw-items-center tw-gap-2">
              <div
                class="tw-w-auto tw-flex tw-flex-col tw-justify-center tw-items-center tw-gap-1"
              >
                <div
                  class="tw-w-8 tw-h-8 tw-bg-[#bf9d7d] tw-rounded-full tw-overflow-hidden tw-flex tw-justify-center tw-items-center"
                >
                  <div
                    class="tw-text-center tw-text-white tw-text-lg tw-font-bold tw-leading-6 tw-tracking-wider"
                  >
                    1
                  </div>
                </div>
                <div
                  class="tw-text-center tw-text-white tw-text-sm sm:tw-text-lg tw-font-bold tw-leading-6 tw-tracking-wider tw-whitespace-nowrap"
                >
                  輸入信箱及密碼
                </div>
              </div>
              <div class="tw-w-full tw-h-0.5 tw-bg-gray-400"></div>
              <div
                class="tw-w-auto tw-flex tw-flex-col tw-justify-center tw-items-center tw-gap-1"
              >
                <div
                  class="tw-w-8 tw-h-8 tw-rounded-full tw-border tw-border-gray-400 tw-flex tw-justify-center tw-items-center"
                  :class="currStep === 2 ? 'tw-bg-[#bf9d7d]' : ''"
                >
                  <div
                    class="tw-text-center tw-text-sm tw-font-bold tw-leading-6 tw-tracking-wider"
                    :class="
                      currStep === 2 ? 'tw-text-white' : 'tw-text-gray-400'
                    "
                  >
                    2
                  </div>
                </div>
                <div
                  class="tw-text-center tw-text-gray-400 tw-text-sm sm:tw-text-lg tw-font-bold tw-leading-6 tw-tracking-wider tw-whitespace-nowrap"
                >
                  填寫基本資料
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="tw-flex tw-flex-col tw-items-start tw-gap-4">
          <template v-if="currStep === 1">
            <div class="tw-flex tw-flex-col tw-gap-2 tw-w-full">
              <label for="" class="tw-text-white tw-font-bold">電子信箱</label>
              <input
                id="email"
                type="email"
                placeholder="hello@exsample.com"
                class="tw-p-4 tw-bg-white tw-text-gray-600 tw-rounded tw-border"
                v-model="email"
              />
              <div class="tw-text-red-500">{{ errMsg.email }}</div>
            </div>
            <div class="tw-flex tw-flex-col tw-gap-2 tw-w-full">
              <label for="" class="tw-text-white tw-font-bold">密碼</label>
              <input
                id="password"
                type="password"
                placeholder="請輸入密碼"
                class="tw-p-4 tw-bg-white tw-text-gray-600 tw-rounded tw-border"
                v-model="password"
              />
              <div class="tw-text-red-500">{{ errMsg.password }}</div>
            </div>
            <div class="tw-flex tw-flex-col tw-gap-2 tw-w-full">
              <label for="" class="tw-text-white tw-font-bold">確認密碼</label>
              <input
                id="confirmPassword"
                type="password"
                placeholder="請再輸入一次密碼"
                class="tw-p-4 tw-bg-white tw-text-gray-600 tw-rounded tw-border tw-w-full"
                v-model="confirmPassword"
              />
              <div class="tw-text-red-500">{{ errMsg.passwordConfirm }}</div>
            </div>
          </template>
          <template v-else-if="currStep === 2">
            <div class="tw-flex tw-flex-col tw-gap-2 tw-w-full">
              <label for="" class="tw-text-white tw-font-bold">姓名</label>
              <input
                id="name"
                type="text"
                placeholder="請輸入姓名"
                class="tw-p-4 tw-bg-white tw-text-gray-600 tw-rounded tw-border"
                v-model="name"
              />
              <div class="tw-text-red-500">{{ errMsg.name }}</div>
            </div>
            <div class="tw-flex tw-flex-col tw-gap-2 tw-w-full">
              <label for="" class="tw-text-white tw-font-bold">手機號碼</label>
              <input
                id="phone"
                type="text"
                placeholder="請輸入手機號碼"
                class="tw-p-4 tw-bg-white tw-text-gray-600 tw-rounded tw-border"
                v-model="phone"
              />
              <div class="tw-text-red-500">{{ errMsg.phone }}</div>
            </div>
            <div class="tw-flex tw-flex-col tw-gap-2 tw-w-full">
              <label for="" class="tw-text-white tw-font-bold">生日</label>
              <div class="tw-flex tw-gap-2">
                <select
                  id="year"
                  class="tw-p-4 tw-bg-white tw-text-gray-600 tw-rounded tw-border tw-w-full"
                  v-model="birthYear"
                >
                  <option
                    v-for="i in 100"
                    :key="i"
                    :value="new Date().getFullYear() - (100 - i)"
                  >
                    {{ new Date().getFullYear() - (100 - i) }} 年
                  </option>
                </select>
                <select
                  id="month"
                  class="tw-p-4 tw-bg-white tw-text-gray-600 tw-rounded tw-border tw-w-full"
                  v-model="birthMonth"
                >
                  <option v-for="i in 12" :key="i" :value="i">
                    {{ i }} 月
                  </option>
                </select>
                <select
                  id="day"
                  class="tw-p-4 tw-bg-white tw-text-gray-600 tw-rounded tw-border tw-w-full"
                  v-model="birthDay"
                >
                  <option v-for="i in daysRange" :key="i" :value="i">
                    {{ i }} 日
                  </option>
                </select>
              </div>
              <div class="tw-text-red-500">{{ errMsg.birthDay }}</div>
            </div>
            <div class="tw-flex tw-flex-col tw-gap-2 tw-w-full">
              <label for="" class="tw-text-white tw-font-bold">地址</label>
              <div class="tw-flex tw-gap-2 tw-flex-wrap">
                <select
                  id="city"
                  class="tw-p-4 tw-bg-white tw-text-gray-600 tw-rounded tw-border tw-flex-1"
                  v-model="cityName"
                >
                  <option
                    v-for="city in CityCountyData"
                    :key="city.CityName"
                    :value="city.CityName"
                  >
                    {{ city.CityName }}
                  </option>
                </select>
                <select
                  id="area"
                  class="tw-p-4 tw-bg-white tw-text-gray-600 tw-rounded tw-border tw-flex-1"
                >
                  <option
                    v-for="area in areaList"
                    :key="area.ZipCode"
                    :value="area.ZipCode"
                  >
                    {{ area.AreaName }}
                  </option>
                </select>
                <input
                  id="address"
                  type="text"
                  placeholder="請輸入詳細地址"
                  class="tw-p-4 tw-bg-white tw-text-gray-600 tw-rounded tw-border tw-w-full"
                  v-model="addressDetail"
                />
                <div class="tw-text-red-500">{{ errMsg.addressDetail }}</div>
              </div>
            </div>
            <div class="tw-hidden tw-gap-2 tw-w-full">
              <input type="checkbox" name="" id="" />
              <label for="" class="tw-text-white tw-font-bold"
                >我已閱讀並同意本網站個資使用規範</label
              >
            </div>
          </template>
        </div>
        <div>
          <div>
            <div class="tw-text-red-500 tw-text-center tw-mb-1"></div>
            <div
              class="tw-flex-1 tw-flex tw-justify-center tw-items-center tw-bg-gray-200 tw-rounded"
            >
              <button
                type="button"
                id="nextStep"
                class="tw-p-4 tw-text-center tw-text-gray-600 tw-text-sm tw-font-bold tw-w-full"
                v-if="currStep === 1"
                v-on:click="nextStep"
              >
                下一步
              </button>
              <button
                type="submit"
                id="submit"
                class="tw-p-4 tw-text-center tw-bg-[#bf9d7d] tw-text-white tw-text-sm tw-font-bold tw-w-full"
                v-if="currStep === 2"
                v-on:click="nextStep"
              >
                完成註冊
              </button>
            </div>
          </div>
          <div
            class="tw-flex-1 tw-flex tw-justify-start tw-items-center tw-gap-2 tw-mt-2"
          >
            <div class="tw-text-white tw-text-sm">已經有會員了嗎?</div>
            <router-link
              to="/login"
              class="tw-text-center tw-text-[#bf9d7d] tw-text-sm tw-font-bold tw-underline"
              >立即登入</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import { useHelper } from "@/utils/useHelper";
import { CityCountyData } from "@/utils/CityCountyData";
type Area = {
  ZipCode: string;
  AreaName: string;
  AreaEngName: string;
};
type City = {
  CityName: string;
  CityEngName: string;
  AreaList: Area[];
};
type Address = {
  zipcode: number;
  county: string;
  city: string;
  detail: string;
};
type SignupInfo = {
  name: string;
  email: string;
  password: string;
  phone: string;
  birthday: string;
  address: Address;
};

const { getImageUrl } = useHelper();
const router = useRouter();
let currStep = ref<number>(1);
const areaList = ref<Area[]>([]);
const name = ref<string>("");
const email = ref<string>("");
const password = ref<string>("");
const confirmPassword = ref<string>("");
const phone = ref<string>("");
const cityName = ref<string>("");
const countyName = ref<string>("");
const zipcodeStr = ref<string>("");
const addressDetail = ref<string>("");
const errMsg = ref({
  email: "",
  password: "",
  passwordConfirm: "",
  name: "",
  phone: "",
  birthDay: "",
  addressDetail: "",
});

// 日期區間設定
const birthYear = ref(new Date().getFullYear() - 25);
const birthMonth = ref(1);
const birthDay = ref(1);
const daysRange = ref<number>(31);
const setDaysRange = () => {
  if (birthMonth.value === 2) {
    daysRange.value = birthYear.value % 4 ? 28 : 29;
  } else if ([1, 3, 5, 7, 8, 10, 12].includes(birthMonth.value)) {
    daysRange.value = 31;
  } else {
    daysRange.value = 30;
  }
};
watch(() => birthYear.value, setDaysRange);
watch(() => birthMonth.value, setDaysRange);
watch(cityName, () => setAreaList());

onMounted(() => {
  cityName.value = CityCountyData[0].CityName;
  setAreaList();
});

const nextStep = () => {
  if (currStep.value === 1) {
    currStep.value = validate1() ? 2 : 1;
  } else {
    if (validate2()) {
      submitSignup();
    }
  }
};

function validate1() {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailPattern.test(email.value)) {
    errMsg.value.email = "Email 格式不正確";
  } else {
    errMsg.value.email = "";
  }

  if (password.value.length < 4) {
    errMsg.value.password = "密碼長度不足 4 個字元";
  } else if (password.value !== confirmPassword.value) {
    errMsg.value.passwordConfirm = "密碼不一致";
  } else {
    errMsg.value.password = "";
    errMsg.value.passwordConfirm = "";
  }

  return (
    errMsg.value.email === "" &&
    errMsg.value.password === "" &&
    errMsg.value.passwordConfirm === ""
  );
}
function validate2() {
  if (!name.value) {
    errMsg.value.name = "姓名為必填欄位";
  } else {
    errMsg.value.name = "";
  }

  if (!phone.value) {
    errMsg.value.phone = "手機號碼為必填欄位";
  } else if (phone.value.length !== 10) {
    errMsg.value.phone = "手機號碼格式不正確";
  } else {
    errMsg.value.phone = "";
  }

  if (!birthYear.value || !birthMonth.value || !birthDay.value) {
    errMsg.value.birthDay = "生日為必填欄位";
  } else {
    errMsg.value.birthDay = "";
  }

  if (!addressDetail.value) {
    errMsg.value.addressDetail = "地址為必填欄位";
  } else {
    errMsg.value.addressDetail = "";
  }

  return (
    errMsg.value.name === "" &&
    errMsg.value.phone === "" &&
    errMsg.value.birthDay === "" &&
    errMsg.value.addressDetail === ""
  );
}

const setAreaList = () => {
  const currCity: City | undefined = CityCountyData.find(
    (item: City) => item.CityName === cityName.value
  );
  if (currCity) areaList.value = currCity.AreaList;
  zipcodeStr.value = areaList.value[0].ZipCode;
  countyName.value = areaList.value[0].AreaName;
};

const submitSignup = () => {
  const dataModel: SignupInfo = {
    name: name.value,
    email: email.value,
    password: password.value,
    phone: phone.value,
    birthday: `${birthYear.value}-${birthMonth.value}-${birthDay.value}`,
    address: {
      zipcode: Number(zipcodeStr.value) || 0,
      county:
        CityCountyData.find(
          (item: City) => item.CityName === cityName.value
        )?.AreaList.find((item: Area) => item.ZipCode === zipcodeStr.value)
          ?.AreaName ?? "",
      city: cityName.value,
      detail: addressDetail.value,
    },
  };

  // 發送POST請求
  axios
    .post(
      "https://hotel-reservation-backend-sgtq.onrender.com/api/v1/user/signup",
      dataModel
    )
    .then(() => {
      alert("註冊成功");
      router.push("/login");
    })
    .catch((error) => {
      console.error("註冊失敗：", error);
      alert("註冊失敗");
    });
};
</script>

<style scoped></style>
