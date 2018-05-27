<template>
  <div class="personal">
    <div class="personal-info" v-if="this.isLogin===1">
      <i class="el-icon-setting" @click="settings"></i>
      <div class="info" @click="editInfo">
        <div class="info-main">
          <div class="icon">
            <img :src="userInfo.avatar" width="80" height="80"/>
          </div>
          <div class="userInfo">
            <p>用户名：{{userInfo.username}}</p>
            <p>学号：未绑定</p>
            <h4>未绑定院校</h4>
          </div>
        </div>
      </div>
    </div>
    <div class="personal-info" v-if="this.isLogin===2">
      <i class="el-icon-setting" @click="settings"></i>
      <div class="info" @click="editInfo">
        <div class="info-main">
          <div class="icon">
            <img :src="userInfo.avatar" width="80" height="80"/>
          </div>
          <div class="userInfo">
            <p>用户名：{{userInfo.username}}</p>
            <p>学号：{{userInfo.staffNum}}</p>
            <h4>{{school}}</h4>
          </div>
        </div>
      </div>
    </div>
    <div class="personal-content">
      <router-link tag="div" class="tab-item" to="/collection">
        <img src="../personal/collection.png" width="30" height="30"/><span class="tab-link">我的收藏</span>
      </router-link>
      <router-link tag="div" class="tab-item" :to='{path:`/institute`}' v-if="this.isLogin===1">
        <img src="../personal/school.png" width="30" height="30"/><span class="tab-link">绑定校园</span>
      </router-link>
      <div class="tab-item" v-if="this.isLogin===2" @click="mySchool">
        <img src="../personal/school.png" width="30" height="30"/><span class="tab-link">我的校园</span>
      </div>
      <router-link tag="div" class="tab-item" to="/myMessage">
        <img src="../personal/msg.png" width="30" height="30"/><span class="tab-link">我的消息</span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/myFriends">
        <img src="../personal/friends.png" width="30" height="30"/><span class="tab-link">我的好友</span>
      </router-link>
    </div>
    <m-footer></m-footer>
    <router-view/>
  </div>
</template>

<script type="text/ecmascript-6">
  import MFooter from 'components/system/m-footer/m-footer'
  import {mapGetters} from 'vuex'
  import {mapMutations} from 'vuex'
  export default{
    data(){
      return {}
    },
    computed: {
      isLogin(){
        return this.auth.IsLogin
      },
      userInfo(){
        return this.user.user
      },
      school(){
        return this.user.mySchool.orgName
      },
      ...mapGetters([
        'auth',
        'user'
      ])
    },
    methods: {
      editInfo(){
        this.$router.push({
          path: '/editInfo'
        })
      },
      settings(){
        this.$router.push('/settings')
      },
      mySchool(){
        this.setInstitute(this.user.mySchool)
        this.$router.push(`/institute/${this.userInfo.orgCode}`)
      },
      ...mapMutations({
        setInstitute: 'SET_INSTITUTE',
      })
    },
    components: {
      MFooter
    },
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .personal
    background-color #f0f0f0
    position fixed
    width 100%
    height 100%
    overflow hidden
    .personal-info
      position relative
      height 160px
      background-color #000
      .el-icon-setting
        color #fff
        position fixed
        top 10px
        right 12px
        font-size large
      .info
        color #000
        width 260px
        height 150px
        position absolute
        top 50%
        left 50%
        margin-left -130px
        margin-top -75px
        background-image url("./info.png")
        background-size 100% 100%
        .info-main
          margin 38px 0 0 35px
          display flex
          p
            margin 8px 0 0 20px
            font-size small
          img
            border-radius 50%
          h4
            position absolute
            top 52%
            left 60%
          h4.school
            position absolute
            margin-left 60%
            margin-top -7%
    .personal-content
      width 100%
      margin-top 20px
      div
        height 30px
        line-height 30px
        background-color #fff
        margin-bottom 10px
        padding 10px 0 10px 30px
        .tab-link
          position absolute
          margin-left 20px


</style>
