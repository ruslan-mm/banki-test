import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const cartCatalogs = [
  { id: 0, title: '«Рождение Венеры»', painter: 'Сандро Боттичелли', oldPrice: 2000000, price: 1000000, img: '../img/img-1.png' },
  { id: 1, title: '«Тайная вечеря»', painter: 'Леонардо да Винчи', price: 3000000, img: '../img/img-2.png' },
  { id: 2, title: '«Сотворение Адама»', painter: 'Микеланджело', oldPrice: 6000000, price: 5000000, img: '../img/img-3.png' },
  { id: 3, title: '«Урок анатомии»', painter: 'Рембрандт', img: '../img/img-4.png', isSold: true },
];

export default new Vuex.Store({
  state: {
    searchString: '',
    bucket: JSON.parse(localStorage.getItem('bucket'))
  },
  getters: {
    carts(state) {
      return cartCatalogs
        .filter(el => el.title.includes(state.searchString) || el.painter.includes(state.searchString))
        .map(el => ({ ...el, inBucket: state.bucket.includes(el.id) }))
    }
  },
  mutations: {
    handleChangeSearchInput(state, string) {
      state.searchString = string
    },
    addToBucket(state, payload) {
      state.bucket.push(payload.id)
      localStorage.setItem('bucket', JSON.stringify(state.bucket))
    },
    deleteFromBucket(state, payload) {
      state.bucket = state.bucket.filter(el => el !== payload.id)
      localStorage.setItem('bucket', JSON.stringify(state.bucket))
    }
  },
})
