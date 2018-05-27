<template>
  <div class="info">
    <m-header :title="title" :iconBack="true" :isTitle="true" :search="false"></m-header>
    <div v-if="isLogin===2">
      <ul class="base-info">
        <li class="base-info-first">头像<img :src="userInfo.avatar" width="50" height="50"/></li>
        <li>性别<span>{{userInfo.sex}}</span></li>
        <li>邮箱<span>{{userInfo.email}}</span></li>
        <li>手机号<span>{{userInfo.phonenum}}</span></li>
        <li>账号安全<span></span></li>
      </ul>
      <ul class="base-info">
        <li>我的校园<span>{{school}}</span></li>
        <li>姓名<span>{{student.realName}}</span></li>
        <li>班级信息<span></span></li>
        <li>学生信息<span>{{userInfo.description}}</span></li>
      </ul>
    </div>
    <div v-if="isLogin===1">
      <ul class="base-info">
        <li class="base-info-first">头像<img src="./login-icon.png" width="50" height="50"/></li>
        <li>性别<span>{{userInfo.sex}}</span></li>
        <li>邮箱<span>{{userInfo.email}}</span></li>
        <li>手机号<span>{{userInfo.phonenum}}</span></li>
        <li>账号安全<span></span></li>
      </ul>
      <ul class="base-info">
        <li>我的校园<span>未绑定</span></li>
        <li>姓名<span>未绑定</span></li>
        <li>班级信息<span>未绑定</span></li>
        <li>学生信息<span>未绑定</span></li>
      </ul>
    </div>
    <el-button type="danger" @click="logout">退出登录</el-button>
  </div>
</template>

<script type="text/ecmascript-6">
  import MHeader from 'base/m-header/m-header'
  import {mapMutations} from 'vuex'
  import {mapGetters} from 'vuex'
  export default{
    data(){
      return {
        title: '个人信息'
      }
    },
    components: {
      MHeader
    },
    computed: {
      isLogin(){
        return this.auth.IsLogin
      },
      student(){
        return this.user.student
      },
      userInfo(){
        return this.user.user
      },
      school(){
        return this.user.mySchool.orgName
      },
      ...mapGetters([
        'user',
        'auth'
      ])
    },
    methods: {
      logout(){
        this.$http.post('http://www.zerotop.top/edu-web/account/logout', {}).then((res) => {
          this.setAuth({
            IsLogin: 0
          })
          this.setUser({
            user: {}
          })
          this.$router.push('/personal')
        }).catch((err) => {
          console.log(err)
        })
      },
      ...mapMutations({
        setAuth: 'SET_AUTH',
        setUser: 'SET_USER'
      })
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .info
    position absolute
    top 0
    bottom 0
    font-size smaller
    width 100%
    background-color #f0f0f0
    .base-info
      padding 0
      background-color #fff
      list-style none
      .base-info-first
        height 50px
        line-height 50px
      li
        padding 13px
        border-bottom 1px solid #ccc
        img
          float right
        span
          float right
          color #666
    .el-button
      width 80%
      margin-top 10px
      margin-left 10%
</style>
