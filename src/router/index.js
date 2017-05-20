import Vue from 'vue'
import Router from 'vue-router'
import OrderList from '@/components/OrderList'
import OrderDetail from '@/components/OrderDetail'
import Issue from '@/components/Issue'
import PutNeed from '@/components/PutNeed'
import SupplyQuo from '@/components/SupplyQuo'

Vue.use(Router)

var router = new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      redirect: {name: 'OrderList'}
    },
    {
      path: '/list',
      name: 'OrderList',
      component: OrderList
    },
    {
      path: '/detail',
      name: 'OrderDetail',
      component: OrderDetail
    },
    {
      path: '/issue',
      name: 'Issue',
      component: Issue
    },
    {
      path: '/need',
      name: 'PutNeed',
      component: PutNeed
    },
    {
      path: '/supply',
      name: 'SupplyQuo',
      component: SupplyQuo
    }
  ]
})

router.afterEach(function (route) {
  let title = ""
  switch (route.name) {
    case 'OrderList': title = '订单列表';break;
    case 'OrderDetail': title = '订单详情';break;
    case 'PutNeed': title = '发布需求';break;
    case 'SupplyQuo': title = '供应商报价';break;
  }
  document.title = title
})

export default router
