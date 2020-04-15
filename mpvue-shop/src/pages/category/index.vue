<template>
  <div class="category">
    <div class="search" @click="tosearch">
      <div class="ser">
        <span class="icon"></span>
        <span>商品搜索，共239款好物</span>
      </div>
    </div>
    <div class="content" >
      <scroll-view class="left" scroll-y="true">
        <div class="iconText" @click="selectItem(item.id,index)" 
        v-for="(item,index) in listData" :key="index" 
        :class="[index == nowIndex ? 'active' :'']">
        {{item.name}}
        </div>
      </scroll-view>
      <scroll-view class="right" scroll-y="true">
        <div class="banner">
          <img :src="detailData.banner_url" alt="">
        </div>
        <div class="title">
          <span>-</span>
          <span>{{detailData.name}}分类</span>
          <span>-</span>
        </div>
        <div class="bottom">
          <div class="item" @click="categoryList(item.id)" v-for="(item,index) in detailData.subList" :key="index">
            <img :src="item.wap_banner_url" alt="">
            <span>{{item.name}}</span>
          </div>
        </div>
      </scroll-view>
    </div>
  </div>
</template>

<script>
import {get} from '../../utils'
export default {
  data() {
    return {
      listData: [],
      nowIndex: 0,
      id: '1005000',
      detailData: {}
    }
  },
  mounted () {
    this.getListData()
    this.selectItem(this.id,this.nowIndex)
  },
  methods: {
    tosearch() {
      wx.navigateTo({
        url: '/pages/search/main'
      })
    },
    async getListData() {
      const data = await get('/category/indexaction')
      this.listData = data.categoryList
    },
    async selectItem (id,index) {
      //获取对应分类商品
      this.nowIndex = index
      const data = await get('/category/currentaction',{
        id: id
      })
      // console.log(data);
      this.detailData = data.data.currentOne
    },
    categoryList (id) {
      wx.navigateTo({
        url: '/pages/categorylist/main?id=' + id
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .category {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    .search {
      height: 88rpx;
      // width: 100%;
      padding: 0 30rpx;
      background: #fff;
      display: flex;
      align-items: center;
      border-bottom: 1rpx solid #ededed;

      .ser {
        width: 690rpx;
        height: 56rpx;
        background: #ededed;
        border-radius: 8rpx;
        display: flex;
        align-items: center;
        justify-content: center;

        span {
          display: inline-block;
        }

        .icon {
          background: url('http://yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png') center no-repeat;
          background-size: 100%;
          width: 28rpx;
          height: 28rpx;
          margin-right: 10rpx;
        }
      }
    }

    .content {
      flex: 1;
      background: #fff;
      display: flex;

      .left {
        width: 162rpx;
        height: 100%;
        text-align: center;

        .iconText {
          text-align: center;
          line-height: 90rpx;
          width: 162rpx;
          height: 90rpx;
          color: #333;
          font-size: 28rpx;
          border-left: 6rpx solid #fff;
        }

        .active {
          color: #ab2b2b;
          font-size: 36rpx;
          border-left: 6rpx solid #ab2b2b;
        }
      }

      .right {
        flex: 1;
        border-left: 1rpx solid #fafafa;
        flex: 1;
        height: 100%;
        padding: 0 30rpx 0 30rpx;

        .banner {
          width: 100%;
          height: 222rpx;
          margin-top: 20rpx;

          img {
            width: 100%;
            height: 100%;
          }
        }

        .title {
          text-align: center;
          padding: 50rpx 0;

          span:nth-child(2) {
            font-size: 24rpx;
            color: #333;
            padding: 0 10rpx;
          }

          span:nth-child(2n + 1) {
            color: #999;
          }
        }

        .bottom {
          display: flex; // justify-content: space-between;
          flex-wrap: wrap;

          .item {
            width: 33.33%;
            text-align: center;
            margin-bottom: 20rpx;

            img {
              height: 144rpx;
              width: 144rpx;
              display: block;
              margin: 0 auto;
            }
          }
        }
      }
    }
  }
</style>