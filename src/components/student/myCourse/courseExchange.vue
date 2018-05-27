<template>
  <div class="course-exchange">
    <scroll class="content-scroll">
      <div>
        <div class="content" v-for="(item,index) in article" :key="index">
          <div class="icon">
            <div><img :src="item.sendFromAvator" width="35" height="35"/></div>
            <div>
              <span>{{item.sendFromName}}</span><br/>
              <time>{{item.createTime}}</time>
            </div>
          </div>
          <div class="article">
            {{item.content}}
          </div>
        </div>
      </div>
    </scroll>
    <div class="add"><i class="el-icon-circle-plus" @click="uploadComment" style="font-size: 40px"></i></div>
    <el-dialog
      :visible.sync="centerDialogVisible"
      width="80%"
      appendToBody
      top="40%"
    >
      <p>课程评论</p>
      <div class="text">
        <el-input type="textarea" :rows="4" placeholder="写下你的评论" v-model="content" size="mini"></el-input>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false" size="mini">取 消</el-button>
        <el-button type="primary" @click="insertCourseComment" size="mini">确 定</el-button>
      </span>
    </el-dialog>
    <router-view/>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapGetters} from 'vuex'
  import Scroll from 'base/scroll/scroll'
  export default{
    created(){
      this.listCourseComment(this.$route.query.courseId)
    },
    data(){
      return {
        article: [],
        centerDialogVisible: false,
        content: ''
      }
    },
    computed: {
      userInfo(){
        return this.user.user
      },
      ...mapGetters([
        'user'
      ])
    },
    methods: {
      uploadComment(){
        this.centerDialogVisible = true
      },
      listCourseComment(courseId){
        this.$http.post('http://www.zerotop.top/edu-web/course/list/coursecomment/' + courseId, {}).then((res) => {
          this.article = res.data.data
          console.log(res)
          console.log(this.article)
        }).catch((error) => {
          console.log(error)
        })
      },
      insertCourseComment(){
        this.$http.post('http://www.zerotop.top/edu-web/course/insert/coursecomment', {
          content: this.content,
          courseId: this.$route.query.courseId,
          rate: 5,
          sendFromId: this.userInfo.userId,
          sendFromName: this.userInfo.username,
          sendFromAvatar: this.userInfo.avatar
        }).then((res) => {
          this.centerDialogVisible=false
          this.listCourseComment(this.$route.query.courseId)
          console.log(res)
        }).catch((error) => {
          console.log(error)
        })
      },

    },
    components: {
      Scroll
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .course-exchange
    background-color #f0f0f0
    position fixed
    width 100%
    top 341px
    bottom 0
    .content-scroll
      height 100%
      overflow hidden
      .content
        font-size smaller
        margin-top 5px
        padding 10px
        background-color: #fff;
        width: 100%;
        .article
          padding 20px 0 10px 5px
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

  .add
    position: absolute;
    bottom: 20px;
    right: 10px;


</style>
