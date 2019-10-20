<template>
  <div class="newsInfo-container">
       <h3 class="title">新闻标题</h3>
      <p class="newsInfo-p"> 
         
          <span>发表时间：</span>
           <span>点击次数：</span>
      </p>
      <hr>
      <div class="content">内容为：{{id}}</div>
      <!-- 父组件传递参数给子组件 -->
      <comment-box :cid="id"></comment-box>
  </div> 
  
</template>

<script>


import comment from '../subcompoents/comment.vue'
export default {

  data() {
    return {
        //获取传参
        id:this.$route.params.id,
      
    };
  },
  components:{
      
      "comment-box":comment},


};
</script>

<style scoped>
.newsInfo-container{
    padding: 0 4px;
}
.newsInfo-container .title{
   
    margin: 15px 0;
    text-align: center;
    
}
.newsInfo-container .newsInfo-p{
    font-size: 16px;
    display: flex;
    justify-content: space-between;
}
</style>
