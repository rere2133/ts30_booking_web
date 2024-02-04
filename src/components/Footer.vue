<template>
  <div class="footer tw-px-[16px] md:tw-flex tw-flex-wrap tw-justify-between tw-w-full tw-text-white">
    <div class="tw-mb-[40px] md:tw-mb-0">
      <v-img
        width="200"
        :src="getImageUrl('logo.png')"
        class="tw-mb-[40px]"
      ></v-img>
      <div class="icon-group">
        <img class="tw-inline tw-p-[8px] tw-rounded-[20px] tw-border-[1px] tw-border-white tw-border-solid tw-mr-[16px]" :src="getImageUrl('bi_line.svg')" />
        <img class="tw-inline tw-p-[8px] tw-rounded-[20px] tw-border-[1px] tw-border-white tw-border-solid" :src="getImageUrl('bi_ins.svg')" />
      </div>
    </div>
    <div>
      <div class="tw-mb-[16px] md:tw-mb-[40px] md:tw-flex">
        <div class="md:tw-mr-[80px] tw-mb-[16px] md:tw-mb-0">
          <p class="tw-text-title">TEL</p>
          <p class="tw-text-body2 tw-color-black-40">+886-7-1234567</p>
        </div>
        <div class="">
          <p class="tw-text-title">MAIL</p>
          <p class="tw-text-body2 tw-color-black-40">elh@hexschool.com</p>
        </div>
      </div>
      <div class="md:tw-flex">
        <div class="md:tw-mr-[80px] tw-mb-[16px] md:tw-mb-0">
          <p class="tw-text-title">FAX</p>
          <p class="tw-text-body2 tw-color-black-40">+886-7-1234567</p>
        </div>
        <div class="">
          <p class="tw-text-title">WEB</p>
          <p class="tw-text-body2 tw-color-black-40">www.elhhexschool.com.tw</p>
        </div>
      </div>
    </div>
    <div class="tw-w-full tw-flex tw-flex-col tw-justify-between tw-items-start md:tw-flex-row md:items-center tw-mt-[80px]">
      <span class="tw-mb-[16px] md:tw-mb-0 tw-text-body">806023 台灣高雄市新興區六角路123號</span>
      <span class="tw-text-body">© 享樂酒店 2023 All Rights Reserved.</span>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useHelper } from '@/utils/useHelper';
const { getImageUrl } = useHelper();
</script>