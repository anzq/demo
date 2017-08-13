<template>
  <div class="app-wrapper" v-if="ulikeListtop.length > 0">
    <div class="nav-wrapper TouchBar-wrapper_3AxAZxu" style="text-align: center;">
      <ul class="TouchBar-list_1f4YgNb">
        <li class="nav-item " :class="index === tabzhi?'nav-current':''" :key="index" v-for="(item, index) in ulikeListtop" @click="tabFood({zhi:index, id:item.id})">
          <span>{{ item.name }}</span>
        </li>
      </ul>
    </div>
    <section class="SwitchTab-wrapper_1K5DMvd" ref="shoplist">
      <div class="tab-wrapper SwitchTab-transition_1naNOOT">
        <section class="tab-list-item HotFoodShop-2c6Ln" :key="index1" v-for="(item, index1) in ulikeFood" v-if="item.style === 1">
          <header class="HotFoodShop-2Qghj">
            <div class="HotFoodShop-1m_lq">
              <img :src="'https://fuss10.elemecdn.com/'+ item.restaurant.image_path +'?imageMogr/format/webp/thumbnail/!42x42r/gravity/Center/crop/42x42/'" alt="">
              <h3>{{ item.restaurant.name }}</h3>
            </div>
            <span class="HotFoodShop-2Za_M">¥{{ item.restaurant.piecewise_agent_fee.extra_fee }}起送 / {{ item.restaurant.piecewise_agent_fee.description }}</span>
          </header>
          <ul class="HotFoodShop-3fhg6">
            <li class="HotFoodItemC-3SnOf" v-for="(item1, index2) in item.foods">
              <img :src="'https://fuss10.elemecdn.com/'+ item1.image_hash +'?imageMogr/format/webp/thumbnail/!220x220r/gravity/Center/crop/220x220/'" alt="">
              <section class="HotFoodItemC-7MUFa">
                <h4 class="HotFoodItemC-6JlDH">{{ item1.name }}</h4>
                <span class="HotFoodItemC-g7gVL">
                  <i>¥</i>{{ item1.price }}
                </span>
                <router-link :to="'/detail?id='+item1.restaurant_id" class="HotFoodItemC-2tNvV">去看看</router-link> 
              </section>
            </li>
          </ul>
        </section>
      </div>
    </section>
  </div>
</template>

<script>
  import axios from 'axios'
  import { mapState, mapMutations } from 'vuex'
  export default {
    name: 'name',
    data () {
      return {
        ulikeListtop: [],
        ulikeFood: [],
        flange: false
      }
    },
    created () {
      //  获取localStorage中位置信息
      this.addoffset({offset: 0})
      this.addPosition(JSON.parse(localStorage.getItem('position')))
      // console.log(this.position)
    },
    mounted () {
      var that = this
      axios.get('http://localhost:3000/uliketop', {
        params: {
        }
      }).then(function (res) {
        if (res.status === 200 & res.statusText === 'OK') {
          that.ulikeListtop = res.data.tags
          that.flange = true
        }
      }).catch(function (err) {
        if (err) {
          console.log(err)
        }
      })
      axios.get('http://localhost:3000/ulike', {
        params: {
          id: that.tabId,
          offset: that.offset,
          latitude: that.position.latitude,
          longitude: that.position.longitude
        }
      }).then(function (res) {
        if (res.status === 200 & res.statusText === 'OK') {
          that.ulikeFood = res.data
          console.log(res.data)
          that.flange = true
          that.addoffset({offset: that.offset + 10})
        }
      }).catch(function (err) {
        if (err) {
          console.log(err)
        }
      })
      document.addEventListener('scroll', this.handleScroll)
    },
    methods: {
      handleScroll () {
        if ((document.body.scrollTop + document.documentElement.clientHeight + 200) > this.$refs.shoplist.offsetHeight && this.flange) {
          var that = this
          that.flange = false
          axios.get('http://localhost:3000/ulike', {
            params: {
              id: that.tabId,
              offset: that.offset,
              latitude: that.position.latitude,
              longitude: that.position.longitude
            }
          }).then(function (res) {
            if (res.status === 200 & res.statusText === 'OK') {
              that.ulikeFood = Array.from(new Set(that.ulikeFood.concat(res.data)))
              console.log(res.data)
              that.flange = true
              that.addoffset({offset: that.offset + 10})
            }
          }).catch(function (err) {
            if (err) {
              console.log(err)
            }
          })
        }
      },
      ...mapMutations({
        addoffset: 'CHANG_FOODSORT',
        addPosition: 'POSITION',
        tabFood: 'TAB_FOOD'
      })
    },
    computed: {
      ...mapState(['order', 'offset', 'position', 'tabzhi', 'tabId'])
    },
    destroyed () {
      // 移除监听滚动条滚动事件
      document.removeEventListener('scroll', this.handleScroll)
    }
  }

</script>

<style scoped lang="scss">
  @import '../../static/hotcss/px2rem.scss';
  .app-wrapper {
    padding-top: px2rem(113);
  }
  .nav-wrapper {
    width: 100%;
    height: px2rem(113);
    background: hsla(0,0%,100%,.9);
  }
  .TouchBar-wrapper_3AxAZxu {
    position: relative;
    width: 100%;
  }
  .app-wrapper .nav-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
  }
  .TouchBar-list_1f4YgNb {
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    line-height: 0;
    -webkit-overflow-scrolling: touch;
  }
  .nav-wrapper ul {
    padding: 0 px2rem(10);
  }
  .nav-item, .nav-wrapper:after {
    display: block;
    height: px2rem(113);
  }
  .nav-item {
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    padding: px2rem(25) px2rem(10);
    width: px2rem(176);
    color: #333;
    font-size: px2rem(26);
  }
  .nav-current {
    color: #ff5339;
    font-weight: 700;
  }
  .TouchBar-list_1f4YgNb li {
    display: inline-block;
    overflow: hidden;
  }
  .nav-item span {
    display: block;
    overflow: hidden;
    width: px2rem(156);
    border: 1px solid #ddd;
    border-radius: px2rem(113);
    text-align: center;
    line-height: px2rem(48);
  }
  .SwitchTab-wrapper_1K5DMvd {
    position: relative;
  }
  .tab-wrapper {
    width: 100%;
  }
  .SwitchTab-transition_1naNOOT {
    -webkit-transition: opacity .5s cubic-bezier(.55,0,.1,1),-webkit-transform .5s cubic-bezier(.55,0,.1,1);
    transition: opacity .5s cubic-bezier(.55,0,.1,1),-webkit-transform .5s cubic-bezier(.55,0,.1,1);
    transition: opacity .5s cubic-bezier(.55,0,.1,1),transform .5s cubic-bezier(.55,0,.1,1);
    transition: opacity .5s cubic-bezier(.55,0,.1,1),transform .5s cubic-bezier(.55,0,.1,1),-webkit-transform .5s cubic-bezier(.55,0,.1,1);
  }
  .HotFoodShop-2c6Ln {
    margin: 0 auto;
    padding: 0 px2rem(18) px2rem(25);
    width: px2rem(730);
    border-radius: px2rem(12);
    background: #fff;
  }
  .tab-wrapper .tab-list-item {
    margin-bottom: px2rem(15);
  }
  .HotFoodShop-2Qghj {
    justify-content: space-between;
    height: px2rem(86);
  }
  .HotFoodShop-1m_lq, .HotFoodShop-2Qghj {
    display: flex;
    align-items: center;
  }
  .HotFoodShop-1m_lq {
    flex: 0 1 auto;
    overflow: hidden;
  }
  .HotFoodShop-1m_lq img {
    display: block;
    flex-shrink: 0;
    overflow: hidden;
    width: px2rem(42);
    height: px2rem(42);
    border-radius: 50%;
  }
  .HotFoodShop-1m_lq h3 {
    overflow: hidden;
    margin-left: px2rem(18);
    color: #333;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 700;
    font-size: px2rem(28);
  }
  .HotFoodShop-2Za_M {
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    color: #999;
    font-size: px2rem(22);
  }
  .HotFoodShop-3fhg6 {
    display: flex;
  }
  .HotFoodItemC-3SnOf {
    display: flex;
    flex-direction: column;
    width: px2rem(219.9);
  }
  .HotFoodItemC-3SnOf img {
    display: block;
    width: px2rem(219.9);
    height: px2rem(219.9);
  }
  .HotFoodItemC-7MUFa {
    display: flex;
    flex-direction: column;
  }
  .HotFoodItemC-6JlDH, .HotFoodItemC-7MUFa {
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -webkit-box-orient: vertical;
  }
  .HotFoodItemC-6JlDH {
    display: -webkit-box;
    overflow: hidden;
    margin: px2rem(15) 0 px2rem(6);
    max-height: px2rem(68);
    color: #333;
    word-break: break-all;
    font-size: px2rem(26);
    line-height: px2rem(34);
    -webkit-line-clamp: 2;
  }
  .HotFoodItemC-g7gVL {
    color: #ff5339;
    font-weight: 700;
    font-size: px2rem(24);
    line-height: px2rem(36);
  }
  .HotFoodItemC-g7gVL i {
    margin-right: px2rem(2);
    font-weight: 400;
    font-style: normal;
    font-size: px2rem(18);
    line-height: px2rem(20);
  }
  .HotFoodItemC-2tNvV {
    margin: px2rem(14) auto 0;
    width: px2rem(200);
    height: px2rem(56);
    border: px2rem(1) solid #ff5339;
    border-radius: px2rem(6);
    color: #ff5339;
    text-align: center;
    font-size: px2rem(24);
    line-height: px2rem(54);
  }
  .HotFoodItemC-3SnOf+.HotFoodItemC-3SnOf {
    margin-left: px2rem(17);
  }
</style>