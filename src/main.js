import Vue from 'vue'
//import App from './App.vue'
import Home from './components/Home.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BImg } from 'bootstrap-vue'
import { ImagePlugin } from 'bootstrap-vue'
import { CarouselPlugin } from 'bootstrap-vue'
import {BCarouselSlide } from 'bootstrap-vue'
import { BCarousel } from 'bootstrap-vue'
Vue.component('b-carousel', BCarousel)
Vue.component('b-carousel-slide', BCarouselSlide)
Vue.use(ImagePlugin)
Vue.component('b-img', BImg)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(CarouselPlugin)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(Home)
}).$mount('#app')
