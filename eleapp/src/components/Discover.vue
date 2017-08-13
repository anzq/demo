<template>
  <div class="discover">
    <header-all></header-all>
    <section class="parts unmerge">
      <div class="entry list3">
        <a :key="index" v-for="(item, index) in discover['1']" :href="item.content_url">
          <img class="icon" :src="'https://fuss10.elemecdn.com/' + item.main_pic_hash + '?imageMogr/format/webp/'"/>
          <p class="title" style="color: rgb(255, 151, 0);">{{ item.title }}</p>
          <p class="tips">{{ item.subtitle }}</p>
        </a>
      </div>
      <div class="entry">
        <a class="sub-pic-hash" :key="index" v-for="(item, index) in discover['2']" :href="item.content_url">
          <p class="title" style="color: rgb(255, 151, 0); display: none;">{{ item.subtitle }}</p>
          <p style="display: none;" class="tips">今天吃饭不要钱</p>
          <img :src="'https://fuss10.elemecdn.com/' + item.sub_pic_hash + '?imageMogr/format/webp/'" />
        </a>
      </div>
    </section>
    <section>
      <div class="activity-header">
        <span class="line left"></span>
        <svg class="activity-icon" viewBox="0 0 34 33" id="nice" width="100%" height="100%"><g fill="#F12C2C" fill-rule="evenodd"><path d="M19.1 10s.404-1.959.685-3.294l.068-.323a472.237 472.237 0 0 1 .83-3.832l.077-.352C21.016 1.036 20.194 0 19.01 0H14.49c-.625 0-1.284.377-1.606.915l-5.742 9.57L8 10H2.003A1.995 1.995 0 0 0 0 11.999V31C0 32.106.9 33 2.003 33h23c1.548 0 3.082-1.157 3.507-2.645l4.63-16.204C33.776 11.923 32.32 10 30 10H19.1zM18 12h12c.993 0 1.488.653 1.217 1.601l-4.63 16.205c-.18.629-.929 1.194-1.584 1.194h-23L2 11.999C2 11.996 8 12 8 12h.566l.291-.486 5.743-9.57c-.037.061-.028.056-.109.056h4.518c-.1 0-.22-.152-.202-.233l-.078.354a513.863 513.863 0 0 0-.832 3.848l-.069.325c-.284 1.349-.51 2.46-.657 3.255-.087.465-.146.818-.177 1.058a2.394 2.394 0 0 0-.026.41c.004.078.004.078.027.21.039.185.039.185.349.563.717.292.656.21.656.21z"></path><path d="M7 10h2v22H7z"></path></g></svg>
        美食热推
        <span class="line right"></span>
      </div>
      <p class="activity-sub-title">你的口味，我都懂得</p>
      <div class="activity-body">
        <router-link :to="{path:'/detail?id='+item.foods[0].restaurant_id}" class="discover-food" :key="index" v-for="(item, index) in likes">
          <img :src="'https://fuss10.elemecdn.com/' + item.foods[0].image_hash + '?imageMogr/format/webp/'" />
          <div>
            <p class="food-name ui-ellipsis">{{ item.foods[0].name }}</p>
            <div class="food-info clearfix">
              <div class="food-price">
                <span class="price ui-ellipsis">
                  <span class="yuan">¥{{ item.foods[0].price }}</span>
                </span>
                <del class="original-price ui-ellipsis" :style="item.foods[0].original_price?'':'display: none'">¥{{ item.foods[0].original_price }}</del>
              </div>
            </div>
          </div>
          <span class="discount" :style="item.foods[0].discount_rate?'':'display: none'">NAN</span>
        </router-link>
      </div>
      <router-link to="/ulike" class="activity-more">
        查看更多
        <svg class="svg-next" viewBox="0 0 16 25" id="tab_found_next_page" width="100%" height="100%"><path fill="none" fill-rule="evenodd" stroke="#CCC" stroke-linecap="round" stroke-width="3" d="M2.127 2l10.87 10.582L2.291 23.11"></path></svg>
      </router-link>
    </section>
    <section>
      <div class="activity-header">
        <span class="line left"></span>
        <svg class="activity-icon" viewBox="0 0 35 35" id="tag" width="100%" height="100%"><g id="tag_页面" fill="#F12C2C"><g id="tag_发现页_新增天天特价_确认" transform="translate(-267 -513)"><g id="tag_天天特价" transform="translate(-1 471)"><g id="tag_天天" transform="translate(1)"><g id="tag_title" transform="translate(221 39)"><g id="tag_Group-4"><g id="tag_Group-5" transform="translate(47)"><g id="tag_tag"><path d="M12.6 33.4c-.3 0-.5-.1-.7-.3L-.7 20.4c-.4-.4-.4-1 0-1.4L18.8-.7c.2-.2.5-.3.7-.3h12.9c.6 0 1 .4 1 1v12.3c0 .3-.1.5-.3.7L13.3 33c-.1.2-.4.3-.7.4zM1.4 19.7l11.2 11.2 18.8-19V1H20L1.4 19.7z" class="st0" transform="translate(0 4)"></path><path d="M24.8 10.9c-2.1 0-3.7-1.7-3.7-3.7s1.7-3.7 3.7-3.7 3.7 1.7 3.7 3.7-1.7 3.7-3.7 3.7zm0-5.5c-1 0-1.7.8-1.7 1.7 0 1 .8 1.7 1.7 1.7 1 0 1.7-.8 1.7-1.7 0-.9-.8-1.7-1.7-1.7zM6.9 21.9c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l9.7-9.7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-9.7 9.7c-.2.2-.5.3-.7.3zM10.3 25.3c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l6.5-6.5c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L11 25c-.2.2-.5.3-.7.3z" class="st0" transform="translate(0 4)"></path></g></g></g></g></g></g></g></g></svg>
        天天特价
        <span class="line right"></span>
      </div>
      <p class="activity-sub-title">特价商品，一网打尽</p>
      <div class="activity-body">
        <a class="discover-food" :key="index" v-for="(item, index) in discount" :style="index > 2?'display: none':''">
          <img :src="'https://fuss10.elemecdn.com/' + item.foods[0].image_path +'?imageMogr/format/webp/'" />
          <div>
            <p class="food-name ui-ellipsis">{{ item.foods[0].name }}</p>
            <div class="food-info clearfix">
              <div class="food-price">
                <span class="price ui-ellipsis">
                  <span class="yuan">¥{{ item.foods[0].price }}</span>
                </span>
                <del class="original-price ui-ellipsis">¥{{ item.foods[0].original_price }}</del>
              </div>
            </div>
          </div>
          <span class="discount">{{ item.foods[0].discount_rate }}折</span>
        </a>
      </div>
      <div class="activity-more">
        查看更多
        <svg class="svg-next" viewBox="0 0 16 25" id="tab_found_next_page" width="100%" height="100%"><path fill="none" fill-rule="evenodd" stroke="#CCC" stroke-linecap="round" stroke-width="3" d="M2.127 2l10.87 10.582L2.291 23.11"></path></svg>
      </div>
    </section>
    <section>
      <div class="activity-header">
        <span class="line left"></span>
        <svg class="activity-icon" viewBox="-4 3 30 30" id="alarm" width="100%" height="100%"><g id="alarm_页面" fill="#F12C2C"><g id="alarm_发现页_新增天天特价_确认" transform="translate(-31 -1587)"><g id="alarm_商品" transform="translate(-2 1556)"><g id="alarm_Page-1"><path d="M10 29.9c-7.2 0-13-5.8-13-13 0-2 .4-3.9 1.3-5.7C.5 6.7 5 3.9 10 3.9c7.2 0 13 5.8 13 13s-5.8 13-13 13zM.1 12.1C-.7 13.6-1 15.2-1 16.9c0 6.1 4.9 11 11 11s11-4.9 11-11-4.9-11-11-11c-4.3 0-8.1 2.3-9.9 6.2z" class="st0" transform="translate(34 32)"></path><path d="M-1 12.1c-1.8-.9-3-2.7-3-4.8C-4 4.4-1.6 2 1.3 2c2 0 3.8 1.1 4.7 2.8l-1.8 1C3.7 4.7 2.5 4 1.3 4-.5 4-2 5.5-2 7.3c0 1.3.7 2.4 1.8 3l-.8 1.8zM21 11.8l-1-1.7c1-.6 1.6-1.7 1.6-2.8 0-1.8-1.5-3.3-3.3-3.3-1.3 0-2.5.8-3.1 2l-1.8-.8c.8-2 2.8-3.3 4.9-3.3 2.9 0 5.3 2.4 5.3 5.3-.1 2-1 3.7-2.6 4.6zM14.3 20.2h-4.2c-.6 0-1-.4-1-1v-8.1c0-.6.4-1 1-1s1 .4 1 1v7.1h3.2c.6 0 1 .4 1 1s-.4 1-1 1zM-1.2 32c-.2 0-.5-.1-.7-.3-.4-.4-.4-1-.1-1.4l4-4.5c.4-.4 1-.4 1.4-.1.4.4.4 1 .1 1.4l-4 4.5c-.2.3-.4.4-.7.4zM21.5 32c-.3 0-.5-.1-.7-.3l-4-4.5c-.4-.4-.3-1 .1-1.4.4-.4 1-.3 1.4.1l4 4.5c.4.4.3 1-.1 1.4-.2.1-.4.2-.7.2z" class="st0" transform="translate(34 32)"></path></g></g></g></g></svg>
        限时好礼
        <span class="line right"></span>
      </div>
      <p class="activity-sub-title">小积分换豪礼</p>
      <div class="activity-body">
        <a class="discover-food" :key="index" v-for="(item, index) in gifts" :href="item.url">
          <img :src="'https://fuss10.elemecdn.com/' + item.image_hash + '?imageMogr/format/webp/'" />
          <div>
            <p class="food-name ui-ellipsis">{{ item.title }}</p>
            <div class="food-info clearfix">
              <div class="food-price">
                <span class="price ui-ellipsis">
                  <span class="yuan">{{ item.points_required }}积分</span>
                </span>
                <del class="original-price ui-ellipsis">¥{{ item.original_price }}</del>
              </div>
            </div>
          </div>
          <span class="discount">{{ item.corner_marker }}</span>
        </a>
      </div>
      <div class="activity-more">
        查看更多
        <svg class="svg-next" viewBox="0 0 16 25" id="tab_found_next_page" width="100%" height="100%"><path fill="none" fill-rule="evenodd" stroke="#CCC" stroke-linecap="round" stroke-width="3" d="M2.127 2l10.87 10.582L2.291 23.11"></path></svg>
      </div>
    </section>
    <footer-all></footer-all>
  </div>
</template>
<script>
  // import $ from 'jquery'
  import { mapState, mapMutations } from 'vuex'
  import axios from 'axios'
  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'
  export default {
    name: 'search',
    data () {
      return {
        // 发现页顶部活动的数据
        discover: {},
        // 限时好礼活动的数据
        gifts: [],
        // request_id
        requestId: '',
        // 美食热推数据
        likes: [],
        // 天天特价数据
        discount: {}
      }
    },
    components: {
      'header-all': Header,
      'footer-all': Footer
    },
    mounted () {
      this.sectClick(1)
      var oSelf = this
      // 发现页顶部的活动
      if (localStorage.getItem('position')) {
        var lat = JSON.parse(localStorage.getItem('position')).latitude
        var lng = JSON.parse(localStorage.getItem('position')).longitude
        // console.log(lat + '-----' + lng)
        axios.get('http://localhost:3000/discover', {
          params: {
            latitude: lat,
            longitude: lng
          }
        }).then(function (res) {
          if (res.status === 200 && res.statusText === 'OK') {
            for (var i = 0; i < res.data['1'].length; i++){
              if (res.data['1'][i].main_pic_hash.substr(res.data['1'][i].main_pic_hash.length - 3, 3) === 'png') {
                res.data['1'][i].main_pic_hash = res.data['1'][i].main_pic_hash.substr(0, 1) + '/' + res.data['1'][i].main_pic_hash.substr(1, 2) + '/' + res.data['1'][i].main_pic_hash.substr(3) + '.png'
              } else {
                res.data['1'][i].main_pic_hash = res.data['1'][i].main_pic_hash.substr(0, 1) + '/' + res.data['1'][i].main_pic_hash.substr(1, 2) + '/' + res.data['1'][i].main_pic_hash.substr(3) + '.jpeg'
              }
            }
            for (var j = 0; j < res.data['2'].length; j++){
              if (res.data['2'][j].sub_pic_hash.substr(res.data['2'][j].sub_pic_hash.length - 3, 3) === 'png') {
                res.data['2'][j].sub_pic_hash = res.data['2'][j].sub_pic_hash.substr(0, 1) + '/' + res.data['2'][j].sub_pic_hash.substr(1, 2) + '/' + res.data['2'][j].sub_pic_hash.substr(3) + '.png'
              } else {
                res.data['2'][j].sub_pic_hash = res.data['2'][j].sub_pic_hash.substr(0, 1) + '/' + res.data['2'][j].sub_pic_hash.substr(1, 2) + '/' + res.data['2'][j].sub_pic_hash.substr(3) + '.jpeg'
              }
            }
            oSelf.discover = res.data
          }
        }).catch(function (err) {
          console.log(err)
        })
      }
      // 限时好礼活动
      axios.get('http://localhost:3000/gifts').then(function (res) {
        // console.log(res)
        if (res.status === 200 && res.statusText === 'OK') {
          for (var k = 0; k < res.data.length; k++) {
            if (res.data[k].image_hash.substr(res.data[k].image_hash.length - 3, 3) === 'png') {
              res.data[k].image_hash = res.data[k].image_hash.substr(0, 1) + '/' + res.data[k].image_hash.substr(1, 2) + '/' + res.data[k].image_hash.substr(3) + '.png'
            } else {
              res.data[k].image_hash = res.data[k].image_hash.substr(0, 1) + '/' + res.data[k].image_hash.substr(1, 2) + '/' + res.data[k].image_hash.substr(3) + '.jpeg'
            }
          }
        }
        oSelf.gifts = res.data
      }).catch(function (err) {
        console.log(err)
      })
      // 获取获取request_id 用于获取美食热推数据
      axios.get('http://localhost:3000/requestId', {
        params: {
          latitude: lat,
          longitude: lng
        }
      }).then(function (res) {
        // console.log(res)
        if (res.status === 200 && res.statusText === 'OK') {
          oSelf.request_id = res.data.request_id
        }
      }).catch(function (err) {
        console.log(err)
      })
      // 用于获取美食热推数据
      axios.get('http://localhost:3000/likes', {
        params: {
          latitude: lat,
          longitude: lng,
          request_id: oSelf.requestId
        }
      }).then(function (res) {
        // console.log(res)
        if (res.status === 200 && res.statusText === 'OK') {
          for (var m = 0; m < res.data.length; m++) {
            var data = res.data[m].foods[0]
            if (data.image_hash.substr(data.image_hash.length - 3, 3) === 'png') {
              data.image_hash = data.image_hash.substr(0, 1) + '/' + data.image_hash.substr(1, 2) + '/' + data.image_hash.substr(3) + '.png'
            } else {
              data.image_hash = data.image_hash.substr(0, 1) + '/' + data.image_hash.substr(1, 2) + '/' + data.image_hash.substr(3) + '.jpeg'
            }
          }
          oSelf.likes = res.data
          console.log(oSelf.likes)
        }
      }).catch(function (err) {
        console.log(err)
      })
      // 获取天天特价商品信息
      axios.get('http://localhost:3000/discount', {
        params: {
          latitude: lat,
          longitude: lng
        }
      }).then(function (res) {
        // console.log(res)
        if (res.status === 200 && res.statusText === 'OK') {
          var list = res.data.query_list
          for (var n = 0; n < list.length; n++) {
            var img = list[n].foods[0]
            img.discount_rate = (img.discount_rate * 10).toFixed(1)
            if (img.image_path.substr(img.image_path.length - 3, 3) === 'png') {
              img.image_path = img.image_path.substr(0, 1) + '/' + img.image_path.substr(1, 2) + '/' + img.image_path.substr(3) + '.png'
            } else {
              img.image_path = img.image_path.substr(0, 1) + '/' + img.image_path.substr(1, 2) + '/' + img.image_path.substr(3) + '.jpeg'
            }
          }
          oSelf.discount = res.data.query_list
        }
      }).catch(function (err) {
        console.log(err)
      })
    },
    methods: {
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
  input {
    outline: none;
    border: none;
  }
  h1,h2,h3,h4,h5,h6,p{
    font-weight: 400;
    font-size: px2rem(24);
  }
  img {
    max-width: 100%
  }
  .ui-ellipsis {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .discover {
    padding-bottom: px2rem(1);
    .parts {
      border-bottom: none;
      .entry {
        flex-wrap: wrap;
        background: #fff;
        display: flex;
        overflow: hidden;
        border-width: px2rem(1) 0;
        &:first-child {
          border-top: 0;
        }
        a {
          height: px2rem(173);
          width: 100%;
          display: block;
          border-bottom: px2rem(1) solid #ededed;
        }
        .sub-pic-hash {
          padding: 0;
        }
        .icon {
          float: right;
          margin-top: -3%;
        }
        .title {
          line-height: 1.2;
          font-size: px2rem(36);
          margin-bottom: px2rem(12);
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        .tips {
            line-height: 1.2;
            font-size: px2rem(24);
            color: #999;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
        img {
          width: 100%
        }
      }
      .list3 {
        position: relative;
        .icon {
          width: px2rem(90)
        }
        a {
          width: 50%;
          &:first-child {
            position: absolute;
            height: px2rem(346);
            padding: px2rem(30);
            padding-top: px2rem(48);
            .icon {
                width: px2rem(150);
                margin: px2rem(42) px2rem(52) 0;
                position: absolute;
                bottom: px2rem(48);
            }
          }
          &:nth-child(3n+1) {
            border-right: px2rem(1) solid #ededed;
          }
          &:nth-child(2) {
            margin-left: 50%;
          }
          &:nth-child(3) {
            margin-left: 50%;
          }
        }
      }
    }
    .unmerge {
      .entry {
        &:first-child {
          margin-bottom: px2rem(21);
        }
        &:last-child {
          border-top: px2rem(1) solid #ededed;
        }
        a {
          border-bottom: px2rem(1) solid #ededed;
          display: block;
          height: px2rem(173);
          padding: px2rem(48) px2rem(30)
        }
      }
      
    }
    section {
      margin-bottom: px2rem(21);
      border-top: px2rem(1) solid #eee;
      background: #fff;
      border-bottom: px2rem(1) solia #eee;
      .activity-header {
        padding-top: px2rem(39);
        text-align: center;
        font-size: px2rem(36);
        font-weight: 700;
        color: #333;
        .line {
          display: inline-block;
          margin: px2rem(16) px2rem(7) px2rem(13);
          border: px2rem(1) solid #333;
          width: px2rem(30);
          height: 0;
          position: relative;
          &:after {
            position: absolute;
            top: px2rem(-5);
            content: "";
            background: #333;
            height: px2rem(10);
            width: px2rem(10);
            border-radius: 50%;
          }
        }
        .left {
          &:after {
            right: px2rem(-5);
          }
        }
        .right {
          &:after {
            left: px2rem(-5);
          }
        }
        .activity-icon {
          position: relative;
          top: px2rem(4);
          width: px2rem(33);
          height: px2rem(33);
        }
      }
      .activity-sub-title {
        font-size: px2rem(22);
        color: #999;
        text-align: center;
        padding-bottom: px2rem(16);
      }
      .activity-body {
        padding: px2rem(24) 0 px2rem(30) px2rem(30);
        white-space: nowrap;
        overflow: hidden;
        .discover-food {
          float: left;
          position: relative;
          box-sizing: border-box;
          width: px2rem(222);
          margin-right: px2rem(12);
          img {
            width: px2rem(222);
            height: px2rem(220);
            margin-bottom: px2rem(19);
          }
          div {
            .food-name {
              font-size: px2rem(26);
              color: #333;
              margin-bottom: px2rem(10);
            }
            .clearfix {
              &:before {
                display: table;
                line-height: 0;
                content: "";
                clear: both;
              }
              &:after {
                display: table;
                line-height: 0;
                content: "";
                clear: both;
              }
              .food-price {
                height: px2rem(48);
                line-height: px2rem(48);
                .price {
                  font-size: px2rem(26);
                  height: px2rem(36);
                  color: #ff5339;
                  margin-right: px2rem(7);
                  max-width: px2rem(100);
                  float: left;
                  .yuan {
                    font-size: px2rem(22);
                  }
                }
                .original-price {
                  font-size: px2rem(22);
                  color: #aaa;
                  max-width: px2rem(80);
                  float: left;
                }
              }
            }
          }
          .discount {
            position: absolute;
            top: 0;
            left: 0;
            font-size: px2rem(22);
            color: #fff;
            background: #413d3c;
            padding: px2rem(5);
          }
        }
      }
      .activity-more {
        display: block;
        font-size: px2rem(26);
        color: #999;
        text-align: center;
        padding: 0 0 px2rem(40);
        .svg-next {
          height: px2rem(18);
          width: px2rem(10);
          margin-left: px2rem(11);
        }
      }
    }
  }

</style>