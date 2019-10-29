<template>
  <div class="goods-list">
    <div
      class="goods-item"
      v-for="(item, index) in goodsMsg"
      :key="index"
      @click="goodsListInfo(item.id)"
    >
      <img :src="item.src" height="200px" width="200px" />
      <h1 class="title">{{item.title}}</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥{{item.nowsell}}</span>
          <span class="old">￥{{item.oldsell}}</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>库存{{item.numbers}}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      //模拟商品数据
      goodsMsg: this.$root.goodsMsg
    };
  },
  methods: {
    goodsListInfo(id) {
      this.$router.push({ name: "goodslistinfo", params: { id } });
    }
  }
};
</script>

<style scoped>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  /* 换行排列  流式布局在listdiv中用一个padding 将元素往中间挤一个7像素，再进行俩边布局*/
  padding: 7px;
  justify-content: space-between;
}
.goods-item {
  width: 49%;
  border: 1px solid #ccc;
  box-shadow: 0px 0px 8px #ccc;
  margin: 4px 0;
  /* 改变主轴方向 即纵向spacebetween */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 200px;
}
.goods-item img {
  width: 100%;
}
.title {
  font-size: 16px;
}
.info {
  background-color: #cccc;
}
.price {
  margin: 0;
  padding: 4px;
}
.now {
  color: red;
  font-weight: bold;
  font-size: 16px;
}
.old {
  text-decoration: line-through;
  font-size: 12px;
  margin-left: 10px;
}
.sell {
  display: flex;
  justify-content: space-between;
}
.goods-item:hover {
  transition: all 0.4s ease-out;
  box-shadow: 5px 5px 4px #ccc;
  transform: scale(130%);
}
</style>
