<template>
  <v-dialog :model-value="modelValue" max-width="600">
    <v-card class="tw-p-[50px] tw-min-h-[40vh] loadingCard">
      <div class="tw-w-[50%] tw-mx-auto loadingWrap">
        <img
          src="https://hotel-reservation-backend-sgtq.onrender.com/api/v1/url/697aea64"
          class="tw-w-[100px] tw-mb-10 tw-block tw-mx-auto"
        />
        <v-progress-linear
          color="primary"
          indeterminate
          rounded
          height="6"
        ></v-progress-linear>
        <h6 class="tw-text-h6 tw-mt-8 text-center">正在處理你的預訂</h6>
      </div>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
// import { useHelper } from "@/utils/useHelper";

defineProps({
  modelValue: Boolean,
});

// const { getImageUrl } = useHelper();
</script>

<style scoped lang="scss">
@import "@/styles/main.scss";
.loadingCard,
.loadingWarp {
  @include center;
}
</style>
