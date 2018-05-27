<template>
  <div class="institute">
    <m-header :title="title" :iconBack="true" :isTitle="true" :search="false"></m-header>
    <div class="student-login">
      <h3>欢迎进入{{this.$route.params.title}}：</h3>
      <el-form :model="student">
        <el-form-item>
          <el-input placeholder="请输入学号" v-model="student.staffNum"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input placeholder="请输入真实姓名" v-model="student.realName"></el-input>
        </el-form-item>
        <el-button @click="bind">确认绑定</el-button>
      </el-form>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapMutations} from 'vuex'
  import MHeader from 'base/m-header/m-header'
  export default{
    created(){
      this.getInstitute()
    },
    data(){
      return {
        title: '绑定院校',
        student: {
          staffNum: '',
          realName: ''
        },
        school: []
      }
    },
    components: {
      MHeader
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
      bind(){
          console.log('-----------bind----------------')

        this.$http.post('http://www.zerotop.top/edu-web/user/activate/user', {
          orgCode: this.$route.params.orgCode,
          staffNum: this.student.staffNum,
          realName: this.student.realName
        })
          .then((res) => {
            if (res.data.errno === 1) {
              console.log(res.data.msg)
            } else {
              console.log(res.data)
              console.log('-----------bind----------------')
              this.$http.post('http://www.zerotop.top/edu-web/account/user/check', {
              }).then((res)=>{
                  if(res.data.errno === 1){
                      console.log(res.data.msg)
                  }else{
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

              }).catch((error)=>{
                  console.log(error)
              })
            }

          }).catch((error) => {
          console.log('-----------error----------------')
          console.log(error)
        })

      },
      ...mapMutations({
        setAuth: 'SET_AUTH',
        setUser: 'SET_USER',
        setInstitute: 'SET_INSTITUTE'
      }),

    }

  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .institute
    width 100%
    position: fixed
    z-index: 10
    top: 0
    left: 0
    bottom: 0
    right: 0
    background: #fff
    .student-login
      width 75%
      margin 35% auto 0
      padding 20px
      border 1px solid #ccc
      border-radius 5px
      .el-button
        width 100%
        background-color #fff000
</style>
