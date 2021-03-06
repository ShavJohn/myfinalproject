// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './scss/main.scss'
import titleMixin from './mixin/index'
import i18n from './i18n'

require('./plugins');
Vue.config.productionTip = false
Vue.mixin(titleMixin)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  i18n,
  template: '<App/>'
})

