import './registerServiceWorker'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import Element from 'element-ui'
import router from './router'
import store from './store/index'
import Vue from 'vue'

Vue.use(Element)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
