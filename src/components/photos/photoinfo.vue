<template>
  <div class="photoinfo-container">
    <!-- 缩略图 -->
    <h3>{{infolist[0].title}}</h3>
    <hr>
    <mt-swipe :auto="3000">
      <mt-swipe-item v-for="(item,index) in infolist" :key="item.index">
        <img :src="item.src" />
      </mt-swipe-item>
    </mt-swipe>
    <!-- 评论组件 -->
    <comment-box :cid="id"></comment-box>
  </div>
</template>

<script>
import comment from "../subcompoents/comment.vue";
export default {
  name: "",
  data() {
    return {
      //传值之后是字符串
      id: this.$route.params.id,
      //访问根路径下的list
      list: this.$root.list,
      infolist: []
    };
  },
  created() {
    //访问根目录data域中的数据
    // console.log(this.$root.wlj);
    this.getPhotoInfo();
    // console.log(this.list[6].src);
  },
  methods: {
    getPhotoInfo() {
      this.infolist = [];
      for (let index of this.list.values()) {
        if (index.id === parseInt(this.id)) {
          this.infolist.push(index);
        }
      }
    }
  },
  components: {
    "comment-box": comment
  }
};
</script>

<style scoped>
.mint-swipe {
  height: 300px;
  margin: 10px;
  box-shadow: 3px -2px 5px 3px #cccccc; 
}
.mint-swipe .mint-swipe-item > img {
  width: 100%;
  height: 100%;
  
}
.photoinfo-container{
  padding-top: 10px;
}
.photoinfo-container h3{
font-size: 20px;
color: rgba(0, 0, 0, 0.808);
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
</style>
<style >
.photoinfo-container .mint-swipe-indicator {
  height: 18px;
  width: 18px;
}
</style>

