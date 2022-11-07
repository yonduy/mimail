import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
//import env from './../src/env'
//mock开关
const mock = true;
if(mock){
  require('./mock/api')
}
//根据前端的跨域方式做调整
//axios.defaults.baseURL = 'https://mock.mengxuegu.com/mock/634c2897369a770d74bbf291/api';
axios.defaults.baseURL = '/api'
axios.defaults.timeout = 8000;
//根据环境变量 
//axios.defaults.baseURL = env.baseURL;
//接口错误拦截
axios.interceptors.response.use(function(response){
  let res = response.data;//接口的值
  if(res.status == 0){
    return res.data
  }else if(res.status == 10){
    window.location.href = '/#/login';
  }else{
    alert(res.msg);
  }


});

Vue.use(VueAxios,axios);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
  