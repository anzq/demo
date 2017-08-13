<template>
  <div style="position: fixed; top: 0px; z-index: 1000; width: 100%;">
    <header-all></header-all>
    <div class="filter">
      <div class="filter-header">
        <a href="javascript:;" class="filter-nav" :class="is_lei ? 'active' : ''" @click="hide('is_lei')">
              <span>{{ lei_info }}</span>
              <svg data-v-98a11d7e="" viewBox="0 0 72 32"><path data-v-98a11d7e="" d="M36 32l36-32h-72z"></path></svg>
            </a>
        <a href="javascript:;" class="filter-nav" :class="is_pai ? 'active' : ''" @click="hide('is_pai')">
              <span>{{ sort_info }}</span>
              <svg data-v-98a11d7e="" viewBox="0 0 72 32"><path data-v-98a11d7e="" d="M36 32l36-32h-72z"></path></svg>
            </a>
        <a href="javascript:;" class="filter-nav" :class="is_sai ? 'active' : ''" @click="hide('is_sai')">
              <span>筛选</span>
              <svg data-v-98a11d7e="" viewBox="0 0 72 32"><path data-v-98a11d7e="" d="M36 32l36-32h-72z"></path></svg>
            </a>
      </div>
      <div class="filter-extend filter-category" :class="is_lei ? 'open' : ''">
        <div v-if="loading" class="loading">正在加载...</div>
        <div v-else class='filter-scroller'>
          <ul>
            <li :key="index" v-for="(item, index) in list" :class="index === isshow ? 'active' : ''" @click="fenlei(index)">
              <span>{{ item.name }}</span>
              <span class="count">{{ item.count }}</span>
            </li>
          </ul>
          <ul>
            <li v-if="list_lei.length > 0" :key="index1" v-for="(item1, index1) in list_lei" @click="leiShop(item1.id,item1.name)">
              <img :src="'//fuss10.elemecdn.com/'+item1.image_url+'?imageMogr/format/webp/thumbnail/!80x80r/gravity/Center/crop/80x80/'"
                alt="">
              <span>{{ item1.name }}</span>
              <span class="count">{{ item1.count }}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="filter-extend filter-sort" :class="is_pai ? 'open' : ''">
        <ul>
          <li :class="isSort === 0 ? 'active' : ''" @click="shopSort(0, 0, 0, '智能排序')">
            <svg viewBox="0 0 33 32" id="default" width="100%" height="100%"><path fill="#3b87c8" d="M13.374 29.064a.94.94 0 0 1-.941-.941V6.476l-7.285 6.899a.942.942 0 0 1-1.299-1.364l8.876-8.424a.94.94 0 0 1 1.59.681v23.855a.94.94 0 0 1-.941.941zM20.904 29.355h-.008a.94.94 0 0 1-.375-.078.943.943 0 0 1-.559-.86V3.944a.94.94 0 1 1 1.882 0v22.287l7.238-6.842a.94.94 0 0 1 1.289 1.366l-8.818 8.338a.943.943 0 0 1-.649.264z"></path></svg>
            <span>智能排序</span>
            <svg class="selected"><svg viewBox="0 0 38 32" id="selected" width="100%" height="100%"><path fill="#3190e8" d="M32.291 2.327c.582-.582 1.455-.582 2.036 0l2.036 2.036c.582.582.582 1.455 0 2.036L13.818 29.09c-.582.582-1.455.582-2.036 0L1.455 18.908c-.582-.582-.582-1.455 0-2.036l2.036-2.036c.582-.582 1.455-.582 2.036 0l7.273 7.273L32.291 2.327z"></path></svg></svg>
          </li>
          <li :class="isSort === 1 ? 'active' : ''" @click="shopSort(1, 0, 5, '距离最近')">
            <svg viewBox="0 0 32 32" id="distance" width="100%" height="100%"><path fill="#2a9bd3" d="M15.884 31.236l-.042.001a.888.888 0 0 1-.59-.224l-7.91-7.91a7.548 7.548 0 0 1-.498-.471 12.752 12.752 0 0 1-3.747-9.045C3.097 6.523 8.824.796 15.888.796s12.791 5.727 12.791 12.791c0 3.532-1.432 6.73-3.747 9.045-.196.196-.409.391-.613.578l-7.813 7.804a.886.886 0 0 1-.589.223l-.035-.001zm0-28.667C9.818 2.59 4.908 7.513 4.908 13.582c0 3.023 1.218 5.762 3.19 7.752l.461.435 7.316 7.316 7.2-7.2q.284-.249.551-.516a10.977 10.977 0 0 0 3.225-7.787c0-6.066-4.905-10.987-10.965-11.013z"></path><path fill="#2a9bd3" d="M15.884 18.524a5.707 5.707 0 0 1-4.07-1.732l-.001-.001a5.76 5.76 0 1 1 4.119 1.734h-.05zm-2.817-2.942a3.982 3.982 0 1 0 0-5.626c-.726.717-1.175 1.713-1.175 2.813s.449 2.096 1.175 2.813z"></path></svg>
            <span>距离最近</span>
            <svg class="selected"><svg viewBox="0 0 38 32" id="selected" width="100%" height="100%"><path fill="#3190e8" d="M32.291 2.327c.582-.582 1.455-.582 2.036 0l2.036 2.036c.582.582.582 1.455 0 2.036L13.818 29.09c-.582.582-1.455.582-2.036 0L1.455 18.908c-.582-.582-.582-1.455 0-2.036l2.036-2.036c.582-.582 1.455-.582 2.036 0l7.273 7.273L32.291 2.327z"></path></svg></svg>
          </li>
          <li :class="isSort === 2 ? 'active' : ''" @click="shopSort(2, 0, 6, '销量最高')">
            <svg viewBox="0 0 23 32" id="hot" width="100%" height="100%"><path fill="#f07373" d="M9.859 29.375c-3.489-.771-6.362-3.097-7.187-5.551-.882-2.623-1.029-6.873-.238-9.318l-1.727.037.001.002.001.004.004.01.011.029.038.091c.039.09.086.191.142.3.155.304.349.627.586.955a7.477 7.477 0 0 0 2.711 2.318c.583.153.583.153 1.087-.188.187-.263.187-.263.224-.39.028-.094.041-.176.05-.28.01-.109.016-.238.022-.47.063-2.219.162-3.38.562-4.943a10.05 10.05 0 0 1 .814-2.185c1.433-2.723 4.843-6.053 6.699-7.021l-1.325-.962c-.064.382-.127.992-.131 1.722-.008 1.252.169 2.393.616 3.329.261.547.525.968 1.132 1.862l.23.339c.86 1.281 1.161 1.986 1.069 2.653l-.009.125c.069.517.069.517.781.906.451-.026.451-.026.578-.104.144-.093.144-.093.19-.136.041-.037.079-.077.123-.125.068-.076.153-.178.245-.295.22-.279.458-.615.677-.963.648-1.028 1.045-1.988 1.037-2.845l-.914.009-.706.581c.295.358.809 1.075 1.33 1.936.826 1.363 1.492 2.791 1.898 4.209 1.1 3.845.3 9.288-2.245 11.75a9.652 9.652 0 0 1-1.659 1.29 10.232 10.232 0 0 1-3.471 1.332c-.794.151-1.385.191-2.064.191h-.009a2.75 2.75 0 0 1-.373-.03 6.007 6.007 0 0 1-.585-.115 7.765 7.765 0 0 1-.536-.15l-.578 1.735a9.182 9.182 0 0 0 1.445.341c.221.031.43.048.627.048h.009a12.546 12.546 0 0 0 2.407-.224 12.011 12.011 0 0 0 4.088-1.572c.699-.431 1.358-.94 1.971-1.533 3.098-2.998 4-9.132 2.731-13.567-.455-1.591-1.188-3.161-2.092-4.653-.569-.939-1.134-1.727-1.482-2.15l-1.645-1.998.024 2.588c.004.412-.281 1.1-.756 1.853a9.64 9.64 0 0 1-.569.809 4.528 4.528 0 0 1-.158.195c.028-.027.028-.027.16-.113.122-.075.122-.075.57-.101.71.388.71.388.778.902h-.914l.906.125c.174-1.262-.261-2.281-1.362-3.922l-.235-.347c-.554-.817-.787-1.189-.995-1.624-.306-.642-.444-1.53-.438-2.53a10.566 10.566 0 0 1 .107-1.431L14.44.304l-1.628.85c-2.18 1.138-5.862 4.733-7.471 7.791a11.873 11.873 0 0 0-.967 2.583 19.2 19.2 0 0 0-.511 3.147c-.036.423-.061.839-.079 1.273-.011.281-.019.531-.029.924-.005.191-.01.298-.015.354a.403.403 0 0 1 .019-.077c.027-.099.027-.099.203-.346.492-.332.492-.332 1.112-.157a5.745 5.745 0 0 1-2.54-2.496 3.456 3.456 0 0 1-.093-.197l-.018-.044-.002-.006v.001l.001.002v.002l-.915-2.473-.812 2.51c-.917 2.836-.757 7.485.245 10.463 1.042 3.099 4.442 5.852 8.526 6.754l.395-1.785z"></path></svg>
            <span>销量最高</span>
            <svg class="selected"><svg viewBox="0 0 38 32" id="selected" width="100%" height="100%"><path fill="#3190e8" d="M32.291 2.327c.582-.582 1.455-.582 2.036 0l2.036 2.036c.582.582.582 1.455 0 2.036L13.818 29.09c-.582.582-1.455.582-2.036 0L1.455 18.908c-.582-.582-.582-1.455 0-2.036l2.036-2.036c.582-.582 1.455-.582 2.036 0l7.273 7.273L32.291 2.327z"></path></svg></svg>
          </li>
          <li :class="isSort === 3 ? 'active' : ''" @click="shopSort(3, 0, 1, '起送价最低')">
            <svg viewBox="0 0 32 32" id="price" width="100%" height="100%"><path fill="#e6b61a" d="M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16zm0-2C8.268 30 2 23.732 2 16S8.268 2 16 2s14 6.268 14 14-6.268 14-14 14z"></path><path fill="#e6b61a" d="M23.14 6.06l-5.12 8.65h4.48v1.54h-5.49v2.43h5.49v1.54h-5.49v5.1h-2.02v-5.1H9.53v-1.54h5.46v-2.43H9.53v-1.54h4.45L8.8 6.06h2.24l4.99 8.48 4.93-8.48h2.18z"></path></svg>
            <span>起送价最低</span>
            <svg class="selected"><svg viewBox="0 0 38 32" id="selected" width="100%" height="100%"><path fill="#3190e8" d="M32.291 2.327c.582-.582 1.455-.582 2.036 0l2.036 2.036c.582.582.582 1.455 0 2.036L13.818 29.09c-.582.582-1.455.582-2.036 0L1.455 18.908c-.582-.582-.582-1.455 0-2.036l2.036-2.036c.582-.582 1.455-.582 2.036 0l7.273 7.273L32.291 2.327z"></path></svg></svg>
          </li>
          <li :class="isSort === 4 ? 'active' : ''" @click="shopSort(4, 0, 2, '配送速度最快')">
            <svg viewBox="0 0 32 32" id="speed" width="100%" height="100%"><path fill="#37c7b7" d="M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16zm0-2C8.268 30 2 23.732 2 16S8.268 2 16 2s14 6.268 14 14-6.268 14-14 14z"></path><path fill="#37c7b7" d="M15 7v11.002l5.678 4.882 1.304-1.517-5.33-4.583.348.758V6.999h-2z"></path></svg>
            <span>配送速度最快</span>
            <svg class="selected"><svg viewBox="0 0 38 32" id="selected" width="100%" height="100%"><path fill="#3190e8" d="M32.291 2.327c.582-.582 1.455-.582 2.036 0l2.036 2.036c.582.582.582 1.455 0 2.036L13.818 29.09c-.582.582-1.455.582-2.036 0L1.455 18.908c-.582-.582-.582-1.455 0-2.036l2.036-2.036c.582-.582 1.455-.582 2.036 0l7.273 7.273L32.291 2.327z"></path></svg></svg>
          </li>
          <li :class="isSort === 5 ? 'active' : ''" @click="shopSort(5, 0, 3, '评分最高')">
            <svg viewBox="0 0 33 32" id="rating" width="100%" height="100%"><path fill="#eba53b" d="M27.087 31.84L16.8 25.553 6.504 31.84l2.824-11.727-9.186-7.878 12.019-.941L16.801.16l4.631 11.134 12.019.941-9.158 7.849zM16.8 23.369l7.407 4.527-2.014-8.471 6.588-5.647-8.659-.696L16.8 5.063l-3.341 8.019-8.659.696 6.588 5.647-2.014 8.471z"></path></svg>
            <span>评分最高</span>
            <svg class="selected"><svg viewBox="0 0 38 32" id="selected" width="100%" height="100%"><path fill="#3190e8" d="M32.291 2.327c.582-.582 1.455-.582 2.036 0l2.036 2.036c.582.582.582 1.455 0 2.036L13.818 29.09c-.582.582-1.455.582-2.036 0L1.455 18.908c-.582-.582-.582-1.455 0-2.036l2.036-2.036c.582-.582 1.455-.582 2.036 0l7.273 7.273L32.291 2.327z"></path></svg></svg>
          </li>
        </ul>
      </div>
      <div class="filter-extend filter-more" :class="is_sai ? 'open' : ''">
        <div v-if="loading_sai" class="loading">加载中...</div>
        <div v-else class="filter-scroller">
          <dl>
            <dt>配送方式</dt>
          </dl>
          <dl class="chaxun">
            <dt>商家属性 (可多选)</dt>
            <dd :key="index2" v-for="(item2, index2) in list_sai" data='0' :class="{selected:sect[index2]}" @click="saiSect(index2)">
              <svg class="selected-icon">
                <svg viewBox="0 0 38 32" id="selected" width="100%" height="100%"><path fill="#3190e8" d="M32.291 2.327c.582-.582 1.455-.582 2.036 0l2.036 2.036c.582.582.582 1.455 0 2.036L13.818 29.09c-.582.582-1.455.582-2.036 0L1.455 18.908c-.582-.582-.582-1.455 0-2.036l2.036-2.036c.582-.582 1.455-.582 2.036 0l7.273 7.273L32.291 2.327z"></path></svg>
              </svg>
              <i :style="'color: #'+ item2.icon_color +';'">{{ item2.icon_name }}</i>
              <span>{{ item2.name }}</span>
            </dd>
          </dl>
        </div>
        <div class="filter-btn">
          <a href="javascript:;">清空</a>
          <a href="javascript:;">确定</a>
        </div>
      </div>
      <div class="filter-modal" :class="is_zhe ? 'open' : ''" @click="changzhe()" @touchmove.prevent></div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import axios from 'axios'
  import $ from 'jquery'
  import { mapState, mapMutations } from 'vuex'
  import Header from '@/components/Header.vue'
  export default {
    name: 'name',
    data () {
      return {
        list: [],
        isshow: 0,
        list_lei: [],
        loading: true,
        isSort: -1,
        list_sai: [],
        loading_sai: true,
        sect: [],
        isd: false,
        sort_info: '排序',
        lei_info: '分类'
      }
    },
    components: {
      'header-all': Header
    },
    methods: {
      hide (condition) {
        var that = this
        if (!this.is_zhe) {
          $('body').css({'overflow': 'hidden'})
        } else {
          $('body').css({'overflow': 'initial'})
        }
        if (condition === 'is_lei') {
          axios.get('http://localhost:3000/foodfind', {
            params: {
              latitude: that.position.latitude,
              longitude: that.position.longitude
            }
          }).then(function (res) {
            if (res.status === 200 & res.statusText === 'OK') {
              that.list = res.data
              that.loading = false
            }
          }).catch(function (err) {
            console.log(err)
            that.loading = true
          })
          that.hidden('is_lei')
        } else if (condition === 'is_pai') {
          this.hidden('is_pai')
        } else if (condition === 'is_sai') {
          axios.get('http://localhost:3000/foodsai', {
            params: {
              latitude: that.position.latitude,
              longitude: that.position.longitude
            }
          }).then(function (res) {
            if (res.status === 200 & res.statusText === 'OK') {
              console.log(res)
              for (var i = 0; i < res.data.length; i++) {
                if (that.sect.length !== res.data.length) {
                  that.sect.push(false)
                }
              }
              console.log(that.sect)
              that.list_sai = res.data
              that.loading_sai = false
            }
          }).catch(function (err) {
            console.log(err)
            that.loading_sai = true
          })
          this.hidden('is_sai')
        }
      },
      leiShop (id, info) {
        if (!this.is_zhe) {
          $('body').css({'overflow': 'hidden'})
        } else {
          $('body').css({'overflow': ''})
        }
        var that = this
        this.lei_info = info
        this.foodsort({offset: 0, order: null, leiId: id})
        this.hidden('is_lei')
        axios.get('http://localhost:3000/foodlei', {
          params: {
            offset: that.offset,
            id: that.leiId,
            latitude: that.position.latitude,
            longitude: that.position.longitude
          }
        }).then(function (res) {
          if (res.status === 200 & res.statusText === 'OK') {
            that.foodlist(res.data)
            that.foodLoad(2)
            that.foodsort({offset: that.offset + 20, order: null, leiId: id})
          }
        }).catch(function (err) {
          console.log(err)
        })
      },
      shopSort (sort, offset, order, info) {
        if (!this.is_zhe) {
          $('body').css({'overflow': 'hidden'})
        } else {
          $('body').css({'overflow': ''})
        }
        var that = this
        this.sort_info = info
        this.isSort = sort
        this.foodsort({offset: offset, order: order, leiId: null})
        this.hidden('is_pai')
        axios.get('http://localhost:3000/foodfilter', {
          params: {
            offset: that.offset,
            order: that.order,
            latitude: that.position.latitude,
            longitude: that.position.longitude
          }
        }).then(function (res) {
          if (res.status === 200 & res.statusText === 'OK') {
            console.log('==============================')
            that.foodlist(res.data)
            that.foodLoad(1)
            that.foodsort({offset: that.offset + 20, order: order, leiId: null})
          }
        }).catch(function (err) {
          console.log(err)
        })
      },
      saiSect (index) {
        Vue.set(this.sect, index, !this.sect[index])
        console.log(this.sect)
        // this.isd = !this.isd
      },
      fenlei (index) {
        if (index === 0) {
          this.isshow = index
          this.hidden('is_lei')
          if (!this.is_zhe) {
            $('body').css({'overflow': 'hidden'})
          } else {
            $('body').css({'overflow': ''})
          }
        } else {
          this.isshow = index
          this.list_lei = this.list[index].sub_categories
        }
      },
      ...mapMutations({
        hidden: 'CHANG_HIDDEN',
        changzhe: 'CHANG_ZHE',
        foodsort: 'CHANG_FOODSORT',
        foodlist: 'CHANGE_SHOPLIST',
        foodLoad: 'CHANGE_FOODLOAD'
      })
    },
    computed: {
      ...mapState(['is_lei', 'is_zhe', 'is_pai', 'is_sai', 'order', 'offset', 'leiId', 'isLoad', 'position'])
    }
  }

</script>

<style scoped lang="scss">
  @import '../../static/hotcss/px2rem.scss';
  .filter {
    position: relative;
    border-bottom: 1px solid #ddd;
    height: px2rem(79);
    line-height: px2rem(79);
    z-index: 100;
  }

  .filter-header {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    display: flex;
    z-index: 3;
    background-color: #fff;
  }

  .filter-nav {
    flex: 1;
    text-align: center;
    color: #666;
    position: relative;
    font-size: px2rem(26);
  }

  .filter-nav.active {
    color: #3190e8;
  }

  .filter-nav.active>svg {
    fill: currentColor;
    transform: rotate(180deg);
  }

  .filter-nav>svg {
    width: px2rem(18);
    height: px2rem(8);
    margin-bottom: px2rem(4);
    fill: #999;
    will-change: transform;
    -webkit-transition: all .3s;
    transition: all .3s;
  }

  .filter-modal {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 1;
    background: rgba(0, 0, 0, .2);
    visibility: hidden;
    opacity: 0;
    transition: all .3s ease-in-out;
  }

  .filter-modal.open {
    opacity: 1;
    visibility: visible;
  }
  .filter-category {
    z-index: 200;
    padding-bottom: 0;
    color: #666;
  }

  .filter-extend {
    left: 0;
    right: 0;
    top: 100%;
    border-top: 1px solid #ddd;
    position: absolute;
    max-height: 0;
    background-color: #fff;
    transition: all .2s ease-in-out;
    visibility: hidden;
    overflow: auto;
    opacity: 0;
    z-index: 3;
  }

  .filter-extend.open {
    opacity: 1;
    visibility: visible;
    max-height: 1000%;
  }

  .filter-category {
    height: 1000%;
  }

  .filter-category .loading {
    align-items: center;
    justify-content: center;
    color: #999;
  }

  .filter-category .filter-scroller,
  .filter-category .loading {
    display: flex;
    height: 100%;
  }

  .filter-category ul {
    flex: 3;
    list-style: none;
    font-size: px2rem(24);
    margin: 0;
    padding: 0;
    overflow: auto;
  }

  .filter-category li {
    position: relative;
    line-height: px2rem(90);
  }

  .filter-category li.active {
    background-color: #fff;
  }

  .filter-category ul:first-child li {
    padding: 0 px2rem(10) 0 px2rem(20);
  }

  .filter-category ul:first-child {
    background-color: #fafafa;
    flex: 2;
  }

  .filter-category ul:nth-of-type(2) {
    float: right;
    margin-left: px2rem(30);
    padding-right: px2rem(10);
  }

  .filter-category ul:nth-of-type(2) img {
    margin-right: px2rem(15);
    width: px2rem(50);
    height: px2rem(50);
    vertical-align: middle;
  }

  .filter-category .count {
    position: absolute;
    right: px2rem(20);
    line-height: px2rem(28);
    top: 50%;
    margin-top: px2rem(-14);
    border-radius: px2rem(20);
    border: .013333rem solid #eee;
    background-color: #fff;
    padding: 0 px2rem(10);
    font-size: px2rem(22);
  }

  .filter-extend {
    left: 0;
    right: 0;
    top: 100%;
    border-top: 1px solid #ddd;
    position: absolute;
    max-height: 0;
    background-color: #fff;
    transition: all .2s ease-in-out;
    visibility: hidden;
    overflow: auto;
    opacity: 0;
    z-index: 3;
  }

  .filter-sort {
    padding-bottom: 0;
  }

  .filter-extend.open {
    opacity: 1;
    visibility: visible;
    max-height: 1000%;
  }

  .filter-sort li {
    position: relative;
    height: px2rem(99);
    padding-left: px2rem(30);
    line-height: px2rem(99);
  }
  .filter-sort li span{
    font-size: px2rem(24);
  }
  .filter-sort li:not(:last-child):after {
    position: absolute;
    content: "";
    bottom: 0;
    left: px2rem(80);
    right: 0;
    height: 1px;
    background-color: #ddd;
  }
  .filter-sort svg {
    width: px2rem(30);
    height: px2rem(30);
    margin-right: px2rem(20);
    vertical-align: middle;
  }

  .filter-sort .selected {
    position: absolute;
    right: 0;
    top: 50%;
    display: none;
    transform: translateY(-50%);
  }

  .filter-sort li.active {
    color: #0089dc;
  }

  .filter-sort li.active .selected {
    display: block;
  }

  .filter-extend.filter-more {
    padding-bottom: px2rem(110);
  }
  .filter-extend.open {
    opacity: 1;
    visibility: visible;
    max-height: 1000%;
  }
  .loading {
    display: flex;
    align-items: center;
    justify-content: center;
    height: px2rem(240);
    color: #999;
    font-size: px2rem(24);
  }
  .filter-btn {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    border-top: 1px solid #eee;
    background-color: #fafafa;
    padding: 0 px2rem(10);
    height: px2rem(110);
    display: flex;
    align-items: center;
  }
  .filter-btn a {
    font-size: px2rem(36);
    line-height: px2rem(82);
    border-radius: px2rem(6);
    text-align: center;
    text-decoration: none;
    flex: 1;
  }
  .filter-btn a:first-child {
    background-color: #fff;
    border: 1px solid #ddd;
    margin-right: px2ren(20);
    color: #333;
  }
  .filter-btn a:last-child {
    color: #fff;
    background-color: #56d176;
    border: 1px solid #56d176;
  }
  .filter-scroller {
    overflow: auto;
    height: 100%;
    line-height: normal;
    font-size: px2rem(24);
  }
  .filter-scroller dl {
    margin: px2rem(20) 0;
    padding: 0 px2rem(30);
    overflow: hidden;
  }

  .filter-scroller dt {
    margin-bottom: px2rem(15);
    color: #666;
  }

  .filter-scroller dd {
    margin: 0;
    float: left;
    width: 30%;
    margin-right: 2%;
    border: 1px solid #ddd;
    padding: px2rem(13) 0;
    height: px2rem(70);
    margin-bottom: px2rem(15);
    border-radius: px2rem(5);
    box-sizing: border-box;
  }
  .filter-scroller dd.selected {
    border-color: #a2d2ff;
    color: #3190e8;
    background-color: #edf5ff;
  }
  .filter-scroller .fengniao, .filter-scroller .selected-icon {
    display: none;
    margin: 0 px2rem(10) 0 px2rem(15);
    width: px2rem(25);
    height: px2rem(25);
    vertical-align: middle;
  }

  .filter-scroller dd.selected .selected-icon {
    display: inline-block;
  }
  .filter-scroller dd.selected .fengniao, .filter-scroller dd.selected i {
    display: none;
  }
  .filter-scroller i {
    display: inline-block;
    vertical-align: middle;
    font-style: normal;
    border-width: 1px;
    margin-right: px2rem(10);
    margin-left: px2rem(15);
    border-style: solid;
    width: px2rem(38);
    height: px2rem(38);
    line-height: px2rem(38);
    text-align: center;
    border-radius: px2rem(6);
    font-size: px2rem(24);
    box-sizing: border-box;
  }
  .filter-scroller span {
    vertical-align: middle;
  }
</style>