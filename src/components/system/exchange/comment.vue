<template>
  <div class="comment">
    <div style="background-color: #fff;height: 20px;padding: 10px">
      <i class="el-icon-arrow-left" @click="back"></i>
      <i class="el-icon-share" style="float: right"></i>
    </div>
    <div class="comment2">
      <scroll style="height: 100%;overflow: hidden">
        <div>
          <div class="content">
            <div class="icon">
              <div><img src="./login-icon.png" width="45" height="45"/></div>
              <div>
                <span>{{article.author}}</span><br/>
                <time>{{article.createTime}}</time>
              </div>
            </div>
            <div class="article">
              <div v-html="article.content"></div>
            </div>
          </div>

          <div class="comment-bar">
            <div class="comment-header" style="height: 20px">
              <div><i class="el-icon-erp-pinglun"></i> 全部评论 {{article.commentCount}} 条</div>
              <div style="float: right"><i class="el-icon-erp-zan"></i> {{article.upvote}}</div>
            </div>
            <br/>
            <div class="comment-content" v-for="(items,index) in comment" :key=index>
              <i class="el-icon-erp-pinglun" @click="childrenComment(index,items.sendFromName)"
                 style="font-size: 16px"></i>
              <div class="icon">
                <div><img src="./login-icon.png" width="30" height="30"/></div>
                <div>
                  <span>{{items.sendFromName}}</span><br/>
                </div>
              </div>
              <div>
                <p>{{items.content}}</p>
              </div>
              <ul class="childrenComment" v-show="items.childrenComment.length > 0">
                <li v-for="(items2,index1) in items.childrenComment" :key=index1>
                  <span @click="childrenComment(index,items2.sendFromName)">{{items2.sendFromName}}
                    <span>回复{{items2.acceptToName}}</span>: {{items2.content}}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </scroll>
    </div>
    <div class="comment-input">
      <input ref="chatpannel" v-model="main" :placeholder="placeholder" v-focus="focusState">
      <el-button @click="send" size="small" type="primary" style="position:fixed;right: 0;bottom: 0"
                 v-show="send1State">发送
      </el-button>
      <el-button @click="send2" size="small" type="danger" style="position:fixed;right: 0;bottom: 0"
                 v-show="send2State">发送
      </el-button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Vue from "vue";
  import Scroll from "base/scroll/scroll";
  export default {
    created() {
      this.article = this.$route.params.article;

      this.getCommentByArticleId(this.$route.params.article.articleId);
    },
    data() {
      return {
        focusState: false,
        main: "",
        send1State: true,
        send2State: false,
        send3State: false,
        article: {},
        placeholder: "发表你的评论",
        comment: []
      };
    },
    methods: {
      back() {
        this.$router.back("-1");
      },
      getCommentByArticleId(articleId) {
        this.$http
          .get(
            "http://www.zerotop.top/edu-web/article/list/comment/" + articleId,
            {}
          )
          .then(res => {
            console.log(res.data.data);
            this.comment = res.data.data;

            console.log(this.comment);
          })
          .catch(error => {
            console.log(error);
          });
      },
      send() {
        this.comment.push({
          childrenId: this.comment.length + 1,
          parentId: 0,
          sendFromName: "sendFrom",
          content: this.main,
          childrenComment: []
        });

        //动态新增对象属性
        //        for (let i = this.article.comment.length - 1; i >= 0; i--) {
        //          if (!this.article.comment[i].childrenId) {
        //            Vue.set(this.article.comment[i], 'childrenId', 2)
        //          } else {
        //            this.article.comment[i].childrenId--
        //          }
        //        }

        console.log(this.comment);
      },
      send2() {
        if (this.main) {
          this.comment[this.id].childrenComment.push({
            parentId: this.id + 1,
            childrenId: this.comment[this.id].childrenComment.length,
            acceptToId: "",
            sendFromId: "",
            sendFromName: "chim",
            acceptToName: this.acceptToName,
            content: this.main
          });
          this.$http.post('http://www.zerotop.top/edu-web/article/insert/comment', {
            articleId: this.article.articleId,
            parentId: this.id + 1,
            childrenId: this.comment[this.id].childrenComment.length,
            sendFromName: "廿七",
            sendFromId: "3244",
            acceptToName: this.acceptToName,
            acceptToId: this.comment[this.id].sendFromId,
            content: this.main
          }).then((res) => {
            console.log(res)
          }).catch((error) => {
            console.log(error)
          })
        }
        this.send1State = true;
        this.send2State = false;
        this.focusState = false;
      },
      childrenComment(index, acceptToName) {
        this.placeholder = "回复" + acceptToName + ":";
        this.acceptToName = acceptToName;
        this.id = index;
        this.focusState = true;
        this.send1State = !this.send1State;
        this.send2State = true;

        // this.$http.post('http://www.zerotop.top/edu-web/article/insert/comment',{
        //     articleId: this.article.articleId,
        //     parentId: this.id + 1,
        //     childrenId:this.comment[this.id].childrenComment.length,
        //     sendFromName: "chim",
        //     acceptToName: this.acceptToName,
        //     content: this.main
        //   }).then((res)=>{
        //     console.log(res)
        //   }).catch((error)=>{
        //     console.log(error)
        //   })
      }
    },
    components: {
      Scroll
    },
    directives: {
      focus: {
        update: function (el, {value}) {
          if (value) {
            el.focus();
          }
        }
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .comment
    width 100%
    position fixed
    top 0
    bottom 0
    background-color #f0f0f0

  .comment2
    width 100%
    position fixed
    top 30px
    bottom 28px
    .content
      background-color #fff
      width 100%
      padding 15px
      margin-bottom 10px
      .article
        p
          display block
        img
          display block
          margin-top 20px
          width 180px
          height 120px

      .icon
        margin-top 10px
        display flex
        flex-direction row

        img
          margin-right 20px
          display inline-block
          border-radius 50%
          border 1px #f0f0f0 solid

        span
          display inline-block
          font-size smaller
          margin-top 10px

        time
          display inline-block
          font-size 12px
          color #ccc
          margin-top 10px

    .comment-bar
      margin-top 10px
      background-color #fff

      .comment-header
        height 300px
        padding 12px
        border-bottom 1px solid #ddd

        div
          display inline-block
          font-size smaller

      .comment-content
        font-size small
        width 100%
        padding 10px 0 10px 20px
        border-bottom 1px solid #ccc

        i
          display inline-block
          position absolute
          right 10px

        .childrenComment
          list-style none
          width 75%
          margin 0 0 0 5%
          padding 5px
          border-radius 5px
          background-color #f0f0f0

          li
            padding 5px

        .icon
          display flex
          flex-direction row

          img
            margin-right 10px
            display inline-block
            border-radius 50%
            border 1px #f0f0f0 solid

          span
            display inline-block
            font-size smaller
            margin-top 10px

  .comment-input
    position fixed
    width 100%
    bottom 0
    input
      height 30px
      width 100%
      background-color #f0f0f0
      border 1px solid #f0f0f0
      padding-left 5px

</style>
