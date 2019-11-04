<template>
  <div class="goodlistinfo-container">
    <!-- 商品购买区域 -->
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @after-leave="afterleave"
    >
      <div id="ball" v-show="!flag"></div>
    </transition>
    <img :src="nowMsg[0].src" />
    <div class="mui-card">
      <div class="mui-card-header">{{nowMsg[0].title}}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            市场价：
            <del style="font-size:20px;">￥{{nowMsg[0].oldsell}}</del> &nbsp;&nbsp;&nbsp;销售价:
            <span
              class="now_price"
              style="font-size:20px;"
            >￥{{nowMsg[0].nowsell}}</span>&nbsp;&nbsp;库存：
            <span class="now_number" style="font-size:20px;">{{nowMsg[0].numbers}}</span>
          </p>
          <p>
            购买数量：
            <br />
            <numbox @getcount="getSelectedCount"></numbox>
          </p>
          <p>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small" @click="clickflag?addToShopCar():flag">加入购物车</mt-button>
          </p>
        </div>
      </div>
      <div class="mui-card-footer">详细介绍</div>
    </div>
  </div>
</template>

<script>
import numbox from "../subcompoents/goodsinfo_numberBox.vue";
export default {
  name: "",
  data() {
    return {
      id: this.$route.params.id,
      goodsInfoMsg: this.$root.goodsMsg,
      nowMsg: [],
      flag: true,
      clickflag: true,
      selectedCount: 1
    };
  },

  created() {
    this.getNowMsg(this.id);
  },

  methods: {
    beforeEnter(el) {
      el.style.transform = "translate(0, 0)";
    },
    enter(el, done) {
      this.clickflag = false;
      el.offsetWidth;
      const Disx = this.getRectCar().x;
      const Disy = this.getRectCar().y;
      el.style.transform = `translate(${Disx}px, ${Disy}px)`;
      el.style.transition = "all 0.5s cubic-bezier(.41,-0.07,.97,.45)";
      done();
    },
    afterEnter(el) {
      // 动画完成之后调用
      this.flag = !this.flag;
    },
    afterleave(el) {
      //知道上次动画完成clickflag为true
      this.clickflag = true;
    },
    getNowMsg(id) {
      for (let index of this.goodsInfoMsg.values()) {
        if (parseInt(id) === index.id) {
          this.nowMsg.push(index);
        }
      }
    },
    //获取横纵ball运动距离
    getRectCar() {
      var ballbox = document.getElementById("ballbox").getBoundingClientRect();
      var ball = document.getElementById("ball").getBoundingClientRect();
      var x = ballbox.left - ball.left;
      var y = ballbox.top - ball.top;
      return { x, y };
    },
    //保存用户选中数量
    getSelectedCount(count) {
      this.selectedCount = count;
    },
    addToShopCar() {
      this.flag = !this.flag;
      var goodsItem = {
        id: this.id,
        count: this.selectedCount,
        price: this.nowMsg[0].nowsell,
        selected: true
      };
    this.$store.commit("addGoodsCar",goodsItem)
    }
  },
  components: {
    numbox
  }
};
</script>

<style scoped>
.goodlistinfo-container {
  height: 1000px;
  background-color: #eee;
  margin: 0;
  padding: 0;
  min-height: 98vh;
}
.goodlistinfo-container img {
  height: 270px;
  width: 100%;
  border: 1px solid #ccc;
}
.mui-card {
  margin: 0px;
  margin-top: 8px;
  width: 100%;
}
.now_price {
  color: red;
  font-size: 16px;
  font-weight: bold;
}
#ball {
  background-color: red;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  z-index: 10000000000000;
  position: absolute;
  top: 28rem;
  left: 4.2rem;
}
</style>
