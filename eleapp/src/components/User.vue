<template>
  <div id='id'>
    <header-all></header-all>
    <section>
      <div class="profile-3g0uv" @click="goLongin()">
        <span class="profile-1gjgY">
          <svg viewBox="0 0 122 122" id="avatar-default" width="100%" height="100%"><path fill="#DCDCDC" fill-rule="evenodd" d="M61 121.5c33.413 0 60.5-27.087 60.5-60.5S94.413.5 61 .5.5 27.587.5 61s27.087 60.5 60.5 60.5zm12.526-45.806c-.019 3.316-.108 6.052.237 9.825 3.286 8.749 18.816 9.407 28.468 17.891-1.833 1.998-6.768 6.788-15 10.848-7.02 3.463-16.838 6.416-24.831 6.416-17.366 0-32.764-7.149-42.919-17.264 9.713-8.407 25.49-9.173 28.769-17.891.345-3.773.258-6.509.24-9.825l-.004-.002c-1.903-.985-5.438-7.268-6.01-12.571-1.492-.12-3.843-1.561-4.534-7.247-.37-3.053 1.107-4.77 2.004-5.31-5.046-19.212 1.507-33.16 20.749-34.406 5.753 0 10.18 1.52 11.909 4.523 15.35 2.702 11.756 22.658 9.328 29.882.899.54 2.376 2.258 2.004 5.31-.689 5.687-3.042 7.127-4.534 7.248-.575 5.305-3.25 10.82-5.873 12.57l-.003.003zM61 120.5C28.14 120.5 1.5 93.86 1.5 61S28.14 1.5 61 1.5s59.5 26.64 59.5 59.5-26.64 59.5-59.5 59.5z"></path></svg>
        </span>
        <div class="profile-xfCcC">
          <p class="profile-1_mtk">{{ userInfo.id }}</p>
          <p class="profile-1UP72">
            <svg fill="#fff"><svg viewBox="0 0 655 1024" id="mobile" width="100%" height="100%"><path d="M0 122.501v778.998C0 968.946 55.189 1024 123.268 1024h408.824c68.52 0 123.268-54.846 123.268-122.501V122.501C655.36 55.054 600.171 0 532.092 0H123.268C54.748 0 0 54.846 0 122.501zM327.68 942.08c-22.622 0-40.96-18.338-40.96-40.96s18.338-40.96 40.96-40.96 40.96 18.338 40.96 40.96-18.338 40.96-40.96 40.96zM81.92 163.84h491.52V819.2H81.92V163.84z"></path></svg></svg>
            <span>{{ userInfo.phone }}</span>
          </p>
        </div>
        <span class="profile-2XuMq">
          <svg fill="#fff"><svg viewBox="0 0 1024 1024" id="arrow-right" class="icon" width="100%" height="100%"><path d="M716.298 417.341l-.01.01L307.702 7.23l-94.295 94.649 408.591 410.117-408.591 410.137 94.295 94.639 502.891-504.76z" class="selected"></path></svg></svg>
        </span>
      </div>
    </section>
    <div class="index-1G7HV_0">
      <router-link to="path" class="index-1ryAh_0">
        <p>
          <svg fill="#ff5f3e"><svg viewBox="0 0 48 48" id="luckybag" width="100%" height="100%"><path fill-rule="evenodd" d="M24 0C10.7 0 0 10.7 0 24s10.7 24 24 24 24-10.7 24-24S37.3 0 24 0zm7.6 15H16.4c.1.1.1.2.1.4.4 2.5 3.3 4.3 7.1 4.4 2.4 0 4.8-.6 6.1-1.6.4-.3 1.1-.3 1.4.2.3.5.3 1.1-.2 1.4-1.6 1.3-4.3 2.1-7.1 2.1h-.5c-3.9-.2-7-2-8.3-4.6V32c0 .5.7 1 1.4 1h15.2c.8 0 1.4-.5 1.4-1V16c0-.5-.7-1-1.4-1zM35 32c0 1.7-1.5 3-3.4 3H16.4c-1.9 0-3.4-1.3-3.4-3V16c0-1.4 1-2.5 2.5-2.9h.2c.1-.1.3-.1.4-.1h15.5c1.9 0 3.4 1.3 3.4 3v16z"></path></svg></svg>
        </p>
        <p class="index-3S6cZ_0">优惠</p>
      </router-link>
      <router-link to="path" class="index-1ryAh_0">
        <p>
          <svg fill="#6ac20b"><svg viewBox="0 0 48 48" id="profile-coins" width="100%" height="100%"><path fill-rule="evenodd" d="M24 0C10.7 0 0 10.7 0 24s10.7 24 24 24 24-10.7 24-24S37.3 0 24 0zm-9 26.8v3.3c0 1.2 3.6 2.9 9 2.9s9-1.7 9-2.9v-3.3c-2.1 1.3-5.6 1.9-9 1.9-3.4.1-6.9-.6-9-1.9zM24 15c-5.8 0-9 1.8-9 2.8 0 1 3.2 2.8 9 2.8s9-1.8 9-2.8c0-1-3.2-2.8-9-2.8zm-9 5.6V24c0 .9 3.2 2.8 9 2.8s9-1.8 9-2.8v-3.4c-2.1 1.3-5.6 1.9-9 1.9-3.4 0-6.9-.6-9-1.9zM35 24v6.1c0 3.2-5.5 4.9-11 4.9s-11-1.7-11-4.9V17.8c0-3.1 5.5-4.8 11-4.8s11 1.6 11 4.8V24z"></path></svg></svg>
        </p>
        <p class="index-3S6cZ_0">积分</p>
      </router-link>
    </div>
    <section class="profile-1reTe">
      <router-link to="path" class="index-2MEEn_0">
        <aside class="index-161Mm_0">
          <svg fill="#4aa5f0">
            <svg viewBox="0 0 40 40" id="order" width="100%" height="100%"><path d="M31.5 3h-23C6 3 4 5.1 4 7.7v24.7C4 34.9 6 37 8.5 37h23c2.5 0 4.5-2.1 4.5-4.7V7.7C36 5.1 34 3 31.5 3zM11.8 28.2c-1.1 0-2-.9-2-2.1 0-1.1.9-2.1 2-2.1s2 .9 2 2.1c0 1.2-.9 2.1-2 2.1zm0-6.1c-1.1 0-2-.9-2-2.1 0-1.1.9-2.1 2-2.1s2 .9 2 2.1c0 1.1-.9 2.1-2 2.1zm0-6.2c-1.1 0-2-.9-2-2.1 0-1.1.9-2.1 2-2.1s2 .9 2 2.1c0 1.2-.9 2.1-2 2.1zm5.1 11.9h13.5v-2.6H16.9v2.6zm0-6.5h13.5v-2.6H16.9v2.6zm0-6.6h13.5v-2.6H16.9v2.6z"></path></svg>
          </svg>
        </aside>
        <div class="index-yydpu_0">
          我的订单
          <span class="index-3Z8It_0">
            <svg viewBox="0 0 1024 1024" id="arrow-right" class="icon" width="100%" height="100%"><path d="M716.298 417.341l-.01.01L307.702 7.23l-94.295 94.649 408.591 410.117-408.591 410.137 94.295 94.639 502.891-504.76z" class="selected"></path></svg>
          </span>
        </div>
      </router-link>
      <router-link to="path" class="index-2MEEn_0">
        <aside class="index-161Mm_0">
          <svg fill="#fc7b53">
            <svg viewBox="0 0 40 40" id="point" width="100%" height="100%"><path d="M34.6 7.1c0-1.1-1-2.1-2.1-2.1h-24c-1.1 0-2 1-2.1 2.1l-1.6 25C4.6 34.3 6.3 36 8.5 36h24c2.2 0 3.9-1.7 3.7-3.9l-1.6-25zm-5.9 6.1c-.2 4.6-3.7 8.2-8.3 8.2-4.6 0-8.2-3.7-8.4-8.3-.3-.2-.5-.6-.5-1 0-.7.6-1.2 1.3-1.2s1.3.6 1.3 1.2c0 .5-.3.9-.7 1.1.2 3.8 3.2 6.8 7.1 6.8 3.9 0 6.8-3.1 7-6.9-.4-.2-.6-.6-.6-1.1 0-.7.6-1.2 1.3-1.2s1.3.6 1.3 1.2c-.2.6-.4 1-.8 1.2z"></path></svg>
          </svg>
        </aside>
        <div class="index-yydpu_0">
          积分商城
          <span class="index-3Z8It_0">
            <svg viewBox="0 0 1024 1024" id="arrow-right" class="icon" width="100%" height="100%"><path d="M716.298 417.341l-.01.01L307.702 7.23l-94.295 94.649 408.591 410.117-408.591 410.137 94.295 94.639 502.891-504.76z" class="selected"></path></svg>
          </span>
        </div>
      </router-link>
      <router-link to="path" class="index-2MEEn_0">
        <aside class="index-161Mm_0">
          <svg fill="#ffc636">
            <svg viewBox="0 0 40 40" id="vip" width="100%" height="100%"><path d="M7 33.4c0 1.1.9 1.6 2 1.6h22c1.1 0 2-.5 2-1.6V31H7v2.4z"></path><path d="M32.1 14.3c-.6 2.3-2.6 4-5.1 4-2.9 0-5.3-2.3-5.3-5.2v-.2c-.5.2-1 .3-1.6.3-.6 0-1.1-.1-1.7-.3v.2c0 2.9-2.4 5.2-5.3 5.2-2.5 0-4.6-1.7-5.1-4.1-.5.4-1.2.6-1.8.6-.3 0-.5.1-.8 0L7.2 29h26l1.7-14.2c-.3.1-.5.1-.8.1-.8 0-1.5-.2-2-.6z" class="st0"></path><ellipse cx="20.1" cy="8.2" rx="3.2" ry="3.2"></ellipse><ellipse cx="6.4" cy="10.5" rx="2.4" ry="2.4"></ellipse><ellipse cx="33.8" cy="10.5" rx="2.4" ry="2.4"></ellipse></svg>
          </svg>
        </aside>
        <div class="index-yydpu_0">
          饿了么会员卡
          <span class="index-3Z8It_0">
            <svg viewBox="0 0 1024 1024" id="arrow-right" class="icon" width="100%" height="100%"><path d="M716.298 417.341l-.01.01L307.702 7.23l-94.295 94.649 408.591 410.117-408.591 410.137 94.295 94.639 502.891-504.76z" class="selected"></path></svg>
          </span>
        </div>
      </router-link>
    </section>
    <section class="profile-1reTe">
      <router-link to="path" class="index-2MEEn_0">
        <aside class="index-161Mm_0">
          <svg fill="#4aa5f0">
            <svg viewBox="0 0 40 40" id="service" width="100%" height="100%"><g id="service_XMLID_1_"><path id="service_XMLID_6_" d="M32.2 9.5c-.2-.7-.1-.7-.4-.9-1.7-1.2-5.3.2-6.7 1.9-.8-3.8-3.8-6.1-4.7-5.9-.9-.2-4 2.1-4.8 5.9-1.3-1.7-5-3.1-6.7-1.9-.1.1-.5.6-.5.7C5.4 20.7 15 24.6 19 25.7v8.7c0 .7.3 1.2 1 1.2s1-.5 1-1.2v-8.6c4-1 14.2-4.8 11.2-16.3z"></path><path id="service_XMLID_7_" d="M6 25c-.9 0-1.6.7-1.6 1.5.1.8.7 1.5 1.6 1.5 3.1 0 6.5 1.5 8.5 3.7.3.3.7.6 1.1.6.4 0 .7-.1 1-.4.6-.6.6-1.6.1-2.3C14.1 26.8 10 25 6 25z"></path><path id="service_XMLID_8_" d="M34.6 25c-4 0-8.1 1.9-10.7 4.6-.6.6-.5 1.6.1 2.2.3.3.7.4 1 .4.4 0 .8-.3 1.1-.6 2-2.1 5.3-3.7 8.4-3.7h.1c.8 0 1.5-.7 1.5-1.5 0-.7-.7-1.4-1.5-1.4z"></path></g><path d="M0 0h40v40H0z" class="st1"></path></svg>
          </svg>
        </aside>
        <div class="index-yydpu_0">
          服务中心
          <span class="index-3Z8It_0">
            <svg viewBox="0 0 1024 1024" id="arrow-right" class="icon" width="100%" height="100%"><path d="M716.298 417.341l-.01.01L307.702 7.23l-94.295 94.649 408.591 410.117-408.591 410.137 94.295 94.639 502.891-504.76z" class="selected"></path></svg>
          </span>
        </div>
      </router-link>
      <router-link to="path" class="index-2MEEn_0">
        <aside class="index-161Mm_0">
          <svg fill="#3cabff">
            <svg viewBox="0 0 40 40" id="download" width="100%" height="100%"><path d="M30 5H10c-2.8 0-5 2.2-5 5v20c0 2.8 2.2 5 5 5h20c2.8 0 5-2.2 5-5V10c0-2.8-2.2-5-5-5zm-3.9 22.7c-.1.2-.3.4-.6.5-4.3 2.8-10.1 1.6-13-2.8-2.8-4.3-1.6-10.2 2.8-13 4.3-2.8 10.2-1.6 13 2.8.2.2.3.5.4.8.1.2 0 .5-.2.7l-8.8 5.7c-.2.2-.6.1-.7-.2l-.5-.7c-.4-.6-.2-1.5.4-1.9l5.6-3.6c.2-.2.3-.5.2-.7l-.1-.1c-2.2-1.8-5.4-2.1-7.9-.4-3.1 2-4 6.1-2 9.2 2 3.1 6.1 4 9.2 2 .6-.4 1.3-.2 1.7.4l.3.7c.1.2.4.5.2.6zm3.1-4.4l-.9.6c-.2.2-.6.1-.7-.2L26.5 22c-.2-.2-.1-.6.2-.7l1.8-1.1c.2-.2.6-.1.7.2l.6.9c.3.6.1 1.5-.6 2z"></path></svg>
          </svg>
        </aside>
        <div class="index-yydpu_0">
          下载饿了么APP
          <span class="index-3Z8It_0">
            <svg viewBox="0 0 1024 1024" id="arrow-right" class="icon" width="100%" height="100%"><path d="M716.298 417.341l-.01.01L307.702 7.23l-94.295 94.649 408.591 410.117-408.591 410.137 94.295 94.639 502.891-504.76z" class="selected"></path></svg>
          </span>
        </div>
      </router-link>
    </section>
    <footer-all></footer-all>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'
  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'
  export default {
    name: 'name',
    data () {
      return {
        userInfo: {
          id: '登录/注册',
          phone: '登录后享受更多特权'
        }
      }
    },
    created () {
      this.sectClick(3)
      //  获取sessionStorage中用户信息
      if (sessionStorage.getItem('userInfo')) {
        this.userInfo = JSON.parse(sessionStorage.getItem('userInfo'))
      }
    },
    components: {
      'header-all': Header,
      'footer-all': Footer
    },
    methods: {
      goLongin () {
        if (!sessionStorage.getItem('userInfo')) {
          this.$router.push({ path: '/longin' })
        } else {
          this.$router.push('/account?top_title=账户信息')
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
  .profile-3g0uv {
    display: flex;
    background-image: linear-gradient(90deg,#0af,#0085ff);
    padding: px2rem(50) px2rem(30);
    color: #fff;
    align-items: center;
  }
  .profile-1gjgY {
    font-size: px2rem(120);
    line-height: px2rem(120);
    border-radius: 50%;
    background: #fff;
    display: inline-block;
    vertical-align: middle;
  }
  .profile-1gjgY, .profile-1gjgY svg {
    width: px2rem(120);
    height: px2rem(120);
  }
  .profile-xfCcC {
    margin-left: px2rem(36);
    flex-grow: 1;
  }
  .profile-1_mtk {
    font-size: px2rem(44);
    margin-bottom: px2rem(16);
  }
  .profile-xfCcC p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .profile-1UP72 {
    display: flex;
    align-items: center;
    font-size: px2rem(28);
  }
  .profile-1UP72 svg {
    margin-right: px2rem(5);
    width: px2rem(32);
    height: px2rem(32);
  }
  .profile-2XuMq svg {
    width: px2rem(20);
    height: px2rem(42);
  }
  .index-1G7HV_0 {
    display: table;
    width: 100%;
    height: px2rem(168);
    border-bottom: 1px solid #ddd;
    background-color: #fff;
  }
  .index-1ryAh_0 {
    display: table-cell;
    width: 33.3333%;
    vertical-align: middle;
    text-align: center;
  }
  .index-1ryAh_0:not(:last-child) {
    border-right: 1px solid #ddd;
  }
  .index-1G7HV_0 svg {
    width: px2rem(52);
    height: px2rem(52);
  }
  .index-3S6cZ_0 {
    margin-top: px2rem(10);
    font-size: px2rem(24);
    line-height: px2rem(28);
    font-weight: 500;
    color: #666;
  }
  .profile-1reTe {
    margin-top: px2rem(20);
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    font-size: px2rem(34);
    line-height: px2rem(34);
    background: #fff;
  }
  .index-2MEEn_0 {
    display: flex;
    align-items: center;
    padding-left: px2rem(50);
    color: inherit;
  }
  .index-161Mm_0 {
    margin-left: px2rem(-20);
    margin-right: px2rem(20);
  }
  .index-161Mm_0 svg {
    width: px2rem(36);
    height: px2rem(36);
  }
  .index-yydpu_0 {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: px2rem(25) px2rem(20) px2rem(25) 0;
  }
  .index-2MEEn_0:not(:last-child) .index-yydpu_0 {
    border-bottom: 1px solid #ddd;
  }
  .index-3Z8It_0 svg {
    width: px2rem(20);
    height: px2rem(20);
    fill: #bbb;
  }
</style>