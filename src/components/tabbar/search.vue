<template>
  <div>
    <div class="imgs"></div>

    <div class="mui-input-row mui-search mui-input-search">
      <input type="search" class="mui-input-clear" placeholder list="ls" />
      <datalist id="ls">
        <option value="小米9"></option>
        <option value="小米洗衣机"></option>
        <option value="华为荣耀9"></option>
        <option value="华为荣耀8"></option>
        <option value="小米机器人"></option>
        <option value="洗衣机"></option>
        <option value="格力空调"></option>
      </datalist>
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
  mounted() {
    mui('.mui-input-row input').input();
  },
  methods: {}
};
</script>

<style scoped  >
.imgs {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-image: url('../../image/5.jpg');
  background-position: -96px -30px;
}

.mui-input-row {
   width: 80%;
   margin: 0 auto;
   margin-top: 80%;
  
}
</style>
