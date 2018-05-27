<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapMutations} from 'vuex';
  export default{
    created()
    {
      this.check()
    },
    methods: {
      check(){
        this.$http.post('http://www.zerotop.top/edu-web/account/user/check', {})
          .then((res) => {
            if (res.data.errno === 1) {
              console.log(res.data.msg)
            }
            else {
              console.log(res.data.data)
              if (res.data.data.user.orgCode !== '' &&
                res.data.data.user.staffNum !== '' &&
                res.data.data.user.roleName === "student") {
                this.setAuth({
                  IsLogin: 2
                })
                this.setUser({
                  user: res.data.data.user,
                  myCourse: res.data.data.usercourse,
                  mySchool: res.data.data.school,
                  student: res.data.data.student
                })
                this.setInstitute(res.data.data.school);
                this.$router.push('/main')
              } else if (res.data.data.user.roleName === "user") {
                this.setAuth({
                  IsLogin: 1
                })
                this.setUser({
                  user: res.data.data.user,
                  myCourse: res.data.data.usercourse,
                })
                this.$router.push('/main')
              } else {
                this.setAuth({
                  IsLogin: 0
                })
              }
            }
          }).catch((error) => {
          console.log('error----' + error)
        })

      },

      ...mapMutations({
        setAuth: 'SET_AUTH',
        setUser: 'SET_USER',
        setInstitute: 'SET_INSTITUTE',
      })
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "assets/icon-font/iconfont.css"
  @import "common/stylus/variable"

  #app
    color: $color-theme
    height 100%

</style>
