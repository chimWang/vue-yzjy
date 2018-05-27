<template>
  <transition name="slide">
    <institute-List :bgImage="bgImage" :title="title" :description="description" :isLogin="isLogin" :orgCode="orgCode"></institute-List>
  </transition>
</template>

<script type="text/ecmascript-6">
  import instituteList from '../institute-list/institute-list.vue'
  import {mapGetters} from 'vuex'
  export default{
    data(){
      return {}
    },
    computed: {
      orgCode(){
        return this.institute.orgCode
      },
      title(){
        return this.institute.orgName
      },
      bgImage(){
        return this.institute.orgImg
      },
      description(){
        return this.institute.description
      },
      isLogin(){
        return this.auth.IsLogin
      },
      ...mapGetters([
        'institute',
        'auth'
      ])
    },
    created(){
      this._getDetail()
    },
    methods: {
      _getDetail(){
        if (!this.institute.orgName) {
          this.$router.push('/institute')
          return
        }
        console.log(this.institute)
      }
    },
    components: {
      instituteList
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

  .slide-enter-active, .slide-leave-active
    transition all 0.3s

  .slide-enter, .slide-leave-to
    transform translate3d(100%, 0, 0)
</style>
