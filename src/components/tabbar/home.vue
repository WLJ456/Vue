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
    <h1>home</h1>
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

.mint-swipe .mint-swipe-item>img{
width: 100%;
height: 100%;
}

</style>
<style >
.home .mint-swipe-indicator{
height: 18px;
width: 18px;
}
</style>
