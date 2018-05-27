<template>
  <div class="course-exam">
    <div v-if="files.length===0" style="position: absolute;top:30%;left: 45%"><b>暂无资料</b></div>
    <ul class="exam-list" v-for="item in files">
      <li>
        <p>{{item.fileName}}</p>
        <span>发布时间：{{item.createTime}}</span>
        <a :href="item.mediaUrl"><i class="el-icon-download"></i></a>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    props: {
      files: {
        type: Array,
        default: []
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .course-exam
    width 100%
    background-color #f0f0f0
    position fixed
    top 90px
    bottom 0
    .exam-list
      padding-left 0
      list-style none
      margin 10px 10px 0 10px
      li
        position relative
        background-color #ffffff
        padding 10px 10px 10px 20px
        margin-bottom 10px
        p
          font-size smaller
        span
          font-size 11px
          color #666
        i
          color #5ec0dd
          position absolute
          font-size 20px
          bottom 20px
          right 10px
          padding 5px
          border 1px solid #5ec0dd
          border-radius 50%

</style>
