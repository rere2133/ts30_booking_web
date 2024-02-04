import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { RoomType} from '@/types';

export default defineStore('useRoomStore', () => {
  const roomInfo = ref<RoomType | undefined>({})
  return {
    roomInfo
  }
})
// const roomInfo = ref<RoomType>();
// {
// id: 1,
// title: "尊爵雙人房",
// description:
//   "享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。",
// imgs: ["room2-1.png"],
// info: [
//   {
//     icon: "mdi-arrow-expand",
//     num: "24",
//     unit: "坪",
//   },
//   {
//     icon: "mdi-bed",
//     num: "1",
//     unit: "張大床",
//   },
//   {
//     icon: "mdi-account",
//     num: "2-4",
//     maxNum: "4",
//     unit: "人",
//   },
// ],
// price: "10000",
// layout: ["市景", "獨立衛浴", "客廳", "書房", "樓層電梯"],
// facility: [
//   "平面電視",
//   "吹風機",
//   "冰箱",
//   "熱水壺",
//   "檯燈",
//   "衣櫃",
//   "除濕機",
//   "浴缸",
//   "書桌",
//   "音響",
// ],
// toiletries: [
//   "衛生紙",
//   "沐浴用品",
//   "刮鬍刀",
//   "清潔用品",
//   "刷牙用品",
//   "刮鬍膏",
//   "吊衣架",
//   "浴袍",
//   "拖鞋",
//   "罐裝水",
//   "梳子",
// ],
// }