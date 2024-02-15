<template>
  <div class="tw-mb-2">
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
    <small v-if="hint" class="tw-text-error-100">{{ hint }}</small>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { InputTypeHTMLAttribute } from "vue";
import type { Rule } from "@/types";

const props = defineProps<{
  modelValue: string;
  rules?: Rule[];
}>();
const emit = defineEmits(["update:modelValue"]);
const hint = ref("");

const validate = (val: string) => {
  let msg: Rule[] = [];
  if (props.rules) {
    props.rules.forEach((rule: any) => {
      let res = rule(val);
      if (res !== true) {
        msg.push(res);
      }
    });
  }
  if (msg.length > 0) {
    hint.value = msg.join(", ");
  } else {
    hint.value = "";
  }
};

const updateValue = (e: Event) => {
  const target = e.target as HTMLInputElement;
  emit("update:modelValue", target.value);
  validate(target.value);
};
</script>

<style scoped></style>
