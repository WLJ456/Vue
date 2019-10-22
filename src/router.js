//再次导入vuerouter因为需要新建router实例
import VueRouter from 'vue-router'
//导入需要用的路由组件
import shopcar from './components/tabbar/shopcar.vue'
import search from './components/tabbar/search.vue'
import member from './components/tabbar/member.vue'
import home from './components/tabbar/home.vue'
import news from './components/news/news.vue'
import newsInfo from './components/news/newsInfo.vue'

import goodslist from './components/goods/goodslist.vue'
var router=new VueRouter({

    routes:[
        {path:'/',redirect:'/home'},
        {path:'/member',component:member},
        {path:'/home',component:home},
        {path:'/shopcar',component:shopcar},
        {path:'/search',component:search},
        {path:'/home/news',component:news},
        //用：匹配参数
        {path:'/home/news/newsInfo/:id',component:newsInfo},
        {path:'/home/goodslist',component:goodslist},
        
    ],
    linkActiveClass:'mui-active'//覆盖默认路由高亮的类
})
export default router