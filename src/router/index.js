import Vue from 'vue'
import Router from 'vue-router'
import DataVisualization from '@/view/DataVisualization'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'DataVisualization',
      component: DataVisualization
    }
  ]
})
