<template>
  <div class="app-container">
    <!-- 在Mint UI中的组件 -->
    <mt-header fixed title="vue项目"></mt-header>
    <transition>
      <router-view></router-view>
    </transition>

    <!-- 在mui中引入的代码 -->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/member">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item" to="/shopcar">
        <!-- 图标 -->
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge">0</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item" to="/search">
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
.app-container {
  padding-top: 40px;
  overflow-x: hidden;
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
</style>
