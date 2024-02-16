<template>
  <div class="member-order tw-px-[40px]">
    <div class="md:tw-flex tw-mx-[-40px]" v-if="userInfo != null">
      <template v-if="orderMode == 'show'">
        <div class="tw-mb-[20px] md:tw-mb-0 tw-flex-[5] tw-mx-[40px]">
          <member-card class="tw-text-black-100">
            <p
              class="tw-text-black-100 tw-text-[24px] tw-font-[700] tw-mb-[40px]"
            >
              修改密碼
            </p>
            <div class="tw-mb-[24px]">
              <p
                class="tw-mb-[8px] tw-text-black-80 tw-leading-[1.5] tw-font-[500] tw-tracking-[0.32px]"
              >
                電子信箱
              </p>
              <p class="tw-font-[700] tw-leading-[1.5] tw-tracking-[0.32px]">
                {{ userInfo.email }}
              </p>
            </div>
            <div class="tw-flex tw-items-center">
              <div class="tw-mr-[16px] tw-flex-[1]">
                <p
                  class="tw-mb-[8px] tw-text-black-80 tw-leading-[1.5] tw-font-[500] tw-tracking-[0.32px]"
                >
                  密碼
                </p>
                <p class="tw-flex tw-py-[8px]">
                  <template v-for="_ in 8" :key="_">
                    <i
                      class="tw-block tw-w-[8px] tw-h-[8px] tw-rounded-[4px] tw-bg-black-100 tw-mr-[8px]"
                    ></i>
                  </template>
                </p>
              </div>
              <button
                type="button"
                class="tw-p-0 tw-font-[700] tw-text-primary-100 tw-underline"
                @click="changeMode('edit')"
              >
                重設
              </button>
            </div>
          </member-card>
        </div>
        <div class="tw-flex-[7] tw-mx-[40px]">
          <member-card class="tw-text-black-100">
            <p
              class="tw-text-black-100 tw-text-[24px] tw-font-[700] tw-mb-[40px]"
            >
              基本資料
            </p>
            <div class="tw-mb-[24px]">
              <p
                class="tw-mb-[8px] tw-text-black-80 tw-leading-[1.5] tw-font-[500] tw-tracking-[0.32px]"
              >
                姓名
              </p>
              <p class="tw-font-[700] tw-leading-[1.5] tw-tracking-[0.32px]">
                {{ userInfo.name }}
              </p>
            </div>
            <div class="tw-mb-[24px]">
              <p
                class="tw-mb-[8px] tw-text-black-80 tw-leading-[1.5] tw-font-[500] tw-tracking-[0.32px]"
              >
                手機號碼
              </p>
              <p class="tw-font-[700] tw-leading-[1.5] tw-tracking-[0.32px]">
                {{ userInfo.phone }}
              </p>
            </div>
            <div class="tw-mb-[24px]">
              <p
                class="tw-mb-[8px] tw-text-black-80 tw-leading-[1.5] tw-font-[500] tw-tracking-[0.32px]"
              >
                生日
              </p>
              <p class="tw-font-[700] tw-leading-[1.5] tw-tracking-[0.32px]">
                {{ userInfo.birthday }}
              </p>
            </div>
            <div class="tw-mb-[24px]">
              <p
                class="tw-mb-[8px] tw-text-black-80 tw-leading-[1.5] tw-font-[500] tw-tracking-[0.32px]"
              >
                地址
              </p>
              <p class="tw-font-[700] tw-leading-[1.5] tw-tracking-[0.32px]">
                {{
                  `${userInfo.address.city}${userInfo.address.county}${userInfo.address.detail}`
                }}
              </p>
            </div>
            <button
              @click="changeMode('edit')"
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
            <p
              class="tw-text-black-100 tw-text-[24px] tw-font-[700] tw-mb-[40px]"
            >
              修改密碼
            </p>
            <div class="tw-mb-[24px]">
              <p
                class="tw-mb-[8px] tw-text-black-80 tw-leading-[1.5] tw-font-[500] tw-tracking-[0.32px]"
              >
                電子信箱
              </p>
              <input
                class="tw-p-4 tw-bg-white tw-text-gray-600 tw-w-full tw-rounded tw-border-solid tw-border-[1px] tw-border-black-40"
                v-model="email"
                autoComplete="false"
                disabled
              />
            </div>
            <div class="tw-flex tw-items-center">
              <div class="tw-mr-[16px] tw-flex-[1]">
                <p
                  class="tw-mb-[8px] tw-text-black-80 tw-leading-[1.5] tw-font-[500] tw-tracking-[0.32px]"
                >
                  舊密碼
                </p>
                <input
                  class="tw-p-4 tw-bg-white tw-text-gray-600 tw-w-full tw-rounded tw-border-solid tw-border-[1px] tw-border-black-40"
                  type="password"
                  v-model="oldPassword"
                  autoComplete="false"
                />
                <div
                  class="tw-mt-[4px] tw-text-error-120 tw-text-tiny" v-show="validateObj.oldPassword.status == false"
                >
                  {{ validateObj.oldPassword.msg }}
                </div>
              </div>
            </div>
            <div class="tw-flex tw-items-center">
              <div class="tw-mr-[16px] tw-flex-[1]">
                <p
                  class="tw-mb-[8px] tw-text-black-80 tw-leading-[1.5] tw-font-[500] tw-tracking-[0.32px]"
                >
                  新密碼
                </p>
                <input
                  class="tw-p-4 tw-bg-white tw-text-gray-600 tw-w-full tw-rounded tw-border-solid tw-border-[1px] tw-border-black-40"
                  type="password"
                  v-model="newPassword"
                  autoComplete="false"
                />
                <div
                  class="tw-mt-[4px] tw-text-error-120 tw-text-tiny" v-show="validateObj.newPassword.status == false"
                >
                  {{ validateObj.newPassword.msg }}
                </div>
              </div>
            </div>
            <div class="tw-flex tw-items-center">
              <div class="tw-mr-[16px] tw-flex-[1]">
                <p
                  class="tw-mb-[8px] tw-text-black-80 tw-leading-[1.5] tw-font-[500] tw-tracking-[0.32px]"
                >
                  重複新密碼
                </p>
                <input
                  class="tw-p-4 tw-bg-white tw-text-gray-600 tw-w-full tw-rounded tw-border-solid tw-border-[1px] tw-border-black-40"
                  type="password"
                  v-model="reNewPassword"
                  autoComplete="false"
                />
                <div
                  class="tw-mt-[4px] tw-text-error-120 tw-text-tiny" v-show="validateObj.reNewPassword.status == false"
                >
                  {{ validateObj.reNewPassword.msg }}
                </div>
              </div>
            </div>
            <button
              type="button"
              class="tw-py-[16px] tw-mt-[24px] tw-px-[32px] tw-border-primary-100 tw-border-[1px] tw-border-solid tw-rounded-[8px] tw-text-primary-100"
              @click="updateUserInfo()"
            >
              儲存設定
            </button>
          </member-card>
        </div>
        <div class="tw-flex-[7] tw-mx-[40px]">
          <member-card class="tw-text-black-100">
            <p
              class="tw-text-black-100 tw-text-[24px] tw-font-[700] tw-mb-[40px]"
            >
              基本資料
            </p>
            <div class="tw-mb-[24px]">
              <p
                class="tw-mb-[8px] tw-text-black-80 tw-leading-[1.5] tw-font-[500] tw-tracking-[0.32px]"
              >
                姓名
              </p>
              <input
                class="tw-p-4 tw-bg-white tw-text-gray-600 tw-w-full tw-rounded tw-border-solid tw-border-[1px] tw-border-black-40"
                v-model="name"
              />
              <div
                  class="tw-mt-[4px] tw-text-error-120 tw-text-tiny" v-show="validateObj.name.status == false"
                >
                  {{ validateObj.name.msg }}
                </div>
            </div>
            <div class="tw-mb-[24px]">
              <p
                class="tw-mb-[8px] tw-text-black-80 tw-leading-[1.5] tw-font-[500] tw-tracking-[0.32px]"
              >
                手機號碼
              </p>
              <input
                class="tw-p-4 tw-bg-white tw-text-gray-600 tw-w-full tw-rounded tw-border-solid tw-border-[1px] tw-border-black-40"
                v-model="phone"
              />
              <div
                  class="tw-mt-[4px] tw-text-error-120 tw-text-tiny" v-show="validateObj.phone.status == false"
                >
                  {{ validateObj.phone.msg }}
                </div>
            </div>
            <div class="tw-mb-[24px]">
              <p
                class="tw-mb-[8px] tw-text-black-80 tw-leading-[1.5] tw-font-[500] tw-tracking-[0.32px]"
              >
                生日
              </p>
              <div class="tw-flex tw-mx-[-10px]">
                <select
                  class="tw-p-4 tw-bg-white tw-text-gray-600 tw-flex-[1] tw-mx-[10px] tw-rounded tw-border-solid tw-border-[1px] tw-border-black-40"
                  v-model="year"
                  @change="reSetDates"
                >
                  <option
                    v-for="y in 100"
                    :key="`year_${y}`"
                    :value="String(y + 1924)"
                  >
                    {{ y + 1924 }} 年
                  </option>
                </select>
                <select
                  class="tw-p-4 tw-bg-white tw-text-gray-600 tw-flex-[1] tw-mx-[10px] tw-rounded tw-border-solid tw-border-[1px] tw-border-black-40"
                  v-model="month"
                  @change="reSetDates"
                >
                  <option
                    v-for="m in 12"
                    :key="`month_${m}`"
                    :value="String(m)"
                  >
                    {{ m }} 月
                  </option>
                </select>
                <select
                  class="tw-p-4 tw-bg-white tw-text-gray-600 tw-flex-[1] tw-mx-[10px] tw-rounded tw-border-solid tw-border-[1px] tw-border-black-40"
                  v-model="date"
                >
                  <option
                    v-for="d in dates"
                    :key="`date_${d}`"
                    :value="String(d)"
                  >
                    {{ d }} 日
                  </option>
                </select>
              </div>
            </div>
            <div class="tw-mb-[24px]">
              <p
                class="tw-mb-[8px] tw-text-black-80 tw-leading-[1.5] tw-font-[500] tw-tracking-[0.32px]"
              >
                地址
              </p>
              <div class="tw-flex tw-mx-[-10px] tw-mb-[8px]">
                <select
                  class="tw-p-4 tw-bg-white tw-text-gray-600 tw-flex-[1] tw-mx-[10px] tw-rounded tw-border-solid tw-border-[1px] tw-border-black-40"
                  v-model="city"
                  @change="reloadTownList"
                >
                  <option
                    v-for="cityItem in cityList"
                    :key="`city_${cityItem}`"
                  >
                    {{ cityItem }}
                  </option>
                </select>
                <select
                  class="tw-p-4 tw-bg-white tw-text-gray-600 tw-flex-[1] tw-mx-[10px] tw-rounded tw-border-solid tw-border-[1px] tw-border-black-40"
                  v-model="town"
                >
                  <option
                    v-for="townItem in townList"
                    :key="`city_${townItem}`"
                    :value="townItem.zipCode"
                  >
                    {{ townItem.areaName }}
                  </option>
                </select>
              </div>
              <input
                class="tw-p-4 tw-bg-white tw-text-gray-600 tw-w-full tw-rounded tw-border-solid tw-border-[1px] tw-border-black-40"
                v-model="addressDetail"
              />
              <div
                  class="tw-mt-[4px] tw-text-error-120 tw-text-tiny" v-show="validateObj.addressDetail.status == false"
                >
                  {{ validateObj.addressDetail.msg }}
                </div>
            </div>
            <button
              type="button"
              class="tw-py-[16px] tw-px-[32px] tw-border-primary-100 tw-border-[1px] tw-border-solid tw-rounded-[8px] tw-text-primary-100"
              @click="updateUserInfo()"
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
import { ref, onMounted } from "vue";
import { useHttp } from "@/plugins/httpAxios";
import MemberCard from "@/components/member/Card.vue";
import { CityCountyData } from "@/utils/CityCountyData";
import useSnackbarStore from '@/store/snackbarStore';
let snackbarStore = useSnackbarStore();
let {setSnackBar} = snackbarStore;
const { _axios } = useHttp();
type validateFormItem = {
  status: boolean;
  msg: string | null;
};
enum validateName {
  oldPassword = 'oldPassword',
  newPassword = 'newPassword',
  reNewPassword = 'reNewPassword',
  name = 'name',
  phone = 'phone',
  addressDetail = 'addressDetail'
}
type validateForm = {
  oldPassword: validateFormItem;
  newPassword: validateFormItem;
  reNewPassword: validateFormItem;
  name: validateFormItem;
  phone: validateFormItem;
  addressDetail: validateFormItem;
};
const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{4,}$/;
const userInfo = ref<{
  address: {
      zipcode: number;
      detail: string;
      county: string;
      city: string;
    };
    birthday: string;
    name: string;
    email: string;
    phone: string;
} | null>(null);
const orderMode = ref("show");
type userInfo = {
  userInfo: {
    address: {
      zipcode: number;
      detail: string;
      county: string;
      city: string;
    };
    name: string;
    email: string;
    phone: string;
  };
};
const getUserData = () => {
  _axios.get(`/user`).then((res) => {
    userInfo.value = res.data.data;
    if (userInfo.value) {
      let birthdaySource = userInfo.value.birthday.split("T")[0].split("-");
      userInfo.value.birthday = `${birthdaySource[0]} 年 ${birthdaySource[1]} 月 ${birthdaySource[2]} 日`;
      email.value = userInfo.value.email;
      name.value = userInfo.value.name;
      phone.value = userInfo.value.phone;
      year.value = birthdaySource[0];
      month.value = birthdaySource[1];
      if (Number(month.value) < 10) {
        month.value = month.value.replace("0", "");
      }
      reSetDates();
      date.value = birthdaySource[2];
      if (Number(date.value) < 10) {
        date.value = date.value.replace("0", "");
      }
      city.value = userInfo.value.address.city;
      reloadTownList();
      town.value = String(userInfo.value.address.zipcode);
      addressDetail.value = userInfo.value.address.detail;
    }
  });
}
onMounted(() => {
  getUserData();
});

const changeMode = (mode: string) => {
  orderMode.value = mode;
};

// edit area
const email = ref("");
const oldPassword = ref("");
const newPassword = ref("");
const reNewPassword = ref("");
const name = ref("");
const phone = ref("");
const year = ref("1950");
const month = ref("3");
const date = ref("15");
const dates = ref<string[]>([]);
const reSetDates = () => {
  let lastDate = new Date(Number(year.value), Number(month.value), 0).getDate();
  let datesList = Array.from(
    {
      length: lastDate,
    },
    (_, index) => String(index + 1)
  );
  dates.value = datesList;
};
const city = ref("基隆市");
const town = ref("200");
const cityList = ref<string[]>([]);
const townList = ref<{ zipCode: string; areaName: string }[]>([]);
CityCountyData.forEach((item) => {
  cityList.value.push(item.CityName);
  if (item.CityName == city.value) {
    item.AreaList.forEach((townItem) => {
      townList.value.push({
        zipCode: townItem.ZipCode,
        areaName: townItem.AreaName,
      });
    });
    town.value = townList.value[0].zipCode;
  }
});
const addressDetail = ref("");
const reloadTownList = () => {
  let matchCity = CityCountyData.find((item) => item.CityName == city.value);
  townList.value = [];
  matchCity?.AreaList.forEach((item) => {
    townList.value.push({
      zipCode: item.ZipCode,
      areaName: item.AreaName,
    });
  });
  town.value = townList.value[0].zipCode;
};
const validateObj = ref<validateForm>({
  oldPassword: {
    status: true,
    msg: null
  },
  newPassword: {
    status: true,
    msg: null
  },
  reNewPassword: {
    status: true,
    msg: null
  },
  name: {
    status: true,
    msg: null
  },
  phone: {
    status: true,
    msg: null
  },
  addressDetail: {
    status: true,
    msg: null
  }
});
const updateUserInfo = async () => {
  let validateFormItem: {
    item: string;
    name: validateName;
    rull: string[];
  }[] = [
    {
      item: oldPassword.value,
      name: validateName.oldPassword,
      rull: ['empty', 'password']
    },
    {
      item: newPassword.value,
      name: validateName.newPassword,
      rull: ['empty', 'password']
    },
    {
      item: reNewPassword.value,
      name: validateName.reNewPassword,
      rull: ['empty', 'password', 'checkPassword']
    },
    {
      item: name.value,
      name: validateName.name,
      rull: ['empty']
    },
    {
      item: phone.value,
      name: validateName.phone,
      rull: ['empty']
    },
    {
      item: addressDetail.value,
      name: validateName.addressDetail,
      rull: ['empty']
    }
  ];
  let tempValidateResult = { ...validateObj.value };
  let canUpdateInfo: boolean = true;
  validateFormItem.forEach(formItem => {
    validateObj.value[formItem.name].status = true;
    formItem.rull.some(rullItem => {
      switch (rullItem) {
        case 'empty': {
          if (formItem.item == null || formItem.item.length == 0) {
            tempValidateResult[formItem.name].status = false;
            tempValidateResult[formItem.name].msg = '此欄位請勿為空';
            canUpdateInfo = false;
            return true;
          }
          return false;
        }
        case 'password': {
          let regStatus = passwordRegex.test(formItem.item);
          if (regStatus == false) {
            tempValidateResult[formItem.name].status = false;
            tempValidateResult[formItem.name].msg = '密碼最少需 4 個字，包含英文和數字';
            canUpdateInfo = false;
            return true;
          }
          return false;
        }
        case 'checkPassword': {
          if (newPassword.value != reNewPassword.value) {
            tempValidateResult.reNewPassword.status = false;
            tempValidateResult.reNewPassword.msg = '請確認輸入的密碼';
            canUpdateInfo = false;
            return true;
          }
          return false;
        }
      }
    });
  });
  validateObj.value = tempValidateResult;
  const selectedTownItem = townList.value.find(item => item.zipCode === town.value);
  const selectedAreaName = selectedTownItem ? selectedTownItem.areaName : '';
  if (canUpdateInfo) {
    let updateInfo = {
      name: name.value,
      phone: phone.value,
      birthday: `${year.value}-${month.value}-${date.value}`,
      address: {
        zipcode: parseInt(town.value),
        detail: addressDetail.value,
        county: selectedAreaName,
        city: city.value
      },
      oldPassword: oldPassword.value,
      newPassword: newPassword.value
    };
    _axios.put('/user', updateInfo)
    .then(_ => {
      getUserData();
      orderMode.value = 'show';
      oldPassword.value = '';
      newPassword.value = '';
      reNewPassword.value = '';
    })
    .catch(error => {
      // Handle error
      setSnackBar({
        color: 'red',
        message: error.response.data.message,
        isOpen: true
      })
      console.error('Error updating user:', error);
    });
    
  } else {
    return false;
  }
};
</script>

<style scoped></style>
