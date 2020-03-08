<template>
  <div class="search">
    <div class="head">
      <div>
        <img
          src="http://nos.netease.com/mailpub/hxm/yanxuan-wap/p/20150730/style/img/icon-normal/search2-2fb94833aa.png"
          alt
        />
        <input
          type="text"
          confirm-type="search"
          focus="true"
          v-model="words"
          @focus="inputFocus"
          @input="tipsearch"
          @confirm="searchWords"
          placeholder="商品搜索"
        />
        <img
          @click="clearInput"
          class="del"
          src="http://nos.netease.com/mailpub/hxm/yanxuan-wap/p/20150730/style/img/icon-normal/clearIpt-f71b83e3c2.png"
          alt
        />
      </div>
      <div @click="cancel">取消</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@import  "./style";
</style>