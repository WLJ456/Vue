import VueRouter from 'vue-router'

import shopcar from './components/tabbar/shopcar.vue'
import search from './components/tabbar/search.vue'
import member from './components/tabbar/member.vue'
import home from './components/tabbar/home.vue'
var router=new VueRouter({

    routes:[
        {path:'/',redirect:'/home'},
        {path:'/member',component:member},
        {path:'/home',component:home},
        {path:'/shopcar',component:shopcar},
        {path:'/search',component:search},
    ],
    linkActiveClass:'mui-active'//覆盖默认路由高亮的类
})
export default router