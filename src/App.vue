<template>
  <div class="app-container" >
    <!-- 在Mint UI中的组件 -->
    <mt-header fixed title="综合项目"></mt-header>
    <transition>
      <router-view></router-view>
    </transition>

    <!-- 在mui中引入的代码 -->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item-ch" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item-ch" to="/member">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item-ch" to="/shopcar">
        <!-- 图标 -->
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge">0</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item-ch" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>

.mint-header{
  font-size: 30px;
  letter-spacing: 2px;
}
.app-container {
  padding-top: 40px;
  overflow-x: hidden;
  padding-bottom: 50px;
}
.v-enter{
  opacity: 0;
  transform: translateX(100%);
}

.v-leave-to {
    opacity: 0;
  transform: translateX(-100%);
  position:absolute;
  
}
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
.mui-bar-tab .mui-tab-item-ch.mui-active {
    color: #007aff;
}
.mui-bar-tab .mui-tab-item-ch {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;}
    .mui-bar-tab .mui-tab-item-ch .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}

.mui-bar-tab .mui-tab-item-ch .mui-icon~.mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
