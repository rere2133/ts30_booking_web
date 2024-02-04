<template>
  <div>
    <p v-if="$attrs.label" class="tw-text-sm tw-font-bold tw-mb-1 tw-block">
      {{ $attrs.label }}
    </p>
    <v-select
      :placeholder="placeholder"
      :items="[
        'California',
        'Colorado',
        'Florida',
        'Georgia',
        'Texas',
        'Wyoming',
      ]"
      color="primary"
      variant="solo"
      flat
      class="selectInput"
    ></v-select>
  </div>
</template>

<script setup lang="ts">
defineProps<{ placeholder: string }>();
</script>

<style scoped lang="scss">
.selectInput {
}
</style>
