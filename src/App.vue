<template>
  <div class="app-container">
    <!-- 在Mint UI中的组件 -->
    <p class="app-back" @click="goBack()" v-show="flag">
      <span class="mui-icon mui-icon-back"></span>
      <span>返回</span>
    </p>
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
    return {
      flag: false
    };
  },
  //让首页没有返回按钮
  created() {
    this.getHomeBack();
  },
  updated() {
    this.getHomeBack();
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    getHomeBack() {
      var path = this.$route.path;
      if (path === "/home") {
        this.flag = false;
      } else {
        this.flag = true;
      }
    }
  }
};
</script>

<style scoped>
.app-back {
  position: absolute;
  top: 0;
  bottom: 0;
  position: fixed;
  z-index: 9999;
  color: white;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
}
.app-back :nth-child(1) {
  margin-left: 3px;
}
.mint-header {
  font-size: 30px;
  letter-spacing: 2px;
  z-index: 99;
}
.app-container {
  padding-top: 40px;
  overflow-x: hidden;
  padding-bottom: 50px;
  position: relative;
}
.v-enter {
  opacity: 0;
  transform: translateX(100%);
}

.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
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
  color: #929292;
}
.mui-bar-tab .mui-tab-item-ch .mui-icon {
  top: 3px;
  width: 24px;
  height: 24px;
  padding-top: 0;
  padding-bottom: 0;
}

.mui-bar-tab .mui-tab-item-ch .mui-icon ~ .mui-tab-label {
  font-size: 11px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
