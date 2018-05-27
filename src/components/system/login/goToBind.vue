<template>
  <div class="bind">
    <not-logged v-if="IsLogin===1" :warning="warning" :buttonText="buttonText"
                :notBind="notBind" :otherText="otherText"></not-logged>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapGetters} from 'vuex'
  import notLogged from 'base/not-logged/not-logged'
  export default{
    components: {
      notLogged
    },
    computed: {
      ...mapGetters([
        'auth'
      ]),
      IsLogin(){
        return this.auth.IsLogin
      }
    },
    data(){
      return {
        warning: '您还未绑定院校',
        buttonText: '进入我的院校',
        notBind: true,
        otherText: true
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.bind
  position fixed
  top 0
  bottom 50px
  background-color #fff
  width 100%
</style>
