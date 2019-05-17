import axios from 'axios';
import store from '../store/index'
import router from '../router/index'


// axios 配置
axios.defaults.timeout = 5000
axios.defaults.baseURL = 'http://localhost:8777'

// http request 拦截器
axios.interceptors.request.use(
  request => {
    request.headers.get['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
    request.headers.post['Content-Type'] = 'application/json;charset=utf-8';
    if (store.state.token) {
      request.headers.Authorization = `token ${store.state.token}`
    }
    return request
  },
  err => {
    return Promise.reject(err)
  },
)

// http response 拦截器
axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 401 清除token信息并跳转到登录页面
          store.commit(types.LOGOUT)

          // 只有在当前路由不是登录页面才跳转
          router.currentRoute.path !== 'login' &&
          router.replace({
            path: 'login',
            query: {redirect: router.currentRoute.path},
          })
      }
    }
    return Promise.reject(error.response.data)
  },
)

export default axios
