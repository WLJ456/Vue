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
        <a href="#">
          <span class="mui-icon mui-icon-email">
            <span class="mui-badge">5</span>
          </span>
          <div class="mui-media-body">Email</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/news">
          <span class="mui-icon mui-icon-chatbubble"></span>
          <div class="mui-media-body">WeChat</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-location"></span>
          <div class="mui-media-body">location</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link  to="/search">
          <span class="mui-icon mui-icon-search"></span>
          <div class="mui-media-body">Search</div>
        </router-link >
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-phone"></span>
          <div class="mui-media-body">Phone</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-gear"></span>
          <div class="mui-media-body">Setting</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-info"></span>
          <div class="mui-media-body">about</div>
        </a>
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

</style>
<style >
.home .mint-swipe-indicator {
  height: 18px;
  width: 18px;
}

</style>
