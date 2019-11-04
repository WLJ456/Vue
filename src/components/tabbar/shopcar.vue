<template>
  <div class="shopcar-container">
    <div class="goodslist">
      <div class="mui-card">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <mt-switch></mt-switch>
            <img
              src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6f2493e6c6fe8e2485c407e5d75e3651.jpg?thumb=1&w=200&h=200&f=webp&q=90"
            
            />
            <div class="info">
              <h1>Redmi Note 8 pro</h1>
              <p>
                <span class="price">￥2179</span>
                <shopcarbox></shopcarbox>
                <a href="#">删除</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- 结算区域 -->
      <div class="mui-card">
        <div class="mui-card-content">
          <div
            class="mui-card-content-inner"
          >这是一个最简单的卡片视图控件；卡片视图常用来显示完整独立的一段信息，比如一篇文章的预览图、作者信息、点赞数量等</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import shopcarbox from '../subcompoents/shopcar_numberBox.vue';
export default {
  name: "",
  data() {
    return {};
  },
  methods: {},
  components:{
    shopcarbox,
  }

};
</script>

<style scoped>
.shopcar-container {
  background-color: #eee;
  overflow: hidden;
}
.goodslist h1{
  font-size: 14px;
}
.goodslist .info .price{
  color: red;
}
.mui-card-content-inner{
  display: flex;
 justify-content: space-between;
}
.goodslist img{
  width:100px;
  height: 100%;
}
.info p{
  padding-top:10px; 
  font-weight: bold;
}

</style>
