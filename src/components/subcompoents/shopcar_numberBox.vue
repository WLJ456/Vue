<template>
  <div>
    <div class="mui-numbox" data-numbox-min="1" data-numbox-max="9">
      <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
      <input
        id="test"
        class="mui-input-numbox"
        type="number"
        :value="num"
        @change="countChange"
        ref="numbox"
      />
      <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
  </div>
</template>

<script>
import mui from "../../lib/MUI/js/mui.min.js";
export default {
  name: "",
   props: ["num","itemid"],
  data() {
    return {};
  },
  mounted() {
    mui(".mui-numbox").numbox();
  },
  methods: {
    //购物车中的数据变化
    countChange() {
      this.$store.commit("updateCount",{id:this.itemid,count:parseInt(this.$refs.numbox.value)})
   }
  },
 
};
</script>

<style scoped>
</style>
