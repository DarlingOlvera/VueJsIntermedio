import Counter1Page from '@/counter/pages/Counter1Page.vue'
import CounterSetupPage from '@/counter/pages/CounterSetupPage.vue'
import ClientsLayout from '@/clients/layout/ClientsLayout.vue'
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'counter-1',
      component: Counter1Page
    },
    {
      path: '/counter-2',
      name: 'counter-2',
      component: CounterSetupPage
    },
    {
      path: '/clients',
      name: 'clients',
      component: ClientsLayout,
      redirect:{name:'list'},
      children:[
        {path:'list', name:'list', component:() => import('@/clients/pages/ListPage.vue')},
        {path:'/clients/:id', name:'client-id', component:() => import('@/clients/pages/ClientPage.vue')}
      ]
    },
  ]
})

export default router
