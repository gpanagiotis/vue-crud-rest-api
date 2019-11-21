import VueRouter from 'vue-router'

import Page1 from '@/components/Page1'
import Page2 from '@/components/Page2'
import Page3 from '@/components/Page3'



export default new VueRouter({
  routes: [
     {path: '/page-1', component: Page1, props:{age:36, work:'ypeth'}},
     {path: '/page-2', component: Page2, props:{num1:10,num2:15}},
     {path: '/page-3', component: Page3, props:{finalvar:10}},
  ]
})
