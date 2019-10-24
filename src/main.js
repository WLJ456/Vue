//导入Vue包 vue router

import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import moment from 'moment';
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm") {

    return moment(dataStr).format(pattern)

})

import VueResource from 'vue-resource'
Vue.use(VueResource)
import router from './router.js'
//手动导入mui三方库
import './lib/MUI/css/mui.min.css'
import './lib/MUI/css/icons-extra.css'

import App from './App.vue'
//在mint-ui中的vue组件中调用样式,按需导入
import { Header, Swipe, SwipeItem, Button } from 'mint-ui'
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Header.name, Header)
Vue.component(Button.name, Button)



var vm = new Vue({
    el: "#app",
    data: {},
    render: c => c(App),
    router

})