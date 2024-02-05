<template>
  <div>Member Profile Page</div>
</template>

<script setup lang="ts">
  import {onMounted} from 'vue';
  import {useHttp} from '@/plugins/httpAxios';
  const {_axios} = useHttp();
  onMounted(() => {
    _axios.get(`orders`).then((res) => {
      console.log(res.data);
    })
  })
</script>
<style scoped></style>
