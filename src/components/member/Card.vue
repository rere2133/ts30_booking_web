<template>
  <div class="tw-rounded-[20px] tw-bg-white tw-p-[40px]">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: 'MemberCard'
})
</script>