import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      component: HomeView,
      children:[
        {
          path:'home',
          name:'home',
          component:() => import('@/views/ChildrenView/ChiHome.vue')
        },
        {
          path:'work',
          name:'work',
          component: () => import('@/views/ChildrenView/ChiWork.vue')
        },
          {
          path:'drugall',
          name:'drugall',
          component: () => import('@/views/ChildrenView/ChiDrugall.vue')
        },
          {
          path:'drugdata',
          name:'drugdata',
          component: () => import('@/views/ChildrenView/ChiDrugData.vue')
        },
          {
          path:'saleall',
          name:'saleall',
          component: () => import('@/views/ChildrenView/ChiSaleall.vue')
        },
          {
          path:'saleyear',
          name:'saleyear',
          component: () => import('@/views/ChildrenView/ChiSaleYear.vue')
        },
          {
          path:'salemonth',
          name:'salemonth',
          component: () => import('@/views/ChildrenView/ChiSaleMonth.vue')
        },
        
          {
          path:'stockall',
          name:'stockall',
          component: () => import('@/views/ChildrenView/ChiStockall.vue')
        },
          {
          path:'stockdata',
          name:'stockdata',
          component: () => import('@/views/ChildrenView/ChiStockData.vue')
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    }, {
      path: '/',
      redirect:'/login'
    },
  ],
})

export default router
