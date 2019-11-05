//导入Vue包 vue router

import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Vuex from 'vuex'
Vue.use(Vuex)
var car = JSON.parse(localStorage.getItem('car') || '[]');
var store = new Vuex.Store({
  state: {//this.$store.state.****
    car: car,//对象数组格式{id：,count：,price:,selected:}
  },
  mutations: {
    addGoodsCar(state, goodsinfo) {
      var flag = false;
      state.car.some(item => {
        if (item.id == goodsinfo.id) {
          item.count += parseInt(goodsinfo.count);
          flag = true;
          return true;
        }
      })
      if (!flag) {
        state.car.push(goodsinfo);
      }
      localStorage.setItem('car', JSON.stringify(state.car));


    },

    updateCount(state, goodsinfo) {
      state.car.some(item => {
        if (goodsinfo.id == item.id) {
          item.count = goodsinfo.count;
          return true;
        }
      })

      localStorage.setItem('car', JSON.stringify(state.car));
    },

    remvoeFormcar(state, id) {
      state.car.some((item, i) => {
        if (item.id == id) {
          state.car.splice(i, 1);
          return true;
        }
      })
      localStorage.setItem('car', JSON.stringify(state.car));
    },
    updateSelect(state, info) {
      state.car.some(item => {
        if (item.id == info.id) {
          item.selected = info.selected;
        }
      })
      localStorage.setItem('car', JSON.stringify(state.car));
    }

  },
  getters: {
    getAllCount(state) {
      var c = 0;
      state.car.forEach(item => {
        c += item.count;
      })
      return c;
    },
    getSelected(state) {
      var demo = {};
      state.car.forEach(item => {
        demo[item.id] = item.selected;
      })
      return demo;
    },
    getMoneyaAndCount(state) {
      var demo = {
        count: 0,
        total: 0,
      };
      state.car.forEach(item => {
        if (item.selected) {
          demo.count += item.count;
          demo.total += item.count * item.price
        }
      })
      return demo;


    }



  },
})

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
// import { Header, Swipe, SwipeItem, Button,Lazyload} from 'mint-ui'
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Header.name, Header)
// Vue.component(Button.name, Button)
// Vue.use(Lazyload)

//全局导入
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)



var vm = new Vue({
  el: "#app",
  data: {
    list: [
      {
        id: 1,
        title: "旅游摄影",
        src: "../../image/9.jpg",
        zhaiyao:
          "埃菲尔铁塔（法语：La Tour Eiffel；英语：the Eiffel Tower）矗立在塞纳河南岸法国巴黎的战神广场，于1889年建成，是当时世界上最高的建筑物。埃菲尔铁塔得名于设计它的著名建筑师、结构工程师古斯塔夫·埃菲尔，全部由施耐德铁器（现施耐德电气）建造。"
      },
      {
        id: 1,
        title: "旅游摄影",
        src: "../../image/10.jpg",
        zhaiyao:
          "埃菲尔铁塔（法语：La Tour Eiffel；英语：the Eiffel Tower）矗立在塞纳河南岸法国巴黎的战神广场，于1889年建成，是当时世界上最高的建筑物。埃菲尔铁塔得名于设计它的著名建筑师、结构工程师古斯塔夫·埃菲尔，全部由施耐德铁器（现施耐德电气）建造。"
      },
      {
        id: 1,
        title: "旅游摄影",
        src: "../../image/11.jpg",
        zhaiyao:
          "埃菲尔铁塔（法语：La Tour Eiffel；英语：the Eiffel Tower）矗立在塞纳河南岸法国巴黎的战神广场，于1889年建成，是当时世界上最高的建筑物。埃菲尔铁塔得名于设计它的著名建筑师、结构工程师古斯塔夫·埃菲尔，全部由施耐德铁器（现施耐德电气）建造。"
      },
      {
        id: 2,
        title: "自然风光",
        src:
          "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2519022383,499450588&fm=26&gp=0.jpg",
        zhaiyao:
          "风车（windmills），是一种不需燃料、以风作为能源的动力机械。早期风力机又称风车。"
      },
      {
        id: 2,
        title: "自然风光",
        src: "https://f10.baidu.com/it/u=953873385,1545712302&fm=72",
        zhaiyao:
          "海滩是指由海水搬运积聚的沉积物沙或石砾，堆积而形成的岸，海滩可分为砾石滩（卵石滩）、粗砂滩和细砂滩，有管理的又称海水浴场。"
      },
      {
        id: 2,
        title: "自然风光",
        src: "https://f12.baidu.com/it/u=308508607,1891770715&fm=72",
        zhaiyao: "是一颗向日葵，浑身充满了阳光的味道，不抬头也知道你在照耀。"
      },
      {
        id: 3,
        title: "人物形象",
        src:
          "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3071123962,469225774&fm=26&gp=0.jpg",
        zhaiyao: "我们把在黑夜中跳舞心脏叫做月亮。"
      },
      {
        id: 4,
        title: "科比·布莱恩特",
        src:
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571900607937&di=70c65df0593d3ee785332c2af1c3ae30&imgtype=0&src=http%3A%2F%2Fcimg2.163.com%2Fcatchimg%2F20100310%2F11472163_2.jpg",
        zhaiyao:
          "As far as carrying the torch for the years to come, I don’t know. I just want to be the best basketball player I can be.”我不知道需要多长时间才能取得辉煌，我只是想尽我所能去成为最出色的篮球运动员。"
      },
      {
        id: 4,
        title: "迈克尔·乔丹",
        src:
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572495351&di=a7e655e40fd02481a231309d36082e9d&imgtype=jpg&er=1&src=http%3A%2F%2F00.imgmini.eastday.com%2Fmobile%2F20170914%2F20170914014034_928618d4a7539e950112095667485c79_1.jpeg",
        zhaiyao:
          "每个人都尝过失败的滋味，所以我能够接受失败，但我不能接受从未奋斗过的自己。我可以失去很多东西，但我会总结失败的原因与教训，然后努力把失去的东西再重新赢回来。 "
      },
      {
        id: 5,
        title: "航空航天",
        src:
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572495392&di=a0748a3527224dc755c22172de554bae&imgtype=jpg&er=1&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20190909%2Fac6b2c541fb246c5aea08bc20a01050a.jpeg",
        zhaiyao:
          "人类自诞生以来就对自身被局限于地表之上颇为不满我们爬树、登山，以求居高望远我们羡慕飞鸟、诸神，可以俯瞰众生如果我们想要真正脱离地表就必须击败一个强大的敌人地心引力。它是将人类束缚在地表的根本力量既可以让苹果砸中牛顿的脑袋，也可以轻易将试图飞上天空的古人重重地摔回地面。"
      },
      {
        id: 6,
        title: "动漫人物",
        src:
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571900710669&di=572c61dd0f020929652ccc35022e209b&imgtype=0&src=http%3A%2F%2Fphotocdn.sohu.com%2F20140526%2FImg400050861.jpg",
        zhaiyao:
          "人生在世只有一次，不必勉强选择自己不喜欢的路，随性而生或随性而死都没关系，不过，无论选择哪条路，都不要忘记保护自己所珍视的人。"
      }
    ],
    goodsMsg: [
      {
        id: 1,
        src:
          "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6f2493e6c6fe8e2485c407e5d75e3651.jpg?thumb=1&w=200&h=200&f=webp&q=90",
        title: "Redmi Note 8 pro",
        nowsell: 1399,
        oldsell: 1999,
        numbers: 3300
      },
      {
        id: 2,
        src:
          "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4c87947d104ee5833913e4c520108f16.jpg?thumb=1&w=200&h=200&f=webp&q=90",
        title: "Redmi Note 8",
        nowsell: 999,
        oldsell: 1399,
        numbers: 330
      },
      {
        id: 3,
        src:
          "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ca9b4f81af709935556bef9aa21a90e8.jpg?thumb=1&w=200&h=200&f=webp&q=90",
        title: "小米9 Pro 5G",
        nowsell: 3699,
        oldsell: 4000,
        numbers: 2200
      },
      {
        id: 4,
        src:
          "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8737a33c78a94bc36afb860ab23b3939.jpg?thumb=1&w=200&h=200&f=webp&q=90",
        title: "Redmi K20 Pro 尊享版",
        nowsell: 2699,
        oldsell: 3399,
        numbers: 1200
      },
      {
        id: 5,
        src:
          "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8737a33c78a94bc36afb860ab23b3939.jpg?thumb=1&w=200&h=200&f=webp&q=90",
        title: "Redmi K20 Pro 尊享版",
        nowsell: 2699,
        oldsell: 3399,
        numbers: 1200
      },
      {
        id: 6,
        src:
          "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9aab8a7fa9005ef918c9aa2d5f17c806.jpg?thumb=1&w=200&h=200&f=webp&q=90",
        title: "Redmi 7",
        nowsell: 699,
        oldsell: 799,
        numbers: 8880
      },
      {
        id: 7,
        src:
          "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3c1af9783bdc53ed843af5655ca92009.jpg?thumb=1&w=200&h=200&f=webp&q=90",
        title: "Redmi 7A",
        nowsell: 579,
        oldsell: 599,
        numbers: 18880
      },
      {
        id: 8,
        src:
          "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6f2493e6c6fe8e2485c407e5d75e3651.jpg?thumb=1&w=200&h=200&f=webp&q=90",
        title: "Redmi Note 8 pro",
        nowsell: 1399,
        oldsell: 1999,
        numbers: 3300
      },
      {
        id: 9,
        src:
          "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cd2aa2dcad6440b469c22e27db9b6236.jpg?thumb=1&w=200&h=200&f=webp&q=90",
        title: "15.6 四核i7 16G 独显 512G",
        nowsell: 4699,
        oldsell: 4899,
        numbers: 1000
      },
      {
        id: 10,
        src:
          "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ef6b4e9b9151849b3b1fb1dbf069c6ed.jpg?thumb=1&w=200&h=200&f=webp&q=90",
        title: "小米全面屏电视E55A",
        nowsell: 1799,
        oldsell: 2099,
        numbers: 1300
      },
      {
        id: 11,
        src:
          "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ec20453216dcd42f982cffe5fdbc3115.jpg?thumb=1&w=200&h=200&f=webp&q=90",
        title: "米家互联网洗烘一体机 Pro 10kg",
        nowsell: 2999,
        oldsell: 3500,
        numbers: 1000
      }
    ],
  },
  render: c => c(App),
  router,
  store,

})