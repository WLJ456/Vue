<template>
  <div class="cmt-container">
    <hr />
    <h3>发表评论</h3>
    <textarea placeholder="最多100字" maxlength="100" v-model="content"></textarea>
    <mt-button type="primary" size="large" @click="addCmt()">发表评论</mt-button>

    <div class="cmt-list">
      <div class="cmt-item" v-for="(item,i) in cmtMsg" :key="item.id">
        <div class="cmt-title">第{{i+1}}楼&nbsp;&nbsp;用户：{{item.name}} &nbsp;&nbsp;&nbsp;发表时间：{{item.time}}</div>
        <div
          class="cmt-body"
        >{{item.msg===undefined?"用户很懒，什么都没留下":item.msg==null?"用户很懒，什么都没留下":item.msg===""?"用户很懒，什么都没留下":item.msg}}</div>
      </div>
    </div>
    <!-- plain 是镂空按钮 large是指拉长的按钮 -->
    <mt-button type="danger" plain size="large" @click="getNews()">加载更多</mt-button>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  props: ["cid"],
  data() {
    return {
      content: "",
      user: this.cid,
      newslist: [],
      cmtMsg: [
        {
          id: 1,
          name: "张三",
          msg: "锄禾日当午",
          time: new Date().toLocaleString()
        },
        {
          id: 2,
          name: "李四",
          msg: "旱地和下图",
          time: new Date().toLocaleString()
        },
        {
          id: 3,
          name: "王麻子",
          msg: "谁知盘中餐",
          time: new Date().toLocaleString()
        },
        {
          id: 4,
          name: "赵四",
          msg: "粒粒皆辛苦",
          time: new Date().toLocaleString()
        },
        {
          id: 5,
          name: "张三",
          msg: "李白过端午",
          time: new Date().toLocaleString()
        },
        { id: 6, name: "六六", time: new Date().toLocaleString() },
        { id: 7, name: "七七", time: new Date().toLocaleString(), msg: null },
        {
          id: 8,
          name: "照八",
          msg: undefined,
          time: new Date().toLocaleString()
        }
      ]
    };
  },
  methods: {
    //获取随机数名字
    getRondom() {
      var name =
        "美味佳肴姓名大全本站编写的起名大全共收录个姓氏每个姓氏精选的姓名考虑到了宝宝性";
      //分隔数组
      var rs = [];
      if (name< 3) {
        rs[0] = name;
      } else {
        var reg = /.{3}/g;
        rs = name.match(reg);
      }
      console.log(rs);
      return rs[Math.floor(Math.random()*10)];
    },
    //rest运算符...这在push中直接把数组传入其中并且保持数组类型
    addCmt() {
      var len = this.cmtMsg.length;
      var cmtDemo = {
        id: len + 1,
        //生成随机用户名
        name: this.getRondom(),
        msg: this.content,
        time: new Date().toLocaleString()
      };
      this.cmtMsg.push(cmtDemo);
      this.content = "";
    },
    getNews() {
      this.$http.get("./components/subcompoents/cmtmsg.json").then(result => {
        if (result.body.status === 0) {
          this.newslist = result.body.message;
          console.log(this.newslist);
        } else {
          Toast("获取信息失败");
        }
      });
    }
  }
};
</script>

<style scoped>
.cmt-container h3 {
  font-size: 18px;
  margin-top:20px; 
}
.cmt-container textarea {
  font-size: 14px;
  margin: 0;
  height: 85px;
}
.cmt-list {
  margin: 5px 0px;
}
.cmt-list .cmt-item {
  font-size: 13px;
}
.cmt-list .cmt-title {
  line-height: 35px;
  background-color: #ccc;
}
.cmt-list .cmt-body {
  line-height: 35px;
  text-indent: 2em;
}
</style>

