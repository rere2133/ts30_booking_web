
export function useRules(){
  const userInfoRules: {
    [key: string]: (value: string) => true | string;
} = {
    name: (value: string) => (value && value.length >= 3) || "名字至少3個字",
    phone: (value: string) => {
      const reg = /^09\d{8}$/
      return reg.test(value) || "手機格式錯誤"
    },
    email: (value: string) => {
      const reg = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/
      return reg.test(value) || "email格式錯誤"
    },
    city: (value: string) => !!value || "請選擇城市",
    county: (value: string) => !!value || "請選擇區域",
    detail: (value: string) => !!value || "請輸入詳細地址",
  }
  return{
    userInfoRules
  }
}
