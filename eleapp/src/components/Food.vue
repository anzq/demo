<template>
  <div class="">
    <food-header></food-header>
    <ul class="shoplist" ref="shoplist">
      <li class="index-container" :key="index" v-for="(item, index) in foodlist" @click="jumpRoute(item.id)">
        <div class="logo-container">
          <div class="logo-main">
            <img alt="" class="logo-logo" :src="'//fuss10.elemecdn.com/'+item.image_path+'?imageMogr/format/webp/thumbnail/!120x120r/gravity/Center/crop/120x120/'">
          </div>
          <div class="logo-newShop" v-if="item.is_new">
            <span>新店</span>
          </div>
        </div>
        <div class="index-main">
          <div class="index-line">
            <h3 class="index-shopname"><span>{{ item.name }}</span></h3>
            <div class="index-supportWrap">
              <div class="activity-container activity-containerNoWrap" :key="index2" v-for="(item2, index2) in item.supports">
                <i class="activity-activityIcon_1iJyG_0 activity-icononly_3QM3P_0" :style="'color: #'+ item2.icon_color +'; border-color: rgb(221, 221, 221);'">{{ item2.icon_name }}</i>
              </div>
            </div>
          </div>
          <div class="index-line">
            <div class="index-rateWrap">
              <div class="rating-wrapper">
                <div class="rating-max">
                  <svg>
                    <svg viewBox="0 0 22 22" id="rating-star" width="100%" height="100%">
                      <path fill-rule="evenodd" d="M10.986 17.325l-5.438 3.323c-1.175.718-1.868.208-1.55-1.126l1.48-6.202-4.84-4.15c-1.046-.895-.775-1.71.59-1.82l6.353-.51L10.03.95c.53-1.272 1.39-1.266 1.915 0l2.445 5.89 6.353.51c1.372.11 1.632.93.592 1.82l-4.84 4.15 1.478 6.202c.32 1.34-.38 1.84-1.55 1.126l-5.437-3.323z"></path>
                    </svg>
                  </svg>
                  <svg>
                    <svg viewBox="0 0 22 22" id="rating-star" width="100%" height="100%">
                      <path fill-rule="evenodd" d="M10.986 17.325l-5.438 3.323c-1.175.718-1.868.208-1.55-1.126l1.48-6.202-4.84-4.15c-1.046-.895-.775-1.71.59-1.82l6.353-.51L10.03.95c.53-1.272 1.39-1.266 1.915 0l2.445 5.89 6.353.51c1.372.11 1.632.93.592 1.82l-4.84 4.15 1.478 6.202c.32 1.34-.38 1.84-1.55 1.126l-5.437-3.323z"></path>
                    </svg>
                  </svg>
                  <svg>
                    <svg viewBox="0 0 22 22" id="rating-star" width="100%" height="100%">
                      <path fill-rule="evenodd" d="M10.986 17.325l-5.438 3.323c-1.175.718-1.868.208-1.55-1.126l1.48-6.202-4.84-4.15c-1.046-.895-.775-1.71.59-1.82l6.353-.51L10.03.95c.53-1.272 1.39-1.266 1.915 0l2.445 5.89 6.353.51c1.372.11 1.632.93.592 1.82l-4.84 4.15 1.478 6.202c.32 1.34-.38 1.84-1.55 1.126l-5.437-3.323z"></path>
                    </svg>
                  </svg>
                  <svg>
                    <svg viewBox="0 0 22 22" id="rating-star" width="100%" height="100%">
                      <path fill-rule="evenodd" d="M10.986 17.325l-5.438 3.323c-1.175.718-1.868.208-1.55-1.126l1.48-6.202-4.84-4.15c-1.046-.895-.775-1.71.59-1.82l6.353-.51L10.03.95c.53-1.272 1.39-1.266 1.915 0l2.445 5.89 6.353.51c1.372.11 1.632.93.592 1.82l-4.84 4.15 1.478 6.202c.32 1.34-.38 1.84-1.55 1.126l-5.437-3.323z"></path>
                    </svg>
                  </svg>
                  <svg>
                    <svg viewBox="0 0 22 22" id="rating-star" width="100%" height="100%">
                      <path fill-rule="evenodd" d="M10.986 17.325l-5.438 3.323c-1.175.718-1.868.208-1.55-1.126l1.48-6.202-4.84-4.15c-1.046-.895-.775-1.71.59-1.82l6.353-.51L10.03.95c.53-1.272 1.39-1.266 1.915 0l2.445 5.89 6.353.51c1.372.11 1.632.93.592 1.82l-4.84 4.15 1.478 6.202c.32 1.34-.38 1.84-1.55 1.126l-5.437-3.323z"></path>
                    </svg>
                  </svg>
                </div>
                <div class="rating-rating" :style="'width: '+ stars(item.rating) +'%;'">
                  <svg>
                    <svg viewBox="0 0 22 22" id="rating-star" width="100%" height="100%">
                      <path fill-rule="evenodd" d="M10.986 17.325l-5.438 3.323c-1.175.718-1.868.208-1.55-1.126l1.48-6.202-4.84-4.15c-1.046-.895-.775-1.71.59-1.82l6.353-.51L10.03.95c.53-1.272 1.39-1.266 1.915 0l2.445 5.89 6.353.51c1.372.11 1.632.93.592 1.82l-4.84 4.15 1.478 6.202c.32 1.34-.38 1.84-1.55 1.126l-5.437-3.323z"></path>
                    </svg>
                  </svg>
                  <svg>
                    <svg viewBox="0 0 22 22" id="rating-star" width="100%" height="100%">
                      <path fill-rule="evenodd" d="M10.986 17.325l-5.438 3.323c-1.175.718-1.868.208-1.55-1.126l1.48-6.202-4.84-4.15c-1.046-.895-.775-1.71.59-1.82l6.353-.51L10.03.95c.53-1.272 1.39-1.266 1.915 0l2.445 5.89 6.353.51c1.372.11 1.632.93.592 1.82l-4.84 4.15 1.478 6.202c.32 1.34-.38 1.84-1.55 1.126l-5.437-3.323z"></path>
                    </svg>
                  </svg>
                  <svg>
                    <svg viewBox="0 0 22 22" id="rating-star" width="100%" height="100%">
                      <path fill-rule="evenodd" d="M10.986 17.325l-5.438 3.323c-1.175.718-1.868.208-1.55-1.126l1.48-6.202-4.84-4.15c-1.046-.895-.775-1.71.59-1.82l6.353-.51L10.03.95c.53-1.272 1.39-1.266 1.915 0l2.445 5.89 6.353.51c1.372.11 1.632.93.592 1.82l-4.84 4.15 1.478 6.202c.32 1.34-.38 1.84-1.55 1.126l-5.437-3.323z"></path>
                    </svg>
                  </svg>
                  <svg>
                    <svg viewBox="0 0 22 22" id="rating-star" width="100%" height="100%">
                      <path fill-rule="evenodd" d="M10.986 17.325l-5.438 3.323c-1.175.718-1.868.208-1.55-1.126l1.48-6.202-4.84-4.15c-1.046-.895-.775-1.71.59-1.82l6.353-.51L10.03.95c.53-1.272 1.39-1.266 1.915 0l2.445 5.89 6.353.51c1.372.11 1.632.93.592 1.82l-4.84 4.15 1.478 6.202c.32 1.34-.38 1.84-1.55 1.126l-5.437-3.323z"></path>
                    </svg>
                  </svg>
                  <svg>
                    <svg viewBox="0 0 22 22" id="rating-star" width="100%" height="100%">
                      <path fill-rule="evenodd" d="M10.986 17.325l-5.438 3.323c-1.175.718-1.868.208-1.55-1.126l1.48-6.202-4.84-4.15c-1.046-.895-.775-1.71.59-1.82l6.353-.51L10.03.95c.53-1.272 1.39-1.266 1.915 0l2.445 5.89 6.353.51c1.372.11 1.632.93.592 1.82l-4.84 4.15 1.478 6.202c.32 1.34-.38 1.84-1.55 1.126l-5.437-3.323z"></path>
                    </svg>
                  </svg>
                </div>
              </div>
              <span class="index-rate">{{ item.rating }}</span>
              <span>月售{{ item.recent_order_num }}单</span>
            </div>
            <div class="index-deliveryWrap">
              <span class="index-iconDelivery index-hollow" v-if="item.delivery_mode ?true : false">
                <span>蜂鸟专送</span>
              </span>
            </div>
          </div>
          <div class="index-line">
            <div class="index-moneylimit">
              <span>¥{{ item.float_minimum_order_amount }}起送</span>
              <span>配送费￥{{ item.float_delivery_fee }}</span>
              <span>{{ item.average_cost }}</span>人
            </div>
            <div class="index-timedistanceWrap">
              <span class="index-distanceWrap">{{ qianmi(item.distance) }}</span>
              <span class="index-timeWrap">{{ item.order_lead_time }}分钟</span>
            </div>
          </div>
          <div class="index-activities">
            <div class="index-activityList index-needexpand">
              <div class="activity-container activity-containerWrap" :key="index1" v-for="(item1, index1) in item.activities" :style="index1 > 1 && foodSect[index]?'display:none':''">
                <i class="activity-activityIcon_1iJyG_0" :style="'background-color: #'+ item1.icon_color +'; color: rgb(255, 255, 255); border-color:#'+ item1.icon_color +';'">{{ item1.icon_name }}</i>
                <span class="activity-description">
                  <span>{{ item1.description }}</span>
                </span>
              </div>
            </div>
            <div class="index-activityBtn" @click.stop="changeZhan($event, index)" v-if="item.activities.length > 2 ?true : false">{{ item.activities.length }}个活动
              <svg :class="foodSect[index]? '' : 'index-open'">
                <svg viewBox="0 0 12 6" id="activity-more" width="13px" height="13px">
                  <path fill="#999" fill-rule="evenodd" d="M4.577 5.423c.79.77 2.073.767 2.857 0l4.12-4.026C12.345.625 12.09 0 10.985 0H1.027C-.077 0-.33.63.457 1.397l4.12 4.026z"></path>
                </svg>
              </svg>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <div class="nodatatip NoDataTip-wrapper" v-if="geterr">
      <img src="//fuss10.elemecdn.com/2/50/8019fbaebac2aaa76e2d9b5e5b407gif.gif" alt="">
      <h3>没有结果</h3>
    </div>
     <div class="BackTop-wrapper" :style="ishui ? '' : 'display:none'" @click="huiDing()">
      <svg class="BackTop-icon"><svg viewBox="0 0 1024 1024" id="back-top.7a234e5" class="icon" width="100%" height="100%"><path d="M109.078 75.5h805.846v134.308H109.076s0-134.308.002-134.308zm805.846 604.384H713.462V948.5H310.538V679.884H109.076L512 276.962l402.924 402.922z"></path></svg></svg>
    </div> 
  </div>
</template>

<script>
  import Vue from 'vue'
  import axios from 'axios'
  import { mapState, mapMutations } from 'vuex'
  import FoodHeader from '@/components/Food-header.vue'
  import $ from 'jquery'

  export default {
    name: 'name',
    data () {
      return {
        foodSect: [],
        flange: false
      }
    },
    components: {
      'food-header': FoodHeader
    },
    created () {
      //  获取localStorage中位置信息
      this.addPosition(JSON.parse(localStorage.getItem('position')))
      // console.log(this.position)
    },
    mounted () {
      var that = this
      console.log(this.position)
      axios.get('http://localhost:3000/food', {
        params: {
          offset: that.offset,
          latitude: that.position.latitude,
          longitude: that.position.longitude
        }
      }).then(function (res) {
        if (res.status === 200 & res.statusText === 'OK') {
          for (var i = 0; i < res.data.length; i++) {
            if (that.foodSect.length < res.data.length) {
              that.foodSect.push(true)
            }
          }
          that.shoplist(res.data)
          that.flange = true
          that.addoffset({offset: that.offset + 20, order: that.order})
          that.getErr(false)
        }
      }).catch(function (err) {
        if (err) {
          that.getErr(true)
        }
      })
      document.addEventListener('scroll', this.handleScroll)
    },
    destroyed () {
      // 移除监听滚动条滚动事件
      document.removeEventListener('scroll', this.handleScroll)
    },
    methods: {
      handleScroll () {
        if (document.body.scrollTop < 300) {
          this.huiScroll(false)
        } else {
          this.huiScroll(true)
        }
        if ((document.body.scrollTop + document.documentElement.clientHeight + 200) > this.$refs.shoplist.offsetHeight && this.flange) {
          var that = this
          that.flange = false
          if (that.isLoad === 0) {
            axios.get('http://localhost:3000/food', {
              params: {
                offset: that.offset,
                latitude: that.position.latitude,
                longitude: that.position.longitude
              }
            }).then(function (res) {
              if (res.status === 200 & res.statusText === 'OK') {
                var list = Array.from(new Set(that.foodlist.concat(res.data)))
                for (var i = 0; i < list.length; i++) {
                  if (that.foodSect.length < list.length) {
                    that.foodSect.push(true)
                  }
                }
                that.shoplist(list)
                that.getErr(false)
                that.addoffset({offset: that.offset + 20, order: that.order})
                that.flange = true
              }
            }).catch(function (err) {
              if (err) {
                that.getErr(true)
              }
            })
          } else if (that.isLoad === 1) {
            axios.get('http://localhost:3000/foodfilter', {
              params: {
                offset: that.offset,
                order: that.order,
                latitude: that.position.latitude,
                longitude: that.position.longitude
              }
            }).then(function (res) {
              if (res.status === 200 & res.statusText === 'OK') {
                var list = Array.from(new Set(that.foodlist.concat(res.data)))
                for (var i = 0; i < list.length; i++) {
                  if (that.foodSect.length < list.length) {
                    that.foodSect.push(true)
                  }
                }
                console.log(that.foodSect)
                that.shoplist(list)
                that.getErr(false)
                that.addoffset({offset: that.offset + 20, order: that.order})
                that.flange = true
              }
            }).catch(function (err) {
              if (err) {
                that.getErr(true)
              }
            })
          } else if (that.isLoad === 2) {
            axios.get('http://localhost:3000/foodlei', {
              params: {
                offset: that.offset,
                id: that.leiId,
                latitude: that.position.latitude,
                longitude: that.position.longitude
              }
            }).then(function (res) {
              if (res.status === 200 & res.statusText === 'OK') {
                var list = Array.from(new Set(that.foodlist.concat(res.data)))
                for (var i = 0; i < list.length; i++) {
                  if (that.foodSect.length < list.length) {
                    that.foodSect.push(true)
                  }
                }
                console.log(that.foodSect)
                that.shoplist(list)
                that.getErr(false)
                that.addoffset({offset: that.offset + 20, order: that.order})
                that.flange = true
              }
            }).catch(function (err) {
              if (err) {
                that.getErr(true)
              }
            })
          }
        }
      },
      jumpRoute (id) {
        this.$router.push({ path: '/detail?id=' + id })
      },
      changeZhan (e, index) {
        e.stopPropagation()
        Vue.set(this.foodSect, index, !this.foodSect[index])
      },
      qianmi (distance) {
        if (distance > 1000) {
          var qm = distance / 1000
          return qm.toFixed(2) + 'km'
        } else {
          return distance + 'm'
        }
      },
      stars (num) {
        return parseInt(num / 5 * 100)
      },
      huiDing () {
        $('body,html').animate({ scrollTop: 0 }, 200)
      },
      ...mapMutations({
        shoplist: 'CHANGE_SHOPLIST',
        getErr: 'GET_ERR',
        huiScroll: 'SCROLL_HUI',
        addoffset: 'CHANG_FOODSORT',
        addPosition: 'POSITION'
      })
    },
    computed: {
      ...mapState(['iszhan', 'foodlist', 'geterr', 'ishui', 'isLoad', 'order', 'offset', 'position', 'leiId'])
    }
  }

</script>

<style scoped lang="scss">
  @import '../../static/hotcss/px2rem.scss';
  .shoplist {
    background-color: #fff;
    padding-top: px2rem(167);
  }

  .index-container,
  .index-main {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }

  .index-container {
    position: relative;
    border-bottom: 1px solid #eee;
    background-color: #fff;
    color: #666;
    list-style: none;
    font-size: px2rem(22);
  }

  .logo-container {
    position: relative;
    padding: px2rem(30) px2rem(20);
  }

  .logo-main {
    position: relative;
    width: px2rem(120);
    height: px2rem(120);
  }

  .logo-logo {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: px2rem(4);
  }

  .logo-newShop {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 50;
    width: px2rem(64);
    height: px2rem(64);
    background-image: linear-gradient(135deg, #26ce61, #26ce61 50%, transparent 0);
    font-size: px2rem(18);
  }

  .logo-newShop span {
    position: absolute;
    top: px2rem(10);
    left: px2rem(2);
    display: block;
    color: #fff;
    font-weight: 700;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }

  .index-main {
    flex-grow: 1;
    flex-direction: column;
    padding-right: px2rem(20);
    padding-top: px2rem(30);
    padding-bottom: px2rem(30);
    user-select: none;
  }

  .index-line {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    justify-content: space-between;
    -webkit-box-pack: justify;
  }

  .index-shopname {
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
    max-width: px2rem(375);
    height: px2rem(32);
    color: #333;
    font-weight: 700;
    font-size: px2rem(30);
  }

  .index-shopname span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .index-activities,
  .index-supportWrap {
    display: flex;
  }

  .index-supportWrap {
    justify-content: flex-end;
  }

  .index-line:nth-child(2) {
    margin-top: px2rem(15);
  }

  .index-rateWrap {
    display: flex;
    align-items: center;
  }

  .rating-wrapper {
    position: relative;
    overflow: hidden;
    display: inline-block;
    vertical-align: middle;
  }

  .rating-max,
  .rating-rating {
    display: flex;
  }

  .rating-max svg,
  .rating-rating svg {
    display: block;
    margin: 0 1px;
    flex: none;
    width: px2rem(20);
    height: px2rem(20);
  }

  .rating-max svg {
    fill: #ddd;
  }

  .rating-rating {
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
  }

  .rating-rating svg {
    fill: #ffaa0c;
  }

  .index-rate {
    margin: 0 px2rem(8);
    color: #ff6000;
  }

  .index-deliveryWrap {
    display: flex;
  }

  .index-iconDelivery {
    padding: 0 px2rem(4);
    border: 1px solid #44a5ff;
    border-radius: px2rem(4);
    background-color: #fff;
    color: #2395ff;
    font-size: px2rem(20);
    line-height: px2rem(26);
  }

  .index-iconDelivery.index-hollow {
    background-color: #2395ff;
    color: #fff;
  }

  .index-line:nth-child(3) {
    margin-top: px2rem(17);
    line-height: px2rem(24)
  }

  .index-moneylimit {
    display: flex;
    align-content: center;
  }

  .index-moneylimit span:nth-of-type(2) {
    overflow: hidden;
    max-width: px2rem(200);
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .index-moneylimit span+span:before {
    margin: px2rem(6);
    color: #ddd;
    content: "/";
  }

  .index-timedistanceWrap {
    display: flex;
    align-items: center;
  }

  .index-distanceWrap {
    color: #999;
  }

  .index-timeWrap {
    color: #2395ff;
  }

  .index-timedistanceWrap span+span:before {
    margin: 0 px2rem(6);
    color: #ddd;
    content: "/";
  }

  .index-activities {
    position: relative;
    margin-top: px2rem(15);
    border-top: 1px solid #eee;
    color: #939393;
  }

  .index-activityList {
    flex-grow: 1;
    padding-top: px2rem(10);
  }

  .activity-container {
    line-height: px2rem(32);
    display: flex;
    font-size: px2rem(20);
  }

  .activity-containerNoWrap {
    align-items: center;
  }

  .index-activityList div {
    margin-top: px2rem(5);
  }

  .index-activityList.index-needexpand div:first-child {
    padding-right: px2rem(140);
  }

  .activity-activityIcon_1iJyG_0 {
    margin-right: px2rem(10);
    font-size: px2rem(20);
    font-style: normal;
    line-height: 1;
    height: px2rem(22);
    display: inline-block;
    box-sizing: border-box;
    text-align: center;
    border: 1px solid;
    border-radius: px2rem(3);
  }

  .activity-containerNoWrap_2zBBg_0 .activity-icononly_3QM3P_0 {
    margin-left: px2rem(5);
  }

  .activity-activityIcon_1iJyG_0.activity-icononly_3QM3P_0 {
    margin-right: 0;
  }

  .activity-containerWrap .activity-activityIcon_1iJyG_0 {
    margin-top: px2rem(5);
  }

  .activity-description {
    flex: 1;
    display: block;
    width: 0;
  }

  .index-activityBtn {
    position: absolute;
    right: 0;
    padding-top: px2rem(20);
    padding-bottom: px2rem(15);
    height: 100%;
    color: #999;
    text-align: right;
    font-size: px2rem(20);
    line-height: 1;
  }

  .index-activityBtn svg {
    width: px2rem(13);
    height: px2rem(13);
    opacity: .9;
    -webkit-transition: all .3s ease-in-out;
    transition: all .3s ease-in-out;
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
    fill: currentColor;
    will-change: transform;
  }

  .index-activityBtn .index-open {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }
  .NoDataTip-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .nodatatip {
    margin-top: px2rem(200);
  }
  .NoDataTip-wrapper img {
    display: block;
    width: px2rem(400);
  }
  .NoDataTip-wrapper h3 {
    margin-top: px2rem(25);
    margin-bottom: px2rem(20);
    color: #6a6a6a;
    font-weight: 400;
    font-size: px2rem(34);
  }
  .BackTop-wrapper {
    position: fixed;
    right: px2rem(26);
    bottom: px2rem(128);
    display: flex;
    align-items: center;
    justify-content: center;
    width: px2rem(73);
    height: px2rem(73);
    border: 1px solid #999;
    border-radius: 50%;
    background: #fff;
    transition: opacity .3s;
  }
  .BackTop-icon {
    display: block;
    width: px2rem(35);
    height: px2rem(35);
    fill: #999;
  }
</style>