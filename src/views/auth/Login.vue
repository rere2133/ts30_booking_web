<template>
  <div class="tw-h-screen tw-flex tw-overflow-hidden">
    <div class="tw-w-1/2 tw-bg-cover tw-bg-center" :style="`background-image: url(${img_host}/register.png);`"></div>
    <div class="tw-w-1/2 tw-flex tw-flex-col tw-justify-center">
      <div id="login-area" class="tw-w-[416px] mx-auto">
        <div class="tw-flex tw-flex-col tw-gap-10">
          <div class="tw-flex tw-flex-col tw-gap-2">
            <div class="tw-text-[#bf9d7d] tw-text-sm tw-font-bold">享樂酒店，誠摯歡迎</div>
            <div class="tw-text-white tw-text-4xl tw-font-bold">立即開始旅程</div>
          </div>
          <div class="tw-flex tw-flex-col tw-gap-4">
            <!-- 電子信箱和密碼部分 -->
            <div class="tw-flex tw-flex-col tw-gap-2">
              <label for="" class="tw-text-white tw-text-sm tw-font-bold">電子信箱</label>
              <input type="email" placeholder="hello@exsample.com" class="tw-p-4 tw-bg-white tw-text-gray-600 tw-rounded tw-border" />
            </div>
            <div class="tw-flex tw-flex-col tw-gap-2">
              <label for="" class="tw-text-white tw-text-sm tw-font-bold">密碼</label>
              <input type="password" placeholder="請輸入密碼" class="tw-p-4 tw-bg-white tw-text-gray-600 tw-rounded tw-border" />
            </div>
            <div class="tw-flex">
              <div class="tw-flex-1 tw-flex tw-items-center tw-gap-2">
                <input type="checkbox" class="tw-w-6 tw-h-6" />
                <label for="" class="tw-text-white tw-text-sm tw-font-bold">記住帳號</label>
              </div>
              <div class="tw-flex tw-justify-center tw-items-center">
                <a href="#" class="tw-text-center tw-text-[#bf9d7d] tw-text-sm tw-font-bold tw-underline">忘記密碼？</a>
              </div>
            </div>
            <!-- 其他元素 -->
          </div>
          <div class="tw-flex-1 tw-flex tw-justify-center tw-items-center tw-bg-gray-200 tw-rounded">
            <button class="tw-p-4 tw-text-center tw-text-gray-600 tw-text-sm tw-font-bold tw-w-full">會員登入</button>
          </div>
          <div class="tw-flex-1 tw-flex tw-justify-start tw-items-center tw-gap-2">
            <div class="tw-text-white tw-text-sm">沒有會員嗎？</div>
            <div class="tw-text-center tw-text-[#bf9d7d] tw-text-sm tw-font-bold tw-underline">前往註冊</div>
          </div>
          <!-- 更多元素 -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { img_host } from "@/utils/imageSource";
</script>

<style scoped>
/* 這裡添加一些無法直接用 Tailwind CSS 類代替的樣式，例如特殊字體 */
</style>
