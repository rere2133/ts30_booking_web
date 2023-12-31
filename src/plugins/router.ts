import { createRouter, createWebHistory } from 'vue-router'

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
        path: 'roomDetail',
        name: 'RoomDetail',
        component: () => import('@/views/RoomDetail.vue'),
      },
      {
        path: 'booking',
        name: 'Booking',
        component: () => import('@/views/Booking.vue'),
      },
      {
        path: 'bookSucceed',
        name: 'BookSucceed',
        component: () => import('@/views/BookSucceed.vue'),
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
    ]
  },
  
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router