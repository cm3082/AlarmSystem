/**
 * @define 用户模型数据
 */

const state = {
  userId: '',               // 当前用户标识
  nickname: '',             // 当前用户您称
  avatar: '',               // 当前用户头像
  email: '',                // 当前用户邮箱
  phone: '',                // 用户联系方式
  created: +new Date()      // 用户创建时间
}


/**
 * @define 用户模型行为
 */

const mutations = {
  login: (state, data) => {
    localStorage.token = data;
    state.userId = data;
  },
  logout: (state) => {
    localStorage.removeItem('token');
    state.token = null
  },
};


export default {state, mutations};
