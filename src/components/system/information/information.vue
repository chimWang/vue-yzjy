<template>
  <div class="information">
    <scroll style="height: 100%;overflow: hidden">
      <div>
        <div class="article" v-for="item in article">
          <div class="content">
            <span>- 文章 -</span>
            <h3>《{{item.title}}》</h3>
            <span style="color: #666">文 / {{item.author}}</span>
            <img src="http://img0.imgtn.bdimg.com/it/u=882498562,2607464990&fm=27&gp=0.jpg"/>
            <p>{{item.content}}</p>
            <time style="color: #666">2018/04/15</time>
          </div>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll'
  export default{
    data(){
      return {
        article: [
          {
            title: '2018高考专业选择不容忽视',
            author: '罗小黑',
            content: '进入高校能够学习自己感兴趣的专业是快乐的，步入社会能够学有所用是幸运的，尤其是将来能从事发挥自己特长的职业更是幸福的。'
          },
          {
            title: '2018高考专业选择不容忽视',
            author: '罗小黑',
            content: '进入高校能够学习自己感兴趣的专业是快乐的，步入社会能够学有所用是幸运的，尤其是将来能从事发挥自己特长的职业更是幸福的。'
          }
        ]
      }
    },
    components: {
      Scroll
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .information
    position fixed
    top 94px
    bottom 50px
    width 100%
    background-color #eee
    .article
      margin-bottom 10px
      width 100%
      background-color #fff
      .content
        font-size small
        padding 25px 0 10px 0
        width 85%
        margin 0 auto
        position relative
        span:first-child
          display inline-block
          position absolute
          top 10px
          left 50%
          margin-left -15px
          color #666
        p
          line-height 20px
          width 100%
          overflow:hidden;
          text-overflow:ellipsis;
          -o-text-overflow:ellipsis;
          -webkit-text-overflow:ellipsis;
          -moz-text-overflow:ellipsis;
          white-space:nowrap;
        img
          margin-top 10px
          width 100%
          height 140px
</style>
