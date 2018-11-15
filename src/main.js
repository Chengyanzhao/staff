import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './assets/scss/base.scss'

Vue.config.productionTip = false
Vue.use(MintUI)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
