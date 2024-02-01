import { defineStore } from 'pinia';
import { ref } from 'vue';  

export const useAppStore = defineStore('app', () => {
  const navItems = ref([
    {
      title: "客房旅宿",
      path: "/rooms",
    },
    {
      title: "會員登入",
      path: "/login",
    },
    {
      title: "立即訂房",
      path: "/rooms",
    },
  ])
  return{
    navItems
  }
})