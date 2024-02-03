<template>
  <HomeContainer class="tw-bg-primary-40 tw-text-black-100">
    <div class="container">
      <v-row>
        <v-col cols="12" md="8">
          <v-btn variant="text">
            <v-icon icon="mdi-chevron-left" size="44"></v-icon>
            <div class="tw-text-h3">確認訂房資訊</div>
          </v-btn>
          <div class="tw-text-h4 tw-my-10">訂房資訊</div>
          <div class="tw-flex tw-mb-4">
            <div>
              <div class="bookingTitle">選擇房型</div>
              <p>尊爵雙人房</p>
            </div>
            <div class="tw-ml-auto">
              <v-btn variant="text" class="tw-underline tw-underline-offset-2">
                編輯
              </v-btn>
            </div>
          </div>
          <div class="tw-flex tw-mb-4">
            <div>
              <div class="bookingTitle">訂房日期</div>
              <p>入住：12 月 4 日星期二</p>
              <p>退房：12 月 6 日星期三</p>
            </div>
            <div class="tw-ml-auto">
              <v-btn variant="text" class="tw-underline tw-underline-offset-2">
                編輯
              </v-btn>
            </div>
          </div>
          <div class="tw-flex">
            <div>
              <div class="bookingTitle">房客人數</div>
              <p>2 人</p>
            </div>
            <div class="tw-ml-auto">
              <v-btn variant="text" class="tw-underline tw-underline-offset-2">
                編輯
              </v-btn>
            </div>
          </div>
          <hr class="gb-divider tw-bg-black-bg tw-my-10" />
          <div class="tw-text-h4 tw-my-10">訂房人資訊</div>
          <TextField
            label="姓名"
            placeholder="請輸入姓名"
            v-model="bookingInfo.name"
          />
        </v-col>
        <v-col class="tw-w-[400px]"></v-col>
      </v-row>
    </div>
  </HomeContainer>
</template>

<script setup lang="ts">
import HomeContainer from "@/components/home/HomeContainer.vue";
import TextField from "@/components/TextField.vue";
import { ref } from "vue";

const bookingInfo = ref({
  name: "",
  email: "",
  phone: "",
});
</script>

<style scoped lang="scss">
.bookingTitle {
  @apply tw-border-l-4 tw-border-primary-100 tw-pl-2 tw-mb-2 tw-font-bold;
}
</style>
