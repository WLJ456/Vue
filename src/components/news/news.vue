<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for='item in newslist' :key="item.id">
        <router-link :to="'/home/news/newsInfo/'+item.id"> 
          <img class="mui-media-object mui-pull-left" :src="item.src" />
          <div class="mui-media-body">
          {{item.title}}
            <p class="mui-ellipsis">
              <span>发表时间：{{item.send_time|dateFormat}}</span>
              <span>点击次数：{{item.id}}</span>
              </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import {Toast} from 'mint-ui'
export default {
 
  data() {
    return {
      newslist:[{
        id:1,
        title:"这是标题1",
        send_time:"2019-10-1 11:21",
        msg:"这是标题一的渲染内容。",
        src:'../../image/7.jpg'
      },
      {
        id:2,
        title:"这是标题2",
        send_time:"2019-10-2 1:22",
        msg:"这是标题2的渲染内容。",
           src:'../../image/5.jpg'
      },
      {
        id:4,
        title:"这是标题3",
        send_time:"2019-10-3 3:22",
        msg:"这是标题3的渲染内容。",
           src:'../../image/6.jpg'
      },
      {
        id:5,
        title:"这是标题4",
        send_time:"2019-10-4 5:22",
        msg:"这是标题4的渲染内容。",
           src:'../../image/7.jpg'
      },
      {
        id:6,
        title:"这是标题5",
        send_time:"2019-10-5 6:22",
        msg:"这是标题5的渲染内容。",
           src:'../../image/6.jpg'
      },
       {
        id:7,
        title:"这是标题2",
        send_time:"2019-10-2 7:22",
        msg:"这是标题2的渲染内容。",
           src:'../../image/5.jpg'
      },
       {
        id:8,
        title:"这是标题2",
        send_time:"2019-10-2 8:22",
        msg:"这是标题2的渲染内容。",
           src:'../../image/5.jpg'
      },
       {
        id:9,
        title:"这是标题2",
        send_time:"2019-10-2 12:22",
        msg:"这是标题2的渲染内容。",
           src:'../../image/5.jpg'
      },
       {
        id:10,
        title:"这是标题2",
        send_time:"2019-10-2 15:22",
        msg:"这是标题2的渲染内容。",
           src:'../../image/5.jpg'
      },
       {
        id:11,
        title:"这是标题2",
        send_time:"2019-10-2 11:42",
        msg:"这是标题2的渲染内容。",
           src:'../../image/5.jpg'
      },
       {
        id:12,
        title:"这是标题",
        send_time:"2019-10-2 11:22:55",
        msg:"这是标题2的渲染内容。",
           src:'../../image/5.jpg'
      },]
    };
  },
  // created(){
// this.getNews();
//   },
  methods: {

// getNews(){
//   this.$http.get('api/getnewslist').then(result =>{
// if(result.body.status===0){
// this.newslist=result.body.message;
// }else{
//   Toast('err')
// }

//   })
// }

  }
};
</script>

<style scoped>

.mui-ellipsis{
    display: flex;
    
    justify-content: space-between;
}
</style>
