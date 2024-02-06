<template>
  <div class="tw-bg-white tw-rounded-xl tw-p-6 tw-flex tw-gap-4 tw-flex-wrap tw-border-solid tw-border-[1px] tw-border-primary">
    <div v-for="(item, idx) in items" :key="idx">
      <div class="tw-flex">
        <v-icon
          :icon="item.isProvide ? 'mdi-check' : 'mdi-close'"
          color="primary"
        ></v-icon>
        <p class="tw-pl-1 tw-whitespace-nowrap">{{ item.title }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { RoomInfo } from "@/types";
defineProps<{ items: RoomInfo[] | undefined }>();
</script>

<style scoped></style>
