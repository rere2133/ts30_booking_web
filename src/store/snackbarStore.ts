import { defineStore } from 'pinia';
import { ref } from 'vue';

type SnackBarStatus = {
  color: string,
  message: string,
  isOpen: boolean
}

export default defineStore('snackbarStore', () => {
  let color = ref('success');
  let message = ref('');
  let isOpen = ref(false);
  let setSnackBar = (snackBarStatus: SnackBarStatus) => {
    color.value = snackBarStatus.color;
    message.value = snackBarStatus.message;
    isOpen.value = snackBarStatus.isOpen;
  }
  return {
    color,
    message,
    isOpen,
    setSnackBar
  }
})