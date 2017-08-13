<template>
    <div id='detail' v-if="isTrue==5">
        <div class="model-container" :class="show?'model-container-show':''">
          <div class="model-bg">
            <div class="model-header">
              <svg @click="show=false" viewBox="0 0 20 32" id="arrow-left" width="100%" height="100%"><path fill="#fff" d="M16.552 5.633l-2.044-2.044L2.243 15.854l12.265 12.557 2.044-2.044L6.331 15.854z"></path></svg>
              <h1>商家详情</h1>
            </div>
            <div class="model-section">
              <h3 class="section-title">活动与属性</h3>
              <div>
                <div :key="index" v-for="(item,index) in shopDetail.activities" class="model-activity">
                   <i :style="{background:'#'+item.icon_color}">{{item.icon_name}}</i> 
                  <span>{{item.tips}}</span>
                </div>  
                 <div v-if="!shopDetail.supports.length==0" class="model-activity">
                  <i :style="{background:'#'+shopDetail.supports[0].icon_color}">{{shopDetail.supports[0].icon_name}}</i>
                  <span>{{shopDetail.supports[0].description}}</span>
                </div> 
              </div>
            </div>
            <div class="model-section">
              <h3 class="section-title">商家实景</h3>
              <img :key="index" v-for="(item,index) in shopDetail.albums" :src="'https://fuss10.elemecdn.com/'+changeImg(item.cover_image_hash)+'?imageMogr/format/webp/thumbnail/!200x200r/gravity/Center/crop/200x200/'" alt=""> 
            </div>
            <div class="model-section">
              <h3 class="section-title">商家信息</h3>
              <p>
                地址：{{shopDetail.address}}
              </p>
              <p>
                 营业时间：{{shopTime}}
              </p>
            </div>
            <div class="model-section"></div>
          </div>
        </div>
        <div class="shop-header-container">
            <div class="shop-header-bg" :style="{backgroundImage:'url(https://fuss10.elemecdn.com/'+changeImg(shopDetail.image_path) +'?imageMogr/format/webp/thumbnail/!40p/blur/50x40/)'}"></div>
            <div class="shop-header-back">
                <a @click="goBack" href="javascript:;">
                    <svg viewBox="0 0 20 32" id="arrow-left" width="100%" height="100%"><path fill="#fff" d="M16.552 5.633l-2.044-2.044L2.243 15.854l12.265 12.557 2.044-2.044L6.331 15.854z"></path></svg>
                </a>
            </div>
            <div class="shop-header-main">
                <img :src="'https://fuss10.elemecdn.com/'+ changeImg(shopDetail.image_path) +'?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/'" alt="">
                <div class="shop-header-main-content">
                    <h2>{{shopDetail.name}}</h2>
                    <p class="shop-header-delivery">
                         <span v-if="shopDetail.delivery_mode">{{shopDetail.delivery_mode.is_solid?'蜂鸟专送':'商家配送'}}</span> 
                        <span>{{shopDetail.order_lead_time}}分钟送达</span>
                        <span>{{shopDetail.piecewise_agent_fee.description}}</span>
                    </p>
                    <div class="shop-header-notice">
                        <span>公告 : </span>
                        <span>
                            欢迎光临，用餐高峰期请提前下单，谢谢。
                        </span>
                    </div>
                    <div @click="show = true" class="arrow-right">
                        <svg viewBox="0 0 547 987" id="arrow-right" width="100%" height="100%"><path d="M0 931.973l51.2 54.613 494.933-494.933L51.2.133 0 51.333l440.32 440.32L0 931.973z"></path></svg>
                    </div>
                </div>

            </div>
            <div class="shop-header-active">
                <div class="activity">
                    <i class="activityIcon" :style="{background:'#'+shopDetail.activities[0].icon_color}">
                        {{shopDetail.activities[0].icon_name}}
                    </i>
                    <span>
                        {{shopDetail.activities[0].tips}}
                    </span>
                </div>
                <div class="activityCount" v-if="shopDetail">
                    {{shopDetail.activities.length}}个活动
                </div>  
            </div>
        </div>
        <div class="shop-tab-container">
            <div class="shop-tab-btn" @click="changeTab(0)">
                <span :class="isTab===0?'shop-tab-select':''">
                    商品
                </span>
            </div>
            <div class="shop-tab-btn" @click="changeTab(1)">
                <span :class="isTab===0?'':'shop-tab-select'">
                    评价
                </span>
            </div>
        </div>
        <div class="menuview" v-show="isTab===0">
            <div class="menuview-content">
                <ul>
                    <li @click="changeMenu(index)" :class="select==index?'selected':''" :key="index" v-for="(item,index) in list">
                      <img v-if="item.name==='热销'" class="menucategory-375ij" src="https://fuss10.elemecdn.com/5/da/3872d782f707b4c82ce4607c73d1ajpeg.jpeg?imageMogr/format/webp/thumbnail/18x/">
                      <span>{{item.name}}</span>
                    </li>
                </ul>
                <div class="scroller">
                    <dl :key="index" v-for="(item,index) in list" :value="index">
                        <dt>
                            <strong>
                                {{item.name}}
                            </strong>
                            <span>{{item.description}}</span>
                            <a></a>
                        </dt>
                        <dd :key="num" v-for="(obj,num) in item.foods">
                             <img v-if="obj.image_path" :src="'https://fuss10.elemecdn.com/' + changeImg(obj.image_path) + '?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/'" alt=""> 
                            <div :class="obj.image_path?'':'img-left'" class="foodinfo">
                                <p class="title">{{obj.name}}</p>
                                <p class="foodsales">
                                    <span>月售{{obj.month_sales}}份</span>
                                    <span>好评率{{obj.satisfy_rate}}%</span>
                                </p>
                                <span class="foodprice">{{obj.specfoods[0].price}}</span>
                                <div class="cartButton">
                                  <svg v-if="cartListEx(obj.name)>=0" @click="cartMin(index,num)" viewBox="0 0 44 44" id="cart-add" width="100%" height="100%"><path fill-rule="evenodd" d="M22 0C9.8 0 0 9.8 0 22s9.8 22 22 22 22-9.8 22-22S34.2 0 22 0zm0 42C11 42 2 33 2 22S11 2 22 2s20 9 20 20-9 20-20 20z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M32 20c1.1 0 2 .9 2 2s-.9 2-2 2H12c-1.1 0-2-.9-2-2s.9-2 2-2h20z" clip-rule="evenodd"></path></svg>
                                  <span v-if="cartListEx(obj.name)>=0">{{cartList[cartListEx(obj.name)].count}}</span>
                                    <svg @click="cartAdd(index,num)" viewBox="0 0 44 44" id="cart-minus" width="100%" height="100%"><path fill="none" d="M0 0h44v44H0z"></path><path fill-rule="evenodd" d="M22 0C9.8 0 0 9.8 0 22s9.8 22 22 22 22-9.8 22-22S34.2 0 22 0zm10 24h-8v8c0 1.1-.9 2-2 2s-2-.9-2-2v-8h-8c-1.1 0-2-.9-2-2s.9-2 2-2h8v-8c0-1.1.9-2 2-2s2 .9 2 2v8h8c1.1 0 2 .9 2 2s-.9 2-2 2z" clip-rule="evenodd"></path></svg>
                                </div>
                            </div>
                        </dd>
                    </dl>
                </div>
            </div>
            <div class="footer">
                <span class="shoppingCart" @click="cartShow" :class="cartList.length>0?'list-ex':''">
                  <span class="list-count" v-if="cartList.length>0">{{listCount}}</span>
                </span>
                <div class="bottomNav">
                    <p class="total">￥{{totalPrice}}</p>
                    <p class="delivery">配送费¥3</p>
                </div>
                <div class="paybtn" v-if="totalPrice>=20" style="background:#4cd964">去结算</div>
                <div class="paybtn" v-else>
                    {{totalPrice==0?'￥20起送':'还差￥'+(20-totalPrice)+'起送'}}
                </div>
            </div>
        </div>
        <div class="pay-box">
          <div class="pay-box-bg"></div>
          <div class="pay-box-cart">
            <div class="pay-box-header">
              <span class="pay-box-cart-title">购物车</span>
              <a href="javascript:;">
                <svg viewBox="0 0 24 32" id="cart-remove" width="100%" height="100%"><path fill="#bbb" fill-rule="evenodd" d="M21.5 10h-19c-1.1 0-1.918.896-1.819 1.992l1.638 18.016C2.419 31.104 3.4 32 4.5 32h15c1.1 0 2.081-.896 2.182-1.992l1.637-18.016A1.798 1.798 0 0 0 21.5 10zM8 28H5L4 14h4v14zm6 0h-4V14h4v14zm5 0h-3V14h4l-1 14zm2-24h-2.941l-.353-2.514C17.592.669 16.823 0 15.998 0H8c-.825 0-1.593.668-1.708 1.486L5.94 4H3a3 3 0 0 0-3 3v1h24V7a3 3 0 0 0-3-3zM8.24 2h7.52l.279 2H7.96l.28-2z"></path></svg>
                <span @click="delList" class="pay-box-delbtn">清空</span>
              </a>
            </div>
            <ul class="pay-box-list">
              <li :key="index" v-for="(item,index) in cartList">
                <span class="pay-box-list-name">
                  {{item.name}}
                </span>
                <span class="pay-box-list-price">{{item.total}}</span>
                <span class="pay-box-list-count">
                  <svg @click="minList(index)" viewBox="0 0 44 44" id="cart-add" width="100%" height="100%"><path fill-rule="evenodd" d="M22 0C9.8 0 0 9.8 0 22s9.8 22 22 22 22-9.8 22-22S34.2 0 22 0zm0 42C11 42 2 33 2 22S11 2 22 2s20 9 20 20-9 20-20 20z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M32 20c1.1 0 2 .9 2 2s-.9 2-2 2H12c-1.1 0-2-.9-2-2s.9-2 2-2h20z" clip-rule="evenodd"></path></svg>
                  <span class="p-count">{{item.count}}</span>
                  <svg @click="addList(index)" viewBox="0 0 44 44" id="cart-minus" width="100%" height="100%"><path fill="none" d="M0 0h44v44H0z"></path><path fill-rule="evenodd" d="M22 0C9.8 0 0 9.8 0 22s9.8 22 22 22 22-9.8 22-22S34.2 0 22 0zm10 24h-8v8c0 1.1-.9 2-2 2s-2-.9-2-2v-8h-8c-1.1 0-2-.9-2-2s.9-2 2-2h8v-8c0-1.1.9-2 2-2s2 .9 2 2v8h8c1.1 0 2 .9 2 2s-.9 2-2 2z" clip-rule="evenodd"></path></svg>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div class="comment" v-show="isTab===1">
            <div class="comment-header">
                <div class="comment-header-left">
                    <strong>{{scores.overall_score.toFixed(1)}}</strong>
                    <div>综合评分</div>
                    <p>高于周边商家{{(scores.compare_rating*100).toFixed(1)}}%</p>
                </div>
                <div class="comment-header-right">
                    <div class="comment-line">
                        <span class="line-title">服务态度</span>
                        <div class="wujiao">
                          <div class="wujiao-bg">
                            <svg :key="index" v-for="(item,index) in 5" viewBox="0 0 22 22" id="rating-star"><path fill-rule="evenodd" d="M10.986 17.325l-5.438 3.323c-1.175.718-1.868.208-1.55-1.126l1.48-6.202-4.84-4.15c-1.046-.895-.775-1.71.59-1.82l6.353-.51L10.03.95c.53-1.272 1.39-1.266 1.915 0l2.445 5.89 6.353.51c1.372.11 1.632.93.592 1.82l-4.84 4.15 1.478 6.202c.32 1.34-.38 1.84-1.55 1.126l-5.437-3.323z"></path></svg>
                          </div>
                          <div class="wujiao-star" :style="{width:scores.service_score/5*100+'%'}">
                            <svg  :key="index" v-for="(item,index) in 5" viewBox="0 0 22 22" id="rating-star"><path fill-rule="evenodd" d="M10.986 17.325l-5.438 3.323c-1.175.718-1.868.208-1.55-1.126l1.48-6.202-4.84-4.15c-1.046-.895-.775-1.71.59-1.82l6.353-.51L10.03.95c.53-1.272 1.39-1.266 1.915 0l2.445 5.89 6.353.51c1.372.11 1.632.93.592 1.82l-4.84 4.15 1.478 6.202c.32 1.34-.38 1.84-1.55 1.126l-5.437-3.323z"></path></svg>
                          </div>
                        </div>
                        <span class="line-count">
                            {{scores.service_score.toFixed(1)}}
                        </span>
                    </div>
                    <div class="comment-line">
                        <span class="line-title">菜品评价</span>
                        <div class="wujiao">
                          <div class="wujiao-bg">
                            <svg :key="index" v-for="(item,index) in 5" viewBox="0 0 22 22" id="rating-star"><path fill-rule="evenodd" d="M10.986 17.325l-5.438 3.323c-1.175.718-1.868.208-1.55-1.126l1.48-6.202-4.84-4.15c-1.046-.895-.775-1.71.59-1.82l6.353-.51L10.03.95c.53-1.272 1.39-1.266 1.915 0l2.445 5.89 6.353.51c1.372.11 1.632.93.592 1.82l-4.84 4.15 1.478 6.202c.32 1.34-.38 1.84-1.55 1.126l-5.437-3.323z"></path></svg>
                          </div>
                          <div class="wujiao-star" :style="{width:scores.food_score/5*100+'%'}">
                            <svg  :key="index" v-for="(item,index) in 5" viewBox="0 0 22 22" id="rating-star"><path fill-rule="evenodd" d="M10.986 17.325l-5.438 3.323c-1.175.718-1.868.208-1.55-1.126l1.48-6.202-4.84-4.15c-1.046-.895-.775-1.71.59-1.82l6.353-.51L10.03.95c.53-1.272 1.39-1.266 1.915 0l2.445 5.89 6.353.51c1.372.11 1.632.93.592 1.82l-4.84 4.15 1.478 6.202c.32 1.34-.38 1.84-1.55 1.126l-5.437-3.323z"></path></svg>
                          </div>
                        </div>
                        <span class="line-count">
                            {{scores.food_score.toFixed(1)}}
                        </span>
                    </div>
                    <div class="comment-line">
                        <span class="line-title">送达时间</span>
                        <span class="line-time">
                            {{scores.deliver_time}}分钟
                        </span>
                    </div>
                </div>
            </div>
            <div class="comment-main">
                <div class="comment-box">
                    <div :key="index" v-for="(item,index) in tags" v-if="item.unsatisfied==false" class="good" :class="type==item.name?'select':''" @click="commentType(item.name)">
                        {{item.name}}({{item.count}})
                    </div>
                    <div v-else class="bad" :class="type==item.name?'select':''" @click="commentType(item.name)">
                        {{item.name}}({{item.count}})
                    </div>
                </div>
                <ul class="comment-list" @click="onScroll">
                    <li :key="index" v-for="(item,index) in commentList">
                        <img src="https://fuss10.elemecdn.com/f/2e/20a4300d40b97e98a5889591fb1f2jpeg.jpeg?imageMogr/format/webp/thumbnail/!60x60r/gravity/Center/crop/60x60/" alt="">
                        <small class="comment-time">{{item.rated_at}}</small>
                        <div class="comment-content">
                          <h3>{{item.username}}</h3>
                          <div class="wujiao-box">
                            <div class="wujiao-bg">
                              <svg class="bg" :key="number" v-for="(count,number) in 5" viewBox="0 0 22 22" id="rating-star" width="100%" height="100%"><path fill-rule="evenodd" d="M10.986 17.325l-5.438 3.323c-1.175.718-1.868.208-1.55-1.126l1.48-6.202-4.84-4.15c-1.046-.895-.775-1.71.59-1.82l6.353-.51L10.03.95c.53-1.272 1.39-1.266 1.915 0l2.445 5.89 6.353.51c1.372.11 1.632.93.592 1.82l-4.84 4.15 1.478 6.202c.32 1.34-.38 1.84-1.55 1.126l-5.437-3.323z"></path></svg>
                            </div>
                            <div class="wujiao">
                              <svg :key="number" v-for="(count,number) in item.rating_star" viewBox="0 0 22 22" id="rating-star" width="100%" height="100%"><path fill-rule="evenodd" d="M10.986 17.325l-5.438 3.323c-1.175.718-1.868.208-1.55-1.126l1.48-6.202-4.84-4.15c-1.046-.895-.775-1.71.59-1.82l6.353-.51L10.03.95c.53-1.272 1.39-1.266 1.915 0l2.445 5.89 6.353.51c1.372.11 1.632.93.592 1.82l-4.84 4.15 1.478 6.202c.32 1.34-.38 1.84-1.55 1.126l-5.437-3.323z"></path></svg>
                              
                            </div>
                            
                          </div>
                          <ul class="comment-foods-img">
                            <li v-if="!imgSrc.image_hash==''" :key="imgNum" v-for="(imgSrc,imgNum) in item.item_ratings">
                              <img  :src="'https://fuss10.elemecdn.com/'+changeImg(imgSrc.image_hash)+'?imageMogr/format/webp/thumbnail/!142x142r/gravity/Center/crop/142x142/'" alt="">
                            </li>
                          </ul>
                          <ul class="comment-foods">
                            <li :key="num" v-for="(value,num) in item.item_ratings">{{value.food_name}}</li>
                           
                          </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>


<script>
import axios from 'axios';
import $ from 'jquery';

export default {
  name: 'detail',
  data: function (){
    return {
      isTrue: 0,
      id: 0,
      position: null,
      list: null,
      commentList: null,
      select: 0,
      isTab: 0,
      show: false,
      shopDetail: null,
      tags: [],
      type: '全部',
      scores: {},
      offset: 0,
      isScroll: true,
      // 购物车显示开关
      cartShowBtn: true,
      // 购物车列表
      cartList: [],
      // 购物车图标动画开关
      btnShow: true
    }
  },
  methods: {
    changeMenu (index){
      this.select = index;
      var dlNode = document.querySelectorAll('dl');
      var floorNode = document.querySelectorAll('.scroller')[0];
      floorNode.scrollTop = dlNode[index].offsetTop;
    },
    changeTab (num){
      this.isTab = num;
    },
    commentType (type){
      var that = this;
      this.type = type;
      this.offset = 0;
      axios.get('http://localhost:3000/detail/comments', {
        params: {
          id: this.id,
          offset: this.offset,
          type: this.type
        }
      }).then(function(res){
        that.commentList = res.data;
      }).catch(function(err){
        console.log(err);
      })
    },
    changeImg (url){
      if (url.substr(url.length - 3, 3) === 'png'){
        return url.substr(0, 1) + '/' + url.substr(1, 2) + '/' + url.substr(3) + '.png'
      } else {
        return url.substr(0, 1) + '/' + url.substr(1, 2) + '/' + url.substr(3) + '.jpeg'
      }
    },
    onScroll (){
      var that = this;
      var listNode = document.querySelectorAll('.comment')[0];
      var top = listNode.scrollTop;
      var height = listNode.scrollHeight;
      var cHeight = listNode.clientHeight;
      if (height - top < cHeight + 20 && this.isScroll){
        this.isScroll = false;
        this.offset += 10;
        axios.get('http://localhost:3000/detail/comments', {
          params: {
            id: this.id,
            offset: this.offset,
            type: this.type
          }
        }).then(function(res){
          for (var i = 0; i < res.data.length; i++){
            that.commentList.push(res.data[i]);
          }
          that.isScroll = true;
        }).catch(function(err){
          console.log(err);
        })
      }
    },
    toFloor (){
      var that = this;
      var dlNode = document.querySelectorAll('dl');
      var floorNode = document.querySelectorAll('.scroller')[0];
      var top = floorNode.scrollTop;
      for (var i = 0; i < dlNode.length; i++){
        (function (i){
          if (top >= dlNode[i].offsetTop){
            that.select = i;
          }
        })(i)
      }
    },
    // 购物车显示开关
    cartShow (){
      var that = this;
      if (this.cartList.length > 0){
        if (that.cartShowBtn){
          $('.pay-box').css({display: 'block'});
          $('.pay-box-cart').animate({}, function (){
            that.cartShowBtn = false;
            $('.pay-box-cart').css({'transform': 'translateY(0)'})
          })
        } else {
          $('.pay-box-cart').animate({}, function (){
            $('.pay-box-cart').css({'transform': 'translateY(100%)'})
            setTimeout(function() {
              $('.pay-box').css({display: 'none'});
              that.cartShowBtn = true;
            }, 500);
          })
        }
      }
    },
    // 购物车添加
    cartAdd (index, num){
      var that = this;
      if (this.btnShow){
        this.btnShow = false;
        $('.shoppingCart').animate({}, function (){
          $('.shoppingCart').css({'transform': 'scale(0.7)'});
          setTimeout(function() {
            $('.shoppingCart').css({'transform': 'scale(1)'});
            that.btnShow = true;
          }, 200);
        })
      }
      if (this.cartListEx(this.list[index].foods[num].name) >= 0){
        var temp = this.cartListEx(this.list[index].foods[num].name);
        this.cartList[temp].count++;
        this.cartList[temp].total = this.cartList[temp].count * this.cartList[temp].price;
      } else {
        var obj = {
          name: this.list[index].foods[num].name,
          count: 1,
          price: this.list[index].foods[num].specfoods[0].price
        }
        obj.total = obj.count * obj.price;
        this.cartList.push(obj);
      }
    },
    cartMin (index, num){
      var temp = this.cartListEx(this.list[index].foods[num].name);
      this.cartList[temp].count--;
      this.cartList[temp].total = this.cartList[temp].count * this.cartList[temp].price;
      if (this.cartList[temp].count === 0){
        this.cartList.splice(temp, 1);
      }
    },
    cartListEx (name){
      for (var i = 0; i < this.cartList.length; i++){
        if (name === this.cartList[i].name){
          return i
        }
      }
      return -1;
    },
    delList (){
      var that = this;
      $('.pay-box-cart').animate({}, function (){
        $('.pay-box-cart').css({'transform': 'translateY(100%)'});
        setTimeout(function() {
          $('.pay-box').css({display: 'none'});
          that.cartShowBtn = true;
          that.cartList = [];
        }, 500);
      })
    },
    addList (index){
      var that = this;
      if (this.btnShow){
        this.btnShow = false;
        $('.shoppingCart').animate({}, function (){
          $('.shoppingCart').css({'transform': 'scale(0.7)'});
          setTimeout(function() {
            $('.shoppingCart').css({'transform': 'scale(1)'});
            that.btnShow = true;
          }, 200);
        })
      }
      this.cartList[index].count++;
      this.cartList[index].total += this.cartList[index].price;
    },
    minList (index){
      this.cartList[index].count--;
      this.cartList[index].total -= this.cartList[index].price;
      if (this.cartList[index].count === 0){
        this.cartList.splice(index, 1);
        if (this.cartList.length === 0){
          this.delList();
        }
      }
    },
    goBack (){
      console.log(1);
      window.history.go(-1);
    }
  },
  computed: {
    shopTime: function (){
      return this.shopDetail.opening_hours[0].split('/').join('-')
    },
    listCount: function (){
      var count = 0;
      for (var i = 0; i < this.cartList.length; i++){
        count += this.cartList[i].count;
      }
      return count;
    },
    totalPrice: function(){
      var sum = 0;
      for (var i = 0; i < this.cartList.length; i++){
        sum += this.cartList[i].total;
      }
      return sum;
    }
  },
  mounted () {
    var that = this;
    setTimeout(function (){
      var listNode = document.querySelectorAll('.comment')[0];
      var floorNode = document.querySelectorAll('.scroller')[0];
      listNode.addEventListener('scroll', that.onScroll);
      floorNode.addEventListener('scroll', that.toFloor);
    }, 2000)
  },
  created () {
    this.position = JSON.parse(localStorage.getItem('position'));
    this.id = this.$route.query.id;
    var that = this;
    if (sessionStorage.menuList === 1){
      that.list = JSON.parse(sessionStorage.getItem('menuList'));
      that.isTrue++;
      console.log(that.list);
    } else {
      axios.get('http://localhost:3000/detail', {
        params: {
          id: this.id
        }
      }).then(function(res){
        that.list = res.data;
        var str = JSON.stringify(that.list);
        sessionStorage.setItem('menuList', str);
        that.isTrue++;
      }).catch(function(err){
        console.log(err);
      })
    }
    if (sessionStorage.commentList === 1){
      that.commentList = JSON.parse(sessionStorage.getItem('commentList'));
      that.isTrue++;
      console.log(that.commentList);
    } else {
      axios.get('http://localhost:3000/detail/comment', {
        params: {
          id: this.id
        }
      }).then(function(res){
        that.commentList = res.data;
        var str = JSON.stringify(res.data);
        sessionStorage.setItem('commentList', str);
        that.isTrue++;
      }).catch(function(err){
        console.log(err);
      })
    }
    if (sessionStorage.shop === 1){
      console.log(that.shopDetail)
      that.shopDetail = JSON.parse(sessionStorage.getItem('shop'));
      that.isTrue++;
      console.log(that.shopDetail);
    } else {
      axios.get('http://localhost:3000/detail/shop', {
        params: {
          id: this.id,
          x: this.position.latitude,
          y: this.position.longitude
        }
      }).then(function(res){
        that.shopDetail = res.data;
        var str = JSON.stringify(res.data);
        console.log(JSON.parse(str))
        sessionStorage.setItem('shop', str);
        that.isTrue++;
      }).catch(function(err){
        console.log(err)
      })
    }
    if (localStorage.tags === 1){
      that.tags = JSON.parse(localStorage.tags)
      that.isTrue++;
      console.log(that.tags);
    } else {
      axios.get('http://localhost:3000/detail/tags', {
        params: {
          id: this.id
        }
      }).then(function(res){
        that.tags = res.data;
        var str = JSON.stringify(res.data);
        localStorage.setItem('tags', str);
        that.isTrue++;
        console.log(that.tags);
      }).catch(function(err){
        console.log(err);
      })
    }
    if (localStorage.scores === 1){
      that.scores = JSON.parse(localStorage.scores);
      that.isTrue++;
      console.log(that.scores);
    } else {
      axios.get('http://localhost:3000/detail/scores', {
        params: {
          id: this.id
        }
      }).then(function(res){
        console.log(res)
        that.scores = res.data;
        var str = JSON.stringify(res.data);
        localStorage.setItem('scores', str);
        that.isTrue++;
      }).catch(function(err){
        console.log(err);
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../static/hotcss/px2rem.scss';

#detail{
    display: flex;
    flex-direction: column;
    height: px2rem(1333.98);
    .shop-header-container{
        height: px2rem(263);
        padding-bottom: px2rem(60);
        width: 100%;
        position: relative;
        .shop-header-bg{
            position: absolute;
            width: 100%;
            height: 100%;
            background-size: cover;
            background-repeat: no-repeat;
            &::before{
                content: '';
                position: absolute;
                left: 0;
                top: 0;
                right: 0;
                bottom: 0;
                background: rgba(119,103,137,.43);
            }
        }
        .shop-header-back{
            height: px2rem(71);
            width: 100%;
            padding: px2rem(8) px2rem(20);
            a{
                display: block;
                width: px2rem(50);
                height: px2rem(50);
                position: relative;
            }
        }
        .shop-header-main{
            position: relative;
            display: flex;
            img{
                height: px2rem(130);
                width: px2rem(130);
                margin: 0 px2rem(20);
                border: 1px solid #fff;
                border-radius: 10px;
            }
            .shop-header-main-content{
                flex: 1;
                color: #fff;
                font-size: px2rem(12);
                h2{
                    font-size: px2rem(35);
                    line-height: px2rem(42);
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                .shop-header-delivery{
                    font-size: px2rem(22);
                    line-height: px2rem(50);
                    height: px2rem(50);

                    span{
                        &:after{
                            content: ' /';
                            opacity: .5;
                        }
                        &:last-child{
                            &::after{
                                content: ''
                            }
                        }
                    }
                }
                .shop-header-notice{
                    height: px2rem(40);
                    line-height: px2rem(40);
                    font-size: px2rem(23);
                }
                .arrow-right{
                    position: absolute;
                    top: 42%;
                    right: px2rem(10);
                    width: px2rem(50);
                    height: px2rem(25);
                    svg{
                        fill: #fff;
                    }
                }
            }
        }
        .shop-header-active{
            position: relative;
            width: px2rem(704);
            font-size: px2rem(20);
            color: #fff;
            margin-left: px2rem(23);
            .activity{
                height: px2rem(32px);
                line-height: px2rem(32px);
                margin-top: px2rem(20);
                i{
                    display: inline-block;
                    background: rgb(112, 188, 70);
                    height: px2rem(20);
                    width: px2rem(20);
                    text-align: center;
                    line-height: px2rem(20);
                    border: 1px solid rgb(112, 188, 70);
                    margin-right: px2rem(10);
                }
            }
            .activityCount{
                position: absolute;
                top: 0;
                right: 0;
                font-size: px2rem(22);
            }
        }
    }
    .shop-tab-container{
        width: 100%;
        height: px2rem(91);
        background: #fff;
        .shop-tab-btn{
            float: left;
            width: 50%;
            height: px2rem(90);
            line-height: px2rem(90);
            text-align: center;
            font-size: px2rem(28);
            border-bottom: px2rem(1) solid #ddd;
            span{
                &.shop-tab-select{
                    color: #3190e8;
                    position: relative; 
                    &::after{
                        content: '';
                        position: absolute;
                        height: px2rem(4);
                        width: 120%;
                        left: -10%;
                        bottom: px2rem(-10);
                        background: #3190e8;
                    }
                }
            }
        }
    }
    .menuview{
        flex: 1;
        padding-bottom: px2rem(96);
        position: relative;
        .menuview-content{
            height: px2rem(884);
            ul{
                float: left;
                height: 100%;
                width: px2rem(170);
                overflow: auto;
                background: #f8f8f8;
                li{
                  width: px2rem(170);
                  padding: px2rem(35) px2rem(15);
                  border-bottom: px2rem(1) solid #ededed;
                  line-height: px2rem(20);
                  color: #666;
                  position: relative;
                  &.selected{
                      background: #fff;
                      &::after{
                        content: '';
                        position: absolute;
                        left: 0;
                        top: 0;
                        bottom: 0;
                        width: px2rem(6);
                        background: #3190e8;
                      }
                  }
                  img{
                    margin-left: px2rem(5);
                  }
                  span{
                    font-size: px2rem(25);
                    height: px2rem(31);
                  }
                }
            }
            .scroller{
                width: px2rem(580);
                height: 100%;
                overflow: auto;
                background: #fff;
                float: left;
                dt{
                    width: 100%;
                    padding: px2rem(15) px2rem(20);
                    position: relative;
                    background: #f1f1f1;
                    line-height: px2rem(20);
                    strong{
                        width: px2rem(56);
                        height: px2rem(33);
                        line-height: px2rem(33);
                        margin-right: px2rem(10);
                        font-size: px2rem(30);
                        color: #666;
                    }
                    span{
                        font-size: px2rem(20);
                        height: px2rem(24);
                        line-height: px2rem(24);
                        color: #999;
                    }
                    a{
                        position: absolute;
                        right: 0;
                        top: 0;
                        bottom: 0;
                        width: px2rem(70);
                        background: #f1f1f1 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAUCAYAAACXtf2DAAAAAXNSR0IArs4c6QAAAFhJREFUOBFjYBgFoyEwGgKMs2bN8gQGwyxoUKQBwXZswUKuOhaQ4f///5cBGcrIyAiySBbExgLIUseExSCqCoEsSAO6/AkIg9h4TKe2OjxWjUqNhsDwCgEACvMiGUpibN4AAAAASUVORK5CYII=) 50% no-repeat;
                        background-size: 33%;
                    }
                }
                dd{
                    width: 100%;
                    height: px2rem(220);
                    padding: px2rem(30) px2rem(20);
                    display: flex;
                    border-bottom: px2rem(1) solid #ddd;
                    img{
                        height: px2rem(104);
                        width: px2rem(104);
                        margin-right: px2rem(21);
                    }
                    .foodinfo{
                        flex: 1;
                        padding-bottom: px2rem(50);
                        position: relative;
                        &.img-left{
                          margin-left: px2rem(125);
                        }
                        .title{
                            font-size: px2rem(30);
                            height: px2rem(33);
                            line-height: px2rem(33);
                            font-weight: 700;
                            color: #333;
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            max-width: px2rem(410);
                        }
                        .foodsales{
                            font-size: px2rem(22);
                            color: #333;
                            margin: px2rem(13) 0;

                        }
                        .foodprice{
                            position: absolute;
                            bottom: 0;
                            left: 0;
                            font-size: px2rem(30);
                            color: #f60;
                            font-weight: 700;
                            &::before{
                                content: "\A5";
                                font-size: px2rem(22);
                            }
                        }
                        .cartButton{
                            position: absolute;
                            bottom: px2rem(14);
                            right: px2rem(14);
                            height: px2rem(40);
                            width: px2rem(120);
                            svg{
                                fill: #3190e8;
                                &#cart-add{
                                  position: absolute;
                                  width: px2rem(40);
                                  height: px2rem(40);
                                  left: 0;
                                  top: 0;
                                }
                                &#cart-minus{
                                  position: absolute;
                                  width: px2rem(40);
                                  height: px2rem(40);
                                  right: 0;
                                  top: 0;
                                }
                            }
                            span{
                              position: absolute;
                              top: 0;
                              left: px2rem(40);
                              font-size: px2rem(24);
                              color: #666;
                              width: px2rem(40);
                              text-align: center;
                              line-height: px2rem(40);
                            }
                        }
                    }
                }
            }
        }
        .footer{
            position: absolute;
            height: px2rem(96);
            background: #3d3d3f;
            padding-left: px2rem(158);
            width: 100%;
            bottom: 0;
            display: flex;
            align-items: center;
            color: #fff;
            z-index: 1000;
            .bottomNav{
                flex: 1;
                .total{
                    height: px2rem(43);
                    line-height: px2rem(43);
                    font-size: px2rem(30);
                }
                .delivery{
                    height: px2rem(24);
                    line-height: px2rem(24);
                    font-size: px2rem(20);
                }
            }
            .paybtn{
                width: px2rem(210);
                line-height: px2rem(96);
                height: 100%;
                background: #535356;
                text-align: center;
                font-size: px2rem(30);
            }
            .shoppingCart{
                position: absolute;
                left: px2rem(25);
                bottom: px2rem(15);
                height: px2rem(100);
                width: px2rem(100);
                border: px2rem(10) solid #444;
                background: #363636;
                border-radius: 100%;
                z-index: 10000;
                transition: all 0.2s ease;
                &.list-ex{
                  background:#3190e8;
                }
                .list-count{
                  position: absolute;
                  top: px2rem(-10);
                  right: px2rem(-10);
                  background: #ff461d;
                  font-size: px2rem(20);
                  height: px2rem(28);
                  text-align: center;
                  line-height: px2rem(22);
                  width: px2rem(42);
                  padding: px2rem(4) px2rem(10);
                  color: #fff;
                  border-radius: px2rem(20);
                }
                &::before{
                    position: absolute;
                    left: 0;
                    top: 0;
                    bottom: 0;
                    right: 0;
                    background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1OCA1OCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxmaWx0ZXIgaWQ9ImEiIHdpZHRoPSIyMDAlIiBoZWlnaHQ9IjIwMCUiIHg9Ii01MCUiIHk9Ii01MCUiIGZpbHRlclVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCI+PGZlT2Zmc2V0IGluPSJTb3VyY2VBbHBoYSIgcmVzdWx0PSJzaGFkb3dPZmZzZXRPdXRlcjEiLz48ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIxLjUiIGluPSJzaGFkb3dPZmZzZXRPdXRlcjEiIHJlc3VsdD0ic2hhZG93Qmx1ck91dGVyMSIvPjxmZUNvbG9yTWF0cml4IHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4wOCAwIiBpbj0ic2hhZG93Qmx1ck91dGVyMSIgcmVzdWx0PSJzaGFkb3dNYXRyaXhPdXRlcjEiLz48ZmVNZXJnZT48ZmVNZXJnZU5vZGUgaW49InNoYWRvd01hdHJpeE91dGVyMSIvPjxmZU1lcmdlTm9kZSBpbj0iU291cmNlR3JhcGhpYyIvPjwvZmVNZXJnZT48L2ZpbHRlcj48cGF0aCBpZD0iYiIgZD0iTTcuNjE0IDQuMDUxYy0xLjA2Ni4wODYtMS40NTItLjM5OC0xLjc1Mi0xLjU4NEM1LjU2MiAxLjI4LjMzIDUuODguMzMgNS44OGwzLjcxIDE5LjQ3NmMwIC4xNDgtMS41NiA3LjUxNS0xLjU2IDcuNTE1LS40ODkgMi4xOS4yOTIgNC4yNyAzLjU2IDQuMzIgMCAwIDM2LjkxNy4wMTcgMzYuOTIuMDQ3IDEuOTc5LS4wMTIgMi45ODEtLjk5NSAzLjAxMy0zLjAzOS4wMy0yLjA0My0xLjA0NS0yLjk3OC0yLjk4Ny0yLjk5M0w4LjgzIDMxLjE5MnMuODYtMy44NjUgMS4wNzctMy44NjVjMCAwLTUuNzg4LjEyMiAzMi4wNjUtMS45NTYuNjA2LS4wMzMgMi4wMTgtLjc2NCAyLjI5OC0xLjg0OCAxLjExMy00LjMxNyA0LjAwOC0xMy4yNiA0LjQ1OC0xNS42NC45MzItNC45MjUgMi4wNjEtOC41NTgtNC4yOC03LjQwNSAwIDAtMzUuNzY4IDMuNDg3LTM2LjgzMyAzLjU3M3oiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBmaWx0ZXI9InVybCgjYSkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMgMikiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUuMDM4IDcuODA4KSI+PG1hc2sgaWQ9ImMiIGZpbGw9IiNmZmYiPjx1c2UgeGxpbms6aHJlZj0iI2IiLz48L21hc2s+PHVzZSBmaWxsPSIjRkZGIiB4bGluazpocmVmPSIjYiIvPjxwYXRoIGZpbGw9IiMyMDczQzEiIGQ9Ik01My45NjIgNy43NzRsLTUuNzAxIDE5LjMwNS00MC43OCAxLjU3NHoiIG9wYWNpdHk9Ii4xIiBtYXNrPSJ1cmwoI2MpIi8+PC9nPjxwYXRoIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLXdpZHRoPSI2IiBkPSJNOS4zNzQgMTguNzIyUzcuODY4IDExLjI4MyA3LjMyMyA4LjcxQzYuNzc4IDYuMTM2IDUuODYgNS4zMyAzLjk3OCA0LjUyIDIuMDk2IDMuNzEzLjM2NyAyLjI4Ni4zNjcgMi4yODYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxjaXJjbGUgY3g9IjQ2IiBjeT0iNTEiIHI9IjQiIGZpbGw9IiNGRkYiLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjUxIiByPSI0IiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPg==) 50% no-repeat;
                    content:'';
                    background-size: 50%;
                }
            }
        }
    }
    .pay-box{
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: px2rem(96);
      display: none;
      .pay-box-bg{
        position: absolute;
        height: 100%;
        width: 100%;
        background: #000;
        opacity: 0.5;
      }
      .pay-box-cart{
        position: absolute;
        width: 100%;
        bottom: 0;
        transition: all 0.5s ease;  
        transform: translateY(100%);
        .pay-box-header{
          height: px2rem(81);
          background: #eceff1;
          padding: px2rem(0) px2rem(25);
          color:#666;
          position: relative;
          .pay-box-cart-title{
            font-size: px2rem(34);
            padding-left: px2rem(10);
            border-left: px2rem(7) solid #3190e8;
          }
          svg{
            width: px2rem(23);
            height: px2rem(26);
          }
          a{
            color: #666;
            position: absolute;
            right: px2rem(25);
            font-size: px2rem(28);
            top:0;
            bottom: 0;
            line-height: px2rem(81);
          }
        }
        .pay-box-list{
          background: #fff;
          li{
            margin-left: px2rem(25);
            height: px2rem(109);
            padding: px2rem(15) px2rem(25) px2rem(15) 0;
            border-bottom: px2rem(1) solid #eee;
            display: flex;
            line-height: px2rem(79);
            .pay-box-list-name{
              width: 50%;
              font-size: px2rem(36);
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
            .pay-box-list-price{
              width: 25%;
              font-size: px2rem(30);
              color: #f60;
              text-align: right;
              font-weight: 700;
              &::before{
                content: "\A5";
                font-size: px2rem(20);
              }
            }
            .pay-box-list-count{
              display: flex;
              width: 25%;
              justify-content: space-around;
              align-items: center;
              svg{
                height: px2rem(40);
                width:px2rem(40);
                &#cart-minus{
                  fill: #3190e8;
                }
                &#cart-add{
                  fill:#3190e8; 
                }
              }
              .p-count{
                font-size: px2rem(26);
              }
            }
          }
        }
      }
    }
    .comment{
        height: px2rem(980);
        background: #eee;
        overflow: auto;
        .comment-header{
            width: 100%;
            height: px2rem(201);
            display: flex;
            padding: px2rem(30);
            margin-bottom: px2rem(20);
            background: #fff;
            color: #666;
            .comment-header-left{
                text-align: center;
                width: px2rem(210);
                padding-right: px2rem(30);
                border-right: px2rem(1) solid #ddd;
                strong{
                    font-size: px2rem(60);
                    font-weight: 400;
                    height: px2rem(60);
                    width: 100%;
                    line-height: px2rem(60);
                    color:#f60;

                }
                div{
                    font-size: px2rem(27);
                    height: px2rem(40);
                    line-height: px2rem(40);
                }
                p{
                    font-size: px2rem(20);
                    line-height: px2rem(30);
                    height: px2rem(30);
                }
            }
            .comment-header-right{
                width: px2rem(385);
                margin-left: px2rem(45);
                font-size: px2rem(30);
                .comment-line{
                    position: relative;
                    width: 100%;
                    height: px2rem(47);
                    padding: px2rem(10) 0;
                    .line-title{
                        position: absolute;
                        left: 0;
                        top: 0;
                        line-height: px2rem(30);
                    }
                    .line-count{
                        position: absolute;
                        right: px2rem(60);
                        top: 0;
                        font-size: px2rem(28);
                        color: #f60;
                    }
                    .wujiao{
                        position: absolute;
                        top: px2rem(10);
                        left: px2rem(150);
                        width: px2rem(110);
                        height: px2rem(20);
                        .wujiao-bg{
                          position: absolute;
                          left: 0;
                          top: 0;
                          width: 100%;
                          display: flex;
                          svg{
                            flex: none;
                            height: px2rem(20);
                            width: px2rem(21);
                            fill:#ddd;
                          }
                        }
                        .wujiao-star{
                          position: absolute;
                          left: 0;
                          top: 0;
                          display: flex;
                          overflow: hidden;
                          svg{
                            flex: none;
                            height: px2rem(20);
                            width: px2rem(21);
                            fill:#ffaa0c;
                          }
                        }
                        
                    }
                    .line-time{
                        position: absolute;
                        top: px2rem(10);
                        left: px2rem(150);
                        height: px2rem(24);
                        line-height: px2rem(24);
                        font-size: px2rem(20);
                    }
                }
            }
        }
        .comment-main{
            width: 100%;
            padding: px2rem(20) px2rem(24) px2rem(0);
            background: #fff;
            .comment-box{
                width: 100%;
                overflow: hidden;
                padding-bottom: px2rem(20);
                border-bottom: px2rem(1) solid #ddd;
                .good{
                    display: inline-block;
                    margin: px2rem(5) px2rem(10);
                    padding: px2rem(15);
                    
                    height: px2rem(62);
                    line-height: px2rem(32);
                    font-size: px2rem(26);
                    color: #6d7885;
                    background: #ebf5ff;
                    border-radius: px2rem(10);
                    &.select{
                        color: #fff;
                        background: #3190e8;
                    }
                }
                .bad{
                    display: inline-block;
                    margin: px2rem(5) px2rem(10);
                    padding: px2rem(15);
                    
                    height: px2rem(62);
                    line-height: px2rem(32);
                    font-size: px2rem(26);
                    color: #aaa;
                    background: #f5f5f5;
                    border-radius: px2rem(10);
                    &.select{
                        color: #fff;
                        background: #ccc;
                    }
                }
                
            }
            .comment-list{
                li{
                    
                    width: 100%;
                    padding: px2rem(30) 0 px2rem(30) px2rem(90);
                    position: relative;
                    color: #999;
                    img{
                      position: absolute;
                      left: 0;
                      top: px2rem(30);
                      height: px2rem(60);
                      width: px2rem(60);
                    }
                    small{
                      font-size: px2rem(22);
                      position: absolute;
                      right: 0;
                      top: px2rem(30);
                    }
                    .comment-content{
                      h3{
                        font-size: px2rem(27);
                        color: #666;
                        margin-bottom: px2rem(10);
                      }
                      .wujiao-box{
                        position: relative;
                        width: px2rem(110);
                        height: px2rem(20);
                        .wujiao{
                          display: flex;
                          position: absolute;
                          left: 0;
                          top: 0;
                          svg{
                            height: px2rem(20);
                            width: px2rem(20);
                            fill: #ffaa0c;
                          }
                        }
                        .wujiao-bg{
                          position: absolute;
                          left: 0;
                          top: 0;
                          display: flex;
                          svg{
                            height:px2rem(20);
                            width: px2rem(20);
                            fill: #ddd;
                          }
                        }
                      }
                      .comment-foods-img{
                        display: flex;
                        flex-wrap: wrap;
                        li{
                          padding: 0; 
                          margin: px2rem(10);
                          height: px2rem(147);
                          width: px2rem(142);
                          img{
                            margin-top: px2rem(-30);
                            width: 100%;
                            height: 100%;
                          }
                        }
                      }
                      .comment-foods{
                        display: flex;
                        flex-wrap: wrap;
                        li{
                          margin: px2rem(7);
                          padding: px2rem(8) px2rem(20);
                          border: px2rem(1) solid #ddd;
                          width: px2rem(118);
                          height: px2rem(42);
                          white-space: nowrap;
                          overflow: hidden;
                          text-overflow: ellipsis;
                          font-size: px2rem(24);
                          border-radius: px2rem(5);
                          line-height: px2rem(20);
                        }
                      }
                    }
                }
            }
        }
    }
  .model-container{
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: #fff;
    z-index: 1000;
    transform: translateX(100%);
    transition: all 0.5s ease;
    &.model-container-show{
      transform: translateX(0);
    }
    .model-bg{
      background: #eee;
      .model-header{
        height: px2rem(87);
        width: 100%;
        position: relative;
        text-align: center;
        background: #2196f3;
        margin-bottom: px2rem(20);
        svg{
          width: px2rem(30);
          height: px2rem(55);
          position: absolute;
          left: px2rem(25);
          top: px2rem(18);
        }
        h1{
          color: #fff;
          font-size: px2rem(40);
          line-height: px2rem(87);
          font-weight: 400;
        }
      }
      .model-section{
        background: #fff;
        padding: px2rem(30);
        width: 100%;
        padding-top: 0;
        margin-bottom: px2rem(20);
        .section-title{
          padding: px2rem(16) px2rem(30);
          margin: 0 px2rem(-30);
          border-bottom: px2rem(1) solid #eee;
          color: #333;
          font-weight: 400;
          font-size: px2rem(30);
          line-height: px2rem(40);
        }
        .model-activity{
          margin: px2rem(30) 0;
          height: px2rem(32);
          line-height: px2rem(32);
          font-size: px2rem(20);
          color: #666;
          &:last-child{
            margin: 0;
          }
          i{
            color: #fff;
            &.red{
              background: rgb(240, 115, 115);
            }
            &.new{
              background: rgb(112, 188, 70);
            }
            &.bao{
              background: rgb(153, 153, 153);
            }
          }
        }
        img{
          height: px2rem(158);
          width: px2rem(158);
          margin-top: px2rem(24);
          margin-right: px2rem(14);
        }
        p{
          font-size: px2rem(26);
          line-height: px2rem(31);
          padding: px2rem(30) 0;
          color: #666;
          border-bottom: px2rem(1) solid #ddd;
          &:last-child{
            padding-bottom: 0;
            border-bottom: 0;
          }
        }
      }
    }
  }
}


</style>