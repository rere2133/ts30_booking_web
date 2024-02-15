import { createRouter, createWebHistory } from 'vue-router'
import { useAppStore } from '@/store/app';

const routes = [
  {
    path: '/',
    name: 'DefaultLayout',
    component: () => import('@/layout/Default.vue'),
    children:[
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
      {
        path: 'rooms',
        name: 'Rooms',
        component: () => import('@/views/Rooms.vue'),
      },
      {
        path: 'roomDetail/:id',
        name: 'RoomDetail',
        component: () => import('@/views/RoomDetail.vue'),
      },
      {
        path: 'booking/:id',
        name: 'Booking',
        component: () => import('@/views/Booking.vue'),
      },
      {
        path: 'bookSucceed',
        name: 'BookSucceed',
        component: () => import('@/views/BookSucceed.vue'),
      },
      {
        path: 'login',
        name: 'Login',
        component: () => import('@/views/auth/Login.vue'),
      },
      {
        path: 'signup',
        name: 'Signup',
        component: () => import('@/views/auth/Signup.vue'),
      },
      {
        path: 'member',
        name: 'Member',
        component: () => import('@/views/member/index.vue'),
        children:[
          {
            path: 'profile',
            name: 'Profile',
            component: () => import('@/views/member/Profile.vue'),
          },
          {
            path: 'orders',
            name: 'Orders',
            component: () => import('@/views/member/Orders.vue'),
          },
        ]
      }
    ]
  },

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    // 始终滚动到顶部
    return { top: 0 };
  }
})


router.beforeEach(async (to) => {
  const appStore = useAppStore();
  let authPage = ['Member','Profile','Orders','BookSucceed','Booking']
  let token = localStorage.getItem('auth_token');
  if (token) {
    appStore.isLogin = true;
    if (to.name == 'Login') {
      console.log('hi');
      return {
        name: 'Home'
      };
    } 
  }
  if(to.name && authPage.includes(to.name.toString())){
    if(!appStore.isLogin){
      return {
        name: 'Login'
      }
    }
  }
});

export default router