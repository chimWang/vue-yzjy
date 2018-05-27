import Vue from 'vue'
import state from '../store/state'
import Router from 'vue-router'
import Courses from 'components/system/courses/courses.vue'
import Information from 'components/system/information/information.vue'
import Institute from 'components/system/institute/institute.vue'
import companyDetail from 'components/system/institute-detail/institute-detail.vue'
import Teacher from 'components/system/famous-teacher/teacher.vue'
import Login from  'components/system/login/login.vue'
import Main from 'components/system/main/main.vue'
import SchoolInfo from 'components/system/school-info/school-info.vue'
import Announcement from  'components/system/announcement/announcement.vue'
import homePage from 'student/homePage/homePage'
import Task from 'student/task/task'
import Personal from 'student/personal/personal'
import goToLogin from 'system/login/goToLogin'
import goToBind from 'system/login/goToBind'
import Exchange from 'system/exchange/exchange'
import Binding from 'system/binding/binding'
import Comment from 'system/exchange/comment'
import myCourse from 'student/myCourse/myCourse'
import OpenCourse from 'student/myCourse/openCourse'
import schoolCourse from 'student/myCourse/schoolCourse'
import courseDetail from 'student/myCourse/courseDetail'
import detailDesc from 'student/myCourse/detailDesc'
import courseExchange from 'student/myCourse/courseExchange'
import courseStudy from  'student/myCourse/courseStudy'
import courseInfo from 'student/myCourse/courseInfo'
import editInfo from 'student/personal/editInfo'
import Settings from 'student/personal/settings'
import courseVideo from 'student/myCourse/courseVideo'
import Notes from 'student/notes/notes'
import CourseMsg from 'student/courseMsg/courseMsg'
import Download from 'student/download/download'
import ScoreInquiry from 'student/scoreInquiry/scoreInquiry'
import WrongAnalysis from 'student/wrongAnalysis/wrongAnalysis'
import Exercise from 'student/exercise/exercise'
import MyFriends from 'student/personal/myFriends'
import Question from 'student/myCourse/question'
import exerciseDetail from 'student/exercise/exerciseDetail'
import Capacity from 'student/capacity/capacity'
import myMessage from 'student/personal/myMessage'
import examDetail from 'student/myCourse/examDetail'
import testPaper from 'student/myCourse/testPaper'
import Collection from 'student/personal/collection'
import modifyPassword from 'system/login/modifyPassword'
import moreLive from 'system/courses/moreLive'
import moreCourse from 'system/courses/moreCourse'
Vue.use(Router)

const newRouter = new Router({
  routes: [
    {
      name: 'home',
      path: '/',
      redirect: '/main'
    },
    {
      path: '/main',
      component: Main,
      children: [
        {
          path: '/',
          component: Courses,
          children: [
            {
              name: 'moreCourse',
              path: '/moreCourse',
              component: moreCourse
            },
            {
              name: 'moreLive',
              path: '/moreLive',
              component: moreLive
            },
          ]
        },

        {
          path: '/information',
          component: Information
        },
        {
          name: 'famoueTeacher',
          path: '/famous-teacher',
          component: Teacher
        },
        {
          name: 'institute',
          path: '/institute',
          component: Institute,
          children: [
            {
              path: '/institute/:id',
              component: companyDetail,
              children: [
                {
                  name: 'binding',
                  path: '/binding',
                  component: Binding
                },
                {
                  path: '/',
                  redirect: '/schoolInfo'
                },
                {
                  path: '/schoolInfo',
                  component: SchoolInfo
                },
                {
                  path: '/aboutSchool',
                  component: SchoolInfo
                },
                {
                  path: '/announcement',
                  component: Announcement
                },
                {
                  path: '/friends',
                  component: Announcement
                },

              ]
            },

          ]
        },
      ]
    },
    {
      name: 'homePage',
      path: '/homePage',
      component: homePage,
      children: [
        {
          path: '/capacity',
          component: Capacity
        },
        {
          path: '/notes',
          component: Notes
        },
        {
          path: '/courseMsg',
          component: CourseMsg
        },
        {
          path: '/download',
          component: Download
        },
        {
          path: '/scoreInquiry',
          component: ScoreInquiry
        },
        {
          path: '/WrongAnalysis',
          component: WrongAnalysis
        },
        {
          path: '/myCourse',
          component: myCourse,
          children: [
            {
              path: '/',
              redirect: '/openCourse'
            },
            {
              name: 'schoolCourse',
              path: '/schoolCourse',
              component: schoolCourse
            },
            {
              name: 'openCourse',
              path: '/openCourse',
              component: OpenCourse,
              children: [
                {
                  path: '/courseDetail',
                  component: courseDetail,
                  children: [
                    {
                      path: '/',
                      redirect: '/detailDesc'
                    },
                    {
                      name: 'detailDesc',
                      path: '/detailDesc',
                      component: detailDesc
                    },
                    {
                      name: 'courseExchange',
                      path: '/courseExchange',
                      component: courseExchange,
                    },

                    {
                      name: 'courseStudy',
                      path: '/courseStudy',
                      component: courseStudy,
                      children: [
                        {
                          name: 'course-video',
                          path: '/course-video',
                          component: courseVideo
                        },
                        {

                          name: 'examDetail',
                          path: '/examDetail',
                          component: examDetail,
                          children: [
                            {
                              name: 'testPaper',
                              path: '/testPaper',
                              component: testPaper
                            }
                          ]

                        },
                        {
                          name: 'show-info',
                          path: '/show-info',
                          component: courseInfo
                        },
                        {
                          name: 'question',
                          path: '/question',
                          component: Question,
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          path: '/task',
          component: Task,
          children: []
        },
        {
          path: '/exercise',
          component: Exercise,
          children: [
            {
              name: 'exerciseDetail',
              path: '/exerciseDetail',
              component: exerciseDetail
            }
          ]
        },
      ]
    },
    {
      name: 'exchange',
      path: '/exchange',
      component: Exchange,
      children: [
        {
          name: 'comment',
          path: '/comment/:id',
          component: Comment,
        },
        {
          name: 'goToLogin',
          path: '/goToLogin',
          component: goToLogin
        },
        {
          name: 'goToBind',
          path: '/goToBind',
          component: goToBind
        },
      ]
    },
    {
      name: 'personal',
      path: '/personal',
      component: Personal,
      children: [
        {
          path: '/collection',
          component: Collection
        },
        {
          path: '/editInfo',
          component: editInfo
        },
        {
          path: '/settings',
          component: Settings
        },
        {
          path: '/myFriends',
          component: MyFriends
        },
        {
          name: 'login',
          path: '/login',
          component: Login,
          children: [
            {
              path: '/modifyPassword',
              component: modifyPassword
            }
          ]
        },
        {
          path: '/myMessage',
          component: myMessage
        },
      ]
    },


  ]
})

newRouter.beforeEach(function (to, from, next) {  //导航守卫
  const nextRoute = ['homePage', 'goToLogin', 'goToBind', 'exchange', 'personal', 'login', 'home']
  const auth = state.auth;

  if (nextRoute.indexOf(to.name) >= 0) {
    //未登录
    if (auth.IsLogin === 0) {
      next();
      if (to.name === 'homePage' || to.name === 'exchange') {
        newRouter.push({name: 'goToLogin'})
      } else if (to.name === 'personal') {
        newRouter.push({name: 'login'})
      }
    } else if (auth.IsLogin === 1) {
      next();
      if (to.name === 'exchange') {
        newRouter.push({name: 'goToBind'})
      }
    } else if (auth.IsLogin === 2) {
      next();
    }
  }
  //已登录的情况再去登录页，跳转至首页
  // if (to.name === 'login') {
  //   if (auth.IsLogin === 1) {
  //     newRouter.push({name: 'home'});
  //   }
  // }
  next();
})

export default newRouter
