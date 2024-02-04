import { ref } from "vue";
import { useDisplay } from "vuetify";

export function useFixedBlock() {
  const { name } = useDisplay();
    const fixedBlock = ref(false);
    const blockList = ref<HTMLElement | null>(null);
// const blockWrap = ref<HTMLElement | null>(null);
    const blockPosition = ref({
      offsetTop: 0,
      offsetLeft: 0,
    });
    const setBlockPosition = (top:number,left:number) => {
      blockPosition.value = {
        offsetTop: top || blockPosition.value!.offsetTop,
        offsetLeft: left || blockPosition.value!.offsetLeft,
      };
    }
    const handleScroll = () => {
      if (
        window.scrollY > blockPosition.value!.offsetTop - 100 &&
        name.value !== "xs" &&
        name.value !== "sm"
      ) {
        fixedBlock.value = true;
        let width = getWrapWidth();
    
        blockList.value?.style.setProperty(
          "--bookingWrapWidth",
          `${width - 24}px`
        );
        blockList.value?.style.setProperty("--bookingWrapTop", `100px`);
        blockList.value?.style.setProperty(
          "--bookingWrapLeft",
          `${blockPosition.value!.offsetLeft}px`
        );
      } else {
        fixedBlock.value = false;
      }
    };
    const getWrapWidth = (): number => {
      const blockEle: HTMLElement | null =
        document.querySelector(".blockEle");
      if (blockEle === null) return 0;
      const width = blockEle.getBoundingClientRect().width;
      return width;
    };

    return { blockList,blockPosition,fixedBlock,setBlockPosition,handleScroll };
}