import { useDisplay } from "vuetify"
import { img_host } from "@/utils/imageSource";
import { computed } from "vue"
export function useHelper(){
  const { name } = useDisplay()
  const webOrMobile = computed(()=>{
    if(name.value==='xs') return 'mobile'
    else return 'web'
  })
  const getImageUrl = (fileName:string):string=>{
    return `./imgs/${img_host[webOrMobile.value]}/${fileName}`
  }
  const dateFormat = (date:Date):string=>{
    if(!date) return ''
    return `${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}`
  }
  const clearLocalStorage = ()=>{
    localStorage.clear()
  }

  return{
    webOrMobile,
    getImageUrl,
    dateFormat,
    clearLocalStorage
  }
}
