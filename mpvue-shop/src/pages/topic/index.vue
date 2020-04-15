<template>
  <div class="topic">
    <div class="list">
      <li @click="topicDetail(item.id)" v-for="(item,index) in topicList" :key="index">
        <div class="t-img"><img :src="item.scene_pic_url" alt=""></div>
        <div class="info">
          <p>{{item.title}}</p>
          <p>{{item.subtitle}}</p>
          <p>{{item.price_info}}元起</p>
        </div>
      </li>
    </div>
  </div>
</template>

<script>
import {get} from '../../utils'
export default {
  data () {
    return {
      page: 1,
      topicList: [],
      total: ''
    }
  },
  onPullDownRefresh() {
    this.page =1
    this.getListData()
    wx.stopPullDownRefresh()
  },
  onReachBottom () {
    this.page += 1
    if (this.page > this.total) {
      return false
    }
    this.getListData()
  },
  mounted () {
    this.getListData(true)
  },
  methods: {
    async getListData (first) {
      const data = await get('/topic/listaction',{
        page: this.page
      })
      console.log(data)
      this.total = data.total
      if (first) {
        this.topicList = data.data
      }
       else {
         this.topicList= this.topicList.concat(data.data)
       } 
    },
    topicDetail (id) {
      wx.navigateTo({
        url: '/pages/topicdetail/main?id=' + id
      })
    }
  }
}
</script>

<style lang="less" scoped>
@import './style.less';
</style>