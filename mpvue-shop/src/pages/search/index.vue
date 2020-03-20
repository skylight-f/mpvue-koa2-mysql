<template>
  <div class="search">
    <div class="head">
      <div>
        <img src="http://nos.netease.com/mailpub/hxm/yanxuan-wap/p/20150730/style/img/icon-normal/search2-2fb94833aa.png"/>
        <input type="text" confirm-type="search" focus="true" v-model="words"  @focus="inputFocus" 
         @input="tipsearch" @confirm="searchWords" placeholder="商品搜索" />
        <img @click="clearInput" class="del" src="http://nos.netease.com/mailpub/hxm/yanxuan-wap/p/20150730/style/img/icon-normal/clearIpt-f71b83e3c2.png" />
      </div>
      <div @click="cancel">取消</div>
    </div>
    <div class="searchtips" v-if="words">
      <div>
        牙刷
      </div>
      <div class="nogoods">没有您搜索的宝贝哦!</div>
    </div>
    <div class="history">
      <div class="t">
        <div>历史记录</div>
        <div @click="clearHistory"></div>
      </div>
      <div class="cont">
        <div>日式</div>
      </div>
    </div>
    <div class="history hotsearch">
      <div class="t">
        <div>热门搜索</div>
      </div>
      <div class="cont">
        <div class="active">日式</div>
        <div>fd</div>
      </div>
    </div>
  </div>
</template>

<script>
import {get,post} from '../../utils'
export default {
  data () {
    return {
      words: ''
    }
  },
  methods: {
    clearInput() {
      this.words= ''
    },
    cancel() {},
    clearHistory() {},
    tipsearch() {},
    async searchWords(e) {
      console.log(e)
      let value =e.target.dataset.value
      this.words = value || this.words
      const  data = await post('/search/addhistoryaction',{
        openId: this.words,
        keyword: value || this.words
      }) 
      console.log(data)
    }
  }
};
</script>

<style lang="less" scoped>
@import "./style";
</style>