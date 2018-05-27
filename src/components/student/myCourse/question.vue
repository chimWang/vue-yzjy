<template>
  <div class="course-exchange">
    <div v-if="qalist.length===0" style="position: absolute;top:30%;left: 45%"><b>暂无疑问</b></div>
    <scroll class="content-scroll" v-if="qalist.length>0">
      <div>
        <div class="content" v-for="(item,index) in qalist" :key="index">
          <div class="icon">
            <div><img :src="item.userAvatar" width="35" height="35"/></div>
            <div>
              <span>{{item.userName}}</span><br/>
            </div>
          </div>
          <div class="article">
            {{item.question}}
          </div>
          <div class="answer">
            <h4>教师回答：</h4>
            <span v-text="item.answer?item.answer:'暂无回复'"></span>
          </div>
        </div>
      </div>
    </scroll>
    <div class="add"><i class="el-icon-circle-plus" @click="modal" style="font-size: 40px"></i></div>
    <el-dialog
      :visible.sync="centerDialogVisible"
      width="80%"
      appendToBody
      top="40%"
    >
      <p>答疑</p>
      <div class="text">
        <el-input type="textarea" :rows="4" placeholder="写下你的疑问" v-model="content" size="mini"></el-input>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false" size="mini">取 消</el-button>
        <el-button type="primary" @click="upload" size="mini">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapGetters} from 'vuex'
  import Scroll from 'base/scroll/scroll'
  export default{
    data(){
      return {
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
    props: {
      qalist: {
        type: Array,
        default: function () {
          return []
        }
      },
      courseId: {
        type: String,
        default: ''
      }

    },
    methods: {
      modal() {
        this.centerDialogVisible = true
      },
      upload(){
        this.$http.post('http://www.zerotop.top/edu-web/course/insert/course/qa', {
          userId: this.userInfo.userId,
          userAvatar: this.userInfo.avatar,
          userName: this.userInfo.username,
          courseId: this.courseId,
          question: this.content,

        }).then((res) => {
          console.log(res)
          this.centerDialogVisible = false
          this.$emit('upload')
        }).catch((error) => {
          console.log(error)
        })
      },
    },
    components: {
      Scroll,
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .course-exchange
    position fixed
    width 100%
    top 90px
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
        .answer
          width 75%
          margin 10px auto
          background-color #eee
          padding 10px
          border-radius 5px
          line-height 20px
          h4
            margin 5px 0 5px 0
        .article
          padding 10px
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

  .el-dialog
    z-index 100
    position fixed

</style>
