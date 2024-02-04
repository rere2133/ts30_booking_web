<template>
  <div class="member-order">
    <div class="tw-flex tw-mx-[-40px] tw-w-full">
      <div class="tw-flex-[5] tw-mx-[40px]">
        <member-card class="tw-text-black-100">
          <p class="tw-text-black-100 tw-text-[24px] tw-font-[700] tw-mb-[40px]">修改密碼</p>
          <div class="tw-mb-[24px]">
            <p class="tw-mb-[8px] tw-text-black-80 tw-leading-[1.5] tw-font-[500] tw-tracking-[0.32px]">電子信箱</p>
            <p class="tw-font-[700] tw-leading-[1.5] tw-tracking-[0.32px]">Jessica@exsample.com</p>
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
            <p class="tw-font-[700] tw-leading-[1.5] tw-tracking-[0.32px]">Jessica Ｗang</p>
          </div>
          <div class="tw-mb-[24px]">
            <p class="tw-mb-[8px] tw-text-black-80 tw-leading-[1.5] tw-font-[500] tw-tracking-[0.32px]">手機號碼</p>
            <p class="tw-font-[700] tw-leading-[1.5] tw-tracking-[0.32px]">+886 912 345 678</p>
          </div>
          <div class="tw-mb-[24px]">
            <p class="tw-mb-[8px] tw-text-black-80 tw-leading-[1.5] tw-font-[500] tw-tracking-[0.32px]">生日</p>
            <p class="tw-font-[700] tw-leading-[1.5] tw-tracking-[0.32px]">1990 年 8 月 15 日</p>
          </div>
          <div class="tw-mb-[24px]">
            <p class="tw-mb-[8px] tw-text-black-80 tw-leading-[1.5] tw-font-[500] tw-tracking-[0.32px]">地址</p>
            <p class="tw-font-[700] tw-leading-[1.5] tw-tracking-[0.32px]">高雄市新興區六角路 123 號</p>
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
import MemberCard from "@/components/member/Card.vue";
</script>

<style scoped></style>
