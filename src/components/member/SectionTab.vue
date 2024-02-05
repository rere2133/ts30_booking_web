<template>
  <ul class="section-tab tw-flex">
    <li
      class="section-tab-item tw-group tw-relative tw-inline-flex tw-px-[24px] tw-py-[16px] tw-cursor-pointer"
      :class="{ 'tw-cursor-default': item.value == activeItemValue }"
      v-for="item in sectionList"
      :key="item.id"
      @click="emitActive(item)"
    >
      <p
        class="tw-leading-[150%] tw-text-[16px] tw-font-[700] tw-tracking-[0.32px] group-hover:tw-text-primary-100"
        :class="{ 'tw-text-primary-100': item.value == activeItemValue }"
      >
        {{ item.label }}
      </p>
      <i
        class="tw-absolute tw-bottom-[4px] tw-left-[50%] tw-translate-x-[-50%] tw- tw-w-[32px] tw-h-[4px] tw-rounded-[10px] group-hover:tw-bg-primary-100"
        :class="{ 'tw-bg-primary-100': item.value == activeItemValue }"
      ></i>
    </li>
  </ul>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import {useRoute} from "vue-router";
const route = useRoute();
interface SectionItem {
  id: string;
  label: string;
  value: string;
}
const props = defineProps({
  sectionList: Object,
  activeItemValue: String,
});
const changeSectionEmit = defineEmits(["change"]);
const sectionList = props.sectionList;
const activeItemValue = ref(props.activeItemValue);
const emitActive = (item: SectionItem) => {
  if (item.value == activeItemValue.value) {
    return false;
  }
  activeItemValue.value = item.value;
  changeSectionEmit("change", item.value);
};
onMounted(() => {
  let routeName = route.name;
  if (routeName == "Orders") {
    activeItemValue.value = "0";
  } else if (routeName == "Profile") {
    activeItemValue.value = "1";
  }
});
</script>
<style lang="scss" scoped>
.section-tab-item:hover {
}
</style>
