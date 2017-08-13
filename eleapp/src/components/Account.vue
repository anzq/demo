<template>
  <div>
    <header-all></header-all>
    <div>
      <ul class="main-22cQX">
        <li class="main-3Idiu main-2OSrE">
          <span>头像</span>
          <span class="main-nwHdE">
            <input type="file" class="main-1mfZE">
            <img class="main-27dMr">
            <svg class="main-1kNSK">
              <svg viewBox="0 0 547 987" id="arrow" width="100%" height="100%"><path fill="#999" fill-rule="evenodd" d="M0 931.973l51.2 54.613 494.933-494.933L51.2.133 0 51.333l440.32 440.32L0 931.973z"></path></svg>
            </svg>
          </span>
        </li>
        <li class="main-3Idiu">
          <span>用户名</span>
           <span class="main-2cJz_">{{ userInfo.id }}</span> 
        </li>
      </ul>
      <h2 class="main-1OkSR">账号绑定</h2>
      <ul class="main-22cQX">
        <li class="main-3Idiu">
          <span>
            <i class="main-2X7GQ">
              <svg class="main-oBMZZ">
                <svg viewBox="0 0 512 512" id="mobile" width="100%" height="100%"><path d="M368 0H144c-26.4 0-48 21.6-48 48v416c0 26.4 21.6 48 48 48h224c26.4 0 48-21.6 48-48V48c0-26.4-21.6-48-48-48zM192 24h128v16H192V24zm64 456c-17.673 0-32-14.327-32-32s14.327-32 32-32 32 14.327 32 32-14.327 32-32 32zm128-96H128V64h256v320z"></path></svg>
              </svg>
            </i>
            手机
          </span>
          <span>
             <span class="main-2cJz_">{{ userInfo.phone }}</span> 
            <svg class="main-1kNSK">
              <svg viewBox="0 0 547 987" id="arrow" width="100%" height="100%"><path fill="#999" fill-rule="evenodd" d="M0 931.973l51.2 54.613 494.933-494.933L51.2.133 0 51.333l440.32 440.32L0 931.973z"></path></svg>
            </svg>
          </span>
        </li>
      </ul>
      <h2 class="main-1OkSR">安全设置</h2>
      <ul class="main-22cQX">
        <li class="main-3Idiu">
          <span>登录密码</span>
          <span class="main-2cJz_">
            <span>未设置</span>
            <svg class="main-1kNSK">
              <svg viewBox="0 0 547 987" id="arrow" width="100%" height="100%"><path fill="#999" fill-rule="evenodd" d="M0 931.973l51.2 54.613 494.933-494.933L51.2.133 0 51.333l440.32 440.32L0 931.973z"></path></svg>
            </svg>
          </span>
        </li>
      </ul>
      <button type="button" class="main-aGw6s" @click='outLogin()'>退出登录</button>
    </div>
  </div>
</template>

<script>
  import Header from '@/components/Header.vue'
  export default {
    name: 'name',
    data () {
      return {
        userInfo: null
      }
    },
    created () {
      //  获取localStorage中用户信息
      if (sessionStorage.getItem('userInfo')) {
        console.log(JSON.parse(sessionStorage.getItem('userInfo')))
        this.userInfo = JSON.parse(sessionStorage.getItem('userInfo'))
      } else {
        this.$router.push('/longin')
      }
    },
    components: {
      'header-all': Header
    },
    methods: {
      outLogin () {
        sessionStorage.removeItem('userInfo')
        this.$router.push('/user?top_title=我的')
      }
    }
  }

</script>

<style scoped lang="scss">
  @import '../../static/hotcss/px2rem.scss';
  .main-22cQX {
    background-color: #fff;
    width: 100%;
    font-size: px2rem(32);
    color: #333;
    margin-top: px2rem(30);
    font-weight: 700;
  }
  .main-3Idiu {
    border-top: 1px solid #ddd;
    padding: px2rem(30) px2rem(28);
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .main-2OSrE {
    position: relative;
  }
  .main-nwHdE {
    display: flex;
    align-items: center;
  }
  button, input {
    outline: none;
    border: none;
    font-size: inherit;
    font-family: inherit;
  }
  .main-1mfZE {
    display: block;
    position: absolute;
    opacity: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .main-27dMr {
    height: px2rem(90);
    width: px2rem(90);
    border-radius: px2rem(45);
  }
  .main-1kNSK {
    fill: #ddd;
    height: px2rem(36);
    width: px2rem(36);
    display: inline-block;
    line-height: px2rem(90);
    padding-top: px2rem(9.9);
  }
  .main-oBMZZ {
    fill: #fff;
    height: px2rem(30);
    width: px2rem(32);
  }
  .main-3Idiu:last-child {
    border-bottom: 1px solid #ddd;
  }
  .main-2cJz_ {
    color: #999;
  }
  .main-1OkSR {
    margin: px2rem(26) 0 0 px2rem(30);
    color: #666;
    font-weight: 400;
    font-size: px2rem(36);
  }
  .main-2X7GQ {
    background-color: #10aeff;
    padding: px2rem(4);
    border-radius: px2rem(8);
    margin-right: px2rem(10);
  }
  .main-aGw6s {
    display: block;
    text-align: center;
    padding: px2rem(22) 0;
    margin: px2rem(37.5) auto;
    color: #fff;
    border-radius: px2rem(6);
    font-size: px2rem(34);
    font-weight: 800;
    background-color: #ff5339;
    width: 90%;
  }
</style>