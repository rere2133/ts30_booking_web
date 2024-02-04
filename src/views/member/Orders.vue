<template>
  <div class="member-order">
    <div class="tw-flex tw-mx-[-40px] tw-w-full" v-if="userInfo!= null">
      <div class="tw-flex-[5] tw-mx-[40px]">
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
            <button type="button" class="tw-p-0 tw-font-[700] tw-text-primary-100 tw-underline">重設</button>
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
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref,onMounted} from 'vue';
import {useHttp} from '@/plugins/httpAxios';
import MemberCard from "@/components/member/Card.vue";
const {_axios} = useHttp();
const userInfo = ref<any>(null);
onMounted(() => {
  _axios.get(`/user`).then((res) => {
    userInfo.value = res.data.data;
    let birthdaySource = userInfo.value.birthday.split('T')[0].split('-');
    userInfo.value.birthday = `${birthdaySource[0]} 年 ${birthdaySource[1]} 月 ${birthdaySource[2]} 日`
  })
})
</script>

<style scoped></style>
