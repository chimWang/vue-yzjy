<template>
  <div class="password">
    <m-header :title="title" :iconBack="true" :isTitle="true" :search="false"></m-header>
    <div class="modify-password">
      <el-form :model="password">
        <el-form-item>
          <el-input placeholder="请输入手机号" v-model="password.phonenum"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input placeholder="输入验证码" v-model="password.checkcode"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input placeholder="输入新密码" v-model="password.newpassword"></el-input>
        </el-form-item>
        <el-button @click="bind">确认修改</el-button>
      </el-form>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapMutations} from 'vuex'
  import MHeader from 'base/m-header/m-header'
  export default{
    data(){
      return {
        title: '忘记密码',
        password: {
          phonenum: '',
          checkcode: '',
          newpassword: ''
        }
      }
    },
    components: {
      MHeader
    },
    methods: {
      bind(){
        this.$http.post('http://www.zerotop.top/edu-web/user/activate/user', {
          orgCode: '10150',
          staffNum: this.student.staffNum,
          realName: this.student.realName
        })
          .then((res) => {
            if (res.data.errno === 1) {
              console.log(res.data.msg)
            } else {
              this.setAuth({
                IsLogin: 2
              })
              this.setUser({
                user: res.data.data.user
              })
              this.$router.push('/personal')
            }

          }).catch((error) => {
          console.log(error)
        })

      },
      ...mapMutations({
        setAuth: 'SET_AUTH',
        setUser: 'SET_USER'
      }),

    }

  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .password
    width 100%
    position: fixed
    z-index: 10
    top: 0
    left: 0
    bottom: 0
    right: 0
    background: #fff
    .modify-password
      width 75%
      margin 35% auto 0
      padding 20px
      border 1px solid #ccc
      border-radius 5px
      .el-button
        width 100%
        background-color #fff000
</style>
