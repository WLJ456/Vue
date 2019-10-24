<template>
  <div>
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <!-- id为0的时候添加mui-active类 -->
          <a
            :class="['mui-control-item',items.id===0?'mui-active':'']"
            data-wid="tab-top-subpage-1.html"
            v-for="(items,index) in cates"
            :key="index"
            @click="getPhotoList(items.id)"
          >{{items.title}}</a>
        </div>
      </div>
    </div>

    <ul class="photo-list">
     
        <li v-for="(item,index) in showlist" :key="item.index">
			<!-- 这需要v-bind进行绑定-->
			 <router-link :to="'/home/photoinfo/'+ item.id">
          <img v-lazy="item.src" width="100%" />
          <div class="photo-list-tltle">
            <h3>{{item.title}}</h3>
            <span>{{item.zhaiyao}}</span>
          </div>
		     </router-link>
        </li>
   
    </ul>
  </div>
</template>

<script>
import mui from "../../lib/MUI/js/mui.min.js";

export default {
  name: "",
  data() {
    return {
      cates: [
        {
          id: 0,
          title: "全部"
        },
        {
          id: 1,
          title: "旅游摄影"
        },
        {
          id: 2,
          title: "自然风光"
        },
        {
          id: 3,
          title: "人物形象"
        },
        {
          id: 4,
          title: "体育"
        },
        {
          id: 5,
          title: "航空航天"
        },
        {
          id: 6,
          title: "动漫人物"
        }
      ],
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
          src:
            "https://f10.baidu.com/it/u=953873385,1545712302&fm=72",
          zhaiyao:
            "海滩是指由海水搬运积聚的沉积物沙或石砾，堆积而形成的岸，海滩可分为砾石滩（卵石滩）、粗砂滩和细砂滩，有管理的又称海水浴场。"
        },
        {
          id: 2,
          title: "自然风光",
          src:
            "https://f12.baidu.com/it/u=308508607,1891770715&fm=72",
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
      showlist: []
    };
  },
  created() {
    this.getPhotoList(0);
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  methods: {
    getPhotoList(id) {
      var lists = this.list;
      this.showlist = [];
      if (id === 0) {
        this.showlist = lists;
        return;
      }
      //常规遍历
      //   for (let item in lists) {
      // 	if(lists[item].id===id){
      // 		//遍历对象数组
      // 		this.showlist.push(lists[item]);
      // 							}
      //   }
      //for of 进行数组值的遍历
      for (let index of lists.values()) {
        if (index.id === id) {0
          this.showlist.push(index);
        }
      }
    }
  }
};
</script>

<style scoped>
* {
  touch-action: pan-y;
  padding: 0;
  margin: 0;
}
li {
  list-style: none;
}
/* 组件中导入样式 滑动样式 */
.mui-pull-top-wrapper .mui-icon.mui-reverse {
  transform: rotate(180deg) translateZ(0);
}
.photo-list li img[lazy="loading"] {
  width: 40px;
  height: 300px;
  margin: auto;
}
.photo-list li img {
  vertical-align: middle;
}
.photo-list {
  padding-bottom: 0;
}
.photo-list li {
  background-color: #ccc;
  text-align: center;
  margin-bottom: 10px;
  box-shadow: 0px 0px 9px #999;
  position: relative;
  overflow: hidden;
}
.photo-list-tltle {
  position: absolute;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  max-height: 41%;
  color: #ddd7d7;
  text-align: start;
  line-height: 14px;
}
.photo-list-tltle h3 {
  font-size: 13px;
  text-indent: 10px;
  margin-bottom: 3px;
}
.photo-list-tltle span {
  font-size: 10px;
  text-indent: 10px;
  display: block;
  color: rgba(221, 215, 215, 0.9);
}
</style>

