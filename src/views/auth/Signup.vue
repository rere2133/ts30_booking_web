<template>
  <div class="tw-h-[90vh] tw-pt-10 lg:tw-pt-0 tw-flex">
    <div
      class="tw-w-1/2 tw-bg-cover tw-bg-center tw-hidden lg:tw-block"
      :style="`background-image: url(${getImageUrl('register.png')});`"
    ></div>
    <div class="tw-w-full lg:tw-w-1/2 tw-flex tw-flex-col tw-justify-center tw-align-middle tw-px-4" style="align-items: center">
      <!-- <div style="width: 100%; height: 100%; position: relative"> -->

      <div class="tw-h-[670px] tw-w-1/2 tw-flex tw-flex-col tw-gap-10">
        <div class="tw-flex tw-flex-col tw-self-stretch tw-h-[198px] tw-items-start tw-gap-4">
          <div class="tw-flex tw-flex-col tw-self-stretch tw-h-[90px] tw-items-start tw-gap-2">
            <div class="tw-text-[#bf9d7d] tw-text-lg tw-font-bold tw-tracking-wide">享樂酒店，誠摯歡迎</div>
            <div class="tw-text-white tw-text-5xl tw-font-bold tw-tracking-widest">立即註冊</div>
          </div>
          <div class="tw-flex tw-flex-col tw-self-stretch tw-h-[92px] tw-pt-4 tw-pb-4 tw-items-start tw-gap-4">
            <div class="tw-flex tw-self-stretch tw-justify-center tw-items-center tw-gap-2">
              <div class="tw-flex tw-flex-col tw-justify-center tw-items-center tw-gap-1">
                <div class="tw-w-8 tw-h-8 tw-bg-[#bf9d7d] tw-rounded-full tw-overflow-hidden tw-flex tw-justify-center tw-items-center">
                  <div class="tw-text-center tw-text-white tw-text-lg tw-font-serif tw-font-bold tw-leading-6 tw-tracking-wider">1</div>
                </div>
                <div class="tw-text-center tw-text-white tw-text-lg tw-font-serif tw-font-bold tw-leading-6 tw-tracking-wider">
                  輸入信箱及密碼
                </div>
              </div>
              <div class="tw-w-48 tw-h-0.5 tw-bg-gray-400 tw-rounded-full tw-relative"></div>
              <div class="tw-flex tw-flex-col tw-justify-center tw-items-center tw-gap-1">
                <div class="tw-w-8 tw-h-8 tw-rounded-full tw-border tw-border-gray-400 tw-flex tw-justify-center tw-items-center">
                  <div class="tw-text-center tw-text-gray-400 tw-text-lg tw-font-serif tw-font-bold tw-leading-6 tw-tracking-wider">2</div>
                </div>
                <div class="tw-text-center tw-text-gray-400 tw-text-lg tw-font-serif tw-font-bold tw-leading-6 tw-tracking-wider">
                  填寫基本資料
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="tw-flex tw-flex-col tw-self-stretch tw-h-[296px] tw-items-start tw-gap-4">
          <div class="tw-flex tw-flex-col tw-gap-2 tw-w-full">
            <label for="" class="tw-text-white tw-font-bold">電子信箱</label>
            <input
              id="email"
              type="email"
              placeholder="hello@exsample.com"
              class="tw-p-4 tw-bg-white tw-text-gray-600 tw-rounded tw-border"
            />
          </div>
          <div class="tw-flex tw-flex-col tw-gap-2 tw-w-full">
            <label for="" class="tw-text-white tw-font-bold">密碼</label>
            <input
              id="password"
              type="password"
              placeholder="請輸入密碼"
              class="tw-p-4 tw-bg-white tw-text-gray-600 tw-rounded tw-border"
            />
          </div>
          <div class="tw-flex tw-flex-col tw-gap-2 tw-w-full">
            <label for="" class="tw-text-white tw-font-bold">確認密碼</label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="請再輸入一次密碼"
              class="tw-p-4 tw-bg-white tw-text-gray-600 tw-rounded tw-border"
            />
          </div>
        </div>
        <div>
          <div>
            <div class="tw-text-red-500 tw-text-center tw-mb-2 tw-flex-none"></div>
            <div class="tw-flex-1 tw-flex tw-justify-center tw-items-center tw-bg-gray-200 tw-rounded">
              <button type="submit" id="login" class="tw-p-4 tw-text-center tw-text-gray-600 tw-text-sm tw-font-bold tw-w-full">
                下一步
              </button>
            </div>
          </div>

          <div class="tw-flex-1 tw-flex tw-justify-start tw-items-center tw-gap-2 tw-mt-2">
            <div class="tw-text-white tw-text-sm">已經有會員了嗎?</div>
            <router-link to="/login" class="tw-text-center tw-text-[#bf9d7d] tw-text-sm tw-font-bold tw-underline">立即登入</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import { useHelper } from "@/utils/useHelper";
const { getImageUrl } = useHelper();
const router = useRouter();
</script>

<style scoped></style>
