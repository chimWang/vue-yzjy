<template>
  <div class="mycourse">
    <m-header :title="title" :iconBack="true" :url="url" :isTitle="true" :search="false"></m-header>
    <div class="tab">
      <router-link tag="div" class="tab-item" to="/openCourse" @click.native="overTag">
        <span class="tab-link">公开课</span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/schoolCourse">
        <span class="tab-link">校内课</span>
      </router-link>
    </div>
    <router-view/>
  </div>
</template>

<script type="text/ecmascript-6">
  import MHeader from 'base/m-header/m-header'
  export default{
    data(){
      return {
          nn:2,
        title: '我的课程',
        activeName: 'first',
        url:'/homePage'
      }
    },
    components: {
      MHeader
    },
    methods:{
      overTag(){
          this.nn=4
        console.log(this.nn)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .mycourse
    z-index 10
    top 0
    bottom 0
    position fixed
    background-color #f0f0f0
    width 100%
    height 100%
    .tab
      background-color #fff
      height 30px
      padding 5px
      line-height 30px
      display flex
      box-shadow: 3px 2px 5px #ccc;
      .tab-item
        display inline-block
        flex 1
        text-align center
        .tab-link
          padding-bottom 5px
        &.router-link-active
          .tab-link
            border-bottom 3px solid #5ec0dd


</style>
