<template>
  <div>
    <transition enter-active-class="slideInRight animated" leave-active-class="slideOutRight animated">
      <div class="poi-3TsQq-0" v-show="show" >
        <div class="poi-2PxTv-0">
          <svg @click="show = !show" viewBox="0 0 28 33" id="arrow-left" width="100%" height="100%"><path fill-rule="evenodd" d="M17.655 1.853L15.961.159.033 16.072 15.961 32l1.694-1.694L3.429 16.08 17.655 1.854z" class="path1"></path></svg>
          <div class="poi-2T3Ra-0">选择地址</div>
          <input v-model="msg" type="search" placeholder="请输入地址" autofocus="autofocus" class="poi-i4JjZ-0" @keyup="kkup($event)"/>
        </div>
        <div class="poi-3ndyq-0"></div>
        <section>
          <div class="AddressCell-BfZ31-0" :key="index" v-for="(item, index) in addressArr" :style="index === 0?'border: 0':''">
            <p>
              <span class="AddressCell-3dWFD-0">{{ item.name }}</span>
            </p>
            <p class="AddressCell-2WH1g-0">{{ item.address }}</p>
          </div>
        </section>
        <section class="poi-3pogo-0">
          <h4>收货地址</h4>
        </section>
      </div>
    </transition>
    <div>
		  <div class="header">
				<div class="top">
					<div class="location" @click="show = !show">
						<svg class="location-3guVd" viewBox="0 0 26 31" id="location" width="100%" height="100%"><path fill="JavaScript:;FFF" fill-rule="evenodd" d="M22.116 22.601c-2.329 2.804-7.669 7.827-7.669 7.827-.799.762-2.094.763-2.897-.008 0 0-5.26-4.97-7.643-7.796C1.524 19.8 0 16.89 0 13.194 0 5.908 5.82 0 13 0s13 5.907 13 13.195c0 3.682-1.554 6.602-3.884 9.406zM18 13a5 5 0 1 0-10 0 5 5 0 0 0 10 0z"></path></svg>
						<span class="location-1cnKa">{{ address.name }}</span>
						<svg class="location-9eIfV" viewBox="0 0 14 8" id="arrow" width="100%" height="100%"><path fill="JavaScript:;FFF" fill-rule="evenodd" d="M5.588 6.588c.78.78 2.04.784 2.824 0l5.176-5.176c.78-.78.517-1.412-.582-1.412H.994C-.107 0-.372.628.412 1.412l5.176 5.176z"></path></svg>
					</div>
					<div class="climate">
						<div class="climate-in">
							<h2>{{ weather.temperature }}°</h2>
							<p>{{ weather.description }}</p>
						</div>
						<img alt="天气图标" :src="weather.image" />
					</div>
				</div>
				<router-link to="/search">
					<input type="text" placeholder="搜索商家、商品" class="search-20Oji"/>
				</router-link>
				<ul class="commend-1NhZ1">
					<li :key="index" v-for="(item, index) in hot_search">{{ item.word }}</li>
				</ul>
			</div>
			<div class="foodentry">	
				<mt-swipe :auto="0">
          <mt-swipe-item>
            <router-link :to="'/food?top_title=' + item.name" :key="index" v-for="(item, index) in entries1">
              <div class="swiper-container">
                <img :src="'//fuss10.elemecdn.com/' + item.image_hash + '?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'"  />
              </div>
              <span class="title">{{ item.name }}</span>
            </router-link>
          </mt-swipe-item>
          <mt-swipe-item>
            <router-link to="/food" :key="index" v-for="(item, index) in entries2">
              <div class="swiper-container">
                <img :src="'//fuss10.elemecdn.com/' + item.image_hash + '?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'"  />
              </div>
              <span class="title">{{ item.name }}</span>
            </router-link>
          </mt-swipe-item>
        </mt-swipe>
			</div>
			<h3 class="intro">推荐商家</h3>
			<div class="shoplist" id="shop">
				<router-link :to="'/detail?id=' + item.id" class="shop" href="javascript:;" :key="index" v-for="(item, index) in restaurants">
					<div class="shop-logo">
            <img :src="'//fuss10.elemecdn.com/' + item.image_path + '?imageMogr/format/webp/thumbnail/!120x120r/gravity/Center/crop/120x120/'" />
            <div class="shop-new" v-if="item.is_new">
              <span>新店</span>
            </div>
					</div>
					<div class="shop-main">
						<div class="shop-t">
							<h3 class="shop-name">
                <p v-if=" item.is_premium ">品牌</p>
								<span>{{ item.name }}</span>
							</h3>
							<div class="shop-server">
                <i class="server" :key="index1" v-for="(item1, index1) in item.supports">{{ item1.icon_name}}</i>
							</div>
						</div>
						<div class="shop-c">
							<div class="shop-c-l">
								<div class="rating">
									<div class="rating-max">
                    <svg viewBox="0 0 22 22" id="rating-star" width="100%" height="100%"><path fill-rule="evenodd" d="M10.986 17.325l-5.438 3.323c-1.175.718-1.868.208-1.55-1.126l1.48-6.202-4.84-4.15c-1.046-.895-.775-1.71.59-1.82l6.353-.51L10.03.95c.53-1.272 1.39-1.266 1.915 0l2.445 5.89 6.353.51c1.372.11 1.632.93.592 1.82l-4.84 4.15 1.478 6.202c.32 1.34-.38 1.84-1.55 1.126l-5.437-3.323z"></path></svg>
                    <svg viewBox="0 0 22 22" id="rating-star" width="100%" height="100%"><path fill-rule="evenodd" d="M10.986 17.325l-5.438 3.323c-1.175.718-1.868.208-1.55-1.126l1.48-6.202-4.84-4.15c-1.046-.895-.775-1.71.59-1.82l6.353-.51L10.03.95c.53-1.272 1.39-1.266 1.915 0l2.445 5.89 6.353.51c1.372.11 1.632.93.592 1.82l-4.84 4.15 1.478 6.202c.32 1.34-.38 1.84-1.55 1.126l-5.437-3.323z"></path></svg>
                    <svg viewBox="0 0 22 22" id="rating-star" width="100%" height="100%"><path fill-rule="evenodd" d="M10.986 17.325l-5.438 3.323c-1.175.718-1.868.208-1.55-1.126l1.48-6.202-4.84-4.15c-1.046-.895-.775-1.71.59-1.82l6.353-.51L10.03.95c.53-1.272 1.39-1.266 1.915 0l2.445 5.89 6.353.51c1.372.11 1.632.93.592 1.82l-4.84 4.15 1.478 6.202c.32 1.34-.38 1.84-1.55 1.126l-5.437-3.323z"></path></svg>
                    <svg viewBox="0 0 22 22" id="rating-star" width="100%" height="100%"><path fill-rule="evenodd" d="M10.986 17.325l-5.438 3.323c-1.175.718-1.868.208-1.55-1.126l1.48-6.202-4.84-4.15c-1.046-.895-.775-1.71.59-1.82l6.353-.51L10.03.95c.53-1.272 1.39-1.266 1.915 0l2.445 5.89 6.353.51c1.372.11 1.632.93.592 1.82l-4.84 4.15 1.478 6.202c.32 1.34-.38 1.84-1.55 1.126l-5.437-3.323z"></path></svg>
                    <svg viewBox="0 0 22 22" id="rating-star" width="100%" height="100%"><path fill-rule="evenodd" d="M10.986 17.325l-5.438 3.323c-1.175.718-1.868.208-1.55-1.126l1.48-6.202-4.84-4.15c-1.046-.895-.775-1.71.59-1.82l6.353-.51L10.03.95c.53-1.272 1.39-1.266 1.915 0l2.445 5.89 6.353.51c1.372.11 1.632.93.592 1.82l-4.84 4.15 1.478 6.202c.32 1.34-.38 1.84-1.55 1.126l-5.437-3.323z"></path></svg>
                  </div>
                  <div class="rating-rating" :style="'width: '+ star(item.rating) +'%;'">
                    <svg viewBox="0 0 22 22" id="rating-star" width="100%" height="100%"><path fill-rule="evenodd" d="M10.986 17.325l-5.438 3.323c-1.175.718-1.868.208-1.55-1.126l1.48-6.202-4.84-4.15c-1.046-.895-.775-1.71.59-1.82l6.353-.51L10.03.95c.53-1.272 1.39-1.266 1.915 0l2.445 5.89 6.353.51c1.372.11 1.632.93.592 1.82l-4.84 4.15 1.478 6.202c.32 1.34-.38 1.84-1.55 1.126l-5.437-3.323z"></path></svg>
                    <svg viewBox="0 0 22 22" id="rating-star" width="100%" height="100%"><path fill-rule="evenodd" d="M10.986 17.325l-5.438 3.323c-1.175.718-1.868.208-1.55-1.126l1.48-6.202-4.84-4.15c-1.046-.895-.775-1.71.59-1.82l6.353-.51L10.03.95c.53-1.272 1.39-1.266 1.915 0l2.445 5.89 6.353.51c1.372.11 1.632.93.592 1.82l-4.84 4.15 1.478 6.202c.32 1.34-.38 1.84-1.55 1.126l-5.437-3.323z"></path></svg>
                    <svg viewBox="0 0 22 22" id="rating-star" width="100%" height="100%"><path fill-rule="evenodd" d="M10.986 17.325l-5.438 3.323c-1.175.718-1.868.208-1.55-1.126l1.48-6.202-4.84-4.15c-1.046-.895-.775-1.71.59-1.82l6.353-.51L10.03.95c.53-1.272 1.39-1.266 1.915 0l2.445 5.89 6.353.51c1.372.11 1.632.93.592 1.82l-4.84 4.15 1.478 6.202c.32 1.34-.38 1.84-1.55 1.126l-5.437-3.323z"></path></svg>
                    <svg viewBox="0 0 22 22" id="rating-star" width="100%" height="100%"><path fill-rule="evenodd" d="M10.986 17.325l-5.438 3.323c-1.175.718-1.868.208-1.55-1.126l1.48-6.202-4.84-4.15c-1.046-.895-.775-1.71.59-1.82l6.353-.51L10.03.95c.53-1.272 1.39-1.266 1.915 0l2.445 5.89 6.353.51c1.372.11 1.632.93.592 1.82l-4.84 4.15 1.478 6.202c.32 1.34-.38 1.84-1.55 1.126l-5.437-3.323z"></path></svg>
                    <svg viewBox="0 0 22 22" id="rating-star" width="100%" height="100%"><path fill-rule="evenodd" d="M10.986 17.325l-5.438 3.323c-1.175.718-1.868.208-1.55-1.126l1.48-6.202-4.84-4.15c-1.046-.895-.775-1.71.59-1.82l6.353-.51L10.03.95c.53-1.272 1.39-1.266 1.915 0l2.445 5.89 6.353.51c1.372.11 1.632.93.592 1.82l-4.84 4.15 1.478 6.202c.32 1.34-.38 1.84-1.55 1.126l-5.437-3.323z"></path></svg>
                  </div>
								</div>
								<span>{{ rating(item.rating) }}</span>
								<span>月售{{ item.recent_order_num }}单</span>
							</div>
							<div class="shop-c-r" v-if="item.delivery_mode">
                <span class="onTime">蜂鸟专送</span>
							</div>
						</div>
						<div class="shop-b">
							<div class="shop-b-left">
								<span>¥{{ item.float_minimum_order_amount }}起送</span>
								<span>配送费¥{{ fee(item.float_delivery_fee) }}</span>
								<span>{{ item.average_cost }}</span>
							</div>
							<div class="shop-b-right">
								<span>{{ km(item.distance) }}</span>
								<span>/</span>
								<span>{{ item.order_lead_time }}分钟</span>
							</div>
						</div>
            <div class="shop-activies">
              <div class="shop-actList">
                <!--:style="index2 > 1 && arrFlag[index]?'display: none' : ''"  当活动叔超过2个（即活动下标》1）并且当前店铺标识符为true，就显示2条活动，点击后，标识符为false，则显示全部活动-->
                <div class="act-container" :key="index2" v-for="(item2, index2) in item.activities" :style="index2 > 1 && arrFlag[index]?'display: none' : ''">
                  <i class="act-icon" :style="'background-color: #' + item2.icon_color + '; color: #fff; border-color: #' + item2.icon_color +';'">{{ item2.icon_name }}</i>
                  <span class="act-des">{{ item2.tips }}</span>
                </div>
              </div>
              <div class="shop-actNum" v-if="item.activities.length > 2" @click.stop="changeArrFlag(index)">
                {{ item.activities.length }}个活动
                <!--绑定class，通过标识符，决定动画-->
                <svg :class="[arrFlag[index]? 'arrowdown': 'arrowup']" viewBox="0 0 12 6" id="activity-more" width="100%" height="100%"><path fill-rule="evenodd" d="M4.577 5.423c.79.77 2.073.767 2.857 0l4.12-4.026C12.345.625 12.09 0 10.985 0H1.027C-.077 0-.33.63.457 1.397l4.12 4.026z"></path></svg>
              </div>
            </div>
					</div>
				</router-link>
        <p v-if="showCircle">
          <mt-spinner type="fading-circle" color="#333" :size="40"></mt-spinner>
          <span>正在加载中...</span>
        </p>
			</div>
			<footer-all></footer-all>
			<div class="backTop" @click="toTop()" v-if="toggleFlag">
        <svg viewBox="0 0 1024 1024" id="back-top.7a234e5" class="icon" width="100%" height="100%"><path d="M109.078 75.5h805.846v134.308H109.076s0-134.308.002-134.308zm805.846 604.384H713.462V948.5H310.538V679.884H109.076L512 276.962l402.924 402.922z"></path></svg>
      </div>
		</div>
  </div>
</template>
<script>
  import Vue from 'vue'
  import { mapState, mapMutations } from 'vuex'
  import $ from 'jquery'
  import AMap from 'AMap'
  import axios from 'axios'
  import Footer from '@/components/Footer.vue'
  export default {
    name: 'home',
    data () {
      return {
        // 热搜数据
        hot_search: [],
        // 天气数据
        weather: {},
        // 定位地址数据
        address: {},
        // 轮播第一页数据
        entries1: [],
        // 轮播第一页数据
        entries2: [],
        // 请求商家信息从第offset
        offset: 0,
        // 请求商家信息一次20条
        limit: 20,
        // 商家信息数据
        restaurants: [],
        // 商家活动显示/隐藏需要的代表标识符
        arrFlag: [],
        // 返回顶部按钮显示/隐藏的标识符
        toggleFlag: false,
        // 监听上拉加载更多事件的标识符
        scrollFlag: false,
        // 上拉加载过程中转圈提示
        showCircle: false,
        // 点击选择地址
        show: false,
        // 搜索关键字
        msg: '',
        timer: null,
        // 选择地址拿到的数组
        addressArr: []
      }
    },
    components: {
      'footer-all': Footer
    },
    mounted () {
      this.sectClick(0)
      var oSelf = this
      // 如果localStorage('position')不存在，就用高德地图获取经纬度
      if (!localStorage.getItem('position')) {
        // 通过高德地图获取定位的经纬度，经度在前，纬度在后
        var geolocation
        var map = new AMap.Map('container')
        map.plugin('AMap.Geolocation', function () {
          geolocation = new AMap.Geolocation({
            enableHighAccuracy: true,
            timeout: 10000,
            buttonPosition: 'LB',
            buttonOffset: new AMap.Pixel(10, 20),
            zoomToAccuracy: true
          })
          map.addControl(geolocation)
          geolocation.getCurrentPosition()
          AMap.event.addListener(geolocation, 'complete', onComplete)
          AMap.event.addListener(geolocation, 'error', onError)
          function onComplete (data) {
            if (data.status === 1 & data.info === 'SUCCESS') {
              // console.log(data)
              var obj = {}
              obj.lat = data.position.lat
              obj.lng = data.position.lng
              oSelf.$store.commit('POSITION', obj)
              localStorage.setItem('position', JSON.stringify({latitude: obj.lat, longitude: obj.lng}))
            }
          }
          function onError (err) {
            console.log(err)
          }
        })
      }
      // 用到经纬度的ajax操作要在获取到经纬度之后才可以发送请求
      // 获取位置信息
      axios.get('http://localhost:3000/position', {
        params: {
          latitude: JSON.parse(localStorage.getItem('position')).latitude,
          longitude: JSON.parse(localStorage.getItem('position')).longitude
        }
      }).then(function (res) {
        if (res.status === 200 & res.statusText === 'OK') {
          console.log(res)
          oSelf.address = res.data
          oSelf.$store.commit('GEOHASH', res.data.geohash)
          localStorage.setItem('geohash', JSON.stringify(res.data.geohash))
        }
      }).catch(function (err) {
        console.log(err)
      })
      // 获取天气情况
      axios.get('http://localhost:3000/weather', {
        params: {
          latitude: JSON.parse(localStorage.getItem('position')).latitude,
          longitude: JSON.parse(localStorage.getItem('position')).longitude
        }
      }).then(function (res) {
        if (res.status === 200 & res.statusText === 'OK') {
          // console.log(res)
          oSelf.weather.temperature = res.data.temperature
          oSelf.weather.description = res.data.description
          if (res.data.image_hash.substr(res.data.image_hash.length - 3, 3) === 'png') {
            oSelf.weather.image = '//fuss10.elemecdn.com/' + res.data.image_hash.substr(0, 1) + '/' + res.data.image_hash.substr(1, 2) + '/' + res.data.image_hash.substr(3) + '.png?imageMogr/format/webp/thumbnail/!69x69r/gravity/Center/crop/69x69/'
          } else {
            oSelf.weather.image = '//fuss10.elemecdn.com/' + res.data.image_hash.substr(0, 1) + '/' + res.data.image_hash.substr(1, 2) + '/' + res.data.image_hash.substr(3) + '.jpeg?imageMogr/format/webp/thumbnail/!69x69r/gravity/Center/crop/69x69/'
          }
        }
      }).catch(function (err) {
        console.log(err)
      })
      // 请求热搜数据
      axios.get('http://localhost:3000/hot', {
        params: {
          latitude: JSON.parse(localStorage.getItem('position')).latitude,
          longitude: JSON.parse(localStorage.getItem('position')).longitude
        }
      }).then(function (res) {
        if (res.status === 200 & res.statusText === 'OK') {
          // console.log(res)
          oSelf.hot_search = res.data
        }
      }).catch(function (err) {
        console.log(err)
      })
      // 请求轮播分类的数据
      axios.get('http://localhost:3000/entries', {
        params: {
          latitude: JSON.parse(localStorage.getItem('position')).latitude,
          longitude: JSON.parse(localStorage.getItem('position')).longitude
        }
      }).then(function (res) {
        if (res.status === 200 & res.statusText === 'OK') {
          // console.log(res)
          var data = res.data[0].entries
          for (var i = 0; i < data.length; i++) {
            if (data[i].image_hash.substr(data[i].image_hash.length - 3, 3) === 'png') {
              data[i].image_hash = data[i].image_hash.substr(0, 1) + '/' + data[i].image_hash.substr(1, 2) + '/' + data[i].image_hash.substr(3) + '.png'
            } else {
              data[i].image_hash = data[i].image_hash.substr(0, 1) + '/' + data[i].image_hash.substr(1, 2) + '/' + data[i].image_hash.substr(3) + '.jpeg'
            }
          }
          oSelf.entries1 = data.slice(0, 8)
          oSelf.entries2 = data.slice(8)
        }
      }).catch(function (err) {
        console.log(err)
      })
      // 默认请求一次商家的数据
      axios.get('http://localhost:3000/restaurants', {
        params: {
          latitude: JSON.parse(localStorage.getItem('position')).latitude,
          longitude: JSON.parse(localStorage.getItem('position')).longitude,
          offset: oSelf.offset * oSelf.limit,
          limit: oSelf.limit
        }
      }).then(function (res) {
        if (res.status === 200 & res.statusText === 'OK') {
          // console.log(res)
          for (var i = 0; i < res.data.length; i++) {
            // 循环一次就给当前的店铺加个标识符true
            oSelf.arrFlag.push(true)
            if (res.data[i].image_path.substr(res.data[i].image_path.length - 3, 3) === 'png') {
              res.data[i].image_path = res.data[i].image_path.substr(0, 1) + '/' + res.data[i].image_path.substr(1, 2) + '/' + res.data[i].image_path.substr(3) + '.png'
            } else {
              res.data[i].image_path = res.data[i].image_path.substr(0, 1) + '/' + res.data[i].image_path.substr(1, 2) + '/' + res.data[i].image_path.substr(3) + '.jpeg'
            }
          }
          oSelf.restaurants = res.data
          // console.log(oSelf.restaurants)
          oSelf.offset++
          oSelf.scrollFlag = true
        }
      }).catch(function (err) {
        console.log(err)
      })
      // 监听滚动条滚动事件
      document.addEventListener('scroll', oSelf.toggle)
      // 监听滚动上拉加载更多事件
      document.addEventListener('scroll', oSelf.scrollMore)
    },
    destroyed () {
      // 移除监听滚动条滚动事件
      document.removeEventListener('scroll', this.toggle)
      // 移除监听滚动上拉加载更多事件
      document.removeEventListener('scroll', this.scrollMore)
    },
    methods: {
      // 距离超过1000m，就保留2位小数转换为km
      km (distance) {
        if (distance > 1000) {
          return (distance / 1000).toFixed(2) + 'km'
        } else {
          return distance + 'm'
        }
      },
      // 店铺总评分
      rating (rate) {
        return rate.toFixed(1)
      },
      // 五角星的百分比
      star (rate) {
        return parseInt(rate / 5 * 100)
      },
      // 配送费保留一位小数
      fee (fee) {
        return fee.toFixed(1)
      },
      // 点击回到顶部
      toTop () {
        $('html, body').animate({scrollTop: 0}, 200)
      },
      // 滚动，回到顶部按钮 显示/隐藏
      toggle () {
        // 滚动条滚动的高度
        var top = document.documentElement.scrollTop || document.body.scrollTop
        // console.log(top)
        if (top < 600) {
          this.toggleFlag = false
        } else {
          this.toggleFlag = true
        }
      },
      // 上拉加载更多
      scrollMore () {
        var oSelf = this
        var height = document.getElementById('shop').offsetHeight
        var top = document.documentElement.scrollTop || document.body.scrollTop
        var clientHeight = document.documentElement.clientHeight || document.body.clientHeight
        // console.log(oSelf.scrollFlag)
        if (top + clientHeight > height && oSelf.scrollFlag) {
          oSelf.scrollFlag = false
          oSelf.showCircle = true
          axios.get('http://localhost:3000/restaurants', {
            params: {
              latitude: JSON.parse(localStorage.getItem('position')).latitude,
              longitude: JSON.parse(localStorage.getItem('position')).longitude,
              offset: oSelf.offset * oSelf.limit,
              limit: oSelf.limit
            }
          }).then(function (res) {
            if (res.status === 200 & res.statusText === 'OK') {
              // console.log(res)
              if (res.data.length > 0) {
                for (var i = 0; i < res.data.length; i++) {
                  // 上拉加载更多时，也需要添加标识符到arrFlag
                  oSelf.arrFlag.push(true)
                  if (res.data[i].image_path.substr(res.data[i].image_path.length - 3, 3) === 'png') {
                    res.data[i].image_path = res.data[i].image_path.substr(0, 1) + '/' + res.data[i].image_path.substr(1, 2) + '/' + res.data[i].image_path.substr(3) + '.png'
                  } else {
                    res.data[i].image_path = res.data[i].image_path.substr(0, 1) + '/' + res.data[i].image_path.substr(1, 2) + '/' + res.data[i].image_path.substr(3) + '.jpeg'
                  }
                }
                oSelf.showCircle = false
                oSelf.restaurants = oSelf.restaurants.concat(res.data)
                oSelf.offset++
                oSelf.scrollFlag = true
              } else {
                oSelf.scrollFlag = false
              }
            }
          }).catch(function (err) {
            console.log(err)
          })
        }
      },
      // 活动是否全部显示/隐藏
      changeArrFlag (index) {
        // 获取到传递过来的当前点击店铺的序列号
        // console.log(index)
        // 将当前店铺在arrFlag里对应的标识取反
        Vue.set(this.arrFlag, index, !this.arrFlag[index])
      },
      // 监听键盘事件，如果是删除键则不发送请求
      kkup (e) {
        if (e.keyCode !== 8) {
          var oSelf = this
          clearTimeout(oSelf.timer)
          oSelf.timer = setTimeout(function () {
            axios.get('http://localhost:3000/searchPoi', {
              params: {
                keyword: oSelf.msg,
                latitude: JSON.parse(localStorage.getItem('position')).latitude,
                longitude: JSON.parse(localStorage.getItem('position')).longitude
              }
            }).then(function (res) {
              // console.log(res)
              if (res.status === 200 & res.statusText === 'OK') {
                oSelf.addressArr = res.data
                console.log(oSelf.addressArr)
              }
            }).catch(function (err) {
              console.log(err)
            })
          }, 1000)
        }
      },
      ...mapMutations({
        sectClick: 'FOOT_SECT'
      })
    },
    computed: {
      ...mapState(['footTab'])
    }
  }

</script>

<style scoped lang="scss">
  @import '../../static/hotcss/px2rem.scss';
  @import '../assets/css/animate.css';
  input {
    outline: none;
    border: none;
  }
  h1,h2,h3,h4,h5,h6,p{
    font-weight: 400;
    font-size: px2rem(24);
  }

  .animated {
    animation-duration: 0.5s;
  }
  // 选择地址
  .poi-3TsQq-0 {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10000;
    overflow: auto;
    background-color: #f4f4f4;
    // animation: poi-1F-EI-0 .3s;
    .poi-2PxTv-0 {
      position: fixed;
      width: 100%;
      color: #fff;
      background-image: linear-gradient(90deg,#0af,#0085ff);
      text-align: center;
      font-size: px2rem(24);
      padding-bottom: px2rem(24);
      svg {
        width: px2rem(40);
        height: px2rem(40);
        position: absolute;
        left: px2rem(25);
        top: px2rem(25);
        fill: #fff;
      }
      .poi-2T3Ra-0 {
        line-height: px2rem(87);
        font-size: px2rem(36);
      }
      .poi-i4JjZ-0 {
        margin-top: px2rem(10);
        width: 90%;
        height: px2rem(55);
        line-height: px2rem(40);
        border-radius: px2rem(55);
        padding: 0 px2rem(36);
        font-size: px2rem(26);
      }
    }
    .poi-3ndyq-0 {
      height: px2rem(176);
    }
    section {
      .AddressCell-BfZ31-0 {
        font-size: px2rem(24);
        background-color: #fff;
        padding: px2rem(20) px2rem(30);
        border-top: px2rem(1) solid #eee;
        p{
          .AddressCell-3dWFD-0 {
            font-weight: 700;
            font-size: px2rem(28);
          }
        }
        .AddressCell-2WH1g-0 {
          color: #999;
          font-size: px2rem(24);
        }
      }
    }
    .poi-3pogo-0 {
      display: none;
      h4 {
        padding: px2rem(20) px2rem(30);
        font-size: px2rem(28);
      }
    }
  }

  //首页
  .header{
    padding: px2rem(20) px2rem(28);
    background-image: linear-gradient(90deg,#0af,#0085ff);
    color: #fff;
    height: px2rem(244);
    .top {
      justify-content: space-between;
      .location {
        width: 60%;
        .location-3guVd {
          width: px2rem(26);
          height: px2rem(31);
          fill: #fff;
        }
        .location-1cnKa {
          margin: 0 px2rem(10);
          font-size: px2rem(36);
          max-width: 80%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .location-9eIfV {
          width: px2rem(14);
          height: px2rem(7);
          fill: #fff;
        }
      }
      .climate {
        text-align: right;
        .climate-in {
          h2 {
            font-size: px2rem(28);
          }
        }
        img {
          margin-left: px2rem(8);
          width: px2rem(55);
          height: px2rem(55);
        }
      }
    }
    a{
      .search-20Oji {
        display: block;
        margin: px2rem(15) 0;
        width: 100%;
        height: px2rem(72);
        text-align: center;
        border-radius: px2rem(72);
        box-shadow: 0 px2rem(2) px2rem(5) 0 rgba(0,0,0,.2);
        color: #333;
        font-size: px2rem(26);
      }
    }
    .commend-1NhZ1 {
      width: 100%;
      white-space: nowrap;
      overflow-x: auto;
      line-height: px2rem(28);
      li {
        font-size: px2rem(24);
        margin-right: px2rem(35);
        color: #fff;
        line-height: px2rem(28);
        display: inline-block;
      }
    }
  }
  .top,
  .location,
  .climate {
    display: flex;
    align-items: center;
  }

  .foodentry {
    overflow: hidden;
    height: px2rem(354);
    background-color: #fff;
    text-align: center;
    a {
      position: relative;
      float: left;
      margin-top: px2rem(22);
      width: 25%;
      .swiper-container {
        width: px2rem(90);
        height: px2rem(90);
        margin: 0 auto;
      }
      span {
        display: block;
        height: px2rem(28);
        margin-top: px2rem(10);
        color: #666;
        font-size: px2rem(24);
      }
    }
  }


  //推荐商家
  .rating-max,
  .rating-rating {
    display: flex;
    svg {
      display: block;
      margin: 0 px2rem(1);
      flex: none;
      width: px2rem(20);
      height: px2rem(20);
    }
  }
  .intro {
    margin-top: px2rem(20);
    padding-left: px2rem(30);
    line-height: px2rem(68);
    font-size: px2rem(30);
    font-weight: 600;
    background: #fff;
    border-top: px2rem(1) solid #eee;
    color: #333;
  }
  .shoplist {
    width: 100%;
    background: #fff;
    .shop {
      display: flex;
      justify-content: space-between;
      border-bottom: px2rem(1) solid #eee;
      color: #666666;
      font-size: px2rem(22);
      .shop-logo {
        padding: px2rem(30) px2rem(20);
        position: relative;
        .shop-new {
          position: absolute;
          top: 0;
          left: 0;
          width: px2rem(64);
          height: px2rem(64);
          background-image: linear-gradient(135deg,#26ce61,#26ce61 50%,transparent 0);
          font-size: px2rem(18);
          span {
            position: absolute;
            top: px2rem(10);
            left: px2rem(2);
            color: #fff;
            font-weight: 700;
            transform: rotate(-45deg);
          }
        }
      }
      .shop-main {
        display: flex;
        flex-direction: column;
        padding: px2rem(30) px2rem(20);
        padding-left: 0;
        .shop-t {
          display: flex;
          width: px2rem(570);
          height: px2rem(32);
          justify-content: space-between;
          align-items: center;
          .shop-name {
            display: flex;
            align-items: center;
            color: #333;
            font-weight: 700;
            font-size: px2rem(30);
            max-width: px2rem(355);
            p{
              margin-right: px2rem(10);
              padding: 0 px2rem(5);
              height: px2rem(30);
              background: #ffd930;
              border-radius: px2rem(4);
              color: #52250a;
              vertical-align: top;
              text-align: center;
              white-space: nowrap;
              font-size: px2rem(22);
              font-weight: 700;
              line-height: px2rem(30);
            }
            span{
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
          }
          .shop-server{
            display: flex;
            .server{
              color: #999;
              border-color: #ddd;
              margin-left: px2rem(5);
              font-size: px2rem(20);
              height: px2rem(20);
              border-radius: px2rem(3);
            }
          }
        }
        .shop-c {
          margin-top: px2rem(15);
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: px2rem(26);
          .shop-c-l{
            display: flex;
            align-items: center;
            .rating{
              position: relative;
              overflow: hidden;
              display: inline-block;
              vertical-align: middle;
              .rating-max {
                svg {
                  fill: #ddd;
                }
              }
              .rating-rating {
                position: absolute;
                top: 0;
                left: 0;
                overflow: hidden;
                svg {
                  fill: #ffaa0c;
                }
              }
            }
            span:nth-child(2){
              margin: 0 px2rem(8);
              color: #ff6000;
            }
          }
          .shop-c-r{
            display: flex;
            .onTime{
              padding: 0 px2rem(4);
              border: px2rem(1) solid #44a5ff;
              border-radius: px2rem(4);
              font-size: px2rem(20);
              line-height: px2rem(26);
              color: #FFFffF;
              background: #2395FF;
            }
          }
        }
        .shop-b{
          margin-top: px2rem(17);
          line-height: px2rem(24);
          display: flex;
          justify-content: space-between;
          align-content: center;
          .shop-b-left{
            span{
              &:nth-child(2){
                overflow: hidden;
                max-width: px2rem(200);
                text-overflow: ellipsis;
                white-space: nowrap;
                &:before{
                  margin: px2rem(6);
                  color: #ddd;
                  content: "/";
                }
              }
              &:nth-child(3){
                &:before{
                  margin: px2rem(6);
                  color: #ddd;
                  content: "/";
                }
              }
            }
          }
          .shop-b-right{
            span:nth-last-child(1){
              color: #2395ff;
            }
          }
        }
        .shop-activies {
          display: flex;
          position: relative;
          margin-top: px2rem(15);
          border-top: px2rem(1) solid #eee;
          color: #939393;
          .shop-actList {
            padding-top: px2rem(10);
            div {
              margin-top: px2rem(5);
            }
            .act-container {
              line-height: px2rem(32);
              display: flex;
              font-size: px2rem(20);
              &:nth-child(1){
                padding-right: px2rem(140);
              }
              .act-icon {
                margin-top: px2rem(5);
                margin-right: px2rem(10);
                font-size: px2rem(20);
                font-style: normal;
                line-height: 1;
                height: px2rem(22);
                display: inline-block;
                box-sizing: border-box;
                text-align: center;
                border: px2rem(1) solid;
                border-radius: px2rem(2);
              }
            }
          }
          .shop-actNum {
            position: absolute;
            right: 0;
            padding: px2rem(20) 0 px2rem(15);
            height: 100%;
            color: #999;
            text-align: right;
            font-size: px2rem(20);
            line-height: 1;
            svg {
              width: px2rem(13);
              height: px2rem(13);
              opacity: .9;
              transition: all .3s ease-in-out;
              transform: rotate(0deg);
              fill: currentColor;
              will-change: transform;
            }
            .arrowdown {
              transform: rotate(0deg);
            }
            .arrowup {
              transform: rotate(180deg);
            }
          }
        }
      }
    }
    p{
      display: flex;
      justify-content: center;
      align-items: center;
      height: px2rem(40);
      span{
        margin-right: px2rem(20);
        font-size: px2rem(26)
      }
    }
  }


  // 底部
  .footer{
    height: px2rem(120);
    .footer-guide{
      width: 100%;
      display: flex;
      align-content: center;
      padding-top: px2rem(9);
      height: px2rem(91);
      box-shadow: 0 px2rem(-2) px2rem(4) rgba(0,0,0,.1);
      background: #fff;
      position: fixed;
      bottom: 0;
      left: 0;
      a{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        // background: #fff;
        flex: 1;
        width: 0;
        text-align: center;
        svg,
        img {
          width: px2rem(40);
          height: px2rem(40);
        }
        .select{
          //fill: #0089dc;
          color: #0089dc;
        }
        span{
          display: block;
          color: #666666;
          font-size: px2rem(20);
        } 
      }
    } 
  }
  
  // 返回顶部
  .backTop {
    position: fixed;
    right: px2rem(30);
    bottom: px2rem(150);
    display: flex;
    align-items: center;
    justify-content: center;
    width: px2rem(83);
    height: px2rem(83);
    border: px2rem(1) solid #999;
    border-radius: 50%;
    background: #fff;
    svg {
      display: block;
      width: px2rem(40);
      height: px2rem(40);
      fill: #999
    }
  }

</style>