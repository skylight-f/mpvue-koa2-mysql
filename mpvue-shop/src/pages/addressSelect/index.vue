<template>
  <div class="address">
    <scroll-view scroll-y="true" class="addcont" style="height: 100%">
      <div class="item">
        <div class="list">
          <div class="addresslist">
            <div>
              <span>name</span>
              <div class="moren">默认</div>
            </div>
            <div class="info">
              <p>moible</p>
              <p>address</p>
            </div>
            <div @click="toDetail"></div>
          </div>
        </div>
      </div>
    </scroll-view>
    <div class="bottom">
      <div @click="wxaddress(1)">+新建地址</div>
      <div @click="wxaddress">一键导入微信地址</div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
@import './style.less';
</style>