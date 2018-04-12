import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import VueLocalStorage from 'vue-localstorage'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

Vue.use(VueMaterial)
Vue.use(VueLocalStorage)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
