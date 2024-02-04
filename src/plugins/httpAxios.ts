import axios from 'axios';
import useSnackbarStore from '@/store/snackbarStore';
import pinia from '@/plugins/pinia';
import { useAppStore } from '@/store/app';
import { useRouter } from 'vue-router';

export const useHttp = ()=>{
  let router = useRouter();
  let snackbarStore = useSnackbarStore(pinia);
  let {setSnackBar} = snackbarStore;
  const _axios = axios.create({
    baseURL: import.meta.env.VITE_APP_HOST_URL,
    // withCredentials: true,
  });
  
  _axios.interceptors.request.use(
    (config) => {
    const token = localStorage.getItem("auth_token");
    if (token) {
      config.headers.Authorization = token;
    }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  _axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (err) => {
      if ( router && err.response.status === 401) {
        let appStore = useAppStore();
        appStore.isLogin = false;
        localStorage.removeItem("auth_token");
        localStorage.removeItem("userName");
        router.push({
          name: 'Login',
        });
      }
      setSnackBar({
        color: 'error',
        message: `${err.response.data.status} : ${err.response.data.message}`,
        isOpen: true
      });
      return Promise.reject(err);
    }
  );
  
  return {
    _axios
  }
}