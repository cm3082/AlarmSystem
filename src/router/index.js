import Vue from 'vue'
import Router from 'vue-router'
import DataVisualization from '@/view/DataVisualization'
import SystemAccess from '@/view/SystemAccess'
import TacticalManagement from '@/view/TacticalManagement'
import AlarmManagement from '@/view/AlarmManagement'
import OperationLog from '@/view/OperationLog'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'DataVisualization',
      component: DataVisualization
    },
    {
      path: '/SystemAccess',
      name: 'SystemAccess',
      component: SystemAccess
    },
    {
      path: '/TacticalManagement',
      name: 'TacticalManagement',
      component: TacticalManagement
    },
    {
      path: '/AlarmManagement',
      name: 'AlarmManagement',
      component: AlarmManagement
    },
    {
      path: '/OperationLog',
      name: 'OperationLog',
      component: OperationLog
    },
  ]
})
