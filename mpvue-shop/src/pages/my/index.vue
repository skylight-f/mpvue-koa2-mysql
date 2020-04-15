<template>
  <div class="my">
    <div class="myinfo">
      <img :src="avator" alt />
      <div>
        <p>{{userInfo.nickName}}</p>
        <p v-if="userInfo.nickName">微信用户</p>
        <p v-else>点击登录</p>
      </div>
    </div>
    <div class="iconlist">
      <div @click="goTo(item.url)" v-for="(item, index) in listData" :key="index">
        <span class="iconfont" :class="item.icon"></span>
        <span>{{item.title}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { get, login, toLogin } from '../../utils'
export default {
  data() {
    return {
      listData: [
        {
          title: "我的订单",
          icon: "icon-unie64a",
          url: ""
        },
        {
          title: "优惠券",
          icon: "icon-youhuiquan",
          url: ""
        },
        {
          title: "我的足迹",
          icon: "icon-zuji",
          url: ""
        },
        {
          title: "我的收藏",
          icon: "icon-shoucang",
          url: "/pages/collectlist/main"
        },
        {
          title: "地址管理",
          icon: "icon-dizhiguanli",
          url: "/pages/address/main"
        },
        {
          title: "联系客服",
          icon: "icon-lianxikefu",
          url: ""
        },
        {
          title: "帮助中心",
          icon: "icon-bangzhuzhongxin",
          url: ""
        },
        {
          title: "意见反馈",
          icon: "icon-yijianfankui",
          url: "/pages/feedback/main"
        }
      ],
      avator: 'http://yanxuan.nosdn.127.net/8945ae63d940cc42406c3f67019c5cb6.png',
      allcheck: false,
      userInfo: {},
      Listids: []
    };
  },
  onShow () {
    if (login()) {
      this.userInfo = login()
      console.log(this.userInfo)
      this.avator = this.userInfo.avatarUrl
    }
  },
  methods: {
    goTo (url) {
      console.log(123)
      wx.navigateTo({
        url: url
      });
        
    }
  }
};
</script>

<style lang="less" scoped>
.my {
  .myinfo {
    width: 100%;
    height: 280rpx;
    display: flex;
    align-items: center;
    background: #333;
    padding: 0 30rpx;
    box-sizing: border-box;
    img {
      height: 148rpx;
      width: 148rpx;
      border-radius: 50%
    }
    div {
      margin-left: 30rpx;
      p {
        color: #fff;
        font-size: 30rpx;
        margin-bottom: 10rpx
      }
      p:nth-child(2) {
        font-size: 28rpx;
      }
    }
  }
  .iconlist {
    display: flex;
    align-items: center;
    background: #fff;
    flex-wrap: wrap;
    div {
      width: 33.33%;
      padding: 50rpx 0;
      text-align: center;
      border-right: 1rpx solid rgba(0, 0, 0, .15);
      border-bottom: 1rpx solid rgba(0, 0, 0, .15);
      box-sizing: border-box;
      span {
        display: block;
      }
      span:nth-child(1) {
        margin-bottom: 10rpx;
      }
    }
    div:nth-child(3n+3) {
      border-right: none;
    }
    div:nth-last-child(1) {
      border-bottom: none;
    }
    div:nth-last-child(2) {
      border-bottom: none;
    }
  }
}
</style>