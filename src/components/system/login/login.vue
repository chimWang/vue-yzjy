<template>
  <div class="login">
    <div class="login-bg">
      <img src="./login-icon.png" width="100" height="100" @click="login"/>
    </div>
    <el-tabs v-model="activeName" type="border-card">
      <el-tab-pane name="first" label="手机号登录">
        <el-form :model="user">
          <el-form-item>
            <el-input v-model="user.phonenum" size="small" placeholder="请输入您的手机号码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="user.password" size="small" placeholder="请输入密码" type="password"></el-input>
          </el-form-item>
          <el-button @click="login">登录</el-button>
        </el-form>
      </el-tab-pane>
      <el-tab-pane name="second" label="学号登录">
        <el-form :model="student">
          <el-form-item>
            <el-select v-model="student.orgCode" placeholder="所在院校" size="mini">
              <el-option
                v-for="item in school"
                :key="item.orgCode"
                :label="item.orgName"
                :value="item.orgCode">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-input v-model="student.staffNum" size="mini" placeholder="请输入学生号"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="student.password" size="mini" placeholder="请输入密码" type="password"></el-input>
          </el-form-item>
          <el-button @click="studentLogin">登录</el-button>
        </el-form>
      </el-tab-pane>
      <el-tab-pane name="third" label="注册" v-if="registerShow">
        <el-form :model="newUser">
          <el-form-item>
            <el-input v-model="newUser.phonenum" size="small" placeholder="请输入您的手机号码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="newUser.password" size="small" placeholder="请输入密码" type="password"></el-input>
          </el-form-item>
          <el-button @click="registerUser">注册</el-button>
        </el-form>
      </el-tab-pane>
    </el-tabs>
    <div class="other">
      <a @click="register">注册账号</a> |
      <router-link to="/modifyPassword">忘记密码</router-link>
    </div>
    <router-view/>
  </div>

</template>

<script type="text/ecmascript-6">
  import {mapMutations} from 'vuex'
  export default{
    created(){
      this.getInstitute()
    },
    data(){
      return {
        school: [],
        activeName: 'first',
        studentShow: false,
        user: {
          phonenum: '',
          password: '',

        },
        student: {
          orgCode: '',
          staffNum: '',
          password: ''
        },
        newUser: {
          phonenum: '',
          password: ''
        },
        registerShow: false
      }

    },
    methods: {
      getInstitute(){
        this.$http.get('http://www.zerotop.top/edu-web/common/list/school').then((res) => {
          console.log(res)
          this.school = res.data.data
        }).catch((err) => {
          console.log(err)
        })

      },
      login(){
        this.$http.post('http://www.zerotop.top/edu-web/account/user/login', {
          phonenum: this.user.phonenum,
          password: this.user.password
        })
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
                this.setInstitute({
                  institute: res.data.data.school
                })
                this.$router.push('/personal')
              } else if (res.data.data.user.roleName === "user") {
                this.setAuth({
                  IsLogin: 1
                })
                this.setUser({
                  user: res.data.data.user,
                  myCourse: res.data.data.usercourse,
                })
                this.$router.push('/personal')
              } else {
                this.setAuth({
                  IsLogin: 0
                })
              }
            }
          }).catch((error) => {
          console.log(error)
        })
      },

      ...mapMutations({
        setAuth: 'SET_AUTH',
        setUser: 'SET_USER',
        setInstitute: 'SET_INSTITUTE'
      }),
      studentLogin(){
        this.$http.post('http://www.zerotop.top/edu-web/account/user/login', {
          orgCode: this.student.orgCode,
          staffNum: this.student.staffNum,
          password: this.student.password
        })
          .then((res) => {
            if (res.data.errno === 1) {
              console.log(res.data.msg)
            } else {
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
                this.setInstitute({
                  institute: res.data.data.school
                })
                this.$router.push('/personal')
              }
            }

          }).catch((error) => {
          console.log(error)
          this.$notify({
            title: '登录失败',
            message: '学号或密码不正确',
            type: 'error',
            position: 'bottom-right',
            showClose: true,
            customClass: 'notify',
          });
        })

      },
      register(){
        this.registerShow = true
        this.activeName = 'third'
      },
      registerUser(){
        console.log(this.newUser.phonenum)
        console.log(this.newUser.password)
        this.$http.post('http://www.zerotop.top/edu-web/account/user/register', {
          phonenum: this.newUser.phonenum,
          password: this.newUser.password
        }).then((res) => {
          console.log(res)
          this.$notify({
            title: '成功',
            message: '注册成功,前往登录',
            type: 'success',
            position: 'top-right',
            showClose: true,
            customClass: 'notify',
          });
          this.newUser.phonenum = ''
          this.newUser.password = ''
        }).catch((err) => {
          console.log(err)
        })
      }


    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .login
    position fixed
    top 0
    bottom 50px
    width 100%
    background: #fff
    .login-bg
      height 150px
      img
        position absolute
        top 3%
        left 40%
    .el-tabs
      width 80%
      margin 20px auto 18px
      .el-button
        width 100%
        background-color #fff000
    .other
      width 40%
      margin 0 auto
      a
        color #000
        text-decoration none

</style>
