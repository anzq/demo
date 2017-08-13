<template>
  <header class="ElemeHeader-root">
    <div class="ElemeHeader-wrapper ElemeHeader-fixed ElemeHeader-gradientBg" style="z-index: 8844;" @click="goBack()">
      <div class="ElemeHeader-left">
        <svg viewBox="0 0 20 32" id="arrow-left.6f6409e" width="100%" height="100%">
          <path fill="#fff" d="M16.552 5.633L14.508 3.59 2.243 15.853 14.508 28.41l2.044-2.043-10.22-10.513z"></path>
        </svg>
      </div>
      <h1 class="ElemeHeader-center">{{ title }}</h1>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'name',
    data () {
      return {
        titlt: ''
      }
    },
    created () {
      this.title = this.$route.query.top_title
      // console.log(this.$route.query)
    },
    methods: {
      goBack () {
        window.history.go(-1)
      }
    }
  }

</script>

<style scoped lang="scss">
  @import '../../static/hotcss/px2rem.scss';
  .ElemeHeader-root {
    height: px2rem(88);
  }
  .ElemeHeader-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: px2rem(88);
    color: #fff;
    font-size: px2rem(36);
    background: #2395ff;
  }
  .ElemeHeader-gradientBg {
    background-image: linear-gradient(90deg,#0af,#0085ff);
  }
  .ElemeHeader-wrapper.ElemeHeader-fixed {
    position: fixed;
    top: 0;
    left: 0;
  }
  .ElemeHeader-left {
    display: flex;
    align-items: center;
    justify-content: center;
    width: px2rem(88);
    height: px2rem(88);
  }
  .ElemeHeader-left svg {
    display: block;
    width: px2rem(44);
    height: px2rem(44);
  }
  .ElemeHeader-center {
    position: absolute;
    top: 0;
    left: 50%;
    height: px2rem(88);
    max-width: 50%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 700;
    font-size: px2rem(36);
    line-height: px2rem(88);
    transform: translateX(-50%);
  }

</style>