/**
 * @define 页面视图数据
 */

const state = {
  title: {enName: 'DataVisualization', zhName: '数据可视'},               // 页面title
  categoryIndex: 0,
}


/**
 * @define 用户模型行为
 */

const mutations = {
  changeTitle: (state, data) => {
    state.title = data;
  },
  categoryIndex: (state, data) => {
    state.categoryIndex = data;
  },
};


export default {state, mutations};
