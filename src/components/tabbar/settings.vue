<template >
  <div id="setting">
    <div class="mui-card one">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">账号与安全</div>
      </div>
    </div>

    <div class="mui-card two">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">关于开发者</div>
      </div>
    </div>
    <div class="mui-card three">
      <div class="mui-card-header">新消息通知</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">隐私</div>
      </div>
      <div class="mui-card-footer">
        <span style="color:#000000;">通用</span>
      </div>
    </div>

    <div class="mui-card four">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">退出登录</div>
      </div>
    </div>
  </div>
</template>
<script>
import mui from '../../lib/MUI/js/mui.min.js';
export default {
  name: '',
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped>
#setting {
  height: 100vh;
  background-color: rgb(245, 242, 242);

}
.one {
  margin-bottom: 20px;
}
.two {
  margin-bottom: 40px;
}
.three {
  margin-bottom: 20px;
}
</style>

