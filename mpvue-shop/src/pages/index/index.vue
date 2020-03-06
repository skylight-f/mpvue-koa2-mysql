<template>
  <div class="index">
    <!-- 头部的搜索 -->
    <div class="search">
      <div @click="toMappage">{{cityName}}</div>
      <div>
        <input type="text" placeholder="搜索商品" />
        <span class="icon"></span>
      </div>
    </div>
    <div class="swiper">
      <swiper
        class="swiper-container"
        indicator-dots="true"
        autoplay="true"
        interval="3000"
        circular="true"
        duration="500"
      >
        <block v-for="(item,index) in banner" :key="index">
          <swiper-item class="swiper-item">
            <image class="slide-image" :src="item.image_url" />
          </swiper-item>
        </block>
      </swiper>
    </div>
    <div class="channel">
      <div v-for="(item,index) in channel" :key="index" @click="categroyList(item.id)">
        <img :src="item.icon_url" alt />
        <p>{{item.name}}</p>
      </div>
    </div>
    <div class="brand">
      <div class="head">
        品牌制造商直供
      </div>
      <div class="content">
        <div v-for="(item,index) in brandList" :key="index" @click="branddetail(item.id)">
          <div>
            <p>{{item.name}}</p>
            <p>{{item.floor_price}}元起</p>
          </div>
          <img :src="item.list_pic_url" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import amapFile from "../../utils/amap-wx.js";
import { mapState, mapMutations } from "vuex";
import { get, post } from "../../utils";
export default {
  data() {
    return {
      banner: [],
      channel: [],
      brandList: []
    };
  },
  computed: {
    ...mapState(["cityName"])
  },
  mounted() {
    this.getData();
    this.getCityName();
  },
  methods: {
    ...mapMutations(["update"]),
    toMappage() {
      //通过wx.getSetting 先查询一下用户是否授权 " scoped.record"
      let _this = this;
      wx.getSetting({
        success: res => {
          //如果没有同意授权，打开设置
          if (!res.authSetting["scope.userLocation"]) {
            wx.openSetting({
              success: res => {
                //获取授权位置信息
                _this.getCityName();
              }
            });
          } else {
            wx.navigateTo({
              url: "/pages/mappage/main"
            });
          }
        },
        fail: err => {
          console.log(err);
        }
      });
    },
    getCityName() {
      let _this = this;
      var myAmapFun = new amapFile.AMapWX({
        key: "8e4d112795eb693abe85db1b2b2a3e1c"
      });
      myAmapFun.getRegeo({
        success: function(data) {
          //成功回调
          console.log(data, "chenggong");
          _this.update({ cityname: data[0].desc });
        },
        fail: function(info) {
          //失败回调
          console.log(info);
          // _this.cityName = "北京";
          _this.update({ cityname: "北京" });
        }
      });
    },
    async getData() {
      //封装的接口请求在 utils.js
      const data = await get("/index/index"); // http://localhost:5757/lm/index/index
      console.log(data);
      this.banner = data.banner;
      this.channel = data.channel;
      this.brandList = data.brandList;
    },
    categroyList(id) {
      wx.navigateTo({
        url: '/pages/categroyList/main?id='+ id
      })
    },
    branddetail(id) {
      wx.navigateTo({
        url: '/pages/branddetail/main?id='+ id
      })
    }
  }
};
</script>

<style lang="less" scoped>
@import "./style.less";
</style>