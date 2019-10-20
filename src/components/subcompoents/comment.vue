<template>
  <div class="cmt-container">
    <hr />
    <h3>发表评论</h3>
    <textarea placeholder="最多100字" maxlength="100"></textarea>
    <mt-button type="primary" size="large">发表评论</mt-button>

    <div class="cmt-list" >
      <div class="cmt-item" v-for="(item,i) in cmtMsg" :key="item.id">
             <div class="cmt-title">
            第{{i+1}}楼&nbsp&nbsp用户：{{item.name}} &nbsp&nbsp&nbsp发表时间：{{item.time}}
        </div>
        <div class="cmt-body">
           {{item.msg===undefined?"用户很懒，什么都没留下":item.msg==null?"用户很懒，什么都没留下":item.msg===""?"用户很懒，什么都没留下":item.msg}}
        </div>
      </div>
    </div>
        <mt-button type="danger" plain size="large">加载更多</mt-button>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
        cmtMsg:[
            {id:1,
            name:"张三",
            msg:"锄禾日当午",
            time:new Date().toLocaleString(),
            },
             {id:2,
            name:"李四",
            msg:"旱地和下图",
             time:new Date().toLocaleString(),
            },
             {id:3,
            name:"王麻子",
            msg:"谁知盘中餐",
             time:new Date().toLocaleString(),
            },
             {id:4,
            name:"赵四",
            msg:"粒粒皆辛苦",
             time:new Date().toLocaleString(),
            },
             {id:5,
            name:"张三",
            msg:"李白过端午",
             time:new Date().toLocaleString(),
            },
            {id:6,
            name:"六六",
             time:new Date().toLocaleString(),
           
            },
             {id:7,
            name:"七七",
             time:new Date().toLocaleString(),
           msg:null,
            },
               {id:8,
            name:"照八",
           msg:undefined,
            time:new Date().toLocaleString(),
            },
            ]
    };
  },
  methods: {}
};
</script>

<style scoped>
.cmt-container h3{
font-size: 18px;

}
.cmt-container textarea{
    font-size: 14px;
    margin: 0;
    height: 85px;
}
.cmt-list{
margin: 5px 0px
}
.cmt-list .cmt-item{
    font-size: 13px;
}
.cmt-list .cmt-title{
line-height: 35px;
background-color: #ccc;
}
.cmt-list .cmt-body{
line-height: 35px;
text-indent: 2em;
}
</style>

