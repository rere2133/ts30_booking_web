<template>
  <div
    class="tw-w-full tw-rounded-[20px] tw-bg-white md:tw-flex tw-overflow-hidden"
  >
    <div class="tw-basis-3/5 tw-min-h-full">
      <img
        class="tw-object-cover tw-h-full"
        :src="getImageUrl(room.imgs ? room.imgs[0] : '')"
      />
    </div>
    <div class="tw-basis-2/5 tw-text-black-100 tw-px-5 tw-py-6 md:tw-p-10">
      <h2 class="tw-text-h4 lg:tw-text-h2 tw-mb-2">{{ room.title }}</h2>
      <p class="tw-text-body">
        {{ room.description }}
      </p>
      <div class="tw-flex tw-mt-8 tw-gap-2 md:tw-gap-4">
        <RoomInfoCard v-for="info in room.info" :key="info.icon" :info="info" />
      </div>
      <hr class="tw-my-6 md:tw-my-10 textGradient bg-divider tw-w-full" />
      <div class="tw-flex tw-justify-between tw-text-primary-100">
        <h5 class="tw-text-h5">NT$ {{ room.price }}</h5>
        <v-icon
          @click="router.push(`/roomDetail/${room.id}`)"
          icon="mdi-arrow-right"
        ></v-icon>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import RoomInfoCard from "./RoomInfoCard.vue";
import { useHelper } from "@/utils/useHelper";
import { useRouter } from "vue-router";

const { getImageUrl } = useHelper();
const router = useRouter();

defineProps({
  room: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped></style>
