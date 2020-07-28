<template>
  <div class="home">
    <mt-swipe :auto="3000">
      <mt-swipe-item>
        <img src="../../image/1.jpg" />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../../image/2.jpg" />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../../image/3.jpg" />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../../image/4.jpg" />
      </mt-swipe-item>
    </mt-swipe>

    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/goodslist">
          <span class="mui-icon mui-icon-home"></span>
          <div class="mui-media-body">商城</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/photolist">
              <span class="mui-icon mui-icon-image"></span>
          <div class="mui-media-body">图片</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/news">
          <span class="mui-icon mui-icon-chatbubble"></span>
          <div class="mui-media-body">聊天</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
      <router-link to="/shopcar">
          <span class="mui-icon-extra mui-icon-extra-cart shop-car"></span>
          <div class="mui-media-body">购物车</div>
     </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link  to="/search">
          <span class="mui-icon mui-icon-search"></span>
          <div class="mui-media-body">搜索</div>
        </router-link >
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link  to="/home/login">
          <span class="mui-icon-extra mui-icon mui-icon-extra-computer"></span>
          <div class="mui-media-body">登录</div>
          </router-link>
      </li>

  <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link  to="/home/reg">
          <span class="mui-icon mui-icon-plusempty"></span>
          <div class="mui-media-body">注册</div>
          </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link  to="/settings">
          <span class="mui-icon mui-icon-gear"></span>
          <div class="mui-media-body">设置</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
       <router-link  to="/about">
          <span class="mui-icon mui-icon-info"></span>
          <div class="mui-media-body">关于开发</div>
       </router-link>
      </li>
 
    </ul>

  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
.mint-swipe {
  height: 300px;
}

.mint-swipe .mint-swipe-item > img {
  width: 100%;
  height: 100%;
  
}
.mui-table-view.mui-grid-view.mui-grid-9 {
  border: none;
  background-color: white;
  margin-top:30px; 
 
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
  border: 0;
   font-size: 20px;

} 
.mui-grid-view.mui-grid-9 .mui-table-view-cell>a:hover{
color: skyblue;
transform:scale(1.5);
}
.shop-car{
 font-size: 48px;
}

</style>
<style >
.home .mint-swipe-indicator {
  height: 18px;
  width: 18px;
}

</style>
