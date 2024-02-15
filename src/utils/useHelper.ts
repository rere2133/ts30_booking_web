import { useDisplay } from "vuetify"
import { img_host } from "@/utils/imageSource";
import { computed } from "vue"
const webLocation = location;
export function useHelper(){
  const { name } = useDisplay()
  const webOrMobile = computed(()=>{
    if(name.value==='xs') return 'mobile'
    else return 'web'
  })
  const getImageUrl = (fileName:string):string=>{
    return `${webLocation.origin}/ts30_booking_web/imgs/${img_host[webOrMobile.value]}/${fileName}`
  }
  const dateFormat = (date:Date|undefined):string=>{
    if(!date) return ''
    return `${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}`
  }
  const dateToChinese = (date:Date|undefined):string=>{
    if(!date) return ''
    const week = ['日','一','二','三','四','五','六']
    return `${date.getMonth()+1}月${date.getDate()}日 星期${week[date.getDay()]}`
  }
  const clearLocalStorage = ()=>{
    localStorage.clear()
  }

  return{
    webOrMobile,
    getImageUrl,
    dateFormat,
    dateToChinese,
    clearLocalStorage
  }
}
