
/**
 * @define 页面视图数据
 */

const state = {
  title: '',               // 页面title

}


/**
 * @define 用户模型行为
 */

const mutations = {
  changeTitle: (state, data) => {
    state.title = data;
  },
};


export default {state, mutations};
