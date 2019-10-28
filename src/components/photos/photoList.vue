<template>
  <div>
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <!-- id为0的时候添加mui-active默认高亮类 -->
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
      list:this.$root.list,
      showlist: [],
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
        if (index.id === id) {
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

