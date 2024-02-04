<template>
  <div>
    <label
      v-if="$attrs.label"
      class="tw-text-sm tw-font-bold tw-mb-1 tw-block"
      >{{ $attrs.label }}</label
    >
    <input
      v-bind="$attrs"
      :value="modelValue"
      @input="updateValue"
      :type="$attrs.type as InputTypeHTMLAttribute || 'text'"
      class="tw-p-4 tw-bg-white tw-text-gray-600 tw-rounded tw-border tw-block tw-w-full"
    />
  </div>
</template>

<script setup lang="ts">
import { InputTypeHTMLAttribute } from "vue";
defineProps<{ modelValue: string }>();
const emit = defineEmits(["update:modelValue"]);

const updateValue = (e: Event) => {
  const target = e.target as HTMLInputElement;
  emit("update:modelValue", target.value);
};
</script>

<style scoped></style>
