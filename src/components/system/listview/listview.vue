<template>
  <scroll class="listview" :data="data">
    <ul class="detail">
      <li>
        <div class="name">名牌大学</div>
        <div class="icon">
          <div v-for="items in college.slice(0,4)">
            <img :src="items.orgImg" @click="selectItem(items)"/>
            <p>{{items.orgName}}</p>
          </div>
        </div>
      </li>
      <li>
        <div class="name">金牌中学</div>
        <div class="icon">
          <div v-for="items in middleSchool.slice(0,4)">
            <img :src="items.orgImg" @click="selectItem(items)"/>
            <p>{{items.orgName}}</p>
          </div>
        </div>
      </li>
      <li>
        <div class="name">知名小学</div>
        <div class="icon">
          <div v-for="items in primarySchool.slice(0,4)">
            <img :src="items.orgImg" @click="selectItem(items)"/>
            <p>{{items.orgName}}</p>
          </div>
        </div>
      </li>
      <li>
        <div class="name">培训机构</div>
        <div class="icon">
          <div v-for="items in organization.slice(0,4)">
            <img :src="items.orgImg" @click="selectItem(items)"/>
            <p>{{items.orgName}}</p>
          </div>
        </div>
      </li>
    </ul>
  </scroll>
</template>

<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll.vue'
  export default{
    data(){
      return {}
    },
    computed: {
      college(){
        let newAry = this.data.filter(function (item) {
            return item.type === 1
          }
        )
        return newAry
      },
      middleSchool(){
        let newAry = this.data.filter(function (item) {
            return item.type === 2
          }
        )
        return newAry
      },
      primarySchool(){
        let newAry = this.data.filter(function (item) {
            return item.type === 4
          }
        )
        return newAry
      },
      organization(){
        let newAry = this.data.filter(function (item) {
            return item.type === 0
          }
        )
        return newAry
      }
    },
    props: {
      data: {
        type: Array
      }
    }
    ,
    methods: {
      selectItem(institute)
      {
        this.$emit('select', institute)
      }
      ,
    }
    ,
    components: {
      Scroll
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .listview
    position relative
    width 100%
    height 100%
    overflow hidden
    .detail
      padding 0
      li
        list-style none
        .name
          border-left 30px solid #0d1e2e
          padding-left 10px
        .icon
          width 95%
          margin 10px auto
          text-align center
          div
            display inline-block
            width 20%
            height 100%
            margin-right 15px
            img
              width 100%
              height 100%
</style>
