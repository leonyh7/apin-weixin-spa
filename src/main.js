// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import Mock from 'mockjs'
import App from './App'
import router from './router/index'
import { LoadingPlugin } from 'vux'

Vue.use(LoadingPlugin)
Vue.use(VueRouter)

Mock.mock('/api/getOrderList', {
  "orderList|200": [
    {
      "orderId": "@string('0123456789', 6)",
      "time": "@datetime('yyyy-MM-dd HH:mm')",
      "start": "@region",
      "end": "@region",
      "number": "@integer(60,100)",
      "status": "@integer(1,3)"
    }
  ]
})

Mock.mock('/api/getOrderDetail', {
  "zone": "@integer(0,1)",
  "group": "@integer(0,1)",
  "people": "@natural(0,1)",
  "startTime": "@now('day', 'yyyy-MM-dd')",
  "endTime": "@now('day', 'yyyy-MM-dd')",
  "travelAgencyCity": "@region",
  "travelAgencyName": "@word",
  "startCity": "@region",
  "endCity": "@region",
  "days": "@natural(0,100)",
  "number": "@natural(50,100)",
  "child": "@natural(0,50)",
})

Mock.mock('/api/suuply', {
  "number": "@integer(1,100)",
  "price": "@integer(1,10000)"
})

FastClick.attach(document.body)

Vue.config.productionTip = false

if (navigator.userAgent.toLowerCase().indexOf('windowswechat') > -1) {
  setTimeout(function () {
    window.addEventListener("popstate", function (e) {
      if (location.hash == '#/list') {
        window.history.pushState(null, null, '#/list')
      }
    });
  }, 1500);
}

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
