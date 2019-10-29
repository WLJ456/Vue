<template>
  <div class="goodlistinfo-container">
    <!-- 商品购买区域 -->
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
            >￥{{nowMsg[0].nowsell}}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;库存：
            <span
              class="now_number"
              style="font-size:20px;"
            >{{nowMsg[0].numbers}}</span>
          </p>
          <p>
            购买数量：<br>
            <numbox></numbox>
       
          </p>
          <p>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small">加入购物车</mt-button>
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
      nowMsg: []
    };
  },

  created() {
    this.getNowMsg(this.id);
  },
  methods: {
    getNowMsg(id) {
      for (let index of this.goodsInfoMsg.values()) {
        if (parseInt(id) === index.id) {
          this.nowMsg.push(index);
        }
      }
    }
  },
  components: {
    numbox
  }
};
</script>

<style scoped>
.goodlistinfo-container {
  overflow: hidden;
  background-color: #eee;
  margin: 0;
  padding: 0;
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
</style>
