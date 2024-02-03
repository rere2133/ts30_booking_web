import axios from 'axios';
import useSnackbarStore from '@/store/snackbarStore';
import pinia from '@/plugins/pinia';
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
    const token = localStorage.getItem("access");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
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
        router.push({
          name: 'Login',
        });
      }
      setSnackBar({
        color: 'error',
        message: `${err.response.status} : ${err.response.message}`,
        isOpen: true
      });
      return Promise.reject(err);
    }
  );
  
  return {
    _axios
  }
}