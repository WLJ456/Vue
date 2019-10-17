
import Vue from 'vue'
import './lib/MUI/css/mui.min.css'
import './lib/MUI/css/icons-extra.css'

import App from './App.vue'
import {Header} from 'mint-ui'
Vue.component(Header.name,Header)



var vm =new Vue({
    el:"#app",
    data:{},
    render:c=>c(App)
})