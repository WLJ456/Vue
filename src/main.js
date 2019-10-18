
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import VueResource from 'vue-resource'

Vue.use(VueResource)
import router from './router.js'
import './lib/MUI/css/mui.min.css'
import './lib/MUI/css/icons-extra.css'

import App from './App.vue'
import {Header,Swipe, SwipeItem} from 'mint-ui'
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Header.name,Header)



var vm =new Vue({
    el:"#app",
    data:{},
    render:c=>c(App),
    router

})