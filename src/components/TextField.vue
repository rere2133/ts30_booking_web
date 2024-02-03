<template>
  <div>
    <label class="tw-text-sm tw-font-bold tw-mb-1 tw-block">{{
      $attrs.label
    }}</label>
    <input
      v-bind="$attrs"
      :type="$attrs.type || 'text'"
      class="tw-p-4 tw-bg-white tw-text-gray-600 tw-rounded tw-border tw-block tw-w-full"
    />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
