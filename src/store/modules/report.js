/**
 * @define 报告数据模型数据
 */

const state = {
  dataview: '',
}


/**
 * @define 报告模型行为
 */

const mutations = {
  setDataview: (state, data) => {
    state.dataview = JSON.parse(data);
  },
};


export default {state, mutations};
