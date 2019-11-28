//再次导入vuerouter因为需要新建router实例
import VueRouter from 'vue-router'
//1.导入需要用的路由组件
// import shopcar from './components/tabbar/shopcar.vue'
// import search from './components/tabbar/search.vue'
// import member from './components/tabbar/member.vue'
// import home from './components/tabbar/home.vue'
// import news from './components/news/news.vue'
// import newsInfo from './components/news/newsInfo.vue'
// import goodslist from './components/goods/goodslist.vue'
// import photolist from './components/photos/photoList.vue'
// import photoinfo from './components/photos/photoinfo.vue'
// import goodslistinfo from './components/goods/goodslistinfo.vue'
//2.采用懒加载进行组件动态导入
const shopcar = () => import('./components/tabbar/shopcar.vue');
const search=()=>import('./components/tabbar/search.vue');
const member=()=>import('./components/tabbar/member.vue');
const home=()=>import('./components/tabbar/home.vue');
const news=()=>import('./components/news/news.vue');
const newsInfo=()=>import('./components/news/newsInfo.vue');
const goodslist=()=>import('./components/goods/goodslist.vue');
const photolist=()=>import('./components/photos/photoList.vue');
const photoinfo=()=>import('./components/photos/photoinfo.vue');
const goodslistinfo=()=>import('./components/goods/goodslistinfo.vue');

var router = new VueRouter({

    routes: [
        { path: '/', redirect: '/home' },
        { path: '/member', component: member },
        { path: '/home', component: home },
        { path: '/shopcar', component: shopcar },
        { path: '/search', component: search },
        { path: '/home/news', component: news },
        //用：匹配参数
        { path: '/home/news/newsInfo/:id', component: newsInfo },
        { path: '/home/goodslist', component: goodslist },

        { path: '/home/photolist', component: photolist },

        { path: '/home/photoinfo/:id', component: photoinfo },
        { path: '/home/goodslistinfo/:id', component: goodslistinfo, name: 'goodslistinfo' },
    ],
    linkActiveClass: 'mui-active'//覆盖默认路由高亮的类
})
export default router