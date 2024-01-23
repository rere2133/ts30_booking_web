<template>
  <div class="center tw-w-screen tw-py-10">
    <slot></slot>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
@import "@/styles/main.scss";
.center {
  @include center($h: "fit-content");
}
</style>
