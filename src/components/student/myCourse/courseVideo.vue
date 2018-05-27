<template>
  <div class="video">
    <m-header :title="courseware.coursewareName" :iconBack="true" :isTitle="true" :search="false"></m-header>
    <video :src="courseware.mediaUrl" controls="controls" width="100%" height="230">
      你的浏览器不支持video标签
    </video>
    <div class="myNote">
      <scroll style="height: 100%;overflow: hidden">
        <div>
          <div class="note">
            <h5>课堂小记</h5>
            <p>麦肯锡全球研究所给出的定义是：一种规模大到在获取、存储、管理、分析方面大大超出了传统数据库软件工具能力范围的数据集合，具有海量的数据规模、快速的数据流转、多样的数据类型和价值密度低四大特征。</p>
            <el-button type="primary" size="mini" round="">添加至我的笔记</el-button>
          </div>
          <div class="take-note">
            <el-input :rows="5" placeholder="笔记" type="textarea" v-model="content"></el-input>
            <el-button type="primary" size="mini" @click="insertUserNote">保存</el-button>
          </div>
        </div>
      </scroll>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
  import MHeader from 'base/m-header/m-header'
  import Scroll from 'base/scroll/scroll'
  import {mapGetters} from 'vuex'
  export default{
    data(){
      return {
        title: '大数据',
        content: '',
        courseware: this.$route.params.courseware
      }
    },
    computed: {
      userId(){
        return this.user.user.userId
      },
      ...mapGetters(['user'])
    },
    components: {
      MHeader,
      Scroll
    },
    methods: {
      insertUserNote(){
        this.$http.post('http://www.zerotop.top/edu-web/user/insert/note', {
          userId: this.userId,
          title: "新的笔记",
          content: this.content

        }).then((res) => {
          this.$notify({
            title: '成功',
            message: '添加笔记成功',
            type: 'success',
            position: 'bottom-right',
            showClose: true,
            customClass: 'notify',
          });
          this.content = ''
          console.log(res)
        }).catch((error) => {
          console.log(error)
        })
      },
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .video
    width 100%
    position fixed
    top 0
    bottom 0
    background-color #f0f0f0
    .myNote
      position absolute
      top 290px
      bottom 0
      width 100%

      .note
        background-color #fff
        width 87%
        margin 15px auto
        padding 10px
        border-radius 5px
        box-shadow 3px 3px 2px #ccc
        h5
          margin 10px
        p
          font-size small
          line-height 20px
      .take-note
        width 95%
        margin 20px auto
        .el-button
          margin-top 10px

</style>
