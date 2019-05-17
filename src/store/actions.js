import axios from '../http/config';
import api from '../http/api';
import qs from 'qs'

export default {

  getChessData ({commit}, data) {

    return new Promise((resolve, reject) => {
      axios.get(api.getChessData, qs.stringify(data)).then(res => {
        resolve(res)
      })
    })
  },

  setChessData ({commit}, data) {

    return new Promise((resolve, reject) => {
      axios.post(api.setChessData, data).then(res => {


        commit('login', '123');

        resolve(res)
      })
    })
  },
}

