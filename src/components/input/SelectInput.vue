<template>
  <div>
    <p v-if="$attrs.label" class="tw-text-sm tw-font-bold tw-mb-1 tw-block">
      {{ $attrs.label }}
    </p>
    <v-select
      v-bind="$attrs"
      :placeholder="placeholder"
      :items="items"
      :model-value="modelValue"
      @update:model-value="($event) => $emit('update:modelValue', $event)"
      color="primary"
      variant="solo"
      flat
      class="selectInput"
    ></v-select>
  </div>
</template>

<script setup lang="ts">
defineProps<{ placeholder: string; items: any[]; modelValue: string }>();
defineEmits(["update:modelValue"]);
</script>

<style scoped lang="scss"></style>
