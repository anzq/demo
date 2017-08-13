import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    iszhan: '',
    position: null,
    geohash: '',
    foodlist: [],
    is_lei: false,
    is_pai: false,
    is_sai: false,
    is_zhe: false,
    order: 0,
    offset: 20,
    leiId: null,
    geterr: false,
    ishui: false,
    isLoad: 0,
    footTab: 0,
    tabzhi: 0,
    tabId: -1
  },
  mutations: {
    GET_ERR (state, info) {
      state.geterr = info
    },
    CHANGE_SHOPLIST (state, list) {
      state.foodlist = list
    },
    CHANGEZHAN (state, num) {
      state.iszhan = num
    },
    POSITION (state, obj) {
      state.position = obj
    },
    GEOHASH (state, geohash) {
      state.geohash = geohash
    },
    CHANG_HIDDEN (state, j) {
      if (j === 'is_lei') {
        state.is_pai = false
        state.is_sai = false
      } else if (j === 'is_pai') {
        state.is_lei = false
        state.is_sai = false
      } else if (j === 'is_sai') {
        state.is_lei = false
        state.is_pai = false
      }
      if (!state.is_pai && !state.is_lei && !state.is_sai) {
        state.is_zhe = true
      } else {
        state.is_zhe = false
      }
      state[j] = !state[j]
    },
    CHANG_ZHE (state) {
      state.is_lei = false
      state.is_pai = false
      state.is_sai = false
      state.is_zhe = false
    },
    CHANG_FOODSORT (state, con) {
      state.offset = con.offset
      state.order = con.order
      state.leiId = con.leiId
    },
    SCROLL_HUI (state, ding) {
      state.ishui = ding
    },
    CHANGE_FOODLOAD (state, code) {
      state.isLoad = code
    },
    FOOT_SECT (state, index) {
      state.footTab = index
      sessionStorage.setItem('footTab', JSON.stringify(index))
    },
    TAB_FOOD (state, obj) {
      state.tabId = obj.id
      state.tabzhi = obj.zhi
    }
  }
})
