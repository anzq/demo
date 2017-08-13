<template>
  <div>
    <div class="searchHeader">
      <router-link to="/">
        <svg viewBox="0 0 20 32" id="arrow" width="100%" height="100%"><path d="M16.552 5.633l-2.044-2.044L2.243 15.854l12.265 12.557 2.044-2.044L6.331 15.854z"></path></svg>
      </router-link>
      <input @keyup.enter="kkeyup($event)" type="search" autofocus="autofocus" placeholder="请输入商品名称" class="headerInput" />
    </div>
    <section v-if="history_data.length>0">
      <header class="history-KdKLE_1">
        <span>历史搜索</span>
        <i @click="del" class="history-3O8OW_1">
          <svg viewBox="0 0 512 512" id="bin" width="100%" height="100%"><path d="M64 160v320c0 17.6 14.4 32 32 32h288c17.6 0 32-14.4 32-32V160H64zm96 288h-32V224h32v224zm64 0h-32V224h32v224zm64 0h-32V224h32v224zm64 0h-32V224h32v224zM424 64H320V24c0-13.2-10.8-24-24-24H184c-13.2 0-24 10.8-24 24v40H56c-13.2 0-24 10.8-24 24v40h416V88c0-13.2-10.8-24-24-24zm-136 0h-96V32.401h96V64z"></path></svg>
        </i>
      </header>
      <section class="history-3kzV5_1">
        <span @click="history(index)" class="history-1YKH4_1" :key="index" v-for="(item, index) in history_data">{{ item }}</span>
      </section>
    </section>
    <section class="history-2IxHX_1">
      <header class="history-KdKLE_1">热门搜索</header>
      <section class="history-3kzV5_1">
        <span @click="search(index)" class="history-1YKH4_1" :key="index" v-for="(item, index) in hot_search">{{ item.word }}</span>
      </section>
    </section>
  </div>
</template>
<script>
  import $ from 'jquery'
  import axios from 'axios'
  export default {
    name: 'search',
    data () {
      return {
        // 热搜数据
        hot_search: [],
        // 搜索记录
        search_history: [],
        // 历史记录
        history_data: []
      }
    },
    mounted () {
      $('html, body').css({'background': '#fff'})
      var oSelf = this
      if (localStorage.getItem('position') && localStorage.getItem('geohash')) {
        console.log(JSON.parse(localStorage.getItem('position')))
        // 请求热搜数据
        axios.get('http://localhost:3000/search', {
          params: {
            geohash: JSON.parse(localStorage.getItem('geohash')),
            latitude: JSON.parse(localStorage.getItem('position')).latitude,
            longitude: JSON.parse(localStorage.getItem('position')).longitude
          }
        }).then(function (res) {
          if (res.status === 200 & res.statusText === 'OK') {
            console.log(res)
            oSelf.hot_search = res.data
          }
        }).catch(function (err) {
          console.log(err)
        })
      }
      // 如果有localStorage ，则显示历史记录
      if (localStorage.getItem('SEARCH_HISTORY')) {
        this.history_data = JSON.parse(localStorage.getItem('SEARCH_HISTORY'))
      }
    },
    methods: {
      // 输入要搜索的名词，监听enter键
      kkeyup (e) {
        var str = $('.headerInput').val()
        $('.headerInput').val('')
        this.getData(str)
      },
      // 点击热搜搜索
      search (index) {
        // console.log(this.hot_search[index].word)
        this.getData(this.hot_search[index].word)
      },
      // 点击历史记录搜索
      history (index) {
        // console.log(this.history_data[index])
        this.getData(this.history_data[index])
      },
      getData (data) {
        if (localStorage.getItem('SEARCH_HISTORY')) {
          // 如果localStorage存在，付给search_history
          this.search_history = JSON.parse(localStorage.getItem('SEARCH_HISTORY'))
          // 判断这次搜索的名词是否之前已经搜索过，如果没有，则添加到
          if (this.search_history.indexOf(data) === -1) {
            this.search_history.push(data)
          }
        } else {
          // localStorage不存在，直接将搜索名词添加到search_history
          this.search_history.push(data)
        }
        // 存到localStroage
        localStorage.setItem('SEARCH_HISTORY', JSON.stringify(this.search_history))
        // 将localStorage付给history_data
        this.history_data = JSON.parse(localStorage.getItem('SEARCH_HISTORY'))
      },
      // 删除记录
      del () {
        localStorage.removeItem('SEARCH_HISTORY')
        this.search_history = []
        this.history_data = []
      }
    }
  }

</script>

<style scoped lang="scss">
  @import '../../static/hotcss/px2rem.scss';
  input {
    outline: none;
    border: none;
  }
  h1,h2,h3,h4,h5,h6,p{
    font-weight: 400;
    font-size: px2rem(24);
  }
  // 搜索头部样式
  .searchHeader {
    background: #fff;
    display: flex;
    padding: px2rem(22);
    position: relative;
    //z-index: 101;
    svg {
      width: px2rem(70);
      height: px2rem(70);
      fill: #999;
      padding: px2rem(10);
      padding-left: 0;
    }
    .headerInput {
      flex-grow: 1;
      height: px2rem(70);
      border-radius: px2rem(30);
      background-color: #f8f8f8;
      padding: px2rem(13) px2rem(30);
      font-size: px2rem(30);
      color: #666;
    }
  }

  // 历史搜索样式
  section {
    .history-KdKLE_1 {
      display: flex;
      justify-content: space-between;
      font-size: px2rem(32);
      padding: px2rem(15) px2rem(25);
      color: #666;
      font-weight: 700;
      .history-3O8OW_1 {
        display: block;
        padding-top: px2rem(4);
        svg {
          height: px2rem(24);
          width: px2rem(24);
          color: #cecece;
          fill: currentColor;
        }
      }
    }
    .history-3kzV5_1 {
      padding: 0 px2rem(25) px2rem(25);
      .history-1YKH4_1 {
        display: inline-block;
        border-radius: px2rem(5);
        padding: px2rem(15) px2rem(20);
        font-size: px2rem(28);
        margin-right: px2rem(25);
        margin-top: px2rem(25);
        color: #666;
        background-color: #f7f7f7;
      }
    }
  }

  // 热门搜索
  .history-2IxHX_1 {
    margin-top: px2rem(30);
  }

</style>