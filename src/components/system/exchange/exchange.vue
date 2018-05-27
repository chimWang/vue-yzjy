<template>
  <div class="exchange">
    <div class="m-header">
      <div class="icon">
        <i class="el-icon-search"></i>
        <i class="el-icon-bell"></i>
      </div>
      <p class="text">校友圈</p>
    </div>
    <div class="header" v-if="this.user.mySchool">
      <div><img :src="user.mySchool.orgImg" width="80" height="80"/></div>
      <div style="margin-left: 15px">
        <h5>{{user.mySchool.orgName}}</h5>
        <span>总发贴数量：{{this.article.length}}</span><span>我发布的帖子：</span><span>我的消息：</span>
      </div>
    </div>
    <div class="exchange-content">
      <scroll class="content-scroll">
        <div>
          <div class="content" v-for="(item,index) in article" :key="index">
            <div class="icon">
              <div><img src="./login-icon.png" width="45" height="45"/></div>
              <div>
                <span>{{item.author}}</span><br/>
                <time>{{item.createTime}}</time>
              </div>
            </div>

            <div id="article" v-html="item.content" style="padding: 20px"></div>

            <div class="tab">
              <div class="tab-item"><i class="el-icon-erp-zhuanfa"></i>
                <b v-show="item.shareNum > 0">{{item.shareNum}}</b>
              </div>
              <div class="tab-item" @click="comment(index)">
                <i class="el-icon-erp-pinglun"></i>
                <b v-show="item.commentCount > 0">{{item.commentCount}}</b>
              </div>
              <div class="tab-item">
                <i class="el-icon-erp-zan" @click="agree(index)"></i>
                <b v-show="item.upvote >0">{{item.upvote}}</b>
              </div>
            </div>
          </div>
        </div>
      </scroll>

    </div>
    <div class="add"><i class="el-icon-circle-plus" @click="upload" style="font-size: 40px"></i></div>
    <el-dialog
      :visible.sync="centerDialogVisible"
      width="80%"
      appendToBody
      top="40%"
    >
      <p>学友圈</p>
      <div class="text">
        <el-input type="textarea" :rows="4" placeholder="聊聊你的校园生活..." v-model="content" size="mini"></el-input>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false" size="mini">取 消</el-button>
        <el-button type="primary" @click="insertArticle" size="mini">确 定</el-button>
      </span>
    </el-dialog>
    <m-footer></m-footer>
    <router-view/>
  </div>
</template>

<script type="text/ecmascript-6">
  import Scroll from "base/scroll/scroll.vue";
  import MFooter from 'components/system/m-footer/m-footer'
  import {mapGetters} from 'vuex'
  export default {
    mounted() {
      this.listArticle();
    },
    data() {
      return {
        main: "",
        article: [],
        centerDialogVisible: false,
        content: ''
      };
    },
    computed: {
      userInfo(){
        return this.user.user
      },
      ...mapGetters(['user'])
    },
    methods: {
      upload() {
        this.centerDialogVisible = true
      },
      agree(index) {
        this.article[index].like++;
      },

      listArticle() {
        this.$http
          .post("http://www.zerotop.top/edu-web/article/list/article", {
            isLock: false
          })
          .then(res => {
            console.log(res.data.data);
            this.article = res.data.data;
          })
          .catch(error => {
            console.log(error);
          });
      },
      insertArticle(){
          console.log(this.userInfo.userId)
        this.$http.post('http://www.zerotop.top/edu-web/article/insert/article', {
          orgCode: '10001',
          title: '罗小黑战记',
          staffNum: this.userInfo.userId,
          content: this.content,
          author: this.userInfo.username,

        }).then((res) => {
          console.log(res)
          this.centerDialogVisible = false
          this.listArticle()
        }).catch((error) => {
          console.log(error)
        })
      },
      comment(index) {
        this.$router.push({
          name: "comment",
          path: `/comment/${index}`,
          params: {
            article: this.article[index]
          }
        });
      }
    },
    components: {
      Scroll,
      MFooter
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .exchange
    height: 100%;
    .m-header
      padding: 10px;
      height: 30px;
      text-align: center;
      background-color: #0d1e2e;
      .icon
        color: #fff;
        right: 20px;
        top: 16px;
        position: absolute;
        i
          margin-right: 10px;
      .text
        margin: 0;
        color: #fff;
        line-height: 30px;

    .header
      display: flex;
      flex-direction: row;
      background-color: #fff;
      width: 100%;
      padding: 5px;
      height: 80px;
      border-bottom: 5px solid #f0f0f0;
      span
        font-size: 11px;
        margin-right: 20px;
    .exchange-content
      background-color: #f0f0f0;
      position: fixed;
      width: 100%;
      top: 145px;
      bottom: 53px;
      .content-scroll
        height: 100%;
        overflow: hidden;
        .content
          background-color: #fff;
          width: 100%;
          padding: 15px;
          margin-bottom: 10px;
          #article
            p
              display block
              margin-bottom 10px
            img
              display block
              margin-top: 20px;
              width: 180px;
              height: 120px;
          .icon
            display: flex;
            flex-direction: row;
            img
              margin-right: 20px;
              display: inline-block;
              border-radius: 50%;
              border: 1px #f0f0f0 solid;
            span
              display: inline-block;
              font-size: smaller;
              margin-top: 10px;
            time
              display: inline-block;
              font-size: 12px;
              color: #ccc;
              margin-top: 10px;
          .tab
            display: flex;
            .tab-item
              flex: 1;
              text-align: center;
              b
                margin-left: 5px;
                font-size: small;
          .comment
            margin-top: 15px;
            font-size: small;
            ul
              list-style: none;
              margin: 0 0 0 10px;
              padding: 0;
              line-height: 20px;

    .add
      position: absolute;
      bottom: 65px;
      right: 10px;


</style>
