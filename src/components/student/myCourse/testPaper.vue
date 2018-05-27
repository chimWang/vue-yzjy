<template>
  <div class="choice">
    <m-header :title="questions.examTitle" :iconBack="true" :isTitle="true" :search="false"></m-header>
    <div class="test-paper">
      <scroll class="test-scroll">
        <div>
          <p>选择题</p>
          <ul v-for="(item,index) in choice">
            <li class="test" v-if="item.type===2">
              <h4><p>{{index + 1}}.{{item.question}}（5分）</p></h4>
              <ul>
                <li>
                  <el-radio label="A" v-model="item.answer">A：
                    {{item.ans1}}
                  </el-radio>
                </li>
                <li>
                  <el-radio label="B" v-model="item.answer">B：
                    {{item.ans2}}
                  </el-radio>
                </li>
                <li>
                  <el-radio label="C" v-model="item.answer">C：
                    {{item.ans3}}
                  </el-radio>
                </li>
                <li>
                  <el-radio label="D" v-model="item.answer">D：
                    {{item.ans4}}
                  </el-radio>
                </li>
              </ul>
            </li>
          </ul>
          <hr/>
          <p>简答题</p>
          <ul v-for="(item,index) in choice">
            <li class="test" v-if="item.type===1">
              <h4><p>{{index + 1}}.{{item.question}}（10分）</p></h4>
              <el-input type="textarea" :rows="3" placeholder="输入答案"
                        v-model="item.answer"></el-input>
            </li>
          </ul>
        </div>
      </scroll>
      <el-button @click="commitExam(10)" type="primary" size="small">提交考试 </el-button>
      <el-dialog
        :visible.sync="centerDialogVisible"
        width="80%"
        appendToBody
        top="40%"
      >
        <p>试卷提交成功</p>
        <b>你的分数是：{{score}}</b>
        <span slot="footer" class="dialog-footer">
          <el-button @click="centerDialogVisible = false" size="mini">取 消</el-button>
          <el-button type="primary" size="mini" @click="outExam">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
  import {mapGetters} from 'vuex'
  import MHeader from 'base/m-header/m-header'
  import Scroll from 'base/scroll/scroll'
  export default{
    mounted(){
      console.log(this.choice)
    },
    computed: {
      userId(){
        return this.user.user.userId
      },
      ...mapGetters(['user'])
    },
    data(){
      return {
        title: '题目',
        questions: this.$route.params.questions,
        choice: JSON.parse(this.$route.params.questions.content),
        anslist: [],
        score: '',
        centerDialogVisible: false
      }
    },
    methods: {
      commitExam(id){
        var _this = this
        this.choice.forEach(function (item, index) {
          _this.anslist.push({
            num: index,
            ans: [item.answer]
          })
        })

        console.log(this.anslist)

        this.$http.post('http://www.zerotop.top/edu-web/user/commit/exam/' + id, {
          answerlist: this.anslist,
          userId: this.userId,
          courseId: this.$route.params.courseId
        }).then((res) => {
          console.log(res.data.data)
          this.centerDialogVisible = true
          this.score = res.data.data.score
        }).catch(e => {
          console.log(e)
        })
      },
      outExam(){
        this.$router.push('/homePage')
      }
    },
    components: {
      MHeader,
      Scroll
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .choice
    position fixed
    top 0
    bottom 0
    width 100%
    background-color #fff
    .el-button
      position absolute
      top 10px
      right 10px
    ul
      list-style none
      margin-left 0
      padding 0
      li.test
        padding 0
        margin 10px 0 10px 0
        ul
          li
            margin 10px 0 10px 20px
    .test-paper
      position fixed
      top 50px
      bottom 0
      width 90%
      padding 0 20px 0 20px
      .test-scroll
        height 100%
        overflow hidden

</style>
