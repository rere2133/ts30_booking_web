<template>
  <v-row wrap class="tw-mb-4 align-center">
    <v-col cols="12" lg="4">
      <div class="tw-rounded-lg tw-overflow-hidden">
        <img
          class="tw-w-full tw-aspect-[4/3] lg:tw-aspect-[3/2]"
          :src="getImageUrl(plan.img)"
        />
      </div>
    </v-col>
    <v-col class="tw-text-black-100">
      <h3 class="tw-text-h3 tw-mb-4">{{ plan.title }}</h3>
      <p>{{ plan.content }}</p>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { useHelper } from "@/utils/useHelper";
const { getImageUrl } = useHelper();

defineProps({
  plan: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped></style>
