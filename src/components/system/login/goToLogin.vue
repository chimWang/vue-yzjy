<template>
  <div class="login">
    <not-logged :warning="warning" :buttonText="buttonText" :isLogged="isLogged"></not-logged>
  </div>

</template>

<script type="text/ecmascript-6">
  import notLogged from 'base/not-logged/not-logged'
  export default{
    components: {
      notLogged
    },
    data(){
      return {
        warning: '您还未登录',
        buttonText: '登录',
        isLogged: true
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .login
    background-color #fff
    position fixed
    width 100%
    top 0
    bottom 50px

</style>
