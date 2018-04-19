import Vue from 'vue'
import Vuex from 'vuex'
import table from './modules/table'
import products from './modules/products'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    table,
    products
  },
  strict: debug
})