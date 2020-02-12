import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'echarts/lib/chart/map'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/visualMap'
import 'echarts/map/js/china'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
