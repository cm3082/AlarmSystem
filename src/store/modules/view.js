/**
 * @define 页面视图数据
 */

const state = {
  pages: [  // 页面
    {
      enName: 'DataVisualization',
      zhName: '数据可视',
      categories: [
        {zh: '全局统计', en: 'D1'},
        {zh: '个人统计', en: 'D2'},
      ]
    },
    {
      enName: 'SystemAccess',
      zhName: '系统接入',
      categories: []
    },
    {
      enName: 'TacticalManagement',
      zhName: '策略管理',
      categories: [
        {zh: '策略组管理', en: 'T1'},
        {zh: '成员管理', en: 'T2'},
        {zh: '策略配置', en: 'T3'},
        {zh: '排班管理', en: 'T4'}
      ]
    },
    {
      enName: 'AlarmManagement',
      zhName: '告警管理',
      categories: [
        {zh: '我的告警', en: 'A1'},
        {zh: '所有告警', en: 'A2'},
      ]
    },
    {
      enName: 'OperationLog',
      zhName: '操作日志',
      categories: []
    },
    {
      enName: 'PlatformManagement',
      zhName: '平台管理',
      categories: [
        {zh: '用户权限管理', en: 'P1'},
      ]
    },
  ],
  navmemuIndex: sessionStorage.getItem('navmemuIndex'),
  categoryIndex: sessionStorage.getItem('categoryIndex'),
}

const setStorage = (key, value) => {
  if (typeof (value) === 'object') {
    value = JSON.stringify(value)
  }
  sessionStorage.setItem(key, value)
}

/**
 * @define 用户模型行为
 */

const mutations = {
  navmemuIndex: (state, data) => {
    state.navmemuIndex = data;
    setStorage('navmemuIndex', data)
  },
  categoryIndex: (state, data) => {
    state.categoryIndex = data;
    setStorage('categoryIndex', data)
  },
};


export default {state, mutations};
