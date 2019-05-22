import Vue from 'vue'
import Router from 'vue-router'
// 数据可视
import DataVisualization from '@/view/DataVisualization/DataVisualization'
import DataVisualizationGlobal from '@/view/DataVisualization/Global'
import DataVisualizationPersonal from '@/view/DataVisualization/Personal'
import SystemAccess from '@/view/SystemAccess'
// 策略管理
import TacticalManagement from '@/view/TacticalManagement/TacticalManagement'
import TacticalManagementGroup from '@/view/TacticalManagement/Group'
import TacticalManagementPartner from '@/view/TacticalManagement/Partner'
import TacticalManagementSetting from '@/view/TacticalManagement/Setting'
import TacticalManagementSchedule from '@/view/TacticalManagement/Schedule'
// 告警管理
import AlarmManagement from '@/view/AlarmManagement/AlarmManagement'
import AlarmManagementMy from '@/view/AlarmManagement/My'
import AlarmManagementAll from '@/view/AlarmManagement/All'
import OperationLog from '@/view/OperationLog'
import PlatformManagement from '@/view/PlatformManagement'

Vue.use(Router)


const router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: '/DataVisualization/Global',
    },
    {
      path: '/DataVisualization',
      name: 'DataVisualization',
      component: DataVisualization,
      redirect: '/DataVisualization/Global',
      children: [
        {
          path: 'Global',
          name: 'D1',
          component: DataVisualizationGlobal
        },
        {
          path: 'Personal',
          name: 'D2',
          component: DataVisualizationPersonal
        },
      ]
    },
    {
      path: '/SystemAccess',
      name: 'SystemAccess',
      component: SystemAccess
    },
    {
      path: '/TacticalManagement',
      name: 'TacticalManagement',
      component: TacticalManagement,
      redirect: '/TacticalManagement/Group',
      children: [
        {
          path: 'Group',
          name: 'T1',
          component: TacticalManagementGroup
        },
        {
          path: 'Partner',
          name: 'T2',
          component: TacticalManagementPartner
        },
        {
          path: 'Setting',
          name: 'T3',
          component: TacticalManagementSetting
        },
        {
          path: 'Schedule',
          name: 'T4',
          component: TacticalManagementSchedule
        },
      ]
    },
    {
      path: '/AlarmManagement',
      name: 'AlarmManagement',
      component: AlarmManagement,
      redirect: '/AlarmManagement/My',
      children: [
        {
          path: 'My',
          name: 'A1',
          component: AlarmManagementMy
        },
        {
          path: 'All',
          name: 'A2',
          component: AlarmManagementAll
        },
      ]
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
    {
      path: '/PlatformManagement',
      name: 'PlatformManagement',
      component: PlatformManagement
    },
  ]
})

router.beforeEach((to, from, next) => {



  next()
})

export default router
