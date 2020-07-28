<template>
  <div class="shopcar-container">
    <div class="goodslist">
      <div class="mui-card" v-for="(item,i) in newmsg" :key="item.id">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <mt-switch
              v-model="$store.getters.getSelected[item.id]"
              @change="selectedchange(item.id,$store.getters.getSelected[item.id])"
            ></mt-switch>
            <img :src="item.src" />
            <div class="info">
              <h1>{{item.title}}</h1>
              <p>
                <span class="price">￥{{item.nowsell}}</span>
                <shopcarbox :num="getShopCarNum(item.id)" :itemid="item.id"></shopcarbox>
                <a href="#" @click.prevent="remove(item.id,i)">删除</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- 结算区域 -->
      <div class="mui-card">
        <div class="mui-card-content">
          <div class="mui-card-content-inner total">
            <div class="left">
              <p>总计(不含运费)</p>
              <p>
                以勾选商品
                <span>{{$store.getters.getMoneyaAndCount.count}}</span>件，总计
                <span>￥{{$store.getters.getMoneyaAndCount.total}}</span>
              </p>
            </div>

            <mt-button type="danger">去结算</mt-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import shopcarbox from "../subcompoents/shopcar_numberBox.vue";
export default {
  name: "",
  data() {
    return {
      shopmsg: this.$root.goodsMsg,
      carmsg: this.$store.state.car,
      newmsg: []
    };
  },
  created() {
    this.getGoodsInfo();
  },
  methods: {
    getGoodsInfo() {
      var idArr = [];
      this.carmsg.forEach(item => {
        idArr.push(item.id);
      });
      this.shopmsg.forEach(item => {
        if (idArr.indexOf(item.id) > -1) {
          this.newmsg.push(item);
        }
      });
    },
    //通过id获取数据中的count
    getShopCarNum(id) {
      var count;
      this.carmsg.some(item => {
        if (item.id == id) {
          count = parseInt(item.count);
          return true;
        }
      });
      return count;
    },
    remove(id, index) {
      //点击删除商品
      this.newmsg.splice(index, 1);
      this.$store.commit("remvoeFormcar", id);
    },
    selectedchange(id, val) {
      this.$store.commit("updateSelect", { id, selected: val });
    }
  },
  components: {
    shopcarbox
  }
};
</script>

<style scoped>
.shopcar-container {
  height: 100vh;
  background-color: rgb(245, 242, 242);
  overflow: hidden;
}
.goodslist h1 {
  font-size: 14px;
}
.goodslist .info .price {
  color: red;
}
.mui-card-content-inner {
  display: flex;
  justify-content: space-between;
}
.goodslist img {
  width: 100px;
  height: 100%;
}
.info p {
  padding-top: 10px;
  font-weight: bold;
  text-align: right;
}
.info p > a {
  margin-top: 10px;
  display: inline-block;
  font-size: 14px;
}
.total {
  display: flex;
  justify-content: space-between;
  align-items: center;
  letter-spacing: 1.5px;
}
.total span {
  color: red;
  font-weight: bold;
  font-size: 16px;
}
</style>
