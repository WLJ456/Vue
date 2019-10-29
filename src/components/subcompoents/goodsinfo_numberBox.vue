<template>
  <div>
    <div class="mui-numbox" data-numbox-min="1" data-numbox-max="9">
      <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
      <input id="test" class="mui-input-numbox" type="number" value="1" />
      <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
  </div>
</template>

<script>
import mui from "../../lib/MUI/js/mui.min.js";
export default {
  name: "",
  data() {
    return {};
  },
    mounted(){
    mui(".mui-numbox").numbox();
  },
  methods: {}
};
</script>

<style scoped>
</style>
