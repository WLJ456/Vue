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
      ]
    };
  },
  methods: {
    goodsListInfo(id) {
      this.$router.push({ name: "goodslistinfo", params: { id} });
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
