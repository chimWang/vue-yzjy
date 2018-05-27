<template>
  <div class="institute" ref="institute">
    <list-view @select="selectInstitute" :data="institute"></list-view>
    <router-view/>
  </div>
</template>

<script type="text/ecmascript-6">
  import ListView from '../listview/listview.vue'
  import {mapMutations} from 'vuex'
  export default{
    data(){
      return {
        institute: []
      }
    },
    created(){
      this.getInstitute()
    },
    methods: {
      selectInstitute(institute){
        this.$router.push({
          path: `/institute/${institute.orgCode}`
        })
        this.setInstitute(institute);
      },
      ...mapMutations({
        setInstitute: 'SET_INSTITUTE',
      }),

      getInstitute(){
        this.$http.get('http://www.zerotop.top/edu-web/common/list/school').then((res) => {
          console.log(res)
          this.institute = res.data.data
        }).catch((err) => {
          console.log(err)
        })

      }
    },
    components: {
      ListView
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .institute
    position fixed
    width 100%
    top 94px
    bottom 58px



</style>
