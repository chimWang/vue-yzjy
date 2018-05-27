<template>
  <div :class="{'not-logged':isLogged,'binding':binding,'not-bind':notBind}">
    <h4>{{warning}}</h4>
    <img src="../not-logged/not-logged.png"/>
    <p v-show="otherText">想要访问此模块<br/>需进入您所在的院校验证您的身份~</p>
    <button @click="login">{{buttonText}}</button>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    props: {
      warning: {
        type: String,
        default: ''
      },
      buttonText: {
        type: String,
        default: ''
      },
      notBind: {
        type: Boolean,
        default: false
      },
      binding: {
        type: Boolean,
        default: false
      },
      isLogged: {
        type: Boolean,
        default: false
      },
      otherText: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      login(){
        if (this.buttonText === '登录') {
          this.$router.push('/login')
        } else {
          this.$router.push('/institute')
        }

      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .not-logged
    p
      width 70%
      line-height 25px
      margin 15px auto
    h4
      position absolute
      top 21%
      left 13%
    img
      margin-top 25%
      width 80%
      height 80%

    button
      width 150px
      height 40px
      margin-left 30%
      background-color #fff000
      border 1px solid #000
      border-radius 5px

  .not-bind
    p
      width 70%
      line-height 25px
      margin 15px auto
    h4
      position absolute
      top 19%
      left 11%
    img
      margin-top 25%
      width 80%
      height 80%

    button
      width 150px
      height 40px
      margin-left 30%
      background-color #fff000
      border 1px solid #000
      border-radius 5px

  .binding
    position absolute
    width 300px
    height 300px
    top -90px
    left 50px
    h4
      position absolute
      background-color #0d1e2e
      top 38%
      left 12%
      font-size 14px
    img
      margin-top 30%
      width 90%
      height 80%

    button
      width 120px
      height 35px
      margin-left 30%
      background-color #fff000
      border 1px solid #000
      border-radius 5px
</style>
